import test from 'node:test';
import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { createHash } from 'node:crypto';
import { lstat, mkdir, mkdtemp, readdir, readFile, readlink, rm, symlink, writeFile } from 'node:fs/promises';
import { hostname, tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { install, recover, rollback, stateName, status, uninstall } from './linux-install.mjs';
import { createRelease, createSigner } from './linux-release-fixture.mjs';
import { markerName, readProfileFormat } from './profile-format.mjs';

const root = resolve(import.meta.dirname, '..');
const linux = { skip: process.platform !== 'linux' };
let directory, signer;
const releases = {};
test.before(async () => {
  directory = await mkdtemp(join(tmpdir(), 'openvision-install-test-'));
  signer = await createSigner(join(directory, 'signer'));
  for (const [version, profileFormat] of [['1.0.0', 1], ['1.1.0', 1], ['1.2.0', 1], ['0.9.0', null]])
    releases[version] = await createRelease({ directory: join(directory, 'releases'), version, signer, profileFormat });
});
test.after(() => rm(directory, { recursive: true, force: true }));

const exists = path => lstat(path).then(() => true, () => false);
async function context() {
  const base = await mkdtemp(join(directory, 'case-'));
  return { root: join(base, 'install'), xdgDataHome: join(base, 'xdg'), allowedSigners: signer.allowedSigners };
}
const data = (context, version) => join(context.root, 'versions', version, 'electron-host/data');
async function seed(path) {
  const files = { 'local/User/settings.json': '{"window.title":"seeded"}', 'local/User/globalStorage/state.vscdb': 'sqlite bytes',
    'local-extensions/extensions.json': '[]', 'local-extensions/fixture.ext-1.0.0/package.json': '{"name":"ext"}' };
  for (const [relative, content] of Object.entries(files)) {
    await mkdir(join(path, relative, '..'), { recursive: true });
    await writeFile(join(path, relative), content);
  }
  await symlink('fixture.ext-1.0.0', join(path, 'local-extensions/current-link'));
  // A stale Chromium run lock from a process on another host is never copied.
  await symlink('elsewhere-1', join(path, 'local/SingletonLock'));
}
async function digest(path) {
  const hash = createHash('sha256'), walk = async (relative) => {
    for (const name of (await readdir(join(path, relative))).sort()) {
      const full = join(path, relative, name), info = await lstat(full);
      hash.update(`${relative}/${name}:${info.isSymbolicLink() ? 'link:' + await readlink(full) : info.isDirectory() ? 'dir' : 'file'}\n`);
      if (info.isDirectory() && !info.isSymbolicLink()) await walk(join(relative, name));
      else if (info.isFile()) hash.update(await readFile(full));
    }
  };
  await walk('');
  return hash.digest('hex');
}
const installRelease = (context, version, options = {}) => install({ ...context, ...releases[version], ...options });

test('fresh install verifies, switches current and writes a launcher entry', linux, async () => {
  const c = await context();
  const result = await installRelease(c, '1.0.0');
  assert.equal(result.action, 'install');
  assert.equal(await readlink(join(c.root, 'current')), 'versions/1.0.0');
  assert.deepEqual((await readProfileFormat(data(c, '1.0.0'))).format, 1);
  const entry = await readFile(join(c.xdgDataHome, 'applications/openvision.desktop'), 'utf8');
  assert.match(entry, new RegExp(`Exec="${c.root}/current/OpenVision" %F`));
  assert.ok(await exists(join(c.xdgDataHome, 'icons/hicolor/256x256/apps/openvision.png')));
  assert.equal(JSON.parse(await readFile(join(c.root, stateName), 'utf8')).current, '1.0.0');
  await assert.rejects(installRelease(c, '1.0.0'), /already the current version/);
});

test('upgrade copies and migrates the profile, backs it up and keeps the old version intact', linux, async () => {
  const c = await context();
  await installRelease(c, '0.9.0');
  await seed(data(c, '0.9.0'));
  await rm(join(data(c, '0.9.0'), markerName)); // a profile written before format markers existed
  const before = await digest(data(c, '0.9.0'));
  const result = await installRelease(c, '1.0.0');
  assert.equal(result.action, 'upgrade');
  assert.deepEqual(result.migration.applied, [1]);
  assert.equal(await readlink(join(c.root, 'current')), 'versions/1.0.0');
  assert.equal(await digest(data(c, '0.9.0')), before, 'the previous version and its profile are unchanged');
  const upgraded = data(c, '1.0.0');
  assert.equal(await readFile(join(upgraded, 'local/User/settings.json'), 'utf8'), '{"window.title":"seeded"}');
  assert.equal(await readlink(join(upgraded, 'local-extensions/current-link')), 'fixture.ext-1.0.0');
  assert.equal(await exists(join(upgraded, 'local/SingletonLock')), false);
  assert.deepEqual(await readProfileFormat(upgraded).then(({ format, minimumReader }) => ({ format, minimumReader })), { format: 1, minimumReader: 0 });
  const backups = await readdir(join(c.root, 'backups'));
  assert.equal(backups.length, 1); assert.match(backups[0], /pre-upgrade-0\.9\.0-to-1\.0\.0$/);
  assert.equal(await readFile(join(c.root, 'backups', backups[0], 'data/local/User/settings.json'), 'utf8'), '{"window.title":"seeded"}');
  assert.equal((await status(c)).state.previous, '0.9.0');
});

test('tampered or mismatched releases are rejected before the installation changes', linux, async () => {
  const c = await context();
  await installRelease(c, '1.0.0');
  await seed(data(c, '1.0.0'));
  const before = await digest(c.root);
  const tampered = await createRelease({ directory: await mkdtemp(join(directory, 'tamper-')), version: '1.1.0', signer });
  const bytes = await readFile(tampered.archive); bytes[100] ^= 1; await writeFile(tampered.archive, bytes);
  await assert.rejects(install({ ...c, ...tampered }), /SHA-256 does not match|size/);
  const foreign = await createSigner(join(directory, `foreign-${Date.now()}`));
  await assert.rejects(install({ ...c, ...releases['1.1.0'], allowedSigners: foreign.allowedSigners }), /signature is not valid/);
  assert.equal(await digest(c.root), before, 'install root unchanged (no staging, backups or versions)');
});

const cli = (args, env = {}) => spawn(process.execPath, [join(root, 'desktop/linux-install.mjs'), ...args],
  { env: { ...process.env, ...env }, stdio: ['ignore', 'pipe', 'pipe'] });
async function killAt(c, version, phase, command = 'upgrade') {
  const child = cli([command, '--root', c.root, '--no-desktop-entry', ...(command === 'rollback' ? [] :
    ['--archive', releases[version].archive, '--allowed-signers', c.allowedSigners])], { OPENVISION_INSTALL_TEST_HOLD: phase });
  let output = '';
  await new Promise((resolve, reject) => {
    child.stdout.on('data', chunk => { output += chunk; if (output.includes(`[hold] ${phase}`)) resolve(); });
    child.on('close', code => reject(Error(`installer exited (${code}) before ${phase}: ${output}`)));
  });
  child.kill('SIGKILL');
  await new Promise(resolve => child.once('close', resolve));
}
const finish = (args) => new Promise(resolve => {
  const child = cli(args); let stdout = '', stderr = '';
  child.stdout.on('data', chunk => { stdout += chunk; }); child.stderr.on('data', chunk => { stderr += chunk; });
  child.on('close', code => resolve({ code, stdout, stderr }));
});

for (const phase of ['verify', 'extract', 'backup', 'data-copy', 'migrate', 'switch']) {
  test(`SIGKILL during upgrade ${phase} leaves the installed version and profile intact; the next run recovers`, linux, async () => {
    const c = await context();
    await installRelease(c, '1.0.0', { xdgDataHome: undefined });
    await seed(data(c, '1.0.0'));
    const before = await digest(data(c, '1.0.0'));
    await killAt(c, '1.1.0', phase);
    assert.equal(await readlink(join(c.root, 'current')), 'versions/1.0.0');
    assert.equal(await digest(data(c, '1.0.0')), before);
    // Killed at the switch, 1.1.0 is complete but never became current.
    assert.deepEqual((await readdir(join(c.root, 'versions'))).sort(), phase === 'switch' ? ['1.0.0', '1.1.0'] : ['1.0.0']);
    assert.deepEqual((await recover(c.root)).current, '1.0.0');
    assert.deepEqual(await readdir(join(c.root, 'versions')), ['1.0.0']);
    assert.equal(JSON.parse(await readFile(join(c.root, stateName), 'utf8')).current, '1.0.0');
    // The killed installer's lock and staging are reclaimed by the next run.
    const next = await finish(['upgrade', '--root', c.root, '--no-desktop-entry', '--archive', releases['1.1.0'].archive, '--allowed-signers', c.allowedSigners]);
    assert.equal(next.code, 0, next.stderr);
    assert.equal(await readlink(join(c.root, 'current')), 'versions/1.1.0');
    assert.equal(await exists(join(c.root, 'staging')), false);
    assert.equal(await readFile(join(data(c, '1.1.0'), 'local/User/settings.json'), 'utf8'), '{"window.title":"seeded"}');
  });
}

test('SIGKILL during rollback data copy leaves the current version usable', linux, async () => {
  const c = await context();
  await installRelease(c, '1.0.0', { xdgDataHome: undefined });
  await seed(data(c, '1.0.0'));
  await installRelease(c, '1.1.0', { xdgDataHome: undefined });
  const current = await digest(data(c, '1.1.0'));
  await killAt(c, undefined, 'data-copy', 'rollback');
  assert.equal(await readlink(join(c.root, 'current')), 'versions/1.1.0');
  assert.equal(await digest(data(c, '1.1.0')), current);
  const next = await finish(['rollback', '--root', c.root, '--no-desktop-entry']);
  assert.equal(next.code, 0, next.stderr);
  assert.equal(await readlink(join(c.root, 'current')), 'versions/1.0.0');
});

test('a switch that happened before the state write is recognised on the next run', linux, async () => {
  const c = await context();
  await installRelease(c, '1.0.0'); await installRelease(c, '1.1.0');
  const state = JSON.parse(await readFile(join(c.root, stateName), 'utf8'));
  await writeFile(join(c.root, stateName), JSON.stringify({ ...state, current: '1.0.0', previous: undefined }));
  const recovered = await recover(c.root);
  assert.equal(recovered.current, '1.1.0'); assert.equal(recovered.previous, '1.0.0');
});

test('rollback carries work written by the newer version and backs up both profiles', linux, async () => {
  const c = await context();
  await installRelease(c, '1.0.0'); await seed(data(c, '1.0.0'));
  await installRelease(c, '1.1.0');
  await writeFile(join(data(c, '1.1.0'), 'local/User/written-by-1.1.0.txt'), 'newer work');
  const result = await rollback(c);
  assert.equal(result.to, '1.0.0');
  assert.equal(await readlink(join(c.root, 'current')), 'versions/1.0.0');
  assert.equal(await readFile(join(data(c, '1.0.0'), 'local/User/written-by-1.1.0.txt'), 'utf8'), 'newer work');
  assert.ok(await exists(join(result.backup, 'data/local/User/written-by-1.1.0.txt')));
  assert.ok(await exists(join(result.backup, 'previous-data/local/User/settings.json')));
  assert.equal((await status(c)).state.previous, '1.1.0');
  // Rolling forward again returns to the newer version with the same profile.
  await rollback(c);
  assert.equal(await readlink(join(c.root, 'current')), 'versions/1.1.0');
});

test('rollback refuses a profile the older package cannot open unless the older profile is kept', linux, async () => {
  const c = await context();
  await installRelease(c, '0.9.0'); await seed(data(c, '0.9.0'));
  await installRelease(c, '1.0.0');
  await writeFile(join(data(c, '1.0.0'), markerName), JSON.stringify({ format: 2, minimumReader: 2 }));
  const before = await digest(c.root);
  await assert.rejects(rollback(c), /cannot open the current profile \(format 2\)/);
  assert.equal(await digest(c.root), before);
  await rollback({ ...c, keepPreviousData: true });
  assert.equal(await readlink(join(c.root, 'current')), 'versions/0.9.0');
  assert.equal((await readProfileFormat(data(c, '0.9.0'))).format, 0, 'its own older profile is kept');
});

test('a format-1 profile is tolerated by a format-0 package (downgrade tolerance)', linux, async () => {
  const c = await context();
  await installRelease(c, '1.0.0'); await seed(data(c, '1.0.0'));
  const result = await installRelease(c, '0.9.0');
  assert.equal(result.migration.downgradeTolerated, true);
  assert.equal((await readProfileFormat(data(c, '0.9.0'))).format, 1);
  assert.equal(await readFile(join(data(c, '0.9.0'), 'local/User/settings.json'), 'utf8'), '{"window.title":"seeded"}');
});

test('a running OpenVision blocks upgrade, rollback and uninstall', linux, async () => {
  const c = await context();
  await installRelease(c, '1.0.0'); await installRelease(c, '1.1.0');
  await mkdir(join(data(c, '1.1.0'), 'local'), { recursive: true });
  await symlink(`${hostname()}-${process.pid}`, join(data(c, '1.1.0'), 'local/SingletonLock'));
  await assert.rejects(installRelease(c, '1.2.0'), /Quit it first/);
  await assert.rejects(rollback(c), /Quit it first/);
  await assert.rejects(uninstall(c), /Quit it first/);
  assert.equal(await readlink(join(c.root, 'current')), 'versions/1.1.0');
});

test('only the current and previous versions are kept', linux, async () => {
  const c = await context();
  for (const version of ['1.0.0', '1.1.0', '1.2.0']) await installRelease(c, version);
  assert.deepEqual((await readdir(join(c.root, 'versions'))).sort(), ['1.1.0', '1.2.0']);
  assert.equal((await readdir(join(c.root, 'backups'))).length, 2);
});

test('uninstall keeps profiles and backups, removes the launcher entry; reinstall adopts the kept profile; purge removes all', linux, async () => {
  const c = await context();
  await installRelease(c, '1.0.0'); await seed(data(c, '1.0.0'));
  await installRelease(c, '1.1.0');
  const result = await uninstall(c);
  assert.deepEqual(result.removed.length, 2);
  assert.equal(await exists(join(c.xdgDataHome, 'applications/openvision.desktop')), false);
  assert.equal(await exists(join(c.xdgDataHome, 'icons/hicolor/256x256/apps/openvision.png')), false);
  assert.equal(await exists(join(c.root, 'versions')), false);
  assert.equal(await exists(join(c.root, 'current')), false);
  const kept = result.retained.find(item => item.current);
  assert.equal(kept.version, '1.1.0');
  assert.equal(await readFile(join(c.root, kept.path, 'local/User/settings.json'), 'utf8'), '{"window.title":"seeded"}');
  assert.equal((await readdir(join(c.root, 'backups'))).length, 1);
  const again = await installRelease(c, '1.2.0');
  assert.equal(again.action, 'install');
  assert.equal(await readFile(join(data(c, '1.2.0'), 'local/User/settings.json'), 'utf8'), '{"window.title":"seeded"}');
  await uninstall({ ...c, purge: true });
  assert.equal(await exists(c.root), false);
  assert.equal(await exists(join(c.xdgDataHome, 'applications/openvision.desktop')), false);
});

test('uninstall leaves a launcher entry written by something else alone', linux, async () => {
  const c = await context();
  await installRelease(c, '1.0.0');
  const entry = join(c.xdgDataHome, 'applications/openvision.desktop');
  await writeFile(entry, '[Desktop Entry]\nExec="/opt/portable/OpenVision" %F\n');
  const result = await uninstall(c);
  assert.deepEqual(result.removed, []);
  assert.match(await readFile(entry, 'utf8'), /portable/);
});

test('foreign directories and concurrent installers are refused', linux, async () => {
  const c = await context();
  await mkdir(c.root, { recursive: true }); await writeFile(join(c.root, 'keep.txt'), 'user file');
  await assert.rejects(installRelease(c, '1.0.0'), /not an OpenVision install root/);
  await assert.rejects(uninstall({ ...c, purge: true }), /not an OpenVision install root/);
  assert.equal(await readFile(join(c.root, 'keep.txt'), 'utf8'), 'user file');
  const d = await context();
  await installRelease(d, '1.0.0');
  const stat = await readFile('/proc/self/stat', 'utf8');
  await writeFile(join(d.root, 'install.lock'), JSON.stringify({ pid: process.pid, start: stat.slice(stat.lastIndexOf(')') + 2).split(' ')[19] }));
  await assert.rejects(installRelease(d, '1.1.0'), /Another OpenVision installer/);
  await assert.rejects(install({ ...d, archive: releases['1.1.0'].archive, allowedSigners: signer.allowedSigners, root: 'relative/path' }), /absolute path/);
});
