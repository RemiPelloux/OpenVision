# Utility-process listener ownership

Verified 15 October 2026 on Windows x64, Electron 42.10.0 (embedded Node
24.18.1); verifier Node 24.18.0. This fix is in the editable source build,
**not the preview.6 portable payload**.

## Reproduced problem and fix

The native utility owner registered seven child/process/stream listeners and
its handshake subscription with its lifetime disposable store. Window-bound
workers added two window/lifecycle subscriptions to that same lifetime store.
Exit cleared the process reference but left these subscriptions attached.
Reusing either owner accumulated completed-run listeners until owner disposal.

Each owner now has a reusable disposable store for its current process run.
Exit/crash clears that store, including stdout/stderr and window subscriptions.
A successful `kill()` requests termination; ownership remains until Electron
reports the terminal event. Failed kills also retain ownership. A replacement
cannot start over a process whose termination is still pending. Listener limits
are unchanged. The build transformation rejects changed contracts, keeps a
content-addressed original backup and is idempotent.

## Native before/after evidence

The verifier exposes the actual bundled Base and Window utility classes in a
disposable runtime overlay. Each owner forks a small real Electron utility,
waits for its message, requests natural exit and repeats 16 times. Attribution
uses the exact registered listener functions, avoiding unrelated application
listeners. Child, stream and window subscriptions are checked separately.
The lifecycle-service adapter is controlled; it does not prove an actual
application reload. The window-close case does destroy a real owned BrowserWindow.

| Equivalent natural-exit workload | Control | Fixed |
| --- | ---: | ---: |
| Base owner, completed-run app listeners after 16 cycles | 16 | 0 |
| Window owner, completed-run app listeners after 16 cycles | 16 | 0 |
| Base owner elapsed / main-process CPU | 2,201.15 / 1,157 ms | 2,092.02 / 1,251 ms |
| Window owner elapsed / main-process CPU | 1,607.48 / 282 ms | 1,493.32 / 280 ms |
| Base owner, largest cycle-sampled main RSS | 251.85 MiB | 249.38 MiB |
| Window owner, largest cycle-sampled main RSS | 236.25 MiB | 237.44 MiB |

One fresh-profile run per version; OS caches were not controlled. Each Base
phase includes startup activity and each Window phase follows the Base phase.
This establishes cleanup, not a statistically supported speedup or RAM saving.
The control emitted `MaxListenersExceededWarning` for app and window listeners;
the candidate did not. Both native hosts exited with code 0.

After every fixed natural exit, child event listeners, stdout/stderr data
listeners and owned window/lifecycle subscriptions were zero. Additional
candidate checks passed for a controlled failed kill, a real successful kill,
replacement refusal before exit, and actual window-close termination. The
failed-kill branch is controlled on the owned child instance; real OS kill
failure modes were not reproduced.

Two Windows process-family snapshots bracketed each complete probe:

| Snapshot | Control private / summed working set | Fixed private / summed working set |
| --- | ---: | ---: |
| Before cycles | 1,441.04 / 1,869.06 MiB | 1,428.77 / 1,864.59 MiB |
| After cycles | 1,985.69 / 2,560.08 MiB | 1,987.88 / 2,560.18 MiB |

These are snapshots, **not process-family peak memory**. Candidate snapshots
include the extra kill/window-close cases. Private bytes measure committed
private memory; summed working sets can double-count shared pages. Startup
continues during the workload. No whole-app memory reduction follows from
these numbers; the roughly 2 GiB resource concern remains open. Process-family
CPU, continuous peak memory, long-session growth and orchestration tokens are
unmeasured. No AI inference or model tokens were used by this listener probe.

Authoritative ignored local records:

- Control: `logs/utility-listeners-Z0A9Du/result.json`.
- Candidate: `logs/utility-listeners-fUNjhn/result.json`.
- Input control main SHA-256: `ee499c4e5151778618d407eb86ab1cd7e4058423e0ce2b5dbd6993225aec2b3e`.
- Fixed main SHA-256: `c1b141a77b516e8fc3e317a43621871468e5e34d1c46a2fdc11bef7e6a476b2d`.

Records bind the verifier/probe and instrumented main digests to parent commit
`e86828253cb0a47275a87f3d7ebe49d5b62526f3` plus this uncommitted patch at run
time. Normal runtime bytes were unchanged by verification. Initial harness
runs exposed null streams after exit and unrelated app/window listeners;
stream references and exact listener identity fixed those measurement errors.
Those earlier runs are not the table's source.

