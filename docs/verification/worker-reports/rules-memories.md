# Worker report: OV-301 local rules and approved memories (Linux x64)

19 October 2026. Branch `ov/rules-memories`, based on `main` at `b4f52a56`.
Source change after **0.2.0-preview.7**; no package was rebuilt. Linux x64 only.

## Summary

Every Linux task for OV-301 is done and verified natively.

- A read-only (EROFS) or permission-denied profile now shows a native error
  dialog with the path and remedy, and exits 1 without changing the profile.
  Before, the host exited 1 with no message.
- The memory filesystem fixture now runs on Linux.
- A new controlled-fixture mode checks the first Agent request after a restart.
- The two-window rules and legacy-memory verifiers pass first time on Linux.
- Three harness issues and one Linux Quick Edit product defect were found. The
  product defect is outside OV-301 and is recorded, not fixed.

Host: Ubuntu 24.04.5 LTS container, kernel 6.18.44, 4 CPUs, Xvfb
1920×1080×24, `dbus-run-session`, Node 24.18.0, prepared Cursor 3.21.13 AppImage
input, unprivileged `ov` user. Packages installed with apt for this work:

| Package | Version | Used for |
| --- | --- | --- |
| `sqlite3` | 3.45.1-1ubuntu2.8 | `verify:profile-io-faults` |
| `xdotool` | 1:3.20160805.1-5build1 | dialog observation |
| `x11-utils` | 7.7+6build2 | X11 inspection |
| `gnome-keyring` | 46.1-2ubuntu0.2 | Secret Service |

The verifier session starts `gnome-keyring-daemon --start --components=secrets`
inside its D-Bus session. It uses a disposable plaintext `login` keyring in the
test user's home, which is the documented Linux setup in
[Linux guide](../../guides/linux.md).

## Tasks

| # | Task | State |
| --- | --- | --- |
| 1 | Read-only profile UX | **Done.** Owner fix in the main bundle; `verify:profile-io-faults` asserts the dialog (X11 window owned by the child, main process blocked while shown), its text, exit 1 and an unchanged `state.vscdb`. |
| 2 | Port `verify-memory-filesystem.mjs` to Linux | **Done.** Two roots; directory symlink rejected with its target left empty; `0555` write denial then retry after the mode is restored; real write only in the selected root. |
| 3 | First Agent request after restart (fixture) | **Done.** `npm run verify:local-rules:agent-context` (`verify:local-rules -- --agent-context`); controlled fixture, labelled as such. |
| 4 | Run `verify:rules:windows`, `verify:legacy-memory:stale` and `verify:legacy-memory:windows` on Linux | **Done.** All passed first time; no Linux-only defect found in them. |
| 5 | Final reruns | **Done.** See Verification. |

## Defects found and fixed

| Defect | Owner | Commit |
| --- | --- | --- |
| A read-only or permission-denied profile exits 1 before any window, with no message. Node's recursive `mkdir` reports EROFS as `ENOENT`, and `handleStartupDataDirError` only handles `EACCES`/`EPERM`. | `desktop/profile-writability.js` + `profile-writability-customization.mjs` (main `startup()`) | `155c5747` |
| `verify-memory-filesystem.mjs` asserted `win32` | verifier | `8c7a9757` |
| `verify:memory` other-project phase: the Agent pane stayed closed in a fresh window (harness) | `desktop/verify-memory.mjs` | `19d9d749` |
| `verify:inline-edit` appended a new instruction to the retained failed instruction (harness exposed by the product defect below) | `desktop/verify-inline-edit.mjs` | `b4ddc771` |

### Found, not fixed (outside OV-301)

1. **Provider save hangs without a Secret Service (Linux).** With no
   `org.freedesktop.secrets` on the session bus, Chromium selects `basic_text`
   (`safeStorage.isEncryptionAvailable() === false`). The Add Provider dialog
   then stays busy indefinitely, and model discovery is never requested.
   Observed with a disposable diagnostic launch (45 s, no fixture hit) and in
   runs `RenGiF` and `vVJENm`. Owner: provider credentials and Linux keyring
   selection (`linux-keyring-customization.mjs`, `model-providers.js`
   `persist()`). OV-301 verification used gnome-keyring instead.
2. **Quick Edit select-all does not select retained prompt text (Linux).** After
   a failed submission, the select-all shortcut in the Quick Edit prompt selected
   nothing (`selectedByShortcut: ""` in `pbrl3o` and `nDjgcT`). Owner: the
   Quick Edit story.

## Verification

Native runs went one at a time, as `ov`, under
`xvfb-run -a -s "-screen 0 1920x1080x24" dbus-run-session`. Runs before the
keyring step had no Secret Service. Run IDs are `logs/<name>-<id>/`.

