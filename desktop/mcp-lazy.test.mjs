import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { lazyMcpChannels } from './mcp-lazy-customization.mjs';
import { recoveredMcpConnection } from './mcp-lazy-fixture.mjs';
import { readableApp } from './recovered-source.mjs';

const tick = () => new Promise(resolve => setImmediate(resolve));
for (const variant of ['desktop', 'glass']) {
  const source = readFile(new URL(`out/vs/workbench/workbench.${variant}.main.js`, readableApp), 'utf8');
  test(`${variant}: callback registration stays idle; concurrent first demand flushes each latest channel once`, async () => {
    const original = await source, patched = lazyMcpChannels(original);
    assert.equal(lazyMcpChannels(patched), patched);
    assert.throws(() => lazyMcpChannels(original.replace('this.pendingChannels = new Map()', 'this.changedChannels = new Map()')), /owner/);
    const { service, acquisitions, open, clients } = recoveredMcpConnection(patched, variant);
    service.registerChannel('callbacks', 'before'); await tick();
    assert.equal(acquisitions.length, 0);
    const request = service.getChannel('mcp.servers').call('initialize', { enabled: true });
    const second = service.start(); await tick();
    assert.equal(acquisitions.length, 1);
    service.registerChannel('callbacks', 'replacement'); service.registerChannel('logging', 'logger');
    open(0); assert.equal(await request, 'result'); await second;
    assert.deepEqual(clients[0].registrations, [['callbacks', 'replacement'], ['logging', 'logger']]);
    service.registerChannel('late', 'handler');
    assert.deepEqual(clients[0].registrations.at(-1), ['late', 'handler']);
    assert.equal(acquisitions.length, 1); service.dispose();
    assert.equal(clients[0].disposed, true);
  });
  test(`${variant}: registration never retries a failed connection, but real demand retries and reconnect restores callbacks`, async () => {
    const { service, acquisitions, open, clients, ports } = recoveredMcpConnection(lazyMcpChannels(await source), variant);
    service.registerChannel('callback', 'handler');
    const failed = service.start(); await tick(); acquisitions[0].reject(new Error('Fixture unavailable'));
    await assert.rejects(failed, /Fixture unavailable/);
    service.registerChannel('later', 'second'); await tick(); assert.equal(acquisitions.length, 1);
    const retry = service.start(); await tick(); open(1); await retry;
    ports[1].dispatchEvent(new Event('close')); assert.equal(clients[0].disposed, true);
    const reconnect = service.getChannel('mcp.tools').call('list'); await tick(); open(2); await reconnect;
    assert.deepEqual(clients[1].registrations, [['callback', 'handler'], ['later', 'second']]); service.dispose();
  });
  test(`${variant}: event subscriptions and raw connections still create real demand`, async () => {
    const { service, acquisitions, open, clients } = recoveredMcpConnection(lazyMcpChannels(await source), variant);
    service.registerChannel('callback', 'handler');
    service.getChannel('mcp.snapshots').listen('changed'); await tick(); open(0); await tick();
    assert.equal(clients[0].listens[0][0], 'mcp.snapshots');
    const raw = service.createRawConnection(); await tick();
    assert.deepEqual(acquisitions[1].args, ['rawRequest', 'rawResponse']);
    const port = open(1); assert.equal(await raw, port);
    service.stop(); assert.equal(clients[0].disposed, true);
    service.registerChannel('afterStop', 'new'); await tick(); assert.equal(acquisitions.length, 2);
    const restart = service.start(); await tick(); open(2); await restart;
    assert.deepEqual(clients[1].registrations, [['callback', 'handler'], ['afterStop', 'new']]); service.dispose();
  });
}
