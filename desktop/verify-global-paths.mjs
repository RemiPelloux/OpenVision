import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { lstat, mkdir, mkdtemp, readdir, readFile, writeFile } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { _electron } from '../tooling/browser.mjs';
import { loadRuntime } from './source-assembly.mjs';
import { verificationSettings } from './verification-profile.mjs';
import { linuxSandboxArguments } from './platform.mjs';
import { enterWorkspace } from './verification-workspace.mjs';

// Native user-global path isolation. HOME points at a disposable directory
// holding marker skills, commands, subagents, rules and hooks in every
// user-global location the recovered producers can read. XDG base directories
// point at a separate disposable directory (platform runtime caches live there).
//
// Three runs start concurrently, each with launcher-style arguments:
//   install-a/data/local  (installation A, default profile, "alpha")
//   install-a/data/beta   (installation A, second named profile, "beta")
//   install-b/data/local  (installation B, default profile, "gamma")
// Each run lists only its own Customize items, creates a skill and a command,
// adds a local fixture provider, completes an Agent chat, runs an approved Agent
// shell command, creates a plan in Plan mode and uses an integrated terminal.
// Afterwards no file or directory under HOME may be created, changed or removed,
// and each run's agent data must be inside its own profile home.
// The fixture model is a local HTTP server: no AI provider request is made.
const root = resolve(import.meta.dirname, '..');
const { layout } = await loadRuntime(root);
await mkdir(join(root, 'logs'), { recursive: true });
const directory = await mkdtemp(join(root, 'logs/global-paths-'));
const home = join(directory, 'home'), xdg = join(directory, 'xdg');
const skill = name => `---\nname: ${name}\ndescription: ${name} fixture skill\n---\nFixture skill ${name}.\n`;
const agent = name => `---\nname: ${name}\ndescription: ${name} fixture agent\n---\nFixture agent ${name}.\n`;
const rule = name => `---\ndescription: ${name} fixture\nalwaysApply: true\n---\nFixture rule ${name}.\n`;
const hook = name => JSON.stringify({ version: 1, hooks: { beforeSubmitPrompt: [{ command: `echo ${name}` }] } });
const claudeHook = name => JSON.stringify({ hooks: { UserPromptSubmit: [{ hooks: [{ type: 'command', command: `echo ${name}` }] }] } });
const plain = name => `Fixture ${name}.\n`;

// Home markers: none of these may be listed. The names are unique substrings.
const leaks = {
  'home-openvision-skill': ['.openvision/skills/home-openvision-skill/SKILL.md', skill],
  'home-cursor-skill': ['.cursor/skills/home-cursor-skill/SKILL.md', skill],
  'home-claude-skill': ['.claude/skills/home-claude-skill/SKILL.md', skill],
  'home-codex-skill': ['.codex/skills/home-codex-skill/SKILL.md', skill],
  'home-agents-skill': ['.agents/skills/home-agents-skill/SKILL.md', skill],
  'home-grok-skill': ['.grok/skills/home-grok-skill/SKILL.md', skill],
  'home-builtin-skill': ['.openvision/skills-cursor/home-builtin-skill/SKILL.md', skill],
  'home-openvision-command': ['.openvision/commands/home-openvision-command.md', plain],
  'home-claude-command': ['.claude/commands/home-claude-command.md', plain],
  'home-openvision-agent': ['.openvision/agents/home-openvision-agent.md', agent],
  'home-claude-agent': ['.claude/agents/home-claude-agent.md', agent],
  'home-openvision-rule': ['.openvision/rules/home-openvision-rule.mdc', rule],
  'home-openvision-hook': ['.openvision/hooks.json', hook],
  'home-claude-hook': ['.claude/settings.json', claudeHook],
  'home-claude-local-hook': ['.claude/settings.local.json', claudeHook],
};
// Pre-existing HOME data from earlier builds: readers must not use it either.
const homeData = {
  'home-plan': ['.openvision/plans/home-plan.plan.md', plain],
  'home-ide-state': ['.openvision/ide_state.json', () => JSON.stringify({ recentlyViewedFiles: [] })],
  'home-argv': ['.openvision-local/argv.json', () => '{}\n'],
  'home-claude-session': ['.claude/projects/placeholder/session.jsonl', () => '{}\n'],
  'home-codex-session': ['.codex/sessions/2026/session.jsonl', () => '{}\n'],
};
// Project markers: intentional project-local inputs, expected in every run.
const projectItems = {
  'project-openvision-skill': ['.openvision/skills/project-openvision-skill/SKILL.md', skill],
  'project-openvision-command': ['.openvision/commands/project-openvision-command.md', plain],
  'project-openvision-rule': ['.openvision/rules/project-openvision-rule.mdc', rule],
};
const write = async (base, items) => {
  for (const [name, [relative, body]] of Object.entries(items)) {
    await mkdir(resolve(join(base, relative), '..'), { recursive: true });
    await writeFile(join(base, relative), body(name));
  }
};
await write(home, { ...leaks, ...homeData });
await mkdir(xdg, { recursive: true });

