import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { createRequire } from 'node:module';
import { performance } from 'node:perf_hooks';
import { debounceCompletionPreparation } from './completion-preparation.mjs';
import { preparationSource, preparationMethod, preparationFixture } from './completion-preparation-fixture.mjs';

const [mode, baselineRuntime] = process.argv.slice(2);
const source = await preparationSource('desktop');
const { method } = preparationMethod(mode === 'baseline' ? source : debounceCompletionPreparation(source, 'desktop'), 'desktop');
const runtime = createRequire(import.meta.url)(mode === 'baseline' ? baselineRuntime : './agent-runtime.cjs');
const mib = bytes => +(bytes / 1048576).toFixed(2);

async function measure(work) {
  globalThis.gc();
  const heap = process.memoryUsage().heapUsed, cpu = process.cpuUsage(), start = performance.now();
  let peak = heap;
  const sample = () => { peak = Math.max(peak, process.memoryUsage().heapUsed); };
  const result = await work(sample);
  sample(); globalThis.gc();
  const used = process.cpuUsage(cpu);
  return { ...result, elapsedMs: +(performance.now() - start).toFixed(2), cpuMs: +((used.user + used.system) / 1000).toFixed(2),
    sampledHeapGrowthMiB: mib(peak - heap), retainedHeapDeltaMiB: mib(process.memoryUsage().heapUsed - heap) };
}

async function typing(sample) {
  const f = preparationFixture(method, { debounce: async id => id !== 'winner' });
  const lines = Array.from({ length: 4096 }, (_, index) => `${index}: ${'code'.repeat(30)}\n`);
  f.model.getValue = () => { f.counts.reads++; const text = lines.join(''); sample(); return text; };
  f.context.executeBeforeTabFileReadHook = async (_path, content) => {
    f.counts.hooks++; createHash('sha256').update(content).digest(); sample();
  };
  await Promise.all([...Array.from({ length: 100 }, (_, i) => f.run(String(i))), f.run('winner')]);
  assert.equal(f.counts.reads, mode === 'baseline' ? 101 : 1);
  return { triggers: 101, ...f.counts };
}

async function partialStream(sample) {
  const relay = runtime.createReasoningRelay(id => id, () => undefined);
  let chunks = 0, cancelled = false;
  const stream = new ReadableStream({ pull(c) {
    if (chunks === 256) return c.close();
    const bytes = Buffer.alloc(65536, 65 + chunks++ % 26);
    c.enqueue(bytes);
  }, cancel() { cancelled = true; } }, { highWaterMark: 0 });
  const reader = relay.observeResponse(new Response(stream, { headers: { 'content-type': 'text/event-stream' } })).body.getReader();
  let error;
  try { while (!(await reader.read()).done) sample(); } catch (failure) { error = failure.code; }
  finally { reader.releaseLock(); }
  assert.equal(cancelled, mode !== 'baseline');
  return { emittedMiB: chunks / 16, cancelled, ...(error ? { error } : {}) };
}

async function validStream(sample) {
  const relay = runtime.createReasoningRelay(id => id, () => undefined);
  const event = `data: ${JSON.stringify({ type: 'response.output_text.delta', delta: 'x'.repeat(512) })}\n\n`;
  const chunk = new TextEncoder().encode(event.repeat(128));
  let chunks = 0, received = 0;
  const stream = new ReadableStream({ pull(c) {
    if (chunks++ === 128) return c.close();
    c.enqueue(chunk);
  } }, { highWaterMark: 0 });
  const reader = relay.observeResponse(new Response(stream, { headers: { 'content-type': 'text/event-stream' } })).body.getReader();
  try {
    while (true) {
      const result = await reader.read(); if (result.done) break;
      received += result.value.byteLength; sample();
    }
  } finally { reader.releaseLock(); }
  assert.equal(received, chunk.byteLength * 128);
  return { forwardedMiB: mib(received) };
}

const results = [];
for (let iteration = 0; iteration < 2; iteration++) results.push({ phase: iteration ? 'warm' : 'cold',
  typing: await measure(typing), validStream: await measure(validStream), partialStream: await measure(partialStream) });
console.log(JSON.stringify({ mode, results, peakProcessRssMiB: mib(process.resourceUsage().maxRSS * 1024) }));
