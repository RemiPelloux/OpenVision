# Agent editing: Linux x64 closure of the recorded OV-103 defects

19 October 2026. OV-103 (Agent editing). This is a source change after
**0.2.0-preview.7**; the published portable payload is unchanged. **Linux x64
only** (cloud container, Xvfb, `dbus-run-session`, Node 24.18.0, prepared 3.21.13
runtime input). It does not prove Windows or macOS behavior. All model responses
come from **controlled** local HTTP fixtures; no live or paid inference was used.

This report closes the in-scope defects that the earlier reports recorded but did
not fix: [interruption](rea-agent-interruption.md#unverified-and-limitations),
[review record deletion](rea-agent-review-deletion.md#unverified-and-remaining),
[Agent I/O faults](rea-agent-io-faults.md#not-verified) and
[profile I/O faults](rea-profile-io-faults.md#not-verified). Observations,
inferences and residuals are kept apart below.

## Defects and owners

| # | Defect | Reproduced (pre-fix) | Owner and fix |
| --- | --- | --- | --- |
| 1 | After Undo then Confirm restored the bytes, the review bar still offered Undo/Keep. | Native: in `write-stop` the inline-diff service held no diff, handler or record after Confirm, the registry's `getDescriptors()` and `descriptorsObservable.get()` were both empty, yet the bar showed `Keep, Undo`. Firing the registry change event once more hid it. | The bar reads the diff registry through the observable-to-SolidJS bridge `Tge`, which seeds its signal with a read and only then subscribes. The registry's event-backed observable (`JEe`) caches nothing for an unsubscribed read and, once subscribed, its first event stores the value **without notifying** (`hadValue` false). The first review change after a bar mounts was lost. [`review-descriptors-customization.mjs`](../../desktop/review-descriptors-customization.mjs) keeps the registry's own observer on `descriptorsObservable` and reads it once, so every registry change notifies all seven bar consumers. |
| 2 | An edit interrupted before its result (write held, then Stop, close or kill) was shown as **Edited** although the bytes were unchanged. | Native SQLite: the restored bubble is `tool: 38`, `status: "loading"` or `"cancelled"`, streamed params, **no `toolCall`, no `result`**. The load owner `I0u` turns `loading` into `cancelled`; the transcript treats only `error` or a non-success result as a failure, so it renders "Edited". Live, Stop leaves the bubble `loading` and the label becomes "Edited" once the turn stops. | [`agent-edit-interruption-customization.mjs`](../../desktop/agent-edit-interruption-customization.mjs): on load (`I0u`) and on live cancellation (`cancelUnfinishedToolCalls`) an edit bubble (`EDIT_FILE_V2`/`EDIT_FILE`) without a result and without an error becomes `status: "error"` with *"Edit interrupted before it completed. Check the file; any change that was written stays available in review."*; the activity step (`fh_`) marks such an edit as failed. A live, still-running edit keeps its running state because the renderer shows `generating` first. The transcript reads **Edit attempted**. |
| 3 | Undo All stopped at its first failed member; a failed post-commit cleanup was silent (Keep All too). | Producer: the recovered `rejectAllDiffs` loop abandons later members after a throw (`agent-review.test.mjs`). | [`agent-review-customization.mjs`](../../desktop/agent-review-customization.mjs): Undo All is joined like Keep All (every member attempted, errors aggregated). Either group shows a warning notification, *"OpenVision could not finish undoing/keeping the review of N file(s). The decision is kept; retry to finish it."*, with **Retry**. Retry resumes committed decisions at the inline-diff owner (their descriptors are already gone), repeats the group for pending members and reports a repeated failure again. |
| 4a | Undo on a **full project volume** that has to grow the file left a **torn file** with no error. | Native run `agent-io-fault-verification-MCbHJJ`: the kept 115,540-byte text was removed by the Agent, the volume filled, Undo restored it: on disk a **28,672-byte prefix**, no message, nothing to retry. | The main-process disk provider (`out/main.js` `doWriteFile`, which serves every renderer save) opened the file truncated and issued **one** `fs.write`, ignoring a short count. [`file-write-restore-customization.mjs`](../../desktop/file-write-restore-customization.mjs) writes until every byte is written (so ENOSPC/EFBIG surface as a save error) and, on failure after truncation, writes the previous bytes back (or removes a file the write created). Previous bytes are read only for regular files up to 64 MiB. Temp-and-rename is not used because it would drop mode, ownership and hard links. |
| 4b | ItemTable flush loss inferred in the I/O-fault report (rejected flush not re-queued). | Already fixed by the [profile storage durability](rea-profile-io-faults.md#main-process-storage-queue-retry-and-acknowledge-only-after-sqlite) owner. This run adds review-snapshot and record-deletion writes with the profile full. | No change; confirmed below. |
| 4c | Stale `.openvision-model-settings > .openvision-model-status` selector in `verify-profile-io-faults.mjs`. | Since `658b8f4d` the status `<p>` is inside `.openvision-api-settings`. | Selector updated to `.openvision-api-settings > .openvision-model-status`, as the other provider verifiers use. |
| 5 | An orphan `.<name>.openvision-<uuid>.tmp` stayed when the file was never written again. | Native: one temporary after `write-close` and `write-kill` (both cases still show it after exit). | [`agent-write-durability-customization.mjs`](../../desktop/agent-write-durability-customization.mjs): on activation the Agent execution extension sweeps its open `file:` workspace roots once, 2 s after activation and off the activation path. Only regular files matching the exact generated name (`.<name>.openvision-<lowercase UUID>.tmp`) older than 60 s are removed. The walk skips symlinks, `.git` and `node_modules` and stops at 4,000 directories, 200,000 entries or depth 32. |

### Rejected first fix for defect 1 (recorded, not shipped)

The first fix primed **every** `Tge`/`Eke` bridge. It passed the interruption
verifier (`agent-interruption-rdLSl3`) but a full `verify:profile-io-faults` then
failed twice (`76c8P7`, `HqoNJW`): a chat turn sent while the profile was full was
sent **again** after space was freed, and the reply was streamed twice into one
bubble. A control with only that priming removed from the same build passed with
one chat request (`profile-io-fault-verification-jLKHVz`). The global bridge change
therefore woke another consumer; the shipped fix is limited to the diff registry.
*Inference, not traced:* that consumer is in the chat retry path.

## Verification

Commands (as the unprivileged `ov` user; every native verifier under
`xvfb-run … dbus-run-session`, one at a time):

```sh
npm run test:agent-review
npm run test:provider-storage
npm run check:desktop
npm run test:build-integrity
npm run build:desktop
npm run verify:agent-interruption
npm run verify:review-deletion
npm run verify:agent-io-faults
npm run verify:profile-io-faults
npm run verify:agent
npm run verify:agent -- --review-recovery
npm run verify:agent -- --review-abrupt
npm run docs:check
```

Host note: without a Secret Service, Chromium's `safeStorage` reports encryption
unavailable here and provider **Save** never completes, so every native verifier
hung at its first provider dialog. `gnome-keyring` was installed and each
verifier's private D-Bus session starts it unlocked with a throwaway password
(`gnome-keyring-daemon --unlock --components=secrets`). Without `--unlock` the
D-Bus-activated daemon opens a blocking `gcr-prompter`.

RESULTS_PLACEHOLDER

## Residuals and limitations

- **Undo whose restore save fails.** On a full volume the review is removed when
  Undo commits, while the restored text is unsaved in the editor (dirty) with
  *Failed to save … ENOSPC* and **Retry**. Retry after freeing space writes the
  exact bytes (native). If the app is closed without saving and hot exit is off
  (the verifier's setting), the restored text is lost; the saved file keeps its
  previous complete bytes. Keeping the review until the save succeeds is not
  implemented.
- **Provider in-place writes over 64 MiB** keep the recovered behavior: no
  previous-bytes restore; the loop still turns a short write into an error.
- **Glass workbench**: defects 1–3 are fixed in the desktop workbench only.
- **Startup sweep** covers roots open at activation, not folders added later; it
  is bounded, so a larger tree is swept only partly (the result records
  `truncated`). The 60 s threshold is wall-clock based.
- **Interrupted edit label**: an edit whose write completed after Stop (and is
  in review) is also labelled *Edit attempted*; the message says any written
  change stays in review.
- **Reject telemetry** for a member repeated in the same chat was not recorded by
  the recovered owner (count 0); the verifier asserts it is never replayed.
- Power loss, kernel crash and device EIO are not producible here (owner default:
  residual exclusions). A deletion that keeps failing through shutdown still
  restores the accepted review as pending after restart, and a command whose
  group leader exits early is still untracked (both recorded residuals).
- Not covered: Stop/close during argument streaming, MCP tools, between files of a
  multi-file turn, live providers, Windows and macOS (`verify:review-storage` is
  Windows-only).
- No RAM, CPU, latency or token saving is claimed. Added costs: one previous-bytes
  read per renderer save (≤ 64 MiB), one bounded tree walk per Agent extension
  activation, one extra observer on the diff registry.
