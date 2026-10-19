# REA: global MCP configuration isolation

13 October 2026. Installed artifact: Cursor 3.21.13. This is a bounded part of
OV-302; comprehensive customization isolation remains incomplete.

## Changed behavior

OpenVision's recovered native MCP service now owns its global configuration at
`<OpenVision user-data-dir>/User/mcp.json`. The standard launcher therefore uses
`data/local/User/mcp.json`. Opening the global MCP configuration, initial loading,
watching for changes, and removing global servers all consume the same native
`getUserConfigFilePath` producer. Two independently launched data directories use
different configuration files.

The original producer resolved the operating-system home directory and appended
`.cursor/mcp.json`. The replacement uses the native environment service's
`appSettingsHome` URI, which derives from the caller-selected user-data directory.
An unavailable or non-file local profile raises an explicit error instead of
falling back to an original or remote home directory. `HOME`, `USERPROFILE` and
the original installation remain untouched.

Project-managed configurations keep their intentional
`<project>/.openvision/mcp.json` path (updated by the project namespace pass). Existing global settings are not
silently imported. To import a global configuration, review its servers and place
the desired entries in OpenVision's global MCP configuration file. The generic
settings importer does not currently import that file.

The build transformation validates the actual MCP service and its consumers,
changes only the owning path method, keeps the first original bundle in
`backups/profile-paths`, and does not rewrite unchanged output. The installer is
`installProfilePathIsolation(root)` from `desktop/profile-paths.mjs`, applied to
both workbench variants after ordinary bundle customizations.

## Evidence

REA analyzed three recovered modules: `raw-bundles/4/pathService.js`,
`mcpService.js`, and `subagentsService.js`.

- Parent: `ev_88b0fc51f7a61f6a023002acb5c8fc8d21194a9950c9f2456aa5ef53b3217f95`.
- Summary: `ev_ab93d3d978afc03244f9c13ea0c277b6ea7933ee1d51cbad74fdc8e6ccf7bc28`.
- Artifact root SHA-256:
  `0b17a86087337f4cb12b5d07a65645fb05c96d057a0759f9ada45aede842b0c3`.
- Three files parsed, 252,570 bytes read, 36,313 AST nodes visited, no parse
  failures; 4,305 inventoried files remained outside selection.
- Semantic graph coverage is partial and truncated at the per-source node limit.
  This static Evidence does not establish execution or resolve unselected paths.

Focused reading of both preserved readable workbench bundles established the
native `appSettingsHome` producer and MCP consumer methods. Those bundles are
recovery representations, not recovered original TypeScript source.

## Verification

`node --test desktop/profile-paths.test.mjs`: **7 passed**, no skipped tests.

Tests extract and execute the actual transformed methods from both original
workbench bundles. They use isolated filesystem fixtures and controlled service
dependencies to exercise global-file creation, discovery, directory watching,
reopening with a new service instance, global-removal target resolution, and
project configuration resolution. Two data profiles contain different fixture
servers; an original-home configuration and project file retain their exact bytes.
Further checks cover malformed owner contracts, unavailable/remote profile
failures, Windows/POSIX path semantics, additive backups and idempotence.

The test executes the native path and consumer methods. Its controlled file
loader and watcher stand-ins do not establish real MCP process, authentication,
native filesystem watcher, or Electron lifecycle behavior. A new service instance
is not an application process restart. POSIX path checks do not establish a real
macOS or Linux launch.

## Still open

OV-302 is **partial**, not verified in full:

- Native UI profiles within one shared `--user-data-dir` share `User/mcp.json`;
  isolation currently follows the launch data directory, not named UI profiles.
- Global skills, plugins, commands, hooks, sandbox policies, managed
  customization and agent-daemon paths have additional independent producers.
  The [user subagent follow-up](rea-subagent-isolation.md) coordinates native
  creation, watcher and both extension reader paths; live native acceptance and
  plugin-backed subagent isolation remain open.
- The generic editor's optional cross-editor MCP discovery adapter can discover
  other installations. It is a separate owner and is not redirected by this
  native MCP service change.
- Native two-process UI acceptance and default/global MCP tool execution still
  need a disposable live fixture. Account/cloud functionality is outside scope.

The global MCP producer fix reduces cross-application configuration sharing. It
must not be described as full application isolation or credited as all of OV-302.

**19 October 2026 follow-up.** The editor's cross-editor MCP discovery adapters
(Claude desktop, Windsurf, global `mcp.json`) now resolve only under the profile
home. In 3.21.13 they are also never instantiated. The agent-host daemon reads its
user servers from the same `User/mcp.json`. See
[global path isolation](rea-global-path-isolation.md#19-october-2026-mcp-discovery-plugins-gated-roots-migration-and-a-packaged-second-installation-linux-x64-only).
Named UI profiles within one data directory still share `User/mcp.json`. This is a
documented default pending an owner decision.
