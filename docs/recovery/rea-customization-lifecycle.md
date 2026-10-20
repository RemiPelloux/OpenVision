# Customization precedence, diagnostics and watchers

19 October 2026. OV-304. **Linux x64 only** (cloud container, Ubuntu 24.04,
Xvfb, Node 24.18.0), source build of the 3.21.13 runtime. All inference is a
controlled loopback provider; every profile and project is disposable. Windows
and macOS were not run.

Paths below use the OpenVision layout: the project's `.openvision/` folder and
the profile home `<user-data>/User` (see
[project configuration](../guides/project-configuration.md)).

## Precedence (owner decision pending)

Chosen default: list same-named items from every scope with their scope label,
and let the project item win when the Agent uses one (project, then profile,
then plugin). Where the recovered runtime keeps only one item per name, that
single namespace is kept and the project item is the one kept.

| Kind | Recovered behaviour (observed) | Now |
| --- | --- | --- |
| Skills (`.openvision/skills/<name>/SKILL.md`, `User/.openvision/skills/…`, local plugin `skills/…`) | The Agent prompt listed all same-named skills, including a project `.claude/skills` copy that should have collapsed into the `.openvision` one. Customize showed the profile and plugin skills but **not** the project skill | Customize lists the project, profile and plugin skill once each (**Project**, **User**, plugin group). The Agent is offered only the project skill |
| Subagents (`.openvision/agents/*.md`, `User/agents/*.md`, plugin `agents/`) | First definition by name wins: project, then profile, then plugin. Task offers the project definition | Unchanged (already the chosen policy). Customize lists the project and the plugin subagent; the shadowed profile subagent is not listed |
| Commands (`.openvision/commands/*.md`, `User/.openvision/commands/*.md`, plugin `commands/`) | The profile command silently replaced the project command with the same name, in Customize and for `/name` | The project command wins; plugin commands stay separately listed. Commands share one namespace, so the shadowed profile command is not listed |
| MCP servers | Already listed per scope with identifiers `user-<name>` and `project-<n>-<folder>-<name>` ([matrix](rea-mcp-ownership-matrix.md)) | Unchanged |

Defects and owners, all in [customization-precedence-customization.mjs](../../desktop/customization-precedence-customization.mjs):

- **Skill key after the namespace rename.** The skill de-duplication key sliced a
  hard-coded 9 characters after the configuration folder, the length of
  `/.cursor/`. After the rename to `/.openvision/` the key kept `sion/`, so the
  `.openvision` and `.claude` copies of one skill both survived (in the Agent
  prompt and the rule list). The slice now measures the literal, so the rename
  carries the right length. Same code in `cursor-agent-exec`, `cursor-agent-host`
  and `cursor-local-agent-runtime`.
- **Agent skill precedence.** `MergedAgentSkillsService` sorted but never
  de-duplicated by name; the Agent now gets the project skill, then profile,
  then plugin. Built-in skills and skills with parse errors are untouched.
- **Workbench skill cache collision.** `buildCacheFromPushedRules` keyed skills by
  `<name>/SKILL.md`, so whichever same-named skill was pushed last replaced the
  other in Customize and for `/name`. Workspace items are processed first and
  keep the canonical key; a colliding item outside the workspace gets a
  `user/<name>/SKILL.md` key. The rule applies to any pushed rule whose key
  collides with a workspace item, which before was silently replaced; items
  without a collision keep their keys.
- **Command order.** Profile command folders now load before the plugin and
  project folders, so the project command keeps the name.

## Invalid configuration diagnostics

| Input | Recovered behaviour (observed, run `9tkEWN`) | Now |
| --- | --- | --- |
| Malformed JSONC in an `mcp.json` | No visible message; the file loads no servers | Warning: `MCP configuration <file>: JSON syntax error: …. No servers from this file were loaded.` |
| Wrong types (`command: 5`, non-array `args`, non-object `env`/`headers`, a non-object entry) | Nothing visible; one `null` entry made every server in the file fail | Each invalid server is named in one warning per file and skipped; the other servers load |
| Unknown transport (`type`/`transport` not stdio, http, streamableHttp or sse) | Silently treated as HTTP | Reported and skipped (default pending owner decision) |
| Missing `command` and `url` | Recorded in a signal nothing read | Reported and skipped |
| Invalid `SKILL.md` front matter or missing description | Agent skipped it; nothing visible | `Skill <file>: <reason>. The Agent does not use this skill until the file is fixed.` |
| Subagent file without front matter or body | Skipped with debug logging only | Extension warning naming the file |
| Unreadable or invalid plugin manifest | Skipped silently; default component discovery still loads the plugin | Extension warning naming the manifest and the validator's reason |

