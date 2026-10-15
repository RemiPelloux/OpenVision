import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { mkdir, mkdtemp, writeFile } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import { DatabaseSync } from 'node:sqlite';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { _electron } from '../tooling/browser.mjs';
import { loadRuntime } from './source-assembly.mjs';
import { verificationSettings } from './verification-profile.mjs';
import { linuxSandboxArguments } from './platform.mjs';
import { fileHash } from './import-files.mjs';
import { enterWorkspace } from './verification-workspace.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const { layout } = await loadRuntime(root);
await mkdir(join(root, 'logs'), { recursive: true });
const directory = await mkdtemp(join(root, 'logs/catalog-retention-'));
const profile = join(directory, 'profile'), project = join(directory, 'project');
await mkdir(join(profile, 'User'), { recursive: true }); await mkdir(project);
await writeFile(join(profile, 'User/settings.json'), JSON.stringify({ ...verificationSettings,
  'git.openRepositoryInParentFolders': 'never' }));
await writeFile(join(project, 'hello.js'), '// Disposable catalog-retention verification\n');
const result = { success: false, checkedAt: new Date().toISOString(), platform: process.platform,
  commit: execFileSync('git', ['rev-parse', 'HEAD'], { cwd: root, encoding: 'utf8' }).trim(),
  requests: [], errors: [], exits: [], hashes: Object.fromEntries(await Promise.all([
    'desktop/verify-catalog-retention.mjs', 'source/app/out/vs/workbench/workbench.desktop.main.js',
    'source/app/out/vs/code/electron-sandbox/workbench/openvision-model-providers.js',
    'source/app/out/vs/code/electron-sandbox/workbench/openvision-model-settings.js',
    'source/app/out/openvision-model-http.js',
  ].map(async path => [path, await fileHash(join(root, path))]))) };
