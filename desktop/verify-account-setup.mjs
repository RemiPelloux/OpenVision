import assert from 'node:assert/strict';
import { mkdtemp, mkdir, writeFile } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { _electron } from '../tooling/browser.mjs';
import { verificationRuntime } from './verification-runtime.mjs';
import { verificationSettings } from './verification-profile.mjs';

const root = resolve(import.meta.dirname, '..'), { layout } = await verificationRuntime(root);
const directory = await mkdtemp(join(root, 'logs/account-setup-'));
const profile = join(directory, 'profile'), project = join(directory, 'project');
const extensionArgument = process.argv.indexOf('--extensions');
const extensions = extensionArgument >= 0 ? resolve(process.argv[extensionArgument + 1]) : join(directory, 'extensions');
await mkdir(join(profile, 'User'), { recursive: true }); await mkdir(project);
await writeFile(join(project, 'hello.js'), 'export const local = true;\n');
await writeFile(join(profile, 'User/settings.json'), JSON.stringify({ ...verificationSettings,
  'openvision.onboarding.showOnStartup': true }));
const result = { directory, checks: {}, exits: [], errors: [], success: false,
  scope: 'Native Windows first-launch onboarding, persistence, replay and provider settings. No authentication or inference.' };
let app, page;
async function launch() {
  const env = { ...process.env }; delete env.ELECTRON_RUN_AS_NODE;
  app = await _electron.launch({ executablePath: layout.executable, env, timeout: 60000,
    args: ['--user-data-dir', profile, '--extensions-dir', extensions, '--new-window',
      '--disable-updates', '--disable-telemetry', '--disable-crash-reporter', project] });
  page = await app.firstWindow(); page.setDefaultTimeout(30000);
  page.on('pageerror', error => result.errors.push(error.message));
  await page.locator('.part.titlebar .openvision-local-profile').waitFor({ timeout: 60000 });
}
async function close() {
  if (!app) return;
  const child = app.process(); await app.close(); app = undefined;
  result.exits.push(child.exitCode); assert.equal(child.exitCode, 0);
}
try {
  await launch();
  const setup = page.getByRole('dialog', { name: 'Set up OpenVision' });
  await setup.waitFor();
  await page.screenshot({ path: join(directory, 'onboarding-welcome.png') });
  await setup.getByRole('button', { name: 'Continue', exact: true }).click();
  await setup.getByRole('heading', { name: 'Connect your AI' }).waitFor();
  await setup.locator('.openvision-integration-badge').first().waitFor();
  await page.screenshot({ path: join(directory, 'onboarding-accounts.png') });
  await setup.getByRole('button', { name: 'Back', exact: true }).click();
  await setup.getByRole('heading', { name: 'Welcome to OpenVision' }).waitFor();
  await setup.getByRole('button', { name: 'Continue', exact: true }).click();
  await setup.getByRole('button', { name: 'Continue', exact: true }).click();
  await setup.getByRole('button', { name: 'Finish setup', exact: true }).click();
  await setup.waitFor({ state: 'hidden' }); result.checks.firstLaunchAndNavigation = true;
  await close(); await launch();
  await page.waitForTimeout(2500);
  assert.equal(await page.getByRole('dialog', { name: 'Set up OpenVision' }).count(), 0);
  result.checks.restartDoesNotRepeat = true;
  await page.evaluate(() => window.openvisionProjectHome.models());
  const settings = page.locator('.openvision-model-settings');
  await settings.waitFor();
  await settings.getByRole('button', { name: 'Run setup again', exact: true }).click();
  const replay = page.getByRole('dialog', { name: 'Set up OpenVision' });
  await replay.waitFor(); await page.keyboard.press('Escape'); await replay.waitFor({ state: 'hidden' });
  result.checks.settingsReplayAndEscape = true;
  await page.screenshot({ path: join(directory, 'provider-settings.png') });
  result.checks.initialStatus = await page.evaluate(() => window.openvisionProjectHome.accountStatus());
  result.success = true;
} catch (error) {
  result.error = error.stack;
  await page?.screenshot({ path: join(directory, 'failure.png') }).catch(() => {});
} finally {
  try { await close(); } catch (error) { result.cleanupError = error.message; result.success = false; }
  await writeFile(join(directory, 'result.json'), JSON.stringify(result, null, 2));
  console.log(JSON.stringify(result, null, 2));
}
if (!result.success) process.exitCode = 1;
