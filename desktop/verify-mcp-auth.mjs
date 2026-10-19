import assert from 'node:assert/strict';
import { mkdtemp, mkdir, readFile, readdir, stat, writeFile } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { spawn, execFileSync } from 'node:child_process';
import { randomUUID } from 'node:crypto';
import { setTimeout as delay } from 'node:timers/promises';
import { _electron } from '../tooling/browser.mjs';
import { verificationSettings } from './verification-profile.mjs';
import { fileHash } from './import-files.mjs';
import { platformLayout, linuxSandboxArguments } from './platform.mjs';
import { enterWorkspace, openChat } from './verification-workspace.mjs';
import { createMcpConfigOwnershipProvider } from './verify-mcp-config-ownership-fixture.mjs';
import { createMcpOAuthFixture, secretDigest } from './verify-mcp-oauth-fixture.mjs';
import { familyPids, scanForSecrets, readOAuthRows } from './verify-mcp-auth-secrets.mjs';

// Native OV-304 MCP OAuth verification on Linux x64. A loopback OAuth 2.1 MCP
// fixture (PKCE, dynamic client registration, refresh) stands in for a hosted
// server; inference is the controlled loopback provider. Consent is the real
// workbench Authenticate flow: the authorization URL that OpenVision opens
// through shell.openExternal is captured, fetched without a browser, and the
// redirect is delivered back through a second `--open-url` instance, as the
// desktop URL handler does. `--secrets` additionally requires the Secret
// Service (gnome-keyring is started inside this D-Bus session when needed),
// asserts that token rows are keyring-encrypted, and scans profile files,
// logs, mcp.json and process argv for every issued secret.
assert.equal(process.platform, 'linux', 'This OAuth verifier reads the Linux process tree and Secret Service');
const secrets = process.argv.includes('--secrets');
const root = resolve(import.meta.dirname, '..');
const directory = await mkdtemp(join(root, `logs/mcp-auth-${secrets ? 'secrets-' : ''}`));
const layout = platformLayout(root);
const profile = join(directory, 'profile'), project = join(directory, 'project');
await mkdir(join(profile, 'User'), { recursive: true });
await mkdir(join(project, '.openvision'), { recursive: true });
await writeFile(join(project, 'hello.js'), 'export const answer = 42;\n');
await writeFile(join(profile, 'User/settings.json'), JSON.stringify({ ...verificationSettings,
  'window.restoreWindows': 'none', 'git.openRepositoryInParentFolders': 'never' }));
const oauth = await createMcpOAuthFixture();
const provider = await createMcpConfigOwnershipProvider();
const mcpConfig = join(profile, 'User/mcp.json');
const staticHeader = 'Bearer ${env:OV_MCP_STATIC_TOKEN}';
const configText = JSON.stringify({ mcpServers: {
  'ov-oauth': { url: oauth.url },
  'ov-static': { url: oauth.staticUrl, headers: { Authorization: staticHeader } },
} }, null, 2);
await writeFile(mcpConfig, configText);
const serverId = 'user-ov-oauth';
const result = { directory, checkedAt: new Date().toISOString(), mode: secrets ? 'secrets' : 'flows',
  identity: { commit: execFileSync('git', ['rev-parse', 'HEAD'], { cwd: root, encoding: 'utf8' }).trim(),
    platform: process.platform, arch: process.arch, node: process.version,
    hashes: Object.fromEntries(await Promise.all([['host', layout.executable],
      ['utility', join(layout.host, 'resources/app/out/vs/code/electron-utility/mcpProcess/mcpProcessMain.js')],
      ['workbench', join(layout.host, 'resources/app/out/vs/workbench/workbench.desktop.main.js')],
      ['main', join(layout.host, 'resources/app/out/main.js')],
      ['verifier', join(root, 'desktop/verify-mcp-auth.mjs')]].map(async ([name, path]) => [name, await fileHash(path)]))) },
  scope: 'Linux x64 native workbench, MCP utility and main process; loopback OAuth 2.1 MCP fixture; controlled inference; disposable profile only.',
  checks: {}, observations: {}, pageErrors: [], hostExits: [], opened: [] };
