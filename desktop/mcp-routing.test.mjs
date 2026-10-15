import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { lazyMcpRouting } from './mcp-routing-customization.mjs';
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
