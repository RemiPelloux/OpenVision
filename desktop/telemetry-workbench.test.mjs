import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { runInNewContext } from 'node:vm';
import { parseExpressionAt } from '../tooling/dependencies.mjs';
import { customizeWorkbenchTelemetry } from './telemetry-workbench.mjs';

const ids = ['window-analytics', 'analytics', 'window-metrics', 'metrics',
  'continuous-profiling', 'memory-monitor', 'performance-events', 'edit-history',
  'client-log-upload', 'tracing-configuration', 'cpu-monitor'];

function classAt(source, anchor) {
  const index = source.indexOf(anchor);
  assert.ok(index >= 0, `Missing ${anchor}`);
  const node = parseExpressionAt(source, source.lastIndexOf('class ', index), { ecmaVersion: 'latest' });
  return { node, code: source.slice(node.start, node.end) };
}

async function verifyOwner(source, id) {
  const { node, code } = classAt(source, `/* OpenVision disabled telemetry owner: ${id} */`);
  let disposed = 0;
  const fail = () => assert.fail(`${id} collected data, scheduled work, or called a dependency`);
  const dependency = new Proxy(fail, { get: fail, apply: fail });
  class Disposable { dispose() { disposed++; } }
  const globals = { setTimeout: fail, setInterval: fail, fetch: fail, performance: dependency,
    process: dependency, Date: dependency };
  if (node.superClass) globals[node.superClass.name] = Disposable;
  const Constructor = runInNewContext(`(${code})`, globals);
  const service = new Constructor(...Array(20).fill(dependency));
  for (const member of node.body.body) {
    const name = member.key.name;
    if (name === 'constructor' || name === 'dispose') continue;
    if (member.kind === 'get') { void service[name]; continue; }
    if (['recordCppSessionEvent', 'recordCppSessionEventWithPerfProvided'].includes(name)) continue;
    const args = member.value.params.map(parameter => {
      const pattern = parameter.type === 'AssignmentPattern' ? parameter.left : parameter;
      return pattern.type === 'ObjectPattern'
        ? Object.fromEntries(pattern.properties.map(property => [property.key.name, dependency]))
        : dependency;
    });
    await service[name](...args);
  }
  if (id === 'analytics') {
    assert.equal(service.analyticsEnabled(), false);
    assert.equal(service.shouldSendEventOnFlush({}), false);
    service.onEvent(dependency).dispose();
  }
  if (id === 'edit-history') {
    assert.equal(service.canWeTrackTelem, false);
    assert.equal(service.getCurrentSessionId(), '');
    let released = 0;
    const resource = { dispose() { released++; } };
    service.recordCppSessionEvent(dependency, resource);
    service.recordCppSessionEventWithPerfProvided(dependency, 0, resource);
    assert.equal(released, 2, 'Dropped telemetry releases resources supplied by its caller');
    service.onDidChangeCppSessionId(dependency).dispose();
    service.onDidChangeCppTelemEnabled(dependency).dispose();
  }
  if (id === 'continuous-profiling') {
    assert.equal(service.getIsPrivacyMode(), true);
    assert.equal(await service.captureProfile({}), '');
    assert.equal(await service.captureEmergencyProfile({}), null);
    service.onProfileCaptureStatusChange(dependency).dispose();
  }
  if (id === 'client-log-upload') assert.equal((await service.getDebuggingDataUploadUrl()).url, '');
  if (node.body.body.some(member => member.key.name === 'dispose')) {
    service.dispose();
    assert.equal(disposed, 1);
  }
}

for (const variant of ['desktop', 'glass']) {
  test(`${variant}: recovered telemetry owners collect nothing and never create providers or timers`, async t => {
    let source;
    for (const base of ['../build/recovery/readable/app/', '../../cursor/readable/app/', '../backups/telemetry/source/app/']) {
      try { source = await readFile(new URL(`${base}out/vs/workbench/workbench.${variant}.main.js`, import.meta.url), 'utf8'); break; }
      catch (error) { if (error.code !== 'ENOENT') throw error; }
    }
    if (!source) return t.skip('Original recovered workbench required');
    const result = customizeWorkbenchTelemetry(source);
    const repeated = customizeWorkbenchTelemetry(result.text);
    assert.equal(repeated.text, result.text);
    assert.equal(repeated.patches.length, 0);
    for (const id of ids) await verifyOwner(result.text, id);
    assert.equal(classAt(result.text, 'async getStream({').code, classAt(source, 'async getStream({').code,
      'The real autocomplete request and response implementation is unchanged');
    const tampered = result.text.replace('this.eventQueue = [];', 'this.eventQueue = ["event"];');
    assert.throws(() => customizeWorkbenchTelemetry(tampered), /was modified/);
    const newMethod = result.text.replace('this.eventQueue = []; this.analyticsOutputChannelLoaded = false; }',
      'this.eventQueue = []; this.analyticsOutputChannelLoaded = false; } unexpectedTelemetryMethod() {}');
    assert.throws(() => customizeWorkbenchTelemetry(newMethod), /method contract changed/);
  });
}

test('Missing recovered telemetry owners fail closed instead of producing a partially disabled build', () => {
  assert.throws(() => customizeWorkbenchTelemetry('class Example {}'), /owner missing or ambiguous/);
});
