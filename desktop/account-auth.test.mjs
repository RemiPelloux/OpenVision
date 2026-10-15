import assert from 'node:assert/strict';
import test from 'node:test';
import { createRequire } from 'node:module';
import { mkdtemp, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const require = createRequire(import.meta.url);
const { accountStatus, officialLoginUrl } = require('./account-auth.cjs');
const { accountEnvironment, ownedProcess, runJson } = require('./account-auth-process.cjs');

async function fixture(t, provider = 'claude') {
  const accountDirectory = await mkdtemp(join(tmpdir(), 'openvision-auth-'));
  t.after(() => rm(accountDirectory, { recursive: true, force: true }));
  return { provider, accountDirectory, executable: process.execPath };
}

test('account status exposes allowlisted display data without credential fields', () => {
  const result = accountStatus('codex', { type: 'chatgpt', email: 'test@example.invalid', planType: 'plus', accessToken: 'must-not-leak' },
    [{ id: 'model-id', displayName: 'Model', supportedReasoningEfforts: [{ reasoningEffort: 'high' }], secret: 'must-not-leak' }]);
  assert.equal(result.signedIn, true); assert.equal(result.plan, 'plus');
  assert.deepEqual(result.models[0], { id: 'model-id', name: 'Model', reasoningLevels: ['high'] });
  assert.ok(!JSON.stringify(result).includes('must-not-leak'));
  assert.equal(accountStatus('claude', { loggedIn: false, authMethod: 'none' }).signedIn, false);
});

test('only official HTTPS OAuth destinations can be opened', () => {
  assert.equal(new URL(officialLoginUrl('https://auth.openai.com/oauth/authorize?state=opaque', 'codex')).hostname, 'auth.openai.com');
  for (const url of ['http://auth.openai.com/login', 'https://auth.openai.com.evil.invalid/login', 'file:///x', 'https://secret@claude.com/login'])
    assert.throws(() => officialLoginUrl(url, 'claude'));
});

test('account environments isolate homes and remove ambient alternative authentication', async t => {
  const options = await fixture(t);
  const previous = process.env.ANTHROPIC_API_KEY;
  t.after(() => { if (previous === undefined) delete process.env.ANTHROPIC_API_KEY; else process.env.ANTHROPIC_API_KEY = previous; });
  process.env.ANTHROPIC_API_KEY = 'do-not-inherit';
  const env = accountEnvironment(options);
  assert.equal(env.CLAUDE_CONFIG_DIR, options.accountDirectory);
  assert.equal(env.ANTHROPIC_API_KEY, undefined);
  assert.equal(env.CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC, '1');
  assert.throws(() => accountEnvironment({ ...options, executable: 'relative' }));
});

test('official signed-out JSON survives its nonzero status while non-JSON errors remain sanitized', async t => {
  const options = await fixture(t);
  assert.deepEqual(await runJson(options, ['-e', 'console.log(JSON.stringify({loggedIn:false,authMethod:"none"}));process.exitCode=1']),
    { loggedIn: false, authMethod: 'none' });
  await assert.rejects(runJson(options, ['-e', 'console.log("secret-token-here");process.exitCode=1']),
    error => !error.message.includes('secret-token-here') && /unreadable status/.test(error.message));
});

test('cancellation kills and awaits the owned client', async t => {
  const options = await fixture(t), controller = new AbortController();
  const client = ownedProcess({ ...options, signal: controller.signal }, ['-e', 'setInterval(()=>{},1000)'], 30000);
  controller.abort();
  const result = await client.exit;
  assert.match(result.failure.message, /cancelled/);
  assert.equal(client.child.killed, true);
});

test('timeout settles the owned process and oversized status output fails boundedly', async t => {
  const options = await fixture(t);
  const client = ownedProcess(options, ['-e', 'setInterval(()=>{},1000)'], 100);
  assert.match((await client.exit).failure.message, /timed out/);
  await assert.rejects(runJson(options, ['-e', 'process.stdout.write("x".repeat(5*1024*1024));setInterval(()=>{},1000)']), /exceeded its limit/);
});
