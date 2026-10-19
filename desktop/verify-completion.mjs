import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { mkdir, mkdtemp, writeFile, readFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { _electron } from '../tooling/browser.mjs';
import { verificationRuntime } from './verification-runtime.mjs';
import { verificationSettings } from './verification-profile.mjs';
import { linuxSandboxArguments } from './platform.mjs';
import { writeCompletionFailure, verifyCompletionFailures } from './verify-completion-failures.mjs';
import { fileHash } from './import-files.mjs';
import { createCompletionEditingFixture, verifyCompletionEditing, saveFile, pressTab } from './verify-completion-editing.mjs';
import { createCompletionAcceptanceFixture, verifyCompletionAcceptance, prepareCompletionAcceptanceProject } from './verify-completion-acceptance.mjs';
import { enterWorkspace } from './verification-workspace.mjs';

// Live saved-provider editor acceptance has its own owner module (verify-completion-live.mjs).
if (process.argv.includes('--live')) { await import('./verify-completion-live.mjs'); process.exit(); }

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const { portable, runtimeRoot, appRoot, layout } = await verificationRuntime(root);
await mkdir(join(root, 'logs'), { recursive: true });
const directory = await mkdtemp(join(root, 'logs/completion-verification-'));
const profile = join(directory, 'profile'), project = join(directory, 'project');
const editing = process.argv.includes('--editing'), editingFixture = createCompletionEditingFixture();
const acceptance = process.argv.includes('--acceptance'), acceptanceFixture = createCompletionAcceptanceFixture();
await mkdir(join(profile, 'User'), { recursive: true }); await mkdir(project);
await writeFile(join(profile, 'User/settings.json'), JSON.stringify({ ...verificationSettings,
  'editor.quickSuggestions': false, 'git.openRepositoryInParentFolders': 'never',
  'editor.autoIndent': 'none', 'editor.autoClosingBrackets': 'never', 'editor.formatOnType': false,
  ...(editing || acceptance ? { 'cursor.cpp.enablePartialAccepts': true } : {}) }));
const file = join(project, 'completion.js');
await writeFile(file, 'const answer = ');
if (acceptance) await prepareCompletionAcceptanceProject(project);
const requests = [], inference = Promise.withResolvers(), multiline = Promise.withResolvers();
let phase = 'simple';
const server = createServer(async (request, response) => {
  response.setHeader('content-type', 'application/json');
  if (request.url === '/v1/models') return response.end(JSON.stringify({ data: [{ id: 'fixture-coder' }] }));
  if (request.url !== '/v1/chat/completions') { response.statusCode = 404; return response.end('{}'); }
  const chunks = []; for await (const chunk of request) chunks.push(chunk);
  const body = Buffer.concat(chunks), payload = JSON.parse(body.toString());
  const context = JSON.parse(payload.messages.at(-1).content);
  requests.push({ phase, model: payload.model, authorized: request.headers.authorization === 'Bearer fixture-key',
    context, stream: payload.stream });
  if (writeCompletionFailure(phase, response)) return;
  if (phase === 'editing' && editingFixture.respond(context, response)) return;
  if (phase === 'acceptance' && acceptanceFixture.respond(context, response, body.length)) return;
  const matchesMultiline = phase === 'multiline' && /const items = \[\r?\n  $/.test(context.prefix);
  const content = phase === 'simple' ? '42' : matchesMultiline ? '"café 日本語",\n  "😀"' : '';
  response.end(JSON.stringify({ choices: [{ message: { role: 'assistant', content }, finish_reason: 'stop' }] }));
  if (matchesMultiline) multiline.resolve();
  inference.resolve();
});
await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
let app;
const errors = [];
const result = { directory, success: false, platform: process.platform, ...(portable ? { portable } : {}) };
try {
  const env = { ...process.env }; delete env.ELECTRON_RUN_AS_NODE;
  app = await _electron.launch({ executablePath: layout.executable, env, timeout: 60000,
    args: ['--user-data-dir', profile, '--extensions-dir', join(directory, 'extensions'),
      '--new-window', '--disable-updates', '--skip-welcome', '--skip-release-notes',
      '--disable-telemetry', '--disable-crash-reporter',
      ...(process.platform === 'linux' ? await linuxSandboxArguments(layout.host) : []), project, file] });
  const page = await app.firstWindow();
  const ghost = text => page.locator('.cursor-ghost-text').filter({ hasText: text }).first();
  page.setDefaultTimeout(15000);
  page.on('pageerror', error => errors.push(error.message));
  await page.locator('.part.titlebar .openvision-local-profile').waitFor({ state: 'attached', timeout: 60000 }); await enterWorkspace(page);
  await page.waitForTimeout(8000);
  await page.locator('.part.titlebar a[aria-label$=" Settings"]').click();
  await page.locator('.cursor-settings-sidebar-cell-label').filter({ hasText: /^Models$/ }).locator('..').click();
  const settings = page.locator('.openvision-model-settings');
  await settings.waitFor();
  await settings.getByRole('button', { name: 'Add Provider', exact: true }).click();
  await page.getByLabel('Provider Name', { exact: true }).fill('Completion fixture');
  await page.getByLabel('API Base URL', { exact: true }).fill(`http://127.0.0.1:${server.address().port}/v1`);
  await page.getByLabel('API Key', { exact: true }).fill('fixture-key');
  await page.locator('dialog').getByRole('button', { name: 'Save', exact: true }).click();
  await page.locator('dialog').waitFor({ state: 'detached' });
  await settings.getByRole('combobox', { name: 'Tab autocomplete model' }).selectOption({ label: 'Completion fixture · fixture-coder' });
  await page.locator('.tabs-container .tab').filter({ hasText: 'completion.js' }).first().click();
  await page.locator('.monaco-editor .inputarea').first().focus();
  await page.keyboard.press('ControlOrMeta+End');
  await page.keyboard.insertText(' ');
  await Promise.race([inference.promise, new Promise((_, reject) => {
    const timer = setTimeout(() => reject(new Error('No native autocomplete request observed')), 25000);
    timer.unref();
  })]);
  // Tab must be pressed while the suggestion is shown, and files read only after
  // their save completed; fixed delays raced both on a loaded host.
  await ghost('42').waitFor({ timeout: 25000 });
  await page.screenshot({ path: join(directory, 'suggestion.png') });
  await pressTab(page);
  await saveFile(page, file);
  const accepted = await readFile(file, 'utf8');
  assert.match(accepted, /const answer =\s+42/);
  await page.keyboard.press('ControlOrMeta+z');
  await saveFile(page, file);
  assert.doesNotMatch(await readFile(file, 'utf8'), /42/);
  phase = 'multiline';
  await page.keyboard.press('Escape');
  await page.keyboard.press('ControlOrMeta+a');
  await page.keyboard.insertText('const items = [\n \n];');
  await page.keyboard.press('ControlOrMeta+Home');
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('End');
  await page.keyboard.insertText(' ');
  await saveFile(page, file);
  await Promise.race([multiline.promise, new Promise((_, reject) => {
    const timer = setTimeout(() => reject(new Error('No multiline autocomplete request observed')), 25000); timer.unref();
  })]);
  await ghost('café').waitFor({ timeout: 25000 });
  await page.screenshot({ path: join(directory, 'multiline.png') });
  await pressTab(page);
  await saveFile(page, file);
  assert.equal((await readFile(file, 'utf8')).replaceAll('\r\n', '\n'), 'const items = [\n  "café 日本語",\n  "😀"\n];');
  await page.keyboard.press('ControlOrMeta+z');
  await saveFile(page, file);
  assert.equal((await readFile(file, 'utf8')).replaceAll('\r\n', '\n'), 'const items = [\n  \n];');
  let failures, editingResult;
  if (editing) {
    phase = 'editing';
    result.editing = {};
    editingResult = await verifyCompletionEditing({ page, file, directory, fixture: editingFixture }, result.editing);
  } else if (acceptance) {
    phase = 'acceptance';
    result.acceptance = {};
    await verifyCompletionAcceptance({ page, file, directory, appRoot, fixture: acceptanceFixture }, result.acceptance);
  } else failures = await verifyCompletionFailures({ page, file, directory, requests, setPhase: value => { phase = value; } });
  phase = 'simple';
  await page.keyboard.press('Escape'); await page.keyboard.press('ControlOrMeta+a');
  await page.keyboard.insertText('const recovered ='); await page.keyboard.press('End');
  await page.keyboard.insertText(' ');
  await ghost('42').waitFor({ timeout: 25000 });
  await pressTab(page); await saveFile(page, file);
  assert.equal((await readFile(file, 'utf8')).trim(), 'const recovered = 42', 'Valid completion recovers after rejection');
  assert.ok(requests.every(request => request.model === 'fixture-coder' && request.authorized));
  assert.deepEqual(errors, []);
  Object.assign(result, { success: true, checked_at: new Date().toISOString(), platform: process.platform,
    native_suggestion: true, tab_accept: true, undo: true, multiline_unicode_accept_undo: true, failures,
    ...(editing ? { editing: editingResult } : acceptance ? { acceptance: result.acceptance } : { recovery_after_rejection: true }), requests, errors,
    hashes: { completionHttp: await fileHash(join(runtimeRoot, 'desktop/completion-http.mjs')),
      completionIpc: await fileHash(join(appRoot, 'out/openvision-completion-ipc.js')),
      workbench: await fileHash(join(appRoot, 'out/vs/workbench/workbench.desktop.main.js')),
      provider: await fileHash(join(appRoot, 'out/vs/code/electron-sandbox/workbench/openvision-completion-provider.js')) },
    provider_scope: 'Controlled local HTTP fixture; external provider quality/compatibility not established.' });
} catch (error) {
  const page = app?.windows()[0];
  if (page) {
    await page.screenshot({ path: join(directory, 'failure.png') }).catch(() => {});
    await writeFile(join(directory, 'failure.txt'), await page.locator('body').innerText()).catch(() => {});
  }
  await writeFile(join(directory, 'requests.json'), JSON.stringify(requests, null, 2));
  result.editingEvents = editingFixture.events;
  result.success = false; result.failure = error.stack; process.exitCode = 1;
} finally {
  if (app) {
    const child = app.process();
    try { await app.close(); }
    catch (error) { result.success = false; result.cleanupFailure = error.stack; process.exitCode = 1; }
    result.hostExit = child.exitCode;
    if (child.exitCode !== 0) { result.success = false; result.cleanupFailure ??= `Host exited ${child.exitCode}`; process.exitCode = 1; }
  }
  server.closeAllConnections(); await new Promise(resolve => server.close(resolve));
  await writeFile(join(directory, 'result.json'), JSON.stringify(result, null, 2));
  console.log(JSON.stringify(result, null, 2));
}
