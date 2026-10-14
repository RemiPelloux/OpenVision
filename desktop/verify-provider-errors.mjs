import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { mkdir, mkdtemp, writeFile, readFile, readdir } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { _electron } from '../tooling/browser.mjs';
import { loadRuntime } from './source-assembly.mjs';
import { verificationSettings } from './verification-profile.mjs';
import { linuxSandboxArguments } from './platform.mjs';
import { fileHash } from './import-files.mjs';
import { createUntrustedProvider } from './verify-provider-tls.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const { layout } = await loadRuntime(root);
const directory = await mkdtemp(join(root, 'logs/provider-errors-'));
const profile = join(directory, 'profile');
const project = join(directory, 'project');
const file = join(project, 'hello.js');
await mkdir(join(profile, 'User'), { recursive: true });
await mkdir(project);
await writeFile(file, 'export const fixture = true;\n');
await writeFile(join(profile, 'User/settings.json'), JSON.stringify({ ...verificationSettings,
  'git.openRepositoryInParentFolders': 'never' }));
const untrustedProvider = await createUntrustedProvider(directory);

const scenarios = [
  ['unauthorized', 401], ['forbidden', 403], ['rate-limited', 429],
  ['server-error', 503], ['bad-gateway', 502], ['internal-error', 500],
  ['malformed-stream', 200], ['stream-error', 200],
  ['disconnected', 0],
  ['dns-failure', 0], ['tls-failure', 0], ['certificate-trust', 0],
  ['context-limit', 400], ['unsupported-tools', 400], ['unsupported-images', 400],
  ['oversized-error', 503], ['stalled-error', 429],
];
let scenario = 'success';
const requests = [];
const server = createServer(async (request, response) => {
  if (request.url === '/v1/models') {
    response.writeHead(200, { 'content-type': 'application/json' });
    return response.end(JSON.stringify({ data: [{ id: 'provider-failure-fixture' }] }));
  }
  if (request.url !== '/v1/chat/completions') { response.writeHead(404); return response.end(); }
  const chunks = [];
  for await (const chunk of request) chunks.push(chunk);
  const body = JSON.parse(Buffer.concat(chunks).toString('utf8'));
  const record = { scenario, authorized: request.headers.authorization === 'Bearer secret-fixture-key', model: body.model };
  if (scenario.startsWith('recovery:')) record.originalPromptRetained = JSON.stringify(body.messages).includes(`Trigger ${scenario.slice(9)}`);
  requests.push(record);
  if (['dns-failure', 'tls-failure', 'certificate-trust'].includes(scenario)) {
    response.writeHead(307, { location: scenario === 'certificate-trust' ? untrustedProvider.url : scenario === 'dns-failure'
      ? 'http://openvision-provider-fixture.invalid/v1/chat/completions'
      : `https://127.0.0.1:${server.address().port}/v1/chat/completions` });
    return response.end();
  }
  if (scenario === 'disconnected') return response.destroy();
  if (scenario === 'stop') {
    response.writeHead(200, { 'content-type': 'text/event-stream' });
    response.write(`data: ${JSON.stringify({ choices: [{ index: 0, delta: { role: 'assistant', content: 'Waiting for Stop' }, finish_reason: null }] })}\n\n`);
    response.on('close', () => { record.socketClosed = true; });
    return;
  }
  if (scenario === 'oversized-error' || scenario === 'stalled-error') {
    response.writeHead(scenario === 'oversized-error' ? 503 : 429, { 'content-type': 'application/json' });
    response.write('{"error":{"message":"secret-fixture-key');
    let timer, bytes = 0;
    if (scenario === 'oversized-error') timer = setInterval(() => {
      if (bytes >= 1024 * 1024) return clearInterval(timer);
      response.write('x'.repeat(8192)); bytes += 8192;
    }, 10);
    response.on('close', () => { clearInterval(timer); record.socketClosed = true; });
    return;
  }
  if (scenario === 'malformed-stream' || scenario === 'stream-error') {
    response.writeHead(200, { 'content-type': 'text/event-stream' });
    const message = `fixture ${scenario} secret-fixture-key`;
    return response.end(`data: ${JSON.stringify(scenario === 'stream-error' ? { error: { message, type: 'fixture_error' } } :
      { choices: [{ delta: { content: message } }] })}\n\ndata: [DONE]\n\n`);
  }
  if (scenario !== 'success' && !scenario.startsWith('recovery:')) {
    response.writeHead(Number(scenarios.find(([name]) => name === scenario)?.[1] ?? 500),
      { 'content-type': 'application/json', 'x-request-id': `fixture-${scenario}` });
    const code = { 'context-limit': 'context_length_exceeded', 'unsupported-tools': 'unsupported_tools', 'unsupported-images': 'unsupported_image' }[scenario];
    return response.end(JSON.stringify({ error: { message: `fixture ${scenario} secret-fixture-key`, type: 'fixture_error', code } }));
  }
  response.writeHead(200, { 'content-type': 'text/event-stream' });
  const event = (delta, finish_reason = null) => response.write(`data: ${JSON.stringify({
    id: 'fixture-response', object: 'chat.completion.chunk', model: 'provider-failure-fixture', choices: [{ index: 0, delta, finish_reason }],
  })}\n\n`);
  event({ role: 'assistant', content: scenario.startsWith('recovery:') ? `fixture recovered ${scenario.slice(9)}` : 'fixture success' });
  event({}, 'stop'); response.end('data: [DONE]\n\n');
});
await new Promise(resolveServer => server.listen(0, '127.0.0.1', resolveServer));
const port = server.address().port;

