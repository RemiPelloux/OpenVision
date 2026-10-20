import { chmod, copyFile, lstat, mkdir, readFile, readdir, rename, rm, writeFile } from 'node:fs/promises';
import { dirname, join, relative, resolve } from 'node:path';
import { spawnSync } from 'node:child_process';
import { downloadPinned } from './linux-input.mjs';
import { exists } from './source-assembly.mjs';
import { digest, fileHash } from './import-files.mjs';
import { privateDirectories, privateResources } from './portable-layout.mjs';
import { getCurrentFuseWire, FuseV1Options } from '../tooling/dependencies.mjs';

// Official release inputs for the Linux x64 host. Digests are copied from the
// release SHASUMS256.txt files named beside each input and checked on every use.
export const upstreamHostInputs = {
  'linux-x64': {
    electron: { version: '42.10.0', file: 'electron-v42.10.0-linux-x64.zip', bytes: 124765946,
      sha256: 'edcfae0a8cf2a75ceee8a9842a0117521283164708b193495f4cb60ab2d6aa0d',
      url: 'https://github.com/electron/electron/releases/download/v42.10.0/electron-v42.10.0-linux-x64.zip',
      shasums: 'https://github.com/electron/electron/releases/download/v42.10.0/SHASUMS256.txt',
      // Digest of the `electron` executable inside the verified archive.
      executableSha256: '0636c96f07de2c74a3eaf8692fc1743d81259c0bf66c8ebde7f7179211a8aff9' },
    node: { version: '24.18.1', file: 'node-v24.18.1-linux-x64.tar.xz', bytes: 31525884,
      sha256: 'd6c664df3f3f61458e8c277585571328522d705166723a7c7823a9253a4d15a0',
      url: 'https://nodejs.org/dist/v24.18.1/node-v24.18.1-linux-x64.tar.xz',
      shasums: 'https://nodejs.org/dist/v24.18.1/SHASUMS256.txt' },
    headers: { version: '42.10.0', file: 'node-v42.10.0-headers.tar.gz', bytes: 344599,
      sha256: 'cba478aba2a335d45e75e855a1c91da0267a968a7624b4c0c945b70da1d104d7',
      url: 'https://artifacts.electronjs.org/headers/dist/v42.10.0/node-v42.10.0-headers.tar.gz',
      shasums: 'https://artifacts.electronjs.org/headers/dist/v42.10.0/SHASUMS256.txt' },
  },
};

// Release files the recovered host does not ship: the Electron sample app and
// its version marker. The Electron LICENSE is kept for distribution notices.
const omittedReleaseFiles = new Set(['resources/default_app.asar', 'version']);
// Files the portable package never takes from the build host (see portable-layout.mjs).
const recoveredOnly = path => { const [top, next] = path.split('/');
  return privateDirectories.has(top) || top.startsWith('unins') || top === 'package.json' || (top === 'resources' && privateResources.has(next)); };
export const fuseNames = ['RunAsNode', 'EnableCookieEncryption', 'EnableNodeOptionsEnvironmentVariable',
  'EnableNodeCliInspectArguments', 'EnableEmbeddedAsarIntegrityValidation', 'OnlyLoadAppFromAsar',
  'LoadBrowserProcessSpecificV8Snapshot', 'GrantFileProtocolExtraPrivileges', 'WasmTrapHandlers'];
const fuseStates = { 48: 'disabled', 49: 'enabled', 114: 'removed', 144: 'inherit' };

function run(command, args, options = {}) {
  const result = spawnSync(command, args, { stdio: ['ignore', 'pipe', 'pipe'], encoding: 'utf8', ...options });
  if (result.error) throw result.error;
  if (result.status !== 0) throw new Error(`${command} ${args.join(' ')} failed: ${result.stderr.trim().slice(-400)}`);
  return result.stdout;
}

export function hostInputs(context = process) {
  const inputs = upstreamHostInputs[`${context.platform}-${context.arch}`];
  if (!inputs) throw new Error(`No pinned upstream host for ${context.platform}-${context.arch}; only Linux x64 is pinned.`);
  return inputs;
}