// A canary exported like a user's own secret (issue #9): it must never reach disk.
const environmentCanary = `ov-env-canary-${randomUUID()}`;
const env = { ...process.env, OV_MCP_STATIC_TOKEN: oauth.issued.staticToken, OV_ENV_CANARY: environmentCanary }; delete env.ELECTRON_RUN_AS_NODE;
const sandbox = await linuxSandboxArguments(layout.host);
const common = ['--user-data-dir', profile, '--extensions-dir', join(profile, 'extensions'), '--new-window',
  '--disable-updates', '--skip-welcome', '--skip-release-notes', '--disable-telemetry', '--disable-crash-reporter', ...sandbox];
let keyring, session;

async function until(description, condition, timeout = 45000) {
  const end = Date.now() + timeout;
  while (Date.now() < end) { if (await condition()) return; await delay(100); }
  throw new Error(`Timed out waiting for ${description}`);
}
const mcpRequests = (predicate = () => true) => oauth.requests.filter(item => item.path === '/mcp' && predicate(item));
const authorizedCalls = () => mcpRequests(item => item.method === 'tools/call' && item.authorized).length;
const counts = () => ({ register: oauth.count('register'), authorize: oauth.count('authorize'),
  codeExchange: oauth.count('token', item => item.grant === 'authorization_code'),
  refresh: oauth.count('token', item => item.grant === 'refresh_token'), accessTokens: oauth.issued.accessTokens.length });

// Secret Service: reuse a running one, otherwise start gnome-keyring in this D-Bus session.
async function secretService() {
  const probe = () => { try {
    return /boolean true/.test(execFileSync('dbus-send', ['--session', '--print-reply', '--dest=org.freedesktop.DBus',
      '/org/freedesktop/DBus', 'org.freedesktop.DBus.NameHasOwner', 'string:org.freedesktop.secrets'], { encoding: 'utf8' }));
  } catch { return false; } };
  if (probe()) return { started: false };
  assert.ok(process.env.DBUS_SESSION_BUS_ADDRESS, '--secrets needs a D-Bus session (run under dbus-run-session)');
  // The user's default (login) collection must exist; this never creates or unlocks one.
  const child = spawn('gnome-keyring-daemon', ['--foreground', '--components=secrets'], { stdio: 'ignore', env: process.env });
  keyring = child;
  await until('Secret Service on the session bus', () => probe(), 15000);
  return { started: true, daemon: 'gnome-keyring-daemon --foreground --components=secrets' };
}

async function launch() {
  const app = await _electron.launch({ executablePath: layout.executable, env, timeout: 60000, args: [...common, project] });
  const page = await app.firstWindow(); page.setDefaultTimeout(20000);
  page.on('pageerror', error => result.pageErrors.push(error.message));
  await page.locator('.part.titlebar .openvision-local-profile').waitFor({ state: 'attached', timeout: 60000 });
  await enterWorkspace(page);
  // Capture the authorization page instead of starting a desktop browser.
  await app.evaluate(({ shell }) => {
    globalThis.openvisionOpened = [];
    shell.openExternal = async url => { globalThis.openvisionOpened.push(String(url)); };
  });
  session = { app, page }; return session;
}
async function opened(app) {
  const urls = await app.evaluate(() => globalThis.openvisionOpened.splice(0));
  result.opened.push(...urls.map(url => { const parsed = new URL(url); return `${parsed.origin}${parsed.pathname}`; }));
  return urls;
}
async function closeApp(app) {
  const child = app.process(); await app.close();
  result.hostExits.push({ pid: child.pid, code: child.exitCode, signal: child.signalCode }); assert.equal(child.exitCode, 0);
  session = undefined;
}
// The desktop URL handler path: a second instance forwards --open-url to the running one.
async function deliver(url) {
  const forwarding = spawn(layout.executable, [...common, '--open-url', '--', url], { env, stdio: 'ignore' });
  const code = await new Promise((resolveExit, reject) => { forwarding.once('error', reject); forwarding.once('exit', resolveExit); });
  assert.equal(code, 0, 'The forwarding instance must hand the URL to the running instance');
}
async function consentRedirect(authorizationUrl) {
  const response = await fetch(authorizationUrl, { redirect: 'manual' });
  assert.equal(response.status, 302, 'Fixture authorization endpoint must redirect back');
  const location = response.headers.get('location');
  assert.match(location, /^openvision-local:\/\/anysphere\.cursor-mcp\/oauth\/callback\?/);
  return location;
}

