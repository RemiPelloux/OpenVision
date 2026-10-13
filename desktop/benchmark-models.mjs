import { activeModelIds, requestProviderRoute } from './model-providers.js';
import { performance } from 'node:perf_hooks';

const modelCount = 10000, iterations = 100;
const text = JSON.stringify({ version: 1, activeId: 'benchmark', providers: [{
  id: 'benchmark', name: 'Benchmark', url: 'https://example.test/v1',
  models: Array.from({ length: modelCount }, (_, index) => ({
    id: `model-${index}`, name: `Model ${index}`, enabled: true,
    capabilities: { reasoningEffortValues: ['low', 'medium', 'high', 'xhigh', 'max'].map(id => ({ id, value: id })) },
  })),
}] });
const storage = { get: () => text };

function measure(name, operation) {
  globalThis.gc?.();
  const before = process.memoryUsage().heapUsed;
  let peak = before;
  const started = performance.now();
  for (let index = 0; index < iterations; index++) {
    operation(); peak = Math.max(peak, process.memoryUsage().heapUsed);
  }
  const elapsedMs = performance.now() - started;
  globalThis.gc?.();
  return { name, iterations, elapsedMs: Math.round(elapsedMs),
    sampledHeapGrowthMiB: Math.round((peak - before) / 1048576 * 100) / 100,
    retainedHeapDeltaMiB: Math.round((process.memoryUsage().heapUsed - before) / 1048576 * 100) / 100 };
}

console.log(JSON.stringify({ platform: process.platform, node: process.version, modelCount,
  gcAvailable: typeof globalThis.gc === 'function', checkedAt: new Date().toISOString(),
  results: [measure('selected route lookup', () => requestProviderRoute(storage, 'model-9999')),
    measure('enabled model IDs', () => activeModelIds(storage))],
  scope: 'In-process catalog workload; sampled JS heap, not total application RAM or a guaranteed peak.' }, null, 2));
