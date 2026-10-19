import { copyFile, mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';

// Installs startup recovery guidance: the read-only main-process inspector
// (one import at the top of out/main.js) and the workbench notice (imported by
// the local profile module, which every workbench window loads). Idempotent:
// reapplying copies the same files and finds both imports already present.
export const recoveryMainImport = 'import "./openvision-profile-recovery-ipc.js";';
export const recoveryWorkbenchImport = "import './openvision-profile-recovery.js';";

export function addRecoveryMainImport(text) {
  const count = text.split(recoveryMainImport).length - 1;
  if (count > 1) throw new Error('Profile recovery import appears more than once in main.js');
  return count ? text : `${recoveryMainImport}\n${text}`;
}

export function addRecoveryWorkbenchImport(text) {
  const count = text.split(recoveryWorkbenchImport).length - 1;
  if (count > 1) throw new Error('Profile recovery import appears more than once in the local profile module');
  if (count) return text;
  const anchor = "import { importCursor } from './openvision-import-ui.js';";
  if (!text.includes(anchor)) throw new Error('Local profile module drifted: import anchor not found');
  return text.replace(anchor, `${recoveryWorkbenchImport}\n${anchor}`);
}

export async function installProfileRecovery(root) {
  const out = join(root, 'source/app/out'), workbench = join(out, 'vs/code/electron-sandbox/workbench');
  await copyFile(join(root, 'desktop/profile-recovery-ipc.mjs'), join(out, 'openvision-profile-recovery-ipc.js'));
  await copyFile(join(root, 'desktop/profile-recovery.js'), join(workbench, 'openvision-profile-recovery.js'));
  const mainPath = join(out, 'main.js'), before = await readFile(mainPath, 'utf8'), after = addRecoveryMainImport(before);
  if (after !== before) {
    const backup = join(root, 'backups/profile-recovery/main.js');
    await mkdir(dirname(backup), { recursive: true });
    await copyFile(mainPath, backup, 1).catch(error => { if (error.code !== 'EEXIST') throw error; });
    await writeFile(mainPath, after);
  }
  const profilePath = join(workbench, 'openvision-local-profile.js'), profile = await readFile(profilePath, 'utf8');
  const updated = addRecoveryWorkbenchImport(profile);
  if (updated !== profile) await writeFile(profilePath, updated);
}
