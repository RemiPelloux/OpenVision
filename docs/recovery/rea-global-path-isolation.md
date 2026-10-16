# User-global path isolation

16 October 2026. Runtime input: Cursor 3.21.13 (recovered, formatted bundles).
Story: OV-302 (Partial; skills, commands, hooks and third-party user subagents
closed in source, not promoted). Linux x64 only.

## Defect

**Observed (native, before the fix).** `npm run verify:global-paths` starts two
OpenVision profiles against one disposable HOME. HOME holds marker skills,
commands, subagents, rules and hooks in `.openvision`, `.cursor`, `.claude`,
`.codex`, `.agents` and `.grok`. Both profiles listed the same nine HOME items in
Customize:

- User skills from `~/.openvision/skills`, `~/.claude/skills`, `~/.codex/skills`,
  `~/.agents/skills` and `~/.grok/skills`
- User commands from `~/.openvision/commands` and `~/.claude/commands`
- A user subagent from `~/.claude/agents`
- A user hook from `~/.openvision/hooks.json`

A skill or command placed in one profile's directory did not appear in that
profile. Every installation and profile on the machine therefore shared the
real home's customization, including third-party tools' folders. The
third-party extensibility switch behind the `.claude`/`.codex`/`.grok` branches
defaults to on (`?? !0`). OpenVision documents no opt-in policy for importing
another tool's home folders. Run directory: `logs/global-paths-jS5kVg/`.

## Change

`desktop/global-paths.mjs` (`installGlobalPathIsolation`, run after rule scope
and before the namespace pass) introduces a **profile home**:
`<user-data-dir>/User`, the validated local `appSettingsHome`. The launcher's
default profile home is `data/local/User`. Each user-level producer below uses
the profile home instead of the operating-system home. Relative layouts are
unchanged:

| Content | Before | Now |
| --- | --- | --- |
| User skills | `~/.openvision/skills` | `<profile home>/.openvision/skills` |
| Builtin skills sync and canvas SDK mirror | `~/.openvision/skills-cursor` | `<profile home>/.openvision/skills-cursor` |
| User commands | `~/.openvision/commands` | `<profile home>/.openvision/commands` |
| User hooks | `~/.openvision/hooks.json` | `<profile home>/.openvision/hooks.json` |
| Third-party user skills, commands, subagents and hook settings | `~/.claude`, `~/.codex`, `~/.agents`, `~/.grok` | The same names under the profile home |

Owners patched:

- **Workbench** (desktop and Glass): the path service gains
  `openvisionProfileHome`. It throws when there is no local file profile, and it
  publishes the internal command `openvision.internal.profileHome`, which takes
  no arguments. These workbench consumers use it:
  - Commands service discovery, watchers, loading, Customize creation and the
    palette's New Command action
  - Hooks service user files: `hooks.json` and the third-party user
    `settings.json`
  - The developer initialize-hooks action
  - Customize → Skills → New
  - The skill-store migration root
- **Agent extension** (`cursor-agent-exec`): activation resolves the profile home
  through the command before anything else, and rejects a missing or relative
  value. It then passes the value to:
  - The skills/rules service (`AgentSkillsCursorRulesService`)
  - The user subagent reader, which owns the third-party `.claude/agents` branch.
    The `.openvision/agents` branch already uses `User/agents`.
  - The skill sort context
  - The skill publish and unpublish handlers
  - The builtin skills writer
- **Agent-host extension**: `77.js` passes the profile home to the disk
  extensibility factory. `main.js` uses it for its builtin skills writer. This
  path is off by default behind host gates.

Shell working directories, sandbox policy, the plugin cache and project paths
keep their original home values. Project-local inputs are unchanged:
`.openvision/{skills,commands}`, `hooks.json`, and the third-party project
folders (still behind the third-party switch). The build checks every anchor and
fails on drift. It keeps the first originals under `backups/global-paths/`, is
cached and idempotent (marker), and reapplies after an input changes.

