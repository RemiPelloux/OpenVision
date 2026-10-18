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

## 16 October 2026 implementation: profile home for remaining writers (Linux x64 only)

Source build of the 3.21.13 runtime input. OV-302 stays **Partial**. See the open gates below.

### Change

`desktop/profile-home-paths.mjs` (`installProfileHomePaths`) runs after
`installGlobalPathIsolation` and before the namespace pass. Like that pass, it
keeps first originals under `backups/profile-home-paths/`, is cached and
idempotent (marker), and fails the build when any anchor or site count drifts.

- **Main bootstrap.** `out/main.js` sets `VSCODE_OPENVISION_PROFILE_HOME=<user-data-dir>/User`
  right after it parses its arguments, before it reads `argv.json`. The value is
  always overwritten, never inherited.
- **Fail closed.** Every patched non-renderer path reads the variable and throws when it is
  missing or relative. The workbench uses the path service's `openvisionProfileHome`
  (from `appSettingsHome`).
- **Mapping.** Relative layouts are unchanged:

| Producer | Before | Now |
| --- | --- | --- |
| Per-project agent data (exec, host, local runtime, daemon; workbench transcripts, hook spill files, disk metrics) | `~/.openvision/projects/<slug>/…` | `<profile home>/.openvision/projects/<slug>/…` |
| Agent data directory `.gitignore` (MCP lease helper; only the home root changed) | `~/.openvision/.gitignore` | `<profile home>/.openvision/.gitignore` |
| Recently viewed files (workbench) | `~/.openvision/ide_state.json` | `<profile home>/.openvision/ide_state.json` |
| `argv.json` (bootstrap; environment services in main, shared, MCP, pty host and both workbenches) | `~/.openvision-local/argv.json` | `<profile home>/.openvision-local/argv.json` |
| Plans (the plans helper, `PlanStorageService`, `~/…/plans` chat links) | `~/.openvision/plans` | `<profile home>/.openvision/plans` |
| Agent worktrees (exec root, `WorktreeManager`, watcher exclusion, display root, comparison paths) | `~/.openvision/worktrees` | `<profile home>/.openvision/worktrees` |
| Auto-run permissions and sandbox (workbench, exec, sandbox-policies in exec, host, MCP extension, MCP process and extension host) | `~/<dataFolderName>/permissions.json`, `sandbox.json`; `~/.openvision/sandbox.json`, `sandbox-policies` | Same names under the profile home |
| Plugins: cache managers, `github-plugins.json`, marketplaces, local plugins, plugin service; Claude plugin import and `enabledPlugins` (exec, host chunks `292.js`/`817.js`) | `~/.openvision/plugins/…`, `~/.claude/plugins/…`, `~/.claude/settings.json` | Under the profile home |
| Team hooks; debug-mode logs (workbench and ndjson ingest); feature-gate, notepad and command exports; repository blocklist | `~/.openvision/managed`, `debug-logs`, …; `~/<dataFolderName>/blocklist` | Under the profile home |
| AI code-tracking database, update flag, exit watchdog marker, shadow workspaces (main) | `~/.openvision/ai-tracking`, `~/<dataFolderName>/…` | Under the profile home |
| Browser automation logs | `~/.openvision/browser-logs` | Under the profile home |
| Skill chip links, skill publish check, markdown editor eligibility (consumers) | Operating-system home | Profile home |
| `CURSOR_DATA_DIR`, `CURSOR_CONFIG_DIR`, `$XDG_CONFIG_HOME/cursor` (exec, host, local runtime; daemon env overrides) | Honored | Ignored, so another product's setting cannot redirect OpenVision data |

Two third-party readers changed behavior:

- **External CLI analytics** (`~/.claude/history.jsonl`, `~/.codex/history.jsonl`,
  `~/.claude/projects/…/sessions-index.json`). `_poll` now returns immediately, so
  these files are never read.
