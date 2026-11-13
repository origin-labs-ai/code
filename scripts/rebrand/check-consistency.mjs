/**
 * Consistency check: registry <-> layouts <-> launcher HTML <-> folders.
 *
 * Fails (exit 1) when the launcher, the in-app layout registry or the part
 * registry drift from each other.
 *
 * Usage: node scripts/rebrand/check-consistency.mjs
 */
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const root = join(import.meta.dirname, "..", "..");
const registry = JSON.parse(readFileSync(join(root, "arch", "windows.json"), "utf8"));
const layouts = JSON.parse(readFileSync(join(root, "arch", "layouts.json"), "utf8"));
const html = readFileSync(join(root, "launcher", "index.html"), "utf8");
const launcherJson = JSON.parse(readFileSync(join(root, "launcher", "window.json"), "utf8"));

const checks = [];
const check = (label, ok, detail) => checks.push({ label, ok, detail });

const htmlTitle = /<title>(.*?)<\/title>/.exec(html)?.[1];
const cardNames = [...html.matchAll(/<span class="name">([^<]+)<\/span>/g)].map((m) => m[1]);
const partNames = registry.parts.map((part) => part.codename);
const ladder = registry.naming.ladder;
const resolveKeys = Object.keys(registry.aliasResolve);

// ---- launcher: two choices only -------------------------------------------
const choices = registry.launcher.choices ?? [];
check(
  "launcher window title",
  registry.launcher.windowTitle === "Launcher" && htmlTitle === "Launcher",
  `registry=${registry.launcher.windowTitle} html=${htmlTitle}`,
);
check(
  "launcher manifest matches registry choices",
  JSON.stringify(launcherJson.choices) === JSON.stringify(choices),
  `window.json=${JSON.stringify(launcherJson.choices)}`,
);
check("launcher offers exactly two choices", choices.length === 2, choices.join(" / "));
check("card count equals choice count", cardNames.length === choices.length, `${cardNames.length} vs ${choices.length}`);
check("cards list the launcher choices", JSON.stringify(cardNames) === JSON.stringify(choices), cardNames.join(", "));

// ---- in-app layouts -------------------------------------------------------
const layoutParts = layouts.layouts.map((l) => l.part);
const missingLayoutParts = layoutParts.filter((p) => !partNames.includes(p));
check("every layout points at a real part", missingLayoutParts.length === 0, missingLayoutParts.join(", ") || "none");
const uncoveredParts = partNames.filter((p) => !layoutParts.includes(p));
check("every part has a layout", uncoveredParts.length === 0, uncoveredParts.join(", ") || "none");
const nums = layouts.layouts.map((l) => l.n);
const uniqueNums = new Set(nums);
check("layout numbering is contiguous from 1", nums.every((n, i) => n === i + 1) && uniqueNums.size === nums.length, nums.join(","));
const aliasLayouts = layouts.layouts.filter((l) => l.alias !== null);
const badAliasLayouts = aliasLayouts.filter((l) => registry.aliasResolve[l.alias] !== l.part);
check("every alias layout's alias resolves to its part", badAliasLayouts.length === 0, badAliasLayouts.map((l) => l.alias).join(", ") || "none");

// ---- aliases --------------------------------------------------------------
check(
  "alias resolve keys equal the ladder",
  JSON.stringify(ladder) === JSON.stringify(resolveKeys),
  `${ladder.join(" -> ")} | ${resolveKeys.join(" -> ")}`,
);
check(
  "every assigned alias is on the ladder",
  registry.parts.every((part) => part.alias === null || ladder.includes(part.alias)),
  registry.parts.filter((part) => part.alias && !ladder.includes(part.alias)).map((part) => part.codename).join(", ") || "none",
);

// ---- folders --------------------------------------------------------------
const missingFolders = registry.parts.filter((part) => !existsSync(join(root, part.folder))).map((part) => part.folder);
check("every part folder exists", missingFolders.length === 0, missingFolders.join(", ") || "none");
check(
  "every alias points at a real part",
  Object.values(registry.aliasResolve).every((codename) => partNames.includes(codename)),
  Object.entries(registry.aliasResolve).map(([alias, codename]) => `${alias}->${codename}`).join(", "),
);

let failed = 0;
for (const { label, ok, detail } of checks) {
  console.log(`${ok ? "PASS" : "FAIL"}  ${label}${detail ? `  (${detail})` : ""}`);
  if (!ok) failed += 1;
}
console.log(`\n${checks.length - failed}/${checks.length} checks passed`);
process.exitCode = failed === 0 ? 0 : 1;
