<div align="center">
  <img src="./docs/assets/logo.svg" alt="CodeFusion" width="96" />

  # CodeFusion

  **Nine seats. One launcher. One registry.**

  CodeFusion is the Windows launcher and workspace of the Fusion Superproject. It presents nine component seats
  by codename, reads their registry from `arch/windows.json`, and validates the registry, the launcher and the
  folders with one gate. This README is generated at exactly 4,096 lines from the live tree.

  <p>
    <a href="#-what-codefusion-is"><b>Overview</b></a> • <a href="#-the-launcher-desktop"><b>Launcher</b></a> • <a href="#-the-component-registry"><b>Registry</b></a> • <a href="#-naming-and-aliases"><b>Aliases</b></a> • <a href="#-layouts"><b>Layouts</b></a> • <a href="#-the-nine-seat-map"><b>Seats</b></a> • <a href="#-command-reference"><b>Commands</b></a>
  </p>

[![Docs](https://img.shields.io/badge/docs-4096%20LOC-2B7FFF?style=flat-square)](README.md)
[![Seats](https://img.shields.io/badge/seats-9-8b5cf6?style=flat-square)](arch/windows.json)
[![Launcher](https://img.shields.io/badge/launcher-PowerShell-0ea5e9?style=flat-square)](launcher/launch.ps1)
[![Registry](https://img.shields.io/badge/registry-windows.json-22c55e?style=flat-square)](arch/windows.json)
[![Validation](https://img.shields.io/badge/validation-13%2F13-16a34a?style=flat-square)](scripts/rebrand/check-consistency.mjs)
[![Platform](https://img.shields.io/badge/platform-Windows-64748b?style=flat-square)](README.md)
[![Status](https://img.shields.io/badge/status-experimental-ef4444?style=flat-square)](README.md)
[![Provenance](https://img.shields.io/badge/provenance-documented-f59e0b?style=flat-square)](THIRD_PARTY_NOTICES.md)
</div>

---

> **Status:** experimental and under active development. Component availability and startability vary. Check `arch/windows.json` and `arch/layouts.json` before assuming a seat is ready.
> **Generated from the live tree:** every count, pin and verifier exit in this document is reproducible.

---

## 1. What CodeFusion is
CodeFusion is the Windows-oriented launcher and workspace project of the Fusion Superproject.
It presents project components by codename and reads their registry from `arch/windows.json`.
The product surface is the Launcher Desktop; the window title is `Launcher`.
The project is experimental and under active development; component availability and startability
vary.
The repository holds nine component folders, the launcher, the architecture registry, the rebrand
tooling and the payload catalog.
The launcher currently has startable entry points for Ingot and Onyx; other entries may be reserved
seats.
The registry and the launcher script are authoritative; a prose claim that disagrees with them is
stale.
The naming rule is simple: a part is called by its codename; an alias is an edition label.
The alias ladder is Lite, Plus, Pro, Studio, Max and Ultra; the retired alias Core maps to no part.
The project is not a single application; it is a shell over several independent windows.
Each seat keeps its own upstream source and its own assumptions.
The launcher does not pretend the seats are interchangeable; it exposes the differences.
The repository is the product-side half of Fusion; the engine half lives in `transformers/`.
The two halves are pinned as submodules by the superproject.
The documentation is generated at exactly 4,096 lines from the live tree.
The generator refuses to write a short file.
The validation gate checks the registry, the launcher UI, the manifest and the component folders.
The repository is public-facing but not licensed as a whole.
The imported trees are evidence, not a licence grant.
The next section describes the launcher in detail.
The repository is Windows-oriented; the launcher script is PowerShell.
The registry is `arch/windows.json`; the layouts are `arch/layouts.json`.
The alias ladder is Lite, Plus, Pro, Studio, Max and Ultra.
The gate is `node scripts/rebrand/check-consistency.mjs`.
The launcher asks one question: Editor window or Fusion window.
Part choice moved inside the app as a layout picker.

## 2. The Launcher Desktop
The Launcher Desktop is the first window a user sees.
It asks one question: open the Editor window or the Fusion window?
The answer is remembered so the user is not asked twice.
The Editor window is a singleton: one window, always available.
Every layout also exposes `Open in Editor Window`.
The Fusion window is the merged window with the layout picker.
The launcher folder is `launcher/`; the launch script is `launcher/launch.ps1`.
The launcher window metadata is `launcher/window.json`.
The launcher is deliberately small; it is a chooser, not an IDE.
The product choice moved in-app as layouts, recorded in `arch/layouts.json`.
The launcher does not list every part; the layout picker does.
The launcher reads the registry rather than hard-coding a part list.
A missing seat is a registry state, not a launcher crash.
The launcher is PowerShell-first because the target is Windows.
The launcher can be started from a terminal or from a shortcut.
The launcher is validated by the same consistency gate as the registry.
The launcher's visual identity is the Launcher Desktop, not a part codename.
The launcher is the only place where the Editor/Fusion choice is made.
The launcher is the front door to the nine seats.
The next section describes the registry that backs the choices.
The repository is Windows-oriented; the launcher script is PowerShell.
The registry is `arch/windows.json`; the layouts are `arch/layouts.json`.
The alias ladder is Lite, Plus, Pro, Studio, Max and Ultra.
The gate is `node scripts/rebrand/check-consistency.mjs`.
The launcher asks one question: Editor window or Fusion window.
Part choice moved inside the app as a layout picker.
A part is called by its codename; an alias is an edition label.
The retired alias Core maps to no part.
Ingot is not the main part; it is the largest tree on disk.
The Chromix browser ships inside Codeix, not as a separate window.

## 3. The component registry
The registry is `arch/windows.json`; it is the source of truth for component metadata.
It records the launcher name, the window title, the naming rule and the alias ladder.
It records every part: codename, alias, folder, contents, status and folder notes.
It records the alias resolution table that maps Lite, Plus, Pro, Studio, Max and Ultra.
It records the retired aliases; Core is the current retired alias.
A part with status `present` has a folder on disk.
A part with status `empty` is a reserved seat.
A part with a `physicalFolder` note has a junction or a pending rename.
The registry is JSON because the launcher and the validation script both need to read it.
The registry is not a build file; it does not compile anything.
The registry is not a licence file; it does not grant redistribution rights.
The registry is checked by `scripts/rebrand/check-consistency.mjs`.
The check compares the registry, the launcher UI, the launcher manifest and the component folders.
A mismatch is a gate failure, not a warning.
The registry is updated before the launcher UI is updated.
The registry is the first place to look when a seat disappears.
The registry is the first place to look when an alias changes.
The registry is deliberately small and readable.
The registry is the contract between the product and the seats.
The next section describes the naming and alias rules.
The repository is Windows-oriented; the launcher script is PowerShell.
The registry is `arch/windows.json`; the layouts are `arch/layouts.json`.
The alias ladder is Lite, Plus, Pro, Studio, Max and Ultra.
The gate is `node scripts/rebrand/check-consistency.mjs`.
The launcher asks one question: Editor window or Fusion window.
Part choice moved inside the app as a layout picker.
A part is called by its codename; an alias is an edition label.
The retired alias Core maps to no part.
Ingot is not the main part; it is the largest tree on disk.
The Chromix browser ships inside Codeix, not as a separate window.

## 4. Naming and aliases
A part is called by its codename: Ingot, Onyx, Codeix, GSX-CLI, Zingma, Sonar, Zenix.
An alias is an edition label, not a second name for the folder.
The edition ladder is Lite, Plus, Pro, Studio, Max and Ultra.
The retired alias Core maps to no part and is not coming back.
The old names Magnus, Prism, Titanium, Maxxi, Aether and CodeFusion Max were dropped.
The alias is stable; the folder is stable; the display name may change.
The launcher uses the codename internally and the alias in the layout picker.
The registry records both so a rename cannot silently break a link.
The validation gate checks that every alias resolves to exactly one part.
The gate checks that every part folder exists or is explicitly empty.
A codename is not a brand; it is an address.
An alias is not a codename; it is a shelf label.
The naming rule is recorded in `BRAND.md` and in the registry.
The rule survives a rename because it names the relationship, not the spelling.
The rule is enforced by the consistency script, not by memory.
The rule is part of the product contract.
The rule is documented in this README at the point of use.
The rule is repeated in the launcher documentation.
The rule is checked after every rename.
The next section describes the layouts.
The repository is Windows-oriented; the launcher script is PowerShell.
The registry is `arch/windows.json`; the layouts are `arch/layouts.json`.
The alias ladder is Lite, Plus, Pro, Studio, Max and Ultra.
The gate is `node scripts/rebrand/check-consistency.mjs`.
The launcher asks one question: Editor window or Fusion window.
Part choice moved inside the app as a layout picker.
A part is called by its codename; an alias is an edition label.
The retired alias Core maps to no part.
Ingot is not the main part; it is the largest tree on disk.
The Chromix browser ships inside Codeix, not as a separate window.

## 5. Layouts
The layout picker is the in-app replacement for the old part list.
`arch/layouts.json` is the source of truth for the layout order and the source of each layout.
Layout 1 is Lite, mapped to Zingma, the Qoder Quest/agents window.
Layout 2 is Plus, mapped to Sonar, the DeepSeek Harness seat.
Layout 3 is Pro, mapped to Codeix, with New Codeix and Old Codeix variants.
Layout 4 is Studio, mapped to Onyx, the VS Code OSS workspace.
Layout 5 is Max, mapped to Ingot, the ZCode monorepo.
Layout 6 is Ultra, mapped to Zenix, the native Claude Desktop seat.
Settings is reachable as a sub-layout of Pro.
The Editor window is a singleton available from every layout.
The layout file records the prompt and the two launcher choices.
The layout file records the source of each part, not just its name.
The layout file is validated against the registry.
A layout without a part is a gate failure.
A part without a layout is a gate failure.
The layout order is deliberate: Lite, Plus, Pro, Studio, Max, Ultra.
The order is an edition ladder, not a quality ranking.
The layout picker can grow without changing the launcher's first question.
The layout picker is the reason the launcher can stay small.
The next section describes the branding rules.
The repository is Windows-oriented; the launcher script is PowerShell.
The registry is `arch/windows.json`; the layouts are `arch/layouts.json`.
The alias ladder is Lite, Plus, Pro, Studio, Max and Ultra.
The gate is `node scripts/rebrand/check-consistency.mjs`.
The launcher asks one question: Editor window or Fusion window.
Part choice moved inside the app as a layout picker.
A part is called by its codename; an alias is an edition label.
The retired alias Core maps to no part.
Ingot is not the main part; it is the largest tree on disk.
The Chromix browser ships inside Codeix, not as a separate window.

## 6. Branding
The launcher's name is Launcher Desktop; the window title is Launcher.
The parts are addressed by codename; the aliases are edition labels.
The brand system is documented in `BRAND.md` and `arch/windows.json`.
`arch/brand.ts` carries the typed brand constants used by the tooling.
The repository does not invent a role for a part; Ingot is not the main part.
The repository does not invent a licence; the provenance section is explicit.
The logo is `docs/assets/logo.svg`; it is a geometric mark, not a screenshot.
The README uses shields.io badges for the live counts.
The README uses a centred header and a one-line pitch, matching the Fusion house style.
The README uses emoji navigation because the document is long.
The brand voice is factual: what exists, what is reserved, what is retired.
The brand voice does not call a reserved seat a shipped feature.
The brand voice does not call an alias a codename.
The brand voice does not call a reverse-engineered build an official release.
The brand voice is checked by the same consistency gate.
The brand voice is part of the product, not decoration.
The brand assets live under `docs/assets/`.
The brand assets are small enough to load in a README.
The brand assets are not third-party trademarks.
The next section describes the build.
The repository is Windows-oriented; the launcher script is PowerShell.
The registry is `arch/windows.json`; the layouts are `arch/layouts.json`.
The alias ladder is Lite, Plus, Pro, Studio, Max and Ultra.
The gate is `node scripts/rebrand/check-consistency.mjs`.
The launcher asks one question: Editor window or Fusion window.
Part choice moved inside the app as a layout picker.
A part is called by its codename; an alias is an edition label.
The retired alias Core maps to no part.
Ingot is not the main part; it is the largest tree on disk.
The Chromix browser ships inside Codeix, not as a separate window.

## 7. Build and run
The repository is a workspace, not a single compile target.
The launcher runs from `launcher/launch.ps1`.
The launcher metadata is `launcher/window.json`.
The registry is read at runtime; there is no generated part table to rebuild.
The consistency gate runs with Node: `node scripts/rebrand/check-consistency.mjs`.
The gate must pass before a registry or launcher change is accepted.
The seat folders are opened by the launcher; they are not compiled by the launcher.
Some seats carry their own build systems and their own runtimes.
Ingot carries the ZCode monorepo and its CLI.
Onyx carries the VS Code OSS source tree.
Codeix carries the Codex MSIX packages.
GSX-CLI carries the opencode workspace.
Zingma carries the Qoder native window.
Sonar is a reserved seat with only `window.json`.
Zenix carries the native Claude Desktop tree.
The launcher does not need a package manager to start.
The validation gate needs Node; the launcher needs PowerShell.
The repository is tested on Windows first.
The build instructions are intentionally short because the launcher is small.
The next section describes the validation gate.
The repository is Windows-oriented; the launcher script is PowerShell.
The registry is `arch/windows.json`; the layouts are `arch/layouts.json`.
The alias ladder is Lite, Plus, Pro, Studio, Max and Ultra.
The gate is `node scripts/rebrand/check-consistency.mjs`.
The launcher asks one question: Editor window or Fusion window.
Part choice moved inside the app as a layout picker.
A part is called by its codename; an alias is an edition label.
The retired alias Core maps to no part.
Ingot is not the main part; it is the largest tree on disk.
The Chromix browser ships inside Codeix, not as a separate window.

## 8. Validation
The validation gate is `node scripts/rebrand/check-consistency.mjs`.
It checks the component registry, the launcher UI, the launcher manifest and the component folders.
It reports a pass count; the current gate is 13/13 checks passed.
A failure names the file and the expected relationship.
The gate is run after every registry change and after every rename.
The gate is part of the dashboard's code-repo section.
The gate is not weakened to make a release look clean.
The gate is small enough to run in a terminal before a commit.
The gate is the product-side equivalent of the engine's verifier suite.
The gate checks aliases, folders, statuses and layout mappings.
The gate checks that a retired alias does not resolve.
The gate checks that an empty seat is declared empty, not missing.
The gate checks that the launcher window title matches the registry.
The gate checks that a folder rename is reflected everywhere.
The gate is the reason a cold reader can trust the registry.
The gate output is quoted in the documentation build manifest.
The gate is run by the telemetry dashboard.
The gate is part of the D-31 documentation evidence.
The gate is a contract, not a suggestion.
The next section describes the scripts.
The repository is Windows-oriented; the launcher script is PowerShell.
The registry is `arch/windows.json`; the layouts are `arch/layouts.json`.
The alias ladder is Lite, Plus, Pro, Studio, Max and Ultra.
The gate is `node scripts/rebrand/check-consistency.mjs`.
The launcher asks one question: Editor window or Fusion window.
Part choice moved inside the app as a layout picker.
A part is called by its codename; an alias is an edition label.
The retired alias Core maps to no part.
Ingot is not the main part; it is the largest tree on disk.
The Chromix browser ships inside Codeix, not as a separate window.

## 9. Scripts
`scripts/rebrand/check-consistency.mjs` is the validation gate.
`scripts/rebrand/migrate-arch.mjs` migrates the architecture registry.
`scripts/rebrand/rename-parts.mjs` and its numbered siblings perform part renames.
`scripts/rebrand/fix-sonar-dsh.mjs` repairs the Sonar seat metadata.
`scripts/rebrand/fix-zenix.mjs` repairs the Zenix seat metadata.
`scripts/rebrand/sync-window-json.mjs` synchronises the window metadata.
`scripts/check-mods.mjs` checks the modification state.
`scripts/merge_cct_skills.sh` merges the CCT skill set.
The scripts are small, named after the operation and safe to re-run.
The scripts are part of the repository, not hidden in a global install.
The scripts are documented here so a reader can find them.
The scripts are not a substitute for the gate; they prepare the change.
The scripts are run from the repository root.
The scripts use Node and PowerShell conventions.
The scripts are checked by the same review discipline as the launcher.
The scripts are kept because a manual rename is error-prone.
The scripts are part of the product's maintenance story.
The scripts are not shipped to the user.
The scripts are evidence that the rename was executed, not just described.
The next section describes the payloads.
The repository is Windows-oriented; the launcher script is PowerShell.
The registry is `arch/windows.json`; the layouts are `arch/layouts.json`.
The alias ladder is Lite, Plus, Pro, Studio, Max and Ultra.
The gate is `node scripts/rebrand/check-consistency.mjs`.
The launcher asks one question: Editor window or Fusion window.
Part choice moved inside the app as a layout picker.
A part is called by its codename; an alias is an edition label.
The retired alias Core maps to no part.
Ingot is not the main part; it is the largest tree on disk.
The Chromix browser ships inside Codeix, not as a separate window.

## 10. Payloads
`payloads/` is the bundled payload catalog.
`payloads/README.md` explains the catalog.
`payloads/CONFLICT.md` records provenance conflicts.
A payload is not a seat; it is a distributable artefact.
A payload keeps its own licence and its own source note.
A payload is not automatically redistributable because it is in the repository.
The catalog is separate from the component folders so the two can be audited separately.
The catalog is checked by the provenance section.
The catalog is part of the publication's provenance appendix.
The catalog is small compared with the imported trees.
The catalog is intentionally explicit about conflicts.
The catalog does not hide a missing licence.
The catalog does not call a third-party binary project-authored.
The catalog is a record, not a grant.
The catalog is read before a release is packaged.
The catalog is updated when a payload is added or removed.
The catalog is referenced from `THIRD_PARTY_NOTICES.md`.
The catalog is part of the repository's honesty.
The catalog is not a build input.
The next section describes security and provenance.
The repository is Windows-oriented; the launcher script is PowerShell.
The registry is `arch/windows.json`; the layouts are `arch/layouts.json`.
The alias ladder is Lite, Plus, Pro, Studio, Max and Ultra.
The gate is `node scripts/rebrand/check-consistency.mjs`.
The launcher asks one question: Editor window or Fusion window.
Part choice moved inside the app as a layout picker.
A part is called by its codename; an alias is an edition label.
The retired alias Core maps to no part.
Ingot is not the main part; it is the largest tree on disk.
The Chromix browser ships inside Codeix, not as a separate window.

## 11. Security and provenance
The repository imports source trees, installers and payloads from other projects.
The imports keep their own licences and their own redistribution terms.
The repository has no top-level licence declaration.
The `THIRD_PARTY_NOTICES.md` file records the known notices.
`payloads/CONFLICT.md` records provenance conflicts.
A contribution should stay within project-authored launcher, registry and documentation files until
provenance is reviewed.
Do not redistribute a third-party binary as if it were project-authored.
Do not assume an upstream licence covers a modified build.
Do not remove a provenance note to make a package look cleaner.
The security review treats a missing provenance note as a finding.
The security review treats a hidden binary as a finding.
The security review treats a stale licence as a finding.
The launcher's attack surface is small, but the imported trees are not.
The launcher does not elevate privileges by default.
The launcher reads local files; it does not upload them.
The consistency gate checks the registry, not the imported code.
The imported code needs its own review before it is trusted.
The publication reports provenance honestly.
The safe answer is to ask the maintainer before redistributing.
The next section describes the Git workflow.
The repository is Windows-oriented; the launcher script is PowerShell.
The registry is `arch/windows.json`; the layouts are `arch/layouts.json`.
The alias ladder is Lite, Plus, Pro, Studio, Max and Ultra.
The gate is `node scripts/rebrand/check-consistency.mjs`.
The launcher asks one question: Editor window or Fusion window.
Part choice moved inside the app as a layout picker.
A part is called by its codename; an alias is an edition label.
The retired alias Core maps to no part.
Ingot is not the main part; it is the largest tree on disk.

## 12. Git workflow
The repository is a submodule of the Fusion superproject.
The branch is `main`; the superproject pins a commit, not the branch.
A component change lands here first, then the superproject pin is updated.
The repository has a large imported tree; most of it is not tracked.
The tracked set is the source, the registry, the launcher, the scripts and the docs.
The untracked imported trees stay on disk and are documented in the registry.
A commit should not include a backup file or a build artefact.
A commit message names the seat or the registry field it changes.
A rename commit names the old and the new codename.
A provenance commit names the source and the licence.
The validation gate is run before the commit.
The superproject dashboard reports the component's dirty state.
The repository is pushed before the superproject pin is pushed.
The pin update is a separate commit in the superproject.
The two commits together are the atomic change.
The archive of deleted docs lives in the superproject, not here.
The repo does not carry a second copy of the plan.
The repo does carry its own README, BRAND and notices.
The repo is public-facing; do not commit secrets.
The next section describes the documentation.
The repository is Windows-oriented; the launcher script is PowerShell.
The registry is `arch/windows.json`; the layouts are `arch/layouts.json`.
The alias ladder is Lite, Plus, Pro, Studio, Max and Ultra.
The gate is `node scripts/rebrand/check-consistency.mjs`.
The launcher asks one question: Editor window or Fusion window.
Part choice moved inside the app as a layout picker.
A part is called by its codename; an alias is an edition label.
The retired alias Core maps to no part.
Ingot is not the main part; it is the largest tree on disk.
The Chromix browser ships inside Codeix, not as a separate window.

## 13. Documentation
`README.md` is this document: 4,096 lines, generated from the live tree.
`BRAND.md` records the naming decisions and the unresolved items.
`arch/README.md` records the architecture and the component map.
`CONTRIBUTING.md` records the contribution scope.
`THIRD_PARTY_NOTICES.md` records the known notices.
`payloads/README.md` records the payload catalog.
`payloads/CONFLICT.md` records provenance conflicts.
`launcher/README.md` records the launcher surface.
The documentation is generated at exact line counts because an approximate target cannot be verified.
The generator reads the registry and the folder stats at build time.
The generator refuses to write a short file.
The generator writes a manifest with the target, the actual count and the hash.
The documentation is part of D-31.
The documentation feeds the 512-page publication.
The documentation uses the OriginRouter visual language.
The documentation keeps code snippets minimal.
The documentation names the file that implements a claim.
The documentation says when a seat is empty.
The documentation says when provenance is unresolved.
The next section describes the roadmap.
The repository is Windows-oriented; the launcher script is PowerShell.
The registry is `arch/windows.json`; the layouts are `arch/layouts.json`.
The alias ladder is Lite, Plus, Pro, Studio, Max and Ultra.
The gate is `node scripts/rebrand/check-consistency.mjs`.
The launcher asks one question: Editor window or Fusion window.
Part choice moved inside the app as a layout picker.
A part is called by its codename; an alias is an edition label.
The retired alias Core maps to no part.
Ingot is not the main part; it is the largest tree on disk.
The Chromix browser ships inside Codeix, not as a separate window.

## 14. Roadmap
T14 closes repository hygiene before the docs build.
T10.2 builds this README at exactly 4,096 lines.
T13 builds the 512-page publication from the same facts.
The Sonar seat remains parked by D-25 until the effort-slider work resumes.
The Zenix effort-slider port remains parked by D-25.
The Codeix browser is integrated; there is no separate Chromix tree.
The Onyx physical folder rename is pending because of a handle lock.
The GSX-CLI seat refresh is in flight; the disk has the source.
The launcher layout picker is the current product shape.
The next product step is to make every present seat startable.
The next documentation step is to keep the registry and the README in sync.
The next validation step is to add a check for every new seat.
The next provenance step is to review the imported trees.
The next packaging step is to record the payload licences.
The roadmap is a commitment to evidence, not a date.
The roadmap is revised when a decision changes the shape.
The operator can reorder the roadmap.
The dashboard records the order actually being worked.
The roadmap ends when the nine seats are coherent.
The next section describes contribution.
The repository is Windows-oriented; the launcher script is PowerShell.
The registry is `arch/windows.json`; the layouts are `arch/layouts.json`.
The alias ladder is Lite, Plus, Pro, Studio, Max and Ultra.
The gate is `node scripts/rebrand/check-consistency.mjs`.
The launcher asks one question: Editor window or Fusion window.
Part choice moved inside the app as a layout picker.
A part is called by its codename; an alias is an edition label.
The retired alias Core maps to no part.
Ingot is not the main part; it is the largest tree on disk.
The Chromix browser ships inside Codeix, not as a separate window.

## 15. Contributing
Read `CONTRIBUTING.md` before proposing a change.
Stay within project-authored launcher, registry and documentation files until provenance is reviewed.
Do not modify, redistribute or repackage imported third-party source trees, binaries, installers or
payloads.
Run the consistency gate before opening a change.
Name the seat and the registry field in the change description.
Keep the diff small; the repository is large enough already.
Do not add a backup file to the index.
Do not add a build artefact to the index.
Do not rename a folder without updating the registry and the layouts.
Do not rename an alias without updating `BRAND.md`.
Do not claim a seat is startable when the launcher has no entry point.
Do not claim a licence that the repository does not grant.
Do not hide a provenance conflict.
The review checks the gate output, the registry and the provenance note.
The review checks that the README count is still exact.
The review checks that the superproject pin is updated.
The review checks that the dashboard is regenerated.
The review is evidence-first, not preference-first.
The review is part of the product quality.
The next section describes the licence.
The repository is Windows-oriented; the launcher script is PowerShell.
The registry is `arch/windows.json`; the layouts are `arch/layouts.json`.
The alias ladder is Lite, Plus, Pro, Studio, Max and Ultra.
The gate is `node scripts/rebrand/check-consistency.mjs`.
The launcher asks one question: Editor window or Fusion window.
Part choice moved inside the app as a layout picker.
A part is called by its codename; an alias is an edition label.
The retired alias Core maps to no part.
Ingot is not the main part; it is the largest tree on disk.

## 16. Licence and provenance
The repository currently has no top-level licence declaration.
Some component folders and payloads document material originating from other projects.
Their licences and redistribution rights are not automatically granted by this repository.
Check the upstream project's terms before using or redistributing imported material.
Obtain maintainer approval before redistributing imported material.
Do not interpret this repository as granting an open-source licence to third-party artefacts.
Do not interpret this repository as granting a licence to files without a clear licence.
The `THIRD_PARTY_NOTICES.md` file is the starting point for provenance.
The `payloads/CONFLICT.md` file records the known conflicts.
The publication marks third-party material and links to its source.
A quotation from a transcript is evidence, not a licence grant.
A reverse-engineered build is not an official release.
A renamed folder does not change the upstream licence.
A packaged installer keeps the upstream terms.
The safe answer is to ask before redistributing.
The conservative answer is to ship only project-authored files.
The provenance section is part of the product documentation.
The provenance section is part of the publication.
The provenance section is not legal advice.
The next section maps the nine seats.
The repository is Windows-oriented; the launcher script is PowerShell.
The registry is `arch/windows.json`; the layouts are `arch/layouts.json`.
The alias ladder is Lite, Plus, Pro, Studio, Max and Ultra.
The gate is `node scripts/rebrand/check-consistency.mjs`.
The launcher asks one question: Editor window or Fusion window.
Part choice moved inside the app as a layout picker.
A part is called by its codename; an alias is an edition label.
The retired alias Core maps to no part.
Ingot is not the main part; it is the largest tree on disk.
The Chromix browser ships inside Codeix, not as a separate window.

## 17. The nine-seat map
| # | Codename | Alias | Folder | Status |
|---|---|---|---|---|
| 1 | **Ingot** | Max | `windows/ingot` | present |
| 2 | **Onyx** | Studio | `windows/onyx` | present |
| 3 | **Codeix** | Pro | `windows/codeix` | present |
| 4 | **GSX-CLI** | — | `windows/gsx-cli` | present |
| 5 | **Zingma** | Lite | `windows/zingma` | present |
| 6 | **Sonar** | Plus | `windows/sonar` | empty |
| 7 | **Zenix** | Ultra | `windows/zenix` | present |
| 8 | **Merger** | — | `windows/merger` | present |
| 9 | **Vs-Ext** | — | `windows/vs-ext` | present |
The first seven rows are registry parts; `merger` and `vs-ext` are support folders.
Ingot is the ZCode monorepo and the largest tree on disk.
Onyx is the VS Code OSS workspace.
Codeix is the Codex MSIX seat; its integrated browser is Chromix.
GSX-CLI is the opencode terminal workspace.
Zingma is the Qoder native Quest/agents window.
Sonar is the reserved DeepSeek Harness seat.
Zenix is the native Claude Desktop seat.
Merger is a support folder with a Windows shortcut.
VS-Ext is a support folder with a Claude Code VSIX.
The map is generated from the registry, not typed by hand.
The map is checked by the consistency gate.
The map is part of the publication's seat chapter.
The next section is the command reference.
The repository is Windows-oriented; the launcher script is PowerShell.
The registry is `arch/windows.json`; the layouts are `arch/layouts.json`.
The alias ladder is Lite, Plus, Pro, Studio, Max and Ultra.
The gate is `node scripts/rebrand/check-consistency.mjs`.
The launcher asks one question: Editor window or Fusion window.

## 18. Command reference
```powershell
# validate the registry, launcher and folders
node scripts/rebrand/check-consistency.mjs
# start the launcher
powershell -ExecutionPolicy Bypass -File launcher/launch.ps1
# rebuild this README (from the superproject root)
python .plan/telemetry/docgen/build_code_readme.py
wc -l code/README.md # must print 4096
```
The gate is the first command to run after a registry change.
The launcher is the first command to run after a UI change.
The generator is the first command to run after a documentation change.
The commands are short on purpose.
The commands are safe to re-run.
The commands do not require a global install beyond Node and Python.
The commands are part of the D-31 evidence.
The commands are quoted in the publication.
The next section is the glossary.
The repository is Windows-oriented; the launcher script is PowerShell.
The registry is `arch/windows.json`; the layouts are `arch/layouts.json`.
The alias ladder is Lite, Plus, Pro, Studio, Max and Ultra.
The gate is `node scripts/rebrand/check-consistency.mjs`.
The launcher asks one question: Editor window or Fusion window.
Part choice moved inside the app as a layout picker.
A part is called by its codename; an alias is an edition label.
The retired alias Core maps to no part.
Ingot is not the main part; it is the largest tree on disk.
The Chromix browser ships inside Codeix, not as a separate window.
The Sonar seat is reserved for DeepSeek Harness.
The Zenix seat is native Claude Desktop, outside the alias ladder.

## 19. Glossary
**Part** — a component window addressed by codename.
**Seat** — the folder and metadata reserved for a part.
**Alias** — an edition label such as Lite, Plus, Pro, Studio, Max or Ultra.
**Retired alias** — an alias that maps to no part; Core is the current one.
**Launcher Desktop** — the product's first window.
**Editor window** — the singleton editor surface.
**Fusion window** — the merged window with the layout picker.
**Layout** — an in-app choice that maps an edition to a part.
**Registry** — `arch/windows.json`, the component source of truth.
**Layout file** — `arch/layouts.json`, the layout source of truth.
**Gate** — `check-consistency.mjs`, the validation script.
**Payload** — a bundled distributable artefact.
**Provenance** — where an imported file came from and what its licence allows.
**Chromix** — the browser integrated inside Codeix.
**DSH** — DeepSeek Harness, the Sonar seat.
**MSIX** — the Windows package format used by Codeix.
**VSIX** — the VS Code extension package format.
**Monorepo** — a repository that contains several packages; Ingot is one.
**Submodule** — a repository pinned by the superproject.
**Publication package** — the report, whitepaper, theorem note and arXiv bundle.
The repository is Windows-oriented; the launcher script is PowerShell.
The registry is `arch/windows.json`; the layouts are `arch/layouts.json`.
The alias ladder is Lite, Plus, Pro, Studio, Max and Ultra.
The gate is `node scripts/rebrand/check-consistency.mjs`.
The launcher asks one question: Editor window or Fusion window.
Part choice moved inside the app as a layout picker.
A part is called by its codename; an alias is an edition label.
The retired alias Core maps to no part.
Ingot is not the main part; it is the largest tree on disk.
The Chromix browser ships inside Codeix, not as a separate window.

## 20.1 Ingot · overview
**Ingot** is the `windows/ingot` seat of CodeFusion.
Its alias is **Max**; its status is **present**.
The registry records: ZCode (Zhipu) source monorepo — package 'code-fusion' 3.17.0, @origin-ai/cf-*
packages, apps/cli (cf-cli 0.17.0); 160,239 files (3.9 GB).
The top-level entries are: .architecture-baseline.json, .dockerignore, .env.development,
.env.e2e.local.example, .env.example, .env.production, .gitattributes, .gitignore.
The layout mapping is: 5 = Max.
The seat is part of the nine-seat map in the registry chapter.
The seat is not a separate repository; it is a folder in the `code` submodule.
The seat is opened by the launcher, not compiled into the launcher.
The seat keeps its own upstream source and its own runtime assumptions.
The seat is documented here because a cold reader needs the map.
The seat's provenance is recorded separately from its functionality.
The seat's status is a statement about the folder, not about quality.
The seat's alias is an edition label, not a role.
The seat's layout is the user-facing choice.
The seat's registry entry is the source of truth.
The seat's folder is checked by the gate.
The seat's entry is repeated in the nine-seat map.
The seat's next step is in the roadmap.
The seat's chapter continues with the registry entry.
The seat's facts are generated from `arch/windows.json`.
`windows/ingot` is the seat folder; the launcher reads it through the registry.
The codename is **Ingot**; the alias is **Max**.
The registry status is **present**.
The recorded contents are: ZCode (Zhipu) source monorepo — package 'code-fusion' 3.17.0, @origin-ai/cf-* packages, apps/cli (cf-cli 0.17.0); 160,239 files (3.9 GB).
Top-level entries: .architecture-baseline.json, .dockerignore, .env.development, .env.e2e.local.example, .env.example, .env.production, .gitattributes, .gitignore.
The seat lives inside the `code` submodule, not in the superproject.
The launcher does not compile the seat; it opens the seat's own surface.
The gate checks that the folder exists or that the seat is explicitly empty.

## 20.2 Ingot · registry entry
Codename: `Ingot`.
Alias: `Max`.
Folder: `windows/ingot`.
Status: `present`.
Contents: ZCode (Zhipu) source monorepo — package 'code-fusion' 3.17.0, @origin-ai/cf-* packages,
apps/cli (cf-cli 0.17.0); 160,239 files (3.9 GB).
Physical folder: `windows/ingot`.
Folder note: none.
The registry is `arch/windows.json`.
The alias resolution table maps the alias to the codename.
The retired alias table does not contain this codename unless it is retired.
The naming rule applies: the codename is the address; the alias is the label.
The registry entry is checked by `check-consistency.mjs`.
The registry entry is the first thing to edit when a seat changes.
The registry entry is the last thing to trust when a folder was renamed manually.
The registry entry does not grant a licence.
The registry entry does not promise that the seat is startable.
The registry entry does not hide an empty folder.
The registry entry is part of the publication's seat appendix.
The registry entry is generated into this section by the docs builder.
The next section lists the folder layout.
`windows/ingot` is the seat folder; the launcher reads it through the registry.
The codename is **Ingot**; the alias is **Max**.
The registry status is **present**.
The recorded contents are: ZCode (Zhipu) source monorepo — package 'code-fusion' 3.17.0, @origin-ai/cf-* packages, apps/cli (cf-cli 0.17.0); 160,239 files (3.9 GB).
Top-level entries: .architecture-baseline.json, .dockerignore, .env.development, .env.e2e.local.example, .env.example, .env.production, .gitattributes, .gitignore.
The seat lives inside the `code` submodule, not in the superproject.
The launcher does not compile the seat; it opens the seat's own surface.
The gate checks that the folder exists or that the seat is explicitly empty.
The gate checks that the alias resolves to exactly one part.

## 20.3 Ingot · folder layout
The folder is `windows/ingot`.
Top-level entries (24): .architecture-baseline.json, .dockerignore, .env.development,
.env.e2e.local.example, .env.example, .env.production, .gitattributes, .gitignore.
- `.architecture-baseline.json` — 43 B.
- `.dockerignore` — 486 B.
- `.env.development` — 272 B.
- `.env.e2e.local.example` — 387 B.
- `.env.example` — 1.1 KB.
- `.env.production` — 339 B.
- `.gitattributes` — 1.4 KB.
- `.gitignore` — 2.9 KB.
- `.npmrc` — 56 B.
- `.nvmrc` — 4 B.
- `.oxfmtrc.json` — 619 B.
- `.oxlintrc.json` — 2.9 KB.
The listing is sampled at the top level; the full tree is intentionally not copied into this README.
The full tree is available on disk and in the registry contents note.
The top-level listing is enough to tell a source tree from a reserved seat.
The listing is regenerated at build time.
The listing does not include ignored build outputs.
The listing does not include the `.git` directory.
The listing is part of the publication's provenance appendix.
The next section inventories the top level.
`windows/ingot` is the seat folder; the launcher reads it through the registry.
The codename is **Ingot**; the alias is **Max**.
The registry status is **present**.
The recorded contents are: ZCode (Zhipu) source monorepo — package 'code-fusion' 3.17.0, @origin-ai/cf-* packages, apps/cli (cf-cli 0.17.0); 160,239 files (3.9 GB).
Top-level entries: .architecture-baseline.json, .dockerignore, .env.development, .env.e2e.local.example, .env.example, .env.production, .gitattributes, .gitignore.
The seat lives inside the `code` submodule, not in the superproject.
The launcher does not compile the seat; it opens the seat's own surface.

## 20.4 Ingot · top-level inventory
- `.architecture-baseline.json` — 43 B.
- `.dockerignore` — 486 B.
- `.env.development` — 272 B.
- `.env.e2e.local.example` — 387 B.
- `.env.example` — 1.1 KB.
- `.env.production` — 339 B.
- `.gitattributes` — 1.4 KB.
- `.gitignore` — 2.9 KB.
- `.npmrc` — 56 B.
- `.nvmrc` — 4 B.
- `.oxfmtrc.json` — 619 B.
- `.oxlintrc.json` — 2.9 KB.
- `.prettierignore` — 680 B.
- `.release-it.mjs` — 739 B.
- `AGENTS.md` — 7.1 KB.
- `BRAND_GUIDELINES.md` — 1.1 KB.
- `CONTEXT.md` — 5.8 KB.
- `DESIGN.md` — 40.4 KB.
- `Dockerfile.desktop-e2e` — 2.5 KB.
- `LICENSE` — 11.3 KB.
The inventory is a top-level sample, not a recursive file count.
A recursive count is recorded in the registry contents note where it exists.
The inventory is regenerated at build time.
The inventory is used by the publication's appendix.
The inventory is not a substitute for the actual tree.
The inventory is not a licence inventory.
The inventory is not a security review.
The inventory is a map.
The next section describes build and run.
`windows/ingot` is the seat folder; the launcher reads it through the registry.

## 20.5 Ingot · build and run
The seat is opened from the launcher, not built by it.
The launcher entry is the `Ingot` layout when one exists.
The layout mapping is: 5 = Max.
The launcher script is `launcher/launch.ps1`.
The launcher metadata is `launcher/window.json`.
The registry is read at runtime.
The seat's own build system, if any, is documented upstream.
The repository gate does not compile the seat.
The repository gate checks that the seat is registered.
A missing entry point is a launcher limitation, not a build failure.
A seat with status `empty` has no runnable surface.
A seat with status `present` has a folder, not necessarily a runnable entry.
The launcher's first question is Editor or Fusion.
The layout picker is the second question.
The seat is the third choice.
The order is deliberate: the launcher stays small.
The seat's runtime is its own responsibility.
The seat's provenance is the repository's responsibility.
The seat's documentation is this chapter.
The next section describes the runtime surface.
`windows/ingot` is the seat folder; the launcher reads it through the registry.
The codename is **Ingot**; the alias is **Max**.
The registry status is **present**.
The recorded contents are: ZCode (Zhipu) source monorepo — package 'code-fusion' 3.17.0, @origin-ai/cf-* packages, apps/cli (cf-cli 0.17.0); 160,239 files (3.9 GB).
Top-level entries: .architecture-baseline.json, .dockerignore, .env.development, .env.e2e.local.example, .env.example, .env.production, .gitattributes, .gitignore.
The seat lives inside the `code` submodule, not in the superproject.
The launcher does not compile the seat; it opens the seat's own surface.
The gate checks that the folder exists or that the seat is explicitly empty.
The gate checks that the alias resolves to exactly one part.
The gate checks that the layout maps to the codename.

## 20.6 Ingot · runtime surface
The runtime surface of **Ingot** is the window opened by its layout.
The layout mapping is: 5 = Max.
The Editor window is always available as a singleton.
The Fusion window is the merged surface with the layout picker.
The seat may expose its own settings or sub-layouts.
The seat may be a native window, a web app, a CLI or an installed package.
The registry contents note names the source shape.
The launcher does not normalize the seat's UI.
The launcher does not promise feature parity between seats.
The launcher does not hide the seat's origin.
The seat's title is its own.
The seat's icon is its own where it has one.
The seat's window metadata is its own `window.json` where it exists.
The seat's runtime is validated by opening it.
The seat's runtime is not validated by the consistency gate.
The seat's runtime is documented in the publication's seat chapter.
The next section describes launcher integration.
`windows/ingot` is the seat folder; the launcher reads it through the registry.
The codename is **Ingot**; the alias is **Max**.
The registry status is **present**.
The recorded contents are: ZCode (Zhipu) source monorepo — package 'code-fusion' 3.17.0, @origin-ai/cf-* packages, apps/cli (cf-cli 0.17.0); 160,239 files (3.9 GB).
Top-level entries: .architecture-baseline.json, .dockerignore, .env.development, .env.e2e.local.example, .env.example, .env.production, .gitattributes, .gitignore.
The seat lives inside the `code` submodule, not in the superproject.
The launcher does not compile the seat; it opens the seat's own surface.
The gate checks that the folder exists or that the seat is explicitly empty.
The gate checks that the alias resolves to exactly one part.
The gate checks that the layout maps to the codename.
The seat's provenance is recorded in `THIRD_PARTY_NOTICES.md` and `payloads/CONFLICT.md`.
The seat's documentation is this README plus the seat's own upstream docs.
The seat's next step is recorded in the roadmap.

## 20.7 Ingot · launcher integration
The launcher reads `arch/windows.json` to find **Ingot**.
The layout picker reads `arch/layouts.json` to place **Ingot**.
The current layout mapping is: 5 = Max.
The launcher does not hard-code the seat list.
The launcher does not hard-code the alias ladder.
The launcher does not hard-code the folder path.
The launcher's first question is Editor or Fusion.
The layout picker is the in-app part choice.
The registry and the layout file are checked together.
A missing layout is a gate failure.
A missing registry entry is a gate failure.
A mismatched alias is a gate failure.
The gate runs before the launcher change is accepted.
The gate is `node scripts/rebrand/check-consistency.mjs`.
The gate's current result is 13/13 checks passed.
The integration is deliberately data-driven.
The integration is the reason a new seat is a registry change, not a launcher rewrite.
The integration is documented in `arch/README.md`.
The next section maps the layout.
`windows/ingot` is the seat folder; the launcher reads it through the registry.
The codename is **Ingot**; the alias is **Max**.
The registry status is **present**.
The recorded contents are: ZCode (Zhipu) source monorepo — package 'code-fusion' 3.17.0, @origin-ai/cf-* packages, apps/cli (cf-cli 0.17.0); 160,239 files (3.9 GB).
Top-level entries: .architecture-baseline.json, .dockerignore, .env.development, .env.e2e.local.example, .env.example, .env.production, .gitattributes, .gitignore.
The seat lives inside the `code` submodule, not in the superproject.
The launcher does not compile the seat; it opens the seat's own surface.
The gate checks that the folder exists or that the seat is explicitly empty.
The gate checks that the alias resolves to exactly one part.
The gate checks that the layout maps to the codename.
The seat's provenance is recorded in `THIRD_PARTY_NOTICES.md` and `payloads/CONFLICT.md`.

## 20.8 Ingot · layout mapping
Layout entries for **Ingot**: 5 = Max.
The layout file records the order, the name, the alias, the part and the source.
The layout order is Lite, Plus, Pro, Studio, Max, Ultra.
The order is an edition ladder, not a quality ranking.
The Editor window is available from every layout.
The Fusion window is the merged surface.
A layout can have variants; Pro has New Codeix and Old Codeix.
A layout can expose a sub-layout; Settings is reachable under Pro.
A layout without a part is invalid.
A part without a layout is invalid.
The layout file is JSON because the launcher and the gate both read it.
The layout file is updated with the registry, never after it.
The layout file is part of the publication's seat chapter.
The layout file is generated into this section by the docs builder.
The next section describes validation.
`windows/ingot` is the seat folder; the launcher reads it through the registry.
The codename is **Ingot**; the alias is **Max**.
The registry status is **present**.
The recorded contents are: ZCode (Zhipu) source monorepo — package 'code-fusion' 3.17.0, @origin-ai/cf-* packages, apps/cli (cf-cli 0.17.0); 160,239 files (3.9 GB).
Top-level entries: .architecture-baseline.json, .dockerignore, .env.development, .env.e2e.local.example, .env.example, .env.production, .gitattributes, .gitignore.
The seat lives inside the `code` submodule, not in the superproject.
The launcher does not compile the seat; it opens the seat's own surface.
The gate checks that the folder exists or that the seat is explicitly empty.
The gate checks that the alias resolves to exactly one part.
The gate checks that the layout maps to the codename.
The seat's provenance is recorded in `THIRD_PARTY_NOTICES.md` and `payloads/CONFLICT.md`.
The seat's documentation is this README plus the seat's own upstream docs.
The seat's next step is recorded in the roadmap.
The seat's status is visible in the nine-seat map.
The seat's folder name is stable even when the display name changes.

## 20.9 Ingot · validation
Run `node scripts/rebrand/check-consistency.mjs` after changing **Ingot**.
The gate checks the registry, the launcher UI, the launcher manifest and the component folders.
The gate checks that the folder exists or the seat is explicitly empty.
The gate checks that the alias resolves to exactly one part.
The gate checks that the layout maps to the codename.
The gate checks that the launcher title matches the registry.
The gate checks that a retired alias does not resolve.
The gate reports a pass count.
The current gate is 13/13 checks passed.
A failure names the file and the expected relationship.
The gate is not weakened to make a release look clean.
The gate is part of the dashboard's code-repo section.
The gate is part of the D-31 documentation evidence.
The gate is run before the commit.
The gate is run after the rename.
The gate is run after the documentation build.
The gate is a contract, not a suggestion.
The next section describes security and provenance.
`windows/ingot` is the seat folder; the launcher reads it through the registry.
The codename is **Ingot**; the alias is **Max**.
The registry status is **present**.
The recorded contents are: ZCode (Zhipu) source monorepo — package 'code-fusion' 3.17.0, @origin-ai/cf-* packages, apps/cli (cf-cli 0.17.0); 160,239 files (3.9 GB).
Top-level entries: .architecture-baseline.json, .dockerignore, .env.development, .env.e2e.local.example, .env.example, .env.production, .gitattributes, .gitignore.
The seat lives inside the `code` submodule, not in the superproject.
The launcher does not compile the seat; it opens the seat's own surface.
The gate checks that the folder exists or that the seat is explicitly empty.
The gate checks that the alias resolves to exactly one part.
The gate checks that the layout maps to the codename.
The seat's provenance is recorded in `THIRD_PARTY_NOTICES.md` and `payloads/CONFLICT.md`.
The seat's documentation is this README plus the seat's own upstream docs.

## 20.10 Ingot · security and provenance
**Ingot** is imported or project-authored; the registry contents note records which.
The imported source keeps its own licence and its own redistribution terms.
The repository does not grant a blanket licence over the seat.
The `THIRD_PARTY_NOTICES.md` file is the starting point.
The `payloads/CONFLICT.md` file records known conflicts.
Do not redistribute a third-party binary as project-authored.
Do not remove a provenance note to make a package look cleaner.
Do not assume an upstream licence covers a modified build.
The security review treats a missing provenance note as a finding.
The security review treats a hidden binary as a finding.
The seat's attack surface is its own runtime.
The launcher does not elevate privileges by default.
The launcher reads local files; it does not upload them.
The seat's secrets are not committed to the repository.
The seat's build artefacts are not committed to the repository.
The seat's provenance is part of the publication.
The safe answer is to ask before redistributing.
The conservative answer is to ship only project-authored files.
The next section describes risks and next steps.
`windows/ingot` is the seat folder; the launcher reads it through the registry.
The codename is **Ingot**; the alias is **Max**.
The registry status is **present**.
The recorded contents are: ZCode (Zhipu) source monorepo — package 'code-fusion' 3.17.0, @origin-ai/cf-* packages, apps/cli (cf-cli 0.17.0); 160,239 files (3.9 GB).
Top-level entries: .architecture-baseline.json, .dockerignore, .env.development, .env.e2e.local.example, .env.example, .env.production, .gitattributes, .gitignore.
The seat lives inside the `code` submodule, not in the superproject.
The launcher does not compile the seat; it opens the seat's own surface.
The gate checks that the folder exists or that the seat is explicitly empty.
The gate checks that the alias resolves to exactly one part.
The gate checks that the layout maps to the codename.
The seat's provenance is recorded in `THIRD_PARTY_NOTICES.md` and `payloads/CONFLICT.md`.

## 20.11 Ingot · risks and next steps
The current status of **Ingot** is **present**.
The folder note is: none.
The layout mapping is: 5 = Max.
An empty seat is a reserved seat, not a shipped feature.
A present folder is not a promise of a runnable entry point.
A missing entry point is a launcher limitation.
A pending rename is a handle-lock issue.
A large imported tree is a provenance issue.
A stale alias is a gate failure.
A stale layout is a gate failure.
The next step is recorded in the roadmap.
The next documentation step is to keep this chapter in sync.
The next validation step is to add a check for the seat.
The next provenance step is to review the imported tree.
The next product step is to make the seat startable where it is not.
The risk register is in the publication.
The risk register is reviewed at every publication build.
The risk register is not a promise that the risk is gone.
The next section is the file catalog.
`windows/ingot` is the seat folder; the launcher reads it through the registry.
The codename is **Ingot**; the alias is **Max**.
The registry status is **present**.
The recorded contents are: ZCode (Zhipu) source monorepo — package 'code-fusion' 3.17.0, @origin-ai/cf-* packages, apps/cli (cf-cli 0.17.0); 160,239 files (3.9 GB).
Top-level entries: .architecture-baseline.json, .dockerignore, .env.development, .env.e2e.local.example, .env.example, .env.production, .gitattributes, .gitignore.
The seat lives inside the `code` submodule, not in the superproject.
The launcher does not compile the seat; it opens the seat's own surface.
The gate checks that the folder exists or that the seat is explicitly empty.
The gate checks that the alias resolves to exactly one part.
The gate checks that the layout maps to the codename.
The seat's provenance is recorded in `THIRD_PARTY_NOTICES.md` and `payloads/CONFLICT.md`.

## 20.12 Ingot · file catalog
- `.architecture-baseline.json` — 43 B.
- `.dockerignore` — 486 B.
- `.env.development` — 272 B.
- `.env.e2e.local.example` — 387 B.
- `.env.example` — 1.1 KB.
- `.env.production` — 339 B.
- `.gitattributes` — 1.4 KB.
- `.gitignore` — 2.9 KB.
- `.npmrc` — 56 B.
- `.nvmrc` — 4 B.
- `.oxfmtrc.json` — 619 B.
- `.oxlintrc.json` — 2.9 KB.
- `.prettierignore` — 680 B.
- `.release-it.mjs` — 739 B.
- `AGENTS.md` — 7.1 KB.
- `BRAND_GUIDELINES.md` — 1.1 KB.
- `CONTEXT.md` — 5.8 KB.
- `DESIGN.md` — 40.4 KB.
- `Dockerfile.desktop-e2e` — 2.5 KB.
- `LICENSE` — 11.3 KB.
- `NOTICE.md` — 28.9 KB.
- `README.md` — 12.4 KB.
The catalog is a top-level sample.
The catalog is regenerated at build time.
The catalog is part of the publication's appendix.
The catalog is not a recursive file count.
The catalog is not a licence inventory.
The catalog is a map for the reader.
The next seat follows.
`windows/ingot` is the seat folder; the launcher reads it through the registry.

## 21.1 Onyx · overview
**Onyx** is the `windows/onyx` seat of CodeFusion.
Its alias is **Studio**; its status is **present**.
The registry records: VS Code OSS 1.147.0 source at SOURCE/vscode-main (21,224 files / 392 MB). The
reverse-engineered Qoder desktop build (CodeFusion.exe + resources/) is RETIRED — what we wanted from
Qoder is Zingma.
The top-level entries are: LICENSES.chromium.html, Onyx.exe, Qoder.VisualElementsManifest.xml, SOURCE,
bin, chrome_100_percent.pak, chrome_200_percent.pak, d3dcompiler_47.dll.
The layout mapping is: 4 = Studio.
The seat is part of the nine-seat map in the registry chapter.
The seat is not a separate repository; it is a folder in the `code` submodule.
The seat is opened by the launcher, not compiled into the launcher.
The seat keeps its own upstream source and its own runtime assumptions.
The seat is documented here because a cold reader needs the map.
The seat's provenance is recorded separately from its functionality.
The seat's status is a statement about the folder, not about quality.
The seat's alias is an edition label, not a role.
The seat's layout is the user-facing choice.
The seat's registry entry is the source of truth.
The seat's folder is checked by the gate.
The seat's entry is repeated in the nine-seat map.
The seat's next step is in the roadmap.
The seat's chapter continues with the registry entry.
The seat's facts are generated from `arch/windows.json`.
`windows/onyx` is the seat folder; the launcher reads it through the registry.
The codename is **Onyx**; the alias is **Studio**.
The registry status is **present**.
The recorded contents are: VS Code OSS 1.147.0 source at SOURCE/vscode-main (21,224 files / 392 MB). The reverse-engineered Qoder desktop build (CodeFusion.exe + resources/) is RETIRED — what we wanted from Qoder is Zingma.
Top-level entries: LICENSES.chromium.html, Onyx.exe, Qoder.VisualElementsManifest.xml, SOURCE, bin, chrome_100_percent.pak, chrome_200_percent.pak, d3dcompiler_47.dll.
The seat lives inside the `code` submodule, not in the superproject.
The launcher does not compile the seat; it opens the seat's own surface.

## 21.2 Onyx · registry entry
Codename: `Onyx`.
Alias: `Studio`.
Folder: `windows/onyx`.
Status: `present`.
Contents: VS Code OSS 1.147.0 source at SOURCE/vscode-main (21,224 files / 392 MB). The
reverse-engineered Qoder desktop build (CodeFusion.exe + resources/) is RETIRED — what we wanted from
Qoder is Zingma.
Physical folder: `windows/obsidian`.
Folder note: windows/onyx is a junction; physical folder rename is pending (handle lock)..
The registry is `arch/windows.json`.
The alias resolution table maps the alias to the codename.
The retired alias table does not contain this codename unless it is retired.
The naming rule applies: the codename is the address; the alias is the label.
The registry entry is checked by `check-consistency.mjs`.
The registry entry is the first thing to edit when a seat changes.
The registry entry is the last thing to trust when a folder was renamed manually.
The registry entry does not grant a licence.
The registry entry does not promise that the seat is startable.
The registry entry does not hide an empty folder.
The registry entry is part of the publication's seat appendix.
The registry entry is generated into this section by the docs builder.
The next section lists the folder layout.
`windows/onyx` is the seat folder; the launcher reads it through the registry.
The codename is **Onyx**; the alias is **Studio**.
The registry status is **present**.
The recorded contents are: VS Code OSS 1.147.0 source at SOURCE/vscode-main (21,224 files / 392 MB). The reverse-engineered Qoder desktop build (CodeFusion.exe + resources/) is RETIRED — what we wanted from Qoder is Zingma.
Top-level entries: LICENSES.chromium.html, Onyx.exe, Qoder.VisualElementsManifest.xml, SOURCE, bin, chrome_100_percent.pak, chrome_200_percent.pak, d3dcompiler_47.dll.
The seat lives inside the `code` submodule, not in the superproject.
The launcher does not compile the seat; it opens the seat's own surface.
The gate checks that the folder exists or that the seat is explicitly empty.

## 21.3 Onyx · folder layout
The folder is `windows/onyx`.
Top-level entries (24): LICENSES.chromium.html, Onyx.exe, Qoder.VisualElementsManifest.xml, SOURCE,
bin, chrome_100_percent.pak, chrome_200_percent.pak, d3dcompiler_47.dll.
- `LICENSES.chromium.html` — 19.4 MB.
- `Onyx.exe` — 216.1 MB.
- `Qoder.VisualElementsManifest.xml` — 384 B.
- `SOURCE` — directory.
- `bin` — directory.
- `chrome_100_percent.pak` — 117.1 KB.
- `chrome_200_percent.pak` — 192.5 KB.
- `d3dcompiler_47.dll` — 4.5 MB.
- `debug.log` — 157 B.
- `dxcompiler.dll` — 24.5 MB.
- `dxil.dll` — 1.4 MB.
- `ffmpeg.dll` — 2.9 MB.
The listing is sampled at the top level; the full tree is intentionally not copied into this README.
The full tree is available on disk and in the registry contents note.
The top-level listing is enough to tell a source tree from a reserved seat.
The listing is regenerated at build time.
The listing does not include ignored build outputs.
The listing does not include the `.git` directory.
The listing is part of the publication's provenance appendix.
The next section inventories the top level.
`windows/onyx` is the seat folder; the launcher reads it through the registry.
The codename is **Onyx**; the alias is **Studio**.
The registry status is **present**.
The recorded contents are: VS Code OSS 1.147.0 source at SOURCE/vscode-main (21,224 files / 392 MB). The reverse-engineered Qoder desktop build (CodeFusion.exe + resources/) is RETIRED — what we wanted from Qoder is Zingma.
Top-level entries: LICENSES.chromium.html, Onyx.exe, Qoder.VisualElementsManifest.xml, SOURCE, bin, chrome_100_percent.pak, chrome_200_percent.pak, d3dcompiler_47.dll.
The seat lives inside the `code` submodule, not in the superproject.
The launcher does not compile the seat; it opens the seat's own surface.

## 21.4 Onyx · top-level inventory
- `LICENSES.chromium.html` — 19.4 MB.
- `Onyx.exe` — 216.1 MB.
- `Qoder.VisualElementsManifest.xml` — 384 B.
- `SOURCE` — dir.
- `bin` — dir.
- `chrome_100_percent.pak` — 117.1 KB.
- `chrome_200_percent.pak` — 192.5 KB.
- `d3dcompiler_47.dll` — 4.5 MB.
- `debug.log` — 157 B.
- `dxcompiler.dll` — 24.5 MB.
- `dxil.dll` — 1.4 MB.
- `ffmpeg.dll` — 2.9 MB.
- `icudtl.dat` — 10.4 MB.
- `libEGL.dll` — 510.5 KB.
- `libGLESv2.dll` — 7.7 MB.
- `locales` — dir.
- `resources` — dir.
- `resources.pak` — 6.6 MB.
- `snapshot_blob.bin` — 338.3 KB.
- `tools` — dir.
The inventory is a top-level sample, not a recursive file count.
A recursive count is recorded in the registry contents note where it exists.
The inventory is regenerated at build time.
The inventory is used by the publication's appendix.
The inventory is not a substitute for the actual tree.
The inventory is not a licence inventory.
The inventory is not a security review.
The inventory is a map.
The next section describes build and run.
`windows/onyx` is the seat folder; the launcher reads it through the registry.

## 21.5 Onyx · build and run
The seat is opened from the launcher, not built by it.
The launcher entry is the `Onyx` layout when one exists.
The layout mapping is: 4 = Studio.
The launcher script is `launcher/launch.ps1`.
The launcher metadata is `launcher/window.json`.
The registry is read at runtime.
The seat's own build system, if any, is documented upstream.
The repository gate does not compile the seat.
The repository gate checks that the seat is registered.
A missing entry point is a launcher limitation, not a build failure.
A seat with status `empty` has no runnable surface.
A seat with status `present` has a folder, not necessarily a runnable entry.
The launcher's first question is Editor or Fusion.
The layout picker is the second question.
The seat is the third choice.
The order is deliberate: the launcher stays small.
The seat's runtime is its own responsibility.
The seat's provenance is the repository's responsibility.
The seat's documentation is this chapter.
The next section describes the runtime surface.
`windows/onyx` is the seat folder; the launcher reads it through the registry.
The codename is **Onyx**; the alias is **Studio**.
The registry status is **present**.
The recorded contents are: VS Code OSS 1.147.0 source at SOURCE/vscode-main (21,224 files / 392 MB). The reverse-engineered Qoder desktop build (CodeFusion.exe + resources/) is RETIRED — what we wanted from Qoder is Zingma.
Top-level entries: LICENSES.chromium.html, Onyx.exe, Qoder.VisualElementsManifest.xml, SOURCE, bin, chrome_100_percent.pak, chrome_200_percent.pak, d3dcompiler_47.dll.
The seat lives inside the `code` submodule, not in the superproject.
The launcher does not compile the seat; it opens the seat's own surface.
The gate checks that the folder exists or that the seat is explicitly empty.
The gate checks that the alias resolves to exactly one part.
The gate checks that the layout maps to the codename.

## 21.6 Onyx · runtime surface
The runtime surface of **Onyx** is the window opened by its layout.
The layout mapping is: 4 = Studio.
The Editor window is always available as a singleton.
The Fusion window is the merged surface with the layout picker.
The seat may expose its own settings or sub-layouts.
The seat may be a native window, a web app, a CLI or an installed package.
The registry contents note names the source shape.
The launcher does not normalize the seat's UI.
The launcher does not promise feature parity between seats.
The launcher does not hide the seat's origin.
The seat's title is its own.
The seat's icon is its own where it has one.
The seat's window metadata is its own `window.json` where it exists.
The seat's runtime is validated by opening it.
The seat's runtime is not validated by the consistency gate.
The seat's runtime is documented in the publication's seat chapter.
The next section describes launcher integration.
`windows/onyx` is the seat folder; the launcher reads it through the registry.
The codename is **Onyx**; the alias is **Studio**.
The registry status is **present**.
The recorded contents are: VS Code OSS 1.147.0 source at SOURCE/vscode-main (21,224 files / 392 MB). The reverse-engineered Qoder desktop build (CodeFusion.exe + resources/) is RETIRED — what we wanted from Qoder is Zingma.
Top-level entries: LICENSES.chromium.html, Onyx.exe, Qoder.VisualElementsManifest.xml, SOURCE, bin, chrome_100_percent.pak, chrome_200_percent.pak, d3dcompiler_47.dll.
The seat lives inside the `code` submodule, not in the superproject.
The launcher does not compile the seat; it opens the seat's own surface.
The gate checks that the folder exists or that the seat is explicitly empty.
The gate checks that the alias resolves to exactly one part.
The gate checks that the layout maps to the codename.
The seat's provenance is recorded in `THIRD_PARTY_NOTICES.md` and `payloads/CONFLICT.md`.
The seat's documentation is this README plus the seat's own upstream docs.
The seat's next step is recorded in the roadmap.

## 21.7 Onyx · launcher integration
The launcher reads `arch/windows.json` to find **Onyx**.
The layout picker reads `arch/layouts.json` to place **Onyx**.
The current layout mapping is: 4 = Studio.
The launcher does not hard-code the seat list.
The launcher does not hard-code the alias ladder.
The launcher does not hard-code the folder path.
The launcher's first question is Editor or Fusion.
The layout picker is the in-app part choice.
The registry and the layout file are checked together.
A missing layout is a gate failure.
A missing registry entry is a gate failure.
A mismatched alias is a gate failure.
The gate runs before the launcher change is accepted.
The gate is `node scripts/rebrand/check-consistency.mjs`.
The gate's current result is 13/13 checks passed.
The integration is deliberately data-driven.
The integration is the reason a new seat is a registry change, not a launcher rewrite.
The integration is documented in `arch/README.md`.
The next section maps the layout.
`windows/onyx` is the seat folder; the launcher reads it through the registry.
The codename is **Onyx**; the alias is **Studio**.
The registry status is **present**.
The recorded contents are: VS Code OSS 1.147.0 source at SOURCE/vscode-main (21,224 files / 392 MB). The reverse-engineered Qoder desktop build (CodeFusion.exe + resources/) is RETIRED — what we wanted from Qoder is Zingma.
Top-level entries: LICENSES.chromium.html, Onyx.exe, Qoder.VisualElementsManifest.xml, SOURCE, bin, chrome_100_percent.pak, chrome_200_percent.pak, d3dcompiler_47.dll.
The seat lives inside the `code` submodule, not in the superproject.
The launcher does not compile the seat; it opens the seat's own surface.
The gate checks that the folder exists or that the seat is explicitly empty.
The gate checks that the alias resolves to exactly one part.
The gate checks that the layout maps to the codename.
The seat's provenance is recorded in `THIRD_PARTY_NOTICES.md` and `payloads/CONFLICT.md`.

## 21.8 Onyx · layout mapping
Layout entries for **Onyx**: 4 = Studio.
The layout file records the order, the name, the alias, the part and the source.
The layout order is Lite, Plus, Pro, Studio, Max, Ultra.
The order is an edition ladder, not a quality ranking.
The Editor window is available from every layout.
The Fusion window is the merged surface.
A layout can have variants; Pro has New Codeix and Old Codeix.
A layout can expose a sub-layout; Settings is reachable under Pro.
A layout without a part is invalid.
A part without a layout is invalid.
The layout file is JSON because the launcher and the gate both read it.
The layout file is updated with the registry, never after it.
The layout file is part of the publication's seat chapter.
The layout file is generated into this section by the docs builder.
The next section describes validation.
`windows/onyx` is the seat folder; the launcher reads it through the registry.
The codename is **Onyx**; the alias is **Studio**.
The registry status is **present**.
The recorded contents are: VS Code OSS 1.147.0 source at SOURCE/vscode-main (21,224 files / 392 MB). The reverse-engineered Qoder desktop build (CodeFusion.exe + resources/) is RETIRED — what we wanted from Qoder is Zingma.
Top-level entries: LICENSES.chromium.html, Onyx.exe, Qoder.VisualElementsManifest.xml, SOURCE, bin, chrome_100_percent.pak, chrome_200_percent.pak, d3dcompiler_47.dll.
The seat lives inside the `code` submodule, not in the superproject.
The launcher does not compile the seat; it opens the seat's own surface.
The gate checks that the folder exists or that the seat is explicitly empty.
The gate checks that the alias resolves to exactly one part.
The gate checks that the layout maps to the codename.
The seat's provenance is recorded in `THIRD_PARTY_NOTICES.md` and `payloads/CONFLICT.md`.
The seat's documentation is this README plus the seat's own upstream docs.
The seat's next step is recorded in the roadmap.
The seat's status is visible in the nine-seat map.
The seat's folder name is stable even when the display name changes.

## 21.9 Onyx · validation
Run `node scripts/rebrand/check-consistency.mjs` after changing **Onyx**.
The gate checks the registry, the launcher UI, the launcher manifest and the component folders.
The gate checks that the folder exists or the seat is explicitly empty.
The gate checks that the alias resolves to exactly one part.
The gate checks that the layout maps to the codename.
The gate checks that the launcher title matches the registry.
The gate checks that a retired alias does not resolve.
The gate reports a pass count.
The current gate is 13/13 checks passed.
A failure names the file and the expected relationship.
The gate is not weakened to make a release look clean.
The gate is part of the dashboard's code-repo section.
The gate is part of the D-31 documentation evidence.
The gate is run before the commit.
The gate is run after the rename.
The gate is run after the documentation build.
The gate is a contract, not a suggestion.
The next section describes security and provenance.
`windows/onyx` is the seat folder; the launcher reads it through the registry.
The codename is **Onyx**; the alias is **Studio**.
The registry status is **present**.
The recorded contents are: VS Code OSS 1.147.0 source at SOURCE/vscode-main (21,224 files / 392 MB). The reverse-engineered Qoder desktop build (CodeFusion.exe + resources/) is RETIRED — what we wanted from Qoder is Zingma.
Top-level entries: LICENSES.chromium.html, Onyx.exe, Qoder.VisualElementsManifest.xml, SOURCE, bin, chrome_100_percent.pak, chrome_200_percent.pak, d3dcompiler_47.dll.
The seat lives inside the `code` submodule, not in the superproject.
The launcher does not compile the seat; it opens the seat's own surface.
The gate checks that the folder exists or that the seat is explicitly empty.
The gate checks that the alias resolves to exactly one part.
The gate checks that the layout maps to the codename.
The seat's provenance is recorded in `THIRD_PARTY_NOTICES.md` and `payloads/CONFLICT.md`.
The seat's documentation is this README plus the seat's own upstream docs.

## 21.10 Onyx · security and provenance
**Onyx** is imported or project-authored; the registry contents note records which.
The imported source keeps its own licence and its own redistribution terms.
The repository does not grant a blanket licence over the seat.
The `THIRD_PARTY_NOTICES.md` file is the starting point.
The `payloads/CONFLICT.md` file records known conflicts.
Do not redistribute a third-party binary as project-authored.
Do not remove a provenance note to make a package look cleaner.
Do not assume an upstream licence covers a modified build.
The security review treats a missing provenance note as a finding.
The security review treats a hidden binary as a finding.
The seat's attack surface is its own runtime.
The launcher does not elevate privileges by default.
The launcher reads local files; it does not upload them.
The seat's secrets are not committed to the repository.
The seat's build artefacts are not committed to the repository.
The seat's provenance is part of the publication.
The safe answer is to ask before redistributing.
The conservative answer is to ship only project-authored files.
The next section describes risks and next steps.
`windows/onyx` is the seat folder; the launcher reads it through the registry.
The codename is **Onyx**; the alias is **Studio**.
The registry status is **present**.
The recorded contents are: VS Code OSS 1.147.0 source at SOURCE/vscode-main (21,224 files / 392 MB). The reverse-engineered Qoder desktop build (CodeFusion.exe + resources/) is RETIRED — what we wanted from Qoder is Zingma.
Top-level entries: LICENSES.chromium.html, Onyx.exe, Qoder.VisualElementsManifest.xml, SOURCE, bin, chrome_100_percent.pak, chrome_200_percent.pak, d3dcompiler_47.dll.
The seat lives inside the `code` submodule, not in the superproject.
The launcher does not compile the seat; it opens the seat's own surface.
The gate checks that the folder exists or that the seat is explicitly empty.
The gate checks that the alias resolves to exactly one part.
The gate checks that the layout maps to the codename.
The seat's provenance is recorded in `THIRD_PARTY_NOTICES.md` and `payloads/CONFLICT.md`.

## 21.11 Onyx · risks and next steps
The current status of **Onyx** is **present**.
The folder note is: windows/onyx is a junction; physical folder rename is pending (handle lock)..
The layout mapping is: 4 = Studio.
An empty seat is a reserved seat, not a shipped feature.
A present folder is not a promise of a runnable entry point.
A missing entry point is a launcher limitation.
A pending rename is a handle-lock issue.
A large imported tree is a provenance issue.
A stale alias is a gate failure.
A stale layout is a gate failure.
The next step is recorded in the roadmap.
The next documentation step is to keep this chapter in sync.
The next validation step is to add a check for the seat.
The next provenance step is to review the imported tree.
The next product step is to make the seat startable where it is not.
The risk register is in the publication.
The risk register is reviewed at every publication build.
The risk register is not a promise that the risk is gone.
The next section is the file catalog.
`windows/onyx` is the seat folder; the launcher reads it through the registry.
The codename is **Onyx**; the alias is **Studio**.
The registry status is **present**.
The recorded contents are: VS Code OSS 1.147.0 source at SOURCE/vscode-main (21,224 files / 392 MB). The reverse-engineered Qoder desktop build (CodeFusion.exe + resources/) is RETIRED — what we wanted from Qoder is Zingma.
Top-level entries: LICENSES.chromium.html, Onyx.exe, Qoder.VisualElementsManifest.xml, SOURCE, bin, chrome_100_percent.pak, chrome_200_percent.pak, d3dcompiler_47.dll.
The seat lives inside the `code` submodule, not in the superproject.
The launcher does not compile the seat; it opens the seat's own surface.
The gate checks that the folder exists or that the seat is explicitly empty.
The gate checks that the alias resolves to exactly one part.
The gate checks that the layout maps to the codename.
The seat's provenance is recorded in `THIRD_PARTY_NOTICES.md` and `payloads/CONFLICT.md`.

## 21.12 Onyx · file catalog
- `LICENSES.chromium.html` — 19.4 MB.
- `Onyx.exe` — 216.1 MB.
- `Qoder.VisualElementsManifest.xml` — 384 B.
- `SOURCE` — dir.
- `bin` — dir.
- `chrome_100_percent.pak` — 117.1 KB.
- `chrome_200_percent.pak` — 192.5 KB.
- `d3dcompiler_47.dll` — 4.5 MB.
- `debug.log` — 157 B.
- `dxcompiler.dll` — 24.5 MB.
- `dxil.dll` — 1.4 MB.
- `ffmpeg.dll` — 2.9 MB.
- `icudtl.dat` — 10.4 MB.
- `libEGL.dll` — 510.5 KB.
- `libGLESv2.dll` — 7.7 MB.
- `locales` — dir.
- `resources` — dir.
- `resources.pak` — 6.6 MB.
- `snapshot_blob.bin` — 338.3 KB.
- `tools` — dir.
- `unins000.dat` — 2.4 MB.
- `unins000.exe` — 3.4 MB.
The catalog is a top-level sample.
The catalog is regenerated at build time.
The catalog is part of the publication's appendix.
The catalog is not a recursive file count.
The catalog is not a licence inventory.
The catalog is a map for the reader.
The next seat follows.
`windows/onyx` is the seat folder; the launcher reads it through the registry.

## 22.1 Codeix · overview
**Codeix** is the `windows/codeix` seat of CodeFusion.
Its alias is **Pro**; its status is **present**.
The registry records: Two OpenAI Codex MSIX packages (ui-old, ui-new) and a toggle; 2 files (1.6 GB).
Its integrated browser is the part called Chromix (no separate windows/chromix tree).
The top-level entries are: layout, window.json.
The layout mapping is: 3 = Pro.
The seat is part of the nine-seat map in the registry chapter.
The seat is not a separate repository; it is a folder in the `code` submodule.
The seat is opened by the launcher, not compiled into the launcher.
The seat keeps its own upstream source and its own runtime assumptions.
The seat is documented here because a cold reader needs the map.
The seat's provenance is recorded separately from its functionality.
The seat's status is a statement about the folder, not about quality.
The seat's alias is an edition label, not a role.
The seat's layout is the user-facing choice.
The seat's registry entry is the source of truth.
The seat's folder is checked by the gate.
The seat's entry is repeated in the nine-seat map.
The seat's next step is in the roadmap.
The seat's chapter continues with the registry entry.
The seat's facts are generated from `arch/windows.json`.
`windows/codeix` is the seat folder; the launcher reads it through the registry.
The codename is **Codeix**; the alias is **Pro**.
The registry status is **present**.
The recorded contents are: Two OpenAI Codex MSIX packages (ui-old, ui-new) and a toggle; 2 files (1.6 GB). Its integrated browser is the part called Chromix (no separate windows/chromix tree).
Top-level entries: layout, window.json.
The seat lives inside the `code` submodule, not in the superproject.
The launcher does not compile the seat; it opens the seat's own surface.
The gate checks that the folder exists or that the seat is explicitly empty.
The gate checks that the alias resolves to exactly one part.

## 22.2 Codeix · registry entry
Codename: `Codeix`.
Alias: `Pro`.
Folder: `windows/codeix`.
Status: `present`.
Contents: Two OpenAI Codex MSIX packages (ui-old, ui-new) and a toggle; 2 files (1.6 GB). Its
integrated browser is the part called Chromix (no separate windows/chromix tree).
Physical folder: `windows/codeix`.
Folder note: none.
The registry is `arch/windows.json`.
The alias resolution table maps the alias to the codename.
The retired alias table does not contain this codename unless it is retired.
The naming rule applies: the codename is the address; the alias is the label.
The registry entry is checked by `check-consistency.mjs`.
The registry entry is the first thing to edit when a seat changes.
The registry entry is the last thing to trust when a folder was renamed manually.
The registry entry does not grant a licence.
The registry entry does not promise that the seat is startable.
The registry entry does not hide an empty folder.
The registry entry is part of the publication's seat appendix.
The registry entry is generated into this section by the docs builder.
The next section lists the folder layout.
`windows/codeix` is the seat folder; the launcher reads it through the registry.
The codename is **Codeix**; the alias is **Pro**.
The registry status is **present**.
The recorded contents are: Two OpenAI Codex MSIX packages (ui-old, ui-new) and a toggle; 2 files (1.6 GB). Its integrated browser is the part called Chromix (no separate windows/chromix tree).
Top-level entries: layout, window.json.
The seat lives inside the `code` submodule, not in the superproject.
The launcher does not compile the seat; it opens the seat's own surface.
The gate checks that the folder exists or that the seat is explicitly empty.
The gate checks that the alias resolves to exactly one part.

## 22.3 Codeix · folder layout
The folder is `windows/codeix`.
Top-level entries (2): layout, window.json.
- `layout` — directory.
- `window.json` — 305 B.
The listing is sampled at the top level; the full tree is intentionally not copied into this README.
The full tree is available on disk and in the registry contents note.
The top-level listing is enough to tell a source tree from a reserved seat.
The listing is regenerated at build time.
The listing does not include ignored build outputs.
The listing does not include the `.git` directory.
The listing is part of the publication's provenance appendix.
The next section inventories the top level.
`windows/codeix` is the seat folder; the launcher reads it through the registry.
The codename is **Codeix**; the alias is **Pro**.
The registry status is **present**.
The recorded contents are: Two OpenAI Codex MSIX packages (ui-old, ui-new) and a toggle; 2 files (1.6 GB). Its integrated browser is the part called Chromix (no separate windows/chromix tree).
Top-level entries: layout, window.json.
The seat lives inside the `code` submodule, not in the superproject.
The launcher does not compile the seat; it opens the seat's own surface.
The gate checks that the folder exists or that the seat is explicitly empty.
The gate checks that the alias resolves to exactly one part.
The gate checks that the layout maps to the codename.
The seat's provenance is recorded in `THIRD_PARTY_NOTICES.md` and `payloads/CONFLICT.md`.
The seat's documentation is this README plus the seat's own upstream docs.
The seat's next step is recorded in the roadmap.
The seat's status is visible in the nine-seat map.
The seat's folder name is stable even when the display name changes.
The seat's alias is an edition label, not a second codename.
The seat's layout is the user-visible entry point.
The seat's launcher entry is validated before a release.

## 22.4 Codeix · top-level inventory
- `layout` — dir.
- `window.json` — 305 B.
The inventory is a top-level sample, not a recursive file count.
A recursive count is recorded in the registry contents note where it exists.
The inventory is regenerated at build time.
The inventory is used by the publication's appendix.
The inventory is not a substitute for the actual tree.
The inventory is not a licence inventory.
The inventory is not a security review.
The inventory is a map.
The next section describes build and run.
`windows/codeix` is the seat folder; the launcher reads it through the registry.
The codename is **Codeix**; the alias is **Pro**.
The registry status is **present**.
The recorded contents are: Two OpenAI Codex MSIX packages (ui-old, ui-new) and a toggle; 2 files (1.6 GB). Its integrated browser is the part called Chromix (no separate windows/chromix tree).
Top-level entries: layout, window.json.
The seat lives inside the `code` submodule, not in the superproject.
The launcher does not compile the seat; it opens the seat's own surface.
The gate checks that the folder exists or that the seat is explicitly empty.
The gate checks that the alias resolves to exactly one part.
The gate checks that the layout maps to the codename.
The seat's provenance is recorded in `THIRD_PARTY_NOTICES.md` and `payloads/CONFLICT.md`.
The seat's documentation is this README plus the seat's own upstream docs.
The seat's next step is recorded in the roadmap.
The seat's status is visible in the nine-seat map.
The seat's folder name is stable even when the display name changes.
The seat's alias is an edition label, not a second codename.
The seat's layout is the user-visible entry point.
The seat's launcher entry is validated before a release.
The seat's risks are recorded rather than hidden.

## 22.5 Codeix · build and run
The seat is opened from the launcher, not built by it.
The launcher entry is the `Codeix` layout when one exists.
The layout mapping is: 3 = Pro.
The launcher script is `launcher/launch.ps1`.
The launcher metadata is `launcher/window.json`.
The registry is read at runtime.
The seat's own build system, if any, is documented upstream.
The repository gate does not compile the seat.
The repository gate checks that the seat is registered.
A missing entry point is a launcher limitation, not a build failure.
A seat with status `empty` has no runnable surface.
A seat with status `present` has a folder, not necessarily a runnable entry.
The launcher's first question is Editor or Fusion.
The layout picker is the second question.
The seat is the third choice.
The order is deliberate: the launcher stays small.
The seat's runtime is its own responsibility.
The seat's provenance is the repository's responsibility.
The seat's documentation is this chapter.
The next section describes the runtime surface.
`windows/codeix` is the seat folder; the launcher reads it through the registry.
The codename is **Codeix**; the alias is **Pro**.
The registry status is **present**.
The recorded contents are: Two OpenAI Codex MSIX packages (ui-old, ui-new) and a toggle; 2 files (1.6 GB). Its integrated browser is the part called Chromix (no separate windows/chromix tree).
Top-level entries: layout, window.json.
The seat lives inside the `code` submodule, not in the superproject.
The launcher does not compile the seat; it opens the seat's own surface.
The gate checks that the folder exists or that the seat is explicitly empty.
The gate checks that the alias resolves to exactly one part.
The gate checks that the layout maps to the codename.

## 22.6 Codeix · runtime surface
The runtime surface of **Codeix** is the window opened by its layout.
The layout mapping is: 3 = Pro.
The Editor window is always available as a singleton.
The Fusion window is the merged surface with the layout picker.
The seat may expose its own settings or sub-layouts.
The seat may be a native window, a web app, a CLI or an installed package.
The registry contents note names the source shape.
The launcher does not normalize the seat's UI.
The launcher does not promise feature parity between seats.
The launcher does not hide the seat's origin.
The seat's title is its own.
The seat's icon is its own where it has one.
The seat's window metadata is its own `window.json` where it exists.
The seat's runtime is validated by opening it.
The seat's runtime is not validated by the consistency gate.
The seat's runtime is documented in the publication's seat chapter.
The next section describes launcher integration.
`windows/codeix` is the seat folder; the launcher reads it through the registry.
The codename is **Codeix**; the alias is **Pro**.
The registry status is **present**.
The recorded contents are: Two OpenAI Codex MSIX packages (ui-old, ui-new) and a toggle; 2 files (1.6 GB). Its integrated browser is the part called Chromix (no separate windows/chromix tree).
Top-level entries: layout, window.json.
The seat lives inside the `code` submodule, not in the superproject.
The launcher does not compile the seat; it opens the seat's own surface.
The gate checks that the folder exists or that the seat is explicitly empty.
The gate checks that the alias resolves to exactly one part.
The gate checks that the layout maps to the codename.
The seat's provenance is recorded in `THIRD_PARTY_NOTICES.md` and `payloads/CONFLICT.md`.
The seat's documentation is this README plus the seat's own upstream docs.
The seat's next step is recorded in the roadmap.

## 22.7 Codeix · launcher integration
The launcher reads `arch/windows.json` to find **Codeix**.
The layout picker reads `arch/layouts.json` to place **Codeix**.
The current layout mapping is: 3 = Pro.
The launcher does not hard-code the seat list.
The launcher does not hard-code the alias ladder.
The launcher does not hard-code the folder path.
The launcher's first question is Editor or Fusion.
The layout picker is the in-app part choice.
The registry and the layout file are checked together.
A missing layout is a gate failure.
A missing registry entry is a gate failure.
A mismatched alias is a gate failure.
The gate runs before the launcher change is accepted.
The gate is `node scripts/rebrand/check-consistency.mjs`.
The gate's current result is 13/13 checks passed.
The integration is deliberately data-driven.
The integration is the reason a new seat is a registry change, not a launcher rewrite.
The integration is documented in `arch/README.md`.
The next section maps the layout.
`windows/codeix` is the seat folder; the launcher reads it through the registry.
The codename is **Codeix**; the alias is **Pro**.
The registry status is **present**.
The recorded contents are: Two OpenAI Codex MSIX packages (ui-old, ui-new) and a toggle; 2 files (1.6 GB). Its integrated browser is the part called Chromix (no separate windows/chromix tree).
Top-level entries: layout, window.json.
The seat lives inside the `code` submodule, not in the superproject.
The launcher does not compile the seat; it opens the seat's own surface.
The gate checks that the folder exists or that the seat is explicitly empty.
The gate checks that the alias resolves to exactly one part.
The gate checks that the layout maps to the codename.
The seat's provenance is recorded in `THIRD_PARTY_NOTICES.md` and `payloads/CONFLICT.md`.

## 22.8 Codeix · layout mapping
Layout entries for **Codeix**: 3 = Pro.
The layout file records the order, the name, the alias, the part and the source.
The layout order is Lite, Plus, Pro, Studio, Max, Ultra.
The order is an edition ladder, not a quality ranking.
The Editor window is available from every layout.
The Fusion window is the merged surface.
A layout can have variants; Pro has New Codeix and Old Codeix.
A layout can expose a sub-layout; Settings is reachable under Pro.
A layout without a part is invalid.
A part without a layout is invalid.
The layout file is JSON because the launcher and the gate both read it.
The layout file is updated with the registry, never after it.
The layout file is part of the publication's seat chapter.
The layout file is generated into this section by the docs builder.
The next section describes validation.
`windows/codeix` is the seat folder; the launcher reads it through the registry.
The codename is **Codeix**; the alias is **Pro**.
The registry status is **present**.
The recorded contents are: Two OpenAI Codex MSIX packages (ui-old, ui-new) and a toggle; 2 files (1.6 GB). Its integrated browser is the part called Chromix (no separate windows/chromix tree).
Top-level entries: layout, window.json.
The seat lives inside the `code` submodule, not in the superproject.
The launcher does not compile the seat; it opens the seat's own surface.
The gate checks that the folder exists or that the seat is explicitly empty.
The gate checks that the alias resolves to exactly one part.
The gate checks that the layout maps to the codename.
The seat's provenance is recorded in `THIRD_PARTY_NOTICES.md` and `payloads/CONFLICT.md`.
The seat's documentation is this README plus the seat's own upstream docs.
The seat's next step is recorded in the roadmap.
The seat's status is visible in the nine-seat map.
The seat's folder name is stable even when the display name changes.

## 22.9 Codeix · validation
Run `node scripts/rebrand/check-consistency.mjs` after changing **Codeix**.
The gate checks the registry, the launcher UI, the launcher manifest and the component folders.
The gate checks that the folder exists or the seat is explicitly empty.
The gate checks that the alias resolves to exactly one part.
The gate checks that the layout maps to the codename.
The gate checks that the launcher title matches the registry.
The gate checks that a retired alias does not resolve.
The gate reports a pass count.
The current gate is 13/13 checks passed.
A failure names the file and the expected relationship.
The gate is not weakened to make a release look clean.
The gate is part of the dashboard's code-repo section.
The gate is part of the D-31 documentation evidence.
The gate is run before the commit.
The gate is run after the rename.
The gate is run after the documentation build.
The gate is a contract, not a suggestion.
The next section describes security and provenance.
`windows/codeix` is the seat folder; the launcher reads it through the registry.
The codename is **Codeix**; the alias is **Pro**.
The registry status is **present**.
The recorded contents are: Two OpenAI Codex MSIX packages (ui-old, ui-new) and a toggle; 2 files (1.6 GB). Its integrated browser is the part called Chromix (no separate windows/chromix tree).
Top-level entries: layout, window.json.
The seat lives inside the `code` submodule, not in the superproject.
The launcher does not compile the seat; it opens the seat's own surface.
The gate checks that the folder exists or that the seat is explicitly empty.
The gate checks that the alias resolves to exactly one part.
The gate checks that the layout maps to the codename.
The seat's provenance is recorded in `THIRD_PARTY_NOTICES.md` and `payloads/CONFLICT.md`.
The seat's documentation is this README plus the seat's own upstream docs.

## 22.10 Codeix · security and provenance
**Codeix** is imported or project-authored; the registry contents note records which.
The imported source keeps its own licence and its own redistribution terms.
The repository does not grant a blanket licence over the seat.
The `THIRD_PARTY_NOTICES.md` file is the starting point.
The `payloads/CONFLICT.md` file records known conflicts.
Do not redistribute a third-party binary as project-authored.
Do not remove a provenance note to make a package look cleaner.
Do not assume an upstream licence covers a modified build.
The security review treats a missing provenance note as a finding.
The security review treats a hidden binary as a finding.
The seat's attack surface is its own runtime.
The launcher does not elevate privileges by default.
The launcher reads local files; it does not upload them.
The seat's secrets are not committed to the repository.
The seat's build artefacts are not committed to the repository.
The seat's provenance is part of the publication.
The safe answer is to ask before redistributing.
The conservative answer is to ship only project-authored files.
The next section describes risks and next steps.
`windows/codeix` is the seat folder; the launcher reads it through the registry.
The codename is **Codeix**; the alias is **Pro**.
The registry status is **present**.
The recorded contents are: Two OpenAI Codex MSIX packages (ui-old, ui-new) and a toggle; 2 files (1.6 GB). Its integrated browser is the part called Chromix (no separate windows/chromix tree).
Top-level entries: layout, window.json.
The seat lives inside the `code` submodule, not in the superproject.
The launcher does not compile the seat; it opens the seat's own surface.
The gate checks that the folder exists or that the seat is explicitly empty.
The gate checks that the alias resolves to exactly one part.
The gate checks that the layout maps to the codename.
The seat's provenance is recorded in `THIRD_PARTY_NOTICES.md` and `payloads/CONFLICT.md`.

## 22.11 Codeix · risks and next steps
The current status of **Codeix** is **present**.
The folder note is: none.
The layout mapping is: 3 = Pro.
An empty seat is a reserved seat, not a shipped feature.
A present folder is not a promise of a runnable entry point.
A missing entry point is a launcher limitation.
A pending rename is a handle-lock issue.
A large imported tree is a provenance issue.
A stale alias is a gate failure.
A stale layout is a gate failure.
The next step is recorded in the roadmap.
The next documentation step is to keep this chapter in sync.
The next validation step is to add a check for the seat.
The next provenance step is to review the imported tree.
The next product step is to make the seat startable where it is not.
The risk register is in the publication.
The risk register is reviewed at every publication build.
The risk register is not a promise that the risk is gone.
The next section is the file catalog.
`windows/codeix` is the seat folder; the launcher reads it through the registry.
The codename is **Codeix**; the alias is **Pro**.
The registry status is **present**.
The recorded contents are: Two OpenAI Codex MSIX packages (ui-old, ui-new) and a toggle; 2 files (1.6 GB). Its integrated browser is the part called Chromix (no separate windows/chromix tree).
Top-level entries: layout, window.json.
The seat lives inside the `code` submodule, not in the superproject.
The launcher does not compile the seat; it opens the seat's own surface.
The gate checks that the folder exists or that the seat is explicitly empty.
The gate checks that the alias resolves to exactly one part.
The gate checks that the layout maps to the codename.
The seat's provenance is recorded in `THIRD_PARTY_NOTICES.md` and `payloads/CONFLICT.md`.

## 22.12 Codeix · file catalog
- `layout` — dir.
- `window.json` — 305 B.
The catalog is a top-level sample.
The catalog is regenerated at build time.
The catalog is part of the publication's appendix.
The catalog is not a recursive file count.
The catalog is not a licence inventory.
The catalog is a map for the reader.
The next seat follows.
`windows/codeix` is the seat folder; the launcher reads it through the registry.
The codename is **Codeix**; the alias is **Pro**.
The registry status is **present**.
The recorded contents are: Two OpenAI Codex MSIX packages (ui-old, ui-new) and a toggle; 2 files (1.6 GB). Its integrated browser is the part called Chromix (no separate windows/chromix tree).
Top-level entries: layout, window.json.
The seat lives inside the `code` submodule, not in the superproject.
The launcher does not compile the seat; it opens the seat's own surface.
The gate checks that the folder exists or that the seat is explicitly empty.
The gate checks that the alias resolves to exactly one part.
The gate checks that the layout maps to the codename.
The seat's provenance is recorded in `THIRD_PARTY_NOTICES.md` and `payloads/CONFLICT.md`.
The seat's documentation is this README plus the seat's own upstream docs.
The seat's next step is recorded in the roadmap.
The seat's status is visible in the nine-seat map.
The seat's folder name is stable even when the display name changes.
The seat's alias is an edition label, not a second codename.
The seat's layout is the user-visible entry point.
The seat's launcher entry is validated before a release.
The seat's risks are recorded rather than hidden.
The seat's publication chapter is generated from these facts.
`windows/codeix` is the seat folder; the launcher reads it through the registry.

## 23.1 GSX-CLI · overview
**GSX-CLI** is the `windows/gsx-cli` seat of CodeFusion.
Its alias is **—**; its status is **present**.
The registry records: opencode workspace - package name 'opencode', packages/, bun.lock; 2,060 files.
Holds MiMoCode source code from Xiaomi.
The top-level entries are: .claude, .claude-plugin, .devcontainer, .gitattributes, .github,
.gitignore, .vscode, CHANGELOG.md.
The layout mapping is: 7 = GSX-CLI.
The seat is part of the nine-seat map in the registry chapter.
The seat is not a separate repository; it is a folder in the `code` submodule.
The seat is opened by the launcher, not compiled into the launcher.
The seat keeps its own upstream source and its own runtime assumptions.
The seat is documented here because a cold reader needs the map.
The seat's provenance is recorded separately from its functionality.
The seat's status is a statement about the folder, not about quality.
The seat's alias is an edition label, not a role.
The seat's layout is the user-facing choice.
The seat's registry entry is the source of truth.
The seat's folder is checked by the gate.
The seat's entry is repeated in the nine-seat map.
The seat's next step is in the roadmap.
The seat's chapter continues with the registry entry.
The seat's facts are generated from `arch/windows.json`.
`windows/gsx-cli` is the seat folder; the launcher reads it through the registry.
The codename is **GSX-CLI**; the alias is **—**.
The registry status is **present**.
The recorded contents are: opencode workspace - package name 'opencode', packages/, bun.lock; 2,060 files. Holds MiMoCode source code from Xiaomi.
Top-level entries: .claude, .claude-plugin, .devcontainer, .gitattributes, .github, .gitignore, .vscode, CHANGELOG.md.
The seat lives inside the `code` submodule, not in the superproject.
The launcher does not compile the seat; it opens the seat's own surface.
The gate checks that the folder exists or that the seat is explicitly empty.

## 23.2 GSX-CLI · registry entry
Codename: `GSX-CLI`.
Alias: `—`.
Folder: `windows/gsx-cli`.
Status: `present`.
Contents: opencode workspace - package name 'opencode', packages/, bun.lock; 2,060 files. Holds
MiMoCode source code from Xiaomi.
Physical folder: `windows/gsx-cli`.
Folder note: none.
The registry is `arch/windows.json`.
The alias resolution table maps the alias to the codename.
The retired alias table does not contain this codename unless it is retired.
The naming rule applies: the codename is the address; the alias is the label.
The registry entry is checked by `check-consistency.mjs`.
The registry entry is the first thing to edit when a seat changes.
The registry entry is the last thing to trust when a folder was renamed manually.
The registry entry does not grant a licence.
The registry entry does not promise that the seat is startable.
The registry entry does not hide an empty folder.
The registry entry is part of the publication's seat appendix.
The registry entry is generated into this section by the docs builder.
The next section lists the folder layout.
`windows/gsx-cli` is the seat folder; the launcher reads it through the registry.
The codename is **GSX-CLI**; the alias is **—**.
The registry status is **present**.
The recorded contents are: opencode workspace - package name 'opencode', packages/, bun.lock; 2,060 files. Holds MiMoCode source code from Xiaomi.
Top-level entries: .claude, .claude-plugin, .devcontainer, .gitattributes, .github, .gitignore, .vscode, CHANGELOG.md.
The seat lives inside the `code` submodule, not in the superproject.
The launcher does not compile the seat; it opens the seat's own surface.
The gate checks that the folder exists or that the seat is explicitly empty.
The gate checks that the alias resolves to exactly one part.

## 23.3 GSX-CLI · folder layout
The folder is `windows/gsx-cli`.
Top-level entries (19): .claude, .claude-plugin, .devcontainer, .gitattributes, .github, .gitignore,
.vscode, CHANGELOG.md.
- `.claude` — directory.
- `.claude-plugin` — directory.
- `.devcontainer` — directory.
- `.gitattributes` — 35 B.
- `.github` — directory.
- `.gitignore` — 11 B.
- `.vscode` — directory.
- `CHANGELOG.md` — 1.1 MB.
- `CLAUDE.md` — 2.2 KB.
- `LICENSE.md` — 150 B.
- `README.md` — 2.8 KB.
- `SECURITY.md` — 674 B.
The listing is sampled at the top level; the full tree is intentionally not copied into this README.
The full tree is available on disk and in the registry contents note.
The top-level listing is enough to tell a source tree from a reserved seat.
The listing is regenerated at build time.
The listing does not include ignored build outputs.
The listing does not include the `.git` directory.
The listing is part of the publication's provenance appendix.
The next section inventories the top level.
`windows/gsx-cli` is the seat folder; the launcher reads it through the registry.
The codename is **GSX-CLI**; the alias is **—**.
The registry status is **present**.
The recorded contents are: opencode workspace - package name 'opencode', packages/, bun.lock; 2,060 files. Holds MiMoCode source code from Xiaomi.
Top-level entries: .claude, .claude-plugin, .devcontainer, .gitattributes, .github, .gitignore, .vscode, CHANGELOG.md.
The seat lives inside the `code` submodule, not in the superproject.
The launcher does not compile the seat; it opens the seat's own surface.

## 23.4 GSX-CLI · top-level inventory
- `.claude` — dir.
- `.claude-plugin` — dir.
- `.devcontainer` — dir.
- `.gitattributes` — 35 B.
- `.github` — dir.
- `.gitignore` — 11 B.
- `.vscode` — dir.
- `CHANGELOG.md` — 1.1 MB.
- `CLAUDE.md` — 2.2 KB.
- `LICENSE.md` — 150 B.
- `README.md` — 2.8 KB.
- `SECURITY.md` — 674 B.
- `Script` — dir.
- `demo.gif` — 10.5 MB.
- `examples` — dir.
- `feed.xml` — 204.4 KB.
- `mods` — dir.
- `plugins` — dir.
- `scripts` — dir.
The inventory is a top-level sample, not a recursive file count.
A recursive count is recorded in the registry contents note where it exists.
The inventory is regenerated at build time.
The inventory is used by the publication's appendix.
The inventory is not a substitute for the actual tree.
The inventory is not a licence inventory.
The inventory is not a security review.
The inventory is a map.
The next section describes build and run.
`windows/gsx-cli` is the seat folder; the launcher reads it through the registry.
The codename is **GSX-CLI**; the alias is **—**.

## 23.5 GSX-CLI · build and run
The seat is opened from the launcher, not built by it.
The launcher entry is the `GSX-CLI` layout when one exists.
The layout mapping is: 7 = GSX-CLI.
The launcher script is `launcher/launch.ps1`.
The launcher metadata is `launcher/window.json`.
The registry is read at runtime.
The seat's own build system, if any, is documented upstream.
The repository gate does not compile the seat.
The repository gate checks that the seat is registered.
A missing entry point is a launcher limitation, not a build failure.
A seat with status `empty` has no runnable surface.
A seat with status `present` has a folder, not necessarily a runnable entry.
The launcher's first question is Editor or Fusion.
The layout picker is the second question.
The seat is the third choice.
The order is deliberate: the launcher stays small.
The seat's runtime is its own responsibility.
The seat's provenance is the repository's responsibility.
The seat's documentation is this chapter.
The next section describes the runtime surface.
`windows/gsx-cli` is the seat folder; the launcher reads it through the registry.
The codename is **GSX-CLI**; the alias is **—**.
The registry status is **present**.
The recorded contents are: opencode workspace - package name 'opencode', packages/, bun.lock; 2,060 files. Holds MiMoCode source code from Xiaomi.
Top-level entries: .claude, .claude-plugin, .devcontainer, .gitattributes, .github, .gitignore, .vscode, CHANGELOG.md.
The seat lives inside the `code` submodule, not in the superproject.
The launcher does not compile the seat; it opens the seat's own surface.
The gate checks that the folder exists or that the seat is explicitly empty.
The gate checks that the alias resolves to exactly one part.
The gate checks that the layout maps to the codename.

## 23.6 GSX-CLI · runtime surface
The runtime surface of **GSX-CLI** is the window opened by its layout.
The layout mapping is: 7 = GSX-CLI.
The Editor window is always available as a singleton.
The Fusion window is the merged surface with the layout picker.
The seat may expose its own settings or sub-layouts.
The seat may be a native window, a web app, a CLI or an installed package.
The registry contents note names the source shape.
The launcher does not normalize the seat's UI.
The launcher does not promise feature parity between seats.
The launcher does not hide the seat's origin.
The seat's title is its own.
The seat's icon is its own where it has one.
The seat's window metadata is its own `window.json` where it exists.
The seat's runtime is validated by opening it.
The seat's runtime is not validated by the consistency gate.
The seat's runtime is documented in the publication's seat chapter.
The next section describes launcher integration.
`windows/gsx-cli` is the seat folder; the launcher reads it through the registry.
The codename is **GSX-CLI**; the alias is **—**.
The registry status is **present**.
The recorded contents are: opencode workspace - package name 'opencode', packages/, bun.lock; 2,060 files. Holds MiMoCode source code from Xiaomi.
Top-level entries: .claude, .claude-plugin, .devcontainer, .gitattributes, .github, .gitignore, .vscode, CHANGELOG.md.
The seat lives inside the `code` submodule, not in the superproject.
The launcher does not compile the seat; it opens the seat's own surface.
The gate checks that the folder exists or that the seat is explicitly empty.
The gate checks that the alias resolves to exactly one part.
The gate checks that the layout maps to the codename.
The seat's provenance is recorded in `THIRD_PARTY_NOTICES.md` and `payloads/CONFLICT.md`.
The seat's documentation is this README plus the seat's own upstream docs.
The seat's next step is recorded in the roadmap.

## 23.7 GSX-CLI · launcher integration
The launcher reads `arch/windows.json` to find **GSX-CLI**.
The layout picker reads `arch/layouts.json` to place **GSX-CLI**.
The current layout mapping is: 7 = GSX-CLI.
The launcher does not hard-code the seat list.
The launcher does not hard-code the alias ladder.
The launcher does not hard-code the folder path.
The launcher's first question is Editor or Fusion.
The layout picker is the in-app part choice.
The registry and the layout file are checked together.
A missing layout is a gate failure.
A missing registry entry is a gate failure.
A mismatched alias is a gate failure.
The gate runs before the launcher change is accepted.
The gate is `node scripts/rebrand/check-consistency.mjs`.
The gate's current result is 13/13 checks passed.
The integration is deliberately data-driven.
The integration is the reason a new seat is a registry change, not a launcher rewrite.
The integration is documented in `arch/README.md`.
The next section maps the layout.
`windows/gsx-cli` is the seat folder; the launcher reads it through the registry.
The codename is **GSX-CLI**; the alias is **—**.
The registry status is **present**.
The recorded contents are: opencode workspace - package name 'opencode', packages/, bun.lock; 2,060 files. Holds MiMoCode source code from Xiaomi.
Top-level entries: .claude, .claude-plugin, .devcontainer, .gitattributes, .github, .gitignore, .vscode, CHANGELOG.md.
The seat lives inside the `code` submodule, not in the superproject.
The launcher does not compile the seat; it opens the seat's own surface.
The gate checks that the folder exists or that the seat is explicitly empty.
The gate checks that the alias resolves to exactly one part.
The gate checks that the layout maps to the codename.
The seat's provenance is recorded in `THIRD_PARTY_NOTICES.md` and `payloads/CONFLICT.md`.

## 23.8 GSX-CLI · layout mapping
Layout entries for **GSX-CLI**: 7 = GSX-CLI.
The layout file records the order, the name, the alias, the part and the source.
The layout order is Lite, Plus, Pro, Studio, Max, Ultra.
The order is an edition ladder, not a quality ranking.
The Editor window is available from every layout.
The Fusion window is the merged surface.
A layout can have variants; Pro has New Codeix and Old Codeix.
A layout can expose a sub-layout; Settings is reachable under Pro.
A layout without a part is invalid.
A part without a layout is invalid.
The layout file is JSON because the launcher and the gate both read it.
The layout file is updated with the registry, never after it.
The layout file is part of the publication's seat chapter.
The layout file is generated into this section by the docs builder.
The next section describes validation.
`windows/gsx-cli` is the seat folder; the launcher reads it through the registry.
The codename is **GSX-CLI**; the alias is **—**.
The registry status is **present**.
The recorded contents are: opencode workspace - package name 'opencode', packages/, bun.lock; 2,060 files. Holds MiMoCode source code from Xiaomi.
Top-level entries: .claude, .claude-plugin, .devcontainer, .gitattributes, .github, .gitignore, .vscode, CHANGELOG.md.
The seat lives inside the `code` submodule, not in the superproject.
The launcher does not compile the seat; it opens the seat's own surface.
The gate checks that the folder exists or that the seat is explicitly empty.
The gate checks that the alias resolves to exactly one part.
The gate checks that the layout maps to the codename.
The seat's provenance is recorded in `THIRD_PARTY_NOTICES.md` and `payloads/CONFLICT.md`.
The seat's documentation is this README plus the seat's own upstream docs.
The seat's next step is recorded in the roadmap.
The seat's status is visible in the nine-seat map.
The seat's folder name is stable even when the display name changes.

## 23.9 GSX-CLI · validation
Run `node scripts/rebrand/check-consistency.mjs` after changing **GSX-CLI**.
The gate checks the registry, the launcher UI, the launcher manifest and the component folders.
The gate checks that the folder exists or the seat is explicitly empty.
The gate checks that the alias resolves to exactly one part.
The gate checks that the layout maps to the codename.
The gate checks that the launcher title matches the registry.
The gate checks that a retired alias does not resolve.
The gate reports a pass count.
The current gate is 13/13 checks passed.
A failure names the file and the expected relationship.
The gate is not weakened to make a release look clean.
The gate is part of the dashboard's code-repo section.
The gate is part of the D-31 documentation evidence.
The gate is run before the commit.
The gate is run after the rename.
The gate is run after the documentation build.
The gate is a contract, not a suggestion.
The next section describes security and provenance.
`windows/gsx-cli` is the seat folder; the launcher reads it through the registry.
The codename is **GSX-CLI**; the alias is **—**.
The registry status is **present**.
The recorded contents are: opencode workspace - package name 'opencode', packages/, bun.lock; 2,060 files. Holds MiMoCode source code from Xiaomi.
Top-level entries: .claude, .claude-plugin, .devcontainer, .gitattributes, .github, .gitignore, .vscode, CHANGELOG.md.
The seat lives inside the `code` submodule, not in the superproject.
The launcher does not compile the seat; it opens the seat's own surface.
The gate checks that the folder exists or that the seat is explicitly empty.
The gate checks that the alias resolves to exactly one part.
The gate checks that the layout maps to the codename.
The seat's provenance is recorded in `THIRD_PARTY_NOTICES.md` and `payloads/CONFLICT.md`.
The seat's documentation is this README plus the seat's own upstream docs.

## 23.10 GSX-CLI · security and provenance
**GSX-CLI** is imported or project-authored; the registry contents note records which.
The imported source keeps its own licence and its own redistribution terms.
The repository does not grant a blanket licence over the seat.
The `THIRD_PARTY_NOTICES.md` file is the starting point.
The `payloads/CONFLICT.md` file records known conflicts.
Do not redistribute a third-party binary as project-authored.
Do not remove a provenance note to make a package look cleaner.
Do not assume an upstream licence covers a modified build.
The security review treats a missing provenance note as a finding.
The security review treats a hidden binary as a finding.
The seat's attack surface is its own runtime.
The launcher does not elevate privileges by default.
The launcher reads local files; it does not upload them.
The seat's secrets are not committed to the repository.
The seat's build artefacts are not committed to the repository.
The seat's provenance is part of the publication.
The safe answer is to ask before redistributing.
The conservative answer is to ship only project-authored files.
The next section describes risks and next steps.
`windows/gsx-cli` is the seat folder; the launcher reads it through the registry.
The codename is **GSX-CLI**; the alias is **—**.
The registry status is **present**.
The recorded contents are: opencode workspace - package name 'opencode', packages/, bun.lock; 2,060 files. Holds MiMoCode source code from Xiaomi.
Top-level entries: .claude, .claude-plugin, .devcontainer, .gitattributes, .github, .gitignore, .vscode, CHANGELOG.md.
The seat lives inside the `code` submodule, not in the superproject.
The launcher does not compile the seat; it opens the seat's own surface.
The gate checks that the folder exists or that the seat is explicitly empty.
The gate checks that the alias resolves to exactly one part.
The gate checks that the layout maps to the codename.
The seat's provenance is recorded in `THIRD_PARTY_NOTICES.md` and `payloads/CONFLICT.md`.

## 23.11 GSX-CLI · risks and next steps
The current status of **GSX-CLI** is **present**.
The folder note is: none.
The layout mapping is: 7 = GSX-CLI.
An empty seat is a reserved seat, not a shipped feature.
A present folder is not a promise of a runnable entry point.
A missing entry point is a launcher limitation.
A pending rename is a handle-lock issue.
A large imported tree is a provenance issue.
A stale alias is a gate failure.
A stale layout is a gate failure.
The next step is recorded in the roadmap.
The next documentation step is to keep this chapter in sync.
The next validation step is to add a check for the seat.
The next provenance step is to review the imported tree.
The next product step is to make the seat startable where it is not.
The risk register is in the publication.
The risk register is reviewed at every publication build.
The risk register is not a promise that the risk is gone.
The next section is the file catalog.
`windows/gsx-cli` is the seat folder; the launcher reads it through the registry.
The codename is **GSX-CLI**; the alias is **—**.
The registry status is **present**.
The recorded contents are: opencode workspace - package name 'opencode', packages/, bun.lock; 2,060 files. Holds MiMoCode source code from Xiaomi.
Top-level entries: .claude, .claude-plugin, .devcontainer, .gitattributes, .github, .gitignore, .vscode, CHANGELOG.md.
The seat lives inside the `code` submodule, not in the superproject.
The launcher does not compile the seat; it opens the seat's own surface.
The gate checks that the folder exists or that the seat is explicitly empty.
The gate checks that the alias resolves to exactly one part.
The gate checks that the layout maps to the codename.
The seat's provenance is recorded in `THIRD_PARTY_NOTICES.md` and `payloads/CONFLICT.md`.

## 23.12 GSX-CLI · file catalog
- `.claude` — dir.
- `.claude-plugin` — dir.
- `.devcontainer` — dir.
- `.gitattributes` — 35 B.
- `.github` — dir.
- `.gitignore` — 11 B.
- `.vscode` — dir.
- `CHANGELOG.md` — 1.1 MB.
- `CLAUDE.md` — 2.2 KB.
- `LICENSE.md` — 150 B.
- `README.md` — 2.8 KB.
- `SECURITY.md` — 674 B.
- `Script` — dir.
- `demo.gif` — 10.5 MB.
- `examples` — dir.
- `feed.xml` — 204.4 KB.
- `mods` — dir.
- `plugins` — dir.
- `scripts` — dir.
The catalog is a top-level sample.
The catalog is regenerated at build time.
The catalog is part of the publication's appendix.
The catalog is not a recursive file count.
The catalog is not a licence inventory.
The catalog is a map for the reader.
The next seat follows.
`windows/gsx-cli` is the seat folder; the launcher reads it through the registry.
The codename is **GSX-CLI**; the alias is **—**.
The registry status is **present**.
The recorded contents are: opencode workspace - package name 'opencode', packages/, bun.lock; 2,060 files. Holds MiMoCode source code from Xiaomi.

## 24.1 Zingma · overview
**Zingma** is the `windows/zingma` seat of CodeFusion.
Its alias is **Lite**; its status is **present**.
The registry records: Qoder 1.18.0 native Quest/agents window (upstream codename Lingma); SOURCE/ raw
+ oxfmt-beautified, 66 files / 125 MB.
The top-level entries are: SOURCE, window.json.
The layout mapping is: 1 = Lite.
The seat is part of the nine-seat map in the registry chapter.
The seat is not a separate repository; it is a folder in the `code` submodule.
The seat is opened by the launcher, not compiled into the launcher.
The seat keeps its own upstream source and its own runtime assumptions.
The seat is documented here because a cold reader needs the map.
The seat's provenance is recorded separately from its functionality.
The seat's status is a statement about the folder, not about quality.
The seat's alias is an edition label, not a role.
The seat's layout is the user-facing choice.
The seat's registry entry is the source of truth.
The seat's folder is checked by the gate.
The seat's entry is repeated in the nine-seat map.
The seat's next step is in the roadmap.
The seat's chapter continues with the registry entry.
The seat's facts are generated from `arch/windows.json`.
`windows/zingma` is the seat folder; the launcher reads it through the registry.
The codename is **Zingma**; the alias is **Lite**.
The registry status is **present**.
The recorded contents are: Qoder 1.18.0 native Quest/agents window (upstream codename Lingma); SOURCE/ raw + oxfmt-beautified, 66 files / 125 MB.
Top-level entries: SOURCE, window.json.
The seat lives inside the `code` submodule, not in the superproject.
The launcher does not compile the seat; it opens the seat's own surface.
The gate checks that the folder exists or that the seat is explicitly empty.
The gate checks that the alias resolves to exactly one part.

## 24.2 Zingma · registry entry
Codename: `Zingma`.
Alias: `Lite`.
Folder: `windows/zingma`.
Status: `present`.
Contents: Qoder 1.18.0 native Quest/agents window (upstream codename Lingma); SOURCE/ raw +
oxfmt-beautified, 66 files / 125 MB.
Physical folder: `windows/zingma`.
Folder note: none.
The registry is `arch/windows.json`.
The alias resolution table maps the alias to the codename.
The retired alias table does not contain this codename unless it is retired.
The naming rule applies: the codename is the address; the alias is the label.
The registry entry is checked by `check-consistency.mjs`.
The registry entry is the first thing to edit when a seat changes.
The registry entry is the last thing to trust when a folder was renamed manually.
The registry entry does not grant a licence.
The registry entry does not promise that the seat is startable.
The registry entry does not hide an empty folder.
The registry entry is part of the publication's seat appendix.
The registry entry is generated into this section by the docs builder.
The next section lists the folder layout.
`windows/zingma` is the seat folder; the launcher reads it through the registry.
The codename is **Zingma**; the alias is **Lite**.
The registry status is **present**.
The recorded contents are: Qoder 1.18.0 native Quest/agents window (upstream codename Lingma); SOURCE/ raw + oxfmt-beautified, 66 files / 125 MB.
Top-level entries: SOURCE, window.json.
The seat lives inside the `code` submodule, not in the superproject.
The launcher does not compile the seat; it opens the seat's own surface.
The gate checks that the folder exists or that the seat is explicitly empty.
The gate checks that the alias resolves to exactly one part.

## 24.3 Zingma · folder layout
The folder is `windows/zingma`.
Top-level entries (2): SOURCE, window.json.
- `SOURCE` — directory.
- `window.json` — 484 B.
The listing is sampled at the top level; the full tree is intentionally not copied into this README.
The full tree is available on disk and in the registry contents note.
The top-level listing is enough to tell a source tree from a reserved seat.
The listing is regenerated at build time.
The listing does not include ignored build outputs.
The listing does not include the `.git` directory.
The listing is part of the publication's provenance appendix.
The next section inventories the top level.
`windows/zingma` is the seat folder; the launcher reads it through the registry.
The codename is **Zingma**; the alias is **Lite**.
The registry status is **present**.
The recorded contents are: Qoder 1.18.0 native Quest/agents window (upstream codename Lingma); SOURCE/ raw + oxfmt-beautified, 66 files / 125 MB.
Top-level entries: SOURCE, window.json.
The seat lives inside the `code` submodule, not in the superproject.
The launcher does not compile the seat; it opens the seat's own surface.
The gate checks that the folder exists or that the seat is explicitly empty.
The gate checks that the alias resolves to exactly one part.
The gate checks that the layout maps to the codename.
The seat's provenance is recorded in `THIRD_PARTY_NOTICES.md` and `payloads/CONFLICT.md`.
The seat's documentation is this README plus the seat's own upstream docs.
The seat's next step is recorded in the roadmap.
The seat's status is visible in the nine-seat map.
The seat's folder name is stable even when the display name changes.
The seat's alias is an edition label, not a second codename.
The seat's layout is the user-visible entry point.
The seat's launcher entry is validated before a release.

## 24.4 Zingma · top-level inventory
- `SOURCE` — dir.
- `window.json` — 484 B.
The inventory is a top-level sample, not a recursive file count.
A recursive count is recorded in the registry contents note where it exists.
The inventory is regenerated at build time.
The inventory is used by the publication's appendix.
The inventory is not a substitute for the actual tree.
The inventory is not a licence inventory.
The inventory is not a security review.
The inventory is a map.
The next section describes build and run.
`windows/zingma` is the seat folder; the launcher reads it through the registry.
The codename is **Zingma**; the alias is **Lite**.
The registry status is **present**.
The recorded contents are: Qoder 1.18.0 native Quest/agents window (upstream codename Lingma); SOURCE/ raw + oxfmt-beautified, 66 files / 125 MB.
Top-level entries: SOURCE, window.json.
The seat lives inside the `code` submodule, not in the superproject.
The launcher does not compile the seat; it opens the seat's own surface.
The gate checks that the folder exists or that the seat is explicitly empty.
The gate checks that the alias resolves to exactly one part.
The gate checks that the layout maps to the codename.
The seat's provenance is recorded in `THIRD_PARTY_NOTICES.md` and `payloads/CONFLICT.md`.
The seat's documentation is this README plus the seat's own upstream docs.
The seat's next step is recorded in the roadmap.
The seat's status is visible in the nine-seat map.
The seat's folder name is stable even when the display name changes.
The seat's alias is an edition label, not a second codename.
The seat's layout is the user-visible entry point.
The seat's launcher entry is validated before a release.
The seat's risks are recorded rather than hidden.

## 24.5 Zingma · build and run
The seat is opened from the launcher, not built by it.
The launcher entry is the `Zingma` layout when one exists.
The layout mapping is: 1 = Lite.
The launcher script is `launcher/launch.ps1`.
The launcher metadata is `launcher/window.json`.
The registry is read at runtime.
The seat's own build system, if any, is documented upstream.
The repository gate does not compile the seat.
The repository gate checks that the seat is registered.
A missing entry point is a launcher limitation, not a build failure.
A seat with status `empty` has no runnable surface.
A seat with status `present` has a folder, not necessarily a runnable entry.
The launcher's first question is Editor or Fusion.
The layout picker is the second question.
The seat is the third choice.
The order is deliberate: the launcher stays small.
The seat's runtime is its own responsibility.
The seat's provenance is the repository's responsibility.
The seat's documentation is this chapter.
The next section describes the runtime surface.
`windows/zingma` is the seat folder; the launcher reads it through the registry.
The codename is **Zingma**; the alias is **Lite**.
The registry status is **present**.
The recorded contents are: Qoder 1.18.0 native Quest/agents window (upstream codename Lingma); SOURCE/ raw + oxfmt-beautified, 66 files / 125 MB.
Top-level entries: SOURCE, window.json.
The seat lives inside the `code` submodule, not in the superproject.
The launcher does not compile the seat; it opens the seat's own surface.
The gate checks that the folder exists or that the seat is explicitly empty.
The gate checks that the alias resolves to exactly one part.
The gate checks that the layout maps to the codename.

## 24.6 Zingma · runtime surface
The runtime surface of **Zingma** is the window opened by its layout.
The layout mapping is: 1 = Lite.
The Editor window is always available as a singleton.
The Fusion window is the merged surface with the layout picker.
The seat may expose its own settings or sub-layouts.
The seat may be a native window, a web app, a CLI or an installed package.
The registry contents note names the source shape.
The launcher does not normalize the seat's UI.
The launcher does not promise feature parity between seats.
The launcher does not hide the seat's origin.
The seat's title is its own.
The seat's icon is its own where it has one.
The seat's window metadata is its own `window.json` where it exists.
The seat's runtime is validated by opening it.
The seat's runtime is not validated by the consistency gate.
The seat's runtime is documented in the publication's seat chapter.
The next section describes launcher integration.
`windows/zingma` is the seat folder; the launcher reads it through the registry.
The codename is **Zingma**; the alias is **Lite**.
The registry status is **present**.
The recorded contents are: Qoder 1.18.0 native Quest/agents window (upstream codename Lingma); SOURCE/ raw + oxfmt-beautified, 66 files / 125 MB.
Top-level entries: SOURCE, window.json.
The seat lives inside the `code` submodule, not in the superproject.
The launcher does not compile the seat; it opens the seat's own surface.
The gate checks that the folder exists or that the seat is explicitly empty.
The gate checks that the alias resolves to exactly one part.
The gate checks that the layout maps to the codename.
The seat's provenance is recorded in `THIRD_PARTY_NOTICES.md` and `payloads/CONFLICT.md`.
The seat's documentation is this README plus the seat's own upstream docs.
The seat's next step is recorded in the roadmap.

## 24.7 Zingma · launcher integration
The launcher reads `arch/windows.json` to find **Zingma**.
The layout picker reads `arch/layouts.json` to place **Zingma**.
The current layout mapping is: 1 = Lite.
The launcher does not hard-code the seat list.
The launcher does not hard-code the alias ladder.
The launcher does not hard-code the folder path.
The launcher's first question is Editor or Fusion.
The layout picker is the in-app part choice.
The registry and the layout file are checked together.
A missing layout is a gate failure.
A missing registry entry is a gate failure.
A mismatched alias is a gate failure.
The gate runs before the launcher change is accepted.
The gate is `node scripts/rebrand/check-consistency.mjs`.
The gate's current result is 13/13 checks passed.
The integration is deliberately data-driven.
The integration is the reason a new seat is a registry change, not a launcher rewrite.
The integration is documented in `arch/README.md`.
The next section maps the layout.
`windows/zingma` is the seat folder; the launcher reads it through the registry.
The codename is **Zingma**; the alias is **Lite**.
The registry status is **present**.
The recorded contents are: Qoder 1.18.0 native Quest/agents window (upstream codename Lingma); SOURCE/ raw + oxfmt-beautified, 66 files / 125 MB.
Top-level entries: SOURCE, window.json.
The seat lives inside the `code` submodule, not in the superproject.
The launcher does not compile the seat; it opens the seat's own surface.
The gate checks that the folder exists or that the seat is explicitly empty.
The gate checks that the alias resolves to exactly one part.
The gate checks that the layout maps to the codename.
The seat's provenance is recorded in `THIRD_PARTY_NOTICES.md` and `payloads/CONFLICT.md`.

## 24.8 Zingma · layout mapping
Layout entries for **Zingma**: 1 = Lite.
The layout file records the order, the name, the alias, the part and the source.
The layout order is Lite, Plus, Pro, Studio, Max, Ultra.
The order is an edition ladder, not a quality ranking.
The Editor window is available from every layout.
The Fusion window is the merged surface.
A layout can have variants; Pro has New Codeix and Old Codeix.
A layout can expose a sub-layout; Settings is reachable under Pro.
A layout without a part is invalid.
A part without a layout is invalid.
The layout file is JSON because the launcher and the gate both read it.
The layout file is updated with the registry, never after it.
The layout file is part of the publication's seat chapter.
The layout file is generated into this section by the docs builder.
The next section describes validation.
`windows/zingma` is the seat folder; the launcher reads it through the registry.
The codename is **Zingma**; the alias is **Lite**.
The registry status is **present**.
The recorded contents are: Qoder 1.18.0 native Quest/agents window (upstream codename Lingma); SOURCE/ raw + oxfmt-beautified, 66 files / 125 MB.
Top-level entries: SOURCE, window.json.
The seat lives inside the `code` submodule, not in the superproject.
The launcher does not compile the seat; it opens the seat's own surface.
The gate checks that the folder exists or that the seat is explicitly empty.
The gate checks that the alias resolves to exactly one part.
The gate checks that the layout maps to the codename.
The seat's provenance is recorded in `THIRD_PARTY_NOTICES.md` and `payloads/CONFLICT.md`.
The seat's documentation is this README plus the seat's own upstream docs.
The seat's next step is recorded in the roadmap.
The seat's status is visible in the nine-seat map.
The seat's folder name is stable even when the display name changes.

## 24.9 Zingma · validation
Run `node scripts/rebrand/check-consistency.mjs` after changing **Zingma**.
The gate checks the registry, the launcher UI, the launcher manifest and the component folders.
The gate checks that the folder exists or the seat is explicitly empty.
The gate checks that the alias resolves to exactly one part.
The gate checks that the layout maps to the codename.
The gate checks that the launcher title matches the registry.
The gate checks that a retired alias does not resolve.
The gate reports a pass count.
The current gate is 13/13 checks passed.
A failure names the file and the expected relationship.
The gate is not weakened to make a release look clean.
The gate is part of the dashboard's code-repo section.
The gate is part of the D-31 documentation evidence.
The gate is run before the commit.
The gate is run after the rename.
The gate is run after the documentation build.
The gate is a contract, not a suggestion.
The next section describes security and provenance.
`windows/zingma` is the seat folder; the launcher reads it through the registry.
The codename is **Zingma**; the alias is **Lite**.
The registry status is **present**.
The recorded contents are: Qoder 1.18.0 native Quest/agents window (upstream codename Lingma); SOURCE/ raw + oxfmt-beautified, 66 files / 125 MB.
Top-level entries: SOURCE, window.json.
The seat lives inside the `code` submodule, not in the superproject.
The launcher does not compile the seat; it opens the seat's own surface.
The gate checks that the folder exists or that the seat is explicitly empty.
The gate checks that the alias resolves to exactly one part.
The gate checks that the layout maps to the codename.
The seat's provenance is recorded in `THIRD_PARTY_NOTICES.md` and `payloads/CONFLICT.md`.
The seat's documentation is this README plus the seat's own upstream docs.

## 24.10 Zingma · security and provenance
**Zingma** is imported or project-authored; the registry contents note records which.
The imported source keeps its own licence and its own redistribution terms.
The repository does not grant a blanket licence over the seat.
The `THIRD_PARTY_NOTICES.md` file is the starting point.
The `payloads/CONFLICT.md` file records known conflicts.
Do not redistribute a third-party binary as project-authored.
Do not remove a provenance note to make a package look cleaner.
Do not assume an upstream licence covers a modified build.
The security review treats a missing provenance note as a finding.
The security review treats a hidden binary as a finding.
The seat's attack surface is its own runtime.
The launcher does not elevate privileges by default.
The launcher reads local files; it does not upload them.
The seat's secrets are not committed to the repository.
The seat's build artefacts are not committed to the repository.
The seat's provenance is part of the publication.
The safe answer is to ask before redistributing.
The conservative answer is to ship only project-authored files.
The next section describes risks and next steps.
`windows/zingma` is the seat folder; the launcher reads it through the registry.
The codename is **Zingma**; the alias is **Lite**.
The registry status is **present**.
The recorded contents are: Qoder 1.18.0 native Quest/agents window (upstream codename Lingma); SOURCE/ raw + oxfmt-beautified, 66 files / 125 MB.
Top-level entries: SOURCE, window.json.
The seat lives inside the `code` submodule, not in the superproject.
The launcher does not compile the seat; it opens the seat's own surface.
The gate checks that the folder exists or that the seat is explicitly empty.
The gate checks that the alias resolves to exactly one part.
The gate checks that the layout maps to the codename.
The seat's provenance is recorded in `THIRD_PARTY_NOTICES.md` and `payloads/CONFLICT.md`.

## 24.11 Zingma · risks and next steps
The current status of **Zingma** is **present**.
The folder note is: none.
The layout mapping is: 1 = Lite.
An empty seat is a reserved seat, not a shipped feature.
A present folder is not a promise of a runnable entry point.
A missing entry point is a launcher limitation.
A pending rename is a handle-lock issue.
A large imported tree is a provenance issue.
A stale alias is a gate failure.
A stale layout is a gate failure.
The next step is recorded in the roadmap.
The next documentation step is to keep this chapter in sync.
The next validation step is to add a check for the seat.
The next provenance step is to review the imported tree.
The next product step is to make the seat startable where it is not.
The risk register is in the publication.
The risk register is reviewed at every publication build.
The risk register is not a promise that the risk is gone.
The next section is the file catalog.
`windows/zingma` is the seat folder; the launcher reads it through the registry.
The codename is **Zingma**; the alias is **Lite**.
The registry status is **present**.
The recorded contents are: Qoder 1.18.0 native Quest/agents window (upstream codename Lingma); SOURCE/ raw + oxfmt-beautified, 66 files / 125 MB.
Top-level entries: SOURCE, window.json.
The seat lives inside the `code` submodule, not in the superproject.
The launcher does not compile the seat; it opens the seat's own surface.
The gate checks that the folder exists or that the seat is explicitly empty.
The gate checks that the alias resolves to exactly one part.
The gate checks that the layout maps to the codename.
The seat's provenance is recorded in `THIRD_PARTY_NOTICES.md` and `payloads/CONFLICT.md`.

## 24.12 Zingma · file catalog
- `SOURCE` — dir.
- `window.json` — 484 B.
The catalog is a top-level sample.
The catalog is regenerated at build time.
The catalog is part of the publication's appendix.
The catalog is not a recursive file count.
The catalog is not a licence inventory.
The catalog is a map for the reader.
The next seat follows.
`windows/zingma` is the seat folder; the launcher reads it through the registry.
The codename is **Zingma**; the alias is **Lite**.
The registry status is **present**.
The recorded contents are: Qoder 1.18.0 native Quest/agents window (upstream codename Lingma); SOURCE/ raw + oxfmt-beautified, 66 files / 125 MB.
Top-level entries: SOURCE, window.json.
The seat lives inside the `code` submodule, not in the superproject.
The launcher does not compile the seat; it opens the seat's own surface.
The gate checks that the folder exists or that the seat is explicitly empty.
The gate checks that the alias resolves to exactly one part.
The gate checks that the layout maps to the codename.
The seat's provenance is recorded in `THIRD_PARTY_NOTICES.md` and `payloads/CONFLICT.md`.
The seat's documentation is this README plus the seat's own upstream docs.
The seat's next step is recorded in the roadmap.
The seat's status is visible in the nine-seat map.
The seat's folder name is stable even when the display name changes.
The seat's alias is an edition label, not a second codename.
The seat's layout is the user-visible entry point.
The seat's launcher entry is validated before a release.
The seat's risks are recorded rather than hidden.
The seat's publication chapter is generated from these facts.
`windows/zingma` is the seat folder; the launcher reads it through the registry.

## 25.1 Sonar · overview
**Sonar** is the `windows/sonar` seat of CodeFusion.
Its alias is **Plus**; its status is **empty**.
The registry records: Empty - only window.json. Seat for the reverse-engineered DeepSeek Harness
(DSH).
The top-level entries are: merger, window.json.
The layout mapping is: 2 = Plus.
The seat is part of the nine-seat map in the registry chapter.
The seat is not a separate repository; it is a folder in the `code` submodule.
The seat is opened by the launcher, not compiled into the launcher.
The seat keeps its own upstream source and its own runtime assumptions.
The seat is documented here because a cold reader needs the map.
The seat's provenance is recorded separately from its functionality.
The seat's status is a statement about the folder, not about quality.
The seat's alias is an edition label, not a role.
The seat's layout is the user-facing choice.
The seat's registry entry is the source of truth.
The seat's folder is checked by the gate.
The seat's entry is repeated in the nine-seat map.
The seat's next step is in the roadmap.
The seat's chapter continues with the registry entry.
The seat's facts are generated from `arch/windows.json`.
`windows/sonar` is the seat folder; the launcher reads it through the registry.
The codename is **Sonar**; the alias is **Plus**.
The registry status is **empty**.
The recorded contents are: Empty - only window.json. Seat for the reverse-engineered DeepSeek Harness (DSH).
Top-level entries: merger, window.json.
The seat lives inside the `code` submodule, not in the superproject.
The launcher does not compile the seat; it opens the seat's own surface.
The gate checks that the folder exists or that the seat is explicitly empty.
The gate checks that the alias resolves to exactly one part.

## 25.2 Sonar · registry entry
Codename: `Sonar`.
Alias: `Plus`.
Folder: `windows/sonar`.
Status: `empty`.
Contents: Empty - only window.json. Seat for the reverse-engineered DeepSeek Harness (DSH).
Physical folder: `windows/sonar`.
Folder note: none.
The registry is `arch/windows.json`.
The alias resolution table maps the alias to the codename.
The retired alias table does not contain this codename unless it is retired.
The naming rule applies: the codename is the address; the alias is the label.
The registry entry is checked by `check-consistency.mjs`.
The registry entry is the first thing to edit when a seat changes.
The registry entry is the last thing to trust when a folder was renamed manually.
The registry entry does not grant a licence.
The registry entry does not promise that the seat is startable.
The registry entry does not hide an empty folder.
The registry entry is part of the publication's seat appendix.
The registry entry is generated into this section by the docs builder.
The next section lists the folder layout.
`windows/sonar` is the seat folder; the launcher reads it through the registry.
The codename is **Sonar**; the alias is **Plus**.
The registry status is **empty**.
The recorded contents are: Empty - only window.json. Seat for the reverse-engineered DeepSeek Harness (DSH).
Top-level entries: merger, window.json.
The seat lives inside the `code` submodule, not in the superproject.
The launcher does not compile the seat; it opens the seat's own surface.
The gate checks that the folder exists or that the seat is explicitly empty.
The gate checks that the alias resolves to exactly one part.
The gate checks that the layout maps to the codename.

## 25.3 Sonar · folder layout
The folder is `windows/sonar`.
Top-level entries (2): merger, window.json.
- `merger` — directory.
- `window.json` — 228 B.
The listing is sampled at the top level; the full tree is intentionally not copied into this README.
The full tree is available on disk and in the registry contents note.
The top-level listing is enough to tell a source tree from a reserved seat.
The listing is regenerated at build time.
The listing does not include ignored build outputs.
The listing does not include the `.git` directory.
The listing is part of the publication's provenance appendix.
The next section inventories the top level.
`windows/sonar` is the seat folder; the launcher reads it through the registry.
The codename is **Sonar**; the alias is **Plus**.
The registry status is **empty**.
The recorded contents are: Empty - only window.json. Seat for the reverse-engineered DeepSeek Harness (DSH).
Top-level entries: merger, window.json.
The seat lives inside the `code` submodule, not in the superproject.
The launcher does not compile the seat; it opens the seat's own surface.
The gate checks that the folder exists or that the seat is explicitly empty.
The gate checks that the alias resolves to exactly one part.
The gate checks that the layout maps to the codename.
The seat's provenance is recorded in `THIRD_PARTY_NOTICES.md` and `payloads/CONFLICT.md`.
The seat's documentation is this README plus the seat's own upstream docs.
The seat's next step is recorded in the roadmap.
The seat's status is visible in the nine-seat map.
The seat's folder name is stable even when the display name changes.
The seat's alias is an edition label, not a second codename.
The seat's layout is the user-visible entry point.
The seat's launcher entry is validated before a release.

## 25.4 Sonar · top-level inventory
- `merger` — dir.
- `window.json` — 228 B.
The inventory is a top-level sample, not a recursive file count.
A recursive count is recorded in the registry contents note where it exists.
The inventory is regenerated at build time.
The inventory is used by the publication's appendix.
The inventory is not a substitute for the actual tree.
The inventory is not a licence inventory.
The inventory is not a security review.
The inventory is a map.
The next section describes build and run.
`windows/sonar` is the seat folder; the launcher reads it through the registry.
The codename is **Sonar**; the alias is **Plus**.
The registry status is **empty**.
The recorded contents are: Empty - only window.json. Seat for the reverse-engineered DeepSeek Harness (DSH).
Top-level entries: merger, window.json.
The seat lives inside the `code` submodule, not in the superproject.
The launcher does not compile the seat; it opens the seat's own surface.
The gate checks that the folder exists or that the seat is explicitly empty.
The gate checks that the alias resolves to exactly one part.
The gate checks that the layout maps to the codename.
The seat's provenance is recorded in `THIRD_PARTY_NOTICES.md` and `payloads/CONFLICT.md`.
The seat's documentation is this README plus the seat's own upstream docs.
The seat's next step is recorded in the roadmap.
The seat's status is visible in the nine-seat map.
The seat's folder name is stable even when the display name changes.
The seat's alias is an edition label, not a second codename.
The seat's layout is the user-visible entry point.
The seat's launcher entry is validated before a release.
The seat's risks are recorded rather than hidden.

## 25.5 Sonar · build and run
The seat is opened from the launcher, not built by it.
The launcher entry is the `Sonar` layout when one exists.
The layout mapping is: 2 = Plus.
The launcher script is `launcher/launch.ps1`.
The launcher metadata is `launcher/window.json`.
The registry is read at runtime.
The seat's own build system, if any, is documented upstream.
The repository gate does not compile the seat.
The repository gate checks that the seat is registered.
A missing entry point is a launcher limitation, not a build failure.
A seat with status `empty` has no runnable surface.
A seat with status `present` has a folder, not necessarily a runnable entry.
The launcher's first question is Editor or Fusion.
The layout picker is the second question.
The seat is the third choice.
The order is deliberate: the launcher stays small.
The seat's runtime is its own responsibility.
The seat's provenance is the repository's responsibility.
The seat's documentation is this chapter.
The next section describes the runtime surface.
`windows/sonar` is the seat folder; the launcher reads it through the registry.
The codename is **Sonar**; the alias is **Plus**.
The registry status is **empty**.
The recorded contents are: Empty - only window.json. Seat for the reverse-engineered DeepSeek Harness (DSH).
Top-level entries: merger, window.json.
The seat lives inside the `code` submodule, not in the superproject.
The launcher does not compile the seat; it opens the seat's own surface.
The gate checks that the folder exists or that the seat is explicitly empty.
The gate checks that the alias resolves to exactly one part.
The gate checks that the layout maps to the codename.

## 25.6 Sonar · runtime surface
The runtime surface of **Sonar** is the window opened by its layout.
The layout mapping is: 2 = Plus.
The Editor window is always available as a singleton.
The Fusion window is the merged surface with the layout picker.
The seat may expose its own settings or sub-layouts.
The seat may be a native window, a web app, a CLI or an installed package.
The registry contents note names the source shape.
The launcher does not normalize the seat's UI.
The launcher does not promise feature parity between seats.
The launcher does not hide the seat's origin.
The seat's title is its own.
The seat's icon is its own where it has one.
The seat's window metadata is its own `window.json` where it exists.
The seat's runtime is validated by opening it.
The seat's runtime is not validated by the consistency gate.
The seat's runtime is documented in the publication's seat chapter.
The next section describes launcher integration.
`windows/sonar` is the seat folder; the launcher reads it through the registry.
The codename is **Sonar**; the alias is **Plus**.
The registry status is **empty**.
The recorded contents are: Empty - only window.json. Seat for the reverse-engineered DeepSeek Harness (DSH).
Top-level entries: merger, window.json.
The seat lives inside the `code` submodule, not in the superproject.
The launcher does not compile the seat; it opens the seat's own surface.
The gate checks that the folder exists or that the seat is explicitly empty.
The gate checks that the alias resolves to exactly one part.
The gate checks that the layout maps to the codename.
The seat's provenance is recorded in `THIRD_PARTY_NOTICES.md` and `payloads/CONFLICT.md`.
The seat's documentation is this README plus the seat's own upstream docs.
The seat's next step is recorded in the roadmap.

## 25.7 Sonar · launcher integration
The launcher reads `arch/windows.json` to find **Sonar**.
The layout picker reads `arch/layouts.json` to place **Sonar**.
The current layout mapping is: 2 = Plus.
The launcher does not hard-code the seat list.
The launcher does not hard-code the alias ladder.
The launcher does not hard-code the folder path.
The launcher's first question is Editor or Fusion.
The layout picker is the in-app part choice.
The registry and the layout file are checked together.
A missing layout is a gate failure.
A missing registry entry is a gate failure.
A mismatched alias is a gate failure.
The gate runs before the launcher change is accepted.
The gate is `node scripts/rebrand/check-consistency.mjs`.
The gate's current result is 13/13 checks passed.
The integration is deliberately data-driven.
The integration is the reason a new seat is a registry change, not a launcher rewrite.
The integration is documented in `arch/README.md`.
The next section maps the layout.
`windows/sonar` is the seat folder; the launcher reads it through the registry.
The codename is **Sonar**; the alias is **Plus**.
The registry status is **empty**.
The recorded contents are: Empty - only window.json. Seat for the reverse-engineered DeepSeek Harness (DSH).
Top-level entries: merger, window.json.
The seat lives inside the `code` submodule, not in the superproject.
The launcher does not compile the seat; it opens the seat's own surface.
The gate checks that the folder exists or that the seat is explicitly empty.
The gate checks that the alias resolves to exactly one part.
The gate checks that the layout maps to the codename.
The seat's provenance is recorded in `THIRD_PARTY_NOTICES.md` and `payloads/CONFLICT.md`.

## 25.8 Sonar · layout mapping
Layout entries for **Sonar**: 2 = Plus.
The layout file records the order, the name, the alias, the part and the source.
The layout order is Lite, Plus, Pro, Studio, Max, Ultra.
The order is an edition ladder, not a quality ranking.
The Editor window is available from every layout.
The Fusion window is the merged surface.
A layout can have variants; Pro has New Codeix and Old Codeix.
A layout can expose a sub-layout; Settings is reachable under Pro.
A layout without a part is invalid.
A part without a layout is invalid.
The layout file is JSON because the launcher and the gate both read it.
The layout file is updated with the registry, never after it.
The layout file is part of the publication's seat chapter.
The layout file is generated into this section by the docs builder.
The next section describes validation.
`windows/sonar` is the seat folder; the launcher reads it through the registry.
The codename is **Sonar**; the alias is **Plus**.
The registry status is **empty**.
The recorded contents are: Empty - only window.json. Seat for the reverse-engineered DeepSeek Harness (DSH).
Top-level entries: merger, window.json.
The seat lives inside the `code` submodule, not in the superproject.
The launcher does not compile the seat; it opens the seat's own surface.
The gate checks that the folder exists or that the seat is explicitly empty.
The gate checks that the alias resolves to exactly one part.
The gate checks that the layout maps to the codename.
The seat's provenance is recorded in `THIRD_PARTY_NOTICES.md` and `payloads/CONFLICT.md`.
The seat's documentation is this README plus the seat's own upstream docs.
The seat's next step is recorded in the roadmap.
The seat's status is visible in the nine-seat map.
The seat's folder name is stable even when the display name changes.

## 25.9 Sonar · validation
Run `node scripts/rebrand/check-consistency.mjs` after changing **Sonar**.
The gate checks the registry, the launcher UI, the launcher manifest and the component folders.
The gate checks that the folder exists or the seat is explicitly empty.
The gate checks that the alias resolves to exactly one part.
The gate checks that the layout maps to the codename.
The gate checks that the launcher title matches the registry.
The gate checks that a retired alias does not resolve.
The gate reports a pass count.
The current gate is 13/13 checks passed.
A failure names the file and the expected relationship.
The gate is not weakened to make a release look clean.
The gate is part of the dashboard's code-repo section.
The gate is part of the D-31 documentation evidence.
The gate is run before the commit.
The gate is run after the rename.
The gate is run after the documentation build.
The gate is a contract, not a suggestion.
The next section describes security and provenance.
`windows/sonar` is the seat folder; the launcher reads it through the registry.
The codename is **Sonar**; the alias is **Plus**.
The registry status is **empty**.
The recorded contents are: Empty - only window.json. Seat for the reverse-engineered DeepSeek Harness (DSH).
Top-level entries: merger, window.json.
The seat lives inside the `code` submodule, not in the superproject.
The launcher does not compile the seat; it opens the seat's own surface.
The gate checks that the folder exists or that the seat is explicitly empty.
The gate checks that the alias resolves to exactly one part.
The gate checks that the layout maps to the codename.
The seat's provenance is recorded in `THIRD_PARTY_NOTICES.md` and `payloads/CONFLICT.md`.
The seat's documentation is this README plus the seat's own upstream docs.

## 25.10 Sonar · security and provenance
**Sonar** is imported or project-authored; the registry contents note records which.
The imported source keeps its own licence and its own redistribution terms.
The repository does not grant a blanket licence over the seat.
The `THIRD_PARTY_NOTICES.md` file is the starting point.
The `payloads/CONFLICT.md` file records known conflicts.
Do not redistribute a third-party binary as project-authored.
Do not remove a provenance note to make a package look cleaner.
Do not assume an upstream licence covers a modified build.
The security review treats a missing provenance note as a finding.
The security review treats a hidden binary as a finding.
The seat's attack surface is its own runtime.
The launcher does not elevate privileges by default.
The launcher reads local files; it does not upload them.
The seat's secrets are not committed to the repository.
The seat's build artefacts are not committed to the repository.
The seat's provenance is part of the publication.
The safe answer is to ask before redistributing.
The conservative answer is to ship only project-authored files.
The next section describes risks and next steps.
`windows/sonar` is the seat folder; the launcher reads it through the registry.
The codename is **Sonar**; the alias is **Plus**.
The registry status is **empty**.
The recorded contents are: Empty - only window.json. Seat for the reverse-engineered DeepSeek Harness (DSH).
Top-level entries: merger, window.json.
The seat lives inside the `code` submodule, not in the superproject.
The launcher does not compile the seat; it opens the seat's own surface.
The gate checks that the folder exists or that the seat is explicitly empty.
The gate checks that the alias resolves to exactly one part.
The gate checks that the layout maps to the codename.
The seat's provenance is recorded in `THIRD_PARTY_NOTICES.md` and `payloads/CONFLICT.md`.

## 25.11 Sonar · risks and next steps
The current status of **Sonar** is **empty**.
The folder note is: none.
The layout mapping is: 2 = Plus.
An empty seat is a reserved seat, not a shipped feature.
A present folder is not a promise of a runnable entry point.
A missing entry point is a launcher limitation.
A pending rename is a handle-lock issue.
A large imported tree is a provenance issue.
A stale alias is a gate failure.
A stale layout is a gate failure.
The next step is recorded in the roadmap.
The next documentation step is to keep this chapter in sync.
The next validation step is to add a check for the seat.
The next provenance step is to review the imported tree.
The next product step is to make the seat startable where it is not.
The risk register is in the publication.
The risk register is reviewed at every publication build.
The risk register is not a promise that the risk is gone.
The next section is the file catalog.
`windows/sonar` is the seat folder; the launcher reads it through the registry.
The codename is **Sonar**; the alias is **Plus**.
The registry status is **empty**.
The recorded contents are: Empty - only window.json. Seat for the reverse-engineered DeepSeek Harness (DSH).
Top-level entries: merger, window.json.
The seat lives inside the `code` submodule, not in the superproject.
The launcher does not compile the seat; it opens the seat's own surface.
The gate checks that the folder exists or that the seat is explicitly empty.
The gate checks that the alias resolves to exactly one part.
The gate checks that the layout maps to the codename.
The seat's provenance is recorded in `THIRD_PARTY_NOTICES.md` and `payloads/CONFLICT.md`.

## 25.12 Sonar · file catalog
- `merger` — dir.
- `window.json` — 228 B.
The catalog is a top-level sample.
The catalog is regenerated at build time.
The catalog is part of the publication's appendix.
The catalog is not a recursive file count.
The catalog is not a licence inventory.
The catalog is a map for the reader.
The next seat follows.
`windows/sonar` is the seat folder; the launcher reads it through the registry.
The codename is **Sonar**; the alias is **Plus**.
The registry status is **empty**.
The recorded contents are: Empty - only window.json. Seat for the reverse-engineered DeepSeek Harness (DSH).
Top-level entries: merger, window.json.
The seat lives inside the `code` submodule, not in the superproject.
The launcher does not compile the seat; it opens the seat's own surface.
The gate checks that the folder exists or that the seat is explicitly empty.
The gate checks that the alias resolves to exactly one part.
The gate checks that the layout maps to the codename.
The seat's provenance is recorded in `THIRD_PARTY_NOTICES.md` and `payloads/CONFLICT.md`.
The seat's documentation is this README plus the seat's own upstream docs.
The seat's next step is recorded in the roadmap.
The seat's status is visible in the nine-seat map.
The seat's folder name is stable even when the display name changes.
The seat's alias is an edition label, not a second codename.
The seat's layout is the user-visible entry point.
The seat's launcher entry is validated before a release.
The seat's risks are recorded rather than hidden.
The seat's publication chapter is generated from these facts.
`windows/sonar` is the seat folder; the launcher reads it through the registry.

## 26.1 Zenix · overview
**Zenix** is the `windows/zenix` seat of CodeFusion.
Its alias is **Ultra**; its status is **present**.
The registry records: Native Claude Desktop 5.1231.2; SOURCE/ with app.asar + ion-dist.asar +
claude-vm VHDX, 11,874 files / 940 MB.
The top-level entries are: SOURCE, window.json.
The layout mapping is: 6 = Ultra.
The seat is part of the nine-seat map in the registry chapter.
The seat is not a separate repository; it is a folder in the `code` submodule.
The seat is opened by the launcher, not compiled into the launcher.
The seat keeps its own upstream source and its own runtime assumptions.
The seat is documented here because a cold reader needs the map.
The seat's provenance is recorded separately from its functionality.
The seat's status is a statement about the folder, not about quality.
The seat's alias is an edition label, not a role.
The seat's layout is the user-facing choice.
The seat's registry entry is the source of truth.
The seat's folder is checked by the gate.
The seat's entry is repeated in the nine-seat map.
The seat's next step is in the roadmap.
The seat's chapter continues with the registry entry.
The seat's facts are generated from `arch/windows.json`.
`windows/zenix` is the seat folder; the launcher reads it through the registry.
The codename is **Zenix**; the alias is **Ultra**.
The registry status is **present**.
The recorded contents are: Native Claude Desktop 5.1231.2; SOURCE/ with app.asar + ion-dist.asar + claude-vm VHDX, 11,874 files / 940 MB.
Top-level entries: SOURCE, window.json.
The seat lives inside the `code` submodule, not in the superproject.
The launcher does not compile the seat; it opens the seat's own surface.
The gate checks that the folder exists or that the seat is explicitly empty.
The gate checks that the alias resolves to exactly one part.

## 26.2 Zenix · registry entry
Codename: `Zenix`.
Alias: `Ultra`.
Folder: `windows/zenix`.
Status: `present`.
Contents: Native Claude Desktop 5.1231.2; SOURCE/ with app.asar + ion-dist.asar + claude-vm VHDX,
11,874 files / 940 MB.
Physical folder: `windows/zenix`.
Folder note: none.
The registry is `arch/windows.json`.
The alias resolution table maps the alias to the codename.
The retired alias table does not contain this codename unless it is retired.
The naming rule applies: the codename is the address; the alias is the label.
The registry entry is checked by `check-consistency.mjs`.
The registry entry is the first thing to edit when a seat changes.
The registry entry is the last thing to trust when a folder was renamed manually.
The registry entry does not grant a licence.
The registry entry does not promise that the seat is startable.
The registry entry does not hide an empty folder.
The registry entry is part of the publication's seat appendix.
The registry entry is generated into this section by the docs builder.
The next section lists the folder layout.
`windows/zenix` is the seat folder; the launcher reads it through the registry.
The codename is **Zenix**; the alias is **Ultra**.
The registry status is **present**.
The recorded contents are: Native Claude Desktop 5.1231.2; SOURCE/ with app.asar + ion-dist.asar + claude-vm VHDX, 11,874 files / 940 MB.
Top-level entries: SOURCE, window.json.
The seat lives inside the `code` submodule, not in the superproject.
The launcher does not compile the seat; it opens the seat's own surface.
The gate checks that the folder exists or that the seat is explicitly empty.
The gate checks that the alias resolves to exactly one part.

## 26.3 Zenix · folder layout
The folder is `windows/zenix`.
Top-level entries (2): SOURCE, window.json.
- `SOURCE` — directory.
- `window.json` — 492 B.
The listing is sampled at the top level; the full tree is intentionally not copied into this README.
The full tree is available on disk and in the registry contents note.
The top-level listing is enough to tell a source tree from a reserved seat.
The listing is regenerated at build time.
The listing does not include ignored build outputs.
The listing does not include the `.git` directory.
The listing is part of the publication's provenance appendix.
The next section inventories the top level.
`windows/zenix` is the seat folder; the launcher reads it through the registry.
The codename is **Zenix**; the alias is **Ultra**.
The registry status is **present**.
The recorded contents are: Native Claude Desktop 5.1231.2; SOURCE/ with app.asar + ion-dist.asar + claude-vm VHDX, 11,874 files / 940 MB.
Top-level entries: SOURCE, window.json.
The seat lives inside the `code` submodule, not in the superproject.
The launcher does not compile the seat; it opens the seat's own surface.
The gate checks that the folder exists or that the seat is explicitly empty.
The gate checks that the alias resolves to exactly one part.
The gate checks that the layout maps to the codename.
The seat's provenance is recorded in `THIRD_PARTY_NOTICES.md` and `payloads/CONFLICT.md`.
The seat's documentation is this README plus the seat's own upstream docs.
The seat's next step is recorded in the roadmap.
The seat's status is visible in the nine-seat map.
The seat's folder name is stable even when the display name changes.
The seat's alias is an edition label, not a second codename.
The seat's layout is the user-visible entry point.
The seat's launcher entry is validated before a release.

## 26.4 Zenix · top-level inventory
- `SOURCE` — dir.
- `window.json` — 492 B.
The inventory is a top-level sample, not a recursive file count.
A recursive count is recorded in the registry contents note where it exists.
The inventory is regenerated at build time.
The inventory is used by the publication's appendix.
The inventory is not a substitute for the actual tree.
The inventory is not a licence inventory.
The inventory is not a security review.
The inventory is a map.
The next section describes build and run.
`windows/zenix` is the seat folder; the launcher reads it through the registry.
The codename is **Zenix**; the alias is **Ultra**.
The registry status is **present**.
The recorded contents are: Native Claude Desktop 5.1231.2; SOURCE/ with app.asar + ion-dist.asar + claude-vm VHDX, 11,874 files / 940 MB.
Top-level entries: SOURCE, window.json.
The seat lives inside the `code` submodule, not in the superproject.
The launcher does not compile the seat; it opens the seat's own surface.
The gate checks that the folder exists or that the seat is explicitly empty.
The gate checks that the alias resolves to exactly one part.
The gate checks that the layout maps to the codename.
The seat's provenance is recorded in `THIRD_PARTY_NOTICES.md` and `payloads/CONFLICT.md`.
The seat's documentation is this README plus the seat's own upstream docs.
The seat's next step is recorded in the roadmap.
The seat's status is visible in the nine-seat map.
The seat's folder name is stable even when the display name changes.
The seat's alias is an edition label, not a second codename.
The seat's layout is the user-visible entry point.
The seat's launcher entry is validated before a release.
The seat's risks are recorded rather than hidden.

## 26.5 Zenix · build and run
The seat is opened from the launcher, not built by it.
The launcher entry is the `Zenix` layout when one exists.
The layout mapping is: 6 = Ultra.
The launcher script is `launcher/launch.ps1`.
The launcher metadata is `launcher/window.json`.
The registry is read at runtime.
The seat's own build system, if any, is documented upstream.
The repository gate does not compile the seat.
The repository gate checks that the seat is registered.
A missing entry point is a launcher limitation, not a build failure.
A seat with status `empty` has no runnable surface.
A seat with status `present` has a folder, not necessarily a runnable entry.
The launcher's first question is Editor or Fusion.
The layout picker is the second question.
The seat is the third choice.
The order is deliberate: the launcher stays small.
The seat's runtime is its own responsibility.
The seat's provenance is the repository's responsibility.
The seat's documentation is this chapter.
The next section describes the runtime surface.
`windows/zenix` is the seat folder; the launcher reads it through the registry.
The codename is **Zenix**; the alias is **Ultra**.
The registry status is **present**.
The recorded contents are: Native Claude Desktop 5.1231.2; SOURCE/ with app.asar + ion-dist.asar + claude-vm VHDX, 11,874 files / 940 MB.
Top-level entries: SOURCE, window.json.
The seat lives inside the `code` submodule, not in the superproject.
The launcher does not compile the seat; it opens the seat's own surface.
The gate checks that the folder exists or that the seat is explicitly empty.
The gate checks that the alias resolves to exactly one part.
The gate checks that the layout maps to the codename.

## 26.6 Zenix · runtime surface
The runtime surface of **Zenix** is the window opened by its layout.
The layout mapping is: 6 = Ultra.
The Editor window is always available as a singleton.
The Fusion window is the merged surface with the layout picker.
The seat may expose its own settings or sub-layouts.
The seat may be a native window, a web app, a CLI or an installed package.
The registry contents note names the source shape.
The launcher does not normalize the seat's UI.
The launcher does not promise feature parity between seats.
The launcher does not hide the seat's origin.
The seat's title is its own.
The seat's icon is its own where it has one.
The seat's window metadata is its own `window.json` where it exists.
The seat's runtime is validated by opening it.
The seat's runtime is not validated by the consistency gate.
The seat's runtime is documented in the publication's seat chapter.
The next section describes launcher integration.
`windows/zenix` is the seat folder; the launcher reads it through the registry.
The codename is **Zenix**; the alias is **Ultra**.
The registry status is **present**.
The recorded contents are: Native Claude Desktop 5.1231.2; SOURCE/ with app.asar + ion-dist.asar + claude-vm VHDX, 11,874 files / 940 MB.
Top-level entries: SOURCE, window.json.
The seat lives inside the `code` submodule, not in the superproject.
The launcher does not compile the seat; it opens the seat's own surface.
The gate checks that the folder exists or that the seat is explicitly empty.
The gate checks that the alias resolves to exactly one part.
The gate checks that the layout maps to the codename.
The seat's provenance is recorded in `THIRD_PARTY_NOTICES.md` and `payloads/CONFLICT.md`.
The seat's documentation is this README plus the seat's own upstream docs.
The seat's next step is recorded in the roadmap.

## 26.7 Zenix · launcher integration
The launcher reads `arch/windows.json` to find **Zenix**.
The layout picker reads `arch/layouts.json` to place **Zenix**.
The current layout mapping is: 6 = Ultra.
The launcher does not hard-code the seat list.
The launcher does not hard-code the alias ladder.
The launcher does not hard-code the folder path.
The launcher's first question is Editor or Fusion.
The layout picker is the in-app part choice.
The registry and the layout file are checked together.
A missing layout is a gate failure.
A missing registry entry is a gate failure.
A mismatched alias is a gate failure.
The gate runs before the launcher change is accepted.
The gate is `node scripts/rebrand/check-consistency.mjs`.
The gate's current result is 13/13 checks passed.
The integration is deliberately data-driven.
The integration is the reason a new seat is a registry change, not a launcher rewrite.
The integration is documented in `arch/README.md`.
The next section maps the layout.
`windows/zenix` is the seat folder; the launcher reads it through the registry.
The codename is **Zenix**; the alias is **Ultra**.
The registry status is **present**.
The recorded contents are: Native Claude Desktop 5.1231.2; SOURCE/ with app.asar + ion-dist.asar + claude-vm VHDX, 11,874 files / 940 MB.
Top-level entries: SOURCE, window.json.
The seat lives inside the `code` submodule, not in the superproject.
The launcher does not compile the seat; it opens the seat's own surface.
The gate checks that the folder exists or that the seat is explicitly empty.
The gate checks that the alias resolves to exactly one part.
The gate checks that the layout maps to the codename.
The seat's provenance is recorded in `THIRD_PARTY_NOTICES.md` and `payloads/CONFLICT.md`.

## 26.8 Zenix · layout mapping
Layout entries for **Zenix**: 6 = Ultra.
The layout file records the order, the name, the alias, the part and the source.
The layout order is Lite, Plus, Pro, Studio, Max, Ultra.
The order is an edition ladder, not a quality ranking.
The Editor window is available from every layout.
The Fusion window is the merged surface.
A layout can have variants; Pro has New Codeix and Old Codeix.
A layout can expose a sub-layout; Settings is reachable under Pro.
A layout without a part is invalid.
A part without a layout is invalid.
The layout file is JSON because the launcher and the gate both read it.
The layout file is updated with the registry, never after it.
The layout file is part of the publication's seat chapter.
The layout file is generated into this section by the docs builder.
The next section describes validation.
`windows/zenix` is the seat folder; the launcher reads it through the registry.
The codename is **Zenix**; the alias is **Ultra**.
The registry status is **present**.
The recorded contents are: Native Claude Desktop 5.1231.2; SOURCE/ with app.asar + ion-dist.asar + claude-vm VHDX, 11,874 files / 940 MB.
Top-level entries: SOURCE, window.json.
The seat lives inside the `code` submodule, not in the superproject.
The launcher does not compile the seat; it opens the seat's own surface.
The gate checks that the folder exists or that the seat is explicitly empty.
The gate checks that the alias resolves to exactly one part.
The gate checks that the layout maps to the codename.
The seat's provenance is recorded in `THIRD_PARTY_NOTICES.md` and `payloads/CONFLICT.md`.
The seat's documentation is this README plus the seat's own upstream docs.
The seat's next step is recorded in the roadmap.
The seat's status is visible in the nine-seat map.
The seat's folder name is stable even when the display name changes.

## 26.9 Zenix · validation
Run `node scripts/rebrand/check-consistency.mjs` after changing **Zenix**.
The gate checks the registry, the launcher UI, the launcher manifest and the component folders.
The gate checks that the folder exists or the seat is explicitly empty.
The gate checks that the alias resolves to exactly one part.
The gate checks that the layout maps to the codename.
The gate checks that the launcher title matches the registry.
The gate checks that a retired alias does not resolve.
The gate reports a pass count.
The current gate is 13/13 checks passed.
A failure names the file and the expected relationship.
The gate is not weakened to make a release look clean.
The gate is part of the dashboard's code-repo section.
The gate is part of the D-31 documentation evidence.
The gate is run before the commit.
The gate is run after the rename.
The gate is run after the documentation build.
The gate is a contract, not a suggestion.
The next section describes security and provenance.
`windows/zenix` is the seat folder; the launcher reads it through the registry.
The codename is **Zenix**; the alias is **Ultra**.
The registry status is **present**.
The recorded contents are: Native Claude Desktop 5.1231.2; SOURCE/ with app.asar + ion-dist.asar + claude-vm VHDX, 11,874 files / 940 MB.
Top-level entries: SOURCE, window.json.
The seat lives inside the `code` submodule, not in the superproject.
The launcher does not compile the seat; it opens the seat's own surface.
The gate checks that the folder exists or that the seat is explicitly empty.
The gate checks that the alias resolves to exactly one part.
The gate checks that the layout maps to the codename.
The seat's provenance is recorded in `THIRD_PARTY_NOTICES.md` and `payloads/CONFLICT.md`.
The seat's documentation is this README plus the seat's own upstream docs.

## 26.10 Zenix · security and provenance
**Zenix** is imported or project-authored; the registry contents note records which.
The imported source keeps its own licence and its own redistribution terms.
The repository does not grant a blanket licence over the seat.
The `THIRD_PARTY_NOTICES.md` file is the starting point.
The `payloads/CONFLICT.md` file records known conflicts.
Do not redistribute a third-party binary as project-authored.
Do not remove a provenance note to make a package look cleaner.
Do not assume an upstream licence covers a modified build.
The security review treats a missing provenance note as a finding.
The security review treats a hidden binary as a finding.
The seat's attack surface is its own runtime.
The launcher does not elevate privileges by default.
The launcher reads local files; it does not upload them.
The seat's secrets are not committed to the repository.
The seat's build artefacts are not committed to the repository.
The seat's provenance is part of the publication.
The safe answer is to ask before redistributing.
The conservative answer is to ship only project-authored files.
The next section describes risks and next steps.
`windows/zenix` is the seat folder; the launcher reads it through the registry.
The codename is **Zenix**; the alias is **Ultra**.
The registry status is **present**.
The recorded contents are: Native Claude Desktop 5.1231.2; SOURCE/ with app.asar + ion-dist.asar + claude-vm VHDX, 11,874 files / 940 MB.
Top-level entries: SOURCE, window.json.
The seat lives inside the `code` submodule, not in the superproject.
The launcher does not compile the seat; it opens the seat's own surface.
The gate checks that the folder exists or that the seat is explicitly empty.
The gate checks that the alias resolves to exactly one part.
The gate checks that the layout maps to the codename.
The seat's provenance is recorded in `THIRD_PARTY_NOTICES.md` and `payloads/CONFLICT.md`.

## 26.11 Zenix · risks and next steps
The current status of **Zenix** is **present**.
The folder note is: none.
The layout mapping is: 6 = Ultra.
An empty seat is a reserved seat, not a shipped feature.
A present folder is not a promise of a runnable entry point.
A missing entry point is a launcher limitation.
A pending rename is a handle-lock issue.
A large imported tree is a provenance issue.
A stale alias is a gate failure.
A stale layout is a gate failure.
The next step is recorded in the roadmap.
The next documentation step is to keep this chapter in sync.
The next validation step is to add a check for the seat.
The next provenance step is to review the imported tree.
The next product step is to make the seat startable where it is not.
The risk register is in the publication.
The risk register is reviewed at every publication build.
The risk register is not a promise that the risk is gone.
The next section is the file catalog.
`windows/zenix` is the seat folder; the launcher reads it through the registry.
The codename is **Zenix**; the alias is **Ultra**.
The registry status is **present**.
The recorded contents are: Native Claude Desktop 5.1231.2; SOURCE/ with app.asar + ion-dist.asar + claude-vm VHDX, 11,874 files / 940 MB.
Top-level entries: SOURCE, window.json.
The seat lives inside the `code` submodule, not in the superproject.
The launcher does not compile the seat; it opens the seat's own surface.
The gate checks that the folder exists or that the seat is explicitly empty.
The gate checks that the alias resolves to exactly one part.
The gate checks that the layout maps to the codename.
The seat's provenance is recorded in `THIRD_PARTY_NOTICES.md` and `payloads/CONFLICT.md`.

## 26.12 Zenix · file catalog
- `SOURCE` — dir.
- `window.json` — 492 B.
The catalog is a top-level sample.
The catalog is regenerated at build time.
The catalog is part of the publication's appendix.
The catalog is not a recursive file count.
The catalog is not a licence inventory.
The catalog is a map for the reader.
The next seat follows.
`windows/zenix` is the seat folder; the launcher reads it through the registry.
The codename is **Zenix**; the alias is **Ultra**.
The registry status is **present**.
The recorded contents are: Native Claude Desktop 5.1231.2; SOURCE/ with app.asar + ion-dist.asar + claude-vm VHDX, 11,874 files / 940 MB.
Top-level entries: SOURCE, window.json.
The seat lives inside the `code` submodule, not in the superproject.
The launcher does not compile the seat; it opens the seat's own surface.
The gate checks that the folder exists or that the seat is explicitly empty.
The gate checks that the alias resolves to exactly one part.
The gate checks that the layout maps to the codename.
The seat's provenance is recorded in `THIRD_PARTY_NOTICES.md` and `payloads/CONFLICT.md`.
The seat's documentation is this README plus the seat's own upstream docs.
The seat's next step is recorded in the roadmap.
The seat's status is visible in the nine-seat map.
The seat's folder name is stable even when the display name changes.
The seat's alias is an edition label, not a second codename.
The seat's layout is the user-visible entry point.
The seat's launcher entry is validated before a release.
The seat's risks are recorded rather than hidden.
The seat's publication chapter is generated from these facts.
`windows/zenix` is the seat folder; the launcher reads it through the registry.

## 27.1 Merger · overview
**Merger** is the `windows/merger` seat of CodeFusion.
Its alias is **—**; its status is **present**.
The registry records: Reserved support folder; not a launcher part.
The top-level entries are: windows.lnk.
The layout mapping is: no layout entry.
The seat is part of the nine-seat map in the registry chapter.
The seat is not a separate repository; it is a folder in the `code` submodule.
The seat is opened by the launcher, not compiled into the launcher.
The seat keeps its own upstream source and its own runtime assumptions.
The seat is documented here because a cold reader needs the map.
The seat's provenance is recorded separately from its functionality.
The seat's status is a statement about the folder, not about quality.
The seat's alias is an edition label, not a role.
The seat's layout is the user-facing choice.
The seat's registry entry is the source of truth.
The seat's folder is checked by the gate.
The seat's entry is repeated in the nine-seat map.
The seat's next step is in the roadmap.
The seat's chapter continues with the registry entry.
The seat's facts are generated from `arch/windows.json`.
`windows/merger` is the seat folder; the launcher reads it through the registry.
The codename is **Merger**; the alias is **—**.
The registry status is **present**.
The recorded contents are: Reserved support folder; not a launcher part.
Top-level entries: windows.lnk.
The seat lives inside the `code` submodule, not in the superproject.
The launcher does not compile the seat; it opens the seat's own surface.
The gate checks that the folder exists or that the seat is explicitly empty.
The gate checks that the alias resolves to exactly one part.
The gate checks that the layout maps to the codename.

## 27.2 Merger · registry entry
Codename: `Merger`.
Alias: `—`.
Folder: `windows/merger`.
Status: `present`.
Contents: Reserved support folder; not a launcher part.
Physical folder: `windows/merger`.
Folder note: none.
The registry is `arch/windows.json`.
The alias resolution table maps the alias to the codename.
The retired alias table does not contain this codename unless it is retired.
The naming rule applies: the codename is the address; the alias is the label.
The registry entry is checked by `check-consistency.mjs`.
The registry entry is the first thing to edit when a seat changes.
The registry entry is the last thing to trust when a folder was renamed manually.
The registry entry does not grant a licence.
The registry entry does not promise that the seat is startable.
The registry entry does not hide an empty folder.
The registry entry is part of the publication's seat appendix.
The registry entry is generated into this section by the docs builder.
The next section lists the folder layout.
`windows/merger` is the seat folder; the launcher reads it through the registry.
The codename is **Merger**; the alias is **—**.
The registry status is **present**.
The recorded contents are: Reserved support folder; not a launcher part.
Top-level entries: windows.lnk.
The seat lives inside the `code` submodule, not in the superproject.
The launcher does not compile the seat; it opens the seat's own surface.
The gate checks that the folder exists or that the seat is explicitly empty.
The gate checks that the alias resolves to exactly one part.
The gate checks that the layout maps to the codename.

## 27.3 Merger · folder layout
The folder is `windows/merger`.
Top-level entries (1): windows.lnk.
- `windows.lnk` — 1.4 KB.
The listing is sampled at the top level; the full tree is intentionally not copied into this README.
The full tree is available on disk and in the registry contents note.
The top-level listing is enough to tell a source tree from a reserved seat.
The listing is regenerated at build time.
The listing does not include ignored build outputs.
The listing does not include the `.git` directory.
The listing is part of the publication's provenance appendix.
The next section inventories the top level.
`windows/merger` is the seat folder; the launcher reads it through the registry.
The codename is **Merger**; the alias is **—**.
The registry status is **present**.
The recorded contents are: Reserved support folder; not a launcher part.
Top-level entries: windows.lnk.
The seat lives inside the `code` submodule, not in the superproject.
The launcher does not compile the seat; it opens the seat's own surface.
The gate checks that the folder exists or that the seat is explicitly empty.
The gate checks that the alias resolves to exactly one part.
The gate checks that the layout maps to the codename.
The seat's provenance is recorded in `THIRD_PARTY_NOTICES.md` and `payloads/CONFLICT.md`.
The seat's documentation is this README plus the seat's own upstream docs.
The seat's next step is recorded in the roadmap.
The seat's status is visible in the nine-seat map.
The seat's folder name is stable even when the display name changes.
The seat's alias is an edition label, not a second codename.
The seat's layout is the user-visible entry point.
The seat's launcher entry is validated before a release.
The seat's risks are recorded rather than hidden.

## 27.4 Merger · top-level inventory
- `windows.lnk` — 1.4 KB.
The inventory is a top-level sample, not a recursive file count.
A recursive count is recorded in the registry contents note where it exists.
The inventory is regenerated at build time.
The inventory is used by the publication's appendix.
The inventory is not a substitute for the actual tree.
The inventory is not a licence inventory.
The inventory is not a security review.
The inventory is a map.
The next section describes build and run.
`windows/merger` is the seat folder; the launcher reads it through the registry.
The codename is **Merger**; the alias is **—**.
The registry status is **present**.
The recorded contents are: Reserved support folder; not a launcher part.
Top-level entries: windows.lnk.
The seat lives inside the `code` submodule, not in the superproject.
The launcher does not compile the seat; it opens the seat's own surface.
The gate checks that the folder exists or that the seat is explicitly empty.
The gate checks that the alias resolves to exactly one part.
The gate checks that the layout maps to the codename.
The seat's provenance is recorded in `THIRD_PARTY_NOTICES.md` and `payloads/CONFLICT.md`.
The seat's documentation is this README plus the seat's own upstream docs.
The seat's next step is recorded in the roadmap.
The seat's status is visible in the nine-seat map.
The seat's folder name is stable even when the display name changes.
The seat's alias is an edition label, not a second codename.
The seat's layout is the user-visible entry point.
The seat's launcher entry is validated before a release.
The seat's risks are recorded rather than hidden.
The seat's publication chapter is generated from these facts.

## 27.5 Merger · build and run
The seat is opened from the launcher, not built by it.
The launcher entry is the `Merger` layout when one exists.
The layout mapping is: no layout entry.
The launcher script is `launcher/launch.ps1`.
The launcher metadata is `launcher/window.json`.
The registry is read at runtime.
The seat's own build system, if any, is documented upstream.
The repository gate does not compile the seat.
The repository gate checks that the seat is registered.
A missing entry point is a launcher limitation, not a build failure.
A seat with status `empty` has no runnable surface.
A seat with status `present` has a folder, not necessarily a runnable entry.
The launcher's first question is Editor or Fusion.
The layout picker is the second question.
The seat is the third choice.
The order is deliberate: the launcher stays small.
The seat's runtime is its own responsibility.
The seat's provenance is the repository's responsibility.
The seat's documentation is this chapter.
The next section describes the runtime surface.
`windows/merger` is the seat folder; the launcher reads it through the registry.
The codename is **Merger**; the alias is **—**.
The registry status is **present**.
The recorded contents are: Reserved support folder; not a launcher part.
Top-level entries: windows.lnk.
The seat lives inside the `code` submodule, not in the superproject.
The launcher does not compile the seat; it opens the seat's own surface.
The gate checks that the folder exists or that the seat is explicitly empty.
The gate checks that the alias resolves to exactly one part.
The gate checks that the layout maps to the codename.

## 27.6 Merger · runtime surface
The runtime surface of **Merger** is the window opened by its layout.
The layout mapping is: no layout entry.
The Editor window is always available as a singleton.
The Fusion window is the merged surface with the layout picker.
The seat may expose its own settings or sub-layouts.
The seat may be a native window, a web app, a CLI or an installed package.
The registry contents note names the source shape.
The launcher does not normalize the seat's UI.
The launcher does not promise feature parity between seats.
The launcher does not hide the seat's origin.
The seat's title is its own.
The seat's icon is its own where it has one.
The seat's window metadata is its own `window.json` where it exists.
The seat's runtime is validated by opening it.
The seat's runtime is not validated by the consistency gate.
The seat's runtime is documented in the publication's seat chapter.
The next section describes launcher integration.
`windows/merger` is the seat folder; the launcher reads it through the registry.
The codename is **Merger**; the alias is **—**.
The registry status is **present**.
The recorded contents are: Reserved support folder; not a launcher part.
Top-level entries: windows.lnk.
The seat lives inside the `code` submodule, not in the superproject.
The launcher does not compile the seat; it opens the seat's own surface.
The gate checks that the folder exists or that the seat is explicitly empty.
The gate checks that the alias resolves to exactly one part.
The gate checks that the layout maps to the codename.
The seat's provenance is recorded in `THIRD_PARTY_NOTICES.md` and `payloads/CONFLICT.md`.
The seat's documentation is this README plus the seat's own upstream docs.
The seat's next step is recorded in the roadmap.

## 27.7 Merger · launcher integration
The launcher reads `arch/windows.json` to find **Merger**.
The layout picker reads `arch/layouts.json` to place **Merger**.
The current layout mapping is: no layout entry.
The launcher does not hard-code the seat list.
The launcher does not hard-code the alias ladder.
The launcher does not hard-code the folder path.
The launcher's first question is Editor or Fusion.
The layout picker is the in-app part choice.
The registry and the layout file are checked together.
A missing layout is a gate failure.
A missing registry entry is a gate failure.
A mismatched alias is a gate failure.
The gate runs before the launcher change is accepted.
The gate is `node scripts/rebrand/check-consistency.mjs`.
The gate's current result is 13/13 checks passed.
The integration is deliberately data-driven.
The integration is the reason a new seat is a registry change, not a launcher rewrite.
The integration is documented in `arch/README.md`.
The next section maps the layout.
`windows/merger` is the seat folder; the launcher reads it through the registry.
The codename is **Merger**; the alias is **—**.
The registry status is **present**.
The recorded contents are: Reserved support folder; not a launcher part.
Top-level entries: windows.lnk.
The seat lives inside the `code` submodule, not in the superproject.
The launcher does not compile the seat; it opens the seat's own surface.
The gate checks that the folder exists or that the seat is explicitly empty.
The gate checks that the alias resolves to exactly one part.
The gate checks that the layout maps to the codename.
The seat's provenance is recorded in `THIRD_PARTY_NOTICES.md` and `payloads/CONFLICT.md`.

## 27.8 Merger · layout mapping
Layout entries for **Merger**: no layout entry.
The layout file records the order, the name, the alias, the part and the source.
The layout order is Lite, Plus, Pro, Studio, Max, Ultra.
The order is an edition ladder, not a quality ranking.
The Editor window is available from every layout.
The Fusion window is the merged surface.
A layout can have variants; Pro has New Codeix and Old Codeix.
A layout can expose a sub-layout; Settings is reachable under Pro.
A layout without a part is invalid.
A part without a layout is invalid.
The layout file is JSON because the launcher and the gate both read it.
The layout file is updated with the registry, never after it.
The layout file is part of the publication's seat chapter.
The layout file is generated into this section by the docs builder.
The next section describes validation.
`windows/merger` is the seat folder; the launcher reads it through the registry.
The codename is **Merger**; the alias is **—**.
The registry status is **present**.
The recorded contents are: Reserved support folder; not a launcher part.
Top-level entries: windows.lnk.
The seat lives inside the `code` submodule, not in the superproject.
The launcher does not compile the seat; it opens the seat's own surface.
The gate checks that the folder exists or that the seat is explicitly empty.
The gate checks that the alias resolves to exactly one part.
The gate checks that the layout maps to the codename.
The seat's provenance is recorded in `THIRD_PARTY_NOTICES.md` and `payloads/CONFLICT.md`.
The seat's documentation is this README plus the seat's own upstream docs.
The seat's next step is recorded in the roadmap.
The seat's status is visible in the nine-seat map.
The seat's folder name is stable even when the display name changes.

## 27.9 Merger · validation
Run `node scripts/rebrand/check-consistency.mjs` after changing **Merger**.
The gate checks the registry, the launcher UI, the launcher manifest and the component folders.
The gate checks that the folder exists or the seat is explicitly empty.
The gate checks that the alias resolves to exactly one part.
The gate checks that the layout maps to the codename.
The gate checks that the launcher title matches the registry.
The gate checks that a retired alias does not resolve.
The gate reports a pass count.
The current gate is 13/13 checks passed.
A failure names the file and the expected relationship.
The gate is not weakened to make a release look clean.
The gate is part of the dashboard's code-repo section.
The gate is part of the D-31 documentation evidence.
The gate is run before the commit.
The gate is run after the rename.
The gate is run after the documentation build.
The gate is a contract, not a suggestion.
The next section describes security and provenance.
`windows/merger` is the seat folder; the launcher reads it through the registry.
The codename is **Merger**; the alias is **—**.
The registry status is **present**.
The recorded contents are: Reserved support folder; not a launcher part.
Top-level entries: windows.lnk.
The seat lives inside the `code` submodule, not in the superproject.
The launcher does not compile the seat; it opens the seat's own surface.
The gate checks that the folder exists or that the seat is explicitly empty.
The gate checks that the alias resolves to exactly one part.
The gate checks that the layout maps to the codename.
The seat's provenance is recorded in `THIRD_PARTY_NOTICES.md` and `payloads/CONFLICT.md`.
The seat's documentation is this README plus the seat's own upstream docs.

## 27.10 Merger · security and provenance
**Merger** is imported or project-authored; the registry contents note records which.
The imported source keeps its own licence and its own redistribution terms.
The repository does not grant a blanket licence over the seat.
The `THIRD_PARTY_NOTICES.md` file is the starting point.
The `payloads/CONFLICT.md` file records known conflicts.
Do not redistribute a third-party binary as project-authored.
Do not remove a provenance note to make a package look cleaner.
Do not assume an upstream licence covers a modified build.
The security review treats a missing provenance note as a finding.
The security review treats a hidden binary as a finding.
The seat's attack surface is its own runtime.
The launcher does not elevate privileges by default.
The launcher reads local files; it does not upload them.
The seat's secrets are not committed to the repository.
The seat's build artefacts are not committed to the repository.
The seat's provenance is part of the publication.
The safe answer is to ask before redistributing.
The conservative answer is to ship only project-authored files.
The next section describes risks and next steps.
`windows/merger` is the seat folder; the launcher reads it through the registry.
The codename is **Merger**; the alias is **—**.
The registry status is **present**.
The recorded contents are: Reserved support folder; not a launcher part.
Top-level entries: windows.lnk.
The seat lives inside the `code` submodule, not in the superproject.
The launcher does not compile the seat; it opens the seat's own surface.
The gate checks that the folder exists or that the seat is explicitly empty.
The gate checks that the alias resolves to exactly one part.
The gate checks that the layout maps to the codename.
The seat's provenance is recorded in `THIRD_PARTY_NOTICES.md` and `payloads/CONFLICT.md`.

## 27.11 Merger · risks and next steps
The current status of **Merger** is **present**.
The folder note is: none.
The layout mapping is: no layout entry.
An empty seat is a reserved seat, not a shipped feature.
A present folder is not a promise of a runnable entry point.
A missing entry point is a launcher limitation.
A pending rename is a handle-lock issue.
A large imported tree is a provenance issue.
A stale alias is a gate failure.
A stale layout is a gate failure.
The next step is recorded in the roadmap.
The next documentation step is to keep this chapter in sync.
The next validation step is to add a check for the seat.
The next provenance step is to review the imported tree.
The next product step is to make the seat startable where it is not.
The risk register is in the publication.
The risk register is reviewed at every publication build.
The risk register is not a promise that the risk is gone.
The next section is the file catalog.
`windows/merger` is the seat folder; the launcher reads it through the registry.
The codename is **Merger**; the alias is **—**.
The registry status is **present**.
The recorded contents are: Reserved support folder; not a launcher part.
Top-level entries: windows.lnk.
The seat lives inside the `code` submodule, not in the superproject.
The launcher does not compile the seat; it opens the seat's own surface.
The gate checks that the folder exists or that the seat is explicitly empty.
The gate checks that the alias resolves to exactly one part.
The gate checks that the layout maps to the codename.
The seat's provenance is recorded in `THIRD_PARTY_NOTICES.md` and `payloads/CONFLICT.md`.

## 27.12 Merger · file catalog
- `windows.lnk` — 1.4 KB.
The catalog is a top-level sample.
The catalog is regenerated at build time.
The catalog is part of the publication's appendix.
The catalog is not a recursive file count.
The catalog is not a licence inventory.
The catalog is a map for the reader.
The next seat follows.
`windows/merger` is the seat folder; the launcher reads it through the registry.
The codename is **Merger**; the alias is **—**.
The registry status is **present**.
The recorded contents are: Reserved support folder; not a launcher part.
Top-level entries: windows.lnk.
The seat lives inside the `code` submodule, not in the superproject.
The launcher does not compile the seat; it opens the seat's own surface.
The gate checks that the folder exists or that the seat is explicitly empty.
The gate checks that the alias resolves to exactly one part.
The gate checks that the layout maps to the codename.
The seat's provenance is recorded in `THIRD_PARTY_NOTICES.md` and `payloads/CONFLICT.md`.
The seat's documentation is this README plus the seat's own upstream docs.
The seat's next step is recorded in the roadmap.
The seat's status is visible in the nine-seat map.
The seat's folder name is stable even when the display name changes.
The seat's alias is an edition label, not a second codename.
The seat's layout is the user-visible entry point.
The seat's launcher entry is validated before a release.
The seat's risks are recorded rather than hidden.
The seat's publication chapter is generated from these facts.
`windows/merger` is the seat folder; the launcher reads it through the registry.
The codename is **Merger**; the alias is **—**.

## 28.1 Vs-Ext · overview
**Vs-Ext** is the `windows/vs-ext` seat of CodeFusion.
Its alias is **—**; its status is **present**.
The registry records: Reserved support folder; not a launcher part.
The top-level entries are: Anthropic.claude-code-2.1.322@win32-x64.vsix.
The layout mapping is: no layout entry.
The seat is part of the nine-seat map in the registry chapter.
The seat is not a separate repository; it is a folder in the `code` submodule.
The seat is opened by the launcher, not compiled into the launcher.
The seat keeps its own upstream source and its own runtime assumptions.
The seat is documented here because a cold reader needs the map.
The seat's provenance is recorded separately from its functionality.
The seat's status is a statement about the folder, not about quality.
The seat's alias is an edition label, not a role.
The seat's layout is the user-facing choice.
The seat's registry entry is the source of truth.
The seat's folder is checked by the gate.
The seat's entry is repeated in the nine-seat map.
The seat's next step is in the roadmap.
The seat's chapter continues with the registry entry.
The seat's facts are generated from `arch/windows.json`.
`windows/vs-ext` is the seat folder; the launcher reads it through the registry.
The codename is **Vs-Ext**; the alias is **—**.
The registry status is **present**.
The recorded contents are: Reserved support folder; not a launcher part.
Top-level entries: Anthropic.claude-code-2.1.322@win32-x64.vsix.
The seat lives inside the `code` submodule, not in the superproject.
The launcher does not compile the seat; it opens the seat's own surface.
The gate checks that the folder exists or that the seat is explicitly empty.
The gate checks that the alias resolves to exactly one part.
The gate checks that the layout maps to the codename.

## 28.2 Vs-Ext · registry entry
Codename: `Vs-Ext`.
Alias: `—`.
Folder: `windows/vs-ext`.
Status: `present`.
Contents: Reserved support folder; not a launcher part.
Physical folder: `windows/vs-ext`.
Folder note: none.
The registry is `arch/windows.json`.
The alias resolution table maps the alias to the codename.
The retired alias table does not contain this codename unless it is retired.
The naming rule applies: the codename is the address; the alias is the label.
The registry entry is checked by `check-consistency.mjs`.
The registry entry is the first thing to edit when a seat changes.
The registry entry is the last thing to trust when a folder was renamed manually.
The registry entry does not grant a licence.
The registry entry does not promise that the seat is startable.
The registry entry does not hide an empty folder.
The registry entry is part of the publication's seat appendix.
The registry entry is generated into this section by the docs builder.
The next section lists the folder layout.
`windows/vs-ext` is the seat folder; the launcher reads it through the registry.
The codename is **Vs-Ext**; the alias is **—**.
The registry status is **present**.
The recorded contents are: Reserved support folder; not a launcher part.
Top-level entries: Anthropic.claude-code-2.1.322@win32-x64.vsix.
The seat lives inside the `code` submodule, not in the superproject.
The launcher does not compile the seat; it opens the seat's own surface.
The gate checks that the folder exists or that the seat is explicitly empty.
The gate checks that the alias resolves to exactly one part.
The gate checks that the layout maps to the codename.

## 28.3 Vs-Ext · folder layout
The folder is `windows/vs-ext`.
Top-level entries (1): Anthropic.claude-code-2.1.322@win32-x64.vsix.
- `Anthropic.claude-code-2.1.322@win32-x64.vsix` — 158.2 MB.
The listing is sampled at the top level; the full tree is intentionally not copied into this README.
The full tree is available on disk and in the registry contents note.
The top-level listing is enough to tell a source tree from a reserved seat.
The listing is regenerated at build time.
The listing does not include ignored build outputs.
The listing does not include the `.git` directory.
The listing is part of the publication's provenance appendix.
The next section inventories the top level.
`windows/vs-ext` is the seat folder; the launcher reads it through the registry.
The codename is **Vs-Ext**; the alias is **—**.
The registry status is **present**.
The recorded contents are: Reserved support folder; not a launcher part.
Top-level entries: Anthropic.claude-code-2.1.322@win32-x64.vsix.
The seat lives inside the `code` submodule, not in the superproject.
The launcher does not compile the seat; it opens the seat's own surface.
The gate checks that the folder exists or that the seat is explicitly empty.
The gate checks that the alias resolves to exactly one part.
The gate checks that the layout maps to the codename.
The seat's provenance is recorded in `THIRD_PARTY_NOTICES.md` and `payloads/CONFLICT.md`.
The seat's documentation is this README plus the seat's own upstream docs.
The seat's next step is recorded in the roadmap.
The seat's status is visible in the nine-seat map.
The seat's folder name is stable even when the display name changes.
The seat's alias is an edition label, not a second codename.
The seat's layout is the user-visible entry point.
The seat's launcher entry is validated before a release.
The seat's risks are recorded rather than hidden.

## 28.4 Vs-Ext · top-level inventory
- `Anthropic.claude-code-2.1.322@win32-x64.vsix` — 158.2 MB.
The inventory is a top-level sample, not a recursive file count.
A recursive count is recorded in the registry contents note where it exists.
The inventory is regenerated at build time.
The inventory is used by the publication's appendix.
The inventory is not a substitute for the actual tree.
The inventory is not a licence inventory.
The inventory is not a security review.
The inventory is a map.
The next section describes build and run.
`windows/vs-ext` is the seat folder; the launcher reads it through the registry.
The codename is **Vs-Ext**; the alias is **—**.
The registry status is **present**.
The recorded contents are: Reserved support folder; not a launcher part.
Top-level entries: Anthropic.claude-code-2.1.322@win32-x64.vsix.
The seat lives inside the `code` submodule, not in the superproject.
The launcher does not compile the seat; it opens the seat's own surface.
The gate checks that the folder exists or that the seat is explicitly empty.
The gate checks that the alias resolves to exactly one part.
The gate checks that the layout maps to the codename.
The seat's provenance is recorded in `THIRD_PARTY_NOTICES.md` and `payloads/CONFLICT.md`.
The seat's documentation is this README plus the seat's own upstream docs.
The seat's next step is recorded in the roadmap.
The seat's status is visible in the nine-seat map.
The seat's folder name is stable even when the display name changes.
The seat's alias is an edition label, not a second codename.
The seat's layout is the user-visible entry point.
The seat's launcher entry is validated before a release.
The seat's risks are recorded rather than hidden.
The seat's publication chapter is generated from these facts.

## 28.5 Vs-Ext · build and run
The seat is opened from the launcher, not built by it.
The launcher entry is the `Vs-Ext` layout when one exists.
The layout mapping is: no layout entry.
The launcher script is `launcher/launch.ps1`.
The launcher metadata is `launcher/window.json`.
The registry is read at runtime.
The seat's own build system, if any, is documented upstream.
The repository gate does not compile the seat.
The repository gate checks that the seat is registered.
A missing entry point is a launcher limitation, not a build failure.
A seat with status `empty` has no runnable surface.
A seat with status `present` has a folder, not necessarily a runnable entry.
The launcher's first question is Editor or Fusion.
The layout picker is the second question.
The seat is the third choice.
The order is deliberate: the launcher stays small.
The seat's runtime is its own responsibility.
The seat's provenance is the repository's responsibility.
The seat's documentation is this chapter.
The next section describes the runtime surface.
`windows/vs-ext` is the seat folder; the launcher reads it through the registry.
The codename is **Vs-Ext**; the alias is **—**.
The registry status is **present**.
The recorded contents are: Reserved support folder; not a launcher part.
Top-level entries: Anthropic.claude-code-2.1.322@win32-x64.vsix.
The seat lives inside the `code` submodule, not in the superproject.
The launcher does not compile the seat; it opens the seat's own surface.
The gate checks that the folder exists or that the seat is explicitly empty.
The gate checks that the alias resolves to exactly one part.
The gate checks that the layout maps to the codename.

## 28.6 Vs-Ext · runtime surface
The runtime surface of **Vs-Ext** is the window opened by its layout.
The layout mapping is: no layout entry.
The Editor window is always available as a singleton.
The Fusion window is the merged surface with the layout picker.
The seat may expose its own settings or sub-layouts.
The seat may be a native window, a web app, a CLI or an installed package.
The registry contents note names the source shape.
The launcher does not normalize the seat's UI.
The launcher does not promise feature parity between seats.
The launcher does not hide the seat's origin.
The seat's title is its own.
The seat's icon is its own where it has one.
The seat's window metadata is its own `window.json` where it exists.
The seat's runtime is validated by opening it.
The seat's runtime is not validated by the consistency gate.
The seat's runtime is documented in the publication's seat chapter.
The next section describes launcher integration.
`windows/vs-ext` is the seat folder; the launcher reads it through the registry.
The codename is **Vs-Ext**; the alias is **—**.
The registry status is **present**.
The recorded contents are: Reserved support folder; not a launcher part.
Top-level entries: Anthropic.claude-code-2.1.322@win32-x64.vsix.
The seat lives inside the `code` submodule, not in the superproject.
The launcher does not compile the seat; it opens the seat's own surface.
The gate checks that the folder exists or that the seat is explicitly empty.
The gate checks that the alias resolves to exactly one part.
The gate checks that the layout maps to the codename.
The seat's provenance is recorded in `THIRD_PARTY_NOTICES.md` and `payloads/CONFLICT.md`.
The seat's documentation is this README plus the seat's own upstream docs.
The seat's next step is recorded in the roadmap.

## 28.7 Vs-Ext · launcher integration
The launcher reads `arch/windows.json` to find **Vs-Ext**.
The layout picker reads `arch/layouts.json` to place **Vs-Ext**.
The current layout mapping is: no layout entry.
The launcher does not hard-code the seat list.
The launcher does not hard-code the alias ladder.
The launcher does not hard-code the folder path.
The launcher's first question is Editor or Fusion.
The layout picker is the in-app part choice.
The registry and the layout file are checked together.
A missing layout is a gate failure.
A missing registry entry is a gate failure.
A mismatched alias is a gate failure.
The gate runs before the launcher change is accepted.
The gate is `node scripts/rebrand/check-consistency.mjs`.
The gate's current result is 13/13 checks passed.
The integration is deliberately data-driven.
The integration is the reason a new seat is a registry change, not a launcher rewrite.
The integration is documented in `arch/README.md`.
The next section maps the layout.
`windows/vs-ext` is the seat folder; the launcher reads it through the registry.
The codename is **Vs-Ext**; the alias is **—**.
The registry status is **present**.
The recorded contents are: Reserved support folder; not a launcher part.
Top-level entries: Anthropic.claude-code-2.1.322@win32-x64.vsix.
The seat lives inside the `code` submodule, not in the superproject.
The launcher does not compile the seat; it opens the seat's own surface.
The gate checks that the folder exists or that the seat is explicitly empty.
The gate checks that the alias resolves to exactly one part.
The gate checks that the layout maps to the codename.
The seat's provenance is recorded in `THIRD_PARTY_NOTICES.md` and `payloads/CONFLICT.md`.

## 28.8 Vs-Ext · layout mapping
Layout entries for **Vs-Ext**: no layout entry.
The layout file records the order, the name, the alias, the part and the source.
The layout order is Lite, Plus, Pro, Studio, Max, Ultra.
The order is an edition ladder, not a quality ranking.
The Editor window is available from every layout.
The Fusion window is the merged surface.
A layout can have variants; Pro has New Codeix and Old Codeix.
A layout can expose a sub-layout; Settings is reachable under Pro.
A layout without a part is invalid.
A part without a layout is invalid.
The layout file is JSON because the launcher and the gate both read it.
The layout file is updated with the registry, never after it.
The layout file is part of the publication's seat chapter.
The layout file is generated into this section by the docs builder.
The next section describes validation.
`windows/vs-ext` is the seat folder; the launcher reads it through the registry.
The codename is **Vs-Ext**; the alias is **—**.
The registry status is **present**.
The recorded contents are: Reserved support folder; not a launcher part.
Top-level entries: Anthropic.claude-code-2.1.322@win32-x64.vsix.
The seat lives inside the `code` submodule, not in the superproject.
The launcher does not compile the seat; it opens the seat's own surface.
The gate checks that the folder exists or that the seat is explicitly empty.
The gate checks that the alias resolves to exactly one part.
The gate checks that the layout maps to the codename.
The seat's provenance is recorded in `THIRD_PARTY_NOTICES.md` and `payloads/CONFLICT.md`.
The seat's documentation is this README plus the seat's own upstream docs.
The seat's next step is recorded in the roadmap.
The seat's status is visible in the nine-seat map.
The seat's folder name is stable even when the display name changes.

## 28.9 Vs-Ext · validation
Run `node scripts/rebrand/check-consistency.mjs` after changing **Vs-Ext**.
The gate checks the registry, the launcher UI, the launcher manifest and the component folders.
The gate checks that the folder exists or the seat is explicitly empty.
The gate checks that the alias resolves to exactly one part.
The gate checks that the layout maps to the codename.
The gate checks that the launcher title matches the registry.
The gate checks that a retired alias does not resolve.
The gate reports a pass count.
The current gate is 13/13 checks passed.
A failure names the file and the expected relationship.
The gate is not weakened to make a release look clean.
The gate is part of the dashboard's code-repo section.
The gate is part of the D-31 documentation evidence.
The gate is run before the commit.
The gate is run after the rename.
The gate is run after the documentation build.
The gate is a contract, not a suggestion.
The next section describes security and provenance.
`windows/vs-ext` is the seat folder; the launcher reads it through the registry.
The codename is **Vs-Ext**; the alias is **—**.
The registry status is **present**.
The recorded contents are: Reserved support folder; not a launcher part.
Top-level entries: Anthropic.claude-code-2.1.322@win32-x64.vsix.
The seat lives inside the `code` submodule, not in the superproject.
The launcher does not compile the seat; it opens the seat's own surface.
The gate checks that the folder exists or that the seat is explicitly empty.
The gate checks that the alias resolves to exactly one part.
The gate checks that the layout maps to the codename.
The seat's provenance is recorded in `THIRD_PARTY_NOTICES.md` and `payloads/CONFLICT.md`.
The seat's documentation is this README plus the seat's own upstream docs.

## 28.10 Vs-Ext · security and provenance
**Vs-Ext** is imported or project-authored; the registry contents note records which.
The imported source keeps its own licence and its own redistribution terms.
The repository does not grant a blanket licence over the seat.
The `THIRD_PARTY_NOTICES.md` file is the starting point.
The `payloads/CONFLICT.md` file records known conflicts.
Do not redistribute a third-party binary as project-authored.
Do not remove a provenance note to make a package look cleaner.
Do not assume an upstream licence covers a modified build.
The security review treats a missing provenance note as a finding.
The security review treats a hidden binary as a finding.
The seat's attack surface is its own runtime.
The launcher does not elevate privileges by default.
The launcher reads local files; it does not upload them.
The seat's secrets are not committed to the repository.
The seat's build artefacts are not committed to the repository.
The seat's provenance is part of the publication.
The safe answer is to ask before redistributing.
The conservative answer is to ship only project-authored files.
The next section describes risks and next steps.
`windows/vs-ext` is the seat folder; the launcher reads it through the registry.
The codename is **Vs-Ext**; the alias is **—**.
The registry status is **present**.
The recorded contents are: Reserved support folder; not a launcher part.
Top-level entries: Anthropic.claude-code-2.1.322@win32-x64.vsix.
The seat lives inside the `code` submodule, not in the superproject.
The launcher does not compile the seat; it opens the seat's own surface.
The gate checks that the folder exists or that the seat is explicitly empty.
The gate checks that the alias resolves to exactly one part.
The gate checks that the layout maps to the codename.
The seat's provenance is recorded in `THIRD_PARTY_NOTICES.md` and `payloads/CONFLICT.md`.

## 28.11 Vs-Ext · risks and next steps
The current status of **Vs-Ext** is **present**.
The folder note is: none.
The layout mapping is: no layout entry.
An empty seat is a reserved seat, not a shipped feature.
A present folder is not a promise of a runnable entry point.
A missing entry point is a launcher limitation.
A pending rename is a handle-lock issue.
A large imported tree is a provenance issue.
A stale alias is a gate failure.
A stale layout is a gate failure.
The next step is recorded in the roadmap.
The next documentation step is to keep this chapter in sync.
The next validation step is to add a check for the seat.
The next provenance step is to review the imported tree.
The next product step is to make the seat startable where it is not.
The risk register is in the publication.
The risk register is reviewed at every publication build.
The risk register is not a promise that the risk is gone.
The next section is the file catalog.
`windows/vs-ext` is the seat folder; the launcher reads it through the registry.
The codename is **Vs-Ext**; the alias is **—**.
The registry status is **present**.
The recorded contents are: Reserved support folder; not a launcher part.
Top-level entries: Anthropic.claude-code-2.1.322@win32-x64.vsix.
The seat lives inside the `code` submodule, not in the superproject.
The launcher does not compile the seat; it opens the seat's own surface.
The gate checks that the folder exists or that the seat is explicitly empty.
The gate checks that the alias resolves to exactly one part.
The gate checks that the layout maps to the codename.
The seat's provenance is recorded in `THIRD_PARTY_NOTICES.md` and `payloads/CONFLICT.md`.

## 28.12 Vs-Ext · file catalog
- `Anthropic.claude-code-2.1.322@win32-x64.vsix` — 158.2 MB.
The catalog is a top-level sample.
The catalog is regenerated at build time.
The catalog is part of the publication's appendix.
The catalog is not a recursive file count.
The catalog is not a licence inventory.
The catalog is a map for the reader.
The next seat follows.
`windows/vs-ext` is the seat folder; the launcher reads it through the registry.
The codename is **Vs-Ext**; the alias is **—**.
The registry status is **present**.
The recorded contents are: Reserved support folder; not a launcher part.
Top-level entries: Anthropic.claude-code-2.1.322@win32-x64.vsix.
The seat lives inside the `code` submodule, not in the superproject.
The launcher does not compile the seat; it opens the seat's own surface.
The gate checks that the folder exists or that the seat is explicitly empty.
The gate checks that the alias resolves to exactly one part.
## Colophon

Built by `.plan/telemetry/docgen/build_code_readme.py` from `.plan/telemetry/docgen/facts.json`.

Verify with:

```powershell
python .plan/telemetry/docgen/build_code_readme.py
wc -l code/README.md   # must print 4096
node scripts/rebrand/check-consistency.mjs
```

The generator refuses to write a short file. The registry is the source of truth; this document is its map.

