# Shutdown ownership: terminals, tasks and the debugger

16 October 2026. P0 OV-403 stays **Partial** at 8 points. **Linux x64 only**
(Omarchy, Hyprland/Wayland). Nothing here proves Windows or macOS behavior.
Sections 1–5 record the first pass (verifier and evidence only). Section 6 records
the fixes for defects 1–3 and a passing `verify:shutdown-cycles`. These are source
changes after preview.7; the published package is unchanged. See the
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

## 4. First candidate (superseded by section 6)

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

That candidate was not committed. Section 6 replaces its terminal half with a
root-cause fix and keeps only its debuggee journal.

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

## 6. Fixes and verification (16 October 2026, continued)

Three scoped build customizations. Each keeps a first backup under `backups/`, is
idempotent and fails the build if its recovered producer drifts. A clean rebuild
passes (`source/`, `build/`, `electron-host/` removed first).

| Defect | Owner and fix |
| --- | --- |
| 1 Inherited masters | Observed: on Linux, node-pty's `pty.fork` ignores its `helperPath` (the spawn helper is used only on macOS; this build ships no Linux helper). It calls `forkpty` + `execvp` and closes nothing. [`pty-host-ownership-customization.mjs`](../../desktop/pty-host-ownership-customization.mjs) makes the pty host's `setupPtyProcess` start each terminal through [`pty-exec.cjs`](../../desktop/pty-exec.cjs) (installed as `out/vs/platform/terminal/node/openvision-pty-exec.cjs`). It runs with the application's own runtime (`ELECTRON_RUN_AS_NODE`). It closes every inherited descriptor above 2 that is not close-on-exec, and restores default dispositions for signals the runtime ignores (`SIGPIPE`, `SIGXFSZ`). It restores the shell's own `ELECTRON_RUN_AS_NODE`/`NODE_OPTIONS`, then calls `process.execve` on the shell: same PID, session and terminal. Tasks and extension terminals use the same path. Other platforms, and non-array argument lists, are unchanged. |
| 2 Debuggee orphan | [`owned-process-journal.mjs`](../../desktop/owned-process-journal.mjs) uses the Agent command journal model. js-debug's internal-console launcher records the debuggee: PID, start time, group, session, and owner identity, in a mode-0700 per-installation directory. The main process reaps at start when the writer is gone. It sends SIGTERM to the recorded process and to descendants found through live parent links in one `/proc` scan, then SIGKILL after 1 s, only while the identities still match. At graceful exit it releases records written by its own children. |
| 3 Pty host lifetime | The same pty-host customization makes the main process join a bounded stop of its own pty-host handle on quit. This happens after windows have saved terminal state. The stop sends SIGTERM through the owned Electron utility handle and waits up to 3 s. It escalates to SIGKILL only if the same process (PID, `/proc` start time, parent = this main process) is still running. |

The session-hangup journal from the first candidate is not used.

### Results (observed)

| Check | Result |
| --- | --- |
| `test:shutdown` | **29/29** pass. The 15 new tests cover: wrapper descriptor closing (with a control showing inheritance without it), same PID, signal and environment restoration, missing executable, transform drift and idempotence, bounded stop with and without escalation, no escalation for a non-child, and debuggee reclaim after an abrupt exit (including an identity-mismatch control). |
| `test:desktop` | **161/161** pass |
| `test:build-integrity` | **26/26** pass (requires `OPENVISION_RECOVERY_DIR`) |
| `check:desktop` | Pass |
| `build:desktop` | Clean build passes: 239 scripts, 124 manifests, 30 local main-process modules |
| `verify:shutdown-cycles` | **Pass**, `logs/shutdown-cycles-qFRaE2`. 9 cycles plus a final start, 0 failures, 0 renderer errors. |
| `verify:development` | **Pass**, `logs/development-verification-neoura`: bash/sh terminals, problem matcher, task cancel/restart, debugger break/step/continue/stop. Launcher exit 0 and native `process.exit` 0. |
| `docs:check` | Pass |

`shutdown-cycles-qFRaE2` in detail:

