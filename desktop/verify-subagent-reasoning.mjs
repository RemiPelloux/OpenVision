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
const directory = await mkdtemp(join(root, 'logs/subagent-reasoning-'));
const profile = join(directory, 'profile'), project = join(directory, 'project');
await mkdir(join(profile, 'User/agents'), { recursive: true }); await mkdir(project);
await writeFile(join(profile, 'User/settings.json'), JSON.stringify({ ...verificationSettings, 'git.openRepositoryInParentFolders': 'never' }));
// A profile-defined (user) subagent with its own model; its reasoning is that model's saved choice.
await writeFile(join(profile, 'User/agents/fixture-reviewer.md'),
  '---\nname: fixture-reviewer\ndescription: Fixture reviewer that replies with a marker.\nmodel: agent-thinker\n---\nReply with the requested marker.\n');
const file = join(project, 'example.js'); await writeFile(file, '// Native subagent reasoning check\n');
const result = { success: false, checkedAt: new Date().toISOString(), platform: process.platform, arch: process.arch,
  scope: 'Native Task child model/reasoning, labels, failures, retry, resume and restart with a simulated API. Fixture responses; no live model compatibility claim.',
  requests: [], errors: [], hostExits: [], labels: {}, hashes: Object.fromEntries(await Promise.all([
    'desktop/verify-subagent-reasoning.mjs', 'source/app/extensions/cursor-agent-exec/dist/main.js',
    'source/app/out/vs/workbench/workbench.desktop.main.js',
  ].map(async path => [path, await fileHash(join(root, path))]))) };
