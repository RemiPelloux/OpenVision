# OpenVision progress, percentages and delivery gates

Updated **16 October 2026**. Start here for the feature backlog, recovery results
and Rust plan. ETA means **remaining acceptance gates and provisional complexity
points**, without calendar or engineer-time estimates.

## Product feature coverage

The [acceptance ledger](planning/completion-sprints.md) owns the 42 stories and their
statuses. Run `npm run status:features` to recalculate this count.

| Measure | Current result | Remaining |
| --- | --- | --- |
| Fully verified local-feature stories | **6/42 · 14.29%** | **36/42 · 85.71%** are not fully verified: 22 Partial, 12 Planned, 2 Unknown |
| Recorded 80% verification milestone | Requires **34/42** Verified | **28** additional stories must pass |
| All accepted features | Requires **42/42** Verified | **36** additional stories must pass |

Partial stories include working implementations with unfinished checks. This is
not a percentage of broken features, missing code or original-product parity.
Recovery work alone does not promote a feature to Verified. Original hosted
accounts, billing and cloud agents are excluded from this ledger.

## Critical-first delivery plan

The [ranked feature roadmap](planning/roadmap.md#ranked-rea-implementation-and-verification-work)
owns story order, dependencies and point estimates. The following groups link to
that queue; detailed acceptance clauses remain in the
[sprint ledger](planning/completion-sprints.md).

| Order | Remaining scope | Provisional points |
| --- | --- | ---: |
| P0 | Agent editing/recovery, chat retry/Stop, provider errors, configuration and MCP ownership, rules durability, terminal cleanup, data destinations, telemetry and release safety | 81 |
| P1 | RAM, context/request efficiency, UI responsiveness, Explorer, language tools, autocomplete, subagents, reasoning, imports, extensions and authenticated MCP | 87 |
| P2 | Native/WASM dependency disposition, rebuildable host/addons, owned helper replacements and a clean independent build | 47 |
| P3 | Relevant retrieval, incremental indexing, index recovery and next-edit prediction | 42 |
| P4 | Windows/Linux completion, macOS, updates and rollback | 39 |
| P5 | Remote development and specialized image/browser/computer modes | 26 |
| **Total** | **36 unfinished acceptance stories** | **322** |

Points measure provisional complexity, not completion or time. Do not calculate
progress from completed points: no equivalent completed-point baseline exists.
The next listed gate is native Agent timeout recovery, followed by outstanding
editing/storage-failure checks. See the
[delivery gates and dependencies](planning/roadmap.md#critical-first-backlog-and-eta) and
[release claims](verification/release-claims.md) before treating source work as a shipped app.

## Recovery coverage by version

The [recovery archive](../curs_source/README.md) links the actual published code,
[bundle index](../curs_source/modules/3.24.18/README.md),
[publication manifest](../curs_source/manifest.json) and
[historical native Evidence](../curs_source/native/README.md).
The [recovery status](recovery/recovery-status.md) explains each representation; the
[gap audit](recovery/feature-gap-audit.md) preserves the historical baseline.

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
