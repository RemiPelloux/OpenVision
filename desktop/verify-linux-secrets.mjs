import assert from 'node:assert/strict';
import { mkdir, mkdtemp, readFile, writeFile } from 'node:fs/promises';
import { homedir } from 'node:os';
import { join, resolve } from 'node:path';
import { _electron } from '../tooling/browser.mjs';
import { verificationRuntime } from './verification-runtime.mjs';
import { verificationSettings } from './verification-profile.mjs';
import { linuxSandboxArguments } from './platform.mjs';
import { fileHash } from './import-files.mjs';
import { enterWorkspace } from './verification-workspace.mjs';

// Native Linux secret-storage checks. Secrets are encrypted by Chromium's
// os_crypt; this verifies which backend OpenVision selects, without the
// "OS keyring couldn't be identified" fallback that writes password-store=basic.
assert.equal(process.platform, 'linux', 'Linux secret-storage verification runs on Linux');
const root = resolve(import.meta.dirname, '..');
const { layout } = await verificationRuntime(root);
const directory = await mkdtemp(join(root, 'logs/linux-secrets-verification-'));
const argv = join(homedir(), '.openvision-local/argv.json');
const result = { success: false, checkedAt: new Date().toISOString(), desktop: process.env.XDG_CURRENT_DESKTOP ?? null,
  argvBefore: await fileHash(argv), checks: {}, exits: [] };

// Close an owned app and record how its host ended. The process handle is taken at launch:
// after a crash or disconnect app.process() itself throws and would hide the real error.
async function closeApp(app, child, name) {
  const exit = { name };
  try { await app.close(); } catch (error) { exit.closeError = error.message; }
  result.exits.push(Object.assign(exit, { exitCode: child.exitCode, signalCode: child.signalCode }));
}

async function run(name, { args = [], env = {}, act }) {
  const profile = join(directory, name, 'profile');
  await mkdir(join(profile, 'User'), { recursive: true });
  await writeFile(join(profile, 'User/settings.json'), JSON.stringify(verificationSettings));
  const environment = { ...process.env, ...env }; delete environment.ELECTRON_RUN_AS_NODE;
  const app = await _electron.launch({ executablePath: layout.executable, env: environment, timeout: 60000,
    args: ['--user-data-dir', profile, '--extensions-dir', join(directory, name, 'extensions'), '--new-window',
      '--disable-updates', '--skip-release-notes', '--disable-telemetry', '--disable-crash-reporter',
      ...await linuxSandboxArguments(layout.host), ...args] });
  const child = app.process();
  try {
    const page = await app.firstWindow();
    await page.locator('.monaco-workbench').waitFor({ state: 'attached', timeout: 60000 });
    return await app.evaluate(({ app: electron, safeStorage }, act) => {
      const output = { switch: electron.commandLine.getSwitchValue('password-store') || null };
      if (act.encrypt) output.cipher = safeStorage.encryptString(act.encrypt).toString('base64');
      if (act.decrypt) output.plain = safeStorage.decryptString(Buffer.from(act.decrypt, 'base64'));
      return { ...output, backend: safeStorage.getSelectedStorageBackend(), available: safeStorage.isEncryptionAvailable() };
    }, act);
  } finally { await closeApp(app, child, name); }
}

