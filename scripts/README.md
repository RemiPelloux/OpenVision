# Maintenance scripts

Run `npm run docs:check` to validate maintained documentation links and fragments.
Run `npm run recovery:verify` to check both published recovery archives.

[Recovery workflows](recovery/README.md) capture, extract, publish and verify the
versioned reference archive. Desktop build and runtime code remain in
[desktop/](../desktop/README.md); shared build dependencies remain in
[tooling/](../tooling/README.md).

Linux verification: [`linux-cell.sh`](linux-cell.sh) runs a command in one display
cell (`x11`, `wayland`, `gnome`, `kde`) with a private D-Bus session and a disposable
keyring ([`kwallet-login.py`](kwallet-login.py) for KDE);
[`linux-matrix/run.sh`](linux-matrix/run.sh) runs it inside a Fedora, Debian, GNOME or
KDE container. See the [Linux guide](../docs/guides/linux.md#verification-display-cells).
