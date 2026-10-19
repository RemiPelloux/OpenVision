import test from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import * as fs from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { readableApp } from './recovered-source.mjs';
import { fileWriteRestoreEntry, fileWriteRestoreMarker, installFileWriteRestore, restoreFailedFileWrites } from './file-write-restore-customization.mjs';

const original = fs.readFileSync(new URL(fileWriteRestoreEntry, readableApp), 'utf8');
const patched = restoreFailedFileWrites(original);
const runner = fileURLToPath(new URL('./file-write-restore-faults.cjs', import.meta.url));
const directory = fs.realpathSync(fs.mkdtempSync(join(tmpdir(), 'openvision-file-write-')));
test.after(() => fs.rmSync(directory, { recursive: true, force: true }));
const prlimit = spawnSync('prlimit', ['--version']).status === 0;

// The provider's doWriteFile method, as executed by the harness.
function method(text, name) {
  const start = text.indexOf('          async doWriteFile(t, n, r, s) {');
  let depth = 0, end = text.indexOf('{', start);
  for (; end < text.length; end++) { if (text[end] === '{') depth++; else if (text[end] === '}' && --depth === 0) break; }
  const file = join(directory, `${name}.js`);
  fs.writeFileSync(file, text.slice(start, end + 1));
  return file;
}
const variants = { original: method(original, 'original'), patched: method(patched, 'patched') };
function run(variant, target, size, previous, limit = 65536) {
  const result = spawnSync('prlimit', [`--fsize=${limit}`, process.execPath, runner, variants[variant], target, String(size), String(previous)],
    { encoding: 'utf8' });
  assert.equal(result.status, 0, result.stderr);
  return JSON.parse(result.stdout);
}

test('recovered provider write reports success with a torn file; patched write fails and keeps the saved bytes',
  { skip: !prlimit && 'Linux prlimit unavailable' }, () => {
    const torn = run('original', join(directory, 'original.txt'), 100000, 20000);
    assert.deepEqual(torn, { error: null, exists: true, size: 65536, previous: false, complete: false });
    const kept = run('patched', join(directory, 'patched.txt'), 100000, 20000);
    assert.equal(kept.error, 'EFBIG'); assert.equal(kept.previous, true, 'The previous bytes are written back');
    const created = run('patched', join(directory, 'created.txt'), 100000, -1);
    assert.equal(created.error, 'EFBIG'); assert.equal(created.exists, false, 'A file the failed write created is removed');
    const fits = run('patched', join(directory, 'fits.txt'), 30000, 20000);
    assert.deepEqual(fits, { error: null, exists: true, size: 30000, previous: false, complete: true });
  });

test('transform is idempotent, accepts the renamed MCP path and fails closed on drift', async () => {
  assert.equal(restoreFailedFileWrites(patched), patched);
  assert.equal(patched.split(fileWriteRestoreMarker).length, 2);
  const renamed = original.replace('a.endsWith(".cursor/mcp.json") && !X)', 'a.endsWith(".openvision/mcp.json") && !X)');
  assert.ok(restoreFailedFileWrites(renamed).includes('if (a.endsWith(".openvision/mcp.json") && !X)'));
  for (const changed of [original.replace('await this.write(i, 0, n, 0, n.byteLength),', 'await this.write(i, 0, n, 0, n.length),'),
    original.replace('return zDe(() => this.doWrite(t, n, r, s, i), 100, 3);', 'return this.doWrite(t, n, r, s, i);')])
    assert.throws(() => restoreFailedFileWrites(changed), /write contract changed/);
  const root = join(directory, 'install'), path = join(root, 'source/app', fileWriteRestoreEntry);
  fs.mkdirSync(join(path, '..'), { recursive: true }); fs.writeFileSync(path, original);
  await installFileWriteRestore(root); await installFileWriteRestore(root);
  assert.equal(fs.readFileSync(path, 'utf8'), patched);
  assert.equal(fs.readFileSync(join(root, 'backups/file-write-restore', fileWriteRestoreEntry), 'utf8'), original);
});
