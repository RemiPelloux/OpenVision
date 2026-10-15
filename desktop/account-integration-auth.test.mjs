import assert from 'node:assert/strict';
import test from 'node:test';
import { createRequire } from 'node:module';
import { mkdtemp, mkdir, writeFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const require = createRequire(import.meta.url);
const { createAccountAuth, binaryRelative, resolveAccountRuntime } = require('./account-integration-auth.cjs');
const { providers } = require('./account-integration-catalog.cjs');

function ui() {
  const opened = [], progress = [];
  let cancel;
  const vscode = { commands: { executeCommand: async (command, provider, url) => {
    assert.equal(command, 'openvision.accounts.openBrowser'); assert.ok(['codex', 'claude'].includes(provider)); opened.push(url); return true; } },
    ProgressLocation: { Notification: 1 }, window: {
      withProgress: async (_options, callback) => callback({ report: value => progress.push(value.message) },
        { onCancellationRequested: listener => { cancel = listener; return { dispose() {} }; } }),
      showInputBox: async () => 'one-time-test-code',
    } };
  return { vscode, opened, progress, cancel: () => cancel?.() };
}

test('status deduplicates pending reads and caches bounded results until explicit refresh', async () => {
  const view = ui(); let reads = 0;
  const auth = createAccountAuth(view.vscode, { resolve: async () => ({}), read: async () => { reads++; return { signedIn: false }; } });
  const [a, b] = await Promise.all([auth.status({}, providers.codex), auth.status({}, providers.codex)]);
  assert.equal(a, b); assert.equal(reads, 1);
  await auth.status({}, providers.codex); assert.equal(reads, 1);
  await auth.status({}, providers.codex, true); assert.equal(reads, 2);
  auth.invalidate(); await auth.status({}, providers.codex); assert.equal(reads, 3);
  auth.dispose(); await assert.rejects(auth.status({}, providers.claude), /shutting down/);
});

test('connect opens the official URL and forwards the temporary Claude code only to its client', async () => {
  const view = ui(); let suppliedCode;
  const auth = createAccountAuth(view.vscode, { resolve: async () => ({}), login: async options => {
    await options.openExternal('https://claude.com/cai/oauth/authorize');
    options.onProgress({ stage: 'waiting-for-code' }); suppliedCode = await options.requestCode();
    return { signedIn: true, email: 'account@example.invalid' };
  } });
  const result = await auth.connect({}, providers.claude);
  assert.equal(result.signedIn, true); assert.equal(suppliedCode, 'one-time-test-code');
  assert.deepEqual(view.opened, ['https://claude.com/cai/oauth/authorize']);
  assert.ok(!JSON.stringify(result).includes(suppliedCode));
  assert.equal((await auth.status({}, providers.claude)).email, 'account@example.invalid');
});

test('a failed browser open is actionable and never reported as authenticated', async () => {
  const view = ui(); view.vscode.commands.executeCommand = async () => false;
  const auth = createAccountAuth(view.vscode, { resolve: async () => ({}), login: options => options.openExternal('https://auth.openai.com/oauth/authorize') });
  await assert.rejects(auth.connect({}, providers.codex), /browser could not be opened/);
});

test('progress cancellation and extension disposal abort their owned authentication', async () => {
  for (const method of ['cancel', 'dispose']) {
    const view = ui(); let ready;
    const started = new Promise(resolve => { ready = resolve; });
    const auth = createAccountAuth(view.vscode, { resolve: async () => ({}), login: options => new Promise((resolve, reject) => {
      options.signal.addEventListener('abort', () => reject(new Error('aborted')), { once: true }); ready();
    }) });
    const pending = auth.connect({}, providers.codex); await started;
    if (method === 'cancel') view.cancel(); else auth.dispose();
    await assert.rejects(pending, /aborted/);
  }
});

test('official executable resolution follows each packaged platform and requires an isolated account directory', async t => {
  assert.equal(binaryRelative('codex', 'darwin', 'arm64'), join('bin', 'macos-aarch64', 'codex'));
  assert.equal(binaryRelative('codex', 'linux', 'x64'), join('bin', 'linux-x86_64', 'codex'));
  assert.equal(binaryRelative('claude', 'win32', 'arm64'), join('resources', 'native-binary', 'claude.exe'));
  const root = await mkdtemp(join(tmpdir(), 'openvision-runtime-path-'));
  t.after(() => rm(root, { recursive: true, force: true }));
  const binary = join(root, binaryRelative('codex'));
  await mkdir(join(binary, '..'), { recursive: true }); await writeFile(binary, 'fixture');
  const saved = process.env.CODEX_HOME;
  const savedId = process.env.OPENVISION_CODEX_ACCOUNT_ID;
  t.after(() => { if (saved === undefined) delete process.env.CODEX_HOME; else process.env.CODEX_HOME = saved;
    if (savedId === undefined) delete process.env.OPENVISION_CODEX_ACCOUNT_ID; else process.env.OPENVISION_CODEX_ACCOUNT_ID = savedId; });
  const extension = { extensionPath: root, packageJSON: { publisher: 'openai', name: 'chatgpt' } };
  delete process.env.CODEX_HOME;
  await assert.rejects(resolveAccountRuntime(extension, providers.codex), /Select an OpenVision account/);
  process.env.OPENVISION_CODEX_ACCOUNT_ID = '12345678-1234-1234-1234-123456789012';
  process.env.CODEX_HOME = join(root, process.env.OPENVISION_CODEX_ACCOUNT_ID);
  await mkdir(process.env.CODEX_HOME);
  assert.equal((await resolveAccountRuntime(extension, providers.codex)).executable, binary);
  extension.packageJSON.publisher = 'untrusted';
  await assert.rejects(resolveAccountRuntime(extension, providers.codex), /official provider identity/);
});


test('an unresponsive browser opener times out or cancels without retaining the sign-in operation', async t => {
  t.mock.timers.enable({ apis: ['setTimeout'] });
  for (const cause of ['timeout', 'cancel']) {
    const view = ui(), started = Promise.withResolvers();
    view.vscode.commands.executeCommand = () => { started.resolve(); return new Promise(() => {}); };
    const auth = createAccountAuth(view.vscode, { resolve: async () => ({}),
      login: options => options.openExternal('https://claude.com/cai/oauth/authorize') });
    const pending = auth.connect({}, providers.claude);
    const failed = assert.rejects(pending, cause === 'timeout' ? /browser did not respond/ : /cancelled/);
    await started.promise;
    if (cause === 'timeout') t.mock.timers.tick(15000); else view.cancel();
    await failed; auth.dispose();
  }
});
