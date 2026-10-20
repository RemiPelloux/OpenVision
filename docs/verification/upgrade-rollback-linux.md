# Upgrade, interruption and rollback on Linux x64 (OV-904)

Linux x64 only. Windows installer/upgrade cells, Authenticode and macOS
notarized updates are separate platform stories and are not covered here.

## What was built

| Piece | Entry point | Purpose |
| --- | --- | --- |
| Release pipeline | `npm run release:linux` (`desktop/release-linux.mjs`, `desktop/linux-release.mjs`) | Builds the portable package (optional `--version` for a controlled N+1), a deterministic `tar.gz` (sorted names, numeric root ownership, fixed mtime from the commit, gzip without name/time), a manifest with per-file and archive SHA-256, version, commit and `sourceClean`, and a detached `ssh-keygen -Y sign` signature (namespace `openvision-release`) from a key supplied by path or `OPENVISION_RELEASE_SIGNING_KEY`. Keys are never written to the repository or the release directory. |
| Release check | `npm run release:verify` (`desktop/release-verify.mjs`) | Fail-closed: signature over the exact manifest bytes against an allowed-signers file, manifest structure (schema, name, platform, arch, version-bound prefix and archive name, safe relative paths, no `electron-host/data`, no declared user data, required files), archive size, then SHA-256. `--deep` also extracts privately and compares every file. Nothing is extracted before the signature and digest are valid. |
| Installer | `npm run install:linux` / packaged `openvision-install` (`desktop/linux-install.mjs`) | Versioned side-by-side installs under one root, `current` symlink switched atomically by `rename`, staged extraction re-hashed while streaming and compared with the signed file list, pre-upgrade and pre-rollback profile backups, profile copy and format migration on the copy only, previous version kept for rollback, uninstall that keeps profiles and backups unless `--purge`, launcher entry and icon owned by the root. One installer at a time (lock reclaimed after a kill). Refuses while OpenVision holds the profile. |
| Profile format | `desktop/profile-format.mjs` | `openvision-profile.json` in the data directory records the format and the oldest package format that can open it. Format 1 adds only the marker, so format-0 packages (0.2.0-preview.7 and earlier) still open it. Rollback refuses a profile its target cannot open unless `--keep-previous-data`. |
| Native verifier | `npm run verify:upgrade:linux` (`desktop/verify-upgrade-linux.mjs`) | See [Native verification](#native-verification). |

Packages now also carry `openvision-install`, which runs the bundled installer
with OpenVision's own runtime (`ELECTRON_RUN_AS_NODE=1`), so upgrades, rollback
and uninstall need no system Node.js. The first install still uses Node.js 24
from a source checkout (or a manual `ssh-keygen -Y verify` plus `sha256sum`).

## Update strategy and endpoints

Updates are manual, side-by-side signed `tar.gz` installs managed by the
installer. There is no auto-updater: `productBranding` deletes `updateUrl`,
`backupUpdateUrl` and `checksums`, the packager never copies
`appimageupdatetool.AppImage`, and every launcher passes `--disable-updates`.
`desktop/branding.test.mjs` now asserts all three explicitly.

## Native verification

Host: Linux x64 container, 4 CPUs, Xvfb `1920x1080x24` inside `dbus-run-session`,
non-root user `ov`, no Secret Service (launches pass `--password-store=basic`,
keys stored as `v10`), a private temporary `XDG_RUNTIME_DIR` like a desktop
session. Installed for this work: `openssh-client` (for `ssh-keygen -Y`).

```sh
runuser -u ov -- env HOME=/home/ov PATH=/opt/nvm/versions/node/v24.18.0/bin:/usr/bin:/bin bash -c \
  'cd <repo> && xvfb-run -a -s "-screen 0 1920x1080x24" dbus-run-session -- \
   npm run verify:upgrade:linux -- --previous-runtime /home/ov/preview7/OpenVision'
```

`--previous-runtime` points at a source build of tag `v0.2.0-preview.7`
(`beec3932`) prepared from the same pinned input. Without it the cross-version
step is skipped.

| Run | Commit | Result | Notes |
| --- | --- | --- | --- |
| `upgrade-linux-NghLQr` | `ed7228ae` | Failed (development) | App exited at start: IPC socket path over 107 bytes. Fixed in `ae7452e5`. |
| `upgrade-linux-GAdDCW` | `ae7452e5` | Failed (development) | Bundled installer saw `node_modules.asar` as a directory at the SIGKILL-at-backup step. Fixed in `fbc84ea7`. |
| `upgrade-linux-4XxJrW` | `fbc84ea7` | **Passed** (first run of this code) | 13 launches, all steps below. |
| `upgrade-linux-0tkebc` | `80cf90ec` (merged `main`, clean rebuild) | **Passed**, first run | Adds the refused-rollback check (below). 32 steps, 13 launches. |
| `upgrade-linux-wApW6A` | `80cf90ec` (same build) | **Passed**, first run | Second independent run of the same head; same 32 steps. |

Observed in `upgrade-linux-4XxJrW`:

- Releases N (`0.2.0-preview.7`) and N+1 (`0.2.0-preview.7.1`, a controlled
  version-bumped fixture built from the same commit): 17,427 files each, each
  signed and self-verified. In an earlier run, two builds of the same commit
  produced byte-identical archives (SHA-256 `8b5b041e…`).
- A tampered N+1 archive is rejected by `release:verify` and by the installer.
  The install root's tree digest does not change.
- Fresh install of N under `strace`: no inet connects and no DNS lookups. The
  launcher entry points at `current`. The installed `product.json` has no
  `updateUrl` or `backupUpdateUrl`, and the manifest has no AppImage updater.
- Profile seeded through the product: settings (window-title marker), a
  provider with a fixture key against a loopback model, a chat answered by that
  model, a user rule, a project memory, and an extension (registry and folder).
- The installer was held, then its process group was SIGKILLed at `verify`,
  `extract`, `backup`, `data-copy`, `migrate` and `switch`. Each time `current`
  stayed on N, N's profile tree digest was unchanged, and N launched with every
  item present: title, extension command, rule, memory, provider, key decrypting
  to the fixture value, and chat rows.
- Upgrade with N's bundled `openvision-install` (no system Node), under
  `strace`: no network. It recovered the leftovers of the six killed runs, wrote
  a pre-upgrade backup and left N's profile untouched. Database rows in N+1
  equal the seeded rows. N+1 launched with every item present.
- The N+1 launch ran under `strace` plus the loopback proxy. There were 0
  traffic connects, 0 proxy requests, 0 lookups and no update URL in renderer
  requests. The one inet connect seen was loopback.
- From `80cf90ec`: with N+1's profile marked format 2 / minimum reader 2, the
  bundled `rollback` exits 1 (`cannot open the current profile (format 2)`).
  The install root's tree digest is unchanged and `current` stays on N+1, so the
  older executable never receives that store. The marker is then restored.
- N+1 wrote a new rule. Rollback (with a pre-rollback backup of both profiles)
  made N current, and N showed both the original data and the N+1 rule.
- Cross-version: the `v0.2.0-preview.7` tag build opened the format-1 profile
  that N and N+1 wrote, with every item present (downgrade tolerance). A fresh
  profile seeded by the tag build (no format marker) was adopted by an N+1
  install, migrated `0→1` and opened by N+1 with every item present (forward
  migration).
- The credential-free profile fixture exported from N (secret rows removed, no
  key bytes in any file, marker removed so it reads as format 0) was adopted by a
  fresh N+1 install and migrated `0→1`, with rows intact. It stays under the
  run's `logs/` folder and is not committed.
- Uninstall kept both profiles in `retained-data/` and kept 5 backups. It
  removed the launcher entry and icon. `--purge` removed the root.

Limitations: N+1 differs from N only in version. Format migration `0→1` adds
only the marker, so no store transformation was exercised. The format-2 refusal
uses an injected marker, not a real newer store. Agent edit/review history is
not seeded (chats, rules, memories, settings, provider key and an extension
are). Chats were checked in the
database, not in the chat history UI. Running without a Secret Service means the
keyring (`v11`) path was not covered here.
