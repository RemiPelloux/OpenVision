import { app, BrowserWindow, protocol } from 'electron';
import { pathToFileURL } from 'node:url';

protocol.registerSchemesAsPrivileged([{ scheme: 'vscode-file', privileges: { standard: true, secure: true } }]);
const settings = JSON.parse(process.env.OPENVISION_DISCOVERY_FIXTURE);
app.setPath('userData', settings.profile);
app.whenReady().then(async () => {
  await import(pathToFileURL(settings.adapter).href);
  const expected = new URL('./vs/code/electron-sandbox/workbench/workbench.html', pathToFileURL(settings.adapter));
  const workbench = new URL(`vscode-file://vscode-app${expected.pathname}`);
  protocol.handle('vscode-file', () => new Response('<!doctype html><title>Discovery IPC fixture</title><p>Disposable native fixture</p>',
    { headers: { 'Content-Type': 'text/html' } }));
  globalThis.openDiscoveryWindow = async () => {
    const window = new BrowserWindow({ show: false, webPreferences: { preload: settings.preload, sandbox: true } });
    await window.loadURL(workbench.href);
    return window.id;
  };
  await globalThis.openDiscoveryWindow();
}).catch(error => { console.error(error); app.exit(1); });
