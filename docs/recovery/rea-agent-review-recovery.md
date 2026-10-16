# Agent review recovery and repeated edits

15 October 2026. This follow-up keeps Agent editing reliability ahead of
retrieval/indexing work. It extends [edit-history ownership](rea-agent-edit-history.md)
without changing OV-103's original acceptance gates or the 42-story denominator.

## Recovery-data defect

The recovered inline-diff service's `remove()` creates an undo element with a
saved review snapshot. Its Undo callback tries to acquire a model, retrieve the
snapshot and create a replacement review handler. Previously its `finally`
block cleared the snapshot even when any of those operations failed.

`desktop/agent-review-recovery.test.mjs` reproduces the deletion by executing the
actual recovered `remove`, storage methods and undo-element class with controlled
failures at their dependencies. It is not a native disk-failure test. Direct
inspection follows the existing REA review trace; no complete new workbench parse
or original-product parity is claimed.

The fix in `desktop/agent-review-recovery-customization.mjs`:

- Keeps saved review data until a replacement handler owns the restored review.
- Joins the initial snapshot write and successful cleanup, so a delayed clear
  cannot race a later Redo write.
- Awaits Redo persistence before removing the live review; failed persistence
  leaves that handler available.
- Reuses an already-restored handler during retry and retains a temporary model
  reference whose release failed during restoration until a later retry releases it.

The recovered undo service clears a resource's whole undo history when a callback
rejects. This patch therefore preserves the existing logged-error behavior rather
than throwing restoration failures through that boundary. A failed restoration
can be retried with Redo then Undo. This is session recovery, not a guarantee of
undo-history persistence across restart or successful writes when storage fails.

Focused coverage includes model acquisition, storage read, missing snapshot,
handler construction, delayed writes/cleanup, Redo persistence, failed reference
release, retry, hidden decorations and installer drift. Original backups remain
immutable and changed producer contracts fail the build.

## Native scenario

Run `npm run verify:agent -- --review-recovery` against the prepared source build.
The optional scenario retains the existing core Agent checks and adds:

1. Two consecutive native `StrReplace` calls on the same initially unopened file.
   Keep, Undo and Redo must traverse each exact intermediate value, with unrelated
   files preserved.
2. Pending edits in two closed files, full application shutdown, then restart into
   the same conversation with review still available.
3. Undo All/Confirm after restart must restore both pre-edit files. Repeat the
   edits, restart, Keep All, then restart again: contents must remain accepted
   with no pending Keep All control. Review and restart must issue no extra model requests.

The model endpoint is a controlled local HTTP fixture. Filesystem tools, editor
actions, storage and application restarts are real; model reasoning and external
provider support are not established by this scenario. Each run retains hashes,
tool results, stage records, screenshots and owned host exit results locally.

Use `npm run verify:agent -- --review-abrupt` to run the same scenarios with
abrupt main-process termination at the three review restart boundaries. The flag
includes the recovery fixture automatically. The verifier sends `process.exit(23)`
through its own disposable app's existing Inspector connection, bypassing normal
Electron quit handlers. It never selects another application by PID. The recorded
identity distinguishes normal shutdown from abrupt termination.

## Verified results

The final Windows x64 run is `logs/agent-verification-OcpHTX/result.json`, on
parent commit `419017c` plus this change. Its workbench SHA-256 is
`ce6bec813ce235e308ded5e2ab64153ae40fe22a65e91672dd14103321bf8bcf`.
The preceding workbench's SHA-256 was
`af796025a8085f502005e45d4823b4ea90b405f96dba0a0f157fd8b9e13ba720`.

All three native scenarios above pass, including exact rollback after restart
and each repeated-edit intermediate value. The original core checks also pass:
search, multi-file review/undo/redo, later user edit, command approval/denial,
running-command Stop, provider-stream Stop and conversation resume. There are
**29 controlled model requests**, no additional inference during restored
acceptance/rejection, no renderer/inline-diff errors, and **five owned host exits
with code 0**. The result records stage outcomes and tool responses; both native
review screenshots and exact file assertions were inspected.

The focused review/undo/recovery/ledger suite passes **31 tests**. Desktop syntax
checks and the production build pass; generated-artifact validation covers
236 scripts, 124 manifests and 28 local main-process modules. These are source
build results, not an updated portable release or native macOS/Linux evidence.

