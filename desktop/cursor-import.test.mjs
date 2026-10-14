import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, writeFile, readFile, rm, symlink } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { planImport, summarize, cursorProfiles } from './cursor-import.mjs';
import { applyImport, restoreImport } from './import-transaction.mjs';
import { parseConfiguration, mergeKeybindings, mergeSettings, localSettings } from './import-json.mjs';

async function fixture(t) {
  const base = await mkdtemp(join(tmpdir(), 'openvision-import-'));
  t.after(() => rm(base, { recursive: true, force: true }));
  const options = { root: join(base, 'openvision'), user: join(base, 'Cursor/User'), extensions: join(base, 'Cursor/extensions'),
    categories: ['settings', 'keybindings', 'snippets', 'tasks', 'extensions'], overwrite: true };
  async function file(path, value) { await mkdir(join(path, '..'), { recursive: true }); await writeFile(path, value); }
  await file(join(options.user, 'settings.json'), '// Cursor preferences\n{"editor.fontSize": 17, "window.title":"Cursor", "update.mode":"default",}');
  await file(join(options.root, 'data/local/User/settings.json'), '// Keep this comment\n{"editor.fontSize": 13,"window.title":"OpenVision","update.mode":"none","my.setting":true,}');
  await file(join(options.user, 'keybindings.json'), '[{"key":"ctrl+j","command":"cursor.command"}]');
  await file(join(options.root, 'data/local/User/keybindings.json'), '[{"key":"ctrl+j","command":"old.command"},{"key":"ctrl+k","command":"keep.command"}]');
  await file(join(options.user, 'snippets/javascript.json'), '{"log":{"prefix":"log","body":"console.log($1)"}}');
  await file(join(options.user, 'tasks.json'), '{"version":"2.0.0","tasks":[]}');
  await file(join(options.extensions, 'sample.test-1.0.0/package.json'), '{"name":"test","publisher":"sample","version":"1.0.0"}');
  await file(join(options.extensions, 'extensions.json'), JSON.stringify([{ identifier: { id: 'sample.test' }, version: '1.0.0',
    relativeLocation: 'sample.test-1.0.0', location: { scheme: 'file', path: '/old/path' }, metadata: { installedTimestamp: 1 } }]));
  return { options, file };
}

