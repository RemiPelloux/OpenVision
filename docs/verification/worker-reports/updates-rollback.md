# Worker report: OV-904 updates and rollback (Linux x64)

Branch `ov/updates-rollback`. The first round was merged into `main`; the
resumed round fast-forwarded the branch to `origin/main` (`4543994b`) and made a
clean rebuild before the final native runs. Evidence:
[Upgrade, interruption and rollback on Linux x64](../upgrade-rollback-linux.md).

## Summary

- **Release pipeline** (`release:linux`, `release:verify`): a deterministic
  `tar.gz`, a manifest with per-file and archive SHA-256, version, commit and
  source-clean flag, and an `ssh-keygen -Y` signature from an owner-supplied key.
  Verification fails closed and runs before anything is installed.
- **Installer** (`install:linux`, packaged as `openvision-install`):
  side-by-side versions, an atomic `current` switch, staged and re-verified
  extraction, profile copy and migration with pre-upgrade and pre-rollback
  backups, rollback, uninstall that keeps profiles and backups, `--purge`, and
  launcher entry and icon handling.
- **Native verifier** `verify:upgrade:linux`: after two development failures
  (both real defects, fixed at their owner), it passed at `fbc84ea7`
  (`upgrade-linux-4XxJrW`). It then passed twice, each on the first run, on a
  clean rebuild of merged `main` at `80cf90ec` (`upgrade-linux-0tkebc`,
  `upgrade-linux-wApW6A`).

## Tasks

| # | Task | State |
| --- | --- | --- |
| 1 | `release:linux` + `release:verify`, tamper tests | Done (14 unit tests, including tamper, mismatch, namespace, untrusted key, unsafe manifest entries and asar under the packaged runtime) |
| 2 | Install, upgrade, rollback and uninstall tool | Done (20 unit tests, including real SIGKILL at every phase, stale-lock recovery, running-app refusal, retention, purge and the socket-path preflight) |
| 3 | `verify:upgrade:linux` | Done. Two first-run passes on the final head. The resumed round added a native check that rollback refuses a profile the older version cannot open. |
| 4 | Cross-version profile fixture | Done in the verifier. The credential-free fixture from current code was migrated `0→1`. The `v0.2.0-preview.7` tag build opened the N/N+1 profile (downgrade), and an N+1 install migrated and opened a profile the tag build wrote (forward). The fixture is generated per run and not committed (no profiles in git). |
| 5 | Explicit assertion that update endpoints are unreachable | Done in `desktop/branding.test.mjs` |

## Defects found and fixed

| Defect | Owner | Commit |
| --- | --- | --- |
| Without `XDG_RUNTIME_DIR` the editor binds its IPC socket inside the profile. A versioned in-package profile under a deep root passes the 107-byte socket limit, and the app exits at start (`listen EINVAL`, run `upgrade-linux-NghLQr`). | `desktop/linux-install.mjs` `socketPathCheck`: refuses the root when `XDG_RUNTIME_DIR` is unset, warns when it is set | `ae7452e5` |
| The packaged installer runs with `ELECTRON_RUN_AS_NODE`. Electron's `fs` then reports `node_modules.asar` as a directory, so a valid signed release was rejected (run `upgrade-linux-GAdDCW`). | `desktop/linux-release.mjs` (`process.noAsar`) and the wrapper (`ELECTRON_NO_ASAR=1`) | `fbc84ea7` |

## Verification

| Command | Result |
| --- | --- |
| `node --test desktop/linux-release.test.mjs desktop/linux-install.test.mjs` | 34/34 pass at `fbc84ea7`. The asar test failed with the fix removed, as expected. |
| `node --test desktop/profile-format.test.mjs desktop/branding.test.mjs` | 4/4 and 4/4 pass |
| `npm run verify:upgrade:linux -- --previous-runtime /home/ov/preview7/OpenVision` (as `ov`, Xvfb, dbus) | `upgrade-linux-NghLQr` failed and `upgrade-linux-GAdDCW` failed (development runs, defects above). `upgrade-linux-4XxJrW` passed at `fbc84ea7`. On a clean rebuild of `main` at `80cf90ec`: `upgrade-linux-0tkebc` **passed** (first run) and `upgrade-linux-wApW6A` **passed** (first run). No retries. |
| `npm run test:updates` on merged `main` | 42/42 pass |
| `npm run docs:check` | Pass (run before the final commit) |

Host notes: 4 CPUs; native runs one at a time. Installed `openssh-client`.
The tag build `v0.2.0-preview.7` lives outside the repo in a git worktree at
`/home/ov/preview7/OpenVision`.

## Recommendation

OV-904 Linux x64: **promote to Verified on Linux x64**. Every Linux clause has
native evidence on the final head: release provenance, the installer and
uninstaller, interrupted upgrade at every phase, profile migration (including
across `v0.2.0-preview.7`), rollback, refusal of an incompatible store,
user-data retention and purge, and no update endpoints. The remaining
limitations are listed in the evidence doc and under Open risks.

## Moved to platform/live stories

Windows installer, upgrade and uninstall cells, Authenticode signing and macOS
notarized updates. The keyring (`v11`) variant of key retention across an
upgrade belongs on a desktop with a Secret Service.

## Defaults pending owner decision

- Update strategy: manual side-by-side signed `tar.gz` installs through the
  installer. There is no auto-updater and no original endpoints.
- The profile stays in each version's `electron-host/data` and is copied
  forward. The alternative, `~/.local/share/openvision`, is documented and not
  used.
- Default root is `${XDG_DATA_HOME:-~/.local/share}/OpenVision`. Only the current
  and previous versions are kept, and backups are never pruned automatically.
- Signing uses `ssh-keygen -Y` (namespace `openvision-release`, identity
  `openvision-release`) with an owner-held key. No allowed-signers file is
  committed yet; the owner must publish the public key.
- The first install needs Node.js 24 (or a manual `ssh-keygen` check plus
  `sha256sum`). Later operations use the bundled runtime.

## Open risks

- Format `0→1` adds only a marker; the first real store migration will need its
  own fixture.
- Long usernames with deep custom roots and no `XDG_RUNTIME_DIR` are refused
  rather than supported.
- Agent edit/review history is not seeded by the verifier. It shares
  `state.vscdb` with the chats that are checked, but it has no dedicated
  assertion.
- The extension registry stores absolute locations. Extensions loaded after the
  path changed between versions in every run (relocation works), but only one
  extension fixture was tried.

## Status

The first round ended on the coordinator's stop request with one native pass.
The resumed round added the native refused-rollback check and made two
first-run passes on a clean rebuild of merged `main`. No OV-904 Linux task
remains open.