async function openMcps(page) {
  const row = page.locator('[data-mcp-manage-server="ov-oauth"]').filter({ visible: true });
  if (await row.count()) return row;
  await page.locator('.part.titlebar a[aria-label$=" Settings"]').click();
  await page.locator('.cursor-settings-sidebar-cell-label').filter({ hasText: /^Customize$/ }).locator('..').click();
  await page.locator('[data-customize-manage-tab-id="mcps"]').filter({ visible: true }).first().click();
  await row.first().waitFor({ timeout: 30000 });
  return row;
}
async function rowStatus(page) {
  const row = await openMcps(page);
  return row.locator('[data-status]').first().getAttribute('data-status').catch(() => null);
}
async function authenticate(page, app, label) {
  const row = await openMcps(page);
  const button = row.locator('[data-mcp-connect]');
  await button.waitFor({ timeout: 45000 });
  await page.screenshot({ path: join(directory, `${label}-needs-auth.png`) });
  (result.observations.rowsNeedingAuth ??= []).push({ label, text: await row.innerText() });
  await button.click();
  let urls = [];
  await until(`${label} authorization URL`, async () => (urls.push(...await opened(app)), urls.length > 0), 30000);
  assert.equal(urls.length, 1, 'One click opens exactly one authorization page');
  const url = new URL(urls[0]);
  assert.equal(`${url.origin}${url.pathname}`, `${oauth.origin}/authorize`);
  assert.equal(url.searchParams.get('code_challenge_method'), 'S256');
  assert.equal(url.searchParams.get('redirect_uri'), 'openvision-local://anysphere.cursor-mcp/oauth/callback');
  return url.href;
}

async function configureProvider(page) {
  await page.locator('.part.titlebar a[aria-label$=" Settings"]').click();
  await page.locator('.cursor-settings-sidebar-cell-label').filter({ hasText: /^Models$/ }).locator('..').click();
  await page.locator('.openvision-model-settings').getByRole('button', { name: 'Add Provider', exact: true }).click();
  await page.getByLabel('Provider Name', { exact: true }).fill('OAuth fixture provider');
  await page.getByLabel('API Base URL', { exact: true }).fill(provider.baseURL);
  await page.getByLabel('API Key', { exact: true }).fill('fixture-key');
  await page.locator('dialog').getByRole('button', { name: 'Save', exact: true }).click();
  await page.locator('dialog').waitFor({ state: 'detached' });
}
async function selectModel(page) {
  await openChat(page);
  await page.locator('.vscode-model-picker__trigger-markdown').filter({ visible: true }).first().click();
  await page.getByText('fixture-config-ownership', { exact: true }).last().click(); await page.keyboard.press('Escape');
}
// One approved Agent CallMcpTool on the OAuth server; returns the tool result text.
async function probe(page, phase) {
  provider.setPhase(phase, serverId, 'call');
  const input = await openChat(page);
  await input.fill(`OpenVision OAuth ${phase}: call memory_probe with my approval on ${serverId}.`);
  await input.press('Enter');
  await page.getByText('Pending approval', { exact: true }).filter({ visible: true }).waitFor({ timeout: 30000 });
  await page.locator('[data-tool-approval-gate]').filter({ visible: true }).getByRole('button', { name: /^Run(?:\s|$)/ }).click();
  await page.getByText(`OpenVision config ownership ${phase} complete.`, { exact: true }).first().waitFor({ timeout: 60000 });
  await page.locator('.stop-button').filter({ visible: true }).waitFor({ state: 'hidden' });
  const output = provider.continuations.find(item => item.phase === phase);
  assert.ok(output, `Missing tool result for ${phase}`);
  return JSON.stringify(output.content);
}
async function notifications(page) {
  return page.locator('.notifications-toasts .notification-list-item-message, .notifications-center .notification-list-item-message')
    .allInnerTexts().catch(() => []);
}
// Logical keys are `[<oauthScopeKey>] <name>`; the scope key is the server identifier plus a scope suffix.
const ownRow = (row, name) => row.logical.startsWith(`[${serverId}`) && row.logical.endsWith(`] ${name}`);
async function tokenRows() {
  return (await readOAuthRows(join(profile, 'User/globalStorage/state.vscdb'))).filter(row => ownRow(row, 'mcp_tokens'));
}

