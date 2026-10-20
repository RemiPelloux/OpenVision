import assert from 'node:assert/strict';
import { mkdir, mkdtemp, writeFile, readFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { _electron } from '../tooling/browser.mjs';
import { verificationRuntime } from './verification-runtime.mjs';
import { verificationSettings } from './verification-profile.mjs';
import { linuxSandboxArguments } from './platform.mjs';
import { enterWorkspace } from './verification-workspace.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const { layout } = await verificationRuntime(root);
await mkdir(join(root, 'logs'), { recursive: true });
const directory = await mkdtemp(join(root, 'logs/project-verification-'));
const profile = join(directory, 'profile');
const project = join(directory, 'primary');
const secondary = join(directory, 'secondary');
await Promise.all([mkdir(join(profile, 'User'), { recursive: true }),
  mkdir(join(project, '.vscode'), { recursive: true }), mkdir(secondary)]);
await writeFile(join(profile, 'User/settings.json'), JSON.stringify({ ...verificationSettings,
  'editor.quickSuggestions': false, 'git.openRepositoryInParentFolders': 'never',
  'task.allowAutomaticTasks': 'off', 'window.restoreWindows': 'all',
  'files.hotExit': 'onExitAndWindowClose', 'terminal.integrated.enablePersistentSessions': false }));
const file = join(project, 'editing.txt');
const original = 'OpenVision project fixture\nUniqueSearchPrimary\n';
const changed = 'OpenVision saved change — café 日本語\nUniqueSearchPrimary\n';
await writeFile(file, original);
await writeFile(join(secondary, 'other.txt'), 'UniqueSearchSecondary\n');
const workspace = join(directory, 'fixture.code-workspace');
await writeFile(workspace, JSON.stringify({ folders: [{ path: project }, { path: secondary }] }));
const marker = join(project, 'task-result.json');
await writeFile(join(project, 'task-fixture.cjs'), [
  "const fs = require('node:fs');",
  "const result = {message: 'OpenVision task café 日本語', env: process.env.OPENVISION_TASK_FIXTURE, cwd: process.cwd(), pid: process.pid};",
  "fs.writeFileSync('task-result.json', JSON.stringify(result));",
  'console.log(result.message);'
].join('\n'));
await writeFile(join(project, '.vscode/tasks.json'), JSON.stringify({ version: '2.0.0', tasks: [{
  label: 'OpenVision Project Fixture', type: 'process', command: process.execPath,
  args: ['${workspaceFolder}/task-fixture.cjs'], options: { cwd: '${workspaceFolder}',
    env: { OPENVISION_TASK_FIXTURE: 'local-profile-only' } }, problemMatcher: [],
  presentation: { reveal: 'always', panel: 'dedicated', focus: true, clear: true }
}] }));
let app, page;
const errors = [];
const result = { checked_at: new Date().toISOString(), platform: process.platform,
  node: process.version, directory, checks: {}, errors,
  limitations: ['Windows evidence does not verify macOS/Linux.',
    'Does not verify large projects, permissions, symlinks, watchers, debugger or Git conflict handling.',
    'One process task verifies terminal integration; interactive shell lifecycle and descendant cleanup remain unverified.'] };

async function launch() {
  const env = { ...process.env }; delete env.ELECTRON_RUN_AS_NODE;
  app = await _electron.launch({ executablePath: layout.executable, env, timeout: 60000,
    args: ['--user-data-dir', profile, '--extensions-dir', join(directory, 'extensions'),
      '--new-window', '--disable-updates', '--skip-welcome', '--skip-release-notes',
      '--disable-telemetry', '--disable-crash-reporter',
      ...(process.platform === 'linux' ? await linuxSandboxArguments(layout.host) : []), workspace, file] });
  page = await app.firstWindow();
  page.setDefaultTimeout(15000);
  page.on('pageerror', error => errors.push(error.message));
  await page.locator('.part.titlebar .openvision-local-profile').waitFor({ state: 'attached', timeout: 60000 }); await enterWorkspace(page);
  await page.waitForTimeout(8000);
}

async function diskEquals(expected) {
  const deadline = Date.now() + 10000;
  while (Date.now() < deadline) {
    if (await readFile(file, 'utf8') === expected) return;
    await page.waitForTimeout(100);
  }
  assert.equal(await readFile(file, 'utf8'), expected);
}

async function command(name) {
  await page.keyboard.press('Escape');
  await page.keyboard.press('ControlOrMeta+Shift+p');
  await page.locator('.quick-input-widget input[type="text"]').fill(`>${name}`);
  await page.locator('.quick-input-widget').getByText(name, { exact: true }).first().click();
}

async function editAndSave() {
  await page.locator('.tabs-container .tab').filter({ hasText: 'editing.txt' }).first().click();
  await page.locator('.monaco-editor .inputarea').first().focus();
  await page.keyboard.press('ControlOrMeta+Home');
  await page.keyboard.press('Shift+End');
  await page.keyboard.insertText(changed.split('\n')[0]);
  await page.keyboard.press('ControlOrMeta+s');
  await diskEquals(changed);
  result.checks.unicode_edit_save = true;
  // Native composition splits Unicode input into several undo stops.
  // Verify every stop can be unwound and replayed instead of assuming one event.
  let undoSteps = 0;
  while (await readFile(file, 'utf8') !== original && undoSteps < 20) {
    await page.keyboard.press('ControlOrMeta+z');
    await page.keyboard.press('ControlOrMeta+s');
    await page.waitForTimeout(400);
    undoSteps++;
  }
  await diskEquals(original);
  result.checks.undo_save = { steps: undoSteps };
  const redoKey = process.platform === 'win32' ? 'Control+y' : 'ControlOrMeta+Shift+z';
  for (let index = 0; index < undoSteps; index++) await page.keyboard.press(redoKey);
  await page.keyboard.press('ControlOrMeta+s');
  await diskEquals(changed);
  result.checks.redo_save = true;
}

async function searchBothRoots() {
  await page.keyboard.press('ControlOrMeta+Shift+f');
  const search = page.locator('.search-view .search-widget textarea').first();
  await search.fill('UniqueSearch');
  await search.press('Enter');
  await page.getByText('UniqueSearchPrimary', { exact: true }).first().waitFor();
  await page.getByText('UniqueSearchSecondary', { exact: true }).first().waitFor();
  result.checks.search_both_workspace_roots = true;
  await page.screenshot({ path: join(directory, 'multi-root-search.png') });
}

async function runTask() {
  await command('Tasks: Run Task');
  await page.locator('.quick-input-widget input[type="text"]').fill('OpenVision Project Fixture');
  await page.locator('.quick-input-widget').getByText('OpenVision Project Fixture', { exact: true }).first().click();
  const deadline = Date.now() + 20000;
  let task;
  while (Date.now() < deadline) {
    try { task = JSON.parse(await readFile(marker, 'utf8')); break; } catch (error) {
      if (error.code !== 'ENOENT' && !(error instanceof SyntaxError)) throw error;
      await page.waitForTimeout(200);
    }
  }
  assert.ok(task, 'Native task must write its result');
  assert.equal(task.env, 'local-profile-only');
  assert.equal(resolve(task.cwd), resolve(project));
  assert.equal(task.message, 'OpenVision task café 日本語');
  await page.locator('.terminal-wrapper').first().waitFor();
  await page.screenshot({ path: join(directory, 'native-task.png') });
  result.checks.native_process_task = task;
}

try {
  await launch();
  await editAndSave();
  await searchBothRoots();
  await runTask();
  assert.deepEqual(errors, []);
  result.success = true;
} catch (error) {
  result.success = false;
  result.failure = error.stack;
  if (page) {
    await page.screenshot({ path: join(directory, 'failure.png') }).catch(() => {});
    await writeFile(join(directory, 'failure.txt'), await page.locator('body').innerText()).catch(() => {});
    await writeFile(join(directory, 'failure-inputs.json'), JSON.stringify(await page.locator('input, textarea').evaluateAll(
      elements => elements.map(element => ({ tag: element.tagName, label: element.getAttribute('aria-label'),
        placeholder: element.getAttribute('placeholder'), classes: element.className }))), null, 2)).catch(() => {});
  }
  throw error;
} finally {
  if (app) await app.close();
  await writeFile(join(directory, 'result.json'), JSON.stringify(result, null, 2));
  console.log(JSON.stringify(result, null, 2));
}
