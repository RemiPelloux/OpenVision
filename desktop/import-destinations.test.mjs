import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, writeFile, readFile, rm, symlink } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join, relative } from 'node:path';
import { planImport } from './cursor-import.mjs';
import { applyImport, restoreImport } from './import-transaction.mjs';
import { importDestinations, nativeImportDestinations } from './import-destinations.mjs';

test('selected profile and extension roots isolate imports, restore exact bytes and reject cross-profile backup use', async t => {
  const base = await mkdtemp(join(tmpdir(), 'openvision-selected-import-'));
  t.after(() => rm(base, { recursive: true, force: true }));
  const root = join(base, 'app'), selected = { user: join(base, 'selected/User'), extensions: join(base, 'selected/extensions'), backups: join(base, 'selected/backups') };
  const options = { root, user: join(base, 'source/User'), extensions: join(base, 'source/extensions'),
    categories: ['settings', 'extensions'], overwrite: true, destinations: selected };
  for (const path of [selected.user, selected.extensions, options.user, options.extensions, join(root, 'data/local/User')]) await mkdir(path, { recursive: true });
  const before = '// exact CRLF and unicode 日本語\r\n{"editor.fontSize":13}\r\n';
  await writeFile(join(selected.user, 'settings.json'), before);
  await writeFile(join(root, 'data/local/User/settings.json'), 'Untouched normal profile');
  await writeFile(join(options.user, 'settings.json'), '{"editor.fontSize":17}');
  await mkdir(join(options.extensions, 'fixture.sample-1.0.0'));
  await writeFile(join(options.extensions, 'fixture.sample-1.0.0/package.json'), '{"name":"sample"}');
  await writeFile(join(options.extensions, 'extensions.json'), JSON.stringify([{ identifier: { id: 'fixture.sample' },
    version: '1.0.0', relativeLocation: 'fixture.sample-1.0.0' }]));
  const imported = await applyImport(await planImport(options));
  const importedSettings = await readFile(join(selected.user, 'settings.json'));
  assert.equal((await planImport(options)).changes.length, 0);
  const manifestPath = join(imported.backup, 'manifest.json'), manifestBytes = await readFile(manifestPath);
  await assert.rejects(restoreImport(root, imported.backup), /Select an OpenVision/);
  const manifest = JSON.parse(manifestBytes);
  manifest.destinations.user = join(root, 'data/local/User');
  await writeFile(manifestPath, JSON.stringify(manifest));
  await assert.rejects(restoreImport(root, imported.backup, selected), /escape their owning directory/);
  await writeFile(manifestPath, manifestBytes);
  await writeFile(join(selected.user, 'settings.json'), '{"newer":true}');
  await assert.rejects(restoreImport(root, imported.backup, selected), /newer edit/);
  const fresh = await applyImport(await planImport(options));
  await restoreImport(root, fresh.backup, selected);
  assert.equal(await readFile(join(selected.user, 'settings.json'), 'utf8'), '{"newer":true}');
  // Restore the reviewed post-import bytes, then exercise the original backup.
  await writeFile(join(selected.user, 'settings.json'), importedSettings);
  await restoreImport(root, imported.backup, selected);
  assert.equal(await readFile(join(selected.user, 'settings.json'), 'utf8'), before);
  assert.equal(await readFile(join(root, 'data/local/User/settings.json'), 'utf8'), 'Untouched normal profile');
  await assert.rejects(readFile(join(selected.extensions, 'extensions.json')), { code: 'ENOENT' });
  assert.equal((await restoreImport(root, imported.backup, selected)).restored, 0);
});

test('legacy version-one backups remain restorable using their original fixed destinations', async t => {
  const base = await mkdtemp(join(tmpdir(), 'openvision-legacy-import-'));
  t.after(() => rm(base, { recursive: true, force: true }));
  const root = join(base, 'app'), options = { root, user: join(base, 'source'), extensions: join(base, 'extensions'), categories: ['settings'], overwrite: true };
  await mkdir(options.user); await writeFile(join(options.user, 'settings.json'), '{"editor.fontSize":17}');
  const destinations = importDestinations(root);
  await mkdir(destinations.user, { recursive: true });
  await writeFile(join(destinations.user, 'settings.json'), '// legacy\n{"editor.fontSize":13}');
  const imported = await applyImport(await planImport(options));
  const manifestPath = join(imported.backup, 'manifest.json'), manifest = JSON.parse(await readFile(manifestPath));
  manifest.version = 1;
  for (const record of manifest.records) { record.path = relative(root, join(destinations[record.owner], record.path)); delete record.owner; }
  delete manifest.destinations;
  await writeFile(manifestPath, JSON.stringify(manifest));
  const nativeCase = value => process.platform === 'win32' ? value[0].toLowerCase() + value.slice(1) : value;
  assert.equal((await restoreImport(root, imported.backup, { ...destinations, user: nativeCase(destinations.user),
    extensions: nativeCase(destinations.extensions), backups: join(base, 'new-backups'), backupsRoot: base })).restored, 1);
  assert.equal(await readFile(join(destinations.user, 'settings.json'), 'utf8'), '// legacy\n{"editor.fontSize":13}');
});

test('native import ownership comes from the matching window and rejects unavailable or named profiles', () => {
  const root = join(tmpdir(), 'native-owner'), sender = {}, uri = fsPath => ({ scheme: 'file', fsPath });
  const user = join(root, 'User'), extensions = join(root, 'extensions');
  const profile = { isDefault: true, settingsResource: uri(join(user, 'settings.json')), keybindingsResource: uri(join(user, 'keybindings.json')),
    tasksResource: uri(join(user, 'tasks.json')), snippetsHome: uri(join(user, 'snippets')), extensionsResource: uri(join(extensions, 'extensions.json')) };
  const owner = { windowsMainService: { getWindows: () => [{ win: { webContents: sender }, profile }] },
    environmentMainService: { extensionsPath: extensions, userDataPath: root } };
  assert.equal(nativeImportDestinations(owner, sender).user, user);
  assert.throws(() => nativeImportDestinations(owner, {}), /owned default profile/);
  profile.isDefault = false;
  assert.throws(() => nativeImportDestinations(owner, sender), /named profile/);
  profile.isDefault = true; profile.extensionsResource = uri(join(user, 'extensions.json'));
  assert.throws(() => nativeImportDestinations(owner, sender), /registry ownership/);
});

test('redirected destination parents inside the installation boundary fail before mutation', async t => {
  const base = await mkdtemp(join(tmpdir(), 'openvision-parent-import-'));
  t.after(() => rm(base, { recursive: true, force: true }));
  const root = join(base, 'app'), source = join(base, 'source'), outside = join(base, 'outside');
  await Promise.all([mkdir(root), mkdir(source), mkdir(join(outside, 'local/User'), { recursive: true })]);
  await writeFile(join(source, 'settings.json'), '{"editor.fontSize":17}');
  await writeFile(join(outside, 'local/User/settings.json'), '{"editor.fontSize":13}');
  await symlink(outside, join(root, 'data'), process.platform === 'win32' ? 'junction' : 'dir');
  await assert.rejects(planImport({ root, user: source, extensions: join(base, 'extensions'), categories: ['settings'], overwrite: true }), /symbolic link/);
  assert.equal(await readFile(join(outside, 'local/User/settings.json'), 'utf8'), '{"editor.fontSize":13}');
});
