import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { chromium } from '../tooling/browser.mjs';

async function fixture(t) {
  const browser = await chromium.launch({ channel: process.env.OPENVISION_BROWSER_CHANNEL || 'msedge', headless: true });
  t.after(() => browser.close());
  const page = await browser.newPage({ viewport: { width: 850, height: 950 } });
  const files = new Set(['model-accounts.js', 'account-picker.js', 'model-settings.css']);
  await page.route('http://127.0.0.1/**', async route => {
    const name = new URL(route.request().url()).pathname.slice(1);
    if (!name) return route.fulfill({ contentType: 'text/html', body: '<link rel="stylesheet" href="/model-settings.css"><main></main><button id="outside">Outside</button>' });
    if (!files.has(name)) return route.fulfill({ status: 404 });
    return route.fulfill({ contentType: name.endsWith('css') ? 'text/css' : 'application/javascript', body: await readFile(new URL(name, import.meta.url), 'utf8') });
  });
  await page.goto('http://127.0.0.1/');
  await page.evaluate(async () => {
    window.selected = 'personal'; window.switches = [];
    const accounts = [{ id: 'personal', provider: 'codex', label: 'Personal' },
      { id: 'work', provider: 'codex', label: 'Work' },
      { id: 'long', provider: 'codex', label: 'Very long account profile name '.repeat(8) }];
    window.openvisionProjectHome = {
      accountStatus: async () => ({ supported: true, providers: [{ id: 'codex', installed: true, accountId: window.selected }] }),
      accountProfiles: async () => ({ accounts, active: { codex: window.selected } }),
      selectAccount: async (_, id) => {
        window.switches.push(id);
        if (window.failSwitch) throw Error('Switch unavailable');
        window.selected = id;
      },
      createAccount: async () => {}, removeAccount: async () => {},
    };
    const { createAccountSettings } = await import('/model-accounts.js');
    window.accounts = createAccountSettings(); document.querySelector('main').append(window.accounts.root);
    await window.accounts.refresh();
  });
  return page;
}

test('account picker switches by keyboard, preserves service identity and restores focus on failure', async t => {
  const page = await fixture(t);
  const picker = page.getByRole('combobox', { name: 'Codex account', exact: true });
  await picker.focus(); await picker.press('ArrowDown');
  await page.getByRole('option', { name: 'Personal', exact: true }).waitFor();
  assert.equal(await page.getByRole('option', { selected: true }).innerText(), 'Personal\n✓');
  await picker.press('w'); await picker.press('Enter');
  await page.waitForFunction(() => document.querySelector('[role=combobox]').dataset.value === 'work');
  assert.equal(await picker.evaluate(node => node === document.activeElement), true);
  assert.deepEqual(await page.evaluate(() => window.switches), ['work']);
  await page.evaluate(() => { window.failSwitch = true; });
  await picker.press('Home'); await picker.press('Enter');
  await page.getByText('Switch unavailable', { exact: true }).waitFor();
  assert.equal(await picker.getAttribute('data-value'), 'work');
  assert.equal(await picker.evaluate(node => node === document.activeElement), true);
  await page.evaluate(() => { window.failSwitch = false; });
  await picker.press('End'); await picker.press('Enter');
  await page.waitForFunction(() => document.querySelector('[role=combobox]').dataset.value === '');
  assert.equal(await picker.textContent(), 'Disconnected');
  assert.deepEqual(await page.evaluate(() => window.switches), ['work', 'personal', null]);
});

test('account menu dismisses without switching and cleans up during refresh', async t => {
  const page = await fixture(t);
  const picker = page.getByRole('combobox', { name: 'Codex account', exact: true });
  await picker.click(); await picker.press('ArrowDown'); await picker.press('Escape');
  assert.equal(await picker.getAttribute('aria-expanded'), 'false');
  assert.equal(await picker.evaluate(node => node === document.activeElement), true);
  await picker.click(); await picker.press('Tab');
  assert.equal(await picker.getAttribute('aria-expanded'), 'false');
  await picker.click(); await page.locator('#outside').click();
  await page.waitForFunction(() => document.querySelector('[role=combobox]').getAttribute('aria-expanded') === 'false');
  await picker.click(); await page.setViewportSize({ width: 700, height: 800 });
  await page.waitForFunction(() => document.querySelector('[role=combobox]').getAttribute('aria-expanded') === 'false');
  await picker.click(); await page.evaluate(() => window.accounts.refresh());
  assert.equal(await page.locator(':popover-open').count(), 0);
  assert.deepEqual(await page.evaluate(() => window.switches), []);
  await picker.click(); await page.getByRole('option', { name: 'Work', exact: true }).click();
  await page.waitForFunction(() => document.querySelector('[role=combobox]').dataset.value === 'work');
});

test('account menu stays readable and inside narrow viewports in dark and light themes', async t => {
  const page = await fixture(t);
  for (const [theme, background, foreground] of [['dark', '#1e2127', '#d8dee9'], ['light', '#ffffff', '#242424']]) {
    await page.evaluate(({ background, foreground }) => {
      for (const token of ['editor-background', 'input-background', 'dropdown-background']) document.documentElement.style.setProperty(`--vscode-${token}`, background);
      for (const token of ['foreground', 'input-foreground', 'dropdown-foreground']) document.documentElement.style.setProperty(`--vscode-${token}`, foreground);
      document.body.style.cssText = `margin:24px;background:${background};font-family:system-ui,sans-serif`;
    }, { background, foreground });
    for (const width of [850, 400]) {
      await page.setViewportSize({ width, height: 950 });
      const picker = page.getByRole('combobox', { name: 'Codex account', exact: true });
      await picker.click();
      const menu = page.getByRole('listbox', { name: 'Codex account', exact: true });
      const box = await menu.boundingBox();
      assert.ok(box.x >= 0 && box.x + box.width <= width && box.y >= 0 && box.y + box.height <= 950);
      assert.equal(await menu.evaluate(node => node.scrollWidth <= node.clientWidth), true);
      assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), true);
      const contrast = await menu.evaluate(node => {
        const luminance = color => color.match(/[\d.]+/g).slice(0, 3).map(Number).map(value => value / 255)
          .map(value => value <= .04045 ? value / 12.92 : ((value + .055) / 1.055) ** 2.4)
          .reduce((sum, value, index) => sum + value * [.2126, .7152, .0722][index], 0);
        const style = getComputedStyle(node), bg = luminance(style.backgroundColor), fg = luminance(style.color);
        return (Math.max(bg, fg) + .05) / (Math.min(bg, fg) + .05);
      });
      assert.ok(contrast >= 4.5, `${theme}: ${contrast}`);
      await page.screenshot({ path: `logs/account-picker-${theme}-${width}.png` });
      await picker.press('Escape');
    }
  }
});
