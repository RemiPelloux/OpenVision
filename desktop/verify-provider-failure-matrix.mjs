import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { mkdir, mkdtemp, writeFile, readFile, readdir } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import { DatabaseSync } from 'node:sqlite';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { _electron } from '../tooling/browser.mjs';
import { loadRuntime } from './source-assembly.mjs';
import { verificationSettings } from './verification-profile.mjs';
import { linuxSandboxArguments } from './platform.mjs';
import { fileHash } from './import-files.mjs';
import { createCertificateFailureProviders } from './verify-provider-tls.mjs';
import { enterWorkspace } from './verification-workspace.mjs';

// Native Agent failure-to-history matrix against a controlled loopback provider.
// Every response is a fixture; this is not live inference or provider support.
const secret = 'secret-matrix-fixture-key';
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const { layout } = await loadRuntime(root);
await mkdir(join(root, 'logs'), { recursive: true });
const directory = await mkdtemp(join(root, 'logs/provider-matrix-'));
const profile = join(directory, 'profile'), project = join(directory, 'project'), file = join(project, 'hello.js');
await mkdir(join(profile, 'User'), { recursive: true });
await mkdir(project);
await writeFile(file, 'export const fixture = true;\n');
// The extension host otherwise passes an explicit CA list (bundled roots plus
// fixed Linux system bundle paths), which a disposable CA cannot join without
// changing the machine trust store. Disabling only the system-certificate merge
// in this disposable profile leaves Node's default verification active and lets
// NODE_EXTRA_CA_CERTS in the owned launch environment trust the fixture CA.
await writeFile(join(profile, 'User/settings.json'), JSON.stringify({ ...verificationSettings,
  'git.openRepositoryInParentFolders': 'never', 'http.systemCertificates': false }));
const certificates = await createCertificateFailureProviders(directory);
const guidance = {
  certificate: /The API TLS certificate could not be verified/,
  image: /This model does not support the attached image/,
  tools: /This model does not support the requested tools/,
  interrupted: /The API connection was interrupted/,
  malformed: /not valid OpenAI-compatible streaming data/,
  incomplete: /The provider stream ended before the response finished/,
};
// name → expected visible error and transport-level detail where applicable.
const scenarios = {
  'certificate-expired': { error: guidance.certificate, detail: /CERT_HAS_EXPIRED|certificate has expired/i },
  'certificate-hostname': { error: guidance.certificate, detail: /ERR_TLS_CERT_ALTNAME_INVALID|does not match|altnames/i },
  'partial-disconnect': { partial: true, error: guidance.interrupted },
  'partial-malformed': { partial: true, error: guidance.malformed },
  'partial-stream-error': { partial: true, error: /fixture partial-stream-error \[redacted\]/ },
  'truncated-eof': { partial: true, error: guidance.incomplete },
  'tools-rejected': { error: guidance.tools },
  'image-rejected': { image: true, error: guidance.image },
};
const only = process.argv.find(value => value.startsWith('--only='))?.slice(7).split(',');
const selected = Object.keys(scenarios).filter(name => !only || only.includes(name));
let scenario = 'success';
const requests = [];
function inspect(body, name) {
  const messages = body.messages ?? [];
  const text = value => typeof value === 'string' ? value : JSON.stringify(value ?? '');
  return {
    roles: messages.map(message => message.role),
    promptOccurrences: messages.filter(message => message.role === 'user')
      .reduce((count, message) => count + text(message.content).split(`Trigger ${name}.`).length - 1, 0),
    emptyAssistants: messages.filter(message => message.role === 'assistant' && !message.tool_calls?.length &&
      (message.content === '' || (Array.isArray(message.content) && message.content.length === 0))).length,
    partialReplayed: messages.some(message => message.role === 'assistant' && text(message.content).includes(`partial ${name}`)),
    imageParts: messages.reduce((count, message) => count + (Array.isArray(message.content)
      ? message.content.filter(part => part?.type === 'image_url').length : 0), 0),
    tools: Array.isArray(body.tools) ? body.tools.length : 0,
  };
}
const sse = (response, delta, finish_reason = null) => response.write(`data: ${JSON.stringify({ id: 'fixture-matrix',
  object: 'chat.completion.chunk', model: 'provider-matrix-fixture', choices: [{ index: 0, delta, finish_reason }] })}\n\n`);
