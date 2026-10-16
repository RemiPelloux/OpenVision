// Retry the one Windows-incompatible esbuild filename using an offset-preserving input copy.
import { readFile, readdir, mkdir, writeFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { spawnSync } from 'node:child_process';
import { createRequire } from 'node:module';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { portableFactoryLabels } from './portable-labels.mjs';

const app = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
const root = join(app, 'curs_source/snapshots/3.24.18');
const load = async path => JSON.parse(await readFile(path, 'utf8'));
const hash = value => createHash('sha256').update(value).digest('hex');
const initial = await load(join(root, 'reports/raw-bundle-recovery.json'));
const target = initial.files.find(x => x.input.endsWith('/workbench.xai-commerce-prepaid.js'));
if (!target) throw new Error('Commerce input is not in the recorded selection');
const input = join(root, 'artifacts/installation/resources/app', target.input);
const original = await readFile(input);
if (hash(original) !== target.input_sha256) throw new Error('Captured commerce input changed');
const { derived, replacements } = portableFactoryLabels(original);
if (replacements.length !== 1) throw new Error('Expected exactly one invalid commerce factory filename');

async function preserve(path, bytes) {
  await mkdir(dirname(path), { recursive: true });
  try { await writeFile(path, bytes, { flag: 'wx' }); }
  catch (error) {
    if (error.code !== 'EEXIST' || !(await readFile(path)).equals(Buffer.from(bytes))) throw error;
  }
}
const derivedInput = 'recovered/portable-input/commerce.js';
const output = 'recovered/commerce-structural';
const reportPath = join(root, 'reports/commerce-structural-export.json');
await preserve(join(root, derivedInput), derived);
const engine = initial.engine;
if (hash(await readFile(engine.path)) !== engine.sha256) throw new Error('Wakaru engine changed');
const args = [join(root, derivedInput), '--unpack=strict', '--raw', '--provenance', '--json', '-o', join(root, output)];
let retained;
try { retained = await load(reportPath); }
catch (error) { if (error.code !== 'ENOENT') throw error; }
if (!retained) {
  const result = spawnSync(engine.path, args, { encoding: 'utf8', timeout: 120000,
    maxBuffer: 16 * 1024 * 1024, windowsHide: true });
  await preserve(join(root, 'reports/commerce-structural.stdout.json'), result.stdout ?? '');
  await preserve(join(root, 'reports/commerce-structural.stderr.txt'), result.stderr ?? '');
  if (result.error || result.status !== 0) throw result.error ?? new Error('Wakaru failed: ' + result.stderr);
}
const producer = await load(join(root, 'reports/commerce-structural.stdout.json'));
if (producer.failed !== 0 || !producer.total) throw new Error('Incomplete Wakaru result');
const files = [];
async function inventory(relative = '') {
  for (const entry of await readdir(join(root, output, relative), { withFileTypes: true })) {
    const path = relative ? relative + '/' + entry.name : entry.name;
    if (entry.isDirectory()) await inventory(path);
    else if (entry.isFile()) {
      const bytes = await readFile(join(root, output, path));
      files.push({ path, sha256: hash(bytes), bytes: bytes.length });
    } else throw new Error('Unexpected recovery output type');
  }
}
await inventory();
const provenance = await load(join(root, output, 'provenance.json'));
if (provenance.strategy !== 'structural' || Object.keys(provenance.modules).length !== producer.total)
  throw new Error('Producer module count or structural strategy differs');
const require = createRequire(import.meta.url);
const parserPath = require.resolve('@babel/parser');
const parserPackage = await load(require.resolve('@babel/parser/package.json'));
const report = { input: target.input, input_sha256: target.input_sha256, output,
  representation: 'structural-raw-module-extraction-with-portable-factory-label',
  derived_input: derivedInput, derived_input_sha256: hash(derived), engine,
  arguments: args, exit_code: 0, reported_modules: producer.total,
  parser: { name: '@babel/parser', version: parserPackage.version, sha256: hash(await readFile(parserPath)) },
  replacements, files,
  limitation: 'One object-method filename label is replaced only in a derived analysis input. Equal byte widths preserve source offsets. This is not an unchanged-input extraction or a runnable reconstruction.' };
if (retained && JSON.stringify(retained) !== JSON.stringify(report)) throw new Error('Retained commerce recovery changed');
await preserve(reportPath, JSON.stringify(report, null, 2) + '\n');
if (hash(await readFile(input)) !== target.input_sha256) throw new Error('Recovery modified captured input');
console.log(JSON.stringify({ input: target.input, modules: producer.total, files: files.length,
  replacements: replacements.length, original_input_unchanged: true }));
