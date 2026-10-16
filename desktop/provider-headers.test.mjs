import test from 'node:test';
import assert from 'node:assert/strict';
import { ModelProviders, requestProvider, requestAgentProvider } from './model-providers.js';
import { normalizeCustomHeaders, validHeaderMetadata, providerRequestHeaders, headerSecretKey } from './provider-headers.js';
import { modelSelectionId, resolveAgentModel } from './model-identity.js';
import { readFile } from 'node:fs/promises';
import { createServer } from 'node:http';
import { runInNewContext } from 'node:vm';
import { parseExpressionAt } from '../tooling/dependencies.mjs';
import { scopedAgentProviders } from './agent-provider-customization.mjs';
import { readableApp } from './recovered-source.mjs';

const stateKey = 'openvision.model-providers.v1';
const options = { name: 'Header provider', url: 'https://fixture.invalid/v1', key: 'fixture-key', headers: { 'X-API-Key': 'header-one' } };
function fixture() {
  const stored = new Map(), secrets = new Map(), reads = [];
  const bridge = {
    storage: { get: key => stored.get(key), store: (key, value) => stored.set(key, value), flush: async () => {} },
    secrets: { get: async key => { reads.push(key); return secrets.get(key); },
      set: async (key, value) => secrets.set(key, value), delete: async key => secrets.delete(key) },
    auth: { storeOpenAIKeyAndWait: async () => {} },
    reactive: { setApplicationUserPersistentStorage() {}, manualSave() {} },
    ai: { modelConfigService: { getModelConfig: () => ({}), setModelConfig() {} }, handleAvailableModelsChange() {} },
    request: async () => ({ data: [{ id: 'model' }] }),
  };
  return { bridge, stored, secrets, reads, providers: new ModelProviders(bridge) };
}
const reference = provider => headerSecretKey(provider.id, provider.customHeaderRevision);

function recoveredCatalog(text) {
  const start = text.indexOf('function E_e(e) {');
  const node = parseExpressionAt(text, start, { ecmaVersion: 'latest' });
  return runInNewContext(`(${text.slice(start, node.end)})`, {
    S_e: new Map(), k_e: new Map(), fetch, AbortController, setTimeout, clearTimeout,
    u_e: config => ({ ...config.customHeaders, 'User-Agent': 'OpenVision fixture' }),
    __e: (base, path) => base + path,
    p_e: (_context, _args, _promise, generator) => {
      const iterator = generator();
      const step = value => { const next = iterator.next(value); return next.done ? next.value : Promise.resolve(next.value).then(step); };
      return Promise.resolve(step());
    },
  });
}

test('recovered Agent catalog preserves custom authorization over the API-key default', async t => {
  const received = [];
  const server = createServer((request, response) => {
    received.push(request.headers.authorization); request.resume();
    response.setHeader('content-type', 'application/json');
    response.end('{"data":[{"id":"fixture"}]}');
  });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  t.after(() => { server.closeAllConnections(); server.close(); });
  const original = await readFile(new URL('extensions/cursor-agent-exec/dist/main.js', readableApp), 'utf8');
  const patched = scopedAgentProviders(original);
  assert.equal(scopedAgentProviders(patched), patched);
  const config = { baseUrl: `http://127.0.0.1:${server.address().port}`, apiKey: 'fixture-key',
    customHeaders: { authorization: 'Custom fixture-header' }, fetchImpl: fetch };
  await recoveredCatalog(original)(config);
  assert.equal(received.at(-1), 'Bearer fixture-key', 'Original catalog overwrites custom authorization');
  await recoveredCatalog(patched)(config);
  assert.equal(received.at(-1), 'Custom fixture-header');
  await recoveredCatalog(patched)({ ...config, customHeaders: {} });
  assert.equal(received.at(-1), 'Bearer fixture-key');
});

