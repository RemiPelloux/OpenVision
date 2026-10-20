# Responsiveness in large sessions on Linux

18 October 2026. P5 work on OV-1002 (editing and streaming stay responsive in
large sessions). **Linux x64 only**: Omarchy/Hyprland Wayland, source build of
the 3.21.13 runtime input, Node 26.8.1 tooling, on a shared host whose load is
recorded with every run. Windows and macOS were not run. Every model response
comes from a **controlled loopback fixture**; this is **not live inference**.
OV-1002 is **not promoted**; it stays Partial.

## Fixed datasets

`npm run verify:responsiveness` (`desktop/verify-responsiveness.mjs`) launches
the native application with a disposable profile and runs, in one session:

| Dataset | Content |
| --- | --- |
| Model catalog | 2 × 5,000 saved synthetic models (the `verify:model-menu:large` catalog) plus the fixture model: 10,001 |
| Picker | open the Agent model picker, type `model-0999` (10 keys, 60 ms apart) |
| Transcript | one chat of 110 scripted turns (220 messages); every reply has two paragraphs and a 10-line `js` code block |
| Idle typing | 32 keys (40 ms apart) into the composer with the long chat open |
| Stream | turn 111: 2,000 SSE content deltas, 4 ms apart (8.3 s), prose and 17 code blocks; the user types 56 keys (60 ms apart) while it streams |
| Scroll | 60 wheel steps (1,500 px) to the top and 60 back, then three more cycles (retention check) |
| Turn | turn 112 while the user types 39 keys; includes the submit's storage saves (3 s settle) |
| Editor | open and type 53 keys (15 ms apart) in a 40-line `small.js`, then at line 25,000 of a 50,000-line, 3,538,890-byte `large.js` |
| Closed chat | close the long chat's tab, wait 75 s (past the 60 s composer handle window) |
| Restart | quit, read the persisted application storage, relaunch the same profile |

## What is measured

All renderer figures come from the workbench page through the Chrome DevTools
Protocol and an in-page probe (`desktop/responsiveness-measure.mjs`):

| Metric | Definition |
| --- | --- |
| Frame gaps | `requestAnimationFrame` deltas during the phase; p50/p95/max and frames over 50/100 ms |
| Long tasks | `longtask` entries; long animation frames with forced style/layout time |
| Input-to-paint latency | keydown `timeStamp` to the task after the next frame (rAF + MessageChannel), per key; Event Timing entries ≥ 16 ms are kept separately |
| Mounted rows / nodes | rows (`.virtualized-composer-messages-row`, `[data-message-index]`) and elements in the visible transcript scroller; all attached elements |
| Rows mutated | distinct transcript rows touched by MutationObserver records during the stream |
| Heap / live DOM | `Runtime.getHeapUsage` and `Memory.getDOMCounters` after a forced GC |
| Filesystem work | `/proc/<pid>/io` deltas (`syscw`, `wchar`, `write_bytes`) summed over the owned process family (20/20 processes readable), by role |
| Persisted storage | size of the application-user record in `state.vscdb`, read after the host exits |

`wchar` counts every `write()` including pipes and sockets, so it is an upper
bound on file writes; `write_bytes` counts pages the process dirtied.
`--trace-storage` adds non-pausing Debugger logpoints that count reactive
application-storage saves, storage items sent to the main process and
`cursorDiskKV` writes; `--profile=<phase>` records a renderer CPU profile. Both
perturb timings and are diagnostics only.

## Baseline and result

Baselines: `logs/responsiveness-dPm64f` and `logs/responsiveness-ED40At`
(commit `e4621369`, workbench `9779aebc…`). Results: `logs/responsiveness-Kz2TFM`
and the run of record `logs/responsiveness-y46mxf` (workbench `79158f4e…`, all
budgets pass, both owned host exits 0). Host load average 3–8 and 10–16 GiB
available during these four runs; earlier exploratory runs at load 25–35 had
2–10× worse timings and are not used.

