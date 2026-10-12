import { chromium } from '../tooling/browser.mjs';
import { createServer } from 'node:http';
import { readFile, writeFile } from 'node:fs/promises';
import assert from 'node:assert/strict';
import { fileURLToPath } from 'node:url';

const record = JSON.parse(await readFile(new URL('../logs/desktop-launch.json', import.meta.url), 'utf8'));
const requests = [];
const server = createServer(async (request, response) => {
  const observed = { url: request.url, method: request.method, authorized: request.headers.authorization === 'Bearer verification-key' };
  requests.push(observed);
  if (request.url === '/v1/models') {
    response.writeHead(request.headers.authorization === 'Bearer verification-key' ? 200 : 401, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify({ data: [{ id: 'openvision-test-code' }, { id: 'openvision-test-fast' }] }));
  } else if (request.url === '/v1/chat/completions' && request.method === 'POST') {
    const chunks = [];
    for await (const chunk of request) chunks.push(chunk);
    const payload = JSON.parse(Buffer.concat(chunks).toString());
    observed.model = payload.model;
    response.writeHead(200, { 'Content-Type': 'text/event-stream' });
    const event = (delta, finish_reason = null) => response.write(`data: ${JSON.stringify({
      id: 'chatcmpl-openvision-verification', object: 'chat.completion.chunk', created: 1,
      model: payload.model, choices: [{ index: 0, delta, finish_reason }],
    })}\n\n`);
    event({ role: 'assistant', content: 'OpenVision routing verified.' });
    event({}, 'stop'); response.end('data: [DONE]\n\n');
  } else {
    response.writeHead(404); response.end();
  }
});
await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
const browser = await chromium.connectOverCDP(`http://127.0.0.1:${record.debug_port}`);
const page = browser.contexts().flatMap(context => context.pages()).find(page => page.url().includes('workbench'));
page.setDefaultTimeout(10000);
const errors = [];
page.on('pageerror', error => errors.push(error.message));
const name = `Verification Provider ${Date.now()}`;
let originalActive;
async function openModels() {
  const settings = page.locator('.openvision-model-settings');
  if (await settings.isVisible()) return;
  const tab = page.locator('.tabs-container .tab').filter({ hasText: 'OpenVision Settings' });
  if (await tab.count()) await tab.first().click();
  else await page.locator('.part.titlebar a[aria-label$=" Settings"]').click();
  if (!await settings.isVisible()) await page.locator('.cursor-settings-sidebar-cell-label').filter({ hasText: /^Models$/ }).locator('..').click();
  await settings.waitFor();
}
try {
  const tab = page.locator('.tabs-container .tab').filter({ hasText: 'OpenVision Settings' });
  await openModels();
  const settings = page.locator('.openvision-model-settings');
  await settings.waitFor();
  originalActive = await settings.getByRole('combobox', { name: 'Active Provider' }).inputValue();
  await settings.getByRole('button', { name: 'Add OpenAI', exact: true }).click();
  assert.equal(await page.getByLabel('API Base URL', { exact: true }).inputValue(), 'https://api.openai.com/v1');
  assert.equal(await page.getByLabel('Provider Name', { exact: true }).inputValue(), 'OpenAI');
  await page.locator('dialog').getByRole('button', { name: 'Cancel', exact: true }).click();
  await settings.getByRole('button', { name: 'Add Provider', exact: true }).click();
  await page.getByLabel('Provider Name', { exact: true }).fill(name);
  await page.getByLabel('API Base URL', { exact: true }).fill(`http://127.0.0.1:${server.address().port}/v1`);
  await page.getByLabel('API Key', { exact: true }).fill('verification-key');
  await page.locator('dialog').getByRole('button', { name: 'Save', exact: true }).click();
  await page.locator('dialog').waitFor({ state: 'detached' });
  const provider = settings.locator('section').filter({ hasText: name });
  await provider.getByText('openvision-test-code', { exact: true }).first().waitFor();
  assert.equal(requests[0].url, '/v1/models'); assert.equal(requests[0].authorized, true);
  const providerId = await settings.getByRole('combobox', { name: 'Active Provider' }).locator('option').filter({ hasText: name }).getAttribute('value');
  await settings.getByRole('combobox', { name: 'Active Provider' }).selectOption(providerId);
  await provider.getByRole('button', { name: 'Add Model', exact: true }).click();
  await page.getByLabel('Model ID', { exact: true }).fill('manual-coder');
  await page.getByLabel('Display Name', { exact: true }).fill('My Custom Coder');
  await page.locator('dialog').getByRole('button', { name: 'Save', exact: true }).click();
  await page.locator('dialog').waitFor({ state: 'detached' });
  await provider.getByText('My Custom Coder', { exact: true }).waitFor();
  await page.reload();
  await page.locator('.monaco-workbench').waitFor();
  await page.waitForTimeout(4000);
  await openModels();
  await settings.getByText('My Custom Coder', { exact: true }).waitFor();
  assert.equal(await settings.getByRole('combobox', { name: 'Active Provider' }).inputValue(), providerId);
  await provider.getByRole('button', { name: 'Discover Models', exact: true }).click();
  await settings.getByText('Saved', { exact: true }).waitFor();
  await provider.getByText('My Custom Coder', { exact: true }).waitFor();
  const images = await settings.locator('img').evaluateAll(images => images.every(image => image.complete && image.naturalWidth > 0));
  assert.equal(images, true);
  await page.screenshot({ path: fileURLToPath(new URL('../logs/custom-model-settings-tested.png', import.meta.url)) });
  await page.locator('.tabs-container .tab').filter({ hasText: 'main.js' }).first().click();
  await page.getByRole('button', { name: 'New Agent', exact: true }).first().click();
  await page.locator('.vscode-model-picker__trigger-markdown').filter({ visible: true }).first().click();
  await page.getByText('My Custom Coder', { exact: true }).last().waitFor();
  await page.getByText('My Custom Coder', { exact: true }).last().click();
  await page.keyboard.press('Escape');
  await page.locator('.aislash-editor-input[contenteditable=true]').fill('Reply with OpenVision routing verified. Do not use tools or modify files.');
  await page.locator('.aislash-editor-input[contenteditable=true]').press('Enter');
  await page.getByText('OpenVision routing verified.', { exact: true }).first().waitFor({ timeout: 30000 });
  const inference = requests.find(request => request.method === 'POST' && request.model === 'manual-coder');
  assert.ok(inference, 'The selected manual model must reach the configured server');
  assert.equal(inference.authorized, true);
  await tab.first().click();
  await openModels();
  await provider.getByRole('button', { name: 'Edit Provider', exact: true }).click();
  await page.getByLabel('Clear Saved Key', { exact: true }).check();
  await page.locator('dialog').getByRole('button', { name: 'Save', exact: true }).click();
  await page.locator('dialog').waitFor({ state: 'detached' });
  await provider.getByRole('button', { name: 'Discover Models', exact: true }).click();
  await settings.getByText(/Model discovery failed \(HTTP 401\)/).waitFor();
  await provider.getByText('My Custom Coder', { exact: true }).waitFor();
  await writeFile(new URL('../logs/model-verification.json', import.meta.url), JSON.stringify({
    checked_at: new Date().toISOString(), source_url: page.url(), native_discovery: true,
    authorization_verified: true, manual_model: true, persisted_after_reload: true,
    models_in_agent_picker: true, icons_loaded: images, requests, errors,
    selected_model_inference_with_local_fixture: true,
    openai_preset: true, clear_key_and_http_error: true,
    live_provider_inference: 'Not exercised; no user endpoint or key supplied',
  }, null, 2));
  console.log('Verified native discovery, secret storage, manual models, persistence, picker, and selected-model inference.');
} finally {
  try {
    await page.keyboard.press('Escape');
    await openModels();
    const settings = page.locator('.openvision-model-settings');
    const provider = settings.locator('section').filter({ hasText: name });
    if (await provider.count()) {
      await settings.getByRole('combobox', { name: 'Active Provider' }).selectOption(originalActive || '');
      await settings.getByText('Saved', { exact: true }).waitFor();
      await provider.getByRole('button', { name: 'Remove Provider', exact: true }).click();
      await provider.waitFor({ state: 'detached' });
    }
  } catch (error) { console.error('Verification provider cleanup failed:', error.message); }
  await browser.close();
  await new Promise(resolve => server.close(resolve));
}
