import assert from 'node:assert/strict';
import { mkdir, mkdtemp, readFile, writeFile, copyFile } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { _electron } from '../tooling/browser.mjs';
import { loadRuntime } from './source-assembly.mjs';
import { fileHash } from './import-files.mjs';
import { verificationSettings } from './verification-profile.mjs';

assert.equal(process.platform, 'win32', 'Native development matrix currently covers Windows');
const root = resolve(import.meta.dirname, '..'), { layout } = await loadRuntime(root);
const directory = await mkdtemp(join(root, 'logs/development-verification-'));
const project = join(directory, 'project'), profile = join(directory, 'profile'), driver = join(directory, 'driver');
await Promise.all([mkdir(project), mkdir(join(profile, 'User'), { recursive: true }), mkdir(driver)]);
const config = { node: process.execPath, cmd: join(process.env.SystemRoot, 'System32/cmd.exe'),
  powershell: join(process.env.SystemRoot, 'System32/WindowsPowerShell/v1.0/powershell.exe'),
  powershellModules: join(process.env.SystemRoot, 'System32/WindowsPowerShell/v1.0/Modules') };
await writeFile(join(directory, 'config.json'), JSON.stringify(config));
await copyFile(join(root, 'desktop/verify-development-process.cjs'), join(directory, 'process.cjs'));
await writeFile(join(project, 'problem.c'), 'int main() {\n  int value = 0;\n  return value;\n}\n');
await writeFile(join(project, 'debug.cjs'), [
  "const fs = require('node:fs');", 'let value = 1;', 'value += 2;', '// break on the next statement',
  'value *= 3;', "const child = require('node:child_process').spawn(process.execPath, ['-e', 'setInterval(() => {}, 1000)'], {stdio:'ignore'});",
  "fs.writeFileSync(process.env.OPENVISION_DEBUG_MARKER, JSON.stringify({pid:process.pid,child:child.pid,value}));",
  'setInterval(() => {}, 1000);', ''
].join('\n'));
await writeFile(join(profile, 'User/settings.json'), JSON.stringify({ ...verificationSettings,
  'git.enabled': false, 'editor.accessibilitySupport': 'on', 'terminal.integrated.gpuAcceleration': 'off',
  'terminal.integrated.enablePersistentSessions': false, 'terminal.integrated.confirmOnExit': 'never',
  'terminal.integrated.confirmOnKill': 'never', 'terminal.integrated.shellIntegration.enabled': false,
  'task.problemMatchers.neverPrompt': true, 'debug.openDebug': 'openOnSessionStart', 'window.dialogStyle': 'custom' }));
await writeFile(join(driver, 'package.json'), JSON.stringify({ name: 'openvision-development-verifier',
  publisher: 'openvision-local-verification', version: '0.0.0', engines: { vscode: '^1.90.0' },
  main: './extension.cjs', activationEvents: ['onStartupFinished'], contributes: { problemMatchers: [{
    name: 'openvision-fixture', owner: 'openvision-fixture', fileLocation: 'absolute',
    pattern: { regexp: '^(.+):(\\d+):(\\d+): (error|warning): (.*)$', file: 1, line: 2, column: 3, severity: 4, message: 5 }
  }], taskDefinitions: [{ type: 'openvision-fixture', required: ['task'], properties: { task: { type: 'string' } } }] } }));
await copyFile(join(root, 'desktop/verify-development-extension.cjs'), join(driver, 'extension.cjs'));
const result = { directory, platform: process.platform, launcher: process.version, checks: {}, errors: [],
  main: await fileHash(join(root, 'source/app/out/main.js')),
  workbench: await fileHash(join(root, 'source/app/out/vs/workbench/workbench.desktop.main.js')),
  debugger: await fileHash(join(root, 'source/app/extensions/ms-vscode.js-debug/src/extension.js')),
  scope: 'Real Windows shells, native tasks/problem matcher and shipped Node debugger; declared synthetic workloads; no AI requests.' };
