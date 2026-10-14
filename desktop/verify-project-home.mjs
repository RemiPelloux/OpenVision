import assert from 'node:assert/strict';
import { mkdtemp, mkdir, writeFile, readFile } from 'node:fs/promises';
import { resolve, join } from 'node:path';
import { pathToFileURL } from 'node:url';
import { DatabaseSync } from 'node:sqlite';
import { _electron } from '../tooling/browser.mjs';
import { verificationRuntime } from './verification-runtime.mjs';
import { verificationSettings } from './verification-profile.mjs';
import { fileHash } from './import-files.mjs';
import { changeProjectInSameWindow } from './verify-project-window.mjs';

const root = resolve(import.meta.dirname, '..');
const { layout, appRoot } = await verificationRuntime(root);
const directory = await mkdtemp(join(root, 'logs/project-home-verification-'));
const profile = join(directory, 'profile'), project = join(directory, 'Aurora Studio');
const workspace = join(directory, 'Design System.code-workspace');
await mkdir(join(profile, 'User'), { recursive: true }); await mkdir(project);
await writeFile(join(project, 'README.md'), '# Aurora Studio\n');
await writeFile(workspace, JSON.stringify({ folders: [{ path: project }] }));
await writeFile(join(profile, 'User/settings.json'), JSON.stringify({ ...verificationSettings,
  'files.hotExit': 'off', 'files.autoSave': 'off', 'window.dialogStyle': 'native' }));
const result = { success: false, directory, checks: {}, errors: [], exits: [],
  scope: 'Native Windows desktop and disposable history fixture; no AI inference or network repositories.',
  workbenchHash: await fileHash(join(appRoot, 'out/vs/workbench/workbench.desktop.main.js')),
  mainHash: await fileHash(join(appRoot, 'out/main.js')),
  homeServiceHash: await fileHash(join(appRoot, 'out/vs/code/electron-sandbox/workbench/openvision-project-home-service.js')) };
let app, page;

async function launch(args) {
  const started = performance.now();
  const env = { ...process.env }; delete env.ELECTRON_RUN_AS_NODE;
  app = await _electron.launch({ executablePath: layout.executable, env, timeout: 60000,
    args: ['--user-data-dir', profile, '--extensions-dir', join(directory, 'extensions'), '--new-window',
      '--disable-updates', '--skip-release-notes', ...args] });
  page = await app.firstWindow(); page.setDefaultTimeout(20000);
  page.on('pageerror', error => result.errors.push(error.message));
  await page.waitForFunction(() => !!window.openvisionProjectHome, { timeout: 60000 });
  return started;
}

