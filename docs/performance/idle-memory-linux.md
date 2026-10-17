# Idle and long-session memory on Linux

17 October 2026. **Linux x64 only** (Omarchy, Hyprland/Wayland, Linux
7.2.5, AMD 16 logical processors, 30 GiB RAM; Node 26.8.1 tooling; source build of the
3.21.13 runtime after preview.7). Nothing here describes Windows, macOS or the
published preview.7 package. OV-1003 stays **Partial**; the ledger stays at 6/42.

This report covers the OV-1003 clauses for Linux: a process inventory, cold and warm
startup, idle at 5 and 15 minutes, a fixed active workload repeated six times,
the owner of the large cold-start Node process, and one ownership fix with
before/after numbers. Each measurement is **one run on a shared, loaded host**.
No result is a distribution or a general speed claim.

## Method

```sh
npm ci --prefix tooling
export OPENVISION_RECOVERY_DIR=<prepared 3.21.13 recovery>
npm run build:desktop
npm run verify:idle-memory                 # idle 5 and 15 min, 6 iterations
npm run verify:idle-memory -- --quick      # idle 1 min, 2 iterations (smoke)
npm run verify:idle-memory -- --signal-trace   # host under strace (signals only)
npm run test:idle-memory
```

[`verify-idle-memory.mjs`](../../desktop/verify-idle-memory.mjs) creates a
disposable profile and project under `logs/idle-memory-*`. The project is its own
Git repository with 122 small files, so nothing walks up into the OpenVision
checkout. The run:

1. **Cold** start with a fresh profile: time to the local-profile titlebar and to
   the Explorer showing `hello.js`, then a 45 s settle. A fresh profile does
   **not** mean a cold OS page cache.
2. A provider is added through Settings and one chat reply is checked. The app is
   closed.
3. **Warm** start with the same profile and project, with the same timings and settle.
4. **Idle** samples 5 and 15 minutes after the warm settle.
5. **Six equal iterations**. Each opens a new Agent chat and gets a reply, then
   runs a chat with one `Read` tool call. It then runs a workbench text search and opens
   a terminal, runs `echo` and kills the terminal. Each iteration ends with a 20 s
   settle.
6. A final inventory, then a graceful close. Every recorded process must be gone
   within 30 s.

The model is a deterministic loopback fixture (19 requests per run). No live
inference is used. Terminals use `/bin/bash --noprofile --norc` with persistent
sessions off, so the terminal workload is identical each time.

[`process-family-linux.mjs`](../../desktop/process-family-linux.mjs) reads
`/proc` only. The family is every descendant of the launched host (each child
started no earlier than its parent) plus the host's own process group. Other
agents' applications were running on the same machine; they are never counted and
never signalled. Per process it records:

- **USS** = `Private_Clean + Private_Dirty`, PSS and `Swap` from
  `smaps_rollup`. Summed RSS is not used.
- Threads, open descriptors, inotify watches (from `fdinfo`), `/dev/ptmx`
  descriptors and native extension addons mapped by extension hosts.
- CPU time from `stat`.

Roles come from Electron's own `app.getAppMetrics()` names, read over the owned
automation connection. Utility processes on this host do not expose their VS Code
entry point in `/proc/<pid>/environ`.

**Host memory pressure.** During every run the host had 6–13 GiB available and 21–23 GiB of
swap in use from other work. The kernel swapped out up to 375 MiB of this family's
private pages, which makes USS alone misleading. The tables therefore give
**USS + swap** as the private-memory figure, with USS, swap and PSS beside it.
Load average and available memory are recorded with each sample.

## Process inventory (observed)

Warm session, idle 15 minutes, before the fix (`logs/idle-memory-before-oMVPIO`).
Inotify watches, descriptors and threads are from `/proc`.