Reproduce the candidate with `npm run verify:utility-listeners`. The control
accepts `--baseline-main <unpatched-main.js>` and must reproduce 16 retained
listeners for each owner. Retain a matching pre-fix main locally; no runtime
bundle is committed by this change.

## Regression scope and remaining work

Six shutdown/transformation tests pass, along with desktop syntax and the
source build. Native Windows development verification passed real cmd and
PowerShell terminals, resize/restart/cancel, task problem matching and process
tree cancellation, Node debugging break/step/continue/stop, final state save and
code-0 shutdown: `logs/development-verification-ZyD9ic/result.json`.
Native MCP ownership verification also passed all six assertions: shared
transport across project windows, isolated same-named servers across separate
user-data hosts, sibling survival and final child cleanup, with unchanged normal
utility bytes. Evidence: `logs/mcp-ownership-verification-uqPDnZ/result.json`.
MCP uses controlled AI/transport fixtures; it does not establish live inference
or an absence of other application diagnostics.

Long sessions, actual repeated reloads of application services, extension-host
and language-server retention, named profiles, large projects and native
macOS/Linux remain outside this result. The fixed acceptance ledger remains
**6/42 Verified (14.29%)**. All checks run locally; GitHub Actions stays disabled.

## Linux x64 (19 October 2026): stale "gone" events and the timeout

Story OV-1003, Linux x64 only (4-CPU container, Xvfb, Node 24.18.0, clean
source build of the 3.21.13 runtime). Windows rows above are unchanged.

**Reported failure.** On the owner's Linux host, `verify:utility-listeners`
timed out after 10 s while waiting for the first Base-owner child's "ready".
That run was **not reproduced** here. The first run on this host passed
(`utility-listeners-ssPOl9`). Entry-point resolution was checked:
`bootstrap-fork.js` and the probe resolve inside the overlay's own `out/`
(hard links plus a real directory). This host's evidence does not identify
the owner host's cause.

**Defect found (observed).** Two of three later runs failed on the build that
had only the listener-ownership fix (`TkjTlZ`, `zN42v8`). The failure was
`Utility crash before ready` in the window-bound phase:
- The crash reported `code 15, reason "killed"`, carrying the pid of the
  *previous* child, the one the kill test had just ended.
- Electron's `child-process-gone` details carry no pid. The owner matches its
  child by service name, and that name is `${type}-${id}` for every run of one
  owner.
- The late "gone" event of the killed child therefore reached the next run's
  listener. That listener fired `onCrash` and released the live replacement:
  it cleared the process reference and the run's listeners while the child kept
  running.
- With the original probe, which waited only for "ready", the same race
  leaves the replacement unowned, so its exit is never reported (an event
  timeout). Inferred: this is one way to get the reported timeout; it is not
  shown to be the owner host's cause.

**Fix.** `isolateUtilityProcessRuns` in
[`utility-process-customization.mjs`](../../desktop/utility-process-customization.mjs):
- The first run of an owner keeps the upstream service name. Each later run is
  named `${type}-${id}-run<N>`, so a late event can only match the run it
  belongs to.
- Process-role names used by the samplers (`extensionHost…`, `…watcher…`)
  keep their prefixes.
- The transform has its own marker, requires the listener-ownership transform,
  and checks the `doStart` name, `serviceName: t` and the listener's
  `.name === n` match. On drift it fails the build.

**Harness changes.**
- The probe now races "ready" against the run's exit and crash. A child that
  dies before "ready" fails at once, with the owner's own log (through a
  recording logger) and the child's stdout/stderr (through the owner's
  emitters, not extra stream listeners).
- After the kill test, the probe starts a replacement and waits 2 s. It then
  asserts `replacementSurvivesLateGone`.
- The verifier passes the Linux sandbox arguments like the other Linux
  verifiers. It records the Node version, display type and whether
  `NODE_OPTIONS` was inherited (values are not recorded). It accepts
  `--input-main <main.js>` to run the fixed-build assertions against another
  `main.js`.

| Run (`logs/utility-listeners-*`) | Input | Result |
| --- | --- | --- |
| `t3jWrE` | `--baseline-main` (pre-ownership main) | Control reproduced: 16 completed-run listeners for each owner |
| `vWeniQ`, `mij8JR`, `02r0kc` | Fixed build, before the late-gone assertion | 3/3 pass, consecutive |
| `7CAQ7k` | `--input-main` with the listener-only fix (no run identity) | **Fail**: the stale `killed` event reached the replacement |
| `Idg3CK`, `nrjvZE`, `MkprFo` | Fixed build with the late-gone assertion | 3/3 pass, consecutive: 0 listeners after each natural exit, replacement survives |

Windows and macOS runs of this verifier move to the platform stories.
