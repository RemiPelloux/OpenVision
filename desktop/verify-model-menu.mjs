import assert from 'node:assert/strict';
import { mkdir, mkdtemp, writeFile, copyFile } from 'node:fs/promises';
import { DatabaseSync } from 'node:sqlite';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { _electron } from '../tooling/browser.mjs';
import { loadRuntime } from './source-assembly.mjs';
import { verificationSettings } from './verification-profile.mjs';
import { linuxSandboxArguments } from './platform.mjs';
import { fileHash } from './import-files.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const { layout } = await loadRuntime(root);
const directory = await mkdtemp(join(root, 'logs/model-menu-'));
const profile = join(directory, 'profile'), project = join(directory, 'project');
await mkdir(join(profile, 'User/globalStorage'), { recursive: true });
await mkdir(project);
await writeFile(join(profile, 'User/settings.json'), JSON.stringify({ ...verificationSettings,
  'git.openRepositoryInParentFolders': 'never' }));
await writeFile(join(project, 'hello.js'), '// OpenVision disposable model-menu verification\n');
const providers = [
  { id: 'gpt', name: 'Codex Easy', models: [['gpt-6.1-sol', 'GPT-6.1 Sol'], ['gpt-6-astra', 'GPT-6 Astra']] },
  { id: 'deepseek', name: 'Codex Easy - DeepSeek', models: [['deepseek-v4-pro', 'DeepSeek V4 Pro']] },
  { id: 'grok', name: 'Codex Easy - Grok', models: [['grok-4.7', 'Grok 4.7']] },
].map(provider => ({ ...provider, url: 'https://codex-easy.ai/v1', capabilitiesDiscovered: true,
  models: provider.models.map(([id, name]) => ({ id, name, enabled: true })) }));
const database = new DatabaseSync(join(profile, 'User/globalStorage/state.vscdb'));
database.exec('CREATE TABLE ItemTable (key TEXT UNIQUE ON CONFLICT REPLACE, value BLOB)');
database.prepare('INSERT INTO ItemTable (key,value) VALUES (?,?)').run('openvision.model-providers.v1',
  JSON.stringify({ version: 1, providers, activeId: null }));
database.close();
const result = { success: false, checkedAt: new Date().toISOString(), platform: process.platform, errors: [],
  hashes: Object.fromEntries(await Promise.all([
    ['workbench', 'source/app/out/vs/workbench/workbench.desktop.main.js'],
    ['styles', 'desktop/model-picker.css'], ['verifier', 'desktop/verify-model-menu.mjs'],
  ].map(async ([name, path]) => [name, await fileHash(join(root, path))]))),
  scope: 'Isolated native UI with saved synthetic model metadata; no credentials or inference requests.' };
