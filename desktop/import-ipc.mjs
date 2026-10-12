import { ipcMain } from 'electron';
import { fileURLToPath } from 'node:url';
import { assertWorkbenchSender } from '../../../desktop/workbench-sender.mjs';
import { ImportPreview } from '../../../desktop/import-preview.mjs';

const root = fileURLToPath(new URL('../../../', import.meta.url));
const expected = new URL('./vs/code/electron-sandbox/workbench/workbench.html', import.meta.url);
const preview = new ImportPreview();
let busy = false;

ipcMain.handle('vscode:openvision-cursor-import', async (event, request) => {
  assertWorkbenchSender(event, expected);
  if (request?.action === 'release') {
    preview.release(event.sender, request.token);
    return { ok: true };
  }
  if (busy) return { ok: false, error: 'Another import operation is running.' };
  busy = true;
  try {
    if (request?.action === 'defaults') {
      const { defaults, cursorProfiles } = await import('../../../desktop/cursor-import.mjs');
      const options = defaults(root);
      return { ok: true, options, profiles: await cursorProfiles(options.user) };
    }
    if (request?.action === 'preview') {
      const token = preview.begin(event.sender);
      try {
        const { planImport, summarize } = await import('../../../desktop/cursor-import.mjs');
        const plan = await planImport({ ...request.options, root });
        if (!preview.complete(event.sender, token, plan)) throw new Error('Import window closed or reloaded.');
        return { ok: true, token, ...summarize(plan) };
      } catch (error) { preview.release(event.sender, token); throw error; }
    }
    if (request?.action === 'apply') {
      const { applyImport } = await import('../../../desktop/import-transaction.mjs');
      return { ok: true, ...await applyImport(preview.take(event.sender, request.token)) };
    }
    if (request?.action === 'restore' && typeof request.backup === 'string') {
      const { restoreImport } = await import('../../../desktop/import-transaction.mjs');
      return { ok: true, ...await restoreImport(root, request.backup) };
    }
    throw new Error('Invalid import request.');
  } catch (error) { return { ok: false, error: error.message }; }
  finally { busy = false; }
});
