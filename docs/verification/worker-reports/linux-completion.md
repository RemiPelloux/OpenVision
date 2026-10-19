# Linux completion worker report — OV-903 (Linux x64)

Branch `ov/linux-completion`, 18–19 October 2026. Story **OV-903** (Linux user runs
the same supported workflows), Linux x64 only, plus GitHub issue #6.

## Summary

- New committed Linux package verifier (`npm run verify:package:linux`) and
  `uninstall-desktop-entry.sh`. It packages the build, moves it to a path with spaces
  and Unicode, starts it twice through the shipped `./OpenVision` launcher as a
  non-root user and checks the profile location, persistence, the `openvision`
  WM_CLASS, the manifest, the absence of links, profile files and credentials, and
  a `desktop-file-validate`-clean launcher entry that it then removes.
- **Defect fixed:** under a non-UTF-8 locale (`LANG` unset or `C`), the package showed a
  blank window when its folder path had non-ASCII characters (`ERR_FILE_NOT_FOUND`
  for the workbench). The launcher now selects `LC_CTYPE=C.UTF-8` only in that case.
- **Defect fixed (issue #6):** without a Secret Service, Add Provider **Save** waited on
  the workbench's one-time keyring question. The built-in Git extension raises that
  question at startup, and with `"window.dialogStyle": "custom"` the question rendered
  under the modal provider dialog, so Save could never finish. Save (and pi import)
  now release their dialog first, say they are waiting for the keyring answer, and
  report session-only storage instead of a bare "Saved".
- New display-cell harness (`scripts/linux-cell.sh`, `OPENVISION_OZONE_PLATFORM`) and
  critical-suite manifest/runner (`desktop/critical-suite.json`, `npm run verify:critical`).
- Ubuntu 24.04 / **X11** (Xvfb) cell: 9/10 Linux critical verifiers passed first time;
  `verify:explorer` failed its work budget (4.11 > 4 probes per root per second) on all
  three attempts. Headless **Wayland** (Weston 13) smoke: 5/5 first time.
- Previously unrun verifiers on Linux: `verify:desktop`, `verify:review-storage`,
  `verify:model-discovery`, `verify:model-discovery:host` (ported), `verify:local-metadata`
  (ported), `verify:local-startup` (ported, with process-family lifecycle check),
  `verify:onboarding`, `verify:account-switch`, `verify:account-picker` pass;
  `verify:mcp-session` fails here (open).

Host: Ubuntu 24.04.5 LTS x86_64 cloud container, kernel 6.18 (no AppArmor, no
`kernel.unprivileged_userns_clone` knob), 4 CPUs, 15 GB RAM, Git 2.43.0, Node 24.18.0
tooling, Cursor 3.21.13 Linux input (pinned SHA-256), source build of this branch.
Native runs as the non-root user `ov` inside `scripts/linux-cell.sh` (private Xvfb
1920×1080 or headless Weston 13.0.0, private D-Bus session, disposable plaintext
gnome-keyring 46.1 unless stated). Locale: `LANG` unset (POSIX charmap). Packages
installed with apt: `gnome-keyring libsecret-tools desktop-file-utils weston xdotool
x11-utils`. All model responses come from controlled local fixtures. Nothing here is
live inference, an account sign-in, a Windows/macOS result or a published-package
result; the published preview.7 package contains none of these fixes.

## Tasks

| # | Task | State | Notes |
| --- | --- | --- | --- |
| 1 | `verify:package:linux` plus desktop-entry removal | **Done** | Relocation to `logs/<run>/Ünïcødé Ωrbit path/Open Vision 测试 package`; profile in `electron-host/data/local` (DevTools port file, `User/`), persisted value across restart, runtime writes only under `electron-host/data`, no new `~/.config/OpenVision`, `~/.config/Cursor`, `~/.cursor`, `~/.openvision`; WM_CLASS `openvision`/`openvision` (xdotool + xprop, X11 only; skipped by design on Wayland); `desktop-file-validate` 0.27 clean; uninstall removes only the entry and icon and refuses a foreign `openvision.desktop` |
| 2 | Ubuntu 24.04 / X11 cell | **Done, one failure open** | `--ozone-platform=x11` via `OPENVISION_OZONE_PLATFORM`; non-root; D-Bus session; gnome-keyring from apt; critical subset 9/10 (explorer budget). No display/keyboard defect found in this cell; AppArmor and runtime libraries documented in [docs/guides/linux.md](../../guides/linux.md) |
| 3 | Headless Wayland cell | **Done** | `weston --backend=headless`; welcome, project, development, agent, linux-secrets 5/5 |
| 4 | Verifiers never run on Linux | **Mostly done** | All but `verify:mcp-session` pass; `benchmark:native` decision below |
| 5 | Critical-suite manifest and runner | **Done** | Run summaries below |
| #6 | Add Provider Save without a Secret Service | **Done** | Reproduced natively before the fix; regression in `verify:linux-secrets` and a browser unit test |

**benchmark:native decision.** It stays Windows-only: it reads Windows private-byte
counters and the original input manifests. On Linux it is formally replaced by
`npm run verify:idle-memory` (process-family memory, see
[idle-memory-linux](../../performance/idle-memory-linux.md)); the guard message in
`desktop/verify-agent.mjs` now says so. `verify:idle-memory` was not rerun in this session.

**verify:review-storage** runs on Linux (it already admitted Linux) and passed.

## Defects found and fixed

| Defect | Owner | Commit |
| --- | --- | --- |
| Blank workbench (`ERR_FILE_NOT_FOUND`) when the package folder path has non-ASCII characters and the locale is not UTF-8. Isolated natively: same package under `/home/ov/ünï/` failed, under `/home/ov/sp ace/a b/` loaded, and under `/home/ov/ünï/` with `LANG=C.UTF-8` loaded | Launcher in `desktop/linux-package-scripts.mjs` | `b2551b21` |
| Desktop entry `Exec` would break for paths with `"`, `` ` ``, `$`, `\` or `%`; now escaped per the Desktop Entry specification | `desktop/linux-package-scripts.mjs` | `99a835d2` |
| No way to remove the launcher entry | `uninstall-desktop-entry.sh` (new) | `99a835d2` |
| Issue #6: Add Provider Save hangs without a Secret Service (custom dialog style: keyring question covered by the modal provider dialog; any style: Save silently waits on an unanswered startup question) | `desktop/model-settings.js` | `fbdced13` |
| `model-settings-browser.test.mjs` failed all 7 tests on `main`: fixture did not serve `pi-import.js` or a pi bridge | Test fixture | `fbdced13` |
| `verify:local-metadata` expected a lower-case title; the product title-cases the four-word local fallback (`local-chat-title.test.mjs`) | Verifier | `206067b5` |
| `verify:account-switch` read a half-written `document.json` (concurrent non-atomic snapshot writes) | Verifier driver extension | `206067b5` |
| `verify:desktop` predated Project Home, first-run setup, the collapsed Settings sidebar and the Playground no longer restoring `main.js` | `desktop/verify.mjs` | `206067b5` |
| `verify:local-startup`, `verify:local-metadata`, `verify:model-discovery:host` refused Linux | Verifiers | `206067b5` |

Not fixed (outside this story, recorded for their owners):

- **Upstream branding in an empty editor window:** after a `--glass` start, Project Home
  **Enter workspace** opened an empty editor window (not the opened folder) whose
  watermark shows the **CURSOR** logo and a **Sign in** link. Seen with the
  `data/local` development profile; reproduction notes in the Verification section.
- **Glass Enter workspace with a folder argument:** a folder opened through the
  command line after a `--glass` start appears in the Agent (Glass) layout with Project
  Home; **Enter workspace** opens a separate empty editor window rather than the
  folder's editor. Product decision or defect for the Project Home owner.
- **Build is not restartable after a partial failure:** a build that failed after
  assembly leaves `build/namespace-journal.json` and caches that reject the next build
  ("Namespace input changed outside build"); recovery needs removing `source/`,
  `electron-host/` and the derived `build/` files. The build also writes
  `../OpenVision Projects/Playground` beside the checkout and fails if that parent is
  not writable.
- **Git token write at startup** raises the keyring question in every keyring-less
  session (upstream behaviour of the built-in Git extension).

## Verification

Commands ran as `ov` from the repository root inside a cell, for example
`scripts/linux-cell.sh x11 -- npm run verify:package:linux`. Run directories are
private under `logs/` and not published.

### Package verifier and locale fix

| Run | Result |
| --- | --- |
| Iterations before the fix (raw-CDP harness under development) | Blank workbench at the Unicode path; `CodeWindow: failed to load (reason: ERR_FILE_NOT_FOUND)` in host stderr |
| `verify:package:linux` `package-linux-verification-m21rY6` | **Pass** (first run of the final verifier) |
| `verify:package:linux` in `critical-suite-EbOwZI` → `package-linux-verification-fNbaL1` | **Pass** (second run) |
| `node --test desktop/linux-package-scripts.test.mjs` | 6/6 (launcher arguments, folder with spaces, UTF-8 under `LC_ALL=C`/`LANG=C`/unset, Exec quoting with `desktop-file-validate`, uninstall, foreign entry kept) |

### Issue #6

| Run | Result |
| --- | --- |
| `verify:linux-secrets` with the new case, before the fix: `linux-secrets-verification-MTuGkj` | **Fail** — reproduced: after Save no keyring question became reachable within 20 s |
| Browser unit test on the old `model-settings.js` (negative control) | Fails: provider dialog still open while the secret write waits |
| `verify:linux-secrets` after the fix: `NQpUEZ` (standalone), `jt2Lb7` (X11 suite), `6BKaH3` (Wayland suite) | **Pass** ×3. Native style: one keyring question raised at startup by Git (`promptsBeforeSave: 1`), answered "Use weaker encryption"; Save completes; `password-store: basic` in the profile `argv.json`; `basic_text` available after restart. Custom style with Git disabled: the in-page question is visible with no provider dialog open, Save completes, same persistence |
| `node --test desktop/model-settings-browser.test.mjs` | 9/9 |

### Critical suite runs (`npm run verify:critical`)

| Run | Cell | Selection | Result |
| --- | --- | --- | --- |
| `critical-suite-EbOwZI` (commit `fbdced13`, retries 1) | X11 Xvfb, keyring | `--subset linux-critical` | **9/10 first-time pass**, 0 flaky, 1 fail (explorer, both attempts) |
| `critical-suite-jMJPnz` (commit `1bc48a5a` + uncommitted verifier ports not in this subset) | Wayland headless Weston, keyring | `--subset wayland-smoke` | **5/5 first-time pass** |
| `critical-suite-G0WZxO` (commit `1bc48a5a` + uncommitted ports, retries 0) | X11 | 9 never-run verifiers | 6/9: mcp-session, local-metadata, account-switch failed |
| `critical-suite-apxLIw` (retries 0) | X11 | mcp-session, local-metadata, account-switch after the verifier fixes | 2/3: local-metadata and account-switch pass; mcp-session fails again |
| `critical-suite-D3Gijg` (commit `206067b5`, retries 0) | X11 | second runs of changed verifiers | **4/4** (model-discovery-host, local-metadata, local-startup, account-switch) |

X11 critical subset (`EbOwZI`): package-linux `fNbaL1`, welcome `EyFkz8`, project
`Hxwlgx`, explorer `KzcyJQ` and `bn3y2S` (fail), development `UcWuF3`, git `jnwN5H`,
agent `Dz8r1n`, completion `GbsOC9`, extensions `u97WG4`, linux-secrets `jt2Lb7`.
Wayland smoke (`jMJPnz`): welcome `aFuoue`, project `tC2Nyq`, development `Srzcuq`,
agent `LCYj22`, linux-secrets `6BKaH3`. Never-run verifiers (`G0WZxO`): review-storage
`LzD4an`, model-discovery `qjcXJZ`, model-discovery-host `jggzQc` (12 checks, 25 fixture
requests), local-startup `hAxeWB`, onboarding `AQm6Hc`, account-picker `Y3KvpD`.

**Explorer** failed the same way three times (two suite attempts plus standalone rerun
`explorer-verification-RjLZC8`): every functional check passes, then the external-edit
measurement counts 37 `.git`/`.vscode`/config probes in its fixed 3 s window across 3
roots = 4.11 per root per second against a budget of 4 (small edit 0.4, idle 3.25).
Inference, not verified: the probes likely come from Git child processes, and Ubuntu's
Git 2.43 may probe more than the owner's newer Git. The budget was not changed. The
retry is labelled as a failure, not a pass.

**mcp-session** failed twice (`LBL8UY`, `bD0Kcb`): the fixture received `initialize`,
`notifications/initialized` and `tools/list`, but the instrumented overlay driver never
wrote its events file, so the verifier timed out waiting for "session-aware native HTTP
discovery". It passed on the owner's Linux host on 16 October. Not diagnosed further.

**verify:desktop:** `npm start -- --inspect-preview "<OpenVision Projects>/Playground"`
then `npm run verify:desktop`, closing the app through its CDP port: pass twice after
the verifier fixes (title, editor, local profile edit/persist, settings without
sign-in or cloud agents, logo, source text). An earlier start without a folder put the
fresh `data/local` profile in the Glass layout; it was reset (private runtime data
created by this session) before the passing runs.

### Unit suites, docs and status

| Command | Result |
| --- | --- |
| `npm run test:portable` | 37 pass, 1 Windows-only skip |
| `npm run test:critical-suite` | 4/4 |
| `npm run test:accounts` (`OPENVISION_BROWSER_PATH=/opt/pw-browsers/chromium`) | 69/69 |
| `npm run test:provider-storage` | 72/72 |
| `npm run test:desktop` | 198/198 |
| `npm run test:installer` | 5 Windows-only skips |
| `npm run test:feature-status` | 1/1 |
| `npm run docs:check` | No failures |
| `npm run status:features` | Ledger unchanged (shared planning files not edited) |

Host notes: native verifiers ran one at a time. The host has no system D-Bus, so
Chromium logs `login1` and system-bus errors; they did not affect results. The proxy
CA bundle under `/root` is unreadable to `ov`; a readable copy was used for `npm ci`
and the AppImage download.

## Follow-up on merged main — 19 October 2026

Branch reset to `origin/main` `3b97df1e` (all earlier work merged), clean `npm ci` and
rebuild with Node 24.18.0, same host and cells as above.

**Remaining gaps re-checked on merged code** (`critical-suite-nZebdO`, X11, before any
change in this follow-up):

| Verifier | Result |
| --- | --- |
| `verify:explorer` `explorer-verification-VxxBiU` | **Pass** first time. External-edit rate is now 2.33 probes per root per second (idle 1.66, small edit 1.33; budget 4). The measurement was corrected on main in `756833a4` (rate over whole poll periods); the budget is unchanged |
| `verify:mcp-session` `mcp-session-verification-ZAPEEB` | **Pass** first time; second pass `utqwkh` |

**Issue #8 fixed** (`836903c1`):

- *Branding.* The empty editor window is Cursor's landing screen. The build now
  replaces its lockup image with the OpenVision mark (`openvision-lockup.png`), sets
  the alternative text to "OpenVision" and removes the hosted **Sign in** fallback in
  both workbenches. The transform is AST-guarded, idempotent and backed up
  (`desktop/source-branding.mjs`).
- *Enter workspace.* In the Agent (Glass) window, Project Home **Enter workspace**
  asked the main process for any editor window, or an empty one. It now focuses an
  editor already on the caller's folder or workspace, or opens one on it. Without a
  project the earlier behaviour is kept (`desktop/welcome-customization.mjs`, main
  `cursorFocusOrOpenEditorWindow`).
- *Regression.* `verify:project-home` adds two fresh-profile Glass cases. With `--glass`
  alone, the new editor window shows the loaded OpenVision mark, has no
  `alt="Cursor logo"` and no "Sign in" or "Cursor" text, and stays empty. With
  `--glass <project>`, the new editor window's workspace is that project. Both passed
  in `project-home-verification-OTPZtf`, `S7LmKZ` (suite `pFuiup`) and `6vHRS6`. Unit
  tests cover both transforms with negative cases (`branding.test.mjs`,
  `welcome-customization.test.mjs`). `verify:project-home` is now in the
  `linux-critical` subset.

**Package verifier contract.** The merged update/rollback work added `profileFormat`
and `updates: "manual"` to `openvision-package.json`; `verify:package:linux` failed on
its exact-match assertion in suite `pFuiup` (both attempts, recorded as fail). The
assertion now requires those fields (`c9d1030e`); passes `emz4SG`, `uGviMS`.

| Run | Cell | Result |
| --- | --- | --- |
| `critical-suite-pFuiup` (`59d8fa7e`, retries 1) | X11 | 10/11 first time; package-linux failed both attempts (stale manifest assertion, fixed after) |
| `critical-suite-T5ONAK` (retries 0) | X11 | 3/3: package-linux `uGviMS`, project-home `6vHRS6`, mcp-session `utqwkh` |
| `critical-suite-g2keFJ` (retries 1) | Wayland headless Weston | 5/5 first time: welcome `QqOuge`, project `OhAkSM`, development `GvCv9X`, agent `R4X7FG`, linux-secrets `NfH5km` |
| Unit: `test:portable` 39 + 1 Windows skip, `test:welcome` 3, `test:project-home` 11, `test:critical-suite` 4, `test:build-integrity` 26, `test:desktop` 222; `docs:check` clean; `status:features` 21 Verified (47.73%) | | Pass |

Every entry of the Linux x64 critical subset has now passed first time on this host
on the final code or on code differing only by the package-manifest assertion fix,
which was then rerun twice.

## Recommendation per story

- **OV-903: promote to Verified on Linux x64**, subject to the owner decisions below
  (claimed matrix, `--glass` as a supported entry point, OV-804 not blocking). The
  earlier Linux gaps (explorer budget, `verify:mcp-session`, Glass Enter workspace and
  the CURSOR/Sign in empty window) are closed on merged code plus this branch. Remaining
  items are platform/live only (next section).
- **Issue #6:** fixed and merged; can be closed.
- **Issue #8:** fixed on this branch; close once merged.

## Moved to platform/live stories

Other distributions, ARM64 and musl; real KDE/GNOME desktops and KWallet on Plasma;
a real Ubuntu desktop with AppArmor enabled (the documented profile and setuid
options are unverified here); live providers and account sign-ins (account verifiers
ran with fixture accounts and real official extension downloads, no sign-in);
Windows and macOS.

## Defaults pending owner decision

- Claimed Linux matrix: x64, glibc, Wayland (Hyprland, owner-verified; headless Weston
  here) and X11 (Xvfb here); gnome-keyring or the explicit no-service path.
- Launcher sets `LC_CTYPE=C.UTF-8` (and `LC_ALL=C.UTF-8` only when `LC_ALL` was set)
  when the active charmap is not UTF-8. Reversible in `linux-package-scripts.mjs`.
- Without a Secret Service, Save releases its dialog and waits for the user's keyring
  answer rather than timing out; a closed question stores keys for the session only,
  with an explicit message.
- `uninstall-desktop-entry.sh` refuses to remove an `openvision.desktop` that lacks its
  `X-OpenVision-Entry=portable` marker (entries from older packages must be removed by
  hand).
- C/C++ is outside the Linux suite unless the OV-402 session claims it.
- `--glass` (Agent window start, the package launcher's no-argument default) is treated as
  supported; Enter workspace without a project still opens an empty editor window.
- OV-804 is recorded as not blocking OV-903 Linux x64 promotion.
- `desktop/critical-suite.json` maps account verifiers to OV-903 and local-startup to
  OV-401, local-metadata to OV-501; shared with OV-1004, adjust when merging.

## Open risks

- The package verifier drives the window through raw CDP because Playwright's
  `connectOverCDP` attached to an internal `chrome-error://` page for the packaged
  window; the cause was not investigated.
- `verify:critical --low-parallelism` was implemented (nice, smaller thread pool,
  leftover-process wait) but every run here used the default sequential mode.
- The Wayland cell is headless Weston, not a desktop compositor; WM_CLASS/app ID is
  not checked there.
- Single runs on a shared 4-CPU container; no timing claim.
