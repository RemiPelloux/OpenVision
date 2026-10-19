# Linux completion worker report — OV-903 (Linux x64)

Branch `ov/linux-completion`, 18–19 October 2026. **Draft, updated as tasks complete.**

Host: Ubuntu 24.04.5 LTS x86_64 cloud container, kernel 6.18 (no AppArmor), 4 CPUs,
15 GB RAM, Node 24.18.0 tooling, Cursor 3.21.13 Linux input, source build of this
branch. Native runs as the non-root user `ov` inside `scripts/linux-cell.sh`
(Xvfb X11 or headless Weston, private D-Bus session, disposable plaintext
gnome-keyring unless `--no-keyring`). Locale: `LANG` unset (POSIX charmap).
Packages installed with apt: `gnome-keyring libsecret-tools desktop-file-utils
weston xdotool x11-utils`.

All model responses come from controlled local fixtures. Nothing here is live
inference, a Windows/macOS result or a published-package result.

(Sections are completed below as work lands.)
