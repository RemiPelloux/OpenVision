import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { mkdir, mkdtemp, writeFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { _electron } from '../tooling/browser.mjs';
import { loadRuntime } from './source-assembly.mjs';
import { localSettings } from './import-json.mjs';
import { linuxSandboxArguments } from './platform.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const { layout } = await loadRuntime(root);
await mkdir(join(root, 'logs'), { recursive: true });
const directory = await mkdtemp(join(root, 'logs/agent-verification-'));
const profile = join(directory, 'profile'), project = join(directory, 'project');
await mkdir(join(profile, 'User'), { recursive: true }); await mkdir(project);
await writeFile(join(profile, 'User/settings.json'), JSON.stringify({ ...localSettings,
  'git.openRepositoryInParentFolders': 'never' }));
const file = join(project, 'hello.js');
await writeFile(file, 'export const answer = 42;\n');
const requests = [], errors = [], canceled = Promise.withResolvers(), entered = Promise.withResolvers();
let phase = 'reply';
let readToolObserved = false;
const server = createServer(async (request, response) => {
  if (request.url === '/v1/models') {
    response.setHeader('content-type', 'application/json');
    return response.end(JSON.stringify({ data: [{ id: 'fixture-agent' }] }));
  }
  if (request.url !== '/v1/chat/completions') { response.statusCode = 404; return response.end(); }
  const chunks = []; for await (const chunk of request) chunks.push(chunk);
  const payload = JSON.parse(Buffer.concat(chunks));
  requests.push({ phase, model: payload.model, authorized: request.headers.authorization === 'Bearer fixture-key',
    stream: payload.stream, messageCount: payload.messages?.length, tools: payload.tools?.map(tool => tool.function?.name),
    auxiliaryPrompt: payload.tools?.length ? undefined : payload.messages });
  response.writeHead(200, { 'Content-Type': 'text/event-stream' });
  const event = (delta, finish_reason = null) => response.write(`data: ${JSON.stringify({
    id: 'fixture-response', object: 'chat.completion.chunk', model: payload.model,
    choices: [{ index: 0, delta, finish_reason }],
  })}\n\n`);
  if (phase === 'read') {
    const toolResult = payload.messages?.findLast(message => message.role === 'tool');
    if (toolResult) {
      readToolObserved = JSON.stringify(toolResult.content).includes('export const answer = 42');
      event({ role: 'assistant', content: 'OpenVision file read verified.' }); event({}, 'stop');
    } else {
      const read = payload.tools?.find(tool => tool.function?.name === 'Read')?.function;
      if (!read?.parameters?.properties?.path) {
        response.end('data: [DONE]\n\n'); return;
      }
      event({ role: 'assistant', tool_calls: [{ index: 0, id: 'call_openvision_read', type: 'function',
        function: { name: 'Read', arguments: JSON.stringify({ path: file }) } }] });
      event({}, 'tool_calls');
    }
    response.end('data: [DONE]\n\n'); return;
  }
  event({ role: 'assistant', content: phase === 'reply' ? 'OpenVision isolated stream verified.' : 'OpenVision cancellation pending.' });
  if (phase === 'slow') {
    response.on('close', () => canceled.resolve());
    entered.resolve(); return;
  }
  event({}, 'stop'); response.end('data: [DONE]\n\n');
});
await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
let app;
try {
  const env = { ...process.env }; delete env.ELECTRON_RUN_AS_NODE;
  app = await _electron.launch({ executablePath: layout.executable, env, timeout: 60000,
    args: ['--user-data-dir', profile, '--extensions-dir', join(directory, 'extensions'),
      '--new-window', '--disable-updates', '--skip-welcome', '--skip-release-notes',
      '--disable-telemetry', '--disable-crash-reporter',
      ...(process.platform === 'linux' ? await linuxSandboxArguments(layout.host) : []), project, file] });
  const page = await app.firstWindow();
  page.setDefaultTimeout(15000);
  page.on('pageerror', error => errors.push(error.message));
  await page.locator('.part.titlebar .openvision-local-profile').waitFor({ timeout: 60000 });
  await page.waitForTimeout(8000);
  await page.locator('.part.titlebar a[aria-label$=" Settings"]').click();
  await page.locator('.cursor-settings-sidebar-cell-label').filter({ hasText: /^Models$/ }).locator('..').click();
  const settings = page.locator('.openvision-model-settings');
  await settings.getByRole('button', { name: 'Add Provider', exact: true }).click();
  await page.getByLabel('Provider Name', { exact: true }).fill('Agent fixture');
  await page.getByLabel('API Base URL', { exact: true }).fill(`http://127.0.0.1:${server.address().port}/v1`);
  await page.getByLabel('API Key', { exact: true }).fill('fixture-key');
  await page.locator('dialog').getByRole('button', { name: 'Save', exact: true }).click();
  await page.locator('dialog').waitFor({ state: 'detached' });
  await page.locator('.tabs-container .tab').filter({ hasText: 'hello.js' }).first().click();
  await page.keyboard.press('ControlOrMeta+Shift+l');
  await page.locator('.vscode-model-picker__trigger-markdown').filter({ visible: true }).first().click();
  await page.getByText('fixture-agent', { exact: true }).last().click();
  await page.keyboard.press('Escape');
  const input = page.locator('.aislash-editor-input[contenteditable=true]').filter({ visible: true }).first();
  await input.fill('Reply with OpenVision isolated stream verified. Do not use tools.');
  await input.press('Enter');
  await page.getByText('OpenVision isolated stream verified.', { exact: true }).first().waitFor({ timeout: 45000 });
  assert.equal(requests.filter(request => request.tools?.length).length, 1, 'One submit must produce one Agent inference request');
  assert.equal(requests.length, 1, 'Local chat titles must not create an auxiliary inference request');
  phase = 'read';
  await input.fill('Read hello.js and report its contents. Do not modify files.'); await input.press('Enter');
  await page.getByText('OpenVision file read verified.', { exact: true }).first().waitFor({ timeout: 30000 });
  assert.equal(readToolObserved, true, 'Agent must return the actual fixture file through its tool continuation');
  phase = 'slow';
  await input.fill('Reply slowly. Do not use tools.'); await input.press('Enter');
  await Promise.race([entered.promise, new Promise((_, reject) => {
    const timer = setTimeout(() => reject(new Error('Slow request not observed')), 30000); timer.unref();
  })]);
  await page.getByText('OpenVision cancellation pending.', { exact: true }).first().waitFor();
  await writeFile(join(directory, 'streaming-controls.json'), JSON.stringify(await page.locator('button,[role=button]').evaluateAll(
    elements => elements.map(element => ({ label: element.getAttribute('aria-label'), title: element.getAttribute('title'), text: element.textContent }))), null, 2));
  const started = performance.now();
  await page.locator('.stop-button').filter({ visible: true }).first().click();
  await Promise.race([canceled.promise, new Promise((_, reject) => {
    const timer = setTimeout(() => reject(new Error('Upstream request was not canceled')), 10000); timer.unref();
  })]);
  const cancellationMs = Math.round(performance.now() - started);
  assert.ok(requests.every(request => request.model === 'fixture-agent' && request.authorized));
  assert.deepEqual(errors, []);
  await page.screenshot({ path: join(directory, 'agent.png') });
  const result = { checkedAt: new Date().toISOString(), platform: process.platform, requests, errors,
    authenticatedNativeStream: true, singleAgentSubmitRequest: true, noAuxiliaryTitleRequest: true,
    nativeReadToolContinuation: readToolObserved,
    upstreamCancellation: true, cancellationMs,
    scope: 'Fresh profile and controlled HTTP fixture. External providers, edit/command tools, branch/reload remain unverified.' };
  await writeFile(join(directory, 'result.json'), JSON.stringify(result, null, 2));
  console.log(JSON.stringify({ ...result, directory }, null, 2));
} catch (error) {
  const page = app?.windows()[0];
  if (page) {
    await page.screenshot({ path: join(directory, 'failure.png') }).catch(() => {});
    await writeFile(join(directory, 'failure.txt'), await page.locator('body').innerText()).catch(() => {});
  }
  await writeFile(join(directory, 'requests.json'), JSON.stringify({ requests, errors }, null, 2));
  console.error('Agent verification evidence:', directory); throw error;
} finally {
  server.closeAllConnections(); await new Promise(resolve => server.close(resolve));
  if (app) {
    const page = app.windows()[0];
    const closing = app.close();
    // Only this verifier's disposable app can be closed here.
    await page?.getByText('Quit Anyway', { exact: true }).click({ timeout: 5000 }).catch(() => {});
    await closing;
  }
}
