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
| Deterministic identifiers | Pass for this layout | `computeIdentifier` derives identifiers from the folder index, folder name and server name. Both runs produced the same identifiers. Two windows whose folders share a basename both get `project-0-<name>-…`; process keys still differ by project scope hash (inferred, not run) |
| Rapid configuration edits with two windows watching | Pass | 12 rewrites of `User/mcp.json`, 0–40 ms apart, with two windows open. Five intermediate children started; all exited (PID absent or zombie). One child of the final configuration remained, and the next Agent call used only that child. The project child was not restarted |
| Simultaneous project and profile edits | Unverified | Not exercised. Project config edits change the approval hash, which revokes approval (code reading only) |
| Cross-window failed close without replay | Pass | Window 1 completes one call. Removing the server makes the injected close reject, and the old child stays alive. Window 1 then closes. Re-adding the config retries cleanup, which is released before a replacement child starts. Window 2's call reaches only the replacement. Total `tools/call` count is 2, and the old instance received only window 1's call |
| STDIO release on window close | **Defect fixed** | Before: closing the only window that used the approved project server left its child alive for over 50 s, until app exit (run `LGvw1x`). After: released within the recovered 30 s grace period. The sibling window keeps the shared profile child |
| STDIO release on in-place profile switch | **Defect fixed** | Before: after **Profiles: Switch Profile**, the utility subscribed the new profile key but never unsubscribed the old one. The trace log shows no `unsubscribe`, and the default-profile child survived over 40 s. After: the previous profile child is released and one new-profile child remains |
| STDIO release on app exit, only owned | Pass | Every recorded child descends from the launched host PID and shares its process group. All exit with the host (exit 0). A decoy process with the same command, started by the verifier, survives app exit |
| HTTP same-name/dedupe ownership | Unverified | Recovered dedupe groups only non-project streamable HTTP servers by URL. No HTTP same-name case was run here. HTTP close/session recovery has [separate evidence](rea-mcp-cleanup.md#native-session-recovery-verification) |

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

## Scope and remaining gates

- **Source build only.** The preview.7 package predates both fixes.
- Linux x64 only. Windows (earlier [ownership evidence](rea-mcp-ownership.md))
  and macOS were not re-run with these fixes.
- Unverified: HTTP same-name/dedupe ownership, simultaneous project+profile edits,
  per-named-profile MCP files (unsupported by design), and windows with the same
  basename across projects.
- OAuth stays under OV-304, remote hosts under OV-703, and long-session growth
  under OV-1003.
- OV-303 stays **Partial**. The ledger is unchanged at **6/42 Verified (14.29%)**.
