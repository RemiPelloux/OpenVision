# OpenVision progress, percentages and delivery gates

Updated **16 October 2026**. Start here for the feature backlog, recovery results
and Rust plan. ETA means **remaining acceptance gates and provisional complexity
points**, without calendar or engineer-time estimates.

The [current build and pending-work register](recovery/feature-gap-audit.md#current-build-and-pending-work)
records exact-hash recovery of the generated Agent tokenization blocker,
repeat builds and scoped provider-header verification in the preview.7 package.
The [version comparison](recovery/feature-gap-audit.md#reference-implementation-and-release-versions)
separates the 3.24.18 reference archive, 3.21.13 runtime base and preview.7 download.

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

[Review record deletion and post-commit cleanup](recovery/rea-agent-review-deletion.md)
follows it on Linux x64 only; OV-103 status and points are unchanged.
The [Agent I/O-fault report](recovery/rea-agent-io-faults.md) fixes saved-file loss on a full
volume (Linux x64 evidence); OV-103 status and points are unchanged.
The [profile I/O-fault report](recovery/rea-profile-io-faults.md) fixes lost provider keys and torn memories on a full volume (Linux x64); OV-103/301 stay Partial.
The Linux [MCP ownership matrix](recovery/rea-mcp-ownership-matrix.md) fixes STDIO children surviving window close and profile switch; OV-303 stays Partial.
The Linux [provider failure matrix](recovery/rea-provider-failure-matrix.md) verifies certificate expiry/hostname, mid-stream, capability and restart cells, and fixes unfinished-stream automatic repeats; its follow-up saves an unresolved failure, Try again/Resume and dismissal across restart. OV-102/204 stay Partial.

The [Agent interruption report](recovery/rea-agent-interruption.md) covers Stop, close and abrupt
exit during outstanding writes/tools (Linux x64 evidence); OV-103 status and points are unchanged.

The latest [review-cleanup follow-up](recovery/rea-agent-review-removal.md)
preserves retry/history ownership after cancellation or disposal failure and
resumes cleanup without repeating completed steps. It advances P0 OV-103 within
the existing status and points; the preview.7 portable payload is unchanged.
[Rule discovery isolation](recovery/rea-rules-isolation.md) closes one OV-302
producer in source (Linux native pass); OV-302 stays Partial.
[Global path isolation](recovery/rea-global-path-isolation.md) moves user skills, commands,
hooks and third-party user folders into the profile (Linux native pass); OV-302 stays Partial.

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
Native Agent header/body timeout recovery and explicit live retry now pass. A
real Codex Easy `gpt-6.1-sol` run also passes the native two-file edit review,
retry, Undo/Redo and restart path; remaining editing/storage-failure checks and
other chat/provider failure classes stay open. See the
[delivery gates and dependencies](planning/roadmap.md#critical-first-backlog-and-eta) and
[release claims](verification/release-claims.md) before treating source work as a shipped app.

The latest [storage ownership report](engineering/storage-write-ownership.md)
connects a native model-discovery failure to the newer recovered storage owner.
Its pending/in-flight correction passes focused tests and scoped Windows Quick
Edit/provider regressions. The [native Undo/Redo follow-up](recovery/rea-agent-undo-retry.md)
passes keyboard snapshot failures and retry guidance on the rebuilt source.
Physical storage faults, remaining menu/group failure combinations and platform
checks remain. This is progress within existing stories, with
no change to the acceptance percentage or backlog points.

The latest [transactional review-storage follow-up](recovery/rea-agent-review-recovery.md#transactional-snapshot-cache-and-initial-write-retry)
also restores the previous in-memory snapshot value after a failed write and
retries the initial snapshot before Undo restores a review. Its **58/58** focused
Agent checks and **26/26** build-integrity checks pass; physical I/O, outstanding
write/tool termination and the remaining OV-103 combinations remain open.

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
