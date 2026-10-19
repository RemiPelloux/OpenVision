# MCP configuration ownership matrix

16 October 2026. **Linux x64 only** (Omarchy/Hyprland Wayland, Node 26.8.1
tooling, source build of the 3.21.13 runtime). This report covers the remaining
OV-303 ownership clauses: named profiles, same-name project/profile servers,
rapid configuration changes, cross-window failed-close recovery, and STDIO child
release on window close, profile switch and app exit. Windows and macOS were not
run. All inference is controlled loopback SSE; no live AI provider was used.

Two defects were reproduced and fixed: closing a window, and switching a window's
profile in place, both left that window's STDIO children running until app exit.

## Workflow

```sh
export OPENVISION_RECOVERY_DIR=/absolute/path/to/recovery-3.21.13
npm run build:desktop
npm run verify:mcp-config-ownership
npm run verify:mcp-config-ownership -- --failed-close
```

The [verifier](../../desktop/verify-mcp-config-ownership.mjs) uses one
disposable user-data directory and three disposable projects under `logs/`.
Separate STDIO fixtures serve the profile `User/mcp.json` server and the
`project-a/.openvision/mcp.json` server. Both are named `ov-same`. Each child
authenticates to its fixture with a nonce and reports its PID. Cleanup uses only
those retained sockets, never a PID. A controlled
[provider fixture](../../desktop/verify-mcp-config-ownership-fixture.mjs) makes the
real Agent call an exact server identifier. Every call waits for the native
approval button. The process tree is read from `/proc`.

`--failed-close` runs the same application from a disposable runtime overlay.
That overlay rejects the first `dispose` close of the `ov-cross` transport, using
the [existing injection](../../desktop/verify-mcp-cleanup-injection.mjs), which
now accepts an identifier filter. The normal runtime hash is checked afterwards.

## Clause matrix

Status: **Pass** means natively observed in this run. **Defect fixed** means the
defect was reproduced before the fix and passes after it. **Unverified** means not
exercised natively.

