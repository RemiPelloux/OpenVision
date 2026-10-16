# OpenVision continuation objective

Use this document as the task prompt for continuing OpenVision. Read the current
repository and linked evidence before acting; this checkpoint is not a substitute
for inspecting the actual state.

## Mission

Continue the authorized REA investigation and implementation until OpenVision is
a dependable, customizable, locally controlled AI development application with
all accepted local features implemented and verified. Deliver working product
behavior, preserve user data, reduce demonstrated resource waste, and keep the
documentation and released artifacts consistent with the code.

The full objective is all accepted local features, not a numerical milestone,
extraction count, test count, or a claim of complete original-source recovery.
Exclude original hosted cloud agents, billing and mandatory hosted accounts from
parity. Preserve OpenVision's optional AI provider and account integrations.

## Start Here

1. Read applicable `AGENTS.md` instructions and relevant skills. Inspect Git
   status, branch, recent commits, remotes and existing local changes. Preserve
   unrelated changes and do not reset the checkout.
2. Read [progress](docs/progress.md), the
   [ranked roadmap](docs/planning/roadmap.md),
   [completion ledger](docs/planning/completion-sprints.md) and
   [machine-readable acceptance clauses](docs/planning/feature-acceptance.json).
   Run `npm run status:features` to establish the current denominator and counts.
3. Read the [feature-gap audit](docs/recovery/feature-gap-audit.md),
   [recovery limits](docs/recovery/recovery-status.md) and
   [release claims](docs/verification/release-claims.md). Distinguish reference
   recovery, implemented source, prepared runtime and published packages.
4. Inspect the [recovery archive](curs_source/README.md) and
   [3.24.18 module index](curs_source/modules/3.24.18/README.md) for the actual
   recovered owner relevant to the next task. Read the smallest useful source
   and Evidence; do not dump large bundles or single-line JSON reports.
5. State the next concrete acceptance gap, its owner, the observable result
   required and the checks that will establish it. Then implement and verify.

## Checkpoint To Revalidate

Recorded on **16 October 2026**, after commit
`cd5e6b4455ba4b039d5e593e896c8cdc8885484f`
(`fix(agent): retain review ownership through cleanup failures`):

| Measure | Recorded state |
| --- | --- |
| Acceptance stories | 42: 6 Verified, 22 Partial, 12 Planned, 2 Unknown |
| Fully verified stories | 6/42, or 14.29% |
| Remaining backlog | 36 unfinished stories, 322 provisional complexity points |
| Documented intermediate milestone | 80%, requiring 34/42 Verified stories |
| Complete local-feature objective | All accepted stories pass their complete clauses |
| Recovered reference | 3.24.18 |
| Prepared runtime input | 3.21.13 |
| Latest recorded portable release | 0.2.0-preview.7 |

These figures are not percentages of code ported, decompilation completeness,
broken functionality or original-product parity. Do not add recovery percentages
with different versions or denominators. Never promote a story because a subset
of its tests passed. The milestone does not replace the full objective.

The latest review cleanup fixes are source changes after preview.7; they are not
in its ZIP or tracked portable payload. Independent rebuilding of all native
components remains unfinished. Recheck these statements before publishing them.

Windows native testing is available. Preserve separately recorded Linux evidence
and compatibility work; do not report fresh Linux execution from Windows.
Native macOS verification remains unavailable until an actual test host exists.

## Immediate Priority

Continue **Agent editing reliability before retrieval and indexing**. Start with
OV-103 and its OV-102 dependencies in the ranked roadmap. Read the latest
[review cleanup and ownership report](docs/recovery/rea-agent-review-removal.md)
before changing those paths.

The latest fix keeps Undo/Redo history and review ownership intact after
cancellation or cleanup failure, resumes cleanup without repeating completed
steps, and shares progress across text and review callbacks. It passed 71 focused
review tests, 26 build-integrity tests and scoped native regression checks.
Those results establish only their recorded scope.

Investigate and close the remaining gates in priority order:

1. Physical I/O/full-volume failures and recovery without losing acknowledged
   edits, snapshots, rules or configuration.
2. Interruption while writes or tools are outstanding, including Stop, shutdown,
   abrupt exit and restart. An exit after visible review does not prove recovery
   from interruption during a write.
3. Remaining menu, grouped Undo/Redo, post-commit cleanup and persisted-review
   deletion failures. Trace asynchronous deletion acknowledgment and restart
   behavior separately; do not infer durability from an in-memory success.
4. Remaining retry/history, provider-error and live editing cases required by the
   acceptance ledger, followed by the available platform checks.

After these gates, follow the existing P0-P5 queue rather than inventing a
parallel backlog: data and lifecycle safety first; daily development and measured
efficiency next; independent build dependencies; retrieval/indexing; platform and
release completion; specialized modes.

## Required Working Method

For each selected gap:

1. **Trace:** identify the recovered producing boundary, affected consumers,
   resource owner, version and Evidence provenance. Separate observed facts,
   derivations, inferences and unknowns. Use REA for artifact investigation;
   ordinary source maintenance does not require repeated decompilation.
