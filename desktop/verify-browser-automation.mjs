// OV-704 native check: npm run verify:browser-automation [-- --portable DIR]
// Establishes whether the local Agent is offered the bundled cursor-ide-browser
// MCP tools and, when it is, drives navigate/snapshot/click/type/screenshot
// against a loopback page through fixture-model tool calls: approval, Stop during
// a navigation, browser-tab cleanup and no non-loopback traffic. The model is a
// controlled local fixture, not inference.
import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { mkdir, mkdtemp, writeFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { _electron } from '../tooling/browser.mjs';
import { verificationRuntime } from './verification-runtime.mjs';
import { verificationSettings } from './verification-profile.mjs';
import { linuxSandboxArguments } from './platform.mjs';
import { enterWorkspace } from './verification-workspace.mjs';
import { createLoopbackProxy } from './network-capture.mjs';
import { fixtureBrowserReply, browserFinished } from './browser-automation-fixture.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const { layout, portable } = await verificationRuntime(root);
await mkdir(join(root, 'logs'), { recursive: true });
const directory = await mkdtemp(join(root, 'logs/browser-automation-'));
const profile = join(directory, 'profile'), project = join(directory, 'project');
const proxy = await createLoopbackProxy();
await mkdir(join(profile, 'User'), { recursive: true }); await mkdir(project);
await writeFile(join(project, 'README.md'), '# browser automation fixture\n');
await writeFile(join(profile, 'User/settings.json'), JSON.stringify({ ...verificationSettings,
  'git.openRepositoryInParentFolders': 'never',
  'http.proxy': `http://127.0.0.1:${proxy.port}`, 'http.proxySupport': 'override' }));

// Loopback page the Agent drives; /slow never answers until Stop.
const pageHits = [], slow = { requests: 0, closed: 0 };
const site = createServer((request, response) => {
  pageHits.push(request.url);
  if (request.url === '/slow') { slow.requests++; request.on('close', () => slow.closed++); return; }
  response.setHeader('content-type', 'text/html; charset=utf-8');
  response.end(`<!doctype html><title>OpenVision browser fixture</title>
<label>Name <input id="name" aria-label="Name"></label>
<button id="go" onclick="document.getElementById('out').textContent = 'Hello ' + document.getElementById('name').value">Greet</button>
<p id="out">waiting</p>`);
});
await new Promise(resolve => site.listen(0, '127.0.0.1', resolve));
const siteUrl = `http://127.0.0.1:${site.address().port}/`;

const requests = [], errors = [], state = { siteUrl, results: {} };
let phase = 'discover';
const provider = createServer(async (request, response) => {
  if (request.url === '/v1/models') {
    response.setHeader('content-type', 'application/json');
    return response.end(JSON.stringify({ data: [{ id: 'fixture-agent' }] }));
  }
  if (request.url !== '/v1/chat/completions') { response.statusCode = 404; return response.end(); }
  const chunks = []; for await (const chunk of request) chunks.push(chunk);
  const payload = JSON.parse(Buffer.concat(chunks));
  if (!requests.length) await writeFile(join(directory, 'first-request.json'), JSON.stringify(payload, null, 2));
  requests.push({ phase, model: payload.model, authorized: request.headers.authorization === 'Bearer fixture-key',
    tools: payload.tools?.map(tool => tool.function?.name), messages: payload.messages?.length });
  response.writeHead(200, { 'Content-Type': 'text/event-stream' });
  const event = (delta, finish_reason = null) => response.write(`data: ${JSON.stringify({
    id: 'fixture-response', object: 'chat.completion.chunk', model: payload.model, choices: [{ index: 0, delta, finish_reason }] })}\n\n`);
  fixtureBrowserReply(payload, event, phase, state);
  response.end('data: [DONE]\n\n');
});
await new Promise(resolve => provider.listen(0, '127.0.0.1', resolve));

let app, page;
const result = { directory, platform: process.platform, success: false, ...(portable ? { portable } : {}), requests, errors, pageHits, slow };
async function closeOwnedApp() {
  if (!app) return;
  const child = app.process();
  const exited = new Promise(resolve => child.once('exit', resolve));
  const closing = app.close();
  await app.windows()[0]?.getByText('Quit Anyway', { exact: true }).click({ timeout: 5000 }).catch(() => {});
  await closing;
  if (child.exitCode === null && child.signalCode === null) await exited;
  result.hostExit = { exitCode: child.exitCode, signalCode: child.signalCode };
  app = undefined;
}
async function submit(text) {
  const input = page.locator('.aislash-editor-input[contenteditable=true]').filter({ visible: true }).first();
  await input.fill(text); await input.press('Enter');
}
async function finished(name, timeout = 60000) {
  await page.getByText(browserFinished(name), { exact: true }).first().waitFor({ timeout });
  await page.locator('.stop-button').filter({ visible: true }).waitFor({ state: 'hidden' });
}
try {
  const env = { ...process.env }; delete env.ELECTRON_RUN_AS_NODE;
  app = await _electron.launch({ executablePath: layout.executable, env, timeout: 60000,
    args: ['--user-data-dir', profile, '--extensions-dir', join(directory, 'extensions'),
      '--new-window', '--disable-updates', '--skip-welcome', '--skip-release-notes',
      '--disable-telemetry', '--disable-crash-reporter', `--proxy-server=http://127.0.0.1:${proxy.port}`,
      ...(process.platform === 'linux' ? await linuxSandboxArguments(layout.host) : []), project] });
  page = await app.firstWindow();
  page.setDefaultTimeout(15000);
  page.on('pageerror', error => errors.push(error.message));
  await page.locator('.part.titlebar .openvision-local-profile').waitFor({ state: 'attached', timeout: 60000 });
  await enterWorkspace(page);
  await page.waitForTimeout(8000);
  await page.locator('.part.titlebar a[aria-label$=" Settings"]').click();
  await page.locator('.cursor-settings-sidebar-cell-label').filter({ hasText: /^Models$/ }).locator('..').click();
  const settings = page.locator('.openvision-model-settings');
  await settings.getByRole('button', { name: 'Add Provider', exact: true }).click();
  await page.getByLabel('Provider Name', { exact: true }).fill('Agent fixture');
  await page.getByLabel('API Base URL', { exact: true }).fill(`http://127.0.0.1:${provider.address().port}/v1`);
  await page.getByLabel('API Key', { exact: true }).fill('fixture-key');
  await page.locator('dialog').getByRole('button', { name: 'Save', exact: true }).click();
  await page.locator('dialog').waitFor({ state: 'detached' });
  await page.keyboard.press('Escape');
  await page.keyboard.press('ControlOrMeta+Shift+l');
  await page.locator('.vscode-model-picker__trigger-markdown').filter({ visible: true }).first().click();
  await page.getByText('fixture-agent', { exact: true }).last().click();
  await page.keyboard.press('Escape');

  // 1. Reachability: what the local Agent is offered.
  phase = 'discover';
  await submit('List the tools from cursor-ide-browser.');
  await finished('discover');
  result.reachability = state.results.discover;
  await page.screenshot({ path: join(directory, 'discover.png') });
  assert.ok(result.reachability, 'Discovery produced no result');
  result.reachable = result.reachability.tools.includes('browser_navigate');
  result.external = proxy.events.filter(event => !event.allowed).map(({ method, host, port, url }) => ({ method, host, port, url }));
  assert.ok(requests.every(request => request.model === 'fixture-agent' && request.authorized));
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
  for (const server of [provider, site]) { server.closeAllConnections(); await new Promise(resolve => server.close(resolve)); }
  await proxy.close();
  result.state = state;
  await writeFile(join(directory, 'result.json'), JSON.stringify(result, null, 2));
  console.log(JSON.stringify({ success: result.success, directory, reachable: result.reachable, failure: result.failure?.split('\n')[0] }, null, 2));
}
