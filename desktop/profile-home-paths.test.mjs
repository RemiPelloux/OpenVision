import test from 'node:test';
import assert from 'node:assert/strict';
import { lstat, mkdir, mkdtemp, readFile, readdir, symlink, writeFile } from 'node:fs/promises';
import * as path from 'node:path';
import { tmpdir } from 'node:os';
import { readableAppDirectory } from './recovered-source.mjs';
import { isolateWorkbenchGlobalPaths } from './global-paths.mjs';
import { isolateEnvironmentProfileHome, isolateMainProfileHome, isolateNodeProfileHome, isolateWorkbenchProfileHome,
  marker, nodeTargets, terminalStatusSetting, variable } from './profile-home-paths.mjs';
import { excludedItems, migrateProfileHome, relocatedItems } from './migrate-profile-home.mjs';

const cache = new Map();
const original = relative => {
  if (!cache.has(relative)) cache.set(relative, readFile(path.join(readableAppDirectory(), relative), 'utf8'));
  return cache.get(relative);
};
const workbenches = ['desktop', 'glass'].map(variant => `out/vs/workbench/workbench.${variant}.main.js`);
const homeJoin = /(?:\(0, )?[\w$]+(?:\.default)?\.join\)?\(\s*(?:\(0, )?[\w$]+(?:\.default)?\.homedir\)?\(\),\s*"\.(?:cursor|claude)"/;

function withEnvironment(value, run) {
  const before = process.env[variable];
  if (value === undefined) delete process.env[variable]; else process.env[variable] = value;
  try { return run(); } finally { if (before === undefined) delete process.env[variable]; else process.env[variable] = before; }
}

test('node bundles resolve every product and third-party home path from the profile home', async () => {
  for (const [relative, expected] of Object.entries(nodeTargets)) {
    const before = await original(relative), after = isolateNodeProfileHome(before, expected);
    assert.ok(after.includes(marker), relative);
    assert.doesNotMatch(after, homeJoin, `${relative} still joins the operating-system home`);
    assert.doesNotMatch(after, /process\.env\.CURSOR_(?:DATA|CONFIG)_DIR/, `${relative} keeps another product's override`);
    assert.equal(isolateNodeProfileHome(after, expected), after, `${relative} is idempotent`);
    if (before.startsWith('#!')) assert.ok(after.startsWith('#!'), `${relative} keeps its shebang`);
  }
  // Drift guard: a changed count fails the build instead of silently skipping a writer.
  const exec = 'extensions/cursor-agent-exec/dist/main.js';
  const source = await original(exec);
  assert.throws(() => isolateNodeProfileHome(source, { ...nodeTargets[exec], join: 12 }), /join sites changed/);
});
test('patched node path expression uses the variable and fails closed', async () => {
  const text = isolateNodeProfileHome(await original('extensions/cursor-mcp/dist/main.js'), nodeTargets['extensions/cursor-mcp/dist/main.js']);
  const expression = text.match(/\(home => \{ if \(typeof home !== "string"[\s\S]*?\}\)\(process\.env\.VSCODE_OPENVISION_PROFILE_HOME\)/)[0];
  const evaluate = () => new Function(`return ${expression};`)();
  assert.equal(withEnvironment('/profiles/alpha/User', evaluate), '/profiles/alpha/User');
  assert.throws(() => withEnvironment(undefined, evaluate), /profile home unavailable/);
  assert.throws(() => withEnvironment('relative/User', evaluate), /profile home unavailable/);
});

test('main bootstrap publishes the profile home before reading argv.json and moves main-process data', async () => {
  const text = isolateMainProfileHome(await original('out/main.js'));
  assert.match(text, /process\.env\.VSCODE_OPENVISION_PROFILE_HOME = [\w$]+\.join\([\w$]+\([\w$]+, [\w$]+\.nameShort \?\? "code-oss-dev"\), "User"\), [\w$]+\([\w$]+\)\)/);
  const publish = text.indexOf(`process.env.${variable} =`), read = text.indexOf('"argv.json") : ');
  assert.ok(publish > 0 && read > 0);
  for (const pattern of [/homedir\(\), [\w$]+, "argv\.json"/, /environmentService\.userHome\.fsPath;\s*return [\w$]+\([\w$]+, "\.cursor", "ai-tracking"/,
    /homedir\(\), [\w$]+, "shouldUpdate"/, /\.userHome, [\w$]+\.dataFolderName, "shadow-workspaces"/,
    /this\.userHome, this\.productService\.dataFolderName, "argv\.json"/])
    assert.doesNotMatch(text, pattern);
  assert.equal(isolateMainProfileHome(text), text);
  const main = await original('out/main.js');
  assert.throws(() => isolateMainProfileHome(main.replace('"shouldUpdate"', '"shouldUpdateX"')), /update flag/);
  for (const relative of ['out/vs/code/electron-utility/sharedProcess/sharedProcessMain.js', 'out/vs/platform/terminal/node/ptyHostMain.js'])
    assert.match(isolateEnvironmentProfileHome(await original(relative)), /\(this\.appSettingsHome, this\.productService\.dataFolderName, "argv\.json"\)/);
});

test('workbench producers use the path service profile home; terminal status is an opt-in setting', async () => {
  for (const relative of workbenches) {
    const before = isolateWorkbenchGlobalPaths(await original(relative)), text = isolateWorkbenchProfileHome(before);
    assert.equal(isolateWorkbenchProfileHome(text), text, relative);
    assert.match(text, /globalThis\[Symbol\.for\("openvision\.profileHomeOwner"\)\] = this;/);
    // Plans helper: the argument (the OS home) is ignored.
    const helper = text.match(/function ([\w$]+)\(([\w$]+)\) \{ return ([\w$]+)\(\(owner => [^\n]*?, "\.cursor", "plans"\); \}/);
    assert.ok(helper, `${relative}: plans helper`);
    globalThis[Symbol.for('openvision.profileHomeOwner')] = { openvisionProfileHome: '/profiles/alpha/User' };
    try {
      const plans = new Function(helper[3], `${helper[0]}; return ${helper[1]}("/home/user");`)((base, ...parts) => path.posix.join(base, ...parts));
      assert.equal(plans, '/profiles/alpha/User/.cursor/plans');
    } finally { delete globalThis[Symbol.for('openvision.profileHomeOwner')]; }
    for (const pattern of [/await this\.pathService\.userHome\(\{ preferLocal: !1 \}\),\s*[\w$]+ = [\w$]+\.joinPath\([\w$]+, "\.cursor"\),\s*[\w$]+ = [\w$]+\.joinPath\([\w$]+, "ide_state\.json"\)/,
      /getWorktreesRoot\(\) \{\s*if \(!this\._worktreesRoot\) \{\s*const [\w$]+ = this\.pathService\.userHome/,
      /joinPath\(await [\w$]+\.pathService\.userHome\(\), [\w$]+, /, /\.userHomeUri, "\.cursor", "skills", /])
      assert.doesNotMatch(text, pattern, relative);
    assert.match(text, /async _poll\(\) \{ return;/);
    assert.match(text, new RegExp(`"${terminalStatusSetting.replaceAll('.', '\\.')}": \\{ type: "boolean", default: !1`));
    const gate = text.match(/_isEnabled\(\) \{ return this\._instantiationService\.invokeFunction\(accessor => accessor\.get\(([\w$]+)\)\.getValue\("([^"]+)"\) === !0\); \}/);
    assert.equal(gate?.[2], terminalStatusSetting);
    const settings = new Map(), service = { getValue: key => settings.get(key) };
    const enabled = () => new Function(gate[1], `return { _instantiationService: { invokeFunction: f => f({ get: () => ${gate[1]} }) }, ${gate[0]} }._isEnabled();`)(service);
    assert.equal(enabled(), false, 'off by default');
    settings.set(terminalStatusSetting, true);
    assert.equal(enabled(), true);
  }
  const desktop = await original(workbenches[0]);
  assert.throws(() => isolateWorkbenchProfileHome(isolateWorkbenchGlobalPaths(
    desktop.replace('"ide_state.json"', '"ide_state2.json"'))), /recently viewed files/);
  assert.throws(() => isolateWorkbenchProfileHome(desktop), /global path isolation first/);
});

async function fixture() {
  const directory = await mkdtemp(path.join(tmpdir(), 'openvision-profile-home-'));
  const home = path.join(directory, 'home'), profile = path.join(directory, 'profile');
  const files = {
    '.openvision/plans/a.plan.md': 'plan', '.openvision/projects/p/agent-transcripts/t.jsonl': '{}',
    '.openvision/skills/s/SKILL.md': 'skill', '.openvision/ide_state.json': '{"recentlyViewedFiles":[]}',
    '.openvision/worktrees/w/file': 'worktree', '.openvision/.gitignore': '*', '.openvision-local/argv.json': '{}',
    '.openvision-local/permissions.json': '{"allow":[]}', '.openvision/plugins/cache/x.json': '1',
  };
  for (const [relative, body] of Object.entries(files)) {
    await mkdir(path.dirname(path.join(home, relative)), { recursive: true });
    await writeFile(path.join(home, relative), body);
  }
  return { directory, home, profile, files };
}

async function snapshot(root) {
  const out = {};
  async function walk(dir) {
    for (const entry of await readdir(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) await walk(full);
      else out[path.relative(root, full)] = entry.isSymbolicLink() ? 'link' : await readFile(full, 'utf8');
    }
  }
  await walk(root);
  return out;
}

test('home import is additive, keeps sources, skips worktrees and links, and repeats without change', async () => {
  const { home, profile } = await fixture();
  await mkdir(path.join(profile, 'User/.openvision/plans'), { recursive: true });
  await writeFile(path.join(profile, 'User/.openvision/plans/a.plan.md'), 'newer profile plan');
  await symlink(path.join(home, '.openvision/plans'), path.join(home, '.openvision/notepads'));
  const before = await snapshot(home);
  const first = await migrateProfileHome({ home, profile });
  assert.deepEqual(await snapshot(home), before, 'sources unchanged');
  assert.equal(await readFile(path.join(profile, 'User/.openvision/plans/a.plan.md'), 'utf8'), 'newer profile plan');
  assert.deepEqual(first.conflicts, [path.join(profile, 'User/.openvision/plans/a.plan.md')]);
  assert.deepEqual(first.skippedLinks, [path.join(home, '.openvision/notepads')]);
  for (const relative of ['.openvision/projects/p/agent-transcripts/t.jsonl', '.openvision/ide_state.json',
    '.openvision/skills/s/SKILL.md', '.openvision-local/argv.json', '.openvision-local/permissions.json', '.openvision/plugins/cache/x.json'])
    assert.equal(await readFile(path.join(profile, 'User', relative), 'utf8'), before[relative], relative);
  for (const excluded of excludedItems) assert.equal(await lstat(path.join(profile, 'User', excluded)).catch(() => null), null, excluded);
  const record = JSON.parse(await readFile(path.join(profile, 'User/.openvision/migrations/home-import.json'), 'utf8'));
  assert.equal(record.length, 1);
  assert.equal(record[0].copied, first.copied);
  const profileBefore = await snapshot(profile);
  const second = await migrateProfileHome({ home, profile });
  assert.equal(second.copied, 0);
  assert.equal(second.unchanged, first.copied);
  assert.deepEqual(await snapshot(profile), profileBefore, 'repeat changes nothing');
  await assert.rejects(migrateProfileHome({ home, profile: 'relative' }), /absolute profile/);
});

const daemon = 'extensions/cursor-agent-host/dist/agent-host-daemon/dist/bin/daemon.cjs';
const retrieval = 'extensions/cursor-retrieval/dist/main.js';

test('editor MCP discovery resolves every adapter from the profile home', async () => {
  const text = isolateMainProfileHome(await original('out/main.js'));
  const literal = text.match(/load\(\) \{\s*return Promise\.resolve\((\{\s*platform: ([\w$]+),\s*homedir: ([\w$]+)\.file\([\s\S]*?xdgHome: void 0,\s*\})\);/);
  assert.ok(literal, 'patched discovery helper');
  const details = platform => withEnvironment('/profiles/alpha/User', () => {
    const before = { APPDATA: process.env.APPDATA, XDG_CONFIG_HOME: process.env.XDG_CONFIG_HOME };
    process.env.APPDATA = 'C:\\Users\\u\\AppData\\Roaming'; process.env.XDG_CONFIG_HOME = '/home/u/.config';
    try { return new Function(literal[2], literal[3], `return ${literal[1]};`)(platform, { file: value => value }); }
    finally { for (const [key, value] of Object.entries(before)) if (value === undefined) delete process.env[key]; else process.env[key] = value; }
  });
  assert.throws(() => new Function(literal[2], literal[3], `return ${literal[1]};`)(3, { file: value => value }), /profile home unavailable/);
  // Run the recovered adapters' own getFilePath with the helper's details.
  const workbench = await original(workbenches[0]);
  const claude = workbench.match(/getFilePath\(\{ platform: e, winAppData: t, xdgHome: n, homedir: i \}\) \{([\s\S]*?)\n    \}\n    adaptFile/);
  const others = [...workbench.matchAll(/getFilePath\(\{ homedir: e \}\) \{\s*return ([\w$]+)\.joinPath\(e, ([^)]*)\);\s*\}/g)];
  const platformEnum = claude[1].match(/e === ([\w$]+)\.Windows/)[1], uri = claude[1].match(/([\w$]+)\.joinPath/)[1];
  assert.equal(others.length, 2);
  const platforms = { Windows: 3, Mac: 1, Linux: 2 };
  for (const platform of Object.values(platforms)) {
    const input = details(platform);
    assert.equal(input.homedir, '/profiles/alpha/User');
    assert.equal(input.winAppData, undefined); assert.equal(input.xdgHome, undefined);
    const joinPath = { joinPath: (...parts) => path.posix.join(...parts) };
    const paths = [new Function(platformEnum, uri, 'e', 't', 'n', 'i', claude[1])(platforms, joinPath, platform, input.winAppData, input.xdgHome, input.homedir),
      ...others.map(([, name, args]) => new Function(name, 'e', `return ${name}.joinPath(e, ${args});`)(joinPath, input.homedir))];
    for (const file of paths) assert.ok(file.startsWith('/profiles/alpha/User/'), `${platform}: ${file}`);
  }
});

test('developer file policy resolves from the profile home in every environment service', async () => {
  for (const [relative, transform] of [['out/main.js', isolateMainProfileHome], ['out/vs/platform/terminal/node/ptyHostMain.js', isolateEnvironmentProfileHome],
    ...workbenches.map(relative => [relative, text => isolateWorkbenchProfileHome(isolateWorkbenchGlobalPaths(text))])]) {
    const text = transform(await original(relative));
    assert.match(text, /\(this\.appSettingsHome, this\.productService\.dataFolderName, "policy\.json"\)/, relative);
    assert.doesNotMatch(text, /this\.userHome, this\.productService\.dataFolderName, "policy\.json"/, relative);
  }
});

test('agent-host daemon reads the profile MCP file, approvals, config and policy from the profile home', async () => {
  const before = await original(daemon), text = isolateNodeProfileHome(before, nodeTargets[daemon]);
  assert.doesNotMatch(text, /process\.env\.XDG_CONFIG_HOME/);
  assert.doesNotMatch(text, /homedir\)?\(\), "\.cursor", "mcp\.json"/);
  assert.doesNotMatch(text, /createPolicyMiddlewares\(\(0, [\w$]+\.homedir\)\(\)\)/);
  assert.doesNotMatch(text, /getProjectPath\(\(0, [\w$]+\.homedir\)\(\), /);
  assert.match(text, /\(0, [\w$]+\.join\)\(\(home => [\s\S]{0,200}?\(process\.env\.VSCODE_OPENVISION_PROFILE_HOME\), "mcp\.json"\)/);
  // Execute the patched config directory owner: XDG_CONFIG_HOME and CURSOR_CONFIG_DIR are ignored.
  const source = text.match(/function getConfigDir\(\) \{[\s\S]*?\n\}/)[0];
  const join = source.match(/\(0, ([\w$]+)\.join\)/)[1];
  const saved = { XDG_CONFIG_HOME: process.env.XDG_CONFIG_HOME, CURSOR_CONFIG_DIR: process.env.CURSOR_CONFIG_DIR };
  process.env.XDG_CONFIG_HOME = '/home/u/.config'; process.env.CURSOR_CONFIG_DIR = '/elsewhere';
  try {
    assert.equal(withEnvironment('/profiles/alpha/User', () => new Function(join, `${source}; return getConfigDir();`)(path.posix)), '/profiles/alpha/User/.cursor');
  } finally { for (const [key, value] of Object.entries(saved)) if (value === undefined) delete process.env[key]; else process.env[key] = value; }
});

test('retrieval snapshot and watcher roots resolve from the profile home and ignore other tools\' overrides', async () => {
  const text = isolateNodeProfileHome(await original(retrieval), nodeTargets[retrieval]);
  const owner = text.match(/function ([\w$]+)\(\) \{\s*const ([\w$]+) = \(home => [\s\S]*?\n    \}\n/)[0];
  const name = owner.match(/function ([\w$]+)/)[1], pathName = owner.match(/path: ([\w$]+)\.join/)[1], kinds = owner.match(/kind: ([\w$]+)\./)[1];
  const saved = { CLAUDE_CONFIG_DIR: process.env.CLAUDE_CONFIG_DIR, CODEX_HOME: process.env.CODEX_HOME };
  process.env.CLAUDE_CONFIG_DIR = '/home/u/claude'; process.env.CODEX_HOME = '/home/u/codex';
  try {
    const roots = withEnvironment('/profiles/alpha/User', () => new Function(pathName, kinds, `${owner}; return ${name}();`)(path.posix, new Proxy({}, { get: (_, key) => key })));
    assert.deepEqual(roots.map(root => root.path), ['.cursor', '.claude', '.codex', '.agents'].map(folder => `/profiles/alpha/User/${folder}`));
    assert.deepEqual(roots.map(root => root.requiresGate), [false, true, true, true]);
  } finally { for (const [key, value] of Object.entries(saved)) if (value === undefined) delete process.env[key]; else process.env[key] = value; }
  assert.match(text, /const ([\w$]+) = \(home => [\s\S]{0,200}?VSCODE_OPENVISION_PROFILE_HOME\);\s*[\w$]+ =\s*\1 && \1\.length > 0/, 'worktree root');
  assert.doesNotMatch(text, /CLAUDE_CONFIG_DIR|CODEX_HOME/);
  // The shell description keeps the real home.
  assert.match(text, /suggestedShell: [\w$]+,\s*userHomeDir: [\w$]+\.homedir\(\)/);
});

test('home import places legacy subagents in the profile subagent folder', async () => {
  const { home, profile } = await fixture();
  await mkdir(path.join(home, '.openvision/agents'), { recursive: true });
  await writeFile(path.join(home, '.openvision/agents/legacy.md'), 'agent');
  const result = await migrateProfileHome({ home, profile });
  assert.equal(await readFile(path.join(profile, 'User', relocatedItems['.openvision/agents'], 'legacy.md'), 'utf8'), 'agent');
  assert.equal(await lstat(path.join(profile, 'User/.openvision/agents')).catch(() => null), null);
  assert.ok(result.items.some(item => item.item === '.openvision/agents' && item.copied === 1));
});
