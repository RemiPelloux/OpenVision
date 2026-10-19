// OV-801 upstream digest evidence for the Linux x64 inventory. For every distinct
// native/WASM payload whose nearest manifest names a published npm package, the
// registry tarball for that exact name@version is fetched (npm pack) and hashed;
// the Electron host files are compared with the Electron release zip named by the
// host's process.versions, and the helper node with the official Node tarball.
// A digest match establishes byte identity with that published artifact, not
// source-to-binary reproducibility. Nothing downloaded is executed.
//
//   node scripts/recovery/upstream-payload-match.mjs
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { mkdir, mkdtemp, readdir, readFile, rm, writeFile } from 'node:fs/promises';
import { dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
const inventory = JSON.parse(await readFile(join(root, 'docs/recovery/native-inventory-linux-x64.json'), 'utf8'));
await mkdir(join(root, 'logs'), { recursive: true });
const directory = await mkdtemp(join(root, 'logs/upstream-payload-match-'));
const sha256 = bytes => createHash('sha256').update(bytes).digest('hex');
async function digests(folder, into = new Map(), base = folder) {
  for (const entry of await readdir(folder, { withFileTypes: true })) {
    const path = join(folder, entry.name);
    if (entry.isDirectory()) await digests(path, into, base);
    else if (entry.isFile()) into.set(sha256(await readFile(path)), relative(base, path));
  }
  return into;
}
async function fetchTo(url, path) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`HTTP ${response.status} ${url}`);
  await writeFile(path, Buffer.from(await response.arrayBuffer()));
  return sha256(await readFile(path));
}

const all = [...inventory.natives, ...inventory.wasm];
const distinct = [...inventory.distinctNatives, ...inventory.distinctWasm];
const result = { checkedAt: new Date().toISOString(), directory: relative(root, directory), packages: {}, artifacts: {}, payloads: [] };
const upstream = new Map();

// npm registry tarballs, one per name@version among the distinct payloads.
const specs = new Set();
for (const group of distinct) for (const path of group.paths) {
  const item = all.find(entry => entry.path === path);
  if (item.package?.name && item.package.version && !/^(Cursor|cursor-|@anysphere\/|js-debug$|vscode-js-profile-table$)/.test(item.package.name)) specs.add(`${item.package.name}@${item.package.version}`);
}
for (const spec of [...specs].sort()) {
  const folder = join(directory, 'npm', spec.replace(/[/@]/g, '_'));
  await mkdir(folder, { recursive: true });
  try {
    const [packed] = JSON.parse(execFileSync('npm', ['pack', spec, '--json', '--pack-destination', folder], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }));
    execFileSync('tar', ['-xzf', join(folder, packed.filename), '-C', folder]);
    const files = await digests(join(folder, 'package'));
    result.packages[spec] = { tarball: packed.filename, integrity: packed.integrity, files: files.size };
    for (const [digest, path] of files) upstream.set(digest, [...(upstream.get(digest) ?? []), `npm:${spec}/${path}`]);
  } catch (error) { result.packages[spec] = { error: error.message.split('\n')[0] }; }
}

// Electron release zip and official Node tarball named by the probed runtimes.
const electron = inventory.runtimes['usr/share/cursor/cursor']?.electron;
const node = inventory.runtimes['usr/share/cursor/resources/app/resources/helpers/node']?.node;
for (const [name, url, extract] of [
  [`electron-v${electron}-linux-x64.zip`, `https://github.com/electron/electron/releases/download/v${electron}/electron-v${electron}-linux-x64.zip`, (file, to) => execFileSync('unzip', ['-q', file, '-d', to])],
  [`node-v${node}-linux-x64.tar.xz`, `https://nodejs.org/dist/v${node}/node-v${node}-linux-x64.tar.xz`, (file, to) => execFileSync('tar', ['-xJf', file, '-C', to])]]) {
  const folder = join(directory, 'artifacts', name);
  await mkdir(folder, { recursive: true });
  try {
    const archive = join(folder, name);
    const digest = await fetchTo(url, archive);
    await mkdir(join(folder, 'x'));
    extract(archive, join(folder, 'x'));
    const files = await digests(join(folder, 'x'));
    result.artifacts[name] = { url, sha256: digest, files: files.size };
    for (const [file, path] of files) upstream.set(file, [...(upstream.get(file) ?? []), `${name}/${path}`]);
  } catch (error) { result.artifacts[name] = { url, error: error.message.split('\n')[0] }; }
}

for (const group of distinct) result.payloads.push({ sha256: group.sha256, paths: group.paths, upstreamMatches: upstream.get(group.sha256) ?? [] });
result.summary = { distinct: distinct.length, matched: result.payloads.filter(item => item.upstreamMatches.length).length };
await writeFile(join(directory, 'result.json'), JSON.stringify(result, null, 2));
// Keep only the result: the downloaded upstream payloads are large runtime inputs.
await rm(join(directory, 'npm'), { recursive: true, force: true });
await rm(join(directory, 'artifacts'), { recursive: true, force: true });
console.log(JSON.stringify({ directory: result.directory, summary: result.summary, packages: result.packages, artifacts: result.artifacts,
  payloads: result.payloads.map(item => `${item.sha256.slice(0, 16)} ${item.upstreamMatches[0] ?? '-'}`) }, null, 2));
