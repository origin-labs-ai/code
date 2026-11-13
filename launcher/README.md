# Launcher Desktop

The entry point. Name **Launcher Desktop**, window title **Launcher**. It has **no product
logic**: it asks exactly one question and hands off.

> **Editor window open karna hai ya Fusion window?**

| Choice | What opens |
| --- | --- |
| **Editor window** | The single editor window — VS Code OSS (source at `windows/onyx/SOURCE/vscode-main`). Always available; every layout also exposes **Open in Editor Window**. |
| **Fusion window** | The merged window, which carries the in-app **layout picker**. |

Part choice no longer happens here. It moved inside the app as **layouts** — see
`../arch/layouts.json`.

| File | Purpose |
| --- | --- |
| `index.html` | The launcher window (title `Launcher`): two cards, Editor window / Fusion window. |
| `launch.ps1` | `.\launch.ps1` lists parts; `.\launch.ps1 <codename\|alias>` starts or reports one (dev helper). |
| `window.json` | Identity record, alias ladder, resolve map and the two choices. |

## Layouts (in-app)

| # | Layout | Alias | Part | Source |
| --- | --- | --- | --- | --- |
| 1 | **Lite** | Lite | Zingma | Qoder 1.18.0 Quest/agents window |
| 2 | **Plus** | Plus | Sonar | DeepSeek Harness (DSH) |
| 3 | **Pro** | Pro | Codeix | OpenAI Codex — asks **new** or **old**; Settings is a sub-layout |
| 4 | **Studio** | Studio | Onyx | VS Code OSS 1.147.0 |
| 5 | **Max** | Max | Ingot | ZCode (Zhipu) source |
| 6 | **Ultra** | Ultra | Zenix | Claude Desktop 5.1231.2 |
| 7 | **GSX-CLI** | — | GSX-CLI | opencode / MiMoCode |

Ladder: **Lite → Plus → Pro → Studio → Max → Ultra**. `Core` is retired (`#`).

**Chromix is not a part** — it is the browser integrated inside Codeix.

## Deliberately absent

- No roles (no part is "main"; Ingot included).
- No separate browser window (Chromix lives inside Codeix).
