import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { parseExpressionAt } from '../tooling/dependencies.mjs';
import { customizeStream } from './stream-customization.mjs';

async function recoveredSource(variant) {
  const relative = `out/vs/workbench/workbench.${variant}.main.js`;
  for (const directory of ['../build/recovery/readable/app', '../../cursor/readable/app', '../backups/bundle-customizations']) {
    try {
      const text = await readFile(new URL(`${directory}/${relative}`, import.meta.url), 'utf8');
      if (!text.includes('/* OpenVision release cancelled stream barriers')) return text;
    } catch (error) { if (error.code !== 'ENOENT') throw error; }
  }
}

function coalescerClass(text) {
  const start = text.indexOf('class ', text.indexOf('"textDeltaCoalescer.js"() {'));
  const owner = parseExpressionAt(text, start, { ecmaVersion: 'latest' });
  return new Function(`return (${text.slice(owner.start, owner.end)});`)();
}

function fixture(Coalescer) {
  const frames = new Set();
  const timers = new Set();
  const updates = [];
  const options = { targetCharsPerFrame: 1, maxLagFrames: 8, barrierMaxWaitMs: 1000 };
  const coalescer = new Coalescer((context, text) => updates.push({ context, text }),
    { getOptions: () => options }, {
      schedule: callback => { frames.add(callback); return callback; },
      cancel: callback => frames.delete(callback), now: () => 1000,
      scheduleTimeout: callback => { timers.add(callback); return callback; },
      cancelTimeout: callback => timers.delete(callback),
    });
  return { coalescer, frames, timers, updates };
}

for (const variant of ['desktop', 'glass']) {
  const original = await recoveredSource(variant);
  const options = { skip: original === undefined ? `No unmodified ${variant} workbench recovery or backup available` : false };
  test(`${variant}: cancelled generation drops text and immediately releases all barriers`, options, async () => {
    const baseline = fixture(coalescerClass(original));
    baseline.coalescer.enqueue('old', 'unused text');
    baseline.coalescer.flushGracefully();
    baseline.coalescer.disposeWithoutFlush();
    assert.equal(baseline.coalescer.drainWaiters.length, 1, 'Recovered defect must reproduce');
    assert.equal(baseline.timers.size, 1);
    const { text, patches } = customizeStream(original);
    assert.equal(patches.length, 1);
    assert.equal(customizeStream(text).text, text);
    const changed = fixture(coalescerClass(text));
    changed.coalescer.enqueue('old-generation', 'discarded text');
    const drains = [changed.coalescer.flushGracefully(), changed.coalescer.flushGracefully()];
    assert.equal(changed.timers.size, 2);
    changed.coalescer.disposeWithoutFlush();
    await Promise.all(drains);
    assert.equal(changed.coalescer.drainWaiters.length, 0);
    assert.equal(changed.timers.size, 0);
    assert.equal(changed.frames.size, 0);
    assert.equal(changed.coalescer.pending, undefined);
    assert.deepEqual(changed.updates, [], 'Discard must not publish stale text');
    changed.coalescer.disposeWithoutFlush();
  });
  test(`${variant}: active-generation disposal and barrier timeout preserve complete text`, options, async () => {
    const Coalescer = coalescerClass(customizeStream(original).text);
    for (const operation of ['dispose', 'timeout']) {
      const state = fixture(Coalescer);
      state.coalescer.enqueue('active', 'first');
      state.coalescer.enqueue('active', ' second');
      const waiting = state.coalescer.flushGracefully();
      if (operation === 'dispose') state.coalescer.dispose();
      else for (const callback of [...state.timers]) callback();
      await waiting;
      assert.deepEqual(state.updates, [{ context: 'active', text: 'first second' }]);
      assert.equal(state.frames.size, 0);
      assert.equal(state.timers.size, 0);
    }
  });
}
