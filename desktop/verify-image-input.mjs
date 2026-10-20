// OV-704 native image-input matrix: npm run verify:image-input [-- --portable DIR]
// Through the local Agent and a loopback fixture provider (not inference):
// paste, drag and file attach; PNG, JPEG, WebP and GIF; an oversized and a
// corrupt file; a text-only model; removing an image before sending; Stop while
// an image request is in flight; restart with images in history; and the image
// files the composer stores in workspace storage.
import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { mkdir, mkdtemp, readdir, writeFile, stat } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { _electron } from '../tooling/browser.mjs';
import { verificationRuntime } from './verification-runtime.mjs';
import { verificationSettings } from './verification-profile.mjs';
import { linuxSandboxArguments } from './platform.mjs';
import { enterWorkspace, openChat } from './verification-workspace.mjs';
import { imageFixtures, imageParts } from './image-input-fixture.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const { layout, portable } = await verificationRuntime(root);
await mkdir(join(root, 'logs'), { recursive: true });
const directory = await mkdtemp(join(root, 'logs/image-input-'));
const profile = join(directory, 'profile'), project = join(directory, 'project'), images = join(directory, 'images');
await mkdir(join(profile, 'User'), { recursive: true }); await mkdir(project); await mkdir(images);
await writeFile(join(project, 'README.md'), '# image input fixture\n');
await writeFile(join(profile, 'User/settings.json'), JSON.stringify({ ...verificationSettings, 'git.openRepositoryInParentFolders': 'never' }));
const files = imageFixtures();
for (const [name, bytes] of Object.entries(files)) await writeFile(join(images, name), bytes);

const requests = [], errors = [], held = [];
let phase = 'setup';
const provider = createServer(async (request, response) => {
  if (request.url === '/v1/models') {
    response.setHeader('content-type', 'application/json');
    return response.end(JSON.stringify({ data: [{ id: 'fixture-vision', supports_vision: true }, { id: 'fixture-text', supports_vision: false }] }));
  }
  if (request.url !== '/v1/chat/completions') { response.statusCode = 404; return response.end(); }
  const chunks = []; for await (const chunk of request) chunks.push(chunk);
  const payload = JSON.parse(Buffer.concat(chunks));
  const record = { phase, model: payload.model, authorized: request.headers.authorization === 'Bearer fixture-key', ...imageParts(payload) };
  requests.push(record);
  response.writeHead(200, { 'Content-Type': 'text/event-stream' });
  const event = (delta, finish_reason = null) => response.write(`data: ${JSON.stringify({
    id: 'fixture-response', object: 'chat.completion.chunk', model: payload.model, choices: [{ index: 0, delta, finish_reason }] })}\n\n`);
  event({ role: 'assistant', content: `Verified ${phase}.` });
  if (phase === 'stop') { held.push(record); response.on('close', () => { record.closed = true; }); return; }
  event({}, 'stop'); response.end('data: [DONE]\n\n');
});
await new Promise(resolve => provider.listen(0, '127.0.0.1', resolve));

