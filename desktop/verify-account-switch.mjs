import assert from 'node:assert/strict';
import { mkdtemp, mkdir, readFile, writeFile } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { _electron } from '../tooling/browser.mjs';
import { verificationRuntime } from './verification-runtime.mjs';
import { linuxSandboxArguments } from './platform.mjs';
import { verificationSettings } from './verification-profile.mjs';

const root = resolve(import.meta.dirname, '..'), { layout } = await verificationRuntime(root);
const directory = await mkdtemp(join(root, 'logs/account-switch-'));
const profile = join(directory, 'profile'), project = join(directory, 'project');
const driver = join(directory, 'driver');
const worker = join(directory, 'extensions/openvision-test.worker-handoff-verifier-0.0.1');
await mkdir(join(profile, 'User'), { recursive: true }); await mkdir(project);
await mkdir(driver); await mkdir(worker, { recursive: true });
await writeFile(join(worker, 'package.json'), JSON.stringify({ name: 'worker-handoff-verifier', publisher: 'openvision-test',
  version: '0.0.1', engines: { vscode: '^1.96.2' }, browser: './extension.js', extensionKind: ['web'], activationEvents: ['onStartupFinished'] }));
await writeFile(join(worker, 'extension.js'), 'exports.activate = () => {};');
await writeFile(join(driver, 'package.json'), JSON.stringify({ name: 'account-switch-verifier', publisher: 'openvision-test',
  version: '0.0.1', engines: { vscode: '^1.96.2' }, main: './extension.cjs', activationEvents: ['onStartupFinished'] }));
