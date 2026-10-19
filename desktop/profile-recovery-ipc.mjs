import { app, ipcMain } from 'electron';
import { assertWorkbenchSender } from '../../../desktop/workbench-sender.mjs';
import { acknowledge, inspectProfile } from '../../../desktop/profile-recovery.mjs';

// Main-process owner of startup recovery guidance. The workbench asks once per
// window; inspection is read-only and acknowledgement accepts only current ids.
const expected = new URL('./vs/code/electron-sandbox/workbench/workbench.html', import.meta.url);
const profile = () => ({ userDataDir: app.getPath('userData'), profileHome: process.env.VSCODE_OPENVISION_PROFILE_HOME });

ipcMain.handle('vscode:openvision-profile-recovery', async (event, request) => {
  assertWorkbenchSender(event, expected);
  try {
    const folders = Array.isArray(request?.folders) ? request.folders.filter(folder => typeof folder === 'string') : [];
    const findings = await inspectProfile({ ...profile(), folders });
    if (request?.action === 'inspect') return { ok: true, findings };
    if (request?.action === 'acknowledge' && Array.isArray(request.ids))
      return { ok: true, acknowledged: await acknowledge({ ...profile(), ids: request.ids.filter(id => typeof id === 'string'), current: findings }) };
    throw new Error('Invalid profile recovery request.');
  } catch (error) { return { ok: false, error: error.message }; }
});
