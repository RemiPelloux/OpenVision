import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { lazyMcpRouting, recreateUnownedConnectedServers, releaseInFlightLegacyClients } from './mcp-routing-customization.mjs';
import { recoveredMcpRouting } from './mcp-routing-fixture.mjs';
import { readableApp } from './recovered-source.mjs';

const tick = () => new Promise(resolve => setImmediate(resolve));
for (const variant of ['desktop', 'glass']) {
  const source = readFile(new URL(`out/vs/workbench/workbench.${variant}.main.js`, readableApp), 'utf8');
  test(`${variant}: no eligible servers unblocks readiness without migration; late configuration activates routing`, async () => {
    const patched = lazyMcpRouting(await source);
    assert.equal(lazyMcpRouting(patched), patched);
    const { service, state, calls, fire } = recoveredMcpRouting(patched, variant);
    await tick();
    assert.equal(service.latchedSharedProcessGate, undefined);
    assert.ok(calls.some(call => call[0] === 'markSharedProcessRoutingReady'));
    assert.equal(calls.some(call => call[0] === 'migration' || call[0] === 'setSharedProcessSessionMode'), false);
    state.servers = [{ eligible: false }]; fire('initialized'); await tick();
    assert.equal(service.sharedProcessEnabled, false);
    state.servers.push({ eligible: true });
    fire('status'); fire('status'); fire('status'); await tick();
    assert.equal(service.sharedProcessEnabled, true);
    assert.equal(service.latchedSharedProcessGate, true);
    assert.equal(calls.filter(call => call[0] === 'registered').length, 1);
    assert.equal(calls.filter(call => call[0] === 'migration').length, 1, 'Status bursts must coalesce into one wake');
    state.servers = []; fire('settings'); await tick();
    assert.equal(service.sharedProcessEnabled, true, 'Existing sessions retain their routing ownership');
    assert.equal(calls.filter(call => call[0] === 'migration').length, 1);
    service.dispose(); fire('settings'); await tick();
    assert.equal(calls.filter(call => call[0] === 'registered').length, 1);
  });
  test(`${variant}: configured startup and failed migration retry retain the original gate and callback behavior`, async () => {
    const { service, state, calls, handlers, fire } = recoveredMcpRouting(lazyMcpRouting(await source), variant,
      { servers: [{ eligible: true }], migration: false });
    await tick(); assert.equal(service.sharedProcessEnabled, false);
    assert.equal(service.latchedSharedProcessGate, undefined);
    state.migration = true; fire('command', 'migrate'); await tick();
    assert.equal(service.sharedProcessEnabled, true);
    assert.equal(calls.filter(call => call[0] === 'migration').length, 2);
    assert.equal(await handlers[0].handleURL({ query: 'fixture' }), true);
    assert.ok(calls.some(call => call[0] === 'callback'));
    state.gate = false; fire('gate', {}); await tick();
    assert.equal(service.latchedSharedProcessGate, true); service.dispose();
  });
  test(`${variant}: disabled gate, remote routing and disposal never activate local routing`, async () => {
    for (const options of [{ gate: false }, { remoteAuthority: 'fixture-remote' }]) {
      const { service, calls } = recoveredMcpRouting(lazyMcpRouting(await source), variant, options);
      await tick(); assert.equal(service.sharedProcessEnabled, false);
      assert.equal(calls.some(call => call[0] === 'migration'), false); service.dispose();
    }
    const { service, calls } = recoveredMcpRouting(lazyMcpRouting(await source), variant);
    service.dispose(); await tick();
    assert.equal(calls.some(call => call[0] === 'migration' || call[0] === 'registered'), false);
  });
}

for (const variant of ['desktop', 'glass']) {
  test(`${variant}: a connected status left by a reset legacy client does not skip the shared-process client`, async () => {
    const text = await readFile(new URL(`out/vs/workbench/workbench.${variant}.main.js`, readableApp), 'utf8');
    const patched = recreateUnownedConnectedServers(text);
    assert.equal(recreateUnownedConnectedServers(patched), patched);
    const start = patched.indexOf('async createClientIfNotExists(');
    const method = patched.slice(start, patched.indexOf('\n          }\n', start) + 12);
    const Service = new Function('z_', `return class { ${method} }`)(() => {});
    const run = async (connected, provider) => {
      const created = [], service = Object.assign(new Service(), {
        statusCache: () => (connected ? { s: { type: 'connected' } } : {}),
        mcpClientProviders: new Map(provider ? [['s', {}]] : []), logMcpServerFile() {},
        _shouldSkipPassiveCreateForDurableSnapshot: () => false, structuredLogService: {},
        createClient: async server => { created.push(server.identifier); return true; } });
      await service.createClientIfNotExists({ identifier: 's' });
      return created;
    };
    assert.deepEqual(await run(true, true), [], 'A connected server with its client is not recreated');
    assert.deepEqual(await run(true, false), ['s'], 'A stale connected status after a routing reset is recreated');
    assert.deepEqual(await run(false, false), ['s']);
    assert.throws(() => recreateUnownedConnectedServers('async createClientIfNotExists(e) {}'), /connected-server skip contract/);
  });
}

for (const variant of ['desktop', 'glass']) {
  test(`${variant}: a routing reset deletes a legacy client again once its in-flight creation settles`, async () => {
    const text = await readFile(new URL(`out/vs/workbench/workbench.${variant}.main.js`, readableApp), 'utf8');
    const patched = releaseInFlightLegacyClients(text);
    assert.equal(releaseInFlightLegacyClients(patched), patched);
    const start = patched.indexOf('resetMcpProcessRouting(', patched.search(/\n\s+resetMcpProcessRouting\(\w\) \{/));
    const method = patched.slice(start, patched.indexOf('\n          }\n', start) + 12);
    const Service = new Function('lw', 'H0', `return class { ${method} }`)(() => {}, () => {});
    const run = async processRouted => {
      let settle; const deletes = [];
      const pending = new Promise(resolve => { settle = resolve; });
      const service = Object.assign(new Service(), {
        mcpProcessRoutedServerIds: new Set(processRouted ? ['s'] : []), getMcpProcessRouteChangingServerIds: () => new Set(['s']),
        mcpClientProviders: new Map([['s', { deleteClient: async reason => { deletes.push(reason); } }]]),
        createClientPromises: new Map([['s', pending]]), successfullyInitializedServers: new Set(), _durableSnapshots: new Map(),
        _cursorMcpDegradedServers: new Set(), statusEnteredAtMs: new Map(), lastDeleteReasons: new Map(),
        _nextServerIncarnationId() {}, _clearSnapshotWatchdog() {}, clearServerStatus() {}, setToolsCache() {}, setPromptsCache() {},
        setResourcesCache() {}, setInstructionsCache() {}, omitServerIds: value => value, _onDidChangeMcpSnapshots: { fire() {} }, _initialized: false });
      service.resetMcpProcessRouting('routing');
      await tick(); const before = deletes.length;
      settle(true); await tick(); await tick();
      return [before, deletes.length];
    };
    assert.deepEqual(await run(false), [1, 2], 'The in-flight legacy client is deleted again after it connects');
    assert.deepEqual(await run(true), [1, 1], 'A process client is not deleted twice');
    assert.throws(() => releaseInFlightLegacyClients('resetMcpProcessRouting(e) {}'), /reset owner missing|reset contract/);
  });
}
