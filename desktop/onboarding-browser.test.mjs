import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { chromium, browserLaunchOptions } from '../tooling/browser.mjs';

test('setup is optional, replayable, keyboard dismissible and retains service errors', async t => {
  const browser = await chromium.launch(browserLaunchOptions());
  t.after(() => browser.close());
  const page = await browser.newPage({ viewport: { width: 400, height: 850 } });
  const files = new Set(['onboarding.js', 'onboarding.css', 'model-accounts.js', 'account-picker.js', 'model-settings.css']);
  await page.route('http://127.0.0.1/**', async route => {
    const name = new URL(route.request().url()).pathname.slice(1);
    if (!name) return route.fulfill({ contentType: 'text/html', body: '<link rel="stylesheet" href="/onboarding.css"><link rel="stylesheet" href="/model-settings.css"><button id="origin">Settings</button>' });
    if (!files.has(name)) return route.fulfill({ status: 404, body: '' });
    return route.fulfill({ contentType: name.endsWith('css') ? 'text/css' : 'application/javascript', body: await readFile(new URL(name, import.meta.url), 'utf8') });
  });
  await page.goto('http://127.0.0.1/');
  await page.evaluate(async () => {
    window.calls = []; window.seen = false;
    window.openvisionProjectHome = {
      onboardingState: () => ({ seen: window.seen, enabled: true }),
      finishOnboarding: () => { window.seen = true; },
      accountStatus: async () => ({ supported: true, providers: [
        { id: 'codex', installed: true, signedIn: true, email: 'long-personal-account@example.invalid', accountId: 'personal' },
        { id: 'claude', installed: false },
      ] }),
      accountProfiles: async () => ({ accounts: [{ provider: 'codex', id: 'personal', label: 'Personal' }], active: { codex: 'personal' } }),
      createAccount: async () => { throw Error('Not used in this check'); },
      connectAccount: async id => { window.calls.push(id); throw Error('Fixture install offline'); },
    };
    window.setup = await import('/onboarding.js');
    document.querySelector('#origin').focus(); window.setup.maybeShowOnboarding();
  });
  const dialog = page.getByRole('dialog', { name: 'Set up OpenVision' });
  await dialog.waitFor();
  assert.equal(await dialog.evaluate(node => node.scrollWidth > node.clientWidth), false);
  await dialog.getByRole('button', { name: 'Continue', exact: true }).click();
  await dialog.getByText('long-personal-account@example.invalid', { exact: true }).waitFor();
  assert.equal(await dialog.evaluate(node => node.scrollWidth > node.clientWidth), false);
  const picker = dialog.getByRole('combobox', { name: 'Codex account', exact: true });
  assert.equal(await picker.getAttribute('data-value'), 'personal');
  await picker.click();
  await dialog.getByRole('listbox', { name: 'Codex account', exact: true }).waitFor();
  await picker.press('Escape');
  assert.equal(await dialog.isVisible(), true);
  assert.equal(await picker.evaluate(node => getComputedStyle(node).boxSizing), 'border-box');
  await page.screenshot({ path: 'logs/account-onboarding-narrow.png' });
  await dialog.getByRole('button', { name: 'Set up & sign in · Claude', exact: true }).click();
  await dialog.getByText('Fixture install offline').waitFor();
  assert.deepEqual(await page.evaluate(() => window.calls), ['claude']);
  await page.keyboard.press('Escape'); await dialog.waitFor({ state: 'hidden' });
  await page.evaluate(() => window.setup.maybeShowOnboarding()); assert.equal(await dialog.count(), 0);
  await page.evaluate(() => { window.openvisionOnboarding.show(); window.openvisionOnboarding.show(); });
  assert.equal(await dialog.count(), 1);
  await dialog.getByRole('button', { name: 'Skip setup', exact: true }).click();
  assert.equal(await page.evaluate(() => window.seen), true);
});
