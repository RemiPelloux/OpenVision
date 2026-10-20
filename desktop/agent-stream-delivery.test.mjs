import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, mkdtemp, mkdir, writeFile, rm } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { tmpdir } from 'node:os';
import { readableApp } from './recovered-source.mjs';
import { coalesceTextDeltas, coalescedStreamDelivery, installStreamDelivery, streamDeliveryOwner } from './agent-stream-delivery-customization.mjs';

const original = await readFile(new URL(streamDeliveryOwner.relative, readableApp), 'utf8');

// A model stream whose events become available at chosen moments.
function controlledStream() {
  const waiting = [], ready = []; let ended = false, failure;
  const settle = () => { while (waiting.length && (ready.length || ended || failure)) {
    const { resolve, reject } = waiting.shift();
    if (ready.length) resolve({ value: ready.shift(), done: false }); else if (failure) reject(failure); else resolve({ value: undefined, done: true }); } };
  return { push: (...items) => { ready.push(...items); settle(); }, end: () => { ended = true; settle(); }, fail: error => { failure = error; settle(); },
    returned: false, pulls: 0,
    [Symbol.asyncIterator]() { const stream = this; return { next: () => new Promise((resolve, reject) => { stream.pulls++; waiting.push({ resolve, reject }); settle(); }),
      return: async () => { stream.returned = true; return { done: true }; } }; } };
}
const tick = () => new Promise(resolve => setImmediate(resolve));

test('text deltas that arrive while one is delivered are merged; other events keep their order', async () => {
  const stream = controlledStream(), seen = [];
  const consumer = (async () => { for await (const event of coalesceTextDeltas(stream)) {
    seen.push(event); await new Promise(resolve => setTimeout(resolve, 20)); } })(); // one slow round trip per event
  stream.push({ type: 'text-delta', textDelta: 'a' }); await tick();
  stream.push(...['b', 'c', 'd'].map(textDelta => ({ type: 'text-delta', textDelta })), { type: 'tool-call', id: 1 },
    { type: 'text-delta', textDelta: 'e' }, { type: 'text-delta', textDelta: 'f' });
  await tick(); stream.end(); await consumer;
  assert.deepEqual(seen, [{ type: 'text-delta', textDelta: 'a' }, { type: 'text-delta', textDelta: 'bcd' }, { type: 'tool-call', id: 1 },
    { type: 'text-delta', textDelta: 'e' }, { type: 'text-delta', textDelta: 'f' }]);
});

test('a consumer that keeps up receives every delta alone', async () => {
  const stream = controlledStream(), seen = [];
  const consumer = (async () => { for await (const event of coalesceTextDeltas(stream)) seen.push(event.textDelta); })();
  for (const textDelta of ['x', 'y', 'z']) { stream.push({ type: 'text-delta', textDelta }); await tick(); }
  stream.end(); await consumer;
  assert.deepEqual(seen, ['x', 'y', 'z']);
});

test('a stream failure is raised after the events received before it', async () => {
  const stream = controlledStream(), seen = [];
  stream.push({ type: 'text-delta', textDelta: 'p' }, { type: 'text-delta', textDelta: 'q' }); stream.fail(new Error('socket closed'));
  await assert.rejects((async () => { for await (const event of coalesceTextDeltas(stream)) seen.push(event.textDelta); })(), /socket closed/);
  assert.equal(seen.join(''), 'pq');
});

test('stopping early releases the model stream', async () => {
  const stream = controlledStream();
  stream.push({ type: 'text-delta', textDelta: 'p' });
  for await (const event of coalesceTextDeltas(stream)) { assert.equal(event.textDelta, 'p'); break; }
  await tick();
  assert.equal(stream.returned, true);
});


test('the stream is read ahead only while a text delta is being delivered', async () => {
  const stream = controlledStream(), seen = [];
  const events = coalesceTextDeltas(stream)[Symbol.asyncIterator]();
  await tick();
  assert.equal(stream.pulls, 0, 'nothing is read before the loop asks');
  stream.push({ type: 'stream-start' });
  assert.equal((await events.next()).value.type, 'stream-start');
  await tick();
  assert.equal(stream.pulls, 1, 'a non-text event does not start read-ahead');
  stream.push({ type: 'text-delta', textDelta: 'a' });
  seen.push((await events.next()).value.textDelta);
  stream.push({ type: 'text-delta', textDelta: 'b' }, { type: 'tool-call', id: 2 }, { type: 'text-delta', textDelta: 'c' });
  await tick();
  assert.equal(stream.pulls, 4, 'read-ahead stops at the first non-text event');
  seen.push((await events.next()).value.textDelta);
  assert.equal((await events.next()).value.type, 'tool-call');
  stream.end(); await events.return();
  assert.deepEqual(seen, ['a', 'b']);
});

test('after cancellation buffered events are dropped and the next event comes from the stream', async () => {
  const stream = controlledStream(); let cancelled = false;
  const events = coalesceTextDeltas(stream, () => cancelled)[Symbol.asyncIterator]();
  stream.push({ type: 'text-delta', textDelta: 'shown' });
  assert.equal((await events.next()).value.textDelta, 'shown');
  stream.push({ type: 'text-delta', textDelta: 'buffered' }); await tick();
  cancelled = true;
  stream.fail(Object.assign(new Error('This operation was aborted'), { name: 'AbortError' }));
  await assert.rejects(events.next(), /aborted/);
});

test('the recovered Agent loop awaits each text delta; the patch reads through the coalescer once', () => {
  assert.equal(original.includes('openvisionCoalesceTextDeltas'), false);
  const patched = coalescedStreamDelivery(original);
  assert.equal(coalescedStreamDelivery(patched), patched);
  assert.equal(patched.split('for await (const m of openvisionCoalesceTextDeltas(t, () => e.canceled === true || e.signal?.aborted === true))').length, 2);
  assert.equal(patched.includes(streamDeliveryOwner.loop), false);
  // The shipped helper is the tested function.
  const start = patched.indexOf('function openvisionCoalesceTextDeltas(');
  assert.equal(start, 0);
  assert.throws(() => coalescedStreamDelivery(original.replace('await r.recordText(e, m.textDelta, t)', 'r.recordText(e, m.textDelta, t)')),
    /delivery contract changed/);
  assert.throws(() => coalescedStreamDelivery(original.replace(streamDeliveryOwner.method, 'async consume(e, t, r) {')), /missing or ambiguous/);
});

test('a v1 build is upgraded to v2 without keeping the eager helper', () => {
  const helperV1 = 'function openvisionCoalesceTextDeltas(source) {\n  return (async function* () {})();\n}';
  const v1 = `${helperV1};\n` + original.replace(streamDeliveryOwner.loop,
    '/* OpenVision coalesced Agent text delivery v1 */ for await (const m of openvisionCoalesceTextDeltas(t))');
  assert.equal(coalescedStreamDelivery(v1), coalescedStreamDelivery(original));
});

test('installation patches the bundle once and keeps the first backup', async () => {
  const root = await mkdtemp(join(tmpdir(), 'ov-stream-delivery-'));
  try {
    const path = join(root, 'source/app', streamDeliveryOwner.relative);
    await mkdir(dirname(path), { recursive: true }); await writeFile(path, original);
    await installStreamDelivery(root); const once = await readFile(path, 'utf8');
    await installStreamDelivery(root);
    assert.equal(await readFile(path, 'utf8'), once);
    assert.equal(await readFile(join(root, 'backups/agent-stream-delivery', streamDeliveryOwner.relative), 'utf8'), original);
  } finally { await rm(root, { recursive: true, force: true }); }
});
