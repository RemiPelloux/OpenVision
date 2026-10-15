# OpenVision feature roadmap

Updated 15 October 2026; latest portable release **0.2.0-preview.6**. The verified-coverage target is **80%**.
The denominator remains **42 acceptance stories**, so **34 must be fully
Verified**. Current ledger: **6 Verified, 21 Partial, 13 Planned, 2 Unknown**,
or **14.29%**. Twenty-eight additional stories must pass to reach the numeric target.
This percentage measures complete acceptance stories, not how much of the app
runs, source recovery, test count, implementation effort or original parity.

Use `npm run status:features` for the authoritative current count. The acceptance
clauses remain in [completion-sprints.md](completion-sprints.md). Original accounts,
billing and hosted cloud agents remain excluded. Native macOS/Linux and
independent-build requirements remain in the denominator.

### Optional account integrations — source build

Requested third-party ChatGPT/Codex and Claude/Claude Code integrations are a
separate addition, not a reinstatement of the original hosted account system.
The source build includes themed account/provider settings, replayable onboarding,
isolated account profiles and official browser-sign-in adapters. See
[setup and evidence limits](account-integrations.md).
Account deletion now disconnects the profile, cleans its credentials/cache and
archives conversation files. Essential settings text uses readable theme colors.

| Remaining account gate | Complexity points | Required evidence |
| --- | --- | --- |
| Codex browser consent through signed-in identity | 3 | Complete real Codex callback and display its returned identity; Claude signed-in status and identity verified on Windows |
| Account switching with active work | 5 | Preserve conversation state, respect running-operation shutdown and verify actual account routing |
| Subscription model execution | 3 | Real entitled requests through both official integrations |
| Portable delivery and platform coverage | 5 | Package new source behavior; repeat Windows checks, then native macOS/Linux checks |

These points are separate delivery work, not extra acceptance stories or a
claimed percentage increase. The existing verified ledger remains unchanged.
The account-preparation worker startup fix and responsive settings layout passed
focused checks and four native switches with both official extensions installed.
Both real sign-in clients opened the system browser without an extra trust dialog.
Native deletion checks passed for both providers, including the guard against
deleting an account still used by another window. Source changes remain outside
the preview.6 portable payload.

## What is usable today

The complete Windows x64 portable package launches the editor and local profile. Native
fixtures have exercised editing, search, tasks, model selection, Agent reads and
multi-file edits, command approval/cancellation, autocomplete and HTTP/STDIO MCP.
Separate live-provider runs exercised limited GPT, DeepSeek and Grok chat/tool
paths. See [release claims](release-claims.md) for exact scope. Several required
failure, provider and lifecycle cases remain unverified. A clean checkout includes
the complete Windows payload and an offline extraction launcher. Full native
source rebuilding and the complete release-acceptance matrix remain open.

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

The requested ETA is expressed as remaining complexity and acceptance gates:

| Next work | Remaining points | What must pass |
| --- | --- | --- |
| Conversation recovery (OV-102) | 8 | Live error retry, controlled timeout, interrupted sessions and remaining reasoning cases without duplicate requests |
| Native shutdown reliability (OV-403) | 8 | Explain the earlier launcher exit 134 and verify the remaining shutdown matrix |
| Provider failures (OV-204) | 5 | Certificate edge cases, inference timeouts and remaining malformed/oversized streams |
| Project lifecycle and scale (OV-401) | 5 | Remaining filesystem/link behavior and measured filesystem work |
| Autocomplete quality (OV-602) | 8 | Representative project/language quality and native live-provider acceptance |

These entries are priorities from the complete tables below, not extra stories
or additive estimates. The Rust core/shell replacement follows the independent
build and compatibility gates; native macOS/Linux checks require those systems.

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
The Rust rewrite is a later architecture track and does not silently alter this
fixed denominator or count as delivered functionality. Windows is the only
available native test platform; other systems require access before verification.

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
| OV-204 / Partial | Certificate trust/expiry, inference timeout and remaining malformed/oversized successful-stream cases; actual capability inputs and live/platform gates. Native DNS/HTTPS protocol failures, manual recovery, context/capability error responses, bounded diagnostics and Stop now checked | **5 points** | [Provider failure evidence](provider-failure-handling.md), OV-102/201; medium; live/platform gates remain |

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
| OV-303 / Partial | Native multi-window/remote ownership and additional lifecycle failure cases, including HTTP close rejection and native session reinitialization | **5 points** | [Repeated STDIO cleanup failure/recovery](rea-mcp-cleanup.md) and HTTP/STDIO approval, Stop, disconnect, timeout and restart pass; medium |
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
| OV-603 / Partial | Windows partial acceptance, exact undo and pending typing/Escape/file-switch cancellation pass a controlled local workload. Remaining: broader editing/latency workloads and supported-platform matrix | **8 points** | [Autocomplete evidence](rea-custom-autocomplete.md); OV-602/402; macOS/Linux verification blocked on native access; medium |
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
| OV-903 / Planned | Native Linux distro/display matrix, secrets/sandbox/shell/addons and critical suite | **13 points** | Linux desktop unavailable; native prerequisites unresolved |
| OV-904 / Planned | Manual installer/update/rollback, interrupted upgrades, migration, uninstall/data retention and release provenance | **13 points** | OV-901–903 on claimed targets; medium after build ownership |

## Performance and release hardening

| Story / current state | Missing functions or acceptance evidence | Complexity points | Dependencies / confidence |
| --- | --- | --- | --- |
| OV-1001 / Partial | Live input-token/context/duplicate-request/history measurements; branch/tool reasoning and session disposal | **8 points** | OV-101/103/503; medium; local titles and request coalescing already implemented |
| OV-1002 / Partial | Frame/input latency, transcript/model row bounds, heap and filesystem work; incremental edits on fixed workloads | **8 points** | OV-202/402/603; medium |
| OV-1003 / Partial | Idle/reactivation and long-session memory; complete watcher/timer/process ownership across supported workloads | **8 points** | OV-504/703/901–903; medium; MCP startup reduction is scoped evidence |
| OV-1004 / Planned | Release matrix, secret/log/authority failures, corrupt state, failed cleanup/crash recovery and recovery instructions | **13 points** | All accepted release dependencies; medium after implementation stabilizes |
| OV-1005 / Partial | Extended process-tree network evidence and native macOS/Linux telemetry checks | **8 points** | Native access and realistic workloads; independently installed extensions assessed separately |

## Execution order and scope review

1. Close data-loss/routing risks in provider settings, then exercise the live AI
   development loop and error matrix. Re-score after native routing evidence.
2. Complete project, customization, autocomplete and Git workflows; finish native
   lifecycle failure checks. Re-score from failed gates, not passing counts.
3. Establish retrieval and native-helper ownership, then implement required
   replacements and independently reproducible builds. This is the largest
   uncertainty; resolve its contracts before expanding implementation.
4. Run packaging, rollback and the complete supported native matrix; measure
   performance/telemetry under realistic sessions and audit every acceptance row.

OV-101, OV-105, OV-201, OV-202, OV-404 and OV-601 are Verified and have no remaining points in
this table. [OV-404 native evidence](git-workflows.md) covers its local Windows contract;
other platforms and physical failure recovery remain in their own rows.
All 36 other accepted stories appear exactly once. GitHub Actions
remain disabled; checks, builds and releases are local.

After the current product gates, continue with the [Rust rewrite track](rust-roadmap.md).
