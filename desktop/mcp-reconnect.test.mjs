import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { runInNewContext } from 'node:vm';
import { mcpReadinessMethod, reconnectClosedMcp } from './mcp-reconnect-customization.mjs';

const original = await readFile(new URL('../../cursor/readable/app/out/vs/code/electron-utility/mcpProcess/mcpProcessMain.js', import.meta.url), 'utf8');
const patched = reconnectClosedMcp(original);
function fixture(text, type = 'stdio', initial = 'closed') {
  const method = mcpReadinessMethod(text), pending = Promise.withResolvers();
  let state = initial, starts = 0;
  const stale = { client: { transport: undefined } }, fresh = { client: { transport: {} } };
  const lifecycle = {
    getServerInfo: () => ({ type }), getConnectionState: () => ({ type: state }),
    getLastStatus: () => ({ error: 'fixture reconnect failed' }),
    connect() { starts++; state = 'connecting'; }, getConnectPromise: () => pending.promise,
  };
  const manager = Object.assign(runInNewContext(`({${text.slice(method.start, method.end)}})`), {
    lifecycles: new Map([['fixture', lifecycle]]), adapters: new Map([['fixture', stale]]),
    markServerUsed() {}, waitForConnection: async () => {},
  });
  return { manager, stale, fresh, starts: () => starts,
    finish(next = 'connected') { state = next; if (next === 'connected') manager.adapters.set('fixture', fresh); pending.resolve(); } };
}

test('readiness repairs the stale adapter before new operations and shares lifecycle connection work', async () => {
  assert.equal(reconnectClosedMcp(patched), patched);
  const old = fixture(original);
  assert.equal(await old.manager.getReadyAdapter('fixture'), old.stale);
  const current = fixture(patched);
  const first = current.manager.getReadyAdapter('fixture'), second = current.manager.getReadyAdapter('fixture');
  assert.equal(current.starts(), 1);
  current.finish();
  assert.deepEqual(await Promise.all([first, second]), [current.fresh, current.fresh]);
});

test('failed or removed connections never return the retained stale adapter', async () => {
  for (const removed of [false, true]) {
    const current = fixture(patched), ready = current.manager.getReadyAdapter('fixture');
    if (removed) current.manager.lifecycles.delete('fixture');
    current.finish(removed ? 'connected' : 'failed');
    await assert.rejects(ready, /fixture reconnect failed/);
  }
});

test('HTTP, established connections and unrelated failures do not trigger a new connection', async () => {
  for (const [type, state] of [['streamableHttp', 'closed'], ['stdio', 'connected'], ['stdio', 'failed']]) {
    const current = fixture(patched, type, state);
    await current.manager.getReadyAdapter('fixture');
    assert.equal(current.starts(), 0);
  }
});
