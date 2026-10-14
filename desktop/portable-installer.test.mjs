import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, copyFile, writeFile, readFile, access } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { spawnSync } from 'node:child_process';
import { createHash } from 'node:crypto';

const root = resolve(import.meta.dirname, '..');
const windows = { skip: process.platform !== 'win32' };
const digest = bytes => createHash('sha256').update(bytes).digest('hex');
async function fixture() {
  await mkdir(join(root, 'logs'), { recursive: true });
  const directory = await mkdtemp(join(root, 'logs/portable-installer-'));
  const payload = join(directory, 'downloads/windows-x64');
  await mkdir(payload, { recursive: true });
  await copyFile(join(root, 'Install-OpenVision.ps1'), join(directory, 'Install-OpenVision.ps1'));
  return { directory, payload, destination: join(directory, 'installed') };
}
function install(context) {
  return spawnSync('powershell.exe', ['-NoProfile', '-ExecutionPolicy', 'Bypass', '-File',
    join(context.directory, 'Install-OpenVision.ps1'), '-Destination', context.destination],
  { encoding: 'utf8', timeout: 30000, windowsHide: true });
}
async function manifest(context, options = {}) {
  const bytes = Buffer.from('installer corruption fixture; not an application');
  const file = options.file ?? 'OpenVision-0.2.0-preview.2-win32-x64.zip.part001';
  await writeFile(join(context.payload, 'manifest.json'), JSON.stringify({ version: '0.2.0-preview.2',
    bytes: bytes.length, sha256: digest(bytes), chunks: [{ file, bytes: bytes.length, sha256: digest(bytes) }] }));
  if (options.corrupt) await writeFile(join(context.payload, file), Buffer.alloc(bytes.length));
}
test('missing package parts fail without publishing a partial installation', windows, async () => {
  const context = await fixture(); await manifest(context);
  const result = install(context);
  assert.notEqual(result.status, 0); assert.equal(result.error, undefined);
  await assert.rejects(access(context.destination));
});
test('corrupted package part fails before extraction', windows, async () => {
  const context = await fixture(); await manifest(context, { corrupt: true });
  const result = install(context);
  assert.notEqual(result.status, 0); assert.match(result.stderr, /Missing or damaged package part/);
  await assert.rejects(access(context.destination));
});
test('manifest cannot read a part outside the payload', windows, async () => {
  const context = await fixture(); await manifest(context, { file: '../../private.txt' });
  const result = install(context);
  assert.notEqual(result.status, 0); assert.match(result.stderr, /Invalid package part name/);
  await assert.rejects(access(context.destination));
});
test('unrelated destination is preserved without attempting installation', windows, async () => {
  const context = await fixture(); await manifest(context);
  await mkdir(context.destination); await writeFile(join(context.destination, 'keep.txt'), 'user-owned bytes');
  const result = install(context);
  assert.notEqual(result.status, 0); assert.match(result.stderr, /Destination exists and is not an OpenVision package/);
  assert.equal(await readFile(join(context.destination, 'keep.txt'), 'utf8'), 'user-owned bytes');
});
test('an existing different release preserves profile and refuses overwriting', windows, async () => {
  const context = await fixture(); await manifest(context);
  await mkdir(context.destination);
  await writeFile(join(context.destination, 'openvision-package.json'), JSON.stringify({ name: 'OpenVision', version: 'old' }));
  await writeFile(join(context.destination, 'profile.txt'), 'private local profile');
  const result = install(context);
  assert.notEqual(result.status, 0); assert.match(result.stderr, /another or incomplete version/);
  assert.equal(await readFile(join(context.destination, 'profile.txt'), 'utf8'), 'private local profile');
});
