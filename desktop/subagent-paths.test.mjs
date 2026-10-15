import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, writeFile, mkdir, readdir, stat, mkdtemp, rm } from 'node:fs/promises';
import * as path from 'node:path';
import { tmpdir } from 'node:os';
import { runInNewContext } from 'node:vm';
import { classAt, functionAt, parseExpressionAt } from './telemetry-patches.mjs';
import { isolateSubagentWorkbench, isolateSubagentReader, subagentReaderOwner, installSubagentPathIsolation,
  isolateHostSubagentReader, isolateHostSubagentActivation, isolateHostSubagentFactory } from './subagent-paths.mjs';
import { readableAppDirectory } from './recovered-source.mjs';

const root = path.resolve(import.meta.dirname, '..');
const uri = fsPath => ({scheme: 'file', fsPath, path: fsPath, toString: () => fsPath});
const uriApi = {joinPath: (base, ...parts) => uri(path.join(base.fsPath, ...parts))};

async function readerInput(relative = 'extensions/cursor-agent-exec/dist/main.js') {
  for (const prefix of ['backups/subagent-paths', 'source/app']) {
    try {
      const text = await readFile(path.join(root, prefix, relative), 'utf8');
      if (!text.includes('/* OpenVision user subagent paths v1 */')) return text;
    } catch (error) { if (error.code !== 'ENOENT') throw error; }
  }
  throw new Error('Original recovered agent-exec artifact required');
}

