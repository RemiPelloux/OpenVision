# OpenVision: recovery gaps and remaining product work

[Current percentages and delivery gates](../progress.md) ·
[Prioritized backlog and points](../planning/roadmap.md#ranked-rea-implementation-and-verification-work) ·
[Published recovery archive](../../curs_source/README.md) ·
[Source-to-gap map](#source-index-to-implementation-gaps) ·
[Current build and pending work](#current-build-and-pending-work)

Audit baseline: **12 October 2026**; recovery and implementation updates through
**16 October 2026**. Product baseline: commit
`27f3a3cceeb80c31200bff48b5152dfdbef972f1`. Original input: **Cursor 3.21.13,
Windows**, with VS Code version field `1.128.0`.

**Current follow-up, 25 October:**
[Windows runtime upgrade and bounded rename validation](rea-windows-rename-upgrade.md)
completes child story OV-901.W0A using the retained 3.21.13 adapter. The
[current ledger](../planning/eta-and-definition-of-done.md) is **36/44 Verified
(81.82%)**; the historical 16 October counts below are not the current score.
The Windows parent remains Partial; the 3.24.18 archive and preview.7 are unchanged.

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

The Linux [provider failure matrix](rea-provider-failure-matrix.md) records covered, newly verified, fixed and open OV-102/204 cells. An unresolved failure, its recovery action and dismissal now survive restart (Linux fixtures).

The new [native Agent timeout report](rea-agent-timeout-recovery.md) covers the
OV-102 transport boundary: unchanged five-minute header and ten-minute body
inactivity policies, selected-proxy dispatcher ownership, controlled local
stall cleanup and explicit retry into real saved-provider inference. Focused
transport tests and post-fix full-duration native header/body checks pass.
Each native controlled stall is followed by explicit retry into real saved-provider
Read/answer. Remaining failure/history cases keep OV-102 and OV-204 Partial.

The 16 October [transactional review-storage follow-up](rea-agent-review-recovery.md#transactional-snapshot-cache-and-initial-write-retry)
adds producer coverage for failed snapshot writes: the in-memory cache rolls
back to its prior value, and an initial write is retried before Undo restores a
review. The source build and focused Agent suite pass; this narrows the
implementation gap without changing the acceptance score.

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

The historical 16 October OpenVision acceptance score was **6/42 Verified (14.29%)**:
**22 Partial, 12 Planned and 2 Unknown** stories remain. Those **36/42 (85.71%)**
are not fully verified; they are not all missing implementations. The
[ranked roadmap](../planning/roadmap.md#ranked-rea-implementation-and-verification-work)
assigns **322 provisional complexity points** to the unfinished backlog.
The recorded 80% milestone requires 34 Verified stories, or **28 more**.
The ledger owns status, the roadmap owns priority/points, and the publication
manifest owns source identities. This audit links those records without
introducing another completion score.

### Reference, implementation and release versions

| Layer | Current identity | How it affects the gap |
| --- | --- | --- |
| Published reference | **3.24.18**, [237-input source index](../../curs_source/modules/3.24.18/README.md) | Every selected input has a structural result. Original source/build inputs and semantic equivalence remain unproven. |
| Prepared OpenVision runtime | **3.21.13** base, with maintained [desktop customizations](../../desktop/README.md) | Newer recovered owners must be ported and verified individually. The local `build/source-build.json` records this base; publishing the newer archive does not upgrade it. |
| Downloadable application | **0.2.0-preview.7**, [packaged verification](../verification/portable-preview7.md) | Packages the recent local AI/recovery changes; original platform/provider evidence keeps its recorded scope. |

### Current build and pending work

The initial **16 October 2026** provider-header build stopped at the generated
Agent namespace boundary. Read-only tokenization under Node **24.18.0**
reproduced `Unexpected character '\u0013' (198301:7)` at offset `8051348`.
The [exact-hash recovery and repeat build](../engineering/runtime-build-integrity.md#preview7-recovery-and-repeat-build)
subsequently restored the known pre-damage input and passed final build checks.
The corruption cause remains unknown. The
[preview.7 package report](../verification/portable-preview7.md) records native
checks against the relocated app, separately from earlier source reports.

| Scope | Implementation/evidence boundary | Gate still required |
| --- | --- | --- |
| Custom provider authentication headers | [Maintained header/credential owners](../engineering/provider-authentication-headers.md) and the recovered [Agent provider module][source-provider-transport]. Native packaged discovery, Agent/child, Tab completion, Quick Edit and restart pass with controlled authentication; producer tests cover handled Agent error redaction. | Process-wide diagnostic/log handling, broader real-provider/platform coverage, physical failures and cross-window configuration transactions. |
| Generated Agent input integrity | Preserved damaged files; recovered input matches its known full-file hash. Corrected and repeat builds pass validation of 239 scripts, 124 manifests and 30 local main-process modules. | The producing corruption cause is unknown; independent assembly and the broader build/platform failure matrix remain open. |
| Review cancellation and cleanup, after preview.7 | [Resumable removal](rea-agent-review-removal.md) retains failed cleanup with its handler and preserves native history position after cancellation/disposal failure. Both overlap and review callbacks share completed-step progress; 71 focused checks pass. | Physical I/O, outstanding writes/tools, remaining menu/group/post-commit combinations and broader provider/platform coverage. The portable payload is unchanged. |

These updates do not change story status or complexity points. They belong to
existing Agent/provider/release gates, not a new missing-bundle count.

## Latest documentation and source reconciliation

Reconciled against source parent `37f159e4`, source-index commit `b578b768`,
live-provider edit evidence in `ac527049`, and the current transactional review
fix in `d3df7cb4` on **16 October 2026**. Documentation corrections through
`5b20b881` retain their original evidence scope; the pending working-tree build
and later recovery are tracked [separately above](#current-build-and-pending-work). This follow-up corrects the evidence
register introduced in `dcb0f880`: OV-201 remains Verified, later startup/build
results have their own scope, and authored control-plane code has a separate
implementation owner from recovered desktop MCP code. The module index is generated from
the versioned publication manifest and links its integrity authority and this
source-to-gap map. The latest publication verification passed after restoring a
stale working-tree mutation: **30,111**
published files and **670,747,317** bytes matched their recorded SHA-256 values.
The recorded transactional source follow-up passed **58/58** focused Agent recovery tests,
`npm run build:desktop`, `npm run test:build-integrity` (**26/26**) and desktop
syntax checks. This refresh changes navigation and the gap description; it does
not change the 42-story denominator or award partial credit. The linked
Undo/Redo, timeout and live-edit reports identify implementation and native
verification evidence separately.

| Recent work | Gap now closed within its stated scope | What remains open |
| --- | --- | --- |
| [Selected-bundle recovery](javascript-bundles.md) and [source index](../../curs_source/modules/3.24.18/README.md) | Every selected input has a structural result: **237/237**, including the documented derived-input retry. | Original types/build inputs, executable module equivalence and independent builds; selected extraction coverage is not product completion. |
| [Generated source-index reconciliation](../../curs_source/README.md#browse-the-code) | The versioned index now declares its manifest authority, exact selection coverage and links back to this gap map; regeneration remains reproducible from the local snapshot. | Browseable extracted representations still do not recover original source, native build inputs or feature semantics; no acceptance story is promoted by index generation. |
| [Publication integrity refresh](../../curs_source/README.md#verify-the-git-checkout) | `npm run recovery:verify` passes for **30,111/30,111** published files and **237/237** selected inputs; current native inventory and historical pseudocode remain version-scoped. | Integrity proves the published archive matches its manifest. It does not prove executable equivalence, original-source completeness, or feature parity. |
| [Storage ownership](../engineering/storage-write-ownership.md) | The newer reference's pending/in-flight invariant is ported into the prepared runtime; scoped native discovery and Quick Edit regressions pass. | Cross-window configuration races, close during IPC, physical faults and complete Undo-stack failure behavior. |
| [Created-review recovery](rea-agent-review-recovery.md#created-review-snapshot-ownership) and [final-build regression](rea-agent-undo-retry.md#native-and-integration-verification) | Snapshot-service failure recovery and normal-restart review workflows pass their controlled native checks; failed reference release has producer coverage. | Remaining menu/group failures, physical faults, active-write/tool interruption and broader live editing. Older abrupt-exit checks retain their original runtime scope. |
| [Native keyboard Undo/Redo](rea-agent-undo-retry.md) | Failed snapshot write/read operations preserve the correct history position and show retry guidance; keyboard retries pass on the rebuilt source. | Remaining menu/group and partial-removal failures, physical faults, active-write/tool interruption and broader live editing. Consolidated failure progress has producer coverage. |
| [Transactional snapshot cache and initial-write retry](rea-agent-review-recovery.md#transactional-snapshot-cache-and-initial-write-retry) | Failed writes restore the previous in-memory cache value; the first failed snapshot write is retried before Undo restores a review. The source build and **58/58** focused Agent tests pass. | Physical disk/full-volume faults, termination during an outstanding write or tool operation, remaining menu/group and partial-removal combinations, and broader provider/platform coverage. |
| [Agent I/O faults](rea-agent-io-faults.md) | OV-103 Partial | [Agent execution entry][source-agent-exec] | Real Linux ENOSPC/EROFS/EFBIG keep saved bytes with durable writes; profile-storage faults and other platforms remain open. |
| [Agent interruption](rea-agent-interruption.md) | OV-103 Partial | [Agent execution entry][source-agent-exec] | Linux Stop/close/SIGKILL mid-write keep exact bytes, a restorable review and no orphaned commands; power loss and other platforms remain open. |
| [Profile I/O faults](rea-profile-io-faults.md) | Full-profile provider saves are reported and retried; keys persist; memories write atomically (Linux x64). | EIO/power loss, in-turn snapshot SQLITE_FULL, read-only-profile UX, other platforms. |
| [Resumable review removal](rea-agent-review-removal.md) | Native keyboard cancellation/disposal failures retain the handler and history position; retry finishes cleanup without replaying completed steps. A pre-fix native control reproduces incorrect history advancement. | Remaining menu/group/post-commit failures, physical faults, outstanding writes/tools and broader provider/platform coverage; post-preview.7 source only. |
| [Live-provider multi-file editing](rea-agent-live-edit.md) | Saved Codex Easy `gpt-6.1-sol` drives native two-file review, rejection/retry, acceptance, Undo/Redo and restart persistence in a disposable project; both hosts exit 0. | One provider's Windows success path only; physical faults, active-write/tool interruption, remaining failure combinations, other providers and platforms remain. |
| [Timeout transport correction](rea-agent-timeout-recovery.md#full-duration-native-follow-up) | Focused real-socket and unchanged-duration native header/body checks pass; explicit retries complete real GPT/DeepSeek Read/answer. | Other interruption/history/error cases, certificate expiry/hostname mismatch, actual unsupported inputs and remaining successful-stream shapes; OV-102/204 remain Partial. |
| [Model-discovery resource ownership](../performance/model-discovery-resources.md) | Renderer-owned discovery I/O now cancels on deadline, reload, close and renderer loss; strict UTF-8 and decoded-byte bounds are covered by **34/34** focused checks and **12/12** minimal-host native integration checks. Separate [startup](../engineering/local-startup.md), [build-integrity](../engineering/runtime-build-integrity.md) and [provider lifecycle](../engineering/provider-selection-lifecycle.md) reports record later Windows workbench evidence. | Discovery's minimal-host checks do not establish full UI acceptance or live inference. Broader provider failures belong to OV-204; long-session and platform gates remain. OV-201 is Verified within its recorded contract. |
| [Retrieval ownership and data boundaries](rea-retrieval-ownership.md) | Stale initialization cannot replace a newer project client; controlled owner tests pass and the final project-scale watcher regression passes at 100 and 10,000 files. | Actual processing destinations, semantic-search callers, incremental index invalidation, interrupted-index recovery and resource budgets. |
| [Repository organization](../engineering/repository-layout.md) and [recovery tools](../../scripts/recovery/README.md) | Maintained code, reference code, guides and recovery tooling have documented locations. | Generated `source/` and reference `curs_source/` are not the durable customization entry points; clean independent assembly remains a product gate. |

### Which document owns each answer

| Question | Authoritative record |
| --- | --- |
| Which input was recovered, and where is its code? | [Bundle index](../../curs_source/modules/3.24.18/README.md) for browsing; [publication manifest](../../curs_source/manifest.json) for paths, hashes, representations and retries. |
| Where should a product change be implemented? | [Repository layout](../engineering/repository-layout.md), [desktop entry points](../../desktop/README.md) and the maintained implementation links below. |
| What counts as fully Verified? | [42-story baseline](../planning/feature-acceptance.json) and [acceptance ledger](../planning/completion-sprints.md). |
| What should happen next, and how large is it? | [Ranked roadmap](../planning/roadmap.md#ranked-rea-implementation-and-verification-work) owns priorities/points; [ETA](../planning/history/checkpoints-2026-10.md#remaining-work-estimates-16-october-2026) links delivery gates. |
| How do the percentages relate? | [Progress dashboard](../progress.md) separates feature acceptance, version-specific recovery and the Rust plan. |
| Which behavior was actually tested or released? | Linked investigation reports, [release claims](../verification/release-claims.md#source-additions-after-preview6) and the [preview.7 package report](../verification/portable-preview7.md). |
| What will move to Rust? | [Component audit](../planning/rust/rust-component-audit.md) and [acceptance map](../planning/rust/rust-acceptance-map.md); the overlapping migration points are separate from this backlog. |

### Current evidence register

The following reports are the newest implementation and verification records
behind the source-to-gap table. Each report keeps its own provider, platform,
fixture and failure limitations; the source links identify recovered reference
owners only and do not imply that the newer snapshot was ported wholesale.
For authored components without a recovered equivalent, the owner column names
their actual implementation. Story status comes from the acceptance ledger,
not from the number of checks in a report.

| Report | Acceptance stories | Recovered reference or authored owner | Current boundary |
| --- | --- | --- | --- |
| [Transactional Agent review recovery](rea-agent-review-recovery.md#transactional-snapshot-cache-and-initial-write-retry) | OV-103 Partial | [Inline-diff service][source-inline-diff] · [Undo entry][source-undo-stack] | Cache rollback and initial-write retry are covered by source tests; physical I/O and in-flight termination remain open. |
| [Review record deletion](rea-agent-review-deletion.md) | OV-103 Partial | [Inline-diff service][source-inline-diff] | Owned/retried record deletion, grouped post-commit resume and menu Undo/Redo pass on Linux x64 only; see its unverified list. |
| [Agent editing Linux closure](rea-agent-editing-linux-closure.md) | OV-103 Partial | [Inline-diff service][source-inline-diff] | Review bar after Undo/Confirm, interrupted-edit label, joined Undo All with Retry, full-volume Undo restore and startup temporary sweep pass on Linux x64 only; see its residuals. |
| [Resumable review removal](rea-agent-review-removal.md) | OV-103 Partial | [Inline-diff service][source-inline-diff] · [Undo entry][source-undo-stack] | Cancellation/disposal failure, retained cleanup, native history/retry and no replay of completed steps have scoped coverage; other failure combinations remain open. |
| [Native Agent timeout and retry](rea-agent-timeout-recovery.md#full-duration-native-follow-up) | OV-102/204 Partial | [AI service][source-ai] · [Agent host][source-agent-host] | Real saved-provider retry and full-duration header/body checks pass on Windows; malformed streams and broader providers remain open. |
| [Live-provider multi-file editing](rea-agent-live-edit.md) | OV-103 Partial | [Agent execution entry][source-agent-exec] · [Inline-diff service][source-inline-diff] | Codex Easy Windows success path is verified; other providers, platforms and physical faults remain open. |
| [Model-discovery resource ownership](../performance/model-discovery-resources.md) and [provider lifecycle](../engineering/provider-selection-lifecycle.md) | OV-201 Verified; OV-204 Partial | Authored [discovery HTTP owner](../../desktop/model-discovery.mjs) and [provider configuration](../../desktop/model-providers.js); [AI service][source-ai] is a recovered reference | Cancellation and response bounds pass in the minimal native host; separate Windows lifecycle and [startup/build checks](../engineering/runtime-build-integrity.md#verification-scope) provide scoped workbench evidence. Remaining failure, live capability, resource and platform gates are distinct. |
| [Provider failure handling](../engineering/provider-failure-handling.md) | OV-204 Partial | Recovered [Agent execution entry][source-agent-exec]; maintained [diagnostic policy](../../desktop/provider-error-policy.js) | The controlled Windows matrix passes 17 scenarios and explicit retries, including DNS, HTTPS protocol and untrusted-certificate rejection. [Custom-header handling](../engineering/provider-authentication-headers.md) adds producer redaction and scoped packaged Quick Edit error privacy. Certificate expiry/hostname mismatch, process-wide header/log handling, actual unsupported inputs and remaining successful-stream shapes stay open. |
| [Retrieval ownership and data boundaries](rea-retrieval-ownership.md) · [project-data destinations](rea-project-data-destinations.md) | OV-501 Partial; OV-503/504 Planned | [Retrieval entry][source-retrieval] · [Retrieval worker][source-retrieval-worker] | Initialization ownership is corrected; actual destinations, indexing semantics and recovery are still unknown. |
| [Control-plane HTTP](../performance/control-plane-http-resources.md), [STDIO](../performance/control-plane-stdio-resources.md) and [MCP lifecycle](../performance/control-plane-mcp-lifecycle.md) | OV-303 Partial; OV-1001/1003 Partial | Authored [MCP manager](../../src/mcp.mjs), [HTTP reader](../../src/mcp-http-response.mjs) and [STDIO reader](../../src/mcp-stdio-response.mjs) | Loopback and child-process checks cover this optional Node control plane. Its results do not verify the desktop Agent's separate [recovered MCP service][source-mcp]; OAuth, reconnect, multi-window and platform gates remain open. |
| [Runtime build integrity](../engineering/runtime-build-integrity.md) and [local startup](../engineering/local-startup.md) | OV-403/801/901 Partial; OV-802–804 Planned | Recovered [main entry][source-main]; maintained [source assembly](../../desktop/source-assembly.mjs) | Repeat builds with retained inputs, artifact validation and scoped Windows startup/Agent runs pass. Independent assembly, native dependency replacement, unexplained exit 134 and broader platform/shutdown coverage remain open. |

Only completed, linked evidence contributes to this register. The
[header report](../engineering/provider-authentication-headers.md) and
[preview.7 package checks](../verification/portable-preview7.md) add scoped
forwarding and handled-error evidence; they do not close process-wide log or
cross-window durability gates.
The [points-based ETA](../planning/history/checkpoints-2026-10.md#remaining-work-estimates-16-october-2026) therefore remains
**322 points across 36 unfinished stories**, with **6/42 Verified (14.29%)**.

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
now pass. [Native keyboard Undo/Redo](rea-agent-undo-retry.md) also passes scoped
snapshot failures and retry guidance; physical faults and remaining menu/group
failure combinations stay open.
That distinction applies even though the narrower provider
configuration story OV-201 already has Verified evidence.

| Gap / story | Published reference owner | Maintained OpenVision implementation | Evidence and remaining gate |
| --- | --- | --- | --- |
| Chat, Stop and retries · OV-102/204 | [AI service][source-ai] · [Agent host entry][source-agent-host] | [Retry history customization](../../desktop/agent-retry-history-customization.mjs), [request deadlines](../../desktop/provider-request-deadlines.cjs), [proxy boundary](../../desktop/provider-proxy-deadlines.mjs) | [Live provider matrix](../verification/live-provider-compatibility.md), [retry history](rea-agent-retry-history.md), [native timeout/retry](rea-agent-timeout-recovery.md#full-duration-native-follow-up) and [failure matrix](../engineering/provider-failure-handling.md#native-certificate-trust-rejection). Full-duration header/body and untrusted-certificate checks pass; remaining interruption/history, expiry/hostname mismatch, actual unsupported inputs and successful-stream cases stay open. |
| Model/configuration storage · OV-201/302 | [Storage cache][source-storage] · [IPC writer entry][source-storage-ipc] | [Write ownership customization](../../desktop/storage-write-ownership.mjs), [build integration](../../desktop/custom-models.mjs) | [Scoped native regressions](../engineering/storage-write-ownership.md). Cross-window concurrent configuration, close during IPC and physical-failure gates remain; acknowledgment is not a durability claim. |
| Agent editing and recovery · OV-103 | [Inline-diff service][source-inline-diff] · [Undo service entry][source-undo-stack] · [Agent execution entry][source-agent-exec] | [Edit review](../../desktop/agent-review-customization.mjs), [snapshot recovery](../../desktop/agent-review-recovery-customization.mjs), [retryable history](../../desktop/agent-review-undo-customization.mjs), [resumable cleanup](../../desktop/agent-review-removal-customization.mjs) | [Edit ownership](rea-agent-edit-history.md), [live-provider edit](rea-agent-live-edit.md), [snapshot recovery](rea-agent-review-recovery.md), [native keyboard retry](rea-agent-undo-retry.md), [cancellation/disposal recovery](rea-agent-review-removal.md). Cache rollback and initial-write retry have producer coverage. Remaining menu/group/post-commit failures, physical faults, active-write/tool interruption and broader provider/platform coverage remain. Failed-reference release has producer coverage. |
| MCP lifecycle · OV-303/304 | [MCP service][source-mcp] is the desktop reference; the authored control plane is separate | [Desktop cleanup](../../desktop/mcp-lifecycle-cleanup-customization.mjs); independent [control-plane owner](../../src/mcp.mjs) | [Native ownership](rea-mcp-ownership.md) and [failed-close recovery](rea-mcp-cleanup.md) cover desktop behavior; [control-plane lifecycle](../performance/control-plane-mcp-lifecycle.md) covers only the optional Node service. Named profiles, simultaneous changes, cross-window failed cleanup and authenticated MCP remain. Linux [ownership matrix](rea-mcp-ownership-matrix.md) passes named-profile, same-name, rapid-edit, failed-close and release cells. |
| Retrieval and indexing · OV-501–504 | [Retrieval entry][source-retrieval] · [retrieval worker][source-retrieval-worker] | [Search lifecycle guard](../../desktop/retrieval-lifecycle-customization.mjs) | [Partial data-flow map](rea-retrieval-ownership.md). Actual processing destinations, native/server contracts, retrieval quality and incremental index counters remain unverified. |
| Context and RAM · OV-1001–1003 | [Request-context executor][source-context] | [Context customization](../../desktop/context-customization.mjs), [catalog/stream runtime](../../desktop/agent-runtime.cjs) | [Measurements](../performance/performance.md), [native baseline](../performance/native-performance-baseline.md). Equivalent token/request workloads, long sessions, idle release and UI/filesystem budgets remain. |
| Terminal/task cleanup · OV-403 | [Terminal service][source-terminal] | [Shutdown customization](../../desktop/shutdown-customization.mjs) | [Native development workflows](../engineering/development-workflows.md). Explain intermittent host exit 134 and repeat shutdown with active children. |
| Independent build · OV-801–804 | [Main-process entry][source-main] · [historical native archive](../../curs_source/native/README.md) · [current manifest](../../curs_source/manifest.json) | [Source assembly](../../desktop/source-assembly.mjs), [build entry](../../desktop/build-source.mjs) | [Dependency checklist](native-recovery-inventory.md), [build integrity](../engineering/runtime-build-integrity.md), [Rust audit](../planning/rust/rust-component-audit.md). Source/version/ABI disposition, helper replacements and clean builds without ignored recovery inputs remain. |

[source-ai]: ../../curs_source/modules/3.24.18/ed6922a7a86c8c448a46aa39af0c931580da162770fe406a0d41737290e637d9-e9acad71989a/aiService.js
[source-inline-diff]: ../../curs_source/modules/3.24.18/ed6922a7a86c8c448a46aa39af0c931580da162770fe406a0d41737290e637d9-e9acad71989a/inlineDiffService.js
[source-mcp]: ../../curs_source/modules/3.24.18/ed6922a7a86c8c448a46aa39af0c931580da162770fe406a0d41737290e637d9-e9acad71989a/mcpService.js
[source-context]: ../../curs_source/modules/3.24.18/ed6922a7a86c8c448a46aa39af0c931580da162770fe406a0d41737290e637d9-e9acad71989a/workbenchRequestContextExecutor.js
[source-terminal]: ../../curs_source/modules/3.24.18/ed6922a7a86c8c448a46aa39af0c931580da162770fe406a0d41737290e637d9-e9acad71989a/terminalService.js
[source-agent-host]: ../../curs_source/modules/3.24.18/b44c1faa5bfa37155615f20a7678c46b5f217a47777be57cf3f68ace7d909579-b92644f55a72/entry.js
[source-agent-exec]: ../../curs_source/modules/3.24.18/bfd9c46359253e0a4ec6c03bae57cfb837af746699a715df8e7fafe978e48cdf-4766f708d5db/entry.js
[source-provider-transport]: ../../curs_source/modules/3.24.18/bfd9c46359253e0a4ec6c03bae57cfb837af746699a715df8e7fafe978e48cdf-4766f708d5db/module-74150.js
[source-retrieval]: ../../curs_source/modules/3.24.18/0ef754f0098ead080313e791a4c23e4e11f21e07cf5e620cea6cac7936091b1d-110efb3ab2ed/entry.js
[source-retrieval-worker]: ../../curs_source/modules/3.24.18/e659303a36e9541189116c6b125485bc1b4d856ff6fe86a000559f31b8642c11-684debf3a036/entry.js
[source-main]: ../../curs_source/modules/3.24.18/208e7b1ba65e410e50a6ddc167ffe358b469aa6079c2b6a7eb6937682771871d-768b05080f06/entry.js
[source-storage]: ../../curs_source/modules/3.24.18/ed6922a7a86c8c448a46aa39af0c931580da162770fe406a0d41737290e637d9-e9acad71989a/storage.js
[source-storage-ipc]: ../../curs_source/modules/3.24.18/ed6922a7a86c8c448a46aa39af0c931580da162770fe406a0d41737290e637d9-e9acad71989a/entry.js
[source-undo-stack]: ../../curs_source/modules/3.24.18/ed6922a7a86c8c448a46aa39af0c931580da162770fe406a0d41737290e637d9-e9acad71989a/entry.js

## Feature-by-feature gaps

The rows below summarize current linked reports; they do not create or promote
acceptance stories. Verified refers only to the named ledger contract and its
recorded environment. Partial includes working flows with remaining gates.
The [release claims](../verification/release-claims.md#source-additions-after-preview6)
and [preview.7 package checks](../verification/portable-preview7.md) separate
historical source observations from the current downloadable application.

| Feature | Current evidence/status | What is still needed |
| --- | --- | --- |
| Desktop, branding and local profile · OV-901 Partial | Windows editor/local profile and [portable preview.6](../verification/portable-preview6.md) work; [startup checks](../engineering/local-startup.md) cover Explorer reload and same-window project switching. | Clean complete platform/architecture suite and independent-build dependency; all identity surfaces. |
| Project explorer/workspaces · OV-401 Partial | [Native project flows](rea-project-workflows.md), [Project Home](../guides/project-home.md) and [100/10,000-file watcher checks](../verification/project-scale-verification.md) cover multi-root search, editing, external events and session behavior. | Remaining symlink/permission cases and per-edit filesystem-work measurements; watcher notifications alone do not establish incremental indexing. |
| Editing/language services · OV-402 Partial | [TS/JS/C/C++ workflows](rea-language-workflows.md), [clangd](../guides/cpp-support.md), [Linux matrix](rea-language-matrix-linux.md) and [Save All](../verification/save-all-verification.md) cover navigation, diagnostics, rename, formatting, undo and modified files without tabs. Stale multi-file rename has a guarded adapter. | Same-document conflicts, remaining concurrent requests, large-file/project budgets and declared compatibility/platform matrix. |
| Terminal/tasks/debugging · OV-403 Partial | [Windows native shell/task/debug flows](../engineering/development-workflows.md) and scoped [Linux shell checks](../verification/linux-verification.md) pass. | Explain intermittent Windows host exit 134 and utility-worker diagnostics; repeat close/restart with active children. |
| Git/worktree isolation · OV-404 Verified | [Clause-by-clause Windows evidence](../engineering/git-workflows.md) covers isolation, diff/conflicts, dirty-delete protection, owned cleanup and abnormal-host restart. | Broader release/platform gates stay with OV-901–904; this does not imply universal Git-platform compatibility. |
| Custom URL/key/model discovery · OV-201 Verified | [Native provider lifecycle](../engineering/provider-selection-lifecycle.md) covers duplicate wire IDs, manual names, key replacement, restart and zero silent fallback against loopback fixtures. | Live capability support belongs to the [provider matrix](../verification/live-provider-compatibility.md), OV-203/204 and workflow stories; discovery is not inference. |
| Combined model selector · OV-202 Verified | [Native scale and interaction evidence](../performance/model-picker-scale.md) covers grouping, search, keyboard/focus/accessibility and 10,000 entries with separate Agent/settings bounds. | Continued UI performance belongs to OV-1002; new provider/account rows require their own integration checks. |
| Per-model/subagent reasoning · OV-203/104 Partial | [Live provider report](../verification/live-provider-compatibility.md) separates accepted GPT/DeepSeek/Grok requests and scoped subagent evidence from controlled capability tests. | Every advertised effort must pass or be labeled unverified; alternate Task, child retry/resume and capability propagation remain. |
| AI chat · OV-102 Partial | [Real GPT/DeepSeek/Grok Stop, restart and fork history](../verification/live-provider-compatibility.md), [DeepSeek authentication retry](rea-agent-retry-history.md) and [post-fix native header/body timeout recovery](rea-agent-timeout-recovery.md#full-duration-native-follow-up) have distinct evidence scopes. Controlled timeout followed by real GPT/DeepSeek Read/answer passes. | Remaining interruption/error/history cases and the provider-failure matrix. Stop proves client transport cancellation, not stopped upstream billing. |
| Agent/edit/Quick Edit · OV-103 Partial | [Native edit/review/undo](rea-agent-edit-history.md), [live-provider multi-file editing](rea-agent-live-edit.md), [restart/abrupt-exit recovery](rea-agent-review-recovery.md), [Quick Edit](rea-inline-edit.md), [keyboard snapshot failure/retry](rea-agent-undo-retry.md) and [cancellation/resumable cleanup](rea-agent-review-removal.md) have scoped evidence. Failed cancellation/disposal retains history position and its handler owner. | Remaining menu/group/post-commit removal failures, physical I/O faults, active-write/tool interruption, other edit/undo combinations, other providers/platforms and broader live quality stay open. |
| AI Tab autocomplete · OV-105/601 Verified; OV-602/603 Partial | [Recovered contract](rea-autocomplete-contract.md) and [custom Chat Completions adapter](rea-custom-autocomplete.md) cover native accept/partial accept/undo, stale cancellation and a 13-case failure matrix. Separate live GPT/DeepSeek/Grok probes complete one expression each. | Representative native live-provider, multi-language/project quality, broader editing and latency/platform budgets. |
| Next-edit prediction · OV-604 Planned | [Autocomplete implementation](rea-custom-autocomplete.md) supplies insertions; recovered prediction messages do not establish a working predictive backend. | Explicit supported prediction contract/backend, navigation/range freshness and measured quality/latency. |
| Codebase retrieval/indexing · OV-501 Partial ([destinations](rea-project-data-destinations.md)); OV-502–504 Planned | [Retrieval ownership report](rea-retrieval-ownership.md) fixes stale initialization and maps JS/native/server boundaries with partial static evidence. | Establish actual data destinations before owned retrieval; implement/validate ranking, incremental invalidation, ignores, pause/cancel, recovery and resource bounds. |
| MCP tools/custom servers · OV-303 Partial; OV-304 Planned | [Native two-window/user-data ownership](rea-mcp-ownership.md), [failed-close recovery](rea-mcp-cleanup.md) and [control-plane lifecycle](../performance/control-plane-mcp-lifecycle.md) cover real application calls and controlled HTTP/STDIO servers. | Named profiles within one host, simultaneous config changes, cross-window failed cleanup and auth/OAuth lifecycle. Successful checksum repair alone was not MCP proof. |
| Rules/memories/global customization · OV-301/302 Partial | [Local concurrency and live rule context](../engineering/local-rules-concurrency.md), [approved memories](../guides/project-memories.md) and [global MCP isolation](rea-profile-isolation.md) have scoped evidence. [Project configuration](../guides/project-configuration.md) documents owned paths. | Physical full-disk/I/O recovery and complete producer/watcher/consumer migration. [Rule discovery](rea-rules-isolation.md) no longer reads parent folders, the Git root or the home directory (Linux native pass); skills and other global producers remain. Preserve acknowledged rules and original memories. |
| Settings import · OV-701 Partial | [Profile import evidence](../verification/import-profile-verification.md) covers preview, JSONC/snippets, protected settings, idempotency and exact restore. | Broader real-profile/platform matrix, named-profile ownership, interruption and I/O-failure rollback. Accounts/secrets/chat databases/enablement state are excluded. |
| Extensions · OV-702 Partial | Registered-extension import and [build integrity](../engineering/runtime-build-integrity.md) are established; installed language tools have scoped workflow results. | Linux x64 [lifecycle matrix](rea-extension-lifecycle-linux.md) passes. Remaining: Windows/macOS, real third-party/prebuilt-native packages and gallery paths. |
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
text files (**670,747,317** bytes) and **9,354** historical native export files
matched their manifests; all **237/237** selected inputs retained structural
results, and all **14** source references in this audit matched recorded
output hashes.
The feature-status command confirmed **6 Verified / 22 Partial / 12 Planned /
2 Unknown**, and the documentation check reported no missing paths or anchors.

Native addon overview Evidence ID:
`ev_18bcd712c61a4015319c4e46c63b1b742d8d0dfffb521ca60ead4ddbd68e8125`.
Original main executable SHA-256:
`757a63d3fe143103f8525f322b890de625061e827711afde197d63f833142242`.
These identify historical input/analysis, not the modified OpenVision executable.
