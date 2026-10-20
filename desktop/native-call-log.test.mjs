import test from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { mkdtemp, readFile, readdir, rm } from 'node:fs/promises';
import { createRequire } from 'node:module';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const require = createRequire(import.meta.url);
const hook = join(import.meta.dirname, 'native-call-log.cjs');
const { wrapAddon, argumentSize } = require(hook);

class Client {
  #secret;
  constructor(options) { this.#secret = options.token; }
  query(text) { if (this.#secret !== 'kept') throw Error('private state lost'); return text.length; }
  async later(bytes) { return Buffer.alloc(bytes.length * 2); }
  fail() { const error = Error('native failure'); error.code = 'EFIXTURE'; throw error; }
  static create() { return new Client({ token: 'kept' }); }
}
const accepts = instance => { if (!(instance instanceof Client) || instance.constructor !== Client) throw Error('expected real instance'); return instance.query('x'); };

test('wrapped addon keeps results and private state and logs sizes, never contents', async () => {
  const records = [], write = record => records.push(record);
  const addon = wrapAddon({ Client, accepts, VERSION: 'v1' }, 'fixture', '/fixture.node', write);
  assert.equal(addon.VERSION, 'v1');
  const client = new addon.Client({ token: 'kept' });
  assert.equal(client.query('héllo'), 5);
  assert.equal((await client.later(Buffer.alloc(4))).length, 8);
  assert.throws(() => client.fail(), { code: 'EFIXTURE' });
  assert.equal(addon.accepts(client), 1, 'proxies are unwrapped before native calls');
  const created = addon.Client.create();
  assert.equal(created.query('ab'), 2, 'instances returned by static factories stay usable');
  await new Promise(resolve => setImmediate(resolve));
  const load = records.find(record => record.event === 'load');
  assert.deepEqual(load.exports.find(entry => entry.name === 'Client').members.sort(), ['fail', 'later', 'query']);
  const calls = records.filter(record => record.event === 'call');
  // Native-internal use of the real instance (accepts -> query) is not a JS call and is not logged.
  assert.deepEqual(calls.map(call => `${call.export}.${call.member}`), ['Client.(constructor)', 'Client.query', 'Client.later',
    'Client.fail', 'accepts.(call)', 'Client.create', 'Client.query']);
  const query = calls.find(call => call.member === 'query');
  assert.deepEqual(query.argBytes, [6]); assert.deepEqual(query.argTypes, ['string']);
  assert.equal(calls.find(call => call.member === 'later').outcome, 'fulfilled');
  assert.equal(calls.find(call => call.member === 'later').resultBytes, 8);
  assert.equal(calls.find(call => call.member === 'fail').error, 'EFIXTURE');
  assert.ok(!JSON.stringify(records).includes('kept') && !JSON.stringify(records).includes('héllo'), 'argument contents are not logged');
});

test('argument sizes count bytes of nested values', () => {
  assert.equal(argumentSize('日本'), 6);
  assert.equal(argumentSize([Buffer.alloc(3), 'ab']), 5);
  assert.equal(argumentSize({ a: 'xyz' }), 4);
  assert.equal(argumentSize(() => {}), 0);
});

test('the hook is inert without a log directory and logs real addon loads with one', async () => {
  const inert = spawnSync(process.execPath, ['-e', `require(${JSON.stringify(hook)}); console.log(globalThis[Symbol.for('openvision.nativeCallLog')] === true)`],
    { env: { ...process.env, OPENVISION_NATIVE_CALL_LOG: '' }, encoding: 'utf8' });
  assert.equal(inert.stdout.trim(), 'false');
  const relative = spawnSync(process.execPath, ['-e', `require(${JSON.stringify(hook)}); console.log(globalThis[Symbol.for('openvision.nativeCallLog')] === true)`],
    { env: { ...process.env, OPENVISION_NATIVE_CALL_LOG: 'logs' }, encoding: 'utf8' });
  assert.equal(relative.stdout.trim(), 'false', 'relative directories are refused');
  const directory = await mkdtemp(join(tmpdir(), 'openvision-native-calls-'));
  try {
    const enabled = spawnSync(process.execPath, ['-e', `require(${JSON.stringify(hook)}); require('node:fs').readFileSync(__filename === '[eval]' ? ${JSON.stringify(hook)} : '')`],
      { env: { ...process.env, OPENVISION_NATIVE_CALL_LOG: directory }, encoding: 'utf8' });
    assert.equal(enabled.status, 0, enabled.stderr);
    const [file] = await readdir(directory);
    assert.match(file, /^native-calls-\d+\.jsonl$/);
    assert.equal(JSON.parse((await readFile(join(directory, file), 'utf8')).split('\n')[0]).event, 'hook');
  } finally { await rm(directory, { recursive: true, force: true }); }
});

test('the hook is loaded first by each entry, once, with a correct relative path', async () => {
  const { loadNativeCallLog, nativeCallLogMarker, nativeCallLogEntries } = await import('./native-call-log-customization.mjs');
  const [main, host, daemon] = nativeCallLogEntries;
  const esm = '/*! header */\nimport * as a from "os";\nconsole.log(a);\n';
  const patchedMain = loadNativeCallLog(esm, main.path, main.format);
  assert.ok(patchedMain.startsWith(`import "./openvision-native-call-log.cjs"; ${nativeCallLogMarker}\n`));
  assert.equal(loadNativeCallLog(patchedMain, main.path, main.format), patchedMain, 'idempotent');
  assert.ok(loadNativeCallLog(esm, host.path, host.format).startsWith('import "../../../../openvision-native-call-log.cjs";'));
  const cjs = '#!/usr/bin/env node\nconst x = require("node:url");\n';
  const patchedDaemon = loadNativeCallLog(cjs, daemon.path, daemon.format);
  assert.ok(patchedDaemon.startsWith('#!/usr/bin/env node\nrequire("../../../../../../out/openvision-native-call-log.cjs");'));
  assert.throws(() => loadNativeCallLog('var a = 1;', main.path, 'module'), /not an ES module/);
  assert.throws(() => loadNativeCallLog('var a = 1;', daemon.path, 'commonjs'), /not CommonJS/);
  assert.throws(() => loadNativeCallLog(`${patchedMain}${nativeCallLogMarker}`, main.path, main.format), /more than once/);
});

test('recovered entry bundles accept the hook (drift guard)', async t => {
  const { readableApp } = await import('./recovered-source.mjs');
  const { loadNativeCallLog, nativeCallLogEntries } = await import('./native-call-log-customization.mjs');
  for (const { path, format } of nativeCallLogEntries) {
    let text;
    try { text = await readFile(new URL(path.replace('source/app/', ''), readableApp), 'utf8'); }
    catch (error) { if (error.code === 'ENOENT') { t.diagnostic(`unavailable: ${path}`); continue; } throw error; }
    assert.notEqual(loadNativeCallLog(text, path, format), text);
  }
});
