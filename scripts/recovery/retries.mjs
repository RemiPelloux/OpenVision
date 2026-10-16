// Preserve format-specific fallback and completed long-running extraction separately.
import { mkdir, readFile, readdir, stat, writeFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parse } from '@babel/parser';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '../../curs_source/snapshots/3.24.18');
const load = async path => JSON.parse(await readFile(path, 'utf8'));
const hash = value => createHash('sha256').update(value).digest('hex');
const initial = await load(join(root, 'reports/raw-bundle-recovery.json'));
const commerce = initial.files.find(x => x.input.endsWith('/workbench.xai-commerce-prepaid.js'));
const input = await readFile(join(root, 'artifacts/installation/resources/app', commerce.input));
if (hash(input) !== commerce.input_sha256) throw new Error('Commerce target changed');
const source = input.toString('utf8');
const ast = parse(source, { sourceType: 'unambiguous' });
const output = 'recovered/ast-commerce';
await mkdir(join(root, output), { recursive: true });
const files = [];
for (const [index, node] of ast.program.body.entries()) {
  const path = String(index).padStart(4, '0') + '.js';
  const text = source.slice(node.start, node.end) + '\n';
  try { await writeFile(join(root, output, path), text, { flag: 'wx' }); }
  catch (error) {
    if (error.code !== 'EEXIST' || await readFile(join(root, output, path), 'utf8') !== text) throw error;
  }
  files.push({ path, sha256: hash(text), node_type: node.type,
    source_utf16_range: [node.start, node.end],
    source_byte_range: [Buffer.byteLength(source.slice(0, node.start)), Buffer.byteLength(source.slice(0, node.end))] });
}
await writeFile(join(root, 'reports/commerce-export.json'), JSON.stringify({
  input: commerce.input, input_sha256: commerce.input_sha256, output, files,
  representation: 'Babel top-level statements; not a runnable module graph or original source',
  parser: '@babel/parser', statements: files.length,
}, null, 2) + '\n');
const attempt = await load(join(root, 'reports/glass-retry-attempt.json'));
if (attempt.exit_code !== 0) throw new Error('Extended glass extraction did not complete');
const producer = await load(join(root, 'reports/glass-retry.stdout.json'));
if (producer.failed !== 0) throw new Error('Extended glass extraction has failed modules');
const glassOutput = 'recovered/long-retry/glass';
const glassFiles = [];
async function inspect(relative = '') {
  for (const entry of await readdir(join(root, glassOutput, relative), { withFileTypes: true })) {
    const path = relative ? relative + '/' + entry.name : entry.name;
    if (entry.isDirectory()) await inspect(path);
    else if (entry.isFile()) {
      const bytes = await readFile(join(root, glassOutput, path));
      glassFiles.push({ path, sha256: hash(bytes), bytes: (await stat(join(root, glassOutput, path))).size });
    }
  }
}
await inspect();
if (hash(await readFile(join(root, 'artifacts/installation/resources/app', attempt.input))) !== attempt.input_sha256)
  throw new Error('Glass target changed');
await writeFile(join(root, 'reports/glass-export.json'), JSON.stringify({ ...attempt,
  output: glassOutput, representation: 'structural-raw-module-extraction',
  reported_modules: producer.total, files: glassFiles,
}, null, 2) + '\n');
console.log(JSON.stringify({ commerce_statements: files.length, glass_modules: glassFiles.length }));
