# Rust gains and performance acceptance

**15 October 2026 · proposed measurement protocol; no Rust measurements yet.**
The [roadmap](rust-roadmap.md) owns sequence and points; the
[component audit](rust-component-audit.md) owns rewrite/retain recommendations.

## Expected gains, with their limits

| Change | Likely benefit | What must be measured / what remains |
| --- | --- | --- |
| Native shell/editor replacing Electron | Largest structural opportunity for lower idle RAM and smaller base runtime | Full process family, including required JS host/webviews. Toolkit, accessibility and editor parity can change the result |
| Rust workspace/index services | Less allocation/copying, bounded CPU jobs and predictable service lifetime | Index build/update latency, relevance, peak memory, scan/read counts; parallel indexing can increase peak RAM |
| Shared versioned file/Git facts | Fewer N+1 reads/process launches and duplicate scans | Completed multi-root Agent/edit workload; cache freshness, rename/branch invalidation and failure behavior |
| Incremental text/edits and IPC | Smaller per-edit work, fewer full-document copies | Typing-to-paint tails, actual bytes copied/sent, large-file edits and undo; IPC serialization can erase the gain |
| One bounded stream/context owner | Lower retained buffers, prompt duplication and cancellation lag | Long-session memory, equivalent prompt tokens, retries and actual upstream disconnect; total conversation state still needs storage |
| Lazy external services and paged UI/history | Lower idle costs and fewer eager allocations | First-use latency, reopen behavior and post-close resource release; loading on demand trades startup for activation cost |
| Rust provider/account adapters | Better ownership and consistency | No inherent improvement to remote model inference, rate limits, subscription quota or network latency |
| Retaining Git/SQLite/ripgrep/language servers | Avoid duplicating already native work and compatibility risk | Their costs stay in app-level totals; only orchestration savings belong to the rewrite |

There is no measured Rust speedup, RAM reduction or token-saving percentage to
publish now. Safety improvements can justify a change without a speedup, but must
be described as such. Optimizations such as bounded caches and fewer requests
can also ship in the current app before the rewrite.

## When gains can arrive

This maps benefits to the roadmap gates; it does not assign a speedup to a
language. Each candidate must beat the optimized current implementation on the
same completed workflow, with required integrations enabled.

| Stage | Benefit eligible for measurement | Costs still present |
| --- | --- | --- |
| B · first service preview | Fewer scans/reads, bounded work queues, lower service CPU or peak allocation | Existing shell/editor plus temporary bridge/IPC overhead |
| C · core preview | Paged state, shared context, fewer duplicate requests, prompt cancellation and lazy services | Existing renderer, extension hosts, language servers and provider execution |
| D · desktop preview | Startup, input/render latency, idle and active whole-app RAM after replacing the shell | Chosen toolkit, required JS compatibility/webviews and external tools |
| E · production cutover | Install/package size, independent startup, sustained resource bounds and release reliability | Supported platform dependencies and any declared compatibility runtime |

Memory gains cannot be added across rows: components can share pages, buffers and
work. A faster service can also increase total memory during migration if its old
owner remains active. Report the whole-app total alongside service measurements.

For AI cost, measure requests and provider-reported tokens separately from local
CPU/RAM. Deduplication and smaller equivalent context can reduce paid work; merely
porting an identical prompt to Rust cannot. Caching must include account, endpoint,
model, reasoning configuration, document/workspace generation and other
result-affecting inputs. Never reuse credentials or paid responses across accounts
or omit tool/reasoning state required for a correct continuation.

Use a stage report with baseline/candidate identities, completed task assertions,
elapsed/CPU cost, peak process-family memory, request/token counts, absolute and
relative deltas, variation, and unmeasured metrics. A regression or unknown remains
visible even when another metric improves. There is no aggregate “blazing fast”
gate that can substitute for these individual results.

## Evidence already available

The [13 October Windows baseline](native-performance-baseline.md) recorded a
5,027 ms fresh-profile titlebar and a 3,588 ms same-profile restart, plus roughly
2.1–2.7 GiB private committed memory across recorded workload snapshots. These are
historical observations of the current architecture, not the latest post-fix
build, clean cold-OS results or a Rust comparison. Private committed bytes are
not unique resident physical RAM; summed working sets can count shared pages twice.

The [autocomplete/stream report](autocomplete-stream-performance.md) shows real
current-source improvements and a parser tradeoff: 101 simulated typing triggers
produced 101 → 1 document reads/hooks, while the valid stream benchmark became
slightly slower after adding bounded parsing. These are controlled local
measurements, not 100 saved paid requests or whole-app RAM savings. A large worker
RSS value includes recovered-AST parsing and is not the desktop's memory usage.

Re-baseline against the optimized source used for each Rust candidate, with its
actual build digest. Comparing Rust only with an older, less optimized artifact
would attribute unrelated fixes to the language. Native Linux evidence exists for
the [declared current-runtime scope](linux-verification.md); the Windows sampler
does not establish Linux/macOS process-memory results.

