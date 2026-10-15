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
