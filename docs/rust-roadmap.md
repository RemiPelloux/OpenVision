# OpenVision Rust rewrite

**Planned · later architecture track · no Rust implementation shipped yet**

The end goal is a Rust-owned OpenVision core and desktop application, replacing
the recovered application runtime while preserving the accepted development
workflows. Start after the current product contracts and acceptance suite are
established. Migrate one subsystem at a time so the working app remains usable.

## Is Rust a good choice?

Yes for CPU-heavy indexing, parsing, search, filesystem work and explicit resource
ownership. Rust can provide predictable allocation and concurrency without a
garbage-collected runtime in those components. It also supports a native desktop
shell if its editor, accessibility and extension requirements can be satisfied.

The language alone does not guarantee speed or low RAM. Duplicate requests,
unbounded caches, full-project rescans and excessive rendering remain expensive
in Rust. Moving services to Rust while retaining Electron does not remove
Chromium's memory footprint. Remote model inference and network latency remain
provider costs; a rewrite cannot make those disappear.

Use profiling to select each migration. Keep proven implementations when a
replacement does not improve the measured bottleneck or maintain behavior.
Choose the final UI toolkit through a prototype and acceptance evidence rather
than committing to a framework before testing its limits.

## Ordered work packages

Points express relative complexity and uncertainty using the
[shared scale](roadmap.md#points-and-delivery-gates). A 13-point package needs
smaller implementation tasks after its contracts are understood. These packages
do not add to the current 42-story acceptance denominator or earn current parity
credit merely by being planned.

| ID / state | Package | Points | Prerequisites and completion gate |
| --- | --- | --- | --- |
| RUST-01 / Planned | Pin product behavior and baseline workloads | 5 | Current critical workflows verified; record fixtures for project open/edit/save, search, indexing, Agent, autocomplete, terminals, extensions and recovery |
| RUST-02 / Planned | Define Rust core contracts and incremental integration | 8 | RUST-01; versioned IPC with bounded messages, cancellation, errors, ownership and crash recovery; current app can select and roll back a migrated service |
| RUST-03 / Planned | Incremental filesystem, indexing and search services | 13 | RUST-02 and OV-501–504 contracts; bounded queues/caches, ignore/link handling, rename/delete/branch invalidation and recoverable indexes; relevant results match the reference |
| RUST-04 / Planned | Local state and profile storage | 8 | RUST-02 and OV-301/302/701 contracts; transactional saves, concurrent writers, schema migration and OS secret storage; import/rollback preserves keys and user data |
| RUST-05 / Planned | Agent and provider runtime | 13 | RUST-02/04 and OV-102–104/203/204; preserve custom URL/key/model routing, reasoning, streaming, approvals, tool calls, retries, history and prompt budgets with no duplicate dispatch |
| RUST-06 / Planned | Process, terminal and protocol bridges | 13 | RUST-02 and OV-303/304/402/403/703; PTY, LSP, DAP and MCP lifecycle/permissions verified; Stop and crashes release owned children on supported systems |
| RUST-07 / Planned | Native editor and shell feasibility prototype | 13 | RUST-01/02; test text editing, Unicode/IME, undo, large files, multiple windows, accessibility and rendering; compare native Rust UI options with the existing host |
| RUST-08 / Planned | Production Rust desktop shell and compatibility | 13 | RUST-03–07; replace the recovered shell, retain project/Agent/autocomplete/settings workflows, and decide how required JavaScript extensions run; every required capability has a verified implementation or explicit product decision |
| RUST-09 / Planned | Independent packaging and final cutover | 13 | RUST-08 and OV-801–904 provenance/build gates; reproducible native builds, install/update/rollback, profile migration and complete supported-platform acceptance |

RUST-03, RUST-05 and RUST-06 may be investigated independently after their shared
contracts are stable. The production shell remains downstream of compatibility
and editor evidence. Backend prototypes are migration steps, not completion of
the full-app rewrite.

## Compatibility decisions that must stay explicit

- **Extensions:** existing JavaScript extensions may require an isolated
  JavaScript host. Rewriting our app in Rust does not rewrite those extensions.
  Preserve required compatibility or obtain an explicit scope decision before
  removing it.
- **Editor:** preserve selection, multi-cursor editing, Unicode/IME input, undo,
  diff review, language integrations, keybindings and accessible navigation.
- **Services:** preserve custom provider URLs and credentials, model discovery,
  Agent approvals/cancellation, MCP transports and terminal process ownership.
- **Profiles:** use additive, backed-up migrations. An upgrade failure must allow
  returning to the previous version without losing projects, rules or secrets.
- **Native dependencies:** rebuilding the host does not resolve missing addon
  sources or proprietary contracts automatically. Follow the existing provenance
  and replacement gates; do not copy unavailable implementations into a new name.
- **Platforms:** Windows is the available native verification target. macOS/Linux
  remain unverified until their actual native acceptance matrices run.

## Performance and acceptance gates

Before each implementation, pin a reproducible workload, baseline build, machine,
dataset and acceptance budget. Compare equivalent features and workloads; turning
features off is not a valid speedup. Record cold and warm runs separately.

| Measure | Required comparison |
| --- | --- |
| Memory | Idle, large-project and long-session peak process-family memory, including required extension/language/service processes; return after closing a project |
| Responsiveness | Startup/project-open, typing-to-paint, search and completion-display distributions, including tail latency |
| CPU and filesystem | CPU work, scans and reads per edit; burst handling, bounded worker concurrency and idle/reactivation behavior |
| AI efficiency | Same provider/model/context: request counts, retries, prompt tokens and cancellation; distinguish local overhead from network/inference |
| Correctness | Same acceptance fixtures, file contents, undo/redo, approvals, profile migration and recovery outcomes |
| Distribution | Independent build provenance, native platform behavior and upgrade/rollback results |

Set numeric budgets from measured baselines before judging a prototype. No
multiplier or RAM reduction is promised now. Promote a replacement only when it
meets parity and its declared improvement budget without unacceptable regressions
elsewhere. Remove superseded implementations after rollback/migration coverage
passes and ownership has transferred.

The final Rust release requires both the production shell and the owned core,
plus documented exceptions for external runtimes. A Rust sidecar, a new shell
around the old runtime or a fast isolated benchmark does not complete this track.