let app, page;
const result = { directory, platform: process.platform, success: false, ...(portable ? { portable } : {}), requests, errors, cases: {} };
async function launch() {
  const env = { ...process.env }; delete env.ELECTRON_RUN_AS_NODE;
  app = await _electron.launch({ executablePath: layout.executable, env, timeout: 60000,
    args: ['--user-data-dir', profile, '--extensions-dir', join(directory, 'extensions'),
      '--new-window', '--disable-updates', '--skip-welcome', '--skip-release-notes',
      '--disable-telemetry', '--disable-crash-reporter',
      ...(process.platform === 'linux' ? await linuxSandboxArguments(layout.host) : []), project] });
  page = await app.firstWindow();
  page.setDefaultTimeout(15000);
  page.on('pageerror', error => errors.push(error.message));
  await page.locator('.part.titlebar .openvision-local-profile').waitFor({ state: 'attached', timeout: 60000 });
  await enterWorkspace(page);
  await page.waitForTimeout(8000);
}
async function closeOwnedApp() {
  if (!app) return;
  const child = app.process();
  const exited = new Promise(resolve => child.once('exit', resolve));
  const closing = app.close();
  await app.windows()[0]?.getByText('Quit Anyway', { exact: true }).click({ timeout: 5000 }).catch(() => {});
  await closing;
  if (child.exitCode === null && child.signalCode === null) await exited;
  (result.hostExits ??= []).push({ exitCode: child.exitCode, signalCode: child.signalCode });
  app = undefined;
}
const composer = () => page.locator('.aislash-editor-input[contenteditable=true]').filter({ visible: true }).first();
async function selectModel(id) {
  await page.locator('.vscode-model-picker__trigger-markdown').filter({ visible: true }).first().click();
  await page.getByText(id, { exact: true }).last().click();
  await page.keyboard.press('Escape');
}
async function storedImages() {
  const storage = join(profile, 'User/workspaceStorage'), found = [];
  for (const workspace of await readdir(storage).catch(() => []))
    for (const name of await readdir(join(storage, workspace, 'images')).catch(() => []))
      found.push({ name, bytes: (await stat(join(storage, workspace, 'images', name))).size });
  return found.sort((a, b) => a.name.localeCompare(b.name));
}
// Image chips currently attached to the composer, read from the DOM.
async function attachedImages() {
  return page.evaluate(() => [...document.querySelectorAll('img')].filter(image => image.offsetParent &&
    /workspaceStorage|vscode-file|blob:|data:image/.test(image.src) && image.closest('.composer-bar, .aislash-editor-container, [class*=composer]'))
    .map(image => image.src.split('/').pop().slice(0, 80)));
}
async function settle() {
  await page.waitForTimeout(500);
  await page.locator('.stop-button').filter({ visible: true }).waitFor({ state: 'hidden', timeout: 30000 });
  await page.waitForTimeout(1000);
}
async function send(label, attach) {
  phase = label;
  const input = composer();
  await input.fill(`Reply Verified ${label}. Do not use tools.`);
  const stored = (await storedImages()).length;
  const notices = await notifications();
  if (attach) await attach(input);
  await page.waitForTimeout(2000);
  const entry = { attached: await attachedImages(), storedAdded: (await storedImages()).length - stored,
    newNotifications: (await notifications()).filter(text => !notices.includes(text)) };
  await writeFile(join(directory, `composer-${label}.html`), await page.locator('.part.auxiliarybar, .part.sidebar').first().innerHTML().catch(() => ''));
  const before = requests.length;
  await input.press('Enter');
  await settle();
  Object.assign(entry, { requests: requests.slice(before) });
  result.cases[label] = entry;
  return entry;
}
async function notifications() {
  return page.locator('.notifications-toasts .notification-list-item-message, .notifications-center .notification-list-item-message').allInnerTexts().catch(() => []);
}
async function fileInput() {
  const inputs = page.locator('input[type=file]');
  result.fileInputs = await inputs.count();
  return inputs.last();
}
const attachFiles = names => async () => (await fileInput()).setInputFiles(names.map(name => join(images, name)));
async function pasteClipboardImage(input) {
  await app.evaluate(({ clipboard, nativeImage }) => clipboard.writeImage(nativeImage.createFromBitmap(
    Buffer.alloc(40 * 30 * 4, 90), { width: 40, height: 30 })));
  await input.press('End'); await input.press('ControlOrMeta+v');
}
async function dropFile(input, name) {
  const bytes = files[name].toString('base64');
  await input.evaluate((element, { bytes, name }) => {
    const data = Uint8Array.from(atob(bytes), character => character.charCodeAt(0));
    const transfer = new DataTransfer();
    transfer.items.add(new File([data], name, { type: 'image/png' }));
    for (const type of ['dragenter', 'dragover', 'drop'])
      element.dispatchEvent(new DragEvent(type, { bubbles: true, cancelable: true, dataTransfer: transfer }));
  }, { bytes, name });
}