let catalog = { data: ['alpha', 'beta', 'gamma'].map(id => ({ id })) };
let keyVersion = 'original', phase = 'initial';
const server = createServer(async (request, response) => {
  const authorized = request.headers.authorization === `Bearer fixture-${keyVersion}`;
  const entry = { phase, url: request.url, authorized, keyVersion }; result.requests.push(entry);
  if (!authorized) { response.writeHead(401); response.end('{}'); return; }
  if (request.url === '/v1/models') {
    response.writeHead(200, { 'Content-Type': 'application/json' }); response.end(JSON.stringify(catalog)); return;
  }
  if (request.url === '/v1/chat/completions') {
    const chunks = []; for await (const chunk of request) chunks.push(chunk);
    entry.model = JSON.parse(Buffer.concat(chunks)).model;
    response.writeHead(200, { 'Content-Type': 'text/event-stream' });
    response.write(`data: ${JSON.stringify({ id: 'retention-fixture', object: 'chat.completion.chunk',
      model: entry.model, choices: [{ index: 0, delta: { role: 'assistant', content: `Catalog ${phase} verified.` }, finish_reason: null }] })}\n\n`);
    response.end(`data: ${JSON.stringify({ id: 'retention-fixture', object: 'chat.completion.chunk',
      model: entry.model, choices: [{ index: 0, delta: {}, finish_reason: 'stop' }] })}\n\ndata: [DONE]\n\n`);
    return;
  }
  response.writeHead(404); response.end();
});
await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
let app, page;
async function launch() {
  const env = { ...process.env }; delete env.ELECTRON_RUN_AS_NODE;
  app = await _electron.launch({ executablePath: layout.executable, env, timeout: 60000,
    args: ['--user-data-dir', profile, '--extensions-dir', join(directory, 'extensions'), '--new-window',
      '--disable-updates', '--skip-welcome', '--skip-release-notes', '--disable-telemetry', '--disable-crash-reporter',
      ...(process.platform === 'linux' ? await linuxSandboxArguments(layout.host) : []), project, join(project, 'hello.js')] });
  page = await app.firstWindow(); page.setDefaultTimeout(15000);
  page.on('pageerror', error => result.errors.push(error.message));
  await page.locator('.part.titlebar .openvision-local-profile').waitFor({ state: 'attached', timeout: 60000 }); await enterWorkspace(page);
  // Titlebar renders before the native workbench has registered settings actions.
  // Use the same startup settle interval as the Agent acceptance workflow.
  await page.waitForTimeout(8000);
}
async function closeApp() {
  if (!app) return;
  const child = app.process(); await app.close(); app = undefined;
  result.exits.push({ pid: child.pid, exitCode: child.exitCode, signalCode: child.signalCode });
  assert.equal(child.exitCode, 0);
}
async function settings() {
  const panel = page.locator('.openvision-model-settings');
  if (!await panel.isVisible()) {
    const tab = page.locator('.tabs-container .tab').filter({ hasText: 'OpenVision Settings' });
    if (await tab.count()) await tab.first().click();
    else await page.locator('.part.titlebar a[aria-label$=" Settings"]').click();
    if (!await panel.isVisible())
      await page.locator('.cursor-settings-sidebar-cell-label').filter({ hasText: /^Models$/ }).locator('..').click();
  }
  await panel.waitFor(); return panel;
}
const provider = () => page.locator('.openvision-provider').filter({ hasText: 'Retention fixture' });
async function discover(next, expected = 'Saved') {
  catalog = next;
  await provider().getByRole('button', { name: 'Discover Models', exact: true }).click();
  await page.locator('.openvision-model-settings > .openvision-model-status').getByText(expected, { exact: true }).waitFor();
}
async function infer(label) {
  phase = label;
  await page.locator('.tabs-container .tab').filter({ hasText: 'hello.js' }).first().click();
  await page.keyboard.press('ControlOrMeta+Shift+l');
  const trigger = page.locator('.vscode-model-picker__trigger-markdown').filter({ visible: true }).first();
  await trigger.click();
  const menu = page.getByTestId('model-picker-menu').filter({ visible: true });
  await menu.locator('[data-model-picker-item-name$=":gamma"]').click();
  const input = page.locator('.aislash-editor-input[contenteditable=true]').filter({ visible: true }).first();
  await input.fill(`Reply with Catalog ${label} verified. Do not use tools.`); await input.press('Enter');
  await page.getByText(`Catalog ${label} verified.`, { exact: true }).first().waitFor({ timeout: 45000 });
  await page.locator('.stop-button').filter({ visible: true }).waitFor({ state: 'hidden' });
  const requests = result.requests.filter(request => request.phase === label && request.url === '/v1/chat/completions');
  assert.equal(requests.length, 1); assert.equal(requests[0].model, 'gamma'); assert.ok(requests[0].authorized);
}
function savedModels() {
  const db = new DatabaseSync(join(profile, 'User/globalStorage/state.vscdb'), { readOnly: true });
  try {
    const row = db.prepare('SELECT value FROM ItemTable WHERE key = ?').get('openvision.model-providers.v1');
    return JSON.parse(String(row.value)).providers[0].models;
  } finally { db.close(); }
}
try {
  await launch();
  const panel = await settings();
  await panel.getByRole('button', { name: 'Add Provider', exact: true }).click();
  await page.getByLabel('Provider Name', { exact: true }).fill('Retention fixture');
  await page.getByLabel('API Base URL', { exact: true }).fill(`http://127.0.0.1:${server.address().port}/v1`);
  await page.getByLabel('API Key', { exact: true }).fill('fixture-original');
  await page.locator('dialog').getByRole('button', { name: 'Save', exact: true }).click();
  await page.locator('dialog').waitFor({ state: 'detached' });
  await provider().getByRole('checkbox', { name: 'Enable gamma', exact: true }).waitFor();
  await provider().getByRole('checkbox', { name: 'Enable beta', exact: true }).uncheck();
  await page.waitForFunction(() => document.querySelector('.openvision-model-settings')?.dataset.busy === 'false');
  await provider().getByRole('button', { name: 'Edit alpha', exact: true }).click();
  await page.getByLabel('Display Name', { exact: true }).fill('My Alpha');
  await page.locator('dialog').getByRole('button', { name: 'Save', exact: true }).click();
  await page.locator('dialog').waitFor({ state: 'detached' });
  await discover({ data: [{ name: 'invalid' }] }, 'The provider returned a model without a valid ID.');
  assert.equal(await provider().locator('.openvision-model-row').count(), 3);
  result.malformedPreserved = true;
  await discover({ data: [] });
  assert.equal(await provider().getByText('Not in latest catalog', { exact: true }).count(), 3);
  assert.equal(await provider().getByRole('checkbox', { name: 'Enable beta', exact: true }).isChecked(), false);
  await page.screenshot({ path: join(directory, 'unlisted-models.png') });
  await infer('unlisted'); result.unlistedSelectable = true;
  await closeApp();
  const before = savedModels(); assert.equal(before.length, 3);
  assert.ok(before.every(model => model.discoveryStatus === 'unlisted'));
  await launch(); await settings();
  assert.equal(await provider().getByText('Not in latest catalog', { exact: true }).count(), 3);
  result.restartPreserved = true;
  await provider().getByRole('button', { name: 'Edit Provider', exact: true }).click();
  await page.getByLabel('API Key', { exact: true }).fill('fixture-replacement');
  await page.locator('dialog').getByRole('button', { name: 'Save', exact: true }).click();
  await page.locator('dialog').waitFor({ state: 'detached' }); keyVersion = 'replacement';
  await discover({ data: [{ id: 'alpha', name: 'Server Alpha' }, { id: 'delta' }] });
  assert.equal(await provider().locator('.openvision-model-row').count(), 4);
  assert.equal(await provider().getByText('Not in latest catalog', { exact: true }).count(), 2);
  await provider().getByRole('checkbox', { name: 'Enable My Alpha', exact: true }).waitFor();
  await infer('replacement'); result.replacedKeyUsed = true;
  await closeApp(); await launch(); await settings();
  await infer('replacement-restart'); result.replacedKeySurvivesRestart = true;
  await settings();
  await provider().getByRole('button', { name: 'Remove gamma', exact: true }).click();
  await page.waitForFunction(() => document.querySelector('.openvision-model-settings')?.dataset.busy === 'false');
  assert.equal(await provider().getByRole('checkbox', { name: 'Enable gamma', exact: true }).count(), 0);
  await closeApp();
  const after = savedModels();
  assert.deepEqual(after.map(model => model.id), ['alpha', 'delta', 'beta']);
  assert.equal(after[0].name, 'My Alpha'); assert.equal(after[2].enabled, false);
  result.explicitRemovalPersisted = true;
  assert.ok(result.requests.every(request => request.authorized)); assert.deepEqual(result.errors, []);
  result.success = true;
} catch (error) {
  result.failure = error.stack; process.exitCode = 1;
  await page?.screenshot({ path: join(directory, 'failure.png') }).catch(() => {});
  await writeFile(join(directory, 'failure.txt'), await page?.locator('body').innerText().catch(() => '') ?? '');
} finally {
  try { await closeApp(); }
  catch (error) { result.cleanupFailure = error.stack; result.success = false; process.exitCode = 1; }
  server.closeAllConnections(); await new Promise(resolve => server.close(resolve));
  await writeFile(join(directory, 'result.json'), JSON.stringify(result, null, 2));
  console.log(JSON.stringify({ ...result, directory }, null, 2));
}
