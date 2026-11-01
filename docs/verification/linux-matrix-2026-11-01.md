# Linux distribution and desktop matrix (OV-905) — 1 November 2026

OV-905 asks for the Linux critical suite on each claimed distribution, on real GNOME and
KDE sessions (with KWallet), on an Ubuntu 23.10+ desktop with its AppArmor
user-namespace policy, and on ARM64 with its own pinned input. This run covers the
first four cells. The story stays **Partial**: the AppArmor and ARM64 cells need
machines this cloud container does not have (see [Remaining cells](#remaining-cells)).

## How the cells ran

Clean source build of commit `76eed26e` (Cursor 3.21.13 Linux x64 input, Electron
42.10.0), then `npm run verify:critical -- --subset linux-critical` once per cell with
[`scripts/linux-matrix/run.sh`](../../scripts/linux-matrix/run.sh). Each cell is a
container built from `scripts/linux-matrix/Containerfile.*`:

- the checkout, its build and the pinned Node.js 24.18.0 are mounted at their own
  paths;
- the suite runs as the checkout's owner (non-root);
- it runs through [`scripts/linux-cell.sh`](../../scripts/linux-cell.sh): a private
  D-Bus session and a disposable keyring per cell.

**Containers share the host kernel** (6.18, no AppArmor). They check a distribution's
user space (glibc, NSS, GTK, D-Bus, keyring services) and a desktop's compositor and
secret service, not its kernel.

| Cell | User space | Display | Secret service | Suite run | Result |
| --- | --- | --- | --- | --- | --- |
| Fedora 42 | glibc 2.41, gnome-keyring 48.0 | X11, Xvfb | gnome-keyring (`gnome_libsecret`) | `critical-suite-O4w4Sz` | **20/20 first time** |
| Debian 13 (trixie) | glibc 2.41, gnome-keyring 48.0 | X11, Xvfb | gnome-keyring (`gnome_libsecret`) | `critical-suite-3zR1Ow` | **20/20 first time** |
| GNOME on Fedora 42 | GNOME Shell / Mutter 48.8, headless, virtual monitor 1920×1080 | Wayland, with Xwayland | gnome-keyring (`gnome_libsecret`) | `critical-suite-sTspiH` | **20/20 first time** |
| KDE Plasma on Fedora 42 | KWin 6.6.4 (virtual), plasma-workspace 6.6.4, KF6 KWallet 6.25 | Wayland, with Xwayland | KWallet (`kwallet6`, ksecretd); gnome-keyring removed | `critical-suite-rgNjFl` | **20/20 first time** |

Each cell's run lists these 20 entries:

- package-linux, welcome, project-home, project, explorer;
- development, git, agent, completion, extensions;
- linux-secrets, review-storage, model-discovery, model-discovery-host;
- mcp-session, local-metadata, local-startup;
- onboarding, account-switch, account-picker.

Each one passed on its first attempt, with no retry used. The suites ran one at a time.

### Desktop sessions

These are the session details behind the desktop rows of the table:

- **GNOME:** `gnome-shell --headless --wayland --virtual-monitor`, with a system bus and
  a mocked logind (python-dbusmock). The session variables are
  `XDG_CURRENT_DESKTOP=GNOME`, `XDG_SESSION_DESKTOP=gnome` and `DESKTOP_SESSION=gnome`.
  OpenVision ran on Wayland (`--ozone-platform=wayland`).
- **KDE:** `kwin_wayland --virtual --xwayland`, with the Plasma session variables
  (`XDG_CURRENT_DESKTOP=KDE`, `DESKTOP_SESSION=plasma`, `KDE_FULL_SESSION=true`,
  `KDE_SESSION_VERSION=6`).
  - The default wallet is opened the way a Plasma login opens it.
    [`scripts/kwallet-login.py`](../../scripts/kwallet-login.py) performs pam_kwallet's
    `--pam-login` handoff: a PBKDF2-SHA512 key from the per-user salt, then the session
    environment over the socket.
  - `verify:linux-secrets` (`linux-secrets-verification-85DrTx`) found Chromium on its
    own KDE choice (no `--password-store` switch). The backend was `kwallet6`, with
    encryption available, and a migrated profile kept the same backend.
- On GNOME (`FNRvwd`) the backend was `gnome_libsecret`. On a GNOME or KDE session whose
  keyring is unreachable, the verifier now expects the product's "Saved for this session
  only" notice instead of the weaker-store choice offered on unrecognized desktops.

## Findings fixed during the matrix

Earlier rounds on the same cells (`mej09K`, `ZKCjR1`, `1pkZ9X`, `rnSCxo`, `guSO0l`)
found these issues. Every one was fixed before the final runs above. Runs that failed
because the disk filled (`ENOSPC`, `package-linux` free-space gate) were discarded and
are not counted.

| Where | Symptom | Cause | Fix |
| --- | --- | --- | --- |
| Product, all Linux (seen on Debian, `verify:project-home`, 4 of 6 runs) | Uncaught `No TM Grammar registered for this language.` in the editor window | The background tokenization worker's `getOrCreateGrammar` did not catch a grammar miss and kept the rejected promise; the main thread already treats it as "no tokenizer" | [`textmate-worker-customization.mjs`](../../desktop/textmate-worker-customization.mjs): the miss resolves `null` and is forgotten; other errors still reject. Debian 4/4 afterwards |
| Verifier, Fedora and Debian (`verify:explorer`) | Delete in the context menu not applied | Click during the menu's re-layout when it does not fit below the pointer | Wait until the item takes focus before clicking |
| Verifier, Debian (`verify:agent`) | Command fixture exit 127 | The Agent's login shell had no `node` on its PATH in the image | Matrix image adds Node.js to login shells |
| Verifier, KDE (`verify:explorer` measurement) | `idle.inotifyAddWatch 2 exceeds budget 0` | GLib's keyfile settings backend retries a missing `~/.config/glib-2.0/settings` every 4 s where dconf is absent; each call fails with `ENOENT` and adds no watch | Budgets count watches added; failed calls are reported as `inotifyAddWatchFailed` |
| Verifier, KDE (`verify:review-storage`, 3 of 3) | Quick Edit prompt never opened | The Ctrl+K chord was pressed while the model picker was still closing | Wait for the picker to close (also in `verify:inline-edit`); KDE 2/2 then the suite |
| Verifier, GNOME and KDE (`verify:linux-secrets`) | Failed on a real desktop | It assumed an unrecognized desktop | Desktop-aware expectations (above) |

## Remaining cells

| Cell | Why it is not here | What it needs |
| --- | --- | --- |
| Ubuntu 23.10+ desktop, AppArmor unprivileged user-namespace restriction | The policy is enforced by the kernel. This container's kernel is built without AppArmor (`CONFIG_SECURITY_APPARMOR` unset) and has no `/dev/kvm` for a VM | An Ubuntu 24.04 (or later) desktop or VM with AppArmor enabled: `scripts/linux-cell.sh x11 -- npm run verify:critical -- --subset linux-critical` |
| ARM64 | qemu-user emulation breaks Chromium's seccomp sandbox, so a run there would not be faithful. The pinned input is identified: the Cursor 3.21.13 linux-arm64 input, 301,828,616 bytes, SHA-256 `f6453aae770e6eb7404fa1a56e1c3e651898ffd161d20e653fea7fedde650296` | An ARM64 Linux machine (Raspberry Pi 5 with 8 GB, Ampere or Graviton VM): add the input to `desktop/linux-input.mjs`, build, run the suite |

Unavailable machines are blockers, not passes. OV-905 stays **Partial**, and the ledger
stays **36/44**.

## Reproduce

```sh
scripts/linux-matrix/run.sh build fedora      # also: debian, gnome, kde
scripts/linux-matrix/run.sh kde -- npm run verify:critical -- --subset linux-critical
```

Docker or Podman. Set `OPENVISION_MATRIX_BASE` to pull the base image from a mirror. To
trust a proxy CA during the image build, put it in `scripts/linux-matrix/extra-ca.crt`;
the file is git-ignored and never committed.
