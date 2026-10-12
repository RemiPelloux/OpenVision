import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import { sharp } from '../tooling/dependencies.mjs';
import { macIcon, brandMacPlist, signMacBundle } from './native-assets.mjs';
import { mkdtemp, mkdir, writeFile, copyFile, symlink, rm } from 'node:fs/promises';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';

const require = createRequire(import.meta.url);
const plist = require('../tooling/node_modules/plist');

test('macOS branding preserves bundle version, document associations and unrelated URL schemes', () => {
  const original = { CFBundleName: 'Cursor', CFBundleVersion: '3.21.13', CFBundleExecutable: 'Cursor',
    CFBundleDocumentTypes: [{ CFBundleTypeName: 'Project', CFBundleTypeExtensions: ['code-workspace'] }],
    CFBundleURLTypes: [{ CFBundleURLSchemes: ['cursor', 'custom-scheme'] }] };
  const output = plist.parse(brandMacPlist(plist.build(original)));
  assert.equal(output.CFBundleExecutable, 'OpenVision');
  assert.equal(output.CFBundleIdentifier, 'local.openvision.source');
  assert.equal(output.CFBundleIconFile, 'OpenVision.icns');
  assert.equal(output.CFBundleVersion, original.CFBundleVersion);
  assert.deepEqual(output.CFBundleDocumentTypes, original.CFBundleDocumentTypes);
  assert.deepEqual(output.CFBundleURLTypes[0].CFBundleURLSchemes, ['openvision-local', 'custom-scheme']);
});

test('generated ICNS contains correctly sized PNG representations and valid chunk lengths', async () => {
  const png = await sharp({ create: { width: 256, height: 256, channels: 4, background: '#14764f' } }).png().toBuffer();
  const icon = await macIcon(png);
  assert.equal(icon.toString('ascii', 0, 4), 'icns');
  assert.equal(icon.readUInt32BE(4), icon.length);
  const sizes = [];
  let offset = 8;
  while (offset < icon.length) {
    const length = icon.readUInt32BE(offset + 4);
    assert.ok(length > 8 && offset + length <= icon.length);
    const metadata = await sharp(icon.subarray(offset + 8, offset + length)).metadata();
    assert.equal(metadata.format, 'png'); assert.equal(metadata.width, metadata.height);
    sizes.push(metadata.width); offset += length;
  }
  assert.equal(offset, icon.length);
  assert.deepEqual(sizes, [16, 32, 64, 128, 256, 512, 1024]);
});

test('macOS signs and executes a real native fixture with an external editable-source resource link', { skip: process.platform !== 'darwin' }, async t => {
  const root = await mkdtemp(join(tmpdir(), 'openvision-sign-'));
  t.after(() => rm(root, { recursive: true, force: true }));
  const bundle = join(root, 'OpenVision.app');
  const executable = join(bundle, 'Contents/MacOS/OpenVision');
  await mkdir(join(bundle, 'Contents/MacOS'), { recursive: true });
  await mkdir(join(bundle, 'Contents/Resources'));
  await mkdir(join(root, 'source/app'), { recursive: true });
  await writeFile(join(root, 'source/app/package.json'), '{"name":"fixture"}');
  await symlink(join(root, 'source/app'), join(bundle, 'Contents/Resources/app'), 'dir');
  await copyFile(process.execPath, executable);
  await writeFile(join(bundle, 'Contents/Info.plist'), plist.build({ CFBundleName: 'OpenVision', CFBundleExecutable: 'OpenVision',
    CFBundleIdentifier: 'local.openvision.fixture', CFBundlePackageType: 'APPL', CFBundleVersion: '1.0' }));
  await signMacBundle(bundle);
  assert.equal((await promisify(execFile)(executable, ['--version'])).stdout.trim(), process.version);
});