const runs = [
  { name: 'alpha', installation: 'install-a', profile: 'data/local' },
  { name: 'beta', installation: 'install-a', profile: 'data/beta' },
  { name: 'gamma', installation: 'install-b', profile: 'data/local' },
].map(run => ({ ...run, profile: join(directory, run.installation, run.profile),
  extensions: join(directory, run.installation, `data/extensions-${run.name}`), project: join(directory, `project-${run.name}`) }));
// The profile home is <user-data-dir>/User; user-level paths keep their layout.
const profileItems = name => ({
  [`${name}-profile-skill`]: [`User/.openvision/skills/${name}-profile-skill/SKILL.md`, skill],
  [`${name}-profile-command`]: [`User/.openvision/commands/${name}-profile-command.md`, plain],
  [`${name}-profile-hook`]: ['User/.openvision/hooks.json', hook],
  [`${name}-profile-agent`]: [`User/agents/${name}-profile-agent.md`, agent],
});
for (const run of runs) {
  await write(run.profile, profileItems(run.name));
  await writeFile(join(run.profile, 'User/settings.json'), JSON.stringify({ ...verificationSettings,
    'git.openRepositoryInParentFolders': 'never' }));
  await write(run.project, projectItems);
  await writeFile(join(run.project, 'readme.txt'), 'OpenVision global path verification\n');
}

async function snapshot(path) {
  const out = {};
  async function walk(dir) {
    for (const entry of await readdir(dir, { withFileTypes: true })) {
      const full = join(dir, entry.name), info = await lstat(full), key = full.slice(path.length);
      if (entry.isDirectory()) { out[key + '/'] = `dir ${info.mtimeMs}`; await walk(full); }
      else out[key] = entry.isFile() ? `${info.size} ${info.mtimeMs} ${await readFile(full, 'base64')}` : `link ${info.mtimeMs}`;
    }
  }
  await walk(path);
  return out;
}
const list = async path => Object.keys(await snapshot(path).catch(() => ({}))).filter(key => !key.endsWith('/'));
const homeBefore = await snapshot(home);

