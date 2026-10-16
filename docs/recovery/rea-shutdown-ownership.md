# Shutdown ownership: terminals, tasks and the debugger

16 October 2026. P0 OV-403 stays **Partial** at 8 points. **Linux x64 only**
(Omarchy, Hyprland/Wayland). Nothing here proves Windows or macOS behavior. This
change adds a native verifier and evidence only. **No product fix is committed.**
The published preview.7 package is unchanged. See the
[roadmap](../planning/roadmap.md) and [completion clauses](../planning/completion-sprints.md).

## 1. Earlier host exit 134 and the utility-worker diagnostic

Both were recorded on Windows ([development workflows](../engineering/development-workflows.md),
[MCP cleanup](rea-mcp-cleanup.md)). Their retained `logs/` are not on this host.
Neither could be reproduced here.

- **Exit 134 (inferred from Node source; not reproduced).** On Windows, Node's
  `ABORT_NO_BACKTRACE()` is `_exit(ExitCode::kAbort)` with `kAbort = 134`
  (`src/util.h`, `src/node_exit_code.h`, v24.x). `CHECK` failures,
  `node::Assert`, `node::Abort()` and fatal V8 errors all reach it. A native
  access violation exits with `0xC0000005` instead. So `AYXW1r`'s 134 most
  likely means a Node fatal assertion or abort in the main process during
  shutdown, not a signal or a crash. The run kept no stderr, so the failing
  assertion is still unknown. On Linux the same path would raise `SIGABRT`. No
  `SIGABRT` and no non-zero graceful exit occurred in the 24 graceful Linux
  closes recorded below.
- **`[UtilityProcessWorker]: terminated unexpectedly with code 3221225477`
  (observed in the recovered main bundle; Windows cause unverified).** The main
  bundle logs every non-zero worker exit as "unexpected". That includes workers it
  kills itself (window-bound workers are killed when their window closes, and
  `createWorker` replaces existing ones). The code is `0xC0000005`, which means
  the worker crashed natively; this is not a requested kill. Its cause is still
  open under OV-403. No Linux run logged this line.

## 2. Native verifier

`npm run verify:shutdown-cycles` (new). It uses disposable project and profile
directories under `logs/shutdown-cycles-*`. The default cycles are close-app,
close-window ×2 each, kill-main, close-app, kill-group, close-window, close-app,
then a final start. Persistent terminal sessions use their default (enabled).
Each cycle starts:

- a default-profile bash terminal with a foreground tree, a shell job and a
  `setsid -f` process (the user-detached control);
- the `ov-build` task and the background `ov-watch` task (with a problem matcher)
  from `.vscode/tasks.json`;
- the shipped `pwa-node` debugger with a debuggee and its child (`launch.json`).

Every fixture reports its PID, start time, group and session to a
nonce-authenticated socket. Fixtures are ended only through that socket. The
process inventory is read-only: the run nonce in `/proc/*/environ`, or the owned
host group. Abrupt exits use only the owned launch handle (kill-main) or the owned
detached group (kill-group). An external sentinel process outside the app must
survive every cycle. Restored terminal text, task and launch definitions are
read after each restart, and screenshots are retained.

## 3. Reproduced defects (observed)

| # | Defect | Evidence (`logs/`) |
| --- | --- | --- |
| 1 | **Terminal masters leak into descendants.** The pty host's master descriptors lack close-on-exec. Each later shell, task process, `cpuUsage.sh` and `sleep` held 1–5 `/dev/ptmx` descriptors of other terminals. A user-detached process therefore pins the masters of earlier terminals. Those shells never get the hangup, are reparented to the user subreaper and outlive a **graceful** close. They end only when the detached process exits. | `shutdown-cycles-aW3i72` (descriptor counts), `UzGbXh` |
| 2 | **Debuggee orphaned after abrupt exit.** js-debug's internal-console launcher spawns the debuggee (and its child) in the extension host, with no owner that survives. After kill-main both kept running, and the next start did not reclaim them. | `UzGbXh` cycle 2 and final start |
| 3 | **Pty host can outlive the app.** The recovered main process builds `PtyHostService` directly and never disposes it on quit; its quit listener only sets `_wasQuitRequested`. The pty host has no parent-PID watcher. In some graceful closes it and its revived shells stayed alive for **more than 60 s** after the main process exited. 60 s is the persistent-session reconnection grace time. This is intermittent. | `zjcN98` cycle 3, `5djycu` cycle 1 |

Not reproduced: no task child, Agent command or external sentinel was left by a
graceful close, apart from the pinned shells above. Task and launch definitions
were preserved (byte-identical, fetched after each restart). After a graceful
close, terminal history was restored with the previous cycle's marker and
workload command (`5djycu` and `182RDX` cycles 2–4; screenshots
`screens/cycle-N-restored-*.png`). After an abrupt exit the revived terminal set
fell back to the last gracefully saved layout.

## 4. Candidate fix: tried, not committed

A candidate generalized the Agent command journal
([`agent-command-exit-customization.mjs`](../../desktop/agent-command-exit-customization.mjs))
to cover terminal sessions recorded by the pty host and debuggee trees recorded by
js-debug. Records carry the same PID, start time, group and session identity. The
main process sent a hangup at exit and reaped orphans at the next start. A second
part disposed the pty host on quit.

- Six focused unit tests passed. Natively, the debuggee orphan was reclaimed at
  the next start (`o7JHFu` cycle 6).
- With the quit disposal added, **pinned shells still survived graceful closes**
  (`182RDX`, `xKfXLg`, `UHq0DR`). Their journal records were present with
  matching identities before exit (`UHq0DR`). So the exit-time hangup did not
  take effect in the real main process, and the cause is not established.

Per the wrap-up instruction, this candidate is excluded from the commit. OV-403 is
not promoted.

## 5. Measurements (observed on this host; one run each)

Sampled every 250 ms over the owned family (nonce or owned group). Summed RSS
double-counts shared pages; PSS is also given.

| Run `o7JHFu` (candidate build) | Cold cycle 1 | Warm cycles 2–9 |
| --- | ---: | ---: |
| Max family process count | 30 | 31–37 |
| Peak summed PSS | 5,829 MiB | 1,740–2,002 MiB |
| Peak summed RSS | 7,044 MiB | 3,258–3,645 MiB |
| Launch to workspace | 10.2 s | 8.7–12.8 s |

Cold peak composition (`5djycu`/`182RDX`): one Node service utility process at
about 1.9 GiB PSS during the first start of a fresh profile. Warm peaks are led
by the renderer (~650 MiB) and a Node service (~530 MiB). The process count rose
by about one per warm cycle as restored terminals accumulated (1→5 revived
terminals). No pre-fix full-scenario control was run, so no before/after memory
claim is made.

## Commands

```sh
npm ci --prefix tooling
export OPENVISION_RECOVERY_DIR=<prepared 3.21.13 recovery>
npm run build:desktop
npm run verify:shutdown-cycles [-- --cycles=close-app,kill-main,...]
npm run test:shutdown
npm run docs:check
```

## Open gates (OV-403)

Fix and verify defects 1–3: pinned shells after graceful close, debuggee reclaim
and pty host lifetime. Then reach a passing `verify:shutdown-cycles`. Diagnose the
Windows exit 134 with captured stderr, and the `0xC0000005` worker crash. This
needs Windows. The `verify:development` rerun on Linux and macOS evidence are
also open.
