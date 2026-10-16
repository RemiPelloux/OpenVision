import assert from 'node:assert/strict';
import { mkdir, mkdtemp, readdir, readFile, writeFile } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { _electron } from '../tooling/browser.mjs';
import { loadRuntime } from './source-assembly.mjs';
import { verificationSettings } from './verification-profile.mjs';
import { linuxSandboxArguments } from './platform.mjs';
import { enterWorkspace } from './verification-workspace.mjs';

// Native Customize discovery of skills, commands, hooks, subagents and rules
// with marker files in every user-global location the recovered producers can
// read. HOME/XDG point at a disposable directory; two named profiles share that
// HOME and the same project, and each must list only its own profile items.
const root = resolve(import.meta.dirname, '..');
const { layout } = await loadRuntime(root);
await mkdir(join(root, 'logs'), { recursive: true });
const directory = await mkdtemp(join(root, 'logs/global-paths-'));
const home = join(directory, 'home'), project = join(directory, 'project');
const skill = name => `---\nname: ${name}\ndescription: ${name} fixture skill\n---\nFixture skill ${name}.\n`;
const agent = name => `---\nname: ${name}\ndescription: ${name} fixture agent\n---\nFixture agent ${name}.\n`;
const rule = name => `---\ndescription: ${name} fixture\nalwaysApply: true\n---\nFixture rule ${name}.\n`;
const hook = name => JSON.stringify({ version: 1, hooks: { beforeSubmitPrompt: [{ command: `echo ${name}` }] } });
const claudeHook = name => JSON.stringify({ hooks: { UserPromptSubmit: [{ hooks: [{ type: 'command', command: `echo ${name}` }] }] } });

// Home markers: none of these may be listed. The names are unique substrings.
const leaks = {
  'home-openvision-skill': ['.openvision/skills/home-openvision-skill/SKILL.md', skill],
  'home-cursor-skill': ['.cursor/skills/home-cursor-skill/SKILL.md', skill],
  'home-claude-skill': ['.claude/skills/home-claude-skill/SKILL.md', skill],
  'home-codex-skill': ['.codex/skills/home-codex-skill/SKILL.md', skill],
  'home-agents-skill': ['.agents/skills/home-agents-skill/SKILL.md', skill],
  'home-grok-skill': ['.grok/skills/home-grok-skill/SKILL.md', skill],
  'home-builtin-skill': ['.openvision/skills-cursor/home-builtin-skill/SKILL.md', skill],
  'home-openvision-command': ['.openvision/commands/home-openvision-command.md', name => `Fixture command ${name}.\n`],
  'home-claude-command': ['.claude/commands/home-claude-command.md', name => `Fixture command ${name}.\n`],
  'home-openvision-agent': ['.openvision/agents/home-openvision-agent.md', agent],
  'home-claude-agent': ['.claude/agents/home-claude-agent.md', agent],
  'home-openvision-rule': ['.openvision/rules/home-openvision-rule.mdc', rule],
  'home-openvision-hook': ['.openvision/hooks.json', hook],
  'home-claude-hook': ['.claude/settings.json', claudeHook],
  'home-claude-local-hook': ['.claude/settings.local.json', claudeHook],
};
// Project markers: intentional project-local inputs, expected in both profiles.
const projectItems = {
  'project-openvision-skill': ['.openvision/skills/project-openvision-skill/SKILL.md', skill],
  'project-openvision-command': ['.openvision/commands/project-openvision-command.md', name => `Fixture command ${name}.\n`],
  'project-openvision-rule': ['.openvision/rules/project-openvision-rule.mdc', rule],
};
const write = async (base, items) => {
  for (const [name, [relative, body]] of Object.entries(items)) {
    await mkdir(resolve(join(base, relative), '..'), { recursive: true });
    await writeFile(join(base, relative), body(name));
  }
};
await write(home, leaks);
await write(project, projectItems);
await writeFile(join(project, 'readme.txt'), 'OpenVision global path verification\n');

