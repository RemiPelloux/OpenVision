import test from 'node:test';
import assert from 'node:assert/strict';
import { lstat, mkdir, mkdtemp, readFile, readdir, symlink, writeFile } from 'node:fs/promises';
import * as path from 'node:path';
import { tmpdir } from 'node:os';
import { readableAppDirectory } from './recovered-source.mjs';
import { isolateWorkbenchGlobalPaths } from './global-paths.mjs';
import { isolateEnvironmentProfileHome, isolateMainProfileHome, isolateNodeProfileHome, isolateWorkbenchProfileHome,
  marker, nodeTargets, terminalStatusSetting, variable } from './profile-home-paths.mjs';
import { excludedItems, migrateProfileHome } from './migrate-profile-home.mjs';

const cache = new Map();
const original = relative => {
  if (!cache.has(relative)) cache.set(relative, readFile(path.join(readableAppDirectory(), relative), 'utf8'));
  return cache.get(relative);
};
const workbenches = ['desktop', 'glass'].map(variant => `out/vs/workbench/workbench.${variant}.main.js`);
const homeJoin = /(?:\(0, )?[\w$]+\.join\)?\((?:\(0, )?[\w$]+\.homedir\)?\(\), "\.(?:cursor|claude)"(?!, "mcp\.json")/;

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
