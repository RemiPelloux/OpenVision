import test from 'node:test';
import assert from 'node:assert/strict';
import { copyFile, mkdir, mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import * as path from 'node:path';
import { tmpdir } from 'node:os';
import { classAt } from './telemetry-patches.mjs';
import { namespaceEdits, applyNamespaceEdits } from './project-namespace.mjs';
import { readableAppDirectory } from './recovered-source.mjs';
import { command, extensionTargets, installGlobalPathIsolation, isolateExecGlobalPaths, isolateHostBuiltinSkills,
  isolateHostGlobalPaths, isolateWorkbenchGlobalPaths, marker } from './global-paths.mjs';

const root = path.resolve(import.meta.dirname, '..');
const originals = new Map();
function original(relative) {
  if (!originals.has(relative)) originals.set(relative, readFile(path.join(readableAppDirectory(), relative), 'utf8'));
  return originals.get(relative);
}
const namespaced = source => applyNamespaceEdits(source, namespaceEdits(source));
const workbenches = ['desktop', 'glass'].map(variant => `out/vs/workbench/workbench.${variant}.main.js`);

const universal = new Proxy(function () {}, {
  get: (target, key) => key === 'then' || key === Symbol.unscopables ? undefined : key === Symbol.toPrimitive ? () => 'stub' : universal,
  apply: () => universal, construct: () => universal,
});
function evaluate(source, bindings) {
  const scope = new Proxy(bindings, {
    has: (target, key) => typeof key === 'string' && (key in target || !(key in globalThis)),
    get: (target, key) => key === Symbol.unscopables ? undefined : key in target ? target[key] : universal,
  });
  return new Function('scope', `with (scope) { return (${source}); }`)(scope);
}
const join = { joinPath: (base, ...parts) => path.posix.join(base, ...parts) };
const profile = '/profiles/alpha/User', home = '/home/user';
const pathService = { openvisionProfileHome: profile, userHome() { throw new Error('home directory consulted'); } };

// Instantiate the transformed (and namespaced) owner class without its constructor.
function owner(text, anchor, bindings = {}) {
  const node = classAt(text, text.search(anchor));
  const source = namespaced(text.slice(node.start, node.end));
  const uri = source.match(/([\w$]+)\.joinPath\(/)?.[1] ?? 'unusedJoin';
  return Object.create(evaluate(source, { [uri]: join, ...bindings }).prototype);
}

for (const relative of workbenches) {
  test(`commands use the profile home: ${relative}`, async () => {
    const text = await original(relative), changed = isolateWorkbenchGlobalPaths(text);
    const service = Object.assign(owner(changed, /async discoverCommandsDirs\(\) \{/), {
      pathService, contextService: { getWorkspace: () => ({ folders: [{ uri: '/work/a' }, { uri: '/work/b' }] }) } });
    await service.discoverCommandsDirs();
    assert.equal(service.personalCommandsDir, `${profile}/.openvision/commands`);
    assert.equal(service.personalClaudeCommandsDir, `${profile}/.claude/commands`);
    assert.deepEqual(service.workspaceCommandsDirs, ['/work/a/.openvision/commands', '/work/b/.openvision/commands']);
    assert.deepEqual(service.workspaceClaudeCommandsDirs, ['/work/a/.claude/commands', '/work/b/.claude/commands'],
      'Project compatibility inputs are unchanged');
    assert.equal(service.getCommandTargetDirectory(true), `${profile}/.openvision/commands`);
    assert.equal(service.getCommandTargetDirectory(false), '/work/a/.openvision/commands');
    // The recovered owner consulted the operating-system home.
    const before = Object.assign(owner(text, /async discoverCommandsDirs\(\) \{/), { pathService,
      contextService: { getWorkspace: () => ({ folders: [] }) } });
    await assert.rejects(() => before.discoverCommandsDirs(), /home directory consulted/);
  });

  test(`hooks and skill migration use the profile home: ${relative}`, async () => {
    const changed = isolateWorkbenchGlobalPaths(await original(relative));
    const hooks = Object.assign(owner(changed, /"Initializing Cursor Hooks Service\.\.\."/), {
      pathService, uriIdentityService: { extUri: join }, logger: { logInfo() {}, logError(message, error) { throw error; } },
      refreshWorkspaceConfigUris() {}, async resolveEnterpriseConfigDirectoryAndPath() {}, setupConfigFileWatcher() {},
      async reloadHooks() {}, async refreshTeamHooks() {}, _startTeamHooksRefreshLoop() {},
      extensionService: { whenInstalledExtensionsRegistered: () => new Promise(() => {}) } });
    await hooks.initialize();
    assert.equal(hooks.configUri, `${profile}/.openvision/hooks.json`);
    assert.equal(hooks.claudeUserConfigUri, `${profile}/.claude/settings.json`);
    const normalize = changed.match(/return `\$\{([\w$]+)\([\w$]+\.fsPath\)\}\/\.cursor\/skills`/)[1];
    const migration = Object.assign(owner(changed, /async homeSkillsRoot\(\) \{/, { [normalize]: value => value }),
      { pathService: { ...pathService, openvisionProfileHome: { fsPath: profile } } });
    assert.equal(await migration.homeSkillsRoot(), `${profile}/.openvision/skills`);
  });

  test(`profile home getter and command are owned by the path service: ${relative}`, async () => {
    const text = await original(relative), changed = isolateWorkbenchGlobalPaths(text);
    assert.equal(isolateWorkbenchGlobalPaths(changed), changed);
    assert.equal(changed.split(marker).length, 3);
    assert.ok(changed.includes(`registerCommand("${command}"`));
    const service = owner(changed, /this\.localUserHome = [\w$]+\)/);
    Object.defineProperty(service, 'environmentService', { value: { appSettingsHome: { scheme: 'file', path: profile } } });
    assert.deepEqual(service.openvisionProfileHome, { scheme: 'file', path: profile });
    for (const appSettingsHome of [undefined, { scheme: 'vscode-userdata', path: profile }]) {
      const remote = owner(changed, /this\.localUserHome = [\w$]+\)/);
      Object.defineProperty(remote, 'environmentService', { value: { appSettingsHome } });
      assert.throws(() => remote.openvisionProfileHome, /OpenVision local profile directory unavailable/);
    }
    // Every creation target uses the profile home: Customize skills, palette commands, hook initializer.
    assert.match(changed, /\.joinPath\([\w$]+\.openvisionProfileHome, "\.cursor", "skills"\)/);
    assert.match(changed, /openvisionProfileHome: [\w$]+\.openvisionProfileHome, userHome: await/);
    assert.equal([...changed.matchAll(/const [\w$]+ = [\w$]+\.openvisionProfileHome;\s*[\w$]+ = [\w$]+\.joinPath\([\w$]+, "\.cursor", "commands"\)/g)].length, 1);
    assert.equal([...changed.matchAll(/const [\w$]+ = [\w$]+\.openvisionProfileHome,\s*[\w$]+ = [\w$]+\.extUri\.joinPath\([\w$]+, "\.cursor"\)/g)].length, 1);
  });
}

test('workbench drift is rejected', async () => {
  const text = await original(workbenches[0]);
  for (const [from, to, error] of [
    ['async homeSkillsRoot()', 'async homeSkillsRootChanged()', /skills migration root/],
    ['"Initializing Cursor Hooks Service..."', '"Initializing hooks"', /hooks owner/],
    ['async discoverCommandsDirs() {', 'async discoverCommandDirectories() {', /commands owner/],
  ]) assert.throws(() => isolateWorkbenchGlobalPaths(text.replace(from, to)), error);
});

test('Agent extension activation passes the profile home to skills and user subagents', async () => {
  const text = await original(extensionTargets.exec), changed = isolateExecGlobalPaths(text);
  assert.equal(isolateExecGlobalPaths(changed), changed);
  const count = source => (source.match(/\bMn\.homedir\(\)/g) ?? []).length;
  // Five consumers change; shell working directory, sandbox and plugin cache home values remain.
  assert.equal(count(text) - count(changed), 5);
  for (const pattern of [/new N\.EVC\(E, W, __openvisionProfileHome, ge, !0/, /new N\.VzO\(__openvisionProfileHome, we, "user"/,
    /userHomeDirectory: __openvisionProfileHome \}\),\s*Qe =/, /deleteDirectoryToTrash: be, userHomeDirectory: __openvisionProfileHome/,
    /cacheManager: new oe\.WCg\(Mn\.homedir\(\)\),\s*userHomeDirectory: __openvisionProfileHome/])
    assert.match(changed, pattern);
  // The value is resolved at activation start, before the builtin skills sync begins.
  const start = changed.indexOf('const __openvisionProfileHome'), sync = changed.indexOf('initialBuiltinSkillsSyncPromise: C }');
  assert.ok(start > 0 && start < sync);
  assert.ok(changed.slice(start, start + 400).includes(`executeCommand("${command}")`));
  // Builtin skills root: run the transformed function against a published and a missing profile home.
  const builtin = changed.match(/function ([\w$]+)\(\) \{\s*return ([\w$]+)\((\(home => [\s\S]*?\)\(globalThis\[Symbol\.for\("[^"]+"\)\]\))\)\.dirPath;\s*\}/);
  assert.ok(builtin, 'builtin skills root patched');
  const key = Symbol.for(command), saved = globalThis[key];
  try {
    globalThis[key] = profile;
    assert.equal(evaluate(builtin[3], {}), profile);
    delete globalThis[key];
    assert.throws(() => evaluate(builtin[3], {}), /OpenVision profile home unavailable/);
  } finally { if (saved !== undefined) globalThis[key] = saved; }
  // Activation rejects a missing or relative command result instead of falling back to HOME.
  const validate = changed.slice(start).match(/(\(home => \{[\s\S]*?return home; \}\))\(await/)[1];
  for (const value of [undefined, '', 'relative/User', 42]) assert.throws(() => evaluate(validate, {})(value), /profile home unavailable/);
  assert.equal(evaluate(validate, {})(profile), profile);
  assert.throws(() => isolateExecGlobalPaths(text.replace(/(new N\.EVC\(E, W, Mn\.homedir\(\), ge, !0, ke, we, C, )"ide"/, '$1"headless"')),
    /skills service/);
});

test('agent-host activation and builtin writer use the profile home', async () => {
  const activation = await original(extensionTargets.hostActivation), changed = isolateHostGlobalPaths(activation);
  assert.equal(isolateHostGlobalPaths(changed), changed);
  assert.doesNotMatch(changed, /userHome: [\w$]+\.userHome \?\? [\w$]+\.homedir\(\)/);
  assert.ok(changed.includes(`executeCommand("${command}")`));
  const main = await original(extensionTargets.hostMain), patched = isolateHostBuiltinSkills(main);
  assert.equal(isolateHostBuiltinSkills(patched), patched);
  assert.match(patched, /function [\w$]+\(\) \{\s*return [\w$]+\(\(home => /);
  assert.throws(() => isolateHostBuiltinSkills(main.replace('subdir: "skills-cursor"', 'subdir: "skills-builtin"')),
    /builtin skills table contract changed/);
});

test('installation keeps first backups, is cached and reapplies after drift', async t => {
  const base = await mkdtemp(path.join(tmpdir(), 'openvision-global-paths-'));
  t.after(() => rm(base, { recursive: true, force: true }));
  for (const file of ['desktop/global-paths.mjs', 'desktop/telemetry-patches.mjs', 'desktop/build-cache.mjs',
    'desktop/import-files.mjs', 'tooling/dependencies.mjs', 'tooling/package-lock.json']) {
    await mkdir(path.dirname(path.join(base, file)), { recursive: true });
    await copyFile(path.join(root, file), path.join(base, file));
  }
  const targets = [...workbenches, ...Object.values(extensionTargets)];
  for (const relative of targets) {
    await mkdir(path.dirname(path.join(base, 'source/app', relative)), { recursive: true });
    await writeFile(path.join(base, 'source/app', relative), await original(relative));
  }
  const read = relative => readFile(path.join(base, 'source/app', relative), 'utf8');
  await installGlobalPathIsolation(base);
  const first = new Map();
  for (const relative of targets) {
    first.set(relative, await read(relative));
    assert.ok(first.get(relative).includes(marker), relative);
    assert.equal(await readFile(path.join(base, 'backups/global-paths', relative), 'utf8'), await original(relative));
  }
  await installGlobalPathIsolation(base);
  for (const relative of targets) assert.equal(await read(relative), first.get(relative));
  const relative = extensionTargets.hostActivation;
  await writeFile(path.join(base, 'source/app', relative), (await original(relative)) + '\n// rebuilt\n');
  await installGlobalPathIsolation(base);
  assert.ok((await read(relative)).includes(marker));
  assert.equal(await readFile(path.join(base, 'backups/global-paths', relative), 'utf8'), await original(relative));
});
