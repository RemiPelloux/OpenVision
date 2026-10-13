import test from 'node:test';
import assert from 'node:assert/strict';
import { observedProcessTree, requestMeasurement } from './native-baseline.mjs';

test('memory ancestry excludes reused parents, unknown birth times and unrelated processes', () => {
  const entry = (pid, parentPid, createdMs) => ({ pid, parentPid, createdMs, privateBytes: 10, workingSetBytes: 20 });
  const processes = [entry(5, 2, 120), entry(2, 1, 110), entry(1, 99, 100),
    entry(3, 1, 90), entry(4, 1, null), entry(6, 9, 120), entry(7, 8, 120), entry(8, 7, 120)];
  const result = observedProcessTree(processes, { pid: 1, creationTime: 100 });
  assert.deepEqual(result.processes.map(process => process.pid).sort(), [1, 2, 5]);
  assert.equal(result.privateBytes, 30); assert.equal(result.summedWorkingSetBytes, 60);
  assert.throws(() => observedProcessTree(processes, { pid: 1, creationTime: 90 }), /identity changed/);
  assert.throws(() => observedProcessTree(processes, { pid: 99, creationTime: 100 }), /missing/);
  assert.throws(() => observedProcessTree([...processes, processes[0]], { pid: 1, creationTime: 100 }), /duplicate PID/);
  assert.throws(() => observedProcessTree([{ ...processes[2], privateBytes: NaN }], { pid: 1, creationTime: 100 }), /counter/);
});

test('request measurements count UTF-8 bytes and leave token usage unknown without storing text', () => {
  const payload = { messages: [{ role: 'user', content: 'café 日本語' }], tools: [{ type: 'function' }] };
  const body = JSON.stringify(payload), result = requestMeasurement(body, payload);
  assert.equal(result.bodyBytes, Buffer.byteLength(body));
  assert.ok(result.bodyBytes > body.length);
  assert.equal(result.inputTokens, null);
  assert.ok(!JSON.stringify(result).includes('café'));
  assert.equal(result.bodySha256, requestMeasurement(body, payload).bodySha256);
});
