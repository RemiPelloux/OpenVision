import assert from 'node:assert/strict';
import { mkdir, mkdtemp, readFile, readdir, writeFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { _electron } from '../tooling/browser.mjs';
import { loadRuntime } from './source-assembly.mjs';
import { fileHash } from './import-files.mjs';
import { verificationSettings } from './verification-profile.mjs';
import { linuxSandboxArguments } from './platform.mjs';
import { enterWorkspace } from './verification-workspace.mjs';

// Deliberately drives the user-visible editor, rather than executeRenameProvider
// or workspace.applyEdit. The bundled TypeScript service supplies all results.
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const { layout } = await loadRuntime(root);
await mkdir(join(root, 'logs'), { recursive: true });
const directory = await mkdtemp(join(root, 'logs/language-ui-'));
const profile = join(directory, 'profile'), project = join(directory, 'project');
await Promise.all([mkdir(join(profile, 'User'), { recursive: true }), mkdir(project)]);
const original = {
  'library.ts': 'export function greet(name: string): string { return `Hello ${name}`; }\n',
  'consumer.ts': 'import { greet } from "./library";\nconsole.log(greet("OpenVision"));\n',
  'other.ts': 'import { greet } from "./library";\nexport const other = greet("second file");\n',
};
await Promise.all(Object.entries(original).map(([name, content]) => writeFile(join(project, name), content)));
await writeFile(join(project, 'tsconfig.json'), JSON.stringify({ compilerOptions: {
  strict: true, noEmit: true, target: 'ES2022', module: 'CommonJS' }, include: ['*.ts'] }));
await writeFile(join(profile, 'User/settings.json'), JSON.stringify({ ...verificationSettings,
  'editor.quickSuggestions': false, 'git.openRepositoryInParentFolders': 'never',
  'typescript.disableAutomaticTypeAcquisition': true, 'typescript.tsserver.log': 'verbose',
  'files.autoSave': 'off', 'files.eol': '\n', 'window.restoreWindows': 'none',
  'editor.rename.enablePreview': false, 'editor.stickyScroll.enabled': false,
  'workbench.editor.enablePreview': false }));
const paths = ['build/source-build.json', 'source/app/out/vs/workbench/workbench.desktop.main.js',
  'source/app/extensions/typescript-language-features/dist/extension.js',
  'source/app/extensions/node_modules/typescript/lib/typescript.js', 'desktop/verify-language-ui.mjs'];
const identities = Object.fromEntries(await Promise.all(paths.map(async path => [path, await fileHash(join(root, path))])));
const result = { checked_at: new Date().toISOString(), directory, platform: process.platform,
  arch: process.arch, node: process.version, identities, executable_sha256: await fileHash(layout.executable),
  compiler: JSON.parse(await readFile(join(root, 'source/app/extensions/node_modules/typescript/package.json'), 'utf8')).version,
  checks: {}, limitations: ['Three-file TypeScript fixture, Windows native desktop only in the recorded run.',
    'No replacement provider, development extension, AI request or user-profile access is used.',
    'Does not establish all language versions, menu/accessibility paths, concurrency, merge decisions or performance budgets.'] };
let app, page;
const errors = [];

async function command(name) {
  await page.keyboard.press('ControlOrMeta+Shift+p');
  const picker = page.locator('.quick-input-widget');
  await picker.locator('input[type="text"]').fill(`>${name}`);
  await picker.getByText(name, { exact: true }).first().click();
  await picker.waitFor({ state: 'hidden' });
}

async function openDeclaration() {
  await page.keyboard.press('Escape');
  await page.keyboard.press('ControlOrMeta+p');
  const picker = page.locator('.quick-input-widget');
  await picker.locator('input[type="text"]').fill(`${join(project, 'library.ts')}:1:18`);
  await picker.getByText('library.ts', { exact: true }).first().waitFor();
  await page.keyboard.press('Enter');
  await picker.waitFor({ state: 'hidden' });
  await page.locator('.editor-instance .monaco-editor .inputarea').first().waitFor({ state: 'attached' });
}

async function savedExactly(expected, label) {
  const deadline = Date.now() + 10000;
  let actual;
  while (Date.now() < deadline) {
    actual = Object.fromEntries(await Promise.all(Object.keys(expected).map(async name =>
      [name, await readFile(join(project, name), 'utf8')])));
    if (JSON.stringify(actual) === JSON.stringify(expected)) break;
    await page.waitForTimeout(100);
  }
  assert.deepEqual(actual, expected, label);
  result.checks[label] = { exact_utf8_bytes: true, files: Object.keys(expected),
    sha256: Object.fromEntries(await Promise.all(Object.keys(expected).map(async name =>
      [name, await fileHash(join(project, name))]))) };
}

async function referencesUI() {
  await openDeclaration();
  await waitForProject();
  await page.keyboard.press('Shift+F12');
  const peek = page.locator('.reference-zone-widget');
  await peek.waitFor({ state: 'visible', timeout: 60000 });
  const tree = peek.locator('.ref-tree');
  await tree.getByText('consumer.ts', { exact: true }).waitFor();
  const names = Object.keys(original);
  for (const name of names) await tree.getByText(name, { exact: true }).waitFor();
  result.checks.references_visible = { text: await peek.innerText(), files: names };
  assert.match(result.checks.references_visible.text, /References \(5\)/);
  await page.screenshot({ path: join(directory, 'references.png') });
  const consumer = tree.locator('.monaco-list-row').filter({ has: page.getByText('consumer.ts', { exact: true }) });
  await consumer.locator('.monaco-tl-twistie').click();
  const reference = tree.getByText('console.log(greet("OpenVision"));', { exact: true });
  await reference.click();
  await peek.locator('.preview .view-lines').getByText(/console/).waitFor();
  assert.match(await peek.locator('.preview .view-lines').innerText(), /OpenVision/);
  await page.screenshot({ path: join(directory, 'references-selected.png') });
  result.checks.references_selection = { text: await peek.innerText(), preview_consumer: true };
  await reference.dblclick();
  await peek.waitFor({ state: 'hidden' });
  await page.locator('.tab.active').getByText('consumer.ts', { exact: true }).waitFor();
  result.checks.references_open = { active_file: 'consumer.ts' };
}

async function waitForProject() {
  const base = join(profile, 'logs'), deadline = Date.now() + 60000;
  while (Date.now() < deadline) {
    const names = await readdir(base, { recursive: true }).catch(() => []);
    for (const name of names.filter(name => name.endsWith('tsserver.log'))) {
      const content = await readFile(join(base, name), 'utf8');
      if (content.includes('"event": "projectLoadingFinish"') && content.includes('tsconfig.json')) {
        result.checks.configured_project_ready = { log: join(base, name) };
        return;
      }
    }
    await page.waitForTimeout(200);
  }
  throw new Error('Bundled semantic TypeScript server did not finish loading the fixture project');
}

async function renameUI() {
  await openDeclaration();
  await page.keyboard.press('F2');
  const box = page.locator('.rename-box input');
  await box.waitFor({ state: 'visible', timeout: 60000 });
  assert.equal(await box.inputValue(), 'greet');
  await box.fill('welcome');
  await page.screenshot({ path: join(directory, 'rename-input.png') });
  await page.keyboard.press('Enter');
  await box.waitFor({ state: 'hidden' });
  await command('File: Save All');
  const renamed = Object.fromEntries(Object.entries(original).map(([name, text]) => [name, text.replaceAll('greet', 'welcome')]));
  await savedExactly(renamed, 'rename_save_all');
  await page.locator('.editor-instance .monaco-editor .inputarea').first().focus();
  await page.keyboard.press('ControlOrMeta+z');
  const confirmation = page.getByRole('button', { name: 'Undo in 3 Files', exact: true });
  if (await confirmation.waitFor({ state: 'visible', timeout: 1500 }).then(() => true, () => false)) await confirmation.click();
  await writeFile(join(directory, 'after-undo.txt'), await page.locator('body').innerText());
  await command('File: Save All');
  await savedExactly(original, 'rename_undo_save_all');
  await page.locator('.editor-instance .monaco-editor .inputarea').first().focus();
  await page.keyboard.press(process.platform === 'darwin' ? 'Meta+Shift+z' : 'Control+y');
  await command('File: Save All');
  await savedExactly(renamed, 'rename_redo_save_all');
}

try {
  const env = { ...process.env }; delete env.ELECTRON_RUN_AS_NODE;
  app = await _electron.launch({ executablePath: layout.executable, env, timeout: 60000,
    args: ['--user-data-dir', profile, '--extensions-dir', join(directory, 'extensions'),
      '--new-window', '--disable-updates', '--skip-welcome', '--skip-release-notes',
      '--disable-telemetry', '--disable-crash-reporter',
      ...(process.platform === 'linux' ? await linuxSandboxArguments(layout.host) : []), project] });
  page = await app.firstWindow();
  page.setDefaultTimeout(20000);
  page.on('pageerror', error => errors.push(error.message));
  await page.locator('.part.titlebar .openvision-local-profile').waitFor({ state: 'attached', timeout: 60000 });
  await enterWorkspace(page);
  await referencesUI();
  await renameUI();
  for (const path of paths) assert.equal(await fileHash(join(root, path)), identities[path], `Input changed: ${path}`);
  assert.deepEqual(errors, []);
  result.input_build_unchanged = true;
  await page.screenshot({ path: join(directory, 'complete.png') });
  result.success = true;
} catch (error) {
  result.success = false; result.failure = error.stack; process.exitCode = 1;
  if (page) {
    await page.screenshot({ path: join(directory, 'failure.png') }).catch(() => {});
    await writeFile(join(directory, 'failure.txt'), await page.locator('body').innerText()).catch(() => {});
    await writeFile(join(directory, 'failure-dom.html'), await page.content()).catch(() => {});
  }
} finally {
  if (app) {
    const child = app.process();
    await app.close();
    result.host_exit = { pid: child.pid, code: child.exitCode, signal: child.signalCode };
    if (child.exitCode !== 0) { result.success = false; result.cleanup_failure = 'Native host did not exit 0'; process.exitCode = 1; }
  }
  result.page_errors = errors;
  const base = join(profile, 'logs');
  const logs = await readdir(base, { recursive: true }).catch(() => []);
  result.tsserver_logs = await Promise.all(logs.filter(path => path.endsWith('tsserver.log')).map(async name => {
    const path = join(base, name), content = await readFile(path, 'utf8');
    return { path, sha256: await fileHash(path), version: content.match(/Version: ([^\r\n]+)/)?.[1],
      references_request: content.includes('"command":"references"'), rename_request: content.includes('"command":"rename"') };
  }));
  if (result.success && !result.tsserver_logs.some(log => log.version === result.compiler && log.references_request && log.rename_request)) {
    result.success = false; result.failure = 'Expected bundled tsserver references and rename requests are missing'; process.exitCode = 1;
  }
  await writeFile(join(directory, 'result.json'), JSON.stringify(result, null, 2));
  console.log(JSON.stringify(result, null, 2));
}
