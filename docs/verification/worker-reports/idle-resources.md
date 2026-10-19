# Worker report: `ov/idle-resources` (OV-1003)

18–19 October 2026. **Linux x64 only.** The session ran in a 4-CPU container
with 15.7 GiB RAM and no swap. The app ran under Xvfb and a private D-Bus, with
Node 24.18.0 and a clean source build of the 3.21.13 runtime. All runs used
controlled fixtures; no live inference was involved. Nothing here covers
Windows, macOS or the preview.7 package.

## Summary

- **Utility listeners.** `verify:utility-listeners` passes on Linux. The
  owner-host timeout was not reproduced. A real ownership defect was found and
  fixed at its owner: a late `child-process-gone` event for a killed child
  released the next run of the same owner. Control: 16 retained listeners.
  Fixed build: 0. It passed 3 times in a row, then twice more on the final
  build.
- **Process sampling.** Disabled at both owners: the main-process 10 s
  whole-system scan, and the renderer's 5-minute sample build/write/stash/
  upload. A controlled verifier reproduces the scan before the change and
  shows it inert after.
- **Budgets.** `verify:idle-memory` now applies numeric budgets (full and
  quick) derived from `oMVPIO`, `9nrfCt` and a fresh pre-change baseline,
  `Lv23NI`. A measure that is missing fails.
- **Startup traversal.** Owners are attributed natively. Rule discovery is
  coalesced per root: 6 → 2 walks and 1,520 → 1,248/1,261 fixture listings.
  The new `verify:startup-traversal` budget covers both. Preflight and
  `.cursorignore` duplicates across processes remain.
- **Final measurement.** Two of three full `verify:idle-memory` runs pass. The
  third fails the per-iteration slope budget: 15.7 MiB against 15. That is
  recorded below; the budget was not changed.
- **Timer inventory.** A runtime inventory over the inspector replaces the
  static `setInterval` counts.

## Tasks

| # | Task | State | Notes |
| --- | --- | --- | --- |
| 1 | Fix `verify:utility-listeners` on Linux | **Done** | The owner-host timeout was not reproduced. The run-identity defect found here is fixed, the harness fails fast with diagnostics, and the late-gone case has a deterministic assertion |
| 2 | Make proclist scan and polling inert | **Done** | Main-process idle CPU measured before and after under the controlled condition. Memory-pressure evaluation is off by its own default, so no lazy replacement was needed |
| 3 | Numeric idle/long-session budgets | **Done** | `desktop/idle-memory-budgets.json`, full and quick variants. Fresh baseline `Lv23NI` taken before tasks 2 and 4 |
| 4 | Deduplicate startup traversals | **Partly done** | Rule discovery is coalesced. Sandbox preflights (5) and `.cursorignore` (4) still repeat across processes; they need a cross-process cache, which was not attempted (see Risks). Budget and verifier added |
| 5 | Final re-measure ×3 and timer inventory | **Done**, 2/3 pass | Run 3 exceeded the slope budget |
| 6 | Story reruns with run IDs | **Done** | `test:shutdown` has one failure in this container that does not involve this branch (below) |

## Defects found and fixed

| Defect | Owner | Commit |
| --- | --- | --- |
| A late `child-process-gone` ("killed") event for a previous child matched the next run by its shared service name. The owner then fired `onCrash` and released the live replacement and its listeners while the child kept running | `desktop/utility-process-customization.mjs` (`isolateUtilityProcessRuns`) | `dc937167` |
| The 10 s whole-system process scan and the 5-minute sample upload/stash ran whenever the hosted config enabled them | `desktop/idle-services-customization.mjs` (`disableProclistService`, `disableProclistPolling`) | `f2490ec1` |
| Rule discovery walked each root once per discovering service. The shared cache entry was deleted as soon as each walk ended | `desktop/idle-services-customization.mjs` (`coalesceNestedDiscovery`) | `f2490ec1` |
| Harness: the listener probe only waited for "ready", so a child that died early surfaced as a 10 s timeout with no cause | `desktop/utility-listener-probe.mjs` | `dc937167` |

## Verification

**Host setup.**
- Node 24.18.0 via nvm.
- `npm ci` and `prepare:desktop` ran as root, because user `ov` cannot read the
  proxy CA under `/root`. The repository was then chowned to `ov`.
- Native runs used user `ov` with a clean environment (`env -i HOME LANG
  PATH`), `xvfb-run` and `dbus-run-session`. A disposable gnome-keyring held
  only fixture secrets.
- Packages installed with apt: `gnome-keyring`, `libsecret-tools`.
- The final build was clean: `source/`, `electron-host/`, `backups/` and
  `build/` were removed, keeping `build/inputs`.
- Host load average was below 0.4 and swap 0 at every idle mark.

**Unit suites (final tree).**

