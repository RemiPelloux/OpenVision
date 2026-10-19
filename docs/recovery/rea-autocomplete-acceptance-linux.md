# Autocomplete acceptance safety on Linux (OV-603)

Date: **17 October 2026**. **Linux x64 only**: Omarchy (Arch based), kernel
7.2.5, Hyprland on Wayland, AZERTY keyboard, Node 26.8.1 tooling. Input:
Cursor 3.21.13 runtime, built from source on parent `935771e4` plus this
change. Nothing was packaged; preview.7 is unchanged. Windows and macOS were
not run in this session.

Every native run used a disposable profile under `logs/` and a **controlled
local HTTP fixture**. Fixture replies are not live inference, and no paid
request was made. Suggestion quality (OV-602) is outside this report.

## Commands

```sh
export OPENVISION_RECOVERY_DIR=<read-only 3.21.13 recovery directory>
npm ci --prefix tooling
npm run build:desktop
npm run test:completion
npm run verify:completion                  # 13-case response-failure matrix
npm run verify:completion -- --editing     # partial accept and pending cancellation
npm run verify:completion -- --acceptance  # new cases below
npm run check:desktop && npm run test:build-integrity && npm run docs:check
```

`--acceptance` lives in `desktop/verify-completion-acceptance.mjs`.
`--cases=name,...` limits a diagnostic run to some cases; it is not used for
verification.

## Clause matrix

"Windows" means the earlier evidence in [custom autocomplete](rea-custom-autocomplete.md).
"Linux" cells are from this session's runs.

| Clause | Before this session | Linux result |
| --- | --- | --- |
| Single-line and multiline Unicode Tab accept, save and undo | Windows; Linux default run | Pass |
| 13-case rejected-response matrix | Windows; Linux | Pass |
| Partial word accept, Tab remainder, two-step undo | Windows only | Pass |
| Pending request canceled by typing, Escape or file switch | Windows only | Pass, within the 1,000 ms budget |
| Full Tab accept undoes as **one exact step** | Unverified: the check only looked for removed text | **Defect, fixed** |
| Redo after full-accept undo | Unverified | Pass |
| Edit earlier on the same line while a suggestion is visible | Unverified | Pass: suggestion discarded |
| Line inserted above a visible suggestion | Unverified | Pass: accepted on the shifted line |
| Visible suggestion, then Tab in another tab | Unverified | Pass: neither file receives the insertion |
| Visible suggestion, saved file then changed on disk | Unverified | Pass: suggestion cleared by the reload |
| Multiple cursors | Unverified | Pass: one request, inserted on one line only |
| CRLF document, Unicode before the cursor, multiline insertion | Unit tests only | Pass: CRLF kept, one-step undo |
| 20,000-character line | Unit tests only | Pass: context bounded to 8,000 units; exact accept, or no request and whitespace only |
| Fast typing: no duplicate or stale requests or suggestions | Unverified | Pass; counts below |

## Defect: full acceptance merged with the preceding typing

**Observed.** In `completion-verification-DbQLZ8` and `-eq7XlD`, the first
Ctrl+Z after accepting `left + right;` produced `const total =`. That undid the
insertion **and** the user's trigger space in one step. The earlier Windows check
asserted only that the inserted text was gone, which hid this. The multiline
check passed because it saves before accepting, and saving closes the undo
element.

**Owner.** The recovered `updateVisibleSuggestionText` (desktop and Glass) runs
`pushEditOperations(...)` and then `pushStackElement()`. It closes the undo
element after the edit but never before it, so the edit joins the open typing
element.

**Fix.** In `desktop/completion-undo.mjs`, `isolateFullCompletionUndo` adds
`(localMode && model.pushStackElement())` immediately before that edit, in local
mode only. It finds the method by AST, needs exactly one
`pushEditOperations` that is directly followed by `pushStackElement`, and stops
the build if the owner, the model parameter or the statement shape changes.
It is idempotent (marker `OpenVision full completion undo boundary v1`), runs
through the existing cached, backed-up workbench transform, and keeps the first
backups. Unit tests check boundary order, unchanged nonlocal behavior, drift
failures, and a single application to both recovered bundles.

