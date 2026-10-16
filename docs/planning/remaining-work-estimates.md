# OpenVision ETA and priorities

Updated 16 October 2026 against the acceptance ledger,
[latest documentation/source reconciliation](../recovery/feature-gap-audit.md#latest-documentation-and-source-reconciliation),
[source-to-gap map](../recovery/feature-gap-audit.md#source-index-to-implementation-gaps),
[build-integrity correction](../engineering/runtime-build-integrity.md) and
[Agent recovery evidence](../recovery/rea-agent-review-recovery.md).
The [native keyboard follow-up](../recovery/rea-agent-undo-retry.md) closes the
scoped snapshot-failure history/guidance defect within OV-103's existing points;
menu/group failures, physical faults and active-write/tool interruption remain.
The [critical-first roadmap](roadmap.md#critical-first-backlog-and-eta) owns the
ordered story list, estimates, dependencies and acceptance gates.

The [current working-tree build gate](../recovery/feature-gap-audit.md#current-build-and-pending-work)
is separate from earlier passing runs: pending provider headers have no final
build/native acceptance, and generated Agent tokenization currently fails.
Recovery and repeat verification remain within the existing points below.

The 16 October transactional review-storage follow-up now covers source-level
cache rollback and initial snapshot-write retry. Its **58/58** Agent tests,
production build and **26/26** build-integrity checks pass. The remaining storage
gates are physical I/O/full-volume behavior, termination during outstanding
writes/tools and the broader OV-103 failure matrix; these do not change the
ledger or points below.

| Order | Remaining work | Stories | Complexity points |
| --- | --- | ---: | ---: |
| P0 | Data safety, tool authority, isolation, privacy and failure checks | 10 | 81 |
| P1 | RAM/request efficiency, project/language/completion workflows and integration lifecycle | 12 | 87 |
| P2 | Native dependency ownership and independent clean-machine builds | 4 | 47 |
| P3 | Retrieval, incremental indexing, recovery and next-edit prediction | 4 | 42 |
| P4 | Complete distribution, update/rollback and native platform coverage | 4 | 39 |
| P5 | Remote development and specialized modes | 2 | 26 |
| **Current unfinished acceptance scope** | | **36** | **322** |

These are provisional scope estimates, not promised delivery dates. The ledger
remains **6/42 fully Verified (14.29%)**, with **28 additional stories** needed
for the 80% target. The 322 points cover the entire unfinished scope; a reliable
point estimate for the 80% subset requires choosing its stories and dependencies.
Account work packages overlap this scope and must not be added twice.

Windows startup and native Agent workflows passed after the
[build-integrity correction](../engineering/runtime-build-integrity.md#verification-scope).
The earlier `urlmon.dll` failure remains historical evidence; successful app
containment does not identify or repair its OS-level cause. Control-plane
[HTTP](../performance/control-plane-http-resources.md),
[STDIO](../performance/control-plane-stdio-resources.md) and
[lifecycle](../performance/control-plane-mcp-lifecycle.md) checks have separate
bounded-resource evidence.

**Next: finish Agent editing/recovery and its chat transport dependency.** Close
the [remaining review gates](../recovery/rea-agent-review-recovery.md#remaining-acceptance),
other chat interruption/history and provider-error cases, and the remaining
[physical storage-failure matrix](../engineering/storage-write-ownership.md#verification).
[Full-duration native header/body timeout and explicit live retry](../recovery/rea-agent-timeout-recovery.md#full-duration-native-follow-up)
now pass; those subcases no longer await verification.
Then follow P0/P1 in the roadmap, including configuration durability, MCP
ownership and measured long-session resources. The Windows payload needs a
refresh after its declared packaging checks pass.

Official-account GPT-6 eligibility and missing platform environments remain
specific open gates. The earlier API balance failure does not establish a
current universal blocker: later [live API retry checks](../recovery/rea-agent-retry-history.md)
passed. Native Linux now has [scoped x64 evidence](../verification/linux-verification.md);
native macOS and the remaining Linux matrix are still open. Work independent
of those gates continues.

The [latest performance fixes](../performance/autocomplete-stream-performance.md) are implemented
and locally verified in source; they do not promote a whole story or update the
preview.6 payload. The [Rust rewrite](rust/rust-roadmap.md) has a separate baseline of
36 planned packages / 195 provisional points, replacing its earlier 99-point
outline. Its [component audit](rust/rust-component-audit.md) separates Rust ownership
from retained engines and compatibility unknowns. Discovery can start early;
production cutover requires parity, migration and independent-build gates. These
points overlap existing contracts and do not add to the 322-point feature total.