// Profile markers: each named profile owns one item of each kind.
const profiles = ['alpha', 'beta'];
// The profile home is <user-data-dir>/User; user-level paths keep their layout.
const profileItems = name => ({
  [`${name}-profile-skill`]: [`User/.openvision/skills/${name}-profile-skill/SKILL.md`, skill],
  [`${name}-profile-command`]: [`User/.openvision/commands/${name}-profile-command.md`, n => `Fixture command ${n}.\n`],
  [`${name}-profile-hook`]: ['User/.openvision/hooks.json', hook],
  [`${name}-profile-agent`]: [`User/agents/${name}-profile-agent.md`, agent],
});
for (const name of profiles) {
  const profile = join(directory, `profile-${name}`);
  await write(profile, profileItems(name));
  await mkdir(join(profile, 'User'), { recursive: true });
  await writeFile(join(profile, 'User/settings.json'), JSON.stringify({ ...verificationSettings,
    'git.openRepositoryInParentFolders': 'never' }));
}

async function snapshot(path) {
  const out = {};
  async function walk(dir) {
    for (const entry of await readdir(dir, { withFileTypes: true })) {
      const full = join(dir, entry.name);
      if (entry.isDirectory()) await walk(full);
      else if (entry.isFile()) out[full.slice(path.length)] = await readFile(full, 'utf8');
    }
  }
  await walk(path);
  return out;
}
const homeBefore = await snapshot(home);

const sections = ['Skills', 'Commands', 'Subagents', 'Hooks', 'Rules', 'Plugins'];
async function run(name) {
  const profile = join(directory, `profile-${name}`), result = { profile: name };
  const env = { ...process.env, HOME: home, XDG_CONFIG_HOME: join(home, '.config'),
    XDG_DATA_HOME: join(home, '.local/share'), XDG_CACHE_HOME: join(home, '.cache') };
  delete env.ELECTRON_RUN_AS_NODE; delete env.CLAUDE_CONFIG_DIR; delete env.CODEX_HOME;
  let app, page;
  try {
    app = await _electron.launch({ executablePath: layout.executable, env, timeout: 60000,
      args: ['--user-data-dir', profile, '--extensions-dir', join(directory, `extensions-${name}`), '--new-window',
        '--disable-updates', '--skip-welcome', '--skip-release-notes', '--disable-telemetry', '--disable-crash-reporter',
        ...(process.platform === 'linux' ? await linuxSandboxArguments(layout.host) : []),
        project, join(project, 'readme.txt')] });
    page = await app.firstWindow(); page.setDefaultTimeout(20000);
    await page.locator('.part.titlebar .openvision-local-profile').waitFor({ state: 'attached', timeout: 60000 });
    await enterWorkspace(page);
    await page.waitForTimeout(8000);
    const openCustomize = async () => {
      await page.keyboard.press('ControlOrMeta+Shift+p');
      await page.locator('.quick-input-widget input[type="text"]').fill('>Open Customize');
      await page.locator('.quick-input-widget').getByText('Open Customize', { exact: true }).first().waitFor();
      await page.keyboard.press('Enter');
      await page.getByRole('button', { name: 'Rules', exact: true }).waitFor();
    };
    await openCustomize();
    // Providers push their lists after debounced discovery; allow late producers.
    await page.waitForTimeout(6000);
    result.sections = {};
    for (const section of sections) {
      const button = page.getByRole('button', { name: section, exact: true });
      if (!await button.count()) { result.sections[section] = null; continue; }
      await button.first().click();
      await page.waitForTimeout(1500);
      const text = await page.locator('body').innerText();
      result.sections[section] = text;
      await page.screenshot({ path: join(directory, `${name}-${section.toLowerCase()}.png`) });
      await writeFile(join(directory, `${name}-${section.toLowerCase()}.txt`), text);
    }
    // Customize > New for user skills and commands writes into this profile.
    result.created = {};
    for (const [section, file] of [['Skills', `User/.openvision/skills/${name}-created-skill/SKILL.md`],
      ['Commands', `User/.openvision/commands/${name}-created-command.md`]]) {
      await openCustomize();
      await page.getByRole('button', { name: section, exact: true }).first().click();
      await page.waitForTimeout(1000);
      await page.getByRole('button', { name: 'New', exact: true }).first().click();
      const input = page.locator('.quick-input-widget input[type="text"]');
      await input.waitFor();
      await page.waitForTimeout(500);
      await input.fill(`${name}-created-${section === 'Skills' ? 'skill' : 'command'}`);
      await page.keyboard.press('Enter');
      await page.waitForTimeout(2500);
      await page.screenshot({ path: join(directory, `${name}-${section.toLowerCase()}-created.png`) });
      result.created[section] = await readFile(join(profile, file), 'utf8').then(() => true, () => false);
      await page.keyboard.press('Escape');
    }
    const all = Object.values(result.sections).filter(Boolean).join('\n');
    const other = profiles.find(item => item !== name);
    result.leaked = [...Object.keys(leaks), ...Object.keys(profileItems(other))].filter(item => all.includes(item));
    result.listed = [...Object.keys(projectItems), ...Object.keys(profileItems(name))].filter(item => all.includes(item));
    result.missing = [...Object.keys(projectItems), ...Object.keys(profileItems(name))].filter(item => !all.includes(item));
  } catch (error) {
    result.error = error.stack;
    if (page) {
      await page.screenshot({ path: join(directory, `${name}-failure.png`) }).catch(() => {});
      await writeFile(join(directory, `${name}-failure.txt`), await page.locator('body').innerText()).catch(() => {});
    }
  } finally {
    if (app) {
      const child = app.process(), exited = new Promise(done => child.once('exit', done));
      await app.close(); if (child.exitCode === null && child.signalCode === null) await exited;
      result.ownedHostExit = { exitCode: child.exitCode, signalCode: child.signalCode };
    }
  }
  delete result.sections;
  return result;
}

