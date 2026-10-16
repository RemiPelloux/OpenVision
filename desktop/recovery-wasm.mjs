// Decode every distinct captured WASM payload to local WAT, preserving identity.
import { mkdir, readFile, writeFile, stat } from 'node:fs/promises';
import { createReadStream, createWriteStream } from 'node:fs';
import { createHash } from 'node:crypto';
import { spawn } from 'node:child_process';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
const snapshot = join(root, 'openvision/curs_source/snapshots/3.24.18');
const output = join(snapshot, 'wasm');
const wabt = join(root, '.tools/wabt-1.0.42/bin');
const inventory = JSON.parse(await readFile(join(snapshot, 'reports/installation-manifest.json'), 'utf8'));
const files = inventory.files.filter(file => file.path.endsWith('.wasm'));
const digest = async path => {
  const hash = createHash('sha256');
  for await (const chunk of createReadStream(path)) hash.update(chunk);
  return hash.digest('hex');
};
await mkdir(output, { recursive: true });
const tools = {};
for (const name of ['wasm-validate', 'wasm2wat', 'wasm-objdump']) {
  const path = join(wabt, name + '.exe');
  tools[name] = { path, sha256: await digest(path) };
}
async function run(name, args, destination) {
  const stream = destination ? createWriteStream(destination, { flags: 'wx' }) : null;
  let error = '';
  const child = spawn(tools[name].path, args, { windowsHide: true, stdio: ['ignore', stream ? 'pipe' : 'ignore', 'pipe'] });
  if (stream) child.stdout.pipe(stream);
  child.stderr.on('data', bytes => { if (error.length < 8192) error += bytes.toString().slice(0, 8192 - error.length); });
  const exit = await new Promise((yes, no) => { child.on('error', no); child.on('close', yes); });
  if (stream) await new Promise((yes, no) => { if (stream.writableFinished) yes(); else { stream.on('finish', yes); stream.on('error', no); } });
  if (exit !== 0) throw new Error(name + ' exited ' + exit + ': ' + error);
}
const results = [];
let retained;
try { retained = JSON.parse(await readFile(join(output, 'manifest.json'), 'utf8')); }
catch (error) { if (error.code !== 'ENOENT') throw error; }
for (const hash of new Set(files.map(file => file.sha256))) {
  const same = files.filter(file => file.sha256 === hash);
  for (const file of same) {
    if (await digest(join(snapshot, 'artifacts/installation', file.path)) !== hash) throw new Error('WASM snapshot changed');
  }
  const input = join(snapshot, 'artifacts/installation', same[0].path);
  const wat = join(output, hash + '.wat');
  const dump = join(output, hash + '.objdump.txt');
  const previous = retained?.results.find(row => row.sha256 === hash);
  if (previous) {
    if (await digest(wat) !== previous.wat.sha256 || await digest(dump) !== previous.objdump.sha256)
      throw new Error('Retained WASM output changed: ' + hash);
    results.push(previous);
    console.log('Verified retained WASM: ' + hash);
    continue;
  }
  for (const path of [wat, dump]) {
    try { await stat(path); throw new Error('Unrecorded WASM output already exists: ' + path); }
    catch (error) { if (error.code !== 'ENOENT') throw error; }
  }
  await run('wasm-validate', ['--enable-all', input]);
  await run('wasm2wat', ['--enable-all', input, '-o', wat]);
  await run('wasm-objdump', ['-h', '-x', input], dump);
  results.push({ sha256: hash, paths: same.map(file => file.path), bytes: same[0].bytes,
    validated: true, wat: { path: hash + '.wat', sha256: await digest(wat), bytes: (await stat(wat)).size },
    objdump: { path: hash + '.objdump.txt', sha256: await digest(dump) } });
  await writeFile(join(output, 'manifest.json'), JSON.stringify({ schema_version: 1, version: '3.24.18',
    source_paths: files.length, distinct_payloads: new Set(files.map(file => file.sha256)).size,
    decoded: results.length, representation: 'decoded-wasm-not-original-source', tools, results }, null, 2) + '\n');
  console.log('WASM decoded: ' + results.length + ' / ' + new Set(files.map(file => file.sha256)).size);
}
