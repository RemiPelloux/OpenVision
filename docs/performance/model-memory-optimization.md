# Model catalog memory and repeated-work optimization

13 October 2026. Scope: OpenVision's custom-provider routing, discovery and model
settings. These changes reduce measured catalog work; they do not establish an
application-wide RAM reduction or eliminate every repeated operation in the IDE.

## Changed ownership and work

- Route lookups share one immutable index per storage owner and exact saved
  configuration revision. Changing URLs, enabled models, provider ordering or
  deleting a provider replaces the index. Malformed data fails without serving
  the old index. Weak ownership avoids a global cache retaining closed stores.
  Parsed full catalogs and API keys are not cached; keys are read per request.
- Autocomplete builds at most 41 lightweight model summaries plus its Off option.
  It no longer constructs/retains reasoning variants for every catalog model.
  Search updates are batched to animation frames and skip detached controls.
  Deduplication happens before expensive native catalog materialization.
- Settings pagination counts matches while keeping only the current 40 rows,
  instead of allocating complete filtered arrays. It normalizes the query once
  per render. Search still examines all candidates so every model is reachable.
- Missing-capability refresh uses three workers and persists/publishes the
  combined catalog once after the batch, including successful partial results.
  Previously each provider completion serialized and rebuilt the combined list.
  Concurrent refreshes share pending work; failed requests are released for retry.
  Separate providers still require separate authenticated discovery requests.
- Manual-model merging uses a set of discovered IDs instead of scanning the
  discovered array for every manual model. Responses for removed/replaced
  providers are rejected, including changes during credential lookup.

## Measured workload

Run `npm run benchmark:models` with the pinned Node 24.18.0 runtime. The workload
uses 10,000 enabled models with five reasoning variants each and 100 operations
per measurement. It includes the initial cold route lookup. Explicit GC brackets
the measurement; heap samples occur after each operation and are not exact peaks.

Baseline: commit `851aaf2`; optimized result: this change. Both ran locally on
Windows with the same Node executable and workload. Raw records remain in ignored
`logs/model-performance-before.json` and `logs/model-performance-after.json`.

| Workload, 100 iterations | Before | After |
| --- | ---: | ---: |
| Selected-route elapsed time | 1,232 ms | 15 ms |
| Selected-route sampled heap growth | 30.00 MiB | 6.01 MiB |
| Enabled-ID elapsed time | 1,703 ms | 3 ms |
| Enabled-ID sampled heap growth | 65.07 MiB | 7.98 MiB |

The route cache retains approximately **0.76 MiB** in this synthetic workload,
trading a small current-revision index for repeated parsing/allocation. It keeps
no revision history. Timings are single local observations and will vary; the
measurements describe JS heap work, not the Electron process tree or GPU memory.

## Verification

Six focused production-boundary tests verify revision invalidation, duplicate
precedence, fresh secrets, malformed settings, bounded summaries without touching
reasoning capabilities, three concurrent discovery requests, one batch write and
publication, partial failures, coalesced requests and stale provider rejection.
For eight providers, the test observes eight necessary discovery calls but just
one combined persistence/publication. A repeated settled batch performs no work.

The desktop suite passes 73 tests. The 10,000-model browser check passes search,
pagination, toggling, selection preservation and DOM bounds. The native Windows
autocomplete run `completion-verification-nTq5cP` passes authenticated single and
multiline Unicode insertion, Tab acceptance and undo. The native Windows Agent
run `agent-verification-B51thD` passes authenticated streaming, a single submit
without an auxiliary title request, Read-tool continuation and upstream Stop
cancellation (138 ms against the local HTTP fixture). External-provider behavior
and native macOS/Linux memory measurements remain unverified.
