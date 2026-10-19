import test from 'node:test';
import assert from 'node:assert/strict';
import { probePollSeconds, probesPerRootPerSecond } from './explorer-probe-rate.mjs';

// Linux x64 trace (explorer-verification-TUKVBF): clusters of 3, 15, 16 and 6
// probes per 5.01 s period across three roots.
const cluster = [[0, 3], [0.73, 15], [1.94, 16], [2.80, 6]];
const countIn = (start, seconds) => {
  let count = 0;
  for (let period = -2; period < 6; period++) for (const [offset, calls] of cluster) {
    const at = period * probePollSeconds + offset;
    if (at >= start && at <= start + seconds) count += calls;
  }
  return count;
};

test('a steady poll stays at its own rate in every window phase and length', () => {
  const steady = 40 / 3 / probePollSeconds;
  for (const seconds of [3, 3.08, 3.46, 4, 6, 11]) for (let start = 0; start < probePollSeconds; start += 0.05) {
    const rate = probesPerRootPerSecond(countIn(start, seconds), 3, seconds);
    assert.ok(rate <= +steady.toFixed(2) + 0.01, `${seconds}s at ${start.toFixed(2)}: ${rate}`);
  }
});

test('control: the window-only rate exceeds 4 for the same steady poll', () => {
  assert.equal(countIn(-0.05, 3.08), 40);
  assert.ok(40 / 3 / 3.08 > 4);
  assert.equal(probesPerRootPerSecond(40, 3, 3.08), 2.66);
});

test('extra probes inside one window still exceed the budget', () => {
  assert.ok(probesPerRootPerSecond(40 + 25, 3, 3) > 4);
});

test('rejects degenerate inputs', () => {
  assert.throws(() => probesPerRootPerSecond(1, 0, 3), RangeError);
  assert.throws(() => probesPerRootPerSecond(1, 3, 0), RangeError);
});
