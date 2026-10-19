import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { mkdtemp, mkdir, readFile, rename, rm, writeFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { execFileSync } from 'node:child_process';
import { setTimeout as delay } from 'node:timers/promises';
import { _electron } from '../tooling/browser.mjs';
import { verificationSettings } from './verification-profile.mjs';
import { fileHash } from './import-files.mjs';
import { platformLayout, linuxSandboxArguments } from './platform.mjs';
import { enterWorkspace, openChat } from './verification-workspace.mjs';
import { processFamily } from './process-family-linux.mjs';
import { createMcpServerFixture } from './verify-mcp-server.mjs';

// Native OV-304 customization lifecycle on Linux x64 with a disposable profile
// and project and a controlled loopback provider (no live inference).
//   --precedence  same-named skill, subagent and command in project, profile and
//                 a local plugin: Customize lists every scope; the Agent uses the
//                 project item; both survive a restart.
//   --invalid     malformed customization files report a visible diagnostic
//                 naming the file, valid siblings keep loading, and fixing the
//                 file recovers without a restart.
//   --watchers    add/rename/delete while running; window close, workspace and
//                 profile switch; no stale reloads after dispose; inotify watch
//                 counts return to their baseline.
assert.equal(process.platform, 'linux', 'This verifier reads /proc for watcher ownership');
const mode = ['--precedence', '--invalid', '--watchers'].find(flag => process.argv.includes(flag));
assert.ok(mode, 'Choose --precedence, --invalid or --watchers');
const root = resolve(import.meta.dirname, '..');
const directory = await mkdtemp(join(root, `logs/customization-${mode.slice(2)}-`));
const layout = platformLayout(root);
const profile = join(directory, 'profile'), home = join(profile, 'User'), project = join(directory, 'project');
const result = { directory, checkedAt: new Date().toISOString(), mode,
  identity: { commit: execFileSync('git', ['rev-parse', 'HEAD'], { cwd: root, encoding: 'utf8' }).trim(),
    platform: process.platform, arch: process.arch, node: process.version,
    hashes: Object.fromEntries(await Promise.all([['host', layout.executable],
      ['workbench', join(layout.host, 'resources/app/out/vs/workbench/workbench.desktop.main.js')],
      ['agentExec', join(layout.host, 'resources/app/extensions/cursor-agent-exec/dist/main.js')],
      ['verifier', join(root, 'desktop/verify-customization-lifecycle.mjs')]].map(async ([name, path]) => [name, await fileHash(path)]))) },
  scope: 'Linux x64 native workbench and Agent; controlled loopback provider; disposable profile and project only.',
  checks: {}, observations: {}, pageErrors: [], hostExits: [], requests: [] };

// Controlled provider: records which markers each request carries.
const markers = ['PROJECT-SKILL-MARK', 'PROFILE-SKILL-MARK', 'PLUGIN-SKILL-MARK', 'CLAUDE-SKILL-MARK',
  'PROJECT-AGENT-MARK', 'PROFILE-AGENT-MARK', 'PLUGIN-AGENT-MARK', 'PROJECT-AGENT-BODY', 'PROFILE-AGENT-BODY', 'PLUGIN-AGENT-BODY',
  'PROJECT-COMMAND-MARK', 'PROFILE-COMMAND-MARK', 'PLUGIN-COMMAND-MARK', 'VALID-SKILL-MARK', 'RECOVERED-SKILL-MARK',
  'WATCH-SKILL-ADDED', 'WATCH-SKILL-RENAMED', 'WATCH-AGENT-ADDED'];
let phase = 'idle', task;
const childMarker = 'OV_CUSTOMIZATION_CHILD_DONE';
const provider = createServer(async (request, response) => {
  if (request.url === '/v1/models') {
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify({ data: [{ id: 'fixture-customization' }] })); return;
  }
  const chunks = []; for await (const chunk of request) chunks.push(chunk);
  const text = Buffer.concat(chunks).toString('utf8'), body = JSON.parse(text);
  const content = value => typeof value === 'string' ? value : JSON.stringify(value ?? '');
  const child = body.messages?.some(message => message.role === 'user' && content(message.content).includes(`Reply ${childMarker}`));
  const toolResult = body.messages?.find(message => message.role === 'tool' && message.tool_call_id === `task_${phase}`);
  const role = child ? 'child' : toolResult ? 'continuation' : 'parent';
  const taskTool = JSON.stringify(body.tools?.find(tool => tool.function?.name === 'Task') ?? '');
  result.requests.push({ phase, role, markers: markers.filter(marker => text.includes(marker)),
    taskMarkers: markers.filter(marker => taskTool.includes(marker)),
    tools: (body.tools ?? []).map(tool => tool.function?.name).filter(Boolean).sort() });
  if (!result.observations.taskTool) {
    const taskTool = body.tools?.find(tool => tool.function?.name === 'Task');
    if (taskTool) result.observations.taskTool = JSON.stringify(taskTool.function).slice(0, 6000);
  }
  response.writeHead(200, { 'Content-Type': 'text/event-stream' });
  const event = (delta, finish_reason = null) => response.write(`data: ${JSON.stringify({ id: 'customization',
    object: 'chat.completion.chunk', model: body.model, choices: [{ index: 0, delta, finish_reason }] })}\n\n`);
  if (role === 'parent' && task) {
    event({ role: 'assistant', tool_calls: [{ index: 0, id: `task_${phase}`, type: 'function', function: {
      name: 'Task', arguments: JSON.stringify({ description: `Customization ${phase}`, prompt: `Reply ${childMarker}. Do not use tools.`,
        ...task }) } }] });
    event({}, 'tool_calls');
  } else {
    event({ role: 'assistant', content: role === 'child' ? childMarker : `OpenVision customization ${phase} complete.` });
    event({}, 'stop');
  }
  response.end('data: [DONE]\n\n');
});
await new Promise(done => provider.listen(0, '127.0.0.1', done));

