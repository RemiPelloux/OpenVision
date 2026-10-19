import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { mkdir, mkdtemp, writeFile } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { _electron } from '../tooling/browser.mjs';
import { loadRuntime } from './source-assembly.mjs';
import { verificationSettings } from './verification-profile.mjs';
import { fileHash } from './import-files.mjs';
import { enterWorkspace } from './verification-workspace.mjs';

const root = resolve(import.meta.dirname, '..'), { layout } = await loadRuntime(root);
const directory = await mkdtemp(join(root, 'logs/reasoning-capabilities-'));
const profile = join(directory, 'profile'), project = join(directory, 'project');
await mkdir(join(profile, 'User'), { recursive: true }); await mkdir(project);
await writeFile(join(profile, 'User/settings.json'), JSON.stringify(verificationSettings));
const file = join(project, 'example.js'); await writeFile(file, '// Reasoning capability verification\n');
let phase = 'ultra', levels = ['low', 'ultra'], failures = [];
const result = { success: false, checkedAt: new Date().toISOString(), platform: process.platform,
  scope: 'Native capability discovery, reasoning UI and retry/resume with a simulated API; no live inference claim.',
  errors: [], requests: [], hostExits: [], retries: {}, hashes: Object.fromEntries(await Promise.all(['desktop/model-catalog.js',
    'desktop/model-providers.js', 'desktop/model-reasoning.js', 'desktop/verify-reasoning-capabilities.mjs',
    'source/app/out/vs/workbench/workbench.desktop.main.js'].map(async path => [path, await fileHash(join(root, path))]))) };