- Every graceful close (6) exited with code 0 and left no owned process. No
  process stayed after main exit (lingering list empty). The only survivors were
  the user-detached `setsid` fixtures, as intended, and the external sentinel.
- No process outside the pty host held a `/dev/ptmx` descriptor before exit
  (before the fix: 1–5 per process).
- kill-main left the debuggee and its child running. Both were reclaimed at the
  next start, within the verifier's 15 s window.
- kill-group left no survivors.
- Terminal history with the previous cycle's marker and workload command was
  restored after every graceful close (screenshot `cycle-3-restored-1.png`
  inspected). Task and launch definitions were unchanged and fetched after
  every restart.

Measurements, one run on this host:

| | Cold cycle 1 | Warm cycles 2–9 |
| --- | ---: | ---: |
| Max family process count | 30 | 32–40 |
| Peak summed PSS | 6,190 MiB | 1,906–2,010 MiB |
| Peak summed RSS | 7,401 MiB | 3,283–3,628 MiB |
| Launch to workspace | 9.6 s | 6.9–8.9 s |

The cold peak is a verifier artifact, not a representative cold start. The
following comes from the parallel OV-1003 memory investigation and was not
reproduced here. The debuggee program (`fixture.cjs`) sits outside the project, so
js-debug's breakpoint predictor falls back to the repository root and globs
`**/*.js` across the whole worktree. Its result is cached in `bp-predict.json`,
which is why only the first start pays for it. Skipping the debug step, the same
cycle peaked at 1,659 MiB PSS. Moving the debuggee into the project, or setting
`outFiles`/`resolveSourceMapLocations`, is a follow-up for the verifier. The warm
process count includes one retained user-detached fixture per cycle and an
accumulating number of revived terminals. The pty exec wrapper adds a median
**39.8 ms** (first 38.4 ms) per terminal start, against 1.3 ms for a direct
`/bin/sh -c true` (7 runs). There was no full-scenario pre-fix control; no memory
gain is claimed.

### Limits

- The wrapper requires the runtime's run-as-Node mode (enabled in this runtime,
  which also uses it elsewhere). A process the user detaches still keeps its own
  terminal's slave open, as in any terminal emulator.
- During an abrupt exit, orphaned debuggees run until the next start. Debuggees
  launched in the integrated terminal follow the terminal path.
- Graceful quit can now wait up to about 4 s longer for an unresponsive pty host.
- Windows/macOS behavior, the Windows exit 134 (section 1) and the `0xC0000005`
  worker crash remain unverified.

## Open gates (OV-403)

Linux defects 1–3 are fixed and verified (section 6). Still open: the Windows exit
134 must be diagnosed with captured stderr, and the `0xC0000005` worker crash
explained; both need Windows. Windows and macOS shutdown matrices are also open.
OV-403 stays **Partial**: those clauses are not Linux-verifiable.

## 7. Ubuntu/X11 rerun and Linux clause table (19 October 2026)

Host: cloud container, Ubuntu 24.04 (`/bin/sh` is dash), Xvfb X11
(`-screen 0 1920x1080x24`), `dbus-run-session` without a Secret Service,
non-root user `ov`, Node 24.18.0, 4 CPUs / 15 GB. Source build from the pinned
Cursor 3.21.13 AppImage on branch `ov/ubuntu-rerun-fixes`. The coordinator's rerun on
merged main `b4f52a56` found two OV-403 failures here; both are fixed.

