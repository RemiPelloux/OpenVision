import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, readFile, writeFile, rm } from 'node:fs/promises';
import { join, dirname, resolve, posix, win32 } from 'node:path';
import { tmpdir } from 'node:os';
import { runInNewContext } from 'node:vm';
import { isolateMcpConfiguration, mcpConfigurationOwner, installProfilePathIsolation } from './profile-paths.mjs';
import { readableAppDirectory } from './recovered-source.mjs';

const root = resolve(import.meta.dirname, '..');
const relative = variant => `out/vs/workbench/workbench.${variant}.main.js`;
async function original(variant) {
  try { return await readFile(join(readableAppDirectory(), relative(variant)), 'utf8'); }
  catch (error) { if (error.code !== 'ENOENT') throw error; }
  throw new Error('Recovered original workbench artifact required for profile path verification');
}

function methods(text) {
  return Object.fromEntries(mcpConfigurationOwner(text).body.body
    .filter(method => method.kind !== 'constructor')
    .map(method => [method.key.name, text.slice(method.start, method.end)]));
}

function uri(path) { return { scheme: 'file', fsPath: path, toString: () => path }; }
function service(text, profile, project) {
  const source = methods(text), names = ['getUserConfigFilePath', 'getConfigFileUri', 'openConfigFile',
    'initializeUserConfiguredServers', 'removeServerFromUserConfig', 'removeServerFromProjectConfig', 'folderToKey'];
  const buffer = source.openConfigFile.match(/([\w$]+)\.fromString\(/)[1];
  const parent = source.initializeUserConfiguredServers.match(/const \w+ = ([\w$]+)\(\w+\);/)[1];
  const loggers = [...source.initializeUserConfiguredServers.matchAll(/([\w$]+)\("\[MCPService\]/g)].map(match => match[1]);
  const globals = Object.fromEntries(loggers.map(name => [name, () => {}]));
  globals[buffer] = { fromString: Buffer.from };
  globals[parent] = value => uri(dirname(value.fsPath));
  const result = runInNewContext(`({${names.map(name => source[name]).join(',')}})`, globals);
  result.environmentService = { appSettingsHome: uri(join(profile, 'User')) };
  result.pathService = { userHome: () => { throw new Error('Original home must not be consulted'); } };
  result.uriIdentityService = { extUri: { joinPath: (base, ...parts) => uri(join(base.fsPath, ...parts)) } };
  result.contextService = { getWorkspace: () => ({ folders: [{uri: uri(project), index: 0, name: 'project'}] }) };
  result.opened = []; result.watched = []; result.removed = [];
  result.commandService = { executeCommand: (command, value) => result.opened.push({command, value}) };
  result.fileService = {
    exists: value => readFile(value.fsPath).then(() => true, error => { if (error.code === 'ENOENT') return false; throw error; }),
    writeFile: (value, data) => writeFile(value.fsPath, data),
    watch: value => { result.watched.push(value.fsPath); return {dispose() {}}; },
  };
  result._handleMcpConfigFileChange = async value => Object.keys(JSON.parse(await readFile(value.fsPath, 'utf8')).mcpServers);
  result.removeServerFromConfigFile = async (server, value) => result.removed.push(value.fsPath);
  result._store = { isDisposed: false }; result.userConfigFileWatcher = {}; result.userConfiguredServers = [];
  return result;
}

for (const variant of ['desktop', 'glass']) {
  test(`${variant}: actual MCP producer is isolated, idempotent and keeps project consumers intact`, async () => {
    const before = await original(variant), after = isolateMcpConfiguration(before);
    assert.notEqual(after, before);
    assert.equal(isolateMcpConfiguration(after), after);
    const old = methods(before), current = methods(after);
    for (const [name, text] of Object.entries(old))
      if (name !== 'getUserConfigFilePath') assert.equal(current[name], text, `Unrelated consumer changed: ${name}`);
    assert.throws(() => isolateMcpConfiguration(before.replace('async getUserConfigFilePath()', 'async unknownPath()')),
      /missing or ambiguous/);
  });

  test(`${variant}: two data profiles discover only their own config and preserve project compatibility`, async () => {
    const directory = await mkdtemp(join(tmpdir(), 'openvision-profile-paths-'));
    try {
      const text = isolateMcpConfiguration(await original(variant));
      const project = join(directory, 'project'), oldHome = join(directory, 'original-home/.cursor');
      await mkdir(join(project, '.cursor'), {recursive: true});
      await mkdir(oldHome, {recursive: true});
      await writeFile(join(oldHome, 'mcp.json'), '{"mcpServers":{"original":{}}}');
      const projectFile = join(project, '.cursor/mcp.json');
      await writeFile(projectFile, '{"mcpServers":{"project":{}}}');
      for (const name of ['first', 'second']) {
        const profile = join(directory, name);
        await mkdir(join(profile, 'User'), {recursive: true});
        const owner = service(text, profile, project), path = join(profile, 'User/mcp.json');
        await owner.openConfigFile();
        assert.deepEqual(JSON.parse(await readFile(path, 'utf8')), {mcpServers: {}});
        await writeFile(path, JSON.stringify({mcpServers: {[name]: {command: 'fixture-only'}}}));
        await owner.initializeUserConfiguredServers();
        assert.deepEqual(owner.userConfiguredServers, [name]);
        assert.deepEqual(owner.watched, [join(profile, 'User')]);
        const restarted = service(text, profile, project);
        await restarted.initializeUserConfiguredServers();
        assert.deepEqual(restarted.userConfiguredServers, [name]);
        await owner.removeServerFromUserConfig({name});
        await owner.removeServerFromProjectConfig({projectPath: '0-project'});
        assert.deepEqual(owner.removed, [path, projectFile]);
        const projectUri = await owner.getConfigFileUri({projectManaged: true, projectPath: '0-project'});
        assert.equal(projectUri.fsPath, projectFile);
        assert.equal(owner.opened[0].command, 'vscode.open');
        assert.equal(owner.opened[0].value.fsPath, path);
      }
      assert.equal(await readFile(join(oldHome, 'mcp.json'), 'utf8'), '{"mcpServers":{"original":{}}}');
      assert.equal(await readFile(projectFile, 'utf8'), '{"mcpServers":{"project":{}}}');
    } finally { await rm(directory, {recursive: true, force: true}); }
  });

  test(`${variant}: unavailable local profile fails without using original or remote home`, async () => {
    const owner = service(isolateMcpConfiguration(await original(variant)), 'profile', 'project');
    for (const value of [undefined, {scheme: 'vscode-remote', fsPath: '/remote/home'}]) {
      owner.environmentService.appSettingsHome = value;
      await assert.rejects(owner.getUserConfigFilePath(), /local profile directory unavailable/);
    }
    for (const [path, implementation] of [['C:\\profiles\\one\\User', win32], ['/profiles/one/User', posix]]) {
      owner.environmentService.appSettingsHome = uri(path);
      owner.uriIdentityService.extUri.joinPath = (base, ...parts) => uri(implementation.join(base.fsPath, ...parts));
      assert.equal((await owner.getUserConfigFilePath()).fsPath, implementation.join(path, 'mcp.json'));
    }
  });
}

test('installer preserves original backup and does not rewrite unchanged output', async () => {
  const directory = await mkdtemp(join(tmpdir(), 'openvision-profile-install-'));
  try {
    for (const file of ['desktop/profile-paths.mjs', 'desktop/build-cache.mjs', 'desktop/import-files.mjs',
      'tooling/dependencies.mjs', 'tooling/package-lock.json']) {
      await mkdir(dirname(join(directory, file)), {recursive: true});
      await writeFile(join(directory, file), await readFile(join(root, file)));
    }
    for (const variant of ['desktop', 'glass']) {
      const path = join(directory, 'source/app', relative(variant));
      await mkdir(dirname(path), {recursive: true}); await writeFile(path, await original(variant));
    }
    await installProfilePathIsolation(directory);
    for (const variant of ['desktop', 'glass'])
      assert.equal(await readFile(join(directory, 'backups/profile-paths', relative(variant)), 'utf8'), await original(variant));
    await installProfilePathIsolation(directory);
    for (const variant of ['desktop', 'glass'])
      assert.equal(await readFile(join(directory, 'source/app', relative(variant)), 'utf8'), isolateMcpConfiguration(await original(variant)));
  } finally { await rm(directory, {recursive: true, force: true}); }
});
