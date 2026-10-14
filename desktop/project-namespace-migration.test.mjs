import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, writeFile, readFile, symlink, rm, lstat } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { migrateProjectNamespace } from './project-namespace-migration.mjs';

async function fixture(t) {
  const root = await mkdtemp(path.join(os.tmpdir(), 'openvision-namespace-'));
  t.after(() => rm(root, { recursive: true, force: true }));
  return root;
}

test('imports project configuration without overwriting conflicts or touching ignore files; repeat is idempotent', async t => {
  const root = await fixture(t);
  for (const folder of ['rules', 'plans', 'agents', 'paste']) {
    await mkdir(path.join(root, '.cursor', folder), { recursive: true });
    await writeFile(path.join(root, '.cursor', folder, 'sample.txt'), folder);
  }
  await writeFile(path.join(root, '.cursor', 'mcp.json'), '{"mcpServers":{}}');
  await writeFile(path.join(root, '.cursorrules'), 'legacy rule');
  await writeFile(path.join(root, '.cursorignore'), 'private/');
  await mkdir(path.join(root, '.openvision', 'rules'), { recursive: true });
  await writeFile(path.join(root, '.openvision', 'rules', 'sample.txt'), 'keep mine');
  const first = await migrateProjectNamespace(root);
  assert.equal(first.copied, 5);
  assert.deepEqual(first.conflicts, [path.join(root, '.openvision', 'rules', 'sample.txt')]);
  assert.deepEqual(first.errors, []);
  assert.equal(await readFile(path.join(root, '.cursor', 'rules', 'sample.txt'), 'utf8'), 'rules');
  assert.equal(await readFile(path.join(root, '.openvision', 'rules', 'sample.txt'), 'utf8'), 'keep mine');
  assert.equal(await readFile(path.join(root, '.openvisionrules'), 'utf8'), 'legacy rule');
  assert.equal(await readFile(path.join(root, '.cursorignore'), 'utf8'), 'private/');
  await assert.rejects(lstat(path.join(root, '.openvisionignore')), { code: 'ENOENT' });
  const second = await migrateProjectNamespace(root);
  assert.equal(second.copied, 0);
  assert.equal(second.unchanged, 5);
  assert.deepEqual(second.conflicts, first.conflicts);
});

test('skips source and destination directory links, including Windows junctions', async t => {
  const root = await fixture(t), outside = await fixture(t);
  await mkdir(path.join(root, '.cursor', 'rules'), { recursive: true });
  await writeFile(path.join(root, '.cursor', 'rules', 'new.mdc'), 'rule');
  await mkdir(path.join(root, '.openvision'));
  await writeFile(path.join(outside, 'private.txt'), 'keep outside');
  const kind = process.platform === 'win32' ? 'junction' : 'dir';
  await symlink(outside, path.join(root, '.cursor', 'linked'), kind);
  await symlink(outside, path.join(root, '.openvision', 'rules'), kind);
  const result = await migrateProjectNamespace(root);
  assert.equal(result.copied, 0);
  assert.equal(result.skippedLinks.length, 2);
  assert.deepEqual(result.errors, []);
  await assert.rejects(lstat(path.join(outside, 'new.mdc')), { code: 'ENOENT' });
  await assert.rejects(lstat(path.join(root, '.openvision', 'linked')), { code: 'ENOENT' });
});

test('absent legacy directory does not create new files; root links and relative paths are rejected', async t => {
  const root = await fixture(t), outside = await fixture(t);
  assert.equal((await migrateProjectNamespace(root)).copied, 0);
  await assert.rejects(lstat(path.join(root, '.openvision')), { code: 'ENOENT' });
  await assert.rejects(migrateProjectNamespace('.'), /absolute/);
  const link = path.join(root, 'linked');
  await symlink(outside, link, process.platform === 'win32' ? 'junction' : 'dir');
  await assert.rejects(migrateProjectNamespace(link), /symbolic link/);
});
