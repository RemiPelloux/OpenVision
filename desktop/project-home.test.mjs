import test from 'node:test';
import assert from 'node:assert/strict';
import { createProjectHomeService, projectRows } from './project-home-service.js';
import { customizeProjectHome } from './project-home-customization.mjs';
import { repositoryLocation } from './project-clone-dialog.js';

const uri = path => ({ scheme: 'file', path, authority: '', fsPath: path, toString() { return `file://${path}`; } });
const folder = { folderUri: uri('/projects/alpha') };
const workspace = { workspace: { id: 'multi', configPath: uri('/projects/team.code-workspace') } };

test('clone bypasses provider picker, waits for Git and explicitly opens only a successful destination', async () => {
  const calls = []; let cloned;
  const owner = { nativeEnvironmentService: { userRoamingDataHome: { constructor: { file: uri } } },
    commandService: { executeCommand: async (...args) => { calls.push(args); return cloned; } },
    nativeHostService: { openWindow: async (...args) => calls.push(['open', ...args]) } };
  const service = createProjectHomeService(owner, () => undefined);
  assert.equal(await service.clone(' https://example.test/project.git '), false);
  assert.deepEqual(calls, [['git.clone', 'https://example.test/project.git', undefined, { openAfterClone: false }]]);
  cloned = '/projects/cloned'; assert.equal(await service.clone('git@example.test:owner/project.git'), true);
  assert.equal(calls.at(-1)[0], 'open'); assert.equal(calls.at(-1)[1][0].folderUri.fsPath, cloned);
  assert.equal(calls.at(-1)[2].forceNewWindow, true);
  assert.throws(() => repositoryLocation('--upload-pack=anything'), /URL/);
  assert.throws(() => repositoryLocation('https://example.test/a\ncommand'), /URL/);
  assert.throws(() => repositoryLocation('not a repository'), /HTTPS/);
  assert.equal(repositoryLocation('file:///local/repo'), 'file:///local/repo');
});

test('theme and appearance actions use native commands', async () => {
  const calls = [];
  const owner = { commandService: { executeCommand: async (...args) => calls.push(args) } };
  const service = createProjectHomeService(owner, () => undefined);
  await service.theme();
  await service.appearance();
  assert.deepEqual(calls, [['workbench.action.selectTheme'], ['workbench.action.openSettings', 'workbench.color']]);
});

test('project identity preserves folder/workspace and remote identity, deduplicates and focuses serialized window URIs', () => {
  const rows = projectRows({ workspaces: [folder, folder, workspace, { ...folder, remoteAuthority: 'ssh-host' }] },
    [{ id: 7, workspace: { uri: { scheme: 'file', path: '/projects/alpha' } } }], { pinned: () => false });
  assert.equal(rows.length, 3); assert.equal(rows[0].windowId, 7);
  assert.equal(rows[1].kind, 'Workspace'); assert.equal(rows[2].windowId, undefined);
  assert.notEqual(rows[0].id, rows[2].id);
});

test('home loads in two bulk calls without per-project file work; open checks freshness and missing paths', async () => {
  const calls = [], storage = new Map(); let windows = [], exists = false;
  const workspaces = { getRecentlyOpened: async () => { calls.push('history'); return { workspaces: [folder, workspace] }; },
    removeRecentlyOpened: async uris => calls.push(['remove', uris]) };
  const owner = { storageService: { get: key => storage.get(key), store: (key, value) => storage.set(key, value), remove: key => storage.delete(key) },
    nativeHostService: { getWindows: async () => { calls.push('windows'); return windows; },
      focusWindow: async options => calls.push(['focus', options]), openWindow: async (...args) => calls.push(['open', ...args]) },
    fileService: { exists: async () => { calls.push('exists'); return exists; } },
    commandService: { executeCommand: name => calls.push(name) } };
  const service = createProjectHomeService(owner, () => workspaces);
  const rows = await service.load(); assert.deepEqual(calls, ['history', 'windows']);
  await assert.rejects(service.open(rows[0]), /moved/);
  assert.ok(!calls.some(item => item[0] === 'open'));
  windows = [{ id: 9, workspace: { uri: folder.folderUri } }];
  await service.open(rows[0]); assert.deepEqual(calls.at(-1), ['focus', { targetWindowId: 9 }]);
  windows = []; exists = true; await service.open(rows[1]);
  assert.deepEqual(calls.at(-1), ['open', [{ workspaceUri: workspace.workspace.configPath }], { forceNewWindow: true, cursorForceNewWindow: true }]);
  service.pin(rows[0], true); assert.equal((await service.load())[0].pinned, true);
  await service.remove(rows[0]); assert.equal(storage.size, 0);
});

test('native bridge is scoped to its constructor and fails closed on dependency drift', () => {
  const source = `const Native = class extends Base { constructor() {
    (this.nativeHostService = native, this.storageService = storage, this.instantiationService = instantiation,
    this.fileService = files, this.commandService = commands, this.contextService = context,
    this.nativeEnvironmentService = environment);
  }};
  registry.registerCommand("_workbench.getRecentlyOpened", async function (accessor) {
    return accessor.get(RecentService).getRecentlyOpened();
  });
  const Installer = class extends Base {
    async installIfNeeded() { return this.install(); }
    install() { console.error(\`Failed to auto-install '\${this.extensionId}' for Glass\`); }
  };`;
  for (const variant of ['desktop', 'glass']) {
    const result = customizeProjectHome(source, variant);
    assert.ok(result.includes('accessor.get(RecentService)'));
    assert.equal(customizeProjectHome(result, variant), result);
    assert.throws(() => customizeProjectHome(source.replace('this.fileService =', 'this.other ='), variant), /dependency/);
  }
});
