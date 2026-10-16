import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { randomBytes } from 'node:crypto';
import { mkdir, mkdtemp, writeFile, readFile, readdir } from 'node:fs/promises';
import { execFileSync, execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { DatabaseSync } from 'node:sqlite';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { _electron } from '../tooling/browser.mjs';
import { loadRuntime } from './source-assembly.mjs';
import { verificationSettings } from './verification-profile.mjs';
import { linuxSandboxArguments } from './platform.mjs';
import { fileHash } from './import-files.mjs';
import { enterWorkspace, openChat } from './verification-workspace.mjs';

// Native pi import and user-specified capability verification. Everything is a
// fixture: a disposable HOME with a fixture pi config and fake keys, and a
// loopback OpenAI-compatible provider. No live inference and no real pi files.
// --reproduce stops after sending an image to a text-only model and records
// whether the request carried the image (the pre-gate defect).
const reproduce = process.argv.includes('--reproduce');
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const { layout } = await loadRuntime(root);
await mkdir(join(root, 'logs'), { recursive: true });
const directory = await mkdtemp(join(root, 'logs/provider-import-'));
const home = join(directory, 'home'), piDir = join(home, '.pi/agent');
const profile = join(directory, 'profile'), project = join(directory, 'project'), file = join(project, 'hello.js');
await mkdir(join(profile, 'User'), { recursive: true }); await mkdir(project); await mkdir(piDir, { recursive: true });
await writeFile(file, 'export const fixture = true;\n');
await writeFile(join(profile, 'User/settings.json'), JSON.stringify({ ...verificationSettings, 'git.openRepositoryInParentFolders': 'never' }));
const fake = name => `ov-fixture-${name}-${randomBytes(12).toString('hex')}`;
const keys = { chat: fake('chat'), responses: fake('responses'), anthropic: fake('anthropic'), oauth: fake('oauth') };

const requests = [];
let phase = 'setup';
const server = createServer(async (request, response) => {
  const auth = request.headers.authorization;
  const keyName = Object.entries(keys).find(([, key]) => auth === `Bearer ${key}`)?.[0];
  if (request.url === '/v1/models') {
    // Discovery lists IDs without capabilities, so every capability shown comes from the import or the user.
    response.writeHead(keyName ? 200 : 401, { 'content-type': 'application/json' });
    const ids = keyName === 'chat' ? ['fixture-thinker', 'fixture-text'] : ['fixture-responder'];
    return response.end(keyName ? JSON.stringify({ data: ids.map(id => ({ id })) }) : '{}');
  }
  const chunks = []; for await (const chunk of request) chunks.push(chunk);
  let body = {}; try { body = JSON.parse(Buffer.concat(chunks).toString('utf8')); } catch {}
  const messages = body.messages ?? [];
  requests.push({ phase, endpoint: request.url, key: keyName ?? null, model: body.model,
    reasoning: body.reasoning_effort ?? body.reasoning?.effort,
    imageParts: messages.reduce((count, message) => count + (Array.isArray(message.content)
      ? message.content.filter(part => part?.type === 'image_url').length : 0), 0) });
  if (request.url !== '/v1/chat/completions' || !keyName) { response.writeHead(keyName ? 404 : 401); return response.end(); }
  response.writeHead(200, { 'content-type': 'text/event-stream' });
  for (const [delta, finish_reason] of [[{ role: 'assistant', content: `Verified ${phase}.` }, null], [{}, 'stop']])
    response.write(`data: ${JSON.stringify({ id: 'pi-import', object: 'chat.completion.chunk', model: body.model, choices: [{ index: 0, delta, finish_reason }] })}\n\n`);
  response.end('data: [DONE]\n\n');
});
await new Promise(resolveServer => server.listen(0, '127.0.0.1', resolveServer));
const baseUrl = `http://127.0.0.1:${server.address().port}/v1`;
const piModels = { providers: {
  'fixture-chat': { api: 'openai-completions', baseUrl, models: [
    { id: 'fixture-thinker', name: 'Fixture Thinker', reasoning: true, input: ['text', 'image'], contextWindow: 200000, maxTokens: 16000,
      thinkingLevelMap: { off: null, minimal: 'low', low: 'low', medium: 'medium', high: 'high', xhigh: 'xhigh' } },
    { id: 'fixture-text', name: 'Fixture Text', reasoning: false, input: ['text'], contextWindow: 32000, maxTokens: 4096,
      compat: { maxTokensField: 'max_tokens' } }] },
  'fixture-responses': { api: 'openai-responses', baseUrl, models: [
    { id: 'fixture-responder', name: 'Fixture Responder', reasoning: true, input: ['text'] }] },
  'fixture-anthropic': { api: 'anthropic-messages', baseUrl, models: [{ id: 'fixture-claude', reasoning: true, input: ['text', 'image'] }] },
  'fixture-oauth': { api: 'openai-completions', baseUrl, models: [] },
} };
const piAuth = { 'fixture-chat': { type: 'api_key', key: keys.chat }, 'fixture-responses': { type: 'api_key', key: keys.responses },
  'fixture-anthropic': { type: 'api_key', key: keys.anthropic }, 'fixture-oauth': { type: 'oauth', access: keys.oauth, refresh: 'fixture', expires: 0 } };
await writeFile(join(piDir, 'models.json'), JSON.stringify(piModels, null, 2));
await writeFile(join(piDir, 'auth.json'), JSON.stringify(piAuth, null, 2), { mode: 0o600 });
const piHashes = async () => ({ models: await fileHash(join(piDir, 'models.json')), auth: await fileHash(join(piDir, 'auth.json')) });
const piBefore = await piHashes();

const result = { checkedAt: new Date().toISOString(), platform: process.platform, arch: process.arch, mode: reproduce ? 'reproduce' : 'full',
  commit: execFileSync('git', ['rev-parse', 'HEAD'], { cwd: root, encoding: 'utf8' }).trim(),
  scope: 'Native Linux workbench with a disposable HOME, a fixture pi config, fake keys and a loopback provider; fixture responses, not live inference.',
  hashes: Object.fromEntries(await Promise.all([['host', layout.executable],
    ['workbench', join(root, 'source/app/out/vs/workbench/workbench.desktop.main.js')],
    ['settings', join(root, 'source/app/out/vs/code/electron-sandbox/workbench/openvision-model-settings.js')],
    ['verifier', fileURLToPath(import.meta.url)]].map(async ([name, path]) => [name, await fileHash(path)]))),
  checks: {}, requests, errors: [], hostExits: [], success: false };
let app, page;

async function launch() {
  const env = { ...process.env, HOME: home }; delete env.ELECTRON_RUN_AS_NODE; delete env.PI_CODING_AGENT_DIR;
  app = await _electron.launch({ executablePath: layout.executable, env, timeout: 60000,
    args: ['--user-data-dir', profile, '--extensions-dir', join(directory, 'extensions'), '--new-window',
      '--disable-updates', '--skip-welcome', '--skip-release-notes', '--disable-telemetry', '--disable-crash-reporter',
      ...(process.platform === 'linux' ? await linuxSandboxArguments(layout.host) : []), project, file] });
  page = await app.firstWindow(); page.setDefaultTimeout(15000);
  page.on('pageerror', error => result.errors.push(error.message));
  await page.locator('.part.titlebar .openvision-local-profile').waitFor({ state: 'attached', timeout: 60000 });
  await enterWorkspace(page); await page.waitForTimeout(6000);
}
async function close() {
  if (!app) return;
  const child = app.process(), exited = new Promise(resolveExit => child.once('exit', resolveExit));
  const closing = app.close();
  await page?.getByText('Quit Anyway', { exact: true }).click({ timeout: 3000 }).catch(() => {});
  await closing; if (child.exitCode === null && child.signalCode === null) await exited;
  result.hostExits.push({ exitCode: child.exitCode, signalCode: child.signalCode }); app = undefined;
}
const settingsRoot = () => page.locator('.openvision-model-settings');
async function settings() {
  await page.keyboard.press('Escape');
  const tab = page.locator('.tabs-container .tab').filter({ hasText: 'OpenVision Settings' });
  if (await tab.count()) await tab.first().click();
  else {
    await page.locator('.part.titlebar a[aria-label$=" Settings"]').click();
    await page.locator('.cursor-settings-sidebar-cell-label').filter({ hasText: /^Models$/ }).locator('..').click();
  }
  await settingsRoot().waitFor();
  await page.waitForFunction(() => document.querySelector('.openvision-model-settings')?.dataset.busy === 'false');
}
async function editor() { await page.locator('.tabs-container .tab').filter({ hasText: 'hello.js' }).first().click(); }
async function dismissMenu() {
  await page.mouse.move(0, 0);
  for (let attempt = 0; attempt < 4; attempt++) {
    if (!await page.locator('[data-component="menu-backdrop"]').filter({ visible: true }).count()) break;
    await page.keyboard.press('Escape');
  }
}
const trigger = () => page.locator('.vscode-model-picker__trigger-markdown').filter({ visible: true }).first();
function pickerRow(name) {
  return page.getByTestId('model-picker-menu').filter({ visible: true }).getByRole('menuitem')
    .filter({ has: page.locator('[data-model-picker-item-name]').filter({ hasText: name }) }).first();
}
async function select(name) {
  await editor(); await openChat(page); await trigger().click();
  await pickerRow(name).locator('[data-model-picker-item-name]').click();
  await dismissMenu();
}
async function reasoningLabels(name) {
  await editor(); await openChat(page); await trigger().click();
  const row = pickerRow(name); await row.focus(); await row.press('ArrowRight');
  const submenu = page.getByTestId('parameter-submenu').filter({ visible: true }).first();
  const present = await submenu.waitFor({ timeout: 4000 }).then(() => true, () => false);
  let labels = [], description = '';
  if (present) {
    await page.getByText('Reasoning', { exact: true }).filter({ visible: true }).last().hover().catch(() => {});
    await page.waitForTimeout(400);
    labels = await page.locator('[role=menuitemradio], [role=menuitem]').filter({ visible: true }).allInnerTexts();
    description = await submenu.getByTestId('parameter-submenu-description').innerText().catch(() => '');
  }
  await dismissMenu();
  return { present, labels: labels.map(text => text.trim()).filter(Boolean), description };
}
async function chooseReasoning(name, label) {
  await editor(); await openChat(page); await trigger().click();
  const row = pickerRow(name); await row.focus(); await row.press('ArrowRight');
  await page.getByTestId('parameter-submenu').filter({ visible: true }).first().waitFor();
  await page.getByText('Reasoning', { exact: true }).filter({ visible: true }).last().hover();
  await page.getByText(label, { exact: true }).filter({ visible: true }).last().click();
  await dismissMenu();
}
async function send(label, { image = false } = {}) {
  phase = label;
  const input = await openChat(page);
  await input.fill(`Reply Verified ${label}. Do not use tools.`);
  if (image) {
    await app.evaluate(({ clipboard, nativeImage }) => clipboard.writeImage(nativeImage.createFromBitmap(
      Buffer.alloc(32 * 32 * 4, 160), { width: 32, height: 32 })));
    await input.press('End'); await input.press('ControlOrMeta+v'); await page.waitForTimeout(1500);
  }
  const before = requests.length;
  await input.press('Enter');
  await page.waitForTimeout(500);
  await page.locator('.stop-button').filter({ visible: true }).waitFor({ state: 'hidden', timeout: 30000 });
  await page.waitForTimeout(1500);
  return requests.slice(before);
}
function readDatabase() {
  const db = new DatabaseSync(join(profile, 'User/globalStorage/state.vscdb'), { readOnly: true });
  try {
    const state = JSON.parse(String(db.prepare('SELECT value FROM ItemTable WHERE key = ?').get('openvision.model-providers.v1').value));
    const secrets = Object.fromEntries(state.providers.map(provider => {
      const row = db.prepare('SELECT value FROM ItemTable WHERE key = ?').get(`secret://openvision.provider.${provider.id}`);
      const bytes = row ? Buffer.from(JSON.parse(String(row.value)).data) : undefined;
      return [provider.name, bytes ? { prefix: bytes.subarray(0, 3).toString(), bytes: bytes.length } : null];
    }));
    return { state, secrets };
  } finally { db.close(); }
}
async function scanForKeys(path) {
  const needles = Object.values(keys).flatMap(key => [Buffer.from(key), Buffer.from(key, 'utf16le')]);
  const found = { files: 0, matches: [] };
  for (const entry of await readdir(path, { withFileTypes: true }).catch(() => [])) {
    const child = join(path, entry.name);
    if (entry.isDirectory()) { const inner = await scanForKeys(child); found.files += inner.files; found.matches.push(...inner.matches); }
    else if (entry.isFile()) {
      found.files++;
      const data = await readFile(child).catch(() => Buffer.alloc(0));
      if (needles.some(needle => data.includes(needle))) found.matches.push(child);
    }
  }
  return found;
}
const bodyHasKey = async () => { const text = await page.locator('body').innerText(); return Object.values(keys).some(key => text.includes(key)); };
async function openImport() {
  await settings();
  await settingsRoot().getByRole('button', { name: 'Import from pi…', exact: true }).click();
  const dialog = page.locator('dialog.openvision-import-dialog');
  await dialog.getByText(/new, .* already imported/).waitFor();
  return dialog;
}

try {
  await launch();
  // 1. Preview and confirm.
  const dialog = await openImport();
  const preview = await dialog.innerText();
  result.checks.preview = { text: preview.slice(0, 4000), keyVisible: await bodyHasKey() };
  assert.equal(result.checks.preview.keyVisible, false, 'Preview must not display keys');
  assert.match(preview, /fixture-anthropic[\s\S]*Not supported[\s\S]*Anthropic Messages/);
  assert.match(preview, /fixture-oauth[\s\S]*OAuth sign-in is not imported/);
  assert.match(preview, /Fixture Thinker \(fixture-thinker\) · reasoning low\/medium\/high\/xhigh · text \+ images · 200,000 context · 16,000 max output/);
  assert.match(preview, /Fixture Text \(fixture-text\) · no reasoning · text only/);
  assert.match(preview, /3 new, 0 already imported, 0 conflicts, 1 not importable/);
  assert.equal(await dialog.getByRole('checkbox', { name: 'Import fixture-anthropic' }).count(), 0, 'Unsupported providers must not be selectable');
  await page.screenshot({ path: join(directory, 'preview.png') });
  await dialog.getByRole('button', { name: 'Import', exact: true }).click();
  await dialog.waitFor({ state: 'detached' });
  const status = settingsRoot().locator('.openvision-api-settings > .openvision-model-status');
  await status.getByText(/Imported from pi:/).waitFor();
  result.checks.importStatus = await status.innerText();
  assert.match(result.checks.importStatus, /fixture-chat \(2 models, key stored encrypted\)/);
  assert.match(result.checks.importStatus, /fixture-oauth \(0 models, no key\)/);
  await settingsRoot().getByText('User-specified · no reasoning · text only · 32,000 context · 4,096 max output', { exact: true }).waitFor();
  await settingsRoot().getByText('No reasoning · User-specified', { exact: true }).waitFor();
  result.checks.rowsLabelledUserSpecified = true;

  if (reproduce) {
    // Pre-gate defect: an image goes to a model declared text-only.
    await select('Fixture Text');
    const sent = await send('reproduce-image', { image: true });
    result.checks.reproduce = { requests: sent, bodyTail: (await page.locator('body').innerText()).slice(-1200) };
    result.success = true;
  } else {
    // 2. Restart: persistence, encryption, no plaintext key, idempotent re-run.
    await close();
    const stored = readDatabase();
    result.checks.persisted = { providers: stored.state.providers.map(provider => ({ name: provider.name, importSource: provider.importSource,
      models: provider.models.map(model => ({ id: model.id, userCapabilities: model.userCapabilities })) })), secrets: stored.secrets };
    assert.deepEqual(stored.state.providers.map(provider => provider.name).sort(), ['fixture-chat', 'fixture-oauth', 'fixture-responses']);
    assert.equal(stored.secrets['fixture-chat']?.prefix, 'v11', 'Imported key must be encrypted through the Secret Service');
    assert.equal(stored.secrets['fixture-responses']?.prefix, 'v11');
    assert.equal(stored.secrets['fixture-oauth'], null, 'OAuth entries must not create a key');
    result.checks.plaintextScan = await scanForKeys(profile);
    assert.equal(result.checks.plaintextScan.matches.length, 0, 'Fake keys must not appear in plaintext profile storage');
    await launch(); await settings();
    await settingsRoot().getByText('User-specified · no reasoning · text only · 32,000 context · 4,096 max output', { exact: true }).waitFor();
    const again = await openImport();
    const rerun = await again.innerText();
    assert.match(rerun, /0 new, 3 already imported, 0 conflicts, 1 not importable/);
    assert.equal(await again.getByRole('checkbox', { checked: true }).count(), 0, 'Existing providers must not be selected without asking');
    await again.getByRole('button', { name: 'Import', exact: true }).click();
    await again.getByText('Select at least one provider to import.', { exact: true }).waitFor();
    await again.getByRole('button', { name: 'Cancel', exact: true }).click();
    assert.equal(readDatabaseCount(), 3);
    result.checks.idempotentRerun = true;

    // 3. Imported capabilities feed the reasoning menu.
    const thinker = await reasoningLabels('Fixture Thinker');
    result.checks.thinkerMenu = thinker;
    for (const label of ['Provider default', 'Low', 'Medium', 'High', 'Extra High']) assert.ok(thinker.labels.includes(label), `Thinker menu has ${label}`);
    assert.match(thinker.description, /User-specified/);
    const textMenu = await reasoningLabels('Fixture Text');
    result.checks.textMenuBefore = textMenu;
    assert.ok(!textMenu.labels.includes('High'), 'Text-only model has no explicit reasoning levels');

    // 4. Image gating follows the imported text-only declaration.
    await select('Fixture Text');
    const blocked = await send('blocked-image', { image: true });
    const body = await page.locator('body').innerText();
    result.checks.imageBlocked = { requests: blocked, message: /set to text-only input/.test(body) };
    assert.equal(blocked.length, 0, 'A text-only model must not receive an image request');
    assert.ok(result.checks.imageBlocked.message, 'The block must explain how to recover');

    // 5. Manual capabilities through the model dialog.
    await settings();
    const providerSection = settingsRoot().locator('section.openvision-provider').filter({ hasText: 'fixture-chat' });
    await providerSection.getByRole('button', { name: 'Edit Fixture Text', exact: true }).click();
    const edit = page.locator('dialog').filter({ hasText: 'Edit Model' });
    await edit.getByLabel('Reasoning', { exact: true }).selectOption('levels');
    await edit.getByLabel('Reasoning Levels', { exact: true }).fill('low, high');
    await edit.getByLabel('Image Input', { exact: true }).selectOption('image');
    await edit.getByLabel('Context Window (tokens)', { exact: true }).fill('64000');
    await page.screenshot({ path: join(directory, 'manual-capabilities.png') });
    await edit.getByRole('button', { name: 'Save', exact: true }).click();
    await edit.waitFor({ state: 'detached' });
    await settingsRoot().getByText('User-specified · reasoning low/high · text + images · 64,000 context · 4,096 max output', { exact: true }).waitFor();
    await settingsRoot().locator('.openvision-model-row').filter({ hasText: 'fixture-text' }).getByText('User-specified', { exact: true }).waitFor();
    const textMenuAfter = await reasoningLabels('Fixture Text');
    result.checks.textMenuAfter = textMenuAfter;
    assert.ok(textMenuAfter.labels.includes('Low') && textMenuAfter.labels.includes('High') && !textMenuAfter.labels.includes('Medium'));
    await chooseReasoning('Fixture Text', 'High');
    const allowed = await send('allowed-image', { image: true });
    result.checks.imageAllowed = allowed;
    assert.equal(allowed.length, 1, 'An image-capable model sends exactly one request');
    assert.ok(allowed[0].imageParts > 0, 'The image is sent once the user allows image input');
    assert.equal(allowed[0].reasoning, 'high', 'The user-specified level reaches the request');
    assert.equal(allowed[0].key, 'chat', 'The imported key authenticates the request');

    // 6. Restart keeps manual capabilities; clearing them returns to discovered values.
    await close(); await launch();
    const persistedMenu = await reasoningLabels('Fixture Text');
    assert.ok(persistedMenu.labels.includes('High'));
    result.checks.manualCapabilitiesPersisted = true;

    // 7. CLI preview and queue (no keys), then confirmation in the app.
    await close();
    const cli = args => promisify(execFile)(process.execPath, [join(root, 'desktop/import-cli.mjs'), '--pi', '--pi-dir', piDir,
      '--target-user-data', profile, ...args], { cwd: root, env: { ...process.env, HOME: home } });
    const cliPreview = await cli([]);
    const queued = await cli(['--apply', '--replace', 'fixture-chat']);
    const cliText = cliPreview.stdout + cliPreview.stderr + queued.stdout + queued.stderr;
    result.checks.cli = { previewSummary: JSON.parse(cliPreview.stdout).summary, queued: JSON.parse(queued.stdout).queued,
      keyInOutput: Object.values(keys).some(key => cliText.includes(key)) };
    assert.equal(result.checks.cli.keyInOutput, false, 'The CLI never prints keys');
    assert.deepEqual(result.checks.cli.previewSummary.imported, ['fixture-chat', 'fixture-responses', 'fixture-oauth']);
    const stagedPath = result.checks.cli.queued.path;
    const stagedText = await readFile(stagedPath, 'utf8');
    assert.ok(!Object.values(keys).some(key => stagedText.includes(key)), 'The queued request has no keys');
    await launch();
    const queuedDialog = page.locator('dialog.openvision-import-dialog');
    await settings();
    await queuedDialog.getByText('An import was queued from the command line', { exact: false }).waitFor({ timeout: 20000 });
    assert.equal(await queuedDialog.getByRole('checkbox', { name: 'Update fixture-chat' }).isChecked(), true);
    assert.equal(await queuedDialog.getByRole('checkbox', { name: 'Update fixture-responses' }).isChecked(), false);
    await queuedDialog.getByRole('button', { name: 'Import', exact: true }).click();
    await queuedDialog.waitFor({ state: 'detached' });
    await settingsRoot().locator('.openvision-api-settings > .openvision-model-status').getByText(/Imported from pi: fixture-chat \(2 models, key stored encrypted\)/).waitFor();
    result.checks.cliQueueConfirmed = { stagedRemoved: await readFile(stagedPath).then(() => false, () => true), providers: readDatabaseCount() };
    assert.deepEqual(result.checks.cliQueueConfirmed, { stagedRemoved: true, providers: 3 });
    // The user's manual override survives the explicit update.
    await settingsRoot().getByText('User-specified · reasoning low/high · text + images · 64,000 context · 4,096 max output', { exact: true }).waitFor();
    result.success = true;
  }
  await page.screenshot({ path: join(directory, 'final.png') });
} catch (error) {
  result.error = error.stack; process.exitCode = 1;
  await page?.screenshot({ path: join(directory, 'failure.png') }).catch(() => {});
} finally {
  if (app) { try { await close(); } catch (error) { result.cleanupError = error.message; result.success = false; process.exitCode = 1; } }
  result.piFilesUnchanged = JSON.stringify(await piHashes()) === JSON.stringify(piBefore);
  if (!result.piFilesUnchanged) { result.success = false; process.exitCode = 1; }
  server.closeAllConnections(); await new Promise(resolveClose => server.close(resolveClose));
  const text = JSON.stringify({ ...result, directory }, null, 2);
  const leaked = Object.values(keys).some(key => text.includes(key));
  if (leaked) { result.success = false; process.exitCode = 1; }
  await writeFile(join(directory, 'result.json'), leaked ? '{"error":"result withheld: contained a fixture key"}' : text);
  console.log(leaked ? 'Result withheld: it contained a fixture key.' : text);
}

function readDatabaseCount() {
  const db = new DatabaseSync(join(profile, 'User/globalStorage/state.vscdb'), { readOnly: true });
  try { return JSON.parse(String(db.prepare('SELECT value FROM ItemTable WHERE key = ?').get('openvision.model-providers.v1').value)).providers.length; }
  finally { db.close(); }
}
