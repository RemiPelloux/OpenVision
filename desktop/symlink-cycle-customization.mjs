import { readFile, writeFile, mkdir, copyFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { digest } from './import-files.mjs';

export const symlinkCycleMarker = '/* OpenVision symlink cycle as dangling v1 */';

// DiskFileSystemProvider.readdir stats every symbolic link through
// SymlinkSupport.stat. Upstream treats only ENOENT as a dangling link; a link
// cycle (ELOOP) throws, readdir logs it at trace level and drops the entry, so
// the Explorer neither shows nor can rename/delete it. A link that cannot be
// resolved is reported as dangling instead: the entry is listed as a link,
// opening it still fails, and rename/delete act on the link itself.
export const symlinkCycleBundles = Object.freeze([
  'source/app/out/main.js', // Explorer and editor file service (local file system channel)
  'source/app/out/vs/workbench/api/node/extensionHostProcess.js', // vscode.workspace.fs for file:// URIs
]);

const owner = /(symbolicLink: (\w+)\?\.isSymbolicLink\(\) \? \{ dangling: !1 \} : void 0,\s*\};\s*\} catch \((\w+)\) \{\s*if \()\3\.code === "ENOENT"( && \2\) return \{ stat: \2, symbolicLink: \{ dangling: !0 \} \};)/g;

export function treatSymlinkCycleAsDangling(text) {
  if (text.includes(symlinkCycleMarker)) {
    if (text.split(symlinkCycleMarker).length !== 2) throw Error('Symlink cycle customization applied more than once');
    return text;
  }
  const matches = [...text.matchAll(owner)];
  if (matches.length !== 1) throw Error(`SymlinkSupport.stat owner missing or ambiguous (${matches.length})`);
  return text.replace(owner, (_, head, linkStat, error, tail) =>
    `${head}(${error}.code === "ENOENT" || ${error}.code === "ELOOP" ${symlinkCycleMarker})${tail}`);
}

export async function installSymlinkCycleListing(root) {
  let changed = 0;
  for (const relative of symlinkCycleBundles) {
    const path = join(root, relative), before = await readFile(path, 'utf8');
    const after = treatSymlinkCycleAsDangling(before);
    if (before === after) continue;
    // Keep the first original of each distinct input; never overwrite a backup.
    const backup = join(root, 'backups/symlink-cycle', `${digest(before)}.js`);
    await mkdir(dirname(backup), { recursive: true });
    await copyFile(path, backup, 1).catch(error => { if (error.code !== 'EEXIST') throw error; });
    await writeFile(path, after);
    changed++;
  }
  if (changed) console.log('Symbolic link cycles are listed as dangling links in the Explorer and extension file system');
}
