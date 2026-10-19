import { mkdir, writeFile, rm, readdir, lstat, readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { DatabaseSync } from 'node:sqlite';
import { join, relative, sep } from 'node:path';

// Controlled fixture, not user data: a locally generated Cursor 3.21.x Linux
// profile layout under a disposable HOME and XDG_CONFIG_HOME. Every private
// record carries a marker so verifiers can prove it was neither imported nor
// changed. Extension packages are inert manifests; nothing here is executed.
export const fixtureMarker = 'OPENVISION_FIXTURE_PRIVATE';
export const namedProfile = { location: '-3f8a2c1e', name: 'Work fixture' };
export const fixtureExtensions = {
  universal: { id: 'openvision-fixture.formatter', version: '1.4.0', relativeLocation: 'openvision-fixture.formatter-1.4.0' },
  native: { id: 'openvision-fixture.native-tool', version: '2.1.0', relativeLocation: 'openvision-fixture.native-tool-2.1.0-linux-x64', targetPlatform: 'linux-x64' },
  wrongPlatform: { id: 'openvision-fixture.windows-tool', version: '0.9.0', relativeLocation: 'openvision-fixture.windows-tool-0.9.0-win32-x64', targetPlatform: 'win32-x64' },
};
// Imported values the verifiers expect, and protected values that must not arrive.
export const fixtureSettings = {
  imported: { 'editor.fontSize': 15, 'editor.tabSize': 2, 'files.trimTrailingWhitespace': true, 'openvision.fixture.defaultProfile': true },
  named: { 'editor.fontSize': 18, 'openvision.fixture.namedProfile': true },
  protected: { 'window.title': 'Cursor fixture title', 'update.mode': 'default', 'telemetry.telemetryLevel': 'all',
    'telemetry.enableTelemetry': true, 'extensions.autoUpdate': true, 'workbench.startupEditor': 'welcomePage' },
};

async function file(path, content) { await mkdir(join(path, '..'), { recursive: true }); await writeFile(path, content); }

function database(path, rows, chat) {
  const db = new DatabaseSync(path);
  try {
    db.exec('CREATE TABLE ItemTable (key TEXT UNIQUE ON CONFLICT REPLACE, value BLOB); CREATE TABLE cursorDiskKV (key TEXT UNIQUE ON CONFLICT REPLACE, value BLOB);');
    const item = db.prepare('INSERT INTO ItemTable (key, value) VALUES (?, ?)');
    for (const [key, value] of Object.entries(rows)) item.run(key, typeof value === 'string' ? value : JSON.stringify(value));
    const kv = db.prepare('INSERT INTO cursorDiskKV (key, value) VALUES (?, ?)');
    for (const [key, value] of Object.entries(chat)) kv.run(key, JSON.stringify(value));
  } finally { db.close(); }
}

function extensionEntry(extension, extensionsDirectory) {
  return { identifier: { id: extension.id, uuid: createHash('sha256').update(extension.id).digest('hex').slice(0, 32) },
    version: extension.version, location: { $mid: 1, path: join(extensionsDirectory, extension.relativeLocation), scheme: 'file' },
    relativeLocation: extension.relativeLocation,
    metadata: { installedTimestamp: 1760000000000, source: 'gallery', publisherDisplayName: 'OpenVision fixture', isPreReleaseVersion: false,
      ...(extension.targetPlatform ? { targetPlatform: extension.targetPlatform } : {}) } };
}

async function extensionPackage(extensionsDirectory, extension) {
  const [publisher, name] = extension.id.split('.');
  const directory = join(extensionsDirectory, extension.relativeLocation);
  await file(join(directory, 'package.json'), JSON.stringify({ name, publisher, version: extension.version,
    displayName: `Fixture ${name}`, engines: { vscode: '^1.96.0' }, description: 'Inert OpenVision import fixture manifest.' }, null, 2));
  await file(join(directory, 'README.md'), `# Fixture ${name}\n\nInert import fixture.\n`);
  await file(join(directory, '.vsixmanifest'), `<?xml version="1.0" encoding="utf-8"?><PackageManifest Version="2.0.0"><Metadata><Identity Id="${name}" Version="${extension.version}" Publisher="${publisher}"${extension.targetPlatform ? ` TargetPlatform="${extension.targetPlatform}"` : ''}/></Metadata></PackageManifest>\n`);
  if (extension.targetPlatform) await file(join(directory, 'bin', extension.targetPlatform.startsWith('win32') ? 'tool.exe' : 'tool'), `inert ${extension.targetPlatform} fixture binary\n`);
}

export async function writeExtensionRegistry(home, extensions) {
  const extensionsDirectory = join(home, '.cursor/extensions');
  await writeFile(join(extensionsDirectory, 'extensions.json'), JSON.stringify(extensions.map(extension => extensionEntry(extension, extensionsDirectory))));
}

// Creates the layout and returns its paths. `wrongPlatform` keeps a win32-x64
// extension registered, as when ~/.cursor is copied from another machine.
export async function createCursorLinuxProfile(base, { wrongPlatform = true } = {}) {
  const home = join(base, 'home'), config = join(home, '.config'), cursor = join(config, 'Cursor'), user = join(cursor, 'User');
  const extensions = join(home, '.cursor/extensions');
  const header = '// Cursor fixture settings — JSONC with comments, 日本語\n';
  await file(join(user, 'settings.json'), header + JSON.stringify({ ...fixtureSettings.imported, ...fixtureSettings.protected,
    'cursor.cpp.disabledLanguages': ['plaintext'], 'cursor.general.enableShadowWorkspace': false }, null, 4).replace(/\n}$/, ',\n}\n'));
  await file(join(user, 'keybindings.json'), '// Place your key bindings in this file to override the defaults\n' +
    JSON.stringify([{ key: 'ctrl+alt+j', command: 'workbench.action.togglePanel' }, { key: 'ctrl+shift+k', command: 'editor.action.deleteLines', when: 'textInputFocus' }], null, 4) + '\n');
  await file(join(user, 'tasks.json'), JSON.stringify({ version: '2.0.0', tasks: [{ label: 'fixture build', type: 'shell', command: 'echo fixture' }] }, null, 4));
  await file(join(user, 'snippets/javascript.json'), '{\n\t// fixture snippet\n\t"Log": {"prefix": "log", "body": ["console.log($1);"]}\n}\n');
  await file(join(user, 'snippets/global.code-snippets'), JSON.stringify({ Header: { scope: 'markdown', prefix: 'hdr', body: '# $1' } }));
  const named = join(user, 'profiles', namedProfile.location);
  await file(join(named, 'settings.json'), JSON.stringify({ ...fixtureSettings.named, 'window.title': 'Named fixture title', 'telemetry.telemetryLevel': 'all' }, null, 4));
  await file(join(named, 'keybindings.json'), JSON.stringify([{ key: 'ctrl+alt+n', command: 'workbench.action.files.newUntitledFile' }]));
  await file(join(named, 'snippets/python.json'), JSON.stringify({ Main: { prefix: 'main', body: 'if __name__ == "__main__":\n\t$0' } }));
  await file(join(named, 'extensions.json'), JSON.stringify([extensionEntry(fixtureExtensions.universal, extensions)]));
  await file(join(named, 'globalStorage/state.vscdb'), `${fixtureMarker}_NAMED_PROFILE_STATE`);
  // Global state: profile registry, enablement state, accounts, secrets and chat.
  const global = join(user, 'globalStorage');
  await file(join(global, 'storage.json'), JSON.stringify({ 'telemetry.machineId': `${fixtureMarker}_MACHINE_ID`,
    userDataProfiles: [{ location: namedProfile.location, name: namedProfile.name }],
    profileAssociations: { workspaces: { [`file://${join(home, 'projects/fixture')}`]: namedProfile.location } },
    windowsState: { lastActiveWindow: { folder: `file://${join(home, 'projects/fixture')}` } } }, null, 4));
  database(join(global, 'state.vscdb'), {
    'extensionsIdentifiers/disabled': [{ id: fixtureExtensions.universal.id }],
    'cursorAuth/cachedEmail': `${fixtureMarker}_ACCOUNT@example.invalid`, 'cursorAuth/accessToken': `${fixtureMarker}_ACCESS_TOKEN`,
    'secret://{"extensionId":"openvision-fixture.formatter","key":"token"}': `${fixtureMarker}_SECRET`,
    'workbench.panel.chat': { [fixtureMarker]: 'panel state' },
  }, { [`composerData:${fixtureMarker}`]: { text: `${fixtureMarker}_CHAT_HISTORY` } });
  await file(join(global, 'state.vscdb.backup'), `${fixtureMarker}_STATE_BACKUP`);
  await file(join(global, `${fixtureExtensions.universal.id}/cache.json`), JSON.stringify({ marker: `${fixtureMarker}_EXTENSION_GLOBAL_STORAGE` }));
  const workspace = join(user, 'workspaceStorage/0f1e2d3c4b5a69788796a5b4c3d2e1f0');
  await file(join(workspace, 'workspace.json'), JSON.stringify({ folder: `file://${join(home, 'projects/fixture')}` }));
  database(join(workspace, 'state.vscdb'), { 'workbench.explorer.treeViewState': `${fixtureMarker}_WORKSPACE_STATE` },
    { [`bubbleId:${fixtureMarker}`]: { text: `${fixtureMarker}_WORKSPACE_CHAT` } });
  await file(join(user, 'History/-7a6b5c4d/entries.json'), JSON.stringify({ version: 1, resource: `file://${join(home, 'projects/fixture/a.js')}`, entries: [] }));
  await file(join(user, 'History/-7a6b5c4d/AbCd.js'), `// ${fixtureMarker}_LOCAL_HISTORY\n`);
  await file(join(cursor, 'Cookies'), `${fixtureMarker}_COOKIES`);
  await file(join(cursor, 'Local Storage/leveldb/000003.log'), `${fixtureMarker}_LOCAL_STORAGE`);
  await file(join(cursor, 'machineid'), `${fixtureMarker}_MACHINE`);
  await file(join(cursor, 'logs/20261018T090000/main.log'), 'fixture log\n');
  // ~/.cursor: extensions with target-platform metadata, CLI arguments and MCP configuration.
  for (const extension of Object.values(fixtureExtensions)) await extensionPackage(extensions, extension);
  await writeExtensionRegistry(home, [fixtureExtensions.universal, fixtureExtensions.native, ...(wrongPlatform ? [fixtureExtensions.wrongPlatform] : [])]);
  await file(join(extensions, '.obsolete'), JSON.stringify({ 'openvision-fixture.removed-1.0.0': true }));
  await file(join(home, '.cursor/argv.json'), '// fixture runtime arguments\n{"enable-crash-reporter": false}\n');
  await file(join(home, '.cursor/mcp.json'), JSON.stringify({ mcpServers: { fixture: { command: 'echo', env: { TOKEN: `${fixtureMarker}_MCP_TOKEN` } } } }));
  return { base, home, config, cursor, user, extensions, named, roots: [cursor, join(home, '.cursor')] };
}

