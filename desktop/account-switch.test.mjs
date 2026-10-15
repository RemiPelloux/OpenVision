import test from 'node:test';
import assert from 'node:assert/strict';
import { createAccountSwitch, waitForAccount } from './account-switch.js';

test('handoff retries transient cancellation and waits for the observed account', async () => {
  let reads = 0;
  await waitForAccount(async () => {
    if (++reads === 1) throw Error('Canceled');
    return { providers: [{ id: 'codex', accountId: reads === 2 ? 'old' : 'new' }] };
  }, 'codex', 'new');
  assert.equal(reads, 3);
  await assert.rejects(waitForAccount(async () => { throw Error('Authentication unavailable'); }, 'codex', 'new'), /Authentication unavailable/);
});

test('first connect creates a separate profile once and handoff preserves observed selection', async () => {
  const calls = []; let selected;
  const switching = createAccountSwitch(async name => {
    calls.push(name);
    if (name === 'openvision.accounts.runtime') return { providers: [{ id: 'claude', accountId: selected }] };
  }, async request => {
    calls.push(request.action);
    if (request.action === 'list') return { active: {} };
    if (request.action === 'create') return { id: 'profile' };
    if (request.action === 'select') selected = request.id;
  });
  await switching.ensure('claude'); await switching.ensure('claude');
  assert.equal(calls.filter(value => value === 'create').length, 1);
  assert.equal(calls.filter(value => value === 'workbench.action.restartExtensionHost').length, 1);
  assert.equal(selected, 'profile');
});


test('a stalled host restart releases the UI but retains ownership until the real handoff finishes', async t => {
  t.mock.timers.enable({ apis: ['setTimeout'] });
  const restart = Promise.withResolvers(), started = Promise.withResolvers();
  let selected, restarts = 0;
  const switching = createAccountSwitch(async name => {
    if (name === 'workbench.action.restartExtensionHost') {
      restarts++; started.resolve(); await restart.promise;
    } else return { providers: [{ id: 'claude', accountId: selected }] };
  }, async request => { selected = request.id; });
  const pending = switching.select('claude', 'first');
  const failed = assert.rejects(pending, /profile is saved/);
  await started.promise; t.mock.timers.tick(15000); await failed;
  await assert.rejects(switching.select('claude', 'second'), /already in progress/);
  assert.equal(restarts, 1);
  restart.resolve();
  await new Promise(resolve => setImmediate(resolve));
  await switching.select('claude', 'second');
  assert.equal(restarts, 2); assert.equal(selected, 'second');
});

test('delete waits for disconnected runtime before invoking profile cleanup', async () => {
  const calls = []; let selected = 'personal';
  const switching = createAccountSwitch(async name => {
    calls.push(name);
    if (name === 'openvision.accounts.runtime') return { providers: [{ id: 'codex', accountId: selected }] };
  }, async request => {
    calls.push(request.action);
    if (request.action === 'list') return { active: { codex: selected } };
    if (request.action === 'select') selected = request.id;
    if (request.action === 'remove') { assert.equal(selected, null); return { historyPreserved: true }; }
  });
  assert.deepEqual(await switching.remove('codex', 'personal'), { historyPreserved: true });
  assert.ok(calls.indexOf('workbench.action.restartExtensionHost') < calls.indexOf('remove'));
});
