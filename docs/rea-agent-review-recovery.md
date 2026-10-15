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

OV-103 remains Partial. Native storage-failure injection, abrupt-crash recovery,
additional edit types and the OV-102 live-provider dependency remain open.
The recovery fix retains necessary state on failure; no reduced RAM, CPU, token
usage or faster execution is claimed. The portable release is not updated by
these source changes.
