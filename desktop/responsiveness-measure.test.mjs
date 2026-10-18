import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { applicableBudgets, checkBudgets, editTraffic, ioDelta, parseProcIo, percentile, refreshHistogram, sizeRatios, summarizeFrames, summarizeLatency, waitForStreamPaint } from './responsiveness-measure.mjs';

test('percentiles use nearest rank', () => {
  assert.equal(percentile([], 50), null);
  assert.equal(percentile([5, 1, 3, 2, 4], 50), 3);
  assert.equal(percentile(Array.from({ length: 100 }, (_, index) => index + 1), 95), 95);
});

test('frame summary counts slow frames and long-frame layout', () => {
  const summary = summarizeFrames({ gaps: [16, 17, 60, 120], longTasks: [70, 80],
    longFrames: [{ blockingDuration: 20, styleAndLayoutMs: 5, forcedStyleAndLayoutMs: 3 }], elapsedMs: 213.4 });
  assert.equal(summary.frames, 4); assert.equal(summary.framesOver50Ms, 2); assert.equal(summary.framesOver100Ms, 1);
  assert.equal(summary.longTaskTotalMs, 150); assert.equal(summary.longTaskMaxMs, 80);
  assert.equal(summary.longAnimationFrameBlockingMs, 20); assert.equal(summary.forcedLayoutMs, 3);
  assert.deepEqual(summary.frameRefreshHistogram, [2, 0, 0, 1, 1]);
});

test('refresh histogram buckets gaps by whole 60 Hz intervals', () => {
  assert.deepEqual(refreshHistogram([16.6, 16.8, 33.3, 49.9, 50.1, 66.7, 120, 3]), [3, 1, 2, 1, 1]);
});

test('latency summary reports Event Timing separately', () => {
  const summary = summarizeLatency([10, 20, 30], [24]);
  assert.deepEqual([summary.keys, summary.latencyP50Ms, summary.latencyMaxMs, summary.eventTimingOver16], [3, 20, 30, 1]);
});

test('filesystem deltas sum process-family counters by role and ignore exited processes', () => {
  const io = parseProcIo('rchar: 10\nwchar: 20\nsyscr: 1\nsyscw: 2\nread_bytes: 0\nwrite_bytes: 4096\n');
  assert.equal(io.write_bytes, 4096);
  const before = new Map([['1:1', { role: 'main', ...io }], ['2:5', { role: 'renderer', ...io }]]);
  const after = new Map([['1:1', { role: 'main', ...io, syscw: 12, wchar: 120 }], ['3:9', { role: 'shared-process', ...io }]]);
  const delta = ioDelta(before, after);
  assert.equal(delta.syscw, 12); assert.equal(delta.wchar, 120); assert.equal(delta.byRole.main.syscw, 10);
  assert.equal(delta.byRole['shared-process'].write_bytes, 4096);
});

test('filesystem deltas carry reads and CPU time by role', () => {
  const before = new Map([['1:1', { role: 'renderer', rchar: 100, wchar: 0, cpuTicks: 50 }]]);
  const after = new Map([['1:1', { role: 'renderer', rchar: 400, wchar: 0, cpuTicks: 57 }], ['2:2', { role: 'child:tsserver', rchar: 90, cpuTicks: 3 }]]);
  const delta = ioDelta(before, after);
  assert.equal(delta.byRole.renderer.rchar, 300); assert.equal(delta.byRole.renderer.cpuMs, 70);
  assert.equal(delta.byRole['child:tsserver'].cpuMs, 30); assert.equal(delta.rchar, 390);
});

test('edit traffic is reported per key by role, and compared with the control file', () => {
  const byRole = { renderer: { wchar: 11000, cpuMs: 330 }, 'extension-host': { rchar: 22000, wchar: 5500, cpuMs: 110 },
    'child:tsserver': { rchar: 16500, wchar: 3300, cpuMs: 55 } };
  const traffic = editTraffic(byRole, 110);
  assert.deepEqual([traffic.rendererWritePerKey, traffic.extensionHostReadPerKey, traffic.tsserverReadPerKey, traffic.tsserverWritePerKey],
    [100, 200, 150, 30]);
  assert.deepEqual([traffic.rendererCpuMsPerKey, traffic.tsserverCpuMsPerKey], [3, 0.5]);
  assert.equal(editTraffic({ renderer: { wchar: 10, cpuMs: 0 } }, 10).tsserverReadPerKey, null);
  assert.equal(editTraffic(byRole, 0).rendererWritePerKey, null);
  assert.deepEqual(sizeRatios({ a: 300, b: 0, c: 5 }, { a: 100, b: 0 }, ['a', 'b', 'c']), { aRatio: 3, bRatio: 0, cRatio: null });
});

test('stream paint waits for the text in the reply row, then one more frame', async () => {
  const frames = []; let now = 0;
  const row = { isConnected: true, textContent: 'T stream begins' };
  const container = { textContent: row.textContent, querySelectorAll: () => [row] };
  Object.assign(globalThis, { document: { querySelectorAll: () => [container] }, requestAnimationFrame: callback => frames.push(callback) });
  const realNow = performance.now; performance.now = () => now;
  try {
    const painted = waitForStreamPaint({ text: 'T stream done', begins: 'T stream begins', rowSelector: 'r', containerSelector: 'c', timeoutMs: 1000 });
    const step = ms => { now += ms; frames.shift()(); };
    step(16); step(16); row.textContent += ' T stream done'; step(16); step(16);
    const { paintedEpoch, foundEpoch, frames: checks } = await painted;
    assert.equal(checks, 3); assert.equal(Math.round(foundEpoch - performance.timeOrigin), 48);
    assert.equal(Math.round(paintedEpoch - foundEpoch), 16); assert.equal(frames.length, 0);
  } finally { performance.now = realNow; delete globalThis.document; delete globalThis.requestAnimationFrame; }
});

test('budgets fail on excess, shortfall and missing measurements', () => {
  const result = { phases: { stream: { frameP95Ms: 40, mountedRows: 30 }, picker: { pickerRowsOpen: 40 } } };
  assert.deepEqual(checkBudgets(result, { phases: { stream: { frameP95Ms: 50, mountedRows: 40 } } }), []);
  assert.deepEqual(checkBudgets(result, { phases: { stream: { frameP95Ms: 30, 'min:mountedRows': 31, latencyP95Ms: 10 }, editor: {} } }),
    ['stream.frameP95Ms: 40 > 30', 'stream.mountedRows: 30 < 31', 'stream.latencyP95Ms: not measured', 'editor: not measured']);
});

test('applicable budgets keep selected phases and drop full-only metrics outside full mode', () => {
  const budgets = { fullOnly: ['stream.min:chunksSent'], phases: { stream: { 'min:chunksSent': 2000, frameP95Ms: 50 }, editorSmall: { latencyP95Ms: 360 } } };
  assert.deepEqual(applicableBudgets(budgets, { full: true }).phases, budgets.phases);
  assert.deepEqual(applicableBudgets(budgets, { full: false }).phases, { stream: { frameP95Ms: 50 }, editorSmall: { latencyP95Ms: 360 } });
  assert.deepEqual(applicableBudgets(budgets, { full: false, selectedPhases: ['editorSmall'] }).phases, { editorSmall: { latencyP95Ms: 360 } });
  const real = JSON.parse(readFileSync(new URL('./responsiveness-budgets.json', import.meta.url), 'utf8'));
  for (const entry of real.fullOnly) { const [phase, key] = entry.split('.'); assert.ok(key in real.phases[phase], entry); }
});