**Result.** In the `-3wacgF` and repeat runs, one undo restores
`const total = ` exactly and redo restores the accepted text.

## Observations by case

- **Same-line edit.** The suggestion `value();` was visible for
  `const shifted = `. Typing `x` at the start of the line discarded it; Tab
  inserted only whitespace. The adapter replaces whole lines, so stale reuse
  would have dropped the `x`. It did not.
- **Line shift.** A newline inserted at the top moved the target line. The next
  native trigger sent two fresh requests. Tab produced `const moved = shift();`
  on the correct line, and the earlier lines stayed intact.
- **Wrong tab.** The suggestion was visible in `completion.js`. After switching
  to `other.js` with Quick Open, Tab inserted indentation only. After undo,
  `other.js` matched the original byte for byte, and `completion.js` kept
  exactly its typed text.
- **External change.** The ghost text survived Ctrl+S. A disk write then
  reloaded the editor and the ghost text disappeared. Tab did not apply
  `fromDisk();`, and the external content was preserved apart from whitespace.
- **Multiple cursors.** `Add Cursors to Line Ends` plus one typed space sent one
  request. Tab inserted `multi();` on one line (`const a = multi();`) and a space
  on the other. There was no duplication or misplacement.
- **CRLF and Unicode.** `crlf.js` was opened from disk with CRLF endings and
  `"😀 café"` above the cursor. The request prefix contained CRLF. The multiline
  insertion `call("日本語",\n  "😀");` was saved with CRLF only; one undo
  restored the exact bytes.
- **Long line (20,030 characters).** The native request arrived late or not at
  all. In `9PVwTo` it came 14.7 s after the trigger. Its prefix was capped at
  8,000 UTF-16 units (an 8,411-byte request body), and Tab reconstructed the
  whole line exactly. In `DNiMVt` it came after the 10 s wait used then. In
  `dXBT6F` and `3wacgF`, no request arrived within 11.5 s, and Tab inserted only
  whitespace. Every outcome was safe. Saving that line sometimes waited on
  "Running Code Actions and Formatters" for 2.3 to 11.9 s. That delay is on the
  save path, not in autocomplete, and is not investigated here.
  **Inferred:** the trigger latency for long lines is native work before
  dispatch. It was not traced.

## Request and byte measurements

Workload: select all, type `const burstN =`, then insert ` compute` one
character at a time (8 keystrokes) at a fixed interval. The fixture answers every
request after 250 ms. A request for the final text gets `Value();`; any other
request gets `STALE();`. Then Tab and save. Bytes are the HTTP request bodies
the fixture received and the JSON bodies it sent.

| Interval | Run | Requests | Stale requests | Request bytes | Response bytes | Last key → final request | Last key → visible |
| ---: | --- | ---: | ---: | ---: | ---: | ---: | ---: |
| 30 ms | before fix (`dXBT6F`) | 1 | 0 | 431 | 90 | ≈742 ms* | ≈1,329 ms* |
| 30 ms | after fix (`3wacgF`) | 1 | 0 | 431 | 90 | 574 ms | 1,332 ms |
| 30 ms | after fix (`9PVwTo`) | 1 | 0 | 431 | 90 | 401 ms | 818 ms |
| 150 ms | before fix | 1 | 0 | 432 | 90 | ≈401 ms* | ≈942 ms* |
| 150 ms | after fix (`3wacgF` / `9PVwTo`) | 1 | 0 | 432 | 90 | 400 / 400 ms | 946 / 940 ms |
| 600 ms | before fix | 8 | 7 | 3,428 | 720 | ≈400 ms* | ≈681 ms* |
| 600 ms | after fix (`3wacgF` / `9PVwTo`) | 8 | 7 | 3,428 | 720 | 398 / 399 ms | 691 / 684 ms |

\* The before-fix harness took the timestamp after the trailing interval wait. The
values shown add that interval back; the raw values are in the run's
`result.json`.

**Observed.** Under the 400 ms debounce, a burst sends exactly one request, for
the final text. Pauses longer than the debounce send one request per pause. Each
of those completed before the next keystroke, so none was aborted. A `STALE`
suggestion was never visible at the end of the burst, and Tab accepted only the
final completion. Request and response bytes are identical before and after the
fix, because it changes undo grouping only.

