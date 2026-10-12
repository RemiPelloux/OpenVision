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
