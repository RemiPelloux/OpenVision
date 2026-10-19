# OpenVision feature roadmap

[Progress, percentages and gate-based ETA](../progress.md) ·
[Recovery archive](../../curs_source/README.md) · [Recovery limits](../recovery/recovery-status.md)

Updated 18 October 2026; latest portable release **0.2.0-preview.7**, with Linux x64 source support. The verified-coverage target is **80%**.
Baseline v3 (18 October re-scope) moves platform and live clauses into OV-901,
OV-902, OV-905 and OV-205, so the denominator is **44 acceptance stories** and **36
must be fully Verified**. Current ledger: **21 Verified, 8 Partial, 14 Planned, 1
Unknown**, or **47.73%**. Fifteen additional stories must pass to reach the
numeric target. See [status page](eta-and-definition-of-done.md#re-scope-baseline-v3).
This percentage measures complete acceptance stories, not how much of the app
runs, source recovery, test count, implementation effort or original parity.

Use `npm run status:features` for the authoritative current count. The acceptance
clauses remain in [completion-sprints.md](completion-sprints.md). Original accounts,
billing and hosted cloud agents remain excluded. Native macOS, the remaining Linux gates and
independent-build requirements remain in the denominator.

Preview.7 packages recent Agent review/storage recovery, account integrations,
resource-lifetime corrections and custom authentication headers. Its
[release scope](../releases/0.2.0-preview.7.md) and
[packaged native evidence](../verification/portable-preview7.md) distinguish
working paths from remaining gates. The generated Agent input blocker was
restored to its exact known hash; its producing cause remains unknown.
No story or complexity-point total changes for packaging alone.

Latest scoped REA follow-up: [control-plane MCP lifecycle](../performance/control-plane-mcp-lifecycle.md)
now coalesces initialization, replaces changed definitions, retains rejected cleanup
and orders reconciliation and request admission with config saves. Pending
admissions cannot reconnect disabled or replaced definitions after cleanup, and
connection identities are expanded once per admission. The follow-up
[STDIO response budget](../performance/control-plane-stdio-resources.md) rejects oversized output
before decoding and recovers on the next call. The 51 focused checks and scoped
stress measurements do not establish a whole-app RAM reduction or close
native acceptance gates. Windows startup checks passed against an existing
runtime with isolated shell calls, but did not prove the committed build was
reproducible. The [build-integrity correction](../engineering/runtime-build-integrity.md)
records the faulty import, damaged generated inputs, restoration and new checks.
See also the [scoped Windows evidence](../performance/model-discovery-resources.md#full-app-startup-gate).

The [native Agent timeout report](../recovery/rea-agent-timeout-recovery.md)
now covers the selected-proxy transport owner for OV-102: application-owned
header/body inactivity deadlines survive proxy and certificate selection, stalled
sockets close, and retry remains explicit. Focused real-socket checks pass. The
[full-duration native post-fix header/body checks](../recovery/rea-agent-timeout-recovery.md#full-duration-native-follow-up)
now pass, including explicit retry into real GPT/DeepSeek Read/answer. Remaining
failure/history cases still prevent story promotion; **6/42 (14.29%)** is unchanged.

## Critical-first backlog and ETA

The [review-deletion follow-up](../recovery/rea-agent-review-deletion.md) covers
live-review record deletion, grouped post-commit cleanup and menu Undo/Redo on
Linux x64 only; OV-103 keeps its status and points.
The [Agent I/O-fault follow-up](../recovery/rea-agent-io-faults.md) reproduces real full-volume
loss of saved bytes on Linux and makes Agent writes temp-file/rename durable. OV-103 stays Partial.
The [profile I/O-fault follow-up](../recovery/rea-profile-io-faults.md) makes profile storage acknowledge only after SQLite and repairs torn memories (Linux x64); OV-103/301 stay Partial.

The [Agent interruption follow-up](../recovery/rea-agent-interruption.md) keeps exact bytes, reviews
and command ownership across Stop, close and abrupt exit mid-write. OV-103 stays Partial.

The [review-removal follow-up](../recovery/rea-agent-review-removal.md) fixes
cancellation failure advancing history and handler cleanup losing its owner.
Cleanup resumes at its failed step across model-overlap and review callbacks;
71 focused checks pass. This remains within OV-103's existing 8 points. Physical
I/O, outstanding write/tool interruption and remaining menu/group/post-commit
failure combinations retain priority. The preview.7 payload is unchanged.

The [native review Undo/Redo follow-up](../recovery/rea-agent-undo-retry.md) closes
the reproduced snapshot-failure history-position and missing-guidance case.
Keyboard write/read failure-and-retry checks pass on the rebuilt source;
consolidated callback progress has producer coverage. Physical faults,
active-write/tool interruption, remaining menu/group combinations and broader
live editing retain OV-103's P0 priority and existing 8 points. No story is promoted.

The [live-provider edit follow-up](../recovery/rea-agent-live-edit.md) now covers
one real Codex Easy `gpt-6.1-sol` Windows success path: two-file review,
rejection/retry, acceptance, Undo/Redo and restart persistence. It removes that
subcase from the evidence gap, while active-write/tool interruption, physical
faults, remaining review combinations, other providers and other platforms stay
within the existing OV-103 gate.

The latest [live retry investigation](../recovery/rea-agent-retry-history.md) fixes empty
failed-response history at both Agent producers. DeepSeek authentication retry
now passes on the rebuilt app after two pre-fix HTTP 400 failures. This advances
OV-102, a dependency of OV-103. Native header/body timeout recovery now passes;
remaining history/error cases and editing failures retain priority and points.

Agent reliability remains first: the [review-recovery follow-up](../recovery/rea-agent-review-recovery.md)
retains recovery data on failed restoration and adds repeated-edit/pending-review
restart coverage. Native Windows checks now also recover pending and accepted
review after three injected abrupt app exits. Physical storage faults and
interruption during outstanding writes/tools remain gates; exit after visible
review does not establish arbitrary crash or power-loss recovery.

The 16 October [created-review ownership correction](../recovery/rea-agent-review-recovery.md#created-review-snapshot-ownership)
extends this rule to Undo Create Diff: failed snapshot persistence keeps the live
review, failed Redo keeps saved recovery, and cleanup is joined before another
Undo. The [published recovered owner](../../curs_source/modules/3.24.18/ed6922a7a86c8c448a46aa39af0c931580da162770fe406a0d41737290e637d9-e9acad71989a/inlineDiffService.js)
links the static contract to that investigation. This is part of OV-103's existing
**8 points**, not an added story, completed-point claim or higher parity score.

The subsequent [transactional snapshot follow-up](../recovery/rea-agent-review-recovery.md#transactional-snapshot-cache-and-initial-write-retry)
adds cache rollback after failed writes and retries an initial snapshot before
Undo restores a review. The source build and **58/58** focused Agent tests pass;
physical I/O, active-write/tool interruption, remaining menu/group combinations
and broader provider/platform coverage remain the highest-priority gaps. No story
or point total changes.

The [refreshed gap audit](../recovery/feature-gap-audit.md#source-index-to-implementation-gaps)
maps the 3.24.18 source index to implementation reports and remaining gates.
Its [storage follow-up](../engineering/storage-write-ownership.md) ports the newer
pending/in-flight ownership invariant into the prepared 3.21.13 runtime after a
native model-discovery failure. Scoped Windows Quick Edit snapshot-failure and
provider regressions pass. The subsequent keyboard follow-up covers scoped
Undo/Redo failures; physical faults and remaining menu/group combinations stay
open. This adds no story or points and does not upgrade the whole
runtime to 3.24.18.
The [final source-build Agent regression](../recovery/rea-agent-review-recovery.md#final-source-build-regression)
passes repeated edits, review acceptance/rejection across normal restarts and
command lifecycle on that build. Active-write interruption, full Undo error
handling retain their existing gates; the later timeout report records the
now-passing header/body subcases of the OV-102 dependency.

15 October Agent review follow-up: the [edit-history audit](../recovery/rea-agent-edit-history.md)
records native filename/text search and fixes acceptance returning before
pending work settles and missing text undo for previously unopened files.
Windows search/edit/undo/Stop/restart checks pass. These are P0 OV-103 work; the original denominator,
points and dependency gates remain unchanged.

15 October retrieval follow-up: the [search lifecycle and data-boundary audit](../recovery/rea-retrieval-ownership.md)
reproduces an older workspace initialization replacing the current search client
and adds attempt ownership through asynchronous setup and disposal. Source-owner
tests and Windows project-watcher regressions pass within their stated scope.
Server-facing file-sync contracts are mapped, but actual data destinations and
native index behavior remain unverified. The acceptance count and backlog points
are unchanged.

**36 unfinished stories · 322 provisional complexity points.** The order below
owns execution priority; the later area tables hold the detailed acceptance
requirements. Priority reflects impact and dependencies, not a claim that every
listed risk is a reproduced defect. Start available investigations immediately;
an external blocker does not prevent unrelated local work.

### Ranked REA, implementation and verification work

Read top to bottom for importance. **REA** identifies an unresolved recovered
contract or owner; **implementation / verification** identifies the product
work and proof still needed. An unverified case is not automatically a missing
implementation. Reuse existing evidence and change code when a missing behavior
or defect is established. The per-story tables below retain status, dependencies
and detailed evidence links.

**P0 — Protect work and make Agent dependable · 81 points**

| Rank | Story / feature | REA still needed | Implementation / verification still needed | Points |
| ---: | --- | --- | --- | ---: |
| 1 | OV-103 · Agent editing and recovery | Outstanding tool/write ownership, review persistence and remaining undo contracts | Physical I/O and interruption during active writes/tools, remaining menu/group/post-commit and live-provider cases; [cancellation and resumable cleanup](../recovery/rea-agent-review-removal.md), cache rollback and initial-write retry have scoped coverage | 8 |
| 2 | OV-102 · Chat, Stop and retry | Remaining error-to-history ownership across both Agent paths | Complete interruption/history matrix after passing full-duration native header/body release and explicit live retries | 8 |
| 3 | OV-204 · Provider failures | Capability rejection and stream-error propagation beyond established cases | Certificate expiry/hostname, unsupported actual inputs, remaining malformed streams and secret-safe recovery; Linux cells, including failure records across restart, verified in the [failure matrix](../recovery/rea-provider-failure-matrix.md) | 5 |
| 4 | OV-302 · Local configuration isolation | Remaining global path producers, classifiers, watchers and consumers; [rule discovery](../recovery/rea-rules-isolation.md) is now confined to the opened folder; [user skills, commands and hooks](../recovery/rea-global-path-isolation.md) use the profile home | Complete additive migration with backups; two profiles and another installation; preserve explicit project compatibility | 8 |
| 5 | OV-303 · MCP tool ownership | Named-profile/configuration ownership and failed-close consumers | Same-name overrides, simultaneous config changes and cross-window failed-cleanup recovery without replay | 5 |
| 6 | OV-301 · Rules and approved memories | Revisit persistence only if physical-failure evidence exposes an owner gap | Physical full-disk/I/O failure and recovery; preserve acknowledged rules and original memory records | 5 |
| 7 | OV-403 · Terminals, tasks and shutdown | Explain earlier host exit 134 and utility-worker shutdown diagnostics ([Linux evidence](../recovery/rea-shutdown-ownership.md)) | Repeat close/restart with active children; preserve state and release only owned processes | 8 |
| 8 | OV-501 · Project-data destinations | Trace loaded file-service JS/native/server operations and actual outbound data | Establish local/configurable replacements where required; verify destinations with owned projects | 13 |
| 9 | OV-1005 · Telemetry removal | Remaining collectors and process-family traffic, including optional integrations | Extended authenticated and ordinary workloads; platform checks; keep third-party-extension scope explicit | 8 |
| 10 | OV-1004 · Failure and release safety | Unexplained authority, corrupt-state and cleanup paths exposed by the matrix | Run secret/permission/crash/failure checks throughout; close only after all required release dependencies pass | 13 |

**P1 — Daily development, RAM and request efficiency · 87 points**

| Rank | Story / feature | REA still needed | Implementation / verification still needed | Points |
| ---: | --- | --- | --- | ---: |
| 11 | OV-1003 · Idle and long-session RAM | Remaining process/watcher/timer/cache owners and reasoning-session retention | Bound remaining control-plane output/cache; measure long sessions, lazy startup, disposal and reactivation | 8 |
| 12 | OV-1001 · Agent context and duplicate requests | Remaining context/history retention and retry/branch ownership | Compare tokens, request counts and Stop on fixed live workloads; prevent duplicate inference while preserving tool reasoning | 8 |
| 13 | OV-1002 · Responsive editing and chat | Remaining stream scheduling, transcript rendering and edit invalidation owners | Measure frame/input latency, mounted rows, heap and filesystem work; batch/virtualize only where evidence requires it | 8 |
| 14 | OV-401 · Large-project Explorer | Remaining file-link and filesystem event behavior | Symlink/permission cases and OS-level per-edit work measurements; retain unsaved edits and session state | 5 |
| 15 | OV-402 · Language tools | Remaining concurrent language-request/edit boundaries | Complete declared TS/JS/C/C++ matrix, same-document conflicts, large files/projects and CPU/RAM budgets | 8 |
| 16 | OV-603 · Safe autocomplete acceptance | Remaining stale-range and concurrent-edit behavior | Broader partial/full acceptance, undo, cancellation and latency workloads; supported-platform checks | 8 |
| 17 | OV-602 · Useful autocomplete | Request contract already mapped; investigate concrete provider mismatches | Representative native live-provider, multi-language/project quality; one sum expression is insufficient | 8 |
| 18 | OV-104 · Subagents | Alternate Task, override and child retry/resume paths | Live explicit overrides, provider cases and accurate child status; retain parent/child isolation | 8 |
| 19 | OV-203 · Model-specific reasoning | Remaining child status and capability propagation cases | Live advertised efforts or explicit unverified labels; retry/resume and provider-specific behavior | 5 |
| 20 | OV-701 · Import and restore | Named-profile ownership and CLI/native backup interoperability | Real-profile/platform matrix, interrupted import and I/O-failure rollback without overwriting user data | 5 |
| 21 | OV-702 · Extension lifecycle | Native ABI, activation and compatibility boundaries | Install/update/uninstall, language packs, native addons and useful incompatible-package errors | 8 |
| 22 | OV-304 · Authenticated MCP and customization | OAuth/discovery precedence and lifecycle contracts | Consent cancellation, refresh/expiry, secret storage, invalid config and watcher disposal | 8 |

**P2 — An independently buildable OpenVision · 47 points**

| Rank | Story / feature | REA still needed | Implementation / verification still needed | Points |
| ---: | --- | --- | --- | ---: |
| 23 | OV-801 · Native/WASM inventory | Loaded roles and dependency contracts: historical 52 PE paths / 15 WASM payloads; current 53 native paths / 15 WASM payloads | Source/license/version/ABI and rebuild-or-replace disposition for every dependency; complete version-specific REA coverage ([recovery status](../recovery/recovery-status.md)) | 13 |
| 24 | OV-802 · Buildable host and addons | Resolve inventory gaps affecting required upstream bindings | Pin sources/toolchains/lockfiles, rebuild storage/watchers/terminal/OS bindings and verify ABI | 13 |
| 25 | OV-803 · Owned helper replacements | Required file-service/parser/Agent/sandbox interfaces and hosted contracts | Implement required replacements with malformed-input, authority and cleanup checks | 13 |
| 26 | OV-804 · Clean independent build | No new broad decompilation; resolve specific missing build inputs | Build twice from a clean machine/checkout, launch and pass core checks without ignored recovery inputs | 8 |

**P3 — Retrieval, incremental indexing and prediction · 42 points**

| Rank | Story / feature | REA still needed | Implementation / verification still needed | Points |
| ---: | --- | --- | --- | ---: |
| 27 | OV-502 · Relevant project retrieval | Parsing/chunking/embedding/ranking and endpoint contracts after OV-501 | Implement or validate owned retrieval; pinned relevance measurements and unavailable-backend behavior | 13 |
| 28 | OV-503 · Incremental index updates | Invalidation ownership for edits/renames/deletes/ignores/links/branches | Update only affected records; record read/parse/index counters and configuration invalidation | 8 |
| 29 | OV-504 · Index recovery and resource use | Worker/cache persistence, schema and cancellation contracts | Pause/cancel, interrupted writes, migration/rebuild, bounded idle resources and reactivation | 8 |
| 30 | OV-604 · Next-edit prediction | Supported prediction/range/navigation contract and backend requirements | Implement supported predictions, reject stale ranges and measure latency/quality | 13 |

**P4 — Complete distribution and platform acceptance · 39 points**

| Rank | Story / feature | REA still needed | Implementation / verification still needed | Points |
| ---: | --- | --- | --- | ---: |
| 31 | OV-901 · Windows release | Remaining identity/native-platform differences only where unresolved | Clean install and full critical suite on claimed architectures; independent-build dependency remains | 8 |
| 32 | OV-904 · Updates and rollback | Profile migration/update ownership where existing behavior is reused | Local packaging, interrupted upgrades, rollback, uninstall retention and release provenance; no Actions | 13 |
| 33 | OV-903 · Linux completion | Remaining platform-specific rule/path/native differences | Close recorded Linux gaps and declared distribution/display/architecture matrix | 5 |
| 34 | OV-902 · macOS | Native keychain/permissions/sandbox/addon differences | Real target-machine checks and claimed architectures; signing/notarization if advertised; Mac currently unavailable | 13 |

**P5 — Broader development modes · 26 points**

| Rank | Story / feature | REA still needed | Implementation / verification still needed | Points |
| ---: | --- | --- | --- | ---: |
| 35 | OV-703 · SSH, WSL and containers | Local/remote host ownership, filesystem, secrets and provider routing | Declare host matrix; connect/reconnect, terminals/extensions, cancellation and cleanup | 13 |
| 36 | OV-704 · Image/browser/computer modes | Inventory intended modes and required helper/provider contracts | Implement accepted modes with permissions, result handling and cancellation; explain unavailable capabilities | 13 |

The next executable slice is **OV-102 native timeout recovery**, because it
supports the highest-priority OV-103 Agent workflow. Then finish the outstanding
Agent edit/storage failure gates. The production deadlines are 300 seconds for
headers and 600 seconds of read inactivity; the live relay's 60-second abort
must not be presented as proof of either. Controlled transport stalls and real
resumed inference must be labeled separately.

Dependencies override a simple queue: retrieval requires OV-501; independent
builds require the relevant owned contracts; cross-platform release acceptance
requires real target systems. Release-hardening checks begin under P0 and run
again after downstream changes. P4 is full distribution acceptance; a scoped
Windows preview refresh can ship earlier once its declared gates pass.

The ETA is **gate-based, using the points above**. The 80% target still needs
**28 additional fully verified stories**. There is no defensible fixed point
estimate for that subset until its stories and required dependencies are chosen;
322 points sizes the entire current unfinished acceptance backlog. Scores are
provisional and must be revised when investigations reveal changed scope.
The separate account work packages below overlap these stories; do not add their
points again. The [Rust rewrite](rust/rust-roadmap.md) has a separate 36-package /
195-point planning baseline; overlap and unresolved compatibility prevent adding
it to the feature backlog as a single total.

### Optional account integrations — source build

Requested third-party ChatGPT/Codex and Claude/Claude Code integrations are a
separate addition, not a reinstatement of the original hosted account system.
The source build includes themed account/provider settings, replayable onboarding,
isolated account profiles, official browser-sign-in adapters, account models in
the existing Agent picker and a provider-reported usage bar. See
[setup and evidence limits](../guides/account-integrations.md).
Account deletion now disconnects the profile, cleans its credentials/cache and
archives conversation files. Essential settings text uses readable theme colors.

Real Windows verification on 15 October exercised a signed-in Claude Sonnet
read/edit through OpenVision Agent and checked the saved file. Codex quota windows
were returned by its official client; Claude supplied no usable quota windows,
so its UI reports unavailable. Codex account models are restricted to GPT-6 IDs
actually advertised by the official client. The checked account offered none
and rejected a real `gpt-6.1-sol` request. The separate saved Codex Easy GPT-6 API
request at that checkpoint reached the provider and failed with HTTP 403
`INSUFFICIENT_BALANCE`. Later [live API retry checks](../recovery/rea-agent-retry-history.md)
successfully execute GPT-6.1 Sol Read and response with the saved API key.
The official-account eligibility and separate API edit gates remain open;
the earlier API balance failure is historical evidence, not a current universal blocker.

| Remaining account gate | Complexity points | Required evidence |
| --- | --- | --- |
| Codex browser consent through signed-in identity | 3 | Verify a fresh real callback and returned identity end to end; existing signed-in profile/catalog/quota checks do not close this gate |
| Account switching with active work | 5 | Preserve conversation state, respect running-operation shutdown and verify actual account routing |
| GPT-6 account execution and API recovery | 3 | An official account advertising an eligible GPT-6 model, then native Agent execution; complete the separate GPT-6 API edit check. API Read/authentication retry now passes |
| Account Agent lifecycle | 5 | Real retry, interruption/resume and additional tool/approval cases; text/tools only today, image support remains unimplemented |
| Account usage and privacy | 5 | Broader quota/reset/error cases and authenticated traffic classification; never infer quota when the official client supplies none |
| Portable delivery and platform coverage | 5 | Preview.7 packages Windows behavior with scoped native checks; finish the remaining Windows matrix and native macOS/Linux account checks |

These points are separate delivery work, not extra acceptance stories or a
claimed percentage increase. The existing verified ledger remains unchanged.
The account-preparation worker startup fix and responsive settings layout passed
focused checks and four native switches with both official extensions installed.
Both real sign-in clients opened the system browser without an extra trust dialog.
Native deletion checks passed for both providers, including the guard against
deleting an account still used by another window. Preview.7 now includes these
runtime changes. The latest focused account suite passed 67 tests;
controlled transport checks establish isolation, bounds and cancellation, not
upstream model availability. These account additions do not promote any complete
acceptance story. Tab autocomplete still uses a configured API connection.

## What is usable today

The complete Windows x64 portable package launches the editor and local profile. Native
fixtures have exercised editing, search, tasks, model selection, Agent reads and
multi-file edits, command approval/cancellation, autocomplete and HTTP/STDIO MCP.
Separate live-provider runs exercised limited GPT, DeepSeek and Grok chat/tool
paths. See [release claims](../verification/release-claims.md) for exact scope. Several required
failure, provider and lifecycle cases remain unverified. A clean checkout includes
the complete Windows payload and an offline extraction launcher. Full native
source rebuilding and the complete release-acceptance matrix remain open. The
latest Windows startup and model-discovery checks use local HTTP fixtures and do
not establish live provider quality.

The numeric target alone will not establish usability. Before declaring a
usable release, the supported Windows build must complete project open/edit/
save/reopen, language diagnostics/navigation, terminal/tasks/debugging, safe Git
operations, provider setup, chat/history, Agent changes with approval and undo,
autocomplete, MCP, local customization and recovery in a repeatable native suite.
Live models must complete the advertised workflows with useful error handling.
No open defect may silently lose user data, select the wrong provider/key,
execute unapproved tools, or leave owned commands running after Stop.

## Points and delivery gates

### Preview.6 delivery and next priorities

Preview.6 ships current-window project/folder/workspace opening and cloning,
with native unsaved-edit cancellation. It also publishes the existing real
Provider-default Stop/resubmission evidence and more precise shutdown diagnostics.
These narrow improvements do not promote a full acceptance story.

The [ranked backlog](#ranked-rea-implementation-and-verification-work) is the
single execution-priority list. Before a refreshed preview, repeat its declared
safety/regression suite, verify relocated payload and repository extraction,
and record exact source identity. Optional accounts remain experimental until
their real sign-in, switching and lifecycle gates pass.

Earlier full-workbench runs exited 0xC000001D with a recorded `urlmon.dll` fault.
Later [startup/discovery evidence](../performance/model-discovery-resources.md#full-app-startup-gate)
and [rebuilt native Agent retry runs](../recovery/rea-agent-retry-history.md) demonstrate usable
windows in their recorded scope. The old startup failure is historical evidence,
not a current universal launch blocker. Its underlying OS cause remains unknown;
helper containment does not prove an OS repair. Fresh packaging, settings/catalog
retention and long-session checks remain required under OV-901/1003/1004.

### Latest performance work — implemented in source

[Commit `47ad155`](https://github.com/RemiPelloux/OpenVision/commit/47ad155ec5a503a4c9791ad94fd8c2ec2787baac)
moves autocomplete debounce ahead of document/hook preparation and bounds
unfinished Agent SSE events to 4 MiB with upstream cancellation. The controlled
typing fixture performs 101 → 1 document reads/hooks, with sampled heap growth
about 55 → 2 MiB. Forty-three focused tests, syntax/source build and native
Windows Agent/autocomplete checks passed. Valid-stream parsing added about 6 ms
in the warm benchmark sample. See [measurements and remaining findings](../performance/autocomplete-stream-performance.md).

This is scoped evidence for OV-1001/1002/1003/204/603. The subsequent
[provider fixture restoration](../engineering/provider-failure-handling.md#recovered-fixture-restoration-follow-up)
allows all 25 focused error/probe checks to pass. The
[control-plane HTTP follow-up](../performance/control-plane-http-resources.md) adds actual
deadline/disconnect cancellation and decoded-body bounds, with passing socket
tests and scoped measurements. Whole-app RAM was not remeasured; preview.7
packages the runtime fixes without promoting a full acceptance story.

The [discovery follow-up](../performance/model-discovery-resources.md) passes 34 focused checks
and 12 actual Electron/window/network checks. The original adapter reproduces
unfinished-body and renderer-lifecycle connection retention. This fixes ownership,
not measured whole-app RAM. Shell fault containment and reproducible generation
have separate [verification gates](../engineering/runtime-build-integrity.md); settings retention
and long-session gates remain open.

<a id="next-reliability-checks"></a>

### Supporting reliability evidence

The latest [MCP ownership run](../recovery/rea-mcp-ownership.md) passed its six assertions
but retained application diagnostics. Address these before treating that run as
evidence of clean startup, zero cloud traffic or bounded long-session resources:

| Existing story | Next check | Acceptance evidence needed |
| --- | --- | --- |
| OV-1005 · 8 points | Extend traffic verification after removing the local hosted metadata contribution | [Windows title/history restart checks](../engineering/local-conversation-metadata.md) pass with zero contribution/client invocations; process-family traffic, broader workloads and native platform gates remain open |
| OV-1003 · 8 points | Bound remaining control-plane output/cache resources and measure long-session memory and repeated service restarts | [Autocomplete/stream fixes](../performance/autocomplete-stream-performance.md), [HTTP bounds/cancellation](../performance/control-plane-http-resources.md) and [account route/retry/stream fixes](../performance/account-performance.md) have scoped measurements; [native utility ownership](../engineering/utility-process-ownership.md) removes reproduced listener accumulation. REA output/cache, STDIO/manager lifecycle, whole-app peak memory and long-session/platform gates remain open; [Linux idle/long-session evidence](../performance/idle-memory-linux.md) |
| OV-403 · 8 points | Investigate remaining duplicate command and mutex diagnostics alongside shutdown | [Local startup ordering](../engineering/local-startup.md) now passes a native candidate and reproducing control; verify the broader startup/closure matrix and retain the earlier unexplained exit 134 until diagnosed |
| OV-303 · 5 points | Extend profile/configuration ownership coverage | Named profiles inside one host, same-name project overrides, simultaneous configuration changes and cross-window failed-close recovery |

Points above reference the existing story estimates below; they are not added
again. No implementation or verification credit is assigned to an investigation
that has not passed its acceptance gate. Packaging the source additions and
repeating the portable checks also remain required before a new app release.

Work is sized with **relative complexity points**: implementation breadth,
unknowns, integration risk and verification difficulty. Points are not hours,
days, token budgets or a completion percentage. AI-assisted implementation still
needs working contracts, integration and observable acceptance evidence.

| Points | Meaning |
| --- | --- |
| 1 | Small, understood change with one narrow verification path |
| 3 | Contained feature or failure case with established contracts |
| 5 | Several related behaviors or integration cases |
| 8 | Multiple owners, meaningful uncertainty or a broader native matrix |
| 13 | Large investigation or subsystem; split into concrete tasks before implementation |

Scores are provisional judgments about the remaining work, not conversions of
previous schedule estimates. Re-score when investigation changes the scope.
Platform/architecture requirements remain in each row's dependencies. A point
score never establishes support on an untested target. Completed stories earn
acceptance credit only when their full required gates pass.

## Delivery sequence

| Priority track | Required result | Exit gate |
| --- | --- | --- |
| P0–P1 · Reliable daily development | Agent, memories, editing, terminal, autocomplete and measured resource behavior | No silent data loss, wrong-provider routing, duplicate inference or orphaned owned tools in the required matrix; declared resource budgets pass |
| P2 · Independent OpenVision build | Replace required closed contracts and own the native build inputs | Clean checkout builds and launches without the recovered installation |
| P3 · Local intelligence | Retrieval, incremental indexing and prediction | Known data destinations, measured relevance and recoverable indexes |
| P4 · Distribution | Packaging, rollback and supported platforms | Repeatable native acceptance on claimed targets |
| P5 · Broader modes | Remote development and specialized workflows | Declared host/capability matrix, permissions and cleanup |
| Separate Rust track | Rust-owned core and desktop shell replacing the recovered runtime | Feature parity, data migration, rollback and measured improvement; see [Rust roadmap](rust/rust-roadmap.md) |

The current acceptance target remains **34 of 42 fully verified stories**.
The Rust rewrite is a separate architecture track and does not silently alter this
fixed denominator or count as delivered functionality. Contract audits and editor
prototypes can start early; production cutover follows its parity, migration and
build gates. Windows is currently available for checks;
[recorded Linux evidence](../verification/linux-verification.md) covers a
declared native scope. Further Linux matrices and macOS require target access.

## What is missing, in plain language

| Area | Still needed before its full acceptance gate closes |
| --- | --- |
| AI conversations and agents | Live retry/timeout and additional Stop cases, interrupted sessions, remaining edit/undo paths and subagent override/reasoning cases |
| Local customization | Complete profile-path isolation, physical disk-failure recovery and MCP authentication/lifecycle cases; native stale-memory review rejection has scoped evidence |
| Projects and languages | Large-project watcher measurements, remaining language navigation/edit matrix and reliable shutdown diagnosis |
| Retrieval and indexing | Establish data destinations and helper ownership, implement/verify search relevance, incremental updates and index recovery |
| Autocomplete | Broader live quality, native live-provider acceptance, editing/latency workloads and next-edit prediction |
| Ecosystem | Full import rollback, extension lifecycle, SSH/WSL/containers and specialized image/browser/computer modes |
| Independent application | Native/WASM provenance and rebuild decisions, replacement of closed dependencies and clean-machine builds |
| Shipping and performance | Install/update/rollback, native macOS/Linux checks, long-session RAM/CPU/token/latency budgets and extended telemetry verification |

The tables below give the individual IDs, remaining acceptance evidence,
dependencies, confidence and points. **Already working but incompletely
verified** and **not implemented** are different states: read the status and
missing-work column together.

## Core AI and models

| Story / current state | Missing functions or acceptance evidence | Complexity points | Dependencies / confidence |
| --- | --- | --- | --- |
| OV-102 / Partial | Native inference timeout recovery, additional failure/retry types and remaining interruption/history/reasoning cases. [Real authentication retry](../recovery/rea-agent-retry-history.md) fixes empty failed-response history; Provider-default Stop/same-chat resubmission pass for all three. GPT High, DeepSeek High and Grok default restart/fork recall and persisted isolation pass | **8 points** | [Live provider evidence](../verification/live-provider-compatibility.md); provider availability/quota and intermittent failures; medium |
| OV-103 / Partial | Agent search, remaining apply/undo combinations and interrupted/resumed work; live-provider acceptance | **8 points** | OV-102 and native project fixtures; medium |
| OV-104 / Partial | Real-provider explicit overrides, retry/resume and additional provider/model cases; child status label accuracy; alternate Task paths | **8 points** | OV-102; native inherited/explicit/saved/disabled/error gates and real GPT High child Read now checked; medium locally, low for provider coverage |
| OV-203 / Partial | Remaining child retry/resume/provider cases and inherited child status label; changed capabilities, invalid choices and recovery checked in parent/child native paths | **5 points** | OV-104 and provider capability contracts; low because DeepSeek High has both failures and successful native rechecks |
| OV-204 / Partial | Certificate trust/expiry, inference timeout, actual capability inputs and malformed/oversized stream cases beyond the reasoning observer; live/platform gates. That observer rejects unfinished events over 4 MiB and passes real HTTP disconnect tests; authentic recovered fixtures are restored and 25 focused provider-error checks pass | **5 points** | [Provider failure evidence](../engineering/provider-failure-handling.md), [stream limits and restoration follow-up](../performance/autocomplete-stream-performance.md); OV-102/201; medium; live/platform gates remain |

The [provider identity change](../engineering/provider-model-identity.md) removes raw-model-ID
deduplication. A native Windows fixture verifies two providers with the same ID,
separate keys/endpoints, saved choice after restart, cross-provider subagents and
autocomplete. The [selection lifecycle acceptance](../engineering/provider-selection-lifecycle.md)
also verifies disabled/deleted selections without fallback, manual IDs and key
replacement across restart. Stale-settings races retain owner-boundary coverage.
The [native picker acceptance](../performance/model-picker-scale.md) now verifies the 10,000-model
Agent and settings lists, keyboard/focus behavior, accessible labels and failed
discovery feedback. Broader UI/resource budgets remain under OV-1003.
The [reasoning lifecycle follow-up](../engineering/reasoning-capability-lifecycle.md) prevents
silent effort substitution and verifies explicit recovery after changed, empty
or omitted capabilities, including native restart. Invalid discovery declarations
produce errors and preserve the last valid catalog/selection. Its simulated requests do not
add live-provider coverage; OV-203 remains Partial.
The [subagent verification](../verification/subagent-reasoning-verification.md) restores the Task
Models control and fixes disabled-child fallback. Native fixtures cover saved
reasoning/restart/errors/recovery; a separate real Codex Easy GPT High Task → Read
→ parent continuation passed. This supersedes the earlier static inference of
broken reasoning propagation on the active Windows child path.
The [provider failure follow-up](../engineering/provider-failure-handling.md) fixes echoed-key
diagnostics and duplicate automatic SDK/Agent requests for transport and parsed
stream errors. Native fixtures and a fresh real Codex Easy GPT High Task → Read
→ parent continuation pass; unsupported capability, timeout and additional
provider/platform gates remain open. OV-204 is Partial and adds no Verified credit.
The prior discovery implementation removed nonmanual models absent from the
latest catalog. The retention fix keeps these saved choices with a visible
unlisted status; the [verification report](../performance/model-catalog-retention.md) records its scope. This is
not proof of why a past live catalog shrank.

## Local customization and MCP

| Story / current state | Missing functions or acceptance evidence | Complexity points | Dependencies / confidence |
| --- | --- | --- | --- |
| OV-301 / Partial | Approved project memories pass native save/restart/isolation and live GPT recall; reviewed legacy import preserves originals. Cross-window IPC now refreshes changed records and rejects stale review. Two-root selection, junction rejection, ACL-denied write/retry and inline-edit exclusion pass. Remaining: physical full-disk/I/O recovery | **5 points** | [Rules](../engineering/local-rules-concurrency.md), [approved memories and precise two-window scope](../guides/project-memories.md) and [Quick Edit](../recovery/rea-inline-edit.md); medium |
| OV-302 / Partial | Complete global path-owner audit and additive migration; two profiles and another installation; watcher consumers | **8 points** | Recovered producer/consumer paths and native fixtures; medium |
| OV-303 / Partial | Broader profile/configuration ownership, including named profiles in one host and cross-window failed cleanup; remote hosts remain under OV-703 | **5 points** | [Windows cleanup/session recovery](../recovery/rea-mcp-cleanup.md) and [native two-window/separate-user-data Agent calls](../recovery/rea-mcp-ownership.md) pass; session driver evidence is narrower than Agent retry UI; utility-worker shutdown diagnostic remains under OV-403; medium |
| OV-304 / Planned | OAuth canceled consent, expiry/refresh and secret storage; discovery precedence, invalid config and watcher disposal | **8 points** | Owned OAuth server and supported auth contracts; medium |

## Projects and local intelligence

| Story / current state | Missing functions or acceptance evidence | Complexity points | Dependencies / confidence |
| --- | --- | --- | --- |
| OV-401 / Partial | File-symlink cases and OS-level filesystem work measurements. Native lifecycle checks pass; 100-file/10,000-file projects now pass incremental notifications and stable recursive watcher checks. Windows denied file-symlink creation | **5 points** | [Native lifecycle](../verification/project-lifecycle-verification.md), [project scale evidence](../verification/project-scale-verification.md), [Linux Explorer matrix](../recovery/rea-explorer-linux.md); broader operations and filesystem instrumentation; medium |
| OV-402 / Partial | TS/JS and pinned clangd C/C++ native checks pass; Save All now persists hidden-document edits. Remaining: JS/C cross-file matrix, full SDK/large-project coverage, concurrent request/edit behavior and filesystem/CPU/RAM budgets | **8 points** | OV-401; [language evidence](../recovery/rea-language-workflows.md), [C/C++](../guides/cpp-support.md), [Save All](../verification/save-all-verification.md), [Linux matrix](../recovery/rea-language-matrix-linux.md); medium |
| OV-403 / Partial | Windows cmd/PowerShell shell matrix, task matcher, Node debugging and child cleanup pass; final state-save ordering fixed. Native clean exits now distinguished from launcher exits. Remaining: diagnose earlier launcher exit 134 and verify shutdown reliability | **8 points** | [Native development evidence](../engineering/development-workflows.md); low until earlier exit cause is established |
| OV-501 / Unknown | File-service JS/native/server boundaries, loaded addons and actual project-data destinations | **13 points** | Owned networking/runtime evidence; low; unknowns may require replacement |
| OV-502 / Planned | Parsing/chunking/embedding/ranking and endpoint behavior; pinned retrieval relevance measurements | **13 points** | OV-501 and available/replacement backend; low |
| OV-503 / Planned | Incremental invalidation for edits, renames, deletes, ignores, links, branches and configuration; counters | **8 points** | OV-401/502; medium after retrieval ownership is established |
| OV-504 / Planned | Index pause/cancel, interrupted-write recovery, schema migration, rebuild and bounded idle resources | **8 points** | OV-503; medium |

## Autocomplete, imports and ecosystem

| Story / current state | Missing functions or acceptance evidence | Complexity points | Dependencies / confidence |
| --- | --- | --- | --- |
| OV-602 / Partial | Native 13-case response matrix and one real GPT/DeepSeek/Grok sum-expression sample pass. Remaining: representative multi-language/project quality and native live-provider acceptance | **8 points** | [Autocomplete evidence](../recovery/rea-custom-autocomplete.md); OV-201 and live model availability; medium |
| OV-603 / Partial | Windows partial acceptance, exact undo and typing/Escape/file-switch cancellation pass; early preparation debounce and native regressions now checked. Remaining: broader editing/latency workloads and supported-platform matrix | **8 points** | [Autocomplete evidence](../recovery/rea-custom-autocomplete.md), [preparation measurements](../performance/autocomplete-stream-performance.md); OV-602/402; latest performance changes not natively rechecked on macOS/Linux; medium |
| OV-604 / Planned | Next-edit prediction contract, implementation, navigation/range correctness, stale results and latency/quality | **13 points** | OV-603/503 and a suitable prediction backend; low; not silently excluded |
| OV-701 / Partial | Native disposable-profile preview/import, JSONC/snippets, extension registry, idempotency and exact restore pass. Remaining: real-profile/platform matrix, named-profile ownership, CLI/native backup interoperability and interrupted/I/O-failure recovery | **5 points** | [Import evidence](../verification/import-profile-verification.md), OV-302; medium |
| OV-702 / Partial | Linux x64 lifecycle matrix passes ([evidence](../recovery/rea-extension-lifecycle-linux.md)); remaining: Windows/macOS runs, real third-party/prebuilt-native packages, gallery paths | **8 points** | OV-402/403 and package sources; medium |
| OV-703 / Planned | SSH, WSL and containers: connect/reconnect, files, terminals, extension host, secrets, AI routing and cleanup | **13 points** | User-owned test hosts/runtimes not yet established; native prerequisites unresolved; low |
| OV-704 / Unknown | Inventory image/browser/computer modes and helpers; permission, cancellation, result and unavailable-capability behavior | **13 points** | Explicit mode inventory and provider/helper availability; low |

## Independent build and distribution

| Story / current state | Missing functions or acceptance evidence | Complexity points | Dependencies / confidence |
| --- | --- | --- | --- |
| OV-801 / Partial | All 52 PE and 15 WASM roles/source/license/version/ABI/rebuild dispositions; one remaining full WASM record | **13 points** | Loaded-role evidence from OV-501; medium for inventory, low for closed dependencies; [14/15 records complete](../recovery/rea-wasm-inventory.md) |
| OV-802 / Planned | Pinned host/addon sources and lockfiles; rebuild storage/watcher/terminal/OS bindings; ABI/provenance checks | **13 points** | OV-801 and obtainable sources/toolchains; low |
| OV-803 / Planned | Replace required proprietary/native/server contracts with behaviorally verified implementations | **13 points** | OV-501/601/801; very low; split replacement work after interface inventory |
| OV-804 / Planned | Build and launch from a clean checkout/machine without ignored recovery tree or original installation | **8 points** | OV-802/803; build prerequisites unresolved |
| OV-901 / Partial | Clean Windows install, complete critical suite, all identity surfaces and claimed architectures | **8 points** | OV-804 and core acceptance; medium |
| OV-902 / Planned | Native macOS workflows, keychain/permissions/sandbox/addons; signing/notarization if claimed | **13 points** | Mac unavailable; signing credentials if required; native prerequisites unresolved |
| OV-903 / Partial | Linux x64 builds, packages and launches natively on Wayland; keyring, namespace sandbox, approval-first Agent commands, bash/sh terminals, Git, completion and the native suite pass except the items in the [evidence](../verification/linux-verification.md). Remaining: project-rule discovery isolation (shared with Windows), other distributions/X11/KDE and ARM64 | **5 points** | OV-804 for independent builds; medium |
| OV-904 / Planned | Manual installer/update/rollback, interrupted upgrades, migration, uninstall/data retention and release provenance | **13 points** | OV-901–903 on claimed targets; medium after build ownership |

## Performance and release hardening

| Story / current state | Missing functions or acceptance evidence | Complexity points | Dependencies / confidence |
| --- | --- | --- | --- |
| OV-1001 / Partial | Live input-token/context/duplicate-request/history measurements; branch/tool reasoning and session disposal; broader protocol lifecycle checks. Optional control-plane HTTP timeout/disconnect now cancels transport work | **8 points** | OV-101/103/503; medium; local titles/coalescing implemented, N+1 protections rechecked; [latest scope](../performance/autocomplete-stream-performance.md), [HTTP ownership](../performance/control-plane-http-resources.md) |
| OV-1002 / Partial | Frame/input latency, transcript/model row bounds, heap and filesystem work; incremental edits on fixed workloads. Early autocomplete preparation avoids discarded document/hook work in measured fixtures | **8 points** | OV-202/402/603; [before/after and parsing cost](../performance/autocomplete-stream-performance.md); medium; no whole-app RAM claim |
| OV-1003 / Partial | Bound control-plane subprocess output/cache bytes/expiry; idle/reactivation and long-session memory; reasoning-session retention and complete watcher/timer/process ownership; repeat full-app discovery on the release candidate | **8 points** | OV-504/703/901–903; [remaining findings](../performance/autocomplete-stream-performance.md), [discovery owner](../performance/model-discovery-resources.md); medium; scoped fixes do not establish whole-app bounds |
| OV-1004 / Planned | Release matrix, secret/log/authority failures, corrupt state, failed cleanup/crash recovery and recovery instructions | **13 points** | All accepted release dependencies; medium after implementation stabilizes |
| OV-1005 / Partial | Extended process-tree network evidence, conversation metadata-sync producer audit and native macOS/Linux telemetry checks | **8 points** | [Multi-window run logs contain unauthenticated metadata-sync failures](../recovery/rea-mcp-ownership.md); destination/transport behavior remains unverified. Native access and realistic workloads; independently installed extensions assessed separately |

## Execution order and scope review

Follow the [P0 → P5 queue](#critical-first-backlog-and-eta), honoring its dependencies.
Safety/privacy checks and regression verification continue throughout the work.
Re-score from demonstrated scope changes and failed gates. New source behavior
does not become a downloadable feature until its package is rebuilt and verified.

OV-101, OV-105, OV-201, OV-202, OV-404 and OV-601 are Verified and have no remaining points in
this table. [OV-404 native evidence](../engineering/git-workflows.md) covers its local Windows contract;
other platforms and physical failure recovery remain in their own rows.
All 36 other accepted stories appear exactly once in the detailed estimate tables
and once in the priority queue. GitHub Actions
remain disabled; checks, builds and releases are local.

The [Rust rewrite track](rust/rust-roadmap.md) now includes a component audit and
36 planned packages / 195 provisional points. Start by pinning contracts and
baselines, proving the core boundary and testing native editor/extension
feasibility. Current safety fixes continue independently; replacing a component
must close its behavior and rollback gates before production cutover.
The [42-story Rust acceptance map](rust/rust-acceptance-map.md) prevents feature loss;
[migration contracts](rust/rust-migration-contracts.md) define the first workspace-search
slice, data handoff and the decisions that can block cutover. Rust gains remain
unmeasured, and neither track gains acceptance credit from a planning document.