2. **Establish the gap:** reproduce a defect or identify a specific unimplemented
   acceptance clause. An unverified scenario is not automatically a missing
   implementation. Reuse valid prior evidence and label its limits.
3. **Implement:** fix the producing representation or ownership rule and directly
   related consumers. Remove superseded paths when safe. Keep changes scoped,
   additive and idempotent; preserve first backups and migration compatibility.
4. **Verify:** cover the relevant success, failure, cancellation, retry, restart,
   concurrency and cleanup cases. Prefer the real application and public
   workflows, with focused tests for semantics that need controlled faults.
5. **Inspect the result:** verify the generated source or artifact, actual UI,
   files, storage, process ownership and observable behavior as applicable.
   A command attempt or test count alone does not establish completion.
6. **Record:** update the source-to-gap map, acceptance evidence, roadmap and
   progress documents. Change status only when all required clauses pass.
   Document remaining gates and unavailable verification explicitly.
7. **Deliver:** review the exact diff for secrets, local artifacts and unintended
   changes. Commit meaningful verified work with a Conventional Commit subject,
   push the intended branch and verify the remote commit. Do not merge unrelated
   work or publish a release as an incidental side effect.

Keep ownership of resources whose cleanup failed. Resume from the failed step
without replaying completed side effects. Never identify a process for termination
using only its PID or executable path. Preserve user-selected paths and explicit
unknowns across boundaries.

## Performance Requirements

Optimize in this order: unnecessary AI context and requests; repeated analysis
and scans; CPU and memory. Preserve correctness, useful answers and provenance.

- Agent: local chat titles, bounded retained conversation state, prompt request
  cancellation, shared preparation and no duplicate model calls.
- Editing and retrieval: incremental updates, shared validated work, explicit
  cache invalidation, bounded scans and no per-item N+1 queries.
- UI: batch streamed updates, render visible rows/messages and release listeners
  and inactive views without losing state.
- Services: start expensive resources when needed, bound concurrency and queues,
  and release idle resources with retryable cleanup ownership.

Measure equivalent completed tasks before and after material performance changes.
Report request counts, task tokens where measurable, elapsed time, CPU time and
peak process-family memory. Separate cold/warm runs, estimates and unavailable
measurements. Fewer bytes or a faster microbenchmark does not establish a faster
whole application. Do not claim Rust or any other language guarantees a gain.

## Verification Commands

Read `package.json` and use the existing pinned toolchain; do not upgrade global
software. The checkpoint used the installed Node 24.18.0. Choose checks matching
the changed behavior; do not repeatedly run broad suites without a new reason.

```powershell
npm run status:features
npm run test:agent-review
npm run check:desktop
npm run build:desktop
npm run test:build-integrity
npm run verify:review-storage -- --undo-stack --removal-failures
npm run verify:agent -- --review-recovery
npm run docs:check
```

Inspect each exit status and report only executed checks. A native application
using controlled HTTP responses verifies real UI/tools/storage with a simulated
model response; label it accordingly. A live external-provider test requires an
actual authenticated request and inspection of its result. Never call controlled
responses live inference. Preserve user configuration and avoid destructive or
unbounded live tests. Never print or commit authentication material.

## Product And Delivery Constraints

- Use OpenVision branding and a restrained editor-native UI with readable theme
  colors, consistent spacing and accessible controls. Validate relevant UI
  changes visually across supported window sizes and themes.
- Use `.openvision/` for project rules, plans, pasted text and related metadata.
  Preserve explicit compatibility/import paths and existing user data.
- Preserve profiles, model discovery, provider URLs, reasoning capabilities,
  credentials, account selection, history and approved memories. Keep original
  legacy-memory records when importing reviewed memories.
- Keep telemetry removed and verify destinations; do not disable user-requested
  provider traffic or silently broaden claims about third-party extensions.
- Use local builds and checks. **Do not enable GitHub Actions or hosted CI.**
- Explain remaining work through points, dependencies and acceptance gates.
  **Do not give calendar or engineer-time estimates.**
- Never commit credentials, local `data`, `logs`, `backups`, generated runtime
  inputs, dependencies or other ignored artifacts. Respect the archive's
  publication manifest and current repository policies.
- Keep release notes, README, claims and downloadable artifacts aligned. When a
  release is requested, verify its actual packaged behavior and clearly identify
  source fixes absent from older downloads. Delete historical releases only
  within an explicit current release-cleanup instruction.
- Continue the [Rust migration roadmap](docs/planning/rust/rust-roadmap.md) as a
  measured component migration with preserved contracts and acceptance tests.
  Do not replace the present parity work with an unverified wholesale rewrite.

## Completion And Handoff

Continue useful authorized work while external gates remain unavailable. Do not
hide unavailable checks, silently shrink the denominator or label the whole
product complete after a narrow success. Ask only for information or authority
that materially blocks the next action; continue independent work when possible.

At each delivery, explain what changed, the evidence that passed, what remains
unverified, whether the change is source-only or packaged, and the verified
commit/push state. Update this checkpoint when it would otherwise mislead the
next session. Keep the detailed backlog in its authoritative linked documents.

The objective is complete only when every accepted local-feature clause and
required release gate passes, the resulting distributable is verified, and the
documentation accurately describes that delivered product.
