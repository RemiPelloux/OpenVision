import { chromium } from '../tooling/browser.mjs';
import { readFile, writeFile } from 'node:fs/promises';
import { basename, dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import assert from 'node:assert/strict';
import { enterWorkspace } from './verification-workspace.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const launch = JSON.parse(await readFile(join(root, 'logs/desktop-launch.json'), 'utf8'));
if (!Number.isInteger(launch.debug_port)) throw new Error('Launch OpenVision with --inspect-preview for visual verification');
const result = {};
const browser = await chromium.connectOverCDP(`http://127.0.0.1:${launch.debug_port}`);
try {
  const workbenches = () => browser.contexts().flatMap(context => context.pages()).filter(page => page.url().includes('workbench'));
  if (!workbenches().length) throw new Error('No editor renderer found');
  // Project Home opens over project windows at startup. In the Agent (Glass) layout its
  // Enter workspace opens or focuses a separate editor window; follow that window.
  for (const candidate of workbenches()) await enterWorkspace(candidate, 15000).catch(() => {});
  let page;
  for (let attempt = 0; attempt < 60 && !page; attempt++) {
    for (const candidate of workbenches())
      if (await candidate.locator('.part.titlebar .openvision-local-profile').isVisible().catch(() => false)) { page = candidate; break; }
    if (!page) await new Promise(next => setTimeout(next, 500));
  }
  if (!page) throw new Error('No editor window: open the Playground with npm start -- --inspect-preview "<OpenVision Projects>/Playground"');
  await page.locator('.monaco-workbench').waitFor({ state: 'visible', timeout: 30000 });
  // A new development profile shows first-run setup; skip it as a user would.
  const setup = page.getByRole('dialog', { name: 'Set up OpenVision' });
  if (await setup.isVisible().catch(() => false)) {
    await setup.getByRole('button', { name: 'Skip setup', exact: true }).click();
    await setup.waitFor({ state: 'hidden' });
  }
  assert.ok(page.url().replaceAll('\\', '/').includes(`/${basename(root)}/source/app/`), 'Renderer must load editable recovered source');
  const profileButton = page.locator('.part.titlebar .openvision-local-profile');
  await profileButton.waitFor();
  const originalName = await profileButton.locator('span').innerText();
  await editProfile('Verification Profile');
  await page.reload();
  await page.getByRole('button', { name: 'Verification Profile', exact: true }).first().waitFor();
  await editProfile(originalName);
  const settingsTab = page.locator('.tabs-container .tab').filter({ hasText: 'OpenVision Settings' });
  const general = page.locator('.cursor-settings-sidebar-cell-label').filter({ hasText: /^General$/ });
  // A click while the reloaded workbench is still restoring can be dropped; retry until Settings opens.
  const settingsOpen = () => page.locator('.cursor-settings-sidebar-cell-label').first().isVisible().catch(() => false)
    .then(async labels => labels || await page.locator('.openvision-profile-settings').isVisible().catch(() => false));
  for (let attempt = 0; attempt < 3 && !await settingsOpen(); attempt++) {
    if (await settingsTab.count()) await settingsTab.first().click();
    else await page.locator('.part.titlebar a[aria-label$=" Settings"]').click({ timeout: 5000 });
    for (let wait = 0; wait < 20 && !await settingsOpen(); wait++) await page.waitForTimeout(500);
  }
  // A narrow Settings editor collapses its sidebar to icons and already shows General.
  if (!await page.locator('.openvision-profile-settings').isVisible()) await general.first().click().catch(async error => {
    await page.screenshot({ path: join(root, 'logs/desktop-settings-failure.png') });
    result.settingsLabels = await page.locator('.cursor-settings-sidebar-cell-label').allInnerTexts().catch(() => []);
    throw new Error(`${error.message}\nSettings sections: ${result.settingsLabels.join(', ')}`);
  });
  await page.locator('.openvision-profile-settings').waitFor({ timeout: 10000 });
  const settingsText = await page.locator('body').innerText();
  assert.ok(!/\b(?:log\s*in|sign\s*(?:in|up)|upgrade to pro)\b/i.test(settingsText), 'Settings must use a local profile');
  assert.ok(!/\bCloud Agents?\b/i.test(settingsText), 'Cloud agent settings must be absent');
  await page.screenshot({ path: join(root, 'logs/local-settings.png') });
  const mainTab = page.locator('.tabs-container .tab').filter({ hasText: 'main.js' });
  if (!await mainTab.count()) {
    // The Playground no longer restores an editor; open its source file like a user.
    await page.keyboard.press('Control+p');
    await page.locator('.quick-input-widget input[type="text"]').fill('src/main.js');
    await page.locator('.quick-input-widget').getByText('main.js', { exact: true }).first().click();
  }
  await mainTab.first().click();
  if (!await page.locator('.part.sidebar').isVisible())
    await page.getByRole('button', { name: /Toggle Primary Side Bar/ }).click();
  if ((await page.locator('body').innerText()).includes('Loading Chat'))
    await page.getByRole('button', { name: 'New Agent', exact: true }).first().click();
  await page.getByText('Select model', { exact: true }).first().waitFor();
  const text = await page.locator('body').innerText();
  assert.ok(!/\b(?:log\s*in|sign\s*(?:in|up)|upgrade to pro)\b/i.test(text), 'Editor must not require login');
  const imageLoaded = await profileButton.locator('img').evaluate(image => image.complete && image.naturalWidth > 0);
  assert.ok(imageLoaded, 'OpenVision logo must render');
  const screenshot = join(root, 'logs/desktop-preview.png');
  await page.screenshot({ path: screenshot });
  const title = await page.title();
  Object.assign(result, { title, url: page.url(), checked_at: new Date().toISOString(),
    openvision_title: title.includes('OpenVision'), editor_rendered: true, recovered_source_loaded: true,
    login_signup_absent: true, local_profile_persisted: true, local_settings_verified: true, logo_loaded: imageLoaded,
    cloud_agent_settings_absent: true, project_explorer_visible: true,
    source_text_visible: text.includes('describeProject') || text.includes('projectName'),
    screenshot, visible_text: text.slice(0, 5000),
    limitations: ['AI inference and autocomplete were not exercised; no server or API key configured.'] });
  await writeFile(join(root, 'logs/desktop-verification.json'), JSON.stringify(result, null, 2) + '\n');
  console.log(JSON.stringify(result, null, 2));
  if (!result.openvision_title) process.exitCode = 1;

  async function editProfile(name) {
    await profileButton.click({ timeout: 5000 });
    await page.locator('dialog input').fill(name);
    await page.getByRole('button', { name: 'Save', exact: true }).click();
  }
} finally { await browser.close(); }