| Role | Count | USS + swap MiB | Threads | Descriptors | Inotify watches | Owner and what it holds |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| Renderer (workbench window) | 1 | 385.8 | 24 | 50 | 0 | Workbench UI, Agent chat models, editors |
| Extension host 4: `cursor-always-local`, `cursor-resolver`, `cursor-socket` | 1 | 364.2 | 21 | 57 | 3 | Cursor Tab/autocomplete, Filesync, structured logs; parent of the `gitWorker.js` child |
| Main | 1 | 146.4 | 46 | 198 | 14 | Window, lifecycle, utility and pty-host owners; `CursorProclistService` |
| Extension host 5: `cursor-agent-exec`, `cursor-agent-worker`, `cursor-checkout` | 1 | 122.1 | 21 | 51 | 4 | Agent tools; maps `cursor-agent-exec` native addons |
| Extension host 2: all other extensions | 1 | 111.8 | 21 | 57 | 3 | Git, TypeScript features, MCP, commits, built-ins |
| Extension host 3: `cursor-retrieval` | 1 | 89.2 | 57 | 60 | 4 | Indexing, grep and Git graph; maps `file_service.linux-x64-gnu.node` |
| Shared process | 1 | 49.0 | 21 | 46 | 4 | Extension management, profiles, storage |
| GPU | 1 | 46.1 | 23 | 52 | 0 | Chromium compositing |
| File watcher (utility) | 1 | 32.9 | 23 | 48 | **17** | Workspace file watching (the only large inotify user) |
| `cursor-always-local/dist/gitWorker.js` (Node child of host 4) | 1 | 15.9 | 12 | 31 | 3 | Cursor Tab Git worker |
| Audio / Network services | 2 | 25.3 | 7 / 9 | 23 / 27 | 0 / 3 | Chromium services |
| Zygotes | 3 | 25.1 | 1 | 12–13 | 0 | Chromium process launchers |
| Pty host | 0 idle → 1 | 39.7 (final) | 27 | 52 | 3 | Started on the first terminal; not running before it |

Not present while idle in this workload: MCP utility (no MCP configured;
deferred under OV-303), language servers or `tsserver` (no TypeScript project
opened), ripgrep (exits after each search). The default and always-local hosts
both run without mapped native addons, so they are told apart from the
renderer-log placement order (`Placing extension(s) …` then `Started local
extension host with pid …`). The retrieval and agent-exec assignments in that
order match their mapped addons. The other two assignments are **inferred from
the log order**.

### Timers, polling and caches

| Owner | Kind | Evidence |
| --- | --- | --- |
| `CursorProclistService` (main) | `setInterval` every 10 s: a native scan of **every process on the system** (`cursor_proclist_scan_async`), subsample logging and an agent memory-pressure evaluation | Observed log: `Config enabled feature (subsample every 10s; memoryPressureMonitorEnabled=true)`. Owner: `out/main.js` `applyConfig` → `startAsyncPolling` |
| `Cursor Proclist Polling` (renderer) | Every 5 min it builds a process sample and tries to **upload it**; on failure it stashes samples for replay | Observed: `Failed to send V2 metrics to backend; opening circuit … [unauthenticated]` at 5, 10 and 15 min. Gated by the dynamic config `extension_monitor_control`. Reported to OV-1005; not changed here |
| `RendererPing` (main) | Every 5 s, renderer responsiveness ping | Observed log: `intervalMs=5000` |
| Pty host `TerminalProcess` | 200 ms title polling per live terminal | Recovered `ptyHostMain.js` `_titleInterval` |
| Static `setInterval` sites | `cursor-agent-exec` 17, `cursor-agent-host` 9, `cursor-local-agent-runtime` 6, `cursor-mcp` 5, `cursor-retrieval` 4, `cursor-always-local` 3, `main.js` 6 | Count of occurrences in the bundles. Runtime registration is **not** observed |
| js-debug breakpoint predictor | Persistent glob cache `workspaceStorage/<id>/ms-vscode.js-debug/bp-predict.json` | Observed: 2.4 MB file (see below) |

Main-process handle counts (`process.getActiveResourcesInfo()`) and idle CPU per
role come from the after run, below.

## Why one Node process reached about 1.9 GiB cold

The 1.9 GiB figure (and peaks up to 6.5 GiB in this session) came from
[`verify:shutdown-cycles`](../recovery/rea-shutdown-ownership.md), not from
ordinary startup.

