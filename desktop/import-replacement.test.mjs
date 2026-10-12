import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, writeFile, readFile, rename, rm } from 'node:fs/promises';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { replaceFile } from './import-transaction.mjs';
import { digest } from './import-files.mjs';

test('atomic import replacement retries transient locks without overwriting intervening edits', async t => {
  const root = await mkdtemp(join(tmpdir(), 'openvision-replace-'));
  t.after(() => rm(root, { recursive: true, force: true }));
  const path = join(root, 'settings.json');
  const temporary = join(root, 'settings.tmp');
  await writeFile(path, 'original');
  await writeFile(temporary, 'replacement');
  let attempts = 0;
  await replaceFile(temporary, path, { expectedHash: digest('original'), renameFile: async (...args) => {
    if (++attempts === 1) throw Object.assign(new Error('locked'), { code: 'EPERM' });
    await rename(...args);
  } });
  assert.equal(attempts, 2);
  assert.equal(await readFile(path, 'utf8'), 'replacement');
  await writeFile(temporary, 'next');
  await assert.rejects(replaceFile(temporary, path, {
    expectedHash: digest('replacement'), renameFile: async () => {
      await writeFile(path, 'user edit');
      throw Object.assign(new Error('locked'), { code: 'EBUSY' });
    },
  }), /File changed/);
  assert.equal(await readFile(path, 'utf8'), 'user edit');
});
