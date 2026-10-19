# Worker report: responsiveness (OV-1002)

Branch `ov/responsiveness`, 18–19 October 2026, based on the coordinator branch
`ccr-a39d6f13-jurmdv` (merged in, not rebased). Linux x64 only: a cloud
container with 4 CPUs and 15 GB of RAM, Xvfb at 1920×1080 with **no GPU**
(software rendering), dbus, and a plaintext gnome-keyring as Secret Service.
Every model response comes from the verifier's **controlled loopback fixture**;
there was no live inference. The work **stopped early on an owner stop
request**, so the [status at stop](#status-at-stop) section is
authoritative for what remains.

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
     1,000 ms budget) and **44,960 → 470–763 ms** at full size (6/6 so far).
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
| 1 | Explain and stabilize `stream.lastChunkToPaintMs` (10× smoke, 10× full, profile) | **Done for the metric**: explained (three causes above), harness and product fixed, 10/10 smoke and 6/6 full under budget. **Partly done** for the series: 6 of 10 full runs complete (stopped). Profile: `--profile=stream` run `wCe2jp` (renderer main thread 7.1 s native, 5.5 s idle of 18.3 s sampled; no single JS hotspot); the decisive evidence came from `--trace-stream` and strace instead |
| 2 | Prove incremental edits in the large-file phase | **Partly done.** Measurement code is in: per-key renderer writes, extension-host and tsserver reads/writes, per-role CPU, large/small ratios and per-key share of the file (`editTraffic`, `sizeRatios`, `syncBytesPerKeyFileShare`), unit-tested. **Not done:** no native editor run on this branch yet, so no baseline and no budgets |
| 3 | Scroll frame p95 49.9 vs 50 ms | **Partly done.** `frameRefreshHistogram` (frames by whole 60 Hz refresh intervals) is in every phase, so a p95 of 49.9 ms can be read as a 3-refresh frame. **Not done:** the ≥5 full scroll runs |
| 4 | Final reruns | **Not done** (stop request) |

## Defects found and fixed

| Defect | Owner | Commit |
| --- | --- | --- |
| Last chunk detected only after typing ended (smoke figure was typing time) | `desktop/verify-responsiveness.mjs` | `11491e7b` (detection), `1b315e09` (timing fields), `4b7e1d33` (`--trace-stream` diagnostics) |
| Agent awaited 2–3 renderer round trips per text delta; delivery throttled to the renderer's pace | `desktop/agent-stream-delivery-customization.mjs` (new, marker-guarded, idempotent, backup in `backups/agent-stream-delivery`, contract guards on the awaited delivery calls; tests run the shipped helper) | `29483a06` |
| Fixture project inside the host checkout: per-turn `git status` walked the whole repository | `desktop/verify-responsiveness.mjs` (`GIT_CEILING_DIRECTORIES`) | `8ebaf701` |

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
| `fullstream-1…6` (`--full --phases=stream`) | `CldXnD uhyjaO 6wqWdW wqUzGq O0VJzT pqsiB9` | **624 739 726 763 588 470** (6/6 ≤ 1,000) | frame p95 49.9–66.7; frames over 100 ms 5–9; long tasks 1,795–2,542 ms; typing p95 99.9–145.6; first chunk 1,240–1,731 ms; load 2.0–3.3 |

Every run above is a first-time run; none is a retry. `fullstream-7` was
running at the stop request and was left to finish. Runs 8–10 were not
started.

## Recommendation per story

**OV-1002: not yet.** The remaining Linux gaps:

- Stream typing p95, long tasks, frame p95 and frames over 100 ms fail on this
  no-GPU host, both before and after the fix. Either:
  - rerun on a Linux x64 host with GPU acceleration (the budgets' reference
    environment), or
  - have the owner decide whether software-rendered hosts get their own
    derived budgets (not done here; budgets were not weakened).
- The incremental-edit budgets (task 2) need native baselines and then budgets.
- The ≥5 scroll distributions (task 3).
- The final reruns (task 4), including `verify:model-menu:large`.

## Moved to platform/live stories

- Windows and macOS `--full` runs.
- Live provider stream cadence: real providers send fewer, larger deltas than
  the 4 ms fixture, so the delivery fix matters most for fast local models.

## Defaults pending owner decision

- "Incremental edits" means editor model and language-server synchronisation,
  not Agent multi-edit application (as instructed).
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

## Status at stop

- **Done:** task 1 cause analysis and both fixes (harness and product), the
  10× smoke stream series, the measurement code for tasks 2 and 3, and unit
  tests.
- **Partly done:**
  - full stream series: 6 complete, 1 finishing at the stop, 3 not started;
  - task 2 (code only, no native data);
  - task 3 (histogram only).
- **Not started:**
  - editor baselines and incremental-edit budgets;
  - the ≥5 scroll runs;
  - final reruns: `test:desktop`, smoke ×3, `--full` ×3,
    `verify:model-menu:large`, `docs:check`, `status:features`;
  - the evidence-doc update in `docs/performance/responsiveness-linux.md`.
- **Last verified run IDs:** smoke `PW61Wx`, full `pqsiB9` (both on build
  `29483a06`).
- **Uncommitted findings:** none. Every finding is in this report.
- **Estimate for the remainder:** one worker session (about one quota round).
  - About 1 h 45 min of serialized native runs: 4 full stream runs, 3 editor
    baselines, 2 scroll runs, 3 smoke, 3 full, the model menu.
  - Then budgets and documentation.
  - Plus one more session if the owner wants GPU-host reruns or
    software-rendering budgets.
