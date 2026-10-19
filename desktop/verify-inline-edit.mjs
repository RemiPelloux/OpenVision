import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { mkdtemp, mkdir, writeFile, readFile, readdir } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { DatabaseSync } from 'node:sqlite';
import { _electron } from '../tooling/browser.mjs';
import { verificationRuntime } from './verification-runtime.mjs';
import { verificationSettings } from './verification-profile.mjs';
import { fileHash } from './import-files.mjs';
import { enterWorkspace } from './verification-workspace.mjs';

const root = resolve(import.meta.dirname, '..');
const { layout, appRoot } = await verificationRuntime(root);
const directory = await mkdtemp(join(root, 'logs/inline-edit-verification-'));
const profile = join(directory, 'profile'), project = join(directory, 'project'), file = join(project, 'edit.js');
await mkdir(join(profile, 'User'), { recursive: true }); await mkdir(project);
await writeFile(join(profile, 'User/settings.json'), JSON.stringify({ ...verificationSettings,
  'git.openRepositoryInParentFolders': 'never', 'editor.quickSuggestions': false, 'editor.formatOnSave': false }));
const originalText = 'const answer = 1;\r\n';
await writeFile(file, originalText);
const requests = [], errors = [], hostExits = [];
const originals = [];
let phase = 'edit', canceled = false;
const server = createServer(async (req, res) => {
  res.setHeader('content-type', 'application/json');
  const customAuthorized = req.headers['x-openvision-token'] === 'fixture-header-secret';
  if (!customAuthorized) { res.statusCode = 401; return res.end('{}'); }
  if (req.url === '/v1/models') return res.end(JSON.stringify({ data: [{ id: 'fixture-editor' }] }));
  if (req.url !== '/v1/chat/completions') { res.statusCode = 404; return res.end('{}'); }
  const chunks = []; for await (const chunk of req) chunks.push(chunk);
  const payload = JSON.parse(Buffer.concat(chunks));
  requests.push({ phase, payload, customAuthorized, authorized: req.headers.authorization === 'Bearer fixture-key' });
  if (phase === 'cancel') { res.on('close', () => { canceled = true; }); return; }
  if (phase === 'error') { res.statusCode = 503; return res.end('fixture-key fixture-header-secret must not appear in UI'); }
  const content = phase === 'multiline' ? 'const café = 2;\nconst emoji = "😀";' : 'const answer = 2;';
  res.end(JSON.stringify({ choices: [{ finish_reason: 'stop', message: { role: 'assistant', content } }] }));
});
await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
const result = { directory, success: false, checks: {}, scope: 'Native Windows inline editing with a controlled local HTTP provider; no external AI inference.',
  hashes: { workbench: await fileHash(join(appRoot, 'out/vs/workbench/workbench.desktop.main.js')) } };
for (const name of ['inline-edit-provider.js', 'inline-edit-context.js', 'inline-edit-http.mjs',
  'inline-edit-ipc.mjs', 'code-response.mjs', 'verify-inline-edit.mjs'])
  result.hashes[name] = await fileHash(join(root, 'desktop', name));
let app, page;

async function launch() {
  const env = { ...process.env }; delete env.ELECTRON_RUN_AS_NODE;
  app = await _electron.launch({ executablePath: layout.executable, env, timeout: 60000,
    args: ['--user-data-dir', profile, '--extensions-dir', join(directory, 'extensions'), '--new-window',
      '--disable-updates', '--skip-welcome', '--skip-release-notes', project, file] });
  page = await app.firstWindow(); page.setDefaultTimeout(20000);
  page.on('pageerror', error => errors.push(error.message));
  await page.locator('.part.titlebar .openvision-local-profile').waitFor({ state: 'attached', timeout: 60000 }); await enterWorkspace(page);
  await page.waitForTimeout(8000);
}

async function close() {
  if (!app) return;
  const owned = app, process = app.process();
  await owned.close(); app = undefined; hostExits.push(process.exitCode);
  assert.equal(process.exitCode, 0);
}

