# OpenVision progress, percentages and delivery gates

Updated **19 October 2026**. Start here for the feature backlog, recovery results
and Rust plan. ETA means **remaining acceptance gates and provisional complexity
points**, without calendar or engineer-time estimates.

The [current build and pending-work register](recovery/feature-gap-audit.md#current-build-and-pending-work)
records exact-hash recovery of the generated Agent tokenization blocker,
repeat builds and scoped provider-header verification in the preview.7 package.
The [version comparison](recovery/feature-gap-audit.md#reference-implementation-and-release-versions)
separates the 3.24.18 reference archive, 3.21.13 runtime base and preview.7 download.

## Product feature coverage

The [acceptance ledger](planning/completion-sprints.md) owns the 44 stories and their
statuses. Run `npm run status:features` to recalculate this count.

| Measure | Current result | Remaining |
| --- | --- | --- |
| Fully verified local-feature stories | **21/44 · 47.73%** | **23/44** are not fully verified: 8 Partial, 14 Planned, 1 Unknown |
| Recorded 80% verification milestone | Requires **36/44** Verified | **15** additional stories must pass |
| All accepted features | Requires **44/44** Verified | **23** additional stories must pass |

18 October re-scope (baseline v3): Windows, macOS, other-Linux and live-provider
clauses moved into OV-901, OV-902, OV-905 and OV-205; other stories are judged on
Linux x64. OV-702, OV-401, OV-403, OV-104, OV-203, OV-301, OV-302, OV-102, OV-204, OV-701, OV-603, OV-602, OV-801, OV-501 and OV-1005 are Verified under it. See
the [status page](planning/eta-and-definition-of-done.md#re-scope-baseline-v3), which also lists [every story's gap and ETA](planning/eta-and-definition-of-done.md#story-status-and-gaps).

Partial stories include working implementations with unfinished checks. This is
not a percentage of broken features, missing code or original-product parity.
Recovery work alone does not promote a feature to Verified. Original hosted
accounts, billing and cloud agents are excluded from this ledger.


## Status, gaps and ETA

The [status, gaps, ETA and Definition of Done](planning/eta-and-definition-of-done.md)
page lists every story with its gate (Linux work, owner decision or external), the
finishing rounds and the Linux ceiling (39/44). The dated 16–19 October delivery
log that used to be here is archived in
[planning history](planning/history/checkpoints-2026-10.md#progress-delivery-log-1619-october-2026).

## Recovery coverage by version

The [recovery archive](../curs_source/README.md) links the actual published code,
[bundle index](../curs_source/modules/3.24.18/README.md),
[publication manifest](../curs_source/manifest.json) and
[historical native Evidence](../curs_source/native/README.md).
The [recovery status](recovery/recovery-status.md) explains each representation; the
[gap audit](recovery/feature-gap-audit.md) reconciles the historical baseline with
current feature reports. Its [source-to-gap map](recovery/feature-gap-audit.md#source-index-to-implementation-gaps)
links recovered owners to implementation evidence and remaining acceptance gates.
The [3.24.18 module index](../curs_source/modules/3.24.18/README.md) links each
selected JavaScript input to its published structural files, while the
[timeout report](recovery/rea-agent-timeout-recovery.md) records the current
highest-priority Agent transport gap and its remaining native gate.
The latest `npm run recovery:verify` run passed for the published archive:
**30,111/30,111** files and **237/237** selected inputs match the manifest. This
is an integrity result for the recovered reference, not a feature-parity score.

| Version and measured scope | Completed | Remaining / limit |
| --- | --- | --- |
| 3.24.18 · captured installation files | **15,161/15,161 · 100%** hash-verified capture | Capture includes compiled artifacts; it is not original-source recovery |
| 3.24.18 · supported readable text inputs | **13,925/13,925 · 100%** formatted | Only 916 application files published; installed dependencies stay local |
| 3.24.18 · selected JavaScript inputs | **237/237 · 100%** have structural extraction results | 236 unchanged inputs; one derived analysis input with a portable filename label ([exact scope](recovery/javascript-bundles.md)); no runnable graph claim |
| 3.24.18 · published recovery text | **30,111** manifest-covered files: 916 application + 29,195 derived | Includes the retained statement fallback; file counts are not a semantic-completeness percentage |
| 3.24.18 · distinct WASM payloads | **15/15 · 100%** validated and decoded locally | WAT is ignored local output; original source/build inputs and complete REA WASM records remain unproven |
| 3.24.18 · inventoried native paths with matching published pseudocode | **0/53 · 0%** | **53/53 · 100%** lack matching pseudocode in the historical export |
| 3.21.13 · native images with pseudocode | **9/52 · 17.31%** | **43/52 · 82.69%** metadata-only images |
| 3.21.13 · identified internal procedures in those nine modules | **4,647/4,647 · 100%** returned pseudocode | Discovery completeness and native recompilation are unproven |
| Full original source / original feature parity | **Unknown** | No original-source denominator or complete parity suite; source maps, native build inputs and unshipped server source are missing |

Every percentage applies only to its row's version and denominator. Do not add
or average these rows. The newer installation does not inherit the historical
native pseudocode coverage. The separate historical
[WASM inventory](recovery/rea-wasm-inventory.md) has 14/15 complete REA records; this does
not describe the newer snapshot's REA coverage.

## Rust rewrite

The [Rust roadmap](planning/rust/rust-roadmap.md) contains **36 child packages / 195 provisional
points**, separate from the feature backlog. A verified rewrite-completion
percentage and measured performance gain are **not established**.

- [Component audit](planning/rust/rust-component-audit.md): what moves to Rust, what stays and why.
- [Feature acceptance map](planning/rust/rust-acceptance-map.md): how the 42 existing stories carry over.
- [Migration contracts](planning/rust/rust-migration-contracts.md): ownership, protocols and data preservation.
- [Performance plan](planning/rust/rust-performance-plan.md): expected gains and the measurements needed to prove them.

Do not add the 195 points to the 322-point backlog: contracts, replacement work
and tests overlap. Native macOS and an independent clean rebuild remain release
gates; a percentage cannot waive them. Verification and packaging remain local;
GitHub Actions is disabled.