const server = createServer(async (request, response) => {
  if (request.url === '/v1/models') {
    response.writeHead(200, { 'content-type': 'application/json' });
    return response.end(JSON.stringify({ data: [{ id: 'provider-matrix-fixture' }] }));
  }
  if (request.url !== '/v1/chat/completions') { response.writeHead(404); return response.end(); }
  const chunks = [];
  for await (const chunk of request) chunks.push(chunk);
  const body = JSON.parse(Buffer.concat(chunks).toString('utf8'));
  const name = scenario.replace(/^(recovery|after-restart):/, '');
  const record = { scenario, authorized: request.headers.authorization === `Bearer ${secret}`, model: body.model, ...inspect(body, name) };
  if (scenario.startsWith('after-restart:')) record.restartPrompts = Object.fromEntries(['stop-partial', 'restart-pending']
    .map(prompt => [prompt, inspect(body, prompt).promptOccurrences]));
  requests.push(record);
  response.on('close', () => { record.socketClosed = true; });
  if (scenario === 'restart-pending') {
    response.writeHead(503, { 'content-type': 'application/json' });
    return response.end(JSON.stringify({ error: { message: `fixture restart-pending ${secret}`, type: 'fixture_error' } }));
  }
  if (scenario === 'certificate-expired' || scenario === 'certificate-hostname') {
    response.writeHead(307, { location: certificates.providers[scenario.slice(12)].url });
    return response.end();
  }
  if (scenario === 'tools-rejected' || scenario === 'image-rejected') {
    // Realistic OpenAI-compatible rejections: no OpenVision-specific error code.
    response.writeHead(400, { 'content-type': 'application/json', 'x-request-id': `fixture-${scenario}` });
    return response.end(JSON.stringify({ error: scenario === 'tools-rejected'
      ? { message: `tools is not supported for this model. ${secret}`, type: 'invalid_request_error', param: 'tools', code: null }
      : { message: `Invalid content type. image_url is only supported by certain models. ${secret}`, type: 'invalid_request_error',
        param: 'messages.[1].content.[1].type', code: null } }));
  }
  response.writeHead(200, { 'content-type': 'text/event-stream' });
  if (['partial-disconnect', 'partial-malformed', 'partial-stream-error', 'truncated-eof', 'stop-partial'].includes(scenario)) {
    sse(response, { role: 'assistant', content: `partial ${scenario} ` });
    if (scenario === 'stop-partial') return;
    await new Promise(resolveWait => setTimeout(resolveWait, 300));
    if (scenario === 'partial-disconnect') return response.destroy();
    if (scenario === 'partial-malformed') return response.end(`data: {"choices":[{"index":0,"delta":{"content":"${secret}\n\n`);
    if (scenario === 'partial-stream-error') return response.end(`data: ${JSON.stringify({ error: {
      message: `fixture partial-stream-error ${secret}`, type: 'fixture_error' } })}\n\n`);
    return response.end();
  }
  const reply = scenario.startsWith('recovery:') ? `fixture recovered ${name}`
    : scenario.startsWith('after-restart:') ? 'fixture after restart' : 'fixture success';
  sse(response, { role: 'assistant', content: reply });
  sse(response, {}, 'stop'); response.end('data: [DONE]\n\n');
});
await new Promise(resolveServer => server.listen(0, '127.0.0.1', resolveServer));
const port = server.address().port;

