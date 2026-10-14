# OpenVision remaining work and estimates

Updated 14 October 2026. The user changed the verified-coverage target to **80%**.
The denominator remains **42 acceptance stories**, so **34 must be fully
Verified**. Current ledger: **5 Verified, 22 Partial, 13 Planned, 2 Unknown**,
or **11.90%**. Twenty-nine additional stories must pass to reach the numeric target.
This percentage measures complete acceptance stories, not how much of the app
runs, source recovery, test count, implementation effort or original parity.

Use `npm run status:features` for the authoritative current count. The acceptance
clauses remain in [completion-sprints.md](completion-sprints.md). Accounts,
billing and hosted cloud agents remain excluded. Native macOS/Linux and
independent-build requirements remain in the denominator.

## What is usable today

The prepared Windows x64 checkout launches the editor and local profile. Native
fixtures have exercised editing, search, tasks, model selection, Agent reads and
multi-file edits, command approval/cancellation, autocomplete and HTTP/STDIO MCP.
Separate live-provider runs exercised limited GPT, DeepSeek and Grok chat/tool
paths. See [release claims](release-claims.md) for exact scope. Several required
failure, provider and lifecycle cases remain unverified. A clean checkout still
needs native input artifacts; a standalone finished release is not established.

The numeric target alone will not establish usability. Before declaring a
usable release, the supported Windows build must complete project open/edit/
save/reopen, language diagnostics/navigation, terminal/tasks/debugging, safe Git
operations, provider setup, chat/history, Agent changes with approval and undo,
autocomplete, MCP, local customization and recovery in a repeatable native suite.
Live models must complete the advertised workflows with useful error handling.
No open defect may silently lose user data, select the wrong provider/key,
execute unapproved tools, or leave owned commands running after Stop.

## How to read the ETA

These are **provisional engineering-effort estimates**, in full working days for
one engineer after prerequisites are available. They include implementation,
review and the remaining verification work; they are not promises of unattended
agent execution time or calendar delivery dates. Ranges overlap shared work and
must not be summed as independent tasks. A working day is roughly eight hours.
Low confidence means the investigation can reveal a larger replacement effort.

No defensible calendar ETA for 80% is available yet: independent builds,
proprietary helper replacement and remote/native platform access are unresolved.
Only a Windows machine is available. For blocked cases, the ETA starts after the
named dependency is satisfied. Re-estimate after each native acceptance run;
do not turn a test passing on a fixture into a provider/platform support claim.

## Core AI and models

| Story / current state | Missing functions or acceptance evidence | Estimated remaining effort | Dependencies / confidence |
| --- | --- | --- | --- |
| OV-102 / Partial | Live GPT/DeepSeek/Grok retry, timeout, Stop, saved history and branching; no duplicate submit | 3–6 days | Provider availability/quota and known DeepSeek failures; medium |
| OV-103 / Partial | Agent search, remaining apply/undo combinations and interrupted/resumed work; live-provider acceptance | 2–5 days | OV-102 and native project fixtures; medium |
| OV-104 / Partial | Real-provider explicit overrides, retry/resume and additional provider/model cases; child status label accuracy; alternate Task paths | 2–5 days | OV-102; native inherited/explicit/saved/disabled/error gates and real GPT High child Read now checked; medium locally, low for provider coverage |
| OV-203 / Partial | Remaining child retry/resume/provider cases and inherited child status label; changed capabilities, invalid choices and recovery checked in parent/child native paths | 1–2 days | OV-104 and provider capability contracts; low because current DeepSeek explicit reasoning fails |
| OV-204 / Partial | Remaining DNS/TLS, inference timeout and malformed/oversized stream cases; actual capability inputs and live/platform gates. Native manual retries, context/capability error responses, bounded/stalled diagnostics, connection refusal and Stop now checked | 2–4 days | OV-102/201; medium; live/platform gates remain |

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

