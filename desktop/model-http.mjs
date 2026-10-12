import { ipcMain, net } from 'electron';
import { normalizeBaseUrl, parseModels } from './openvision-model-providers.js';

const channel = 'vscode:openvision-discover-models';
const expectedPath = new URL('./vs/code/electron-sandbox/workbench/workbench.html', import.meta.url).pathname.toLowerCase();

ipcMain.handle(channel, async (event, configuration) => {
  const sender = new URL(event.senderFrame.url);
  if (event.senderFrame !== event.sender.mainFrame || sender.protocol !== 'vscode-file:' ||
      sender.hostname !== 'vscode-app' || decodeURIComponent(sender.pathname).toLowerCase() !== decodeURIComponent(expectedPath))
    throw new Error('Model discovery is available only to the OpenVision workbench.');
  try {
    if (!configuration || typeof configuration.url !== 'string' || typeof configuration.key !== 'string')
      throw new Error('Invalid provider connection.');
    const base = normalizeBaseUrl(configuration.url);
    const response = await net.fetch(`${base}/models`, {
      method: 'GET', redirect: 'error', signal: AbortSignal.timeout(20000),
      headers: configuration.key ? { Authorization: `Bearer ${configuration.key}` } : {},
    });
    if (!response.ok) return { ok: false, error: `Model discovery failed (HTTP ${response.status}). Check the URL, key and provider access.` };
    const reader = response.body.getReader();
    const chunks = [];
    let bytes = 0;
    try {
      for (;;) {
        const { value, done } = await reader.read();
        if (done) break;
        bytes += value.byteLength;
        if (bytes > 4 * 1024 * 1024) throw new Error('The model list exceeds the supported response size (4 MiB).');
        chunks.push(Buffer.from(value));
      }
    } finally { await reader.cancel().catch(() => {}); }
    let body;
    try { body = JSON.parse(Buffer.concat(chunks).toString('utf8')); }
    catch { return { ok: false, error: 'The provider returned invalid JSON.' }; }
    const models = parseModels(body);
    return { ok: true, data: models.map(model => ({ id: model.id })) };
  } catch (error) {
    const known = error.message === 'The model list exceeds the supported response size (4 MiB).' ||
      error.message.startsWith('The provider ');
    return { ok: false, error: known ? error.message : 'Connection failed. Check the API base URL and network.' };
  }
});