async function flows() {
  const { app, page } = await launch();
  // 1. Discovery: the unauthenticated server is challenged and offers Authenticate; static ${env:} header works.
  await until('401 challenge', () => mcpRequests(item => item.authorized === false).length > 0);
  await until('static header discovery', () => oauth.requests.some(item => item.path === '/static-mcp' &&
    item.method === 'tools/list' && item.authorized));
  result.checks.staticEnvHeaderAuthenticates = true;
  assert.equal(await readFile(mcpConfig, 'utf8'), configText, 'mcp.json keeps the unexpanded ${env:} reference');
  result.checks.staticEnvHeaderNotWrittenBack = true;
  assert.equal(counts().accessTokens, 0);
  const startup = await opened(app);
  assert.deepEqual(startup, [], 'Startup must not open an authorization page without a user action');
  result.checks.noUnpromptedConsent = true;

  // 2. Denied consent: clear visible error, nothing stored, Authenticate offered again.
  oauth.settings.consent = 'deny';
  const deniedAt = Date.now();
  await deliver(await consentRedirect(await authenticate(page, app, 'deny')));
  const deniedMessage = /Could not connect to MCP server "ov-oauth"[\s\S]*(denied|access_denied)/i;
  await until('denied-consent notification', async () => (await notifications(page)).some(text => deniedMessage.test(text)), 20000)
    .catch(async error => { result.observations.deniedNotifications = await notifications(page);
      result.observations.deniedStatus = await rowStatus(page); throw error; });
  result.observations.deniedVisibleAfterMs = Date.now() - deniedAt;
  result.observations.deniedNotifications = (await notifications(page)).filter(text => deniedMessage.test(text));
  await page.screenshot({ path: join(directory, 'deny-notification.png') });
  assert.equal(counts().accessTokens, 0, 'A denied consent must not obtain tokens');
  assert.equal(counts().codeExchange, 0);
  // Application storage flushes asynchronously; the fixture-side count above is the authoritative check.
  result.observations.tokenRowsAfterDenial = (await tokenRows()).length;
  result.checks.deniedConsentClearErrorNoToken = true;

  // 3. Retry after denial: consent succeeds, the server connects with its token.
  oauth.settings.consent = 'approve';
  await deliver(await consentRedirect(await authenticate(page, app, 'retry')));
  await until('authorization-code exchange', () => counts().codeExchange === 1);
  await until('authorized discovery', () => mcpRequests(item => item.method === 'tools/list' && item.authorized).length > 0);
  await until('connected row', async () => await rowStatus(page) === 'connected', 30000);
  assert.ok(oauth.events.some(item => item.kind === 'token' && item.grant === 'authorization_code' && item.pkceVerified));
  const registration = oauth.events.find(item => item.kind === 'register');
  result.observations.registration = registration;
  assert.ok(registration.redirectUris.includes('openvision-local://anysphere.cursor-mcp/oauth/callback'));
  result.checks.retryAfterDenialSucceeds = true;

  // 4. Tool call through the real Agent with the obtained token.
  await configureProvider(page); await selectModel(page);
  const first = await probe(page, 'consent-call');
  assert.ok(first.includes(oauth.marker), 'The OAuth-protected tool output reaches the Agent');
  assert.equal(authorizedCalls(), 1);
  result.checks.consentThenToolCall = true;

  // 5. Expired access token: one silent refresh, the rejected request is retried once, no consent.
  const beforeExpiry = counts(), callsBeforeExpiry = authorizedCalls();
  const rejectedBefore = mcpRequests(item => item.method === 'tools/call' && item.authorized === false).length;
  oauth.expireAccessTokens();
  const refreshed = await probe(page, 'after-expiry');
  assert.ok(refreshed.includes(oauth.marker), 'The call after expiry succeeds');
  const afterExpiry = counts();
  assert.equal(afterExpiry.refresh - beforeExpiry.refresh, 1, 'Exactly one refresh request');
  assert.equal(afterExpiry.authorize, beforeExpiry.authorize, 'Refresh needs no new consent');
  assert.equal(authorizedCalls() - callsBeforeExpiry, 1, 'The tool executes exactly once');
  result.observations.expiry = { rejectedToolCalls: mcpRequests(item => item.method === 'tools/call' && item.authorized === false).length - rejectedBefore,
    refreshRequests: afterExpiry.refresh - beforeExpiry.refresh };
  assert.deepEqual(await opened(app), [], 'Silent refresh opens no authorization page');
  result.checks.expirySilentRefreshOnce = true;

  // 6. Refresh rejected: re-authentication prompt, the call is not executed or replayed.
  oauth.settings.refresh = 'fail';
  const beforeFailure = counts(), callsBeforeFailure = authorizedCalls();
  oauth.expireAccessTokens();
  const failed = await probe(page, 'refresh-failure');
  assert.ok(!failed.includes(oauth.marker), 'A call whose refresh failed must not report tool output');
  result.observations.refreshFailureResult = failed.slice(0, 400);
  const afterFailure = counts();
  assert.equal(afterFailure.refresh - beforeFailure.refresh, 1, 'One rejected refresh request, no retry loop');
  assert.equal(authorizedCalls(), callsBeforeFailure, 'No replay: the tool never executed');
  await until('re-authentication prompt', async () => await rowStatus(page) === 'needsAuth', 30000);
  assert.deepEqual(await opened(app), [], 'Re-authentication waits for the user');
  await delay(3000);
  assert.equal(authorizedCalls(), callsBeforeFailure, 'Nothing replays the call while waiting for consent');
  assert.equal(counts().refresh, afterFailure.refresh);
  result.checks.refreshFailurePromptsNoReplay = true;
  oauth.settings.refresh = 'ok';
  await deliver(await consentRedirect(await authenticate(page, app, 'reauth')));
  await until('re-authenticated', async () => await rowStatus(page) === 'connected', 30000);
  assert.ok((await probe(page, 'after-reauth')).includes(oauth.marker));
  assert.equal(authorizedCalls(), callsBeforeFailure + 1);
  result.checks.reauthAfterRefreshFailure = true;
  await closeApp(app);
  assert.equal((await tokenRows()).length, 1, 'Tokens are persisted after consent');

  // 7. Restart: the stored token is reused with no new registration, consent or exchange.
  const beforeRestart = counts(), requestsBeforeRestart = oauth.requests.length;
  const restarted = await launch();
  await until('restart discovery', () => oauth.requests.slice(requestsBeforeRestart)
    .some(item => item.path === '/mcp' && item.method === 'tools/list' && item.authorized));
  const afterRestart = counts();
  // No consent, code exchange or new token. The legacy extension owner can still
  // register a client during its brief startup before routing moves to the
  // utility (run siU5KR); that registration is recorded, never authorized.
  for (const key of ['authorize', 'codeExchange', 'accessTokens'])
    assert.equal(afterRestart[key], beforeRestart[key], `Restart reuses stored credentials (${key})`);
  assert.deepEqual(await opened(restarted.app), []);
  await selectModel(restarted.page);
  assert.ok((await probe(restarted.page, 'after-restart')).includes(oauth.marker));
  result.observations.restart = { refreshRequests: afterRestart.refresh - beforeRestart.refresh,
    registrations: afterRestart.register - beforeRestart.register,
    rejectedAfterRestart: oauth.requests.slice(requestsBeforeRestart).filter(item => item.path === '/mcp' && item.authorized === false).length };
  result.checks.restartReusesStoredToken = true;
}

