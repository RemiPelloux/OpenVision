# Agent workspace context: bounded memory and shared Git reads

13 October 2026. This change targets the recovered Agent executor's workspace
context collector. It reduces eager work and repeated Git queries; it does not
establish an application-wide RAM reduction.

## Behavior

Previously the collector created a promise chain for every workspace folder at
once. Each folder without tracked Git state also requested status and branch,
even when several folders resolved to the same repository.

The collector now uses three workers. It shares one status/branch promise per
exact repository path within a collection. The next collection reads fresh Git
state, and tracked-state results still take precedence for their own folder.
Folder order, individual output rows, remote metadata, missing repositories and
unknown status on Git failure retain their existing meaning.

Background warmup also uses three workers, starts only on demand, and shares an
active batch across nonblocking requests. It creates no promise/closure queue
per folder. Disposing the context stops queued work; already started operations
retain their existing ownership until they settle. Foreground workers also drain
their active operations before reporting a failure. No new timers, permanent
repository cache, startup scans or extra processes are introduced.

The limit applies per collection or background batch, not globally across all
conversations. Existing Git timeout/cancellation behavior is retained; a timed-out
adapter does not prove its operating-system process has exited. Very large sets
of independent repositories trade parallel throughput for lower resource bursts.

## Reproducible measurement

Run `npm run benchmark:context`. It exercises the recovered collector before and
after customization with 2,000 folders across 20 exact repository paths. Both runs
use synthetic asynchronous Git readers, return all 2,000 rows, and validate their
order/status/branch. Node 24.18.0, Windows x64; explicit GC before each measurement.

| Measured workload | Before | After |
| --- | ---: | ---: |
| Status and branch reads | 4,000 | 40 |
| Peak active synthetic reads | 4,000 | 6 |
| Sampled JavaScript heap growth | 17.82 MiB | 2.01 MiB |
| Elapsed collection time | 23.98 ms | 4.20 ms |

These are single local observations. Heap is sampled at reader entry and after
collection, not an exact peak. The benchmark excludes real Git process costs,
Electron/GPU memory, network providers and native macOS/Linux performance.
Raw output remains local in `logs/context-performance.json`.

## Evidence and verification

REA parent evidence:
`ev_111c3e0b2b0d99e0848bda3dc0db93ae7ccf9b36bba9615882319ee160f3647d`.
The exact pre-change `Nc` class was extracted from the prepared Agent executor:
source SHA-256 `54a7b42514fdc1c0e699b4d5a82ea83e172fbca2ef78392eb9ec68256a78d43d`,
UTF-16 range `[3204237, 3225312)`. REA parsed one slice, 2,453 AST nodes; dependencies
were excluded and semantic coverage remains unknown. This is static evidence of
the prepared OpenVision artifact, not original-product parity or runtime proof.
Local provenance is retained in `logs/rea-context-work/provenance.json`.

`npm run test:context-work` exercises the real recovered class with controlled
Git boundaries: fresh per-collection reads, repeated roots, tracked state,
missing repositories, failed-read retry, cold foreground/background bounds,
background coalescing, disposal, active-work cleanup, idempotent customization
and rejection of changed source owners. Existing context tests retain edit
invalidation and stale-cache/disposal coverage. No whole acceptance story gains
Verified status from this optimization.

The desktop suite (73 existing tests), five owned-process tests, eight context
tests, feature-status check, syntax checks and desktop build pass locally.
The native Windows Agent run `logs/agent-verification-9RhzjT/result.json` passes
streaming, Read, multi-file edit keep/undo, command approval/denial/cancellation
and process-restart conversation restore against a local HTTP fixture. Command
Stop took 164 ms; provider-stream Stop took 107 ms. Both owned Electron hosts
exited successfully. The run records the new helper and Agent source hashes.
It is a workflow regression check, not a native multi-repository RAM benchmark.
