import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, writeFile, readFile, rm, stat, utimes } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { cachedFile } from './build-cache.mjs';

test('cache validates bytes and recipe, preserves direct edits, and never caches failure', async t => {
  const root = await mkdtemp(join(tmpdir(), 'openvision-build-cache-'));
  t.after(() => rm(root, { recursive: true, force: true }));
  const options = { path: join(root, 'bundle.js'), marker: join(root, 'cache/result.json'), recipe: 'v1' };
  await writeFile(options.path, 'original');
  let calls = 0;
  const transform = async () => { calls++; await writeFile(options.path, (await readFile(options.path, 'utf8')).toUpperCase()); };
  assert.equal(await cachedFile(options, transform), true);
  assert.equal(await cachedFile(options, transform), false);
  assert.equal(calls, 1);
  const info = await stat(options.path);
  await writeFile(options.path, 'modified'); // Same size; restore mtime to prove content-based invalidation.
  await utimes(options.path, info.atime, info.mtime);
  assert.equal(await cachedFile(options, transform), true);
  assert.equal(await readFile(options.path, 'utf8'), 'MODIFIED');
  options.recipe = 'v2';
  await assert.rejects(cachedFile(options, async () => { throw new Error('invalid anchor'); }), /invalid anchor/);
  assert.equal(await cachedFile(options, transform), true);
  await writeFile(options.marker, '{broken');
  assert.equal(await cachedFile(options, transform), true);
  await rm(options.path);
  await assert.rejects(cachedFile(options, transform), /input missing/);
});

test('restorable outputs come back from the object store on a clean rebuild, verified by hash', async t => {
  const root = await mkdtemp(join(tmpdir(), 'openvision-build-cache-'));
  t.after(() => rm(root, { recursive: true, force: true }));
  const options = { path: join(root, 'bundle.js'), marker: join(root, 'cache/result.json'), recipe: 'v1', restorable: true };
  let calls = 0;
  const transform = async () => { calls++; await writeFile(options.path, (await readFile(options.path, 'utf8')).toUpperCase()); };
  await writeFile(options.path, 'original');
  assert.equal(await cachedFile(options, transform), true);
  // A clean rebuild re-creates the pristine input; the transform must not run again.
  await writeFile(options.path, 'original');
  assert.equal(await cachedFile(options, transform), 'restored');
  assert.equal(await readFile(options.path, 'utf8'), 'ORIGINAL');
  assert.equal(calls, 1);
  // A different input, a new recipe or a corrupted object all fall back to the transform.
  await writeFile(options.path, 'other');
  assert.equal(await cachedFile(options, transform), true);
  assert.equal(calls, 2);
  const { readdir } = await import('node:fs/promises');
  for (const name of await readdir(join(root, 'cache/objects'))) await writeFile(join(root, 'cache/objects', name), 'corrupt');
  await writeFile(options.path, 'other');
  assert.equal(await cachedFile(options, transform), true, 'an undecodable object falls back to the transform');
  assert.equal(await readFile(options.path, 'utf8'), 'OTHER');
  assert.equal(calls, 3);
  process.env.OPENVISION_NO_BUILD_CACHE = '1';
  t.after(() => { delete process.env.OPENVISION_NO_BUILD_CACHE; });
  await writeFile(options.path, 'other');
  assert.equal(await cachedFile(options, transform), true, 'the escape hatch always runs the transform');
  assert.equal(calls, 4);
});

test('non-restorable transforms always re-run on a clean rebuild', async t => {
  const root = await mkdtemp(join(tmpdir(), 'openvision-build-cache-'));
  t.after(() => rm(root, { recursive: true, force: true }));
  const options = { path: join(root, 'bundle.js'), marker: join(root, 'cache/result.json'), recipe: 'v1', restorable: false };
  let calls = 0;
  const transform = async () => { calls++; await writeFile(options.path, 'X' + await readFile(options.path, 'utf8')); };
  await writeFile(options.path, 'a');
  await cachedFile(options, transform);
  await writeFile(options.path, 'a');
  assert.equal(await cachedFile(options, transform), true);
  assert.equal(calls, 2);
});

test('pruning keeps only objects referenced by a marker', async t => {
  const { pruneCacheObjects } = await import('./build-cache.mjs');
  const root = await mkdtemp(join(tmpdir(), 'openvision-build-cache-'));
  t.after(() => rm(root, { recursive: true, force: true }));
  const options = { path: join(root, 'bundle.js'), marker: join(root, 'cache/result.json'), recipe: 'v1', restorable: true };
  await writeFile(options.path, 'one');
  await cachedFile(options, async () => writeFile(options.path, 'ONE'));
  await writeFile(options.path, 'two');
  await cachedFile(options, async () => writeFile(options.path, 'TWO'));
  assert.deepEqual(await pruneCacheObjects(join(root, 'cache')), { kept: 1, removed: 1 });
});

test('a restore requires the same code fingerprint, not only the same recipe', async t => {
  const root = await mkdtemp(join(tmpdir(), 'openvision-build-cache-'));
  t.after(() => rm(root, { recursive: true, force: true }));
  const options = { path: join(root, 'bundle.js'), marker: join(root, 'cache/result.json'), recipe: 'v1' };
  let calls = 0;
  const transform = async () => { calls++; await writeFile(options.path, (await readFile(options.path, 'utf8')) + '!'); };
  await writeFile(options.path, 'x');
  await cachedFile(options, transform);
  const marker = JSON.parse(await readFile(options.marker, 'utf8'));
  await writeFile(options.marker, JSON.stringify({ ...marker, fingerprint: 'older-code' }));
  await writeFile(options.path, 'x');
  assert.equal(await cachedFile(options, transform), true);
  assert.equal(calls, 2);
});