| Command | Run IDs (in order) | Result |
| --- | --- | --- |
| `npm run verify:rules:windows` | `VV7Dx2`, `bLzZxu` | Pass, pass (first-time pass) |
| `npm run verify:legacy-memory:stale` | `AqNUHh`, `QRaMsu` | Pass, pass (first-time pass) |
| `npm run verify:legacy-memory:windows` | `vJmp89`, `D5gJ9K` | Pass, pass (first-time pass) |
| `npm run verify:profile-io-faults` (changed) | `RenGiF`, `1tcBc7`, `qSrkBj` | **Fail** (environment: no Secret Service, baseline provider save hung before any fault step), pass, pass |
| `npm run verify:memory` (changed) | `vVJENm`, `qwYqud`, `1R0Loc`, `Vojdai` | **Fail** (no Secret Service), **fail** (Agent pane closed in other project), pass, pass |
| `npm run verify:memory:filesystem` (changed) | `fmRTVH`, `saxhAF`, `n1DC0v` | **Fail** (all 11 filesystem checks passed; later Agent pane issue), pass, pass |
| `npm run verify:local-rules:agent-context` (new) | `hq602D`, `o8mCbB` | Pass, pass (first-time pass) |
| `npm run verify:local-rules` | `TFnQ5d` | Pass |
| `npm run verify:legacy-memory` | `3BHmyy` | Pass |
| `npm run verify:inline-edit` (changed) | `beOjTK`, `SDqh8B`, `pbrl3o`, `nDjgcT` | **Fail**, **fail** (unchanged verifier; retained prompt text), pass, pass |
| `npm run test:desktop` | — | 198/198, 0 skipped |
| `npm run test:memory` | — | 16/16, 0 skipped |
| `npm run test:provider-storage` (includes the new `profile-writability.test.mjs`) | — | 77/77, 0 skipped |
| `npm run test:build-integrity` | — | 26/26 |
| `npm run check:desktop` | — | Pass |
| `npm run build:desktop` | — | Pass: 240 scripts, 124 manifests, 33 local main-process modules |
| `npm run docs:check` | — | Pass, no failures |
| `npm run status:features` | — | Runs; ledger unchanged on this branch |

Final build: main bundle `8a14ecd573ac1f2e982c9de03b8222a40b0ee9a4cf84ced782622b0755b017be`,
`openvision-profile-writability.js` `8a478b2d2e27768d45f8f166af91ee172d50bac86cac0de30920a72a4df57d22`.
Commits after `155c5747` changed only verifiers and docs, not built runtime files.

Evidence docs updated:

- [profile I/O faults](../../recovery/rea-profile-io-faults.md#read-only-profile-at-startup-19-october)
- [local rules](../../engineering/local-rules-concurrency.md#linux-x64-follow-up-19-october)
- [project memories](../../guides/project-memories.md#native-filesystem-verification-on-linux-19-october)
- [inline edit](../../recovery/rea-inline-edit.md#linux-x64-rerun-19-october)

## Recommendation

**OV-301: promote to Verified on Linux x64**, provided the owner accepts the two
defaults below. Every Linux clause now has native evidence:

- CRUD and restart;
- two real windows;
- malformed records;
- SQLite statement failures;
- full-volume profile and project faults;
- the read-only profile UX;
- first-request rule context (controlled fixture);
- workspace-scoped memories;
- two-root, link and permission filesystem cases;
- legacy import, stale review and two windows.

If the owner does not accept EIO, torn-sector and power-loss exclusions, the
remaining Linux gap is a root-capable fault-injection harness (dm-flakey or
similar). This container cannot provide one.

## Moved to platform/live stories

- Live `verify:agent:live -- --rules` and `--memory` runs (funded provider).
- Windows and macOS reruns of every verifier above, including the junction/ACL
  filesystem fixture and the read-only profile dialog on those platforms.
- Full-volume and read-only equivalents on Windows and macOS volumes.
- The dialog on a Wayland compositor (only X11 under Xvfb was run here).

## Defaults pending owner decision

- EIO, torn sectors and power loss stay residual exclusions.
- Same-rule concurrent edits stay last-writer-wins (documented, not a merge).
- An unwritable profile gets an explanation and exit 1. No read-only session is
  offered; the code does not establish that every storage writer would be safe.

## Open risks

- The text assertion reads the stderr copy of the dialog; the dialog window is
  verified through X11, not through accessibility APIs.
- The profile check uses `access(W_OK)`. A profile that passes that check but
  fails later (quota, a mount changed during startup) still reaches the upstream
  path, which explains only `EACCES` and `EPERM`.
- Native passes depend on a reachable Secret Service until the provider-save
  hang above is fixed.
- `RenGiF`, `vVJENm`, `qwYqud`, `fmRTVH`, `beOjTK` and `SDqh8B` failed and are
  not counted as passes.