| Story / current state | Missing functions or acceptance evidence | Estimated remaining effort | Dependencies / confidence |
| --- | --- | --- | --- |
| OV-301 / Partial | Live Agent consumes rules; workspace memories; two windows, malformed records and failed writes | 2–4 days | OV-103 and isolated native profiles; medium |
| OV-302 / Partial | Complete global path-owner audit and additive migration; two profiles and another installation; watcher consumers | 3–6 days | Recovered producer/consumer paths and native fixtures; medium |
| OV-303 / Partial | Native failed-cleanup recovery and remaining lifecycle/ownership cases | 1–3 days | HTTP/STDIO approval, Stop, disconnect, timeout and restart now have scoped evidence; medium |
| OV-304 / Planned | OAuth canceled consent, expiry/refresh and secret storage; discovery precedence, invalid config and watcher disposal | 3–6 days | Owned OAuth server and supported auth contracts; medium |

## Projects and local intelligence

| Story / current state | Missing functions or acceptance evidence | Estimated remaining effort | Dependencies / confidence |
| --- | --- | --- | --- |
| OV-401 / Partial | Rename/move/delete, links, external edits, permissions, unsaved session recovery; incremental watcher measurements | 3–6 days | Owned large multi-root fixture; medium |
| OV-402 / Partial | Pinned language matrix, diagnostics/rename/references/navigation/formatting; large files and conflicts | 3–6 days | OV-401 and compatible language extensions; medium |
| OV-403 / Partial | Shell resize/Unicode/environment/restart, task problem matchers, debugger break/step/stop and cleanup | 3–5 days | Native shell/debugger matrix; medium |
| OV-404 / Partial | Branch/worktree creation, merge conflicts, dirty/untracked preservation and interruption recovery | 2–4 days | OV-401/103 and disposable repositories; medium |
| OV-501 / Unknown | File-service JS/native/server boundaries, loaded addons and actual project-data destinations | 3–7 days investigation | Owned networking/runtime evidence; low; unknowns may require replacement |
| OV-502 / Planned | Parsing/chunking/embedding/ranking and endpoint behavior; pinned retrieval relevance measurements | 5–15 days | OV-501 and available/replacement backend; low |
| OV-503 / Planned | Incremental invalidation for edits, renames, deletes, ignores, links, branches and configuration; counters | 4–8 days | OV-401/502; medium after retrieval ownership is established |
| OV-504 / Planned | Index pause/cancel, interrupted-write recovery, schema migration, rebuild and bounded idle resources | 3–6 days | OV-503; medium |

## Autocomplete, imports and ecosystem

| Story / current state | Missing functions or acceptance evidence | Estimated remaining effort | Dependencies / confidence |
| --- | --- | --- | --- |
| OV-602 / Partial | Empty/partial/malformed/unsupported backend responses; live model quality and compatibility | 2–5 days | OV-201 and live completion models; medium |
| OV-603 / Partial | Native partial acceptance, typing during requests and measured latency/cancellation on supported platforms | 2–4 days per available platform | OV-602/402; macOS/Linux dates unknown without machines; medium |
| OV-604 / Planned | Next-edit prediction contract, implementation, navigation/range correctness, stale results and latency/quality | 5–15 days | OV-603/503 and a suitable prediction backend; low; not silently excluded |
| OV-701 / Partial | Real-profile/platform import preview, JSONC/snippets, extension registration, idempotency and exact restore | 2–4 days per available platform | OV-302 and source-profile fixtures; medium |
| OV-702 / Partial | Extension install/update/uninstall, language packs, native ABI compatibility and clear failures | 3–6 days per available platform | OV-402/403 and package sources; medium |
| OV-703 / Planned | SSH, WSL and containers: connect/reconnect, files, terminals, extension host, secrets, AI routing and cleanup | 5–10 days | User-owned test hosts/runtimes not yet established; calendar ETA unknown; low |
| OV-704 / Unknown | Inventory image/browser/computer modes and helpers; permission, cancellation, result and unavailable-capability behavior | 3–5 days investigation, then 4–12 days implementation | Explicit mode inventory and provider/helper availability; low |

