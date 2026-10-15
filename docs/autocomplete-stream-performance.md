# Autocomplete and stream performance review — 15 October 2026

This review fixes two reproduced allocation problems. It also rechecks the
existing discovery, account-refresh and repository-read N+1 protections.
It does not establish that the whole application is free of memory leaks.

## Fixed: document work before autocomplete debounce

The recovered autocomplete preparation method materialized the document and
executed its before-read hook before the local provider checked debounce.
Discarded keystrokes could therefore repeat document allocations and hook work,
even though their inference request would never run.

Local mode now checks the existing debouncer before preparation. After waiting,
it verifies cancellation, model identity, disposal and document version. A
discarded generation is aborted and removed from the owner's stream records.
The later dispatch check remains: a slow hook can become superseded too.
Hook permission denial, large-file guards and nonlocal behavior are preserved.
Both desktop and Glass transforms execute against the recovered methods in tests,
including the recovered debouncer with a controlled clock.

## Fixed: unbounded unfinished Agent SSE events

The reasoning observer retained partial lines and multiline event data without
a capacity bound. Its old partial-line scan also repeatedly traversed an
ever-growing string. An invalid stream could keep allocating until termination.

The observer now counts raw bytes before decoding, allows at most **4 MiB per
event including delimiters**, and decodes in blocks of at most 64 KiB. Bounded
line fragments avoid repeatedly copying or scanning an unfinished line. Both
LF and CRLF delimiters reset the event budget, including split delimiters.
Total response size is unrestricted; coalesced chunks containing many valid
events may exceed the per-event budget. Raw bytes still pass through unchanged.

Overflow reports `OPENVISION_PROVIDER_STREAM_LIMIT`, cancels the upstream reader,
clears parser state and releases its lock. This remains a provider failure through
the existing error boundary. Real HTTP tests observe the connection closing.
The limit deliberately rejects a legitimate individual event larger than 4 MiB;
it is not a 4 MiB limit on total process memory or total generated output.

## Measurements

Run `npm run benchmark:preparation` with the pinned Node 24.18.0 toolchain.
Baseline stream runtime: `30eaa08411bad9db3bddf4e8d52a3ab8f3af5cda`.
The preparation comparison uses the original recovered method and the same
method with the new guard. Separate sequential workers run on Windows x64.

The typing fixture completes 101 simultaneous triggers, with one winner. Its
editor boundary materializes approximately 0.5 MiB from lines on each read; its
hook hashes the content. It uses a controlled debounce decision and no external
hook process. Counts describe document/hook work and `runCpp` entries, **not 101
paid model requests**. Cold below means the first measured execution after
module/fixture loading; warm means the second execution in that worker.

| Completed workload | Phase | Elapsed ms, before → after | CPU ms, before → after | Sampled heap growth MiB, before → after |
| --- | --- | ---: | ---: | ---: |
| Typing burst | Cold | 80.45 → 6.97 | 78 → 0* | 55.32 → 2.27 |
| Typing burst | Warm | 78.84 → 4.39 | 78 → 0* | 55.07 → 2.14 |
| Valid 8.88 MiB SSE response | Cold | 57.65 → 61.70 | 109 → 94 | 34.63 → 34.66 |
| Valid 8.88 MiB SSE response | Warm | 19.91 → 26.00 | 16 → 16 | 32.00 → 32.04 |
| Invalid unterminated stream | Cold | 452.26 → 6.41 | 563 → 0* | 316.07 → 5.37 |
| Invalid unterminated stream | Warm | 448.17 → 5.47 | 453 → 31 | 429.76 → 5.35 |

The typing burst performs **101 → 1 document reads and hook calls**. The valid
response forwards the same complete bytes in both versions; the additional
budget checks add about 6 ms in this warm sample. The invalid-stream comparison
is intentionally a changed failure policy: the baseline consumes the whole
16 MiB fixture, while the candidate rejects at the first crossing chunk
(4.0625 MiB supplied). It is not equivalent successful processing of 16 MiB.