### Observed, before → after

| Metric | Before (`ED40At`) | After (`Kz2TFM` / `y46mxf`) |
| --- | ---: | ---: |
| Persisted application-user record | **13,720,090 B** | **1,268,638 B** / 1,268,638 B |
| of which the published model catalog | 12,451,425 B | 0 / 0 |
| Storage item sent to the main process per application save (trace) | 13,700,088 B | 1,268,638 B |
| Catalog change checks for the window's own saves, 20-turn trace run | 31 of 31 saves | 0 of 32 saves |
| Turn phase: long tasks / total / max | 3 / 268 / 125 ms | 2 / 135 / 76 ms; 2 / 159 / 83 ms |
| Turn phase: latency p50 / p95 / max | 17.2 / 73.3 / 113.8 ms | 17.9 / 46.6 / 89.9; 19.3 / 73.4 / 117.8 ms |
| Renderer heap, long chat open (turn 110) | 229.1 MiB | 194.0 / 193.9 MiB |
| Renderer heap, picker over 10,001 models | 201.7 MiB | 183.5 / 183.4 MiB |
| Restart: selected model restored / models in picker | yes / 10,001 | yes / 10,001 (both) |

Unchanged by this work (all runs): 40 picker rows and 101 menu elements; 19
mounted transcript rows and 1,061 transcript elements from turn 10 to 110; 12
rows mutated during the 2,000-chunk stream; 39,199 live DOM nodes after each of
three scroll cycles.

### All phases (run of record and both baselines)

| Phase / metric | `dPm64f` | `ED40At` | `y46mxf` |
| --- | ---: | ---: | ---: |
| Picker open | 234 ms | 148 ms | 184 ms |
| Picker typing latency p50 / p95 | 55.3 / 125.7 | 40.3 / 75.5 | 53.2 / 88.9 ms |
| Picker long tasks total | 588 ms | 211 ms | 429 ms |
| Idle typing latency p50 / p95 | 13.9 / 18.8 | 14.0 / 19.5 | 13.7 / 19.0 ms |
| Idle typing frame p95 / long tasks | 16.8 ms / 0 | 16.7 ms / 0 | 16.7 ms / 0 |
| Stream first chunk painted after submit | 2,191 ms | 1,108 ms | 1,098 ms |
| Stream last chunk sent → painted | 429 ms | 543 ms | 300 ms |
| Stream frame p50 / p95 / max | 16.7 / 16.8 / 100.1 | 16.7 / 33.3 / 100 | 16.7 / 33.3 / 66.7 ms |
| Stream long tasks / total | 3 / 273 ms | 3 / 259 ms | 2 / 139 ms |
| Typing during stream p50 / p95 / max | 19.1 / 32.8 / 83.8 | 19.1 / 34.9 / 79.0 | 19.8 / 35.1 / 70.2 ms |
| Stream mutation records / rows mutated | 3,587 / 12 | 3,624 / 12 | 3,552 / 12 |
| After stream: mounted rows / transcript elements | 11 / 10,465 | 11 / 10,465 | 11 / 10,465 |
| Stream filesystem `wchar` / `write_bytes` | 1.86 / 1.11 MB | 1.90 / 1.14 MB | 1.84 / 1.09 MB |
| Scroll frame p95 / longest task | 33.4 / 201 ms | 33.4 / 242 ms | 49.9 / 245 ms |
| Scroll forced style and layout | 948 ms | 1,047 ms | 1,285 ms |
| Mounted rows at the top of the chat | 19 | 19 | 19 |
| Small-file typing latency p50 / p95 | 21.8 / 98.0 | 21.6 / 241.0 | 25.2 / 142.2 ms |
| 50,000-line file open | 437 ms | 450 ms | 512 ms |
| 50,000-line typing latency p50 / p95 | 21.4 / 214.1 | 23.5 / 290.7 | 23.7 / 177.6 ms |
| 50,000-line typing frame p95 / long tasks total | 16.8 / 60 ms | 33.3 / 50 ms | 33.3 / 0 ms |
| Closed chat: marker strings open → after 75 s | 650 → 642 | 661 → 647 | 660 → 647 |
| Closed chat: live DOM nodes open → after | 40,586 → 4,168 | 22,918 → 3,879 | 22,918 → 3,879 |
| Closed chat: heap open → after | 277.7 → 257.4 | 276.5 → 257.5 | 250.7 → 232.0 MiB |

