# OpenVision completion sprints and user stories

[Progress, percentages and gate-based ETA](../progress.md) ·
[Prioritized backlog and points](roadmap.md#ranked-rea-implementation-and-verification-work) ·
[Recovery archive and version-specific coverage](../../curs_source/README.md)

Planning baseline: **12 October 2026**, Windows desktop input **3.21.13**.
OpenVision runs editable recovered JavaScript through a compiled Electron host.
It is not yet independently buildable or verified across all requested features.
The [feature gap audit](../recovery/feature-gap-audit.md) is the recovery baseline; the
[local-rules follow-up](../recovery/rea-local-rules.md) records the latest delivered changes.

## Current baseline

**18 October 2026 re-scope (owner decision, baseline v3).** Clauses that need
Windows, macOS, other Linux distributions/architectures, a funded live provider
or an official account move out of every story into four platform/live stories:
[OV-901](#sprint-9--package-and-verify-supported-platforms) (Windows),
OV-902 (macOS), OV-905 (Linux distributions, displays and architectures) and
[OV-205](#sprint-2--complete-provider-settings-and-model-interaction) (live
providers and official accounts). Every other story is promoted when all its
remaining clauses pass on **Linux x64** with committed verifiers and dated
evidence. No requirement is removed: each moved clause is listed under its new
story. The denominator grows from 42 to **44**; 80% needs **36** Verified. See
[status page](eta-and-definition-of-done.md#re-scope-baseline-v3).

16 October source follow-up: [resumable review removal](../recovery/rea-agent-review-removal.md)
fixes premature history advancement after cancellation failure and retains
handlers through failed cleanup. The model-overlap and review callback share
cleanup progress, avoiding replay of completed steps. The focused suite passes
71 checks. This is post-preview.7 source work; physical faults, active writes/tools
and remaining menu/group/post-commit failures remain gates. OV-103 stays Partial;
the ledger and provisional points are unchanged.

16 October native Undo/Redo follow-up: [retryable history ownership](../recovery/rea-agent-undo-retry.md)
reproduces an injected write failure advancing the editor's history without
guidance. The correction preserves the failed entry's position, resumes
consolidated callbacks and shows retry guidance. Final Windows keyboard
write/read failure-and-retry checks pass with one controlled inference and a
clean host exit; 56 focused checks pass. Physical faults, active-write/tool
interruption, menu/group combinations and broader live editing remain gates.
OV-103 retains its existing status/points; **6/42 Verified (14.29%)** is unchanged.

16 October live-provider follow-up: [native multi-file editing](../recovery/rea-agent-live-edit.md)
passes real Codex Easy `gpt-6.1-sol` tool calls, review rejection/retry,
acceptance, Undo/Redo and restart persistence in a disposable project. The
provider made one preliminary Read round before its StrReplace calls; this is
success-path evidence, not a request-efficiency result. OV-103 remains Partial
because physical faults, active-write interruption, remaining review failures,
other providers and platform coverage remain open.

16 October created-review follow-up: [snapshot ownership](../recovery/rea-agent-review-recovery.md#created-review-snapshot-ownership)
corrects Undo Create Diff removing the live review after a failed snapshot write
and Redo deleting recovery after a failed restore. Producer regressions execute
the actual recovered callbacks and cover cleanup/ref-release retry. The Windows
Quick Edit overlay passes injected snapshot-service failures and reproduces the
original review-loss defect with its recovered-owner control. Failed reference
release is now service-owned and survives discarded history in producer tests.
Full Undo-stack failure behavior, physical I/O, active-write interruption and
live-provider gates remain distinct. The [storage report](../engineering/storage-write-ownership.md)
records the model-discovery fix and scoped native regressions.
OV-103 stays Partial; the fixed ledger remains **6/42 Verified (14.29%)**.

16 October transactional snapshot follow-up: [cache rollback and initial-write retry](../recovery/rea-agent-review-recovery.md#transactional-snapshot-cache-and-initial-write-retry)
restores the prior in-memory snapshot value after a failed write and retries the
initial snapshot before Undo restores a review. The source build passes, the
focused Agent suite is **58/58**, and build-integrity checks are **26/26**.
This is producer/source-build evidence; physical I/O, termination during
outstanding writes/tools, remaining menu/group combinations and broader
provider/platform coverage remain open. OV-103 stays Partial and the ledger is
unchanged at **6/42 Verified (14.29%)**.

The [final source-build regression](../recovery/rea-agent-review-recovery.md#final-source-build-regression)
passes native reads/search, multi-file review, repeated-edit Undo/Redo,
normal-restart acceptance/rejection, command approval/cancellation and resume.
All 29 local fixture requests are authenticated; five app launches exit 0.
This does not close live-inference, physical-fault or full Undo error gates.

15 October live retry follow-up: [failed-stream history ownership](../recovery/rea-agent-retry-history.md)
fixes an empty assistant added before any response content in both Agent bundles.
Two real DeepSeek manual retries failed with HTTP 400 before the fix; the rebuilt
app passes HTTP 401 → Try again → real Read/answer with the saved credential.
Timeout and other lifecycle gates remain open; **6/42 Verified** is unchanged.

15 October abrupt-exit follow-up: [native review recovery](../recovery/rea-agent-review-recovery.md#abrupt-exit-verification)
passes three injected main-process exits: pending review can be rejected or
accepted after relaunch, and accepted edits survive another abrupt exit. The
29-request local fixture does not verify live providers or interrupted writes.
OV-103 stays Partial; the ledger remains **6/42 Verified (14.29%)**.

15 October review-recovery follow-up: [recovery ownership](../recovery/rea-agent-review-recovery.md)
preserves saved review state when Undo restoration fails, joins snapshot writes
and cleanup, and preserves the live review if Redo persistence fails. The native
scenario additionally checks repeated edits and pending review across restarts.
This is continued P0 OV-103 work; the acceptance count remains **6/42 Verified**.

16 October timeout follow-up: [native Agent timeout and retry recovery](../recovery/rea-agent-timeout-recovery.md)
fixes the producing transport boundary where proxy/certificate selection replaced
the application's inactivity policy. The source tests pass with real sockets and
the native verifier distinguishes a controlled local stall from a real
saved-provider retry. The [full-duration post-fix native runs](../recovery/rea-agent-timeout-recovery.md#full-duration-native-follow-up)
now pass for header/body deadlines with live GPT/DeepSeek Read/answer continuations.
The remaining Agent failure matrix is still open; OV-102 and OV-204 remain Partial and the ledger
stays **6/42 Verified (14.29%)**.

15 October Agent review follow-up: [edit-history ownership](../recovery/rea-agent-edit-history.md)
fixes early acceptance completion and missing closed-file text undo. The final
Windows run passes search, multi-file review/undo/redo, command approval/Stop
and restart/resume; 25 focused checks and the production build also pass.
The controlled model fixture executes real application tools but does not prove
external provider support. OV-103 remains Partial, subject to its original
clauses and OV-102 dependency; no story or point total is removed.

15 October retrieval ownership follow-up (parent commit `92e3ffe`): the
[search lifecycle audit and fix](../recovery/rea-retrieval-ownership.md) prevents an older
workspace initialization replacing the current client or creating resources after
disposal. Recovered-owner tests reproduce the original bug and verify the guard;
Windows native project-watcher regressions cover 100 and 10,000 files separately.
The audit maps native/search/server boundaries with partial REA evidence, but
does not establish actual indexing destinations or full index lifecycle behavior.
OV-501 stays Unknown, OV-503/504 Planned and OV-1003 Partial. The portable payload
and **6/42 Verified (14.29%)** count remain unchanged.

15 October startup and discovery follow-up: native Windows startup passes in
`logs/local-startup-verification-nkp4Tu/result.json`. Explorer loaded, an open
file survived reload, and switching projects reused the same native window.
`logs/model-discovery-8rTqru/result.json` then passed the production workbench
model-discovery matrix over real local HTTP sockets, including malformed,
oversized, cancellation and sibling-window cases. Windows notification and shell
history calls run in an owned helper process with bounded startup, idle and
operation lifetimes; a helper crash leaves the editor usable and reports the
capability as unavailable. This promotes no acceptance story by itself and does
not verify macOS/Linux or live provider quality.

14 October preview.3 delivery: the portable payload now includes Project Home,
Quick Edit, cross-window memory notification fixes and provider failure guidance.
[Portable checks](../verification/portable-preview3.md) cover relocated project history/pins,
Agent and Quick Edit, plus exact import restoration through a fresh CLI process.
[Language checks](../recovery/rea-language-workflows.md) add JavaScript/C cross-file navigation,
rename/undo/redo and overlapping edits to different documents. [WASM evidence](../recovery/rea-wasm-inventory.md)
now covers 14/15 complete records. Older follow-up statements about an unchanged
portable payload describe their original run. No full story is promoted: **6/42**
remain Verified, and all outstanding acceptance clauses remain required.

14 October Quick Edit follow-up: [native custom-provider editing](../recovery/rea-inline-edit.md)
passes approved-rule inclusion/hidden-memory exclusion, accept/save, two-step
undo, reject, safe HTTP failure/retry, Escape cancellation, Unicode/CRLF and exact
original-record preservation. Six submissions make six controlled local HTTP
requests. This is development-build evidence, not live inference or an updated
portable payload. OV-301 remains Partial for its other required gates.

14 October autocomplete follow-up: [response validation](../recovery/rea-custom-autocomplete.md)
rejects provider-truncated code, refusal/function/tool output and invalid UTF-8.
The native 13-case failure matrix and recovery pass. Separate real Codex Easy
GPT/DeepSeek/Grok probes each returned a valid sum expression. Broader live quality,
native live acceptance and broader editing/latency gates remain open; OV-602/603 stay Partial.
Native Windows partial word/Tab remainder/undo and pending typing, Escape and
file-switch cancellation now pass. Fixed pending Escape and partial-undo grouping;
the controlled local workload meets a 1,000 ms cancellation budget.

14 October development follow-up: [native terminals/tasks/debugging](../engineering/development-workflows.md)
passes Windows shell resize/Unicode/environment/cancellation, task diagnostics,
Node debugger break/step/Stop and child release. Fixed disposal of the file
service before final shutdown-state persistence. OV-403 stays Partial because
an earlier intermittent host exit 134 is not yet explained; no score increase.

14 October Git follow-up: [native Git/worktree acceptance](../engineering/git-workflows.md)
passes branch/worktree creation, isolation, diff review, refused checkout,
dirty-delete cancellation, selected cleanup, merge resolution and recovery after
both normal shutdown and abnormal host exit. Explicit commands now enumerate
worktrees even with automatic detection off. OV-404 is Verified for local Windows;
the fixed ledger is now **6/42 Verified (14.29%)**, with **28** more needed for 80%.

14 October language follow-up: [TS/JS](../recovery/rea-language-workflows.md) and
[C/C++](../guides/cpp-support.md) native checks now cover diagnostics, completion (C/C++),
cross-file definitions/references/rename (TS/C++), formatting and undo/redo.
[Save All](../verification/save-all-verification.md) now persists dirty files without tabs through
both global commands and the extension API. Native conflicts remain protected.
OV-402 stays Partial for its remaining matrix, concurrency and resource gates.

15 October rename-safety follow-up: the native extension-host rename adapter now
rejects a complete multi-file rename when a target document changes, closes or
reopens while the provider is running. The rebuilt Windows fixture passed delayed
source/dependency races, unrelated edits, healthy rename, exact save and undo/redo;
the unguarded run reproduced partial-text corruption. Adapter tests cover both
extension-host variants. This closes one stale-edit subcase; OV-402 remains Partial
for same-document conflicts, in-flight language requests, large-project budgets,
compatibility and platform gates.

14 October local-rules follow-up: [native concurrency and live context](../engineering/local-rules-concurrency.md)
fixes hidden rules caused by concurrent storage metadata updates and waits for
SQLite acknowledgement before reporting a saved rule. Two real windows, profile
isolation/restart, native rejected-write recovery, and real GPT first-request
rule consumption pass. [Approved project memories](../guides/project-memories.md) now pass
native suggestion/dismiss/save/restart/project isolation and real GPT on-demand
recall. Customize → Rules now supports reviewed legacy-memory import while
preserving original records; native paging/import/restart/isolation checks pass.
Native two-root selection, junction rejection and real ACL-denied writes/retry
also pass. OV-301 stays Partial pending physical full-disk/I/O and stale cross-window
review. The seeded native inline-edit gate passes in the follow-up above. A subsequent native stale-source
check passes rejection without writes and refresh to the latest source through
the mounted memory service; it does not establish cross-window propagation.
This rules follow-up itself promoted no story.

14 October MCP cleanup follow-up: [retained cleanup ownership](../recovery/rea-mcp-cleanup.md)
prevents reconnect starting a replacement after an unresolved transport close.
Native repeated-failure recovery and HTTP/STDIO regressions pass. Multi-window,
remote, additional lifecycle failures and platform gates remain unverified;
OV-303 stays Partial.

15 October MCP session follow-up: [native session recovery](../recovery/rea-mcp-cleanup.md#native-session-recovery-verification)
passes real HTTP 404 tool-failure recovery and a separate direct native
session-reinitialization close failure. Each retains the exact failed transport,
blocks replacement through a second failure and recovers only after successful
explicit cleanup. The adapter returns a clear error without replaying the failed
tool. These production-boundary checks do not establish an Agent retry UI flow.
Multi-window/profile ownership remains open; OV-303 stays Partial and the fixed
ledger remains **6/42 Verified (14.29%)**.

15 October ownership follow-up: [native Agent calls](../recovery/rea-mcp-ownership.md) pass
from two project windows sharing one global STDIO server and another user-data
profile with a different server under the same name. Approval precedes execution;
closing a window/profile preserves the other owner, and all recorded STDIO
children exit. Separate user-data directories do not prove named profiles inside
one host or cross-window failed cleanup. OV-303 remains Partial; the denominator
and **6/42 Verified (14.29%)** result are unchanged.

14 October follow-up: [large clipboard pastes](../recovery/rea-large-paste.md) now use local
files and compact prompt references. Native paste/failure checks and a real
Codex Easy Read continuation pass; this scoped addition does not close the
broader chat/context acceptance gates or change the fixed progress denominator.

The accepted **80% local feature verification** target uses the fixed 42-story
baseline in [feature-acceptance.json](feature-acceptance.json). Run
`npm run status:features` for the current counts. At least **34 of 42** stories
must be fully Verified; Partial receives no credit. This measures acceptance
stories, not recovered source, working code, effort or original-product parity.
The script rejects added, removed or duplicate IDs until the baseline is reviewed.
The [gate ownership clarification](acceptance-gate-ownership.md) assigns overlapping
local, remote, authentication and platform requirements without deleting them.
Platform and independent-build gates remain required.
Native testing is available on Windows x64 and, since 15 October 2026, Linux x64
(Arch-based, Wayland; see [Linux verification](../verification/linux-verification.md)).
macOS checks remain unverified; all platforms retain their acceptance gates.

On 13 October the user changed the target from 95% to 80% and requested a fully
usable product plus a complete missing-feature backlog. Baseline version 2 changes
only the target; all 42 IDs and their acceptance gates are retained. See the
[feature roadmap](roadmap.md) for sequencing,
complexity points and the usability release gate.

| Area | Established evidence | Remaining gate |
| --- | --- | --- |
| Desktop and local identity | Windows editor, OpenVision branding and local profile observed | Clean preparation, all windows/dialogs and session restoration |
| Providers and models | Custom URL/key, discovery, manual IDs and fixture inference; grouped selector and reasoning transport implemented | Real-provider streams, tools, reasoning capabilities and full picker interaction |
| Local user rules | Native Windows create/edit/delete and persistence across process restart verified | Live Agent consumption and comprehensive profile isolation |
| Subagent reasoning | Recovered selection callback now retains explicit/saved parameters in both workbench variants; boundary tests pass | Live subagent request and provider acceptance |
| Last local validation | Desktop, completion/profile and telemetry checks pass; syntax/build, bounded 10,000-model UI and native autocomplete/project/Agent fixtures pass | [Agent evidence](../recovery/rea-agent-runtime.md), [project evidence](../recovery/rea-project-workflows.md), [autocomplete evidence](../recovery/rea-custom-autocomplete.md); these do not cover every story below |
| Native recovery · updated 16 October | Historical 3.21.13: metadata for 52/52 files; pseudocode for 9/52 files and 4,647 identified procedures | Historical 43/52 files lack pseudocode; current 3.24.18 has 53 native paths with no matching historical pseudocode; independent native rebuild unproven ([coverage](../recovery/recovery-status.md)) |
| WASM recovery | 15/15 distinct payloads decoded to WAT; complete REA records for 14/15 | One complete record and independently buildable source/binding verification |
| Platform coverage | Windows native checks; Linux x64 native build, keyring, sandbox and most native verifiers ([evidence](../verification/linux-verification.md)) | Real macOS launch and workflows; remaining Linux verifiers, distributions and ARM64 |

**There is no defensible overall percentage of the original product recovered.**
The historical 82.69% native-file pseudocode gap is not a missing-feature percentage.
Readable text, working behavior, reconstructed source and reproducible builds
are separate outcomes. A client installation cannot reveal unshipped server code.

## What “100%” will mean for OpenVision

The target is **all accepted OpenVision release requirements passing**, against a
versioned support matrix and the stories below. It does not mean exact recovery
of original comments, names, TypeScript, server source or every original feature.
Record exclusions before testing; a failed gate cannot be removed to improve a score.
Track completed stories by ID, without averaging recovery percentages or implying
equal effort. A release remains incomplete while a required story is unverified.

Required product scope: a locally owned IDE with project management, editing,
language intelligence, terminal/debug/Git, custom AI providers and reasoning,
chat/Agent/edit/subagents, AI autocomplete, retrieval, MCP, rules/skills/agents,
settings import, extensions, supported remote workflows, and distributable builds.
Windows, macOS and Linux require native evidence for each claimed architecture.
Unsupported provider capabilities must have explicit, useful UI behavior.

Login/signup, original account/billing and hosted cloud agents are deliberately
excluded. Their removal is not a defect. User-configured AI/MCP network access
remains supported. Cloud-free identity does not imply offline model execution.
Exact original next-edit prediction and specialized modes need explicit supported
contracts or recorded exclusions; they cannot silently disappear from the ledger.

| Status | Meaning |
| --- | --- |
| Planned | Work or acceptance run has not been completed |
| In progress | Active implementation or investigation; acceptance gates still open |
| Partial | Implementation or scoped evidence exists; the whole story gate is unmet |
| Verified | All story gates passed on the declared version/platform/provider scope |
| Blocked | A named dependency prevents progress; preserve partial facts and the reason |
| Unknown | Available evidence cannot establish the relevant behavior or coverage |

The status on each story is its **planning baseline**, not a claim that this
document executes it. No complete sprint is verified at this baseline.

## Working and evidence rules

Every story has an owner when selected, a pinned input/build, a concrete test
fixture and an evidence record. Record observation, derivation, inference and
unknowns separately. REA records need source digest, selected scope, Evidence ID
and remaining coverage. Prefer fixing the owning producer/contract to scattered
consumer patches; verify every affected desktop/glass/Agent consumer.

Runtime records include commit, OS/architecture, provider/model, commands,
expected/observed results, failures and cleanup. Retain original local evidence;
publish credential-free summaries only. Never commit API keys, profiles, recovered
bundles/binaries, databases or logs. Redact transport credentials without deleting
non-sensitive provenance. Mock/fixture success does not establish live compatibility.

Use owned disposable projects/processes for destructive fixtures. Preserve user
edits and recoverable backups; test rollback and failed cleanup. A PID alone is
not sufficient ownership proof. Approval and cancellation behavior are acceptance
requirements, including denial, timeout and interrupted tool execution.

Run local/manual checks and releases. **No GitHub Actions or scheduled automation.**
Do not infer permission to install unrelated tools or change global runtimes.
Carry failed gates into the next sprint with their evidence; do not mark them done.

## Sprint 1 — Prove the core AI development loop

Outcome: a measured, repeatable workflow with supported live providers. This is
the first execution priority; source inspection alone cannot close these stories.

| ID / status | User story | Dependencies | Acceptance gates and required evidence |
| --- | --- | --- | --- |
| OV-101 / Verified | As a maintainer, I can see exactly what the release claims. | Current audit | Pin feature/provider/platform/architecture matrices, fixtures and original input digest; record exclusions and unknowns. Capture startup, idle memory, request counts and cancellation baselines with reproducible workloads. |
| OV-102 / Verified | As a developer, I can chat with my configured model reliably. | OV-101; provider routing | Live GPT, DeepSeek and Grok through configured endpoints: stream, retry, timeout, stop, reload history and branch conversation. Record actual model/request identity and sanitized results; no duplicate submit after retry. Linux x64 (`ov/agent-chat-failures`): fixture history and Fork Chat with storage isolation, full-duration header/body timeouts, failure persistence; fixed a retried failure leaving an empty assistant turn in the saved chat and every fork. Coordinator clean rebuild, first-time: `verify:agent` `gdAOnz`, `--review-recovery` `BgIvtX`, `verify:agent-history` `oMNMIx`, `--fork-status 503` `1iKgVD`, `verify:agent-timeout headers` `rmVtjn` and `body` `WTH9Tg`. Verified on Linux x64 under baseline v3; live GPT/DeepSeek/Grok runs moved to OV-205. Accepted default: the unreachable `cursor-agent-host` failure producer is an explicit exclusion. |
| OV-103 / Partial | As a developer, I can ask Agent to change a project and control the result. | OV-102 | Disposable project: read/search, propose multi-file edits, apply/reject/undo, approve/deny a command, cancel a running tool, restart and resume. Verify expected diff, unchanged unrelated files and owned process cleanup. |
| OV-104 / Verified | As a developer, my subagent uses my chosen model and reasoning. | OV-102; delivered parameter fix | Test explicit/saved/inherit/disabled choices in native UI; inspect outgoing parent/subagent requests and actual provider acceptance. Unsupported values fail clearly; retries and tool continuations retain valid settings. Linux x64 (`ov/subagent-reasoning`, [evidence](../verification/subagent-reasoning-verification.md)): child label fixed to show the reasoning its request sends; child failures, parent Try again/Resume, Task resume, restart while failed/running and profile subagents covered. Worker runs `ZhWJbZ`, `0Zzh34`; coordinator rerun `Serbix`, first-time. Verified on Linux x64 under baseline v3; live runs moved to OV-205. Recorded residuals: plugin subagents not exercised; Settings did not open once after restart with a running Task; a failed child shows an empty chat with no recovery action. |
| OV-105 / Verified | As a developer, canceling autocomplete prevents a late request or stale buffered edit. | Focused REA autocomplete contract | Both workbench variants guard dispatch after awaited context preparation and buffered delivery after awaited `flushCpp`/before each event. Twelve regression tests prove cancellation boundaries and uncanceled behavior. Live backend/latency parity remains OV-602–OV-604. |

Sprint exit: core loop evidence exists per supported provider; failures remain
visible and block that provider's support claim. Establish performance baselines
now, then repeat them only for changes or unresolved regressions.

13 October OV-101 follow-up (owner: OpenVision): [release claims](../verification/release-claims.md)
pins the feature/provider/platform/architecture matrices, fixtures and exclusions;
[native baseline](../performance/native-performance-baseline.md) records the measurement scope.
The original executable matched
its retained inventory digest; original manifests and all fixture/runtime inputs
are pinned in `logs/agent-verification-FkFzEi/result.json`. The native Windows
fixture passed and recorded fresh/restart startup, eight memory samples, 16
expected inference requests, zero auxiliary title requests, stream Stop 65 ms and
command Stop 164 ms. Both owned hosts exited 0. Every OV-101 baseline clause is
now evidenced in the linked matrices/report; no other story is promoted by those
measurements. The denominator remains 42; fully Verified stories increase to 3.

13 October Windows fixture: [native Agent evidence](../recovery/rea-agent-runtime.md) proves
authenticated stream display, real Read and multi-file StrReplace continuations,
confirmed rejection restoring both originals, keeping both changes and preserving
an unrelated file. A full app restart retains the conversation, credentials and
kept edits; a subsequent request includes prior user context. Upstream Stop takes
152 ms in that loopback run. Local titles eliminate the auxiliary naming request.
The [command-control follow-up](../recovery/rea-command-cancellation.md) verifies native
approval/denial and fixes an observed orphaned Windows command after Stop using
retained Job Object ownership. OV-102/103 stay Partial: external providers,
branching, other shells/platforms and the other untested clauses remain gates.
The 42-story denominator is unchanged.

13 October live-provider follow-up (owner: OpenVision):
[direct API evidence](../verification/live-provider-compatibility.md) establishes GPT 6.1 Sol and
Grok 4.7 streamed tool roundtrips with low reasoning, and DeepSeek V4 Flash plain
streaming with the reasoning field omitted. The direct DeepSeek tool continuation
fixture returned HTTP 400, but the native Agent Read continuation now passes with
the explicit Provider default choice for DeepSeek, GPT 6.1 Sol and Grok 4.7.
Native DeepSeek High still returned HTTP 400; an
initial direct Grok continuation returned HTTP 429. These are recorded failures,
not removed gates. The compatibility report distinguishes each tested payload.
Native retry/stop/history/branching and the full reasoning matrix remain open. OV-102
and OV-203 retain Partial status.

15 October live-history follow-up: the native Windows verifier used the saved
Codex Easy `gpt-6.1-sol` endpoint and passed real file recall after application
restart, native Fork Chat with a distinct composer, fork-only follow-up, and
persisted source/fork transcript isolation. Both hosts exited 0; see
[Agent history evidence](../recovery/rea-agent-runtime.md#real-provider-history-and-branching).
This closes one real GPT history/branch subcase. Retry, timeout/Stop, DeepSeek/Grok
history, branch failure handling, broader reasoning and platform gates remain open;
OV-102 stays Partial.

The same real GPT-6.1 Sol setup then passed native Stop and same-chat resubmission:
the upstream request closed in 143 ms, relay abort settled in 3 ms, prior file
history was retained and the host exited 0. See [live Stop evidence](../recovery/rea-agent-runtime.md#real-provider-history-and-branching).
This closes the live GPT Stop/resubmission subcase; retry after provider failure,
timeout, other providers and the remaining story gates stay open.

## Sprint 2 — Complete provider settings and model interaction

14 October live history follow-up: the [compatibility report](../verification/live-provider-compatibility.md)
records GPT 6.1 Sol High, DeepSeek V4 Flash High and Grok 4.7 Provider default
native Read, app restart,
same-chat recall, Fork Chat and fork recall. Real requests preserve the selected
model/effort and contain the original assistant answer; recall uses no new file
tool or auxiliary title request. After exit, read-only database checks establish
separate identities, an unchanged source transcript, and the fork's copied prefix
plus exactly one new exchange. DeepSeek's earlier HTTP 400s remain failures;
unchanged payload replays now pass and no deterministic encoder defect is proven.
OV-102/203 stay Partial; retry, Stop/timeout and remaining provider/lifecycle gates
remain. The denominator and 5/42 Verified count are unchanged.

Outcome: usable model selection with capabilities owned by the provider contract.

13 October reasoning follow-up: [capability lifecycle evidence](../engineering/reasoning-capability-lifecycle.md)
verifies unverified-source notices, changed/empty/omitted capabilities, invalid
saved choices across restart, zero inference for blocked selections and explicit
recovery in the Windows parent Agent. Malformed reasoning discovery now reports
an error and retains the last valid catalog/selection across restart. Native
subagent capability-change/error behavior was then checked in the scoped follow-up below;
OV-203 stays Partial. The count stays 5/42.

The [subagent follow-up](../verification/subagent-reasoning-verification.md) restores Task Models
settings, preserves capability updates, and fixes disabled-child fallback to the
parent. Native fixtures pass inherited/explicit/saved reasoning, restart,
unavailable choices, recovery and disabled Explore. Real Codex Easy GPT High
Task/Read/parent continuation passed four HTTP 200 requests. Broader retries,
resumes, real explicit overrides and provider matrix remain open; OV-104/203
retain Partial status.

| ID / status | User story | Dependencies | Acceptance gates and required evidence |
| --- | --- | --- | --- |
| OV-201 / Verified | As a user, I can add a URL/key and discover or manually add models. | OV-101 | Verify discovery, empty/malformed catalogs, duplicate IDs across providers, renamed entries, key replacement and persistence. No silent provider fallback; only selected credentials reach the configured endpoint. [Native Windows local-contract evidence](../engineering/provider-selection-lifecycle.md); real-provider compatibility remains separate. |
| OV-202 / Verified | As a user, I can quickly select any available model. | OV-201 | Native Agent picker and settings: provider separators, search, keyboard navigation, focus restoration, screen-reader labels and stale discovery handling. Exercise 10,000 entries; record visible row/DOM bounds separately for both selectors. [Native Windows acceptance and limits](../performance/model-picker-scale.md). |
| OV-203 / Verified | As a user, I choose reasoning levels that my model actually supports. | OV-104; OV-201 | Provider-specific capabilities drive the UI, including extended levels when advertised; no universal low/medium/high assumption. Verify every advertised value or mark it unverified; test changed capabilities and invalid persisted choices. Linux x64 ([lifecycle](../engineering/reasoning-capability-lifecycle.md)): parent retry, resume and restart keep the selected level; a retry is blocked with 0 requests after the level is removed. Worker `1TvLVS`, `PUx7tZ`; coordinator `OycSXp`, plus `verify:model-menu` `PMN4N6` and `verify:provider-import` `67PdB0`, first-time. Verified on Linux x64 under baseline v3 (unverified levels stay labelled; per-level live checks moved to OV-205). |
| OV-204 / Verified | As a user, I understand why a model request failed. | OV-102; OV-201 | Exercise 401/403/429/5xx, offline, malformed streams, unsupported tools/images and context limits. Useful errors preserve retryability and request ownership; logs/UI omit secrets, request cancellation releases sockets and timers. Linux x64 (`ov/agent-chat-failures`): fixed the 4 MiB stream-event limit never applying on local mode; custom-header secret matrix (0 matches in 360 files and the UI); oversized and truncated stream cells. Coordinator clean rebuild, first-time: `verify:provider-matrix` `dDEn6g`, `--custom-header` `cbdzzg`, `verify:provider-errors` `ARsTEO`, `verify:provider-import` `nKDdfs`, plus the timeout runs above. Verified on Linux x64 under baseline v3; live failures moved to OV-205. Accepted defaults: tool-incapable models keep post-rejection guidance; process-wide redaction is proven for the Agent path only. |
| OV-205 / Planned | As a developer, my real configured providers and optional official accounts work end to end. | Funded provider balance; OV-102–OV-104, OV-203, OV-204, OV-602 | Baseline v3 live story. Owns every live clause moved out of other stories: GPT, DeepSeek and Grok stream, Stop, retry ending in success, history and fork, timeouts, live edits, subagent overrides, per-level reasoning, provider rejection of tools/images, autocomplete quality corpus and live editor acceptance, live context budgets with provider-reported usage, rules and memories in the first live request, and optional signed-in account workloads. Each uses the committed live modes (`verify:agent:live`, `verify:providers:live`, and the live flags added to the fixture verifiers); record real model and request identity and sanitized results. |

Sprint exit: a provider matrix distinguishes discovery, chat, tools, reasoning,
images and autocomplete support. Listing a model alone never earns a support tick.

14 October OV-204 follow-up: [provider failure handling](../engineering/provider-failure-handling.md)
records 14 native failure cases with explicit retry, bounded/stalled diagnostic
reads, connection-refusal recovery, Stop and dismissal. A context-limit response
previously triggered ten requests; the fixed path makes one and gives recovery
guidance. Actual tool/image capability inputs, remaining inference timeout/stream
cases and live/platform coverage remain unverified. OV-204 remains Partial;
the fixed ledger stays 5/42 Verified.

## Sprint 3 — Own customization and MCP lifecycle

Outcome: local user data and custom tools have clear paths, authority and cleanup.

| ID / status | User story | Dependencies | Acceptance gates and required evidence |
| --- | --- | --- | --- |
| OV-301 / Verified | As a user, my rules apply locally without an account. | Delivered local rules; OV-103 | Confirm first live Agent context includes user rules; generated memories stay workspace-scoped. Retain CRUD/restart/migration tests; add two real windows, malformed records and failed-write recovery. Scope network claims to observed processes. Linux x64 (`ov/rules-memories`): an unwritable profile now shows a native error dialog and exits 1 instead of exiting silently; memory-filesystem verifier ported to Linux; first-request rule fixture added. Coordinator clean rebuild, first-time: `verify:local-rules` `6Ph7R2`, `:agent-context` `8phY52`, `verify:rules:windows` `4K9KEn`, `verify:memory` `UuQGvp`, `:filesystem` `1sAZpu`, `verify:legacy-memory` `YAaaZE`, `:stale` `xROR4z`, `:windows` `Y5SVNK`, `verify:inline-edit` `d12QL8`; `verify:profile-io-faults` `6NhgmD`, `GdjFA1` after installing its host tools (xdotool, imagemagick, sqlite3). Verified on Linux x64 under baseline v3. Accepted defaults: EIO, torn sectors and power loss excluded; same-rule edits last-writer-wins; an unwritable profile explains and exits (no read-only session). |
| OV-302 / Verified | As a user, OpenVision owns its global rules, agents, skills, plugins and MCP settings. | REA path-owner inventory | Trace every producer, classifier, watcher and consumer; migrate additively with backup and explicit precedence. Test two profiles plus another installation. Do not rewrite global HOME/USERPROFILE; preserve intentional project-local compatibility inputs. Linux x64 (`ov/config-isolation`, [evidence](../recovery/rea-global-path-isolation.md)): fixed the developer `policy.json` read from HOME (reproduced natively); editor MCP discovery, daemon `mcp.json`, approvals, retrieval roots and computer-use homes redirected to the profile home (unit-tested); migration imports agents. Coordinator clean rebuild, first-time: `verify:global-paths` `AvQ5q3`, `rg0iuI`, `--migrate` `MrF5Ef`, `--second-installation` (separately packaged tree) `LaAtFO`, `verify:rules-isolation` `OleU9O`, `verify:local-rules` `5XVqMU`. Verified on Linux x64 under baseline v3. Recorded residuals: daemon and gated retrieval paths not reachable natively by default; plugin install writes not exercised; no native Agent session with zsh; named VS Code profiles inside one user-data dir share customizations (default pending owner decision). |
| OV-303 / Verified | As a developer, I can use STDIO and HTTP MCP tools safely. | OV-103; OV-302 | Local control-plane clients now cover initialize, list/call, token expansion, request cancellation and owned STDIO cleanup for disposable fixtures. Remaining gates: native Agent integration, approval/denial, reconnect, timeout and failed-cleanup evidence. Verified on Linux x64 under baseline v3 (19 October): `ov/mcp-safety` merged with per-file serialized config reloads (fixes the "5 !== 8" stale-revision race) and deletion of a legacy client that connects after its route was replaced; coordinator clean rebuild, then `verify:mcp-config-ownership -- --simultaneous` ×5 (`FiBggA`, `N1KBoY`, `hRT3n0`, `rfU65U`, `sYwsbn`), default (`1Ht91T`), `--failed-close` (`eMCidz`), `--http` (`flY5Ha`), `--same-basename` (`4hJSgx`) and `verify:agent -- --mcp-stdio --mcp-failures` (`FcFNvM`) pass first time as a non-root user; `test:mcp-lazy` 63/63. See the [worker report](../verification/worker-reports/mcp-safety.md). |
| OV-304 / Verified | As a user, authenticated MCP servers and local customization survive restart. | OV-303 | Exercise supported auth/OAuth including canceled consent, expiry and refresh; credentials remain in secret storage. Confirm skill/agent/plugin discovery precedence, invalid config diagnostics and watcher disposal with native fixtures. Verified on Linux x64 under baseline v3 (19 October): `ov/mcp-auth` merged (OAuth fixture, precedence, diagnostics, watcher disposal, and the #9/#10 fixes); coordinator clean rebuild, then `verify:mcp-auth` (`qzdyLz`), `verify:mcp-auth -- --secrets` (`5uQ1cs`), `verify:subagent-reasoning` (`QFuoTj`) and `verify:customization-lifecycle` `--precedence` (`zjB59c`), `--invalid` (`ni1rXs`) and `--watchers` (`6z41Dg`) pass first time as a non-root user. See the [worker report](../verification/worker-reports/mcp-auth.md). Reversible defaults ([#5](https://github.com/RemiPelloux/OpenVision/issues/5)): supported auth modes, denied-consent and rejected-refresh behaviour, project-then-profile-then-plugin precedence, unknown MCP transports reported and skipped. Windows/macOS secret storage and URL handlers moved to OV-901/OV-902; live hosted OAuth to OV-205. Residual: one wasted registration request in the legacy owner's start-up race. |

Sprint exit: global customization is isolated by design and tested, while
project-local inputs remain intentional. Environment switches alone are not proof.

## Sprint 4 — Make project development dependable

Outcome: complete everyday editor workflows with incremental filesystem behavior.

| ID / status | User story | Dependencies | Acceptance gates and required evidence |
| --- | --- | --- | --- |
| OV-401 / Verified | As a developer, I can manage large and multi-root projects. | OV-101 | Exercise open/save/rename/move/delete, symlinks, external changes, permissions and restored sessions. Preserve unsaved edits; record watcher and filesystem work for small edits in a large fixture. Linux x64 ([matrix](../recovery/rea-explorer-linux.md)): Arch/Wayland `o0pmid`; Ubuntu 24.04/X11 after the `ov/ubuntu-rerun-fixes` harness fixes, worker runs `LxGJOq`, `LQVKme` and coordinator rerun `pTLPvH`, plus `verify:project:lifecycle` `3zk1Rj`, all first-time. Verified on Linux x64 under baseline v3; Windows/macOS cells moved to OV-901/OV-902. |
| OV-402 / Partial | As a developer, language features stay correct while I edit. | OV-401 | Pin language/extension matrix; test diagnostics, rename, references, navigation, formatting and large files. Incremental patches retain undo/redo and conflict handling; no repeated full scan without a justified contract. Linux: [matrix evidence](../recovery/rea-language-matrix-linux.md). |
| OV-403 / Verified | As a developer, I can use terminals, tasks and debuggers. | OV-401 | Native shells: resize, Unicode, environment, exit/cancel/restart, task problem matching and debugger break/step/stop. Check child ownership and release after window/session closure. [Windows native evidence](../engineering/development-workflows.md) passes these workflows; intermittent host exit 134 remains unresolved (moved to OV-901). Linux x64 ([clause table](../recovery/rea-shutdown-ownership.md)): missing-shell wrapper abort fixed; on Ubuntu 24.04/X11 `test:shutdown` 35/35, `verify:development` `hdPN1p`, and `verify:shutdown-cycles` 3 consecutive first-time passes twice (worker `XtnQt3`, `7zIjAX`, `pPoZI9`; coordinator `zoiOa4`, `enVGGQ`, `NuzGrR`). Verified on Linux x64 under baseline v3. |
| OV-404 / Verified | As a developer, Git and worktrees protect my work. | OV-401; OV-103 | Branch/worktree creation, diff review, conflicting edits and merge resolution in disposable repositories. Clean up only owned worktrees; preserve dirty/untracked data and prove recovery after interruption. [Native Windows clause-by-clause evidence](../engineering/git-workflows.md), including abnormal-host restart. |

Sprint exit: publish the tested language/shell/debugger matrix and unresolved
limits; a rendered editor or command declaration does not close a workflow.

13 October Windows follow-up: [native project workflow evidence](../recovery/rea-project-workflows.md)
proves Unicode edit/save/undo/redo, search across two roots and a configured Node
process task with the expected working directory/environment. OV-401–403 remain
Partial; the untested clauses above remain release gates.

14 October Windows follow-up: [project lifecycle verification](../verification/project-lifecycle-verification.md)
passes native rename/move/delete, external reload and conflicting saves, directory
junction edits, actual ACL-denied writes/retry, and restoration of unsaved edits
after normal shutdown. OV-401 remains Partial for file-symlink and large-project
watcher/filesystem work; no crash or other-platform guarantee is inferred.

17 October Linux follow-up: the [Linux Explorer matrix](../recovery/rea-explorer-linux.md)
passes every OV-401 clause on Linux x64; OV-401 remains Partial until its Windows cells pass.

## Sprint 5 — Build local project intelligence

Outcome: understood, incremental indexing and useful retrieval without hidden uploads.

| ID / status | User story | Dependencies | Acceptance gates and required evidence |
| --- | --- | --- | --- |
| OV-501 / Verified | As a maintainer, I know where project data is processed. | OV-101; REA file_service callers | Trace JS/native/server boundaries, actual loaded addons and outbound requests with owned fixtures. Record each operation's data destination, contract, digest and unknowns; do not infer locality from a filename. Linux x64 [native capture](../recovery/rea-project-data-destinations.md) passes; hosted Quick Edit reranking and file sync are blocked. Remaining: TypeScript type acquisition (OV-1005), Windows/macOS capture. Verified on Linux x64 under baseline v3 (19 October): `ov/data-telemetry` merged; coordinator clean rebuild of the merged branch, then `verify:data-destinations` (`4f9gD9`), `verify:telemetry` (`ceK2TG`) and `verify:telemetry:extended -- --idle-seconds 600` (`ogOZTi`) pass first time as a non-root user; with the worker's `XE8H2u` and `OfXO1m`, both required 600-second runs have passed. Windows/macOS and signed-in captures moved to OV-901, OV-902 and OV-205. |
| OV-502 / Verified | As a developer, search and retrieval find relevant project context. | OV-501 | Implement or validate available parsing/chunking/embedding/ranking contracts. Use pinned answer/file relevance fixtures, unavailable-backend behavior and configurable endpoints; report measured quality and limits. Verified on Linux x64 under baseline v3 (19 October): `ov/retrieval-index` merged with the activation hook wired again; coordinator clean rebuild of the merged branch, then `verify:retrieval` (`pTLT31`), `verify:retrieval-incremental` (`KjM2ij`), `verify:retrieval-recovery` (`kSjJls`) and `verify:data-destinations` with the indexing phase (`GD7kXd`) pass first time as a non-root user; `test:retrieval` 45/45; quality gate recall@5 0.947, MRR 0.865. See the [worker report](../verification/worker-reports/retrieval-index.md). Reversible defaults ([#5](https://github.com/RemiPelloux/OpenVision/issues/5)): owned lexical retrieval (FTS5/BM25) is the release scope, embeddings optional and off, no shipped embedding model, thresholds equal the measured baseline, tool renamed `CodebaseSearch`, index starts on first search. Windows/macOS runs moved to OV-901/902; live embedding quality to OV-205. Open risk: the first search in a large folder waits up to 20 s and returns partial results. |
| OV-503 / Verified | As a developer, indexing respects ignores and updates incrementally. | OV-401; OV-502 | Edit/rename/delete, ignored paths, symlinks, branch changes and configuration changes invalidate the right records. Record read/parse/index counters; small edits cannot silently trigger whole-project rebuilds. Verified on Linux x64 under baseline v3 (19 October): edit, rename, delete, ignored paths, symlinks (never followed), branch and configuration changes invalidate only their records; coordinator clean rebuild of the merged branch, then `verify:retrieval` (`pTLT31`), `verify:retrieval-incremental` (`KjM2ij`), `verify:retrieval-recovery` (`kSjJls`) and `verify:data-destinations` with the indexing phase (`GD7kXd`) pass first time as a non-root user; `test:retrieval` 45/45; quality gate recall@5 0.947, MRR 0.865. See the [worker report](../verification/worker-reports/retrieval-index.md). |
| OV-504 / Verified | As a user, indexing stops and recovers cleanly. | OV-503 | Cancel/pause, restart after interrupted writes, schema migration and index deletion/rebuild. Bound worker/cache use against recorded workload budgets; release owned idle resources and verify reactivation. Verified on Linux x64 under baseline v3 (19 October): cancel/pause, restart after `kill -9`, corruption quarantine, schema 0→1 migration, delete/rebuild, and idle release (60 s, about 80 MiB) with zero-read reactivation; coordinator clean rebuild of the merged branch, then `verify:retrieval` (`pTLT31`), `verify:retrieval-incremental` (`KjM2ij`), `verify:retrieval-recovery` (`kSjJls`) and `verify:data-destinations` with the indexing phase (`GD7kXd`) pass first time as a non-root user; `test:retrieval` 45/45; quality gate recall@5 0.947, MRR 0.865. See the [worker report](../verification/worker-reports/retrieval-index.md). |

Sprint exit: retrieval quality, data destinations and incremental-work evidence
are available. The existing native addon remains an unknown until measured.

## Sprint 6 — Deliver AI autocomplete and next-edit behavior

Outcome: a tested completion contract, separate from chat model discovery.

| ID / status | User story | Dependencies | Acceptance gates and required evidence |
| --- | --- | --- | --- |
| OV-601 / Verified | As a maintainer, I can explain the completion request and result contracts. | REA StreamCpp client; OV-101 | [Autocomplete contract findings](../recovery/rea-autocomplete-contract.md) records request context, streaming events, replacement ranges, prediction data, cancellation and required server behavior with source Evidence IDs. Recovered client facts remain separate from unverified server assumptions. |
| OV-602 / Verified | As a developer, my configured completion backend offers useful suggestions. | OV-601; OV-201 | Custom Chat Completions adapter implemented; native Windows suggestions and 13-case empty/partial/malformed/unsupported-response matrix pass. Real GPT/DeepSeek/Grok each completed one sum-expression fixture. See [implementation and limits](../recovery/rea-custom-autocomplete.md). Remaining: representative multi-language/project quality and native live-provider acceptance. Linux x64 (`ov/autocomplete-quality`): pinned 36-case multi-language quality corpus and scorer, and a native live editor mode, both proven with labelled fixture dry runs (`5Zqh03`, `SMQK1p`; default `verify:completion` passes). Verified on Linux x64 under baseline v3: the quality clause is inherently live and moved to OV-205 as a one-command run. Proposed "useful" bar (owner decision, [#5](https://github.com/RemiPelloux/OpenVision/issues/5)): at least 60% pass rate per language. |
| OV-603 / Verified | As a developer, accepting a suggestion never corrupts my edits. | OV-602; OV-402 | Native Windows single/multiline Unicode Tab and partial-word accept/save/undo verified. Pending typing, Escape and file-switch cancellation preserve exact text and close upstream within a 1,000 ms local-fixture budget. Fixed Escape before display and partial-undo grouping. See [evidence](../recovery/rea-custom-autocomplete.md). Linux: [acceptance matrix](../recovery/rea-autocomplete-acceptance-linux.md), full-accept undo fixed. Remaining: broader editing/latency workloads and platform matrix. Linux x64 (`ov/autocomplete-safety`): fixed natively reproduced corruption when typing during the async Tab accept (model-version guard, both workbench variants) and requests for uncommitted IME composition text; split editors pass; line-wise accept is not exposed (documented); declared latency budgets in `completion-budgets.json`. Coordinator clean rebuild, first-time: `verify:completion` `28ARvS`, `ZXb0Yd`, `--editing` `OsT57a`, `rKmc5j`, `--acceptance` `Ql1hmf`, `b6Oi2z`, `verify:inline-edit` `7K0pwA`. Verified on Linux x64 under baseline v3; a real input method and Windows/macOS runs moved to OV-901/OV-902. |
| OV-604 / Planned | As a developer, next-edit predictions are understandable and fast. | OV-603; OV-503 | Explicit supported prediction contract or documented release-scope decision. Verify navigation/range correctness and stale results; record first/subsequent suggestion latency and acceptance quality on fixed workloads. |

Sprint exit: advertise only supported completion modes. Preserve the separate
status of client recovery, backend implementation and live correctness checks.

## Sprint 7 — Validate ecosystem and specialized workflows

Outcome: imports, extensions and supported remote/AI tools work beyond one fixture.

| ID / status | User story | Dependencies | Acceptance gates and required evidence |
| --- | --- | --- | --- |
| OV-701 / Verified | As a user, I can import settings without losing my OpenVision setup. | OV-302 | Real-profile/platform fixtures: preview, JSONC, snippets, protected settings, extension registration, idempotency and exact restore. Declare excluded accounts/secrets/chat databases/enablement state/profile registries; preserve source data. Linux x64 (`ov/import-restore`, [evidence](../verification/import-linux-2026-10-19.md)): staged import/restore with crash recovery; fixed the running extensions watcher replacing imported registry entries, a restore ordering race and EROFS reported as ENOENT; protected settings, untouched source and state, declared exclusions; realistic generated Cursor Linux profile. Coordinator clean rebuild with the merged branches, first-time: `verify:import` `YgiVIa`, `MXPbUy`, `--realistic-profile` `GZWjTG`, `verify:import-faults` (SIGKILL, ENOSPC, EROFS) `fZG2bE`, `Dno4T5`, `verify:provider-import` `2LBuYH`. Verified on Linux x64 under baseline v3. Accepted defaults: named target profiles stay fail-closed; the "real profile" fixture is generated, never the owner's data. |
| OV-702 / Verified | As a developer, extensions install and activate predictably. | OV-402; OV-403 | Install/update/uninstall, language packs and native addons on supported ABI/platforms; incompatible packages fail clearly. Validate local integrity after assembly, with no claim of vendor authenticity. Linux x64: [lifecycle matrix](../recovery/rea-extension-lifecycle-linux.md), all 16 clauses pass on Arch/Wayland (`B5m8yT`) and on merged `main` `b4f52a56` in Ubuntu 24.04/X11 (`qQAjRu`, `zdi9V9`, both first-time). Verified on Linux x64 under baseline v3; Windows and macOS runs moved to OV-901/OV-902. |
| OV-703 / Planned | As a developer, I can work through supported remote environments. | OV-303; OV-403; OV-702 | SSH, WSL and containers each get a declared host matrix: connect/reconnect, filesystem, remote extension host, terminals, secrets and custom-provider routing. Verify local/remote process ownership and cleanup. |
| OV-704 / Unknown | As a user, supported image/browser/computer workflows behave predictably. | OV-103; OV-204 | Inventory intended specialized modes and required helpers/providers; scope explicitly. For each included mode, test input/result handling, permissions, cancellation and cleanup; unavailable capability gets a useful explanation. |

Sprint exit: publish compatibility matrices with native observations rather
than treating bundled helpers or extension manifests as execution evidence.

## Sprint 8 — Remove original-installation build dependence

Outcome: clean-checkout build ownership with replaceable native/service contracts.

| ID / status | User story | Dependencies | Acceptance gates and required evidence |
| --- | --- | --- | --- |
| OV-801 / Verified | As a maintainer, I can account for every runtime dependency. | OV-501; native inventory | Map all 52 PE paths and 15 distinct WASM payloads to digests, loaded role, source/license/version, ABI and rebuild/replacement disposition. Complete the original five missing WASM REA records (four now evidenced; one remains). Keep pseudocode counts separate from source/build availability. Verified on Linux x64 under baseline v3 (19 October): `ov/native-inventory` merged; coordinator clean rebuild, then `verify:native-inventory` (pinned AppImage digest matched; 39 native and 22 WASM paths, 49 dispositions, 0 failures) and `verify:native-loaded` run `4dVbAy` pass first time as a non-root user. Defaults recorded as reversible owner decisions ([#5](https://github.com/RemiPelloux/OpenVision/issues/5)): the Linux AppImage is the denominator, non-REA `esbuild.wasm` evidence is accepted, and the 3.24.18 reference counts are informational. Windows PE paths moved to OV-901. |
| OV-802 / Planned | As a maintainer, I can build the host and upstream dependencies. | OV-801 | Pin Electron/runtime/addon/toolchain sources and lockfiles; rebuild storage, watcher, terminal and OS bindings where required. Verify ABI and behavioral fixtures; record binary provenance and applicable distribution terms. |
| OV-803 / Planned | As a maintainer, required proprietary helpers and hosted contracts are replaceable. | OV-501; OV-601; OV-801 | Prioritize loaded file-service, parsing and Agent/sandbox helpers by measured dependency. Recover interfaces or implement replacements; test authority, malformed input, process identity and cleanup. Pseudocode is analysis evidence, not buildable source. |
| OV-804 / Planned | As a contributor, I can build OpenVision without the original installation. | OV-802; OV-803 | Clean machine/checkout with documented sources and pinned tools builds, launches and passes core acceptance. No ignored recovery tree, original install or undocumented local file needed; repeat build and explain non-deterministic outputs. |

Sprint exit: reproduce the build from documented inputs. Recovering every
Chromium function is not a prerequisite; every required dependency needs a valid
build/replacement disposition. Absent server source remains explicitly absent.

## Sprint 9 — Package and verify supported platforms

Outcome: installable OpenVision with platform-specific execution evidence.

| ID / status | User story | Dependencies | Acceptance gates and required evidence |
| --- | --- | --- | --- |
| OV-901 / Partial | As a Windows user, I can install and use the complete supported product, and every accepted story passes on Windows. | OV-804; core workflow stories | Clean install on each claimed architecture; native editor, secrets, import, terminal, Agent, autocomplete, MCP and extension workflows. Confirm OpenVision identity in all dialogs, launchers and process metadata. **Baseline v3:** also owns every Windows clause moved out of other stories: rerun each story's Linux verifiers (or their Windows equivalents) on the current source, diagnose the intermittent exit 134 and the utility worker `0xC0000005`, and port the Linux-only verifiers listed in the [platform and live test plan](platform-and-live-test-plan.md#ov-901--windows-x64). |
| OV-902 / Planned | As a macOS user, I can run the same supported workflows, and every accepted story passes on macOS. | OV-804 | Real target-machine/architecture suite, keychain, permissions, sandboxing, paths and native addons; signed/notarized distribution if claimed. Ad-hoc signing and portable fixtures do not close this story. **Baseline v3:** also owns every macOS clause moved out of other stories. A formal owner decision not to claim macOS removes this story and those clauses. |
| OV-903 / Verified | As a Linux user, I can run the same supported workflows. | OV-804 | Real supported distributions/architectures and declared display environments; secrets, sandbox, shell, native addons and complete critical suite. Document packaging prerequisites and any capability differences. Verified on Linux x64 under baseline v3 (20 October): every worker branch merged (including `ov/linux-completion`: keyring hang #6 and `--glass` branding #8 fixed, verifier diagnostics); coordinator clean rebuild of the final merged code, then `verify:critical -- --subset linux-critical` (`SHp1A9`) passes 11/11 first time, with `verify:mcp-session` (`oMvJWu`), `verify:startup-traversal` (`JUH2As`, 1,262 / 1,300) and `verify:agent-interruption` (`tcjitm`), as a non-root user on X11 Xvfb with dbus and a plaintext keyring; the worker's Wayland headless Weston smoke (`g2keFJ`) passed 5/5. Reversible defaults ([#5](https://github.com/RemiPelloux/OpenVision/issues/5)): the claimed matrix is x64/glibc, X11 and Wayland, gnome-keyring or the no-service path; `--glass` is a supported entry point; OV-804 does not block. Other distributions, real desktops and ARM64 moved to OV-905. See the [worker report](../verification/worker-reports/linux-completion.md). |
| OV-904 / Verified | As a user, upgrades and rollback preserve my work. | OV-901–OV-903 on claimed targets | Manual/local packaging pipeline; installer/uninstaller, signed release provenance, interrupted upgrade, profile migration, rollback and user-data retention tests. Exclude original update endpoints and verify the selected update strategy. Verified on Linux x64 under baseline v3 (19 October): `ov/updates-rollback` merged (signed release provenance, installer/uninstaller, interrupted upgrade at every phase, profile migration, rollback with refusal of a profile the older version cannot open, retention and purge, no update endpoints); coordinator clean rebuild, then `verify:upgrade:linux -- --previous-runtime` against a `v0.2.0-preview.7` tag build passes twice first time (`LigZev`, `l68zmi`) as a non-root user; `test:updates` 43/43. Limits: N+1 is a version-bump fixture and the 0→1 migration is marker-only. Windows/macOS installers moved to OV-901/OV-902. See the [worker report](../verification/worker-reports/updates-rollback.md). |
| OV-905 / Planned | As a Linux user on another distribution, display server or architecture, I can run the same supported workflows. | OV-903 | Baseline v3 platform story. Run the Linux critical suite on each claimed distribution beyond the verified ones, on real GNOME and KDE sessions (including KWallet), on Ubuntu desktop with its AppArmor user-namespace policy, and on ARM64 with its own pinned input. Each cell needs its own dated evidence; unavailable machines are blockers, not passes. |

Sprint exit: a platform is supported only when its required native checks pass.
Record unavailable machines/signing prerequisites as blockers, not successful tests.

## Sprint 10 — Optimize, harden and close the release ledger

Outcome: measured efficiency and all accepted product gates closed with evidence.

| ID / status | User story | Dependencies | Acceptance gates and required evidence |
| --- | --- | --- | --- |
| OV-1001 / Partial | As a developer, Agent uses necessary context and cancels promptly. | OV-101; OV-103; OV-503 | Compare fixed workloads for input tokens, duplicate requests, retained history and stop latency. Preserve retry/branch/tool-call reasoning; test session disposal and upstream cancellation. Set numeric budgets from baselines before accepting optimizations. |
| OV-1002 / Partial | As a user, editing and streaming remain responsive in large sessions. | OV-202; OV-402; OV-603 | Measure frame times, input latency, mounted transcript/model rows, heap and filesystem work. Verify batched streams, bounded visible rendering and incremental edits against the same dataset and declared budgets. |
| OV-1003 / Partial | As a user, idle services release memory without breaking reactivation. | OV-504; OV-703; OV-901–OV-903 | Inventory processes/watchers/timers; measure cold/warm startup, idle/active private memory and long-session growth. Ownership-aware lazy startup/disposal and reactivation pass; report platform workloads and tradeoffs, not universal speed claims. |
| OV-1004 / Planned | As a release owner, I can demonstrate completion and recover from failures. | All accepted stories | Check secret/log handling, command/tool authority, denied access, corrupt state, failed cleanup and crash recovery. Re-run the supported critical matrix; link every gate to evidence, document residual exclusions and publish run/build/recovery instructions. |
| OV-1005 / Verified | As a local-profile user, built-in telemetry never collects or uploads my activity. | Recovered telemetry owner contracts | Implemented: core/workbench/extension collectors and uploads disabled, imports keep telemetry off, crash reporter disabled. 24 focused tests and a 65-second native Windows capture pass. See [telemetry audit](../recovery/rea-telemetry-audit.md) for exact evidence. Remaining: process-tree networking across extended workloads and macOS/Linux runtime checks; independently installed extensions need separate assessment. Linux x64 source-build process-family capture: [rea-telemetry-linux](../recovery/rea-telemetry-linux.md). Verified on Linux x64 for the local profile under baseline v3 (19 October): coordinator clean rebuild of the merged branch, then `verify:data-destinations` (`4f9gD9`), `verify:telemetry` (`ceK2TG`) and `verify:telemetry:extended -- --idle-seconds 600` (`ogOZTi`) pass first time as a non-root user; with the worker's `XE8H2u` and `OfXO1m`, both required 600-second runs have passed. Reversible defaults ([#5](https://github.com/RemiPelloux/OpenVision/issues/5)): local VSIX installs no longer query the Marketplace (no update checks for them); a cached Statsig bootstrap is ignored; `instant_grep_indexing`, `custom_agents_enabled` and `customize_global_search` stay off. Windows, macOS and packaged-release captures moved to OV-901, OV-902 and OV-904. |

Sprint exit: all accepted stories are Verified for the release matrix, no required
gate is unknown, and performance budgets pass. Any narrowed scope requires an
explicit recorded decision; it is not proof of original-product parity.

## Updating this ledger

20 October 2026, OV-903: all worker branches merged (release-safety, modes-inventory, remote-ssh, helper-replacement, upstream-host, idle-resources, responsiveness, linux-completion); clean rebuild; the Linux critical subset passes 11/11 first time on the final build. Verified on Linux x64: **28/44**. Held for owner decisions or hardware: OV-1002, OV-1003, OV-704, OV-604, OV-703, OV-802, OV-803; OV-1004 is promoted last.

19 October 2026, OV-904: merged `ov/updates-rollback`; clean rebuild; two first-time `verify:upgrade:linux` passes across `v0.2.0-preview.7`. Verified on Linux x64: **27/44**.

19 October 2026, OV-303: merged `ov/mcp-safety` (reload serialization and late legacy-connect cleanup); clean rebuild; 10 native MCP checks pass first time, including 5/5 `--simultaneous`. Verified on Linux x64: **26/44**.

19 October 2026, OV-502/OV-503/OV-504: merged `ov/retrieval-index` (activation hook fixed and wired); clean rebuild; 4 native retrieval and data-destination checks pass first time. All three Verified on Linux x64: **25/44**.

19 October 2026, OV-304: merged `ov/mcp-auth` with the #9 (terminal environment persistence) and #10 (custom subagent body) fixes; clean rebuild; 6 native checks pass first time. Verified on Linux x64: **22/44**.

19 October 2026, OV-501/OV-1005: merged `ov/data-telemetry`; clean rebuild; data-destination, telemetry and 600-second idle telemetry runs pass first time. Both are Verified on Linux x64: **21/44**.

19 October 2026, OV-801: merged `ov/native-inventory`; clean rebuild; `verify:native-inventory` and `verify:native-loaded` (`4dVbAy`) pass first time. Verified on Linux x64: **19/44**.

19 October 2026, OV-603/OV-602: merged `ov/autocomplete-safety` and `ov/autocomplete-quality`; clean rebuild; 3 suites and 9 native checks pass first time. Both are Verified on Linux x64: **18/44**.

19 October 2026, OV-701: merged `ov/import-restore`, `ov/agent-context`, `ov/language-tools` and `ov/idle-resources`; clean rebuild; 10 suites and 17 native checks rerun, all first-time except `verify:startup-traversal` (`OLDKis`, 1,394 > 1,300 listings on the merged code; OV-1003 stays Partial). OV-701 is Verified on Linux x64: **16/44**. OV-1001 and OV-402 checks pass but need owner decisions ([#5](https://github.com/RemiPelloux/OpenVision/issues/5)).

19 October 2026, OV-102/OV-204: merged `ov/agent-chat-failures`, `ov/agent-editing` and `ov/mcp-safety`; clean rebuild and a combined first-time rerun of 9 suites and 32 native checks. OV-102 and OV-204 are Verified on Linux x64: **15/44**. OV-103 passes every native check but stays Partial until the owner accepts its residuals ([#5](https://github.com/RemiPelloux/OpenVision/issues/5)). OV-303 stays Partial: `--simultaneous` failed 1 of 3 here (`EPeEu8`) and 1 of 4 on the worker.

19 October 2026, OV-302: merged `ov/config-isolation`; clean rebuild, packaged second installation and reruns pass. Verified on Linux x64: **13/44**. See the [worker report](../verification/worker-reports/config-isolation.md).

19 October 2026, OV-301: merged `ov/rules-memories`; clean rebuild and reruns pass. Verified on Linux x64: **12/44**. See the [worker report](../verification/worker-reports/rules-memories.md). Follow-up: `verify:profile-io-faults` fails with an unclear TypeError when `xdotool`, `import` or `sqlite3` is missing; it should name the missing tool.

19 October 2026, OV-104/OV-203: merged `ov/subagent-reasoning` (child reasoning label defect fixed; retry/resume/restart coverage). Coordinator rebuild and first-time reruns pass. Both are Verified on Linux x64: **11/44**. See the [worker report](../verification/worker-reports/subagent-reasoning.md).

19 October 2026, OV-401/OV-403: `ov/ubuntu-rerun-fixes` fixed the four Ubuntu/X11 failures. The product fix: the pty wrapper aborted (SIGABRT) on a missing shell. The other three were harness fixes: the probe rate is now taken over whole 5.007 s poll periods (budget unchanged), the keyring prompt no longer steals focus, and scrollback is read instead of only the viewport. A coordinator rebuild and rerun on merged code passed first time. Both stories are Verified on Linux x64: **9/44**. See the [worker report](../verification/worker-reports/ubuntu-rerun-fixes.md).

18 October 2026, baseline v3 re-scope (owner decision): platform and live clauses move into OV-901 (Windows), OV-902 (macOS), new OV-905 (Linux distributions, displays and architectures) and new OV-205 (live providers and official accounts); the denominator becomes 44. OV-702 is promoted to Verified on Linux x64 after first-time Ubuntu 24.04/X11 runs `qQAjRu` and `zdi9V9` on merged `main` ([evidence](../recovery/rea-extension-lifecycle-linux.md#ubuntu-2404--x11-rerun-on-merged-main)). The OV-401 and OV-403 reruns found four new failures, so both stay Partial ([status page](eta-and-definition-of-done.md#re-scope-baseline-v3)).

18 October 2026, OV-1002 (owner: OpenVision): [Linux responsiveness budgets](../performance/responsiveness-linux.md) add fixed large-session datasets and a native budget verifier, and stop rewriting the 12.4 MB published model catalog on every application save; controlled fixture only, OV-1002 stays Partial.

17 October 2026, OV-1001 (owner: OpenVision): [Linux Agent context budgets](../performance/agent-context-linux.md) add a native budget verifier and fix loop-retry repeats and running-chat close; controlled fixtures only, OV-1001 stays Partial.

14 October 2026, OV-302/OV-701 import follow-up (owner: OpenVision):
[Native import ownership](../verification/import-profile-verification.md) resolves the requesting
window's actual profile and extension paths, preserves scoped backup ownership,
and fixes Windows URI normalization that blocked registry restore. Nine native
checks and 13 focused tests pass, including exact restore and untouched normal
profile digests. Named profiles, CLI/native backup interoperability and failure/
platform gates remain open. Both stories remain Partial; the denominator and
Verified count are unchanged. The portable payload predates this change.

14 October 2026, parallel local reliability follow-up (owner: OpenVision):
[Cross-window memory review](../guides/project-memories.md#cross-window-workspace-storage)
now receives owned workspace record changes and rejects stale approvals; the
native two-renderer fixture passed 11 checks and preserved original database
bytes. [Provider failure handling](../engineering/provider-failure-handling.md#dns-and-tls-recovery-guidance)
passed 16 native scenarios, including DNS/HTTPS protocol errors and explicit
recovery, with 36 expected requests and no synthetic-key log matches.
[Large-project verification](../verification/project-scale-verification.md) passed incremental
notifications and stable recursive watcher checks at 100 and 10,000 files.
All owned hosts exited 0. These fixtures use no paid inference; their reports
state the IPC fixture and resource-measurement limits. Physical I/O recovery,
certificate/inference-timeout cases, file symlinks and filesystem work bounds
remain open. OV-301, OV-204 and OV-401 remain Partial: six of 42 stories are
fully Verified, with the same 34-story target. The portable payload is unchanged.

13 October 2026, OV-1001/OV-1003 follow-up (owner: OpenVision):
[workspace context optimization](../performance/context-memory-optimization.md) removes repeated
status/branch reads for shared repository roots and bounds foreground/background
folder work. Recovered-owner tests cover fresh data, failures and disposal; the
Windows synthetic benchmark records allocation and request-count improvements.
Whole-app idle/long-session memory and other platforms remain open. Both stories
remain Partial; the accepted denominator and Verified count are unchanged.

13 October 2026, OV-303/OV-1003 follow-up (owner: OpenVision):
[MCP startup and native Agent evidence](../recovery/rea-mcp-startup.md) defers unused callback
connections and unconfigured shared-process routing. Native Windows HTTP tests
prove late configuration, discovery, approval/denial, real tool results and saved
configuration after full restart. The fixed-workload
[memory comparison](../performance/native-performance-baseline.md#mcp-startup-comparison-13-october)
records one fewer idle process and a 155.29 MiB lower settled private-commit sample;
16 inference requests, zero title requests and cancellation budgets are preserved.
Both stories remain Partial: native STDIO, OAuth, reconnect/timeout/failed cleanup,
multi-window behavior, idle disposal, long-session growth and other platforms
still need evidence. The 42-story denominator and 3 Verified stories are unchanged.

13 October 2026, OV-303/OV-1003 lifecycle follow-up (owner: OpenVision):
[MCP transport ownership and cancellation](../recovery/rea-mcp-lifecycle.md) fixes late
transport attachment leaking abandoned STDIO children and propagates Stop across
the shared-process IPC request to the SDK. Native HTTP and STDIO evidence covers
approval/denial, real output, cancellation, continued calls and configured restart;
STDIO shutdown verifies all fixture children exit. Reconnect failures, timeouts,
OAuth, native failed cleanup, multi-window/remote behavior and platform/long-session
gates remain open. Both stories remain Partial.

13 October 2026, OV-202/OV-203 UI follow-up (owner: OpenVision):
[native model menu](../verification/model-menu-verification.md) adds provider headings/counts and
separates model names from reasoning badges. Windows fixture evidence covers
search, keyboard selection, empty results and the reasoning submenu. This does
not establish live-provider reasoning acceptance, accessibility completeness or
bounded Agent-picker rendering at 10,000 models. Both stories remain Partial.
No accepted story was removed or promoted; three of 42 remain fully Verified.

13 October 2026, OV-303 recovery follow-up (owner: OpenVision):
[MCP disconnect and timeout recovery](../recovery/rea-mcp-recovery.md) extends native fault
verification and fixes the connection manager returning a stale adapter after a
STDIO process closes. A subsequent operation waits for the existing lifecycle to
reconnect; the failed operation is not replayed. The linked report distinguishes
original failure evidence, final build evidence and unresolved provider/platform
gates. This does not promote an acceptance story or change the denominator.

13 October 2026, OV-201/OV-202 retention follow-up (owner: OpenVision):
[Saved-model discovery retention](../performance/model-catalog-retention.md) keeps models absent
from a successful catalog response, with visible unlisted status. Native Windows
evidence covers malformed/empty/reduced catalogs, inference using a retained
model, normal restart, key replacement, custom names, disabled state and explicit
removal. Duplicate IDs across providers and the remaining UI/provider/platform
gates stay open. No story is promoted; the user's revised target is 34 of 42.

13 October 2026, OV-104/201/202/203 identity follow-up (owner: OpenVision):
[Provider-specific model choices](../engineering/provider-model-identity.md) retain duplicate
raw IDs as distinct choices. Native Windows evidence verifies A/B routing with
separate keys, persistence after restart, an A-parent/B-child/A-continuation and
autocomplete acceptance. The menu upgrade check retains saved reasoning. Remaining
native failure, live-provider, accessibility and large Agent-picker gates remain
explicit; no story is promoted and the denominator stays 42.

14 October 2026, preview.4 local reliability follow-up (owner: OpenVision):
[Project Home cloning](../guides/project-home.md) now uses an explicit repository URL form;
native Windows checks clone local repositories and a real public GitHub repository,
preserve existing destinations and recover after failure. [MCP cleanup](../recovery/rea-mcp-cleanup.md)
bounds pending acknowledgements while retaining resource ownership; final built
STDIO and HTTP checks include rejection and late recovery. [Quick Edit context](../recovery/rea-inline-edit.md)
removes exact outbound attachment duplicates, with measured local processing cost
and no RAM/token savings claim. [Provider failure checks](../engineering/provider-failure-handling.md)
now include actual self-signed certificate rejection and explicit retry. These
narrow checks leave the story-level acceptance count at **6/42 Verified**.

14 October 2026, OV-102/OV-403 verification follow-up (owner: OpenVision):
[Real provider Stop checks](../verification/live-provider-compatibility.md#native-stop-and-same-chat-resubmission)
pass for GPT 6.1 Sol, DeepSeek V4 Flash and Grok 4.7 at Provider default, with
same-chat recall and no duplicate submission. Live error Retry and controlled
timeout recovery remain open; the earlier GPT High pre-stream timeout is retained.
[Shutdown diagnostics](../engineering/development-workflows.md#launcher-and-native-shutdown-evidence)
now distinguish the Windows launcher from the native main process and require
native code-0 exit evidence. Three full workflow runs provide that evidence;
the earlier launcher exit 134 remains unexplained. These are verifier changes,
not product performance or crash fixes. Both stories remain Partial, the portable
payload is unchanged, and the ledger stays **6/42 Verified (14.29%)**.

14 October 2026, preview.6 distribution follow-up (owner: OpenVision):
[Packaged current-window project opening](../verification/portable-preview6.md) now passes
native Windows history/folder/workspace/picker/clone paths while retaining the
same native window ID. Canceling a switch preserves unsaved editor content.
The repository installer reconstructs the seven-part payload and validates its
archive hash; native theme/restart/custom-color checks also pass on that extracted
app. Main implementation commit: `4b5cb04`; the release includes verification
commit `c429e1a`. No full story is promoted: **6/42 Verified (14.29%)** remains
unchanged. [Remaining priorities](roadmap.md#preview6-delivery-and-next-priorities)
use complexity points; platform, independent-build and full rollback gates remain.

15 October 2026, OV-1003 utility ownership follow-up (owner: OpenVision;
parent commit `e868282`): [native utility cleanup](../engineering/utility-process-ownership.md)
reproduces 16 retained completed-run listeners in both original owners and zero
in the fixed owners. Actual forks, termination, window close and native
terminal/task/debugger regressions pass on Windows. Whole-app peak memory,
long-session growth, application-service reloads and native platform gates
remain open. This source-only change keeps **6/42 Verified (14.29%)**.

15 October 2026, OV-1001/1002/1003/204/603 performance follow-up (owner: OpenVision;
commit `47ad155`): [preparation and stream review](../performance/autocomplete-stream-performance.md)
moves autocomplete debounce before document/hook work and bounds unfinished
Agent events to 4 MiB with cancellation. The controlled typing burst performs
101 → 1 reads/hooks; 43 focused tests and Windows native Agent/autocomplete
checks pass. Whole-app RAM is unmeasured; two additional provider-error suites
lack their original recovered fixture. Control-plane output/cache bounds and
timeout cancellation remain source-observed work. The portable payload is
unchanged and all affected stories remain Partial: **6/42 Verified (14.29%)**.
The [priority queue and ETA](roadmap.md#critical-first-backlog-and-eta) now order
all 36 unfinished stories by impact and dependencies, totaling 322 provisional
points without counting overlapping account packages twice.

15 October 2026, OV-303/1001/1003/204 control-plane follow-up (owner: OpenVision;
parent commit `499fc4e`): [HTTP resource ownership](../performance/control-plane-http-resources.md)
now cancels request-owned I/O on deadlines, browser disconnect and close. JSON/SSE
responses and decompressed error diagnostics have explicit byte bounds; matching
SSE responses complete without EOF. Actual loopback socket and spawned public
server checks pass. Authentic recovery restored the missing provider fixture;
its 25 focused checks pass. The combined run passes 46 tests, including ledger
validation. Benchmarks report improved oversized-error recovery, unchanged normal
memory and slower/noisy normal warm latency; they do not establish desktop RAM
savings. STDIO/manager/REA-cache ownership, native profile cases, long sessions,
live providers and platform gates remain open. Preview.6 is unchanged; no story
is promoted: **6/42 Verified (14.29%)**.

15 October 2026, OV-201/204/1003 discovery follow-up (owner: OpenVision;
parent commit `41499a2`): [request ownership](../performance/model-discovery-resources.md) now
cancels renderer-owned I/O and unfinished error bodies, releases readers/listeners
and rejects invalid UTF-8 under the existing decoded-byte limit. The unchanged
adapter reproduces connection retention in a real Electron host; the candidate
passes 12 native integration and 34 focused checks. This minimal host is not a
full editor acceptance run. Both unchanged and candidate full-workbench runs
currently fail startup with 0xC000001D; an owned-process dump records a Windows
`urlmon.dll` fault, cause unknown. Restore startup before full-app/package/soak
checks. Preview.6 is unchanged; **6/42 Verified (14.29%)**.

Keep story IDs stable. On execution, append owner, commit, evidence links,
platform/provider scope and unresolved gates to that story's record. Promote a
story to Verified only when every acceptance clause is evidenced. Split a story
when its independently testable scopes differ; retain the parent/dependency link.
Publish sprint exits and blockers with measured results, without invented ETAs.

Start with OV-101 through OV-105. The narrow autocomplete cancellation fix is
active alongside OV-601 research; it does not close Sprint 6 or replace core
runtime validation.
After each implementation, run the relevant local checks, retain failure evidence
and update the [recovery status](../recovery/recovery-status.md) when the product boundary
actually changes. Native recovery totals change only with matching new evidence.