**No user files are moved, copied or deleted.** Content that the user kept in
HOME is no longer listed. To keep it, copy it into the profile (see
[project configuration](../guides/project-configuration.md#user-level-customization)).

## Inventory

Classes: **(a)** must map into the OpenVision profile; **(b)** explicit,
documented, opt-in compatibility import; **(c)** already isolated. No user-home
third-party read qualifies for (b): the switch is on by default and the
documentation establishes no import policy for it. Observed means native fixture
evidence from this pass. Code means found by reading the formatted bundles,
without native evidence.

| Producer (bundle) | Path (namespaced) | Class | State | Evidence |
| --- | --- | --- | --- | --- |
| Skills/rules service, sort context, publish handlers (exec) | `~/.openvision/skills`, `skills-cursor`; `~/.claude`, `~/.codex`, `~/.grok`, `~/.agents` skills | a | **Fixed** | Observed |
| Builtin skills sync writer (exec `syncBuiltinSkills`, host) | `~/.openvision/skills-cursor` (write) | a | **Fixed** | Code; no managed skills offline |
| Customize skill creation; skill-store migration root (workbench) | `~/.openvision/skills` (write, trash on migration) | a | **Fixed** | Creation observed |
| Commands service and New Command action (workbench) | `~/.openvision/commands`, `~/.claude/commands` | a | **Fixed** | Observed, including creation |
| Hooks service, initialize-hooks action (workbench) | `~/.openvision/hooks.json`, `~/.claude/settings.json` | a | **Fixed** | `.openvision` hook observed. The Hooks panel showed no `.claude` hooks before or after; covered by tests |
| User subagent reader, third-party branch (exec, host) | `~/.claude/agents` | a | **Fixed** | Observed |
| User subagents, MCP user configuration, rule discovery, profile user rules | — | c | Isolated earlier | [Subagents](rea-subagent-isolation.md), [MCP](rea-profile-isolation.md), [rules](rea-rules-isolation.md) |
| Plans (workbench `PlanStorageService`) | `~/.openvision/plans` | a | Documented existing behavior; not changed | Code |
| Per-project agent data: terminals, agent-tools, canvases, transcripts, MCP tool metadata (workbench, exec) | `~/.openvision/projects/<slug>/…` | a | **Remaining** | Observed written |
| Recently viewed files (workbench `aiFileInfoService`) | `~/.openvision/ide_state.json` | a | **Remaining** | Observed written |
| MCP lease `ensureCursorDirGitignore` (exec, runtime, daemon) | `~/.openvision/.gitignore` | a | **Remaining**; MCP area has another owner | Observed written |
| Agent worktrees (workbench `WorktreeManager`, exec, retrieval) | `~/.openvision/worktrees` | a | **Remaining**; OV-404 evidence depends on it | Code |
| Auto-run permissions and sandbox (workbench, exec, MCP process) | `~/<dataFolderName>/permissions.json`, `sandbox.json`, `sandbox-policies` | a | **Remaining** | Code |
| Plugins: cache, `github-plugins.json`, marketplaces, local plugins (exec) | `~/.openvision/plugins/…` | a | **Remaining** | Code; Plugins panel empty in fixture |
| Third-party plugin import (exec), gated | `~/.claude/plugins/installed_plugins.json`, `marketplaces`, `settings.json` `enabledPlugins` | a | **Remaining** | Code |
| Team hooks (workbench) | `~/.openvision/managed/team_<id>/hooks` | a | Remaining; needs team service | Code |
| Debug-mode logs, repository blocklist, notepad and feature-gate exports (workbench) | `~/.openvision/debug-logs`, `blocklist`, `notepads`, `feature-gates` | a | Remaining; diagnostic or action-only | Code |
| Main process: AI code tracking database, update flag, shadow workspaces | `~/.openvision/ai-tracking`, `~/<dataFolderName>/…` | a | Remaining | Code |
| Command-line arguments file (main) | `~/.openvision-local/argv.json` | a | Remaining; shared by installations with the same product data folder | Observed written |
| External CLI analytics (workbench), feature-gated | Reads `~/.claude/history.jsonl`, `~/.codex/history.jsonl`, `~/.claude/projects` | a | Remaining; telemetry scope (OV-1005) | Code |
| Terminal external-agent status (workbench), experiment-gated | `~/.codex/sessions`, `~/.claude/projects/<slug>` | a | Remaining | Code |
| Editor MCP discovery (workbench), behind the discovery setting | `~/.openvision/mcp.json`, Claude desktop and Windsurf configuration files | a | Remaining; MCP area has another owner | Code |
| Retrieval codebase snapshots/watchers (retrieval), gated | `~/.openvision`; `CLAUDE_CONFIG_DIR`, `CODEX_HOME`, `~/.agents` | a | Remaining | Code |
| Skill chip link resolution (workbench) | Opens `~/.openvision/skills/<name>/SKILL.md` | a | Remaining; consumer only | Code |
| Agent-host daemon skills and MCP | Home skill roots, `~/.openvision/mcp.json` | a | Not active by default (host gate off) | Code |
| Local agent runtime skill tables | Path classification only | — | No I/O | Code |
| Enterprise hooks (workbench) | `/etc/cursor/hooks.json` | System policy | Not user-global; unchanged | Code |
| Cloud-agent managed skills (workbench) | Host `skills-cursor` | — | Hosted feature; excluded | Code |

## Verification (Linux x64 only)

`OPENVISION_RECOVERY_DIR` pointed at the shared prepared 3.21.13 input. Commands
ran in this worktree's source build.

| Command | Result |
| --- | --- |
| `npm run build:desktop` | Pass, from a clean `source/`, `build/`, `electron-host/` and `backups/` |
| `npm run verify:global-paths` | Before: fail (nine leaks above, in both profiles). After: **pass**, with both profiles running concurrently against the shared HOME. Each lists only the project skill/command/rule plus its own profile skill, command, hook and subagent. No HOME or other-profile item is listed. Customize → New writes the skill and command into that profile. HOME marker bytes are unchanged and no customization file is written to HOME. Owned hosts exit 0. Screenshots inspected. A second, cached build also passes |
| `npm run test:namespace` | 32/32 pass, including 10 new `global-paths` tests |
| `npm run test:completion` (includes profile-paths and subagent-paths) | 38/38 pass |
| `npm run test:desktop` | 158/158 pass |
| `npm run test:build-integrity` | 26/26 pass |
| `npm run verify:rules-isolation` | Pass (3 workspace rules, no leaks) |
| `npm run verify:local-rules` | Pass (create/edit, restart persistence, delete) |
| `npm run verify:paste` | Pass |
| `npm run check:desktop` | Pass |
| `npm run docs:check` | Pass, no failures |

The new tests run transformed methods from both workbench variants:
commands discovery and target, hooks `initialize`, the skill-migration root, and
the profile-home getter (local, missing and non-file profiles). They also run the
Agent extension's activation validator and builtin skills root, check
project-input preservation and drift rejection in all five bundles, and cover
backups, cache and reapplication.

## Unverified

- Hook **execution** from profile hooks, and the Agent context receiving profile
  skills: no model request was made. Customize reads the same pushed lists.
- The builtin skills sync with real managed skills (none are served offline);
  agent-host and daemon paths (off by default).
- Another installation: the profile home follows `--user-data-dir`, so a second
  checkout's `data/local` is a separate profile. This was **not run** natively.
  The remaining HOME writers above are still shared between installations.
- No automatic import of existing HOME skills, commands or hooks; users copy them.
- Windows and macOS; remote extension hosts.
- Packaging: source build only; the preview.7 portable payload predates this change.
- No REA Evidence record was produced. Findings come from focused reading of the
  formatted bundles, with two read-only inventory passes, and the executed tests.

OV-302 stays **Partial**. The remaining producers marked (a) and the
another-installation clause are open.

## 16 October 2026 follow-up: remaining writers (Linux x64 only, investigation only)

No source change in this pass. OV-302 stays **Partial**.

### Observed

Command: `OPENVISION_RECOVERY_DIR=<prepared 3.21.13> npm run build:desktop` (pass), then
`npm run verify:global-paths` (pass, exit 0). The verifier runs both profiles against a disposable
HOME, with XDG paths inside it. With no Agent request, plan, terminal or second installation, the
session still created these files under HOME:

- `~/.openvision/projects/<slug>/`: `canvases/` (the canvas SDK `node_modules` mirror and
  `tsconfig.json`), `mcps/cursor-ide-browser/` (tool descriptors, `STATUS.md`,
  `SERVER_METADATA.json`) and `.agent-data-cleanup-<date>`
- `~/.openvision/ide_state.json`
- `~/.openvision/.gitignore`, the managed block that allowlists `projects/`, `plugins/`, `skills/`,
  `plans/` and other folders
- `~/.openvision-local/argv.json`, the default template
- Written through XDG paths, not OpenVision data: `.cache/Microsoft/DeveloperTools/deviceid`, which
  the device-ID module writes (telemetry area, OV-1005). The rest are platform runtime files: `.config/pulse/cookie`,
  `.local/share/pki/nssdb`, and the Mesa and NVIDIA shader caches.

### Inferred from the formatted bundles (no native evidence)

- **Extension and utility bundles.** Most remaining writers use the same pattern:
  `join(homedir(), ".cursor" | ".claude", …)`.
  - Agent exec has 13 sites: projects, worktrees, `sandbox.json`, sandbox-policies, the
    `CURSOR_DATA_DIR`/`CURSOR_CONFIG_DIR` fallbacks, `.gitignore`, `getCursorDataDir`, plugin
    marketplaces/cache, and the `.claude/plugins` import.
  - Agent host main: 11 sites. `292.js`: 3. Local agent runtime: 7. The daemon has 6, including
    its `mcp.json`, which belongs to the MCP owner.
  - The MCP extension, MCP process and extension-host sandbox-policies, browser-automation
    `browser-logs` and ndjson-ingest `debug-logs` use it too.
  - Plugin cache managers and the plugin service also receive `homedir()` directly. In exec these
    are `KYw`, `WCg` and `Npg`, the `.claude/settings.json` `enabledPlugins` reader and
    `removeLocalPlugin`.
- **Module-level constants.** Some of these paths are module-level constants, for example the
  projects and worktrees roots in exec. They are evaluated before activation, so the existing
  activation-time `openvision.internal.profileHome` command cannot reach them.
  - Proposed design, not implemented: the main bootstrap sets
    `VSCODE_OPENVISION_PROFILE_HOME=<user-data-dir>/User` right after it resolves `userDataPath`.
    Every patched site reads it and fails closed if it is missing or relative.
  - The extension host inherits the main/renderer environment, and so do utility processes
    (`createEnv` copies `process.env`). Integrated terminals drop `VSCODE_*` variables. Agent-run
    shells would still see it.
- **Workbench.** About 25 sites:
  - Plans: the `wie` helper and `getUserPlansDir`.
  - The projects root (`".cursor/projects"`), used for transcripts, hook spill files and disk
    metrics.
  - Worktrees: the `WorktreeManager`, the watcher exclusion and the comparison paths.
  - `ide_state.json`.
  - Permissions and sandbox labels and paths.
  - Team hooks.
  - Feature-gate, notepad and command exports.
  - The repository blocklist.
  - Skill chip and publish checks.
  - Debug logs (`b4f`).
  - External CLI analytics.
  - The `argvResource` getter.
- **argv.json.** The bootstrap's argv path function uses `homedir()/<dataFolderName>`. The bootstrap
  and the environment services (main, shared, MCP, pty host, workbench) both need to move to the
  profile home.
- **Terminal external-agent status.** Reads `~/.claude/projects/<cwd>` and `~/.codex/sessions`. It is
  gated by the `terminal_agent_integration` experiment, whose offline fallback is `enabled: false`.
  - Recommendation, not decided: keep the real-HOME read only behind an explicit
    `openvision.terminal.externalAgentStatus` setting, off by default. Inject it into the terminal
    configuration and check it in `_isEnabled()`.
  - External CLI analytics (`enable_ex_hs`) should never read HOME.

### Open gates (none closed here)

All rows marked **Remaining** above, plus these:

- The another-installation run.
- A full-session verifier asserting zero HOME writes: Agent chat with a controlled fixture, a
  plan, a skill and command, and a terminal.
- An opt-in decision for the third-party status read.
- The opt-in migration of existing HOME data.

Only `build:desktop` and `verify:global-paths` were run in this pass.