function reader(text, directory, scope, profile) {
  const owner = subagentReaderOwner(text), source = text.slice(owner.start, owner.end);
  const prelude = text.slice(text.indexOf('function ', text.lastIndexOf('"local-subagents"', owner.start)), owner.start);
  const debug = source.match(/([\w$]+)\("Failed to load subagents: %o"/)[1];
  const proto = source.match(/new ([\w$]+)\.zz/)[1];
  const read = source.match(/await \(0, ([\w$]+)\.yR\)/)[1];
  const walk = prelude.match(/return await ([\w$]+)\(\{ rootDir:/)[1];
  const Reader = runInNewContext(`(()=> { ${prelude}; return (${source}); })()`, {
    s: path, n: {stat}, [read]: {yR: file => readFile(file, 'utf8')}, [debug]() {},
    [proto]: { b$: {READONLY: 1, DEFAULT: 0}, zz: class {constructor(value) {Object.assign(this, value);}} },
    [walk]: async ({rootDir, includeFile, containmentRootDir}) => {
      assert.equal(containmentRootDir, scope === 'user' ? profile : directory);
      try { return (await readdir(rootDir)).filter(includeFile).map(file => path.join(rootDir, file)); }
      catch (error) { if (error.code === 'ENOENT') return []; throw error; }
    },
  });
  return new Reader(directory, () => false, scope, false, profile);
}

function workbenchParts(text) {
  const getterOffset = text.indexOf('get openvisionUserAgentsDirectory()');
  const owner = classAt(text, getterOffset);
  const getter = owner.body.body.find(method => method.key?.name === 'openvisionUserAgentsDirectory');
  const getterCode = text.slice(getter.start, getter.end);
  const uriName = getterCode.match(/return ([\w$]+)\.joinPath/)[1];
  const pathService = runInNewContext(`({${getterCode}})`, {[uriName]: uriApi});
  const createOffset = text.indexOf('.userAgentsDirectory,');
  const create = functionAt(text, createOffset);
  const createCode = text.slice(create.start, create.end);
  const inputName = createCode.match(/await ([\w$]+)\([^,]+,\s*\{\s*noun: "subagent"/)[1];
  const bufferName = createCode.match(/([\w$]+)\.fromString/)[1];
  const createAgent = runInNewContext(`(${createCode})`, {
    [uriName]: uriApi, [inputName]: async () => 'fixture', [bufferName]: {fromString: Buffer.from},
  });
  const watchOwner = classAt(text, text.indexOf('this._userAgentsDir = this.pathService.openvisionUserAgentsDirectory;'));
  const watch = watchOwner.body.body.find(method => method.key?.name === 'initializeWatchedPaths');
  const watchService = runInNewContext(`({${text.slice(watch.start, watch.end)}})`);
  const registration = text.match(/([\w$]+)\.registerCommand\("openvision\.internal\.userAgentsDirectory", accessor => accessor\.get\(([\w$]+)\)\.openvisionUserAgentsDirectory\.fsPath\);/);
  let handler;
  runInNewContext(registration[0], {
    [registration[1]]: {registerCommand: (name, callback) => {handler = callback;}}, [registration[2]]: 'path-service',
  });
  const resolveExtensionPath = () => handler({get: token => { assert.equal(token, 'path-service'); return pathService; }});
  return {pathService, createAgent, watchService, resolveExtensionPath};
}

for (const variant of ['desktop', 'glass']) {
  test(`${variant}: native creation, reader and reload use two isolated data directories`, async () => {
    const before = await readFile(path.join(readableAppDirectory(), `out/vs/workbench/workbench.${variant}.main.js`), 'utf8');
    const after = isolateSubagentWorkbench(before);
    assert.equal(isolateSubagentWorkbench(after), after);
    assert.match(after, /openvision\.internal\.userAgentsDirectory/);
    const original = await readerInput(), transformed = isolateSubagentReader(original);
    const host = isolateHostSubagentReader(await readerInput('extensions/cursor-agent-host/dist/main.js'));
    assert.equal(isolateSubagentReader(transformed), transformed);
    const directory = await mkdtemp(path.join(tmpdir(), 'openvision-subagent-paths-'));
    try {
      const oldHome = path.join(directory, 'home'), project = path.join(directory, 'project');
      for (const folder of [oldHome, project]) {
        await mkdir(path.join(folder, '.cursor/agents'), {recursive: true});
        await writeFile(path.join(folder, '.cursor/agents/original.md'), '---\nname: original\n---\nOriginal instruction.');
      }
      for (const label of ['first', 'second']) {
        const {pathService, createAgent, watchService, resolveExtensionPath} = workbenchParts(after);
        pathService.environmentService = {appSettingsHome: uri(path.join(directory, label, 'User'))};
        const agents = pathService.openvisionUserAgentsDirectory;
        assert.equal(resolveExtensionPath(), agents.fsPath);
        let refreshes = 0, opened;
        await createAgent({ userAgentsDirectory: agents, userHome: uri(oldHome),
          fileService: {
            exists: value => stat(value.fsPath).then(() => true, () => false),
            createFolder: value => mkdir(value.fsPath, {recursive: true}),
            writeFile: (value, bytes) => writeFile(value.fsPath, bytes),
          },
          subagentsService: {refresh: async () => { refreshes++; }},
          openFile: async value => {opened = value.fsPath;}, logError: assert.fail,
        });
        assert.equal(opened, path.join(agents.fsPath, 'fixture.md'));
        assert.equal(refreshes, 1);
        let watched;
        Object.assign(watchService, {
          pathService, _userAgentsDirWatcher: {},
          workspaceContextService: {getWorkspace: () => ({folders: []})},
          fileService: { exists: async () => true, watch: value => {watched = value.fsPath; return {dispose() {}};} },
        });
        await watchService.initializeWatchedPaths();
        assert.equal(watched, agents.fsPath);
        await writeFile(opened, `---\nname: ${label}\n---\n${label} instructions.`);
        const service = reader(transformed, oldHome, 'user', agents.fsPath);
        assert.deepEqual(Array.from(await service.getAllSubagents(), value => value.name), [label]);
        await writeFile(opened, `---\nname: ${label}-updated\n---\nChanged instructions.`);
        assert.deepEqual(Array.from(await service.reload(), value => value.name), [`${label}-updated`]);
        assert.deepEqual(Array.from(await reader(host, oldHome, 'user', agents.fsPath).getAllSubagents(), value => value.name),
          [`${label}-updated`]);
        pathService.environmentService.appSettingsHome = undefined;
        assert.throws(() => pathService.openvisionUserAgentsDirectory, /profile directory unavailable/);
        pathService.environmentService.appSettingsHome = {scheme: 'vscode-remote'};
        assert.throws(resolveExtensionPath, /profile directory unavailable/);
      }
      const projectReader = reader(transformed, project, 'workspace');
      assert.deepEqual(Array.from(await projectReader.getAllSubagents(), value => value.name), ['original']);
      assert.equal(await readFile(path.join(oldHome, '.cursor/agents/original.md'), 'utf8'),
        '---\nname: original\n---\nOriginal instruction.');
      const invalid = reader(transformed, oldHome, 'user', undefined);
      assert.throws(() => invalid.computeAgentsDirs(), /directory unavailable/);
    } finally { await rm(directory, {recursive: true, force: true}); }
  });
}

test('reader transformation fails when activation or owner contracts change', async () => {
  const before = await readerInput();
  assert.throws(() => isolateSubagentReader(before.replace('computeAgentsDirs() {', 'unknownDirs() {')), /reader contract/);
  assert.throws(() => isolateSubagentReader(before.replace('"user", $e)', '"changed", $e)')), /activation contract/);
});

test('host disk activation passes the native profile path through its real factory', async () => {
  const activation = isolateHostSubagentActivation(await readerInput('extensions/cursor-agent-host/dist/77.js'));
  const factory = isolateHostSubagentFactory(await readerInput('extensions/cursor-agent-host/dist/980.js'));
  const input = activation.indexOf('workspacePaths: e.workspacePaths,', activation.indexOf('v = (0, o.xD)'));
  const object = parseExpressionAt(activation, activation.lastIndexOf('{', input),
    {ecmaVersion: 'latest', allowAwaitOutsideFunction: true});
  const expected = path.resolve('fixture-profile/User/agents'), project = path.resolve('fixture-project');
  const options = await runInNewContext(`(async () => (${activation.slice(object.start, object.end)}))()`, {
    e: {workspacePaths: [project], userHome: path.resolve('original-home')},
    c: {commands: {executeCommand: async name => {
      assert.equal(name, 'openvision.internal.userAgentsDirectory'); return expected;
    }}, cursor: {getThirdPartyExtensibilityEnabled: () => false}},
    g: {}, t: false, h: Promise.resolve(), f: () => ({}),
  });
  const offset = factory.indexOf('function de(e) {');
  const node = parseExpressionAt(factory, offset, {ecmaVersion: 'latest'});
  const calls = [];
  class Empty {dispose() {}}
  const build = runInNewContext(`(${factory.slice(node.start, node.end)})`, {
    re: () => ({project: true, user: true}), oe: ['project', 'user'], K() {},
    v: {q6: () => ({})},
    o: {KOV: Empty, EVC: Empty, Px0: Empty, o_K: Empty,
      VzO: class {constructor(...args) {calls.push(args);}}},
  });
  build(options);
  assert.equal(calls.length, 2);
  assert.deepEqual(calls[0], [project, options.getThirdPartyExtensibilityEnabled, 'workspace', false]);
  assert.deepEqual(calls[1], [options.userHome, options.getThirdPartyExtensibilityEnabled, 'user', false, expected]);
});

test('installer preserves first backups and skips unchanged transformed files', async () => {
  const directory = await mkdtemp(path.join(tmpdir(), 'openvision-subagent-install-'));
  try {
    for (const file of ['desktop/subagent-paths.mjs', 'desktop/telemetry-patches.mjs', 'desktop/build-cache.mjs',
      'desktop/import-files.mjs', 'tooling/dependencies.mjs', 'tooling/package-lock.json']) {
      await mkdir(path.dirname(path.join(directory, file)), {recursive: true});
      await writeFile(path.join(directory, file), await readFile(path.join(root, file)));
    }
    const inputs = new Map();
    for (const variant of ['desktop', 'glass']) {
      const relative = `out/vs/workbench/workbench.${variant}.main.js`;
      inputs.set(relative, await readFile(path.join(readableAppDirectory(), relative), 'utf8'));
    }
    inputs.set('extensions/cursor-agent-exec/dist/main.js', await readerInput());
    for (const filename of ['main.js', '77.js', '980.js']) {
      const relative = `extensions/cursor-agent-host/dist/${filename}`;
      inputs.set(relative, await readerInput(relative));
    }
    for (const [relative, content] of inputs) {
      const file = path.join(directory, 'source/app', relative);
      await mkdir(path.dirname(file), {recursive: true}); await writeFile(file, content);
    }
    await installSubagentPathIsolation(directory);
    const modified = new Map();
    for (const [relative, before] of inputs) {
      assert.equal(await readFile(path.join(directory, 'backups/subagent-paths', relative), 'utf8'), before);
      modified.set(relative, (await stat(path.join(directory, 'source/app', relative))).mtimeMs);
    }
    await installSubagentPathIsolation(directory);
    for (const [relative, mtime] of modified)
      assert.equal((await stat(path.join(directory, 'source/app', relative))).mtimeMs, mtime);
  } finally { await rm(directory, {recursive: true, force: true}); }
});