async function configure() {
  await page.locator('.part.titlebar a[aria-label$=" Settings"]').click();
  await page.locator('.cursor-settings-sidebar-cell-label').filter({ hasText: /^Models$/ }).locator('..').click();
  const settings = page.locator('.openvision-model-settings');
  await settings.getByRole('button', { name: 'Add Provider', exact: true }).click();
  await page.getByLabel('Provider Name', { exact: true }).fill('Inline fixture');
  await page.getByLabel('API Base URL', { exact: true }).fill(`http://127.0.0.1:${server.address().port}/v1`);
  await page.getByLabel('API Key', { exact: true }).fill('fixture-key');
  await page.getByLabel('Additional Headers (JSON)', { exact: true }).fill('{"X-OpenVision-Token":"fixture-header-secret"}');
  await page.locator('dialog').getByRole('button', { name: 'Save', exact: true }).click();
  await page.locator('dialog').waitFor({ state: 'detached' });
  await page.locator('.tabs-container .tab').filter({ hasText: 'edit.js' }).first().click();
  await page.locator('.vscode-model-picker__trigger-markdown').filter({ visible: true }).first().click();
  await page.getByTestId('model-picker-menu').filter({ visible: true })
    .locator('[data-model-picker-item-name]').filter({ hasText: 'fixture-editor' }).click();
}

async function submit(instruction) {
  await page.locator('.monaco-editor .inputarea').first().focus();
  await page.keyboard.press('ControlOrMeta+a'); await page.keyboard.press('ControlOrMeta+k');
  const prompt = page.locator('.monaco-editor [contenteditable="true"]').filter({ visible: true }).first();
  await prompt.click(); await prompt.press('ControlOrMeta+a');
  // A failed submission keeps its instruction in the prompt. Record what the
  // select-all shortcut actually selected before clearing it.
  const existing = (await prompt.innerText()).trim();
  if (existing) {
    const selected = await page.evaluate(() => getSelection().toString().trim());
    (result.promptClears ??= []).push({ instruction, existing, selectedByShortcut: selected });
    if (selected !== existing) await prompt.evaluate(element => getSelection().selectAllChildren(element));
  }
  await prompt.press('Backspace');
  await page.keyboard.insertText(instruction); await prompt.press('Enter');
}

async function savedText() {
  await page.locator('.monaco-editor .inputarea').first().focus();
  await page.keyboard.press('ControlOrMeta+s');
  await page.waitForTimeout(700);
  return readFile(file, 'utf8');
}

