# OpenVision continuation objective

Continue REA investigation and implementation until every accepted local OpenVision feature and release gate is verified. Exclude original hosted cloud agents, billing and mandatory accounts; preserve optional provider/account integrations. Do not substitute extraction counts or a milestone for completion.

## Start
Read applicable AGENTS.md and skills; inspect Git status, branch, recent commits and existing changes. Preserve unrelated work.
Read [progress](docs/progress.md), [roadmap](docs/planning/roadmap.md), [acceptance](docs/planning/feature-acceptance.json), [gaps](docs/recovery/feature-gap-audit.md), [recovery](docs/recovery/recovery-status.md) and [release claims](docs/verification/release-claims.md). Run `npm run status:features`. Trace relevant owners through [source index](curs_source/modules/3.24.18/README.md). Revalidate this checkpoint.

Checkpoint, 16 October 2026: 42 stories; 6 Verified, 23 Partial, 12 Planned, 1 Unknown; 14.29% fully verified; 36 unfinished/322 provisional points. 80% requires 34 Verified; completion requires all features. Reference: 3.24.18; runtime input: 3.21.13; release: 0.2.0-preview.7. Later source fixes, e.g. [Linux session](docs/verification/linux-session-2026-10-16.md), are absent from that package. Independent native rebuilding remains unfinished. These figures do not measure code porting or original-source completeness.

## Priority
Agent editing reliability first: OV-103 and OV-102, before retrieval/indexing. Read [latest review ownership evidence](docs/recovery/rea-agent-review-removal.md).
Close physical I/O/full-volume faults; interruption during outstanding writes/tools; remaining menu/group Undo/Redo and post-commit cleanup; asynchronous persisted-review deletion and restart; retry/history and provider failures. Retain ownership and cleanup progress after failure. Then follow the roadmap's P0-P5 queue.

## Execute
1. Select a concrete acceptance gap and trace its producing boundary, consumers, version and Evidence. Separate observations, derivations, inferences and unknowns.
2. Reproduce the defect or establish missing behavior. Unverified does not automatically mean unimplemented.
3. Fix the owner and affected consumers; remove superseded paths. Keep changes scoped, idempotent and backed up.
4. Verify success, failure, cancellation, retry, restart, concurrency and resource ownership as applicable. Inspect actual UI/files/storage/artifacts. Controlled model responses are not live inference; label both accurately.
5. Update evidence, source-to-gap links, ledger, roadmap and README. Promote stories only after all clauses pass.
6. Review the diff for secrets/artifacts, commit verified work, push and verify the remote hash. Align releases with actual packaged behavior.

## Efficiency and constraints
Optimize unnecessary context/requests first, repeated work second, CPU/RAM third. Avoid N+1 calls/scans; use incremental edits, bounded retention/concurrency, validated caches, batched streaming, visible-row rendering, lazy services and retryable cleanup. Measure equivalent cold/warm tasks: requests, tokens where available, elapsed/CPU time and peak process-family memory. State unmeasured costs.

Preserve profiles, keys, history, approved memories, original legacy records and Linux work. Use .openvision/ metadata and OpenVision branding with restrained, accessible UI. Keep telemetry removed. Never publish credentials, logs, backups or ignored runtime inputs. No GitHub Actions or hosted CI; no unrelated toolchain upgrades. Use points/dependencies/gates, not calendar estimates. Windows tests cannot prove Linux/macOS behavior. Never terminate processes using PID alone.

Follow the [Rust roadmap](docs/planning/rust/rust-roadmap.md); preserve contracts and measure gains. Continue useful local work when external gates are unavailable. Report executed checks, remaining gaps, source-versus-package scope and delivery state honestly.