const env = { ...process.env }; delete env.ELECTRON_RUN_AS_NODE;
const sandbox = await linuxSandboxArguments(layout.host);
const common = ['--user-data-dir', profile, '--extensions-dir', join(profile, 'extensions'), '--new-window',
  '--disable-updates', '--skip-welcome', '--skip-release-notes', '--disable-telemetry', '--disable-crash-reporter', ...sandbox];
let session;

async function write(path, text) { await mkdir(dirname(path), { recursive: true }); await writeFile(path, text); }
const skill = (name, description, body = 'Follow the fixture instructions.') =>
  `---\nname: ${name}\ndescription: ${description}\n---\n\n${body}\n`;
const agent = (name, description, body) => `---\nname: ${name}\ndescription: ${description}\nmodel: inherit\n---\n\n${body}\n`;
async function until(description, condition, timeout = 30000) {
  const end = Date.now() + timeout;
  while (Date.now() < end) { if (await condition()) return; await delay(200); }
  throw new Error(`Timed out waiting for ${description}`);
}

async function launch(folder = project) {
  const app = await _electron.launch({ executablePath: layout.executable, env, timeout: 60000, args: [...common, folder] });
  const page = await app.firstWindow(); page.setDefaultTimeout(20000);
  page.on('pageerror', error => result.pageErrors.push(error.message));
  await page.locator('.part.titlebar .openvision-local-profile').waitFor({ state: 'attached', timeout: 60000 });
  await enterWorkspace(page);
  session = { app, page }; return session;
}
async function closeApp() {
  const { app, page } = session, child = app.process();
  const closing = app.close();
  await page.getByText('Quit Anyway', { exact: true }).click({ timeout: 3000 }).catch(() => {});
  await closing;
  result.hostExits.push({ pid: child.pid, code: child.exitCode, signal: child.signalCode });
  assert.equal(child.exitCode, 0); session = undefined;
}
async function configureProvider(page) {
  await page.locator('.part.titlebar a[aria-label$=" Settings"]').click();
  await page.locator('.cursor-settings-sidebar-cell-label').filter({ hasText: /^Models$/ }).locator('..').click();
  await page.locator('.openvision-model-settings').getByRole('button', { name: 'Add Provider', exact: true }).click();
  await page.getByLabel('Provider Name', { exact: true }).fill('Customization fixture');
  await page.getByLabel('API Base URL', { exact: true }).fill(`http://127.0.0.1:${provider.address().port}/v1`);
  await page.getByLabel('API Key', { exact: true }).fill('fixture-key');
  await page.locator('dialog').getByRole('button', { name: 'Save', exact: true }).click();
  await page.locator('dialog').waitFor({ state: 'detached' });
}
async function selectModel(page) {
  await openChat(page);
  await page.locator('.vscode-model-picker__trigger-markdown').filter({ visible: true }).first().click();
  await page.getByText('fixture-customization', { exact: true }).last().click(); await page.keyboard.press('Escape');
}
async function customize(page, tab) {
  const tabs = page.locator(`[data-customize-manage-tab-id="${tab}"]`).filter({ visible: true });
  if (!await tabs.count()) {
    await page.locator('.part.titlebar a[aria-label$=" Settings"]').click();
    await page.locator('.cursor-settings-sidebar-cell-label').filter({ hasText: /^Customize$/ }).locator('..').click();
  }
  await tabs.first().click();
  await delay(1500);
}
// Rows of one kind and name, with their visible text (scope labels included).
async function rows(page, tab, kind, name) {
  await customize(page, tab);
  const locator = page.locator(`[data-customize-manage-kind="${kind}"][data-customize-manage-row="${name}"]`).filter({ visible: true });
  return locator.allInnerTexts();
}
// Every row of a kind, for diagnosis: its row name and visible text.
async function allRows(page, tab, kind) {
  await customize(page, tab);
  return page.evaluate(kind => [...document.querySelectorAll(`[data-customize-manage-kind="${kind}"]`)]
    .map(row => ({ name: row.getAttribute('data-customize-manage-row'), text: row.innerText })), kind);
}
async function groups(page, tab, kind, name) {
  await customize(page, tab);
  return page.evaluate(({ kind, name }) => [...document.querySelectorAll(`[data-customize-manage-kind="${kind}"][data-customize-manage-row="${name}"]`)]
    .map(row => {
      let node = row, title = null;
      for (let depth = 0; node && depth < 8 && !title; depth++, node = node.parentElement) {
        let sibling = node.previousElementSibling;
        while (sibling && !title) { if (/^(User|Project|Plugins|This Workspace|project)$/i.test(sibling.textContent?.trim() ?? '')) title = sibling.textContent.trim(); sibling = sibling.previousElementSibling; }
      }
      return { text: row.innerText, group: title };
    }), { kind, name });
}
async function ask(page, label, prompt, { subagent } = {}) {
  phase = label; task = subagent ? { subagent_type: subagent } : undefined;
  const before = result.requests.length;
  const input = await openChat(page);
  await input.fill(prompt); await input.press('Enter');
  await page.getByText(`OpenVision customization ${label} complete.`, { exact: true }).first().waitFor({ timeout: 60000 });
  await page.locator('.stop-button').filter({ visible: true }).waitFor({ state: 'hidden' });
  return result.requests.slice(before);
}
async function slashCommand(page, label, name) {
  phase = label; task = undefined;
  const before = result.requests.length;
  const input = await openChat(page);
  await input.click(); await input.pressSequentially(`/${name}`, { delay: 30 });
  // The open menu repeats the typed text; choose its highlighted entry with the keyboard.
  const entries = page.getByText(`/${name}`, { exact: true }).filter({ visible: true });
  await until('slash command menu', async () => await entries.count() >= 2, 15000);
  (result.observations.slashMenus ??= []).push({ label, entries: await entries.count() - 1 });
  await input.press('Enter');
  await until('slash command chosen', async () => await entries.count() <= 1, 10000);
  await input.pressSequentially(' run it', { delay: 20 }); await input.press('Enter');
  await page.getByText(`OpenVision customization ${label} complete.`, { exact: true }).first().waitFor({ timeout: 60000 });
  await page.locator('.stop-button').filter({ visible: true }).waitFor({ state: 'hidden' });
  return result.requests.slice(before);
}
const markersOf = requests => [...new Set(requests.flatMap(request => request.markers))].sort();

