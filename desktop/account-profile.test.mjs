import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, readFile, writeFile, rm, lstat, symlink } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { AccountProfiles } from './account-profile-store.mjs';
import { customizeAccountHost, customizeAccountBrowserCommand } from './account-profile-customization.mjs';

test('one profile owner serializes concurrent writes and keeps provider state separate', async t => {
  const directory = await mkdtemp(join(tmpdir(), 'openvision-account-profiles-'));
  t.after(() => rm(directory, { recursive: true, force: true }));
  const store = new AccountProfiles(directory);
  const [personal, work, claude] = await Promise.all([store.create('codex', 'Personal'), store.create('codex', 'Work'), store.create('claude', 'Claude work')]);
  assert.equal((await store.read()).accounts.length, 3);
  await store.select('codex', personal.id); await store.select('claude', claude.id);
  const original = { PATH: 'original-path', HOME: 'original-home' };
  const first = await store.environment(original);
  await store.select('codex', work.id);
  const second = await store.environment(original);
  assert.notEqual(first.CODEX_HOME, second.CODEX_HOME);
  assert.equal(first.CLAUDE_CONFIG_DIR, second.CLAUDE_CONFIG_DIR);
  assert.equal(second.OPENVISION_CODEX_ACCOUNT_ID, work.id);
  assert.deepEqual(original, { PATH: 'original-path', HOME: 'original-home' });
  assert.equal(second.HOME, original.HOME); assert.equal(second.PATH, original.PATH);
  const isolated = await store.environment({ OPENAI_API_KEY: 'synthetic', ANTHROPIC_API_KEY: 'synthetic', unrelated: 'preserved' });
  assert.equal(isolated.OPENAI_API_KEY, undefined); assert.equal(isolated.ANTHROPIC_API_KEY, undefined);
  assert.equal(isolated.unrelated, 'preserved');
  await assert.rejects(store.select('codex', claude.id), /saved account/);
  assert.match(await readFile(join(second.CODEX_HOME, 'config.toml'), 'utf8'), /cli_auth_credentials_store = "file"/);
  await writeFile(join(second.CODEX_HOME, 'config.toml'), '# user-edited config\n');
  await store.environment(original);
  assert.equal(await readFile(join(second.CODEX_HOME, 'config.toml'), 'utf8'), '# user-edited config\n');
  const backup = JSON.parse(await readFile(`${store.path}.backup`, 'utf8'));
  assert.equal(backup.active.codex, personal.id);
});

test('malformed profile records fail closed and preserve their bytes', async t => {
  const directory = await mkdtemp(join(tmpdir(), 'openvision-account-invalid-'));
  t.after(() => rm(directory, { recursive: true, force: true }));
  const store = new AccountProfiles(directory);
  const invalid = JSON.stringify({ version: 1, accounts: [{ id: '../../escape', provider: 'codex', label: 'bad' }], active: {} });
  await writeFile(store.path, invalid);
  await assert.rejects(store.create('codex', 'New'), /metadata is invalid/);
  assert.equal(await readFile(store.path, 'utf8'), invalid);
});

test('native environment patch is idempotent and scoped to the actual host launch contract', async () => {
  const source = await readFile(new URL('../source/app/out/main.js', import.meta.url), 'utf8');
  const result = customizeAccountHost(source);
  assert.equal(customizeAccountHost(result), result);
  assert.ok(result.includes('env: await openvisionAccountEnvironment(t.env, l)'));
});