## Required workload matrix

Pin fixture versions, file contents, query lists, extension/server/client versions,
model configuration and network conditions. Use at least small, medium and large
projects; publish exact file counts, byte sizes, language mix, generated/ignored
content and file-size distribution rather than naming sizes without definitions.

| Workload | Required observations |
| --- | --- |
| Fresh profile, restart and idle | Launch → usable project/editor, CPU, memory, process count; distinguish new profile, app-cold, warm and OS-cache conditions |
| Project open/switch/clone/multi-root | Explorer readiness, watcher/read counts, first search and memory after closing; deterministic local Git remote for clone |
| Typing and large files | Input-to-paint and input-to-completion p50/p95/p99, edit/undo correctness, allocations and IPC bytes |
| Search and indexing | Cold index build, warm search, incremental edit/rename/delete/branch update, relevance and cancellation |
| Agent/Quick Edit | Same file/context/tool sequence, exact edits, request/prompt-token counts, approvals, retries, Stop and session replay |
| Long histories/model catalogs | Visible UI latency and memory with paged chats and large catalogs; account switch must not retain previous session resources |
| Terminal/tasks/LSP/DAP/extensions | Interactive responsiveness and full process-family cost with the declared integrations actually enabled |
| Repeated use and faults | Open/close cycles, a long active/idle session, malformed input, interrupted saves, denied access, crash, offline provider and failed child cleanup |
| Installation and update | Package/install size, launch dependencies, upgrade/rollback, migration restore and supported-platform native checks |

Use controlled local providers to isolate local dispatch/stream overhead. Label
them fixtures. Run a separate live-provider/account check when quota and account
eligibility permit; record provider/model and actual token counts without exposing
credentials. Do not count mocked usage as real provider billing evidence. A live
provider comparison is too variable to establish local CPU gains on its own.

## Sampling and fair comparisons

1. Pin old/new commits, release build flags, dependency locks, hardware, OS,
   power mode, display scale, accessibility settings and enabled features.
2. Repeat the same completed task with the same assertions. Alternate run order
   and separate warmup from samples; report sample count and variation. A suggested
   starting protocol is ten startup runs and five full workload repetitions per
   candidate, increasing samples when noise prevents a reliable decision.
3. Measure elapsed and CPU time plus sampled peak process-family memory, including
   Rust core, UI, Node extension hosts, webviews, official clients, language
   servers, fixture overhead and tools. Identify each category; present totals
   both with and without separately measured harness overhead.
4. Track owned process identity using birth time/OS handles and ancestry, not
   a PID/path alone. State sampling interval, short-lived process blind spots,
   reparenting limits and whether a reported peak is only a sampled lower bound.
5. On Windows report private committed bytes and resident working sets separately.
   On Linux report available RSS/PSS with shared-page semantics. On macOS use
   appropriate process footprint measurements and label non-equivalent metrics.
   Compare candidates within each platform, not raw cross-OS totals.
6. Record per-edit reads, scans, process starts, cache hits/misses/bytes,
   queue/backlog size, IPC volume, network requests/retries and prompt/output
   tokens. Mark unavailable metrics unknown; never infer tokens from bytes alone.
7. Test idle release and repeated cycles without forced trimming/GC. Investigate
   sustained post-settle growth; allocator caching is not automatically a leak.
   Keep raw non-sensitive results local and publish reproducible summaries.

The Windows sampler needs a continuous/interval peak strategy beyond its older
snapshot baseline; Linux/macOS need native instrumentation. Measuring only Rust's
RSS while excluding the retained extension host is not a valid app-RAM comparison.

## Promotion budgets

RUST-01b must set numeric budgets **before** evaluating the implementation. Pick
budgets from repeatable current-build measurements and the user outcome, with
explicit tolerance for run variation. Do not choose thresholds after seeing the
candidate or promise an arbitrary “10× faster / 80% less RAM”.

| Gate | Budget to pin before coding | Non-negotiable correctness |
| --- | --- | --- |
| Workspace/index slice | Incremental CPU/reads, peak memory and search tail latency | Same matches, ignore rules, freshness and cancellation |
| State/history slice | Open/replay latency and resident cache bytes | No lost edits/history/secrets; concurrent writes and rollback |
| Agent/completion slice | Local latency, prompt/request budget, stream buffer and Stop latency | Same approved tools, context quality, model/account identity and undo |
| Shell/editor slice | Idle/active whole-app memory, startup and typing tails | Input/IME/accessibility, extension scope and editor fidelity |
| Release | Full-workload RAM/CPU/package budgets on each supported platform | Native acceptance, migration, privacy and recovery |

Every promotion report must show **baseline, candidate, absolute delta, relative
delta, variability and coverage**. Calculate a percentage only for comparable
nonzero quantities. Explain tradeoffs such as faster indexing with higher peak
memory. If local safety improves but speed does not, state that; do not claim the
whole rewrite achieved its efficiency gate. Retain the previous owner until the
declared parity, improvement, migration and rollback gates pass.
