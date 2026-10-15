import assert from 'node:assert/strict';
import test from 'node:test';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const { codexWindows, claudeWindows, readUsage, createUsageReader } = require('./account-usage.cjs');
const { createUsageStatusBar } = require('./account-usage-statusbar.cjs');
test('quota boundaries preserve genuine zero, reject invented values and normalize resets', () => {
  assert.equal(codexWindows({ rateLimits: { primary: { usedPercent: 0, resetsAt: 2000000000 } } })[0].resetsAt, 2000000000000);
  assert.deepEqual(codexWindows({ rateLimits: { primary: { usedPercent: '20' }, secondary: { usedPercent: 101 } } }), []);
  assert.deepEqual(claudeWindows({ rate_limits_available: true, rate_limits: null }), []);
  assert.equal(claudeWindows({ rate_limits: { five_hour: { utilization: 42, resets_at: '2030-01-01T00:00:00Z' } } })[0].usedPercent, 42);
});
test('missing quota data retains signed-in identity without fabricating remaining allowance', async () => {
  let closed = false;
  const result = await readUsage({ provider: 'codex' }, { codex: async () => ({
    request: async method => { if (method === 'account/read') return { account: { email: 'person@example.invalid' } }; throw Error('Unavailable'); },
    close: async () => { closed = true; },
  }) });
  assert.equal(result.signedIn, true); assert.equal(result.email, 'person@example.invalid');
  assert.equal(result.state, 'unavailable'); assert.deepEqual(result.windows, []); assert.ok(closed);
});
test('usage requests coalesce and respect cache lifetime and explicit refresh floor', async () => {
  let now = 100000, reads = 0;
  const reader = createUsageReader(async () => ({}), { now: () => now, read: async () => { reads++; return { windows: [] }; } });
  await Promise.all([reader.usage({}, { id: 'codex' }), reader.usage({}, { id: 'codex' })]);
  assert.equal(reads, 1); now += 20000; await reader.usage({}, { id: 'codex' }, true); assert.equal(reads, 1);
  now += 10001; await reader.usage({}, { id: 'codex' }, true); assert.equal(reads, 2);
  reader.dispose();
});
test('invalidation cancels an old account read before it can populate the new account cache', async () => {
  let finish;
  const reader = createUsageReader(async () => ({}), { read: () => new Promise(resolve => { finish = resolve; }) });
  const first = reader.usage({}, { id: 'claude' }); await Promise.resolve();
  reader.invalidate(); finish({ email: 'old@example.invalid' });
  await assert.rejects(first); reader.dispose();
});
test('status bar queues refresh after invalidation and disposes all native items', async () => {
  const items = []; let resolveFirst, calls = 0;
  const row = { provider: 'codex', accountId: 'id', installed: true, email: 'person@example.invalid', state: 'available', windows: [{ label: '5h', usedPercent: 20 }] };
  const vscode = { StatusBarAlignment: { Right: 2 }, window: { state: { focused: false },
    onDidChangeWindowState: () => ({ dispose() {} }),
    createStatusBarItem: () => { const item = { show() {}, dispose() { this.disposed = true; } }; items.push(item); return item; },
  } };
  const integration = { usage: async () => { calls++; if (calls === 1) await new Promise(resolve => { resolveFirst = resolve; }); return { providers: [row] }; } };
  const bar = createUsageStatusBar(vscode, integration);
  const refreshed = bar.refresh(true); resolveFirst(); await refreshed;
  assert.equal(calls, 2); assert.match(items[0].text, /20%/); assert.match(items[0].tooltip, /person@example.invalid/);
  bar.dispose(); assert.ok(items[0].disposed);
});
