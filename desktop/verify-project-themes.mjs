import assert from 'node:assert/strict';
import { mkdtemp, mkdir, readFile, writeFile } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { _electron } from '../tooling/browser.mjs';
import { verificationRuntime } from './verification-runtime.mjs';
import { verificationSettings } from './verification-profile.mjs';

const root = resolve(import.meta.dirname, '..'), { layout } = await verificationRuntime(root);
const directory = await mkdtemp(join(root, 'logs/project-themes-verification-'));
const profile = join(directory, 'profile'), settingsPath = join(profile, 'User/settings.json');
await mkdir(join(profile, 'User'), { recursive: true });
await writeFile(settingsPath, JSON.stringify({ ...verificationSettings, 'workbench.colorTheme': 'Cursor Dark' }));
const extension = join(directory, 'extensions/openvision.verification-theme-1.0.0');
await mkdir(extension, { recursive: true });
await writeFile(join(extension, 'package.json'), JSON.stringify({ name: 'verification-theme',
  publisher: 'openvision', version: '1.0.0', engines: { vscode: '*' },
  contributes: { themes: [{ label: 'Verification Slate', uiTheme: 'vs-dark', path: './theme.json' }] } }));
await writeFile(join(extension, 'theme.json'), JSON.stringify({ name: 'Verification Slate', type: 'dark',
  colors: { 'editor.background': '#202938', 'editorWidget.background': '#273244', 'foreground': '#e0e5ee' }, tokenColors: [] }));