Worker lifetime peak RSS was 690.65 → 418.28 MiB, including large recovered-source
parsing and all three workloads. These workers have no child processes; their
process-family peak equals their single-process peak. This is not an IDE RAM
measurement. Heap growth is sampled, not an exact allocation/peak trace.
Retained-heap deltas are in local JSON reports but are noisy, including delayed
collection of source ASTs; no retained-heap saving is claimed. `0*` CPU readings
reflect coarse process-clock resolution, not zero CPU work. These single-run
samples do not establish a general throughput improvement. Agent/model token
usage, external hook costs and whole-app CPU/private memory remain unmeasured.

Local raw results: `logs/preparation-performance-wWdbiK/result.json` (ignored).

## Verification

- Final focused run: **43 tests passed**, with no failures or skips, covering
  preparation, stream limits, reasoning runtime, model/account work and context.
- Recovered preparation/debouncer, cancellation, model replacement/disposal,
  permission denial and transform idempotence tests pass for both variants.
- Stream tests cover UTF-8 splits, exact capacity boundaries, multiline events,
  large/coalesced valid responses, split CRLF, EOF, cancellation failure and a
  real HTTP disconnect on overflow.
- Existing N+1 tests pass: discovery shares concurrent requests and writes once;
  failed account refreshes coalesce retries; context collection reads each exact
  repository once and bounds active folder work.
- Desktop syntax and source build pass. Native Windows autocomplete verifies
  acceptance, undo, partial editing, typing/Escape/file-switch cancellation.
  Native Agent verifies a single submit request, no auxiliary title request,
  tool continuation, multi-file edits, restart/resume and upstream cancellation.
  These native checks use controlled local HTTP providers, not external accounts.
- Additional provider-error policy/body suites could not initialize: their
  original recovered Agent execution fixture is absent from this checkout.
  No passing result is claimed for those suites. Native macOS/Linux and the
  published portable package were not verified or updated in this pass.

Native result files (ignored):
`logs/completion-verification-KoXGqH/result.json` and
`logs/agent-verification-OfQKil/result.json`. The final Agent run completed with
both owned hosts exiting successfully and observed upstream cancellation in
93 ms. The installed Agent helper matches `desktop/agent-runtime.cjs`:
SHA-256 `336726b33495436623578e485c4428e2b9a64faa580f8b56ce98714a4a741443`.

## Remaining review findings

1. **Control plane, source-observed:** `src/rea.mjs` collects subprocess stdout
   and stderr without byte limits. Its 32-entry cache bounds entry count, not
   retained bytes; expired results remain until replaced. This is a separate
   optional control-plane service, not the native editor Agent request path.
2. **Control plane, source-observed:** `src/mcp.mjs` rejects timed-out requests
   without aborting their effective transport signal. Slow responses may continue
   consuming resources after the caller has received a timeout. This is separate
   from the native IDE MCP lifecycle already covered by its own verifiers.
3. **Agent session retention:** reasoning-to-tool associations intentionally live
   for the provider session to support retry/branch replay. Arbitrary count-based
   eviction would break earlier branches. Long-session memory and an explicit
   persisted-history ownership strategy need separate measurements.
4. **Discovery cleanup, source-observed:** a non-success `/models` response exits
   without explicitly cancelling its body; it has a timeout but does not bind
   cancellation to renderer lifetime. Reproduce connection retention before
   claiming a leak or changing its lifecycle.

These remaining items were inspected in source, not reproduced as native RAM
leaks, and are not marked fixed by this change.

## Subsequent verification and control-plane fixes

The [provider fixture restoration](provider-failure-handling.md#recovered-fixture-restoration-follow-up)
resolved the initialization blocker above; all 25 provider-error/body/UI/probe
checks now pass against the authentic recovered owners. The earlier failed
initialization remains historical evidence, not the current verification state.

The [control-plane HTTP follow-up](control-plane-http-resources.md) fixes finding
2 at its request/response owners. Deadlines now abort actual HTTP work, JSON/SSE
and error bodies have decoded-byte bounds, matched SSE replies finish before EOF,
and browser disconnects cancel upstream work. Actual socket/subprocess tests and
scoped benchmarks establish those results. Finding 1, session retention and
discovery cleanup remain open; whole-app RAM and native platform coverage are
not established by these local HTTP checks. No full story is promoted.
