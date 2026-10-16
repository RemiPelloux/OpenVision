# OpenVision: recovery gaps and remaining product work

[Current percentages and delivery gates](../progress.md) ·
[Prioritized backlog and points](../planning/roadmap.md#ranked-rea-implementation-and-verification-work) ·
[Published recovery archive](../../curs_source/README.md) ·
[Source-to-gap map](#source-index-to-implementation-gaps)

Audit baseline: **12 October 2026**; recovery and implementation updates through
**16 October 2026**. Product baseline: commit
`27f3a3cceeb80c31200bff48b5152dfdbef972f1`. Original input: **Cursor 3.21.13,
Windows**, with VS Code version field `1.128.0`.

This revision reconciles the historical audit with the reorganized
[documentation index](../README.md), current [acceptance ledger](../planning/completion-sprints.md)
and versioned source publication. The baseline commit identifies the original
audit, not the current implementation. Historical and current recovery counts
remain separate below.

**16 October recovery update:** [`curs_source`](../../curs_source/README.md) now
contains actual code and provenance in Git. Current application text and module
extraction use the newer **3.24.18** snapshot. Historical **3.21.13** native
recovery increased to nine modules and 4,647 identified procedures; the updated
historical native rows below retain their original 52-file denominator. The
current version has 53 native paths and no matching historical pseudocode.

The current JavaScript publication is indexed by input in the
[3.24.18 module index](../../curs_source/modules/3.24.18/README.md) and checked
by the [publication manifest](../../curs_source/manifest.json). All **237/237**
selected inputs have structural results: 236 use unchanged captured bytes and
one uses a separate, equal-width filename-label analysis copy. The exact
transformation and its limitation are recorded in the
[final-bundle report](javascript-bundles.md). This is source-recovery evidence,
not a runnable module graph or feature-parity score.

The new [native Agent timeout report](rea-agent-timeout-recovery.md) covers the
OV-102 transport boundary: unchanged five-minute header and ten-minute body
inactivity policies, selected-proxy dispatcher ownership, controlled local
stall cleanup and explicit retry into real saved-provider inference. Focused
transport tests pass; post-fix full-duration native runs remain pending, so OV-102
and OV-204 stay Partial.

Execution planning now lives in the [completion sprint ledger](../planning/completion-sprints.md).
The [autocomplete follow-up](rea-autocomplete-contract.md) documents the next REA
scope and guarded request/response cancellation boundaries. These changes do not
alter the native recovery denominator. The subsequent
[custom autocomplete adapter](rea-custom-autocomplete.md) adds a working native
Windows Tab path with a controlled local backend; live provider compatibility
remains separate.
The [MCP follow-up](rea-mcp-contract.md) records the recovered transport map and
does not treat hosted account or cloud-agent RPCs as required local features.

## Where the product stands

**OpenVision is runnable on the verified Windows setup, but it is not a fully
decompiled, independently rebuildable product.** It loads editable recovered
JavaScript through a compiled Electron host. The local profile, branding,
provider configuration and several runtime optimizations are our own changes.
The original TypeScript project, native build inputs and hosted server code
have not been recovered.

The historical native gap is **43 of 52 Windows native files
(82.69%) without any pseudocode recovery**. This is a native-file count, not a
percentage of missing features, missing application code or remaining effort.
Many of these binaries already run in OpenVision; their implementation is still
compiled. JavaScript features can also remain incomplete despite readable code.

**An overall percentage of features missing from the original is unknown.**
There is no complete original feature specification, original-source denominator,
or end-to-end parity suite. Assigning a single completion percentage would hide
the difference between recovered text, working behavior and replaceable services.
The tables below give the measurable percentages and the actual feature backlog.

The measurable OpenVision acceptance score is **6/42 Verified (14.29%)**:
**22 Partial, 12 Planned and 2 Unknown** stories remain. Those **36/42 (85.71%)**
are not fully verified; they are not all missing implementations. The
[ranked roadmap](../planning/roadmap.md#ranked-rea-implementation-and-verification-work)
assigns **322 provisional complexity points** to the unfinished backlog.
The recorded 80% milestone requires 34 Verified stories, or **28 more**.
The ledger owns status, the roadmap owns priority/points, and the publication
manifest owns source identities. This audit links those records without
introducing another completion score.

## Measured recovery coverage

Percentages are rounded to two decimals. Each row has its own denominator;
rows cannot be added or averaged into a product completion score.

| Scope and denominator | Observed coverage | Gap | What this establishes |
| --- | --- | --- | --- |
| Current 3.24.18 formatting: 13,925 text-file outcomes | 13,925 formatted: **100%** | 0 formatting failures in the selected current snapshot | Readability work; formatting does not recover original names, types, comments or build inputs. |
| Selected JavaScript inputs: 237 | Structural results for **237: 100%** | 0 selected inputs without a structural result; one result uses a derived filename-label analysis copy | The [module index](../../curs_source/modules/3.24.18/README.md) and manifest preserve input/output hashes and provenance. Structural extraction does not establish original source, runnable equivalence or feature parity. |
| Published 3.24.18 recovery text: 30,111 files | **30,111** hash-verified files: 916 application + 29,195 derived | Historical statement fallback and failed attempts remain separately documented; installed dependencies and raw binaries stay local | A browsable, integrity-checked reference archive; file count is not semantic completeness. |
| Historical 3.21.13 native metadata: 52 Windows PE files | 52 parsed: **100%** | 0 unparsed: **0%** | Headers/resources/import metadata, not decompiled implementations. |
| Historical native pseudocode: the same 52 PE files | 9 files with pseudocode: **17.31%** | 43 without pseudocode: **82.69%** | Updated 16 October. Files count equally; this is neither byte-weighted nor complexity-weighted and does not cover the current installation. |
| Current 3.24.18 native inventory: 53 paths | 0 paths with hash-matching published historical pseudocode: **0%** | 53 without matching pseudocode: **100%** | The [manifest](../../curs_source/manifest.json) records current hashes; historical results cannot be credited to a different binary. |
| Identified internal procedures in those nine modules: 4,647 | 4,647 pseudocode results: **100%** | 0 missing results: **0%** | Only analyzer-identified procedures in these selected modules; complete function discovery and recompilation are unproven. |
| Historical 3.21.13 WASM: 15 distinct payloads across 22 paths | 15 validated and decoded to WAT: **100%** | 0 undecoded: **0%** | Low-level text is available; original Rust/C/C++ sources and build recipes are not recovered. |
| Complete historical REA WASM records: those 15 payloads | 14 complete records: **93.33%** | 1 without a complete record: **6.67%** | [Four timeout gaps closed](rea-wasm-inventory.md); the large build helper exceeds input/output budgets. Report completeness is separate from WAT decoding and feature verification. |
| Current 3.24.18 WASM: 15 distinct payloads across 23 paths | 15 validated and decoded locally: **100%** | Original source/build recipes and complete current-version REA coverage unproven | [Current publication](../../curs_source/README.md) distinguishes supplemental WAT decoding from historical REA records. |
| Original source via source maps | 0 maps present; 0 embedded originals recovered | **Percentage unknown** | The installation does not provide a total count of original source files to use as a denominator. |
| Hosted service implementation | Absent from the captured client | **Percentage unknown** | A client installation cannot supply server implementations that were never shipped in it. |
| Full original feature parity | No complete acceptance baseline | **Percentage unknown** | Static code presence and successful model discovery are not feature-parity tests. |

The current 3.24.18 installation snapshot contains **15,161 files**. The
historical integrity verification checked **101,617 hashes** across recovery
outputs and inputs; that historical count does not imply 101,617 original source
files or successful runtime parity.
The 37 REA analysis operations use selected scopes and explicitly retain partial
semantic coverage. Recovered module counts overlap between representations.

## Source index to implementation gaps

Use the [bundle index](../../curs_source/modules/3.24.18/README.md) to find every
selected input and the [manifest](../../curs_source/manifest.json) for its exact
input/output hashes, representation and retries. **No selected JavaScript input
is still awaiting a structural result.** Remaining work concerns behavior,
contracts, native dependencies and build inputs. Extracted resources and repeated
representations do not count as additional implemented features.

These links point to the **3.24.18 reference snapshot**. Existing native reports
test the prepared **3.21.13 runtime** unless they explicitly say otherwise.
Publishing a newer owner does not port it into OpenVision or prove equivalence.

### Follow a gap from source to acceptance

1. Find the input bundle in the [versioned source index](../../curs_source/modules/3.24.18/README.md).
   Its Browse link opens a derived representation; use the
   [manifest](../../curs_source/manifest.json) for the original input path,
   input hash, output hash and extraction method.
2. Use the owner links below to reach the relevant contract, then read its
   implementation report. The report identifies what OpenVision changed and
   whether evidence comes from source, controlled tests or a native workflow.
3. Read the story's complete acceptance clauses in the
   [ledger](../planning/completion-sprints.md). A source file or one passing
   workflow does not close the other clauses.
4. Use the [ranked backlog](../planning/roadmap.md#ranked-rea-implementation-and-verification-work)
   for priority, dependencies and points. Check
   [release claims](../verification/release-claims.md#source-additions-after-preview6)
   before assuming a source change is in the downloadable release.

The table is a map of priority owners, not a complete dependency graph. An
unmapped feature is not evidence of a missing bundle; all selected inputs are
already indexed. Storage is a concrete example: the newer recovered owner
supplies a pending/in-flight write invariant now ported to the older runtime,
and [scoped native regressions](../engineering/storage-write-ownership.md#verification)
now pass; physical faults and full Undo-stack failure handling remain open.
That distinction applies even though the narrower provider
configuration story OV-201 already has Verified evidence.

| Gap / story | Published reference owner | Implementation and evidence | Remaining gate |
| --- | --- | --- | --- |
| Chat, Stop and retries · OV-102/204 | [AI service][source-ai] · [Agent host entry][source-agent-host] | [Live provider matrix](../verification/live-provider-compatibility.md), [retry history](rea-agent-retry-history.md), [transport timeout ownership](rea-agent-timeout-recovery.md) | Post-fix full-duration native timeout recovery and remaining failure classes. |
| Model/configuration storage · OV-201/302 | [Storage cache][source-storage] · [IPC writer entry][source-storage-ipc] | [Native stale notification, recovered acknowledgment contract and scoped Windows regressions](../engineering/storage-write-ownership.md) | Cross-window concurrent configuration, close during IPC and physical-failure gates; a successful cache/IPC acknowledgment is not a durability claim. |
| Agent editing and recovery · OV-103 | [Inline-diff service][source-inline-diff] · [Agent execution entry][source-agent-exec] | [Edit/undo ownership](rea-agent-edit-history.md), [native snapshot-service recovery and control](rea-agent-review-recovery.md) | Complete user-facing Undo-stack failure behavior, physical storage faults, active-write/tool interruption and broader live editing. Failed-reference release remains producer-test coverage. |
| MCP lifecycle · OV-303/304 | [MCP service][source-mcp] | [Native window/profile ownership](rea-mcp-ownership.md), [failed-close recovery](rea-mcp-cleanup.md), [control-plane lifecycle](../performance/control-plane-mcp-lifecycle.md) | Named profiles, simultaneous changes, cross-window failed cleanup and authenticated MCP. |
| Retrieval and indexing · OV-501–504 | [Retrieval entry][source-retrieval] · [retrieval worker][source-retrieval-worker] | [Search-owner race and partial data-flow map](rea-retrieval-ownership.md) | Actual processing destinations, native/server contracts, retrieval quality and incremental index counters. |
| Context and RAM · OV-1001–1003 | [Request-context executor][source-context] | [Resource measurements](../performance/performance.md), [native baseline](../performance/native-performance-baseline.md) | Equivalent token/request workloads, long sessions, idle release and measured UI/filesystem budgets. |
| Terminal/task cleanup · OV-403 | [Terminal service][source-terminal] | [Native development workflows](../engineering/development-workflows.md) | Explain intermittent host exit 134 and repeat shutdown with active children. |
| Independent build · OV-801–804 | [Main-process entry][source-main] · [historical native archive](../../curs_source/native/README.md) · [current manifest](../../curs_source/manifest.json) | [Dependency checklist](native-recovery-inventory.md), [build integrity](../engineering/runtime-build-integrity.md), [Rust component audit](../planning/rust/rust-component-audit.md) | Source/version/ABI disposition, required helper replacements and repeated clean builds without ignored recovery inputs. |

[source-ai]: ../../curs_source/modules/3.24.18/ed6922a7a86c8c448a46aa39af0c931580da162770fe406a0d41737290e637d9-e9acad71989a/aiService.js
[source-inline-diff]: ../../curs_source/modules/3.24.18/ed6922a7a86c8c448a46aa39af0c931580da162770fe406a0d41737290e637d9-e9acad71989a/inlineDiffService.js
[source-mcp]: ../../curs_source/modules/3.24.18/ed6922a7a86c8c448a46aa39af0c931580da162770fe406a0d41737290e637d9-e9acad71989a/mcpService.js
[source-context]: ../../curs_source/modules/3.24.18/ed6922a7a86c8c448a46aa39af0c931580da162770fe406a0d41737290e637d9-e9acad71989a/workbenchRequestContextExecutor.js
[source-terminal]: ../../curs_source/modules/3.24.18/ed6922a7a86c8c448a46aa39af0c931580da162770fe406a0d41737290e637d9-e9acad71989a/terminalService.js
[source-agent-host]: ../../curs_source/modules/3.24.18/b44c1faa5bfa37155615f20a7678c46b5f217a47777be57cf3f68ace7d909579-b92644f55a72/entry.js
[source-agent-exec]: ../../curs_source/modules/3.24.18/bfd9c46359253e0a4ec6c03bae57cfb837af746699a715df8e7fafe978e48cdf-4766f708d5db/entry.js
[source-retrieval]: ../../curs_source/modules/3.24.18/0ef754f0098ead080313e791a4c23e4e11f21e07cf5e620cea6cac7936091b1d-110efb3ab2ed/entry.js
[source-retrieval-worker]: ../../curs_source/modules/3.24.18/e659303a36e9541189116c6b125485bc1b4d856ff6fe86a000559f31b8642c11-684debf3a036/entry.js
[source-main]: ../../curs_source/modules/3.24.18/208e7b1ba65e410e50a6ddc167ffe358b469aa6079c2b6a7eb6937682771871d-768b05080f06/entry.js
[source-storage]: ../../curs_source/modules/3.24.18/ed6922a7a86c8c448a46aa39af0c931580da162770fe406a0d41737290e637d9-e9acad71989a/storage.js
[source-storage-ipc]: ../../curs_source/modules/3.24.18/ed6922a7a86c8c448a46aa39af0c931580da162770fe406a0d41737290e637d9-e9acad71989a/entry.js

## Feature-by-feature gaps

The rows below summarize current linked reports; they do not create or promote
acceptance stories. Verified refers only to the named ledger contract and its
recorded environment. Partial includes working flows with remaining gates.
The [release claims](../verification/release-claims.md#source-additions-after-preview6)
separate source additions from the preview.6 portable download.

| Feature | Current evidence/status | What is still needed |
| --- | --- | --- |
| Desktop, branding and local profile · OV-901 Partial | Windows editor/local profile and [portable preview.6](../verification/portable-preview6.md) work; [startup checks](../engineering/local-startup.md) cover Explorer reload and same-window project switching. | Clean complete platform/architecture suite and independent-build dependency; all identity surfaces. |
| Project explorer/workspaces · OV-401 Partial | [Native project flows](rea-project-workflows.md), [Project Home](../guides/project-home.md) and [100/10,000-file watcher checks](../verification/project-scale-verification.md) cover multi-root search, editing, external events and session behavior. | Remaining symlink/permission cases and per-edit filesystem-work measurements; watcher notifications alone do not establish incremental indexing. |
| Editing/language services · OV-402 Partial | [TS/JS/C/C++ workflows](rea-language-workflows.md), [clangd](../guides/cpp-support.md) and [Save All](../verification/save-all-verification.md) cover navigation, diagnostics, rename, formatting, undo and modified files without tabs. Stale multi-file rename has a guarded adapter. | Same-document conflicts, remaining concurrent requests, large-file/project budgets and declared compatibility/platform matrix. |
| Terminal/tasks/debugging · OV-403 Partial | [Windows native shell/task/debug flows](../engineering/development-workflows.md) and scoped [Linux shell checks](../verification/linux-verification.md) pass. | Explain intermittent Windows host exit 134 and utility-worker diagnostics; repeat close/restart with active children. |
| Git/worktree isolation · OV-404 Verified | [Clause-by-clause Windows evidence](../engineering/git-workflows.md) covers isolation, diff/conflicts, dirty-delete protection, owned cleanup and abnormal-host restart. | Broader release/platform gates stay with OV-901–904; this does not imply universal Git-platform compatibility. |
| Custom URL/key/model discovery · OV-201 Verified | [Native provider lifecycle](../engineering/provider-selection-lifecycle.md) covers duplicate wire IDs, manual names, key replacement, restart and zero silent fallback against loopback fixtures. | Live capability support belongs to the [provider matrix](../verification/live-provider-compatibility.md), OV-203/204 and workflow stories; discovery is not inference. |
| Combined model selector · OV-202 Verified | [Native scale and interaction evidence](../performance/model-picker-scale.md) covers grouping, search, keyboard/focus/accessibility and 10,000 entries with separate Agent/settings bounds. | Continued UI performance belongs to OV-1002; new provider/account rows require their own integration checks. |
| Per-model/subagent reasoning · OV-203/104 Partial | [Live provider report](../verification/live-provider-compatibility.md) separates accepted GPT/DeepSeek/Grok requests and scoped subagent evidence from controlled capability tests. | Every advertised effort must pass or be labeled unverified; alternate Task, child retry/resume and capability propagation remain. |
| AI chat · OV-102 Partial | [Real GPT/DeepSeek/Grok Stop, restart and fork history](../verification/live-provider-compatibility.md), [DeepSeek authentication retry](rea-agent-retry-history.md) and [timeout ownership tests](rea-agent-timeout-recovery.md) have distinct evidence scopes. | Post-fix full-duration native header/body timeout recovery and remaining interruption/error/history cases. Stop proves client transport cancellation, not stopped upstream billing. |
| Agent/edit/Quick Edit · OV-103 Partial | [Native edit/review/undo](rea-agent-edit-history.md), [restart and abrupt-exit recovery](rea-agent-review-recovery.md) and [Quick Edit](rea-inline-edit.md) pass scoped controlled-provider workflows. Mounted created-review callbacks preserve recovery across injected snapshot-service failures; the original-owner control reproduces review loss. | Complete keyboard/menu Undo-stack failure behavior, physical I/O faults, active-write/tool interruption, remaining edit/undo combinations and broad live editing stay open. |
| AI Tab autocomplete · OV-105/601 Verified; OV-602/603 Partial | [Recovered contract](rea-autocomplete-contract.md) and [custom Chat Completions adapter](rea-custom-autocomplete.md) cover native accept/partial accept/undo, stale cancellation and a 13-case failure matrix. Separate live GPT/DeepSeek/Grok probes complete one expression each. | Representative native live-provider, multi-language/project quality, broader editing and latency/platform budgets. |
| Next-edit prediction · OV-604 Planned | [Autocomplete implementation](rea-custom-autocomplete.md) supplies insertions; recovered prediction messages do not establish a working predictive backend. | Explicit supported prediction contract/backend, navigation/range freshness and measured quality/latency. |
| Codebase retrieval/indexing · OV-501 Unknown; OV-502–504 Planned | [Retrieval ownership report](rea-retrieval-ownership.md) fixes stale initialization and maps JS/native/server boundaries with partial static evidence. | Establish actual data destinations before owned retrieval; implement/validate ranking, incremental invalidation, ignores, pause/cancel, recovery and resource bounds. |
| MCP tools/custom servers · OV-303 Partial; OV-304 Planned | [Native two-window/user-data ownership](rea-mcp-ownership.md), [failed-close recovery](rea-mcp-cleanup.md) and [control-plane lifecycle](../performance/control-plane-mcp-lifecycle.md) cover real application calls and controlled HTTP/STDIO servers. | Named profiles within one host, simultaneous config changes, cross-window failed cleanup and auth/OAuth lifecycle. Successful checksum repair alone was not MCP proof. |
| Rules/memories/global customization · OV-301/302 Partial | [Local concurrency and live rule context](../engineering/local-rules-concurrency.md), [approved memories](../guides/project-memories.md) and [global MCP isolation](rea-profile-isolation.md) have scoped evidence. [Project configuration](../guides/project-configuration.md) documents owned paths. | Physical full-disk/I/O recovery and complete producer/watcher/consumer migration. [Linux rule discovery](../verification/linux-verification.md#open) still finds legacy locations and misses project rules; preserve acknowledged rules and original memories. |
| Settings import · OV-701 Partial | [Profile import evidence](../verification/import-profile-verification.md) covers preview, JSONC/snippets, protected settings, idempotency and exact restore. | Broader real-profile/platform matrix, named-profile ownership, interruption and I/O-failure rollback. Accounts/secrets/chat databases/enablement state are excluded. |
| Extensions · OV-702 Partial | Registered-extension import and [build integrity](../engineering/runtime-build-integrity.md) are established; installed language tools have scoped workflow results. | Install/update/uninstall, language packs, native ABI/platform handling and useful incompatible-package errors. |
| Remote SSH/WSL/containers · OV-703 Planned | Recovered routing exists; [roadmap contracts](../planning/roadmap.md#ranked-rea-implementation-and-verification-work) retain each intended environment. | Declared host matrix, live reconnect/filesystem/extensions/terminal/provider routing, secrets and owned cleanup. |
| Images/browser/computer modes · OV-704 Unknown | Helper/codec presence and [inventory](../../curs_source/manifest.json) establish shipped artifacts only. | Define included flows, provider/helper contracts, permissions, cancellation and result handling; verify each independently. |
| Optional Codex/Claude accounts · separate source addition | [Account guide](../guides/account-integrations.md) records isolated profiles, account models, usage UI and the real Claude edit result. | Codex GPT-6 availability, native Linux account checks and remaining sign-in/switch/history/usage gates. These additions do not reinstate original hosted accounts or enlarge the 42-story denominator. |
| Linux/macOS · OV-903 Partial; OV-902 Planned | [Native Linux x64 evidence](../verification/linux-verification.md) covers keyring, sandbox, core editor/Agent/tools and packaging on one Arch-based Wayland setup. | Remaining Linux rule discovery and account checks, distributions/displays/ARM64; real macOS launch/workflows, signing and notarization if advertised. |
| Independent build/install/update · OV-801 Partial; OV-802–804/904 Planned | [Recovered archive](../../curs_source/README.md), historical pseudocode and portable packaging are available; matching native inputs are still required. | Buildable dependency disposition and owned helper replacements; repeat clean builds, installation, migration, interrupted upgrade, rollback and signing. |
| Performance/idle resources · OV-1001–1003 Partial | [Resource reports](../performance/README.md) record scoped savings, shared catalog work, demand-driven context, stream cleanup and bounded MCP responses. | Equivalent cold/warm, Agent, autocomplete, large-project and long-session workloads with token/request/CPU/memory/UI budgets; no universal speed claim. |
| Telemetry/failure safety · OV-1005 Partial; OV-1004 Planned | [Built-in telemetry audit](rea-telemetry-audit.md) records disabled collectors/uploads/crash reporting and a scoped native capture; optional integrations have a separate [privacy boundary](../guides/account-integration-privacy.md). | Extended process-family networking with authenticated/ordinary workloads, platform coverage and full secret/permission/corrupt-state/crash/release matrix. |

Login/signup, hosted account/billing controls and cloud-agent entry points were
disabled deliberately at the user's request. Their absence is **not** an
OpenVision completion defect. Removing UI entry points does not prove every
remote dependency or residual service implementation has been removed.

## What remains compiled, and why it matters

The [historical native file checklist](native-recovery-inventory.md) names all 52
3.21.13 PE files and their individual pseudocode status; the current 53-path
inventory is in the [3.24.18 manifest](../../curs_source/manifest.json).
Expected roles below are **inferences
from package names and placement**, unless established by the exported analysis.

| Area | Examples still compiled | Practical impact / next action |
| --- | --- | --- |
| Main runtime and rendering | Main executable, graphics DLLs, FFmpeg, helper Node runtime | Required to launch/render the current app. Identify compatible upstream versions/build recipes and test an independently assembled runtime. Pseudocode for every Chromium function is not a prerequisite for a customizable IDE. |
| Retrieval and parsing | `file_service`, both `tree-chunk-napi` copies, tree-sitter bindings, `whichlang` | Understand the JS/native contracts first; prioritize proprietary behavior needed for local indexing and chunking. Rebuild available upstream dependencies or implement tested replacements. |
| Agent helpers | `crepectl.exe`, `cursorsandbox.exe` | Establish callers, protocols, process ownership and execution restrictions before replacing anything; their exact full behavior remains unknown. |
| Storage, watchers and OS integration | SQLite, keytar, watcher, certificates, registry, keyboard and process addons | Pin available upstream sources and Electron ABI, rebuild, then test persistence, notifications, secrets and OS behavior. |
| Terminal and remote helpers | `node-pty`, ConPTY, WinPTY, tunnel executables | Verify terminal/process lifecycle and remote requirements; retain ownership and cancellation semantics. |
| Installer/update tooling | `inno_updater.exe`, `unins000.exe` | Snapshot inventory includes these; membership does not prove current launch uses them. Create an OpenVision install/update strategy for the finished product. |
| One analyzed native addon | `cursor_proclist.node` | Pseudocode exists for 626 identified procedures. Recover interfaces and build a replacement or reproducible build; pseudocode alone is not compilable original source. |
| WASM | WebP codecs, parsers, regex, build/debug/profile helpers | All 15 distinct payloads have WAT. Recover/reuse matching buildable upstream implementations where available; test bindings and runtime behavior. |

No buildable native-source reconstruction has been established by the available
reports, including for the analyzed addon. More decompilation can explain local
behavior; it cannot recover an unshipped server or guarantee exact original
source names, comments, types and project layout.

## Remaining optimization work

| Requested area | Already implemented / observed | Remaining work and proof |
| --- | --- | --- |
| Agent context, duplicates, retained data and cancellation | Catalog requests share in-flight work; idle catalogs expire. Reasoning relay observes one stream without cloning it; necessary call associations remain session-owned. | Measure request/token counts, audit context selection and history growth, define safe session disposal, and verify upstream cancellation. Do not evict reasoning needed for retries/branches merely to cap a cache. |
| Incremental editing | Request context invalidates on edits and loads when requested; eager global/workspace warmup removed. Disposed executors cannot repopulate caches. | This is not proof of fully incremental indexing or patch application. Trace the edit-to-index pipeline, eliminate measured full rescans, and test rename/delete/ignore changes with filesystem-work counters. |
| Streamed UI and visible rows | Recovered transcript already batches at 16 ms and virtualizes rows; canceled drain waiters now release. Model settings are paginated to 40 mounted rows. | Profile long conversations and large catalogs under load; measure frame times, DOM count and retained heap. Settings pagination does not establish virtualization of every selector. |
| Lazy services and idle release | Demand-driven context, bounded idle catalog cache and one TypeScript server by default. Import-preview resources have explicit cleanup. | Inventory all background processes/watchers/timers, add ownership-aware idle disposal where safe, and measure reactivation cost and long-session leaks. No blanket lazy-service conversion is complete. |

The recorded Windows Playground comparison reduced process-tree private memory
from **2,246.6 to 2,156.2 MiB**, about **4.02%**. The app still used approximately
**2.1 GiB** in that workload. Cached customization builds improved from 6.806 s
to 0.398–0.449 s; those numbers are **not total application startup times**.
See [performance methodology and tradeoffs](../performance/performance.md).

## Recommended completion order and acceptance gates

Follow the [ranked roadmap](../planning/roadmap.md#ranked-rea-implementation-and-verification-work),
which owns all 36 unfinished stories and their **322 provisional points**:

1. **P0: protect work and make Agent dependable.** Finish editing/storage
   recovery and its chat timeout dependency; close provider failure, configuration,
   MCP/rule durability, terminal cleanup, data-destination and safety gates.
2. **P1: daily development and measured efficiency.** Measure long-session RAM,
   tokens/duplicate requests, UI and filesystem work; finish Explorer, language,
   autocomplete, reasoning/subagent, import, extension and authenticated MCP gates.
3. **P2: make the build independent.** Pin native/WASM sources, versions and ABI;
   rebuild or replace required bindings/helpers and repeat a clean build without
   the installed application or ignored recovery artifacts.
4. **P3: own retrieval and prediction.** After data destinations are established,
   verify retrieval quality, incremental indexing, interrupted-index recovery and
   the supported next-edit contract.
5. **P4: complete distribution.** Close Windows/Linux and native macOS matrices;
   verify installation, upgrade, rollback and signing for claimed targets.
6. **P5: extend supported modes.** Verify declared remote environments and
   image/browser/computer workflows with permissions, cancellation and cleanup.

Dependencies can advance individual investigations sooner. Safety checks run
throughout, and a scoped Windows preview is distinct from full platform release
acceptance. The [progress dashboard](../progress.md) links the gate-based ETA;
the [Rust plan](../planning/rust/rust-roadmap.md) is a separate, overlapping
195-point migration plan, not extra feature-completion credit. No calendar or
engineer-time estimate is assigned. GitHub Actions remains disabled.

## Evidence, provenance and limits

This audit reads existing local reports and current owned customization source.
It does **not** rerun the original reverse engineering, all historical runtime
checks, or live inference. Historical observations remain scoped to their
recorded setup and timestamps; later code changes need new regression checks.

| Source | Scope used in this audit |
| --- | --- |
| [Publication manifest](../../curs_source/manifest.json) and [bundle index](../../curs_source/modules/3.24.18/README.md) | Current capture/formatting/selection counts, 30,111 distinct published paths, exact source hashes and version-specific native inventory. |
| [Acceptance baseline](../planning/feature-acceptance.json), [ledger](../planning/completion-sprints.md) and [roadmap](../planning/roadmap.md) | Fixed 42 story IDs/statuses, accepted 80% target, unfinished priorities and provisional points; no partial credit. |
| [Verification index](../verification/README.md) and [release claims](../verification/release-claims.md) | Native/platform/live-versus-controlled evidence and source-versus-portable scope. |
| Recovery `reports/summary.json`, `reports/verification.json` | Counts, retries, zero source maps; historical hash/script checks. |
| Recovery `reports/rea-coverage.json`, `reports/rea-ledger.json` | Selected analysis scopes, evidence provenance and explicit semantic limitations. |
| Recovery `reports/IDE-FEATURES.md`, `reports/extension-features.json` | Source-bound feature map and extension declarations; not runtime tests or a complete parity specification. |
| Recovery `native/summary.json`, `native/inventory.json`, `native/cursor-proclist/coverage.json` | Native paths/counts, WASM distinction and identified-procedure pseudocode results. |
| OpenVision `build/source-build.json` | Assembly provenance: recovered application source separated from the compiled host. Creation record, not a current whole-tree hash attestation. |
| OpenVision `logs/desktop-verification.json`, `logs/import-verification.json`, `logs/model-verification.json` | Windows rendering/profile/import observations and isolated local-fixture inference. The original desktop report explicitly excludes AI inference at that stage. |
| OpenVision `logs/model-list-verification.json` | 10,000-model settings fixture with at most 40 mounted rows. |
| `desktop/model-providers.js`, `model-reasoning.js`, `model-picker.mjs`, `provider-routing.mjs`, `reasoning-transport.test.mjs` | Provider ownership, selection/capability handling and synthetic request-encoding coverage. Tests do not establish upstream acceptance. |
| `desktop/agent-runtime.cjs`, `context-customization.mjs`, `stream-customization.mjs` | Catalog/stream ownership, demand-driven context and cancellation changes. |
| [Recovery status](recovery-status.md), [native runtime](../guides/native-runtime.md), [performance](../performance/performance.md) | Existing product boundaries, platform/import limitations and measurement methodology. |

The historical recovery root is the sibling `../cursor` directory. Full captures,
installed dependencies, decoded WAT and private runtime logs remain local ignored
artifacts. **Published application text, extracted modules, provenance and native
pseudocode are now tracked in [curs_source](../../curs_source/README.md).**
Use those public links for source inspection; a historical `logs/` path identifies
a private run record, not a downloadable attachment. Publication integrity and
the acceptance tally can be rechecked locally without executing the recovered
application:

```sh
npm run recovery:verify
npm run status:features
npm run docs:check
```

These checks validate published-file hashes, the recorded story tally and
documentation links respectively. They do not rerun native acceptance or live
inference, prove extracted modules runnable, or promote any acceptance story.

Refresh verification on **16 October 2026** passed: **30,111** current published
text files and **9,354** historical native export files matched their manifests;
all **12** source references in the map above matched recorded output hashes.
The feature-status command confirmed **6 Verified / 22 Partial / 12 Planned /
2 Unknown**, and the documentation check reported no missing paths or anchors.

Native addon overview Evidence ID:
`ev_18bcd712c61a4015319c4e46c63b1b742d8d0dfffb521ca60ead4ddbd68e8125`.
Original main executable SHA-256:
`757a63d3fe143103f8525f322b890de625061e827711afde197d63f833142242`.
These identify historical input/analysis, not the modified OpenVision executable.