async function secretChecks() {
  const { app } = session;
  const backend = await app.evaluate(({ safeStorage }) => ({ backend: safeStorage.getSelectedStorageBackend(),
    available: safeStorage.isEncryptionAvailable() }));
  result.observations.safeStorage = backend;
  assert.equal(backend.backend, 'gnome_libsecret', 'OAuth secrets must use the Secret Service');
  const rows = await readOAuthRows(join(profile, 'User/globalStorage/state.vscdb'));
  result.observations.oauthRows = rows.map(({ key, logical, kind, encryptedPrefix, bytes }) => ({ key, logical, kind, encryptedPrefix, bytes }));
  const secretRows = rows.filter(row => row.kind === 'secret');
  // Issue #9: the legacy extension owner kept its PKCE verifier as a plain global
  // value (mirrored into this store) and in its attempt files. Neither may remain.
  result.observations.plainVerifierRows = rows.filter(row => row.kind === 'global' && row.logical.endsWith('] mcp_code_verifier') && row.bytes > 4)
    .map(row => ({ logical: row.logical, bytes: row.bytes }));
  assert.deepEqual(result.observations.plainVerifierRows, [], 'No PKCE verifier is kept as a plain value');
  const attemptFiles = [];
  for await (const path of (async function* walk(folder) {
    for (const entry of await readdir(folder, { withFileTypes: true }).catch(() => [])) {
      const child = join(folder, entry.name);
      if (entry.isDirectory()) yield* walk(child); else if (/mcp-oauth-attempts\/[^/]+\.json$/.test(child)) yield child;
    }
  })(join(profile, 'User/globalStorage'))) attemptFiles.push({ path: path.replace(directory, '<run>'), verifier: /"codeVerifier"/.test(await readFile(path, 'utf8')) });
  result.observations.attemptFiles = attemptFiles;
  assert.deepEqual(attemptFiles.filter(file => file.verifier), [], 'OAuth attempt files carry no PKCE verifier');
  for (const name of ['mcp_tokens', 'mcp_client_information'])
    assert.ok(secretRows.some(row => ownRow(row, name)), `Missing secret row ${name}`);
  for (const row of secretRows) assert.equal(row.encryptedPrefix, 'v11', `${row.logical} must be encrypted with the keyring key`);
  // The encrypted token row decrypts, in the app, to the live token; only digests leave the app.
  const tokenRow = secretRows.find(row => ownRow(row, 'mcp_tokens'));
  const decrypted = await app.evaluate(({ safeStorage }, data) => {
    const value = JSON.parse(safeStorage.decryptString(Buffer.from(data)));
    return { access: value.access_token, refresh: value.refresh_token };
  }, tokenRow.data);
  assert.equal(secretDigest(decrypted.access), secretDigest(oauth.issued.accessTokens.at(-1)));
  result.checks.tokenRowsEncryptedWithSecretService = true;
  const pids = await familyPids(app.process().pid);
  const findings = await scanForSecrets({ roots: [profile, project], files: [join(profile, 'User/.openvision-local/argv.json')],
    secrets: [...oauth.secrets().map(([kind, value]) => kind === 'static_token' ? [kind, value, { environmentName: 'OV_MCP_STATIC_TOKEN' }] : [kind, value]),
      ['static_header', `Bearer ${oauth.issued.staticToken}`], ['environment_canary', environmentCanary, { environmentName: 'OV_ENV_CANARY' }]], pids });
  result.observations.scan = findings.summary;
  // Issue #9: the app's own environment (the static token variable and an exported
  // canary) must not be persisted either; environment-entry copies are classified
  // for diagnosis only.
  result.observations.environmentEntryCopies = findings.hits.filter(hit => hit.environmentEntryOnly)
    .map(hit => `${hit.kind}: ${hit.where.replace(directory, '<run>')}`);
  assert.deepEqual(findings.hits.map(hit => ({ ...hit, where: hit.where.replace(directory, '<run>') })), [],
    'No OAuth secret, expanded static header, static token or exported environment value may appear on disk or in argv');
  assert.equal(await readFile(mcpConfig, 'utf8'), configText);
  result.checks.noSecretsOnDiskOrArgv = true;
}