test('headers normalize once, reject unsafe or oversized input and preserve explicit authorization', () => {
  assert.deepEqual(normalizeCustomHeaders('{"X-Key":" value "}'), { 'x-key': 'value' });
  assert.deepEqual(providerRequestHeaders('default-key', { Authorization: 'Custom override', 'X-Key': 'value' }, true),
    { 'content-type': 'application/json', authorization: 'Custom override', 'x-key': 'value' });
  for (const value of [null, [], 42, 'null', '{bad', { 'X-Key': 42 }, { 'X-Key': '' },
    { 'X-Key': 'a\r\nInjected: true' }, { 'X-Key': '日本語' }, { 'bad name': 'value' },
    { 'X-Key': 'one', 'x-key': 'two' }, { 'X-Key': 'x'.repeat(4097) },
    Object.fromEntries(Array.from({ length: 17 }, (_, i) => [`x-${i}`, 'value'])),
    Object.fromEntries(Array.from({ length: 5 }, (_, i) => [`x-${i}`, 'x'.repeat(4096)])),
    ' '.repeat(16385)]) assert.throws(() => normalizeCustomHeaders(value), /Additional headers/);
  for (const name of ['host', 'content-length', 'content-type', 'connection', 'transfer-encoding',
    'cookie', 'set-cookie', 'sec-fetch-site', 'proxy-authorization'])
    assert.throws(() => normalizeCustomHeaders({ [name]: 'value' }), /unsupported/);
  assert.equal(validHeaderMetadata({ customHeaderNames: ['Host'], customHeaderRevision: crypto.randomUUID() }), false);
  assert.equal(validHeaderMetadata({ customHeaderNames: ['x-key'] }), false);
});

test('blank edits preserve headers; clear and provider removal delete retired credentials', async () => {
  const f = fixture(), first = await f.providers.save(options);
  const preserved = await f.providers.save({ id: first.id, name: 'Renamed', url: first.url });
  assert.equal(preserved.customHeaderRevision, first.customHeaderRevision);
  assert.equal(f.secrets.get(reference(first)), '{"x-api-key":"header-one"}');
  const cleared = await f.providers.save({ id: first.id, name: first.name, url: first.url, clearHeaders: true });
  assert.equal(cleared.customHeaderRevision, undefined);
  assert.equal(f.secrets.has(reference(first)), false);
  const replaced = await f.providers.save({ ...options, id: first.id });
  await f.providers.remove(first.id);
  assert.equal(f.secrets.has(reference(replaced)), false);
  assert.equal(f.secrets.has(`openvision.provider.${first.id}`), false);
  assert.equal(JSON.parse(f.stored.get(stateKey)).providers.length, 0);
});

test('credential creation is preceded by persisted ownership and failed API-key writes leave no header orphan', async () => {
  const f = fixture();
  f.bridge.secrets.set = async (key, value) => {
    if (key.startsWith('openvision.provider.headers.')) {
      const pending = JSON.parse(f.stored.get(stateKey)).credentialCleanup;
      assert.ok(pending.some(entry => headerSecretKey(entry.id, entry.revision) === key));
      f.secrets.set(key, value); return;
    }
    throw new Error('Injected key-store failure');
  };
  await assert.rejects(f.providers.save(options), /key-store failure/);
  assert.equal(f.secrets.size, 0);
  assert.deepEqual(f.providers.state.providers, []);
});

test('failed configuration flush rolls back the provider and cleans only the staged revision', async () => {
  const f = fixture(), first = await f.providers.save(options);
  let failed = false;
  f.bridge.storage.flush = async () => {
    if (!failed && f.providers.state.providers[0]?.customHeaderRevision !== first.customHeaderRevision) {
      failed = true; throw new Error('Injected configuration failure');
    }
  };
  await assert.rejects(f.providers.save({ ...options, id: first.id, key: undefined,
    headers: { 'X-API-Key': 'replacement' } }), /configuration failure/);
  assert.equal(f.providers.get(first.id).customHeaderRevision, first.customHeaderRevision);
  assert.equal(f.secrets.get(reference(first)), '{"x-api-key":"header-one"}');
  assert.equal([...f.secrets.keys()].filter(key => key.startsWith('openvision.provider.headers.')).length, 1);
});