const result = { success: false, checkedAt: new Date().toISOString(), platform: process.platform,
  scope: 'Native Customize skills/commands/subagents/hooks/rules discovery and creation; disposable HOME with third-party markers; two named profiles running concurrently; no AI provider request.',
  runs: [] };
try {
  // Both named profiles run side by side against the same HOME and project.
  result.runs = await Promise.all(profiles.map(run));
  const homeAfter = await snapshot(home);
  // Original home files must keep their bytes. Remaining global writers (see
  // the report) may add files, but none in a customization location.
  result.homeMarkersIntact = Object.keys(homeBefore).every(key => homeBefore[key] === homeAfter[key]);
  result.homeAdded = Object.keys(homeAfter).filter(key => !(key in homeBefore));
  for (const run of result.runs) {
    assert.equal(run.error, undefined, `${run.profile}: ${run.error}`);
    assert.deepEqual(run.leaked, [], `${run.profile}: global or other-profile items listed`);
    assert.deepEqual(run.missing, [], `${run.profile}: expected profile/project items missing`);
    assert.deepEqual(run.created, { Skills: true, Commands: true }, `${run.profile}: Customize creation did not write the profile`);
  }
  assert.ok(result.homeMarkersIntact, 'Home marker files changed or removed');
  result.homeCustomizationWrites = result.homeAdded.filter(path =>
    /^\/\.(?:openvision|cursor|claude|codex|agents|grok)\/(?:skills|skills-cursor|commands|agents|rules|hooks)(?:\/|\.json$)/.test(path) ||
    /^\/\.(?:openvision|cursor)\/hooks\.json$/.test(path));
  assert.deepEqual(result.homeCustomizationWrites, [], 'Customization files were written to HOME');
  result.homeAdded = [...new Set(result.homeAdded.map(path => path.split('/').slice(0, 3).join('/')))].sort();
  result.success = true;
} catch (error) {
  result.error ??= error.stack;
}
await writeFile(join(directory, 'result.json'), JSON.stringify(result, null, 2));
console.log(JSON.stringify({ ...result, directory }, null, 2));
if (!result.success) process.exitCode = 1;