const server = createServer(async (request, response) => {
  if (request.headers.authorization !== 'Bearer capability-fixture') { response.writeHead(401); response.end(); return; }
  if (request.url === '/v1/models') {
    response.setHeader('content-type', 'application/json'); response.end(JSON.stringify({ data: [{ id: 'custom-thinker', name: 'Custom Thinker',
      ...(levels !== undefined ? { capabilities: { reasoning_effort: levels } } : {}) }] })); return;
  }
  const chunks = []; for await (const chunk of request) chunks.push(chunk);
  const body = JSON.parse(Buffer.concat(chunks));
  const failure = failures.shift();
  result.requests.push({ phase, model: body.model, reasoning: body.reasoning_effort ?? body.reasoning?.effort, ...(failure ? { failure } : {}) });
  if (failure === '503') {
    response.writeHead(503, { 'content-type': 'application/json' });
    return response.end(JSON.stringify({ error: { message: `fixture 503 ${phase}`, type: 'fixture_error' } }));
  }
  if (failure === 'nofinish') {
    // Partial output, then the stream ends without a finish reason or [DONE].
    response.writeHead(200, { 'content-type': 'text/event-stream' });
    response.write(`data: ${JSON.stringify({ id: 'capability', choices: [{ index: 0, delta: { role: 'assistant', content: `partial ${phase} ` }, finish_reason: null }] })}\n\n`);
    await new Promise(resolveWait => setTimeout(resolveWait, 300)); return response.end();
  }
  response.writeHead(200, { 'content-type': 'text/event-stream' });
  for (const [delta, finish_reason] of [[{ role: 'assistant', content: `Verified ${phase}.` }, null], [{}, 'stop']])
    response.write(`data: ${JSON.stringify({ id: 'capability', choices: [{ index: 0, delta, finish_reason }] })}\n\n`);
  response.end('data: [DONE]\n\n');
});
await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
let app, page;
const trigger = () => page.locator('.vscode-model-picker__trigger-markdown').filter({ visible: true }).first();
async function dismissMenu() {
  await page.mouse.move(0, 0);
  for (let attempt = 0; attempt < 4; attempt++) {
    if (!await page.locator('[data-component="menu-backdrop"]').filter({ visible: true }).count()) break;
    await page.keyboard.press('Escape');
  }
  await page.locator('[data-component="menu-backdrop"]').filter({ visible: true }).waitFor({ state: 'hidden' });
}
async function editor() { await page.locator('.tabs-container .tab').filter({ hasText: 'example.js' }).first().click(); }
async function settings() {
  await dismissMenu();
  const tab = page.locator('.tabs-container .tab').filter({ hasText: 'OpenVision Settings' });
  if (await tab.count()) await tab.first().click();
  else {
    await page.locator('.part.titlebar a[aria-label$=" Settings"]').click();
    await page.locator('.cursor-settings-sidebar-cell-label').filter({ hasText: /^Models$/ }).locator('..').click();
  }
}
async function menu() {
  await editor(); await trigger().click();
  const menu = page.getByTestId('model-picker-menu').filter({ visible: true });
  const row = menu.getByRole('menuitem').filter({ has: page.locator('[data-model-picker-item-name]') }).first();
  await row.focus(); await row.press('ArrowRight');
  const submenu = page.getByTestId('parameter-submenu').filter({ visible: true }).first();
  await submenu.waitFor();
  return submenu;
}
async function infer(label) {
  phase = label;
  const input = page.locator('.aislash-editor-input[contenteditable=true]').filter({ visible: true }).first();
  await input.fill(`Reply Verified ${label}. Do not use tools.`); await input.press('Enter');
  await page.getByText(`Verified ${label}.`, { exact: true }).filter({ visible: true }).first().waitFor({ timeout: 60000 });
  await page.locator('.stop-button').filter({ visible: true }).waitFor({ state: 'hidden' });
}
async function blocked(label, effort = 'ultra') {
  phase = label;
  const before = result.requests.length;
  const input = page.locator('.aislash-editor-input[contenteditable=true]').filter({ visible: true }).first();
  await input.fill(`Reply Verified ${label}. Do not use tools.`); await input.press('Enter');
  await page.getByText(`Reasoning level "${effort}" is no longer available`, { exact: false }).filter({ visible: true }).first().waitFor({ timeout: 30000 });
  await page.locator('.stop-button').filter({ visible: true }).waitFor({ state: 'hidden' });
  assert.equal(result.requests.length, before, 'Invalid effort must not contact inference');
}
// A provider failure, then the explicit recovery action: the same effort, one request per attempt, no automatic retry.
async function failThenRecover(label, failure, action, effort, { restart = false } = {}) {
  phase = label; failures = [failure];
  const before = result.requests.length;
  const input = page.locator('.aislash-editor-input[contenteditable=true]').filter({ visible: true }).first();
  await input.fill(`Reply Verified ${label}. Do not use tools.`); await input.press('Enter');
  let recovery = page.getByText(action, { exact: true }).filter({ visible: true }).last();
  await recovery.waitFor({ timeout: 30000 });
  await page.locator('.stop-button').filter({ visible: true }).waitFor({ state: 'hidden' });
  await page.waitForTimeout(2500); // no automatic retry within the former SDK delay
  const failed = result.requests.slice(before);
  assert.deepEqual(failed.map(request => [request.reasoning, request.failure]), [[effort, failure]], `${label}: one failed request with the selected effort`);
  const record = result.retries[label] = { failure, action, effort, failedRequests: failed.length };
  if (restart) {
    await close(); const restored = result.requests.length; await launch(); await editor();
    await page.getByText(`Reply Verified ${label}.`, { exact: false }).filter({ visible: true }).first().waitFor({ timeout: 30000 });
    recovery = page.getByText(action, { exact: true }).filter({ visible: true }).last();
    await recovery.waitFor({ timeout: 15000 }); await page.waitForTimeout(2500);
    record.requestsOnRestore = result.requests.length - restored;
    assert.equal(record.requestsOnRestore, 0, `${label}: restoring the failure sends nothing`);
  }
  const retryBefore = result.requests.length;
  await recovery.click();
  await page.getByText(`Verified ${label}.`, { exact: true }).filter({ visible: true }).first().waitFor({ timeout: 60000 });
  await page.locator('.stop-button').filter({ visible: true }).waitFor({ state: 'hidden' });
  await page.waitForTimeout(2500);
  const retried = result.requests.slice(retryBefore);
  record.retryRequests = retried.map(request => request.reasoning);
  assert.deepEqual(record.retryRequests, [effort], `${label}: ${action} sends exactly once with the same effort`);
}
async function choose(label) {
  await menu();
  await page.getByText('Reasoning', { exact: true }).filter({ visible: true }).last().hover();
  await page.getByText(label, { exact: true }).filter({ visible: true }).last().click();
  await dismissMenu();
}
async function discover(next) {
  levels = next; await settings();
  await page.getByRole('button', { name: 'Discover Models', exact: true }).click();
  await page.waitForFunction(() => document.querySelector('.openvision-model-settings')?.dataset.busy === 'false');
}
async function launch() {
  const env = { ...process.env }; delete env.ELECTRON_RUN_AS_NODE;
  app = await _electron.launch({ executablePath: layout.executable, env, timeout: 60000,
    args: ['--user-data-dir', profile, '--extensions-dir', join(directory, 'extensions'), '--new-window',
      '--disable-updates', '--skip-welcome', '--skip-release-notes', '--disable-telemetry', '--disable-crash-reporter', project, file] });
  page = await app.firstWindow(); page.setDefaultTimeout(15000); page.on('pageerror', error => result.errors.push(error.message));
  await page.locator('.part.titlebar .openvision-local-profile').waitFor({ state: 'attached', timeout: 60000 }); await enterWorkspace(page); await page.waitForTimeout(8000);
}
async function close() {
  if (!app) return;
  const child = app.process();
  const closing = app.close();
  await page.getByText('Quit Anyway', { exact: true }).click({ timeout: 3000 }).catch(error => {
    if (!error.message.includes('closed') && !error.message.includes('Timeout')) throw error;
  });
  await closing;
  result.hostExits.push({ pid: child.pid, exitCode: child.exitCode, signalCode: child.signalCode });
  assert.equal(child.exitCode, 0);
  app = undefined;
}
try {
  await launch();
  await settings(); await page.getByRole('button', { name: 'Add Provider', exact: true }).click();
  await page.getByLabel('Provider Name', { exact: true }).fill('Capability fixture');
  await page.getByLabel('API Base URL', { exact: true }).fill(`http://127.0.0.1:${server.address().port}/v1`);
  await page.getByLabel('API Key', { exact: true }).fill('capability-fixture');
  await page.locator('dialog').getByRole('button', { name: 'Save', exact: true }).click();
  await page.locator('dialog').waitFor({ state: 'detached' });
  await page.getByText('Provider-declared · Unverified', { exact: true }).waitFor();
  const submenu = await menu();
  await submenu.getByTestId('parameter-submenu-description').getByText(/Provider-declared · Unverified/).waitFor();
  result.visibleUnverifiedStatus = true;
  await page.screenshot({ path: join(directory, 'unverified-reasoning.png') });
  await page.getByText('Reasoning', { exact: true }).filter({ visible: true }).last().hover();
  await page.getByText('Ultra', { exact: true }).filter({ visible: true }).last().click();
  await dismissMenu();
  await infer('ultra'); assert.equal(result.requests.at(-1).reasoning, 'ultra');
  await failThenRecover('ultra-503', '503', 'Try again', 'ultra');
  await failThenRecover('ultra-incomplete', 'nofinish', 'Resume', 'ultra');
  result.malformedDiscoveryErrors = [];
  for (const invalid of [['low', { id: 'ultra', value: 7 }], 'high', null]) {
    await discover(invalid);
    const status = page.locator('.openvision-model-settings .openvision-api-settings > .openvision-model-status');
    await status.getByText(/invalid reasoning metadata/).waitFor();
    result.malformedDiscoveryErrors.push(await status.innerText());
    await editor(); await trigger().getByText('Custom Thinker · Ultra', { exact: true }).waitFor();
  }
  await close(); await launch(); await editor();
  await trigger().getByText('Custom Thinker · Ultra', { exact: true }).waitFor();
  await infer('malformed-retained'); assert.equal(result.requests.at(-1).reasoning, 'ultra');
  result.malformedDiscoveryRetainedAcrossRestart = true;
  phase = 'removed-before-retry'; failures = ['503'];
  const removedBefore = result.requests.length;
  const retryInput = page.locator('.aislash-editor-input[contenteditable=true]').filter({ visible: true }).first();
  await retryInput.fill('Reply Verified removed-before-retry. Do not use tools.'); await retryInput.press('Enter');
  await page.getByText('Try again', { exact: true }).filter({ visible: true }).last().waitFor({ timeout: 30000 });
  await page.locator('.stop-button').filter({ visible: true }).waitFor({ state: 'hidden' });
  assert.deepEqual(result.requests.slice(removedBefore).map(request => request.reasoning), ['ultra']);
  await discover(['low', 'high']);
  await editor();
  const retryAfterRemoval = result.requests.length;
  await page.getByText('Try again', { exact: true }).filter({ visible: true }).last().click();
  await page.getByText('Reasoning level "ultra" is no longer available', { exact: false }).filter({ visible: true }).first().waitFor({ timeout: 30000 });
  await page.locator('.stop-button').filter({ visible: true }).waitFor({ state: 'hidden' });
  await page.waitForTimeout(2500);
  result.retries['removed-before-retry'] = { requestsAfterRemoval: result.requests.length - retryAfterRemoval };
  assert.equal(result.requests.length, retryAfterRemoval, 'A retry after the level was removed must not contact inference');
  await page.waitForFunction(() => [...document.querySelectorAll('.vscode-model-picker__trigger-markdown')]
    .some(node => node.textContent.includes('(unavailable)')));
  result.selectionAfterCapabilityChange = await trigger().innerText();
  await page.screenshot({ path: join(directory, 'unavailable-selection.png') });
  await blocked('changed'); result.changedChoiceBlocked = true;
  await close(); await launch(); await editor();
  await trigger().getByText(/unavailable/).waitFor();
  await blocked('restart'); result.invalidChoiceRetainedAfterRestart = true;
  await choose('High'); await infer('replacement');
  assert.equal(result.requests.at(-1).reasoning, 'high');
  await failThenRecover('high-503', '503', 'Try again', 'high');
  await failThenRecover('high-incomplete', 'nofinish', 'Resume', 'high');
  await failThenRecover('high-restart', 'nofinish', 'Resume', 'high', { restart: true });
  await failThenRecover('high-restart-503', '503', 'Try again', 'high', { restart: true });
  await discover([]); await editor();
  await blocked('empty', 'high'); result.emptyDeclarationBlocksSavedLevel = true;
  await choose('Provider default'); await infer('empty-default');
  assert.equal(result.requests.at(-1).reasoning, undefined);
  await discover(['low', 'ultra']); await choose('Ultra');
  await discover(undefined);
  await page.getByText('No reasoning levels declared', { exact: true }).waitFor();
  result.omittedMetadataCleared = true;
  await editor(); await blocked('omitted');
  await choose('Provider default'); await infer('default');
  assert.equal(result.requests.at(-1).reasoning, undefined);
  assert.deepEqual(result.errors, []); result.success = true;
  await page.screenshot({ path: join(directory, 'capabilities.png') });
} catch (error) {
  result.error = error.stack; process.exitCode = 1;
  await page?.screenshot({ path: join(directory, 'failure.png') }).catch(() => {});
} finally {
  if (app) {
    try { await close(); } catch (error) { result.cleanupError = error.message; result.success = false; process.exitCode = 1; }
  }
  server.closeAllConnections(); await new Promise(resolve => server.close(resolve));
  await writeFile(join(directory, 'result.json'), JSON.stringify(result, null, 2));
  console.log(JSON.stringify({ ...result, directory }, null, 2));
}