Workbench warnings are sticky, one per file, replaced when the reasons change
and closed when the file is fixed or deleted. Extension warnings are shown once
per file and reason; a successful load forgets the file. Owner:
[customization-diagnostics-customization.mjs](../../desktop/customization-diagnostics-customization.mjs).

## Watchers

Observed owners: skills and rules use extension-host
`createFileSystemWatcher` per folder (served by the file-watcher utility);
subagents use a recursive workbench watch of `User/agents` plus the workspace
watcher; commands and MCP files use workbench `IFileService.watch`; local
plugins use `fs.watch` in the extension host.

**Defect (fixed): closed windows kept main-process watches.** The main process
serves each window's non-recursive watches through a per-session watcher client
(`DiskFileSystemProviderChannel` → session watcher → in-process Node.js watcher).
That watcher stops its `fs.watch` handles only in `stop()`; disposing it on
window close never stopped them. After a second window on another project
closed, the main process still held an inotify watch on that project's
`.openvision` folder 60 s later, and after the first window switched folders as
well (runs `vwbhZP`, `q2Muhw`, `GCXnVT`; a trace overlay showed the window's
session closing with the request still active). The
[watcher customization](../../desktop/watcher-dispose-customization.mjs) stops
every active watcher on dispose.

While tracing, the first leftover request was found to come from the hosted
cloud-agent repository-readiness setup, which every main window ran: a watch on
`.openvision/environment.json` (its folder while the file is missing), a
git-status hook and a five-minute poll. OpenVision excludes hosted cloud agents,
so [cloud-features](../../desktop/cloud-features.mjs) now skips that setup. It
was not the root cause; the leak remained until the disposal fix.

**Defect (fixed):** after a configuration-file change the MCP service re-read and
re-initialized its servers but never refreshed the Customize MCP list
(`onDidInitialize` fires once, `onSettingsChanged` was not fired), so a server
removed from `mcp.json` stayed listed as connected although the utility had
stopped it (runs `JSHBzL`, `oPpChR`). The MCP service now fires its settings
event once a configuration-file change is applied.

## Native verification

```sh
npm run build:desktop
xvfb-run -a dbus-run-session -- npm run verify:customization-lifecycle -- --precedence
xvfb-run -a dbus-run-session -- npm run verify:customization-lifecycle -- --invalid
xvfb-run -a dbus-run-session -- npm run verify:customization-lifecycle -- --watchers
```

[The verifier](../../desktop/verify-customization-lifecycle.mjs) records which
fixture markers reach each controlled inference request, so it shows what the
Agent was actually offered. Inotify watches are read from
`/proc/<pid>/fdinfo` for every process of the owned host family
([process-family-linux.mjs](../../desktop/process-family-linux.mjs)), by role
and by watched inode.

