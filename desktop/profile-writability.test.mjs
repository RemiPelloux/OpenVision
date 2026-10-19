import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, readFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { readableApp } from './recovered-source.mjs';
import { profileWritable, profileProblem } from './profile-writability.js';
import { profileWritabilityStartup, writabilityMarker } from './profile-writability-customization.mjs';

const original = await readFile(new URL('out/main.js', readableApp), 'utf8');
const failure = code => Object.assign(new Error(`${code}: probe`), { code });

// Read-only fakes: the check may only stat and access, never write.
function fakeFs({ existing, accessError }) {
  const calls = [];
  return { calls, fs: {
    async stat(path) { calls.push(['stat', path]); if (!existing.includes(path)) throw failure('ENOENT'); return {}; },
    async access(path, mode) { calls.push(['access', path, mode]); if (accessError) throw failure(accessError); },
  } };
}

test('a writable profile starts without a dialog', async () => {
  const directory = await mkdtemp(join(tmpdir(), 'openvision-writable-'));
  try {
    const shown = [];
    assert.equal(await profileWritable(join(directory, 'missing/profile'), problem => shown.push(problem)), true);
    assert.equal(await profileWritable(directory, problem => shown.push(problem)), true);
    assert.deepEqual(shown, []);
  } finally { await rm(directory, { recursive: true }); }
});

test('read-only and permission-denied profiles show the path and remedy and stop startup', async () => {
  for (const code of ['EROFS', 'EACCES', 'EPERM']) {
    const { fs, calls } = fakeFs({ existing: ['/profiles/ro'], accessError: code });
    const shown = [], logged = [];
    assert.equal(await profileWritable('/profiles/ro', problem => shown.push(problem), fs, line => logged.push(line)), false);
    assert.equal(shown.length, 1);
    assert.equal(shown[0].type, 'error');
    assert.match(shown[0].message, /cannot start because its profile folder cannot be written/);
    assert.match(shown[0].detail, /^\/profiles\/ro\n/);
    assert.match(shown[0].detail, new RegExp(`\\(${code}\\)`));
    assert.match(shown[0].detail, /Nothing in the profile was changed/);
    assert.match(shown[0].detail, /--user-data-dir set to a writable folder/);
    assert.match(shown[0].detail, code === 'EROFS' ? /read-only file system/ : /permission to write/);
    assert.equal(logged.length, 1); assert.ok(logged[0].includes(shown[0].detail));
    assert.deepEqual(calls.map(call => call[0]), ['stat', 'access']);
  }
});

test('a missing profile is checked at its nearest existing parent', async () => {
  const { fs, calls } = fakeFs({ existing: ['/mnt/ro'], accessError: 'EROFS' });
  const shown = [];
  assert.equal(await profileWritable('/mnt/ro/a/profile', problem => shown.push(problem), fs, () => {}), false);
  assert.deepEqual(calls.filter(call => call[0] === 'access').map(call => call[1]), ['/mnt/ro']);
  assert.match(shown[0].detail, /^\/mnt\/ro\/a\/profile\n\(checked at \/mnt\/ro\)/);
  assert.deepEqual(profileProblem('/p', '/p', failure('EROFS')).buttons, ['Close']);
});

test('other probe errors leave startup to its existing handling', async () => {
  const { fs } = fakeFs({ existing: ['/profile'], accessError: 'EIO' });
  const shown = [];
  assert.equal(await profileWritable('/profile', problem => shown.push(problem), fs, () => {}), true);
  assert.deepEqual(shown, []);
});

test('startup patch runs the check before any profile write, is idempotent and rejects drift', () => {
  const patched = profileWritabilityStartup(original);
  assert.equal(patched.split(writabilityMarker).length, 3);
  assert.equal(profileWritabilityStartup(patched), patched);
  const check = patched.indexOf('await openvisionProfileWritable(r.userDataPath');
  assert.ok(check > patched.indexOf('const [t, n, r, s, i, a, o, l] = this.createServices(e);'));
  assert.ok(check < patched.indexOf('await this.initServices(r, l, s, i, o);'));
  assert.match(patched.slice(check, check + 200), /FAe\.showMessageBoxSync\(_8\(d, o\)\.options\)[^]*UAe\.exit\(1\);\s*return;/);
  assert.match(patched, /^\/\* OpenVision profile writability check v1 \*\/\nimport \{profileWritable as openvisionProfileWritable\} from "\.\/openvision-profile-writability\.js";/);
  assert.throws(() => profileWritabilityStartup(original.replace('await this.initServices(r, l, s, i, o);', 'await this.initServices(r, l, s, i);')), /startup owner changed/);
  assert.throws(() => profileWritabilityStartup(original.replace('n.code === "EACCES" || n.code === "EPERM"', 'n.code === "EACCES"')), /data-dir handler changed/);
  assert.throws(() => profileWritabilityStartup(patched.replace(writabilityMarker, '')), /partially applied/);
});
