# Base architecture

One launcher, seven parts. No part is named "CodeFusion"; the launcher's window title is
**Launcher**. Parts are addressed by codename, and each codename owns exactly one alias.

```
code/
├─ launcher/              "Launcher" window — 2 choices: Editor window / Fusion window
│  ├─ index.html          title: Launcher
│  ├─ launch.ps1          .\launch.ps1 [codename|alias]
│  └─ window.json
├─ windows/
│  ├─ ingot/              ZCode (Zhipu) source monorepo — code-fusion 3.17.0
│  ├─ onyx/               VS Code OSS 1.147.0 source (SOURCE/vscode-main); Qoder build retired
│  ├─ codeix/             OpenAI Codex MSIX (ui-old, ui-new) + toggle; integrated browser = Chromix
│  ├─ gsx-cli/            opencode workspace (holds MiMoCode source from Xiaomi)
│  ├─ zingma/             Qoder's native Quest/agents window (SOURCE/ extracted)
│  ├─ sonar/              empty — seat for the reverse-engineered DeepSeek Harness (DSH)
│  └─ zenix/              native Claude Desktop (SOURCE/ extracted)
├─ arch/
│  ├─ windows.json        registry: codename, alias, folder, contents, status
│  ├─ brand.ts            typed mirror + findPart() / findPartByAlias() / resolvePart()
│  └─ layouts.json        in-app layout registry (Lite..Ultra + GSX-CLI)
├─ payloads/               built-in payloads (skills/, extras/, agents/, bundled/, plugins/)
├─ scripts/rebrand/       rename, sync and consistency tooling
└─ BRAND.md               what is decided and what is not
```

| Codename | Alias | Folder | Contents | Status |
| --- | --- | --- | --- | --- |
| **Ingot** | Max | `windows/ingot` | Monorepo tree; 160,239 files (3.9 GB) | present |
| **Onyx** | Studio | `windows/onyx` | VS Code OSS 1.147.0 source at `SOURCE/vscode-main` (21,224 files / 392 MB); the RE'd Qoder desktop build (`Onyx.exe`) is retired | present |
| **Codeix** | Pro | `windows/codeix` | OpenAI Codex MSIX (`ui-old`, `ui-new`) + toggle; its integrated browser is called Chromix | present |
| **GSX-CLI** | # | `windows/gsx-cli` | opencode workspace + MiMoCode (Xiaomi) source; 2,060 files | present |
| **Zingma** | Lite | `windows/zingma` | Qoder's native Quest/agents window — `SOURCE/` extracted | present |
| **Sonar** | Plus | `windows/sonar` | reverse-engineered DeepSeek Harness (DSH) (not placed yet) | empty |
| **Zenix** | Ultra | `windows/zenix` | native Claude Desktop — `SOURCE/` extracted | present |

Ladder: **Lite → Plus → Pro → Studio → Max → Ultra**. `Core` is retired (`#`); GSX-CLI also
holds no alias. **Chromix is not a part** — it is the name of the browser integrated inside
Codeix; there is no `windows/chromix` tree.

## Rules

- **A part is its codename.** Case-insensitive; `resolvePart()` accepts a codename or an alias.
- **One alias per part, five live aliases.** `#` means the alias seat is retired.
- **Roles are not decided.** No part is labelled main/editor/browser; **Ingot is not main**.
- **Provenance is a fact, not a name.** Zephium, opencode, OpenAI Codex, Qoder, DeepSeek and
  Claude describe where a tree came from; they are never the part's name.
- **Launcher owns no logic.** It reads `arch/windows.json`; only **Ingot**
  (`pnpm dev:desktop`) and **Onyx** (`Onyx.exe`) have a startable entry, and the script
  says so for the rest.
- **`windows/onyx` is a real folder** — the earlier junction to `windows/obsidian` is gone.

## payloads/

Built-in payloads that ship with the launcher instead of living in a window folder
(counts verified 2026-11-01, after the `inbuilt/bundle` → `payloads` rename and the
29 `ds-*` + `hallmark` skill additions):

| Folder | Files | Size | Contents |
| --- | --- | --- | --- |
| `payloads/skills` | 659 | 3.9 MB | bundled skills (49 original + 29 `ds-*` + `hallmark`) plus `ADDED-SKILLS.md` |
| `payloads/extras` | 4 | 61 MB | source archives (ai-website-cloner-template, anthropic-fonts, deepseek-stack, hallmark) |
| `payloads/agents`, `bundled`, `plugins` | 0 | 0 | empty seats |

Each folder carries a `README.md` (role + how to add) and a `manifest.jsonl` (one
line per file: relative path + full sha256). The empty seats' manifests state
"intentionally empty" so a checkout never looks broken.

## Adding a part

1. Put the build or source in `windows/<codename>/`.
2. Add `{ codename, alias, folder, contents, status }` to `arch/windows.json` and
   `arch/brand.ts`; add the alias to `aliasResolve`.
3. Add a card to `launcher/index.html`.
4. Run `node scripts/rebrand/sync-window-json.mjs` to write every `window.json`.
