import { chromium } from '../tooling/browser.mjs';
import { createServer } from 'node:http';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import assert from 'node:assert/strict';

const modules = new Map([
  ['/model-identity.js', 'model-identity.js'],
  ['/model-settings.js', 'model-settings.js'],
  ['/openvision-model-providers.js', 'model-providers.js'],
  ['/model-reasoning.js', 'model-reasoning.js'],
  ['/openvision-completion-provider.js', 'completion-provider.js'],
  ['/model-providers.js', 'model-providers.js'],
]);
const server = createServer(async (request, response) => {
  const file = modules.get(request.url);
  if (file) {
    response.setHeader('Content-Type', 'text/javascript');
    response.end(await readFile(new URL(file, import.meta.url)));
  } else if (request.url === '/') {
    response.setHeader('Content-Type', 'text/html');
    response.end('<!doctype html><title>OpenVision model list fixture</title><main></main>');
  } else { response.writeHead(404); response.end(); }
});
await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
let browser;
try {
  browser = await chromium.launch({ channel: process.env.OPENVISION_BROWSER_CHANNEL || 'msedge', headless: true });
  const page = await browser.newPage();
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.goto(`http://127.0.0.1:${server.address().port}`);
  const mountMs = await page.evaluate(async () => {
    const { mountModels } = await import('/model-settings.js');
    const state = { version: 1, activeId: null, providers: [{ id: 'fixture', name: 'Fixture', capabilitiesDiscovered: true,
      url: 'http://example.test/v1', models: Array.from({ length: 10000 }, (_, index) => ({
        id: `model-${index}`, name: `Model ${index}`, enabled: true,
      })) }] };
    window.saved = state;
    const start = performance.now();
    mountModels(document.querySelector('main'), { storage: {
      get: key => key === 'openvision.model-providers.v1' ? JSON.stringify(window.saved) : window.completionModel,
      store: (key, value) => {
        if (key === 'openvision.model-providers.v1') window.saved = JSON.parse(value);
        else window.completionModel = value;
      }, flush: async () => {},
    }, reactive: { setApplicationUserPersistentStorage() {}, manualSave() {} },
    ai: { modelConfigService: { setModelConfig() {} }, handleAvailableModelsChange() {} } });
    return performance.now() - start;
  });
  const rows = page.locator('.openvision-model-row');
  assert.equal(await rows.count(), 40);
  const completion = page.getByRole('combobox', { name: 'Tab autocomplete model' });
  const completionSearch = page.getByRole('searchbox', { name: 'Search autocomplete models' });
  assert.equal(await completion.locator('option').count(), 41);
  await completionSearch.fill('model-9876');
  await page.waitForFunction(() => document.querySelector('select[aria-label="Tab autocomplete model"]')?.options.length === 2);
  assert.equal(await completion.locator('option').count(), 2);
  await completion.selectOption('openvision-model:fixture:model-9876');
  assert.equal(await page.evaluate(() => window.completionModel), 'openvision-model:fixture:model-9876');
  await completionSearch.fill('');
  await page.waitForFunction(() => document.querySelector('select[aria-label="Tab autocomplete model"]')?.options.length === 42);
  assert.equal(await completion.inputValue(), 'openvision-model:fixture:model-9876', 'Filtering preserves the selected model');
  assert.equal(await completion.locator('option').count(), 42);
  await page.getByRole('button', { name: 'Next', exact: true }).click();
  assert.equal(await rows.first().locator('small').innerText(), 'model-40');
  const search = page.getByRole('searchbox', { name: 'Search models' });
  await search.fill('model-9999');
  await page.getByRole('checkbox', { name: 'Enable Model 9999', exact: true }).waitFor();
  assert.equal(await rows.count(), 1);
  await page.getByRole('checkbox', { name: 'Enable Model 9999', exact: true }).uncheck();
  await page.waitForFunction(() => document.querySelector('main').dataset.busy === 'false');
  assert.equal(await search.isEnabled(), true, 'Search must remain usable after saving');
  assert.equal(await page.evaluate(() => window.saved.providers[0].models.length), 10000);
  assert.equal(await page.evaluate(() => window.saved.providers[0].models[9999].enabled), false);
  await page.getByRole('combobox', { name: 'Show models' }).selectOption('enabled');
  await page.getByText('No matching models.', { exact: true }).waitFor();
  await search.fill('');
  await page.getByRole('checkbox', { name: 'Enable Model 0', exact: true }).waitFor();
  assert.equal(await rows.count(), 40);
  assert.deepEqual(errors, []);
  const result = { models: 10000, maximum_mounted_rows: 40, maximum_autocomplete_options: 42,
    autocomplete_search_selection_preserved: true, search_and_pagination: true,
    saved_all_models: true, mount_ms: mountMs, browser: browser.version(), checked_at: new Date().toISOString() };
  await mkdir(new URL('../logs/', import.meta.url), { recursive: true });
  await writeFile(new URL('../logs/model-list-verification.json', import.meta.url), JSON.stringify(result, null, 2));
  console.log(JSON.stringify(result));
} finally {
  await browser?.close();
  await new Promise(resolve => server.close(resolve));
}