test('deleting either provider removes credentials and cache but archives conversation content', async t => {
  const directory = await mkdtemp(join(tmpdir(), 'openvision-account-delete-'));
  t.after(() => rm(directory, { recursive: true, force: true }));
  const store = new AccountProfiles(directory);
  for (const provider of ['codex', 'claude']) {
    const account = await store.create(provider, 'Disposable'), home = store.directoryFor(account);
    const history = provider === 'codex' ? 'sessions' : 'projects';
    await mkdir(join(home, history)); await mkdir(join(home, 'cache'));
    await writeFile(join(home, history, 'conversation.jsonl'), 'retained conversation');
    await writeFile(join(home, 'auth.json'), 'synthetic credentials');
    await writeFile(join(home, 'cache/token'), 'synthetic cached credentials');
    await store.select(provider, account.id);
    await assert.rejects(store.remove(provider, account.id, () => {}), /Disconnect/);
    await store.select(provider, null);
    await assert.rejects(store.remove(provider, account.id, () => { throw Error('another window'); }), /another window/);
    assert.equal((await store.read()).accounts[0].removing, undefined);
    const result = await store.remove(provider, account.id, () => {});
    assert.equal(await readFile(join(result.historyDirectory, history, 'conversation.jsonl'), 'utf8'), 'retained conversation');
    await assert.rejects(lstat(home), { code: 'ENOENT' });
    await assert.rejects(lstat(join(result.historyDirectory, 'auth.json')), { code: 'ENOENT' });
    assert.equal((await store.read()).accounts.length, 0);
    const env = await store.environment({ CODEX_HOME: 'ambient home', ANTHROPIC_API_KEY: 'ambient key' });
    assert.notEqual(env.CODEX_HOME, 'ambient home'); assert.equal(env.ANTHROPIC_API_KEY, undefined);
    assert.equal(env[`OPENVISION_${provider.toUpperCase()}_ACCOUNT_ID`], undefined);
  }
});

test('interrupted history cleanup retains ownership and retries without discarding either copy', async t => {
  const directory = await mkdtemp(join(tmpdir(), 'openvision-account-retry-'));
  t.after(() => rm(directory, { recursive: true, force: true }));
  const store = new AccountProfiles(directory), account = await store.create('codex', 'Retry');
  const home = store.directoryFor(account), archive = join(directory, 'history/codex', account.id);
  await mkdir(join(home, 'sessions')); await mkdir(join(home, 'archived_sessions'));
  await writeFile(join(home, 'sessions/kept.jsonl'), 'session');
  await mkdir(join(archive, 'archived_sessions'), { recursive: true });
  await assert.rejects(store.remove('codex', account.id, () => {}), /both copies/);
  assert.equal((await store.read()).accounts[0].removing, true);
  await assert.rejects(store.select('codex', account.id), /saved account/);
  await rm(join(archive, 'archived_sessions'), { recursive: true });
  await store.remove('codex', account.id, () => {});
  assert.equal(await readFile(join(archive, 'sessions/kept.jsonl'), 'utf8'), 'session');
  assert.equal((await store.read()).accounts.length, 0);
});

test('history links cannot redirect cleanup outside the owned profile', async t => {
  const directory = await mkdtemp(join(tmpdir(), 'openvision-account-link-'));
  t.after(() => rm(directory, { recursive: true, force: true }));
  const store = new AccountProfiles(directory), account = await store.create('claude', 'Linked');
  const outside = join(directory, 'outside'); await mkdir(outside); await writeFile(join(outside, 'keep.txt'), 'untouched');
  await symlink(outside, join(store.directoryFor(account), 'projects'), 'junction');
  await assert.rejects(store.remove('claude', account.id, () => {}), /link or special file/);
  assert.equal(await readFile(join(outside, 'keep.txt'), 'utf8'), 'untouched');
  assert.equal((await store.read()).accounts[0].removing, true);
});

test('browser command uses the native registry and delegates destination handling to its owner', async () => {
  // The native bundle registers these commands inside a comma expression.
  const source = '(registry.registerCommand("before", () => {}), registry.registerCommand("_workbench.getRecentlyOpened", async function (accessor) {}));';
  const result = customizeAccountBrowserCommand(source), commands = new Map(), calls = [];
  new Function('registry', 'window', result)({ registerCommand: (id, handler) => commands.set(id, handler) },
    { openvisionProjectHome: { openAccountBrowser: (...args) => { calls.push(args); return true; } } });
  assert.equal(await commands.get('openvision.accounts.openBrowser')(null, 'codex', 'https://auth.openai.com/oauth/authorize'), true);
  assert.deepEqual(calls, [['codex', 'https://auth.openai.com/oauth/authorize']]);
  assert.equal(customizeAccountBrowserCommand(result), result);
  const previous = source.replace('registry.registerCommand("_workbench.getRecentlyOpened",',
    '/* OpenVision official account browser command v1 */\nregistry.registerCommand("openvision.accounts.openBrowser", () => {});registry.registerCommand("_workbench.getRecentlyOpened",');
  assert.equal(customizeAccountBrowserCommand(previous), result);
  assert.throws(() => customizeAccountBrowserCommand('registry.registerCommand("changed", () => {});'), /registry changed/);
});
