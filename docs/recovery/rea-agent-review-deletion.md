# Agent review record deletion and post-commit cleanup

16 October 2026. P0 OV-103 remains Partial at its existing 8 points. This is a
source change after **0.2.0-preview.7**; the published portable payload is
unchanged. All native evidence below is **Linux x64 only** (Omarchy/Hyprland,
Wayland, Node 26.8.1 tooling, prepared 3.21.13 runtime input). Windows and
macOS were not run for this change. See the
[roadmap](../planning/roadmap.md#critical-first-backlog-and-eta), the
[acceptance ledger](../planning/completion-sprints.md) and the preceding
[resumable removal report](rea-agent-review-removal.md), whose "Remaining gates"
section this follow-up addresses.

## Recovered contract

Owners were traced by direct reading of the retained sources; REA was not
re-run for this change. The newer [3.24.18 inline-diff module][source]
(SHA-256 `d9a5835e3b1ddf24701b2b4d2fa9a005ae9ad6e5a5e20554b704efe538d7e873`)
and the actual 3.21.13 readable workbench
(`5a447679d1f3b98e7da3e90c7dc3afe733fd949006e326e798a79a6dd1f2de27`) contain the
same contract. The 3.21.13 main-process bundle is
`0a9794c8dfe88af0f210ca39457a49ae002e80a3644c40c8f5a0f8aead9d7fd7`.

**Observed in source:**

- Agent (composer) reviews are persisted separately as
  `inlineDiff:<workspace>:<diffId>` rows in the application `cursorDiskKV`
  table by `persistInlineDiffs`, which runs from storage's should-save callback.
  Quick Edit reviews have no composer metadata and are not persisted this way.
- On start, `loadInlineDiffs` restores every row whose file no longer equals its
  original text: it resets the model to the original lines and re-applies the
  current lines as a **pending** review. A row whose file equals the original is
  treated as stale and deleted.
- `_remove` (after accept, reject and Undo/Redo) drops the id from
  `_persistedDiffIds` first, then sends `cursorDiskKVClearPrefix` without awaiting
  it. A rejection is only logged; nothing retries it.
- `persistInlineDiffs` marks a row persisted only after its write resolves. A
  review removed while that write is outstanding is not in `_persistedDiffIds`,
  so `_remove` sends no deletion and the completing write leaves the row behind.
- The renderer storage client forwards each call over IPC; the main process runs
  a single autocommit `DELETE` and resolves after SQLite's callback. The database
  is opened with `journal_mode = WAL` and `synchronous = NORMAL`.
- The workbench flush with reason 1 (shutdown) **awaits** should-save callbacks
  before flushing; reason 0 (idle/periodic) starts them without awaiting.
- `acceptDiff`/`rejectDiff` push their history entry, record telemetry, run the
  handler commit, fire the decision event and then register removal. Repeating
  the method after a failure repeats every completed step; for rejection this
  re-applies the text edits computed from the old change ranges.

**Answer to "is deletion acknowledged before it is durable?"** In the recovered
owner, acceptance completes in the UI before deletion is even acknowledged, and
the acknowledgement is discarded. Once the main process acknowledges the
`DELETE`, the native run below shows it survives a killed host. *Inferred, not
tested:* with WAL and `synchronous = NORMAL` an acknowledged commit can still be
lost on OS crash or power loss before a WAL sync; no power-loss test was run.

## Reproduced defects

Pre-fix native runs (current build before this change) and `--original-owner`
controls (recovered `persistInlineDiffs`, `acceptDiff`, `rejectDiff`, record
deletion, removal registration and handler rejection restored inside the
corrected build) reproduce:

| Defect | Native evidence |
| --- | --- |
| A failed record deletion after Keep All is never retried; after a normal restart both accepted files reappear as pending **Undo All / Keep All**. | Pre-fix `logs/review-deletion-verification-isBogW`; control `bLGGrb`. Screenshot inspected. |
| Keep All while a live-review write is outstanding leaves the row; the accepted review returns as pending after restart. | Pre-fix `nZoYuI`→`Pb8Kt1`; control `cQg22z`. |
| One member of a grouped Keep All failing in handler disposal is left owned with its row retained and **no visible control** to retry; its accept event never fires. | Pre-fix `kyr6hE`; control `L3wjZ9`. |
| A grouped Undo All member failing after its text was restored stays owned with its row; the recovered Undo All stops at that member. Nothing retries it. | Pre-fix `RuEOpF`; control `tJX9Aj` (orphaned handler after the retry trigger). |
| Retrying a failed accept replays telemetry and history; retrying a failed reject applies its text edits twice. | Producer controls only (`agent-review-deletion.test.mjs`); not observed natively. |

The pre-fix `failedDeletionThenUndo` (`Z2SFQp`) and abrupt-exit (`X6X6D2`) runs
pass: they are controls for the no-loss and acknowledged-durability clauses.

## Correction

[The deletion owner](../../desktop/agent-review-deletion-customization.mjs) is
applied after the existing review customizations by
[the recovery installer](../../desktop/agent-review-recovery-customization.mjs).
It keeps first backups, is byte-stable on reapplication, upgrades the earlier
generated output and rejects changed producer text.

- **Owned deletion.** `_remove` registers each record deletion in a small
  service map until storage acknowledges it. A failed deletion keeps its entry;
  an outstanding one is joined rather than resent.
- **Retry at the persistence owner.** `persistInlineDiffs` first resumes
  committed decisions and retries failed deletions, then writes. The shutdown
  flush awaits it, so a deletion whose storage recovered before shutdown is
  durable before the host exits.
- **No resurrection from an outstanding write.** A write that completes for a
  review no longer live is followed by its deletion.
- **No loss of a pending review.** Retry never deletes an id that is live again
  (for example restored by Undo); that review's own record is rewritten.
- **Resumable decisions.** Accept/reject record a handler-owned decision and
  step. A retry from any entry point (Keep, Undo, Keep All, the persistence owner
  or the removal entry's Undo callback) resumes the committed decision from its
  failed step: no second history entry, telemetry record, callback, event or
  text edit. The handler's rejection edits are applied once.
- **Record lifetime follows the decision.** An accepted decision deletes its
  row immediately; a rejection deletes it only after the original text is
  restored. A handler still finishing cleanup is not re-persisted as pending.

## Verification

```sh
export OPENVISION_RECOVERY_DIR=<prepared 3.21.13 recovery>
npm ci --prefix tooling
npm run test:agent-review
npm run check:desktop
npm run build:desktop
npm run test:build-integrity
npm run verify:review-storage -- --undo-stack --removal-failures
npm run verify:review-storage -- --undo-stack --removal-failures --menu
npm run verify:review-deletion
npm run verify:review-deletion -- --original-owner [--scenarios=<name>]
npm run docs:check
```

- `test:agent-review` passes **82/82** (71 existing, 11 new), zero skipped. The
  new tests execute the recovered accept/reject/remove/persist owners and the
  recovered handler accept/reject/remove together; storage, telemetry, text model
  and disposal are controlled. They include preview.7 controls for each defect.
- `test:build-integrity` passes **26/26**; `check:desktop` passes; the source
  build validates **239 scripts, 124 manifests and 30 local main-process modules**.

**Linux adaptation.** The existing review-storage verifier was Windows-only by
assertion. With that assertion relaxed and the Linux sandbox argument added, its
first Linux run `LHKt2u` passed unchanged scenarios. `--menu` drives Undo/Redo
through the Edit menubar; an initial synthetic click within the menu's
activation delay did nothing, so the helper moves onto the item and presses and
releases it as a user does.

Final native runs on the corrected build (parent `1c753c64` plus this change),
workbench SHA-256 `6b96447769aad14dcb04f150c8afd2a6dadaf12799b13f690c1db5a4456b3625`:

| Run | Observed result |
| --- | --- |
| `review-storage-verification-O4JgMy` (`--menu`) | Edit-menubar Undo/Redo with injected snapshot write/read, cancellation and two disposal failures: correct history position, retry guidance and exact CRLF bytes; 10 menu commands, one controlled inference, host exit 0. |
| `review-storage-verification-iv5HaY` (keyboard) | Passes on the same build; no regression in the earlier keyboard scenario. |
| `review-deletion-verification-vJ3yKH` | All seven scenarios below; 15 authenticated controlled requests, only the three injected deletion errors, no renderer errors, final profile has no review rows, normal runtime file unchanged. |

Scenarios in `vJ3yKH`, with SQLite read directly from the closed profile:

| Scenario | Result |
| --- | --- |
| Failed deletion, storage recovers before normal shutdown | Two injected failures, both deletions owned; shutdown retry leaves **0** rows; no review after restart. |
| Grouped Keep All, one member's disposal fails | Rows deleted at decision; storage flush resumes the member; accept telemetry 1, accept event 1, one acceptance and one removal history entry. |
| Edit menubar Undo then Redo of that member | Review restored with Keep File visible; Redo re-accepts with no row left. |
| Grouped Undo All, one member's disposal fails | Restored text applied once (`textEdits` 1), reject callback/event 1; storage flush finishes the member; repeating Undo rejects the unreached member; exact original bytes. |
| Keep All during an outstanding live-review write | No row on disk; no review after restart. |
| SIGKILL immediately after acknowledged deletion | No pending deletion, **0** rows on disk after the kill, no review after restart. |
| Failed deletion, then Undo restores the review | One row retained; review restored after normal restart; Undo All restores the prior bytes. |

The abrupt exit is the verifier-owned host signalling itself through its
Inspector connection; no process was selected by PID. Screenshots of the
restart, failure, menu and grouped states were inspected with the assertions.

## Unverified and remaining

- **Linux x64 only.** Windows and macOS were not run.
- Deletion that keeps failing through shutdown leaves the row; a later restart
  restores that accepted review as pending. Storage cannot record a tombstone when
  it is itself failing. Likewise, a host killed after acceptance but before the
  main process commits its `DELETE` restores the review; only the post-ack case
  was tested.
- Power loss and OS crash after an acknowledged deletion; physical storage faults
  (all faults here are injected at mounted service calls).
- A post-commit cleanup failure shows no notification; the committed member is
  resumed by the next storage flush or user action. The recovered Undo All still
  stops at its first failed member (Keep All is already joined).
- Reject-side replay corruption is producer-tested only; the native control does
  not reach a second user rejection.
- Other edit types, notebooks, live providers, and outstanding tool writes.

No RAM, CPU, latency or token saving is claimed; the change adds one small map
and per-handler step values. OV-103 stays **Partial**; the ledger remains
**6/42 Verified (14.29%)** with **322 provisional points**.

[source]: ../../curs_source/modules/3.24.18/ed6922a7a86c8c448a46aa39af0c931580da162770fe406a0d41737290e637d9-e9acad71989a/inlineDiffService.js