const result = { checkedAt: new Date().toISOString(), commit: execFileSync('git', ['rev-parse', 'HEAD'],
  { cwd: root, encoding: 'utf8' }).trim(), platform: process.platform, arch: process.arch,
  scope: 'Native Windows Agent with a local HTTP failure fixture; no live-provider compatibility claim.',
  hashes: Object.fromEntries(await Promise.all([
    ['host', layout.executable], ['agent', join(root, 'source/app/extensions/cursor-agent-exec/dist/main.js')],
    ['workbench', join(root, 'source/app/out/vs/workbench/workbench.desktop.main.js')],
    ['helper', join(root, 'source/app/extensions/cursor-agent-exec/dist/openvision-provider-errors.cjs')],
    ['verifier', fileURLToPath(import.meta.url)],
  ].map(async ([name, path]) => [name, await fileHash(path)]))),
  scenarios: {}, requests: [], success: false, certificate: untrustedProvider.evidence };
let app, page;

async function scanLogs(directory) {
  const result = { files: 0, matches: [] };
  for (const entry of await readdir(directory, { withFileTypes: true }).catch(error => {
    if (error.code === 'ENOENT') return []; throw error;
  })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) {
      const child = await scanLogs(path);
      result.files += child.files; result.matches.push(...child.matches);
    } else if (entry.name.endsWith('.log')) {
      result.files++;
      if ((await readFile(path, 'utf8')).includes('secret-fixture-key')) result.matches.push(path);
    }
  }
  return result;
}
try {
  const env = { ...process.env }; delete env.ELECTRON_RUN_AS_NODE;
  app = await _electron.launch({ executablePath: layout.executable, env, timeout: 60000,
    args: ['--user-data-dir', profile, '--extensions-dir', join(directory, 'extensions'), '--new-window',
      '--disable-updates', '--skip-welcome', '--skip-release-notes', '--disable-telemetry',
      '--disable-crash-reporter', ...(process.platform === 'linux' ? await linuxSandboxArguments(layout.host) : []), project, file] });
  page = await app.firstWindow();
  page.setDefaultTimeout(15000);
  await page.locator('.part.titlebar .openvision-local-profile').waitFor({ timeout: 60000 });
  await page.waitForTimeout(8000);
  await page.locator('.part.titlebar a[aria-label$=" Settings"]').click();
  await page.locator('.cursor-settings-sidebar-cell-label').filter({ hasText: /^Models$/ }).locator('..').click();
  const settings = page.locator('.openvision-model-settings');
  await settings.getByRole('button', { name: 'Add Provider', exact: true }).click();
  await page.getByLabel('Provider Name', { exact: true }).fill('Provider failure fixture');
  await page.getByLabel('API Base URL', { exact: true }).fill(`http://127.0.0.1:${port}/v1`);
  await page.getByLabel('API Key', { exact: true }).fill('secret-fixture-key');
  await page.locator('dialog').getByRole('button', { name: 'Save', exact: true }).click();
  await page.locator('dialog').waitFor({ state: 'detached' });
  await page.locator('.tabs-container .tab').filter({ hasText: 'hello.js' }).first().click();
  await page.keyboard.press('ControlOrMeta+Shift+l');
  await page.locator('.vscode-model-picker__trigger-markdown').filter({ visible: true }).first().click();
  await page.getByTestId('model-picker-menu').filter({ visible: true }).locator('[data-model-picker-item-name]')
    .filter({ hasText: 'provider-failure-fixture' }).click();
  await page.keyboard.press('Escape');
  const input = page.locator('.aislash-editor-input[contenteditable=true]').filter({ visible: true }).first();
  for (const [name] of scenarios) {
    scenario = name;
    const before = requests.length;
    await input.fill(`Trigger ${name}. Do not use tools.`);
    await input.press('Enter');
    const expected = { disconnected: /Cannot connect to API/, 'dns-failure': /The API hostname could not be resolved/,
      'tls-failure': /The API server could not establish HTTPS/, 'certificate-trust': /The API TLS certificate could not be verified/,
      'oversized-error': /Provider error details exceeded 65536 bytes/,
      'stalled-error': /Timed out reading provider error details/ }[name] ?? new RegExp(`fixture ${name} \\[redacted\\]`);
    await page.getByText(expected).filter({ visible: true }).last().waitFor({ timeout: 30000 });
    await page.locator('.stop-button').filter({ visible: true }).waitFor({ state: 'hidden', timeout: 30000 });
    // Exceed the SDK's former initial retry delay; don't switch fixtures while an attempt is active.
    await page.waitForTimeout(2500);
    const body = await page.locator('body').innerText();
    const observed = requests.slice(before);
    result.scenarios[name] = { status: scenarios.find(([value]) => value === name)[1], requests: observed,
      bodyTail: body.slice(-3000).replaceAll('secret-fixture-key', '[redacted]'), containsSecret: body.includes('secret-fixture-key') };
    assert.equal(body.includes('secret-fixture-key'), false, `${name}: credential leaked into UI`);
    assert.equal(observed.length, 1, `${name}: duplicate automatic attempts`);
    assert.ok(observed.every(request => request.scenario === name && request.authorized && request.model === 'provider-failure-fixture'));
    if (name === 'certificate-trust') {
      assert.match(body, /DEPTH_ZERO_SELF_SIGNED_CERT|self.signed certificate/i);
      assert.ok(untrustedProvider.evidence.events.every(event => event.event !== 'unexpected-http-request'));
    }
    if (['oversized-error', 'stalled-error'].includes(name)) assert.equal(observed[0].socketClosed, true);
    scenario = `recovery:${name}`;
    const recoveryBefore = requests.length;
    await page.getByText('Try again', { exact: true }).filter({ visible: true }).last().click();
    await page.getByText(`fixture recovered ${name}`, { exact: true }).filter({ visible: true }).last().waitFor({ timeout: 30000 });
    await page.locator('.stop-button').filter({ visible: true }).waitFor({ state: 'hidden', timeout: 30000 });
    assert.equal(requests.length - recoveryBefore, 1, `${name}: manual retry must submit once`);
    assert.ok(requests[recoveryBefore].originalPromptRetained, `${name}: manual retry lost its original prompt`);
    assert.ok(requests[recoveryBefore].authorized && requests[recoveryBefore].model === 'provider-failure-fixture');
    result.scenarios[name].manualRetryVerified = true;
    console.log(`Native ${name}: terminal error, one request, credential redacted`);
  }
  server.closeAllConnections();
  await new Promise(resolveClose => server.close(resolveClose));
  const offlineBefore = requests.length;
  await input.fill('Trigger offline. Do not use tools.'); await input.press('Enter');
  await page.getByText(/Cannot connect to API:.*ECONNREFUSED/).filter({ visible: true }).last().waitFor({ timeout: 30000 });
  await page.locator('.stop-button').filter({ visible: true }).waitFor({ state: 'hidden', timeout: 30000 });
  assert.equal(requests.length, offlineBefore);
  await new Promise((resolveListen, reject) => {
    server.once('error', reject);
    server.listen(port, '127.0.0.1', () => { server.off('error', reject); resolveListen(); });
  });
  scenario = 'recovery:offline';
  await page.getByText('Try again', { exact: true }).filter({ visible: true }).last().click();
  await page.getByText('fixture recovered offline', { exact: true }).filter({ visible: true }).last().waitFor({ timeout: 30000 });
  await page.locator('.stop-button').filter({ visible: true }).waitFor({ state: 'hidden', timeout: 30000 });
  assert.equal(requests.length - offlineBefore, 1);
  assert.ok(requests[offlineBefore].originalPromptRetained);
  result.offlineRecovery = true;
  scenario = 'stop';
  const stopBefore = requests.length;
  await input.fill('Wait for cancellation.'); await input.press('Enter');
  await page.getByText('Waiting for Stop', { exact: true }).filter({ visible: true }).last().waitFor({ timeout: 30000 });
  await page.locator('.stop-button').filter({ visible: true }).first().click();
  await page.locator('.stop-button').filter({ visible: true }).waitFor({ state: 'hidden', timeout: 15000 });
  const cancelDeadline = Date.now() + 5000;
  while (!requests[stopBefore]?.socketClosed && Date.now() < cancelDeadline) await page.waitForTimeout(100);
  assert.equal(requests[stopBefore]?.socketClosed, true, 'Stop must close the upstream streaming socket');
  assert.equal(requests.length - stopBefore, 1, 'Stop must not dispatch another attempt');
  result.stopVerified = true;
  scenario = 'success';
  const before = requests.length;
  await input.fill('Try again now. Do not use tools.'); await input.press('Enter');
  await page.getByText('fixture success', { exact: true }).filter({ visible: true }).last().waitFor({ timeout: 30000 });
  await page.locator('.stop-button').filter({ visible: true }).waitFor({ state: 'hidden', timeout: 30000 });
  assert.equal(requests.length - before, 1);
  result.manualRecovery = true;
  scenario = 'forbidden';
  const dismissBefore = requests.length;
  await input.fill('Trigger failure dismissal.'); await input.press('Enter');
  await page.getByText(/fixture forbidden \[redacted\]/).filter({ visible: true }).last().waitFor({ timeout: 30000 });
  await page.locator('.stop-button').filter({ visible: true }).waitFor({ state: 'hidden', timeout: 30000 });
  await page.locator('.composer-warning-popup-close-button').filter({ visible: true }).last().click();
  await page.getByText('Try again', { exact: true }).filter({ visible: true }).waitFor({ state: 'hidden' });
  await page.waitForTimeout(2500);
  assert.equal(requests.length - dismissBefore, 1, 'Dismissing an error must not issue a request');
  assert.equal(await page.getByText(/fixture forbidden \[redacted\]/).filter({ visible: true }).count(), 0);
  result.dismissalVerified = true;
  await page.screenshot({ path: join(directory, 'native-provider-errors.png') });
  result.success = true;
} catch (error) {
  result.error = error.message;
  if (page && !page.isClosed()) {
    await page.screenshot({ path: join(directory, 'failure.png') }).catch(() => {});
    await writeFile(join(directory, 'failure.txt'), (await page.locator('body').innerText()).replaceAll('secret-fixture-key', '[redacted]')).catch(() => {});
  }
} finally {
  const cleanupErrors = [];
  await untrustedProvider.close().catch(() => cleanupErrors.push('TLS fixture cleanup failed'));
  server.closeAllConnections();
  await new Promise(resolveClose => server.close(resolveClose));
  try {
    if (app) {
      try {
        if (page && !page.isClosed()) {
          await page.keyboard.press('Escape');
          const stop = page.locator('.stop-button').filter({ visible: true });
          if (await stop.count()) await stop.first().click();
          await stop.waitFor({ state: 'hidden', timeout: 15000 });
        }
      } catch { cleanupErrors.push('Native Stop cleanup failed'); }
      const child = app.process();
      const exited = new Promise(resolveExit => child.once('exit', resolveExit));
      const closing = app.close();
      await page?.getByText('Quit Anyway', { exact: true }).click({ timeout: 3000 }).catch(() => {});
      await closing;
      if (child.exitCode === null && child.signalCode === null) await exited;
      result.ownedHostExit = { exitCode: child.exitCode, signalCode: child.signalCode };
    }
  } catch { cleanupErrors.push('Owned host cleanup failed');
  } finally {
    const logs = await scanLogs(join(profile, 'logs'));
    result.secretLogMatches = logs.matches; result.scannedLogFiles = logs.files;
    if (cleanupErrors.length || logs.matches.length || !logs.files || result.ownedHostExit?.exitCode !== 0) result.success = false;
    result.cleanupErrors = cleanupErrors;
    result.requests = requests;
    await writeFile(join(directory, 'result.json'), JSON.stringify(result, null, 2) + '\n');
    console.log(JSON.stringify({ directory, success: result.success, cases: Object.keys(result.scenarios).length,
      requests: result.requests.length, offlineRecovery: result.offlineRecovery, stopVerified: result.stopVerified,
      dismissalVerified: result.dismissalVerified, scannedLogFiles: result.scannedLogFiles,
      secretLogMatches: result.secretLogMatches, ownedHostExit: result.ownedHostExit,
      error: result.error, cleanupErrors: result.cleanupErrors }, null, 2));
  }
}
if (!result.success) process.exitCode = 1;