await writeFile(join(driver, 'extension.cjs'), `
const vscode = require('vscode'), fs = require('node:fs/promises');
exports.activate = async context => {
  const documentFile = ${JSON.stringify(join(project, 'switch.txt'))};
  const snapshot = document => {
    if (require('node:path').relative(document.uri.fsPath, documentFile) === '') return fs.writeFile(${JSON.stringify(join(directory, 'document.json'))},
      JSON.stringify({ text: document.getText(), dirty: document.isDirty }));
  };
  context.subscriptions.push(vscode.workspace.onDidChangeTextDocument(event => snapshot(event.document)));
  await Promise.all(vscode.workspace.textDocuments.map(snapshot));
  if (context.globalState.get('installed')) return;
  const result = {};
  try {
    const { installOfficialExtension } = require(${JSON.stringify(join(root, 'desktop/account-integration-download.cjs'))});
    const { providers } = require(${JSON.stringify(join(root, 'desktop/account-integration-catalog.cjs'))});
    for (const id of ['codex', 'claude']) {
      await installOfficialExtension(vscode, context, providers[id]);
      await vscode.commands.executeCommand('openvision.accounts.open', id);
      const extension = vscode.extensions.getExtension(providers[id].extensionId);
      result[id] = { version: extension.packageJSON.version, active: extension.isActive };
    }
    await vscode.window.showTextDocument(vscode.Uri.file(${JSON.stringify(join(project, 'switch.txt'))}), { preview: false });
    await context.globalState.update('installed', true);
    result.success = true;
  } catch (error) { result.error = String(error.stack ?? error); }
  await fs.writeFile(${JSON.stringify(join(directory, 'installed.json'))}, JSON.stringify(result, null, 2));
};`);
const file = join(project, 'switch.txt'); await writeFile(file, 'original\n');
await writeFile(join(profile, 'User/settings.json'), JSON.stringify({ ...verificationSettings, 'git.openRepositoryInParentFolders': 'never' }));
const result = { directory, success: false, checks: {}, scope: 'Native account-host handoff after dynamic installation of real official extensions, no completed OAuth or inference.' };
async function accountStatus(page) {
  return page.evaluate(() => new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(Error('Native account status did not settle within 10 seconds.')), 10000);
    window.openvisionProjectHome.accountStatus().then(resolve, reject).finally(() => clearTimeout(timer));
  }));
}
let app;
try {
  const env = { ...process.env }; delete env.ELECTRON_RUN_AS_NODE;
  app = await _electron.launch({ executablePath: layout.executable, env, timeout: 60000,
    args: ['--user-data-dir', profile, '--extensions-dir', join(directory, 'extensions'), '--extensionDevelopmentPath', driver, '--new-window',
      '--disable-updates', '--disable-telemetry', '--disable-crash-reporter',
      ...(process.platform === 'linux' ? await linuxSandboxArguments(layout.host) : []), project, file] });
  const page = await app.firstWindow(); page.setDefaultTimeout(30000);
  await page.locator('.part.titlebar .openvision-local-profile').waitFor({ timeout: 60000 });
  for (let attempt = 0; attempt < 240; attempt++) {
    try { result.installation = JSON.parse(await readFile(join(directory, 'installed.json'), 'utf8')); break; }
    catch (error) { if (error.code !== 'ENOENT') throw error; }
    await page.waitForTimeout(1000);
  }
  assert.equal(result.installation?.success, true, result.installation?.error ?? 'Dynamic official extension installation did not settle.');
  assert.ok(result.installation.codex.active && result.installation.claude.active);
  await accountStatus(page);
  const native = await app.evaluate(({ BrowserWindow }) => ({ pid: process.pid, windows: BrowserWindow.getAllWindows().map(w => w.id) }));
  await page.locator('.editor-instance .monaco-editor .inputarea').filter({ visible: true }).first().focus();
  await page.keyboard.press('ControlOrMeta+a'); await page.keyboard.insertText('unsaved account-switch marker');
  const accounts = await page.evaluate(async () => {
    const service = window.openvisionProjectHome;
    return { first: await service.createAccount('codex', 'Personal test'),
      second: await service.createAccount('codex', 'Work test'), claude: await service.createAccount('claude', 'Claude test') };
  });
  for (const account of [accounts.first, accounts.claude, accounts.second, accounts.first]) {
    result.switches ??= [];
    const step = { provider: account.provider, accountId: account.id, cancelledDuringHandoff: 0 };
    result.switches.push(step);
    await page.evaluate(({ provider, id }) => Promise.race([
      window.openvisionProjectHome.selectAccount(provider, id),
      new Promise((_, reject) => setTimeout(() => reject(Error('Account host handoff did not settle within 30 seconds.')), 30000)),
    ]), account);
    const deadline = Date.now() + 30000; let current;
    while (Date.now() < deadline) {
      try { current = await accountStatus(page); }
      catch (error) {
        if (!error.message.includes('Canceled')) throw error;
        step.cancelledDuringHandoff++; current = undefined;
      }
      if (current?.providers.find(item => item.id === account.provider)?.accountId === account.id) break;
      await page.waitForTimeout(200);
    }
    assert.equal(current?.providers.find(item => item.id === account.provider)?.accountId, account.id);
    step.verified = true;
    const after = await app.evaluate(({ BrowserWindow }) => ({ pid: process.pid, windows: BrowserWindow.getAllWindows().map(w => w.id) }));
    assert.deepEqual(after, native, 'Account switch must retain native main and window IDs');
    if (account.id === accounts.second.id || account.id === accounts.first.id && current.providers.find(item => item.id === 'claude')?.accountId)
      assert.equal(current.providers.find(item => item.id === 'claude').accountId, accounts.claude.id);
  }
  result.checks.independentProfiles = true; result.checks.sameNativeWindowAndProcess = native;
  const document = JSON.parse(await readFile(join(directory, 'document.json'), 'utf8'));
  assert.match(document.text, /unsaved account-switch marker/); assert.equal(document.dirty, true);
  result.checks.unsavedEditorRetained = true;
  assert.equal(await readFile(file, 'utf8'), 'original\n');
  result.checks.unsavedDiskUnchanged = true;
  await page.evaluate(() => window.openvisionProjectHome.models());
  await page.locator('.openvision-model-settings').waitFor();
  await page.getByRole('combobox', { name: 'Codex account', exact: true }).waitFor();
  assert.equal(await page.getByRole('combobox', { name: 'Codex account', exact: true }).getAttribute('data-value'), accounts.first.id);
  await page.screenshot({ path: join(directory, 'account-selectors.png') });
  result.success = true;
  // Dispose only the unsaved document this verifier created.
  await page.keyboard.press('ControlOrMeta+1');
  await page.evaluate(() => window.openvisionProjectHome.models());
} catch (error) { result.error = error.stack; }
finally {
  if (app) {
    const child = app.process(), page = app.windows()[0];
    const closing = app.close().catch(error => { result.cleanupError = error.message; });
    await page?.getByRole('button', { name: /Don't Save|Do not Save/ }).click({ timeout: 5000 }).catch(() => {});
    await closing; result.launcherExitCode = child.exitCode;
  }
  await writeFile(join(directory, 'result.json'), JSON.stringify(result, null, 2)); console.log(JSON.stringify(result, null, 2));
}
if (!result.success) process.exitCode = 1;
