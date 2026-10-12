import { copyFile, readFile, writeFile, mkdir } from 'node:fs/promises';
import { join, dirname } from 'node:path';

export async function installCursorImport(root) {
  const out = join(root, 'source/app/out');
  await copyFile(join(root, 'desktop/import-ipc.mjs'), join(out, 'openvision-import-ipc.js'));
  const mainPath = join(out, 'main.js');
  const text = await readFile(mainPath, 'utf8');
  const statement = 'import "./openvision-import-ipc.js";';
  if (text.includes(statement)) return;
  const backup = join(root, 'backups/cursor-import-source/main.js');
  await mkdir(dirname(backup), { recursive: true });
  await copyFile(mainPath, backup, 1).catch(error => { if (error.code !== 'EEXIST') throw error; });
  await writeFile(mainPath, statement + '\n' + text);
}