// --precedence ------------------------------------------------------------
async function precedenceFiles() {
  await write(join(project, '.openvision/skills/ov-same-skill/SKILL.md'), skill('ov-same-skill', 'OV precedence skill PROJECT-SKILL-MARK'));
  await write(join(project, '.claude/skills/ov-same-skill/SKILL.md'), skill('ov-same-skill', 'OV precedence skill CLAUDE-SKILL-MARK'));
  await write(join(home, '.openvision/skills/ov-same-skill/SKILL.md'), skill('ov-same-skill', 'OV precedence skill PROFILE-SKILL-MARK'));
  await write(join(project, '.openvision/agents/ov-same-agent.md'), agent('ov-same-agent', 'OV precedence agent PROJECT-AGENT-MARK', 'PROJECT-AGENT-BODY'));
  await write(join(home, 'agents/ov-same-agent.md'), agent('ov-same-agent', 'OV precedence agent PROFILE-AGENT-MARK', 'PROFILE-AGENT-BODY'));
  await write(join(project, '.openvision/commands/ov-same-command.md'), 'Run the fixture command PROJECT-COMMAND-MARK.\n');
  await write(join(home, '.openvision/commands/ov-same-command.md'), 'Run the fixture command PROFILE-COMMAND-MARK.\n');
  const plugin = join(home, '.openvision/plugins/local/ov-plugin');
  await write(join(plugin, '.cursor-plugin/plugin.json'), JSON.stringify({ name: 'ov-plugin', version: '1.0.0',
    description: 'OpenVision precedence fixture plugin' }, null, 2));
  await write(join(plugin, 'skills/ov-same-skill/SKILL.md'), skill('ov-same-skill', 'OV precedence skill PLUGIN-SKILL-MARK'));
  await write(join(plugin, 'agents/ov-same-agent.md'), agent('ov-same-agent', 'OV precedence agent PLUGIN-AGENT-MARK', 'PLUGIN-AGENT-BODY'));
  await write(join(plugin, 'commands/ov-same-command.md'), 'Run the fixture command PLUGIN-COMMAND-MARK.\n');
}
async function precedenceRound(page, label) {
  const observed = result.observations[label] = {};
  observed.skillRows = await groups(page, 'skills', 'skill', 'ov-same-skill');
  observed.agentRows = await groups(page, 'agents', 'subagent', 'ov-same-agent');
  observed.commandRows = await groups(page, 'commands', 'command', 'ov-same-command');
  observed.allSkillRows = await allRows(page, 'skills', 'skill');
  await page.screenshot({ path: join(directory, `${label}-skills.png`) });
  observed.skillsTabText = await page.locator('.monaco-workbench').innerText().then(text => text.slice(0, 4000)).catch(() => '');
  observed.pluginRows = (await allRows(page, 'plugins', 'plugin')).filter(row => /ov.plugin/i.test(`${row.name} ${row.text}`));
  await page.keyboard.press('Escape');
  const skills = await ask(page, `${label}-skills`, 'OpenVision customization check: which skills are available?');
  observed.skillMarkers = markersOf(skills.filter(request => request.role === 'parent'));
  const delegated = await ask(page, `${label}-subagent`, 'OpenVision customization check: delegate to ov-same-agent.', { subagent: 'ov-same-agent' });
  observed.subagentChildMarkers = markersOf(delegated.filter(request => request.role === 'child'));
  observed.subagentTaskMarkers = [...new Set(delegated.filter(request => request.role === 'parent').flatMap(request => request.taskMarkers))].sort();
  // Recorded, not asserted: whether the child request carries the subagent body (see the worker report).
  observed.subagentBodyInChild = observed.subagentChildMarkers.filter(marker => marker.endsWith('AGENT-BODY'));
  const command = await slashCommand(page, `${label}-command`, 'ov-same-command');
  observed.commandMarkers = markersOf(command.filter(request => request.role === 'parent'));
  await page.screenshot({ path: join(directory, `${label}.png`) });

  assert.equal(observed.skillRows.length, 3, 'Customize lists the project, profile and plugin skill once each');
  for (const mark of ['PROJECT-SKILL-MARK', 'PROFILE-SKILL-MARK', 'PLUGIN-SKILL-MARK'])
    assert.equal(observed.skillRows.filter(row => row.text.includes(mark)).length, 1, `One ${mark} row`);
  assert.ok(observed.agentRows.some(row => row.text.includes('PROJECT-AGENT-MARK')), 'Customize lists the project subagent');
  assert.ok(!observed.agentRows.some(row => row.text.includes('PROFILE-AGENT-MARK')), 'The shadowed profile subagent is not the listed one');
  assert.ok(observed.pluginRows.length >= 1, 'The local plugin is listed');
  const skillMarks = observed.skillMarkers.filter(marker => marker.endsWith('SKILL-MARK'));
  assert.deepEqual(skillMarks, ['PROJECT-SKILL-MARK'], 'The Agent is offered only the project skill of that name');
  assert.deepEqual(observed.subagentTaskMarkers, ['PROJECT-AGENT-MARK'], 'Task offers the project subagent definition');
  assert.deepEqual(observed.commandMarkers.filter(marker => marker.endsWith('COMMAND-MARK')), ['PROJECT-COMMAND-MARK'],
    'The slash command attaches the project command');
  result.checks[`${label}ListsEveryScope`] = true;
  result.checks[`${label}AgentUsesProjectItems`] = true;
}
async function precedence() {
  await precedenceFiles();
  const first = await launch();
  await configureProvider(first.page); await selectModel(first.page);
  await precedenceRound(first.page, 'initial');
  await closeApp();
  const second = await launch();
  await selectModel(second.page);
  await precedenceRound(second.page, 'restart');
}

