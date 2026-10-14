import { createHash } from 'node:crypto';
import { open, mkdir, writeFile, lstat } from 'node:fs/promises';
import { basename, join, resolve } from 'node:path';

const CHUNK_BYTES = 48 * 1024 * 1024;
const archive = resolve(process.argv[2] ?? '');
if (!process.argv[2]) throw Error('Provide a verified portable ZIP.');
const directory = resolve(import.meta.dirname, '../downloads/windows-x64');
try { await lstat(directory); throw Error('Distribution directory already exists.'); }
catch (error) { if (error.code !== 'ENOENT') throw error; }
await mkdir(directory, { recursive: true });
const input = await open(archive, 'r');
const buffer = Buffer.alloc(CHUNK_BYTES), digest = createHash('sha256'), chunks = [];
try {
  const { size } = await input.stat();
  for (let offset = 0; offset < size; offset += CHUNK_BYTES) {
    const length = Math.min(CHUNK_BYTES, size - offset);
    let loaded = 0;
    while (loaded < length) {
      const { bytesRead } = await input.read(buffer, loaded, length - loaded, offset + loaded);
      if (!bytesRead) throw Error('Unexpected end of archive.');
      loaded += bytesRead;
    }
    const bytes = buffer.subarray(0, length);
    const file = `${basename(archive)}.part${String(chunks.length + 1).padStart(3, '0')}`;
    await writeFile(join(directory, file), bytes, { flag: 'wx' });
    digest.update(bytes);
    chunks.push({ file, bytes: length, sha256: createHash('sha256').update(bytes).digest('hex') });
  }
  const manifest = { name: 'OpenVision', version: '0.2.0-preview.2', platform: 'win32', arch: 'x64',
    archive: basename(archive), bytes: size, sha256: digest.digest('hex'), chunks };
  await writeFile(join(directory, 'manifest.json'), JSON.stringify(manifest, null, 2) + '\n');
  console.log(JSON.stringify(manifest, null, 2));
} finally { await input.close(); }
