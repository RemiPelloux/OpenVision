import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { callRendererMcpTool, callProcessMcpTool, cancellableMcpToolChannel } from './mcp-cancel-runtime.mjs';
import { cancelRendererMcp, cancelProcessMcp } from './mcp-cancel-customization.mjs';
import { readableApp } from './recovered-source.mjs';

test('renderer cancellation during registry lookup prevents dispatch', async () => {
  const lookup = Promise.withResolvers(), controller = new AbortController(); let calls = 0;
  const request = callRendererMcpTool.call({ requireActiveProcessRegistryKey: () => lookup.promise,
    toolService: { callTool() { calls++; } } }, 'probe', {}, { abortSignal: controller.signal });
  controller.abort(); lookup.resolve('owned-server');
  await assert.rejects(request, { name: 'AbortError' }); assert.equal(calls, 0);
});
test('owned call carries cancellation through the named channel and releases its subscription', async () => {
  const controller = new AbortController(), entered = Promise.withResolvers(); let subscriptions = 0;
  const service = { connectionManager: { callTool: async (server, name, args, options) => {
    assert.equal(server, 'owned-server'); assert.equal(name, 'probe'); assert.deepEqual(args, { exact: true });
    entered.resolve(options.abortSignal);
    return new Promise((_, reject) => options.abortSignal.addEventListener('abort', () => reject(options.abortSignal.reason), { once: true }));
  } } };
  service.callTool = (...args) => callProcessMcpTool.apply(service, args);
  const channel = cancellableMcpToolChannel(service, { listen() {}, call: () => 'other-method' });
  const request = callRendererMcpTool.call({ windowId: 9, workspaceId: 'fixture',
    requireActiveProcessRegistryKey: async () => 'owned-server', toolService: { callTool: (request, token) => {
      assert.equal(JSON.stringify(request).includes('abortSignal'), false);
      const original = token.onCancellationRequested;
      token.onCancellationRequested = listener => {
        subscriptions++; const disposable = original(listener);
        return { dispose() { subscriptions--; disposable.dispose(); } };
      };
      return channel.call('window:9', 'callTool', [request], token);
    } } }, 'probe', { exact: true }, { abortSignal: controller.signal });
  const signal = await entered.promise; controller.abort();
  await assert.rejects(request, /Tool call was cancelled/);
  assert.equal(signal.aborted, true); assert.equal(subscriptions, 0);
  assert.equal(channel.call('window:9', 'other', [], {}), 'other-method');
});
test('process cancellation before dispatch and normal/failure completion release token listeners', async () => {
  for (const outcome of ['cancelled', 'success', 'failed']) {
    let listeners = 0, calls = 0;
    const token = { isCancellationRequested: outcome === 'cancelled',
      onCancellationRequested() { listeners++; return { dispose: () => listeners-- }; } };
    const request = callProcessMcpTool.call({ connectionManager: { async callTool() {
      calls++; if (outcome === 'failed') throw new Error('Fixture failure'); return 'ok';
    } } }, {}, token);
    if (outcome === 'success') assert.equal(await request, 'ok'); else await assert.rejects(request);
    assert.equal(calls, outcome === 'cancelled' ? 0 : 1); assert.equal(listeners, 0);
  }
});
for (const variant of ['desktop', 'glass', 'process']) test(`${variant}: recovered cancellation transformation is idempotent`, async () => {
  const relative = variant === 'process' ? 'out/vs/code/electron-utility/mcpProcess/mcpProcessMain.js' :
    `out/vs/workbench/workbench.${variant}.main.js`;
  const source = await readFile(new URL(`${relative}`, readableApp), 'utf8');
  const transform = variant === 'process' ? cancelProcessMcp : cancelRendererMcp;
  const patched = transform(source); assert.equal(transform(patched), patched);
});
