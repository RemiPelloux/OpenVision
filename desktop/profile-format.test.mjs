import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { canOpen, markerName, migrateProfile, profileFormat, readProfileFormat } from './profile-format.mjs';

const temporary = async t => { const path = await mkdtemp(join(tmpdir(), 'openvision-profile-format-')); t.after(() => rm(path, { recursive: true, force: true })); return path; };

test('an unmarked profile is format 0 and migrates forward once', async t => {
  const data = await temporary(t);
  await writeFile(join(data, 'keep.txt'), 'user data');
  assert.deepEqual(await readProfileFormat(data), { format: 0, minimumReader: 0, marker: false });
  const first = await migrateProfile(data, { writtenBy: 'test' });
  assert.deepEqual(first.applied, [profileFormat]);
  const marker = JSON.parse(await readFile(join(data, markerName), 'utf8'));
  assert.equal(marker.format, profileFormat); assert.equal(marker.minimumReader, 0);
  const again = await migrateProfile(data, { writtenBy: 'test' });
  assert.deepEqual(again.applied, []);
  assert.equal(await readFile(join(data, markerName), 'utf8'), JSON.stringify(marker, null, 2) + '\n', 'idempotent');
  assert.equal(await readFile(join(data, 'keep.txt'), 'utf8'), 'user data');
});

test('newer profiles are tolerated only down to their minimum reader', async t => {
  const data = await temporary(t);
  await writeFile(join(data, markerName), JSON.stringify({ format: 3, minimumReader: 2 }));
  assert.equal(canOpen(2, await readProfileFormat(data)), true);
  assert.equal(canOpen(1, await readProfileFormat(data)), false);
  assert.equal((await migrateProfile(data, { target: 2 })).downgradeTolerated, true);
  await assert.rejects(migrateProfile(data, { target: 1 }), /needs a package of format 2/);
});

test('migration steps run in order and raise the minimum reader', async t => {
  const data = await temporary(t), ran = [];
  const registry = { 1: { minimumReader: 0, migrate: async () => ran.push(1) }, 2: { minimumReader: 2, migrate: async () => ran.push(2) } };
  const result = await migrateProfile(data, { target: 2, registry, writtenBy: 'n+2' });
  assert.deepEqual(ran, [1, 2]); assert.deepEqual(result.applied, [1, 2]);
  assert.deepEqual(await readProfileFormat(data).then(({ format, minimumReader }) => ({ format, minimumReader })), { format: 2, minimumReader: 2 });
  await assert.rejects(migrateProfile(await temporary(t), { target: 3, registry }), /No profile migration to format 3/);
});

test('corrupt markers are rejected instead of guessed', async t => {
  const data = await temporary(t);
  await writeFile(join(data, markerName), JSON.stringify({ format: 1, minimumReader: 2 }));
  await assert.rejects(readProfileFormat(data), /Invalid profile format marker/);
});