const names = { 'parent-thinker': 'Parent Thinker', 'child-thinker': 'Child Thinker', 'agent-thinker': 'Agent Thinker' };
const levels = { low: 'Low', medium: 'Medium', high: 'High', ultra: 'Ultra' };
const marker = 'CHILD_REASONING_OK';
// phase → Task arguments; plan → queued behaviours per request role (default: succeed).
let phase = 'inherit', childLevels = ['low', 'ultra'], task = {}, plan = { child: [], continuation: [] };
const held = new Set();
const server = createServer(async (request, response) => {
  if (request.headers.authorization !== 'Bearer subagent-fixture') { response.writeHead(401); response.end(); return; }
  if (request.url === '/v1/models') {
    response.setHeader('content-type', 'application/json');
    response.end(JSON.stringify({ data: [
      { id: 'parent-thinker', name: 'Parent Thinker', capabilities: { reasoning_effort: ['low', 'high'] } },
      { id: 'child-thinker', name: 'Child Thinker', capabilities: { reasoning_effort: childLevels } },
      { id: 'agent-thinker', name: 'Agent Thinker', capabilities: { reasoning_effort: ['low', 'medium'] } },
    ] })); return;
  }
  const chunks = []; for await (const chunk of request) chunks.push(chunk);
  const body = JSON.parse(Buffer.concat(chunks));
  const text = value => typeof value === 'string' ? value : JSON.stringify(value ?? '');
  const child = body.messages?.some(message => message.role === 'user' && text(message.content).includes(`Reply ${marker}`));
  const toolResult = body.messages?.find(message => message.role === 'tool' && message.tool_call_id === `task_${phase}`)?.content;
  const role = child ? 'child' : toolResult !== undefined ? 'continuation' : 'parent';
  const behaviour = (role === 'parent' ? undefined : plan[role].shift()) ?? 'ok';
  const record = { phase, model: body.model, reasoning: body.reasoning_effort ?? body.reasoning?.effort, role, behaviour,
    messages: body.messages?.length ?? 0, toolResult: toolResult !== undefined ? text(toolResult) : undefined,
    childResultReturned: toolResult !== undefined && text(toolResult).includes(marker),
    agentId: toolResult !== undefined ? /Agent ID: ([\w-]+)/.exec(text(toolResult))?.[1] : undefined };
  result.requests.push(record);
  if (behaviour === '503') {
    response.writeHead(503, { 'content-type': 'application/json' });
    return response.end(JSON.stringify({ error: { message: `fixture ${role} 503 ${phase}`, type: 'fixture_error' } }));
  }
  response.writeHead(200, { 'content-type': 'text/event-stream' });
  const event = (delta, finish_reason = null) => response.write(`data: ${JSON.stringify({ id: 'subagent-reasoning',
    choices: [{ index: 0, delta, finish_reason }] })}\n\n`);
  if (behaviour === 'hold') {
    held.add(response); response.on('close', () => { held.delete(response); record.socketClosed = true; });
    event({ role: 'assistant', content: 'Child working ' }); return;
  }
  if (behaviour === 'nofinish') {
    // Partial output, then the stream ends without a finish reason or [DONE].
    event({ role: 'assistant', content: `partial ${role} ${phase} ` });
    await new Promise(resolveWait => setTimeout(resolveWait, 300)); return response.end();
  }
  if (role === 'parent') {
    event({ role: 'assistant', tool_calls: [{ index: 0, id: `task_${phase}`, type: 'function', function: {
      name: 'Task', arguments: JSON.stringify({ description: `Check ${phase} reasoning`,
        prompt: `Reply ${marker}. Do not use tools.`, ...task }) } }] });
    event({}, 'tool_calls');
  } else {
    event({ role: 'assistant', content: role === 'continuation' ? `Verified ${phase}.` : marker }); event({}, 'stop');
  }
  response.end('data: [DONE]\n\n');
});
await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
let app, page;
const input = () => page.locator('.aislash-editor-input[contenteditable=true]').filter({ visible: true }).first();
const idle = () => page.locator('.stop-button').filter({ visible: true }).waitFor({ state: 'hidden', timeout: 30000 });
const pairs = requests => requests.map(request => [request.model, request.reasoning]);
const since = index => result.requests.slice(index);
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
async function selectReasoning(model, level) {
  await page.locator('.vscode-model-picker__trigger-markdown').filter({ visible: true }).first().click();
  const menu = page.getByTestId('model-picker-menu').filter({ visible: true });
  const row = menu.getByRole('menuitem').filter({ has: page.locator('[data-model-picker-item-name]').filter({ hasText: model }) });
  await row.focus(); await row.press('ArrowRight');
  await page.getByTestId('parameter-submenu').filter({ visible: true }).first().waitFor();
  await page.getByText('Reasoning', { exact: true }).filter({ visible: true }).last().hover();
  await page.getByText(level, { exact: true }).filter({ visible: true }).last().click();
  await dismissMenu();
}
async function launch() {
  const env = { ...process.env }; delete env.ELECTRON_RUN_AS_NODE;
  app = await _electron.launch({ executablePath: layout.executable, env, timeout: 60000,
    args: ['--user-data-dir', profile, '--extensions-dir', join(directory, 'extensions'), '--new-window',
      '--disable-updates', '--skip-welcome', '--skip-release-notes', '--disable-telemetry', '--disable-crash-reporter', project, file] });
  page = await app.firstWindow(); page.setDefaultTimeout(15000);
  page.on('pageerror', error => result.errors.push(error.message));
  await page.locator('.part.titlebar .openvision-local-profile').waitFor({ state: 'attached', timeout: 60000 }); await enterWorkspace(page);
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
function setPhase(label, args = {}, queued = {}) {
  phase = label; task = args; plan = { child: [...(queued.child ?? [])], continuation: [...(queued.continuation ?? [])] };
}
async function send(label) {
  await page.locator('.tabs-container .tab').filter({ hasText: 'example.js' }).first().click();
  await input().fill(`Use a Task subagent for the ${label} check, then reply ${marker}. Then confirm completion.`);
  await input().press('Enter');
}
async function infer(label, args = { subagent_type: label === 'inherit' ? 'generalPurpose' : 'explore' }, queued = {}) {
  setPhase(label, args, queued);
  await send(label);
  await page.getByText(`Verified ${label}.`, { exact: true }).filter({ visible: true }).first().waitFor({ timeout: 60000 });
  await idle();
  return result.requests.filter(request => request.phase === label);
}
// The Task row shows the child's model label (Explore and custom types show it on hover). It must name
// the model and reasoning the observed child request actually used.
async function childLabel(label, hover) {
  const card = page.locator('[data-subagent-task-card="true"]').filter({ hasText: `Check ${label} reasoning` }).last();
  const model = card.locator('[data-subagent-task-model="true"]');
  const visible = (await model.innerText()).trim();
  const child = result.requests.find(request => request.phase === label && request.role === 'child');
  const expected = `${names[child.model]} · ${levels[child.reasoning] ?? 'Provider default'}`;
  let shown = visible;
  if (hover) {
    await model.hover();
    const popup = page.getByText(expected, { exact: true }).filter({ visible: true }).first();
    await popup.waitFor({ timeout: 5000 }).catch(() => {});
    shown = await popup.count() ? (await popup.innerText()).trim() : `(no hover label; row shows ${visible})`;
    await page.mouse.move(0, 0);
  }
  result.labels[label] = { visible, shown, request: [child.model, child.reasoning], expected };
  assert.equal(shown, expected, `${label}: visible child status must match the observed child request`);
  assert.doesNotMatch(shown, /Provider default/, `${label}: an explicit child level must not be labelled Provider default`);
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
const expectedOverride = [['parent-thinker', 'high'], ['child-thinker', 'ultra'], ['parent-thinker', 'high']];
// A parent request after the Task fails; the explicit recovery action replays the parent once and never re-runs the child.
async function parentFailureAfterTask(label, behaviour, action) {
  setPhase(label, { subagent_type: 'explore' }, { continuation: [behaviour] });
  const before = result.requests.length;
  await send(label);
  const recovery = page.getByText(action, { exact: true }).filter({ visible: true }).last();
  await recovery.waitFor({ timeout: 60000 }); await idle();
  await page.waitForTimeout(2500); // no automatic retry within the former SDK delay
  const failed = since(before);
  assert.deepEqual(failed.map(request => request.role), ['parent', 'child', 'continuation'], `${label}: one attempt each before recovery`);
  assert.deepEqual(pairs(failed), expectedOverride, `${label}: child keeps its explicit model and reasoning, parent keeps its own`);
  return { failed, recovery };
}
async function recover(label, recovery) {
  const before = result.requests.length;
  await recovery.click();
  await page.getByText(`Verified ${label}.`, { exact: true }).filter({ visible: true }).first().waitFor({ timeout: 60000 });
  await idle(); await page.waitForTimeout(2500);
  const retried = since(before);
  assert.deepEqual(retried.map(request => request.role), ['continuation'], `${label}: recovery sends once and does not re-run the child`);
  assert.deepEqual(pairs(retried), [['parent-thinker', 'high']], `${label}: recovery keeps the parent model and reasoning`);
  assert.equal(retried[0].childResultReturned, true, `${label}: recovery replays the existing child result`);
  return retried;
}
try {
  await launch();
  await configure();
  // Save Medium for the profile subagent's model, then select the parent model with High.
  await selectReasoning('Agent Thinker', 'Medium'); await selectReasoning('Parent Thinker', 'High');
  await infer('inherit');
  await page.screenshot({ path: join(directory, 'inherit.png') });
  assert.deepEqual(result.requests.map(request => request.role), ['parent', 'child', 'continuation']);
  assert.equal(result.requests.at(-1).childResultReturned, true);
  assert.deepEqual(result.requests.map(request => request.reasoning), ['high', 'high', 'high']);
  await childLabel('inherit', false);
  let taskModels = await settings();
  result.taskModelControls = await taskModels.ariaSnapshot();
  await chooseChildReasoning('Ultra');
  await taskModels.getByText(/Child Thinker/).waitFor();
  result.overrideLabel = await taskModels.innerText();
  const override = await infer('override');
  assert.deepEqual(pairs(override), expectedOverride);
  assert.equal(override.at(-1).childResultReturned, true);
  await childLabel('override', true);
  const overrideAgent = override.at(-1).agentId;
  assert.ok(overrideAgent, 'The child result names its agent for resume');

  // Profile-defined subagent: its frontmatter model and that model's saved reasoning.
  const custom = await infer('profile', { subagent_type: 'fixture-reviewer' });
  assert.deepEqual(pairs(custom), [['parent-thinker', 'high'], ['agent-thinker', 'medium'], ['parent-thinker', 'high']],
    'Profile subagent uses its own model and reasoning; the parent keeps its own');
  assert.equal(custom.at(-1).childResultReturned, true);
  await childLabel('profile', true);

  // Child failures: one child request with its own model and reasoning, no duplicate and no parent-model fallback.
  for (const [label, behaviour, error] of [['child-503', '503', /server error/i], ['child-incomplete', 'nofinish', /stream ended before the response finished/i]]) {
    const failed = await infer(label, { subagent_type: 'explore' }, { child: [behaviour] });
    assert.deepEqual(failed.map(request => request.role), ['parent', 'child', 'continuation'], `${label}: no automatic child retry`);
    assert.deepEqual(pairs(failed), expectedOverride, `${label}: failed child used its own model and reasoning`);
    assert.match(failed.at(-1).toolResult, error, `${label}: the parent receives the child failure`);
    assert.equal(failed.at(-1).childResultReturned, false);
    result[label] = { roles: failed.map(request => request.role), toolResult: failed.at(-1).toolResult.slice(0, 300) };
  }
  // Resume the earlier Explore child through the Task tool: same child model and reasoning, prior context kept.
  const resumed = await infer('resume', { resume: overrideAgent });
  assert.deepEqual(pairs(resumed), expectedOverride, 'Task resume keeps the child model and reasoning');
  assert.ok(resumed[1].messages > 3, 'Task resume continues the existing child conversation');
  assert.equal(resumed.at(-1).childResultReturned, true);

  // Parent failure after a Task: Try again (pre-content) and Resume (after partial output).
  const tryAgain = await parentFailureAfterTask('parent-503', '503', 'Try again');
  await recover('parent-503', tryAgain.recovery);
  const resume = await parentFailureAfterTask('parent-incomplete', 'nofinish', 'Resume');
  await recover('parent-incomplete', resume.recovery);

  // Restart while the parent failure after a Task is unresolved, then Try again.
  await parentFailureAfterTask('restart-failed', '503', 'Try again');
  await close();
  const relaunched = result.requests.length;
  await launch();
  await page.getByText('restart-failed check', { exact: false }).filter({ visible: true }).first().waitFor({ timeout: 30000 });
  const restored = page.getByText('Try again', { exact: true }).filter({ visible: true }).last();
  await restored.waitFor({ timeout: 15000 });
  assert.equal(result.requests.length, relaunched, 'Restoring a failure must not send a request');
  await recover('restart-failed', restored);

  // Restart while a Task child is still running, then start the work again and resume the child.
  setPhase('restart-pending', { subagent_type: 'explore' }, { child: ['hold'] });
  const pendingBefore = result.requests.length;
  await send('restart-pending');
  for (const deadline = Date.now() + 30000; !result.requests.some(request => request.phase === 'restart-pending' && request.role === 'child') && Date.now() < deadline;)
    await page.waitForTimeout(250);
  const pending = since(pendingBefore);
  assert.deepEqual(pending.map(request => request.role), ['parent', 'child'], 'The child request is outstanding at restart');
  assert.deepEqual(pairs(pending), expectedOverride.slice(0, 2));
  await close();
  for (const response of held) response.destroy();
  const pendingRelaunch = result.requests.length;
  await launch();
  await page.getByText('restart-pending check', { exact: false }).filter({ visible: true }).first().waitFor({ timeout: 30000 });
  await page.waitForTimeout(3000);
  assert.equal(result.requests.length, pendingRelaunch, 'An interrupted Task must not resume automatically after restart');
  result.restartPending = { childSocketClosed: pending[1].socketClosed === true, requestsOnRestore: 0 };
  // Settings is opened only after this follow-up: with the interrupted Task chat restored and
  // unanswered, the titlebar Settings click did not open Settings (runs JpMjRo, SrclIo).
  const restarted = await infer('restart');
  assert.deepEqual(pairs(restarted), pairs(override));
  assert.equal(restarted.at(-1).childResultReturned, true);
  await childLabel('restart', true);
  const resumedAfterRestart = await infer('restart-resume', { resume: overrideAgent });
  assert.deepEqual(pairs(resumedAfterRestart), expectedOverride, 'Task resume after restart keeps the child model and reasoning');
  assert.ok(resumedAfterRestart[1].messages > resumed[1].messages, 'Resume after restart continues the saved child conversation');
  taskModels = await settings();
  await taskModels.getByText('Child Thinker · Ultra', { exact: true }).waitFor();

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
  assert.deepEqual(pairs(recovery), [
    ['parent-thinker', 'high'], ['child-thinker', 'low'], ['parent-thinker', 'high'],
  ]);
  await childLabel('recovery', true);
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
  // Across every case, no child request ever fell back to the parent model unless it inherited it.
  assert.ok(result.requests.filter(request => request.role === 'child' && request.phase !== 'inherit')
    .every(request => request.model !== 'parent-thinker'), 'No explicit child used the parent model');
  assert.deepEqual(result.errors, []); result.success = true;
} catch (error) {
  result.error = error.stack; process.exitCode = 1;
  await page?.screenshot({ path: join(directory, 'failure.png') }).catch(() => {});
  await writeFile(join(directory, 'failure.txt'), await page?.locator('body').innerText() ?? '').catch(() => {});
} finally {
  if (app) {
    try { await close(); } catch (error) { result.cleanupError = error.message; result.success = false; process.exitCode = 1; }
  }
  for (const response of held) response.destroy();
  server.closeAllConnections(); await new Promise(resolve => server.close(resolve));
  await writeFile(join(directory, 'result.json'), JSON.stringify(result, null, 2));
  console.log(JSON.stringify({ ...result, requests: result.requests.length, directory }, null, 2));
}
