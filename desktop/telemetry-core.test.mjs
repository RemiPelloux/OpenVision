import { test } from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import { readFile, mkdtemp, mkdir, writeFile, rm } from 'node:fs/promises';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { disableCoreTelemetry, disabledSentry } from './telemetry-core.mjs';
import { telemetryCoreTargets } from './telemetry-customization.mjs';
import { classAt } from './telemetry-patches.mjs';
import { mergeSettings, parseConfiguration, telemetrySettings } from './import-json.mjs';
import { telemetryProduct, installTelemetrySettings } from './telemetry-settings.mjs';

async function original(relative) {
  for (const base of ['../build/recovery/readable/app/', '../../cursor/readable/app/', '../backups/telemetry/source/app/']) {
    try { return await readFile(new URL(base + relative, import.meta.url), 'utf8'); }
    catch (error) { if (error.code !== 'ENOENT') throw error; }
  }
}

test('Sentry cannot retain payloads, change transport, or be re-enabled', async () => {
  const state = vm.runInNewContext(disabledSentry);
  state.enabled = true;
  state.transport = {send() {throw new Error('network called');}};
  state.buffer.push({ private: 'payload' });
  state.buffer = [{ private: 'payload' }];
  assert.equal(state.enabled, false);
  assert.equal(state.buffer.length, 0);
  assert.equal((await state.transport.send({private: 'payload'})).statusCode, 200);
  assert.equal(await state.transport.flush(), true);
  assert.equal(state.profilesSampleRate, 0);
});

for (const path of telemetryCoreTargets) test(`${path}: recovered telemetry owners are inert and idempotent`, async t => {
  const before = await original(path);
  if (!before) return t.skip('Recovered input is unavailable');
  const options = {main: path === 'out/main.js', requireSentry: !path.endsWith('cliProcessMain.js')};
  const result = disableCoreTelemetry(before, options);
  assert.ok(result.patches.length);
  assert.equal(disableCoreTelemetry(result.text, options).text, result.text);
  assert.doesNotMatch(result.text, /https:\/\/[^"\s]*(?:@metrics\.cursor\.sh|\.ingest\.[^"\s]*sentry\.io|\.ingest\.sentry\.io)/);
  const index = result.text.indexOf('_updateTelemetryLevel() {');
  if (index >= 0) {
    const node = classAt(result.text, index);
    const source = result.text.slice(node.start, node.end);
    // Its only remaining dependency is the local disposable container.
    const disposable = /this\._disposables = new ([\w$]+)\(\)/.exec(source)[1];
    const Telemetry = vm.runInNewContext(`(${source})`, { [disposable]: class {dispose() {}} });
    const forbidden = new Proxy({}, {get() {throw new Error('Telemetry collected configuration/payload');}});
    const instance = new Telemetry(forbidden, forbidden, forbidden);
    for (const method of ['publicLog', 'publicLogError', 'publicLogError2', 'publicLogCapture', 'registerAuthId', 'setExperimentProperty'])
      assert.equal(instance[method]('test', forbidden), undefined);
    instance._updateTelemetryLevel();
    assert.equal(instance.telemetryLevel, 0);
    assert.equal(instance.sendErrorTelemetry, false);
    assert.equal(instance._appenders.length, 0);
    instance.dispose();
  }
  if (options.main) {
    const node = classAt(result.text, result.text.indexOf('TracingService: transport constructor'));
    const source = result.text.slice(node.start, node.end);
    const Tracing = vm.runInNewContext(`(${source})`, {[node.superClass.name]: class {}});
    const instance = new Tracing();
    assert.equal(instance.getIsWatchingForCrashes(), false);
    assert.equal(await instance.sendEnvelope({private: 'payload'}), undefined);
    assert.equal(await instance.uploadDebuggingData('payload'), undefined);
    assert.deepEqual(Object.keys(instance), ['onProcessConfigUpdate']);
    assert.throws(() => disableCoreTelemetry(before.replaceAll('TracingService: transport constructor', 'changed'), options), /contract missing/);
  }
});

test('provider requests are not transformed by the telemetry pass', () => {
  const input = 'async function models(url, key) { return fetch(url, {headers:{Authorization: key}}); }';
  assert.equal(disableCoreTelemetry(input).text, input);
});

test('settings imports cannot enable telemetry, including an existing enabled destination', () => {
  const settings = parseConfiguration(mergeSettings('{"telemetry.telemetryLevel":"all"}',
    '// keep this comment\n{"telemetry.telemetryLevel":"all", "editor.fontSize":15}'));
  for (const [key, value] of Object.entries(telemetrySettings)) assert.equal(settings[key], value);
  assert.equal(settings['editor.fontSize'], 15);
  assert.equal(telemetryProduct({statsigLogEventProxyUrl:'https://example.test',aiConfig:{ariaKey:'test'}}).enableTelemetry, false);
});

test('policy installs with backups, preserves unrelated settings and repeats safely', async t => {
  const root = await mkdtemp(join(tmpdir(), 'openvision-telemetry-'));
  t.after(() => rm(root, {recursive:true,force:true}));
  await mkdir(join(root, 'source/app'), {recursive:true});
  await mkdir(join(root, 'data/local/User'), {recursive:true});
  await writeFile(join(root, 'source/app/product.json'), '{"enableTelemetry":true,"nameShort":"OpenVision"}');
  const original = '// preferences\n{"editor.fontSize":17,"telemetry.telemetryLevel":"all"}';
  await writeFile(join(root, 'data/local/User/settings.json'), original);
  await installTelemetrySettings(root);
  const once = await readFile(join(root, 'data/local/User/settings.json'), 'utf8');
  await installTelemetrySettings(root);
  assert.equal(await readFile(join(root, 'data/local/User/settings.json'), 'utf8'), once);
  assert.equal(await readFile(join(root, 'backups/telemetry/data/local/User/settings.json'), 'utf8'), original);
  assert.equal(parseConfiguration(once)['editor.fontSize'], 17);
  assert.equal(parseConfiguration(await readFile(join(root, 'data/local/argv.json'), 'utf8'))['enable-crash-reporter'], false);
});