| Clause | Status | Evidence |
| --- | --- | --- |
| Named profile in one host owns its children | Pass | A `--profile ov-named` window spawns a separate profile-scoped child for the shared `User/mcp.json` server. Closing that window releases only that child |
| Named-profile configuration source | Pass (inherited contract) | Named profiles read the same profile-root `User/mcp.json` (`appSettingsHome`). There is no per-named-profile MCP file. Utility keys include `profile:<id>`, so processes stay separate |
| Same-name project vs profile server: which wins | Pass (no override) | Both are kept under different identifiers: `user-ov-same` and `project-0-project-a-ov-same`. Customize → MCPs lists two rows, labelled **User** and **project-a** |
| Losing/unapproved server not spawned | Pass | Until approved, the project server shows **Disabled** and its fixture records zero connections. Approving it in the Configure dialog starts exactly one project child. The profile child keeps the same instance |
| Tools attributed to the right owner | Pass | Agent `CallMcpTool` on the project identifier reaches only the project child, and the user identifier only the profile child. Call counts of the other owner stay unchanged |
| Deterministic identifiers | Pass for this layout | `computeIdentifier` derives identifiers from the folder index, folder name and server name. Both runs produced the same identifiers. Folders that share a basename share the identifier; see the next row |
| Same-basename projects (`/a/app`, `/b/app`, `/c/app`) | **Defect fixed** (19 Oct) | Process keys and children were already separate. The application-wide approval key collided: opening `/b/app` revoked `/a/app`'s approval. See [the 19 October follow-up](#19-october-2026-linux-follow-up) |
| Rapid configuration edits with two windows watching | Pass | 12 rewrites of `User/mcp.json`, 0–40 ms apart, with two windows open. Five intermediate children started; all exited (PID absent or zombie). One child of the final configuration remained, and the next Agent call used only that child. The project child was not restarted |
| Simultaneous project and profile edits | Pass (19 Oct) | Both files rewritten together 8 times with two windows open: approval revoked and re-requested, no project child without approval, one profile child of the final revision, no orphans in `/proc`, one-sided edits leave the other owner's child. See [the follow-up](#19-october-2026-linux-follow-up) |
| Cross-window failed close without replay | Pass | Window 1 completes one call. Removing the server makes the injected close reject, and the old child stays alive. Window 1 then closes. Re-adding the config retries cleanup, which is released before a replacement child starts. Window 2's call reaches only the replacement. Total `tools/call` count is 2, and the old instance received only window 1's call |
| STDIO release on window close | **Defect fixed** | Before: closing the only window that used the approved project server left its child alive for over 50 s, until app exit (run `LGvw1x`). After: released within the recovered 30 s grace period. The sibling window keeps the shared profile child |
| STDIO release on in-place profile switch | **Defect fixed** | Before: after **Profiles: Switch Profile**, the utility subscribed the new profile key but never unsubscribed the old one. The trace log shows no `unsubscribe`, and the default-profile child survived over 40 s. After: the previous profile child is released and one new-profile child remains |
| STDIO release on app exit, only owned | Pass | Every recorded child descends from the launched host PID and shares its process group. All exit with the host (exit 0). A decoy process with the same command, started by the verifier, survives app exit |
| HTTP same-name/dedupe ownership | Pass (19 Oct) | Same-named profile and project Streamable HTTP servers on one URL keep separate identifiers, utility keys and sessions; two profile servers with one URL are deduplicated to one connection; the project server is never deduplicated. Window close, named profile and profile switch retire only their own transport. See [the follow-up](#19-october-2026-linux-follow-up) |

## Defects and fixes

Owner: [MCP window release customization](../../desktop/mcp-window-release-customization.mjs).
It is applied at build time with first-write backups under
`backups/mcp-window-release/` and AST drift guards.

1. **Window close.** The MCP utility registry already had
   `unsubscribeAllForWindow` and a 30 s grace stop, but no desktop caller.
   The utility now listens to its IPC server's `onDidRemoveConnection`. When a
   `window:<id>` connection closes and no live connection with the same context
   remains, it calls the registry's `unsubscribeAllForWindow`. A reloaded window
   that reconnects first keeps its renewed subscriptions; resubscribing during
   grace cancels the stop.
2. **Profile switch.** The workbench routing owner (`handleProfileChange`, desktop
   and glass) now queues `unsubscribeAllForWorkspace(windowId, workspaceId)` for
   each registered workspace before installing the new profile's client factory.
   It does this only when shared-process routing is enabled. The new subscriptions
   follow on the same channel.

Unit tests in [mcp-window-release.test.mjs](../../desktop/mcp-window-release.test.mjs)
cover the recovered registry semantics with fake timers, reconnect ordering,
idempotency with the existing attempt/lifecycle patches, call order for both
workbench variants, and drift guards that fail closed.

## Observations

| Run | Result |
| --- | --- |
| `logs/mcp-config-ownership-LGvw1x` (before fix) | Failed at window-close release; earlier same-name, approval, attribution and rapid-edit checks passed |
| `logs/mcp-explore-7CBFyq` (before fix, exploratory script, `--log trace`) | Profile switch: `subscribe … profile:aWQ6…` with no `unsubscribe` for `profile:ZGVmYXVsdA` (default); both children open until exit |
| `logs/mcp-config-ownership-dNuAl9` | All nine checks passed; verifier `e8ef3b5e…`, utility `e465e071…`, workbench `65ee48e9…`; host exit 0; no `pageerror`. Earlier pass `20gmP7` preceded a failed-close-only overlay edit |
| `logs/mcp-config-ownership-failed-close-Bv45z7` | All five checks passed with the same verifier hash; events `close-rejected` → `close-released` → `attempt-committed`; three child connections in total |

Run directories are ignored local evidence and are not committed. They record
the base commit `38d0fe8`, plus executable, utility, workbench and verifier
hashes. Grace: a released child exits about 30 s after its last window. This is
the recovered registry default, kept so that window reloads do not restart servers.

## Regression checks (same Linux build)

| Command | Result |
| --- | --- |
| `npm run test:mcp` | 50/50 pass |
| `npm run test:mcp-lazy` (now includes window/profile release tests) | 47/47 pass |
| `npm run verify:mcp-cleanup` and `-- --persistent` | Pass, pass |
| `npm run verify:mcp-session` and `-- --direct` | Pass, pass (verifier now admits Linux) |
| `npm run verify:mcp-ownership` | Pass (verifier now admits Linux; six checks) |
| `npm run check:desktop`, `npm run test:build-integrity` | Pass; 26/26 |

## 19 October 2026 Linux follow-up

Linux x64 container (Ubuntu 24.04 userland, kernel 6.18, 4 CPUs), Node 24.18.0
tooling, Xvfb at 1920×1080 with a disposable D-Bus session and gnome-keyring
login keyring. Source build of the pinned 3.21.13 runtime on branch
`ov/mcp-safety`. All inference is controlled loopback SSE. Windows and macOS
were not run.

```sh
npm run verify:mcp-config-ownership -- --simultaneous
npm run verify:mcp-config-ownership -- --http
npm run verify:mcp-config-ownership -- --same-basename
```

The new modes are separate functions in the
[verifier](../../desktop/verify-mcp-config-ownership.mjs). `--http` and
`--same-basename` run from a disposable runtime overlay with report-only
instrumentation: it records each utility commit and transport retirement with
the exact scoped process key and faults nothing. The normal utility hash is
checked afterwards. `--http` uses one real Streamable HTTP
[fixture](../../desktop/verify-mcp-http-owner-fixture.mjs) that assigns
`Mcp-Session-Id`s and attributes every request to the configured server
through an owner header.

### Defects found and fixed

1. **Shared-process MCP routing never started on a fresh profile.** Since the
   hosted Statsig bootstrap was disabled (16 Oct, `5ea2d86a`), the workbench
   experiment service never reported itself initialized. MCP routing waits for
   that (30 s per decision), then stayed on the legacy extension-host route, and
   the `mcp_shared_process_transports` gate defaults to off. The MCP utility,
   and every utility-owned fix above, did not run on a fresh profile. Native
   reproduction: `agent-verification-MIg5RP` (`One shared MCP utility serves real
   demand`, 0 utilities; renderer log `experiment service did not initialize
   within 30000ms`). Owner fix in
   [network-defaults](../../desktop/network-defaults.mjs): the refused refresh
   reports the service initialized with bundled and local defaults, as upstream
   test mode does, and the gate joins the local gate defaults. A persisted
   bootstrap still hydrates first.
2. **Same-basename approval collision.** Approvals are stored application-wide
   as `<identifier>:<config hash>`, with identifier
   `project-<index>-<basename>-<server>`. Parsing `/b/app` pruned `/a/app`'s
   approval and stopped its server. Reproduction:
   `mcp-config-ownership-same-basename-a22JlK`, where the Agent in `/a/app` got
   `MCP server does not exist: project-0-app-ov-base`. A byte-identical config
   in another `app` folder would also inherit the approval (code reading and unit
   test). Owner fix:
   [project approval scope](../../desktop/mcp-project-approval-customization.mjs).
   Project keys now end in `@<workspace folder URI>`, and pruning and revocation
   only touch the parsed folder's keys. Earlier unscoped keys stop matching, so
   each project server asks once more.
3. **Connected status outlived a routing reset.** When a legacy client
   reported `connected` just before routing latched to the shared process, the
   reset dropped its client provider but kept the status.
   `createClientIfNotExists` then skipped the server, so the window never
   subscribed to the utility. Tools failed with `Cannot call tool before MCP
   process client is registered`. Reproductions:
   `mcp-http-cleanup-verification-af9fef`, `mcp-config-ownership-http-vieE2i`,
   and a trace probe (1 of 6 launches, `probe-race-l7Pbb0`). Owner fix in the
   [routing customization](../../desktop/mcp-routing-customization.mjs):
   `connected` skips creation only while a client provider exists. In 10
   later probe launches every server connected through the utility, 4 of them
   through the recovered path.

4. **Legacy-route STDIO connect refused as a hosted call.** On the legacy
   route, `cursor-mcp` reads team MCP policy through the workbench
   `$getTeamAdminSettings` bridge. The anonymous hosted-call guard (also from
   16 Oct) refused that read, and the connection failed with `Cursor service
   calls require a signed-in Cursor account`. The coordinator reported it from
   another branch's run (`BYujHc`); here it was reproduced by restoring main's
   routing in a disposable workbench overlay (`mcp-config-ownership-CZr5WO`). Owner fix in
   [network-defaults](../../desktop/network-defaults.mjs): for that refusal
   only, `$getTeamAdminSettings` and `$getTeamRepos` return the empty message
   the server gives anyone outside a team. No request is sent. With main's
   routing and this fix, discovery, approval and attributed calls pass
   (`eBydQ7`). That run then stops at per-window children, which is how the
   legacy route behaves and is what fix 1 restores. `verify:telemetry` still
   records no HTTP URLs (`telemetry-verification-2bMD8u`).

### Observations (final build)

| Run (`logs/`) | Result |
| --- | --- |
| `mcp-config-ownership-simultaneous-1ACuUN`, `-X9DGJw` | `1ACuUN` **failed** first time: the profile-call probe after a project-only edit failed after the approval prompt appeared, and the run then hung in cleanup (quit waited on the pending Agent approval), so the assertion text was lost; the verifier now writes `error.txt` before cleanup and bounds quit. `6P0KLQ` and `X9DGJw` passed all five checks; 8 simultaneous rounds started 2 profile children and 0 project children; host exit 0. Cause of the one failure unexplained |
| `mcp-config-ownership-http-ena9EB`, `-79tdKk` | Both passed all seven checks first time; dedupe selected `user-ov-dup-a`; host exit 0 |
| `mcp-config-ownership-same-basename-UuZTb7`, `-raQ1Bj` | Both passed all six checks first time; three distinct utility keys; host exit 0 |
| `mcp-config-ownership-AUw5EJ`, `mcp-config-ownership-failed-close-geq2MB` | Existing modes still pass (and again after the cleanup-bound change: `tyQU3g`, `failed-close-8O6yhn`) |

After the team-settings fix (`2bfe8491`) changed the workbench, the default,
`--simultaneous`, `--http` and `--same-basename` modes passed again first time
(`Soyhuh`, `simultaneous-XjCzHm`, `http-l3eO6u`, `same-basename-pXZUtK`).

Same-basename utility keys differ only in their project scope hash, for example
`project-0-app-ov-base::mcpScope:profile:ZGVmYXVsdA:project:NDQ0ZTQ5NTU:cfg:…`
and `…:project:YjhiNTM0ZWU:cfg:…` for byte-identical `/a/app` and `/c/app`
configurations. HTTP keys follow the same form:
`user-ov-http::mcpScope:profile:<id>:cfg:…` and
`project-0-project-a-ov-http::mcpScope:profile:<id>:project:<hash>:cfg:…`.
The two profile servers with one URL produced one utility connection, for
`user-ov-dup-a`, the first in configuration order.

Inference and limits. Streamable HTTP close does not send `DELETE`: the
recovered utility never calls `terminateSession`. "Session retired" therefore
means the utility retired that exact transport (`transport-retirement`,
reason `dispose`). The server is not told. After a second window opens, the
fixture also records a stray `initialize` with no follow-up for the profile
server, from that window's short-lived legacy route; nothing used that session.
Interim builds passed `--simultaneous` (`GZa45H`) and a trace-logged `--http`
copy (`P5I2Ap`); the final-build runs above supersede them.

## Scope and remaining gates

- **Source build only.** The preview.7 package predates both fixes.
- Linux x64 only. Windows (earlier [ownership evidence](rea-mcp-ownership.md))
  and macOS were not re-run with these fixes.
- Unverified: per-named-profile MCP files (unsupported by design). HTTP
  same-name/dedupe ownership, simultaneous edits and same-basename windows are
  covered by the [19 October follow-up](#19-october-2026-linux-follow-up).
- OAuth stays under OV-304, remote hosts under OV-703, and long-session growth
  under OV-1003.
- OV-303 stays **Partial**. The ledger is unchanged at **6/42 Verified (14.29%)**.