// --invalid ----------------------------------------------------------------
// Every message in the notification center (toasts collapse into it).
async function notices(page) {
  await page.keyboard.press('Escape');
  await page.keyboard.press('F1');
  await page.keyboard.type('Notifications: Show Notifications');
  await page.locator('.quick-input-widget .monaco-list-row').filter({ hasText: 'Notifications: Show Notifications' }).first().click();
  await delay(500);
  const texts = await page.locator('.notifications-center .notification-list-item-message').allInnerTexts();
  await page.keyboard.press('Escape');
  return texts;
}
async function invalid() {
  const mcp = await createMcpServerFixture(), second = await createMcpServerFixture();
  result.mcpFixtures = [mcp, second];
  const userConfig = join(home, 'mcp.json'), projectConfig = join(project, '.openvision/mcp.json');
  const invalidUser = `{
  // JSONC: comments and trailing commas are accepted
  "mcpServers": {
    "ov-valid": ${JSON.stringify(mcp.configuration)},
    "ov-bad-command": { "command": 5 },
    "ov-pigeon": { "type": "carrier-pigeon", "url": "${mcp.configuration.url}" },
    "ov-empty": {},
  },
}
`;
  await write(userConfig, invalidUser);
  await write(projectConfig, '{ "mcpServers": { "ov-project": { "command": "node", ');
  await write(join(project, '.openvision/skills/ov-valid-skill/SKILL.md'), skill('ov-valid-skill', 'Valid fixture skill VALID-SKILL-MARK'));
  await write(join(project, '.openvision/skills/ov-bad-yaml/SKILL.md'), '---\nname: ov-bad-yaml\ndescription: [unclosed\n---\nBody.\n');
  await write(join(project, '.openvision/skills/ov-no-description/SKILL.md'), '---\nname: ov-no-description\n---\nBody.\n');
  await write(join(project, '.openvision/agents/ov-valid-agent.md'), agent('ov-valid-agent', 'Valid fixture agent PROJECT-AGENT-MARK', 'PROJECT-AGENT-BODY'));
  await write(join(project, '.openvision/agents/ov-bad-agent.md'), 'This file has no front matter.\n');
  await write(join(project, '.openvision/agents/ov-empty-agent.md'), '---\nname: ov-empty-agent\ndescription: empty\n---\n');
  const plugin = join(home, '.openvision/plugins/local/ov-bad-plugin');
  await write(join(plugin, '.cursor-plugin/plugin.json'), '{ "name": ');
  await write(join(plugin, 'skills/ov-plugin-skill/SKILL.md'), skill('ov-plugin-skill', 'Plugin fixture skill PLUGIN-SKILL-MARK'));

  const { page } = await launch();
  await configureProvider(page); await selectModel(page);
  await until('valid sibling MCP discovery', () => mcp.requests.some(item => item.method === 'tools/list' && item.authorized), 45000);
  const expectations = {
    userMcp: [userConfig, 'server "ov-bad-command" "command" must be a non-empty string', 'server "ov-pigeon" has an unknown transport',
      'server "ov-empty" needs a "command"', 'The other servers in this file still load'],
    projectMcp: [projectConfig, 'JSON syntax error', 'No servers from this file were loaded'],
    badYaml: [join(project, '.openvision/skills/ov-bad-yaml/SKILL.md'), 'Failed to read skill file'],
    noDescription: [join(project, '.openvision/skills/ov-no-description/SKILL.md'), 'Description is required'],
    badAgent: [join(project, '.openvision/agents/ov-bad-agent.md'), 'this subagent was not loaded'],
    emptyAgent: [join(project, '.openvision/agents/ov-empty-agent.md'), 'this subagent was not loaded'],
    badPlugin: [join(plugin, '.cursor-plugin/plugin.json'), 'this plugin manifest could not be read'],
  };
  const matching = (texts, parts) => texts.filter(text => parts.every(part => text.includes(part)));
  let texts = [];
  await until('every diagnostic', async () => {
    texts = await notices(page);
    return Object.values(expectations).every(parts => matching(texts, parts).length >= 1);
  }, 60000).catch(error => { result.observations.noticesAtTimeout = texts; throw error; });
  await page.screenshot({ path: join(directory, 'invalid-notices.png') });
  result.observations.notices = texts.map(text => text.replaceAll(directory, '<run>'));
  for (const [name, parts] of Object.entries(expectations))
    assert.equal(matching(texts, parts).length, 1, `${name}: exactly one diagnostic naming the file and reason`);
  result.checks.visibleDiagnosticsNameFileAndReason = true;

  const skills = await allRows(page, 'skills', 'skill');
  result.observations.skillRows = skills;
  assert.ok(skills.some(row => row.name === 'ov-valid-skill'), 'A valid skill beside invalid ones is listed');
  assert.ok(skills.some(row => row.name === 'ov-plugin-skill'), 'A plugin with a broken manifest still loads its default components');
  const agents = await allRows(page, 'agents', 'subagent');
  result.observations.agentRows = agents;
  assert.ok(agents.some(row => row.name === 'ov-valid-agent'));
  await page.keyboard.press('Escape');
  const asked = await ask(page, 'invalid-skills', 'OpenVision customization check: which skills are available?');
  const parent = asked.filter(request => request.role === 'parent');
  assert.ok(markersOf(parent).includes('VALID-SKILL-MARK') && markersOf(parent).includes('PLUGIN-SKILL-MARK'));
  assert.ok(parent.some(request => request.taskMarkers.includes('PROJECT-AGENT-MARK')), 'The valid subagent is offered to Task');
  assert.deepEqual(result.pageErrors, []);
  result.checks.validSiblingsLoad = true;

  // Fix every file while the window stays open.
  await write(userConfig, JSON.stringify({ mcpServers: { 'ov-valid': mcp.configuration, 'ov-bad-command': second.configuration } }, null, 2));
  await write(projectConfig, JSON.stringify({ mcpServers: {} }));
  await write(join(project, '.openvision/skills/ov-bad-yaml/SKILL.md'), skill('ov-bad-yaml', 'Recovered fixture skill RECOVERED-SKILL-MARK'));
  await write(join(project, '.openvision/skills/ov-no-description/SKILL.md'), skill('ov-no-description', 'Recovered fixture skill without error'));
  await write(join(project, '.openvision/agents/ov-bad-agent.md'), agent('ov-bad-agent', 'Recovered fixture agent WATCH-AGENT-ADDED', 'Recovered body.'));
  await write(join(plugin, '.cursor-plugin/plugin.json'), JSON.stringify({ name: 'ov-bad-plugin', version: '1.0.0' }));
  await until('fixed MCP entry connects', () => second.requests.some(item => item.method === 'tools/list' && item.authorized), 45000);
  const workbenchNotices = ['userMcp', 'projectMcp', 'badYaml', 'noDescription'];
  await until('workbench diagnostics closed', async () => {
    texts = await notices(page);
    return workbenchNotices.every(name => matching(texts, expectations[name]).length === 0);
  }, 45000).catch(error => { result.observations.noticesAfterFix = texts; throw error; });
  result.observations.noticesAfterFix = texts.map(text => text.replaceAll(directory, '<run>'));
  const recovered = await ask(page, 'recovered-skills', 'OpenVision customization check: which skills are available now?');
  const recoveredParent = recovered.filter(request => request.role === 'parent');
  result.observations.recoveredMarkers = markersOf(recoveredParent);
  assert.ok(markersOf(recoveredParent).includes('RECOVERED-SKILL-MARK'), 'The fixed skill is used without a restart');
  assert.ok(recoveredParent.some(request => request.taskMarkers.includes('WATCH-AGENT-ADDED')), 'The fixed subagent is offered without a restart');
  assert.deepEqual(result.pageErrors, []);
  assert.equal(session.app.process().exitCode, null, 'The window process is still running');
  result.checks.recoveryWithoutRestart = true;
  for (const fixture of [mcp, second]) assert.deepEqual(fixture.errors, []);
}

