// Shell scripts shipped in the Linux portable package. Kept separate from
// package-portable.mjs so unit tests can exercise them without packaging.

export const linuxLauncher = `#!/bin/sh
set -eu
here=$(CDPATH= cd -- "$(dirname -- "$(readlink -f -- "$0")")" && pwd)
host="$here/electron-host"
unset ELECTRON_RUN_AS_NODE
# Chromium maps file URLs through the locale's character set: under C/POSIX a
# package path with non-ASCII characters fails to load the workbench. Switch
# only the character type to UTF-8; language and formats stay unchanged.
charmap=$(locale charmap 2>/dev/null || true)
if [ -n "$charmap" ] && [ "$charmap" != UTF-8 ]; then
  export LC_CTYPE=C.UTF-8
  [ -z "\${LC_ALL:-}" ] || export LC_ALL=C.UTF-8
fi
[ "$#" -eq 0 ] && set -- --glass
set -- --user-data-dir "$host/data/local" --extensions-dir "$host/data/local-extensions" \\
  --disable-updates --disable-telemetry --disable-crash-reporter "$@"
# A portable copy of chrome-sandbox is not root-owned setuid; use the namespace sandbox.
sandbox="$host/chrome-sandbox"
if [ ! -u "$sandbox" ] || [ "$(stat -c %u "$sandbox" 2>/dev/null)" != 0 ]; then set -- --disable-setuid-sandbox=true "$@"; fi
"$host/openvision" "$@" >/dev/null 2>&1 &
`;

// Exec quoting follows the Desktop Entry specification: inside a quoted
// argument '"', '`', '$' and '\' take a backslash, then string-value escaping
// doubles every backslash; a literal '%' is written '%%'.
export const linuxDesktopEntry = `#!/bin/sh
set -eu
here=$(CDPATH= cd -- "$(dirname -- "$(readlink -f -- "$0")")" && pwd)
case "$here" in *"
"*) echo "The package path must not contain a line break." >&2; exit 1 ;; esac
data="\${XDG_DATA_HOME:-$HOME/.local/share}"
exec_path=$(printf '%s' "$here/OpenVision" | sed -e 's/[\\\\"\`$]/\\\\&/g' -e 's/\\\\/\\\\\\\\/g' -e 's/%/%%/g')
mkdir -p "$data/applications" "$data/icons/hicolor/256x256/apps"
cp "$here/openvision.png" "$data/icons/hicolor/256x256/apps/openvision.png"
cat > "$data/applications/openvision.desktop" <<EOF
[Desktop Entry]
Name=OpenVision
Comment=AI coding workspace with your own models
Exec="$exec_path" %F
Icon=openvision
Type=Application
StartupNotify=true
StartupWMClass=openvision
Categories=Development;IDE;TextEditor;
MimeType=inode/directory;
X-OpenVision-Entry=portable
EOF
command -v update-desktop-database >/dev/null 2>&1 && update-desktop-database "$data/applications" || true
echo "Installed $data/applications/openvision.desktop"
`;

// Removes only what install-desktop-entry.sh created: the launcher entry and
// its icon. An openvision.desktop written by something else is left alone.
export const linuxDesktopEntryRemoval = `#!/bin/sh
set -eu
data="\${XDG_DATA_HOME:-$HOME/.local/share}"
entry="$data/applications/openvision.desktop"
icon="$data/icons/hicolor/256x256/apps/openvision.png"
if [ -f "$entry" ] && ! grep -qx 'X-OpenVision-Entry=portable' "$entry"; then
  echo "Kept $entry: it was not installed by install-desktop-entry.sh." >&2; exit 1
fi
rm -f -- "$entry" "$icon"
command -v update-desktop-database >/dev/null 2>&1 && [ -d "$data/applications" ] && update-desktop-database "$data/applications" || true
echo "Removed the OpenVision launcher entry from $data"
`;
