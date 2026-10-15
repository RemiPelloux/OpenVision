import assert from 'node:assert/strict';
import { mkdir, mkdtemp, writeFile } from 'node:fs/promises';
import { homedir } from 'node:os';
import { join, resolve } from 'node:path';
import { _electron } from '../tooling/browser.mjs';
import { verificationRuntime } from './verification-runtime.mjs';
import { verificationSettings } from './verification-profile.mjs';
import { linuxSandboxArguments } from './platform.mjs';
import { fileHash } from './import-files.mjs';

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

async function run(name, { args = [], env = {}, act }) {
  const profile = join(directory, name, 'profile');
  await mkdir(join(profile, 'User'), { recursive: true });
  await writeFile(join(profile, 'User/settings.json'), JSON.stringify(verificationSettings));
  const environment = { ...process.env, ...env }; delete environment.ELECTRON_RUN_AS_NODE;
  const app = await _electron.launch({ executablePath: layout.executable, env: environment, timeout: 60000,
    args: ['--user-data-dir', profile, '--extensions-dir', join(directory, name, 'extensions'), '--new-window',
      '--disable-updates', '--skip-release-notes', '--disable-telemetry', '--disable-crash-reporter',
      ...await linuxSandboxArguments(layout.host), ...args] });
  try {
    const page = await app.firstWindow();
    await page.locator('.monaco-workbench').waitFor({ state: 'attached', timeout: 60000 });
    return await app.evaluate(({ app: electron, safeStorage }, act) => {
      const output = { switch: electron.commandLine.getSwitchValue('password-store') || null };
      if (act.encrypt) output.cipher = safeStorage.encryptString(act.encrypt).toString('base64');
      if (act.decrypt) output.plain = safeStorage.decryptString(Buffer.from(act.decrypt, 'base64'));
      return { ...output, backend: safeStorage.getSelectedStorageBackend(), available: safeStorage.isEncryptionAvailable() };
    }, act);
  } finally {
    const child = app.process(); await app.close();
    result.exits.push({ name, exitCode: child.exitCode, signalCode: child.signalCode });
  }
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
