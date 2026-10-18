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
- **Closed-chat history (OV-1001 finding).** 642–647 of 650–661 marker strings
  stay in the renderer 75 s after the chat closes, while its DOM is released.
  The retainers were not identified in this work, so no low-risk fix was
  available; it stays open under OV-1003.
- **Remaining persisted lists.** Three published model-name lists (1,260,240
  bytes together) are still saved with every application save; their consumers
  were not audited.
- **Turn latency.** Turn round trips were 1.5–3.9 s in the two baselines (load
  3–7) and up to 6.8 s in exploratory runs at load 34, flat across turns 10–110. The first
  chunk took 1.1 s after submit. Neither was attributed.

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
| Editor | small-file long tasks ≤ 300 ms, p95 ≤ 360 ms; 50,000-line open ≤ 900 ms, frame p95 ≤ 50 ms, long tasks ≤ 300 ms, p95 ≤ 450 ms |
| Closed chat | ≤ 5,000 live DOM nodes; ≤ 700 marker strings (non-regression); heap ≤ 330 MiB |
| Persisted | application-user record ≤ 2,000,000 B; catalog 0 B |
| Restart | selected model restored; ≥ 10,001 models; launch to selected model ≤ 31,000 ms |

`ED40At` fails the two persisted budgets; `y46mxf` and `Kz2TFM` pass all.
Timing budgets carry host load; the closed-chat string budget records the
current retention and does not establish release.

## Commands

```sh
npm ci --prefix tooling
export OPENVISION_RECOVERY_DIR=<prepared 3.21.13 input>
npm run build:desktop
npm run verify:responsiveness              # logs/responsiveness-y46mxf: all budgets pass
node desktop/verify-responsiveness.mjs --no-budgets   # record a baseline
# diagnostics: --turns=N, --chunks=N, --trace-storage, --profile=stream,editorLarge, --dump-dom, --save-closed-snapshot
npm run verify:model-menu:large            # logs/large-model-menu-TO3vVs: fails, see below
npm run test:desktop                       # 184/184
npm run test:agent-review                  # 95/95
npm run test:build-integrity               # 26/26
npm run check:desktop && npm run docs:check
```

`verify:model-menu:large` passed its picker and settings checks after this
change: 40 rows, opened in 215 ms, keyboard paging, tail-model selection,
reopening on the selected page, and 80 settings rows. It then failed reading the
failed-discovery status. The app showed "Connection failed. Check the API base
URL and network.", but the verifier looks for the status as a direct child of
`.openvision-model-settings`, and since `658b8f4d1` (15 October) the status sits
inside the API section. The selector is stale and does not involve this change
(observed in the DOM layout code). It is left to the verifier owner.

## Status

OV-1002 stays **Partial**. Passed here on Linux x64 with a controlled fixture:
fixed datasets for a 220-message transcript with code blocks, a 2,000-chunk
stream with concurrent typing, a 50,000-line file and a 10,001-model picker;
native measurement of frames, long tasks, input latency, mounted rows, DOM,
heap and process-family filesystem work; numeric budgets with a verifier; one
measured waste fixed at its owner. Open: Windows and macOS runs, live provider
streams, scroll layout cost, closed-chat renderer retention (OV-1003), the
remaining persisted model-name lists, budgets on an unloaded host, and editor
work with language features beyond the built-in TypeScript server. This is
**source-build evidence**; the preview.7 portable package does not contain
these changes.
