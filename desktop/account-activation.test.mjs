import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import vm from 'node:vm';
import { parseExpressionAt } from '../tooling/dependencies.mjs';
import { customizeAccountActivation, customizeAccountRestart } from './account-profile-customization.mjs';

for (const variant of ['desktop', 'glass']) test(`${variant} account activation waits only for owning hosts after restart`, async () => {
  const source = await readFile(new URL(`../source/app/out/vs/workbench/workbench.${variant}.main.js`, import.meta.url), 'utf8');
  const patched = customizeAccountActivation(source);
  assert.equal(customizeAccountActivation(patched), patched);
  const at = patched.indexOf('/* OpenVision account activation ownership v1 */');
  const owner = parseExpressionAt(patched, patched.lastIndexOf('class ', at), { ecmaVersion: 'latest' });
  const method = owner.body.body.find(item => item.key?.name === '_activateByEvent').value;
  const invoke = vm.runInNewContext(`(function${patched.slice(method.start, method.end)})`);
  const calls = [], notifications = [];
  const local = { activateByEvent: async event => { calls.push(['local', event]); } };
  const worker = { activateByEvent: async event => { calls.push(['worker', event]); } };
  const extension = { identifier: { value: 'openvision.accounts' } };
  let registered = true;
  const context = {
    _extensionHostManagers: [local, worker],
    _installedExtensionsReady: { isOpen: () => registered },
    _registry: { getExtensionDescriptionsForActivationEvent: () => [extension] },
    _runningLocations: { filterByExtensionHostManager: (extensions, host) => {
      assert.deepEqual(extensions, [extension]); return host === local ? extensions : [];
    } },
    _onWillActivateByEvent: { fire: value => notifications.push(value) },
  };
  await invoke.call(context, 'onCommand:openvision.accounts.status', 0, () => {});
  assert.deepEqual(calls, [['local', 'onCommand:openvision.accounts.status']]);
  await notifications[0].activation;
  calls.length = 0;
  await invoke.call(context, 'onLanguage:typescript', 0, () => {});
  assert.equal(calls.length, 2, 'Unrelated host activation is unchanged');
  calls.length = 0; registered = false;
  await invoke.call(context, 'onCommand:openvision.accounts.status', 0, () => {});
  assert.equal(calls.length, 2, 'Unknown registry ownership preserves normal startup');
});

test('native restart action awaits host readiness and preserves shutdown veto', async () => {
  const source = await readFile(new URL('../source/app/out/vs/workbench/workbench.desktop.main.js', import.meta.url), 'utf8');
  const patched = customizeAccountRestart(source);
  assert.equal(customizeAccountRestart(patched), patched);
  const at = patched.indexOf('id: "workbench.action.restartExtensionHost"');
  const owner = parseExpressionAt(patched, patched.lastIndexOf('class ', at), { ecmaVersion: 'latest' });
  const method = owner.body.body.find(item => item.key?.name === 'run').value;
  const invoke = vm.runInNewContext(`(async function${patched.slice(method.start, method.end)})`, { Na: {}, S: () => 'restart' });
  const ready = Promise.withResolvers(); let started = 0, settled = false, allow = true;
  const service = { stopExtensionHosts: async () => allow, startExtensionHosts: () => { started++; return ready.promise; } };
  const pending = invoke({ get: () => service }).then(() => { settled = true; });
  await new Promise(resolve => setImmediate(resolve));
  assert.equal(started, 1); assert.equal(settled, false);
  ready.resolve(); await pending; assert.equal(settled, true);
  allow = false; await invoke({ get: () => service }); assert.equal(started, 1);
});