Results: see [Native results](#native-results).

## Native results

Final build: workbench
`8eb135c660873d56b4f9281d9282655fa5452df45234be82e652ee57cae80330`, agent-exec
`c843808eacdc006f659c27446025864d21540406b0c2a9863cfa3d1d29c741ab`, main
`8f48d3e9456918efd32952550c033781e964d62384b3668e41cbc836eeb6f06a`, final
verifier `5305c62c…`. Each mode passed twice in a row on that build and
verifier, first time: `--precedence` `7Xzhti`, `z7teKr`; `--invalid` `QPkVUY`,
`ivFqmU`; `--watchers` `48mlmS`, `UN2UNt`. Every launched host exited 0 and no
renderer page error was recorded. Earlier failing and development runs are
listed in the [worker report](../verification/worker-reports/mcp-auth.md).

**`--precedence`** (before: `qEi2Et`, `Zc7HKV`).

| Check | Observation (initial launch and after restart) |
| --- | --- |
| Customize skills | Three `ov-same-skill` rows: **User** (profile), **Ov Plugin** (plugin) and **Workspaces → project**. The project `.claude` copy is collapsed into the `.openvision` one |
| Agent skill list | Only `PROJECT-SKILL-MARK` reaches the request; profile, plugin and `.claude` descriptions do not |
| Subagents | Task lists `ov-same-agent: … PROJECT-AGENT-MARK` only; Customize shows the project and plugin subagents |
| Commands | The `/ov-same-command` menu offers one entry; the request carries `PROJECT-COMMAND-MARK`; Customize shows the **project** and **ov-plugin** commands |
| Restart | The same rows and the same project items after a full restart |

**`--invalid`** (before: `9tkEWN`, no message for any file).

| Input | Visible message (run directory shown as `<run>`) |
| --- | --- |
| Profile `mcp.json` with three invalid servers | `MCP configuration <run>/profile/User/mcp.json: server "ov-bad-command" "command" must be a non-empty string; server "ov-pigeon" has an unknown transport "carrier-pigeon"; use stdio, http, streamableHttp or sse; server "ov-empty" needs a "command" (stdio) or a "url" (HTTP). The other servers in this file still load.` The valid sibling connected and listed its tool |
| Truncated project `mcp.json` | `MCP configuration <run>/project/.openvision/mcp.json: JSON syntax error: Expected double-quoted property name in JSON at position 53 …. No servers from this file were loaded.` |
| `SKILL.md` with unclosed YAML | `Skill …/ov-bad-yaml/SKILL.md: Failed to read skill file: unexpected end of the stream within a flow collection …` |
| `SKILL.md` without description | `Skill …/ov-no-description/SKILL.md: Description is required. …` |
| Agent without front matter, agent with empty body | `…/ov-bad-agent.md: this subagent was not loaded: it needs front matter between --- lines followed by a non-empty body` (and the same for `ov-empty-agent.md`) |
| Truncated plugin manifest | `…/ov-bad-plugin/.cursor-plugin/plugin.json: this plugin manifest was not used: Invalid JSON: Unexpected end of JSON input`; the plugin's skill still loads |

Valid siblings load in Customize and in the Agent request (valid skill, plugin
skill, valid subagent). After every file is fixed in place, the four workbench
warnings close, the fixed MCP entry connects, the fixed subagent appears in Task
and the fixed skill reaches the Agent in a new chat, all without a restart. The
open conversation keeps the skill list it started with (it still lacked the
fixed skill), which is why the check uses a new chat.

**`--watchers`** (before: `JSHBzL`, `oPpChR` stale MCP row; `vwbhZP`, `q2Muhw`,
`GCXnVT` leftover main-process watch).

| Check | Observation |
| --- | --- |
| Live add, rename, delete | Skill and subagent add, rename and delete appear in Customize; the added skill reaches the Agent. An `mcp.json` server added while running connects; removing it removes the row and the server receives no further request |
| Window close | A second window on another project (in a named profile) adds watches on that project in the main process and its file-watcher; after closing, none remain |
| Workspace switch | After the first window switches folders, no watch remains on the previous project; adding a skill, subagent and MCP server there causes no reload and no MCP request |
| Profile switch | Switching the window to the named profile and back completes |
| Baseline | Per-role inotify counts equal the baseline except two explained differences: one main-process watch on the new named profile folder, and two watches (`/`, `/etc`) held by the MCP utility started for the added server, which stays alive idle |

## Limitations

- In these runs the child request of a custom subagent did not contain the
  subagent's body. That was a defect in the renderer's client-side Task path,
  fixed in the issue #10 follow-up
  ([subagent-reminder-customization.mjs](../../desktop/subagent-reminder-customization.mjs)).
  `verify:subagent-reasoning` now requires the body in the custom child request
  (runs `WKsTUY`, `NxAo8O`); see the
  [worker report](../verification/worker-reports/mcp-auth.md#follow-up-issues-9-and-10).
- The shadowed profile subagent and command are not listed, because those
  services keep one item per name.
- Extension warnings (subagents, plugin manifests) cannot be closed
  programmatically; they stay in the notification center after a fix.
