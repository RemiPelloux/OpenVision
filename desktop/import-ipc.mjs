import { ipcMain } from 'electron';
import { fileURLToPath } from 'node:url';
import { randomUUID } from 'node:crypto';
import { defaults, cursorProfiles, planImport, summarize } from '../../../desktop/cursor-import.mjs';
import { applyImport, restoreImport } from '../../../desktop/import-transaction.mjs';
import { assertWorkbenchSender } from '../../../desktop/workbench-sender.mjs';

const root = fileURLToPath(new URL('../../../', import.meta.url));
const expected = new URL('./vs/code/electron-sandbox/workbench/workbench.html', import.meta.url);
const previews = new Map();
let busy = false;

ipcMain.handle('vscode:openvision-cursor-import', async (event, request) => {
  assertWorkbenchSender(event, expected);
  if (busy) return { ok: false, error: 'Another import operation is running.' };
  busy = true;
  try {
    if (request?.action === 'defaults') {
      const options = defaults(root);
      return { ok: true, options, profiles: await cursorProfiles(options.user) };
    }
    if (request?.action === 'preview') {
      const plan = await planImport({ ...request.options, root });
      const token = randomUUID();
      previews.clear();
      previews.set(token, { plan, sender: event.sender.id });
      return { ok: true, token, ...summarize(plan) };
    }
    if (request?.action === 'apply') {
      const preview = previews.get(request.token);
      previews.delete(request.token);
      if (!preview || preview.sender !== event.sender.id) throw new Error('Preview the import again before applying it.');
      return { ok: true, ...await applyImport(preview.plan) };
    }
    if (request?.action === 'restore' && typeof request.backup === 'string')
      return { ok: true, ...await restoreImport(root, request.backup) };
    throw new Error('Invalid import request.');
  } catch (error) { return { ok: false, error: error.message }; }
  finally { busy = false; }
});