let app, page;
async function phase(expected) {
  const deadline = Date.now() + 90000;
  while (Date.now() < deadline) {
    const finished = await readFile(join(directory, 'extension-result.json'), 'utf8').catch(error => { if (error.code !== 'ENOENT') throw error; });
    if (finished) throw new Error(`Driver ended before ${expected}: ${finished}`);
    const current = await readFile(join(directory, 'phase.json'), 'utf8').catch(error => { if (error.code !== 'ENOENT') throw error; });
    if (current && JSON.parse(current).phase === expected) return;
    await page.waitForTimeout(200);
  }
  throw new Error(`Timed out waiting for ${expected}`);
}
const proceed = name => writeFile(join(directory, `${name}.continue`), 'continue');
async function absent(pid) {
  const deadline = Date.now() + 15000;
  while (Date.now() < deadline) {
    try { process.kill(pid, 0); } catch (error) { if (error.code === 'ESRCH') return; throw error; }
    await new Promise(resolve => setTimeout(resolve, 150));
  }
  throw new Error(`Fixture process still present after window close: ${pid}`);
}
try {
  const env = { ...process.env }; delete env.ELECTRON_RUN_AS_NODE;
  app = await _electron.launch({ executablePath: layout.executable, env, timeout: 60000,
    args: ['--user-data-dir', profile, '--extensions-dir', join(directory, 'extensions'), '--extensionDevelopmentPath', driver,
      '--new-window', '--disable-updates', '--skip-welcome', '--skip-release-notes', '--disable-telemetry', project] });
  const diagnosticTailLimit = 16384;
  app.process().stderr?.on('data', chunk => {
    result.hostStderrTail = ((result.hostStderrTail ?? '') + chunk.toString()).slice(-diagnosticTailLimit);
  });
  page = await app.firstWindow(); page.setDefaultTimeout(30000);
  page.on('pageerror', error => result.errors.push(error.message));
  await page.locator('.part.titlebar .openvision-local-profile').waitFor({ timeout: 60000 });
  for (const [name, width] of [['cmd', 1100], ['powershell', 1450]]) {
    await phase(`${name}-resize`);
    const initial = JSON.parse(await readFile(join(directory, `${name}.json`), 'utf8'));
    await app.evaluate(({ BrowserWindow }, width) => {
      const window = BrowserWindow.getAllWindows()[0];
      window.unmaximize(); window.setSize(width, 900);
    }, width);
    const deadline = Date.now() + 10000;
    let resized;
    while (Date.now() < deadline) {
      resized = JSON.parse(await readFile(join(directory, `${name}.json`), 'utf8'));
      if (resized.columns !== initial.columns || resized.rows !== initial.rows) break;
      await page.waitForTimeout(150);
    }
    assert.ok(resized.columns !== initial.columns || resized.rows !== initial.rows, 'Native PTY must resize');
    await page.screenshot({ path: join(directory, `${name}-terminal.png`) });
    const terminalText = await page.locator('.terminal-wrapper').filter({ visible: true }).innerText();
    await writeFile(join(directory, `${name}-terminal.txt`), terminalText);
    assert.ok(terminalText.includes('OpenVision café 日本語'), 'Native terminal must render Unicode output');
    result.checks[`${name}_unicode_rendered`] = true;
    await proceed(`${name}-resize`);
    await phase(`${name}-interrupt`);
    await page.locator('.terminal-wrapper .xterm-helper-textarea').filter({ visible: true }).focus();
    await page.keyboard.press('Control+c');
    await proceed(`${name}-interrupt`);
  }
  const deadline = Date.now() + 180000;
  while (Date.now() < deadline) {
    try { result.native = JSON.parse(await readFile(join(directory, 'extension-result.json'), 'utf8')); break; }
    catch (error) { if (error.code !== 'ENOENT') throw error; }
    await page.waitForTimeout(200);
  }
  assert.equal(result.native?.success, true, result.native?.failure ?? 'Native driver did not finish');
  assert.deepEqual(result.errors, []);
  result.success = true;
} catch (error) {
  result.success = false; result.failure = error.stack; process.exitCode = 1;
  await page?.screenshot({ path: join(directory, 'failure.png') }).catch(() => {});
  if (page) await writeFile(join(directory, 'failure.txt'), await page.locator('body').innerText().catch(() => 'closed'));
} finally {
  if (app) {
    const child = app.process();
    try { await app.close(); }
    catch (error) { result.success = false; result.failure ??= error.stack; process.exitCode = 1; }
    result.hostExit = child.exitCode;
    if (child.exitCode !== 0) {
      result.success = false; result.failure ??= `Owned host exited ${child.exitCode}`; process.exitCode = 1;
    }
  }
  if (result.native?.success) {
    try {
      await absent(result.native.closeParent.pid); await absent(result.native.closeChild.pid);
      await absent(result.native.closeParent.parent);
      result.checks.window_close_releases_parent_and_child = true;
      const state = JSON.parse(await readFile(join(profile, 'User/globalStorage/storage.json'), 'utf8'));
      const timings = state['lifecycle.lastShutdownJoinerTimings'];
      assert.ok(timings && Number.isFinite(timings.instanceLockfile), 'Final shutdown state must persist before filesystem disposal');
      result.checks.shutdown_state_saved = true;
    } catch (error) { result.success = false; result.cleanupFailure = error.stack; process.exitCode = 1; }
  }
  await writeFile(join(directory, 'result.json'), JSON.stringify(result, null, 2));
  console.log(JSON.stringify(result, null, 2));
}
