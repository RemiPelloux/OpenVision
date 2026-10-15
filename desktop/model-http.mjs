import { ipcMain, net } from 'electron';
import { createModelDiscoveryHandler } from '../../../desktop/model-discovery.mjs';
import { assertWorkbenchSender } from '../../../desktop/workbench-sender.mjs';

const channel = 'vscode:openvision-discover-models';
const expected = new URL('./vs/code/electron-sandbox/workbench/workbench.html', import.meta.url);
const discover = createModelDiscoveryHandler({ fetch: (url, options) => net.fetch(url, options) });

ipcMain.handle(channel, async (event, configuration) => {
  assertWorkbenchSender(event, expected);
  return discover(event, configuration);
});
