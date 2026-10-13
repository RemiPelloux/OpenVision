# OpenVision release claims and verification matrix

Baseline date: 13 October 2026. This is a development build with incomplete release
acceptance. The fixed denominator remains the 42 stories
in [feature-acceptance.json](feature-acceptance.json); at least 34 must be fully
Verified. The [sprint ledger](completion-sprints.md) owns each story's status and
full acceptance clauses. A successful cell below is limited to its named workflow.
The target was changed by the user to 80% on 13 October; requirements were not
removed. [Remaining-work estimates](remaining-work-estimates.md) record the
usability release gate, dependencies and conditional ETAs.

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
No source-rebuild or distributable-release claim is made.

## Feature and fixture matrix

| Accepted stories | Current observed scope | Required evidence still missing |
| --- | --- | --- |
| OV-101, OV-1001–1003 | Pinned native Agent baseline via `npm run benchmark:native`; context-work benchmark via `npm run benchmark:context` | Long-session/resource reactivation, full token/context workload and UI latency budgets; other native platforms |
| OV-102–104 | Native stream, Read, two-file edit keep/undo, command deny/allow/Stop, upstream Stop, restart/resume against the local HTTP fixture (`npm run verify:agent`); real-provider Read matrix below | Live history, branching, retry/timeout/Stop, subagent choices and remaining tool/shell combinations |
| OV-105 | Both recovered workbench variants suppress canceled autocomplete dispatch and stale buffered edits | Live autocomplete performance remains under OV-602–604 |
| OV-201 | Native Windows discovery/retention, manual IDs, duplicate provider IDs, replacement key across restart, disabled/deleted selections and explicit recovery | [Local configuration contract verified](provider-selection-lifecycle.md); this does not establish upstream model compatibility or another platform |
| OV-202 | Native Windows 10,000-model Agent/settings search, bounded pages, keyboard navigation, focus restoration, accessible names and discovery failure feedback | [Local picker contract verified](model-picker-scale.md); no manual screen-reader certification or other-platform runtime claim |
| OV-203–204 | Per-model reasoning menus and request encoders | Provider failure matrix; every offered tier needs verification or an unverified designation |
| OV-301–304 | Local rules CRUD/restart, global MCP path isolation; local control-plane STDIO/HTTP fixtures | First live rule consumption, two-window/profile/customization ownership, native MCP approval/reconnect/auth lifecycle |
| OV-401–404 | Native two-root search, Unicode edit/save/undo/redo and one Node process task (`npm run verify:project`) | Rename/move/delete/symlink/permissions/watcher/restoration, language intelligence, interactive terminals/debugging, Git conflicts/worktree recovery |
| OV-501–504 | File-service inventory and local context collector observations | Data-destination proof, retrieval quality, incremental indexing, cancellation/restart/migration and resource budgets |
| OV-601 | REA completion request/result contracts pinned in [contract findings](rea-autocomplete-contract.md) | Unshipped original server behavior remains unknown |
| OV-602–604 | Custom Chat Completions adapter; native Windows Unicode single/multiline Tab acceptance and undo (`npm run verify:completion`) | Live-model quality, failure matrix, partial acceptance, next-edit prediction and latency |
| OV-701–704 | Settings import and local extension-integrity checks; recovered integration surfaces | Full import rollback/isolation, extension lifecycle, SSH/WSL/container workflows, specialized image/browser/computer modes |
| OV-801–804 | Inventory of 52 native PE paths and 15 distinct WASM payloads; editable recovered JavaScript | Source/license/ABI/replacement dispositions and clean-checkout independent build |
| OV-901–904 | Windows x64 assembled editor and scoped native fixtures | Clean installation/package/upgrade/rollback matrix; other native systems and architectures |
| OV-1004–1005 | Built-in telemetry transformations, focused tests and bounded native Windows capture | Full release/failure recovery, extended process-tree network workloads and macOS/Linux runtime checks |

See [native Agent evidence](rea-agent-runtime.md), [command cancellation](rea-command-cancellation.md),
[project evidence](rea-project-workflows.md), [autocomplete implementation](rea-custom-autocomplete.md)
and [telemetry audit](rea-telemetry-audit.md) for retained results and exact limits.

## Provider matrix

All live entries below use saved provider-specific credentials at
`https://codex-easy.ai/v1`. Listing an ID is not a capability claim.

| Model/connection | Discovery | Live stream/tool evidence | Reasoning and other limits |
| --- | --- | --- | --- |
| GPT connection, `gpt-6.1-sol` | 11 IDs, all enabled saved IDs present | Direct low-effort synthetic tool roundtrip; latest plain stream and native Read with Provider default and High passed | Other models/tiers, images, autocomplete and full Agent lifecycle unverified |
| DeepSeek connection, `deepseek-v4-flash` | 6 IDs, all enabled saved IDs present | Latest plain stream passed; earlier native Read passed, latest native Provider default request returned HTTP 400 | Agent support is inconsistent. Explicit low/none/high requests and direct synthetic tool continuation also failed; the cause of the latest native failure is unresolved |
| Grok connection, `grok-4.7` | 4 IDs, all enabled saved IDs present | Direct low-effort tool roundtrip and latest native Read with Provider default passed | Latest plain-stream exact-phrase check failed on a refusal (HTTP 200); earlier continuation HTTP 429; other tiers/models and full lifecycle unverified |
| Local `fixture-agent` | One synthetic ID | Deterministic native stream/tool/approval/cancellation/restart fixture | Proves local workflow only; no model intelligence, upstream performance or token-usage claim |
| Other custom providers/models | Configuration supported | No blanket compatibility claim | Discovery/chat/tools/reasoning/images/autocomplete each require independent checks |

The [live compatibility report](live-provider-compatibility.md) pins run records.
Native live Read uses unchanged inference bodies through an authenticated relay;
its catalog mirrors saved capability hints. None of the three real catalogs
advertised reasoning metadata. Provider default omits effort; explicit menu tiers
are compatibility hints and remain unverified except for the exact runs recorded.

## Platform, language and runtime matrix

| Environment | Native evidence | Remaining status |
| --- | --- | --- |
| Windows x64, 10.0.26200, current workstation | Assembled desktop, local secrets and listed native fixtures | Development/testing environment; complete Windows release gate remains Partial |
| Windows ARM64 | None | Unverified; no architecture support inferred from x64 or preparation fixtures |
| macOS x64 / ARM64 | None; no test machine currently available | Required native gates retained; no launch/keychain/signing claim |
| Linux x64 / ARM64 | None; no test desktop currently available | Required native gates retained; no distro/display/sandbox/secrets claim |
| Text/JavaScript files in current Windows fixtures | Unicode text editing, search, Agent Read/StrReplace and saved bytes | Not a language-service acceptance result |
| TypeScript/JavaScript language service and other languages/extensions | Bundles/registrations exist | Diagnostics, navigation, rename, formatting and large-file matrix not yet verified |
| Windows PowerShell and pinned Node 24.18.0 | Agent command deny/allow/Stop; native process task | Interactive resize/input/restart, debugger and other shells remain open |
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