async function prepare() {
  await mkdir(home, { recursive: true }); await mkdir(project, { recursive: true });
  await writeFile(join(project, 'hello.js'), 'export const answer = 42;\n');
  await writeFile(join(home, 'settings.json'), JSON.stringify({ ...verificationSettings,
    'window.restoreWindows': 'none', 'git.openRepositoryInParentFolders': 'never' }));
}

try {
  await prepare();
  if (mode === '--precedence') await precedence();
  if (mode === '--invalid') await invalid();
  assert.deepEqual(result.pageErrors, []);
  result.status = 'passed';
} catch (error) {
  result.status = 'failed'; result.error = error.stack; process.exitCode = 1;
  if (session && !session.page.isClosed()) {
    await session.page.screenshot({ path: join(directory, 'failure.png'), timeout: 5000 }).catch(() => {});
    await writeFile(join(directory, 'failure.txt'), await session.page.locator('body').innerText({ timeout: 5000 })).catch(() => {});
  }
} finally {
  result.cleanupErrors = [];
  if (session) await closeApp().catch(error => result.cleanupErrors.push(String(error)));
  for (const fixture of result.mcpFixtures ?? []) await fixture.dispose().catch(error => result.cleanupErrors.push(String(error)));
  delete result.mcpFixtures;
  provider.closeAllConnections(); await new Promise(done => provider.close(done));
  if (result.cleanupErrors.length) { result.status = 'failed'; process.exitCode = 1; }
  await writeFile(join(directory, 'result.json'), JSON.stringify(result, null, 2));
  console.log(JSON.stringify({ directory, status: result.status, checks: result.checks, error: result.error,
    cleanupErrors: result.cleanupErrors }, null, 2));
}
