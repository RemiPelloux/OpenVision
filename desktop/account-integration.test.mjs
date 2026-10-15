import assert from 'node:assert/strict';
import test from 'node:test';
import { createRequire } from 'node:module';
import { mkdtemp, rm, readFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { createHash } from 'node:crypto';
import { installAccountIntegrations } from './account-integration-customization.mjs';
import { alignWebviewScriptHash } from './account-integration-webviews.mjs';

const require = createRequire(import.meta.url);
const { createIntegration } = require('./account-integration-extension.cjs');
const { providers, providerFor, platformTarget, registryFile } = require('./account-integration-catalog.cjs');
const { downloadPackage, fetchResponse, readSmall } = require('./account-integration-download.cjs');

function fixture() {
  const extensions = new Map(), calls = [];
  const vscode = { extensions: { getExtension: id => extensions.get(id) },
    commands: { getCommands: async () => Object.values(providers).map(p => p.command),
      executeCommand: async command => { calls.push(command); } },
    Uri: { parse: value => value }, env: { openExternal: async url => { calls.push(url); } } };
  const add = provider => extensions.set(provider.extensionId, { isActive: false, packageJSON: { version: '1.0.0' },
    activate: async () => { calls.push(`activate:${provider.id}`); } });
  const auth = { status: async () => ({ signedIn: null }), connect: async () => { calls.push('login'); }, invalidate() {}, dispose() {} };
  return { vscode, calls, add, auth };
}

test('account status never confuses an installed extension with an authenticated account', async () => {
  const f = fixture(); f.add(providers.codex);
  const rows = (await createIntegration(f.vscode, {}, { auth: f.auth }).status()).providers;
  assert.equal(rows[0].installed, true); assert.equal(rows[0].signedIn, false);
  assert.equal(rows[1].installed, false); assert.equal(rows[1].authentication, 'managed-by-extension');
  assert.deepEqual(f.calls, []);
});

test('connect installs official integration and opens it once under concurrent clicks', async () => {
  const f = fixture(); let installs = 0;
  const api = createIntegration(f.vscode, {}, { auth: f.auth, install: async (_v, _c, p) => { installs++; await Promise.resolve(); f.add(p); } });
  const [first, second] = await Promise.all([api.connect('claude'), api.connect('claude')]);
  assert.equal(installs, 1); assert.equal(first, second); assert.equal(first.installed, true);
  assert.deepEqual(f.calls, ['login', 'activate:claude', 'claude-vscode.editor.open']);
  await api.open('claude'); assert.equal(installs, 1);
});

test('install or activation failures are retryable and do not report connected', async () => {
  const f = fixture(); let attempts = 0;
  const api = createIntegration(f.vscode, {}, { auth: f.auth, install: async (_v, _c, p) => {
    if (++attempts === 1) throw new Error('offline'); f.add(p);
  } });
  await assert.rejects(api.connect('codex'), /offline/);
  assert.equal((await api.status()).providers[0].installed, false);
  await api.connect('codex'); assert.equal(attempts, 2);
  f.vscode.commands.getCommands = async () => [];
  await assert.rejects(api.open('codex'), /did not register/);
});

test('unavailable dynamic activation reports reload required', async () => {
  const f = fixture();
  await assert.rejects(createIntegration(f.vscode, {}, { auth: f.auth, install: async () => {} }).connect('codex'), /Reload OpenVision/);
  assert.deepEqual(f.calls, []);
});

test('provider and platform boundaries reject unknown values and external sources', () => {
  for (const input of ['__proto__', 'constructor', {}, 'openai']) assert.throws(() => providerFor(input));
  for (const platform of ['win32', 'darwin', 'linux'])
    for (const arch of ['x64', 'arm64']) assert.equal(platformTarget(platform, arch), `${platform}-${arch}`);
  assert.throws(() => platformTarget('linux', 'ia32'));
  assert.throws(() => registryFile('https://evil.invalid/package.vsix', '.vsix'));
  assert.throws(() => registryFile('https://password@open-vsx.org/package.vsix', '.vsix'));
});

test('package streaming verifies checksum and rejects an off-registry redirect', async t => {
  const directory = await mkdtemp(join(tmpdir(), 'openvision-account-test-'));
  t.after(() => rm(directory, { recursive: true, force: true }));
  const body = Buffer.from('controlled extension bytes');
  t.mock.method(globalThis, 'fetch', async () => new Response(body));
  const checksum = createHash('sha256').update(body).digest('hex');
  const path = await downloadPackage({ url: 'https://open-vsx.org/test.vsix', checksum }, directory, new AbortController().signal, { report() {} });
  assert.deepEqual(await readFile(path), body);
  globalThis.fetch = async () => new Response(null, { status: 302, headers: { location: 'https://evil.invalid/test.vsix' } });
  await assert.rejects(fetchResponse('https://open-vsx.org/test.vsix'), /outside the official registry/);
});

test('metadata budgets reject oversized responses before parsing', async () => {
  await assert.rejects(readSmall(new Response('x'.repeat(1024 * 1024 + 1))), /exceeds/);
});

test('tampered downloads and cancellation fail before installation', async t => {
  const directory = await mkdtemp(join(tmpdir(), 'openvision-account-integrity-'));
  t.after(() => rm(directory, { recursive: true, force: true }));
  t.mock.method(globalThis, 'fetch', async () => new Response('tampered package'));
  await assert.rejects(downloadPackage({ url: 'https://open-vsx.org/test.vsix', checksum: '0'.repeat(64) },
    directory, new AbortController().signal, { report() {} }), /checksum/);
  const controller = new AbortController(); controller.abort();
  await assert.rejects(downloadPackage({ url: 'https://open-vsx.org/test.vsix', checksum: '0'.repeat(64) },
    directory, controller.signal, { report() {} }), { name: 'AbortError' });
});

test('bundled extension build produces activatable manifest and runtime files', async t => {
  const root = await mkdtemp(join(tmpdir(), 'openvision-account-build-'));
  t.after(() => rm(root, { recursive: true, force: true }));
  const { mkdir, cp } = await import('node:fs/promises');
  await mkdir(join(root, 'desktop'));
  const htmlDirectory = join(root, 'source/app/out/vs/workbench/contrib/webview/browser/pre');
  await mkdir(htmlDirectory, { recursive: true });
  const { writeFile } = await import('node:fs/promises');
  await cp(new URL('./fixtures/account-browser.txt', import.meta.url), join(root, 'source/app/out/main.js'));
  await writeFile(join(htmlDirectory, 'index.html'), `<meta http-equiv="Content-Security-Policy" content="script-src 'sha256-old=' 'self';"><script>window.bootstrap = true;</script>`);
  const workerDirectory = join(root, 'source/app/out/vs/workbench/services/extensions/worker');
  await mkdir(workerDirectory, { recursive: true });
  await writeFile(join(workerDirectory, 'webWorkerExtensionHostIframe.html'), `<meta http-equiv="Content-Security-Policy" content="default-src 'none'; script-src 'sha256-old=' 'self'; worker-src 'self' blob:;"><script>window.worker = true;</script>`);
  for (const name of ['extension', 'catalog', 'download', 'auth']) await cp(new URL(`./account-integration-${name}.cjs`, import.meta.url), join(root, 'desktop', `account-integration-${name}.cjs`));
  for (const name of ['account-auth.cjs', 'account-auth-process.cjs', 'account-login-url.cjs',
    'account-usage.cjs', 'account-usage-protocol.cjs', 'account-usage-statusbar.cjs', 'account-claude-client.cjs',
    'account-chat-bridge.cjs', 'account-chat-clients.cjs', 'account-chat-request.cjs', 'account-chat-session.cjs']) await cp(new URL(`./${name}`, import.meta.url), join(root, 'desktop', name));
  await installAccountIntegrations(root); await installAccountIntegrations(root);
  const manifest = JSON.parse(await readFile(join(root, 'source/app/extensions/openvision-accounts/package.json'), 'utf8'));
  assert.ok(manifest.activationEvents.includes('onCommand:openvision.accounts.status'));
  assert.equal(manifest.publisher, 'openvision');
  assert.equal(typeof require(join(root, 'source/app/extensions/openvision-accounts/account-integration-extension.cjs')).activate, 'function');
  const worker = await readFile(join(workerDirectory, 'webWorkerExtensionHostIframe.html'), 'utf8');
  assert.equal(worker, alignWebviewScriptHash(worker));
  assert.ok(worker.includes("worker-src 'self' blob:"));
});

test('recovered HTML keeps its strict CSP while hashing the actual parsed bootstrap script', () => {
  const script = '\r\nwindow.boot = true;\r\n';
  const html = `<meta http-equiv="Content-Security-Policy" content="default-src 'none'; script-src 'sha256-old=' 'self';"><script>${script}</script>`;
  const after = alignWebviewScriptHash(html);
  const expected = createHash('sha256').update(script.replaceAll('\r\n', '\n')).digest('base64');
  assert.ok(after.includes(`'sha256-${expected}'`));
  assert.ok(after.includes("default-src 'none'"));
  assert.equal(alignWebviewScriptHash(after), after);
  assert.throws(() => alignWebviewScriptHash(html + '<script>unexpected()</script>'), /one owned/);
});