// Stateless fixture model: the reply depends only on the last user message, so
// concurrent runs cannot interfere.
const requests = [];
const lastUser = messages => JSON.stringify(messages?.findLast(message => message.role === 'user')?.content ?? '');
const server = createServer(async (request, response) => {
  if (request.url === '/v1/models') {
    response.setHeader('content-type', 'application/json');
    return response.end(JSON.stringify({ data: [{ id: 'fixture-agent' }] }));
  }
  if (request.url !== '/v1/chat/completions') { response.statusCode = 404; return response.end(); }
  const chunks = []; for await (const chunk of request) chunks.push(chunk);
  const payload = JSON.parse(Buffer.concat(chunks)), text = lastUser(payload.messages);
  const tools = payload.tools?.map(tool => tool.function?.name) ?? [];
  const run = runs.find(item => text.includes(`OV-${item.name}`));
  requests.push({ run: run?.name, tools, authorized: request.headers.authorization === 'Bearer fixture-key' });
  response.writeHead(200, { 'Content-Type': 'text/event-stream' });
  const event = (delta, finish_reason = null) => response.write(`data: ${JSON.stringify({
    id: 'fixture', object: 'chat.completion.chunk', model: payload.model, choices: [{ index: 0, delta, finish_reason }] })}\n\n`);
  const toolResult = payload.messages?.at(-1)?.role === 'tool';
  const say = content => { event({ role: 'assistant', content }); event({}, 'stop'); };
  const call = (name, args) => { event({ role: 'assistant', tool_calls: [{ index: 0, id: `call_${name}_${run?.name}`, type: 'function',
    function: { name, arguments: JSON.stringify(args) } }] }); event({}, 'tool_calls'); };
  if (!run) say('Fixture.');
  else if (text.includes('shell step') && !toolResult)
    call('Shell', { command: `node -e "require('fs').writeFileSync('agent-${run.name}.txt', 'ok')"`, working_directory: run.project,
      description: `Write OV-${run.name} agent marker`, block_until_ms: 30000 });
  else if (text.includes('plan step') && !toolResult) {
    const plan = payload.tools?.find(tool => /plan/i.test(tool.function?.name ?? '') && /create/i.test(tool.function.name));
    if (!plan) say(`OV-${run.name} no plan tool.`);
    else {
      const properties = plan.function.parameters?.properties ?? {};
      const args = {};
      for (const [key, schema] of Object.entries(properties))
        args[key] = schema.type === 'array' ? [] : schema.type === 'boolean' ? false : `OV-${run.name} plan ${key}`;
      Object.assign(args, { name: `ov-${run.name}-plan`, overview: `OV-${run.name} plan overview`,
        plan: `# OV-${run.name} plan\n\nFixture plan.\n` });
      for (const key of Object.keys(args)) if (!(key in properties)) delete args[key];
      call(plan.function.name, args);
    }
  } else say(toolResult ? `OV-${run.name} tool finished.` : `OV-${run.name} reply verified.`);
  response.end('data: [DONE]\n\n');
});
await new Promise(done => server.listen(0, '127.0.0.1', done));