const result = { checkedAt: new Date().toISOString(), commit: execFileSync('git', ['rev-parse', 'HEAD'], { cwd: root, encoding: 'utf8' }).trim(),
  platform: process.platform, arch: process.arch,
  scope: 'Native Agent with a controlled loopback provider and disposable certificates; fixture responses, not live inference.',
  hashes: Object.fromEntries(await Promise.all([
    ['host', layout.executable], ['agent', join(root, 'source/app/extensions/cursor-agent-exec/dist/main.js')],
    ['agentHost', join(root, 'source/app/extensions/cursor-agent-host/dist/main.js')],
    ['workbench', join(root, 'source/app/out/vs/workbench/workbench.desktop.main.js')],
    ['helper', join(root, 'source/app/extensions/cursor-agent-exec/dist/openvision-provider-errors.cjs')],
    ['verifier', fileURLToPath(import.meta.url)],
  ].map(async ([name, path]) => [name, await fileHash(path)]))),
  certificates: { caSha256: certificates.caSha256, providers: Object.fromEntries(Object.entries(certificates.providers)
    .map(([name, value]) => [name, { ...value.evidence, events: value.events }])) },
  scenarios: {}, requests, success: false };
let app, page;

async function scan(directory, test) {
  const found = { files: 0, matches: [] };
  for (const entry of await readdir(directory, { withFileTypes: true }).catch(error => {
    if (error.code === 'ENOENT') return []; throw error;
  })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) {
      const child = await scan(path, test);
      found.files += child.files; found.matches.push(...child.matches);
    } else if (test(entry.name)) {
      found.files++;
      if ((await readFile(path)).includes(secret)) found.matches.push(path);
    }
  }
  return found;
}
async function launch() {
  // Trust the disposable CA only in this owned process tree, so hostname and
  // expiry checks run after chain validation. Verification stays enabled.
  const env = { ...process.env, NODE_EXTRA_CA_CERTS: certificates.caPath }; delete env.ELECTRON_RUN_AS_NODE;
  app = await _electron.launch({ executablePath: layout.executable, env, timeout: 60000,
    args: ['--user-data-dir', profile, '--extensions-dir', join(directory, 'extensions'), '--new-window',
      '--disable-updates', '--skip-welcome', '--skip-release-notes', '--disable-telemetry',
      '--disable-crash-reporter', ...(process.platform === 'linux' ? await linuxSandboxArguments(layout.host) : []), project, file] });
  page = await app.firstWindow();
  page.setDefaultTimeout(15000);
  await page.locator('.part.titlebar .openvision-local-profile').waitFor({ state: 'attached', timeout: 60000 }); await enterWorkspace(page);
  await page.waitForTimeout(8000);
}
async function closeOwnedApp() {
  if (!app) return;
  const child = app.process(), exited = new Promise(resolveExit => child.once('exit', resolveExit));
  const closing = app.close();
  await page?.getByText('Quit Anyway', { exact: true }).click({ timeout: 3000 }).catch(() => {});
  await closing; if (child.exitCode === null && child.signalCode === null) await exited;
  (result.ownedHostExits ??= []).push({ exitCode: child.exitCode, signalCode: child.signalCode });
  app = undefined;
}
const input = () => page.locator('.aislash-editor-input[contenteditable=true]').filter({ visible: true }).first();
const idle = () => page.locator('.stop-button').filter({ visible: true }).waitFor({ state: 'hidden', timeout: 30000 });
async function composerId() {
  return input().evaluate(element => element.closest('[data-composer-id]')?.getAttribute('data-composer-id'));
}

function persistedTranscript(composer) {
  const db = new DatabaseSync(join(profile, 'User/globalStorage/state.vscdb'), { readOnly: true });
  try {
    const read = key => {
      const row = db.prepare('SELECT value FROM cursorDiskKV WHERE key = ?').get(key);
      return row ? JSON.parse(String(row.value)) : undefined;
    };
    const data = read(`composerData:${composer}`);
    assert.ok(data, 'Expected persisted chat record');
    result.persistedChatState = { status: data.status, abortReason: data.abortReason,
      submitErrorDetails: data.submitErrorDetails === undefined ? undefined : { title: data.submitErrorDetails.title,
        isRetryable: data.submitErrorDetails.isRetryable, openvisionProviderFailure: data.submitErrorDetails.openvisionProviderFailure } };
    return data.fullConversationHeadersOnly.map(header => {
      const bubble = read(`bubbleId:${composer}:${header.bubbleId}`) ?? {};
      return { type: header.type ?? bubble.type, text: bubble.text ?? '',
        hasError: Boolean(bubble.errorDetails ?? bubble.error ?? bubble.isError ?? bubble.errorMessage) };
    });
  } finally { db.close(); }
}

