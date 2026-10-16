import { createWriteStream } from 'node:fs';
import { chmod, lstat, mkdir, rename, rm } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { spawnSync } from 'node:child_process';
import { Readable } from 'node:stream';
import { pipeline } from 'node:stream/promises';
import { fileHash } from './import-files.mjs';
import { exists } from './source-assembly.mjs';

// The customizations target this exact recovered version; the Windows payload
// uses the same release (product commit e44a49c…014a0).
export const linuxInputs = {
  x64: { version: '3.21.13', file: 'Cursor-3.21.13-x86_64.AppImage', bytes: 304671224,
    sha256: '285eaa38de049c44322ec9365ff9d48337ddacf43234041248a723cb44ade25b',
    url: 'https://downloads.cursor.com/production/e44a49c17e334d442e58bbde931d791200f014a2/linux/x64/Cursor-3.21.13-x86_64.AppImage' },
};

async function download(input, path) {
  const response = await fetch(input.url);
  if (!response.ok) throw new Error(`Native input download failed: HTTP ${response.status}`);
  const partial = `${path}.${process.pid}.partial`;
  try {
    await pipeline(Readable.fromWeb(response.body), createWriteStream(partial, { flags: 'wx' }));
    if ((await lstat(partial)).size !== input.bytes || await fileHash(partial) !== input.sha256)
      throw new Error('Downloaded native input does not match the pinned size and SHA-256.');
    await rename(partial, path);
  } finally { await rm(partial, { force: true }); }
}

// Returns an installation directory accepted by `npm run prepare:desktop -- --installation`.
export async function linuxInstallation(root, context = process) {
  if (context.platform !== 'linux') throw new Error('Linux native input is only prepared on Linux.');
  const input = linuxInputs[context.arch];
  if (!input) throw new Error(`No pinned Linux input for ${context.arch}. Use --installation with Cursor ${linuxInputs.x64.version} files for this architecture.`);
  const directory = resolve(root, 'build/inputs', `cursor-${input.version}-linux-${context.arch}`);
  const installation = join(directory, 'squashfs-root/usr/share/cursor');
  if (await exists(join(installation, 'resources/app/package.json'))) return installation;
  await mkdir(directory, { recursive: true });
  const image = join(directory, input.file);
  if (!await exists(image)) {
    console.log(`Downloading pinned ${input.file} (${Math.round(input.bytes / 1048576)} MiB)`);
    await download(input, image);
  } else if (await fileHash(image) !== input.sha256) throw new Error(`Existing ${image} does not match the pinned SHA-256; remove it and retry.`);
  await chmod(image, 0o755);
  // The AppImage runtime extracts its own squashfs without FUSE; run only after the hash check.
  const extracted = spawnSync(image, ['--appimage-extract'], { cwd: directory, stdio: 'ignore', env: { ...process.env, APPIMAGE_EXTRACT_AND_RUN: '' } });
  if (extracted.error) throw extracted.error;
  if (extracted.status !== 0 || !await exists(join(installation, 'resources/app/package.json')))
    throw new Error('AppImage extraction failed; see docs/guides/linux.md for manual extraction.');
  return installation;
}
