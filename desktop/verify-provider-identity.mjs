import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { mkdir, mkdtemp, writeFile, readFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { _electron } from '../tooling/browser.mjs';
import { verificationRuntime } from './verification-runtime.mjs';
import { verificationSettings } from './verification-profile.mjs';
import { linuxSandboxArguments } from './platform.mjs';
import { fileHash } from './import-files.mjs';
import { verifyProviderLifecycle } from './verify-provider-lifecycle.mjs';
import { enterWorkspace } from './verification-workspace.mjs';
import { execFileSync } from 'node:child_process';
import { arch, release } from 'node:os';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const { layout, appRoot, portable } = await verificationRuntime(root);
const directory = await mkdtemp(join(root, 'logs/provider-identity-'));
const profile = join(directory, 'profile'), project = join(directory, 'project');
await mkdir(join(profile, 'User'), { recursive: true }); await mkdir(project);
await writeFile(join(profile, 'User/settings.json'), JSON.stringify({ ...verificationSettings,
  'editor.quickSuggestions': false, 'git.openRepositoryInParentFolders': 'never' }));
const file = join(project, 'hello.js'); await writeFile(file, 'const answer = ');
const result = { success: false, portable: portable ?? null, platform: process.platform, arch: arch(), osRelease: release(),
  commit: execFileSync('git', ['rev-parse', 'HEAD'], { cwd: root, encoding: 'utf8' }).trim(),
  checkedAt: new Date().toISOString(), requests: [], connections: [], errors: [], exits: [],
  hashes: Object.fromEntries(await Promise.all(['out/vs/workbench/workbench.desktop.main.js',
    'extensions/cursor-agent-exec/dist/main.js', 'desktop/model-providers.js', 'desktop/model-identity.js',
    'desktop/provider-headers.js', 'desktop/provider-credentials.js', 'desktop/provider-error-policy.js',
    'desktop/verify-provider-identity.mjs', 'desktop/verify-provider-lifecycle.mjs'].map(async path =>
      [path, await fileHash(join(path.startsWith('desktop/') ? root : appRoot, path))]))) };
let phase = 'first', childId, taskIssued = false;
const completionArrived = Promise.withResolvers();
const server = createServer(async (request, response) => {
  const provider = request.url?.split('/')[1];
  const customAuthorized = request.headers['x-provider-token'] === `header-${provider}`;
  const authorized = request.headers.authorization === (provider === 'a' ? 'Custom fixture-a' : `Bearer fixture-${provider}`) && customAuthorized;
  result.connections.push({ phase, provider, path: request.url, authorized, customAuthorized });
  if (!authorized) { response.writeHead(401); response.end('{}'); return; }
  if (request.url === `/${provider}/v1/models`) {
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify({ data: [{ id: 'shared-coder', name: 'Shared Coder' }] })); return;
  }
  if (request.url !== `/${provider}/v1/chat/completions`) { response.writeHead(404); response.end(); return; }
  const chunks = []; for await (const chunk of request) chunks.push(chunk);
  const payload = JSON.parse(Buffer.concat(chunks));
  result.requests.push({ phase, provider, authorized, model: payload.model, stream: payload.stream });
  if (!payload.stream) {
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify({ choices: [{ message: { role: 'assistant', content: '42' }, finish_reason: 'stop' }] }));
    completionArrived.resolve(); return;
  }
  response.writeHead(200, { 'Content-Type': 'text/event-stream' });
  const event = (delta, finish_reason = null) => response.write(`data: ${JSON.stringify({ id: 'identity-fixture',
    object: 'chat.completion.chunk', model: payload.model, choices: [{ index: 0, delta, finish_reason }] })}\n\n`);
  if (phase === 'child' && provider === 'a' && !taskIssued) {
    taskIssued = true;
    event({ role: 'assistant', tool_calls: [{ index: 0, id: 'identity_child', type: 'function', function: {
      name: 'Task', arguments: JSON.stringify({ description: 'Verify provider B routing',
        prompt: 'Reply with Child provider verified. Do not use tools.', model: childId, subagent_type: 'generalPurpose' }),
    } }] }); event({}, 'tool_calls');
  } else {
    event({ role: 'assistant', content: phase === 'child' && provider === 'b' ? 'Child provider verified.' : `Provider ${provider} ${phase} verified.` });
    event({}, 'stop');
  }
  response.end('data: [DONE]\n\n');
});
await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
let app, page;
async function launch() {
  const env = { ...process.env }; delete env.ELECTRON_RUN_AS_NODE;
  app = await _electron.launch({ executablePath: layout.executable, env, timeout: 60000,
    args: ['--user-data-dir', profile, '--extensions-dir', join(directory, 'extensions'), '--new-window',
      '--disable-updates', '--skip-welcome', '--skip-release-notes', '--disable-telemetry', '--disable-crash-reporter',
      ...(process.platform === 'linux' ? await linuxSandboxArguments(layout.host) : []), project, file] });
  page = await app.firstWindow(); page.setDefaultTimeout(15000);
  page.on('pageerror', error => result.errors.push(error.message));
  await page.locator('.part.titlebar .openvision-local-profile').waitFor({ timeout: 60000 });
  await page.waitForTimeout(8000);
  await enterWorkspace(page);
}
async function chatInput() {
  const input = page.locator('.aislash-editor-input[contenteditable=true]').filter({ visible: true }).first();
  if (!await input.isVisible()) {
    await page.locator('.tabs-container .tab').filter({ hasText: 'hello.js' }).first().click();
    await page.keyboard.press('ControlOrMeta+Shift+l');
  }
  await input.waitFor();
  return input;
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
async function selectModel(index) {
  await chatInput();
  await page.locator('.vscode-model-picker__trigger-markdown').filter({ visible: true }).first().click();
  const menu = page.getByTestId('model-picker-menu').filter({ visible: true });
  const rows = menu.locator('[data-model-picker-item-name]');
  assert.equal(await rows.count(), 2);
  const ids = await rows.evaluateAll(nodes => nodes.map(node => node.getAttribute('data-model-picker-item-name')));
  assert.notEqual(ids[0], ids[1]); childId = ids[1];
  await page.screenshot({ path: join(directory, 'duplicate-models.png') });
  await rows.nth(index).click();
}
async function infer(provider, label) {
  phase = label;
  const input = await chatInput();
  await input.fill(label === 'child' ? 'Use provider B in a Task subagent and confirm it worked.' : `Reply with Provider ${provider} ${label} verified. Do not use tools.`);
  await input.press('Enter');
  await page.getByText(`Provider ${provider} ${label} verified.`, { exact: true }).first().waitFor({ timeout: 60000 });
  await page.locator('.stop-button').filter({ visible: true }).waitFor({ state: 'hidden' });
  const requests = result.requests.filter(request => request.phase === label);
  if (label !== 'child') assert.deepEqual(requests.map(request => request.provider), [provider]);
}
try {
  await launch();
  const panel = await settings();
  for (const id of ['a', 'b']) {
    await panel.getByRole('button', { name: 'Add Provider', exact: true }).click();
    await page.getByLabel('Provider Name', { exact: true }).fill(`Provider ${id.toUpperCase()}`);
    await page.getByLabel('API Base URL', { exact: true }).fill(`http://127.0.0.1:${server.address().port}/${id}/v1`);
    await page.getByLabel('API Key', { exact: true }).fill(`fixture-${id}`);
    await page.getByLabel('Additional Headers (JSON)', { exact: true }).fill(JSON.stringify({ 'X-Provider-Token': `header-${id}`,
      ...(id === 'a' ? { Authorization: 'Custom fixture-a' } : {}) }));
    await page.locator('dialog').getByRole('button', { name: 'Save', exact: true }).click();
    await page.locator('dialog').waitFor({ state: 'detached' });
    await panel.locator('.openvision-provider').filter({ hasText: `Provider ${id.toUpperCase()}` })
      .getByText('Shared Coder', { exact: true }).waitFor();
  }
  await page.locator('.tabs-container .tab').filter({ hasText: 'hello.js' }).first().click();
  await page.keyboard.press('ControlOrMeta+Shift+l');
  await selectModel(0); await infer('a', 'first');
  await selectModel(1); await infer('b', 'second');
  await closeApp(); await launch(); await infer('b', 'restart');
  result.selectionSurvivesRestart = true;
  await selectModel(0); await infer('a', 'child');
  assert.deepEqual(result.requests.filter(request => request.phase === 'child').map(request => request.provider), ['a', 'b', 'a']);
  result.childProviderRouting = true;
  const models = await settings();
  await models.getByRole('combobox', { name: 'Tab autocomplete model' }).selectOption({ label: 'Provider B · Shared Coder' });
  await page.locator('.tabs-container .tab').filter({ hasText: 'hello.js' }).first().click();
  phase = 'completion';
  await page.locator('.monaco-editor .inputarea').first().focus();
  await page.keyboard.press('ControlOrMeta+End'); await page.keyboard.insertText(' ');
  await Promise.race([completionArrived.promise, new Promise((_, reject) => {
    const timer = setTimeout(() => reject(new Error('Autocomplete did not reach provider B')), 30000); timer.unref();
  })]);
  await page.waitForTimeout(2000);
  await page.keyboard.press('Tab'); await page.keyboard.press('ControlOrMeta+s');
  await page.waitForTimeout(700);
  assert.match(await readFile(file, 'utf8'), /const answer =\s+42/);
  const completions = result.requests.filter(request => request.phase === 'completion');
  assert.ok(completions.length > 0 && completions.every(request => request.provider === 'b'));
  assert.ok(result.requests.every(request => request.authorized && request.model === 'shared-coder'));
  await verifyProviderLifecycle({ page, settings, result, infer, chatInput, setPhase: label => { phase = label; },
    restart: async () => { await closeApp(); await launch(); return page; } });
  assert.ok(result.connections.every(connection => connection.authorized));
  result.customHeaderDiscoveryAgentChildCompletionRestart = true;
  assert.deepEqual(result.errors, []); result.success = true;
} catch (error) {
  result.failure = error.stack; process.exitCode = 1;
  await page?.screenshot({ path: join(directory, 'failure.png') }).catch(() => {});
  await writeFile(join(directory, 'failure.txt'), await page?.locator('body').innerText() ?? '').catch(() => {});
} finally {
  try { await closeApp(); } catch (error) { result.cleanupFailure = error.stack; result.success = false; process.exitCode = 1; }
  server.closeAllConnections(); await new Promise(resolve => server.close(resolve));
  await writeFile(join(directory, 'result.json'), JSON.stringify(result, null, 2));
  console.log(JSON.stringify({ ...result, directory }, null, 2));
}