**Inferred.** Seven of eight requests at 600 ms intervals are the cost of the
configured debounce at that typing speed. They are not duplicates. Only a longer
debounce or an adaptive one would avoid them, and either would delay
suggestions. No change is made here. CPU time, peak process-family memory and
tokens were not measured, and the fixture has no model latency.

## Runs

| Run | Mode | Result |
| --- | --- | --- |
| `sQ5NAU` | `--editing`, before fix | Pass; partial undo 2 steps; cancellation typing/Escape/switch 406/2/54 ms |
| `HuA47M` | `--acceptance` | Fail before the new cases: the multiline ghost text was visible, but Tab inserted nothing (see open items) |
| `DbQLZ8`, `eq7XlD` | `--acceptance` | Fail: full-accept undo defect |
| `ddejfA`, `xcXT2p`, `dXBT6F` | `--acceptance --cases=…`, before fix | Diagnostic; long-line save wait fixed in the harness; `dXBT6F` pass |
| `3wacgF` | `--acceptance`, after fix | Pass; host exit 0; no renderer errors |
| `vQC6Hq` | `--editing`, after fix | Pass; partial undo still 2 steps; cancellation 408/3/66 ms |
| `nsKK8d` | default, after fix | Pass; 13-case matrix; host exit 0 |
| `wL4y5i` | default, after fix | Fail in the harness: the final save had not reached disk after the fixed 500 ms wait (the editor held the accepted text). The read now polls for up to 10 s |
| `DNiMVt` | `--acceptance`, after fix | Pass |
| `szRqPF` | default, final harness | Pass; 13-case matrix; host exit 0 |
| `9PVwTo` | `--acceptance`, final harness | Pass; all cases; host exit 0; no renderer errors |

## Open items

