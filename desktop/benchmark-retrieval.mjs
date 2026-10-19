import { mkdir, mkdtemp, readdir, rm, stat, writeFile } from 'node:fs/promises';
import { arch, cpus, platform, release, totalmem } from 'node:os';
import { join } from 'node:path';
import { RetrievalService } from './retrieval-service.mjs';
import { createScaleFixture } from './retrieval-scale-fixture.mjs';
import { repositoryRoot, retrievalRuntime } from './retrieval-runtime.mjs';

// Retrieval workload baseline (OV-504): cold full index, warm reopen, single
// edit and query latency on a deterministic 10,000-file fixture. Run with no
// worker resource limit to set the limits in desktop/retrieval-budgets.json.
// Usage: node desktop/benchmark-retrieval.mjs [--files N] [--limited]
const argument = name => { const index = process.argv.indexOf(name); return index > 0 ? process.argv[index + 1] : undefined; };
const files = Number(argument('--files') ?? 10000);
const limited = process.argv.includes('--limited');
await mkdir(join(repositoryRoot, 'logs'), { recursive: true });
const output = await mkdtemp(join(repositoryRoot, 'logs/retrieval-benchmark-'));
const scratch = await mkdtemp(join(output, 'work-'));
const project = join(scratch, 'project'), profile = join(scratch, 'profile');
const fixture = await createScaleFixture(project, { files });
const runtime = retrievalRuntime();
const resourceLimits = limited ? (await import('./retrieval-budgets.json', { with: { type: 'json' } })).default.worker.resourceLimits : {};
const samples = [];
async function sampled(service, work) {
  let peak = { heapUsed: 0, rss: 0, external: 0 }, running = true;
  const sampler = (async () => {
    while (running) {
      const status = await service.status().catch(() => undefined);
      if (status?.memory) for (const key of Object.keys(peak)) peak[key] = Math.max(peak[key], status.memory[key]);
      await new Promise(resolve => setTimeout(resolve, 100));
    }
  })();
  const started = performance.now(), cpu = process.cpuUsage();
  const result = await work();
  const used = process.cpuUsage(cpu);
  running = false; await sampler;
  return { result, elapsedMs: Math.round(performance.now() - started), cpuMs: Math.round((used.user + used.system) / 1000),
    peakWorkerHeapMiB: Math.round(peak.heapUsed / 1048576 * 10) / 10, peakProcessRssMiB: Math.round(peak.rss / 1048576 * 10) / 10 };
}

const service = new RetrievalService({ userDataDirectory: profile, root: project, ...runtime, resourceLimits, idleMs: 600000 });
const cold = await sampled(service, async () => { await service.activate(); await service.indexing; return (await service.status()).counters; });
samples.push({ phase: 'cold full index', ...cold, counters: undefined, reads: cold.result.reads, parses: cold.result.parses,
  batches: cold.result.batches });
const queries = ['order invoice', 'shipment route warehouse', 'retry queue metric', 'customerSession', 'refund payment token'];
const latencies = [];
for (const query of queries) {
  const started = performance.now(); await service.search(query, { k: 10 });
  latencies.push(Math.round((performance.now() - started) * 10) / 10);
}
samples.push({ phase: 'query (warm, k=10)', latenciesMs: latencies });
const before = (await service.status()).counters;
const edited = join(project, 'pkg0/mod0/file0.ts');
await writeFile(edited, 'export function benchmarkEditedMarker(): number {\n  return 1;\n}\n');
const edit = await sampled(service, async () => { service.notify([edited]); await new Promise(resolve => setTimeout(resolve, 300)); await service.indexing; return (await service.status()).counters; });
samples.push({ phase: 'single edit', elapsedMs: edit.elapsedMs, reads: edit.result.reads - before.reads, parses: edit.result.parses - before.parses,
  fullSyncs: edit.result.fullSyncs - before.fullSyncs, enumerations: edit.result.enumerations - before.enumerations });
await service.release('benchmark');
const warm = new RetrievalService({ userDataDirectory: profile, root: project, ...runtime, resourceLimits, idleMs: 600000 });
const reopen = await sampled(warm, async () => { await warm.activate(); await warm.indexing; return (await warm.status()).counters; });
samples.push({ phase: 'warm reopen (stat reconcile)', elapsedMs: reopen.elapsedMs, cpuMs: reopen.cpuMs, peakWorkerHeapMiB: reopen.peakWorkerHeapMiB,
  peakProcessRssMiB: reopen.peakProcessRssMiB, reads: reopen.result.reads, parses: reopen.result.parses, stats: reopen.result.stats });
await warm.dispose();
const directory = await service.directory();
let databaseBytes = 0;
for (const entry of await readdir(directory)) databaseBytes += (await stat(join(directory, entry))).size;
const report = { checkedAt: new Date().toISOString(), host: { platform: platform(), arch: arch(), release: release(), cpus: cpus().length,
  memoryGiB: Math.round(totalmem() / 2 ** 30), node: process.version }, fixture: { ...fixture }, resourceLimits, samples,
  databaseMiB: Math.round(databaseBytes / 1048576 * 10) / 10 };
await writeFile(join(output, 'result.json'), JSON.stringify(report, null, 2) + '\n');
await rm(scratch, { recursive: true, force: true });
console.log(JSON.stringify(report, null, 2));
console.log(`Retrieval benchmark: ${output}/result.json`);
