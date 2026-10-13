import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { mkdir, mkdtemp, writeFile } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { _electron } from '../tooling/browser.mjs';
import { loadRuntime } from './source-assembly.mjs';
import { verificationSettings } from './verification-profile.mjs';
import { fileHash } from './import-files.mjs';

const root = resolve(import.meta.dirname, '..'), { layout } = await loadRuntime(root);
const directory = await mkdtemp(join(root, 'logs/subagent-reasoning-'));
const profile = join(directory, 'profile'), project = join(directory, 'project');
await mkdir(join(profile, 'User'), { recursive: true }); await mkdir(project);
await writeFile(join(profile, 'User/settings.json'), JSON.stringify({ ...verificationSettings, 'git.openRepositoryInParentFolders': 'never' }));
const file = join(project, 'example.js'); await writeFile(file, '// Native subagent reasoning check\n');
const result = { success: false, checkedAt: new Date().toISOString(), platform: process.platform,
  scope: 'Windows native Task child reasoning with a simulated API. No live model compatibility claim.',
  requests: [], errors: [], hostExits: [], hashes: Object.fromEntries(await Promise.all([
    'desktop/verify-subagent-reasoning.mjs', 'source/app/extensions/cursor-agent-exec/dist/main.js',
    'source/app/out/vs/workbench/workbench.desktop.main.js',
  ].map(async path => [path, await fileHash(join(root, path))]))) };