// The user's remedy for a wrong-platform extension: reinstall the Linux build in
// Cursor, which replaces its directory and registry entry.
export async function reinstallForLinux(profile) {
  await rm(join(profile.extensions, fixtureExtensions.wrongPlatform.relativeLocation), { recursive: true, force: true });
  const linux = { ...fixtureExtensions.wrongPlatform, relativeLocation: 'openvision-fixture.windows-tool-0.9.0-linux-x64', targetPlatform: 'linux-x64' };
  await extensionPackage(profile.extensions, linux);
  await writeExtensionRegistry(profile.home, [fixtureExtensions.universal, fixtureExtensions.native, linux]);
  return linux;
}

// Path -> SHA-256 of every file below the fixture roots (directories as entries too).
export async function treeDigest(roots) {
  const entries = {};
  async function walk(base, path) {
    const info = await lstat(path);
    const key = relative(base, path).split(sep).join('/') || '.';
    if (info.isDirectory()) {
      entries[`${base}:${key}/`] = 'directory';
      for (const name of (await readdir(path)).sort()) await walk(base, join(path, name));
    } else entries[`${base}:${key}`] = info.isFile() ? createHash('sha256').update(await readFile(path)).digest('hex') : `other:${info.mode}`;
  }
  for (const root of roots) await walk(root, root);
  return { files: Object.keys(entries).length, sha256: createHash('sha256').update(JSON.stringify(entries)).digest('hex'), entries };
}
