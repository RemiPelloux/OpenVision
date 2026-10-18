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
- These are Linux x64 source-build results. Windows was not rerun after the
  undo fix. macOS and the packaged build were not run.
- Line-wise accept, split editors showing the same document, and IME
  composition remain unverified.
- OV-603 stays **Partial**: the platform matrix and the open items above are
  still required. OV-602 is unchanged: live quality and native live acceptance
  remain open. No story is promoted.