const result = { directory, checks: {}, errors: [], exits: [], success: false };
let app, page;
const home = () => page.getByRole('region', { name: 'Welcome to OpenVision' });
async function launch() {
  const env = { ...process.env }; delete env.ELECTRON_RUN_AS_NODE;
  app = await _electron.launch({ executablePath: layout.executable, env, timeout: 60000,
    args: ['--user-data-dir', profile, '--extensions-dir', join(directory, 'extensions'), '--new-window',
      '--disable-updates', '--disable-telemetry', '--disable-crash-reporter', '--glass'] });
  page = await app.firstWindow(); page.setDefaultTimeout(20000);
  page.on('pageerror', error => result.errors.push(error.message));
  await home().getByRole('button', { name: 'Color theme', exact: true }).waitFor({ timeout: 60000 });
}
async function close() {
  if (!app) return;
  const child = app.process(); await app.close(); app = undefined;
  result.exits.push(child.exitCode); assert.equal(child.exitCode, 0);
}
async function selectTheme(name) {
  await home().getByRole('button', { name: 'Color theme', exact: true }).click();
  await page.getByText(name, { exact: true }).click();
  await page.getByText('Select an option', { exact: true }).waitFor({ state: 'hidden' });
}
async function colors() {
  return home().evaluate(node => ({ background: getComputedStyle(node).backgroundColor,
    foreground: getComputedStyle(node).color,
    token: getComputedStyle(node).getPropertyValue('--vscode-editor-background').trim() }));
}
async function until(probe) {
  const end = Date.now() + 20000;
  while (Date.now() < end) { if (await probe()) return; await new Promise(resolve => setTimeout(resolve, 100)); }
  throw Error('Timed out waiting for native theme persistence');
}
async function cloneScreenshot(name) {
  await home().getByRole('button', { name: 'Clone repository', exact: true }).click();
  const dialog = page.getByRole('dialog', { name: 'Clone repository', exact: true });
  await dialog.waitFor();
  await page.screenshot({ path: join(directory, `clone-${name}.png`) });
  const color = await dialog.evaluate(node => ({ background: getComputedStyle(node).backgroundColor,
    foreground: getComputedStyle(node).color }));
  await page.keyboard.press('Escape'); await dialog.waitFor({ state: 'hidden' });
  return color;
}
try {
  await launch();
  const dark = await colors(); await page.screenshot({ path: join(directory, 'home-dark.png') });
  await page.evaluate(() => {
    const root = document.createElement('div'); root.id = 'theme-color-probe'; root.hidden = true;
    for (const [container, buttonClass] of [['openvision-model-settings', 'openvision-primary'], ['openvision-profile-dialog', '']]) {
      const section = document.createElement('div'); section.className = container;
      const button = document.createElement('button'); button.className = buttonClass; button.textContent = 'Save';
      section.append(button); root.append(section);
    }
    document.body.append(root);
  });
  const styles = await page.locator('#theme-color-probe button').evaluateAll(nodes => nodes.map(node => {
    const themeButton = document.querySelector('.ov-welcome-enter');
    return { background: getComputedStyle(node).backgroundColor, expected: getComputedStyle(themeButton).backgroundColor };
  }));
  for (const style of styles) assert.equal(style.background, style.expected);
  await page.locator('#theme-color-probe').evaluate(node => node.remove());
  result.checks.profileAndModelThemeStyles = true;
  const darkClone = await cloneScreenshot('dark');
  await selectTheme('Cursor Light');
  await until(async () => (await colors()).background !== dark.background);
  const light = await colors(); await page.screenshot({ path: join(directory, 'home-light.png') });
  const lightClone = await cloneScreenshot('light');
  assert.notEqual(darkClone.background, lightClone.background);
  assert.notEqual(light.foreground, dark.foreground);
  await until(async () => JSON.parse(await readFile(settingsPath, 'utf8'))['workbench.colorTheme'] === 'Cursor Light');
  result.checks.nativeLightDarkPicker = { dark, light, darkClone, lightClone };
  await close(); await launch();
  await until(async () => (await colors()).background === light.background);
  assert.equal((await colors()).background, light.background);
  result.checks.themePersistsAcrossRestart = true;
  await selectTheme('Cursor Dark High Contrast');
  await page.screenshot({ path: join(directory, 'home-contrast.png') });
  const contrast = await colors(); assert.notEqual(contrast.background, light.background);
  await cloneScreenshot('contrast'); result.checks.highContrast = contrast;
  await until(async () => JSON.parse(await readFile(settingsPath, 'utf8'))['workbench.colorTheme'] === 'Cursor Dark High Contrast');
  const settings = JSON.parse(await readFile(settingsPath, 'utf8'));
  settings['workbench.colorCustomizations'] = { 'editor.background': '#242128', 'editorWidget.background': '#302b35',
    'foreground': '#f0e9ff', 'button.background': '#c2afd9', 'button.foreground': '#211b29' };
  await writeFile(settingsPath, JSON.stringify(settings, null, 2));
  await until(async () => (await colors()).background === 'rgb(36, 33, 40)');
  const customClone = await cloneScreenshot('custom'); assert.equal(customClone.background, 'rgb(48, 43, 53)');
  result.checks.nativeColorCustomization = true;
  await page.setViewportSize({ width: 390, height: 640 });
  assert.equal(await home().evaluate(node => node.scrollWidth <= node.clientWidth), true);
  await cloneScreenshot('compact'); result.checks.compactLayout = true;
  delete settings['workbench.colorCustomizations'];
  await writeFile(settingsPath, JSON.stringify(settings, null, 2));
  await until(async () => (await colors()).background !== 'rgb(36, 33, 40)');
  await selectTheme('Verification Slate');
  await until(async () => (await colors()).background === 'rgb(32, 41, 56)');
  await close(); await launch();
  await until(async () => (await colors()).background === 'rgb(32, 41, 56)');
  await page.screenshot({ path: join(directory, 'home-extension-theme.png') });
  result.checks.installedExtensionThemePersists = true;
  assert.deepEqual(result.errors, []); result.success = true;
} catch (error) {
  result.error = error.stack;
  await page?.screenshot({ path: join(directory, 'failure.png') }).catch(() => {});
  if (page) await writeFile(join(directory, 'failure.txt'), await page.locator('body').innerText().catch(() => 'closed'));
} finally {
  try { await close(); } catch (error) { result.success = false; result.cleanupError = error.message; }
  await writeFile(join(directory, 'result.json'), JSON.stringify(result, null, 2));
  console.log(JSON.stringify(result, null, 2)); if (!result.success) process.exitCode = 1;
}
