import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { mkdtemp, mkdir, readdir, readFile, readlink, rename, rm, stat, writeFile } from 'node:fs/promises';
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
import { spawn } from 'node:child_process';

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
    badPlugin: [join(plugin, '.cursor-plugin/plugin.json'), 'this plugin manifest was not used: Invalid JSON'],
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

// --watchers ---------------------------------------------------------------
// inotify watches held by the owned host family: per role, and the watched inodes.
async function watches(app) {
  const family = await processFamily({ rootPid: app.process().pid });
  const roles = {}, inodes = new Map();
  let total = 0;
  for (const member of family) {
    for (const fd of await readdir(`/proc/${member.pid}/fd`).catch(() => [])) {
      if (await readlink(`/proc/${member.pid}/fd/${fd}`).catch(() => '') !== 'anon_inode:inotify') continue;
      const info = await readFile(`/proc/${member.pid}/fdinfo/${fd}`, 'utf8').catch(() => '');
      for (const match of info.matchAll(/^inotify wd:\w+ ino:([0-9a-f]+) sdev:([0-9a-f]+)/gm)) {
        roles[member.role] = (roles[member.role] ?? 0) + 1; total++;
        const key = `${parseInt(match[2], 16)}:${parseInt(match[1], 16)}`;
        inodes.set(key, [...(inodes.get(key) ?? []), `${member.role}#${member.pid}`]);
      }
    }
  }
  return { total, roles, inodes };
}
async function inodeKeys(paths) {
  const keys = new Map();
  for (const path of paths) {
    const info = await stat(path).catch(() => undefined);
    if (!info) continue;
    // stat() returns the user-space dev_t; fdinfo prints the kernel's (major << 20 | minor).
    const major = ((info.dev >>> 8) & 0xfff) | (Math.floor(info.dev / 2 ** 32) & ~0xfff);
    const minor = (info.dev & 0xff) | ((info.dev >>> 12) & 0xfff00);
    keys.set(`${major * 2 ** 20 + minor}:${info.ino}`, path);
  }
  return keys;
}
const watchedOf = (sample, keys) => [...keys].filter(([key]) => sample.inodes.has(key)).map(([, path]) => path.replace(directory, '<run>'));
const holders = (sample, keys) => Object.fromEntries([...keys].filter(([key]) => sample.inodes.has(key))
  .map(([key, path]) => [path.replace(directory, '<run>'), sample.inodes.get(key)]));