- **Intermittent multiline Tab (resolved 18 October).** Tab accepted; the harness read the file before the asynchronous accept and the save landed, see [verifier stability](../verification/verifier-stability-linux.md#1-completion-acceptance).
- Line-wise accept, split editors and IME composition: closed on Linux on
  19 October, see below.
- Windows was not rerun after the undo fix, the accept-race fix or the IME fix.
  macOS and the packaged build were not run. These are platform stories.

## 19 October: accept race, split editors, IME, line-wise accept, budgets

Date: **19 October 2026**. **Linux x64 only**: a cloud container with 4 CPUs,
15 GB RAM, Xvfb at 1920×1080, dbus and gnome-keyring, Node 24.18.0 tooling.
Input: Cursor 3.21.13, prepared from the pinned AppImage and built from source
on parent `b4f52a56` plus this change. Every response came from the controlled
local HTTP fixture; no live inference. Windows and macOS were not run.

### Defect: a keystroke during the asynchronous accept corrupted the line

**Owner (observed in the recovered workbench).** `acceptSuggestion` saves the
current range text into the suggestion, then `makeChangesOnAcceptCppSuggestion`
awaits `this._diffingService.wordDiff(...)` (a round trip to the
`cursor-always-local` extension host). After the await it checks only the abort
flag, then applies edits whose positions were computed from the saved text. Word
accept (`makeEditsForNextWordAccept`) takes the same path.

**Reproduction.** The natural window is a few milliseconds. The harness widens it
with a controlled fixture: a DevTools conditional breakpoint on the first
statement of the accept owner wraps the registered word-diff provider so that
each diff is held for 1,500 ms. The condition always returns false, so nothing
pauses, and the wrapper records when each diff started and was released. Each
case asserts that the keystroke landed inside that held window. Before the fix
(`eNwtoO`, unmodified product):

| Case | Keystroke | Saved | Verdict |
| --- | --- | --- | --- |
| Full Tab accept of `raceValue();` | Home, `y` | `yconst raced =raceValue(); ` | **Corrupted**: insertion placed inside the user's text |
| Full Tab accept of `nearValue();` | `z` at the insertion point | `const nearby = nearValue();z` | Correct |
| Word accept of `alpha + beta;` | Home, `q` | `qonst partly = alpha` | **Corrupted**: the user's `c` was deleted |

**Fix.** `desktop/completion-accept.mjs` (`guardCompletionAcceptVersion`) records
`model.getVersionId()` immediately before the word-diff declaration. Right after
the existing abort check, it returns the same `NotAccepted` value when, in local
mode, the model was disposed or its version changed. One owner covers full and
word accept in both the desktop and Glass bundles. The owner is found by AST: an
async class method `makeChangesOnAcceptCppSuggestion` with a `model` parameter,
exactly one `await this._diffingService.wordDiff(...)` declaration, followed by
an identifier-only abort check with a return. Any drift stops the build. The
transform is idempotent (marker `OpenVision completion accept version guard v1`).
Unit tests exercise full and word accept for both variants with the model
unchanged, changed or disposed during the diff, unchanged nonlocal behaviour,
drift failures, and a single application to the recovered bundles.

**Result.** In `4l1I6L`, `Zbb2nT` and `Yp9RJX` every raced accept is dropped and
the user's text is exact: `yconst raced = `, `const nearby = z`,
`qconst partly =`. Undo never shows any part of the suggestion. Because a
dropped accept adds no undo boundary, a `z` typed right after the trigger space
joins that typing element, so one undo gives `const nearby =`.
**Decision recorded:** a raced accept is dropped rather than recomputed; the
suggestion stays available to the next Tab.

### Defect: completions requested for uncommitted IME composition

**Observed** (`9Rc3kk`). With a suggestion visible, `Input.imeSetComposition`
(`に`, then `にほ`) followed by `Input.insertText` (`日本`) produced two fixture
requests whose prefixes ended with the uncommitted `に` and `にほ`. Composition
updates edit the model, and the local trigger treated them as typing.

**Fix.** The local preparation guard (`desktop/completion-preparation.mjs`, marker
now `v2`) also aborts while `editor.inComposition` is set, both before and after
its debounce. Unit tests cover composition before the debounce, composition
starting during it, and normal requests after a commit, for both variants.

**Result** (`yjFLFB`, `Zbb2nT`, `Yp9RJX`). After composition started, the only
request was for the committed `const ime = 日本`. The document was exact and the
ghost text was hidden during composition. With a request pending (2 s fixture
delay), composing `か` and committing `カ` aborted the pending upstream request.
The late `lateValue` response never became visible, and the document was exactly
`const imePending = カ`.

### Split editors on one document

`View: Split Editor Right` shows `completion.js` in two groups. The request was
made from the right group, and both views rendered the ghost text. Tab inserted
`both();` exactly once: the saved file and both views read `const split = both();`.
One undo restored `const split = ` in the file and in both views. A suggestion
shown in the right view, followed by Tab in the left view, accepted it once at
the document position (`const cross = other();`), and both views stayed
identical. The recovered model listener already ignores content events from a
non-active editor when several editors share a model.

### Line-wise accept

Not supported for Cursor Tab, and recorded as such. The recovered runtime has
`editor.action.inlineSuggest.acceptNextLine` only for VS Code inline suggestions
(precondition `inlineSuggestionVisible`). The Cursor Tab accept owner has only
full and next-word paths. Natively, with a two-line Cursor Tab suggestion
visible, the command palette offered no "Accept Next Line" command, and the
document was unchanged.

### Long-line trigger: traced, harness fixed, budgeted

**Traced.** The earlier long-line case typed the 20,030-character line with one
`insertText`. Stack samples taken with `Debugger.pause` while the renderer was
busy all began in the editor's `type` command. That command applies typed text
one character at a time (for auto-closing interceptors), so the line became
20,030 model edits. Each edit ran the Cursor Tab model listener:
`isCppEnabledForEditor` reads the whole model (`getValue`), and
`fireCppSuggestionDebouncedDiffHistory` awaits `formatDiffHistory`, a
`runCommand` round trip to the extension host. The trigger for the final text
queued behind all of them. That explains the 14.7 s request and the runs with no
request. On this host the renderer grew past Chromium's 8 GiB renderer data
limit and crashed (`WsP8Z2`, `2iGuCB`: `renderer process gone (reason: crashed,
code: 5)`; dmesg `VmData … exceed data ulimit`). The harness then waited with no
timeout.

**Changed (harness).** `long.js` is written before launch with the 20,030-character
line, and only the trigger space is typed. A suggestion this long is shown as a
line diff (the old line on a red background plus an inline addition), not as
`.cursor-ghost-text`, so the case waits for either form. Tab must clear it, the
saved line must be exact, and one undo must be exact. A renderer crash now fails
the running case instead of hanging the verifier.

**Product observation, not changed.** Each model edit costs Cursor Tab a full
document copy and an extension-host round trip, so an extension or command that
types a very long string pays that cost per character. Pasting is one edit.

**Result.** Trigger to request is 410–413 ms (the 400 ms debounce), with an
8,000-unit prefix (8,411-byte body), the line accepted exactly and one exact undo.
Peak renderer RSS across a full `--acceptance` run was 1.4 GB.

### Declared workload budgets

`desktop/completion-budgets.json` declares the workload and its budgets. The
workload is the burst cases at 30, 150 and 600 ms intervals (8 keystrokes, 250 ms
fixture reply) plus the long-line trigger. The baseline was measured on the
unmodified product before either fix (`zF98Oa`, `DdBVaK`). Rule: latency budget
= largest baseline value × 1.5, rounded up to 50 ms. Request counts and stale
suggestions are exact. `--acceptance` fails when any budgeted metric is over
budget or was not measured. A diagnostic `--cases` run checks only the cases it
ran.

| Metric | Baseline (`zF98Oa` / `DdBVaK`) | Budget | `Zbb2nT` | `Yp9RJX` |
| --- | --- | ---: | ---: | ---: |
| 30 ms: last key → request | 401 / 401 ms | 650 ms | 402 | 402 |
| 30 ms: request → visible | 441 / 439 ms | 700 ms | 444 | 429 |
| 150 ms: last key → request | 401 / 400 ms | 650 ms | 401 | 400 |
| 150 ms: request → visible | 583 / 553 ms | 900 ms | 570 | 559 |
| 600 ms: last key → request | 401 / 400 ms | 650 ms | 401 | 400 |
| 600 ms: request → visible | 291 / 296 ms | 450 ms | 288 | 290 |
| Requests per burst (30 / 150 / 600 ms) | 1 / 1 / 8 | 1 / 1 / 8 | 1 / 1 / 8 | 1 / 1 / 8 |
| Stale suggestion visible | 0 | 0 | 0 | 0 |
| Long line: trigger → request | 412 / 412 ms | 650 ms | 413 | 410 |

Request → visible includes the fixture's 250 ms reply delay. These are fixture
latencies with no model time; they bound client overhead, not live quality.

### 19 October runs

| Run | Mode | Result |
| --- | --- | --- |
| `WsP8Z2`, `2iGuCB` | `--acceptance`, main harness, unmodified product | Renderer crashed in the long-line case (8 GiB limit); verifier hung and was stopped |
| `ek060O`, `ZU0KmN` | `--cases=longLine,bursts`, harness development | Fail: the long-line suggestion is a line diff, not ghost text |
| `zF98Oa`, `DdBVaK` | `--cases=longLine,bursts`, unmodified product | Pass; budget baseline |
| `pPpaaO`, `W30glh` | `--cases=accept-race`, unmodified product | Harness development: the delay wrapper was installed on the service proxy and never called |
| `pv6QI1`, `eNwtoO` | `--cases=accept-race`, unmodified product | Fail: corruption reproduced (table above) |
| `4l1I6L` | `--cases=accept-race`, accept guard | Raced accepts dropped; failed only on a wrong undo expectation, corrected in the harness |
| `9Rc3kk` | `--cases=accept-race,split-editors,ime,line-accept`, accept guard | Race and split pass; IME fail: requests for uncommitted text |
| `yjFLFB` | `--cases=ime,line-accept`, both fixes | Pass |
| `Zbb2nT`, `Yp9RJX` | `--acceptance`, both fixes | Pass, first attempt each; host exit 0; no renderer errors; all budgets pass |
| `F7g48c`, `1eHLi8` | default (13-case matrix), both fixes | Pass, first attempt each |
| `Vwje5B`, `kIf8pP` | `--editing`, both fixes | Pass; partial undo 2 steps; cancellation typing/Escape/switch 412/3/73 and 409/4/51 ms |
| `8hxSDa` | `verify:inline-edit`, both fixes | Pass; host exits 0, 0 |