`dPm64f` predates the turn, persisted and restart phases. Its live-node count
before close includes the extra scroll cycles that later runs perform after the
heap sample.

## Waste found and fixed

**The published model catalog was rewritten with every application setting
save (fixed).** Observed: with 10,001 saved models the reactive
application-user record was 13.7 MB, 12.45 MB of it `availableDefaultModels2`.
OpenVision's provider settings publish that list from their own
`openvision.model-providers.v1` record (570 KB), and in local mode the picker
computes its catalog from that record, so the copy is derived data. The
recovered service saved the whole record on each setting change and each
storage flush: one `turn` phase sent a 13,700,088-byte storage item to the main
process, and a 20-turn run made 31 such saves. A sampled CPU profile
(exploratory run `Jl3QXz`, 5 turns) attributed 67 ms to one save's
serialization. The recovered service already has an owner-designed mode for
this, the `cursor.modelCatalogOwnKey.gateEnabled` gate: the catalog is left out
of the persisted record, kept in memory across external storage changes and set
without a save. `desktop/application-storage-customization.mjs` turns that mode
on in local mode only; hosted mode keeps reading the recovered gate. The
persisted record dropped to 1,268,638 bytes, the renderer heap by 18–35 MiB, and
the catalog and selected model came back after restart in both result runs.

**Each own save serialized the catalog twice more (fixed).** Every save stores a
fresh `SPECIAL_KEY_id`, so it fires the service's own change handler, which
serialized both catalog fields before and after `updatePersistentStorage`.
For the window's own save the recovered `getOldValue` recognizes the id and
throws "this is the same object that we just saved", the error is caught, and
both strings are equal, so the work is discarded (about 100 ms in the same
profile). The customization returns early under exactly that recovered
condition. The 20-turn trace went from 31 catalog change checks for 31 saves to
0 for 32; saves from other windows keep the recovered path.

Both changes are idempotent marker-guarded patches of the desktop and glass
workbench variants, with drift guards on the gate key and on the own-save,
exclusion and in-memory contracts; the build keeps the existing first backup
in `backups/bundle-customizations`. Tests execute the recovered and patched
handler and gate code.

## Measured but not changed

- **Stream batching works.** 2,000 deltas produced about 3,600 mutation records
  touching 12 rows (the streaming reply and its neighbours) out of 222 messages;
  frame p50 stayed 16.7 ms and typing p95 under 36 ms. The recovered
  `textDeltaCoalescer` flushes once per frame (observed in code, inferred as the
  cause). No per-chunk re-render of the transcript was observed.
- **Transcript rows are bounded.** The recovered React virtual plane kept 19
  mounted rows and 1,061 elements from turn 10 to turn 110.
- **Streamed reply DOM.** After the stream the reply alone held about 9,400
  elements (10,465 in the scroller), and live DOM rose from 21,427 to 39,199
  after the first scroll cycle, then stayed at 39,199 for three more cycles, and
  fell to about 3,900 when the chat closed. This is bounded per open chat
  (observed); the word-level stream animation as the source is an inference and
  was not changed.
- **Scroll layout.** Scrolling 220 messages spends 1.0–1.3 s in forced style and
  layout, with single tasks up to 245 ms. The owner is the recovered virtualizer's
  row measurement (inferred from the profile); changing it is not low risk.
- **Large-file typing.** p50 latency equals the small file (21–25 ms); the p95
  tail (178–291 ms) varies between runs as much as the small file's (98–241 ms).
  The built-in TypeScript server wrote about 3.9 MB to its pipes while typing in
  the large file. No OpenVision customization appeared in the renderer profile.
