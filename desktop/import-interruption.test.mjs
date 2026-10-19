import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, writeFile, readFile, readdir, rm } from 'node:fs/promises';
import { spawn } from 'node:child_process';
import { once } from 'node:events';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { planImport } from './cursor-import.mjs';
import { applyImport, restoreImport, recoverInterruptedImports } from './import-transaction.mjs';
import { listImportBackups } from './import-backup.mjs';
import { selectedImportDestinations } from './import-destinations.mjs';
import { createImportOverlay } from './verify-import-faults-overlay.mjs';
import { optionalFile } from './import-files.mjs';

const root = resolve(import.meta.dirname, '..');

async function fixture(t) {
  const base = await mkdtemp(join(tmpdir(), 'openvision-import-interruption-'));
  t.after(() => rm(base, { recursive: true, force: true }));
  const userData = join(base, 'profile'), extensions = join(base, 'extensions'), source = join(base, 'source');
  const destinations = selectedImportDestinations(userData, extensions);
  const file = async (path, value) => { await mkdir(join(path, '..'), { recursive: true }); await writeFile(path, value); };
  await mkdir(extensions, { recursive: true });
  await file(join(destinations.user, 'settings.json'), '// Original — 日本語\r\n{"editor.fontSize":12}\r\n');
  await file(join(destinations.user, 'keybindings.json'), '[{"key":"ctrl+j","command":"old.command"}]');
  await file(join(source, 'User/settings.json'), '{"editor.fontSize":19}');
  await file(join(source, 'User/keybindings.json'), '[{"key":"ctrl+j","command":"new.command"}]');
  await file(join(source, 'User/tasks.json'), '{"version":"2.0.0","tasks":[]}');
  await file(join(source, 'User/snippets/new.code-snippets'), '{"new":{"prefix":"new","body":"imported"}}');
  await file(join(source, 'extensions/sample.test-1.0.0/package.json'), '{"name":"test","publisher":"sample","version":"1.0.0"}');
  await file(join(source, 'extensions/extensions.json'), JSON.stringify([{ identifier: { id: 'sample.test' }, version: '1.0.0', relativeLocation: 'sample.test-1.0.0' }]));
  const paths = ['settings.json', 'keybindings.json', 'tasks.json', 'snippets/new.code-snippets'].map(name => join(destinations.user, name))
    .concat([join(extensions, 'extensions.json'), join(extensions, 'sample.test-1.0.0/package.json')]);
  const snapshot = async () => Promise.all(paths.map(optionalFile));
  const options = { root, user: join(source, 'User'), extensions: join(source, 'extensions'),
    categories: ['settings', 'keybindings', 'tasks', 'snippets', 'extensions'], overwrite: true, destinations };
  return { base, userData, extensions, destinations, paths, snapshot, options, original: await snapshot(),
    args: ['--target-user-data', userData, '--target-extensions', extensions] };
}

async function treeFiles(directory) {
  const entries = await readdir(directory, { recursive: true, withFileTypes: true });
  return entries.map(entry => `${join(entry.parentPath, entry.name)}${entry.isDirectory() ? '/' : ''}`).sort();
}

test('SIGKILL between import replacements: next CLI start rolls back to exact originals and the backup restores again', async t => {
  const f = await fixture(t), overlay = await createImportOverlay(root, join(f.base, 'overlay'));
  const probeDirectory = join(f.base, 'probe'); await mkdir(probeDirectory);
  const treeBefore = [...await treeFiles(f.userData), ...await treeFiles(f.extensions)];
  for (const index of [0, 2, 4]) {
    await writeFile(join(probeDirectory, `pause-import-${index}`), '');
    const child = spawn(process.execPath, [join(overlay.desktop, 'import-cli.mjs'), ...f.args, '--apply', '--user', f.options.user,
      '--extensions', f.options.extensions], { env: { ...process.env, OPENVISION_IMPORT_PROBE: overlay.probe, OPENVISION_IMPORT_PROBE_DIR: probeDirectory },
      stdio: 'ignore' });
    const exited = once(child, 'exit');
    for (let wait = 0; !(await readFile(join(probeDirectory, 'probe.ndjson'), 'utf8').catch(() => '')).includes(`"event":"paused","stage":"import","index":${index}`); wait++) {
      assert.ok(wait < 400, 'probe pause'); await new Promise(resolve => setTimeout(resolve, 25));
    }
    child.kill('SIGKILL'); await exited;
    const interrupted = await f.snapshot();
    assert.ok(interrupted.some((bytes, i) => !(bytes === undefined ? f.original[i] === undefined : bytes.equals(f.original[i] ?? Buffer.alloc(0)))), 'partially committed');
    const listed = await listImportBackups(root, f.destinations);
    assert.equal(listed.backups.filter(entry => entry.interrupted).length, 1, 'interrupted transaction is discoverable');
    const recovered = await recoverInterruptedImports(root, f.destinations);
    assert.deepEqual(recovered.map(entry => entry.recovered), ['restored']);
    assert.deepEqual(await f.snapshot(), f.original, `exact originals after interruption at ${index}`);
    assert.deepEqual([...await treeFiles(f.userData), ...await treeFiles(f.extensions)].filter(path => !path.includes('/Backups/')),
      treeBefore.filter(path => !path.includes('/Backups/')), 'no temporaries or created directories remain');
    assert.deepEqual(await recoverInterruptedImports(root, f.destinations), [], 'recovery is idempotent');
  }
  const imported = await applyImport(await planImport(f.options));
  assert.equal(imported.files, 6);
  assert.equal((await restoreImport(root, imported.backup, f.destinations)).restored, 6);
  assert.deepEqual(await f.snapshot(), f.original);
});