async function pinnedArchive(directory, input) {
  const path = join(directory, input.file);
  if (!await exists(path)) {
    console.log(`Downloading ${input.url}`);
    await downloadPinned(input, path);
  } else if ((await lstat(path)).size !== input.bytes || await fileHash(path) !== input.sha256)
    throw new Error(`Existing ${path} does not match the pinned size and SHA-256; remove it and retry.`);
  return path;
}

// Extracts each verified archive once into its own directory; returns the extracted roots.
export async function prepareUpstreamInputs(root, context = process) {
  const inputs = hostInputs(context);
  const directory = resolve(root, 'build/inputs/upstream');
  await mkdir(directory, { recursive: true });
  const result = {};
  for (const [name, input] of Object.entries(inputs)) {
    const archive = await pinnedArchive(directory, input);
    const output = join(directory, `${name}-${input.version}`), marker = `${output}.extracted`;
    if (!await exists(marker)) {
      await rm(output, { recursive: true, force: true });
      await mkdir(output, { recursive: true });
      if (archive.endsWith('.zip')) run('unzip', ['-q', archive, '-d', output]);
      else run('tar', [archive.endsWith('.xz') ? '-xJf' : '-xzf', archive, '-C', output]);
      await writeFile(marker, input.sha256 + '\n');
    } else if ((await readFile(marker, 'utf8')).trim() !== input.sha256)
      throw new Error(`${output} was extracted from a different archive; remove it and retry.`);
    result[name] = { ...input, archive, directory: output };
  }
  result.electron.host = result.electron.directory;
  result.node.binary = join(result.node.directory, `node-v${inputs.node.version}-linux-x64/bin/node`);
  result.headers.nodedir = join(result.headers.directory, 'node_headers');
  return result;
}

// Electron fuse wire: sentinel, version byte, length byte, then one state byte per fuse.
export function readFuseWire(buffer) {
  const sentinel = Buffer.from('dL7pKGdnNz796PbbjQWNKmHXBZaB9tsX');
  const index = buffer.indexOf(sentinel);
  if (index < 0 || buffer.indexOf(sentinel, index + 1) >= 0) throw new Error('Expected exactly one Electron fuse sentinel.');
  const start = index + sentinel.length;
  const version = buffer[start], length = buffer[start + 1];
  if (version !== 1) throw new Error(`Unsupported Electron fuse wire version ${version}.`);
  const wire = buffer.subarray(start + 2, start + 2 + length);
  return { version, offset: start + 2, wire: wire.toString('latin1'),
    fuses: Object.fromEntries([...wire].map((state, fuse) => [fuseNames[fuse] ?? `Fuse${fuse}`, fuseStates[state] ?? `unknown(${state})`])) };
}

// Cross-checks the local reader against @electron/fuses for every fuse it names.
export async function assertFusesAgree(path, fuses) {
  const wire = await getCurrentFuseWire(path);
  for (const [name, state] of Object.entries(fuses)) {
    const official = fuseStates[wire[FuseV1Options[name]]];
    if (official !== state) throw new Error(`@electron/fuses reads ${name}=${official}, local reader ${state}: ${path}`);
  }
}

// Sets every PT_LOAD p_align above `alignment` to `alignment` in a 64-bit little-endian ELF.
// The recovered helper Node differs from the official release only in these fields.
export function alignLoadSegments(buffer, alignment = 0x1000) {
  if (!buffer.subarray(0, 4).equals(Buffer.from([0x7f, 0x45, 0x4c, 0x46])) || buffer[4] !== 2 || buffer[5] !== 1)
    throw new Error('Expected a 64-bit little-endian ELF executable.');
  const output = Buffer.from(buffer);
  const offset = Number(output.readBigUInt64LE(32)), size = output.readUInt16LE(54), count = output.readUInt16LE(56);
  const changed = [];
  for (let index = 0; index < count; index++) {
    const header = offset + index * size;
    if (output.readUInt32LE(header) !== 1) continue;
    const previous = output.readBigUInt64LE(header + 48);
    if (previous <= BigInt(alignment)) continue;
    output.writeBigUInt64LE(BigInt(alignment), header + 48);
    changed.push({ segment: index, from: `0x${previous.toString(16)}`, to: `0x${alignment.toString(16)}` });
  }
  return { buffer: output, changed };
}

