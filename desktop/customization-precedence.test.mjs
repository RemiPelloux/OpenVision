import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { runInNewContext } from 'node:vm';
import { parseExpressionAt } from '../tooling/dependencies.mjs';
import { measureSkillConfigKey, preferProjectSkills, projectCommandsWin, listSkillsFromEveryScope } from './customization-precedence-customization.mjs';
import { namespaceEdits, applyNamespaceEdits } from './project-namespace.mjs';
import { readableApp } from './recovered-source.mjs';

const read = relative => readFile(new URL(relative, readableApp), 'utf8');
const exec = await read('extensions/cursor-agent-exec/dist/main.js');
const namespaced = source => applyNamespaceEdits(source, namespaceEdits(source));

// The recovered key function, after the build's namespace pass.
function skillKey(text) {
  const index = text.indexOf('indexOf("/.cursor/")');
  const fn = parseExpressionAt(text, text.lastIndexOf('function ', index), { ecmaVersion: 'latest' });
  return runInNewContext(`(${namespaced(text.slice(fn.start, fn.end))})`);
}

test('skill keys collapse .openvision and .claude copies of one root after the rename', async () => {
  const before = skillKey(exec), patched = measureSkillConfigKey(exec), after = skillKey(patched);
  const own = '/w/app/.openvision/skills/x/SKILL.md', claude = '/w/app/.claude/skills/x/SKILL.md';
  assert.notEqual(before(own), before(claude), 'The recovered fixed length splits the renamed directory');
  assert.equal(after(own), after(claude));
  assert.equal(after(own), '/w/app::skills/x/SKILL.md');
  assert.notEqual(after('/w/other/.openvision/skills/x/SKILL.md'), after(own), 'Different roots stay separate');
  assert.equal(measureSkillConfigKey(patched), patched);
  for (const relative of ['extensions/cursor-agent-host/dist/main.js', 'extensions/cursor-local-agent-runtime/dist/main.js']) {
    const text = await read(relative), key = skillKey(measureSkillConfigKey(text));
    assert.equal(key(own), key(claude), relative);
  }
});

test('the Agent skill list prefers project, then profile, then plugin skills by name', () => {
  const patched = preferProjectSkills(exec);
  assert.equal(preferProjectSkills(patched), patched);
  const helper = namespaced(patched.slice(0, patched.indexOf('\n}\n') + 3));
  const prefer = runInNewContext(`${helper}; openvisionPreferProjectSkills`);
  const home = '/data/User', context = { workspacePaths: ['/w/app'], userHomeDirectory: home };
  const skill = (fullPath, extra = {}) => ({ fullPath, ...extra });
  const project = skill('/w/app/.openvision/skills/same/SKILL.md'), profile = skill(`${home}/.openvision/skills/same/SKILL.md`);
  const plugin = skill(`${home}/.openvision/plugins/local/p/skills/same/SKILL.md`);
  const marketplace = skill('/cache/plugins/m/skills/other/SKILL.md', { pluginId: 'm' });
  const profileOther = skill(`${home}/.openvision/skills/other/SKILL.md`);
  const builtin = skill(`${home}/.openvision/skills-cursor/same/SKILL.md`);
  const broken = skill('/w/app/.openvision/skills/broken/SKILL.md', { parseError: 'Description is required' });
  const brokenProject = skill('/w/app/.openvision/skills/fallback/SKILL.md', { parseError: 'bad' });
  const profileFallback = skill(`${home}/.openvision/skills/fallback/SKILL.md`);
  const result = prefer([builtin, profile, plugin, project, marketplace, profileOther, broken, brokenProject, profileFallback], context);
  assert.deepEqual(result.map(item => item.fullPath), [builtin, project, profileOther, broken, brokenProject, profileFallback].map(item => item.fullPath));
  assert.deepEqual(prefer([plugin, marketplace], context).map(item => item.fullPath), [plugin.fullPath, marketplace.fullPath]);
  assert.deepEqual(prefer([profile], { workspacePaths: [], userHomeDirectory: '' }).map(item => item.fullPath), [profile.fullPath]);
});