## Independent build and distribution

| Story / current state | Missing functions or acceptance evidence | Estimated remaining effort | Dependencies / confidence |
| --- | --- | --- | --- |
| OV-801 / Partial | All 52 PE and 15 WASM roles/source/license/version/ABI/rebuild dispositions; five remaining full WASM records | 4–8 days | Loaded-role evidence from OV-501; medium for inventory, low for closed dependencies |
| OV-802 / Planned | Pinned host/addon sources and lockfiles; rebuild storage/watcher/terminal/OS bindings; ABI/provenance checks | 5–15 days per initial architecture | OV-801 and obtainable sources/toolchains; low |
| OV-803 / Planned | Replace required proprietary/native/server contracts with behaviorally verified implementations | 15–40 days discovery allowance | OV-501/601/801; very low; bound must be revised after interface inventory |
| OV-804 / Planned | Build and launch from a clean checkout/machine without ignored recovery tree or original installation | 3–7 days after dependencies | OV-802/803; overall calendar ETA unknown |
| OV-901 / Partial | Clean Windows install, complete critical suite, all identity surfaces and claimed architectures | 3–6 days per architecture | OV-804 and core acceptance; medium |
| OV-902 / Planned | Native macOS workflows, keychain/permissions/sandbox/addons; signing/notarization if claimed | 4–8 days per architecture after access | Mac unavailable; signing credentials if required; calendar ETA unknown |
| OV-903 / Planned | Native Linux distro/display matrix, secrets/sandbox/shell/addons and critical suite | 4–8 days per initial target after access | Linux desktop unavailable; calendar ETA unknown |
| OV-904 / Planned | Manual installer/update/rollback, interrupted upgrades, migration, uninstall/data retention and release provenance | 4–8 days per packaging family | OV-901–903 on claimed targets; medium after build ownership |

## Performance and release hardening

| Story / current state | Missing functions or acceptance evidence | Estimated remaining effort | Dependencies / confidence |
| --- | --- | --- | --- |
| OV-1001 / Partial | Live input-token/context/duplicate-request/history measurements; branch/tool reasoning and session disposal | 3–6 days | OV-101/103/503; medium; local titles and request coalescing already implemented |
| OV-1002 / Partial | Frame/input latency, transcript/model row bounds, heap and filesystem work; incremental edits on fixed workloads | 3–7 days | OV-202/402/603; medium |
| OV-1003 / Partial | Idle/reactivation and long-session memory; complete watcher/timer/process ownership across supported workloads | 3–7 days per available platform | OV-504/703/901–903; medium; MCP startup reduction is scoped evidence |
| OV-1004 / Planned | Release matrix, secret/log/authority failures, corrupt state, failed cleanup/crash recovery and recovery instructions | 4–8 days after critical features | All accepted release dependencies; medium after implementation stabilizes |
| OV-1005 / Partial | Extended process-tree network evidence and native macOS/Linux telemetry checks | 2–4 days per available platform | Native access and realistic workloads; independently installed extensions assessed separately |

## Execution order and estimate review

1. Close data-loss/routing risks in provider settings, then exercise the live AI
   development loop and error matrix. Re-estimate after native routing evidence.
2. Complete project, customization, autocomplete and Git workflows; finish native
   lifecycle failure checks. Re-estimate from failed gates, not passing counts.
3. Establish retrieval and native-helper ownership, then implement required
   replacements and independently reproducible builds. This is the largest
   uncertainty and can change the release forecast substantially.
4. Run packaging, rollback and the complete supported native matrix; measure
   performance/telemetry under realistic sessions and audit every acceptance row.

OV-101, OV-105, OV-201, OV-202 and OV-601 are already Verified and have no remaining estimate in
this table. All 37 other accepted stories appear exactly once. GitHub Actions
remain disabled; checks, builds and releases are local. No completion date is
claimed while required evidence is absent.
