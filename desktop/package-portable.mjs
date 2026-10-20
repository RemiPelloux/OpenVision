import { chmod, cp, mkdir, readdir, lstat, writeFile, readFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { loadRuntime } from './source-assembly.mjs';
import { profileFormat } from './profile-format.mjs';
import { linuxDesktopEntry, linuxDesktopEntryRemoval, linuxInstaller, linuxLauncher, privateDirectories, privateResources } from './portable-layout.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2), versionIndex = args.indexOf('--version');
// A release may carry an explicit version (for example a test N+1 built from the same commit).
const version = versionIndex < 0 ? JSON.parse(await readFile(join(root, 'package.json'), 'utf8')).version : args[versionIndex + 1];
if (!/^[0-9A-Za-z][0-9A-Za-z.+-]{0,63}$/.test(version ?? '')) throw Error('Invalid package version.');
if (versionIndex >= 0) args.splice(versionIndex, 2);
// The upstream-host build packages official release binaries instead of the build host.
const nativeHostIndex = args.indexOf('--native-host');
const nativeHost = nativeHostIndex < 0 ? undefined : resolve(args[nativeHostIndex + 1]);
if (nativeHostIndex >= 0) args.splice(nativeHostIndex, 2);
const target = `${process.platform}-${process.arch}`;
if (!['win32-x64', 'linux-x64', 'linux-arm64'].includes(target)) throw Error('Package on Windows x64 or Linux x64/arm64.');
const windows = process.platform === 'win32';
const destination = resolve(args[0] ?? join(root, `build/packages/OpenVision-${target}`));
try { await lstat(destination); throw Error('Package destination already exists; choose a new directory.'); }
catch (error) { if (error.code !== 'ENOENT') throw error; }
const { layout } = await loadRuntime(root);
const source = nativeHost ?? layout.host;
const host = join(destination, 'electron-host');
const copyOptions = { recursive: true, errorOnExist: true, filter: async path => {
  if ((await lstat(path)).isSymbolicLink()) throw Error(`Package input contains an external link: ${path}`);
  return true;
} };
await mkdir(host, { recursive: true });
for (const entry of await readdir(source)) {
  if (entry === 'resources' || privateDirectories.has(entry) || entry.startsWith('unins')) continue;
  await cp(join(source, entry), join(host, entry), copyOptions);
}
for (const entry of await readdir(join(source, 'resources')).catch(error => error.code === 'ENOENT' ? [] : Promise.reject(error))) {
  if (privateResources.has(entry)) continue;
  await cp(join(source, 'resources', entry), join(host, 'resources', entry), copyOptions);
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
  await writeFile(join(destination, 'uninstall-desktop-entry.sh'), linuxDesktopEntryRemoval, { mode: 0o755 });
  await writeFile(join(destination, 'openvision-install'), linuxInstaller, { mode: 0o755 });
  await cp(join(root, 'source/app/resources/linux/code.png'), join(destination, 'openvision.png'));
  // A copied chrome-sandbox cannot keep root ownership; drop the meaningless setuid bit.
  await chmod(join(host, 'chrome-sandbox'), 0o755).catch(error => { if (error.code !== 'ENOENT') throw error; });
  await writeFile(join(destination, 'README.txt'), `OpenVision Linux ${process.arch} portable\n\nRun ./OpenVision. No Node.js, npm or separate editor installation is required.\nOptional: ./install-desktop-entry.sh adds OpenVision to your application launcher; ./uninstall-desktop-entry.sh removes it.\nOpen a project with File > Open Folder. Add your own provider URL and key in Models settings.\nEditable application code: electron-host/resources/app.\nYour new local profile: electron-host/data/local. No author profile or keys are included.\nAPI keys use your desktop secret service (GNOME Keyring or KWallet) when available.\nPreserve the data directory when updating. Third-party license notices remain with the application.\n`);
}
await writeFile(join(destination, 'openvision-package.json'), JSON.stringify({ name: 'OpenVision', version, platform: process.platform, arch: process.arch, profileIncluded: false, credentialsIncluded: false,
  profileFormat, updates: 'manual' }, null, 2));
console.log(JSON.stringify({ destination, executable }));