- **Closed-chat history (OV-1001 finding).** Before 19 October, 642–647 of
  650–661 marker strings stayed in the renderer 75 s after the chat closed,
  while its DOM was released. The owners and the fixes (19 and 20 October)
  are described in
  [the closed-chat release](agent-context-linux.md#closed-chat-release-19-october-2026):
  with them, the full dataset keeps 74 of 670 marker strings and 3 of 310
  reply strings, all bounded prompt-text owners (`logs/responsiveness-9WablJ`,
  `-qLP3nu`, `-diY3Wa`), and the chat reopens from Chat History with its last
  reply.
- **Remaining persisted lists.** Three published model-name lists (1,260,240
  bytes together) are still saved with every application save; their consumers
  were not audited.
- **Turn latency.** Turn round trips were 1.5–3.9 s in the two baselines (load
  3–7) and up to 6.8 s in exploratory runs at load 34, flat across turns 10–110. The first
  chunk took 1.1 s after submit. Neither was attributed.

## Linux follow-up: stream delivery, edit sync, scroll (19 October 2026)

This section covers a second Linux x64 host. It is a cloud container with 4
CPUs and 15 GB of RAM, running Xvfb at 1920×1080 with **no GPU**, so Chromium
renders in software. Runs were serialized, under a non-root user, with
`dbus-run-session` and a plaintext gnome-keyring as the Secret Service. The
model fixture is the same controlled loopback fixture as above. The run list
and commands are in the
[worker report](../verification/worker-reports/responsiveness.md).

### `stream.lastChunkToPaintMs`

The smoke failure `xXcKIA` (1,789 ms) had three causes:

1. **Measurement (fixed in the verifier).**
   - Old behaviour: the "stream done" text was polled only after the 56 typed
     keys. With 500 chunks the stream ends before the typing does, so smoke
     figures included leftover typing time.
   - New behaviour: once the fixture sends the last chunk, the page checks the
     streaming reply every frame, concurrently with the typing. The time is
     taken one frame after the text is found. Both clocks are wall-clock based
     (`performance.timeOrigin + now()`) on the same host.
   - New fields: `lastChunkToFoundMs`, `lastChunkAfterTypingMs`, `typingMs`,
     `submitToRequestMs` and `firstChunkSentToSeenMs`.
2. **Delivery (fixed in the product).** The recovered Agent loop
   (`consumeStream` in `cursor-agent-exec`) awaits renderer round trips for
   every text delta: `sendUpdate(textDelta)`, `sendUpdate(tokenDelta)` and
   `recordText`. Delivery therefore runs at the renderer main thread's pace.
   - Observed with the `--trace-stream` logpoints on the renderer's
     `textDeltaCoalescer`: 500 deltas sent in 2.2 s arrived at 25–50 per
     second, with a median inter-arrival of 25 ms at 51 fps. The coalescer
     flushed each one promptly.
   - Observed with strace of the extension host: the SSE response was read in
     about 3 s; writes to the renderer IPC socket ran for about 20 s.
   - The rate did not depend on transcript size: 41 deltas/s with 2 turns and
     35/s with 30.
   - Fix: `desktop/agent-stream-delivery-customization.mjs` reads the model
     stream as it arrives and merges text deltas that are already waiting, so
     one round trip carries the backlog. Order, text, token counts and other
     events are unchanged. When the renderer keeps up, nothing is waiting and
     each delta goes alone.
3. **Fixture (fixed in the verifier).** The fixture project lives under
   `logs/` inside the OpenVision checkout. The Agent's per-turn
   `git status --short --branch` found that checkout and walked it. The launch
   now sets `GIT_CEILING_DIRECTORIES` to the run directory.
   - Submit → model request: 6,477 → 427 ms.
   - Transcript turns: 7.4 → 1.25 s.
   - About 100 MB of extension-host reads per stream disappeared.

Last chunk sent → painted (ms). The budget of 1,000 ms is unchanged.

| Build | Smoke (500 chunks) | Full (2,000 chunks) |
| --- | --- | --- |
| Before (`R0Nvs0`, `oJF6cs`; full `0IZqo5`) | 12,167; 12,219 | **44,960** |
| After, stream-only runs (10 smoke, 10 full) | **650–847** | **448–763** |
| After, all-phase runs (3 smoke, 3 full) | 437–542 | 478–543 |

### Incremental edits in the 50,000-line file

Default pending owner decision: "incremental" means editor-model and
language-server synchronisation, not Agent multi-edit application.

Each editor phase now records, per typed key and by process role:

- renderer writes;
- extension-host reads and writes;
- TypeScript server reads and writes;
- CPU per role, over all threads.

The large-file phase also records ratios to the 40-line control file
(`*Ratio`) and the per-key edit payload as a share of the file
(`syncBytesPerKeyFileShare`).

Baselines (`dQjcNM`, `o5bjuB`, `vCBiFW`; 165 keys each):

| Per typed key | 40-line file | 50,000-line file (3,538,890 B) |
| --- | ---: | ---: |
| Renderer writes (edits to the extension host, upper bound) | 142–924 B | 169–173 B |
| TypeScript server input (edits) | 814–997 B | 893–1,348 B |
| Large/small ratio, TypeScript server input | | 0.90–1.66 |
| Edit payload as a share of the file | | 0.00025–0.00038 |
| TypeScript server output (replies) | 2.1–2.4 KB | **68–143 KB** |
| CPU: renderer / extension host / TypeScript server | 32–33 / 12.5–14.2 / 6.1–6.8 ms | 55–61 / 52–60 / 41–72 ms |

What these show:

- **Edits are incremental (observed).** What reaches the extension host and
  the TypeScript server per key is the same in both files, about 1 KB.
- **Replies are not.** strace of the semantic server
  (`logs/strace-ts.txt`, a diagnostic run) attributes the large replies to
  `documentHighlights`: one response was 4,077,984 bytes, listing a keyword's
  occurrence on all 50,000 lines (every fixture line starts with
  `export const`).
  - This is occurrence highlighting after cursor moves, from the built-in
    TypeScript extension. It is not edit sync and not re-tokenization.
  - It explains the 4× extension-host and 7–12× TypeScript-server CPU per key,
    and the large-file long tasks (532–1,143 ms against 0–152 ms).
  - It was not changed. Capping occurrence highlighting in large files is
    listed as an owner decision.

New `editorLarge` budgets were set from these baselines:

| Budget | Value |
| --- | ---: |
| `rendererWritePerKey` | ≤ 1,000 B |
| `tsserverReadPerKey` | ≤ 2,700 B (worst baseline ×2) |
| `syncBytesPerKeyFileShare` | ≤ 0.001 (full only) |
| `tsserverReadPerKeyRatio` | ≤ 2.5 (worst ×1.5) |

### Scroll frame p95

Each phase now records `frameRefreshHistogram`: frame gaps counted in whole
60 Hz refresh intervals (1, 2, 3, 4, and 5 or more).

Five full-size runs (`HKUSkP`, `zQbbWT`, `W9CeOx`, `Hp2Pzz`, `umLLPW`): p95
was 100, 100, 116.7, 100 and 100 ms.

- **Histograms** (frames of 1 / 2 / 3 / 4 / 5 or more refresh intervals):
  - `[305,16,2,18,55]`
  - `[302,20,1,12,61]`
  - `[306,15,2,7,66]`
  - `[311,14,0,20,52]`
  - `[307,17,1,20,51]`
- **Longest task:** 136–514 ms.
- **Smoke (`m69jLf`, `hTqwTq`, `J0q3KU`):** p95 66.6–83.2 ms, with 14–19 frames
  of 5 or more refreshes.

What this shows:

- On this host the scroll cost is real, not noise. About 15% of the frames
  are 5 or more refresh intervals long, so the p95 lands on them.
- The 49.9 ms in `y46mxf` (GPU host) was a single 3-refresh frame at the 95th
  percentile; 33.4 ms and 49.9 ms differ by one refresh.
- Inference: the long frames are software raster and forced layout of the
  virtualized transcript under scrolling. The row-measurement owner noted
  above was not changed.

### Software rendering and the frame budgets

The following budgets fail on this host in every full all-phase run, or in
most of them:

- `stream.longTaskTotalMs` and `stream.latencyP95Ms` (also some
  `framesOver100Ms`);
- `scroll.frameP95Ms` and `scroll.longTaskMaxMs`;
- `turn.longTaskTotalMs` and `turn.latencyP95Ms`;
- `editorLarge.openMs` and `editorLarge.longTaskTotalMs`;
- `picker.latencyP95Ms` (2 of 3).

They pass or nearly pass on the GPU-accelerated reference host. The pre-fix
stream runs here failed long tasks and typing too. The closed-chat string
budgets (OV-1001's phase) fail at 581/224 in all three full runs and are left
to that story.

**Budgets were not changed.** If software-rendered Linux hosts should be
verifiable, the owner could adopt a separate budget set derived the same way
as the originals: worst observed value on this host after the fixes ×1.5,
rounded up.

| Budget | Reference (GPU host) | Worst here (full) | Proposed software-rendering budget |
| --- | ---: | ---: | ---: |
| `picker.latencyP95Ms` | 190 | 221.9 | 340 |
| `stream.frameP95Ms` | 50 | 66.7 | 100 |
| `stream.framesOver100Ms` | 3 | 9 | 14 |
| `stream.longTaskTotalMs` | 600 | 2,542 | 3,900 |
| `stream.latencyP95Ms` | 60 | 145.6 | 220 |
| `scroll.frameP95Ms` | 50 | 116.7 | 180 |
| `scroll.longTaskMaxMs` | 400 | 514 | 780 |
| `turn.longTaskTotalMs` | 400 | 581 | 880 |
| `turn.latencyP95Ms` | 110 | 271.2 | 410 |
| `editorLarge.openMs` | 900 | 1,644 | 2,500 |
| `editorLarge.longTaskTotalMs` | 300 | 1,143 | 1,750 |

Every other budget, including the new edit-sync budgets and
`stream.lastChunkToPaintMs`, passes here unchanged.

## Budgets

`desktop/responsiveness-budgets.json` holds the budgets and
`npm run verify:responsiveness` fails when any is exceeded or unmeasured. They
were set from the two baselines: timing budgets are the worse baseline value
×1.5, rounded up; structural budgets are the baseline plus a small margin. The
persisted-record budget was set after the fix; both baselines exceed it.

| Phase | Budgets |
| --- | --- |
| Picker | open ≤ 600 ms; ≤ 40 rows; ≤ 120 elements; typing p95 ≤ 190 ms |
| Idle typing | frame p95 ≤ 33.4 ms; ≤ 2 long tasks; latency p95 ≤ 50 ms; ≤ 24 mounted rows; ≤ 1,300 transcript elements |
| Stream | ≥ 2,000 chunks; last chunk painted ≤ 1,000 ms; frame p95 ≤ 50 ms; ≤ 3 frames over 100 ms; long tasks ≤ 600 ms; typing p95 ≤ 60 ms; ≤ 16 rows mutated; ≤ 16 mounted rows; ≤ 12,500 transcript elements; heap ≤ 330 MiB; `wchar` ≤ 3 MB |
| Scroll | frame p95 ≤ 50 ms; longest task ≤ 400 ms; ≤ 24 rows and ≤ 1,300 elements at the top |
| Turn | reply painted ≤ 3,500 ms; long tasks ≤ 400 ms; typing p95 ≤ 110 ms |
| Editor | small-file long tasks ≤ 300 ms, p95 ≤ 360 ms; 50,000-line open ≤ 900 ms, frame p95 ≤ 50 ms, long tasks ≤ 300 ms, p95 ≤ 450 ms; per typed key ≤ 1,000 B renderer writes and ≤ 2,700 B TypeScript server input, ≤ 0.001 of the file (full only), TypeScript server input ≤ 2.5× the control file |
| Closed chat | ≤ 5,000 live DOM nodes; ≤ 90 marker strings and ≤ 5 reply strings after 75 s; reopens from Chat History with its last reply; heap ≤ 330 MiB |
| Persisted | application-user record ≤ 2,000,000 B; catalog 0 B |
| Restart | selected model restored; ≥ 10,001 models; launch to selected model ≤ 31,000 ms |

`ED40At` fails the two persisted budgets; `y46mxf` and `Kz2TFM` pass all.
Timing budgets carry host load. The closed-chat string budgets (20 October)
are absolute: ≤ 5 reply strings, and ≤ 90 marker occurrences held only by
bounded prompt-text owners (measured 74 and 3 in three `--full` runs).

## Commands

```sh
npm ci --prefix tooling
export OPENVISION_RECOVERY_DIR=<prepared 3.21.13 input>
npm run build:desktop
npm run verify:responsiveness              # smoke: every phase, 30 turns, 500 chunks, 10,000 lines, 2,000 models
npm run verify:responsiveness -- --full    # the datasets the budgets were set on (logs/responsiveness-y46mxf)
npm run verify:responsiveness -- --phases=editorSmall,editorLarge   # repeat one flaky phase only
node desktop/verify-responsiveness.mjs --full --no-budgets   # record a baseline
# diagnostics: --turns=N, --chunks=N, --lines=N, --bursts=N, --trace-storage, --trace-stream, --profile=stream,editorLarge, --dump-dom, --save-closed-snapshot
npm run verify:model-menu:large            # selector fixed, see below
npm run test:desktop                       # 184/184
npm run test:agent-review                  # 95/95
npm run test:build-integrity               # 26/26
npm run check:desktop && npm run docs:check
```

Smoke mode checks every budget except the two dataset-sized minimums in
`fullOnly` (replaced by exact dataset checks), but its datasets are smaller, so
only `--full` establishes the full-dataset budgets. Editor latency now covers
typing only, with Go to Line outside the window, and is the median of three burst
p95 values. Cause, runs and wall times are in the
[verifier stability report](../verification/verifier-stability-linux.md#5-responsiveness-verifyresponsiveness).

`verify:model-menu:large` read the failed-discovery status as a direct child of
`.openvision-model-settings`; since `658b8f4d1` (15 October) it sits inside the
API section. The selector is now `.openvision-api-settings > .openvision-model-status`.

## Status

OV-1002 stays **Partial**. Passed here on Linux x64 with a controlled fixture:
fixed datasets for a 220-message transcript with code blocks, a 2,000-chunk
stream with concurrent typing, a 50,000-line file and a 10,001-model picker;
native measurement of frames, long tasks, input latency, mounted rows, DOM,
heap and process-family filesystem work; numeric budgets with a verifier; one
measured waste fixed at its owner.

The 19 October follow-up added three fixes, all on the no-GPU container:

- last-chunk-to-paint is now measured concurrently with typing and passes in
  every run;
- per-delta Agent delivery is fixed at its owner;
- the fixture's git walk is fixed.

It also proved, with budgets, that large-file edits are synchronised
incrementally. It recorded that many timing budgets fail under software
rendering, and proposed derived budgets above as an owner decision.

Open: Windows and macOS runs, live provider
streams, a rerun of every timing budget on a GPU-accelerated Linux host (or an owner
decision on software-rendering budgets), occurrence highlighting that is O(file) in
large files, scroll layout cost, the
remaining persisted model-name lists, budgets on an unloaded host, and editor
work with language features beyond the built-in TypeScript server. This is
**source-build evidence**; the preview.7 portable package does not contain
these changes.
