import { copyFile, mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';

// A read-only or permission-denied profile made the 3.21.13 main process exit
// with code 1 before any window, without a message. Check the profile after the
// environment is resolved and before services write to it; show a native error
// dialog with the path and remedy, then exit 1 without touching the profile.
export const writabilityMarker = '/* OpenVision profile writability check v1 */';

const startupBefore = `            this.removeLocalModeDataImportTokenFromProcessArgs();
            const [t, n, r, s, i, a, o, l] = this.createServices(e);
            try {
              try {
                await this.initServices(r, l, s, i, o);`;

const startupAfter = `            this.removeLocalModeDataImportTokenFromProcessArgs();
            const [t, n, r, s, i, a, o, l] = this.createServices(e);
            ${writabilityMarker}
            if (!(await openvisionProfileWritable(r.userDataPath, (d) => FAe.showMessageBoxSync(_8(d, o).options)))) {
              UAe.exit(1);
              return;
            }
            try {
              try {
                await this.initServices(r, l, s, i, o);`;

const importLine = 'import {profileWritable as openvisionProfileWritable} from "./openvision-profile-writability.js";';

export function profileWritabilityStartup(text) {
  if (text.includes(writabilityMarker)) {
    if (text.split(writabilityMarker).length !== 3 || text.split(importLine).length !== 2)
      throw new Error('Profile writability patch is partially applied');
    return text;
  }
  // The single startup owner: Electron's dialog and app imports and its existing data-dir handler.
  if (!text.includes('import { app as UAe, dialog as FAe } from "electron";')) throw new Error('Main startup imports changed');
  if (!/handleStartupDataDirError\(e, t, n\) \{\s*if \(n\.code === "EACCES" \|\| n\.code === "EPERM"\)/.test(text))
    throw new Error('Main startup data-dir handler changed');
  if (!/^function _8\(e, t\) \{/m.test(text)) throw new Error('Main dialog option owner changed');
  const at = text.indexOf(startupBefore);
  if (at < 0 || text.indexOf(startupBefore, at + 1) >= 0) throw new Error('Main startup owner changed; profile writability patch not applied');
  return `${writabilityMarker}\n${importLine}\n` + text.slice(0, at) + startupAfter + text.slice(at + startupBefore.length);
}

export async function installProfileWritability(root) {
  const path = join(root, 'source/app/out/main.js'), before = await readFile(path, 'utf8');
  const after = profileWritabilityStartup(before);
  if (after !== before) {
    const backup = join(root, 'backups/profile-writability/main.js');
    await mkdir(dirname(backup), { recursive: true });
    await copyFile(path, backup, 1).catch(error => { if (error.code !== 'EEXIST') throw error; });
    await writeFile(path, after);
  }
  await copyFile(join(root, 'desktop/profile-writability.js'), join(root, 'source/app/out/openvision-profile-writability.js'));
}
