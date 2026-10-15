import assert from 'node:assert/strict';
import { mkdir, mkdtemp, writeFile, readFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { _electron } from '../tooling/browser.mjs';
import { loadRuntime } from './source-assembly.mjs';
import { verificationSettings } from './verification-profile.mjs';
import { fileHash } from './import-files.mjs';
import { randomUUID } from 'node:crypto';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const directory = await mkdtemp(join(root, 'logs/account-integration-'));
const profile = join(directory, 'profile'), driver = join(directory, 'driver');
const extensions = join(directory, 'extensions'), project = join(directory, 'project');
await Promise.all([mkdir(join(profile, 'User'), { recursive: true }), mkdir(driver), mkdir(extensions), mkdir(project)]);
await writeFile(join(profile, 'User/settings.json'), JSON.stringify({ ...verificationSettings,
  'git.openRepositoryInParentFolders': 'never', 'window.restoreWindows': 'none' }));
await writeFile(join(driver, 'package.json'), JSON.stringify({ name: 'accounts-verifier', publisher: 'openvision-test',
  version: '0.0.1', engines: { vscode: '^1.96.2' }, main: './extension.cjs', activationEvents: ['onStartupFinished'] }));
await writeFile(join(driver, 'extension.cjs'), `
const vscode = require('vscode'), fs = require('node:fs/promises');
exports.activate = async context => {
  const out = {};
  try {
    out.initial = await vscode.commands.executeCommand('openvision.accounts.status');
    const { installOfficialExtension } = require(${JSON.stringify(join(root, 'desktop/account-integration-download.cjs'))});
    const { providers } = require(${JSON.stringify(join(root, 'desktop/account-integration-catalog.cjs'))});
    for (const id of ['codex', 'claude']) {
      await installOfficialExtension(vscode, context, providers[id]);
      out[id] = await vscode.commands.executeCommand('openvision.accounts.open', id);
    }
    out.final = await vscode.commands.executeCommand('openvision.accounts.status');
    out.success = true;
  } catch (error) { out.error = String(error.stack ?? error); }
  await fs.writeFile(${JSON.stringify(join(directory, 'native.json'))}, JSON.stringify(out, null, 2));
};`);

const codexId = randomUUID(), claudeId = randomUUID();
const env = { ...process.env, CODEX_HOME: join(directory, codexId), CLAUDE_CONFIG_DIR: join(directory, claudeId),
  OPENVISION_CODEX_ACCOUNT_ID: codexId, OPENVISION_CLAUDE_ACCOUNT_ID: claudeId,
  CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC: '1', DISABLE_TELEMETRY: '1', DO_NOT_TRACK: '1' };
for (const key of ['ELECTRON_RUN_AS_NODE', 'OPENAI_API_KEY', 'ANTHROPIC_API_KEY', 'ANTHROPIC_AUTH_TOKEN',
  'CLAUDE_CODE_OAUTH_TOKEN', 'CODEX_ACCESS_TOKEN']) delete env[key];
await mkdir(env.CODEX_HOME);
await mkdir(env.CLAUDE_CONFIG_DIR);
await writeFile(join(env.CODEX_HOME, 'config.toml'), '[analytics]\nenabled = false\n[feedback]\nenabled = false\n');
const { layout } = await loadRuntime(root);
const result = { directory, platform: process.platform, checkedAt: new Date().toISOString(),
  limitations: ['Uses real registry downloads and official native extensions, isolated account directories, no submitted prompt or completed OAuth.',
    'No account entitlement/inference, macOS/Linux, provider telemetry exclusion, or OAuth browser callback verification.'],
  identities: { webview: await fileHash(join(root, 'source/app/out/vs/workbench/contrib/webview/browser/pre/index.html')) } };
let app;
try {
  app = await _electron.launch({ executablePath: layout.executable, env, timeout: 60000,
    args: ['--user-data-dir', profile, '--extensions-dir', extensions, '--extensionDevelopmentPath', driver,
      '--new-window', '--disable-updates', '--skip-welcome', '--skip-release-notes', '--disable-telemetry', '--disable-crash-reporter', project] });
  await app.evaluate(({ shell }) => { shell.openExternal = async () => {}; });
  const page = await app.firstWindow();
  for (let attempt = 0; attempt < 240; attempt++) {
    try { result.native = JSON.parse(await readFile(join(directory, 'native.json'), 'utf8')); break; }
    catch (error) { if (error.code !== 'ENOENT') throw error; }
    await page.waitForTimeout(1000);
  }
  assert.equal(result.native?.success, true, result.native?.error ?? 'Official integration installation did not complete.');
  assert.ok(result.native.initial.providers.every(item => !item.installed));
  assert.ok(result.native.final.providers.every(item => item.installed && item.active && item.signedIn === false));
  for (let attempt = 0; attempt < 60; attempt++) {
    const texts = await Promise.all(page.frames().filter(frame => frame.parentFrame()).map(frame => frame.locator('body').innerText({ timeout: 1000 }).catch(() => '')));
    result.panels = { codex: texts.some(text => /Codex in your IDE|Sign in with ChatGPT/.test(text)),
      claude: texts.some(text => /Claude|Continue in browser|Log in|Log In/.test(text)) };
    if (result.panels.codex && result.panels.claude) break;
    await page.waitForTimeout(1000);
  }
  assert.ok(result.panels.codex && result.panels.claude, 'Both official panels must render visible onboarding or sign-in content.');
  await page.screenshot({ path: join(directory, 'panels.png') });
  result.success = true;
} catch (error) { result.success = false; result.error = String(error.stack ?? error); process.exitCode = 1; }
finally {
  if (app) { const launcher = app.process(); await app.close(); result.launcherExitCode = launcher.exitCode; }
  await writeFile(join(directory, 'result.json'), JSON.stringify(result, null, 2) + '\n');
  console.log(JSON.stringify(result, null, 2));
}