| Failure | Root cause (observed) | Owner and fix |
| --- | --- | --- |
| `test:shutdown`: `pty-exec.test.mjs` "missing executable" got status `null` | Node 24.18 treats a failed `process.execve` as fatal: it prints `process.execve failed with error code ENOENT` and aborts (SIGABRT). The wrapper's `catch` never ran. The cause is not dash, bash or Ubuntu. Product effect: a terminal whose shell is missing ended by signal 6 instead of node-pty's `execvp(3) failed.` and exit 1. | [`pty-exec.cjs`](../../desktop/pty-exec.cjs) now resolves the executable like `execvp(3)` (`PATH` search, `X_OK`, regular file) and reports `ENOENT`/`EACCES` as `execvp(3) failed.: <strerror>` with exit 1 before calling `execve`. Tests assert no signal, the exact message, and a new permission-denied case. |
| `verify:shutdown-cycles`: "terminal history not restored" in varying cycles (PYZ4Nx 3 and 7; reproduced `anu3lK` 2 and 3) | Restore works. The restored buffers held `term-cN running` and "History restored", but xterm's DOM renderer holds only visible rows. Here the long run-directory paths wrap, so the `OV-RESTORE-MARKER-cN` line sat just above the viewport. Which cycles failed depended on wrapping. | Harness: the driver exposes the public `workbench.action.terminal.scrollToTop/scrollDownPage/scrollToBottom` commands and the runner reads the buffer page by page ([`verify-shutdown-cycles.mjs`](../../desktop/verify-shutdown-cycles.mjs)). The assertion is unchanged. |

Remaining limit: if the shell exists and is executable but `execve` still fails
(for example, a `#!` line naming a missing interpreter), Node still aborts.
node-pty's own fork path would report `execvp(3) failed.` instead.

### Linux x64 clause table (OV-403)

Observed on Ubuntu/X11 in `development-verification-wlROYz` (pass, launcher exit
0, native `process.exit` 0) and the three consecutive `shutdown-cycles` passes below.
Earlier Arch/Hyprland passes are in section 6.

| Clause | Evidence | Result |
| --- | --- | --- |
| Resize (bash) | Real PTY 74×13 → 52×13 after a window resize to 1100 px | Pass |
| Resize (sh = dash) | Real PTY 53×13 → 94×13 after a resize to 1450 px | Pass |
| Unicode | `OpenVision café 日本語` written by the fixture and rendered in both terminals (`*_unicode_rendered`) | Pass |
| Environment | The terminal-only variable reaches the fixture (`fixtureEnv: terminal-only`); cwd is the project | Pass |
| Exit / cancel | Ctrl+C in each shell cancels the foreground fixture (`cancelled`); the disposed terminal is gone; the reopened shell exits 0 | Pass |
| Restart | Terminal restart gives a new shell PID (bash 22654 → 22682, sh 22710 → 22726) with the size kept | Pass |
| Task problem matcher | The `openvision-fixture` matcher produces the diagnostic (`task_problem_matcher`); shutdown cycles: the background `ov-watch` matcher in every cycle | Pass |
| Task cancel / restart | The cancelled task's parent and child are released; the restarted task's parent and child are released (`bothReleased`) | Pass |
| Debugger break/step/stop | `pwa-node`: `stopped` (breakpoint) → `stopped` (step) → `terminated`; value 3 → 9; debuggee and child released | Pass |
| Released PIDs on window close | Terminal tree parent 22925 and child 22932 and their shell are absent within 15 s; shutdown state persisted | Pass |
| Shutdown cycles (graceful) | 6 graceful closes per run: exit 0, no owned survivor, no lingering process, history restored after each | Pass ×3 |
| Shutdown cycles (abrupt) | kill-main: the debuggee and its child are reclaimed at the next start; kill-group: no survivors; user-detached fixtures and the external sentinel survive; no run-nonce survivors after cleanup | Pass ×3 |

| Run | Result | Peak family PSS, cold / warm (MiB) |
| --- | --- | --- |
| `shutdown-cycles-anu3lK` | Fail before the harness fix (cycles 2, 3: marker above the viewport) | — |
| `shutdown-cycles-XtnQt3` | Pass (first after the fix) | 3,830 / 1,837–4,132 |
| `shutdown-cycles-7zIjAX` | Pass | 4,348 / 1,866–4,114 |
| `shutdown-cycles-pPoZI9` | Pass | 3,926 / 1,742–4,105 |

Cycle 2 (the first warm start of a fresh profile) peaks with cycle 1 at about 4.1 GiB PSS;
cycles 3–9 stay at 1.7–2.0 GiB. One run each, with the sampler as in section 5.

Moved to platform/live stories: the Windows exit 134 and `0xC0000005` worker
crash (section 1), and the Windows/macOS shutdown and development matrices.
