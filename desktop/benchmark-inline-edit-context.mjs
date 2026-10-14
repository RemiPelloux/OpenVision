import assert from 'node:assert/strict';
import { readFile, mkdir, mkdtemp, writeFile } from 'node:fs/promises';
import { resolve, join } from 'node:path';
import { pathToFileURL } from 'node:url';
import { spawnSync } from 'node:child_process';
import { fileHash } from './import-files.mjs';

const option = name => {
  const index = process.argv.indexOf(name);
  if (index < 0 || !process.argv[index + 1] || process.argv[index + 1].startsWith('--'))
    throw new Error(`Required argument missing: ${name}`);
  return process.argv[index + 1];
};
const root = resolve(import.meta.dirname, '..');
const evidence = resolve(option('--evidence'));
const repetitions = 5, iterations = 10000;

async function fixture() {
  const result = JSON.parse(await readFile(evidence, 'utf8'));
  const source = result.requests.find(request => request.phase === 'cancel').payload.messages.find(message => message.role === 'user').content;
  const context = JSON.parse(source);
  assert.equal(context.codeAttachments.length, 3, 'Benchmark requires the observed three-attachment cancellation request');
  const request = { rules: context.rules, legacyContext: { explicitContext: { context: context.userRules },
    promptCodeBlocks: context.codeAttachments } };
  const session = { intents: [{ items: [
    ['cmdKSelection', context.selection], ['cmdKQuery', { query: context.instruction }],
    ['cmdKImmediateContext', context.nearby],
  ].map(([type, value]) => ({ item: { item: { case: type, value } } })) }] };
  assert.deepEqual(context.previousQueries, []); assert.deepEqual(context.chatHistory, []);
  return { request, session };
}

async function worker() {
  const { inlineEditContext } = await import(pathToFileURL(resolve(option('--module'))).href);
  const { request, session } = await fixture();
  const call = () => inlineEditContext(request, session);
  const cpu = process.cpuUsage(), started = performance.now(), output = call();
  const cold = { elapsed_ms: performance.now() - started, cpu_microseconds: process.cpuUsage(cpu) };
  for (let i = 0; i < 1000; i++) call();
  globalThis.gc?.();
  const warmCpu = process.cpuUsage(), warmStarted = performance.now();
  for (let i = 0; i < iterations; i++) assert.equal(call(), output);
  const warm = { iterations, elapsed_ms: performance.now() - warmStarted, cpu_microseconds: process.cpuUsage(warmCpu) };
  console.log(JSON.stringify({ cold, warm, output, output_bytes: Buffer.byteLength(output),
    process_peak_rss_kib: process.resourceUsage().maxRSS }));
}

if (process.argv.includes('--worker')) await worker();
else {
  const baseline = resolve(option('--baseline')), current = join(root, 'desktop/inline-edit-context.js');
  const results = { evidence, evidence_sha256: await fileHash(evidence), node: process.version,
    fixture: 'Identical captured native cancellation context, three duplicate code attachments.',
    limitations: ['No tokenizer is installed in the project toolchain; token counts and provider token billing are unmeasured.',
      'Cold is first context call in a fresh worker, excluding process launch/module import/fixture parsing; warm follows 1,000 priming calls.',
      'Peak RSS is each worker process lifetime, including imports, fixture parsing and validation; the worker spawns no children.',
      'These local CPU/memory measurements do not measure Electron, inference latency or model quality.'], cases: {} };
  for (const [name, module] of [['before', baseline], ['after', current]]) {
    const runs = [];
    for (let index = 0; index < repetitions; index++) {
      const run = spawnSync(process.execPath, ['--expose-gc', import.meta.filename, '--worker', '--evidence', evidence,
        '--module', module], { encoding: 'utf8', windowsHide: true, timeout: 60000 });
      assert.equal(run.status, 0, run.stderr);
      runs.push(JSON.parse(run.stdout));
    }
    results.cases[name] = { module_sha256: await fileHash(module), runs };
  }
  const before = JSON.parse(results.cases.before.runs[0].output), after = JSON.parse(results.cases.after.runs[0].output);
  assert.equal(before.codeAttachments.length, 3); assert.equal(after.codeAttachments.length, 1);
  for (const attachment of before.codeAttachments) assert.deepEqual(attachment, before.codeAttachments[0]);
  assert.deepEqual(after.codeAttachments[0], before.codeAttachments[0]);
  before.codeAttachments = after.codeAttachments;
  assert.deepEqual(after, before, 'Only exact attachment duplication changes the request');
  const median = values => values.toSorted((a, b) => a - b)[Math.floor(values.length / 2)];
  results.summary = Object.fromEntries(Object.entries(results.cases).map(([name, { runs }]) => [name, {
    bytes: runs[0].output_bytes, attachments: JSON.parse(runs[0].output).codeAttachments.length,
    cold_median_ms: median(runs.map(run => run.cold.elapsed_ms)),
    warm_median_ms_per_call: median(runs.map(run => run.warm.elapsed_ms / iterations)),
    warm_median_cpu_microseconds_per_call: median(runs.map(run =>
      (run.warm.cpu_microseconds.user + run.warm.cpu_microseconds.system) / iterations)),
    median_worker_lifetime_peak_rss_kib: median(runs.map(run => run.process_peak_rss_kib)),
  }]));
  await mkdir(join(root, 'logs'), { recursive: true });
  const destination = await mkdtemp(join(root, 'logs/inline-context-benchmark-'));
  await writeFile(join(destination, 'result.json'), JSON.stringify(results, null, 2));
  console.log(JSON.stringify({ destination, summary: results.summary, limitations: results.limitations }, null, 2));
}