// Run the recovered loader with directories that each provide one command file.
async function loadCommands(text) {
  const index = text.indexOf('async loadAllCommands(');
  let owner;
  for (let start = text.lastIndexOf('class', index); !owner; start = text.lastIndexOf('class', start - 1)) {
    try { const node = parseExpressionAt(text, start, { ecmaVersion: 'latest' }); if (node.end > index) owner = node; } catch {}
  }
  const method = owner.body.body.find(entry => entry.key?.name === 'loadAllCommands');
  const order = [], state = { commands: new Map(), commandSources: new Map() };
  const service = Object.assign(runInNewContext(`({${text.slice(method.start, method.end)}})`), {
    experimentService: { checkFeatureGate: () => true }, thirdPartyExtensibilityObservable: { get: () => true },
    workspaceClaudeCommandsDirs: ['project-claude'], workspaceCommandsDirs: ['project'],
    personalClaudeCommandsDir: 'profile-claude', personalCommandsDir: 'profile',
    fileService: { exists: async () => true },
    async loadTeamCommands() { order.push('team'); }, async loadGlobalCommands() { order.push('global'); },
    async loadPluginCommands(options, value) { order.push('plugin'); if (!value.commands.has('same.md')) value.commands.set('same.md', 'plugin'); },
    async loadCommandsFromDirectory(directory, personal, value) {
      order.push(directory); value.commands.set('same.md', directory); value.commands.set(`${directory}.md`, directory);
    },
  });
  await service.loadAllCommands(state);
  return { order, winner: state.commands.get('same.md'), names: [...state.commands.keys()].sort() };
}

test('a project command wins over a profile command with the same name', async () => {
  for (const variant of ['desktop', 'glass']) {
    const text = await read(`out/vs/workbench/workbench.${variant}.main.js`);
    const before = await loadCommands(text);
    assert.equal(before.winner, 'profile', `${variant}: recovered order lets the profile override`);
    const patched = projectCommandsWin(text);
    assert.equal(projectCommandsWin(patched), patched);
    const after = await loadCommands(patched);
    assert.deepEqual(after.order, ['team', 'global', 'profile-claude', 'profile', 'plugin', 'project-claude', 'project']);
    assert.equal(after.winner, 'project');
    assert.deepEqual(after.names, before.names, 'Every scope still loads its own commands');
  }
});

// Run the recovered pushed-rule cache with same-named project and profile skills.
async function cacheKeys(text) {
  const index = text.indexOf('async buildCacheFromPushedRules(');
  let owner;
  for (let start = text.lastIndexOf('class', index); !owner; start = text.lastIndexOf('class', start - 1)) {
    try { const node = parseExpressionAt(text, start, { ecmaVersion: 'latest' }); if (node.end > index) owner = node; } catch {}
  }
  const method = owner.body.body.find(entry => entry.key?.name === 'buildCacheFromPushedRules');
  const pattern = /\.openvision[/\\]skills[/\\](.+)$/;
  // Module helpers it calls (third-party gate, plugin key, equality, error report) are stubbed as falsy.
  const source = text.slice(method.start, method.end);
  const helpers = Object.fromEntries([...source.matchAll(/(?<![.\w$])([\w$]+)\(/g)].map(match => match[1])
    .filter(name => !['if', 'for', 'catch', 'Array', 'Set', 'Number', 'buildCacheFromPushedRules'].includes(name)).map(name => [name, () => undefined]));
  const service = Object.assign(runInNewContext(`({${source}})`, { ...helpers, Set, Array, Number }), {
    thirdPartyExtensibilityObservable: { get: () => true }, experimentService: { checkFeatureGate: () => true },
    contextService: { getWorkspace: () => ({ folders: [{ name: 'app', uri: { path: '/w/app' } }] }) },
    findWorkspaceFolderForPath: path => path.startsWith('/w/app/') ? { name: 'app', uri: { path: '/w/app' } } : undefined,
    computePathsFromFullPath(path) {
      return { subdirPath: '', internalPath: pattern.exec(path)[1], workspaceFolder: this.findWorkspaceFolderForPath(path) };
    },
    createUriFromFullPath: path => path, resolveGlobPath: value => value,
    _providerRulesCache: new Map(), ruleUris: new Map(),
  });
  const rule = fullPath => ({ fullPath, type: { agentFetched: { description: fullPath } }, content: '' });
  await service.buildCacheFromPushedRules([rule('/data/User/.openvision/skills/same/SKILL.md'),
    rule('/w/app/.openvision/skills/same/SKILL.md'), rule('/data/User/.openvision/skills/other/SKILL.md')]);
  return Object.fromEntries([...service._providerRulesCache].map(([key, value]) => [key, value.fullPath]));
}

test('Customize keeps same-named project and profile skills, the project under the canonical name', async () => {
  for (const variant of ['desktop', 'glass']) {
    const text = await read(`out/vs/workbench/workbench.${variant}.main.js`);
    assert.deepEqual(await cacheKeys(text), { 'same/SKILL.md': '/w/app/.openvision/skills/same/SKILL.md',
      'other/SKILL.md': '/data/User/.openvision/skills/other/SKILL.md' }, `${variant}: recovered cache drops one copy`);
    const patched = listSkillsFromEveryScope(text);
    assert.equal(listSkillsFromEveryScope(patched), patched);
    assert.deepEqual(await cacheKeys(patched), { 'same/SKILL.md': '/w/app/.openvision/skills/same/SKILL.md',
      'user/same/SKILL.md': '/data/User/.openvision/skills/same/SKILL.md', 'other/SKILL.md': '/data/User/.openvision/skills/other/SKILL.md' });
  }
});
