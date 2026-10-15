import { chmod, cp, mkdir, readdir, lstat, writeFile, readFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { loadRuntime } from './source-assembly.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const { version } = JSON.parse(await readFile(join(root, 'package.json'), 'utf8'));
const target = `${process.platform}-${process.arch}`;
if (!['win32-x64', 'linux-x64', 'linux-arm64'].includes(target)) throw Error('Package on Windows x64 or Linux x64/arm64.');
const windows = process.platform === 'win32';
const destination = resolve(process.argv[2] ?? join(root, `build/packages/OpenVision-${target}`));
try { await lstat(destination); throw Error('Package destination already exists; choose a new directory.'); }
catch (error) { if (error.code !== 'ENOENT') throw error; }
const linuxLauncher = `#!/bin/sh
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

const linuxDesktopEntry = `#!/bin/sh
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

const { layout } = await loadRuntime(root);
const host = join(destination, 'electron-host');
// Cursor CLI wrappers, shell completions and the AppImage updater are not part of OpenVision.
const privateDirectories = new Set(['data', 'backups', 'logs', 'desktop', 'tooling', 'bin']);
const privateResources = new Set(['app', 'completions', 'appimageupdatetool.AppImage']);
const copyOptions = { recursive: true, errorOnExist: true, filter: async path => {
  if ((await lstat(path)).isSymbolicLink()) throw Error(`Package input contains an external link: ${path}`);
  return true;
} };
await mkdir(host, { recursive: true });
for (const entry of await readdir(layout.host)) {
  if (entry === 'resources' || privateDirectories.has(entry) || entry.startsWith('unins')) continue;
  await cp(join(layout.host, entry), join(host, entry), copyOptions);
}
for (const entry of await readdir(join(layout.host, 'resources'))) {
  if (privateResources.has(entry)) continue;
  await cp(join(layout.host, 'resources', entry), join(host, 'resources', entry), copyOptions);
}
await cp(join(root, 'source/app'), join(host, 'resources/app'), copyOptions);
// Main-process IPC helpers resolve their owned support files three directories
// above resources/app/out. Materialize that layout rather than shipping junctions.
await mkdir(join(host, 'desktop'), { recursive: true });
for (const entry of await readdir(join(root, 'desktop'))) {
  if (!/\.(mjs|js|cjs)$/.test(entry) || /(?:\.test\.|^verify|^benchmark|^test-)/.test(entry)) continue;
  await cp(join(root, 'desktop', entry), join(host, 'desktop', entry));
}
for (const name of ['jsonc-parser', 'vscode-uri'])
  await cp(join(root, 'tooling/node_modules', name), join(host, 'tooling/node_modules', name), copyOptions);
await writeFile(join(host, 'package.json'), JSON.stringify({ name: 'openvision-portable-runtime', type: 'module', private: true }));
let executable;
if (windows) {
  executable = join(host, 'OpenVision.exe');
  await writeFile(join(destination, 'OpenVision.cmd'), `@echo off\r\nsetlocal\r\nset "ELECTRON_RUN_AS_NODE="\r\nset "OPENVISION_STARTUP="\r\nif "%~1"=="" set "OPENVISION_STARTUP=--glass"\r\nstart "" "%~dp0electron-host\\OpenVision.exe" --user-data-dir "%~dp0electron-host\\data\\local" --extensions-dir "%~dp0electron-host\\data\\local-extensions" --disable-updates --disable-telemetry --disable-crash-reporter %OPENVISION_STARTUP% %*\r\n`);
  await writeFile(join(destination, 'README.txt'), 'OpenVision Windows x64 portable\r\n\r\nDouble-click OpenVision.cmd. No Node.js, npm or separate editor installation is required.\r\nOpen a project with File > Open Folder. Add your own provider URL and key in Models settings.\r\nEditable application code: electron-host/resources/app.\r\nYour new local profile: electron-host/data/local. No author profile or keys are included.\r\nPreserve the data directory when updating. Third-party license notices remain with the application.\r\n');
} else {
  executable = join(host, 'openvision');
  await writeFile(join(destination, 'OpenVision'), linuxLauncher, { mode: 0o755 });
  await writeFile(join(destination, 'install-desktop-entry.sh'), linuxDesktopEntry, { mode: 0o755 });
  await cp(join(root, 'source/app/resources/linux/code.png'), join(destination, 'openvision.png'));
  // A copied chrome-sandbox cannot keep root ownership; drop the meaningless setuid bit.
  await chmod(join(host, 'chrome-sandbox'), 0o755).catch(error => { if (error.code !== 'ENOENT') throw error; });
  await writeFile(join(destination, 'README.txt'), `OpenVision Linux ${process.arch} portable\n\nRun ./OpenVision. No Node.js, npm or separate editor installation is required.\nOptional: ./install-desktop-entry.sh adds OpenVision to your application launcher.\nOpen a project with File > Open Folder. Add your own provider URL and key in Models settings.\nEditable application code: electron-host/resources/app.\nYour new local profile: electron-host/data/local. No author profile or keys are included.\nAPI keys use your desktop secret service (GNOME Keyring or KWallet) when available.\nPreserve the data directory when updating. Third-party license notices remain with the application.\n`);
}
await writeFile(join(destination, 'openvision-package.json'), JSON.stringify({ name: 'OpenVision', version, platform: process.platform, arch: process.arch, profileIncluded: false, credentialsIncluded: false }, null, 2));
console.log(JSON.stringify({ destination, executable }));

