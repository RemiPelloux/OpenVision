import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { mkdtemp, mkdir, readFile, writeFile, copyFile } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { createHash } from 'node:crypto';

const root = resolve(import.meta.dirname, '..');
const baseline = process.argv[2] ?? 'ce28e244ac03e24382844baab91e320572de13b0';
const commit = execFileSync('git', ['rev-parse', `${baseline}^{commit}`], { cwd: root, encoding: 'utf8' }).trim();
const directory = await mkdtemp(join(root, 'logs/account-performance-'));
const files = ['model-providers.js', 'model-catalog.js', 'model-reasoning.js', 'model-identity.js',
  'account-models.js', 'account-chat-session.cjs'];
const result = { baseline: commit, candidateBase: execFileSync('git', ['rev-parse', 'HEAD'], { cwd: root, encoding: 'utf8' }).trim(),
  platform: process.platform, node: process.version, checkedAt: new Date().toISOString(), directory,
  scope: 'Production modules with controlled catalog IPC and a draining stream sink; no inference, tokens or external network. Each worker has no child processes. Peak RSS covers its whole lifetime; sampled heap is not total Electron RAM.',
  digests: {}, runs: [] };
for (const file of ['benchmark-account-performance.mjs', 'benchmark-account-worker.mjs'])
  result.digests[file] = createHash('sha256').update(await readFile(join(root, 'desktop', file))).digest('hex');

for (const version of ['baseline', 'candidate']) {
  const folder = join(directory, version); await mkdir(folder);
  await writeFile(join(folder, 'package.json'), '{"type":"module"}');
  await copyFile(join(root, 'desktop/benchmark-account-worker.mjs'), join(folder, 'worker.mjs'));
  result.digests[version] = {};
  for (const file of files) {
    const bytes = version === 'baseline' ? execFileSync('git', ['show', `${commit}:desktop/${file}`], { cwd: root }) :
      await readFile(join(root, 'desktop', file));
    await writeFile(join(folder, file), bytes);
    result.digests[version][file] = createHash('sha256').update(bytes).digest('hex');
  }
}

// Interleave versions to reduce drift. Every sample starts in a fresh process.
for (let repetition = 1; repetition <= 3; repetition++) {
  for (const workload of ['25', '10000', 'stream']) {
    for (const version of ['baseline', 'candidate']) {
      const output = execFileSync(process.execPath, ['--expose-gc', join(directory, version, 'worker.mjs'), workload],
        { cwd: root, encoding: 'utf8', timeout: 120000 });
      const sample = JSON.parse(output);
      assert.equal(sample.correct, true);
      result.runs.push({ version, repetition, workload, ...sample });
      console.log(JSON.stringify(result.runs.at(-1)));
    }
  }
}
await writeFile(join(directory, 'result.json'), JSON.stringify(result, null, 2));
console.log(`Evidence: ${join(directory, 'result.json')}`);