try {
  await launch();
  await page.locator('.part.titlebar a[aria-label$=" Settings"]').click();
  await page.locator('.cursor-settings-sidebar-cell-label').filter({ hasText: /^Models$/ }).locator('..').click();
  await page.locator('.openvision-model-settings').getByRole('button', { name: 'Add Provider', exact: true }).click();
  await page.getByLabel('Provider Name', { exact: true }).fill('Provider failure matrix fixture');
  await page.getByLabel('API Base URL', { exact: true }).fill(`http://127.0.0.1:${port}/v1`);
  await page.getByLabel('API Key', { exact: true }).fill(secret);
  await page.locator('dialog').getByRole('button', { name: 'Save', exact: true }).click();
  await page.locator('dialog').waitFor({ state: 'detached' });
  await page.locator('.tabs-container .tab').filter({ hasText: 'hello.js' }).first().click();
  await page.keyboard.press('ControlOrMeta+Shift+l');
  await page.locator('.vscode-model-picker__trigger-markdown').filter({ visible: true }).first().click();
  await page.getByTestId('model-picker-menu').filter({ visible: true }).locator('[data-model-picker-item-name]')
    .filter({ hasText: 'provider-matrix-fixture' }).click();
  await page.keyboard.press('Escape');
  const source = await composerId();
  for (const name of selected) {
    const expected = scenarios[name], record = result.scenarios[name] = {};
    scenario = name;
    const before = requests.length;
    await input().fill(`Trigger ${name}. Do not use tools.`);
    if (expected.image) {
      await app.evaluate(({ clipboard, nativeImage }) => clipboard.writeImage(nativeImage.createFromBitmap(
        Buffer.alloc(32 * 32 * 4, 160), { width: 32, height: 32 })));
      await input().press('End');
      await input().press('ControlOrMeta+v');
      await page.waitForTimeout(1500);
    }
    await input().press('Enter');
    // Pre-content failures offer Try again; failures after streamed output offer Resume.
    const action = page.getByText(/^(Try again|Resume)$/).filter({ visible: true }).last();
    await action.waitFor({ timeout: 30000 }).catch(error => { record.tryAgainMissing = error.message.split('\n')[0]; });
    await idle();
    await page.waitForTimeout(2500); // no automatic retry within the former SDK delay
    const body = await page.locator('body').innerText();
    record.bodyTail = body.slice(-2500).replaceAll(secret, '[redacted]');
    record.requests = requests.slice(before);
    record.secretInUi = body.includes(secret);
    record.errorMatched = expected.error.test(body);
    if (expected.detail) record.detailMatched = expected.detail.test(body);
    if (expected.partial) record.partialVisible = body.includes(`partial ${name}`);
    record.errorOccurrences = (body.match(new RegExp(expected.error.source, `g${expected.error.flags}`)) ?? []).length;
    assert.equal(record.secretInUi, false, `${name}: credential leaked into UI`);
    assert.equal(record.requests.length, 1, `${name}: exactly one request before explicit retry`);
    assert.equal(record.requests[0].promptOccurrences, 1, `${name}: prompt sent once`);
    if (expected.image) assert.ok(record.requests[0].imageParts > 0, `${name}: the pasted image must be sent as actual input`);
    assert.ok(!record.tryAgainMissing, `${name}: an explicit recovery action must be available`);
    record.recoveryAction = await action.innerText();
    if (expected.partial !== undefined) assert.equal(record.recoveryAction, expected.partial ? 'Resume' : 'Try again');
    assert.ok(record.errorMatched, `${name}: actionable error text`);
    if (expected.detail) assert.ok(record.detailMatched, `${name}: certificate failure detail`);
    scenario = `recovery:${name}`;
    const retryBefore = requests.length;
    await action.click();
    await page.getByText(`fixture recovered ${name}`, { exact: true }).filter({ visible: true }).last().waitFor({ timeout: 30000 });
    await idle();
    record.retryRequests = requests.slice(retryBefore);
    assert.equal(record.retryRequests.length, 1, `${name}: manual retry submits once`);
    assert.equal(record.retryRequests[0].promptOccurrences, 1, `${name}: retry keeps one copy of the prompt`);
    assert.equal(record.retryRequests[0].emptyAssistants, 0, `${name}: retry has no empty assistant`);
    assert.ok(record.retryRequests[0].authorized && record.retryRequests[0].model === 'provider-matrix-fixture');
    record.passed = true;
    console.log(`Native ${name}: ${JSON.stringify({ requests: record.requests.length, retry: record.retryRequests.length,
      partialVisible: record.partialVisible, partialReplayed: record.retryRequests[0].partialReplayed })}`);
  }
  // Stop during a partially streamed answer, then continue the same chat.
  scenario = 'stop-partial';
  const stopBefore = requests.length;
  await input().fill('Trigger stop-partial. Do not use tools.'); await input().press('Enter');
  await page.getByText('partial stop-partial', { exact: false }).filter({ visible: true }).last().waitFor({ timeout: 30000 });
  await page.locator('.stop-button').filter({ visible: true }).first().click();
  await idle();
  const closeDeadline = Date.now() + 5000;
  while (!requests[stopBefore]?.socketClosed && Date.now() < closeDeadline) await page.waitForTimeout(100);
  await page.waitForTimeout(2500);
  result.stopPartial = { requests: requests.length - stopBefore, socketClosed: requests[stopBefore]?.socketClosed === true,
    partialVisible: (await page.locator('body').innerText()).includes('partial stop-partial') };
  assert.equal(result.stopPartial.socketClosed, true, 'Stop must close the upstream socket');
  assert.equal(result.stopPartial.requests, 1, 'Stop must not dispatch another attempt');
  // Leave a pre-content failure unresolved, then restart the application.
  scenario = 'restart-pending';
  const pendingBefore = requests.length;
  await input().fill('Trigger restart-pending. Do not use tools.'); await input().press('Enter');
  await page.getByText(/fixture restart-pending \[redacted\]/).filter({ visible: true }).last().waitFor({ timeout: 30000 });
  await idle();
  await page.waitForTimeout(2500);
  assert.equal(requests.length - pendingBefore, 1, 'Unresolved failure must not retry automatically');
  scenario = 'after-restart:restart-pending';
  await closeOwnedApp();
  const persisted = result.persistedBeforeRestart = persistedTranscript(source);
  const userTurns = persisted.filter(entry => entry.type === 1).map(entry => entry.text);
  for (const name of [...selected, 'stop-partial', 'restart-pending'])
    assert.equal(userTurns.filter(text => text.startsWith(`Trigger ${name}.`)).length, 1, `${name}: user turn persisted once`);
  for (const name of selected.filter(value => scenarios[value].partial))
    assert.ok(persisted.some(entry => entry.type === 2 && entry.text.includes(`partial ${name}`)), `${name}: partial output persisted`);
  assert.ok(persisted.some(entry => entry.type === 2 && entry.text.includes('partial stop-partial')), 'Stopped partial output persisted');
  await launch();
  await page.getByText('Trigger restart-pending.', { exact: false }).filter({ visible: true }).first().waitFor({ timeout: 30000 });
  result.restoredComposer = await composerId();
  const restoredBody = await page.locator('body').innerText();
  result.afterRestart = { sameComposer: result.restoredComposer === source,
    failureVisible: /fixture restart-pending \[redacted\]/.test(restoredBody),
    tryAgainVisible: await page.getByText('Try again', { exact: true }).filter({ visible: true }).count() > 0 };
  assert.equal(result.afterRestart.sameComposer, true, 'Restart must restore the same chat');
  assert.equal(restoredBody.includes(secret), false, 'Restored UI must not contain the credential');
  const followBefore = requests.length;
  if (result.afterRestart.tryAgainVisible) {
    result.afterRestart.recovery = 'Try again';
    await page.getByText('Try again', { exact: true }).filter({ visible: true }).last().click();
  } else {
    result.afterRestart.recovery = 'follow-up';
    await input().fill('Continue after restart. Do not use tools.'); await input().press('Enter');
  }
  await page.getByText('fixture after restart', { exact: true }).filter({ visible: true }).last().waitFor({ timeout: 30000 });
  await idle();
  await page.waitForTimeout(2500);
  const follow = requests.slice(followBefore);
  assert.equal(follow.length, 1, 'Post-restart recovery sends once');
  Object.assign(result.afterRestart, { roles: follow[0].roles, emptyAssistants: follow[0].emptyAssistants,
    promptOccurrences: follow[0].restartPrompts });
  assert.equal(follow[0].emptyAssistants, 0, 'Restored history has no empty assistant');
  assert.deepEqual(follow[0].restartPrompts, { 'stop-partial': 1, 'restart-pending': 1 },
    'Stopped and failed prompts each appear once in restored history');
  await page.screenshot({ path: join(directory, 'native-provider-matrix.png') });
  result.success = Object.values(result.scenarios).every(value => value.passed);
} catch (error) {
  result.error = error.message;
  if (page && !page.isClosed()) {
    await page.screenshot({ path: join(directory, 'failure.png') }).catch(() => {});
    await writeFile(join(directory, 'failure.txt'), (await page.locator('body').innerText()).replaceAll(secret, '[redacted]')).catch(() => {});
  }
} finally {
  const cleanupErrors = [];
  await certificates.close().catch(() => cleanupErrors.push('TLS fixture cleanup failed'));
  server.closeAllConnections();
  await new Promise(resolveClose => server.close(resolveClose));
  try {
    if (app && page && !page.isClosed()) {
      await page.keyboard.press('Escape').catch(() => {});
      const stop = page.locator('.stop-button').filter({ visible: true });
      if (await stop.count()) await stop.first().click().catch(() => cleanupErrors.push('Native Stop cleanup failed'));
    }
    await closeOwnedApp();
  } catch { cleanupErrors.push('Owned host cleanup failed'); }
  const logs = await scan(join(profile, 'logs'), name => name.endsWith('.log'));
  const storage = await scan(join(profile, 'User'), name => /\.(vscdb|vscdb-wal|json)$/.test(name));
  result.secretLogMatches = logs.matches; result.scannedLogFiles = logs.files;
  result.secretStorageMatches = storage.matches; result.scannedStorageFiles = storage.files;
  if (cleanupErrors.length || logs.matches.length || storage.matches.length || !logs.files ||
    result.ownedHostExits?.some(value => value.exitCode !== 0)) result.success = false;
  result.cleanupErrors = cleanupErrors;
  await writeFile(join(directory, 'result.json'), JSON.stringify(result, null, 2) + '\n');
  console.log(JSON.stringify({ directory, success: result.success, cases: Object.keys(result.scenarios).length,
    passed: Object.entries(result.scenarios).filter(([, value]) => value.passed).map(([name]) => name),
    requests: requests.length, stopPartial: result.stopPartial, afterRestart: result.afterRestart,
    scannedLogFiles: logs.files, secretLogMatches: logs.matches, scannedStorageFiles: storage.files,
    secretStorageMatches: storage.matches, ownedHostExits: result.ownedHostExits, error: result.error, cleanupErrors }, null, 2));
}
if (!result.success) process.exitCode = 1;
