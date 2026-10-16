import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { Module, createRequire } from 'node:module';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer } from 'node:http';
import * as dispatchPolicy from './openvision-provider-dispatch.cjs';
import { fetchProviderWithDeadlines } from './provider-request-deadlines.cjs';
import { preserveProxyDeadlines } from './provider-proxy-deadlines.mjs';

const path = fileURLToPath(new URL('../source/app/node_modules/@vscode/proxy-agent/out/index.js', import.meta.url));
const backup = new URL('../backups/provider-proxy-deadlines/node_modules/@vscode/proxy-agent/out/index.js', import.meta.url);
const original = await readFile(backup, 'utf8').catch(error => {
  if (error.code !== 'ENOENT') throw error;
  return readFile(path, 'utf8');
});
assert.ok(!original.includes('/* OpenVision request deadline ownership'), 'An authentic unpatched proxy fixture is required');
const patched = preserveProxyDeadlines(original);

function loadProxy(text, owned, observed) {
  const require = createRequire(path), undici = require('undici');
  class ObservedAgent extends undici.Agent {
    constructor(options) { super(options); this.verificationOptions = options; owned.push(this); }
    dispatch(options, handler) {
      observed.push(options);
      return super.dispatch({ ...options, bodyTimeout: options.bodyTimeout === 0 ? 0 : 50 }, handler);
    }
  }
  const module = new Module(path);
  module.filename = path;
  module.paths = Module._nodeModulePaths(dirname(path));
  module.require = id => id === './openvision-provider-dispatch.cjs' ? dispatchPolicy
    : id === 'undici' ? { ...undici, Agent: ObservedAgent } : require(id);
  module._compile(text, path);
  return module.exports;
}

const params = { isAdditionalFetchSupportEnabled: () => true, getProxySupport: () => 'override',
  addCertificatesV1: () => true, addCertificatesV2: () => false,
  loadSystemCertificatesFromNode: () => false, loadAdditionalCertificates: async () => [] };

test('proxy customization is idempotent and rejects changed dispatcher-selection contracts', () => {
  assert.equal(preserveProxyDeadlines(patched), patched);
  assert.throws(() => preserveProxyDeadlines(original.replaceAll('getAgentOptions(init)', 'changed(init)')), /contract changed/);
});

test('real certificate-selection layer preserves deadline ownership and reuses its selected pool', { timeout: 10000 }, async () => {
  const owned = [], observed = [], requests = [];
  const server = createServer((request, response) => {
    requests.push(request.url);
    response.writeHead(200, { 'content-type': 'text/event-stream' });
    response.write('data: start\n\n');
    if (request.url === '/success') response.end('data: done\n\n');
  });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const url = `http://127.0.0.1:${server.address().port}`;
  try {
    const before = loadProxy(original, owned, observed).createFetchPatch(params, fetch, async () => undefined);
    const baseline = await fetchProviderWithDeadlines(before, `${url}/stall`, {}, { headersMs: 2500, inactivityMs: 1800 });
    await assert.rejects(baseline.text(), error => error.cause?.code === 'UND_ERR_BODY_TIMEOUT');
    const selected = [], actualFetch = (input, options) => {
      assert.equal(dispatchPolicy.deadlinePolicyKey in options, false, 'The local policy mark is consumed before network fetch');
      selected.push(options.dispatcher); return fetch(input, options);
    };
    const after = loadProxy(patched, owned, observed).createFetchPatch(params, actualFetch, async () => undefined);
    const candidate = await fetchProviderWithDeadlines(after, `${url}/stall`, {}, { headersMs: 2500, inactivityMs: 1800 });
    await assert.rejects(candidate.text(), error => error.code === 'OPENVISION_PROVIDER_BODY_TIMEOUT');
    const recovered = await fetchProviderWithDeadlines(after, `${url}/success`, {});
    assert.match(await recovered.text(), /data: done/);
    assert.equal(selected[0], selected[1], 'Repeated provider requests reuse one wrapper and backing pool');
    assert.equal(owned.length, 2, 'One pool per independently instantiated baseline/candidate proxy owner');
    assert.ok(owned[0].verificationOptions.connect.ca.length > 0);
    assert.deepEqual(owned[1].verificationOptions, owned[0].verificationOptions, 'Certificate and protocol options survive the policy handoff');
    assert.notEqual(observed[0].bodyTimeout, 0);
    assert.equal(observed[1].bodyTimeout, 0);
    assert.equal(observed[2].headersTimeout, 0);
    const unrelated = await after(`${url}/success`); await unrelated.text();
    assert.notEqual(observed[3].bodyTimeout, 0, 'Unmarked extension requests keep their transport policy');
    assert.deepEqual(requests, ['/stall', '/stall', '/success', '/success']);
  } finally {
    server.closeAllConnections(); await new Promise(resolve => server.close(resolve));
    await Promise.all(owned.map(agent => agent.close()));
  }
});