async function close() {
  if (!app) return;
  await app.evaluate(({ dialog }) => {
    const original = globalThis.projectSwitchMessageOriginal ?? dialog.showMessageBox;
    dialog.showMessageBox = async (...args) => {
      const options = args.at(-1);
      const discard = options.buttons?.findIndex(label => /don't save|discard/i.test(label.replaceAll('&', '')));
      return discard >= 0 ? { response: discard, checkboxChecked: false } : original(...args);
    };
  }).catch(() => {});
  const child = app.process(); await app.close(); app = undefined;
  result.exits.push(child.exitCode); assert.equal(child.exitCode, 0);
}

const screen = () => page.getByRole('region', { name: 'Welcome to OpenVision' });
const search = () => screen().getByRole('searchbox', { name: 'Find a project' });

try {
  await launch([project]); await page.locator('.openvision-project-home-button').waitFor();
  await page.locator('.openvision-project-home-button').click();
  await screen().getByRole('button', { name: 'Focus Aurora Studio', exact: true }).waitFor();
  const count = app.windows().length;
  await screen().getByRole('button', { name: 'Focus Aurora Studio', exact: true }).click();
  assert.equal(app.windows().length, count);
  result.checks.focusExisting = true;
  await close();
  const dbPath = join(profile, 'User/globalStorage/state.vscdb'), db = new DatabaseSync(dbPath);
  try {
    const entries = [{ folderUri: pathToFileURL(project).href, label: 'Aurora Studio' },
      { workspace: { id: 'fixture-design', configPath: pathToFileURL(workspace).href }, label: 'Design System' },
      ...Array.from({ length: 248 }, (_, index) => ({ folderUri: pathToFileURL(join(directory, `Archive ${index}`)).href, label: `Archive ${index}` }))];
    db.prepare('INSERT OR REPLACE INTO ItemTable (key,value) VALUES (?,?)')
      .run('history.recentlyOpenedPathsList', JSON.stringify({ entries }));
  } finally { db.close(); }
  const started = await launch(['--glass']);
  await screen().locator('.ov-project-row').first().waitFor();
  result.launchToProjectsMs = Math.round(performance.now() - started);
  assert.equal(await screen().locator('.ov-project-row').count(), 18);
  assert.match(await screen().locator('.ov-project-count').innerText(), /250 projects/);
  await screen().getByRole('button', { name: 'Next', exact: true }).click();
  assert.match(await screen().locator('.ov-project-count').innerText(), /^19–36/);
  await screen().getByRole('button', { name: 'Previous', exact: true }).click();
  result.checks.boundedHistoryPaging = true;
  await screen().getByRole('button', { name: 'Pin Aurora Studio', exact: true }).click();
  await screen().getByRole('button', { name: 'Pinned', exact: true }).click();
  assert.equal(await screen().locator('.ov-project-row').count(), 1);
  await screen().getByRole('button', { name: 'Recent', exact: true }).click();
  const queryStarted = performance.now();
  await search().fill('Archive 247');
  await screen().getByRole('button', { name: 'Open Archive 247', exact: true }).waitFor();
  result.searchRoundtripMs = Math.round(performance.now() - queryStarted);
  await screen().getByRole('button', { name: 'Open Archive 247', exact: true }).click();
  await screen().locator('.ov-welcome-status').filter({ hasText: 'moved or is unavailable' }).waitFor();
  assert.equal(app.windows().length, 1);
  await screen().getByRole('button', { name: 'Remove Archive 247 from history', exact: true }).click();
  await screen().getByText('No matching projects', { exact: true }).waitFor();
  assert.equal(await readFile(join(project, 'README.md'), 'utf8'), '# Aurora Studio\n');
  result.checks.searchMissingAndRemove = true;
  await search().fill('');
  await page.setViewportSize({ width: 1200, height: 820 });
  await page.screenshot({ path: join(directory, 'project-home.png') });
  await page.emulateMedia({ reducedMotion: 'reduce' });
  assert.equal(await screen().evaluate(node => node.getAnimations({ subtree: true }).length), 0);
  await page.setViewportSize({ width: 440, height: 720 });
  assert.equal(await screen().evaluate(node => node.scrollWidth <= node.clientWidth), true);
  await page.screenshot({ path: join(directory, 'project-home-compact.png') });
  result.checks.responsiveReducedMotion = true;
  result.processSample = await app.evaluate(({ app }) => app.getAppMetrics().map(item => ({ type: item.type, cpu: item.cpu, memory: item.memory })));
  await close();
  await launch(['--glass']);
  await screen().getByRole('button', { name: 'Pinned', exact: true }).click();
  await screen().getByRole('button', { name: 'Unpin Aurora Studio', exact: true }).waitFor();
  assert.equal(await screen().locator('.ov-project-row').count(), 1);
  result.checks.pinsPersistAcrossRestart = true;
  result.checks.startScreenReusesWindow = await changeProjectInSameWindow(app, page,
    () => screen().getByRole('button', { name: 'Open Aurora Studio', exact: true }).click());
  await page.locator('.openvision-project-home-button').click();
  await screen().getByRole('button', { name: 'Focus Aurora Studio', exact: true }).waitFor();
  await screen().getByRole('button', { name: 'Enter workspace', exact: true }).click();
  assert.equal(await page.locator('.ov-project-row').count(), 0);
  assert.equal(await page.locator('.ov-eye-lids').count(), 0);
  result.checks.openFolderAndDispose = true;
  await page.keyboard.press('Control+p');
  await page.locator('.quick-input-widget input[type="text"]').fill(join(project, 'README.md'));
  await page.locator('.quick-input-widget').getByText('README.md', { exact: true }).first().click();
  const editor = page.locator('.editor-instance .monaco-editor').filter({ visible: true }).first();
  await editor.locator('.inputarea').focus();
  await page.keyboard.press('Control+a'); await page.keyboard.insertText('Unsaved switch protection marker\n');
  await page.locator('.tabs-container .tab.dirty').waitFor();
  const originalTitle = await page.title();
  await app.evaluate(({ dialog }) => {
    globalThis.projectSwitchMessageOriginal = dialog.showMessageBox;
    dialog.showMessageBox = async (...args) => {
      const options = args.at(-1); globalThis.projectSwitchPrompt = options;
      return { response: options.cancelId, checkboxChecked: false };
    };
  });
  await page.locator('.openvision-project-home-button').click();
  await screen().getByRole('button', { name: 'Recent', exact: true }).click();
  await search().fill('Design System');
  await screen().getByRole('button', { name: 'Open Design System', exact: true }).click();
  for (let attempt = 0; attempt < 100 && !await app.evaluate(() => !!globalThis.projectSwitchPrompt); attempt++)
    await page.waitForTimeout(50);
  const prompt = await app.evaluate(() => globalThis.projectSwitchPrompt);
  assert.ok(Number.isInteger(prompt?.cancelId)); assert.match(JSON.stringify(prompt), /save/i);
  await page.waitForTimeout(500);
  assert.equal(await page.title(), originalTitle); assert.equal(app.windows().length, 1);
  assert.equal(await readFile(join(project, 'README.md'), 'utf8'), '# Aurora Studio\n');
  await app.evaluate(({ dialog }) => { dialog.showMessageBox = globalThis.projectSwitchMessageOriginal; });
  if (await screen().isVisible()) await screen().getByRole('button', { name: 'Enter workspace', exact: true }).click();
  assert.match((await editor.locator('.view-lines').innerText()).replaceAll('\u00a0', ' '), /Unsaved switch protection marker/);
  await editor.locator('.inputarea').focus(); await page.keyboard.press('Control+s');
  await page.locator('.tabs-container .tab.dirty').waitFor({ state: 'hidden' });
  assert.equal((await readFile(join(project, 'README.md'), 'utf8')).replaceAll('\r\n', '\n'), 'Unsaved switch protection marker\n');
  result.checks.cancelSwitchPreservesUnsavedEditor = true;
  await page.locator('.openvision-project-home-button').click(); await search().fill('Design System');
  result.checks.editorReusesWindow = await changeProjectInSameWindow(app, page,
    () => screen().getByRole('button', { name: 'Open Design System', exact: true }).click());
  assert.match(await page.title(), /Design System/);
  result.checks.openSavedWorkspace = true;
  await page.locator('.openvision-project-home-button').click();
  await page.bringToFront();
  await app.evaluate(({ dialog }) => {
    globalThis.projectHomeDialogOriginal = dialog.showOpenDialog;
    globalThis.projectHomeDialogCalls = [];
    dialog.showOpenDialog = async (...args) => {
      globalThis.projectHomeDialogCalls.push(args.at(-1).properties);
      return globalThis.projectHomeDialogSelection
        ? { canceled: false, filePaths: [globalThis.projectHomeDialogSelection] }
        : { canceled: true, filePaths: [] };
    };
  });
  for (const [index, name] of ['Open folder', 'Open workspace'].entries()) {
    await screen().getByRole('button', { name, exact: true }).click();
    for (let attempt = 0; attempt < 100; attempt++) {
      if (await app.evaluate(() => globalThis.projectHomeDialogCalls.length) > index) break;
      await page.waitForTimeout(50);
    }
    assert.equal(await app.evaluate(() => globalThis.projectHomeDialogCalls.length), index + 1);
  }
  result.checks.nativePickerDispatchAndCancel = true;
  for (const [name, path] of [['Open folder', project], ['Open workspace', workspace]]) {
    await app.evaluate((_electron, path) => { globalThis.projectHomeDialogSelection = path; }, path);
    result.checks[name === 'Open folder' ? 'folderPickerReusesWindow' : 'workspacePickerReusesWindow'] =
      await changeProjectInSameWindow(app, page, () => screen().getByRole('button', { name, exact: true }).click());
    await page.locator('.openvision-project-home-button').click();
  }
  await app.evaluate(({ dialog }) => { dialog.showOpenDialog = globalThis.projectHomeDialogOriginal; });
  await screen().getByRole('button', { name: 'Clone repository', exact: true }).click();
  await page.getByRole('textbox', { name: 'Repository URL', exact: true }).waitFor();
  await page.keyboard.press('Escape');
  await page.getByRole('textbox', { name: 'Repository URL', exact: true }).waitFor({ state: 'hidden' });
  result.checks.clonePromptAndCancel = true;
  await close(); assert.deepEqual(result.errors, []); result.success = true;
} catch (error) {
  result.error = error.stack;
  if (page) {
    await page.screenshot({ path: join(directory, 'failure.png') }).catch(() => {});
    await writeFile(join(directory, 'failure.txt'), await page.locator('body').innerText()).catch(() => {});
  }
} finally {
  try { await close(); } catch (error) { result.cleanupError = error.message; result.success = false; }
  await writeFile(join(directory, 'result.json'), JSON.stringify(result, null, 2));
  console.log(JSON.stringify(result, null, 2)); if (!result.success) process.exitCode = 1;
}
