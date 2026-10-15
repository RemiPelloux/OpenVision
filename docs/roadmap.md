# OpenVision feature roadmap

Updated 15 October 2026; latest portable release **0.2.0-preview.6**, with Linux x64 source support. The verified-coverage target is **80%**.
The denominator remains **42 acceptance stories**, so **34 must be fully
Verified**. Current ledger: **6 Verified, 22 Partial, 12 Planned, 2 Unknown**,
or **14.29%**. Twenty-eight additional stories must pass to reach the numeric target.
This percentage measures complete acceptance stories, not how much of the app
runs, source recovery, test count, implementation effort or original parity.

Use `npm run status:features` for the authoritative current count. The acceptance
clauses remain in [completion-sprints.md](completion-sprints.md). Original accounts,
billing and hosted cloud agents remain excluded. Native macOS, the remaining Linux gates and
independent-build requirements remain in the denominator.

Latest scoped REA follow-up: [control-plane MCP lifecycle](control-plane-mcp-lifecycle.md)
now coalesces initialization, replaces changed definitions, retains rejected cleanup
and orders reconciliation and request admission with config saves. Pending
admissions cannot reconnect disabled or replaced definitions after cleanup, and
connection identities are expanded once per admission. The follow-up
[STDIO response budget](control-plane-stdio-resources.md) rejects oversized output
before decoding and recovers on the next call. The 51 focused checks and scoped
stress measurements do not establish a whole-app RAM reduction or close
native acceptance gates. Windows startup checks passed against an existing
runtime with isolated shell calls, but did not prove the committed build was
reproducible. The [build-integrity correction](runtime-build-integrity.md)
records the faulty import, damaged generated inputs, restoration and new checks.
See also the [scoped Windows evidence](model-discovery-resources.md#full-app-startup-gate).

## Critical-first backlog and ETA

15 October Agent review follow-up: the [edit-history audit](rea-agent-edit-history.md)
records native filename/text search and fixes acceptance returning before
pending work settles and missing text undo for previously unopened files.
Windows search/edit/undo/Stop/restart checks pass. These are P0 OV-103 work; the original denominator,
points and dependency gates remain unchanged.

15 October retrieval follow-up: the [search lifecycle and data-boundary audit](rea-retrieval-ownership.md)
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

| Priority, highest first | Ordered remaining stories | Points | Exit condition |
| --- | --- | ---: | --- |
| **P0 · Data, authority and privacy** | OV-103 → OV-302 → OV-303 → OV-301 → OV-204 → OV-102 → OV-403 → OV-501 → OV-1005 → OV-1004 | **81** | Changes/history survive failures; profiles and credentials remain isolated; Stop releases owned work; data destinations are established; required failure and traffic checks pass |
| **P1 · RAM, requests and daily development** | OV-1003 → OV-1001 → OV-1002 → OV-401 → OV-402 → OV-603 → OV-602 → OV-104 → OV-203 → OV-701 → OV-702 → OV-304 | **87** | Bound retained output/work, measure long sessions and per-edit work, prevent duplicate inference, then close language/completion/import/extension/auth lifecycle gates |
| **P2 · Independent build ownership** | OV-801 → OV-802 → OV-803 → OV-804 | **47** | Required native/server contracts have owned inputs or replacements; a clean machine builds and launches the app |
| **P3 · Retrieval and prediction** | OV-502 → OV-503 → OV-504 → OV-604 | **42** | Relevant retrieval, incremental invalidation, recoverable indexes and useful next-edit prediction pass measured workloads |
| **P4 · Distribution and platform completion** | OV-901 → OV-904 → OV-903 → OV-902 | **39** | Windows install/update/rollback and the declared native platform matrices pass; Linux gaps close and macOS gains real evidence |
| **P5 · Broader development modes** | OV-703 → OV-704 | **26** | Remote development and specialized modes have explicit contracts, permissions, cleanup and native acceptance |

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
points again. The [Rust rewrite](rust-roadmap.md) has a separate 36-package /
195-point planning baseline; overlap and unresolved compatibility prevent adding
it to the feature backlog as a single total.

### Optional account integrations — source build

Requested third-party ChatGPT/Codex and Claude/Claude Code integrations are a
separate addition, not a reinstatement of the original hosted account system.
The source build includes themed account/provider settings, replayable onboarding,
isolated account profiles, official browser-sign-in adapters, account models in
the existing Agent picker and a provider-reported usage bar. See
[setup and evidence limits](account-integrations.md).
Account deletion now disconnects the profile, cleans its credentials/cache and
archives conversation files. Essential settings text uses readable theme colors.

Real Windows verification on 15 October exercised a signed-in Claude Sonnet
read/edit through OpenVision Agent and checked the saved file. Codex quota windows
were returned by its official client; Claude supplied no usable quota windows,
so its UI reports unavailable. Codex account models are restricted to GPT-6 IDs
actually advertised by the official client. The checked account offered none
and rejected a real `gpt-6.1-sol` request. The separate saved Codex Easy GPT-6 API
request reached the provider and failed with HTTP 403 `INSUFFICIENT_BALANCE`.
These are availability and verification blockers, not successful GPT-6 runs.

| Remaining account gate | Complexity points | Required evidence |
| --- | --- | --- |
| Codex browser consent through signed-in identity | 3 | Verify a fresh real callback and returned identity end to end; existing signed-in profile/catalog/quota checks do not close this gate |
| Account switching with active work | 5 | Preserve conversation state, respect running-operation shutdown and verify actual account routing |
| GPT-6 account execution and API recovery | 3 | An official account advertising an eligible GPT-6 model, then native Agent execution; restore API balance and repeat the separate GPT-6 API edit check |
| Account Agent lifecycle | 5 | Real retry, interruption/resume and additional tool/approval cases; text/tools only today, image support remains unimplemented |
| Account usage and privacy | 5 | Broader quota/reset/error cases and authenticated traffic classification; never infer quota when the official client supplies none |
| Portable delivery and platform coverage | 5 | Package new source behavior; repeat Windows checks, then native macOS/Linux checks |

These points are separate delivery work, not extra acceptance stories or a
claimed percentage increase. The existing verified ledger remains unchanged.
The account-preparation worker startup fix and responsive settings layout passed
focused checks and four native switches with both official extensions installed.
Both real sign-in clients opened the system browser without an extra trust dialog.
Native deletion checks passed for both providers, including the guard against
deleting an account still used by another window. Source changes remain outside
the preview.6 portable payload. The latest focused account suite passed 66 tests;
controlled transport checks establish isolation, bounds and cancellation, not
upstream model availability. These account additions do not promote any complete
acceptance story. Tab autocomplete still uses a configured API connection.

## What is usable today

The complete Windows x64 portable package launches the editor and local profile. Native
fixtures have exercised editing, search, tasks, model selection, Agent reads and
multi-file edits, command approval/cancellation, autocomplete and HTTP/STDIO MCP.
Separate live-provider runs exercised limited GPT, DeepSeek and Grok chat/tool
paths. See [release claims](release-claims.md) for exact scope. Several required
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

The [critical-first queue](#critical-first-backlog-and-eta) supersedes the old
five-item shortlist. The next concrete actions are:

**Immediate usability gate:** the latest full-workbench runs exit 0xC000001D
before discovery checks execute, with either unchanged or candidate discovery
adapters. A local dump records a `urlmon.dll` fault. Restore startup and rerun
the full-app gates before publishing a refreshed preview. The
[discovery report](model-discovery-resources.md#full-app-startup-gate) distinguishes
this unresolved failure from passing minimal native integration. This belongs
to existing OV-901/1004 usability/recovery scope; no extra points or story credit.

| Order | Existing story / points | Next action and required evidence |
| --- | --- | --- |
| 1 | OV-204 / 5; OV-1004 / 13 | The authentic recovered Agent fixture is restored and all 25 focused provider-error checks pass. Continue certificate expiry/hostname, inference timeout, capability-input and remaining native/live-provider gates; [restoration evidence](provider-failure-handling.md#recovered-fixture-restoration-follow-up) |
| 2 | OV-103/302/303/301, then OV-204/102/403 / points above | Close the P0 edit/data/profile ownership, retry/timeout and shutdown cases, retaining failed-close and earlier exit-134 evidence; never substitute passing happy paths for these gates |
| 3 | OV-501 / 13; OV-1005 / 8 | Establish actual project-data destinations and extend process-family traffic checks, including authenticated integration behavior |
| 4 | OV-1003 / 8; OV-1001 / 8 | HTTP deadlines/disconnects now cancel transport and response bodies are bounded; [socket checks and benchmarks](control-plane-http-resources.md) pass in their declared scope. Next bound optional REA subprocess output/cache bytes and reconcile STDIO/manager lifetimes, without claiming native Agent RAM savings |
| 5 | OV-1003 / 8; OV-1002 / 8 | Discovery lifecycle/body cleanup now passes [native integration](model-discovery-resources.md). After restoring full-app startup, measure idle, large-project, long-session and close/reopen process-family memory/CPU; define budgets, investigate reasoning-session retention and check incremental filesystem/UI work |
| 6 | OV-102/104/203/602 / points above | Repeat live retry/tool/reasoning/completion gates when the selected provider is available; GPT-6 account eligibility and the last observed API balance failure remain external blockers |
| 7 | OV-901 / 8; OV-1004 / 13 | Refresh the Windows preview only after its declared safety/regression gates pass; verify relocated payload and repository extraction, record exact source identity and disclose remaining gaps |

These actions are slices of the existing story estimates, not additional points
or new acceptance stories. Optional accounts remain experimental until their own
real sign-in, switching and lifecycle gates pass.

### Latest performance work — implemented in source

[Commit `47ad155`](https://github.com/RemiPelloux/OpenVision/commit/47ad155ec5a503a4c9791ad94fd8c2ec2787baac)
moves autocomplete debounce ahead of document/hook preparation and bounds
unfinished Agent SSE events to 4 MiB with upstream cancellation. The controlled
typing fixture performs 101 → 1 document reads/hooks, with sampled heap growth
about 55 → 2 MiB. Forty-three focused tests, syntax/source build and native
Windows Agent/autocomplete checks passed. Valid-stream parsing added about 6 ms
in the warm benchmark sample. See [measurements and remaining findings](autocomplete-stream-performance.md).

This is scoped evidence for OV-1001/1002/1003/204/603. The subsequent
[provider fixture restoration](provider-failure-handling.md#recovered-fixture-restoration-follow-up)
allows all 25 focused error/probe checks to pass. The
[control-plane HTTP follow-up](control-plane-http-resources.md) adds actual
deadline/disconnect cancellation and decoded-body bounds, with passing socket
tests and scoped measurements. Whole-app RAM was not remeasured and preview.6
is unchanged. No full acceptance story is promoted.

The [discovery follow-up](model-discovery-resources.md) passes 34 focused checks
and 12 actual Electron/window/network checks. The original adapter reproduces
unfinished-body and renderer-lifecycle connection retention. This fixes ownership,
not measured whole-app RAM. Shell fault containment and reproducible generation
have separate [verification gates](runtime-build-integrity.md); settings retention
and long-session gates remain open.

### Next reliability checks

The latest [MCP ownership run](rea-mcp-ownership.md) passed its six assertions
but retained application diagnostics. Address these before treating that run as
evidence of clean startup, zero cloud traffic or bounded long-session resources:

| Existing story | Next check | Acceptance evidence needed |
| --- | --- | --- |
| OV-1005 · 8 points | Extend traffic verification after removing the local hosted metadata contribution | [Windows title/history restart checks](local-conversation-metadata.md) pass with zero contribution/client invocations; process-family traffic, broader workloads and native platform gates remain open |
| OV-1003 · 8 points | Bound remaining control-plane output/cache resources and measure long-session memory and repeated service restarts | [Autocomplete/stream fixes](autocomplete-stream-performance.md), [HTTP bounds/cancellation](control-plane-http-resources.md) and [account route/retry/stream fixes](account-performance.md) have scoped measurements; [native utility ownership](utility-process-ownership.md) removes reproduced listener accumulation. REA output/cache, STDIO/manager lifecycle, whole-app peak memory and long-session/platform gates remain open |
| OV-403 · 8 points | Investigate remaining duplicate command and mutex diagnostics alongside shutdown | [Local startup ordering](local-startup.md) now passes a native candidate and reproducing control; verify the broader startup/closure matrix and retain the earlier unexplained exit 134 until diagnosed |
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

| Stage | Required result | Exit gate |
| --- | --- | --- |
| 1 · Reliable Windows development loop | Agent, memories, editing, terminal and autocomplete failure cases | No silent data loss, wrong-provider routing, duplicate inference or orphaned owned tools in the required matrix |
| 2 · Local intelligence and ownership | Retrieval, incremental indexing, isolation, extension and remote contracts | Known data destinations, recoverable state and supported capability matrix |
| 3 · Independent OpenVision build | Replace required closed contracts and own the native build inputs | Clean checkout builds and launches without the recovered installation |
| 4 · Release and performance | Packaging, rollback, supported platforms and resource budgets | Repeatable native acceptance and measured RAM/CPU/input-latency results |
| 5 · Rust rewrite | Rust-owned core and desktop shell replacing the recovered runtime | Feature parity, data migration, rollback and measured improvement; see [Rust roadmap](rust-roadmap.md) |

The current acceptance target remains **34 of 42 fully verified stories**.
The Rust rewrite is a separate architecture track and does not silently alter this
fixed denominator or count as delivered functionality. Contract audits and editor
prototypes can start early; production cutover follows its parity, migration and
build gates. Windows is currently available for checks;
[recorded Linux evidence](linux-verification.md) covers a
declared native scope. Further Linux matrices and macOS require target access.

## What is missing, in plain language

| Area | Still needed before its full acceptance gate closes |
| --- | --- |
| AI conversations and agents | Live retry/timeout and additional Stop cases, interrupted sessions, remaining edit/undo paths and subagent override/reasoning cases |
| Local customization | Complete profile-path isolation, stale memory review handling, disk-failure recovery and MCP authentication/lifecycle cases |
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
| OV-102 / Partial | Live GPT/DeepSeek/Grok error retry, timeout and no duplicate submit after retry; remaining interruption/history and reasoning cases. Provider-default Stop/same-chat resubmission pass for all three. GPT High, DeepSeek High and Grok default restart/fork recall and persisted isolation pass | **8 points** | [Live provider evidence](live-provider-compatibility.md); provider availability/quota and intermittent failures; medium |
| OV-103 / Partial | Agent search, remaining apply/undo combinations and interrupted/resumed work; live-provider acceptance | **8 points** | OV-102 and native project fixtures; medium |
| OV-104 / Partial | Real-provider explicit overrides, retry/resume and additional provider/model cases; child status label accuracy; alternate Task paths | **8 points** | OV-102; native inherited/explicit/saved/disabled/error gates and real GPT High child Read now checked; medium locally, low for provider coverage |
| OV-203 / Partial | Remaining child retry/resume/provider cases and inherited child status label; changed capabilities, invalid choices and recovery checked in parent/child native paths | **5 points** | OV-104 and provider capability contracts; low because DeepSeek High has both failures and successful native rechecks |
| OV-204 / Partial | Certificate trust/expiry, inference timeout, actual capability inputs and malformed/oversized stream cases beyond the reasoning observer; live/platform gates. That observer rejects unfinished events over 4 MiB and passes real HTTP disconnect tests; authentic recovered fixtures are restored and 25 focused provider-error checks pass | **5 points** | [Provider failure evidence](provider-failure-handling.md), [stream limits and restoration follow-up](autocomplete-stream-performance.md); OV-102/201; medium; live/platform gates remain |

The [provider identity change](provider-model-identity.md) removes raw-model-ID
deduplication. A native Windows fixture verifies two providers with the same ID,
separate keys/endpoints, saved choice after restart, cross-provider subagents and
autocomplete. The [selection lifecycle acceptance](provider-selection-lifecycle.md)
also verifies disabled/deleted selections without fallback, manual IDs and key
replacement across restart. Stale-settings races retain owner-boundary coverage.
The [native picker acceptance](model-picker-scale.md) now verifies the 10,000-model
Agent and settings lists, keyboard/focus behavior, accessible labels and failed
discovery feedback. Broader UI/resource budgets remain under OV-1003.
The [reasoning lifecycle follow-up](reasoning-capability-lifecycle.md) prevents
silent effort substitution and verifies explicit recovery after changed, empty
or omitted capabilities, including native restart. Invalid discovery declarations
produce errors and preserve the last valid catalog/selection. Its simulated requests do not
add live-provider coverage; OV-203 remains Partial.
The [subagent verification](subagent-reasoning-verification.md) restores the Task
Models control and fixes disabled-child fallback. Native fixtures cover saved
reasoning/restart/errors/recovery; a separate real Codex Easy GPT High Task → Read
→ parent continuation passed. This supersedes the earlier static inference of
broken reasoning propagation on the active Windows child path.
The [provider failure follow-up](provider-failure-handling.md) fixes echoed-key
diagnostics and duplicate automatic SDK/Agent requests for transport and parsed
stream errors. Native fixtures and a fresh real Codex Easy GPT High Task → Read
→ parent continuation pass; unsupported capability, timeout and additional
provider/platform gates remain open. OV-204 is Partial and adds no Verified credit.
The prior discovery implementation removed nonmanual models absent from the
latest catalog. The retention fix keeps these saved choices with a visible
unlisted status; the [verification report](model-catalog-retention.md) records its scope. This is
not proof of why a past live catalog shrank.

## Local customization and MCP

| Story / current state | Missing functions or acceptance evidence | Complexity points | Dependencies / confidence |
| --- | --- | --- | --- |
| OV-301 / Partial | Approved project memories pass native save/restart/isolation and live GPT recall; reviewed legacy import preserves originals. Cross-window IPC now refreshes changed records and rejects stale review. Two-root selection, junction rejection, ACL-denied write/retry and inline-edit exclusion pass. Remaining: physical full-disk/I/O recovery | **5 points** | [Rules](local-rules-concurrency.md), [approved memories and precise two-window scope](project-memories.md) and [Quick Edit](rea-inline-edit.md); medium |
| OV-302 / Partial | Complete global path-owner audit and additive migration; two profiles and another installation; watcher consumers | **8 points** | Recovered producer/consumer paths and native fixtures; medium |
| OV-303 / Partial | Broader profile/configuration ownership, including named profiles in one host and cross-window failed cleanup; remote hosts remain under OV-703 | **5 points** | [Windows cleanup/session recovery](rea-mcp-cleanup.md) and [native two-window/separate-user-data Agent calls](rea-mcp-ownership.md) pass; session driver evidence is narrower than Agent retry UI; utility-worker shutdown diagnostic remains under OV-403; medium |
| OV-304 / Planned | OAuth canceled consent, expiry/refresh and secret storage; discovery precedence, invalid config and watcher disposal | **8 points** | Owned OAuth server and supported auth contracts; medium |

## Projects and local intelligence

| Story / current state | Missing functions or acceptance evidence | Complexity points | Dependencies / confidence |
| --- | --- | --- | --- |
| OV-401 / Partial | File-symlink cases and OS-level filesystem work measurements. Native lifecycle checks pass; 100-file/10,000-file projects now pass incremental notifications and stable recursive watcher checks. Windows denied file-symlink creation | **5 points** | [Native lifecycle](project-lifecycle-verification.md), [project scale evidence](project-scale-verification.md); broader operations and filesystem instrumentation; medium |
| OV-402 / Partial | TS/JS and pinned clangd C/C++ native checks pass; Save All now persists hidden-document edits. Remaining: JS/C cross-file matrix, full SDK/large-project coverage, concurrent request/edit behavior and filesystem/CPU/RAM budgets | **8 points** | OV-401; [language evidence](rea-language-workflows.md), [C/C++](cpp-support.md), [Save All](save-all-verification.md); medium |
| OV-403 / Partial | Windows cmd/PowerShell shell matrix, task matcher, Node debugging and child cleanup pass; final state-save ordering fixed. Native clean exits now distinguished from launcher exits. Remaining: diagnose earlier launcher exit 134 and verify shutdown reliability | **8 points** | [Native development evidence](development-workflows.md); low until earlier exit cause is established |
| OV-501 / Unknown | File-service JS/native/server boundaries, loaded addons and actual project-data destinations | **13 points** | Owned networking/runtime evidence; low; unknowns may require replacement |
| OV-502 / Planned | Parsing/chunking/embedding/ranking and endpoint behavior; pinned retrieval relevance measurements | **13 points** | OV-501 and available/replacement backend; low |
| OV-503 / Planned | Incremental invalidation for edits, renames, deletes, ignores, links, branches and configuration; counters | **8 points** | OV-401/502; medium after retrieval ownership is established |
| OV-504 / Planned | Index pause/cancel, interrupted-write recovery, schema migration, rebuild and bounded idle resources | **8 points** | OV-503; medium |

## Autocomplete, imports and ecosystem

| Story / current state | Missing functions or acceptance evidence | Complexity points | Dependencies / confidence |
| --- | --- | --- | --- |
| OV-602 / Partial | Native 13-case response matrix and one real GPT/DeepSeek/Grok sum-expression sample pass. Remaining: representative multi-language/project quality and native live-provider acceptance | **8 points** | [Autocomplete evidence](rea-custom-autocomplete.md); OV-201 and live model availability; medium |
| OV-603 / Partial | Windows partial acceptance, exact undo and typing/Escape/file-switch cancellation pass; early preparation debounce and native regressions now checked. Remaining: broader editing/latency workloads and supported-platform matrix | **8 points** | [Autocomplete evidence](rea-custom-autocomplete.md), [preparation measurements](autocomplete-stream-performance.md); OV-602/402; latest performance changes not natively rechecked on macOS/Linux; medium |
| OV-604 / Planned | Next-edit prediction contract, implementation, navigation/range correctness, stale results and latency/quality | **13 points** | OV-603/503 and a suitable prediction backend; low; not silently excluded |
| OV-701 / Partial | Native disposable-profile preview/import, JSONC/snippets, extension registry, idempotency and exact restore pass. Remaining: real-profile/platform matrix, named-profile ownership, CLI/native backup interoperability and interrupted/I/O-failure recovery | **5 points** | [Import evidence](import-profile-verification.md), OV-302; medium |
| OV-702 / Partial | Extension install/update/uninstall, language packs, native ABI compatibility and clear failures | **8 points** | OV-402/403 and package sources; medium |
| OV-703 / Planned | SSH, WSL and containers: connect/reconnect, files, terminals, extension host, secrets, AI routing and cleanup | **13 points** | User-owned test hosts/runtimes not yet established; native prerequisites unresolved; low |
| OV-704 / Unknown | Inventory image/browser/computer modes and helpers; permission, cancellation, result and unavailable-capability behavior | **13 points** | Explicit mode inventory and provider/helper availability; low |

## Independent build and distribution

| Story / current state | Missing functions or acceptance evidence | Complexity points | Dependencies / confidence |
| --- | --- | --- | --- |
| OV-801 / Partial | All 52 PE and 15 WASM roles/source/license/version/ABI/rebuild dispositions; one remaining full WASM record | **13 points** | Loaded-role evidence from OV-501; medium for inventory, low for closed dependencies; [14/15 records complete](rea-wasm-inventory.md) |
| OV-802 / Planned | Pinned host/addon sources and lockfiles; rebuild storage/watcher/terminal/OS bindings; ABI/provenance checks | **13 points** | OV-801 and obtainable sources/toolchains; low |
| OV-803 / Planned | Replace required proprietary/native/server contracts with behaviorally verified implementations | **13 points** | OV-501/601/801; very low; split replacement work after interface inventory |
| OV-804 / Planned | Build and launch from a clean checkout/machine without ignored recovery tree or original installation | **8 points** | OV-802/803; build prerequisites unresolved |
| OV-901 / Partial | Clean Windows install, complete critical suite, all identity surfaces and claimed architectures | **8 points** | OV-804 and core acceptance; medium |
| OV-902 / Planned | Native macOS workflows, keychain/permissions/sandbox/addons; signing/notarization if claimed | **13 points** | Mac unavailable; signing credentials if required; native prerequisites unresolved |
| OV-903 / Partial | Linux x64 builds, packages and launches natively on Wayland; keyring, namespace sandbox, approval-first Agent commands, bash/sh terminals, Git, completion and the native suite pass except the items in the [evidence](linux-verification.md). Remaining: project-rule discovery isolation (shared with Windows), other distributions/X11/KDE and ARM64 | **5 points** | OV-804 for independent builds; medium |
| OV-904 / Planned | Manual installer/update/rollback, interrupted upgrades, migration, uninstall/data retention and release provenance | **13 points** | OV-901–903 on claimed targets; medium after build ownership |

## Performance and release hardening

| Story / current state | Missing functions or acceptance evidence | Complexity points | Dependencies / confidence |
| --- | --- | --- | --- |
| OV-1001 / Partial | Live input-token/context/duplicate-request/history measurements; branch/tool reasoning and session disposal; broader protocol lifecycle checks. Optional control-plane HTTP timeout/disconnect now cancels transport work | **8 points** | OV-101/103/503; medium; local titles/coalescing implemented, N+1 protections rechecked; [latest scope](autocomplete-stream-performance.md), [HTTP ownership](control-plane-http-resources.md) |
| OV-1002 / Partial | Frame/input latency, transcript/model row bounds, heap and filesystem work; incremental edits on fixed workloads. Early autocomplete preparation avoids discarded document/hook work in measured fixtures | **8 points** | OV-202/402/603; [before/after and parsing cost](autocomplete-stream-performance.md); medium; no whole-app RAM claim |
| OV-1003 / Partial | Bound control-plane subprocess output/cache bytes/expiry; idle/reactivation and long-session memory; reasoning-session retention and complete watcher/timer/process ownership; rerun full-app discovery after startup recovery | **8 points** | OV-504/703/901–903; [remaining findings](autocomplete-stream-performance.md), [discovery owner](model-discovery-resources.md); medium; scoped fixes do not establish whole-app bounds |
| OV-1004 / Planned | Release matrix, secret/log/authority failures, corrupt state, failed cleanup/crash recovery and recovery instructions | **13 points** | All accepted release dependencies; medium after implementation stabilizes |
| OV-1005 / Partial | Extended process-tree network evidence, conversation metadata-sync producer audit and native macOS/Linux telemetry checks | **8 points** | [Multi-window run logs contain unauthenticated metadata-sync failures](rea-mcp-ownership.md); destination/transport behavior remains unverified. Native access and realistic workloads; independently installed extensions assessed separately |

## Execution order and scope review

Follow the [P0 → P5 queue](#critical-first-backlog-and-eta), honoring its dependencies.
Safety/privacy checks and regression verification continue throughout the work.
Re-score from demonstrated scope changes and failed gates. New source behavior
does not become a downloadable feature until its package is rebuilt and verified.

OV-101, OV-105, OV-201, OV-202, OV-404 and OV-601 are Verified and have no remaining points in
this table. [OV-404 native evidence](git-workflows.md) covers its local Windows contract;
other platforms and physical failure recovery remain in their own rows.
All 36 other accepted stories appear exactly once in the detailed estimate tables
and once in the priority queue. GitHub Actions
remain disabled; checks, builds and releases are local.

The [Rust rewrite track](rust-roadmap.md) now includes a component audit and
36 planned packages / 195 provisional points. Start by pinning contracts and
baselines, proving the core boundary and testing native editor/extension
feasibility. Current safety fixes continue independently; replacing a component
must close its behavior and rollback gates before production cutover.
The [42-story Rust acceptance map](rust-acceptance-map.md) prevents feature loss;
[migration contracts](rust-migration-contracts.md) define the first workspace-search
slice, data handoff and the decisions that can block cutover. Rust gains remain
unmeasured, and neither track gains acceptance credit from a planning document.
