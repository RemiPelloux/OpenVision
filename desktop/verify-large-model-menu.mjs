import assert from 'node:assert/strict';
import { mkdir, mkdtemp, writeFile } from 'node:fs/promises';
import { DatabaseSync } from 'node:sqlite';
import { join, resolve } from 'node:path';
import { _electron } from '../tooling/browser.mjs';
import { loadRuntime } from './source-assembly.mjs';
import { verificationSettings } from './verification-profile.mjs';
import { fileHash } from './import-files.mjs';
import { execFileSync } from 'node:child_process';
import { arch, release } from 'node:os';
import { enterWorkspace } from './verification-workspace.mjs';

const root = resolve(import.meta.dirname, '..');
const { layout } = await loadRuntime(root);
const directory = await mkdtemp(join(root, 'logs/large-model-menu-'));
const profile = join(directory, 'profile'), project = join(directory, 'project');
await mkdir(join(profile, 'User/globalStorage'), { recursive: true }); await mkdir(project);
await writeFile(join(profile, 'User/settings.json'), JSON.stringify(verificationSettings));
await writeFile(join(project, 'test.js'), '// Isolated model picker verification\n');
const providers = Array.from({ length: 2 }, (_, provider) => ({
  id: `provider-${provider}`, name: `Provider ${provider + 1}`, url: 'http://127.0.0.1:1/v1',
  capabilitiesDiscovered: true,
  models: Array.from({ length: 5000 }, (_, index) => ({
    id: `model-${String(provider * 5000 + index).padStart(5, '0')}`,
    name: `Model ${String(provider * 5000 + index).padStart(5, '0')}`, enabled: true,
  })),
}));
const database = new DatabaseSync(join(profile, 'User/globalStorage/state.vscdb'));
database.exec('CREATE TABLE ItemTable (key TEXT UNIQUE ON CONFLICT REPLACE, value BLOB)');
database.prepare('INSERT INTO ItemTable (key,value) VALUES (?,?)').run('openvision.model-providers.v1',
  JSON.stringify({ version: 1, providers, activeId: null })); database.close();
const result = { success: false, checkedAt: new Date().toISOString(), platform: process.platform,
  arch: arch(), osRelease: release(), commit: execFileSync('git', ['rev-parse', 'HEAD'], { cwd: root, encoding: 'utf8' }).trim(),
  scope: 'Native Windows picker with 10,000 saved synthetic models, no keys or inference.', errors: [],
  hashes: Object.fromEntries(await Promise.all(['desktop/model-picker-pages.js', 'desktop/model-picker-window.js',
    'desktop/model-picker.css', 'desktop/model-settings.js', 'desktop/verify-large-model-menu.mjs'].map(async file => [file, await fileHash(join(root, file))]))),
  workbenchSha256: await fileHash(join(root, 'source/app/out/vs/workbench/workbench.desktop.main.js')) };
