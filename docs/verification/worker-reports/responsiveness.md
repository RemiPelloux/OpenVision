# Worker report: responsiveness (OV-1002)

Branch `ov/responsiveness`, 18–19 October 2026, based on the coordinator branch
`ccr-a39d6f13-jurmdv` (merged in, not rebased). Linux x64 only: a cloud
container with 4 CPUs and 15 GB of RAM, Xvfb at 1920×1080 with **no GPU**
(software rendering), dbus, and a plaintext gnome-keyring as Secret Service.
Every model response comes from the verifier's **controlled loopback fixture**;
there was no live inference. The work stopped once on an owner request and
was resumed to finish. It was rebased onto `main` at `805e6561` (a fast-forward
of this branch) and finished there. The [final status](#final-status)
section is authoritative.

## Summary

The smoke failure `stream.lastChunkToPaintMs` (run `xXcKIA`, 1,789 ms) has
three causes, now separated:

1. **Measurement defect (fixed).** The verifier polled for the last chunk only
   after the 56 typed keys. In smoke mode the 500-chunk stream (about 2.2 s)
   ends before the typing (about 4.8 s), so the figure included leftover typing
   time. The last chunk is now detected in the page, every frame, from the
   moment the fixture sends it, and concurrently with the typing.
2. **Product delivery bottleneck (fixed at its owner).** The recovered Agent
   loop (`consumeStream` in `cursor-agent-exec`) awaits two or three
   extension-host → renderer round trips for every model text delta
   (`sendUpdate(textDelta)`, `sendUpdate(tokenDelta)`, `recordText`).
   - Delivery therefore runs at the renderer main thread's pace. On this
     no-GPU host the fixture sent 500 deltas in 2.2 s, but they reached the
     renderer at 25–50 per second (median inter-arrival 25 ms at 51 fps; trace
     `R0Nvs0`).
   - strace of the extension host (`strace-t3`): it read the whole SSE response
     in about 3 s, but its writes to the renderer IPC socket ran for about 20 s.
   - The model stream is now read as it arrives. Text deltas already waiting
     are merged, so one round trip carries the backlog.
   - Last chunk to paint: **12,219 → 650–847 ms** in smoke (10/10 under the
     1,000 ms budget) and **44,960 → 448–763 ms** at full size (10/10 stream-only runs).
3. **Fixture defect (fixed).** The fixture project sits under `logs/` inside the
   OpenVision checkout. The Agent's per-turn `git status --short --branch`
   discovered that checkout and walked its 17,000+ files. That added about 6 s
   between submit and the model request, plus about 100 MB of extension-host
   reads during each stream. `GIT_CEILING_DIRECTORIES` now confines git to the
   run directory:
   - submit → request: 6,477 → 427 ms;
   - transcript turns: 7.4 → 1.25 s.

The budget was not changed. No smoke-specific budget was needed for this metric.

**Not passing on this host:** the other stream budgets — typing p95
(60 ms), long tasks (600 ms), and at full size frame p95 and frames over
100 ms. They failed before the fix too, though by less (typing p95 66–86 ms in
the pre-fix smoke runs, 75 ms in the pre-fix full run). The fix makes the
renderer draw the reply as fast as it arrives instead of about four times
slower, so rendering cost is concentrated in the stream window.

- Per-key data: keys typed while the stream renders take 30–190 ms; keys after
  it take about 20 ms.
- Inference: this is software-rendering cost per frame on a GPU-less Xvfb host.
  The budgets were set on a GPU-accelerated Wayland host, where the renderer
  kept up and nothing merges (each delta is then delivered alone, as before).

## Tasks

| # | Task | State |
| --- | --- | --- |
| 1 | Explain and stabilize `stream.lastChunkToPaintMs` (10× smoke, 10× full, profile) | **Done.** Three causes found and fixed (above). 10/10 smoke stream runs at 650–847 ms and 10/10 full stream runs at 448–763 ms, plus 3+3 all-phase runs at 437–543 ms. Profile: `--profile=stream` run `wCe2jp` had no single JS hotspot (renderer main thread 7.1 s native, 5.5 s idle of 18.3 s); the attribution came from `--trace-stream` and strace |
| 2 | Prove incremental edits in the large-file phase | **Done.** Per-key bytes and CPU by role, large/small ratios and file share are measured and budgeted. Baselines: `dQjcNM`, `o5bjuB`, `vCBiFW`. Edit sync is O(edit): about 1 KB per key into the TypeScript server, ratio 0.9–1.66. Replies are O(file): tsserver `documentHighlights` returned 4,077,984 bytes listing a keyword on all 50,000 lines. That is recorded, not budgeted, and listed as an owner decision |
| 3 | Scroll frame p95 49.9 vs 50 ms | **Done (recorded).** On the GPU host 49.9 ms is one 3-refresh frame at p95. On this no-GPU host the cost is real: p95 100–116.7 ms in 5 full runs, with 51–66 frames of 5 or more refreshes. Not fixed (the recovered virtualizer's row measurement and software raster); distributions are in the evidence doc |
| 4 | Final reruns | **Done.** Results below |

## Defects found and fixed

| Defect | Owner | Commit |
| --- | --- | --- |
| Last chunk detected only after typing ended (smoke figure was typing time) | `desktop/verify-responsiveness.mjs` | `11491e7b` (detection), `1b315e09` (timing fields), `4b7e1d33` (`--trace-stream` diagnostics) |
| Agent awaited 2–3 renderer round trips per text delta; delivery throttled to the renderer's pace | `desktop/agent-stream-delivery-customization.mjs` (new, marker-guarded, idempotent, backup in `backups/agent-stream-delivery`, contract guards on the awaited delivery calls; tests run the shipped helper) | `29483a06` |
| Fixture project inside the host checkout: per-turn `git status` walked the whole repository | `desktop/verify-responsiveness.mjs` (`GIT_CEILING_DIRECTORIES`) | `8ebaf701` |
| Edit-sync budgets and file-share metric restricted to inbound edit bytes (replies excluded) | `desktop/verify-responsiveness.mjs`, `desktop/responsiveness-budgets.json` | `846c2089` |

## Verification

Each run directory is `logs/responsiveness-<id>/`. Runs were serialized, under
`ov`, via `xvfb-run -a -s "-screen 0 1920x1080x24" dbus-run-session`, with
`gnome-keyring-daemon --start --components=secrets`. Load is the 1-minute
average at the start.

**Unit tests:** `node --test desktop/responsiveness-measure.test.mjs`
passes 10/10, and `node --test desktop/agent-stream-delivery.test.mjs` passes
6/6. The full `npm run test:desktop` was not rerun (stop request).

### Before the fixes (`--phases=stream`)

All runs in this table failed `lastChunkToPaintMs`.

| Run | Verifier, size | Last chunk | Submit → request | Typing p95 | Load |
| --- | --- | ---: | ---: | ---: | ---: |
| `C9Yp7t` | base verifier, smoke | 5,105 | n/a | 66.4 | 0.2 |
| `gxNLsL` | concurrent detection, smoke | 4,661 | n/a | 82.3 | 1.7 |
| `wCe2jp` | same, `--profile=stream` | 7,999 | 6,477 | 86.2 | 1.4 |
| `0IZqo5` | same, **full** | **44,960** | 7,044 | 75 | 1.0 |
| `R0Nvs0` | `--trace-stream` | 12,167 | 6,487 | 62.3 | 2.2 |
| `wJnEYn` | `--trace-stream --turns=2` | 10,184 | 6,513 | 63.4 | 1.1 |
| `oJF6cs` | git ceiling only | 12,219 | **427** | 78.6 | 0.4 |

Two observations:

- The delivery rate does not depend on transcript size: 41 deltas/s with 2
  turns and 35/s with 30.
- In the full run `0IZqo5` the reply text grew at a steady ~450 chars/s for
  45 s after the last chunk, and the renderer used 73 s of CPU (all threads)
  in about 61 s.

Two runs failed setup before the keyring was configured and are not counted:
`i0Vrq1` and `l7ji2j` (the Add Provider dialog never closed).

### After both fixes (build `29483a06`)

| Series | Runs | Last chunk (ms) | Other results |
| --- | --- | --- | --- |
| `fix-smoke-1` (`--trace-stream`) | `yWfnRg` | 802 | 53 merged deltas; last enqueue 2,218 ms after the first chunk (fixture finished at 2,167 ms); renderer CPU 19.4 → 6.0 s |
| `smoke-1…10` (`--phases=stream`) | `aenH6y foM8BW Qeuo9W jhALAh hPNScO tKgHeG cAOPi6 L5eddY kKwYxD PW61Wx` | **821 847 779 727 686 682 838 821 650 777** (10/10 ≤ 1,000) | typing p95 62–153 (fails 10/10); long tasks 367–734 (fails 4/10); frame p95 33.3–33.4; load 1.3–3.2 |
| `fullstream-1…7` (`--full --phases=stream`) | `CldXnD uhyjaO 6wqWdW wqUzGq O0VJzT pqsiB9 gJtDNQ` | **624 739 726 763 588 470 558** (7/7 ≤ 1,000) | frame p95 49.9–66.7; frames over 100 ms 4–9; long tasks 1,708–2,542 ms; typing p95 83.4–145.6; first chunk 1,240–1,731 ms; load 2.0–3.3 |

Every run above is a first-time run; none is a retry. `fullstream-7` was
running at the stop request and was left to finish. Runs 8–10 ran after the
resume, on the rebuilt `main` (see the final reruns).

### Final reruns (build of `main` `805e6561` + `846c2089`)

Load average 1.3–2.6 during these runs.

| Command | Run IDs | Result |
| --- | --- | --- |
| `npm run test:desktop` | — | 222/222 pass |
| `node --test desktop/responsiveness-measure.test.mjs desktop/application-storage-customization.test.mjs desktop/agent-stream-delivery.test.mjs` | — | 24/24 pass |
| `verify:responsiveness -- --full --phases=editorSmall,editorLarge --no-budgets` ×3 (baselines) | `dQjcNM o5bjuB vCBiFW` | recorded |
| `verify:responsiveness -- --full` ×3 | `HKUSkP zQbbWT W9CeOx` | **fail** on timing budgets of this host (see below). Last chunk 543/531/478 ms; all edit-sync budgets pass (tsserver input 1,945/860/666 B per key, share 0.00055/0.00024/0.00019) |
| `verify:responsiveness` (smoke) ×3 | `m69jLf hTqwTq J0q3KU` | **fail**: `stream.latencyP95Ms` 67.3/92.5/65 and `scroll.frameP95Ms` 66.7/66.6/83.2 (plus `picker.latencyP95Ms` 192 in one). Last chunk 525/542/437 ms |
| `verify:responsiveness -- --full --phases=scroll` ×2 | `Hp2Pzz umLLPW` | **fail**: `scroll.frameP95Ms` 100/100 |
| `verify:responsiveness -- --full --phases=stream` (runs 8–10) | `EJ07P8 VIZkZw cO9hUo` | last chunk 448/552/531 ms; fail on long tasks (684–1,332 ms) and, in two runs, typing p95 |
| `npm run verify:model-menu:large` | `large-model-menu-9j8r2d` | **pass**, host exit 0 |
| `npm run docs:check`, `npm run status:features` | — | pass |

These budgets failed in every full run:

- stream long tasks and typing p95;
- scroll frame p95 and longest task;
- turn long tasks and typing p95;
- `editorLarge.openMs` and `editorLarge.longTaskTotalMs`;
- `picker.latencyP95Ms` in 2 of 3.

They are timing budgets set on a GPU-accelerated host. The evidence doc has
the distributions and a derived software-rendering budget proposal.

The closed-chat budgets `markerStringsClosed` (581 > 400) and
`historyStringsClosed` (224 > 130) failed in all three full runs and pass in
smoke. That phase and its budgets belong to OV-1001 and were not touched here.

All runs are first-time runs; nothing was retried. The changed verifier ran
far more than twice: 26 stream runs and 6 all-phase runs.

## Recommendation per story

**OV-1002: not yet Verified on Linux x64.** The Linux gaps left:

- **Timing budgets fail on this no-GPU host.** The owner either:
  - reruns them on a GPU-accelerated Linux x64 host (the budgets' reference
    environment), or
  - adopts the derived software-rendering budgets proposed in
    `docs/performance/responsiveness-linux.md`.
- **Closed-chat string retention** (OV-1001/OV-1003 budgets) fails at full
  size.
- **Scroll layout cost and O(file) occurrence highlighting** in large files
  remain open product issues, not fixed here.

Everything else this story asked for on Linux is implemented and measured:

- the stream last-chunk metric, explained and fixed;
- incremental-edit proof with budgets;
- scroll distributions;
- the final reruns.

## Moved to platform/live stories

- Windows and macOS `--full` runs.
- Live provider stream cadence: real providers send fewer, larger deltas than
  the 4 ms fixture, so the delivery fix matters most for fast local models.

## Defaults pending owner decision

- "Incremental edits" means editor model and language-server synchronisation,
  not Agent multi-edit application (as instructed).
- Software-rendered hosts: keep the reference budgets, or adopt the derived
  software-rendering budgets in the evidence doc. Not applied.
- Occurrence highlighting in large files: tsserver `documentHighlights`
  returns every occurrence (4 MB for 50,000 lines). Capping or disabling it
  above a size threshold is a product decision. Not changed.
- Text-delta coalescing applies in all modes, because the patched loop is
  shared. It only merges deltas that are already waiting. The recovered
  single-message loop detector then sees merged text (the same text, in
  larger pieces). Reversible: remove `installStreamDelivery` from
  `desktop/build-source.mjs`.

## Open risks

- The delivery patch removes backpressure from the model HTTP stream while a
  renderer round trip is pending. The whole reply can then be held in the
  extension host. That is bounded by the response size, which the existing
  4 MiB SSE event limit already constrains per event.
- `waitForStreamPaint` checks the reply row's text every frame after the last
  chunk is sent, a small renderer cost inside the measured window.
- The extension-host strace runs perturbed timing. They were used only for
  attribution.

## Final status

- **Done:** all four tasks.
- **Remaining for promotion:** owner decisions or other environments only:
  - GPU-host reruns or software-rendering budgets;
  - closed-chat retention (other stories);
  - Windows and macOS.
- **Estimate:**
  - one worker session if the owner adopts software-rendering budgets
    (apply them and rerun 3 smoke and 3 full);
  - otherwise one session on a GPU-equipped Linux host.
- **Earlier stop (19 October, mid-run):** recorded in history. Every item
  listed then as not started was finished after resuming.

## Follow-up, 20 October 2026: profile I/O regression in the stream coalescing

The coordinator reported, from the agent-editing worker, that
`verify:profile-io-faults` failed on merged `main` (`39nnjr`, `YoEr8w`). With the
profile disk full, a chat turn was sent and its reply shown. After space was
freed it was sent again, and the reply appeared twice in one bubble. A control
build with only the coalescing reverted passed (`LvteOr`).

The branch was brought to `main` by merging `origin/main` (`455bb056`) into it.
A reset would have dropped the unmerged budget and docs commits `846c2089`,
`468f79e0` and `fb5ba2e7`. The build was a clean rebuild with Node 24.18.0
after `npm ci` in `tooling/`.

**Reproduced.** On `main` code, `verify:profile-io-faults` passed once
(`oUsWtS`) and failed once (`PAzGcx`), so the failure is timing-dependent.

- The chat requests went `reply, chat, chat`.
- The Agent log shows attempts 0–2 failing about 60 ms into each attempt, before
  any model request (`SQLITE_FULL` in the extension host).
- Attempt 3 (09:38:54) failed the same way at 58 ms, yet its model request went
  out and its reply was shown.
- Attempt 4, after space was freed, sent the request again.
- The Agent log on the full volume is cut off at 09:38:54, so attempt 3's own
  events are lost.

**Cause (observed in code; the exact trigger is inferred).**

The recovered loop pulls the model stream only when it is ready for the next
event. It sees a cancelled step on its next pull.

The v1 helper differed in two ways:

- it read the stream eagerly from the moment it was wrapped, while the loop was
  busy and also after the step had failed;
- it then handed the loop events it had already buffered.

A step that failed on storage could therefore still pull, and show, its model
response. `consumeStream` swallows non-consumer-side errors, so nothing stopped
that delivery, and the turn retry streamed the reply a second time.

**Fix (`436c305a`, `desktop/agent-stream-delivery-customization.mjs`, v2
marker).**

- The stream is read ahead only after a text delta has been handed to the loop,
  only text deltas are read ahead, and read-ahead stops when the loop leaves or
  the step is cancelled (`e.canceled` / `e.signal.aborted`).
- Once the step is cancelled, buffered events are dropped and the next event
  comes from the stream itself, as in the recovered loop.
- The coalescing win is kept: deltas that arrive while one is being delivered
  are still merged.
- v1 builds are upgraded in place.
- The contract guard now also requires the loop's `e.canceled` handling.
- Tests: no read-ahead before or between non-text events; buffered events
  dropped after cancellation; the v1 → v2 upgrade
  (`desktop/agent-stream-delivery.test.mjs`, 9/9).

**Verification on the clean rebuild of `436c305a`:**

| Command | Run ID | Result |
| --- | --- | --- |
| `verify:profile-io-faults` | `OfRARQ` | Pass, first time; chat requests 0 while full, 1 after freeing |
| `verify:profile-io-faults` | `1FKdQC` | Pass, first time; 0 / 1 |
| `verify:profile-io-faults` | `dGnmPd` | Pass; 0 / 1 |
| `verify:profile-io-faults` | `MMD8pS` | Pass; 0 / 1 |
| `verify:responsiveness -- --phases=stream` (smoke) | `uvHsFE` | Last chunk 529 ms, so coalescing is still effective (12,219 ms without it). Fails only `stream.latencyP95Ms` 75.1 > 60, the no-GPU host limit recorded above |
| `verify:agent` | `agent-verification-luGDiv` | Pass |
| `node --test desktop/agent-stream-delivery.test.mjs` | — | 9/9 |

The failure reproduced in 1 of 2 runs before the fix and 0 of 4 after it. Four
passes make a recurrence at that rate unlikely, but do not rule it out.

## Follow-up, 20–23 October 2026: duplicate reply under load is a local-retry defect

The coordinator's rerun of the merged v2 code failed once under heavy CPU load
(`PYDvyh`: two chat requests, "A chat reply finished after freeing space survives
restart") and passed once (`TNZHVG`). This was investigated on a fresh branch
from `origin/main` `c6d747c3`, with Node 24.18.0, a non-root user, `xvfb-run`,
`dbus-run-session` and `XDG_RUNTIME_DIR`. Load came from
`stress-ng --cpu $(nproc)` for the length of each run (package `stress-ng`
installed for this).

**Diagnostic method.** Temporary instrumentation, not committed, was added to
the built bundles. Every probe was removed and the original built files restored
afterwards.

- Extension host: timestamped markers written to `/tmp`, outside the full
  volume, at these points:
  - when each step's model stream is created;
  - around `sendUpdate(textDelta)`, the token update and `recordText`;
  - around every checkpoint;
  - at each step's failure;
  - at each retry, with its action and whether a checkpoint existed.
- Renderer: a record in `globalThis` whenever the chat's retry reset
  (`replayCurrentAction`) runs, read by a temporary copy of the verifier.

**Observed** (each run under load; logs in `logs/diag-*.log`, git-ignored):

| Run | Build | Result | What the markers show |
| --- | --- | --- | --- |
| `GbgzYv` | v2 coalescing | Fail (chat requests 1 / 2) | Reply delivered at +41 ms, step failed `SQLITE_FULL` at +127 ms, retry streamed it again |
| `5bteRb` | **coalescing removed** (control) | **Fail** (1 / 2) | Same: delivered at +43 ms, failed at +135 ms |
| `pin-1` | control | Fail | Text delivered, token sent and text recorded, all succeeded; a later step of the same attempt failed |
| `G3JSsU` | control | Fail | Failed attempt delivered and recorded the reply, then failed at +38 ms with no checkpoint. Retries 1–4 were all `userMessageAction` replays (`checkpoint=false`) |
| `pyLYkC` | control, renderer probe | Pass | Failed attempts delivered nothing. The renderer reset `replayCurrentAction` ran **0 times** across 4 retries |

**Cause.** This is recovered behaviour, not the coalescing. The control build
with no coalescing fails the same way. For local Agent turns, the turn retry loop
runs in the extension host (`[local_agent_retries]`).

- On a replay it calls `runOptions.onRetryStarting`. The renderer's
  implementation of that runs `replayCurrentAction`, which deletes every bubble
  after the last human message (`deleteComposerBubbles`).
- But the local run options carry no `onRetryStarting`. The bundle only calls
  it, at line 135255; nothing supplies it, and the renderer reset never ran
  (`pyLYkC`).
- So when an attempt has already shown its reply and then fails on storage, the
  replay appends the reply again into the same in-flight bubble.
- Whether the failed attempt shows anything is a race. The storage failure
  usually lands before the request is sent (0 requests), and CPU load widens
  the window. That is why the failure appears intermittent (v1: 1 of 2; v2
  unloaded: 0 of 4; loaded: 4 of 5 series failed in their first run).

**Not fixed here.** A correct fix belongs to the local Agent retry owner
(OV-103 / profile I/O), not to the stream-delivery customization. It needs an
owner decision between:

- **A (recommended).** Give the local retry loop an `onRetryStarting` that
  reaches the renderer's `replayCurrentAction`, the same reset the hosted path
  uses. This needs an extension-host → renderer route for the retry
  notification.
- **B.** Do not auto-replay an attempt that already delivered assistant text;
  end the turn with Try again. This avoids the duplicate but loses the automatic
  recovery that `verify:profile-io-faults` expects.

Changing the coalescing would not help. The v2 helper is kept: it is not
involved, and the last-chunk measurements above depend on it.

**Requested runs not done.** These need the fix above:

- `verify:profile-io-faults` 5/5 under load;
- 2/2 without load;
- the stream smoke and `verify:agent` on the fixed build.

Without load on the v2 build, 4/4 passed earlier (`OfRARQ`, `1FKdQC`, `dGnmPd`,
`MMD8pS`).

**Deterministic reproduction recipe.** Run `stress-ng --cpu $(nproc)` alongside
`npm run verify:profile-io-faults` (non-root, `xvfb-run` and
`dbus-run-session`). Four of five loaded series failed in their first run here;
the fifth, `pyLYkC`, passed.

An injected delay between the persistence failure and the retry would not make
it deterministic: what matters is whether the failed attempt delivers text
*before* its storage write fails. A fully deterministic variant needs a fault
point that fails `recordText` or the step-completion write after the first
delivered text. That is a verifier change for the OV-103 owner.