const sections = ['Skills', 'Commands', 'Subagents', 'Hooks', 'Rules', 'Plugins'];
async function execute(run) {
  const { name, profile } = run, result = { profile: name, installation: run.installation, userDataDir: profile };
  const env = { ...process.env, HOME: home, XDG_CONFIG_HOME: join(xdg, 'config'),
    XDG_DATA_HOME: join(xdg, 'data'), XDG_CACHE_HOME: join(xdg, 'cache'), XDG_STATE_HOME: join(xdg, 'state') };
  for (const key of ['ELECTRON_RUN_AS_NODE', 'CLAUDE_CONFIG_DIR', 'CODEX_HOME', 'CURSOR_DATA_DIR', 'CURSOR_CONFIG_DIR', 'VSCODE_OPENVISION_PROFILE_HOME'])
    delete env[key];
  let app, page;
  const step = async (label, action) => {
    try { await action(); result.steps[label] = true; }
    catch (error) {
      result.steps[label] = false; result.stepErrors[label] = error.message.split('\n')[0];
      await page?.screenshot({ path: join(directory, `${name}-${label}-failure.png`) }).catch(() => {});
      await page?.keyboard.press('Escape').catch(() => {});
    }
  };
  result.steps = {}; result.stepErrors = {};
  try {
    app = await _electron.launch({ executablePath: layout.executable, env, timeout: 60000,
      args: ['--user-data-dir', profile, '--extensions-dir', run.extensions, '--new-window',
        '--disable-updates', '--skip-welcome', '--skip-release-notes', '--disable-telemetry', '--disable-crash-reporter',
        ...(process.platform === 'linux' ? await linuxSandboxArguments(layout.host) : []),
        run.project, join(run.project, 'readme.txt')] });
    page = await app.firstWindow(); page.setDefaultTimeout(20000);
    await page.locator('.part.titlebar .openvision-local-profile').waitFor({ state: 'attached', timeout: 60000 });
    await enterWorkspace(page);
    await page.waitForTimeout(8000);
    const palette = async command => {
      await page.keyboard.press('ControlOrMeta+Shift+p');
      await page.locator('.quick-input-widget input[type="text"]').fill(`>${command}`);
      await page.locator('.quick-input-widget').getByText(command, { exact: true }).first().waitFor();
      await page.keyboard.press('Enter');
    };
    const openCustomize = async () => {
      await palette('Open Customize');
      await page.getByRole('button', { name: 'Rules', exact: true }).waitFor();
    };
    await openCustomize();
    // Providers push their lists after debounced discovery; allow late producers.
    await page.waitForTimeout(6000);
    const texts = {};
    for (const section of sections) {
      const button = page.getByRole('button', { name: section, exact: true });
      if (!await button.count()) continue;
      await button.first().click();
      await page.waitForTimeout(1500);
      texts[section] = await page.locator('body').innerText();
      await page.screenshot({ path: join(directory, `${name}-${section.toLowerCase()}.png`) }).catch(() => {});
      await writeFile(join(directory, `${name}-${section.toLowerCase()}.txt`), texts[section]);
    }
    // Customize > New for user skills and commands writes into this profile.
    result.created = {};
    for (const [section, file] of [['Skills', `User/.openvision/skills/${name}-created-skill/SKILL.md`],
      ['Commands', `User/.openvision/commands/${name}-created-command.md`]]) {
      // Three concurrent windows contend for focus; a quick input that closes
      // before it is filled is retried once. Only the profile file decides success.
      for (let attempt = 0; attempt < 2 && !result.created[section]; attempt++) {
        try {
          await openCustomize();
          await page.getByRole('button', { name: section, exact: true }).first().click();
          await page.waitForTimeout(1000);
          await page.getByRole('button', { name: 'New', exact: true }).first().click();
          const input = page.locator('.quick-input-widget input[type="text"]');
          await input.waitFor();
          await page.waitForTimeout(500);
          await input.fill(`${name}-created-${section === 'Skills' ? 'skill' : 'command'}`, { timeout: 10000 });
          await page.keyboard.press('Enter');
          await page.waitForTimeout(2500);
        } catch (error) { result.creationRetries = [...(result.creationRetries ?? []), `${section}: ${error.message.split('\n')[0]}`]; }
        result.created[section] = await readFile(join(profile, file), 'utf8').then(() => true, () => false);
        await page.keyboard.press('Escape');
      }
    }
    const all = Object.values(texts).join('\n');
    const others = runs.filter(item => item.name !== name).flatMap(item => Object.keys(profileItems(item.name)));
    result.leaked = [...Object.keys(leaks), ...others].filter(item => all.includes(item));
    result.missing = [...Object.keys(projectItems), ...Object.keys(profileItems(name))].filter(item => !all.includes(item));

    // Full session: provider, Agent chat, approved shell command, plan, terminal.
    await step('provider', async () => {
      await page.keyboard.press('Escape');
      await page.locator('.part.titlebar a[aria-label$=" Settings"]').click();
      await page.locator('.cursor-settings-sidebar-cell-label').filter({ hasText: /^Models$/ }).locator('..').click();
      const settings = page.locator('.openvision-model-settings');
      await settings.getByRole('button', { name: 'Add Provider', exact: true }).click();
      await page.getByLabel('Provider Name', { exact: true }).fill('Global path fixture');
      await page.getByLabel('API Base URL', { exact: true }).fill(`http://127.0.0.1:${server.address().port}/v1`);
      await page.getByLabel('API Key', { exact: true }).fill('fixture-key');
      await page.locator('dialog').getByRole('button', { name: 'Save', exact: true }).click();
      await page.locator('dialog').waitFor({ state: 'detached' });
      await page.locator('.tabs-container .tab').filter({ hasText: 'readme.txt' }).first().click();
      await page.keyboard.press('ControlOrMeta+Shift+l');
      await page.locator('.vscode-model-picker__trigger-markdown').filter({ visible: true }).first().click();
      await page.getByText('fixture-agent', { exact: true }).last().click();
      await page.keyboard.press('Escape');
    });
    const input = () => page.locator('.aislash-editor-input[contenteditable=true]').filter({ visible: true }).first();
    await step('chat', async () => {
      await input().fill(`OV-${name}: reply step. Do not use tools.`); await input().press('Enter');
      await page.getByText(`OV-${name} reply verified.`, { exact: true }).first().waitFor({ timeout: 45000 });
    });
    await step('agentShell', async () => {
      await input().fill(`OV-${name}: shell step.`); await input().press('Enter');
      await page.getByText('Pending approval', { exact: true }).filter({ visible: true }).waitFor({ timeout: 30000 });
      await page.getByRole('button', { name: 'Run', exact: true }).filter({ visible: true }).click();
      await page.getByText(`OV-${name} tool finished.`, { exact: true }).first().waitFor({ timeout: 45000 });
      assert.equal(await readFile(join(run.project, `agent-${name}.txt`), 'utf8'), 'ok');
    });
    await step('plan', async () => {
      // Select Plan from the composer mode menu (the control left of the model picker).
      await writeFile(join(directory, `${name}-composer.txt`), await page.locator('body').ariaSnapshot());
      // The mode control has no accessible name; it sits immediately left of the model picker.
      const model = await page.locator('.vscode-model-picker__trigger-markdown').filter({ visible: true }).first().boundingBox();
      await page.mouse.click(model.x - 28, model.y + model.height / 2);
      await page.waitForTimeout(800);
      await writeFile(join(directory, `${name}-mode-menu.txt`), await page.locator('body').ariaSnapshot());
      await page.getByText('Plan', { exact: true }).filter({ visible: true }).last().click();
      await page.waitForTimeout(800);
      await input().fill(`OV-${name}: plan step.`); await input().press('Enter');
      const deadline = Date.now() + 45000;
      while (Date.now() < deadline && !(await list(join(profile, 'User/.openvision/plans'))).some(file => file.endsWith('.plan.md')))
        await page.waitForTimeout(1000);
      await page.screenshot({ path: join(directory, `${name}-plan.png`) }).catch(() => {});
      assert.ok((await list(join(profile, 'User/.openvision/plans'))).some(file => file.endsWith('.plan.md')), 'No plan file in the profile');
    });
    await step('terminal', async () => {
      await page.keyboard.press('Escape');
      await palette('Terminal: Create New Terminal');
      await page.locator('.terminal-wrapper .xterm').filter({ visible: true }).first().waitFor({ timeout: 30000 });
      await page.waitForTimeout(3000);
      await page.keyboard.type(`echo ov-terminal > terminal-${name}.txt; printenv VSCODE_OPENVISION_PROFILE_HOME > terminal-env-${name}.txt; echo done\n`);
      const marker = join(run.project, `terminal-${name}.txt`), deadline = Date.now() + 20000;
      while (Date.now() < deadline && !await readFile(marker, 'utf8').catch(() => '')) await page.waitForTimeout(500);
      assert.equal((await readFile(marker, 'utf8')).trim(), 'ov-terminal');
      // Integrated terminals do not inherit the internal VSCODE_* variable.
      result.terminalProfileVariable = (await readFile(join(run.project, `terminal-env-${name}.txt`), 'utf8').catch(() => '')).trim();
    });
    await page.screenshot({ path: join(directory, `${name}-session.png`) }).catch(() => {});
  } catch (error) {
    result.error = error.stack;
    if (page) {
      await page.screenshot({ path: join(directory, `${name}-failure.png`) }).catch(() => {});
      await writeFile(join(directory, `${name}-failure.txt`), await page.locator('body').innerText()).catch(() => {});
    }
  } finally {
    if (app) {
      const child = app.process(), exited = new Promise(done => child.once('exit', done));
      const window = app.windows()[0], closing = app.close();
      await window?.getByText('Quit Anyway', { exact: true }).click({ timeout: 5000 }).catch(() => {});
      await closing; if (child.exitCode === null && child.signalCode === null) await exited;
      result.ownedHostExit = { exitCode: child.exitCode, signalCode: child.signalCode };
    }
  }
  // Agent data that earlier builds wrote to HOME must now be in this profile home.
  const files = await list(join(profile, 'User'));
  result.profileData = {
    projects: files.some(file => file.startsWith('/.openvision/projects/')),
    plans: files.some(file => /^\/\.openvision\/plans\/.+\.plan\.md$/.test(file)),
    gitignore: files.includes('/.openvision/.gitignore'),
    ideState: files.includes('/.openvision/ide_state.json'),
    argv: files.includes('/.openvision-local/argv.json'),
  };
  return result;
}