try {
  await launch();
  // JPEG is encoded by the app's own image codec; Node has no JPEG encoder.
  const jpeg = await app.evaluate(({ nativeImage }) => nativeImage.createFromBitmap(Buffer.alloc(48 * 32 * 4, 200), { width: 48, height: 32 }).toJPEG(85).toString('base64'));
  files['sample.jpg'] = Buffer.from(jpeg, 'base64');
  await writeFile(join(images, 'sample.jpg'), files['sample.jpg']);
  await page.locator('.part.titlebar a[aria-label$=" Settings"]').click();
  await page.locator('.cursor-settings-sidebar-cell-label').filter({ hasText: /^Models$/ }).locator('..').click();
  const settings = page.locator('.openvision-model-settings');
  await settings.getByRole('button', { name: 'Add Provider', exact: true }).click();
  await page.getByLabel('Provider Name', { exact: true }).fill('Image fixture');
  await page.getByLabel('API Base URL', { exact: true }).fill(`http://127.0.0.1:${provider.address().port}/v1`);
  await page.getByLabel('API Key', { exact: true }).fill('fixture-key');
  await page.locator('dialog').getByRole('button', { name: 'Save', exact: true }).click();
  await page.locator('dialog').waitFor({ state: 'detached' });
  await page.keyboard.press('Escape');
  await page.keyboard.press('ControlOrMeta+Shift+l');
  await selectModel('fixture-vision');

  const one = (entry, declared) => {
    assert.equal(entry.requests.length, 1, 'one request per send');
    return entry.requests[0].latest;
  };
  // Paste, drag and attach.
  assert.equal(one(await send('paste', pasteClipboardImage)).length, 1, 'pasted image sent');
  assert.equal(one(await send('drag', input => dropFile(input, 'sample.png'))).length, 1, 'dropped image sent');
  const formats = one(await send('formats', attachFiles(['sample.png', 'sample.jpg', 'sample.webp', 'sample.gif'])));
  assert.equal(formats.length, 4, 'four attached formats sent');
  assert.ok(formats.every(part => part.declared === part.sniffed), 'declared type matches the bytes');
  // Oversized: accepted, then recompressed to at most 1 MiB.
  const oversize = one(await send('oversize', attachFiles(['oversize.png'])));
  assert.equal(oversize.length, 1);
  assert.ok(oversize[0].bytes <= 1024 * 1024, `oversized image recompressed (${oversize[0].bytes} bytes)`);
  // Corrupt: nothing is sent and the user is told why.
  const corrupt = await send('corrupt', attachFiles(['corrupt.png']));
  assert.equal(one(corrupt).length, 0, 'a corrupt file is not sent');
  assert.ok(corrupt.newNotifications.some(text => /image/i.test(text)), `corrupt image explained: ${JSON.stringify(corrupt.newNotifications)}`);
  assert.deepEqual(errors, []);
  result.success = true;
} catch (error) {
  result.failure = error.stack;
  if (page) {
    await page.screenshot({ path: join(directory, 'failure.png') }).catch(() => {});
    await writeFile(join(directory, 'failure.txt'), await page.locator('body').innerText()).catch(() => {});
  }
  process.exitCode = 1;
} finally {
  try { await closeOwnedApp(); } catch (error) { result.success = false; result.cleanupFailure = error.stack; process.exitCode = 1; }
  provider.closeAllConnections(); await new Promise(resolve => provider.close(resolve));
  await writeFile(join(directory, 'result.json'), JSON.stringify(result, null, 2));
  console.log(JSON.stringify({ success: result.success, directory, failure: result.failure?.split('\n').slice(0, 2).join(' ') }, null, 2));
}
