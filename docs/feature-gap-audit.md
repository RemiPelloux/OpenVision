# OpenVision: recovery gaps and remaining product work

Audit date: **12 October 2026**. Product baseline: commit
`27f3a3cceeb80c31200bff48b5152dfdbef972f1`. Original input: **Cursor 3.21.13,
Windows**, with VS Code version field `1.128.0`.

Subsequent implementation: the [REA local-rules follow-up](rea-local-rules.md)
replaces cloud-backed user-rule persistence and fixes discarded subagent model
parameters. The measurements below remain the original recovery snapshot;
native decompilation coverage has not increased in that follow-up.

Execution planning now lives in the [completion sprint ledger](completion-sprints.md).
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

The largest measured decompilation gap is **51 of 52 Windows native files
(98.08%) without any pseudocode recovery**. This is a native-file count, not a
percentage of missing features, missing application code or remaining effort.
Many of these binaries already run in OpenVision; their implementation is still
compiled. JavaScript features can also remain incomplete despite readable code.

**An overall percentage of features missing from the original is unknown.**
There is no complete original feature specification, original-source denominator,
or end-to-end parity suite. Assigning a single completion percentage would hide
the difference between recovered text, working behavior and replaceable services.
The tables below give the measurable percentages and the actual feature backlog.

## Measured recovery coverage

Percentages are rounded to two decimals. Each row has its own denominator;
rows cannot be added or averaged into a product completion score.

| Scope and denominator | Observed coverage | Gap | What this establishes |
| --- | --- | --- | --- |
| Formatting: 15,805 text-file outcomes | 15,799 formatted: **99.96%** | 6 unchanged fallbacks: **0.04%** | Readability work; fallback files are retained, not lost. Types, comments and original names are not restored by formatting. |
| Selected JavaScript bundle operations: 224 | Initially 218 without reported failure: **97.32%** | Initially 6: **2.68%**, subsequently retried successfully from raw inputs | No unresolved operation failures are reported for those six retries. Selected bundle processing does not establish complete semantic understanding. |
| Native metadata: 52 Windows PE files | 52 parsed: **100%** | 0 unparsed: **0%** | Headers/resources/import metadata, not decompiled implementations. |
| Native pseudocode: the same 52 PE files | 1 file with pseudocode: **1.92%** | 51 without pseudocode: **98.08%** | Files count equally, including repeated payloads at different paths; neither byte-weighted nor complexity-weighted. |
| Identified procedures in that one addon: 626 | 626 pseudocode results: **100%** | 0 missing results: **0%** | Only analyzer-identified procedures in `cursor_proclist.node`; complete function discovery and recompilation are unproven. |
| Distinct WASM payloads: 15, across 22 paths | 15 validated and decoded to WAT: **100%** | 0 undecoded: **0%** | Low-level text is available; original Rust/C/C++ sources and build recipes are not recovered. |
| Complete REA WASM records: those 15 payloads | 14 complete records: **93.33%** | 1 without a complete record: **6.67%** | [Four timeout gaps closed](rea-wasm-inventory.md); the large build helper exceeds input/output budgets. Report completeness is separate from WAT decoding and feature verification. |
| Original source via source maps | 0 maps present; 0 embedded originals recovered | **Percentage unknown** | The installation does not provide a total count of original source files to use as a denominator. |
| Hosted service implementation | Absent from the captured client | **Percentage unknown** | A client installation cannot supply server implementations that were never shipped in it. |
| Full original feature parity | No complete acceptance baseline | **Percentage unknown** | Static code presence and successful model discovery are not feature-parity tests. |

The installation snapshot contains **17,092 files**. The historical integrity
verification checked **101,617 hashes** across recovery outputs and inputs; it
does not imply 101,617 original source files or successful runtime parity.
The 37 REA analysis operations use selected scopes and explicitly retain partial
semantic coverage. Recovered module counts overlap between representations.

## Feature-by-feature gaps

“Observed” refers to saved local runtime checks. “Present” means source or
configuration exists, with incomplete runtime verification. “Missing” means the
required implementation or build artifact has not been established. These are
feature families, not an exhaustive or equally weighted inventory of the original.

