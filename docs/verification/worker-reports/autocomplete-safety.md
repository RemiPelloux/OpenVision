# Worker report: autocomplete-safety (OV-603)

Date: 19 October 2026. Branch `ov/autocomplete-safety`, from `main` at `b4f52a56`.
Linux x64 only (cloud container: 4 CPUs, 15 GB RAM, Xvfb, dbus, gnome-keyring,
Node 24.18.0). Every completion response came from the controlled local HTTP
fixture; no live inference. Evidence: [autocomplete acceptance on Linux, 19 October section](../../recovery/rea-autocomplete-acceptance-linux.md#19-october-accept-race-split-editors-ime-line-wise-accept-budgets).

## Summary

- **Accept race (defect fixed).** A keystroke typed while Tab or word accept
  awaited its word diff corrupted the line. Reproduced natively:
  `yconst raced =raceValue(); ` and `qonst partly = alpha`. Fixed with a
  local-mode model-version guard at the accept owner, for both workbench
  variants. Raced accepts are now dropped and the user's text is kept exactly.
- **IME (defect fixed).** Completions were requested for uncommitted
  composition text. The local preparation guard now skips while the editor is
  composing.
- **Split editors** and **line-wise accept** are verified natively. Line-wise
  accept is not supported for Cursor Tab and is documented as unsupported.
- **Long-line trigger traced.** The 14.7 s delay and the missing requests came
  from the harness: one `insertText` of 20,030 characters became 20,030 single
  character edits, each of which ran Cursor Tab's listener. On this host the
  renderer also crashed at Chromium's 8 GiB limit. The case now opens the line
  from disk and types only the trigger; the trigger takes 410–413 ms.
- **Budgets.** `desktop/completion-budgets.json` declares the workload and its
  budgets, derived from a baseline measured before any change. The verifier
  fails when a budget is exceeded or unmeasured.

## Tasks

| Task | State | Notes |
| --- | --- | --- |
| 1. Keystroke during the async accept, `--cases=accept-race` | Done | Window widened by a DevTools conditional-breakpoint fixture that holds the word diff for 1,500 ms. Corruption reproduced, fixed and verified: full accept inside and near the range, word accept inside. |
| 2a. Split editors on the same document | Done | One insertion, consistent views, one exact undo; a Tab in the other view accepts once. |
| 2b. IME composition (CDP `Input.imeSetComposition` / `insertText`) | Done | Visible and pending suggestion cases. Defect fixed. |
| 2c. Line-wise accept | Done (unsupported) | Not exposed for Cursor Tab; documented and probed natively. |
| 3. Declared workload and budgets; long-line trace | Done | Baseline measured on the unmodified product; long-line cause traced and the harness fixed. |
| 4. Final reruns with run IDs | Done | All listed below, each passing on its first attempt. |

## Defects found and fixed

| Defect | Owner | Commit |
| --- | --- | --- |
| Tab/word accept applied edits computed before a concurrent keystroke | `makeChangesOnAcceptCppSuggestion` in both workbenches → `desktop/completion-accept.mjs` | `0b55a80e` |
| Requests for uncommitted IME composition text | Local preparation guard, `desktop/completion-preparation.mjs` (marker v2) | `b8456615` |
| Long-line case typed 20,030 characters as one input event: 14.7 s or missing trigger, then renderer OOM crash and a verifier hang | Harness, `desktop/verify-completion-acceptance.mjs` (pre-written `long.js`; fail on renderer crash) | `5232cfaa` |

## Verification

Commands ran as the unprivileged `ov` user with
`xvfb-run -a -s "-screen 0 1920x1080x24" dbus-run-session --` and a
gnome-keyring secrets daemon. Native runs were serialized.

| Command | Run ID | Result |
| --- | --- | --- |
| `npm run verify:completion -- --acceptance` (main harness, unmodified product) | `WsP8Z2`, `2iGuCB` | Renderer crash in the long-line case; verifier hung and was stopped. This led to the long-line trace |
| `… --acceptance --cases=longLine,bursts` (unmodified product, baseline) | `zF98Oa`, `DdBVaK` | Pass |
| `… --acceptance --cases=accept-race` (unmodified product) | `pv6QI1`, `eNwtoO` | Fail: corruption reproduced (expected) |
| `… --acceptance --cases=accept-race,split-editors,ime,line-accept` (accept fix only) | `9Rc3kk` | Race and split pass; IME defect found |
| `… --acceptance --cases=ime,line-accept` (both fixes) | `yjFLFB` | Pass |
| `npm run verify:completion -- --acceptance` | `Zbb2nT`, `Yp9RJX` | Pass; first attempt each; host exit 0; budgets pass |
| `npm run verify:completion` | `F7g48c`, `1eHLi8` | Pass; first attempt each |
| `npm run verify:completion -- --editing` | `Vwje5B`, `kIf8pP` | Pass; first attempt each |
| `npm run verify:inline-edit` | `8hxSDa` | Pass; first attempt |
| `npm run test:completion` (with `OPENVISION_RECOVERY_DIR=build/recovery`) | — | 70/70 pass, 0 skipped |
| `npm run check:desktop`, `npm run test:build-integrity` | — | Pass |
| `npm run docs:check`, `npm run status:features` | — | Pass |

Harness-development runs that failed for harness reasons are listed in the
evidence doc (`ek060O`, `ZU0KmN`, `pPpaaO`, `W30glh`, `4l1I6L`). None counts as
a pass.

Host notes:
- The build needed `/home/user/OpenVision Projects` to be writable by `ov`.
- After a failed build, rebuilding meant removing `source/`, `electron-host/`,
  `build/source-build.json` and `build/namespace-journal.json`.
- Installed `gnome-keyring` and `libsecret-tools` with apt.
- The proxy CA was copied for `ov`.

## Recommendation per story

**OV-603: promote to Verified on Linux x64.** Every Linux-doable clause passes
natively with repeat runs: the accept race, split editors, IME, line-wise
accept (documented as unsupported), long lines, declared budgets and the three
`verify:completion` modes. No Linux gap remains. The Windows and macOS clauses
are in the platform stories listed below.

## Moved to platform/live stories

- Windows and macOS runs of `verify:completion`, `-- --editing` and
  `-- --acceptance` (including the new accept-race, split, IME and budget cases).
- A real input method (IBus/Fcitx, Windows IME, macOS input sources); this run
  used Chromium's DevTools IME path.
- Packaged-build reruns.

## Defaults pending owner decision

- A raced accept is **dropped**, not recomputed against the new text. The
  suggestion can be accepted again with the next Tab.
- IME composition is in scope. While composing, no request is prepared; a
  request already in flight is cancelled by the edit as usual.
- Line-wise accept is out of scope, because Cursor Tab does not expose it.
- Workload = the existing acceptance burst fixtures plus the long-line case.
  Budget rule: largest baseline × 1.5, rounded up to 50 ms; counts exact.

## Open risks

- The accept-race window is widened by a harness hook (a DevTools breakpoint
  condition). The real window is the extension-host round trip.
- Per-edit Cursor Tab cost is O(document): a full copy plus an extension-host
  call on every model edit. A tool that types very long strings character by
  character can still exhaust renderer memory. This is not changed here.
- The budgets come from fixture latency on one container host. A loaded
  developer host (the 17 October runs reached 574 ms last key → request) is
  within the 650 ms budget, but with less margin.
- `verify-completion.mjs` now enables partial accepts in `--acceptance` mode, for
  the word-accept race. OV-602 work in the same file should keep that setting.
