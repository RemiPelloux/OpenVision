import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { applicableBudgets, checkBudgets, ioDelta, parseProcIo, percentile, summarizeFrames, summarizeLatency } from './responsiveness-measure.mjs';

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