| Feature | Current evidence/status | What is still needed |
| --- | --- | --- |
| Desktop, branding and local profile | Observed on Windows: recovered source URL, rendered editor, OpenVision title/logo, persisted local profile, absent login/signup controls. | Repeat from a clean preparation and profile; verify all windows/dialogs and restart behavior. |
| Project explorer and workspaces | Explorer and source text observed; open-folder/workspace code present; starter workspace customized. | Exercise multi-root workspaces, large folders, file operations, external file changes and restored sessions. |
| Editing and language services | Recovered editor available; JavaScript language completion observed using one TypeScript server. | Language/extension matrix for diagnostics, rename, formatting, navigation and large-file editing. This language-service completion is separate from AI Tab. |
| Terminal, tasks and debugging | Client implementations and Playground task/debug configuration present. | Execute tasks and debug sessions; verify terminal resize, cancellation, exit cleanup and platform-specific shells. |
| Git and worktree isolation | Git/worktree commands present in recovered client. | Create branch/worktree, edit in isolation, review diff, resolve conflict and clean up only owned worktrees. |
| Custom URL, key and model discovery | Local fixture verifies authorization, discovery, manual IDs, persistence and selected-model inference. Keys use workbench secret storage. | Live provider compatibility matrix; clear errors for unsupported streaming/tool/image requests. Listing a model does not verify inference. |
| Combined model selector | Provider grouping/search and startup catalog fixes implemented; saved GPT/DeepSeek/Grok rows observed in the prior pass. Model settings fixture mounts at most 40 rows for 10,000 models. | Complete keyboard, focus, screen-reader and native submenu interaction checks; measure a large Agent picker separately from the settings list. |
| Per-model reasoning | Model-specific capability handling and request encoding implemented. Synthetic transport tests cover selected effort; discovered capabilities take precedence. | Test actual upstream acceptance and tool continuations for GPT, DeepSeek and Grok at each advertised effort. Full submenu interaction verification was interrupted. |
| AI chat | Chat path and local fixture inference exercised. | Real-provider stream, retry, timeout, cancellation, history reload and branching checks. No full live-provider parity result is claimed here. |
| Agent and edit workflow | Recovered host/execution code present; per-request provider routing, reasoning relay and targeted context/stream changes implemented. | End-to-end file read/search, command approval, multi-file patch, diff review, reject/undo, interrupted tool call and resume using real models. |
| AI Tab / predictive autocomplete | Client stream/replacement-range/cursor-prediction code recovered. It uses a separate `AiService/StreamCpp` protocol. | Implement or validate a compatible completion backend; test suggestion ranges, partial acceptance, stale-result cancellation, latency and next-edit prediction. A Chat Completions URL alone does not establish compatibility. |
| Codebase indexing and retrieval | Retrieval extension and ignore-rule UI present. Large native `file_service` addon remains compiled. | Trace local versus remote execution and uploads; provide working index/embedding/ranking components, incremental invalidation, ignore coverage and quality tests. |
| MCP tools and custom servers | STDIO/HTTP configuration and extension code present. Local extension checksum consistency has been repaired. | Real server discovery, tool execution, approval, cancellation, auth/OAuth and process cleanup tests. Consistent checksums alone do not prove MCP works. |
| Rules, skills and global customization | Recovered services exist, but some still read the original global configuration location. | Complete OpenVision-owned paths and migration for global MCP/rules/agents/skills; test isolation from other installations. Project-local `.cursor` conventions currently remain. |
| Settings import | Observed preview, JSONC import, protected settings, snippets, extension registration, idempotency and exact restore. | Broader real-profile/platform fixtures and deliberate migration of any additional categories. Accounts, secrets, chat databases and extension enablement state are excluded; named profile registries are not recreated. |
| Extensions | Recovered host and registered-extension import present; local integrity manifests match assembled files. | Test install/update/activation, language packs, platform-native extensions and incompatible package handling. No universal extension compatibility claim. |
| Remote SSH / WSL / containers | Remote routing options present in the recovered host. | Live connection, filesystem, extension-host, terminal and custom-provider routing checks for each supported environment. |
| Images, browser/computer tools and other specialized AI modes | Shipped helper/codec components are visible in the inventory. | Inventory each intended user flow and its provider/runtime requirements, then verify it independently. A bundled helper is insufficient evidence that the feature works. |
| macOS and Linux | Preparation/layout logic and portable fixtures implemented. | Native editor launch and all critical workflows on real target machines/architectures. Windows binaries and tests cannot establish this. |
| Installation and updates | Local preparation/launch works with matching native input files. | An independent build, packaged installers, upgrade/rollback tests and release signing; macOS currently has only ad-hoc signing, not notarization. |
| Performance and idle resources | Narrow Windows savings measured; catalog caching, demand-driven context and stream cleanup implemented. | Controlled cold-start, Agent, autocomplete, large-project, idle and long-session profiling with regression budgets. No evidence yet of universally “blazing fast” behavior. |

Login/signup, hosted account/billing controls and cloud-agent entry points were
disabled deliberately at the user's request. Their absence is **not** an
OpenVision completion defect. Removing UI entry points does not prove every
remote dependency or residual service implementation has been removed.

## What remains compiled, and why it matters