const result = { success: false, checkedAt: new Date().toISOString(), platform: process.platform, arch: process.arch,
  scope: 'Native Linux x64 source build. Disposable HOME with product and third-party markers; XDG directories outside HOME. Two named profiles of installation A and the default profile of installation B (same compiled host, separate launcher-style data roots) run concurrently. Customize discovery and creation, local fixture provider, Agent chat, approved Agent shell command, Plan mode plan, integrated terminal. No AI provider request.',
  runs: [] };
try {
  result.runs = await Promise.all(runs.map(execute));
  const homeAfter = await snapshot(home);
  result.homeAdded = Object.keys(homeAfter).filter(key => !(key in homeBefore));
  result.homeRemoved = Object.keys(homeBefore).filter(key => !(key in homeAfter));
  result.homeChanged = Object.keys(homeBefore).filter(key => key in homeAfter && homeBefore[key] !== homeAfter[key]);
  result.xdgFiles = [...new Set((await list(xdg)).map(path => path.split('/').slice(0, 4).join('/')))].sort();
  result.requests = { total: requests.length, unauthorized: requests.filter(item => !item.authorized).length };
  for (const run of result.runs) {
    assert.equal(run.error, undefined, `${run.profile}: ${run.error}`);
    assert.deepEqual(run.leaked, [], `${run.profile}: global, other-profile or other-installation items listed`);
    assert.deepEqual(run.missing, [], `${run.profile}: expected profile/project items missing`);
    assert.deepEqual(run.created, { Skills: true, Commands: true }, `${run.profile}: Customize creation did not write the profile`);
    assert.deepEqual(run.stepErrors, {}, `${run.profile}: session steps failed`);
    assert.deepEqual(run.profileData, { projects: true, plans: true, gitignore: true, ideState: true, argv: true },
      `${run.profile}: agent data missing from the profile home`);
    assert.equal(run.terminalProfileVariable, '', `${run.profile}: integrated terminal inherited the profile variable`);
  }
  assert.deepEqual({ added: result.homeAdded, removed: result.homeRemoved, changed: result.homeChanged },
    { added: [], removed: [], changed: [] }, 'HOME was modified during the session');
  assert.equal(result.requests.unauthorized, 0);
  result.success = true;
} catch (error) {
  result.error ??= error.stack;
} finally {
  server.closeAllConnections(); await new Promise(done => server.close(done));
}
await writeFile(join(directory, 'result.json'), JSON.stringify(result, null, 2));
console.log(JSON.stringify({ ...result, directory }, null, 2));
if (!result.success) process.exitCode = 1;
