import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { Script } from 'node:vm';
import { parseExpressionAt } from '../tooling/dependencies.mjs';
import { disableAgentTelemetry, disableCompletionTelemetry, disableExtensionHostTelemetry,
  disableCodebaseTelemetry, disableDebuggerTelemetry } from './telemetry-extensions.mjs';

const options = { ecmaVersion: 'latest', sourceType: 'module' };

async function artifact(t, path) {
  for (const base of ['../build/recovery/readable/app/', '../../cursor/readable/app/', '../backups/telemetry-extensions/']) {
    try { return await readFile(new URL(base + path, import.meta.url), 'utf8'); }
    catch (error) { if (error.code !== 'ENOENT') throw error; }
  }
  t.skip('Original recovered desktop artifact is not installed');
}

function ownedClass(text, anchor) {
  const offset = text.indexOf(anchor);
  assert.ok(offset >= 0, anchor);
  for (const candidate of [...text.slice(0, offset).matchAll(/\bclass(?:\s+[\w$]+)?(?:\s+extends\s+[\w$.]+)?\s*\{/g)].reverse()) {
    let node = parseExpressionAt(text, candidate.index, options);
    while (node.type === 'CallExpression' || node.type === 'MemberExpression') node = node.callee ?? node.object;
    if (node.type === 'ClassExpression' && node.end > offset) return text.slice(node.start, node.end);
  }
  throw new Error(`Class not found for ${anchor}`);
}

for (const variant of ['node/extensionHostProcess.js', 'worker/extensionHostWorkerMain.js']) {
  test(`${variant}: extension telemetry cannot retain a sender or collect data even after enabling`, async t => {
    const original = await artifact(t, `out/vs/workbench/api/${variant}`);
    if (!original) return;
    const patched = disableExtensionHostTelemetry(original);
    assert.equal(disableExtensionHostTelemetry(patched), patched);
    const TelemetryLogger = new Script(`(${ownedClass(patched, 'TelemetrySender.sendEventData must be a function')})`).runInNewContext();
    const calls = [];
    const sender = { sendEventData: (...a) => calls.push(a), sendErrorData: (...a) => calls.push(a), flush: () => calls.push('flush') };
    const logger = new TelemetryLogger(sender, {}, { publisher: 'vscode' }, { trace: (...a) => calls.push(a) }, false, {}, { isUsageEnabled: true, isErrorsEnabled: true });
    const api = logger.apiTelemetryLogger;
    logger.updateTelemetryEnablements(true, true);
    logger.logEvent('event', { text: 'private' });
    api.logUsage('usage');
    api.logError(new Error('error'));
    assert.equal(api.isUsageEnabled, false);
    assert.equal(api.isErrorsEnabled, false);
    assert.equal(logger._sender, undefined);
    api.dispose();
    assert.deepEqual(calls, []);
    const policy = ownedClass(patched, 'getTelemetryConfiguration()');
    assert.match(policy, /getTelemetryConfiguration\(\) \{ \/\* OpenVision: disabled getTelemetryConfiguration \*\/ return false;/);
    assert.match(policy, /getBuiltInCommonProperties\([^)]*\) \{ \/\* OpenVision: disabled getBuiltInCommonProperties \*\/ return Object.create\(null\);/);
  });
}

for (const path of ['extensions/cursor-agent-host/dist/main.js',
  'extensions/cursor-agent-host/dist/agent-host-daemon/dist/bin/daemon.cjs',
  'extensions/cursor-always-local/dist/main.js']) {
  test(`${path}: metrics have no timers, buffers or transports; structured diagnostics stay local`, async t => {
    const original = await artifact(t, path);
    if (!original) return;
    const patched = disableAgentTelemetry(original);
    assert.equal(disableAgentTelemetry(patched), patched);
    if (original.startsWith('#!')) {
      assert.equal(patched.split('\n')[0], original.split('\n')[0]);
      assert.doesNotThrow(() => new Script(patched));
      const newline = patched.indexOf('\n');
      const marker = '/* OpenVision extension telemetry disabled v1 */\n';
      const old = marker + patched.slice(0, newline + 1) + patched.slice(newline + 1 + marker.length);
      assert.equal(disableAgentTelemetry(old), patched, 'repair previously generated daemon without repatching owners');
    }
    const classStart = patched.indexOf('class {', patched.indexOf('AggregatingMetricsProvider = class'));
    const metricsNode = parseExpressionAt(patched, classStart, options);
    const unexpected = () => { throw new Error('Telemetry attempted transport or scheduling'); };
    const Metrics = new Script(`(${patched.slice(metricsNode.start, metricsNode.end)})`).runInNewContext({ setInterval: unexpected, setTimeout: unexpected, fetch: unexpected });
    const metrics = new Metrics(new Proxy({}, { get: unexpected }));
    for (const method of ['increment', 'gauge', 'distribution', 'distributionSamples', 'flush', 'flushIncrements', 'flushGauges', 'flushDistributions', 'dispose'])
      metrics[method]('stat', 1, {});
    await metrics.sendDistributionEntries(new Proxy({}, { get: unexpected }), [1]);
    assert.equal(metrics.getOrCreateClient(), undefined);
    assert.deepEqual(Object.keys(metrics), []);
    const Logs = new Script(`(${ownedClass(patched, 'static _isLocalhostUrl(')})`).runInNewContext({ setTimeout: unexpected, fetch: unexpected });
    const logs = Object.create(Logs.prototype);
    const local = [];
    logs._host = { writePrivacyLog: (...a) => local.push(a) };
    logs._addLog('info', 'test', 'local diagnostic', {});
    assert.equal(local.length, 1);
    assert.match(local[0][1], /local diagnostic/);
    logs._refreshFlushThrottleGate();
    logs._scheduleFlush();
    await logs._submitLogs([{ message: 'private' }]);
    assert.equal(logs._getOrCreateAnalyticsClient(), undefined);
  });
}

test('completion telemetry cannot collect or upload edits, and streaming implementation is preserved', async t => {
  const original = await artifact(t, 'extensions/cursor-always-local/dist/main.js');
  if (!original) return;
  const patched = disableCompletionTelemetry(original);
  assert.equal(disableCompletionTelemetry(patched), patched);
  const beforeClass = ownedClass(original, 'async appendCppTelem(');
  const afterClass = ownedClass(patched, 'async appendCppTelem(');
  const before = parseExpressionAt(beforeClass, 0, options);
  const after = parseExpressionAt(afterClass, 0, options);
  for (const name of ['appendCppTelem', 'appendCppTelemChunk']) {
    const node = after.body.body.find(n => n.key.name === name);
    assert.equal(node.value.body.body.length, 0);
  }
  const streamBefore = before.body.body.find(n => n.key.name === 'streamCpp');
  const streamAfter = after.body.body.find(n => n.key.name === 'streamCpp');
  assert.ok(streamBefore && streamAfter);
  assert.equal(beforeClass.slice(streamBefore.start, streamBefore.end), afterClass.slice(streamAfter.start, streamAfter.end));
});

test('codebase snapshot telemetry registration returns an inert session without touching project or network', async t => {
  const original = await artifact(t, 'extensions/cursor-retrieval/dist/main.js');
  if (!original) return;
  const patched = disableCodebaseTelemetry(original);
  assert.equal(disableCodebaseTelemetry(patched), patched);
  const body = 'return { sessionState: { get() {}, subscribe: () => ({ dispose() {} }) }, async shutdown() {} };';
  const offset = patched.indexOf(body);
  assert.ok(offset >= 0);
  const declaration = [...patched.slice(0, offset).matchAll(/\bfunction\s+[\w$]+\([^)]*\)\s*\{/g)].at(-1);
  const registration = parseExpressionAt(patched, declaration.index, options);
  const register = new Script(`(${patched.slice(registration.start, registration.end)})`).runInNewContext();
  const session = register(new Proxy({}, { get() { throw new Error('unexpected project access'); } }));
  assert.equal(session.sessionState.get(), undefined);
  session.sessionState.subscribe(() => {}).dispose();
  await session.shutdown();
});

test('debugger telemetry and experimentation are disabled without altering program launch', async t => {
  const original = await artifact(t, 'extensions/ms-vscode.js-debug/src/extension.js');
  if (!original) return;
  const patched = disableDebuggerTelemetry(original);
  assert.equal(disableDebuggerTelemetry(patched), patched);
  const report = ownedClass(patched, 'this.batchers = { dapOperation:');
  const Reporter = new Script(`(${report})`).runInNewContext();
  const instance = Object.create(Reporter.prototype);
  instance.report('unknown-event', {});
  instance.reportOperation('dapOperation', 'launch', 10);
  instance.pushOutput({});
  assert.equal(ownedClass(original, 'this.callbackFile ='), ownedClass(patched, 'this.callbackFile ='));
});

test('missing recovered telemetry boundaries fail instead of reporting a successful policy install', () => {
  for (const transform of [disableAgentTelemetry, disableCompletionTelemetry,
    disableExtensionHostTelemetry, disableCodebaseTelemetry, disableDebuggerTelemetry])
    assert.throws(() => transform('class Unknown {}'), /missing or ambiguous/i);
});
