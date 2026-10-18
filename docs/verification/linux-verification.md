# Linux verification

Date: **15 October 2026**. Story: **OV-903** (Partial). Input: Cursor **3.21.13**
Linux x64 AppImage (SHA-256 `285eaa38de049c44322ec9365ff9d48337ddacf43234041248a723cb44ade25b`),
the same release the Windows payload is built from.

## Environment

| Item | Value |
| --- | --- |
| Distribution | Omarchy (Arch Linux based), kernel 7.2.5, x86_64 |
| Display | Hyprland on Wayland (Electron selected `--ozone-platform=wayland`) |
| Secret Service | gnome-keyring (`org.freedesktop.secrets`) |
| Sandbox | Chromium user-namespace sandbox; user-owned `chrome-sandbox` |
| Keyboard | AZERTY (French) |
| Electron / Node | 42.10.0 / 24.18.1 (bundled); tooling on Node 26.8.1 |

## Results

All runs use disposable profiles under `logs/` and controlled local HTTP
fixtures; no paid inference. `logs/` paths are private run artifacts.

| Check | Result |
| --- | --- |
| `npm run prepare:desktop` (pinned download, SHA-256, FUSE-less extraction, 13,471 scripts formatted) | Pass; tampered or wrong-version inputs rejected |
| `npm run build:desktop` (every customization applied and verified) | Pass |
| 26 unit suites (`check:*`, `test:*`) | Pass; Windows-only PowerShell installer and shell-ownership cases skip |
| `verify:welcome` | Pass |
| `verify:linux-secrets` | Pass: Secret Service selected (`v11`), restart decrypt, `basic_text` migration, explicit choice, KDE, no-service fallback, global `argv.json` untouched |
| `verify:provider-identity` | Pass: keys saved in the UI persist across restart via the keyring and route to the right provider |
| `verify:project-home`, `verify:project-themes`, `verify:project-clone` | Pass |
| `verify:project` (two-root search, Unicode edit/undo/redo/save, task) | Pass |
| `verify:project:lifecycle` (POSIX write denial), `verify:project:scale` (inotify watchers) | Pass |
| `verify:explorer` (17 October: OV-401 Explorer matrix, symlinks, permissions, abrupt-exit restore, inotify/strace per-edit work) | Pass after the symlink-cycle fix ([report](../recovery/rea-explorer-linux.md)) |
| `verify:git` (worktrees, diff review, conflicts) | Pass |
| `verify:development` (bash/sh terminals, resize, Unicode, Ctrl+C, tasks, Node debugger, child cleanup) | Pass |
| `verify:agent` (stream, read, multi-file edits, command deny/allow/Stop with approval, restart) | Pass |
| `verify:completion` (Unicode accept/undo, cancellation, 13-case response-failure matrix) | Pass |
| `verify:language`, `verify:inline-edit`, `verify:save-all`, `verify:local-rules`, `verify:telemetry`, `verify:import` | Pass |
| `verify:language-ui`, `verify:language-matrix` (17 October, source build) | Pass; see [language matrix](../recovery/rea-language-matrix-linux.md) |
| `verify:extensions` (18 October, source build: OV-702 lifecycle, 16 cases) | Pass after three fixes ([report](../recovery/rea-extension-lifecycle-linux.md)) |
| `verify:memory`, `verify:legacy-memory`, `verify:mcp-cleanup`, `verify:model-menu`, `verify:provider-errors` | Pass |
| `verify:model-menu:large`, `verify:catalog-retention`, `verify:reasoning-capabilities`, `verify:subagent-reasoning` | Pass |
| `verify:paste`, `verify:rules-isolation` (16 October, source build) | Pass. The earlier project-rule failure came from rules discovered in parent folders and the home directory; discovery now stays inside the opened folder ([rule isolation](../recovery/rea-rules-isolation.md)) |
| Portable package (`npm run package:linux`): launch, profile in `electron-host/data/local`, restart persistence, Wayland app ID `openvision` | Pass |

### Open

| Check | Status |
| --- | --- |
| Windows-only verifiers (`verify:rules:windows`, `verify:legacy-memory:windows`, `benchmark:native`) | Not applicable |

## Linux-specific fixes made during verification

- **Keyring:** Chromium falls back to `basic_text` on desktops it does not
  recognize; VS Code then offers "Use weaker encryption", which writes
  `"password-store": "basic"` to the global `argv.json`. OpenVision now selects
  the Secret Service when one is reachable.
- **Agent approval:** upstream reports its Linux command sandbox as available and
  auto-runs Agent commands inside it; new profiles were also migrated to
  auto-run. OpenVision keeps approval-first behaviour, matching Windows.
- **Autocomplete truncation message:** the shared code-response reader gave
  Quick Edit's "smaller selection" advice for Tab completion (all platforms);
  autocomplete again says "Try a shorter context or another autocomplete model."
- **Git save race:** the Git verifier now waits for the file watcher after
  checkout instead of editing a stale document.
- **Profile redirection:** Linux inputs lack an installer `target`, so VS Code
  portable-mode detection could ignore `--user-data-dir`. Builds now set
  `target: "archive"`.
- **Launch arguments:** a bare `--disable-setuid-sandbox` followed by a folder
  made the editor read the folder as the flag's value; it is now
  `--disable-setuid-sandbox=true`.
- **Identity:** `desktopName` is `openvision.desktop` (Wayland app ID `openvision`).
- **Verification harness:** layout-independent shortcuts (`keyboard.dispatch:
  keyCode`), Project Home startup handling, POSIX write denial, bash/sh shell
  matrix, Linux path rules and a Chromium-family fixture browser.

Live Codex Easy provider runs on Linux: [live-provider-linux.md](live-provider-linux.md). Every success path was blocked by an insufficient account balance; the failure paths are recorded there.

## Not covered

After merging with the account integrations and themed account picker, Windows
checks passed the 49-test account suite, 124-test desktop suite, production source
build and native disposable-profile account switching/picker checks. Portable
platform checks passed 30 tests with one platform-specific skip. The desktop
suite used two concurrent workers and the complete recovery selected with
`OPENVISION_RECOVERY_DIR`. These merge checks do not repeat the native Linux
results above; the new account integrations still need native Linux verification.

Other distributions, X11 sessions, KDE/KWallet on a real Plasma session,
Linux ARM64, Wayland compositors other than Hyprland, and independent builds
without the original input (OV-804). macOS remains unverified (OV-902).
