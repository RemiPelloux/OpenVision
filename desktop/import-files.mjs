import { lstat, readdir, readFile, realpath } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { createReadStream } from 'node:fs';
import { isAbsolute, relative, resolve, join, sep } from 'node:path';

export const digest = data => createHash('sha256').update(data).digest('hex');
export async function fileHash(path) {
  try {
    const info = await lstat(path);
    if (!info.isFile() || info.isSymbolicLink()) throw new Error(`Expected a regular file: ${path}`);
    const hash = createHash('sha256');
    for await (const chunk of createReadStream(path)) hash.update(chunk);
    return hash.digest('hex');
  } catch (error) { if (error.code === 'ENOENT') return null; throw error; }
}
export async function optionalFile(path) {
  try {
    const info = await lstat(path);
    if (!info.isFile() || info.isSymbolicLink()) throw new Error(`Expected a regular file: ${path}`);
    return await readFile(path);
  } catch (error) { if (error.code === 'ENOENT') return undefined; throw error; }
}

export function inside(base, path) {
  const part = relative(base, path);
  return part !== '..' && !part.startsWith(`..${sep}`) && !isAbsolute(part);
}

export async function safeDestination(base, path) {
  if (!inside(base, path)) throw new Error('Destination escapes the import directory.');
  const parts = relative(base, path).split(sep).filter(Boolean);
  let current = resolve(base);
  for (const part of ['', ...parts]) {
    current = join(current, part);
    try {
      if ((await lstat(current)).isSymbolicLink()) throw new Error(`Import cannot write through a symbolic link: ${current}`);
    } catch (error) { if (error.code !== 'ENOENT') throw error; }
  }
  // Check existing ancestors above the base as well.
  let parent = base;
  for (;;) {
    try {
      if (resolve(await realpath(parent)).toLowerCase() !== resolve(parent).toLowerCase())
        throw new Error(`Import destination has a redirected ancestor: ${parent}`);
      break;
    } catch (error) { if (error.code !== 'ENOENT') throw error; }
    const next = resolve(parent, '..');
    if (next === parent) break;
    parent = next;
  }
}

export async function tree(path) {
  let entries;
  try {
    if ((await lstat(path)).isSymbolicLink()) throw new Error(`Import cannot follow a symbolic link: ${path}`);
    entries = await readdir(path, { withFileTypes: true });
  } catch (error) { if (error.code === 'ENOENT') return []; throw error; }
  const files = [];
  for (const entry of entries.sort((a, b) => a.name.localeCompare(b.name))) {
    const file = join(path, entry.name);
    if (entry.isSymbolicLink()) throw new Error(`Import cannot follow a symbolic link: ${file}`);
    if (entry.isDirectory()) files.push(...await tree(file));
    else if (entry.isFile()) files.push(file);
    else throw new Error(`Unsupported import file: ${file}`);
  }
  return files;
}