let phase = 'inherit', taskIssued = false, childLevels = ['low', 'ultra'];
const server = createServer(async (request, response) => {
  if (request.headers.authorization !== 'Bearer subagent-fixture') { response.writeHead(401); response.end(); return; }
  if (request.url === '/v1/models') {
    response.setHeader('content-type', 'application/json');
    response.end(JSON.stringify({ data: [
      { id: 'parent-thinker', name: 'Parent Thinker', capabilities: { reasoning_effort: ['low', 'high'] } },
      { id: 'child-thinker', name: 'Child Thinker', capabilities: { reasoning_effort: childLevels } },
    ] })); return;
  }
  const chunks = []; for await (const chunk of request) chunks.push(chunk);
  const body = JSON.parse(Buffer.concat(chunks));
  const toolResult = body.messages?.find(message => message.role === 'tool' && message.tool_call_id === `task_${phase}`)?.content;
  const continuation = toolResult !== undefined;
  result.requests.push({ phase, model: body.model, reasoning: body.reasoning_effort ?? body.reasoning?.effort,
    role: !taskIssued ? 'parent' : continuation ? 'continuation' : 'child',
    toolResult: continuation ? JSON.stringify(toolResult) : undefined,
    childResultReturned: continuation && JSON.stringify(toolResult).includes('CHILD_REASONING_OK') });
  response.writeHead(200, { 'content-type': 'text/event-stream' });
  const event = (delta, finish_reason = null) => response.write(`data: ${JSON.stringify({ id: 'subagent-reasoning',
    choices: [{ index: 0, delta, finish_reason }] })}\n\n`);
  if (!taskIssued) {
    taskIssued = true;
    event({ role: 'assistant', tool_calls: [{ index: 0, id: `task_${phase}`, type: 'function', function: {
      name: 'Task', arguments: JSON.stringify({ description: `Check ${phase} reasoning`,
        prompt: 'Reply CHILD_REASONING_OK. Do not use tools.', subagent_type: phase === 'inherit' ? 'generalPurpose' : 'explore' }),
    } }] }); event({}, 'tool_calls');
  } else {
    event({ role: 'assistant', content: continuation ? `Verified ${phase}.` : 'CHILD_REASONING_OK' }); event({}, 'stop');
  }
  response.end('data: [DONE]\n\n');
});
await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
let app, page;
async function dismissMenu() {
  await page.mouse.move(0, 0);
  const backdrop = page.locator('[data-component="menu-backdrop"]').filter({ visible: true });
  for (let i = 0; i < 4 && await backdrop.count(); i++) await page.keyboard.press('Escape');
  await backdrop.waitFor({ state: 'hidden' });
}
async function configure() {
  await page.locator('.part.titlebar a[aria-label$=" Settings"]').click();
  await page.locator('.cursor-settings-sidebar-cell-label').filter({ hasText: /^Models$/ }).locator('..').click();
  await page.getByRole('button', { name: 'Add Provider', exact: true }).click();
  await page.getByLabel('Provider Name', { exact: true }).fill('Subagent fixture');
  await page.getByLabel('API Base URL', { exact: true }).fill(`http://127.0.0.1:${server.address().port}/v1`);
  await page.getByLabel('API Key', { exact: true }).fill('subagent-fixture');
  await page.locator('dialog').getByRole('button', { name: 'Save', exact: true }).click();
  await page.locator('dialog').waitFor({ state: 'detached' });
  await page.locator('.tabs-container .tab').filter({ hasText: 'example.js' }).first().click();
}
async function selectHigh() {
  await page.locator('.vscode-model-picker__trigger-markdown').filter({ visible: true }).first().click();
  const menu = page.getByTestId('model-picker-menu').filter({ visible: true });
  const row = menu.getByRole('menuitem').filter({ has: page.locator('[data-model-picker-item-name]').filter({ hasText: 'Parent Thinker' }) });
  await row.focus(); await row.press('ArrowRight');
  await page.getByTestId('parameter-submenu').filter({ visible: true }).first().waitFor();
  await page.getByText('Reasoning', { exact: true }).filter({ visible: true }).last().hover();
  await page.getByText('High', { exact: true }).filter({ visible: true }).last().click();
  await dismissMenu();
}
async function launch() {
  const env = { ...process.env }; delete env.ELECTRON_RUN_AS_NODE;
  app = await _electron.launch({ executablePath: layout.executable, env, timeout: 60000,
    args: ['--user-data-dir', profile, '--extensions-dir', join(directory, 'extensions'), '--new-window',
      '--disable-updates', '--skip-welcome', '--skip-release-notes', '--disable-telemetry', '--disable-crash-reporter', project, file] });
  page = await app.firstWindow(); page.setDefaultTimeout(15000);
  page.on('pageerror', error => result.errors.push(error.message));
  await page.locator('.part.titlebar .openvision-local-profile').waitFor({ timeout: 60000 });
  await page.waitForTimeout(8000);
}
async function close() {
  if (!app) return;
  await dismissMenu();
  const stop = page.locator('.stop-button').filter({ visible: true });
  if (await stop.count()) await stop.first().click();
  const child = app.process(), closing = app.close();
  await page.getByText('Quit Anyway', { exact: true }).click({ timeout: 3000 }).catch(() => {});
  await closing;
  result.hostExits.push({ pid: child.pid, exitCode: child.exitCode, signalCode: child.signalCode });
  assert.equal(child.exitCode, 0); app = undefined;
}
async function infer(label) {
  phase = label; taskIssued = false;
  await page.locator('.tabs-container .tab').filter({ hasText: 'example.js' }).first().click();
  const input = page.locator('.aislash-editor-input[contenteditable=true]').filter({ visible: true }).first();
  await input.fill(`Use a ${label === 'inherit' ? 'general purpose' : 'Explore'} Task subagent to reply CHILD_REASONING_OK. Then confirm completion.`);
  await input.press('Enter');
  await page.getByText(`Verified ${label}.`, { exact: true }).filter({ visible: true }).first().waitFor({ timeout: 60000 });
  await page.locator('.stop-button').filter({ visible: true }).waitFor({ state: 'hidden' });
  return result.requests.filter(request => request.phase === label);
}
async function settings() {
  const tab = page.locator('.tabs-container .tab').filter({ hasText: 'OpenVision Settings' });
  if (await tab.count()) await tab.first().click();
  else await page.locator('.part.titlebar a[aria-label$=" Settings"]').click();
  await page.locator('.cursor-settings-sidebar-cell-label').filter({ hasText: /^Models$/ }).locator('..').click();
  return page.getByRole('group', { name: 'Task Models', exact: true });
}
async function chooseChildReasoning(label) {
  const taskModels = await settings();
  await taskModels.getByRole('button').first().click();
  const row = page.getByTestId('model-picker-menu').filter({ visible: true }).getByRole('menuitem')
    .filter({ has: page.locator('[data-model-picker-item-name]').filter({ hasText: 'Child Thinker' }) });
  await row.focus(); await row.press('ArrowRight');
  await page.getByTestId('parameter-submenu').filter({ visible: true }).first().waitFor();
  await page.getByText('Reasoning', { exact: true }).filter({ visible: true }).last().hover();
  await page.getByText(label, { exact: true }).filter({ visible: true }).last().click();
  await dismissMenu();
}
try {
  await launch();
  await configure(); await selectHigh();
  await infer('inherit');
  await page.screenshot({ path: join(directory, 'inherit.png') });
  assert.deepEqual(result.requests.map(request => request.role), ['parent', 'child', 'continuation']);
  assert.equal(result.requests.at(-1).childResultReturned, true);
  assert.deepEqual(result.requests.map(request => request.reasoning), ['high', 'high', 'high']);
  let taskModels = await settings();
  result.taskModelControls = await taskModels.ariaSnapshot();
  await chooseChildReasoning('Ultra');
  await taskModels.getByText(/Child Thinker/).waitFor();
  result.overrideLabel = await taskModels.innerText();
  const override = await infer('override');
  assert.deepEqual(override.map(request => [request.model, request.reasoning]), [
    ['parent-thinker', 'high'], ['child-thinker', 'ultra'], ['parent-thinker', 'high'],
  ]);
  assert.equal(override.at(-1).childResultReturned, true);
  await close(); await launch();
  taskModels = await settings();
  await taskModels.getByText('Child Thinker · Ultra', { exact: true }).waitFor();
  const restarted = await infer('restart');
  assert.deepEqual(restarted.map(request => [request.model, request.reasoning]), override.map(request => [request.model, request.reasoning]));
  assert.equal(restarted.at(-1).childResultReturned, true);
  await settings();
  childLevels = ['low'];
  await page.getByRole('button', { name: 'Discover Models', exact: true }).click();
  await page.waitForFunction(() => document.querySelector('.openvision-model-settings')?.dataset.busy === 'false');
  await page.locator('.openvision-subagent-status').getByText(/ultra.*unavailable/).waitFor();
  result.unavailableReasoningNotice = await page.locator('.openvision-subagent-status').innerText();
  result.unavailableOverrideLabel = await taskModels.innerText();
  const invalid = await infer('invalid');
  assert.deepEqual(invalid.map(request => request.role), ['parent', 'continuation']);
  assert.match(invalid.at(-1).toolResult, /reasoning level.*(?:unavailable|no longer available)/i);
  assert.equal(invalid.at(-1).childResultReturned, false);
  await chooseChildReasoning('Low');
  assert.equal(await page.locator('.openvision-subagent-status').count(), 0);
  const recovery = await infer('recovery');
  assert.deepEqual(recovery.map(request => [request.model, request.reasoning]), [
    ['parent-thinker', 'high'], ['child-thinker', 'low'], ['parent-thinker', 'high'],
  ]);
  await settings();
  await page.getByRole('checkbox', { name: 'Enable Child Thinker', exact: true }).uncheck();
  await page.waitForFunction(() => document.querySelector('.openvision-model-settings')?.dataset.busy === 'false');
  await page.locator('.openvision-subagent-status').getByText(/selected Explore model is unavailable/).waitFor();
  result.disabledModelNotice = await page.locator('.openvision-subagent-status').innerText();
  assert.equal(await taskModels.getByRole('button', { name: 'Inherit from parent', exact: true }).count(), 0);
  const disabledModel = await infer('disabled-model');
  assert.deepEqual(disabledModel.map(request => request.role), ['parent', 'continuation']);
  assert.match(disabledModel.at(-1).toolResult, /(?:model|provider).*unavailable/i);
  await settings();
  await taskModels.getByRole('button').first().click();
  const disabled = page.getByTestId('model-picker-menu').filter({ visible: true }).locator('[data-model-picker-item-name="none"]');
  await disabled.click(); await dismissMenu();
  const disabledType = await infer('disabled-explore');
  assert.deepEqual(disabledType.map(request => request.role), ['parent', 'continuation']);
  assert.equal(disabledType.at(-1).childResultReturned, false);
  assert.deepEqual(result.errors, []); result.success = true;
} catch (error) {
  result.error = error.stack; process.exitCode = 1;
  await page?.screenshot({ path: join(directory, 'failure.png') }).catch(() => {});
  await writeFile(join(directory, 'failure.txt'), await page?.locator('body').innerText() ?? '').catch(() => {});
} finally {
  if (app) {
    try { await close(); } catch (error) { result.cleanupError = error.message; result.success = false; process.exitCode = 1; }
  }
  server.closeAllConnections(); await new Promise(resolve => server.close(resolve));
  await writeFile(join(directory, 'result.json'), JSON.stringify(result, null, 2));
  console.log(JSON.stringify({ ...result, directory }, null, 2));
}
