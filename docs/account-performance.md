# Account routing and stream performance

Measured 15 October 2026 on Windows x64, Node 24.18.0. These changes are in the
editable source build, **not the preview.6 portable payload**. This is a focused
review of model routing, discovery, account polling and chat output ownership;
it does not certify the whole application as leak-free.

## Confirmed problems and fixes

| Producing boundary | Problem | Source behavior now |
| --- | --- | --- |
| Account catalog refresh | Every successful response replaced the provider array, even when unchanged. Its identity invalidated all cached model routes. | Preserve the array when endpoints, credentials, model choices and capabilities are unchanged. Changed tokens/capabilities still invalidate routing. |
| Account host failure | A failed catalog reset its timestamp to zero. Subsequent Agent/tool requests retried the unavailable host individually. | Immediately discard stale routes and apply the existing 30-second automatic-refresh interval to failures too. Explicit Refresh retries immediately; concurrent calls still share pending work. |
| Account streaming | Text and reasoning were sent as SSE and also accumulated in full for a JSON response that would never be sent. | Accumulate only buffered JSON responses. Clear text, reasoning and tool-call references on close. |

The outage problem is repeated request work analogous to N+1, not an SQL query
finding. Recovery can take up to 30 seconds automatically; explicit Refresh
bypasses that delay. Expired or removed routes never fall back to another account.

## Before/after measurements

The baseline is commit `ce28e244ac03e24382844baab91e320572de13b0`. Each version
runs identical production modules in a new child process, interleaved across
three repetitions. Workers have no children, so their process-family peak is the
single worker's peak RSS. The runner's own memory and the Electron process tree
are excluded. Controlled IPC returns cloned model catalogs; the stream sink
consumes and discards output. No provider request, inference or model token use
occurs. Agent orchestration tokens were not measured.

The catalog workflow loads once (cold), then performs 50 unchanged forced
refreshes and selected-route lookups (warm). A separate phase fails one forced
refresh, then performs 100 automatic refresh/lookups. Refresh cloning and JSON
comparison remain included; actual IPC/process-start costs are not simulated.
The stream workload keeps four sessions active after each emits 3 MiB of mixed
text/reasoning, within the existing 4 MiB per-session limit, then closes them.

Values below are medians of three runs. Heap growth is sampled JavaScript heap,
not an allocation total or guaranteed peak. Retained heap uses forced GC. CPU
time includes GC and all worker threads; short Windows samples can report zero
at the available accounting precision.

| Completed workload / metric | Baseline | Candidate |
| --- | ---: | ---: |
| 25-model cold load / elapsed | 2.18 ms | 1.91 ms |
| 25-model cold load / CPU | 0 ms | 0 ms |
| 25-model warm / elapsed | 8.27 ms | 6.15 ms |
| 25-model warm / CPU | 15 ms | 0 ms |
| 25-model warm / sampled heap growth | 1.06 MiB | 1.03 MiB |
| 25-model worker / lifetime peak RSS | 48.29 MiB | 47.84 MiB |
| 10,000-model cold load / elapsed | 41.48 ms | 41.05 ms |
| 10,000-model cold load / CPU | 47 ms | 109 ms |
| 10,000-model warm / elapsed | 1,718.56 ms | 1,300.26 ms |
| 10,000-model warm / CPU | 1,953 ms | 1,297 ms |
| 10,000-model warm / sampled heap growth | 173.46 MiB | 129.38 MiB |
| 10,000-model worker / lifetime peak RSS | 301.94 MiB | 227.23 MiB |
| Unchanged refreshes / route rebuilds, either catalog size | 50 | 0 |
| Outage phase / catalog queries, either catalog size | 101 | 1 |
| Four active streams / retained heap increase | 12.57 MiB | 0.20 MiB |
| Four active streams / sampled heap growth | 23.26 MiB | 2.28 MiB |
| Stream workload / elapsed | 74.99 ms | 65.95 ms |
| Stream workload / CPU | 94 ms | 93 ms |
| Stream worker / lifetime peak RSS | 84.71 MiB | 52.56 MiB |

Cold 10,000-model CPU varied from 16–109 ms before and 109–110 ms after;
this pass does not establish cold-start or stream CPU improvement. Warm stress
elapsed ranged 1,614.21–1,732.94 ms before and 1,285.86–1,310.44 ms after;
warm CPU ranged 1,672–2,220 ms and 1,281–1,422 ms respectively. The stress case
is not a typical account catalog. Lifetime RSS covers cold, warm and outage
phases together, not the warm phase alone. Four-stream wire byte counts matched
at 14,254,900 bytes; protocol content equivalence is checked separately below.

Authoritative local evidence: `logs/account-performance-rDsDzT/result.json`.
It contains all 18 samples and SHA-256 digests of the production modules,
benchmark runner and worker. Earlier exploratory runs remain local and are not
the table's source. Reproduce with:

```sh
npm run benchmark:accounts
# Optional: choose another baseline Git commit containing the same modules
npm run benchmark:accounts -- ce28e244ac03e24382844baab91e320572de13b0
```

## Verification and remaining work

The account suite passed **66/66 tests**, zero skips. New regression coverage
checks unchanged routing identity, credential/capability invalidation, immediate
stale-route removal, automatic cooldown expiry, explicit retry, streamed/buffered
text and reasoning through tool continuation in either response mode, and
output-budget cancellation. Existing ownership, four-session capacity,
disconnect cancellation, profile switching and account UI checks still pass.
Provider/routing checks passed 35/35; desktop syntax and source build passed.
These controlled checks do not establish live Codex/Claude inference success.

Source inspection also found existing bounds: discovery uses three workers and
shares pending requests; auth status has a 10-second cache; usage has a
five-minute cache with a 30-second forced-refresh floor; status-bar refreshes
coalesce; provider settings mount 40 rows; Project Home mounts 18 per page;
the workbench batches streaming and virtualizes conversation rows. Context and
filesystem measurements remain in the [earlier performance reports](performance.md).

The utility-process concern was subsequently reproduced and fixed:
[native listener ownership verification](utility-process-ownership.md) observes
16 retained completed-run listeners in the control and zero in the candidate,
for both native utility owners. Real kill and window-close checks also pass.
Process-family snapshots do not establish a whole-app RAM saving; OV-1003 still
requires long-session/repeated application-service restart measurements.
Long sessions, named profiles, large projects, extension-host memory, and native
macOS/Linux account execution remain outside these measurements.

No whole-app RAM reduction or model-token saving is claimed. The historical
approximately 2.1 GiB application workload has not been remeasured here. All
checks ran locally; GitHub Actions remains disabled. The fixed story ledger
remains **6/42 Verified (14.29%)**.
