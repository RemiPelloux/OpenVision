import { cp, mkdir, readdir, lstat, writeFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { loadRuntime } from './source-assembly.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
if (process.platform !== 'win32' || process.arch !== 'x64') throw Error('Package on Windows x64.');
const destination = resolve(process.argv[2] ?? join(root, 'build/packages/OpenVision-win32-x64'));
try { await lstat(destination); throw Error('Package destination already exists; choose a new directory.'); }
catch (error) { if (error.code !== 'ENOENT') throw error; }
const { layout } = await loadRuntime(root);
const host = join(destination, 'electron-host');
const privateDirectories = new Set(['data', 'backups', 'logs', 'desktop', 'tooling']);
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
  if (entry === 'app') continue;
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
await writeFile(join(destination, 'OpenVision.cmd'), `@echo off\r\nsetlocal\r\nset "ELECTRON_RUN_AS_NODE="\r\nstart "" "%~dp0electron-host\\OpenVision.exe" --user-data-dir "%~dp0electron-host\\data\\local" --extensions-dir "%~dp0electron-host\\data\\local-extensions" --disable-updates --disable-telemetry --disable-crash-reporter %*\r\n`);
await writeFile(join(destination, 'README.txt'), 'OpenVision Windows x64 portable\r\n\r\nDouble-click OpenVision.cmd. No Node.js, npm or separate editor installation is required.\r\nOpen a project with File > Open Folder. Add your own provider URL and key in Models settings.\r\nEditable application code: electron-host/resources/app.\r\nYour new local profile: electron-host/data/local. No author profile or keys are included.\r\nPreserve the data directory when updating. Third-party license notices remain with the application.\r\n');
await writeFile(join(destination, 'openvision-package.json'), JSON.stringify({ name: 'OpenVision', version: '0.2.0-preview.2', platform: 'win32', arch: 'x64', profileIncluded: false, credentialsIncluded: false }, null, 2));
console.log(JSON.stringify({ destination, executable: join(host, 'OpenVision.exe') }));