// Issue #6: Add Provider Save without a Secret Service must reach the keyring
// choice (the workbench prompt must not sit behind the provider dialog) and
// complete once the user chooses, instead of waiting forever.
async function providerSaveWithoutSecretService(name, dialogStyle) {
  const profile = join(directory, name, 'profile'), project = join(directory, name, 'project');
  await mkdir(join(profile, 'User'), { recursive: true }); await mkdir(project, { recursive: true });
  await writeFile(join(profile, 'User/settings.json'), JSON.stringify({ ...verificationSettings, 'window.dialogStyle': dialogStyle,
    // Native: Git's startup token write raises the keyring choice before Save, as for users.
    // Custom: without it Save is the first secret write, so its in-page prompt must not be covered.
    ...(dialogStyle === 'custom' ? { 'git.enabled': false } : {}) }));
  const environment = { ...process.env, DBUS_SESSION_BUS_ADDRESS: 'unix:path=/nonexistent/openvision-bus' };
  delete environment.ELECTRON_RUN_AS_NODE;
  const sandbox = await linuxSandboxArguments(layout.host);
  const launch = () => _electron.launch({ executablePath: layout.executable, env: environment, timeout: 60000,
    args: ['--user-data-dir', profile, '--extensions-dir', join(directory, name, 'extensions'), '--new-window', '--skip-welcome',
      '--disable-updates', '--skip-release-notes', '--disable-telemetry', '--disable-crash-reporter',
      ...sandbox, project] });
  const output = {}; result.checks[name] = output; // filled as the case runs, kept on failure
  let app = await launch(), child = app.process();
  child.stderr?.on('data', chunk => { output.stderrTail = ((output.stderrTail ?? '') + chunk).slice(-4096); });
  try {
    const page = await app.firstWindow(); page.setDefaultTimeout(20000);
    // Native style: the main process shows a message box; answer it like a user choosing weaker storage.
    // The stub is installed with the first window so a prompt raised by an earlier secret write is seen too.
    if (dialogStyle === 'native') await app.evaluate(({ dialog }) => {
      globalThis.keyringPrompts = [];
      dialog.showMessageBox = async (...args) => {
        const options = args.at(-1);
        globalThis.keyringPrompts.push({ at: Date.now(), message: options.message, buttons: options.buttons });
        return { response: options.buttons.findIndex(label => /weaker/i.test(label)), checkboxChecked: false };
      };
    });
    await page.locator('.part.titlebar .openvision-local-profile').waitFor({ timeout: 60000 });
    await enterWorkspace(page);
    await page.locator('.part.titlebar a[aria-label$=" Settings"]').click();
    const panel = page.locator('.openvision-model-settings');
    if (!await panel.isVisible().catch(() => false))
      await page.locator('.cursor-settings-sidebar-cell-label').filter({ hasText: /^Models$/ }).locator('..').click();
    await panel.waitFor();
    await panel.getByRole('button', { name: 'Add Provider', exact: true }).click();
    await page.getByLabel('Provider Name', { exact: true }).fill('No Keyring Provider');
    await page.getByLabel('API Base URL', { exact: true }).fill('http://127.0.0.1:9/v1');
    await page.getByLabel('API Key', { exact: true }).fill('no-keyring-fixture-key');
    await page.getByRole('checkbox', { name: 'Discover Models', exact: true }).uncheck();
    output.promptsBeforeSave = dialogStyle === 'native' ? await app.evaluate(() => globalThis.keyringPrompts.length)
      : await page.locator('.monaco-dialog-box').filter({ visible: true }).count();
    if (dialogStyle === 'custom') assert.equal(output.promptsBeforeSave, 0, 'Save must raise the first keyring choice');
    await page.locator('dialog.openvision-model-dialog').getByRole('button', { name: 'Save', exact: true }).click();
    if (dialogStyle === 'native') {
      for (let attempt = 0; attempt < 200 && !await app.evaluate(() => globalThis.keyringPrompts.length); attempt++)
        await page.waitForTimeout(100);
      output.prompts = await app.evaluate(() => globalThis.keyringPrompts);
      assert.equal(output.prompts.length, 1, 'Exactly one keyring choice must be raised');
      assert.ok(output.prompts[0].buttons.some(label => /weaker/i.test(label)));
    } else {
      // Custom style: the workbench prompt must be visible and usable, not covered by the provider dialog.
      const prompt = page.locator('.monaco-dialog-box').filter({ visible: true });
      await prompt.waitFor({ timeout: 20000 }).catch(async error => {
        await page.screenshot({ path: join(directory, `${name}-failure.png`) }).catch(() => {});
        output.failureText = (await page.locator('body').innerText().catch(() => '')).slice(0, 1500);
        result.checks[name] = output;
        throw error;
      });
      output.prompt = (await prompt.innerText()).slice(0, 600);
      output.providerDialogOpen = await page.locator('dialog.openvision-model-dialog[open]').count();
      assert.equal(output.providerDialogOpen, 0, 'The provider dialog must not cover the keyring prompt');
      await page.screenshot({ path: join(directory, `${name}-keyring-prompt.png`) });
      await prompt.getByRole('button', { name: /weaker encryption/i }).click();
    }
    await panel.getByText('Saved', { exact: true }).waitFor({ timeout: 20000 });
    await panel.locator('option', { hasText: 'No Keyring Provider' }).first().waitFor({ state: 'attached' });
    output.saved = true;
  } finally { await closeApp(app, child, name); }
  app = await launch(); child = app.process();
  child.stderr?.on('data', chunk => { output.restartStderrTail = ((output.restartStderrTail ?? '') + chunk).slice(-4096); });
  try {
    await (await app.firstWindow()).locator('.monaco-workbench').waitFor({ state: 'attached', timeout: 60000 });
    output.afterRestart = await app.evaluate(({ safeStorage }) => ({ backend: safeStorage.getSelectedStorageBackend(),
      available: safeStorage.isEncryptionAvailable() }));
  } finally { await closeApp(app, child, `${name}-restart`); }
  // argv.json is JSONC; record the store the user's choice wrote.
  output.passwordStore = (await readFile(join(profile, 'User/.openvision-local/argv.json'), 'utf8').catch(() => ''))
    .match(/"password-store"\s*:\s*"([^"]*)"/)?.[1] ?? null;
  return output;
}
const prefix = value => Buffer.from(value, 'base64').subarray(0, 3).toString();

