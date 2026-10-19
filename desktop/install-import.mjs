import { copyFile, readFile, writeFile, mkdir } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { installImportOwner } from './import-owner-customization.mjs';
import { keepRegisteredExtensionDirectories } from './import-extension-watcher-customization.mjs';

export async function installCursorImport(root) {
  const out = join(root, 'source/app/out');
  await copyFile(join(root, 'desktop/import-ipc.mjs'), join(out, 'openvision-import-ipc.js'));
  const sharedPath = join(out, 'vs/code/electron-utility/sharedProcess/sharedProcessMain.js');
  const shared = await readFile(sharedPath, 'utf8'), watched = keepRegisteredExtensionDirectories(shared);
  if (watched !== shared) await writeFile(sharedPath, watched);
  const mainPath = join(out, 'main.js');
  const before = await readFile(mainPath, 'utf8');
  const text = installImportOwner(before);
  const statement = 'import "./openvision-import-ipc.js";';
  const after = text.includes(statement) ? text : statement + '\n' + text;
  if (before === after) return;
  const backup = join(root, 'backups/cursor-import-source/main.js');
  await mkdir(dirname(backup), { recursive: true });
  await copyFile(mainPath, backup, 1).catch(error => { if (error.code !== 'EEXIST') throw error; });
  await writeFile(mainPath, after);
}