| Command | Result |
| --- | --- |
| `npm run test:idle-memory` | 22/22 pass |
| `npm run test:telemetry` | 38/38 pass |
| `npm run test:build-integrity` | 26/26 pass |
| `npm run test:shutdown` | 35/36. `pty-exec.test.mjs` "reports a missing executable" fails with status `null`. It fails the same way with this branch's changes stashed, as root and as `ov`: a container issue that does not involve this branch |
| `npm run docs:check` | Pass |
| `npm run status:features` | 6 Verified (unchanged) |

**Native runs** (`logs/…`, private). "First" means first attempt. No retry is
counted as a pass.

| Command | Run | Result |
| --- | --- | --- |
| `verify:utility-listeners` | `ssPOl9` | Pass, first run on this host, before any change |
| `verify:utility-listeners -- --baseline-main <pre-ownership main>` | `t3jWrE` | Control: 16 retained listeners for each owner |
| `verify:utility-listeners` (listener-only fix) | `TkjTlZ`, `zN42v8` | **Fail**: stale `killed` crash (the defect) |
| `verify:utility-listeners` (run identity, before the new assertion) | `vWeniQ`, `mij8JR`, `02r0kc` | Pass ×3, consecutive |
| `verify:utility-listeners -- --input-main <listener-only main>` | `7CAQ7k` | **Fail**, as expected: the late-gone assertion catches it |
| `verify:utility-listeners` (final harness, incremental build) | `Idg3CK`, `nrjvZE`, `MkprFo` | Pass ×3, consecutive |
| `verify:utility-listeners` (clean final build) | `AvAYKO`, `rSh4JI` | Pass ×2, first |
| `verify:idle-memory` (pre-change baseline) | `idle-memory-baseline-Lv23NI` | Pass (written before the budget evaluator; evaluated afterwards: pass) |
| `verify:idle-memory` (first attempts, setup) | `idle-memory-baseline-9jjH0z` | Harness environment failure: the provider dialog never closed without a Secret Service and with proxy variables set. Fixed by the host setup above |
| `verify:idle-memory --quick` (setup check) | `idle-memory-setupcheck-wpzbLK` | Pass |
| `verify:process-sampling --control` (pre-change build) | `process-sampling-control-2lp99o` | Control: scan, polling, shard written, 2 refused uploads; main 1.20 CPU s/10 min. An earlier attempt (`EVu9RV`) seeded the override through storage, which test mode ignores; the verifier now passes `--test-dynamic-configs` |
| `verify:process-sampling` (final) | `process-sampling-fixed-iY077x`, `-EaESSc` | Pass ×2, first; main 1.04 / 0.96 CPU s/10 min |
| `verify:startup-traversal` (pre-change build) | `startup-traversal-C8uQIG` | Baseline: 5 preflights, 6 rule walks, 4 `.cursorignore` walks, 2 file lists, 1,520 listings |
| `verify:startup-traversal` (final) | `startup-traversal-VLB0fF`, `-e2Icye` | Pass ×2, first: rule walks 2, listings 1,248 / 1,261 |
| `verify:idle-memory` (final, full) | `idle-memory-final1-9C9sf9`, `-final2-ySWwRq` | **Pass**, first |
| `verify:idle-memory` (final, full) | `idle-memory-final3-VUvCE1` | **Fail**: `iterationPrivateSlopeMiB` 15.7 > 15. Every other budget passed |
| `verify:idle-memory -- --quick --timer-inventory` | `idle-memory-timers-3hzUc8` | Pass; inventory recorded in the idle-memory report |
| `verify:telemetry` | `telemetry-verification-azeSSF` | Pass, first |
| `verify:rules-isolation` | `rules-isolation-w7d8v0` | Pass, first |
| `verify:local-rules` | `local-rules-verification-KMtCEA` | Pass, first (rule creation and discovery after the coalescing change) |
| `verify:global-paths` | `global-paths-ew2Rl0` | Pass, first |
| `verify:explorer` | `explorer-verification-Y0SObh` | Pass, first |

The evidence is in [idle memory](../../performance/idle-memory-linux.md),
[startup traversal](../../performance/startup-traversal-linux.md) and
[utility-process ownership](../../engineering/utility-process-ownership.md).

## Recommendation per story

**OV-1003: not yet Verified on Linux x64.** Remaining Linux gaps:

1. The per-iteration private slope budget failed 1 of 3 final runs (15.7 >
   15 MiB). It needs either a longer series with forced GC in a diagnostic
   build, to separate retention from garbage, or an owner decision on the
   budget with that evidence. It was not raised here.
2. Sandbox preflights (5, target one per root) and `.cursorignore` walks (4,
   target 2) still repeat across extension-host processes.
3. Renderer chat/reasoning retention bounds belong to OV-1001.
4. Profiles holding a cached hosted Statsig bootstrap: process sampling is now
   inert regardless, but other gates from such a cache were not measured.

## Moved to platform/live stories

- Windows `benchmark:native`, `verify:local-startup` and
  `verify:utility-listeners` on Windows.
- macOS idle measurement.
- Owner-host (Hyprland/Wayland) reproduction of the original
  utility-listener timeout.