| | Observation |
| --- | --- |
| Which process | That verifier loads a driver with `--extensionDevelopmentPath`. In that mode the renderer log shows a **single** local extension host, with no `Placing extension(s)` lines, so every extension shares one Node utility process. That process is the peak: 4.2–4.8 GiB PSS in this session's cold cycles |
| What the memory is | `smaps` at the peak: 2.9 GiB `[anon:v8-sandbox]` and 1.2–1.9 GiB `[anon:partition_alloc]`. Over the same window the CDP heap sampler showed only a 342 MiB used JS heap. So the bulk is buffers and strings, not retained JS objects |
| What it was doing | Open descriptors pointed into the whole OpenVision worktree (`curs_source/`, `backups/`, `electron-host/`), outside the fixture project. Sampled allocations included js-debug's `readSomething` and `getDirectoryReadDescends` (its source-map glob) and `readFileAfterClose` |
| Root | js-debug's persisted `bp-predict.json` holds two globs: the project (`**/*.(m|c|)js`) and **the OpenVision worktree root** (`**/*.js`, excluding `node_modules`). The debuggee `fixture.cjs` lives outside the project, so js-debug also searched from the nearest `package.json` above it, which is the repository root |
| Bisection | The same single cold cycle with the debug step skipped peaked at **1,659 MiB** family PSS. With it, three cold cycles peaked at 5,140, 5,247 and 6,506 MiB |
| Why only cold | The glob result is cached in `bp-predict.json` in workspace storage, so later cycles skip the scan (inferred from the cache contents and the warm peaks of 1.7–2.0 GiB) |

So the process is **neither an indexer nor the TypeScript server**. It is
js-debug's one-time source-map discovery over the enclosing repository, in a
verifier configuration that also places every extension in one host. It is a
fixture-layout artifact, not idle retention: the host settled at about 600 MiB
afterwards. The OV-403 report now records this; its verifier is unchanged.

In the normal layout measured below (no development extension), the cold startup
peak is 1.89–2.01 GiB PSS for the **whole family**. At that peak the largest
process is the renderer, at about 590 MiB PSS.

## Measurements

### Before the fix

`logs/idle-memory-before-oMVPIO`. Commit `935771e4` plus the uncommitted
verifier; host binary SHA-256 `0636c96f…a8aff9`.

| Start | Titlebar ms | Explorer ms | Startup peak PSS MiB (family) | Largest at peak (PSS MiB) |
| --- | ---: | ---: | ---: | --- |
| Cold (fresh profile) | 5,394 | 10,503 | 1,929.6 | renderer 586; extension host 4 265; main 249; extension host 2 168 |
| Warm (same profile) | 3,105 | 8,138 | 1,810.7 | renderer 573; main 243; extension host 4 241; extension host 2 169 |

| Snapshot | Processes | USS MiB | Swap MiB | USS + swap MiB | PSS MiB | Load 1 min / available MiB |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| Cold, settled 45 s | 17 | 1,477.6 | 0 | 1,477.6 | 1,644.5 | 9.07 / 7,763 |
| Warm, settled 45 s | 15 | 1,453.2 | 2.7 | 1,455.9 | 1,612.7 | 9.25 / 9,296 |
| Idle 5 min | 15 | 1,002.3 | 375.1 | 1,377.4 | 1,127.1 | 5.47 / 12,577 |
| Idle 15 min | 15 | 1,122.7 | 291.2 | 1,413.9 | 1,251.5 | 4.59 / 12,857 |
| Iteration 1 settled | 17 | 1,095.2 | 268.4 | 1,363.6 | 1,227.4 | 5.81 / 12,568 |
| Iteration 2 settled | 18 | 1,182.6 | 267.9 | 1,450.5 | 1,315.1 | 5.17 / 12,266 |
| Iteration 3 settled | 19 | 1,309.5 | 267.5 | 1,577.0 | 1,442.3 | 4.82 / 12,004 |
| Iteration 4 settled | 20 | 1,094.5 | 267.1 | 1,361.6 | 1,227.4 | 5.51 / 12,221 |
| Iteration 5 settled | 21 | 1,228.4 | 267.0 | 1,495.4 | 1,361.3 | 5.88 / 11,121 |
| Iteration 6 settled | 22 | 1,321.6 | 267.0 | 1,588.6 | 1,454.5 | 6.52 / 10,833 |

Active peaks (family PSS during each iteration) were 1,208–1,453 MiB. Per
iteration, chat took 2.2–2.9 s, search 27–112 ms and terminal 585–804 ms.

### After the fix

`logs/idle-memory-after-9nrfCt`. The build and verifier are the same except for the
terminal release; this run used `--signal-trace` (see "Interrupted runs"). The
`main.js` and workbench hashes are identical to the before run.