async function rowNames(page, tab, kind) { return (await allRows(page, tab, kind)).map(row => row.name); }
async function untilRows(page, tab, kind, predicate, description) {
  let names = [];
  await until(description, async () => predicate(names = await rowNames(page, tab, kind)), 30000)
    .catch(error => { (result.observations.rowsAtTimeout ??= {})[description] = names; throw error; });
  return names;
}
async function forward(args) {
  const child = spawn(layout.executable, [...common, ...args], { env, stdio: 'ignore' });
  const code = await new Promise((done, reject) => { child.once('error', reject); child.once('exit', done); });
  assert.equal(code, 0, 'The forwarding instance hands the request to the running instance');
}
async function watchers() {
  const other = join(directory, 'project-b');
  for (const folder of [project, other]) {
    await write(join(folder, '.openvision/skills/ov-base-skill/SKILL.md'), skill('ov-base-skill', 'Base fixture skill'));
    await write(join(folder, '.openvision/agents/ov-base-agent.md'), agent('ov-base-agent', 'Base fixture agent', 'Base body.'));
    await write(join(folder, '.openvision/mcp.json'), JSON.stringify({ mcpServers: {} }));
    await writeFile(join(folder, 'hello.js'), 'export const answer = 42;\n');
  }
  const own = await inodeKeys([project, join(project, '.openvision'), join(project, '.openvision/skills'), join(project, '.openvision/agents')]);
  const others = await inodeKeys([other, join(other, '.openvision'), join(other, '.openvision/skills'), join(other, '.openvision/agents')]);
  const mcp = await createMcpServerFixture(), stale = await createMcpServerFixture();
  result.mcpFixtures = [mcp, stale];
  const { app, page } = await launch();
  await configureProvider(page); await selectModel(page);
  await page.keyboard.press('Escape');
  await delay(8000);
  const baseline = await watches(app);
  result.observations.baseline = { total: baseline.total, roles: baseline.roles, watchedProject: watchedOf(baseline, own) };
  assert.ok(watchedOf(baseline, own).length > 0, 'The open project is watched');

  // Live add, rename and delete in the open project.
  const added = join(project, '.openvision/skills/ov-watch-skill');
  await write(join(added, 'SKILL.md'), skill('ov-watch-skill', 'Watched fixture skill WATCH-SKILL-ADDED'));
  await untilRows(page, 'skills', 'skill', names => names.includes('ov-watch-skill'), 'added skill listed');
  assert.ok(markersOf((await ask(page, 'watch-added', 'OpenVision customization check: skills after add?'))
    .filter(request => request.role === 'parent')).includes('WATCH-SKILL-ADDED'), 'The Agent sees the added skill');
  await rename(added, join(project, '.openvision/skills/ov-watch-renamed'));
  await untilRows(page, 'skills', 'skill', names => names.includes('ov-watch-renamed') && !names.includes('ov-watch-skill'), 'renamed skill listed');
  await rm(join(project, '.openvision/skills/ov-watch-renamed'), { recursive: true });
  await untilRows(page, 'skills', 'skill', names => !names.includes('ov-watch-renamed'), 'deleted skill removed');
  await write(join(project, '.openvision/agents/ov-watch-agent.md'), agent('ov-watch-agent', 'Watched fixture agent WATCH-AGENT-ADDED', 'Watched body.'));
  await untilRows(page, 'agents', 'subagent', names => names.includes('ov-watch-agent'), 'added subagent listed');
  await rename(join(project, '.openvision/agents/ov-watch-agent.md'), join(project, '.openvision/agents/ov-watch-moved.md'));
  await untilRows(page, 'agents', 'subagent', names => names.includes('ov-watch-agent') || names.includes('ov-watch-moved'), 'renamed subagent listed');
  await rm(join(project, '.openvision/agents/ov-watch-moved.md'));
  await untilRows(page, 'agents', 'subagent', names => !names.includes('ov-watch-agent') && !names.includes('ov-watch-moved'), 'deleted subagent removed');
  await write(join(home, 'mcp.json'), JSON.stringify({ mcpServers: { 'ov-watch-mcp': mcp.configuration } }));
  await until('added MCP server discovered', () => mcp.requests.some(item => item.method === 'tools/list' && item.authorized), 45000);
  await page.keyboard.press('Escape');
  await customize(page, 'mcps');
  // Remove only after the server is listed and the legacy-to-utility hand-off has settled (see run JSHBzL).
  await until('added MCP server listed', async () => await page.locator('[data-mcp-manage-server="ov-watch-mcp"]').count() > 0, 30000);
  await delay(5000);
  await write(join(home, 'mcp.json'), JSON.stringify({ mcpServers: {} }));
  await until('removed MCP server not listed', async () => await page.locator('[data-mcp-manage-server="ov-watch-mcp"]').count() === 0, 30000);
  const afterRemoval = mcp.requests.length; await delay(5000);
  assert.equal(mcp.requests.length, afterRemoval, 'A removed MCP server receives no further requests');
  await page.keyboard.press('Escape');
  result.checks.liveAddRenameDelete = true;

  // A second window on another project, then closed.
  const windows = app.waitForEvent('window', { timeout: 60000 });
  // A named profile window: it also creates the profile used by the switch below.
  await forward(['--new-window', '--profile', 'ov-watch-profile', other]);
  const second = await windows; second.on('pageerror', error => result.pageErrors.push(error.message));
  await second.locator('.part.titlebar .openvision-local-profile').waitFor({ state: 'attached', timeout: 60000 });
  await enterWorkspace(second); await delay(6000);
  const withSecond = await watches(app);
  result.observations.secondWindow = { total: withSecond.total, holders: holders(withSecond, others) };
  assert.ok(watchedOf(withSecond, others).length > 0, 'The second project is watched while its window is open');
  const title = await second.title(), closed = second.waitForEvent('close', { timeout: 30000 });
  assert.equal(await app.evaluate(({ BrowserWindow }, value) => {
    const window = BrowserWindow.getAllWindows().find(item => item.getTitle() === value); window?.close(); return Boolean(window);
  }, title), true);
  await closed;
  let released;
  await until('second project watches released', async () => watchedOf(released = await watches(app), others).length === 0, 60000)
    .catch(async error => { result.observations.leftAfterClose = { holders: holders(released, others),
      processes: (await processFamily({ rootPid: app.process().pid })).map(item => `${item.role}#${item.pid} ${item.cmdline.slice(0, 120)}`) }; throw error; });
  result.checks.windowCloseReleasesWatches = true;

  // Switch the first window to the other project, edit the old project, and switch back.
  const switched = page.waitForEvent('framenavigated', { timeout: 60000 }).catch(() => undefined);
  await forward(['--reuse-window', other]);
  await switched;
  await page.locator('.part.titlebar .openvision-local-profile').waitFor({ state: 'attached', timeout: 60000 });
  await enterWorkspace(page);
  await until('workspace switched', async () => (await page.title()).includes('project-b'), 30000);
  await delay(6000);
  const afterSwitch = await watches(app);
  result.observations.afterSwitch = { total: afterSwitch.total, watchedProject: watchedOf(afterSwitch, own), watchedOther: watchedOf(afterSwitch, others) };
  assert.deepEqual(watchedOf(afterSwitch, own), [], 'The previous project is no longer watched');
  await write(join(project, '.openvision/skills/ov-stale-skill/SKILL.md'), skill('ov-stale-skill', 'Stale fixture skill'));
  await write(join(project, '.openvision/agents/ov-stale-agent.md'), agent('ov-stale-agent', 'Stale fixture agent', 'Stale body.'));
  await write(join(project, '.openvision/mcp.json'), JSON.stringify({ mcpServers: { 'ov-stale-mcp': stale.configuration } }));
  await delay(5000);
  assert.ok(!(await rowNames(page, 'skills', 'skill')).includes('ov-stale-skill'), 'No reload from the disposed project');
  assert.ok(!(await rowNames(page, 'agents', 'subagent')).includes('ov-stale-agent'));
  assert.equal(stale.requests.length, 0, 'The disposed project MCP file starts nothing');
  await page.keyboard.press('Escape');
  await rm(join(project, '.openvision/skills/ov-stale-skill'), { recursive: true });
  await rm(join(project, '.openvision/agents/ov-stale-agent.md'));
  await write(join(project, '.openvision/mcp.json'), JSON.stringify({ mcpServers: {} }));
  result.checks.noStaleReloadAfterWorkspaceSwitch = true;
  const back = page.waitForEvent('framenavigated', { timeout: 60000 }).catch(() => undefined);
  await forward(['--reuse-window', project]);
  await back;
  await page.locator('.part.titlebar .openvision-local-profile').waitFor({ state: 'attached', timeout: 60000 });
  await enterWorkspace(page);
  await until('workspace switched back', async () => !(await page.title()).includes('project-b'), 30000);

  // Profile switch to the named profile and back, in place.
  for (const name of ['ov-watch-profile', 'Default']) {
    await page.keyboard.press('F1');
    await page.keyboard.type('Profiles: Switch Profile'); await page.keyboard.press('Enter');
    await page.locator('.quick-input-widget .monaco-list-row').filter({ hasText: name === 'Default' ? /^Default/ : name }).first().click();
    await until(`profile ${name}`, async () => name === 'Default' ? !(await page.title()).includes('ov-watch-profile') :
      (await page.title()).includes(name), 30000);
    await page.locator('.part.titlebar .openvision-local-profile').waitFor({ state: 'attached', timeout: 60000 });
    (result.observations.profileTitles ??= []).push(await page.title());
    await delay(4000);
  }
  result.observations.profileTitle = await page.title();
  await page.keyboard.press('Escape');
  await delay(8000);
  const final = await watches(app);
  result.observations.final = { total: final.total, roles: final.roles, watchedProject: watchedOf(final, own), watchedOther: watchedOf(final, others) };
  assert.deepEqual(watchedOf(final, others), [], 'No watch remains on the closed and switched-away project');
  assert.deepEqual(final.roles, baseline.roles, 'inotify watches per process role return to the baseline');
  result.checks.watchCountsReturnToBaseline = true;
  for (const fixture of [mcp, stale]) assert.deepEqual(fixture.errors, []);
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
  if (mode === '--watchers') await watchers();
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