try {
  await launch(); await close();
  const storage = join(profile, 'User/workspaceStorage');
  const directories = await readdir(storage, { withFileTypes: true });
  const databases = [];
  for (const entry of directories.filter(entry => entry.isDirectory())) {
    const path = join(storage, entry.name);
    const metadata = JSON.parse(await readFile(join(path, 'workspace.json'), 'utf8'));
    if (metadata.folder) databases.push(join(path, 'state.vscdb'));
  }
  assert.equal(databases.length, 1);
  for (const [id, isGenerated] of [['APPROVED_INLINE_RULE', false], ['HIDDEN_LEGACY_MUST_NOT_SEND', true]]) {
    const path = isGenerated ? databases[0] : join(profile, 'User/globalStorage/state.vscdb');
    const db = new DatabaseSync(path);
    try {
      const key = `openvision.user-rule.v1.${id}`;
      const value = JSON.stringify({ id, title: id, knowledge: id, isGenerated, createdAt: new Date().toISOString() });
      db.prepare('INSERT INTO ItemTable (key,value) VALUES (?,?)').run(key, value);
      originals.push({ path, key, value });
    } finally { db.close(); }
  }
  await launch(); await configure();
  await submit('Change answer to 2');
  await page.getByText('Reject', { exact: true }).filter({ visible: true }).waitFor();
  assert.equal(requests.length, 1);
  assert.ok(requests[0].authorized);
  const context = JSON.parse(requests[0].payload.messages[1].content);
  assert.ok(context.userRules.includes('APPROVED_INLINE_RULE'));
  assert.ok(!JSON.stringify(requests).includes('HIDDEN_LEGACY_MUST_NOT_SEND'));
  result.checks.filteredRules = true;
  await page.getByText('Accept Ctrl+⏎', { exact: true }).click();
  await page.locator('.monaco-editor .inputarea').first().focus();
  await page.keyboard.press('ControlOrMeta+s');
  await page.waitForTimeout(1000);
  assert.equal(await readFile(file, 'utf8'), 'const answer = 2;\r\n');
  result.checks.acceptAndSave = true;
  await page.keyboard.press('ControlOrMeta+z');
  // Native history first undoes acceptance (restoring review), then the edit.
  await page.keyboard.press('ControlOrMeta+z');
  await page.keyboard.press('ControlOrMeta+s');
  await page.waitForTimeout(1000);
  assert.equal(await readFile(file, 'utf8'), originalText);
  result.checks.undo = true;
  await submit('Change answer to 2 again');
  await page.getByText('Reject', { exact: true }).filter({ visible: true }).waitFor();
  await page.getByText('Reject', { exact: true }).filter({ visible: true }).click();
  assert.equal(await savedText(), originalText);
  result.checks.reject = true;
  phase = 'error';
  await submit('Exercise error handling');
  await page.getByText(/Inline edit failed \(HTTP 503\)/).filter({ visible: true }).waitFor();
  assert.ok(!(await page.locator('body').innerText()).includes('fixture-key'));
  assert.ok(!(await page.locator('body').innerText()).includes('fixture-header-secret'));
  assert.equal(await savedText(), originalText);
  result.checks.errorPreservesFile = true;
  phase = 'edit';
  await submit('Recover after failure');
  await page.getByText('Reject', { exact: true }).filter({ visible: true }).waitFor();
  await page.getByText('Reject', { exact: true }).filter({ visible: true }).click();
  assert.equal(await savedText(), originalText);
  result.checks.recovery = true;
  phase = 'cancel';
  await submit('Cancel this pending edit');
  for (let attempt = 0; attempt < 50 && !requests.some(item => item.phase === 'cancel'); attempt++)
    await page.waitForTimeout(100);
  assert.ok(requests.some(item => item.phase === 'cancel'));
  await page.keyboard.press('Escape');
  for (let attempt = 0; attempt < 50 && !canceled; attempt++) await page.waitForTimeout(100);
  assert.ok(canceled, 'Cancel must close the upstream HTTP request');
  assert.equal(await savedText(), originalText);
  result.checks.cancel = true;
  phase = 'multiline';
  await submit('Replace with two Unicode declarations');
  await page.getByText('Accept Ctrl+⏎', { exact: true }).filter({ visible: true }).click();
  assert.equal(await savedText(), 'const café = 2;\r\nconst emoji = "😀";\r\n');
  result.checks.multilineUnicodeCRLF = true;
  assert.deepEqual(requests.map(item => item.phase), ['edit', 'edit', 'error', 'edit', 'cancel', 'multiline']);
  for (const item of requests) {
    assert.ok(item.authorized);
    assert.ok(item.customAuthorized);
    assert.equal(item.payload.model, 'fixture-editor');
    assert.equal(item.payload.store, false);
    assert.ok(!JSON.stringify(item.payload).includes('HIDDEN_LEGACY_MUST_NOT_SEND'));
  }
  assert.equal(JSON.parse(requests[3].payload.messages[1].content).instruction, 'Recover after failure');
  result.checks.oneRequestPerSubmit = true;
  result.checks.customHeadersAndErrorPrivacy = true;
  await writeFile(join(directory, 'inline-ui.txt'), await page.locator('body').innerText());
  await writeFile(join(directory, 'editables.json'), JSON.stringify(await page.locator('[contenteditable="true"],textarea,input').evaluateAll(elements => elements.map(element => ({ tag: element.tagName, class: element.className, placeholder: element.getAttribute('placeholder'), aria: element.getAttribute('aria-label') }))), null, 2));
  await page.screenshot({ path: join(directory, 'inline-ui.png') });
  console.log('Native inline UI: ' + directory);
  await close();
  for (const { path, key, value } of originals) {
    const db = new DatabaseSync(path, { readOnly: true });
    try { assert.equal(db.prepare('SELECT value FROM ItemTable WHERE key=?').get(key).value.toString(), value); }
    finally { db.close(); }
  }
  result.checks.originalRecordsPreserved = true;
  assert.deepEqual(errors, []);
  assert.deepEqual(hostExits, [0, 0]);
  result.success = true;
} catch (error) {
  result.failure = error.stack; process.exitCode = 1;
  if (page) {
    await page.screenshot({ path: join(directory, 'failure.png') }).catch(() => {});
    await writeFile(join(directory, 'failure.txt'), await page.locator('body').innerText()).catch(() => {});
  }
} finally {
  try { await close(); } catch (error) { result.cleanupFailure = error.stack; process.exitCode = 1; }
  server.closeAllConnections(); await new Promise(resolve => server.close(resolve));
  Object.assign(result, { requests, errors, hostExits });
  await writeFile(join(directory, 'result.json'), JSON.stringify(result, null, 2));
  console.log(JSON.stringify(result, null, 2));
}
