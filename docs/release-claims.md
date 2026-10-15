# OpenVision release claims and verification matrix

Updated 15 October 2026; latest portable release 0.2.0-preview.6. This is a development build with incomplete release
acceptance. The fixed denominator remains the 42 stories
in [feature-acceptance.json](feature-acceptance.json); at least 34 must be fully
Verified. The [sprint ledger](completion-sprints.md) owns each story's status and
full acceptance clauses. A successful cell below is limited to its named workflow.
The target was changed by the user to 80% on 13 October; requirements were not
removed. The [feature roadmap](roadmap.md) records the
usability release gate, dependencies and complexity points.

## Input and build identity

The current recovered input is version **3.21.13**, based on editor version
**1.128.0**, Windows x64. The retained original executable SHA-256 is
`757a63d3fe143103f8525f322b890de625061e827711afde197d63f833142242`.
The baseline runner verifies those original bytes against the installation
inventory before launching. It also records SHA-256 digests for the installation
and readability manifests, current host, workbench, Agent bundles, helpers and
fixture code, plus Git commit, operating system, architecture and Node version.
The manifest pins the original inventory; the baseline does not rehash every
original payload or establish an independent rebuild.

Runtime preparation still requires matching recovered files and shipped native
components. Source recovery, pseudocode, original-source availability and a clean
source build are distinct; [recovery status](recovery-status.md) records the gaps.
The public preview now includes the complete Windows x64 portable app, both as
a release ZIP and tracked Git payload parts. Relocated native editing/autocomplete
and repository extraction are recorded in [preview.3 verification](portable-preview3.md).
The current clone fix and refreshed payload are covered in [preview.4 verification](portable-preview4.md).
Current-window project opening and the latest payload are covered in [preview.6 verification](portable-preview6.md); native themes remain covered in [preview.5](portable-preview5.md).
No independent rebuild of every native component is claimed.

## Source additions after preview.6

The editable source build adds account models to the native Agent picker and
provider-reported usage to the bottom bar. These features are **not included in
the preview.6 payload**. See [account setup and verification](account-integrations.md)
for experimental text/tool support, isolation, resource limits and remaining
platform and lifecycle checks. They do not change the 42-story ledger.

Real Windows checks on 15 October verified a signed-in Claude Sonnet file read
and edit through OpenVision Agent, with the result checked on disk. Codex's
official client returned quota windows; Claude supplied no usable quota data.
The refreshed Codex account catalog offered no GPT-6 models and a real
`gpt-6.1-sol` request was rejected as unsupported for that account. Only actually
advertised GPT-6 account models are offered; older choices are not substituted.
A separate native request through the saved Codex Easy GPT-6 connection returned
HTTP 403 `INSUFFICIENT_BALANCE`. Earlier successful API checks below remain
historical evidence, not proof of current balance or availability.

The latest Windows source checks passed 66 account tests; the earlier portable
suite passed 30 tests (one skipped). Desktop syntax checks and the source build
passed after the account performance fixes. Controlled test
results do not establish provider success or native macOS/Linux account support.

The source also contains native MCP recovery and ownership verification added
after preview.6. Retained Windows results establish these specific boundaries:

| Workflow | Observed result | Evidence and limits |
| --- | --- | --- |
| HTTP session expiry and direct session reinitialization | Both runs passed five checks: failed-close ownership, repeated-failure replacement blocking, explicit cleanup recovery and unchanged normal utility | [Session recovery](rea-mcp-cleanup.md#native-session-recovery-verification); real transports with controlled close failures, no Agent retry UI or AI inference claim |
| Shared global STDIO server | Two project windows used the same surviving child; closing one window preserved its sibling's working calls | [Window ownership](rea-mcp-ownership.md); native Agent approval with controlled inference responses |
| Separate user-data directories | Same-named servers remained isolated; closing one host preserved the other; all four recorded child PIDs were absent after final shutdown | [User-data ownership](rea-mcp-ownership.md); two hosts, not named profiles within one host |

The ownership run retained unauthenticated conversation metadata-sync errors,
a listener-count warning, onboarding failures, duplicate settings-command
registration and mutex warnings. No fix or network-absence claim follows from
these successful MCP checks. A subsequent [metadata owner fix](local-conversation-metadata.md)
skips the hosted contribution in local mode. A disposable native Windows run
verified zero contribution/client invocations, persisted local titles/history
and same-chat continuation after restart with exactly two inference requests.
That fixture does not establish live AI compatibility or process-wide network
absence. Listener lifetime, broader traffic and shutdown investigations remain
in the [roadmap](roadmap.md#next-reliability-checks).
No RAM or CPU improvement was measured in these correctness checks.
OV-303 remains Partial and the ledger remains **6/42 Verified (14.29%)**.

Subsequent [local startup verification](local-startup.md) passes Explorer,
native editor reload, same-window project switching and clean closure; restoring
the old lifecycle reproduces the original onboarding error. Broader diagnostics
remain open. A separate [account performance review](account-performance.md)
measures fewer route rebuilds and failed-host queries, and lower retained stream
heap. Its module-worker CPU/RSS results do not establish whole-app RAM savings.
Neither addition is included in preview.6 or promotes a full acceptance story.
The preview.6 archive and repository payload have not been refreshed by these
source commits.

## Feature and fixture matrix

| Accepted stories | Current observed scope | Required evidence still missing |
| --- | --- | --- |
| OV-101, OV-1001–1003 | Pinned native Agent baseline via `npm run benchmark:native`; context-work benchmark via `npm run benchmark:context` | Long-session/resource reactivation, full token/context workload and UI latency budgets; other native platforms |
| OV-102–104 | Native stream, Read, two-file edit keep/undo, command deny/allow/Stop, upstream Stop, restart/resume against the local HTTP fixture (`npm run verify:agent`); real-provider Read matrix below; GPT High, DeepSeek High and Grok default restart/fork recall with persisted isolation; real Provider-default Stop/same-chat resubmission for all three | Live error retry/timeout and additional Stop reasoning cases, remaining interruption/history cases, subagent choices and remaining tool/shell combinations |
| OV-105 | Both recovered workbench variants suppress canceled autocomplete dispatch and stale buffered edits | Live autocomplete performance remains under OV-602–604 |
| OV-201 | Native Windows discovery/retention, manual IDs, duplicate provider IDs, replacement key across restart, disabled/deleted selections and explicit recovery | [Local configuration contract verified](provider-selection-lifecycle.md); this does not establish upstream model compatibility or another platform |
| OV-202 | Native Windows 10,000-model Agent/settings search, bounded pages, keyboard navigation, focus restoration, accessible names and discovery failure feedback | [Local picker contract verified](model-picker-scale.md); no manual screen-reader certification or other-platform runtime claim |
| OV-203–204 | Per-model reasoning menus and request encoders; native simulated HTTP/stream failures, explicit retry, context/capability error guidance, DNS/HTTPS protocol and certificate-trust recovery, and bounded diagnostics ([scope](provider-failure-handling.md)) | Certificate expiry/hostname mismatch, inference timeouts and remaining stream/input cases, live/platform gates; every offered tier needs verification or an unverified designation |
| OV-301–304 | Local rules CRUD/restart, native two-window concurrency and profile isolation, SQLite rejected-write feedback/recovery, real GPT first-request rule consumption; approved project memories and live GPT recall; native reviewed legacy imports preserve original bytes; cross-window IPC refresh rejects stale review; two-root memory selection, junction rejection and ACL-denied retry; development-build seeded inline-edit exclusion; global MCP path isolation, HTTP/STDIO native regressions and repeated STDIO cleanup-failure recovery | Physical full-disk/I/O recovery, full customization ownership, remaining native MCP/auth lifecycle gates; see [rules evidence](local-rules-concurrency.md), [memory evidence](project-memories.md), [Quick Edit scope](rea-inline-edit.md) and [cleanup evidence](rea-mcp-cleanup.md) |
| OV-401–404 | Native two-root search, Unicode edit/save/undo/redo; rename/move/delete, external conflicts, junction edits, denied-write recovery and graceful unsaved restart ([lifecycle evidence](project-lifecycle-verification.md)); 100-file/10,000-file incremental notifications and stable watcher lifecycle ([scale evidence](project-scale-verification.md)); TS/JS and clangd C/C++ language checks; global/API Save All persists hidden dirty files ([language](rea-language-workflows.md), [C/C++](cpp-support.md), [Save All](save-all-verification.md)); native cmd/PowerShell, tasks/problem matcher, Node debugging and child release ([development evidence](development-workflows.md)); [OV-404 Git/worktree contract verified](git-workflows.md), including abnormal-host restart | File symlinks and OS-level filesystem work bounds, remaining language matrix, intermittent launcher exit 134; broader remote/platform/release recovery |
| OV-501–504 | File-service inventory and local context collector observations | Data-destination proof, retrieval quality, incremental indexing, cancellation/restart/migration and resource budgets |
| OV-601 | REA completion request/result contracts pinned in [contract findings](rea-autocomplete-contract.md) | Unshipped original server behavior remains unknown |
| OV-602–604 | Custom Chat Completions adapter; native Windows Unicode single/multiline and partial-word acceptance/undo, pending typing/Escape/file-switch cancellation, 13-case response-failure matrix and recovery; one direct live GPT/DeepSeek/Grok sum-expression fixture each | Representative multi-language/project quality, native live-provider acceptance, broader editing/latency workloads and next-edit prediction |
| OV-701–704 | Settings import and local extension-integrity checks; recovered integration surfaces | Full import rollback/isolation, extension lifecycle, SSH/WSL/container workflows, specialized image/browser/computer modes |
| OV-801–804 | Inventory of 52 native PE paths and 15 distinct WASM payloads; editable recovered JavaScript | Source/license/ABI/replacement dispositions and clean-checkout independent build |
| OV-901–904 | Windows x64 assembled editor and scoped native fixtures; OV-903 Linux x64 native suite ([evidence](linux-verification.md)) | Clean installation/package/upgrade/rollback matrix; other native systems and architectures |
| OV-1004–1005 | Built-in telemetry transformations, focused tests and bounded native Windows capture | Full release/failure recovery, extended process-tree network workloads and macOS/Linux runtime checks |

See [native Agent evidence](rea-agent-runtime.md), [command cancellation](rea-command-cancellation.md),
[project evidence](rea-project-workflows.md), [autocomplete implementation](rea-custom-autocomplete.md)
and [telemetry audit](rea-telemetry-audit.md) for retained results and exact limits.

## Provider matrix

All live entries below use saved provider-specific credentials at
`https://codex-easy.ai/v1`. Listing an ID is not a capability claim.

| Model/connection | Discovery | Live stream/tool evidence | Reasoning and other limits |
| --- | --- | --- | --- |
| GPT connection, `gpt-6.1-sol` | 11 IDs, all enabled saved IDs present | Direct tool roundtrip/plain stream and native Read passed; a later High Read timed out; latest inherited High Task child Read and parent continuation passed four HTTP 200 requests | Timeout retained; real explicit child overrides, retries/resumes, other models/tiers, images, broader autocomplete and full lifecycle unverified |
| DeepSeek connection, `deepseek-v4-flash` | 6 IDs, all enabled saved IDs present | Plain stream and latest native Provider default/High Read passed; High restart/fork recall and persisted isolation passed | Earlier native/default/explicit-effort and direct tool continuation HTTP 400 failures retained. Captured payload replays now pass unchanged; failure cause and reliability remain unresolved |
| Grok connection, `grok-4.7` | 4 IDs, all enabled saved IDs present | Direct low-effort tool roundtrip and native Read with Provider default passed; latest native restart/fork recall and persisted isolation passed | Plain-stream exact-phrase check failed on a refusal (HTTP 200); earlier continuation HTTP 429; other tiers/models and full lifecycle unverified |
| Local `fixture-agent` | One synthetic ID | Deterministic native stream/tool/approval/cancellation/restart fixture | Proves local workflow only; no model intelligence, upstream performance or token-usage claim |
| Other custom providers/models | Configuration supported | No blanket compatibility claim | Discovery/chat/tools/reasoning/images/autocomplete each require independent checks |

The [live compatibility report](live-provider-compatibility.md) pins run records.
The separate [live autocomplete sample](rea-custom-autocomplete.md#live-codex-easy-compatibility-sample)
used the production non-streaming adapter against GPT‑6.1 Sol, DeepSeek‑V4 Flash
and Grok‑4.7. Each returned a valid sum expression in one actual API request.
This limited direct probe does not establish native live acceptance, broad
suggestion quality or latency budgets.
The native Windows [editing fixture](rea-custom-autocomplete.md#pending-requests-and-partial-accept-undo)
verifies partial-word acceptance, Tab remainder, exact undo and pending
typing/Escape/file-switch cancellation below a 1,000 ms local-server budget.
Pending Escape and partial-undo grouping were fixed. This is controlled-response
evidence; broader editing, live latency and other platforms remain unverified.
Native live Read uses unchanged inference bodies through an authenticated relay;
its catalog mirrors saved capability hints. None of the three real catalogs
advertised reasoning metadata. Provider default omits effort; explicit menu tiers
are compatibility hints and remain unverified except for the exact runs recorded.
The [reasoning capability lifecycle](reasoning-capability-lifecycle.md) now makes
that uncertainty visible and verifies parent-Agent rejection/recovery for stale
choices in a simulated native Windows workflow. It adds no live-provider support
claim and leaves OV-203 Partial.
The [subagent verification](subagent-reasoning-verification.md) adds native
reasoning/override/restart/error fixtures and the real GPT child Read above.
It corrects the earlier static inference of broken child reasoning propagation;
the measured disabled-child model fallback was fixed. OV-104/203 remain Partial.

## Platform, language and runtime matrix

| Environment | Native evidence | Remaining status |
| --- | --- | --- |
| Windows x64, 10.0.26200, current workstation | Assembled desktop, local secrets and listed native fixtures | Development/testing environment; complete Windows release gate remains Partial |
| Windows ARM64 | None | Unverified; no architecture support inferred from x64 or preparation fixtures |
| macOS x64 / ARM64 | None; no test machine currently available | Required native gates retained; no launch/keychain/signing claim |
| Linux x64, Omarchy (Arch based), kernel 7.2, Hyprland on Wayland | Local build and portable package, Secret Service keyring, namespace sandbox, bash/sh terminals and the native suite in [Linux verification](linux-verification.md) | Other distributions, X11 sessions and KDE/KWallet not run natively |
| Linux ARM64 | None | Needs a pinned ARM64 input; unverified |
| Text/JavaScript files in current Windows fixtures | Unicode text editing, search, Agent Read/StrReplace and saved bytes | Not a language-service acceptance result |
| TypeScript/JavaScript language service and other languages/extensions | Bundles/registrations exist | Diagnostics, navigation, rename, formatting and large-file matrix not yet verified |
| Windows Command Prompt, Windows PowerShell 5.1 and pinned Node 24.18.0 | Agent command deny/allow/Stop; native shell resize/Unicode/environment/restart, task matcher, Node debugger break/step/Stop and child cleanup | [Declared no-profile shell matrix](development-workflows.md); intermittent launcher exit 134 unresolved; other shells/debuggers and persistent sessions unverified |
| SSH, WSL, containers | No complete native workflow evidence | Connection, remote extension host, routing and cleanup remain required |

## Exclusions and measurement interpretation

Original account/signup/billing, hosted cloud agents and vendor telemetry
collection are excluded from the accepted local product. Removing telemetry does
not waive the separate no-telemetry assurance gate. User-configured AI and MCP
network connections remain part of the product. Missing native-build/platform,
retrieval, next-edit and specialized-workflow evidence remains in the denominator.

The [native performance baseline](native-performance-baseline.md) defines measured
startup, idle/active memory, request count and Stop workloads. Synthetic counters
are not model token usage, private commit is not resident RAM, and a short run is
not a leak test. No GitHub Actions or automatic release pipelines are used.