test('SIGKILL between restore replacements: recovery finishes the restore to exact originals', async t => {
  const f = await fixture(t), overlay = await createImportOverlay(root, join(f.base, 'overlay'));
  const probeDirectory = join(f.base, 'probe'); await mkdir(probeDirectory);
  const imported = await applyImport(await planImport(f.options));
  await writeFile(join(probeDirectory, 'pause-restore-2'), '');
  const child = spawn(process.execPath, [join(overlay.desktop, 'import-cli.mjs'), ...f.args, '--restore', imported.backup],
    { env: { ...process.env, OPENVISION_IMPORT_PROBE: overlay.probe, OPENVISION_IMPORT_PROBE_DIR: probeDirectory }, stdio: 'ignore' });
  const exited = once(child, 'exit');
  for (let wait = 0; !(await readFile(join(probeDirectory, 'probe.ndjson'), 'utf8').catch(() => '')).includes('"event":"paused"'); wait++) {
    assert.ok(wait < 400, 'probe pause'); await new Promise(resolve => setTimeout(resolve, 25));
  }
  child.kill('SIGKILL'); await exited;
  assert.equal((await listImportBackups(root, f.destinations)).backups[0].status, 'restoring');
  assert.deepEqual((await recoverInterruptedImports(root, f.destinations)).map(entry => entry.recovered), ['restored']);
  assert.deepEqual(await f.snapshot(), f.original);
  assert.equal((await restoreImport(root, imported.backup, f.destinations)).restored, 0);
});

test('a staging failure changes no destination, leaves no temporaries and keeps no orphan backup', async t => {
  const f = await fixture(t), plan = await planImport(f.options);
  const treeBefore = [...await treeFiles(f.userData), ...await treeFiles(f.extensions)];
  // The last staged file's source changes after preview: every earlier temporary is already written.
  await writeFile(join(f.options.extensions, 'sample.test-1.0.0/package.json'), '{"changed":true}');
  await assert.rejects(applyImport(plan), /Import failed before changing any file: Source changed/);
  assert.deepEqual(await f.snapshot(), f.original);
  assert.deepEqual([...await treeFiles(f.userData), ...await treeFiles(f.extensions)], treeBefore);
});

test('recovery leaves a transaction owned by a live process alone', async t => {
  const f = await fixture(t), imported = await applyImport(await planImport(f.options));
  const manifestPath = join(imported.backup, 'manifest.json'), manifest = JSON.parse(await readFile(manifestPath, 'utf8'));
  const live = spawn(process.execPath, ['-e', 'setInterval(() => {}, 1000)'], { stdio: 'ignore' });
  t.after(() => live.kill('SIGKILL'));
  await writeFile(manifestPath, JSON.stringify({ ...manifest, status: 'prepared', process: { pid: live.pid } }));
  assert.equal((await recoverInterruptedImports(root, f.destinations))[0].skipped, 'owned by a running process');
  assert.notDeepEqual(await f.snapshot(), f.original, 'live transaction untouched');
  const exited = once(live, 'exit'); live.kill('SIGKILL'); await exited;
  assert.deepEqual((await recoverInterruptedImports(root, f.destinations)).map(entry => entry.recovered), ['restored']);
  assert.deepEqual(await f.snapshot(), f.original);
});

test('native owner customization notifies import recovery once and is idempotent', async () => {
  const { installImportOwner } = await import('./import-owner-customization.mjs');
  const text = 'var Dt = class extends z { constructor(e, t) { super(); this.windowsMainService = e; this.environmentMainService = t; ' +
    'this.heicConversionFolderPath = 1; } getWindows() { return []; } };';
  const installed = installImportOwner(text);
  assert.match(installed, /globalThis\.openvisionImportOwner = this;\nglobalThis\.openvisionImportOwnerReady\?\.\(this\);/);
  assert.equal(installImportOwner(installed), installed);
  let notified;
  globalThis.openvisionImportOwnerReady = owner => { notified = owner; };
  try { new Function('z', `${installed}; return new Dt('windows', 'environment');`)(class {}); }
  finally { delete globalThis.openvisionImportOwnerReady; delete globalThis.openvisionImportOwner; }
  assert.equal(notified.environmentMainService, 'environment');
});
