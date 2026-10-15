import assert from 'node:assert/strict';
import { mkdtemp, mkdir, writeFile } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { _electron } from '../tooling/browser.mjs';
import { AccountProfiles } from './account-profile-store.mjs';
import { verificationRuntime } from './verification-runtime.mjs';
import { verificationSettings } from './verification-profile.mjs';

const root = resolve(import.meta.dirname, '..'), { layout } = await verificationRuntime(root);
const directory = await mkdtemp(join(root, 'logs/account-picker-native-'));
const profile = join(directory, 'profile'), project = join(directory, 'project');
await mkdir(join(profile, 'User'), { recursive: true }); await mkdir(project);
await writeFile(join(profile, 'User/settings.json'), JSON.stringify(verificationSettings));
const profiles = new AccountProfiles(join(profile, 'openvision-accounts'));
const personal = await profiles.create('codex', 'Personal'), work = await profiles.create('codex', 'Work');
await profiles.select('codex', personal.id);
const result = { scope: 'Built native app with disposable local account profiles; no authentication or inference.', checks: {}, success: false };
let app, page;
try {
  const env = { ...process.env }; delete env.ELECTRON_RUN_AS_NODE;
  app = await _electron.launch({ executablePath: layout.executable, env, timeout: 60000,
    args: ['--user-data-dir', profile, '--extensions-dir', join(directory, 'extensions'), '--new-window',
      '--disable-updates', '--disable-telemetry', '--disable-crash-reporter', project] });
  page = await app.firstWindow(); page.setDefaultTimeout(30000);
  await page.locator('.part.titlebar .openvision-local-profile').waitFor({ timeout: 60000 });
  await page.evaluate(() => window.openvisionProjectHome.accountStatus());
  await page.evaluate(() => window.openvisionProjectHome.models());
  const picker = page.getByRole('combobox', { name: 'Codex account', exact: true });
  await picker.waitFor();
  assert.equal(await picker.getAttribute('data-value'), personal.id);
  await picker.click();
  await page.getByRole('option', { name: 'Personal', exact: true }).waitFor();
  await page.screenshot({ path: join(directory, 'account-picker.png') });
  await picker.press('End'); await picker.press('ArrowUp'); await picker.press('Enter');
  await page.waitForFunction(id => document.querySelector('[aria-label="Codex account"]').dataset.value === id, work.id);
  assert.equal((await profiles.read()).active.codex, work.id);
  result.checks.persistedSwitch = true;
  await picker.click(); await picker.press('Escape');
  assert.equal(await picker.getAttribute('aria-expanded'), 'false');
  assert.equal(await picker.evaluate(node => node === document.activeElement), true);
  result.checks.escapeAndFocus = true;
  await page.getByRole('article', { name: 'Codex', exact: true }).getByRole('button', { name: 'Delete account', exact: true }).click();
  const dialog = page.getByRole('dialog', { name: 'Delete Codex account', exact: true });
  assert.match(await dialog.innerText(), /Work/);
  await dialog.getByRole('button', { name: 'Cancel', exact: true }).click();
  assert.equal((await profiles.read()).accounts.length, 2);
  result.checks.deleteCancelPreservesAccounts = true;
  result.success = true;
} catch (error) {
  result.error = error.stack;
  await page?.screenshot({ path: join(directory, 'failure.png') }).catch(() => {});
} finally {
  if (app) {
    const child = app.process();
    try { await app.close(); assert.equal(child.exitCode, 0); }
    catch (error) { result.cleanupError = error.message; result.success = false; }
  }
  await writeFile(join(directory, 'result.json'), JSON.stringify(result, null, 2));
  console.log(JSON.stringify({ directory, ...result }, null, 2));
}
if (!result.success) process.exitCode = 1;