let app, page;
try {
  const env = { ...process.env }; delete env.ELECTRON_RUN_AS_NODE;
  app = await _electron.launch({ executablePath: layout.executable, env, timeout: 60000,
    args: ['--user-data-dir', profile, '--extensions-dir', join(directory, 'extensions'), '--new-window',
      '--disable-updates', '--skip-welcome', '--skip-release-notes', '--disable-telemetry', '--disable-crash-reporter', project] });
  page = await app.firstWindow(); page.setDefaultTimeout(20000);
  page.on('pageerror', error => result.errors.push(error.message));
  await page.locator('.part.titlebar .openvision-local-profile').waitFor({ state: 'attached', timeout: 60000 }); await enterWorkspace(page);
  const trigger = page.locator('.vscode-model-picker__trigger-markdown').filter({ visible: true }).first();
  const started = performance.now(); await trigger.click({ timeout: 60000 });
  const menu = page.getByTestId('model-picker-menu').filter({ visible: true });
  await menu.locator('[data-model-picker-item-name]').first().waitFor({ timeout: 60000 });
  result.openMs = Math.round(performance.now() - started);
  result.modelRows = await menu.locator('[data-model-picker-item-name]').count();
  result.menuElements = await menu.locator('*').count();
  result.aria = await menu.ariaSnapshot();
  await page.screenshot({ path: join(directory, 'large-menu.png') });
  if (!process.argv.includes('--baseline')) {
    assert.ok(result.modelRows <= 40, 'Agent picker must bound rows independently of catalog size');
    const search = menu.getByRole('textbox', { name: 'Search menu items' });
    async function keyboardReach(name, key) {
      const item = menu.getByRole('menuitem', { name, exact: true });
      for (let step = 0; step < 43; step++) {
        if (await item.evaluate(node => node.closest('[data-component="menu-row"]')?.getAttribute('data-focused') === 'true')) return;
        await search.press(key);
      }
      assert.fail(`Keyboard navigation did not reach ${name}`);
    }
    await menu.getByRole('group', { name: 'Provider 1', exact: true }).waitFor();
    await search.focus();
    await keyboardReach('Next models', 'ArrowDown');
    await search.press('Enter');
    await menu.getByText('41–80 of 10000 models', { exact: true }).waitFor();
    assert.equal(await menu.locator('[data-model-picker-item-name]').count(), 40);
    await keyboardReach('Previous models', 'ArrowUp'); await search.press('Enter');
    await menu.getByText('1–40 of 10000 models', { exact: true }).waitFor();
    result.keyboardPagination = true;
    await search.fill('09999');
    const tailItem = menu.getByRole('menuitem').filter({
      has: page.locator('[data-model-picker-item-name="openvision-model:provider-1:model-09999"]'),
    });
    await tailItem.waitFor();
    assert.match(await tailItem.ariaSnapshot(), /Model 09999/, 'Search result must retain its accessible model name');
    assert.equal(await menu.locator('[data-model-picker-item-name]').count(), 1);
    await search.press('Enter'); await menu.waitFor({ state: 'hidden' });
    await trigger.getByText('Model 09999', { exact: true }).waitFor();
    result.tailModelSelected = true;
    await page.waitForFunction(() => document.activeElement?.classList.contains('aislash-editor-input'), undefined, { timeout: 5000 });
    result.selectionFocus = await page.evaluate(() => ({ tag: document.activeElement?.tagName,
      label: document.activeElement?.getAttribute('aria-label'), className: document.activeElement?.className }));
    assert.equal(result.selectionFocus.className, 'aislash-editor-input');
    await trigger.click();
    await menu.getByText('9961–10000 of 10000 models', { exact: true }).waitFor();
    await menu.getByRole('group', { name: 'Provider 2', exact: true }).waitFor();
    result.reopensOnSelectedPage = true;
    await search.fill('model-that-does-not-exist');
    await menu.getByText('No models found', { exact: true }).waitFor();
    assert.equal(await menu.locator('[data-model-picker-item-name]').count(), 0);
    result.emptySearch = true;
    await page.keyboard.press('Escape'); await menu.waitFor({ state: 'hidden' });
    await page.waitForFunction(() => document.activeElement?.classList.contains('aislash-editor-input'), undefined, { timeout: 5000 });
    result.escapeFocus = await page.evaluate(() => ({ tag: document.activeElement?.tagName,
      label: document.activeElement?.getAttribute('aria-label'), className: document.activeElement?.className }));
    assert.equal(result.escapeFocus.className, 'aislash-editor-input');
    await page.locator('.part.titlebar a[aria-label$=" Settings"]').click();
    await page.locator('.cursor-settings-sidebar-cell-label').filter({ hasText: /^Models$/ }).locator('..').click();
    const settings = page.locator('.openvision-model-settings');
    await settings.getByRole('region', { name: 'Provider 1', exact: true }).waitFor();
    result.settingsRows = await settings.locator('.openvision-model-row').count();
    result.settingsElements = await settings.locator('*').count();
    assert.equal(result.settingsRows, 80, 'Settings mount at most 40 rows for each of the two providers');
    const provider = settings.getByRole('region', { name: 'Provider 1', exact: true });
    await provider.getByRole('button', { name: 'Next', exact: true }).press('Enter');
    await provider.getByRole('checkbox', { name: 'Enable Model 00040', exact: true }).waitFor();
    assert.equal(await provider.getByRole('button', { name: 'Previous', exact: true }).evaluate(node => node === document.activeElement), true);
    result.settingsKeyboardPaging = true;
    await settings.getByRole('searchbox', { name: 'Search models', exact: true }).fill('09999');
    const tail = settings.getByRole('checkbox', { name: 'Enable Model 09999', exact: true });
    await tail.waitFor(); assert.equal(await settings.locator('.openvision-model-row').count(), 1);
    await settings.getByRole('region', { name: 'Provider 2', exact: true }).getByRole('button', { name: 'Discover Models', exact: true }).click();
    await page.waitForFunction(() => document.querySelector('.openvision-model-settings')?.dataset.busy === 'false');
    result.failedDiscoveryMessage = await settings.locator(':scope > .openvision-model-status').innerText();
    assert.notEqual(result.failedDiscoveryMessage, 'Saved');
    await tail.waitFor(); result.failedDiscoveryRetainedChoices = true;
    await tail.uncheck();
    await page.waitForFunction(() => document.querySelector('.openvision-model-settings')?.dataset.busy === 'false');
    await page.keyboard.press('ControlOrMeta+w');
    await trigger.getByText('Unavailable model', { exact: true }).waitFor();
    result.unavailableLabel = true;
  }
  assert.deepEqual(result.errors, []); result.success = true;
} catch (error) {
  result.error = error.stack; process.exitCode = 1;
  await page?.screenshot({ path: join(directory, 'failure.png') }).catch(() => {});
} finally {
  if (app) {
    const child = app.process();
    try { await app.close(); } catch (error) { result.cleanupError = error.message; result.success = false; process.exitCode = 1; }
    result.hostExit = { pid: child.pid, exitCode: child.exitCode, signalCode: child.signalCode };
    if (child.exitCode !== 0) {
      result.cleanupError ??= 'Owned verifier host did not exit normally'; result.success = false; process.exitCode = 1;
    }
  }
  await writeFile(join(directory, 'result.json'), JSON.stringify(result, null, 2));
  console.log(JSON.stringify({ ...result, aria: undefined, directory }, null, 2));
}