## Defaults pending owner decision

- Process sampling is disabled even for signed-in optional Cursor accounts.
  It is telemetry, and objective.md keeps telemetry removed. Reversible by
  removing `installIdleServiceDefaults`.
- Rule discovery coalescing window: **2 s** (`coalesceWindowMs`). A discover
  within 2 s of another for the same root reuses its file list. File events
  still reload rules at the path.
- The 5 s polling of absent per-root config paths is accepted as an upstream
  residual (≤ 4 probes per root per second, already budgeted in
  `verify:explorer`).
- Utility processes after the first run of an owner are named
  `${type}-${id}-run<N>` in Electron metrics and process titles.

## Open risks

- The slope budget (15 MiB/iteration) sits just above this host's final runs
  (13.8–15.7). The `Lv23NI` baseline was 6.2, from the same zigzag pattern.
  Expect occasional failures until retention is separated from GC timing.
- Budgets come from two hosts. Time-to-Explorer limits may be tight on a
  slower or loaded machine.
- `--timer-inventory` opens extension-host inspectors on loopback ports for
  the duration of a run. It is off by default and is not used in budgeted runs.
- The proxy-variable and Secret Service host requirements apply to any
  verifier that adds a provider. Other workers report the same.

## Round 2: merged main (19 October 2026, late)

The branch was reset to `origin/main` (`3b97df1e`, all earlier work merged).
Builds were clean rebuilds, with Node 24.18.0 and user `ov` under
`xvfb-run` + `dbus-run-session` with a disposable keyring and no proxy
variables.

**Gaps given.** On merged main, startup traversal measured 1,394 > 1,300
listings, and the memory slope was 15.7 > 15 MiB in 1 of 3 runs.

### Startup traversal: fixed, 3/3

- **Cause (observed).** The OV-103 startup sweep for interrupted Agent-write
  temporaries (`agent-write-durability-customization.mjs`, merged after the
  first round) walked every open root in-process on every activation. That
  is 132 extra fixture listings in the agent-exec host (`DkWJ9H`: 1,398).
- **Correction to round 1.** The `exec:exe` listings are the file watcher's
  crawl, not sandbox-preflight children.
- **Fix** (`508e3674`). The sweep now runs from per-session records in
  profile storage. A walk happens only after an unclean ending; temporaries
  recorded at a clean exit are removed by path; a fresh profile does no work.
  Details are in [startup traversal](../../performance/startup-traversal-linux.md#merged-code-19-october-2026-round-2).
- `verify:startup-traversal`: `UMdGBr` 1,242, `ca7P1K` 1,256, `1L0S88` 1,254.
  **3/3 pass, first attempts**, on a clean rebuild. Budget unchanged.
- OV-103 regression check: `verify:agent-interruption` passed
  (`agent-interruption-H5f6EY`), as did `npm run test:agent-review` (114/114).
  The new session-record tests run real child processes for SIGKILL, clean
  exit, in-flight temporaries and live windows.

### Slope: fixed, 3/3

The settled iteration samples now follow a forced renderer GC. The slope was
6.5, 9.0 and 10.2 MiB per iteration in the three full runs below; the budget
is 15. The renderer climbs evenly by about 7 MiB per iteration, which is the
chat retention.

### Idle CPU: fails 3/3 on this host (host change, shown by A/B)

`idle-memory-round2-1-qqsKOq`, `-2-yOd4xb` and `-3-QtPsrT` each failed only
`idleCpuSecondsPer10Min`:

- renderer 17.4–18.6 against a limit of 15;
- extension hosts 24.8–25.7 against a limit of 20.

Every other budget passed. A/B on this host against the pre-merge build
`fa5f880d` (`ab-old3-VRnMal`, `ab-old4-BTxGzV`, against current
`ab-new1/2/3`, interleaved) gave the same CPU for both builds:

| Build | Renderer CPU s/10 min | Extension hosts CPU s/10 min |
| --- | --- | --- |
| `fa5f880d` | 17.7–17.8 | 24.1–24.4 |
| Current | 17.9–18.5 | 23.6–24.5 |

The same `fa5f880d` build measured 10.5 / 16.7 earlier in this session. The
increase is the host, not the product. The limits were not raised.

### Recommendation

**Hold OV-1003.** Startup traversal and the long-session slope meet their
budgets 3/3 first-time on merged code. The idle-CPU budget cannot pass on the
current host for either build. It needs an owner decision: rerun on a host
comparable to the one the limits came from, or adopt a host-normalized
idle-CPU budget (for example a calibration workload measured in the same run).

### Defaults pending owner decision (added)

- Interrupted-write temporaries are swept from session records instead of a
  walk per start. Temporaries left by the agent-host or daemon writers while
  the agent-exec host exits cleanly fall back to the same-file sweep.
- The forced renderer GC before settled iteration samples is a method change.
  `--no-forced-gc` reproduces the earlier method.
