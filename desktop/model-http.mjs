import { app, ipcMain, net } from 'electron';
import { createModelDiscoveryHandler } from '../../../desktop/model-discovery.mjs';
import { assertWorkbenchSender } from '../../../desktop/workbench-sender.mjs';
import { createPiImportHandler } from '../../../desktop/pi-import-host.mjs';

const channel = 'vscode:openvision-discover-models';
const expected = new URL('./vs/code/electron-sandbox/workbench/workbench.html', import.meta.url);
const discover = createModelDiscoveryHandler({ fetch: (url, options) => net.fetch(url, options) });
const piImport = createPiImportHandler({ userData: () => app.getPath('userData') });

ipcMain.handle(channel, async (event, configuration) => {
  assertWorkbenchSender(event, expected);
  return discover(event, configuration);
});

// Explicit, user-initiated pi import. The main process only reads the pi files;
// keys are returned to the workbench after confirmation and stored encrypted there.
ipcMain.handle('vscode:openvision-pi-import', async (event, request) => {
  assertWorkbenchSender(event, expected);
  return piImport(request);
});
