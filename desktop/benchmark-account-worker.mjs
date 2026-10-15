import assert from 'node:assert/strict';
import { performance } from 'node:perf_hooks';
import { createRequire } from 'node:module';
import { EventEmitter } from 'node:events';
import { refreshAccountModels, requestProviderRoute } from './model-providers.js';
import { modelSelectionId } from './model-identity.js';

const mib = value => Math.round(value / 1048576 * 100) / 100;
function begin() {
  globalThis.gc();
  const heap = process.memoryUsage().heapUsed;
  return { started: performance.now(), cpu: process.cpuUsage(), heap, peak: heap };
}
function finish(sample) {
  sample.peak = Math.max(sample.peak, process.memoryUsage().heapUsed); globalThis.gc();
  const cpu = process.cpuUsage(sample.cpu);
  return { elapsedMs: +(performance.now() - sample.started).toFixed(2), cpuMs: +((cpu.user + cpu.system) / 1000).toFixed(2),
    sampledHeapGrowthMiB: mib(sample.peak - sample.heap), retainedHeapDeltaMiB: mib(process.memoryUsage().heapUsed - sample.heap) };
}
async function catalogs(count) {
  let queries = 0, failing = false;
  const providers = [{ id: 'benchmark', name: 'Benchmark', url: 'http://127.0.0.1:12345/v1', apiKey: 'synthetic',
    models: Array.from({ length: count }, (_, i) => ({ id: `model-${i}`, name: `Model ${i}`, enabled: true,
      capabilities: { reasoningEffortValues: [{ id: 'high', value: 'high' }] } })) }];
  globalThis.window = { openvisionProjectHome: { accountCatalog: async () => {
    queries++; if (failing) throw Error('Controlled unavailable host'); return { providers: structuredClone(providers) };
  } } };
  const storage = { get: () => undefined }, id = modelSelectionId('benchmark', `model-${count - 1}`);
  const coldStart = begin(); await refreshAccountModels(storage);
  let previous = requestProviderRoute(storage, id); assert.ok(previous);
  const cold = finish(coldStart), warmStart = begin(); let routeRebuilds = 0;
  for (let i = 0; i < 50; i++) {
    await refreshAccountModels(storage, true);
    const route = requestProviderRoute(storage, id);
    assert.equal(route.modelId, previous.modelId); assert.deepEqual(route.reasoningValues, previous.reasoningValues);
    if (route !== previous) routeRebuilds++; previous = route;
    warmStart.peak = Math.max(warmStart.peak, process.memoryUsage().heapUsed);
  }
  const warm = { iterations: 50, routeRebuilds, ...finish(warmStart) };
  const outageStart = begin(), before = queries; failing = true;
  await refreshAccountModels(storage, true);
  for (let i = 0; i < 100; i++) {
    await refreshAccountModels(storage); assert.equal(requestProviderRoute(storage, id), undefined);
  }
  const outage = { requests: 100, catalogQueries: queries - before, ...finish(outageStart) };
  return { modelCount: count, cold, warm, outage, correct: true };
}
class Sink extends EventEmitter {
  writableLength = 0;
  destroyed = false;
  setHeader() {}
  write(data) { this.bytes += Buffer.byteLength(data); }
  destroy() { this.destroyed = true; }
  bytes = 0;
}
async function streams() {
  const { createChatSession } = createRequire(import.meta.url)('./account-chat-session.cjs');
  const sessions = [], sinks = [], callbacks = [];
  let released = 0;
  const sample = begin();
  for (let i = 0; i < 4; i++) {
    const session = createChatSession({ request: { model: 'test', stream: true, tools: [] },
      remember() {}, forget() {}, release() { released++; } });
    const sink = new Sink(); session.attach(sink); sessions.push(session); sinks.push(sink);
    await session.start(events => { callbacks.push(events); return { close: async () => {} }; });
  }
  for (let i = 0; i < 2048; i++) for (const events of callbacks) {
    // Flat, distinct strings avoid V8 sharing a repeated fixture's backing store.
    const bytes = Buffer.alloc(1536, 65 + i % 26); bytes.write(String(i));
    (i % 2 ? events.text : events.reasoning)(bytes.toString('ascii'));
    sample.peak = Math.max(sample.peak, process.memoryUsage().heapUsed);
  }
  const active = finish(sample), outputBytes = sinks.reduce((sum, sink) => sum + sink.bytes, 0);
  const closing = begin(); await Promise.all(sessions.map(session => session.close()));
  assert.equal(released, 4); assert.ok(sinks.every(sink => sink.destroyed));
  return { sessions: 4, contentBytesPerSession: 3 * 1048576, outputBytes, active, close: finish(closing), correct: true };
}
const result = process.argv[2] === 'stream' ? await streams() : await catalogs(Number(process.argv[2]));
console.log(JSON.stringify({ ...result, peakProcessRssMiB: process.resourceUsage().maxRSS / 1024 }));
