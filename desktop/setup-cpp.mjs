import { mkdir, mkdtemp, readFile, writeFile, copyFile, cp, rename } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { spawnSync } from 'node:child_process';
import { createWriteStream } from 'node:fs';
import { Readable } from 'node:stream';
import { pipeline } from 'node:stream/promises';
import { fileHash } from './import-files.mjs';
import { exists } from './source-assembly.mjs';
import { parseConfiguration, setSetting } from './import-json.mjs';

export const cppPackages = Object.freeze({
  server: { version: '23.1.0', sha256: '23412a240756a162e7b98a282f36aa2a23a88db5ce16a0cbc4fef7253768c810',
    url: 'https://github.com/clangd/clangd/releases/download/23.1.0/clangd-windows-23.1.0.zip' },
  extension: { version: '0.6.0', sha256: '32030694fa6c0ef438f4e4219f84677cd32f603c7faa4c71a283efc1f5b51751',
    url: 'https://open-vsx.org/api/llvm-vs-code-extensions/vscode-clangd/0.6.0/file/llvm-vs-code-extensions.vscode-clangd-0.6.0.vsix' },
});

export function cppPaths(root) {
  const base = join(root, 'data/tools/cpp');
  return { base, executable: join(base, 'server/clangd_23.1.0/bin/clangd.exe'),
    extension: join(base, 'extension/extension') };
}

export function cppArguments() {
  // VS Code emits lowercase drive letters; Windows compilation databases often
  // use uppercase. Normalize inside clangd before its index combines file identities.
  const drives = Array.from({ length: 26 }, (_, index) => String.fromCharCode(65 + index));
  return ['--background-index', '--pch-storage=disk', '-j=2',
    `--path-mappings=${drives.map(drive => `/${drive.toLowerCase()}:=/${drive}:`).join(',')}`];
}

async function packageInstall(base, name, spec) {
  const target = join(base, name), archive = join(base, `${name}.zip`);
  if (!await exists(archive)) {
    const response = await fetch(spec.url, { signal: AbortSignal.timeout(120000) });
    if (!response.ok) throw new Error(`Download failed: ${response.status} ${spec.url}`);
    const pending = await mkdtemp(join(base, `${name}-download-`));
    const downloaded = join(pending, 'package.zip');
    await pipeline(Readable.fromWeb(response.body), createWriteStream(downloaded, { flags: 'wx' }));
    if (await fileHash(downloaded) !== spec.sha256) throw new Error(`Unexpected ${name} download hash; retained ${downloaded}`);
    await rename(downloaded, archive);
  }
  if (await fileHash(archive) !== spec.sha256) throw new Error(`Unexpected ${name} package hash; retained ${archive}`);
  if (await exists(target)) return;
  const temporary = await mkdtemp(join(base, `${name}-extract-`));
  const extracted = join(temporary, 'content');
  const run = spawnSync('powershell.exe', ['-NoProfile', '-Command',
    '$ErrorActionPreference="Stop"; Add-Type -AssemblyName System.IO.Compression.FileSystem; [System.IO.Compression.ZipFile]::ExtractToDirectory($env:OPENVISION_CPP_ARCHIVE, $env:OPENVISION_CPP_EXTRACT)'],
  { encoding: 'utf8', windowsHide: true, env: { ...process.env, OPENVISION_CPP_ARCHIVE: archive, OPENVISION_CPP_EXTRACT: extracted } });
  if (run.error || run.status !== 0) throw new Error(run.error?.message ?? run.stderr);
  await rename(extracted, target);
}

export async function prepareCpp(root) {
  if (process.platform !== 'win32' || process.arch !== 'x64') throw new Error('Pinned C/C++ setup currently supports Windows x64 only');
  const paths = cppPaths(root);
  await mkdir(paths.base, { recursive: true });
  for (const [name, spec] of Object.entries(cppPackages)) await packageInstall(paths.base, name, spec);
  const version = spawnSync(paths.executable, ['--version'], { encoding: 'utf8', windowsHide: true });
  if (version.status !== 0 || !version.stdout.startsWith('clangd version 23.1.0 ')) throw new Error('Unexpected clangd version');
  const manifest = JSON.parse(await readFile(join(paths.extension, 'package.json'), 'utf8'));
  if (manifest.publisher !== 'llvm-vs-code-extensions' || manifest.name !== 'vscode-clangd' || manifest.version !== '0.6.0')
    throw new Error('Unexpected clangd extension identity');
  const identity = { packages: cppPackages, executable: await fileHash(paths.executable),
    extension: await fileHash(join(paths.extension, 'out/bundle.js')) };
  const record = join(paths.base, 'identity.json');
  if (await exists(record)) {
    if (await readFile(record, 'utf8') !== JSON.stringify(identity, null, 2)) throw new Error('Installed C/C++ tools changed');
  } else await writeFile(record, JSON.stringify(identity, null, 2), { flag: 'wx' });
  return paths;
}

export async function installCppProfile(root, paths) {
  const extensions = join(root, 'data/local-extensions');
  const destination = join(extensions, 'llvm-vs-code-extensions.vscode-clangd-0.6.0');
  await mkdir(extensions, { recursive: true });
  if (!await exists(destination)) {
    const staging = await mkdtemp(join(paths.base, 'profile-extension-'));
    const content = join(staging, 'content');
    await cp(paths.extension, content, { recursive: true, force: false, errorOnExist: true });
    await rename(content, destination);
  } else if (await fileHash(join(destination, 'out/bundle.js')) !== await fileHash(join(paths.extension, 'out/bundle.js')))
    throw new Error('Existing clangd extension differs; preserved without overwrite');
  const settingsPath = join(root, 'data/local/User/settings.json');
  const before = await readFile(settingsPath, 'utf8'), current = parseConfiguration(before);
  const settings = { 'clangd.path': paths.executable, 'clangd.checkUpdates': false,
    'clangd.arguments': cppArguments() };
  let after = before;
  for (const [key, value] of Object.entries(settings))
    if (!Object.hasOwn(current, key)) after = setSetting(after, key, value);
  if (after !== before) {
    const backup = join(root, 'backups/cpp-settings');
    await mkdir(backup, { recursive: true });
    await copyFile(settingsPath, join(backup, `${Date.now()}.json`), 1);
    // Detect another writer before replacing settings; never silently drop its changes.
    if (await readFile(settingsPath, 'utf8') !== before) throw new Error('Settings changed during setup; retry');
    await writeFile(settingsPath, after);
  }
  return { extension: destination, settings: settingsPath, existingSettingsPreserved: true };
}

if (process.argv[1] && pathToFileURL(resolve(process.argv[1])).href === import.meta.url) {
  const root = resolve(import.meta.dirname, '..'), paths = await prepareCpp(root);
  console.log(JSON.stringify(process.argv.includes('--tools-only') ? paths : await installCppProfile(root, paths), null, 2));
}
