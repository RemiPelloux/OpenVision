import { createRequire } from 'node:module';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { sharp } from '../tooling/dependencies.mjs';

const require = createRequire(import.meta.url);
const plist = require('../tooling/node_modules/plist');
const execute = promisify(execFile);

export async function macIcon(png) {
  const chunks = [];
  for (const [type, size] of [['icp4', 16], ['icp5', 32], ['icp6', 64], ['ic07', 128], ['ic08', 256], ['ic09', 512], ['ic10', 1024]]) {
    const image = await sharp(png).resize(size, size).png().toBuffer();
    const header = Buffer.alloc(8);
    header.write(type, 0, 'ascii');
    header.writeUInt32BE(header.length + image.length, 4);
    chunks.push(header, image);
  }
  const header = Buffer.alloc(8);
  header.write('icns', 0, 'ascii');
  header.writeUInt32BE(8 + chunks.reduce((sum, chunk) => sum + chunk.length, 0), 4);
  return Buffer.concat([header, ...chunks]);
}

export function brandMacPlist(text) {
  const data = plist.parse(text);
  Object.assign(data, { CFBundleName: 'OpenVision', CFBundleDisplayName: 'OpenVision',
    CFBundleExecutable: 'OpenVision', CFBundleIdentifier: 'local.openvision.source', CFBundleIconFile: 'OpenVision.icns' });
  for (const urlType of data.CFBundleURLTypes ?? [])
    if (urlType.CFBundleURLSchemes?.includes('cursor'))
      urlType.CFBundleURLSchemes = urlType.CFBundleURLSchemes.map(scheme => scheme === 'cursor' ? 'openvision-local' : scheme);
  return plist.build(data);
}

export async function installMacAssets(layout, png) {
  const path = join(layout.bundle, 'Contents/Info.plist');
  let text = await readFile(path, 'utf8');
  if (text.startsWith('bplist')) {
    if (process.platform !== 'darwin') throw new Error('Binary macOS plists must be converted on macOS.');
    text = (await execute('/usr/bin/plutil', ['-convert', 'xml1', '-o', '-', path])).stdout;
  }
  await writeFile(path, brandMacPlist(text));
  const icon = join(layout.bundle, 'Contents/Resources/OpenVision.icns');
  await mkdir(dirname(icon), { recursive: true });
  await writeFile(icon, await macIcon(png));
}

export async function signMacBundle(bundle) {
  await execute('/usr/bin/codesign', ['--force', '--deep', '--sign', '-', '--preserve-metadata=entitlements,flags', bundle]);
  await execute('/usr/bin/codesign', ['--verify', '--deep', '--strict', bundle]);
}