The [native file checklist](native-recovery-inventory.md) names all 52 PE files
and their individual pseudocode status. Expected roles below are **inferences
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
See [performance methodology and tradeoffs](performance.md).

## Recommended completion order and acceptance gates

1. **Prove the core AI development loop.** Use a disposable project and each
   intended provider to read files, search, propose/apply/reject edits, run an
   approved command, stop generation and resume. Record actual requests,
   redacted credentials, outputs, errors and resulting diffs. Complete reasoning
   selector interaction and upstream capability tests.
2. **Make AI autocomplete a supported OpenVision feature.** Choose an explicit
   completion contract/backend. Verify range correctness, partial acceptance,
   edits made while requests are pending and cancellation. Measure first
   suggestion and subsequent suggestion latency against the same baseline.
3. **Own project intelligence and customization.** Establish local indexing and
   retrieval behavior, incremental updates and ignore handling. Finish separate
   global profile paths and MCP lifecycle tests. The acceptance gate is that
   custom-server Agent workflows work without hidden original-service dependencies.
4. **Remove dependence on the original installation.** Inventory actual loaded
   binaries, pin compatible source dependencies, reconstruct required proprietary
   interfaces, and replace unavailable services. Build and launch from a clean
   checkout without the original installation or ignored recovery artifacts.
   Repeat the critical workflow suite; a renamed executable is insufficient.
5. **Validate and package each platform.** Run Windows/macOS/Linux launch,
   editing, terminal, import, secrets, Agent and completion tests on each claimed
   architecture. Verify signing, sandboxing, install, upgrade and rollback.
   Use local/manual release checks; GitHub Actions remains disabled.
6. **Optimize against recorded workloads.** Measure cold/warm startup, idle and
   active private memory, long-chat heap, file-rescan counts, input tokens,
   cancellation latency, completion latency and UI frame times. Agree budgets
   from those baselines, then retain regression checks and publish tradeoffs.

This is an ordered backlog. Missing server contracts and untested native
interfaces must be investigated before their scope or full parity is established.
The current [roadmap](roadmap.md) tracks complexity points and acceptance gates.

## Evidence, provenance and limits

This audit reads existing local reports and current owned customization source.
It does **not** rerun the original reverse engineering, all historical runtime
checks, or live inference. Historical observations remain scoped to their
recorded setup and timestamps; later code changes need new regression checks.

| Source | Scope used in this audit |
| --- | --- |
| Recovery `reports/summary.json`, `reports/verification.json` | Counts, retries, zero source maps; historical hash/script checks. |
| Recovery `reports/rea-coverage.json`, `reports/rea-ledger.json` | Selected analysis scopes, evidence provenance and explicit semantic limitations. |
| Recovery `reports/IDE-FEATURES.md`, `reports/extension-features.json` | Source-bound feature map and extension declarations; not runtime tests or a complete parity specification. |
| Recovery `native/summary.json`, `native/inventory.json`, `native/cursor-proclist/coverage.json` | Native paths/counts, WASM distinction and identified-procedure pseudocode results. |
| OpenVision `build/source-build.json` | Assembly provenance: recovered application source separated from the compiled host. Creation record, not a current whole-tree hash attestation. |
| OpenVision `logs/desktop-verification.json`, `logs/import-verification.json`, `logs/model-verification.json` | Windows rendering/profile/import observations and isolated local-fixture inference. The original desktop report explicitly excludes AI inference at that stage. |
| OpenVision `logs/model-list-verification.json` | 10,000-model settings fixture with at most 40 mounted rows. |
| `desktop/model-providers.js`, `model-reasoning.js`, `model-picker.mjs`, `provider-routing.mjs`, `reasoning-transport.test.mjs` | Provider ownership, selection/capability handling and synthetic request-encoding coverage. Tests do not establish upstream acceptance. |
| `desktop/agent-runtime.cjs`, `context-customization.mjs`, `stream-customization.mjs` | Catalog/stream ownership, demand-driven context and cancellation changes. |
| [Recovery status](recovery-status.md), [native runtime](native-runtime.md), [performance](performance.md) | Existing product boundaries, platform/import limitations and measurement methodology. |

On this machine the recovery root is the sibling `../cursor` directory. Recovery
reports, source bundles, binaries, profiles and runtime logs are local ignored
artifacts, so their paths above are not downloadable repository attachments.
The published checklist contains metadata only.

Native addon overview Evidence ID:
`ev_18bcd712c61a4015319c4e46c63b1b742d8d0dfffb521ca60ead4ddbd68e8125`.
Original main executable SHA-256:
`757a63d3fe143103f8525f322b890de625061e827711afde197d63f833142242`.
These identify historical input/analysis, not the modified OpenVision executable.