| Start | Titlebar ms | Explorer ms | Startup peak PSS MiB (family) | Largest at peak (PSS MiB) |
| --- | ---: | ---: | ---: | --- |
| Cold (fresh profile) | 5,496 | 10,503 | 1,947.0 | renderer 586; main 259; extension host 5 241; extension host 2 169 |
| Warm (same profile) | 2,525 | 7,527 | 1,851.0 | renderer 573; main 256; extension host 4 236; extension host 2 170 |

| Snapshot | Processes | USS MiB | Swap MiB | USS + swap MiB | PSS MiB | Load 1 min / available MiB |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| Cold, settled 45 s | 17 | 1,542.8 | 0 | 1,542.8 | 1,710.7 | 4.85 / 8,446 |
| Warm, settled 45 s | 15 | 1,488.7 | 0 | 1,488.7 | 1,653.8 | 3.81 / 8,484 |
| Idle 5 min | 15 | 1,343.6 | 0 | 1,343.6 | 1,508.9 | 2.19 / 8,320 |
| Idle 15 min | 15 | 1,488.4 | 0 | 1,488.4 | 1,653.7 | 2.64 / 7,672 |
| Iteration 1 settled | 16 | 1,463.3 | 0 | 1,463.3 | 1,630.6 | 2.28 / 7,680 |
| Iteration 2 settled | 16 | 1,471.5 | 0 | 1,471.5 | 1,638.9 | 2.13 / 7,519 |
| Iteration 3 settled | 16 | 1,630.0 | 0 | 1,630.0 | 1,797.6 | 2.68 / 7,515 |
| Iteration 4 settled | 16 | 1,425.2 | 0 | 1,425.2 | 1,592.8 | 3.22 / 7,857 |
| Iteration 5 settled | 16 | 1,553.8 | 0 | 1,553.8 | 1,721.5 | 2.86 / 7,671 |
| Iteration 6 settled | 16 | 1,501.5 | 0 | 1,501.5 | 1,669.2 | 2.92 / 7,637 |

Active peaks were 1,634–1,817 MiB. Chat took 2.2–2.3 s, search 30–119 ms and
terminal 529–679 ms. The pty-host log recorded six `closing its pty master` releases.

### Before and after, same workload

| Measure | Before | After |
| --- | ---: | ---: |
| Processes after iterations 1 → 6 | 17 → 22 (strictly increasing) | 16 → 16 (flat) |
| Killed-terminal shells left at the end | 6 | 0 |
| `/dev/ptmx` masters held by the pty host at the end | 6 | 0 |
| Private-memory slope over 6 iterations (USS + swap) | +29.8 MiB/iteration (4 of 5 steps up) | +6.7 MiB/iteration (3 of 5 steps up) |
| Startup peak PSS, cold / warm | 1,929.6 / 1,810.7 MiB | 1,947.0 / 1,851.0 MiB |

What the fix proves is the process and descriptor result: no shell or master
survives a kill. The memory value of the fix is small: each surviving shell had
0.8 MiB USS. The difference in memory slope between the runs is **not** attributed to
the fix. The before run had 267–375 MiB swapped out and the after run had none, so
the absolute MiB values of the two runs cannot be compared. Startup times differ
within run-to-run noise on this host; no speed claim is made.

Main-process handles at idle 15 minutes (`process.getActiveResourcesInfo()`):
15 pipes, 14 file-system watchers and 2 timers. At the end: 17 pipes, 14 watchers
and 3 timers.

CPU used during the 10 minutes between the idle marks (after run, same processes):

| Process | CPU s | USS at 5 → 15 min (MiB) |
| --- | ---: | --- |
| Extension host 4 (always-local) | **25.08** | 264.2 → 419.7 |
| Renderer | 7.51 | 386.5 → 378.2 |
| Extension hosts 5, 2, 3 | 2.64 / 2.57 / 2.59 | flat |
| Main | 1.74 | 156.9 → 151.4 |
| GPU | 1.45 | flat |
| Shared process, file watcher | 0.08 / 0.13 | flat |

### Idle owner: always-local host traffic (observed)