test('failed cleanup remains owned across restart and can be explicitly retried without losing current credentials', async () => {
  const f = fixture(), first = await f.providers.save(options);
  f.bridge.secrets.delete = async () => { throw new Error('Injected deletion failure'); };
  const replacement = await f.providers.save({ ...options, id: first.id, headers: { 'X-API-Key': 'header-two' } });
  assert.equal(f.providers.state.credentialCleanup.length, 1);
  const restarted = new ModelProviders(f.bridge); await restarted.ready;
  assert.equal(restarted.state.credentialCleanup.length, 1);
  f.bridge.secrets.delete = async key => f.secrets.delete(key);
  await restarted.cleanupCredentials();
  assert.equal(f.secrets.has(reference(first)), false);
  assert.equal(f.secrets.get(reference(replacement)), '{"x-api-key":"header-two"}');
  assert.deepEqual(restarted.state.credentialCleanup, []);
  f.bridge.secrets.delete = async () => { throw new Error('Injected deletion failure'); };
  await restarted.remove(first.id);
  assert.equal(restarted.state.providers.length, 0);
  assert.equal(restarted.state.credentialCleanup.length, 2);
  f.bridge.secrets.delete = async key => f.secrets.delete(key);
  const removedRestart = new ModelProviders(f.bridge); await removedRestart.ready;
  assert.equal(f.secrets.size, 0);
  assert.deepEqual(removedRestart.state.credentialCleanup, []);
});

test('failed save and rollback retain staged secrets and block further mutations until restart', async () => {
  const f = fixture(), first = await f.providers.save(options);
  let flushes = 0;
  f.bridge.storage.flush = async () => { if (++flushes >= 2) throw new Error('Injected persistent flush failure'); };
  await assert.rejects(f.providers.save({ ...options, id: first.id, headers: { 'X-API-Key': 'header-two' } }), /save and rollback failed/);
  assert.equal([...f.secrets.keys()].filter(key => key.startsWith('openvision.provider.headers.')).length, 2);
  await assert.rejects(f.providers.save(options), /Restart/);
  await assert.rejects(f.providers.cleanupCredentials(), /Restart/);
});

test('turn snapshots read headers once per provider; child routing replaces and clears inherited headers', async () => {
  const f = fixture(), first = await f.providers.save(options);
  const second = await f.providers.save({ ...options, name: 'Second', headers: { 'X-API-Key': 'header-two' } });
  const third = await f.providers.save({ name: 'Plain', url: first.url, key: 'plain-key' });
  for (const provider of [first, second, third]) await f.providers.updateModels(provider.id,
    ['model', 'other'].map(id => ({ id, name: id, enabled: true })));
  f.reads.length = 0;
  const config = await requestAgentProvider(f.bridge.storage, f.bridge.secrets, modelSelectionId(first.id, 'model'));
  assert.equal(f.reads.length, 5, 'Three API keys plus two header secrets, independent of six model rows');
  const parent = resolveAgentModel({ modelId: modelSelectionId(first.id, 'model'), localProvider: config });
  assert.equal(parent.customHeaders['x-api-key'], 'header-one');
  const child = resolveAgentModel({ ...parent, modelId: modelSelectionId(second.id, 'model') });
  assert.equal(child.customHeaders['x-api-key'], 'header-two');
  const plain = resolveAgentModel({ ...parent, modelId: modelSelectionId(third.id, 'model') });
  assert.deepEqual(plain.customHeaders, {});
  assert.equal(parent.customHeaders['x-api-key'], 'header-one');
  assert.equal(f.reads.length, 5, 'Child creation does not reread credentials');
});

for (const request of [requestProvider, requestAgentProvider]) {
  test(`${request.name} rejects missing/mismatched secrets and header revision changes during lookup`, async () => {
    const f = fixture(), provider = await f.providers.save(options);
    await f.providers.discover(provider.id);
    const id = modelSelectionId(provider.id, 'model'), key = reference(provider), saved = f.secrets.get(key);
    f.secrets.delete(key);
    await assert.rejects(request(f.bridge.storage, f.bridge.secrets, id), /headers are unavailable/);
    f.secrets.set(key, '{"x-other":"wrong-header"}');
    await assert.rejects(request(f.bridge.storage, f.bridge.secrets, id), /do not match/);
    f.secrets.set(key, saved);
    const get = f.bridge.secrets.get;
    f.bridge.secrets.get = async name => {
      const value = await get(name);
      if (name === key) {
        const state = JSON.parse(f.stored.get(stateKey));
        state.providers[0].customHeaderRevision = crypto.randomUUID();
        f.stored.set(stateKey, JSON.stringify(state));
      }
      return value;
    };
    await assert.rejects(request(f.bridge.storage, f.bridge.secrets, id), /settings changed/);
  });
}
