import { constants } from 'node:fs';
import { copyFile, lstat, mkdir, open, readdir } from 'node:fs/promises';
import path from 'node:path';

async function statOrMissing(file) {
  try { return await lstat(file); }
  catch (error) { if (error.code === 'ENOENT') return undefined; throw error; }
}

async function identicalFiles(source, destination, size) {
  const input = await open(source, constants.O_RDONLY | (constants.O_NOFOLLOW ?? 0));
  let output;
  try {
    output = await open(destination, constants.O_RDONLY | (constants.O_NOFOLLOW ?? 0));
    const left = Buffer.allocUnsafe(64 * 1024), right = Buffer.allocUnsafe(64 * 1024);
    for (let offset = 0; offset < size;) {
      const length = Math.min(left.length, size - offset);
      const a = await input.read(left, 0, length, offset);
      const b = await output.read(right, 0, length, offset);
      if (a.bytesRead !== length || b.bytesRead !== length || !left.subarray(0, length).equals(right.subarray(0, length))) return false;
      offset += length;
    }
    return true;
  } finally { await input.close(); if (output) await output.close(); }
}

/** Additively import one explicit project's legacy configuration. Never follows directory links. */
export async function migrateProjectNamespace(project) {
  if (typeof project !== 'string' || !path.isAbsolute(project)) throw new TypeError('An absolute project directory is required');
  const root = path.resolve(project);
  const result = { project: root, copied: 0, unchanged: 0, conflicts: [], skippedLinks: [], errors: [] };
  const rootStat = await lstat(root);
  if (rootStat.isSymbolicLink() || !rootStat.isDirectory()) throw new Error('Project must be a directory, not a symbolic link');

  async function importEntry(source, destination) {
    try {
      const from = await statOrMissing(source);
      if (!from) return;
      if (from.isSymbolicLink()) { result.skippedLinks.push(source); return; }
      let to = await statOrMissing(destination);
      if (to?.isSymbolicLink()) { result.skippedLinks.push(destination); return; }
      if (from.isDirectory()) {
        if (to && !to.isDirectory()) { result.conflicts.push(destination); return; }
        if (!to) {
          try { await mkdir(destination); }
          catch (error) { if (error.code !== 'EEXIST') throw error; }
          to = await lstat(destination);
          if (to.isSymbolicLink()) { result.skippedLinks.push(destination); return; }
          if (!to.isDirectory()) { result.conflicts.push(destination); return; }
        }
        for (const entry of await readdir(source)) await importEntry(path.join(source, entry), path.join(destination, entry));
      } else if (from.isFile()) {
        if (to) {
          if (to.isFile() && to.size === from.size && await identicalFiles(source, destination, from.size)) result.unchanged++;
          else result.conflicts.push(destination);
          return;
        }
        try { await copyFile(source, destination, constants.COPYFILE_EXCL); result.copied++; }
        catch (error) { if (error.code === 'EEXIST') result.conflicts.push(destination); else throw error; }
      } else result.errors.push({ path: source, reason: 'Unsupported filesystem entry' });
    } catch (error) { result.errors.push({ path: source, reason: error.code || error.message }); }
  }

  await importEntry(path.join(root, '.cursor'), path.join(root, '.openvision'));
  await importEntry(path.join(root, '.cursorrules'), path.join(root, '.openvisionrules'));
  return result;
}