A separate idle probe (`logs/idle-profile-2giqKM`) attached a CDP CPU and
allocation profiler to each extension host (`--inspect-extensions`, ports found
from each host's own listening sockets). The profile covered 90 s, after 150 s of idle:

- Extension host 4 was busy for 2,867 ms. Every other host was busy for 29–33 ms.
  Its top frames were `addCACert` (1,403 ms, creating a TLS secure context),
  `https` agent `getName`, `getPeerCertificate` and `_http_agent` socket
  handling. It allocated about 1.1 GiB in 90 s (662 MiB with no extension frame,
  482 MiB under `cursor-always-local`).
- Its `Cursor Structured Logs.log` recorded about **185 unauthenticated
  `agent.v1.AgentService/Run` calls per minute** (741 in about 4 minutes). It also recorded
  unauthenticated `getTeamAdminSettings`, `getKnownServers`, MCP-registry and
  `ReportClientNumericMetrics` calls.
- A socket probe (`logs/idle-sockets-eQfcXy`, no proxy) saw this host connected to
  52.21.130.202, 3.92.129.183 and 34.225.159.174 on port 443. Those are the three A
  records of `api2.cursor.sh`.

This is the largest idle CPU and memory-churn owner found. It is also a hosted
network destination from an unsigned local profile, which belongs to OV-1005 and
OV-501. It was reported to that work and not changed here. The OV-1005 work reports
that main commit `5ea2d86a` refuses such calls without an account token. That commit
is not in this branch's base and was **not** measured here. Whether the retry loop's
CPU and allocation stop with it, or only fail faster, is open.

### Interrupted runs

Three earlier after runs (`logs/idle-memory-after-8FTNKm`, `-iJK3rO`, `-CiBgKp`)
lost the app to an **unrequested exit with code 0**: 2 and 11 minutes into idle, and
34 s after the warm start. The main log shows the extension hosts exiting at that
moment and nothing else. The kernel and journal show no OOM kill. The cause is
**unknown**; other agents' applications were running in the same Wayland session.
The verifier now records every host exit (requested or not) and fails at the next
idle mark. With `--signal-trace` it runs the owned host under `strace` (signals of
the main process only) to name a sender. The traced run completed without any
signal or unrequested exit, so no sender was identified.

## Long-session growth (observed, then inferred)

Over six equal iterations before the fix:

- **Process count grew strictly**: 17, 18, 19, 20, 21, 22. Each killed terminal
  left one `bash` (child of the pty host). The final inventory had six shells,
  and the pty host held **six `/dev/ptmx` masters** after six kill commands.
- **Private memory was not monotonic** (4 of 5 steps increased; it fell at iteration 4).
  The least-squares slope was +29.8 MiB per iteration (USS + swap). The renderer
  (296.8 → 397.0 MiB USS, slope +13.6) and the extension hosts together
  (531.6 → 651.7, slope +15.4) account for it. No forced GC was applied, so this does
  not separate retention from uncollected garbage. Each iteration adds two new
  Agent conversations, which the renderer keeps (inferred: chat history,
  not a leak). Six iterations cannot establish a bound.
- During idle, extension host 4 (always-local) grew from 260 MiB USS at the warm
  settle to 357 MiB at 15 minutes (before run) while no workload ran. The after run
  attributes this to its hosted-call loop (below).

## Fix: release a killed terminal's pty master

**Defect (observed).** The recovered pty host kills a terminal by sending one
SIGHUP through node-pty `kill()`. It then reports the exit at once and disposes
its `TerminalProcess`, but never closes the pty master. Under `--log trace`, every kill showed
`node-pty.IPty#kill` and an exit event. With an instrumented overlay, the shell was
seen to receive the signal (state `R`, SIGHUP briefly blocked while handled). Yet
interactive bash often kept running after it. In three probes of repeated
create/run/kill, 3 of 4, 2 of 4 and 3 of 5 shells survived. The first terminal of
a session always exited. A SIGHUP sent by the verifier to the
same owned shell ended it at once. The cause inside bash is **not established**.

**Not caused by OV-403's exec wrapper.** The 3-of-5 probe ran the first backup of
`ptyHostMain.js`, from before `openvision-pty-exec.cjs`.

**Fix.** [`pty-kill-release-customization.mjs`](../../desktop/pty-kill-release-customization.mjs)
patches the recovered `_kill` owner. Before the hangup it registers an `onExit`
listener. If node-pty has not reported the child's exit within 1 s, the pty host
closes **its own master descriptor** (node-pty's read stream). The kernel then hangs up
the terminal session and the shell exits on EOF. No PID is signalled; only the
owned descriptor is closed, and only while the exit is unreported. Windows
(ConPTY) is unchanged.

The transform checks the recovered `_kill` contract (startup wait, exit event and
dispose) and the node-pty `_socket` master contract, and fails the build on
drift. It is idempotent (marker `OpenVision pty kill release v1`) and keeps a
first backup in `backups/pty-kill-release/`.

**Reactivation.** In the overlay probe, each later terminal opened and ran its
command after earlier masters were released. In the verifier, a new terminal is
created and used in every iteration after the previous one was released. The pty
host stays alive and serves them.

## Biggest owners and what was not changed

| Owner | Evidence | Decision |
| --- | --- | --- |
| Renderer | Largest at startup (≈570–590 MiB PSS); grows with chats | Not idle waste: holds the open UI and chat history. Retention bounds belong to the reasoning/chat retention clause |
| Extension host 4 (always-local / Cursor Tab) | Largest idle Node process; grew 100–155 MiB during idle with no workload, from the network loop above | Owner change belongs to OV-1005 (network) and OV-603 (autocomplete); re-measure after `5ea2d86a` |
| Extension host 4 network loop | About 185 hosted `AgentService/Run` calls per minute to `api2.cursor.sh` while idle; 25 s CPU per 10 idle minutes | OV-1005/OV-501 owner; reported, not changed here |
| `CursorProclistService` + proclist polling | 10 s whole-system process scan in main; 5 min upload attempts | Telemetry upload is OV-1005's owner; reported to that work, not changed here |
| js-debug source-map glob | 4–5 GiB transient in the dev-extension layout | Fixture layout; documented for OV-403. Upstream js-debug behaviour is unchanged |
| Pty host | Absent until the first terminal; 40 MiB afterwards | Already lazily started. Idle disposal was not added: 40 MiB with live restore semantics is not supported by this evidence |

No idle service was found that holds memory **without need** and that this
story can safely dispose of. So no idle disposal was added beyond the terminal
release.

## Checks run

All checks ran on this host against the rebuilt source.

| Check | Result |
| --- | --- |
| `npm run build:desktop` | Pass. 239 scripts, 124 manifests, 32 local main-process modules. The kill-release transform applied once, with a first backup |
| `npm run test:desktop` | **162/162** pass |
| `npm run check:desktop` | Pass |
| `npm run test:build-integrity` | **26/26** pass |
| `npm run test:shutdown` | **34/34** pass (includes 5 new kill-release tests) |
| `npm run test:idle-memory` | **9/9** pass (sampler, family membership and watcher detail on a real process tree; transform drift and idempotence; release behavior) |
| `npm run verify:idle-memory` | **Pass** after the fix (`idle-memory-after-9nrfCt`). The before run (`idle-memory-before-oMVPIO`) predates the terminal-release assertion; its inventory shows the 6 leaked shells and masters |
| `npm run verify:utility-listeners` | **Fail on Linux**: `Utility event timeout` while the probe starts the first Base-owner utility fork. This verifier was validated on Windows. `main.js` is byte-identical with and without this change, and this change does not touch utility processes. Cause not investigated |
| `npm run verify:local-startup` | Not run: asserts Windows (`This verifier currently covers Windows`) |
| `npm run benchmark:native` | Not run: `--baseline` asserts Windows (`The process-memory baseline currently requires Windows`). `verify:idle-memory` is the Linux measurement |
| `npm run docs:check` | Pass |

## Remaining OV-1003 gates

- macOS and Windows runs of the same workload (this report is Linux x64 only).
- Repeated runs on a quiet host to give distributions. Here, host swap pressure moved
  hundreds of MiB between USS and swap.
- Re-measure extension host 4 idle CPU and memory with OV-1005's refusal (`5ea2d86a`) in the build. Stop the always-local `AgentService/Run` retry loop at its caller if it still spins.
- Chat/reasoning-session retention bounds in the renderer, and a longer series
  (more than 6 iterations, with forced GC in a diagnostic build) to separate
  retention from garbage.
- Disposition of `CursorProclistService` under OV-1005.
- Control-plane output/cache bounds and REA cache, as listed in the roadmap.
- Packaged verification: these are source-build results; preview.7 is unchanged.

[Performance index](README.md) · [Roadmap](../planning/roadmap.md) · [Shutdown ownership](../recovery/rea-shutdown-ownership.md)
