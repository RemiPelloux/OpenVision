# Native MCP window and user-data ownership

15 October 2026. The Windows native Agent can use one global STDIO server from
two project windows, while another user-data profile uses a different server
under the same configured name. Closing a window or one profile preserves the
other owner's working transport. This is scoped OV-303 evidence, not full MCP
parity or live AI-provider verification.

## Workflow

```sh
npm run verify:mcp-ownership
```

The verifier creates disposable projects and user-data directories and adds a
loopback provider through the native Models settings. Controlled SSE responses
ask the real Agent to discover and call `memory_probe`. Each tool call waits
for the native approval button before the real STDIO server executes. Unique
server markers must reach the subsequent model request.

The first two windows share a user-data directory but open different projects.
The third window uses the first project with a separate user-data directory.
Both profiles configure `openvision-verify`, with different authenticated fixture
servers. No user profile, credentials or project files are changed.

## Observations

Final passing record: `logs/mcp-ownership-verification-XtYuok/result.json`.
It pins commit `6ac4931`, Windows x64/Node 24.18.0, executable, utility,
workbench, MCP extension and verifier/fixture hashes. The utility SHA256 is
`e45b761a32802181d37efa02ace4b53a8dac40935fc806a5ec3964555497f2e4`.
Earlier passing record `PY27vU` precedes the added input hashes/stderr capture.
All six assertions passed, both owned hosts exited 0, and the fixture and
Playwright `pageerror` collections are empty:

| Check | Observed result |
| --- | --- |
| Shared global connection | Both project windows call the same STDIO child; one active child after routing settles |
| Separate user-data profiles | Same configured server name reaches the correct unique marker; isolated-profile calls do not increment the first server's call count |
| Window closure | Closing the first project window preserves a successful call from its sibling |
| Profile closure | Closing the shared-profile host releases its children; the isolated profile still calls its own server |
| Final cleanup | All four recorded STDIO child connections close and their PIDs are absent after shutdown |
| Runtime preservation | The normal MCP utility hash is unchanged |

The first server received three tool calls and the second received two. Each
server recorded two child connections during initial routing handoff; all calls
for a given server used its one surviving child. This is an observation of this
run, not a zero-reconnect or general resource-budget guarantee.

Empty `pageerror` collections do not mean clean application logs. The final run
retains mutex warnings, one `child-process-gone` listener-count warning,
onboarding-contribution failures, duplicate settings-command registration and
unauthenticated conversation metadata-sync failures. Their causes and effects
remain unverified; the workflow does not establish absence of cloud requests or
safe long-session listener growth. The metadata-sync producer needs a network
audit under OV-1005; listener lifetime remains part of OV-1003.

The retained failed run `411xUH` submitted discovery before the native watcher
had registered the server. It returned a genuine server-not-found tool error.
The verifier now waits for actual `tools/list` and one active STDIO child before
submitting Agent discovery; it does not replace application discovery logic.

## Remaining scope

Separate user-data directories run independent native hosts. They do not prove
named-profile isolation inside one host, same-name project-local override
ownership, simultaneous profile/configuration changes, or cross-window failed
close recovery. Those broader ownership cases remain open under OV-303.
HTTP close/session failures have [separate native evidence](rea-mcp-cleanup.md).

OAuth remains OV-304; remote hosts remain OV-703; indefinite retention, idle
resources and long-session growth remain OV-1003. No macOS/Linux, live AI,
performance or clean process-family log claim follows from this workflow.
The accepted denominator stays at 42 and OV-303 remains Partial.
