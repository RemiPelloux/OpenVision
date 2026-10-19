# Run OpenVision on Linux

OpenVision runs natively on **Linux x64**. Linux builds are produced locally
from the pinned upstream editor input (Cursor **3.21.13**, the same release the
Windows package is built from), then customized into OpenVision. No Windows
files, Wine or emulation are involved.

Verified on 15 October 2026: Omarchy (Arch Linux based), kernel 7.2,
Hyprland on **Wayland**, x86_64, gnome-keyring Secret Service, AZERTY
keyboard. See [Linux verification](../verification/linux-verification.md) for the exact
evidence and the platform matrix that has not been tested yet.

## Requirements

| Need | Notes |
| --- | --- |
| Linux x64 with glibc | ARM64 needs its own native input; see *Other inputs* below |
| Node.js **24.18.0** or newer | Build tooling only (`.nvmrc`); the app ships its own runtime |
| Git | Clone, and the Git workflows inside the editor |
| Wayland or X11 desktop | Electron selects Wayland automatically when available |
| Unprivileged user namespaces | Chromium's sandbox; enabled by default on most distributions |
| A Secret Service (recommended) | gnome-keyring, KeePassXC or KWallet, so API keys are encrypted with your login keyring |
| `dbus-send` (recommended) | From the `dbus` package; used once at startup to find the Secret Service |
| About **3 GiB** free | Pinned input (~291 MiB), recovery, editable source and profile |

## Build and launch

```sh
git clone https://github.com/RemiPelloux/OpenVision.git
cd OpenVision
npm ci --prefix tooling
npm run prepare:desktop     # downloads and verifies the pinned Linux input
npm start                   # builds once, then opens Project Home
```