Earlier runs remain local: `valPTd` failed because the verifier expected
**Keep All** for one file, where the native control is **Keep**. `fXjEEo` passed
repeated edits and restored acceptance before the recovery fix; `0fu8NE` passed
those checks after the fix. The final run additionally proves restored rejection.

## Remaining acceptance

OV-103 remains Partial. The [native keyboard Undo/Redo follow-up](rea-agent-undo-retry.md)
passes injected snapshot-write/read failures, retry guidance and history position
recovery. Remaining menu/group combinations, physical
storage faults, termination during an outstanding write/tool operation,
additional edit types and the OV-102 live-provider dependency remain open.
Mounted snapshot-service failures are checked below. Abrupt exit after visible pending review
and acceptance is now checked below; this does not prove arbitrary crash safety.
The recovery fix retains necessary state on failure; no reduced RAM, CPU, token
usage or faster execution is claimed. The portable release is not updated by
these source changes.

## Created-review snapshot ownership

16 October follow-up, OV-103. The neighboring `addDiff` owner had the same
failure pattern as `remove`: its Undo callback swallowed snapshot-write failure
and still removed the live handler; Redo cleared saved data even when acquiring
the model or constructing the handler failed. This is a source-derived defect
reproduced by executing the recovered callbacks with controlled dependencies.

The published [3.24.18 inline-diff service](../../curs_source/modules/3.24.18/ed6922a7a86c8c448a46aa39af0c931580da162770fe406a0d41737290e637d9-e9acad71989a/inlineDiffService.js)
contains that creation/snapshot/cleanup sequence. Its SHA-256 is
`d9a5835e3b1ddf24701b2b4d2fa9a005ae9ad6e5a5e20554b704efe538d7e873`.
The actual runtime/test input remains the prepared 3.21.13 workbench, SHA-256
`5a447679d1f3b98e7da3e90c7dc3afe733fd949006e326e798a79a6dd1f2de27`.
The [versioned source index](../../curs_source/modules/3.24.18/README.md) is a
reference to the newer shipped contract; it is not proof that OpenVision has
adopted that entire version or that the two builds are equivalent.

[The existing recovery transformation](../../desktop/agent-review-recovery-customization.mjs)
now applies the ownership rule to creation too: persist before releasing a live
review, clear a saved snapshot only after a replacement handler owns it, join
cleanup before subsequent Undo, and retain model references whose release fails.
Redo after a failed Undo reuses the existing handler. The old remove-only build
upgrades additively; backups and producer-drift checks remain in place.

Failed model-reference releases now belong to the review service, rather than
an individual Undo element. Clearing history cannot discard that ownership.
Later review/recovery activity retries release; service disposal also retries,
retains unresolved references and reports incomplete cleanup with an
`AggregateError`. The upgrade removes the previous per-element retention from
generated code. This is controlled failed-release coverage, not an observed
native model-disposal failure or a measured RAM reduction.

`npm run test:agent-review` passes **48 tests**. The
[created-review regressions](../../desktop/agent-created-review-recovery.test.mjs)
cover both original failures, write/read/model/construction failures, delayed
write/cleanup, failed release, discarded history, service cleanup, retry and
upgrade from the prior transformations.
These are production-callback tests with controlled dependencies, not physical
storage failures or a native full-workflow acceptance result.

