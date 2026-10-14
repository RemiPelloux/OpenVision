import { readdir, mkdir, link, symlink, writeFile, realpath, stat } from 'node:fs/promises';
import { join } from 'node:path';
import { fileHash } from './import-files.mjs';

// Disposable native verification only. Unchanged directories are read through
// junctions; patched files are new files, never writes through a shared link.
export async function createRuntimeOverlay(source, destination, overrides) {
  const records = [];
  async function visit(input, output, relative = '') {
    await mkdir(output);
    for (const entry of await readdir(input, { withFileTypes: true })) {
      const name = relative ? `${relative}/${entry.name}` : entry.name;
      const from = join(input, entry.name), to = join(output, entry.name);
      if (overrides.has(name)) {
        await writeFile(to, overrides.get(name), { flag: 'wx' });
        records.push({ path: name, original: await fileHash(from), instrumented: await fileHash(to) });
      } else if ([...overrides.keys()].some(path => path.startsWith(`${name}/`))) {
        await visit(await realpath(from), to, name);
      } else if ((await stat(from)).isDirectory()) {
        await symlink(await realpath(from), to, process.platform === 'win32' ? 'junction' : 'dir');
      } else await link(from, to);
    }
  }
  for (const name of overrides.keys()) {
    if (name.startsWith('/') || name.includes('\\') || name.split('/').some(part => !part || part === '..'))
      throw new Error('Verification override must be a relative slash-separated file path');
  }
  await visit(source, destination);
  if (records.length !== overrides.size) throw new Error('Verification overrides were not all installed');
  return { executable: join(destination, 'OpenVision.exe'), records };
}
