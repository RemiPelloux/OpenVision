import assert from 'node:assert/strict';
import { mkdir, mkdtemp, writeFile } from 'node:fs/promises';
import { resolve, join } from 'node:path';
import { execFileSync } from 'node:child_process';
import { _electron } from '../tooling/browser.mjs';
import { loadRuntime } from './source-assembly.mjs';
import { verificationSettings } from './verification-profile.mjs';
import { fileHash } from './import-files.mjs';
import { linuxSandboxArguments } from './platform.mjs';

const root = resolve(import.meta.dirname, '..');
const { layout } = await loadRuntime(root);
const directory = await mkdtemp(join(root, 'logs/welcome-verification-'));
const profile = join(directory, 'profile');
await mkdir(join(profile, 'User'), { recursive: true });
await writeFile(join(profile, 'User/settings.json'), JSON.stringify(verificationSettings));
const result = { success: false, checkedAt: new Date().toISOString(), platform: process.platform,
  commit: execFileSync('git', ['rev-parse', 'HEAD'], { cwd: root, encoding: 'utf8' }).trim(),
  hashes: Object.fromEntries(await Promise.all(['welcome-screen.js', 'welcome-screen.css', 'welcome-customization.mjs']
    .map(async name => [name, await fileHash(join(root, 'desktop', name))]))) };
let app, page;
try {
  const env = { ...process.env }; delete env.ELECTRON_RUN_AS_NODE;
  app = await _electron.launch({ executablePath: layout.executable, env, timeout: 60000,
    args: ['--user-data-dir', profile, '--extensions-dir', join(directory, 'extensions'), '--new-window', '--glass',
      '--disable-updates', '--skip-release-notes', '--disable-telemetry', '--disable-crash-reporter',
      ...(process.platform === 'linux' ? await linuxSandboxArguments(layout.host) : [])] });
  page = await app.firstWindow(); page.setDefaultTimeout(20000);
  const screen = page.getByRole('region', { name: 'Welcome to OpenVision' });
  await screen.waitFor({ timeout: 60000 });
  assert.ok(page.url().includes('/openvision/source/app/'), 'Welcome must run in editable OpenVision source');
  await page.waitForTimeout(1500);
  assert.doesNotMatch(await screen.innerText(), /Cursor|Log In|Sign Up/);
  assert.equal(await page.locator('img[src*="cursor-splash-logo"]').count(), 0, 'Legacy launch splash must not mount');
  result.layout = await screen.evaluate(node => {
    const rect = node.getBoundingClientRect();
    return { top: rect.top, bottom: rect.bottom, width: rect.width, viewportWidth: innerWidth, viewportHeight: innerHeight };
  });
  assert.equal(result.layout.top, 32);
  assert.equal(result.layout.bottom, result.layout.viewportHeight, 'Welcome must reach the window bottom');
  assert.equal(result.layout.width, result.layout.viewportWidth);
  if (process.platform === 'win32') {
    result.windowControls = await page.evaluate(() => ({
      visible: navigator.windowControlsOverlay?.visible,
      titlebar: navigator.windowControlsOverlay?.getTitlebarAreaRect().toJSON()
    }));
    assert.equal(result.windowControls.visible, true, 'Native Windows controls must remain visible');
  }
  result.glassWelcome = true;
  result.blink = await screen.locator('.ov-eye-lids').evaluate(node => {
    const animation = node.getAnimations()[0];
    if (!animation) throw new Error('Blink animation missing');
    animation.pause();
    animation.currentTime = 1100 + 6800 * .43;
    const closed = getComputedStyle(node).transform;
    animation.currentTime = 1100;
    const open = getComputedStyle(node).transform;
    animation.play(); return { closed, open };
  });
  assert.notEqual(result.blink.closed, result.blink.open, 'The eyelid must visibly close');
  await page.screenshot({ path: join(directory, 'welcome.png') });
  await page.emulateMedia({ reducedMotion: 'reduce' });
  assert.equal(await screen.evaluate(node => node.getAnimations({ subtree: true }).length), 0);
  result.reducedMotion = true;
  await page.setViewportSize({ width: 480, height: 640 });
  const compact = await screen.evaluate(node => ({ width: node.clientWidth, scrollWidth: node.scrollWidth }));
  assert.equal(compact.width, compact.scrollWidth, 'Compact welcome must not overflow horizontally');
  await page.screenshot({ path: join(directory, 'welcome-compact.png') });
  await page.setViewportSize({ width: 1100, height: 800 });
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  const primary = screen.getByRole('button', { name: 'Enter workspace' });
  await primary.focus(); assert.equal(await primary.evaluate(node => node === document.activeElement), true);
  const editorPromise = app.waitForEvent('window', { timeout: 45000 });
  await primary.press('Enter');
  const editor = await editorPromise;
  await editor.locator('.part.titlebar .openvision-local-profile').waitFor({ timeout: 60000 });
  result.localWorkspaceEntry = true;
  await editor.locator('.part.titlebar .openvision-local-profile').click();
  await editor.getByRole('button', { name: 'Welcome screen', exact: true }).click();
  const dialog = editor.getByRole('dialog', { name: 'Welcome to OpenVision' });
  await dialog.waitFor();
  await dialog.getByRole('button', { name: 'Enter workspace' }).click();
  await dialog.waitFor({ state: 'detached' });
  assert.equal(await editor.locator('.ov-eye-lids').count(), 0, 'Dismissed welcome must release its animated DOM');
  result.desktopWelcomeDismissal = true;
  result.success = true;
} catch (error) {
  result.error = error.message;
  if (page) {
    await page.screenshot({ path: join(directory, 'failure.png') }).catch(() => {});
    await writeFile(join(directory, 'failure.txt'), await page.locator('body').innerText()).catch(() => {});
  }
} finally {
  if (app) {
    try {
      const child = app.process(), exited = new Promise(resolve => child.once('exit', resolve));
      await app.close(); if (child.exitCode === null && child.signalCode === null) await exited;
      result.ownedHostExit = { exitCode: child.exitCode, signalCode: child.signalCode };
    } catch { result.success = false; result.cleanupError = 'Owned welcome verifier host did not close'; }
  }
  await writeFile(join(directory, 'result.json'), JSON.stringify(result, null, 2));
  console.log(JSON.stringify({ ...result, directory }, null, 2));
}
if (!result.success) process.exitCode = 1;