let app, page;
async function launch() {
  const env = { ...process.env }; delete env.ELECTRON_RUN_AS_NODE;
  app = await _electron.launch({ executablePath: layout.executable, env, timeout: 60000,
    args: ['--user-data-dir', profile, '--extensions-dir', join(directory, 'extensions'), '--new-window',
      '--disable-updates', '--skip-welcome', '--skip-release-notes', '--disable-telemetry', '--disable-crash-reporter',
      ...(process.platform === 'linux' ? await linuxSandboxArguments(layout.host) : []), project, join(project, 'hello.js')] });
  page = await app.firstWindow();
  page.setDefaultTimeout(15000);
  page.on('pageerror', error => result.errors.push(error.message));
  await page.locator('.part.titlebar .openvision-local-profile').waitFor({ timeout: 60000 });
}
try {
  await launch();
  await page.keyboard.press('ControlOrMeta+Shift+l');
  let trigger = page.locator('.vscode-model-picker__trigger-markdown').filter({ visible: true }).first();
  await trigger.click();
  let menu = page.getByTestId('model-picker-menu').filter({ visible: true });
  await menu.locator('.openvision-provider-title').first().waitFor();
  result.headings = await menu.locator('.openvision-provider-title').allTextContents();
  assert.deepEqual(result.headings, providers.map(provider => provider.name));
  assert.equal(await menu.locator('[data-model-picker-item-name]').count(), 4);
  result.menuWidth = Math.round((await menu.boundingBox()).width);
  assert.ok(result.menuWidth >= 350, 'Model menu must leave room for separate reasoning badges');
  await page.screenshot({ path: join(directory, 'grouped-menu.png') });
  const search = menu.locator('input').first();
  await search.fill('grok');
  await menu.locator('[data-model-picker-item-name="openvision-model:grok:grok-4.7"]').waitFor();
  assert.equal(await menu.locator('[data-model-picker-item-name]').count(), 1);
  await page.waitForFunction(() => document.querySelector('[data-model-picker-item-name="openvision-model:grok:grok-4.7"]')
    ?.closest('[data-component="menu-row"]')?.getAttribute('data-focused') === 'true');
  await search.press('Enter');
  await menu.waitFor({ state: 'hidden' });
  await trigger.getByText(/Grok/).waitFor();
  result.searchKeyboardSelection = true;
  await trigger.click();
  await menu.locator('input').first().fill('no-such-model');
  await menu.getByText(/No models found/).waitFor();
  result.emptySearch = true;
  await menu.locator('input').first().fill('');
  await menu.locator('[data-model-picker-item-name="openvision-model:gpt:gpt-6.1-sol"]').click();
  await trigger.click();
  const row = menu.locator('[data-model-picker-item-name="openvision-model:gpt:gpt-6.1-sol"]');
  await row.hover();
  await page.getByText('Reasoning', { exact: true }).filter({ visible: true }).last().hover();
  await page.getByText('Extra High', { exact: true }).filter({ visible: true }).last().waitFor();
  result.reasoningSubmenu = true;
  await page.screenshot({ path: join(directory, 'reasoning-menu.png') });
  await page.getByText('Extra High', { exact: true }).filter({ visible: true }).last().click();
  await page.keyboard.press('Escape');
  await page.keyboard.press('Escape');
  if (!await menu.isVisible()) await trigger.click();
  await menu.locator('[data-model-picker-item-name="openvision-model:gpt:gpt-6.1-sol"]').getByText('Extra High', { exact: true }).waitFor();
  result.reasoningSelection = true;
  await app.close(); app = undefined;
  // Exercise an upgrade of a real saved native profile, with its initialization
  // state intact, by restoring only the previous version's raw selection IDs.
  const dbPath = join(profile, 'User/globalStorage/state.vscdb');
  await copyFile(dbPath, join(directory, 'before-legacy-upgrade.vscdb'));
  const upgrade = new DatabaseSync(dbPath);
  const key = 'src.vs.platform.reactivestorage.browser.reactiveStorageServiceImpl.persistentStorage.applicationUser';
  const stored = JSON.parse(String(upgrade.prepare('SELECT value FROM ItemTable WHERE key = ?').get(key).value));
  function legacy(value) {
    if (typeof value === 'string' && value.startsWith('openvision-model:')) return decodeURIComponent(value.split(':')[2]);
    if (Array.isArray(value)) return value.map(legacy);
    if (value && typeof value === 'object') return Object.fromEntries(Object.entries(value).map(([key, item]) => [legacy(key), legacy(item)]));
    return value;
  }
  upgrade.prepare('UPDATE ItemTable SET value = ? WHERE key = ?').run(JSON.stringify(legacy(stored)), key);
  upgrade.close();
  await launch();
  await page.keyboard.press('ControlOrMeta+Shift+l');
  trigger = page.locator('.vscode-model-picker__trigger-markdown').filter({ visible: true }).first();
  menu = page.getByTestId('model-picker-menu').filter({ visible: true });
  await trigger.waitFor({ timeout: 60000 });
  await trigger.click();
  await menu.locator('[data-model-picker-item-name="openvision-model:gpt:gpt-6.1-sol"]').getByText('Extra High', { exact: true }).waitFor();
  result.reasoningPersistsAfterRestart = true;
  result.legacyReasoningRetained = true;
  await menu.locator('[data-model-picker-item-name="openvision-model:deepseek:deepseek-v4-pro"]').hover();
  await page.getByText('Reasoning', { exact: true }).filter({ visible: true }).last().hover();
  await page.getByText('Off', { exact: true }).filter({ visible: true }).last().waitFor();
  assert.equal(await page.getByText('Medium', { exact: true }).filter({ visible: true }).count(), 0);
  assert.equal(await page.getByText('Extra High', { exact: true }).filter({ visible: true }).count(), 1,
    'Extra High remains only in the GPT row, not in DeepSeek reasoning choices');
  result.modelSpecificReasoning = true;
  assert.deepEqual(result.errors, []);
  result.success = true;
} catch (error) {
  result.error = error.stack;
  await page?.screenshot({ path: join(directory, 'failure.png') }).catch(() => {});
  process.exitCode = 1;
} finally {
  if (app) {
    const child = app.process();
    try { await app.close(); }
    catch (error) { result.cleanupError = error.stack; result.success = false; process.exitCode = 1; }
    result.hostExit = { pid: child.pid, exitCode: child.exitCode, signalCode: child.signalCode };
  }
  await writeFile(join(directory, 'result.json'), JSON.stringify(result, null, 2));
  console.log(JSON.stringify({ ...result, directory }, null, 2));
}
