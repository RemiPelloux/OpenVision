# OpenVision ETA and priorities

Updated 15 October 2026 against the acceptance ledger and the
[control-plane HTTP follow-up](control-plane-http-resources.md).
The [critical-first roadmap](roadmap.md#critical-first-backlog-and-eta) owns the
ordered story list, estimates, dependencies and acceptance gates.

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

The missing provider-error fixture is restored and its 25 focused checks pass.
Control-plane HTTP deadlines/disconnects now cancel actual work, with bounded
response bodies and passing real HTTP/public-route checks. Next: close remaining
P0 failure checks; bound control-plane subprocess output/cache memory,
measure whole-app long sessions, and refresh the Windows package after its
declared checks pass. GPT-6 account eligibility, the last observed API balance
failure and access to further native platform environments remain blockers for
their respective checks. Work that does not depend on them can continue.

The [latest performance fixes](autocomplete-stream-performance.md) are implemented
and locally verified in source; they do not promote a whole story or update the
preview.6 payload. The [Rust rewrite](rust-roadmap.md) has a separate baseline of
36 planned packages / 195 provisional points, replacing its earlier 99-point
outline. Its [component audit](rust-component-audit.md) separates Rust ownership
from retained engines and compatibility unknowns. Discovery can start early;
production cutover requires parity, migration and independent-build gates. These
points overlap existing contracts and do not add to the 322-point feature total.