try {
  // OAuth credentials need the Secret Service in every mode; --secrets adds the placement checks.
  result.observations.secretService = await secretService();
  await flows();
  if (secrets) await secretChecks();
  assert.deepEqual(oauth.errors, []); assert.deepEqual(provider.errors, []);
  assert.deepEqual(result.pageErrors, []);
  result.status = 'passed';
} catch (error) {
  result.status = 'failed'; result.error = error.stack; process.exitCode = 1;
  if (session && !session.page.isClosed()) {
    await session.page.screenshot({ path: join(directory, 'failure.png'), timeout: 5000 }).catch(() => {});
    await writeFile(join(directory, 'failure.txt'), await session.page.locator('body').innerText({ timeout: 5000 })).catch(() => {});
  }
} finally {
  result.cleanupErrors = [];
  if (session) await closeApp(session.app).catch(error => result.cleanupErrors.push(String(error)));
  result.oauth = oauth.summary(); result.counts = counts();
  await oauth.dispose().catch(error => result.cleanupErrors.push(String(error)));
  await provider.dispose().catch(error => result.cleanupErrors.push(String(error)));
  if (keyring) { keyring.kill('SIGTERM'); await new Promise(done => keyring.exitCode !== null ? done() : keyring.once('exit', done)); }
  if (result.cleanupErrors.length) { result.status = 'failed'; process.exitCode = 1; }
  await writeFile(join(directory, 'result.json'), JSON.stringify(result, null, 2));
  console.log(JSON.stringify({ directory, status: result.status, checks: result.checks, error: result.error,
    cleanupErrors: result.cleanupErrors }, null, 2));
}
