import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, writeFile, readFile, rm, symlink } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { spawnSync } from 'node:child_process';
import { planImport } from './cursor-import.mjs';
import { applyImport } from './import-transaction.mjs';
import { selectedImportDestinations } from './import-destinations.mjs';

const root = resolve(import.meta.dirname, '..'), executable = join(root, 'desktop/import-cli.mjs');
function cli(args, expected = 0) {
  const result = spawnSync(process.execPath, [executable, ...args], { encoding: 'utf8', timeout: 30000 });
  assert.equal(result.error, undefined);
  assert.equal(result.status, expected, result.stderr);
  return expected === 0 ? JSON.parse(result.stdout) : result.stderr;
}

async function fixture(t) {
  const base = await mkdtemp(join(tmpdir(), 'openvision-recovery-cli-'));
  t.after(() => rm(base, { recursive: true, force: true }));
  const userData = join(base, 'profile'), extensions = join(base, 'extensions'), source = join(base, 'source');
  const destinations = selectedImportDestinations(userData, extensions);
  await Promise.all([mkdir(destinations.user, { recursive: true }), mkdir(extensions), mkdir(source)]);
  const original = '// Original — 日本語\r\n{"editor.fontSize":12}\r\n', path = join(destinations.user, 'settings.json');
  await writeFile(path, original); await writeFile(join(source, 'settings.json'), '{"editor.fontSize":19}');
  const options = { root, user: source, extensions: join(base, 'source-extensions'), categories: ['settings'], overwrite: true, destinations };
  const imported = await applyImport(await planImport(options));
  return { base, userData, extensions, destinations, original, path, backup: imported.backup,
    args: ['--target-user-data', userData, '--target-extensions', extensions] };
}

test('production CLI discovers native-layout backups, previews read-only and restores exact bytes after restart', async t => {
  const f = await fixture(t), imported = await readFile(f.path);
  const listed = cli([...f.args, '--list-backups']);
  assert.equal(listed.backups.length, 1);
  assert.equal(listed.backups[0].backup, f.backup);
  assert.equal(listed.backups[0].verifiedContents, false);
  const preview = cli([...f.args, '--preview-restore', f.backup]);
  assert.equal(preview.pending, 1); assert.deepEqual(await readFile(f.path), imported);
  assert.equal(cli([...f.args, '--restore', f.backup]).restored, 1);
  assert.equal(await readFile(f.path, 'utf8'), f.original);
  assert.equal(cli([...f.args, '--restore', f.backup]).restored, 0);
  assert.equal(cli([...f.args, '--list-backups']).backups[0].status, 'restored');
});

test('production CLI rejects incomplete ownership, foreign targets, stale edits and tampered backup bytes', async t => {
  const f = await fixture(t), imported = await readFile(f.path);
  assert.match(cli(['--target-user-data', f.userData, '--restore', f.backup], 1), /Select both/);
  assert.match(cli(['--restore', f.backup], 1), /Select an OpenVision/);
  assert.match(cli(['--target-user-data', f.userData, '--target-extensions', join(f.base, 'other-extensions'), '--restore', f.backup], 1), /different profile/);
  assert.match(cli([...f.args, '--list-backups', '--restore', f.backup], 1), /one recovery action/);
  await writeFile(f.path, '{"userEdit":true}');
  assert.match(cli([...f.args, '--preview-restore', f.backup], 1), /newer edit/);
  assert.match(cli([...f.args, '--restore', f.backup], 1), /newer edit/);
  assert.equal(await readFile(f.path, 'utf8'), '{"userEdit":true}');
  await writeFile(f.path, imported);
  await writeFile(join(f.backup, '0.bin'), 'tampered');
  assert.match(cli([...f.args, '--restore', f.backup], 1), /does not match its digest/);
  assert.deepEqual(await readFile(f.path), imported);
});

test('discovery separates malformed ownership and refuses redirected backup directories', async t => {
  const f = await fixture(t), corrupt = join(f.destinations.backups, 'corrupt');
  await mkdir(corrupt); await writeFile(join(corrupt, 'manifest.json'), '{');
  const listed = cli([...f.args, '--list-backups']);
  assert.equal(listed.backups.find(entry => entry.backup === corrupt).status, 'invalid');
  assert.equal(listed.backups.find(entry => entry.backup === f.backup).status, 'complete');
  const fake = join(f.base, 'fake-profile'); await mkdir(fake);
  await symlink(join(f.userData, 'Backups'), join(fake, 'Backups'), process.platform === 'win32' ? 'junction' : 'dir');
  assert.match(cli(['--target-user-data', fake, '--target-extensions', f.extensions, '--list-backups'], 1), /symbolic link/);
});