`npm run verify:review-storage` runs a real Quick Edit and mounted review callbacks
with the actual model service and SQLite storage in a disposable Windows overlay.
`--original-owner` selects the unchanged recovered `addDiff` method as a control.
Only the probe exposes its captured callback; the regular runtime/profile is not
modified. Injected service-call failures, physical I/O failures, user-facing
Undo-stack behavior and live model inference are separate evidence scopes.
Final Windows run `logs/review-storage-verification-T7zZQj/result.json` passes
failed snapshot write/read/cleanup, retry and exact Reject/Save restoration with
one authenticated fixture inference. The control
`logs/review-storage-verification-SdVfYU/result.json` reproduces the original
lost-review defect. Both hosts exit 0, record only their injected review errors
and leave the normal runtime unchanged. The [storage report](../engineering/storage-write-ownership.md#verification)
records exact runtime/verifier hashes and the separate provider regression.

Earlier control `DOECTF` reproduced review loss but failed an incorrect verifier
expectation that text would remain edited after Undo. The corrected assertion
requires the original bytes in both cases; review retention is checked
independently. Intermediate `BKztcB` and `S7pdhi` results precede the service
reference correction; they are not credited as final-build checks.

These historical checks invoke the mounted review element directly. Production
`UndoRedoService` moves history position before invoking its callback, and the
recovered callback catches storage errors. The complete keyboard/menu failure
path, guidance and subsequent stack behavior remain a gate; preserved recovery
data alone does not prove that workflow. The subsequent
[native keyboard follow-up](rea-agent-undo-retry.md) reproduces and fixes the
snapshot-failure stack/guidance case without claiming the complete failure matrix.
Failed model-reference disposal is
injected only in producer tests, not in these native runs. OV-103 stays Partial
and the accepted **6/42 Verified (14.29%)** score is unchanged.

## Final source-build regression

16 October Windows x64 run `logs/agent-verification-YQy30z/result.json` passes
`npm run verify:agent -- --review-recovery` on the final source build. Workbench
SHA-256 is `aa1f36b577f3e57d9f57045bcd0f6e8cec33b619ea2cfe41fdf57daf5167a952`;
the verifier hash is
`3462b5fe63c0267c2b70d3ea804e2bcc280cf8137b1646d2e345208de3c4c051`.
It identifies parent commit `7f54c10178f6fa1119837c68b5390c5fc0112444`
plus the recorded runtime changes.

- Native file reads/search, multi-file rejection/acceptance and editor Undo/Redo pass.
- Repeated edits return through values 3, 2 and 1 and redo back to 3.
- Pending reviews can be rejected or accepted after normal restart; accepted
  edits survive the next restart. Unrelated files retain exact contents.
- Command denial/approval, foreground command cancellation and upstream
  connection closure pass; the registered command child is absent after Stop.
- All **29** fixture inference requests are authenticated; there is no auxiliary
  title request or extra inference during review restoration. All five recorded
  application launches exit **0**, with no renderer errors.

The restored-review screenshot was inspected with the persisted-file assertions.
This run uses actual application tools and filesystem state with a controlled
HTTP model. It does not exercise live inference, physical storage failures,
failed reference disposal, keyboard/menu Undo errors, active-write interruption,
abrupt termination or another platform. The earlier abrupt-exit evidence below
belongs to its older runtime; it is not a final-build abrupt-exit regression.

Focused checks also pass: **48/48** review tests, **49/49** provider/storage tests,
**26/26** build-integrity tests, and the desktop suite (**155 pass / 2 skipped**).
The skips require recovered extension inputs unavailable in the selected test
recovery. These suites overlap and are not added into a parity percentage.
Desktop syntax and the production build pass; the build validates **237 scripts,
124 manifests and 28 local main-process modules**. No portable payload is updated.

## Abrupt-exit verification

15 October Windows x64 run `logs/agent-verification-DYzW6C/result.json` passes
on parent commit `36dfbec` plus the verifier change. The workbench is unchanged:
`ce6bec813ce235e308ded5e2ab64153ae40fe22a65e91672dd14103321bf8bcf`.
Verifier SHA-256:
`3462b5fe63c0267c2b70d3ea804e2bcc280cf8137b1646d2e345208de3c4c051`.

| Interruption point | Observed after relaunch |
| --- | --- |
| Both closed-file edits pending, before rejection | Review and conversation return; Undo All/Confirm restores both exact pre-edit contents |
| Both closed-file edits pending, before acceptance | Review returns with both changed files; Keep All succeeds |
| After Keep All hides the pending-review control | Accepted contents remain on disk; conversation returns without pending Keep All |

All original core checks and repeated-edit Undo/Redo also pass. The run makes
**29 authenticated local fixture requests**, with no additional inference during
restored acceptance/rejection and no renderer/inline-diff errors. All five owned
launcher processes terminate: two normal closes return 0; the three injected
exits return Windows status **3221226505 (0xC0000409)** rather than the requested
23. These are deliberately induced abnormal exits, not clean shutdown results.
A post-run process inventory finds no remaining `OpenVision.exe` processes.
The restored-review screenshot was inspected alongside the file assertions.

This uses the real desktop, filesystem tools and persisted profile, with a
controlled model response fixture. It does not establish physical power-loss
safety, torn-write recovery, failure during an in-flight edit, live-model behavior,
macOS/Linux behavior or persisted text undo history after restart. No production
runtime change or portable rebuild was needed for this verification addition.