- **Terminal Claude/Codex status.** It still reads the real home's `~/.claude/projects`
  and `~/.codex/sessions`, but only behind the new `openvision.terminal.externalAgentStatus`
  setting. The setting is off by default and contributed in the Terminal settings.
  `_isEnabled()` reads only this setting, replacing the experiment gate, and
  `_beginExternalAgentRun` checks it again before any read.
  - Decision: keep it as an explicit opt-in. Reading those tools' own session files is
    the feature's purpose, and the setting documents the home read
    ([guide](../guides/project-configuration.md#claude-code-and-codex-status-in-the-terminal)).

Migration: `npm run migrate:profile-home [-- --home <dir> --profile <user-data-dir>]`
(`desktop/migrate-profile-home.mjs`). It is an explicit additive copy: no overwrite,
links skipped, sources untouched as the backup. A repeat run changes nothing.
Each run that copies files is recorded in `User/.openvision/migrations/home-import.json`.
It does not copy worktrees (Git uses absolute links) or `.gitignore` (regenerated).
It reuses `additiveImport`, extracted unchanged from the project namespace migration.

### Observed (native, Linux x64)

Command: `npm run verify:global-paths`, extended in this pass.

- **Setup.** HOME is disposable and holds:
  - product and third-party customization markers
  - pre-existing `plans`, `ide_state.json`, `argv.json`
  - Claude and Codex session files

  The XDG base directories point outside HOME. Three Electron hosts run
  concurrently with launcher-style arguments:
  - installation A, `data/local` (alpha)
  - installation A, second named profile `data/beta` (beta)
  - installation B, `data/local` (gamma)
- **Each run does:**
  - Customize discovery and Customize → New for a skill and a command
  - add a local HTTP fixture provider
  - an Agent chat reply
  - an approved Agent `Shell` command
  - a plan in Plan mode through the plan tool
  - an integrated terminal command
- **It asserts:**
  - **Nothing under HOME is added, removed or changed.** Checked by size, mtime and
    bytes of every file and directory.
  - Each profile home contains `projects/<slug>`, a `.plan.md`, `.gitignore`,
    `ide_state.json` and `argv.json`.
  - No item from HOME, another profile or another installation is listed.
  - Integrated terminals do not see `VSCODE_OPENVISION_PROFILE_HOME`.
- **Results, final code.** Two consecutive passes (`logs/global-paths-OQCnus`,
  `logs/global-paths-NaTDZf`). Each made 12 authorized fixture requests and none to
  an AI provider. All hosts exited 0, and HOME added, changed and removed lists were empty.
- **Before the final code.** Two earlier runs failed in the existing Customize → New
  step under three-window focus contention: a screenshot timeout and a quick-input fill
  timeout. HOME was unchanged in both. The verifier now retries that interaction once
  and treats screenshots as best effort. Only the profile file decides success.
- **Writes outside HOME.** These went to the separate XDG directories:
  - platform runtime files: Mesa and NVIDIA shader caches, the PulseAudio cookie,
    the Chromium NSS database
  - `cache/Microsoft/DeveloperTools/deviceid`, written by the device-ID module. That
    module is in the telemetry area (OV-1005) and was not changed here.

### Inferred (code and unit tests, no native evidence)

- `npm run test:namespace` has 5 new tests. They execute the patched expression, the
  plans helper and the terminal setting gate, and check drift rejection, idempotence
  and the migration. The plan-storage tests now expect the profile home.
- The terminal status read with the setting enabled was not exercised natively.
  Neither were plugins with real marketplace content, team hooks, debug-mode logs,
  the AI tracking database, worktree creation or the agent-host daemon (off by default).

### Verification (Linux x64 only)

| Command | Result |
| --- | --- |
| `npm run build:desktop` | Pass. Repeat build from the existing source also passes |
| `npm run verify:global-paths` | Pass, twice consecutively, as above |
| `npm run test:namespace` | 37/37 |
| `npm run test:completion` | 38/38 |
| `npm run test:desktop` | 161/161 |
| `npm run test:build-integrity` | 26/26 |
| `npm run check:desktop` | Pass |
| `npm run verify:rules-isolation`, `verify:local-rules`, `verify:paste` | Pass |
| `npm run docs:check` | Pass |

### Open gates

- **Not changed in this pass:**
  - Editor MCP discovery (`~/.openvision/mcp.json`, Claude desktop and Windsurf
    configuration; MCP owner)
  - The daemon's own `mcp.json` and its XDG config branch
  - Retrieval snapshot and watcher roots (gated)
  - The developer-only `policy.json`
- **Two installations:** the second installation shares the compiled host. A second
  independently built or packaged tree was not run.
- **Platforms and packaging:** Windows and macOS; remote extension hosts; the packaged
  portable payload, which predates this change.
- **Unconfirmed precondition:** that `VSCODE_*` sanitization holds for every terminal
  backend other than the default local pty host.

## 18 October 2026: shell history in HOME (Linux x64 only)

Source build of the 3.21.13 runtime input. On main, `verify:global-paths` failed with
`homeAdded: ["/.bash_history"]`. OV-302 stays **Partial**.

### Observed

- **Content on main.** Three earlier main runs on 17 October (`logs/global-paths-1Qwwcs`,
  `0pixAu`, `o7p0R7`, in the main checkout) each held only `#<epoch>` lines and the three
  commands the verifier typed into integrated terminals. The Agent's `node -e …` command never
  appeared. The timestamp lines come from `HISTTIMEFORMAT`, which this host exports and the
  verifier passes on.
- **Timeline.** None of the 15 runs from 16 October 20:22 to 22:28 has the file. Those runs came
  before the OV-403 pty fix (`2d40c1c2`) reached main at 22:33. All three runs on 17 October have
  it. One run at 22:40 (`4suWm3`) passed without it, but which build it used is unknown.
- **Writers, using a stronger fixture.** HOME `.bash_profile`/`.bashrc` add a history entry
  only in interactive `-c` shells, as some users' startup files do. They also log every
  interactive shell's PID, flags, command and parent outside HOME. Unfixed build
  (`global-paths-DBACmY`): the HOME history held 6 startup entries plus the 3 terminal
  commands.
  - Agent state shells (`bash -O extglob -ilc <dump script>`) wrote 3 entries at startup and 3
    at the first Agent command.
  - Agent commands themselves run non-interactively (`$-` = `hBHc`), but with `history` **on**,
    restored from the state snapshot.
  - Integrated terminal shells are interactive (`himBHs`), with `HISTFILE=$HOME/.bash_history`.
- **Two copies of the state shell.** Patching only the four extension bundles left 3 startup
  entries (`JS4Vly`). The PIDs in the history lines (`k2A8qD`) matched state shells started by
  the extension-host process. That process has its own copy in `extensionHostProcess.js`.
- **Shell-environment resolver.** The main and a utility process run `$SHELL -i -l -c
  '<runtime> -p env'` at startup: 6 shells per session. With the resolver unchanged and all
  state shells guarded, no startup entry was written (`RvEwyz`). Local probes show why: bash
  replaces itself with that single command, so it never reaches its own history save.
- **Write timing.** In `RvEwyz` the terminals' lines were written 0.53–0.54 s before each host
  exited: the shell saves its history when the terminal closes at quit.

### Inferred, not proven

- **Why it started.** Before OV-403, terminal shells did not exit within the verifier's window.
  Their masters were pinned by inherited descriptors, or the pty host outlived the app
  ([shutdown ownership](rea-shutdown-ownership.md)). So no history was saved before HOME was
  compared. The clean SIGHUP from the bounded pty-host stop makes bash save history at quit.
  No pre-fix build was rerun to confirm this.

### Policy and change

- **(a) Agent shells: fixed.** `desktop/shell-history-customization.mjs` (`installShellHistoryGuards`,
  run after the command-exit pass) adds a guard to every Agent state-shell template, after the
  startup files have run:
  - bash: `builtin set +o history`. `HISTFILE` and the environment are untouched.
  - zsh: `builtin unset HISTFILE`.

  The snapshot then carries history off into every Agent command. Seven copies are guarded:
  the Agent exec, Agent host, Agent-host daemon, local runtime and MCP extensions, the
  extension-host process and the MCP utility process. Each bash/zsh/zsh-light site must match
  exactly once, as the argument after `"-ilc"`, or the build fails. First originals go to
  `backups/shell-history/`, and a marker makes the pass idempotent; the daemon's shebang stays
  first.
- **(b) The user's own terminal: allowed only by attribution.** The integrated terminal is the
  user's interactive shell, and saving its history is normal shell behavior, not OpenVision
  data. `desktop/shell-history-policy.mjs` lets the verifier accept exactly `/.bash_history`,
  and only when all of the following hold:
  - every integrated terminal shell reported itself interactive, with that file as its own
    `HISTFILE`;
  - every line is a `#<epoch>` timestamp or a command typed into those terminals;
  - at least one typed command is present.

  An Agent command, a startup entry or an unknown writer still fails the run. No other HOME
  path is allowed. The verifier also asserts that Agent commands are non-interactive with
  history off. Integrated terminals and the resolver are not changed.

### Verification (Linux x64 only)

| Command | Result |
| --- | --- |
| `npm run build:desktop` | Pass, from a clean `source/`, `build/`, `electron-host/` and `backups/` |
| `npm run verify:global-paths` | Unfixed build: fail (`DBACmY`, above). Final build: **pass**, `RvEwyz` and `aSzh7Y`, run consecutively. 12 authorized fixture requests, no other request. All hosts exited 0. HOME added only the attributed history (mode 600; 3 typed lines). HOME changed and removed lists were empty |
| `npm run verify:shutdown-cycles` | Pass, `shutdown-cycles-TS67NP`: 9 cycles plus a final start, 0 failures |
| `npm run verify:development` | Pass, `development-verification-Q3PJtn`; native exit 0 |
| `npm run test:namespace` | 47/47, including 10 new tests: 5 for the transform (drift, idempotence, backups, every recovered copy, and real bash with and without the guard), 5 for the policy |
| `npm run test:shutdown` | 34/34 |
| `npm run test:desktop` | 171/171 |
| `npm run test:build-integrity` | 26/26 |
| `npm run check:desktop`, `npm run docs:check` | Pass |

### Open

- zsh: there was no zsh on this host, so its guard is checked only by tests on fixture code.
  `unset HISTFILE` removes an exported `HISTFILE` from Agent commands.
- Other interactive shells: terminal suggestions (`bash -ic alias`) and the resolver were
  inspected, but not changed. The resolver can still save history when a startup file stops
  bash from replacing itself, for example with an `EXIT` trap. Neither wrote in these runs.
- Windows, macOS and packaging: the preview.7 payload predates this change.