`prepare:desktop` downloads `Cursor-3.21.13-x86_64.AppImage` into
`build/inputs/`, checks its size and **SHA-256**
(`285eaa38de049c44322ec9365ff9d48337ddacf43234041248a723cb44ade25b`), extracts it
without FUSE, and formats every application script into a readable recovery
under `build/recovery/`. A distribution package of a different version (for
example Arch's `cursor-bin`) is rejected, because OpenVision's customizations
target 3.21.13 exactly.

`npm start` (or `./start-openvision.sh`) assembles the editable application
under `source/app/` and the native host under `electron-host/`, applies every
OpenVision customization and launches with the local profile in `data/local/`.
Later launches reuse the build. Pass a folder to open it: `npm start -- ~/code/app`.

### Other inputs

Use your own extracted installation of the same version instead of the download:

```sh
npm run prepare:desktop -- --installation /path/to/squashfs-root/usr/share/cursor
```

## Portable package

```sh
npm run package:linux                       # build/packages/OpenVision-linux-x64
tar -C build/packages -czf OpenVision-linux-x64.tar.gz OpenVision-linux-x64
```

The package needs no Node.js. Extract it to a writable folder and run
`./OpenVision`. Run `./install-desktop-entry.sh` once to add OpenVision to your
application launcher (`~/.local/share/applications/openvision.desktop`).
Editable application code is under `electron-host/resources/app/` and your
profile under `electron-host/data/local/`. Keep `data/` when updating, or use
the installer below, which does that for you.

## Install, upgrade and rollback

Signed Linux x64 releases consist of three files:
`OpenVision-<version>-linux-x64.tar.gz`, its `.manifest.json` (version, commit,
SHA-256 of the archive and of every file) and `.manifest.json.sig`, an
`ssh-keygen -Y` signature over the manifest. You also need the publisher's
**allowed signers** file (one line: `openvision-release namespaces="openvision-release" ssh-ed25519 AAAA…`),
obtained from the publisher separately from the release.

Check a download without installing it (rejects any tampered, truncated,
renamed or wrongly signed file; `--deep` also compares every extracted file):

```sh
npm run release:verify -- --archive OpenVision-<version>-linux-x64.tar.gz --allowed-signers allowed_signers --deep
```

Install (first time, from a source checkout with Node.js 24):

```sh
npm run install:linux -- install --archive OpenVision-<version>-linux-x64.tar.gz --allowed-signers allowed_signers
```

Later upgrades, rollback and uninstall run from the installed copy and need no
Node.js (`openvision-install` uses OpenVision's own runtime):

```sh
~/.local/share/OpenVision/current/openvision-install upgrade --archive OpenVision-<new>-linux-x64.tar.gz --allowed-signers allowed_signers
~/.local/share/OpenVision/current/openvision-install rollback
~/.local/share/OpenVision/current/openvision-install status
~/.local/share/OpenVision/current/openvision-install uninstall            # keeps your profiles and backups
~/.local/share/OpenVision/current/openvision-install uninstall --purge    # removes everything under the install root
```

| What | Where (default root `${XDG_DATA_HOME:-~/.local/share}/OpenVision`, change with `--root`) |
| --- | --- |
| Launched version | `current` → `versions/<version>` (switched atomically) |
| Your profile | `versions/<version>/electron-host/data/`, copied into each new version |
| Backups | `backups/<time>-pre-upgrade-<from>-to-<to>/` and `…-pre-rollback-…/` |
| After uninstall | `retained-data/<version>-<time>/`; a later install adopts the newest one |
| Launcher entry | `~/.local/share/applications/openvision.desktop` (`Exec` points at `current`) |

How it protects your work:

- Nothing is extracted until the signature, manifest and archive digest are
  valid; the extracted tree must then match the signed file list exactly.
- The new version gets a **copy** of your profile; the installed version and
  its profile are never modified, so an interrupted upgrade (crash, power loss,
  `kill -9`) leaves the old version launching as before. The next installer run
  discards the interrupted work.
- The previous version stays installed for `rollback`, which carries your
  current profile (including work the newer version wrote) back to it, after
  backing up both. If a future profile format cannot be opened by the older
  version, rollback refuses unless you pass `--keep-previous-data`, which returns
  to that version's own older profile.
- Quit OpenVision first: the installer refuses while the profile is in use.
- Desktop sessions set `XDG_RUNTIME_DIR`, where the editor keeps its IPC
  sockets. Without it the sockets live in the profile, whose path must then stay
  under the 107-byte Unix socket limit; the installer refuses a `--root` that is
  too long in that case (and warns when it is long but `XDG_RUNTIME_DIR` is set).
- Only the current and previous versions are kept; backups are never pruned
  automatically.

Your profile stays inside each version folder (the same layout as a portable
copy), moved forward by the installer. A user-wide alternative,
`~/.local/share/openvision` independent of versions, is not used yet.

## API keys and the keyring

Provider keys are encrypted with Electron `safeStorage`. Chromium only
auto-detects a keyring on GNOME-family and KDE desktops; on other sessions
(Hyprland, Sway, i3, …) it would silently fall back to its built-in
`basic_text` key even with gnome-keyring running. OpenVision fixes this at
startup:

| Situation | Result |
| --- | --- |
| Secret Service running or D-Bus activatable, non-KDE desktop | `gnome-libsecret`; keys use your keyring (`v11`) |
| KDE / Plasma | Chromium's own choice (KWallet) |
| `--password-store=…` or `"password-store"` in `~/.openvision-local/argv.json` | Your choice is respected |
| No Secret Service | Chromium's choice; OpenVision asks before using weaker storage |

Keys saved before this fix (`basic_text`, `v10`) remain readable after the
switch. If you previously accepted **Use weaker encryption**, OpenVision keeps
honouring it. To move to the keyring, delete the `"password-store": "basic"`
line from `~/.openvision-local/argv.json` and restart. Re-enter keys after
moving to a new machine.

## Capability differences from Windows

| Area | Linux behaviour |
| --- | --- |
| Agent commands | Wait for your **Run** approval, as on Windows. Upstream would auto-run them inside its Linux command sandbox; OpenVision reports that sandbox as unavailable so approval stays explicit. You can still choose an auto-run mode in Agent settings |
| Agent shell processes | Uses the editor's native process handling; the Windows job-object ownership layer is Windows-only |
| C/C++ (`npm run setup:cpp`) | Downloads the pinned official clangd 23.1.0 Linux x64 archive and the vscode-clangd 0.6.0 extension, as on Windows; needs `unzip`. Diagnostics, completion, definition, references, rename and formatting are verified with GCC and Clang projects (see [C and C++](cpp-support.md#linux-x64)). Linux arm64 has no pinned build |
| Python, Go, Rust | Syntax highlighting only, as on Windows: no language server is bundled or set up |
| Chromium sandbox | Uses the user-namespace sandbox. A copied `chrome-sandbox` cannot keep root setuid, so launchers pass `--disable-setuid-sandbox=true` (the explicit value stops the editor from reading a following folder path as the flag's value) |
| Updates | Manual: the signed-release installer above, or a new portable folder. The AppImage updater is not packaged and the original update endpoints are removed |
| Keyboard shortcuts | Follow your physical layout (for example AZERTY), as in VS Code on Linux |

## Troubleshooting

- **Settings or keys disappear between launches:** make sure no `data/` folder
  sits two levels above `resources/app`. Linux builds set an explicit installer
  `target` so VS Code portable mode cannot override `--user-data-dir`.
- **"OS keyring couldn't be identified":** start a Secret Service (for example
  `gnome-keyring-daemon --start --components=secrets`) and restart OpenVision.
- **Sandbox errors at launch:** enable unprivileged user namespaces
  (`kernel.unprivileged_userns_clone=1`; on Ubuntu, the AppArmor userns policy).