try {
  const first = await run('default', { act: { encrypt: 'openvision-linux-secret' } });
  assert.equal(first.switch, 'gnome-libsecret', 'Unrecognized desktops must select the Secret Service');
  assert.equal(first.backend, 'gnome_libsecret');
  assert.equal(prefix(first.cipher), 'v11', 'Secrets must use the keyring-held key, not the basic_text key');
  result.checks.defaultUsesSecretService = first;

  const restarted = await run('default', { act: { decrypt: first.cipher } });
  assert.equal(restarted.plain, 'openvision-linux-secret');
  result.checks.restartDecryptsKeyringSecret = true;

  const legacy = await run('basic', { args: ['--password-store=basic'], act: { encrypt: 'saved-before-keyring-fix' } });
  assert.equal(legacy.backend, 'basic_text', 'An explicit password store must be respected');
  assert.equal(prefix(legacy.cipher), 'v10');
  const migrated = await run('basic', { act: { decrypt: legacy.cipher } });
  assert.equal(migrated.backend, 'gnome_libsecret');
  assert.equal(migrated.plain, 'saved-before-keyring-fix', 'Secrets saved with basic_text must remain readable');
  result.checks.explicitChoiceAndMigration = { legacy: legacy.backend, migrated: migrated.backend };

  const kde = await run('kde', { env: { XDG_CURRENT_DESKTOP: 'KDE', DESKTOP_SESSION: 'plasma' }, act: {} });
  assert.equal(kde.switch, null, 'KDE keeps Chromium\'s own KWallet selection');
  result.checks.kdeUsesChromiumSelection = kde;

  // Without a Secret Service, keep Chromium's selection. Electron then reports
  // basic_text as unavailable, and the native prompt asks before weaker storage.
  const offline = await run('no-secret-service', { env: { DBUS_SESSION_BUS_ADDRESS: 'unix:path=/nonexistent/openvision-bus' }, act: {} });
  assert.equal(offline.switch, null, 'Without a Secret Service, libsecret must not be forced');
  assert.equal(offline.backend, 'basic_text');
  assert.equal(offline.available, false, 'Weaker storage requires the user\'s explicit choice');
  result.checks.missingSecretServiceFallsBack = offline;

  for (const style of ['native', 'custom']) {
    const name = `provider-save-no-secret-service-${style}`;
    const providerSave = await providerSaveWithoutSecretService(name, style);
    assert.equal(providerSave.saved, true, 'Add Provider Save must complete after the keyring choice');
    assert.equal(providerSave.passwordStore, 'basic', 'Choosing weaker encryption records the profile-scoped password store');
    assert.equal(providerSave.afterRestart.backend, 'basic_text');
    assert.equal(providerSave.afterRestart.available, true, 'The chosen weaker storage must persist across restart');
    result.checks[name] = providerSave;
  }

  assert.deepEqual(result.exits.filter(exit => exit.exitCode !== 0), []);
  result.argvAfter = await fileHash(argv);
  assert.equal(result.argvAfter, result.argvBefore, 'Verification must not rewrite the global argv.json');
  result.success = true;
} catch (error) {
  result.error = error.stack ?? String(error);
  process.exitCode = 1;
} finally {
  await writeFile(join(directory, 'result.json'), JSON.stringify(result, null, 2) + '\n');
  console.log(JSON.stringify({ ...result, directory }, null, 2));
}
