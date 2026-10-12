import { chromium } from '../tooling/browser.mjs';
import { mkdtemp, mkdir, readFile, writeFile, rm } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { tmpdir } from 'node:os';
import { fileURLToPath } from 'node:url';
import assert from 'node:assert/strict';
import { restoreImport } from './import-transaction.mjs';
import { parseConfiguration } from './import-json.mjs';
import { cursorLocations } from './platform.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const launch = JSON.parse(await readFile(join(root, 'logs/desktop-launch.json'), 'utf8'));
if (!Number.isInteger(launch.debug_port)) throw new Error('Launch OpenVision with --inspect-preview.');
await waitForDebugPort(launch.debug_port);
const browser = await chromium.connectOverCDP(`http://127.0.0.1:${launch.debug_port}`);
const fixture = await mkdtemp(join(tmpdir(), 'openvision-ui-import-'));
const settingsPath = join(root, 'data/local/User/settings.json');
const original = await readFile(settingsPath, 'utf8');
let backup;
let restored = false;
const errors = [];
try {
  await mkdir(join(fixture, 'User/snippets'), { recursive: true });
  await mkdir(join(fixture, 'extensions'), { recursive: true });
  const extensionName = 'openvision.import-verification-1.0.0';
  await mkdir(join(fixture, 'extensions', extensionName));
  await writeFile(join(fixture, 'extensions', extensionName, 'package.json'), JSON.stringify({
    name: 'import-verification', publisher: 'openvision', version: '1.0.0', engines: { vscode: '^1.96.0' },
    displayName: 'OpenVision Import Verification', description: 'Temporary import fixture',
  }));
  await writeFile(join(fixture, 'extensions/extensions.json'), JSON.stringify([{
    identifier: { id: 'openvision.import-verification' }, version: '1.0.0', relativeLocation: extensionName,
    location: { scheme: 'file', path: '/old/cursor/location' },
  }]));
  await writeFile(join(fixture, 'User/settings.json'), '// Fixture JSONC\n{"openvision.importVerification":true,"window.title":"Wrong title",}');
  await writeFile(join(fixture, 'User/snippets/openvision-import-verification.code-snippets'), '{"fixture":{"prefix":"ovfixture","body":"fixture"}}');
  const page = await waitForWorkbench(browser);
  page.on('pageerror', error => errors.push(error.message));
  await page.locator('.monaco-workbench').waitFor({ timeout: 30000 });
  await openGeneralSettings(page);
  await page.getByRole('button', { name: 'Import from Cursor', exact: true }).click();
  const dialog = page.locator('.openvision-import-dialog');
  await dialog.getByLabel('Cursor User directory', { exact: true }).waitFor();
  assert.equal(await dialog.getByLabel('Cursor User directory', { exact: true }).inputValue(), cursorLocations().user);
  await dialog.getByLabel('Cursor User directory', { exact: true }).fill(join(fixture, 'User'));
  await dialog.getByLabel('Cursor extensions directory', { exact: true }).fill(join(fixture, 'extensions'));
  for (const label of ['Keyboard shortcuts', 'User tasks']) await dialog.getByLabel(label, { exact: true }).uncheck();
  await dialog.getByRole('button', { name: 'Preview Import', exact: true }).click();
  await dialog.getByRole('status').filter({ hasText: '4 files to import' }).waitFor();
  assert.equal(await readFile(settingsPath, 'utf8'), original);
  await page.screenshot({ path: join(root, 'logs/import-preview.png') });
  await dialog.getByRole('button', { name: 'Import', exact: true }).click();
  await dialog.getByRole('status').filter({ hasText: 'Imported 4 files' }).waitFor();
  backup = (await dialog.locator('pre').innerText()).slice('Backup: '.length);
  const settings = parseConfiguration(await readFile(settingsPath, 'utf8'));
  assert.equal(settings['openvision.importVerification'], true);
  assert.equal(settings['window.title'], parseConfiguration(original)['window.title']);
  const registry = JSON.parse(await readFile(join(root, 'data/local-extensions/extensions.json'), 'utf8'));
  assert.ok(registry.some(entry => entry.identifier.id === 'openvision.import-verification' &&
    entry.location.path.toLowerCase().includes('/openvision/data/local-extensions/')));
  await dialog.getByRole('button', { name: 'Preview Import', exact: true }).click();
  await dialog.getByRole('status').filter({ hasText: '0 files to import' }).waitFor();
  await dialog.getByRole('button', { name: 'Restore Last Import', exact: true }).click();
  await dialog.getByRole('status').filter({ hasText: 'Restored 4 files' }).waitFor();
  restored = true;
  assert.equal(await readFile(settingsPath, 'utf8'), original);
  await assert.rejects(readFile(join(root, 'data/local/User/snippets/openvision-import-verification.code-snippets')), { code: 'ENOENT' });
  await dialog.getByRole('button', { name: 'Close', exact: true }).click();
  const result = { native_ipc: true, settings_button: true, preview_read_only: true, jsonc_import: true,
    protected_title: true, snippet_import: true, extension_registry_isolated: true, repeat_import_no_changes: true,
    exact_restore: true, page_errors: errors, backup,
    checked_at: new Date().toISOString() };
  await writeFile(join(root, 'logs/import-verification.json'), JSON.stringify(result, null, 2) + '\n');
  console.log(JSON.stringify(result, null, 2));
  assert.deepEqual(errors, []);
} finally {
  if (backup && !restored) await restoreImport(root, backup);
  await browser.close();
  await rm(fixture, { recursive: true, force: true });
}

async function waitForDebugPort(port) {
  const deadline = Date.now() + 30000;
  while (Date.now() < deadline) {
    try {
      const response = await fetch(`http://127.0.0.1:${port}/json/version`, { signal: AbortSignal.timeout(1000) });
      if (response.ok) return;
    } catch {}
    await new Promise(resolve => setTimeout(resolve, 250));
  }
  throw new Error('OpenVision debugging port did not become ready within 30 seconds.');
}

async function waitForWorkbench(browser) {
  const deadline = Date.now() + 30000;
  while (Date.now() < deadline) {
    const page = browser.contexts().flatMap(context => context.pages()).find(page => page.url().includes('workbench'));
    if (page) return page;
    await new Promise(resolve => setTimeout(resolve, 250));
  }
  throw new Error('OpenVision workbench did not load within 30 seconds.');
}

async function openGeneralSettings(page) {
  await page.locator('.part.titlebar .openvision-local-profile').waitFor();
  const general = page.locator('.cursor-settings-sidebar-cell-label').filter({ hasText: /^General$/ });
  for (let attempt = 0; attempt < 3; attempt++) {
    const tab = page.locator('.tabs-container .tab').filter({ hasText: 'OpenVision Settings' });
    if (await tab.count()) await tab.first().click();
    else await page.locator('.part.titlebar a[aria-label$=" Settings"]').click();
    try {
      await general.waitFor({ state: 'attached', timeout: 5000 });
      await general.locator('..').click({ timeout: 5000 });
      return;
    } catch (error) { if (attempt === 2) throw error; }
  }
}