async function files(base, directory = base) {
  const output = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) output.push(...await files(base, path));
    else output.push(relative(base, path));
  }
  return output.sort();
}

// Compares the official release with the recovered host by relative path and content.
export async function compareHosts(release, recovered, executable = 'openvision') {
  const releaseFiles = (await files(release)).filter(path => !omittedReleaseFiles.has(path));
  const recoveredFiles = (await files(recovered)).filter(path => !recoveredOnly(path));
  const name = path => path === 'electron' ? executable : path;
  const recoveredSet = new Set(recoveredFiles), releaseSet = new Set(releaseFiles.map(name));
  const entries = [];
  for (const path of releaseFiles) {
    const target = name(path);
    const sha256 = await fileHash(join(release, path));
    const recoveredSha = recoveredSet.has(target) ? await fileHash(join(recovered, target)) : undefined;
    entries.push({ path: target, release_path: path, sha256, recovered_sha256: recoveredSha,
      status: recoveredSha === undefined ? 'release-only' : recoveredSha === sha256 ? 'identical' : 'different' });
  }
  return { entries, recovered_only: recoveredFiles.filter(path => !releaseSet.has(path)),
    omitted_release_files: [...omittedReleaseFiles].sort() };
}

// Stages the official release as an OpenVision native host directory without application files.
export async function stageUpstreamHost(inputs, recoveredHost, output) {
  const comparison = await compareHosts(inputs.electron.host, recoveredHost);
  await rm(output, { recursive: true, force: true });
  for (const entry of comparison.entries) {
    const target = join(output, entry.path);
    await mkdir(dirname(target), { recursive: true });
    await copyFile(join(inputs.electron.host, entry.release_path), target);
    await chmod(target, (await lstat(join(inputs.electron.host, entry.release_path))).mode & 0o755);
  }
  if (await fileHash(join(output, 'openvision')) !== inputs.electron.executableSha256)
    throw new Error('Staged Electron executable differs from the pinned release file.');
  const release = readFuseWire(await readFile(join(output, 'openvision')));
  const recovered = readFuseWire(await readFile(join(recoveredHost, 'openvision')));
  await assertFusesAgree(join(output, 'openvision'), release.fuses);
  await assertFusesAgree(join(recoveredHost, 'openvision'), recovered.fuses);
  // Unflipped fuses are kept only when they already equal the recovered host.
  if (release.wire !== recovered.wire)
    throw new Error(`Upstream fuses ${release.wire} differ from the recovered host ${recovered.wire}; flip them explicitly before substituting.`);
  return { comparison, fuses: { release: release.fuses, recovered: recovered.fuses, wire: release.wire, identical: true,
    readers: ['desktop/upstream-host.mjs readFuseWire', '@electron/fuses 2.1.3 getCurrentFuseWire'] } };
}

// Writes the official helper Node with the recovered PT_LOAD alignment applied.
export async function substituteHelperNode(inputs, target) {
  const official = await readFile(inputs.node.binary);
  const recoveredSha = await fileHash(target);
  const { buffer, changed } = alignLoadSegments(official);
  const partial = `${target}.${process.pid}.partial`;
  await writeFile(partial, buffer, { mode: 0o755, flag: 'wx' });
  await rename(partial, target);
  return { path: 'resources/app/resources/helpers/node', origin: `${inputs.node.url}#bin/node`,
    release_sha256: digest(official), sha256: digest(buffer), recovered_sha256: recoveredSha,
    transform: { name: 'pt-load-alignment', alignment: '0x1000', changed },
    status: digest(buffer) === recoveredSha ? 'identical-after-transform' : 'different' };
}