test('preview, JSONC merge, isolated extension registry, repeat import and restore', async t => {
  const { options, file } = await fixture(t);
  const settingsPath = join(options.root, 'data/local/User/settings.json');
  const original = await readFile(settingsPath, 'utf8');
  await file(join(options.root, 'data/local/User/globalStorage/state.vscdb'), 'private provider secrets');
  await file(join(options.user, 'globalStorage/state.vscdb'), 'Cursor sessions');
  const plan = await planImport(options);
  assert.equal(summarize(plan).files, 6);
  assert.equal(await readFile(settingsPath, 'utf8'), original, 'preview writes nothing');
  const result = await applyImport(plan);
  const text = await readFile(settingsPath, 'utf8');
  assert.match(text, /Keep this comment/);
  assert.deepEqual(parseConfiguration(text), { ...localSettings, 'editor.fontSize': 17, 'window.title': 'OpenVision', 'update.mode': 'none', 'my.setting': true });
  const registry = JSON.parse(await readFile(join(options.root, 'data/local-extensions/extensions.json'), 'utf8'));
  assert.equal(registry[0].location.scheme, 'file');
  if (process.platform === 'win32') assert.match(registry[0].location.path, /^\/[a-z]:\//, 'Registry URI uses native scanner drive spelling');
  assert.ok(registry[0].location.path.replaceAll('\\', '/').endsWith('/openvision/data/local-extensions/sample.test-1.0.0'));
  assert.equal(registry[0].metadata.installedTimestamp, 1);
  assert.equal(await readFile(join(options.root, 'data/local/User/globalStorage/state.vscdb'), 'utf8'), 'private provider secrets');
  assert.equal((await applyImport(await planImport(options))).backup, null, 'identical import creates no backup');
  assert.equal((await restoreImport(options.root, result.backup)).restored, 6);
  assert.equal(await readFile(settingsPath, 'utf8'), original);
  assert.equal((await restoreImport(options.root, result.backup)).restored, 0);
  await assert.rejects(readFile(join(options.root, 'data/local-extensions/extensions.json')), { code: 'ENOENT' });
});

test('keep-existing policy and keybindings conflict semantics', async t => {
  const { options } = await fixture(t);
  options.overwrite = false;
  const result = await applyImport(await planImport(options));
  const settings = parseConfiguration(await readFile(join(options.root, 'data/local/User/settings.json'), 'utf8'));
  assert.equal(settings['editor.fontSize'], 13);
  const bindings = parseConfiguration(await readFile(join(options.root, 'data/local/User/keybindings.json'), 'utf8'), 'array');
  assert.equal(bindings[0].command, 'old.command');
  assert.ok(result.backup);
  assert.throws(() => mergeKeybindings('[{"key":"x"}]'), /Invalid keybinding/);
});

test('import before first launch seeds OpenVision defaults and retains editor preferences', () => {
  const settings = parseConfiguration(mergeSettings('{"editor.fontSize":16,"window.title":"Cursor"}'));
  assert.deepEqual(settings, { ...localSettings, 'editor.fontSize': 16 });
});

test('stale preview and newer user edits refuse writes and restores', async t => {
  const { options, file } = await fixture(t);
  const plan = await planImport(options);
  const path = join(options.root, 'data/local/User/settings.json');
  await file(path, '{"editor.fontSize":20}');
  await assert.rejects(applyImport(plan), /changed since/);
  const result = await applyImport(await planImport(options));
  await file(path, '{"editor.fontSize":21}');
  await assert.rejects(restoreImport(options.root, result.backup), /newer edit/);
  assert.equal(await readFile(path, 'utf8'), '{"editor.fontSize":21}');
});

test('malformed JSONC, unsafe extension path and redirected destination fail before mutation', async t => {
  const { options, file } = await fixture(t);
  const path = join(options.root, 'data/local/User/settings.json');
  const before = await readFile(path, 'utf8');
  await file(join(options.user, 'settings.json'), '{broken');
  await assert.rejects(planImport(options), /valid JSONC/);
  assert.equal(await readFile(path, 'utf8'), before);
  await file(join(options.user, 'settings.json'), '{}');
  await file(join(options.extensions, 'extensions.json'), '[{"identifier":{"id":"escape"},"version":"1","relativeLocation":"../escape"}]');
  await assert.rejects(planImport(options), /Invalid installed extension/);
  options.categories = ['snippets'];
  const redirected = join(options.root, 'data/local/User/snippets');
  await symlink(join(options.user, 'snippets'), redirected, process.platform === 'win32' ? 'junction' : 'dir');
  await assert.rejects(planImport(options), /symbolic link|redirected/);
});

test('missing optional files, profile discovery, backup tampering and source changes', async t => {
  const { options, file } = await fixture(t);
  await mkdir(join(options.user, 'profiles/named-profile'), { recursive: true });
  assert.equal((await cursorProfiles(options.user)).length, 2);
  await rm(join(options.user, 'tasks.json'));
  const plan = await planImport(options);
  assert.equal(plan.missing.length, 1);
  await file(join(options.extensions, 'sample.test-1.0.0/package.json'), '{"changed":true}');
  await assert.rejects(applyImport(plan), /Source changed/);
  assert.equal((await readFile(join(options.root, 'data/local/User/settings.json'), 'utf8')).includes('13'), true, 'partial write rolled back');
  const result = await applyImport(await planImport(options));
  await file(join(result.backup, '0.bin'), 'tampered');
  await assert.rejects(restoreImport(options.root, result.backup), /does not match/);
  const manifestPath = join(result.backup, 'manifest.json');
  const manifest = JSON.parse(await readFile(manifestPath, 'utf8'));
  manifest.records[0].path = '../../../README.md';
  await file(manifestPath, JSON.stringify(manifest));
  await assert.rejects(restoreImport(options.root, result.backup), /escapes the profile/);
});
