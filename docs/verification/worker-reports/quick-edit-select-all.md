# Worker report: Quick Edit Ctrl+A (#7) and deterministic retrieval tests (Linux x64)

24 October 2026. Branch `ov/quick-edit-select-all`, based on `main` at `b7bd8069`.
Source change after **0.2.0-preview.7**; no package was rebuilt. Linux x64 only.

## Summary

| # | Task | Verdict |
| --- | --- | --- |
| 1 | [#7](https://github.com/RemiPelloux/OpenVision/issues/7) Ctrl+A does not select retained text in the Quick Edit prompt | **Fixed** (`c02bc97c`) |
| 2 | `npm run test:retrieval` fails under CPU load | **Fixed** (`ed7ad996`): 10/10 passes under `stress-ng --cpu 4` |

Host: Ubuntu 24.04.5 LTS container, kernel 6.18.44, 4 CPUs, 15 GiB, Xvfb
1920×1080×24, `dbus-run-session`, Node 24.18.0, prepared Cursor 3.21.13 AppImage
input. Native runs went one at a time as the unprivileged `ubuntu` user (`env -i`),
with a private 0700 `XDG_RUNTIME_DIR`, `OPENVISION_BROWSER_PATH=/opt/pw-browsers/chromium`,
a readable copy of the proxy CA bundle in `NODE_EXTRA_CA_CERTS`, and a disposable
plaintext, unlocked `login` keyring (`gnome-keyring-daemon --unlock --components=secrets`
inside the D-Bus session). Packages installed with apt for this work:

| Package | Version | Used for |
| --- | --- | --- |
| `gnome-keyring` | 46.1-2ubuntu0.2 | Secret Service |
| `stress-ng` | 0.17.06-1build1 | CPU saturation |
| `xdotool` | 1:3.20160805.1-5build1 | host tool |
| `sqlite3` | 3.45.1-1ubuntu2.8 | host tool |
| `x11-utils` | 7.7+6build2 | host tool |

Run IDs are `logs/<name>-<id>/`.

## Task 1: Quick Edit Ctrl+A (#7)

### Reproduction

`npm run verify:inline-edit` with the verifier unchanged failed twice:
`DuOXEG` and `vGTGjv`. After the HTTP-failure step, the prompt keeps
`Exercise error handling`. The harness clicks the prompt, presses Ctrl+A and
then Backspace. Backspace removed one character, so the recovery request carried
`Exercise error handlinRecover after failure`. In these two runs the DOM
selection read back as the whole text just before Backspace. In the 19 October
runs (`pbrl3o`, `nDjgcT`) it read back as `""`. Both outcomes are the same race;
see Root cause.

### Root cause

There is no keybinding conflict. On Linux, Ctrl+A in the prompt resolves to
`editor.action.selectAll`. The prompt's Lexical key handler runs, and Lexical's
selection becomes the full range (traced: anchor 0, focus 23).

The owner is the prompt input delegate's `focus(callback, force, atStart)` in
`workbench.{desktop,glass}.main.js`, the class shared by Quick Edit, chat and
terminal Cmd+K prompts. In the main window, focus without `force` is deferred by
a 25 ms `setTimeout`. That timer then calls `editor.update(() => root.selectEnd())`.
Its `if (u && this.isFocused()) return` guard never applies, because every call
passes `u` as `undefined` or `false`.

Ctrl+K on an open Quick Edit prompt and a click on the prompt container both
schedule this timer. A Ctrl+A typed within those 25 ms is collapsed to the end
again. Then either Backspace arrives before a later `selectionchange` re-syncs
Lexical from the DOM (`DuOXEG`, `vGTGjv`), or the DOM selection is already
collapsed (`pbrl3o`, `nDjgcT`). An instrumented diagnostic run hooked
`LexicalEditor.update`, `setEditorState` and `registerUpdateListener`. It
recorded selection `[0,23]` committed by the select-all handler, then `[23,23]`
committed by the delegate's deferred `r()` (bundle line 531065, `… || o() || r()`).
Fast Linux/Xvfb input through Playwright lands inside the window reliably. A
person typing Ctrl+A right after clicking the prompt or pressing Ctrl+K can hit
it on any platform.

### Fix

`desktop/prompt-focus-customization.mjs` (`installPromptFocusSelection`), registered
in `desktop/build-source.mjs` after `installInlineEdit`:

- The deferred call becomes `r(!0)`.
- When the prompt is already focused and the document selection is a non-empty
  range inside it, `r` keeps that selection.
- Otherwise the caret is placed as upstream does. Immediate focus and forced
  focus (`t` or `!l`) are unchanged.

It applies to both workbench bundles and is guarded by
`/* OpenVision deferred prompt focus keeps selection v1 */`, so reapplying it is a
no-op. It refuses to apply if the owner is missing, ambiguous or changed. It runs
under `cachedFile` (`build/cache/prompt-focus-{desktop,glass}.json`) and writes
only its target plus `backups/prompt-focus/`.

The bundle structure was checked directly. The keyboard handler and the
`editor.action.selectAll` binding (`kbOpts.weight: 0, primary: CtrlCmd|KeyA`)
need no change.

### Tests

- `desktop/prompt-focus.test.mjs` (in `npm run test:inline-edit`, 19/19 pass)
  executes the upstream and patched delegate for both bundle variants against a
  stand-in DOM and Lexical editor:
  - upstream collapses a select-all made within 25 ms, and the patch keeps it;
  - deferred focus still places the caret when the caret is collapsed, when the
    selection is outside the prompt, or when the prompt is not focused;
  - forced focus keeps `selectStart`;
  - `userSelection` rejects collapsed and partial ranges;
  - contract refusals;
  - with a source build present, the shipped bundles carry the marker exactly once.
- `verify:inline-edit` no longer works around the defect: it previously called
  `selectAllChildren` when the shortcut failed. On retained text it now asserts
  that Ctrl+A selected exactly that text and that Backspace emptied the prompt.
  It records `promptClears[].remaining` and the new check
  `checks.selectAllRetainedPrompt`. It also hashes `prompt-focus-customization.mjs`.

### Verification

| Command | Run IDs (in order) | Result |
| --- | --- | --- |
| `npm run verify:inline-edit` (unchanged verifier, unpatched build) | `DuOXEG`, `vGTGjv` | Fail, fail (reproduces #7) |
| `npm run verify:inline-edit` (new check, unpatched build) | `uwFgDP` | **Fail** as intended: `selectedByShortcut: ""`, `remaining: "Exercise error handlin"` |
| clean rebuild (`rm -rf build/source-build.json build/namespace-journal.json source electron-host && npm run build:desktop`) | — | Pass; `Deferred prompt focus keeps a selection made in the focused prompt` |
| `npm run verify:inline-edit` (patched clean rebuild) | `iseLGc`, `0erVUX` | **Pass, pass (first-time pass)**: 12 checks, `selectedByShortcut` = retained text, `remaining: ""` |
| `npm run verify:completion` | `koJLu1` | Pass |
| `npm run test:inline-edit` | — | 19/19 |
| `npm run test:build-integrity` | — | 26/26 |
| `npm run test:desktop` | — | 236/236 |
| `npm run check:desktop` | — | Pass |

Diagnostic-only runs (instrumented copies of the verifier outside the repository):
`hjjqUh` and two others. The instrumentation added delays and so passed. That is
consistent with the 25 ms race.

## Task 2: Deterministic retrieval tests

### Reproduction

`npm run test:retrieval` under `stress-ng --cpu 4` (`retrieval-service.test.mjs`):

- `pause holds the worker between batches and resume completes` failed with
  `no reads while paused: 400 !== 314`. In isolation it failed 3/3 under load.
- After that failure, the test file never exited: the first loaded full-suite run
  was still hung after 10 minutes, with every other test passed. In isolation it
  was killed at the 300 s timeout; node:test reported
  `Promise resolution is still pending but the event loop has already resolved`.
- An inspector attached to the hung process (SIGUSR1) showed one ref'd
  `MessagePort` among active handles. It also showed a live `Worker` (thread 4,
  the pause test's owner) holding the deleted fixture's `index.sqlite`, with the
  service's `message`/`exit` listeners and no `release()` listener.

### Root cause

1. **Timing assumption (the failure).** `RetrievalIndex.pause()` sets a gate
   that the worker honours at its next `checkpoint()`: at the start of a batch
   and before its commit. The test waited a fixed 200 ms after `pause()` and then
   required no further reads. Under saturated CPUs the 200-file batch in flight
   outlasts 200 ms, so reads continued (314 → 400) after the sample. The product
   behaves as documented (it pauses between batches); the test's timing was wrong.
2. **Leak on failure (the hang).** `owner.dispose()` sat after the assertions,
   outside `finally`. A failed assertion left the worker running.
   `worker.on('message', …)` is attached after `worker.unref()`, which refs the
   public port again, so the leaked worker kept the test process alive.

### Fix

`desktop/retrieval-service.test.mjs`, test only:

- After `pause()`, the test waits until `status().status.paused === true`. The
  worker sets this only while it is holding at a checkpoint. The test then samples
  `reads`, waits 400 ms, and still requires no change. No timeout was raised.
- Fixture cleanup disposes every service the test created, before deleting the
  directory. A failed assertion now ends as a normal failure, about 10 s, instead
  of a hang: checked 3/3 with the old 200 ms wait restored in a temporary copy.

### Verification

| Command | Result |
| --- | --- |
| `node --test --test-name-pattern="pause holds" desktop/retrieval-service.test.mjs` under `stress-ng --cpu 4`, before | 3/3 fail (`no reads while paused`), then hang until timeout |
| same, after | **5/5 pass** |
| `npm run test:retrieval` under `stress-ng --cpu 4`, after, 10 runs | **10/10 pass**, 45/45 each, 37.6–40.3 s |
| `npm run test:retrieval`, unloaded | 45/45, 23.8 s |

## Commands

```sh
# as root, once
apt-get install -y gnome-keyring libsecret-tools xdotool sqlite3 stress-ng x11-utils iproute2 openssh-client
# as the unprivileged user (env -i), Node 24.18.0 on PATH
(cd tooling && npm ci)            # the repository root has no lockfile or dependencies
npm run prepare:desktop
npm run build:desktop
xvfb-run -a -s "-screen 0 1920x1080x24" dbus-run-session -- bash -c '
  eval "$(printf "" | gnome-keyring-daemon --unlock --components=secrets)"
  npm run verify:inline-edit'
stress-ng --cpu "$(nproc)" & npm run test:retrieval
```

`build:desktop` creates `../OpenVision Projects` beside the checkout. The parent
directory must be writable by the build user (it was root-owned here, and the
first build stopped with `EACCES`). After that partial build, a clean rebuild was
required.
