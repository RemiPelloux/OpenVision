// Layout shared by the portable packager, the Linux installer and their tests.
// Updates are manual: launchers pass --disable-updates and the upstream updater
// (the AppImage update tool) is never copied into a package.
// Cursor CLI wrappers, shell completions and the AppImage updater are not part of OpenVision.
export const privateDirectories = new Set(['data', 'backups', 'logs', 'desktop', 'tooling', 'bin']);
export const privateResources = new Set(['app', 'completions', 'appimageupdatetool.AppImage']);

// Arguments every Linux launch passes before the user's own (see linuxLauncher).
export const portableArguments = host => ['--user-data-dir', `${host}/data/local`, '--extensions-dir', `${host}/data/local-extensions`,
  '--disable-updates', '--disable-telemetry', '--disable-crash-reporter'];

export const linuxLauncher = `#!/bin/sh
set -eu
here=$(CDPATH= cd -- "$(dirname -- "$(readlink -f -- "$0")")" && pwd)
host="$here/electron-host"
unset ELECTRON_RUN_AS_NODE
[ "$#" -eq 0 ] && set -- --glass
set -- --user-data-dir "$host/data/local" --extensions-dir "$host/data/local-extensions" \\
  --disable-updates --disable-telemetry --disable-crash-reporter "$@"
# A portable copy of chrome-sandbox is not root-owned setuid; use the namespace sandbox.
sandbox="$host/chrome-sandbox"
if [ ! -u "$sandbox" ] || [ "$(stat -c %u "$sandbox" 2>/dev/null)" != 0 ]; then set -- --disable-setuid-sandbox=true "$@"; fi
"$host/openvision" "$@" >/dev/null 2>&1 &
`;

export const linuxDesktopEntry = `#!/bin/sh
set -eu
here=$(CDPATH= cd -- "$(dirname -- "$(readlink -f -- "$0")")" && pwd)
data="\${XDG_DATA_HOME:-$HOME/.local/share}"
mkdir -p "$data/applications" "$data/icons/hicolor/256x256/apps"
cp "$here/openvision.png" "$data/icons/hicolor/256x256/apps/openvision.png"
cat > "$data/applications/openvision.desktop" <<EOF
[Desktop Entry]
Name=OpenVision
Comment=AI coding workspace with your own models
Exec="$here/OpenVision" %F
Icon=openvision
Type=Application
StartupNotify=true
StartupWMClass=openvision
Categories=Development;IDE;TextEditor;
MimeType=inode/directory;
EOF
command -v update-desktop-database >/dev/null 2>&1 && update-desktop-database "$data/applications" || true
echo "Installed $data/applications/openvision.desktop"
`;

// Upgrades, rollback and uninstall from an installed copy without a system
// Node.js: the packaged runtime runs the bundled installer as Node. Inside an
// install root (versions/<version>/), that root is the default.
export const linuxInstaller = `#!/bin/sh
set -eu
here=$(CDPATH= cd -- "$(dirname -- "$(readlink -f -- "$0")")" && pwd)
root=$(dirname -- "$(dirname -- "$here")")
if [ -z "\${OPENVISION_INSTALL_ROOT:-}" ] && [ -f "$root/openvision-install.json" ]; then export OPENVISION_INSTALL_ROOT="$root"; fi
ELECTRON_RUN_AS_NODE=1 ELECTRON_NO_ASAR=1 exec "$here/electron-host/openvision" "$here/electron-host/desktop/linux-install.mjs" "$@"
`;
