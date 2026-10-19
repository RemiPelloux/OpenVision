import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { chromium, browserLaunchOptions } from '../tooling/browser.mjs';

async function fixture(t) {
  const browser = await chromium.launch(browserLaunchOptions());
  t.after(() => browser.close());
  const page = await browser.newPage({ viewport: { width: 850, height: 900 } });
  const files = new Set(['model-settings.js', 'model-accounts.js', 'account-picker.js', 'model-settings.css', 'model-providers.js',
    'completion-provider.js', 'model-catalog.js', 'model-reasoning.js', 'model-identity.js', 'account-models.js',
    'provider-headers.js', 'provider-credentials.js', 'pi-import.js']);
  await page.route('http://127.0.0.1/**', async route => {
    const name = new URL(route.request().url()).pathname.slice(1).replace(/^openvision-/, '');
    if (!name) return route.fulfill({ contentType: 'text/html', body: '<link rel="stylesheet" href="/model-settings.css"><main class="openvision-model-settings"></main>' });
    if (!files.has(name)) return route.fulfill({ status: 404, body: '' });
    return route.fulfill({ contentType: name.endsWith('.css') ? 'text/css' : 'application/javascript', body: await readFile(new URL(name, import.meta.url), 'utf8') });
  });
  await page.goto('http://127.0.0.1/');
  await page.evaluate(async () => {
    window.calls = []; window.setupRuns = 0; window.installed = false; window.failAccounts = true;
    window.openvisionOnboarding = { show: () => window.setupRuns++ };
    window.openvisionProjectHome = {
      accountStatus: async () => {
        if (window.failAccounts) throw Error('Fixture status temporarily unavailable');
        return { supported: true, providers: [{ id: 'codex', installed: window.installed }] };
      },
      connectAccount: async id => { window.calls.push(['connect', id]); window.installed = true; },
      openAccount: async id => { window.calls.push(['open', id]); },
    };
    const state = { version: 1, activeId: null, providers: [{ id: 'fixture', name: 'Test provider', url: 'https://fixture.invalid/v1',
      capabilitiesDiscovered: true, models: Array.from({ length: 85 }, (_, index) => ({ id: `model-${index}`, name: `Model ${index}`, enabled: true })) }] };
    window.saved = new Map([['openvision.model-providers.v1', JSON.stringify(state)]]);
    window.secrets = new Map(); window.requests = [];
    const bridge = {
      storage: { get: key => window.saved.get(key), store: (key, value) => window.saved.set(key, value), flush: async () => {} },
      secrets: { get: async key => window.secrets.get(key), set: async (key, value) => window.secrets.set(key, value), delete: async key => window.secrets.delete(key) },
      auth: { storeOpenAIKeyAndWait: async () => {} },
      reactive: { setApplicationUserPersistentStorage() {}, manualSave() {} },
      piImport: async () => ({ ok: true, staged: false }),
      ai: { modelConfigService: { getModelConfig: () => ({}), setModelConfig() {} }, handleAvailableModelsChange() {} },
      request: async (url, key, headers) => { window.requests.push({ url, key, ...(Object.keys(headers ?? {}).length ? { headers } : {}) }); return { data: [{ id: 'discovered-model' }] }; },
    };
    window.bridge = bridge;
    const { mountModels } = await import('/model-settings.js');
    mountModels(document.querySelector('main'), bridge);
  });
  return page;
}

test('provider settings preserves discovery, model paging and filter controls in themed sections', async t => {
  const page = await fixture(t);
  await page.getByRole('heading', { name: 'Models & integrations' }).waitFor();
  assert.equal(await page.locator('.openvision-model-row').count(), 40);
  await page.getByRole('button', { name: 'Next', exact: true }).click();
  assert.equal(await page.locator('.openvision-model-row .openvision-model-title > span').first().textContent(), 'Model 40');
  await page.getByRole('searchbox', { name: 'Search models', exact: true }).fill('Model 84');
  await page.waitForFunction(() => document.querySelectorAll('.openvision-model-row').length === 1);
  assert.match(await page.locator('.openvision-model-row').innerText(), /Model 84/);
  await page.getByRole('searchbox', { name: 'Search models', exact: true }).fill('');
  await page.getByRole('button', { name: 'Add Provider', exact: true }).click();
  await page.getByRole('textbox', { name: 'Provider Name' }).fill('Local server');
  await page.getByRole('textbox', { name: 'API Base URL' }).fill('https://local.invalid/v1');
  await page.getByLabel('API Key', { exact: true }).fill('synthetic-ui-key');
  await page.getByRole('button', { name: 'Save', exact: true }).click();
  await page.getByRole('region', { name: 'Local server', exact: true }).waitFor();
  assert.deepEqual(await page.evaluate(() => window.requests), [{ url: 'https://local.invalid/v1/models', key: 'synthetic-ui-key' }]);
  assert.match(await page.getByRole('region', { name: 'Local server', exact: true }).textContent(), /discovered-model/);
  assert.equal(await page.locator('main').innerText().then(text => text.includes('synthetic-ui-key')), false);
  await page.getByRole('button', { name: 'Run setup again' }).click();
  assert.equal(await page.evaluate(() => window.setupRuns), 1);
  await page.setViewportSize({ width: 400, height: 900 });
  assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth), true);
});

test('provider header editor masks values, preserves blank edits and clears stored headers on request', async t => {
  const page = await fixture(t);
  await page.getByRole('button', { name: 'Add Provider', exact: true }).click();
  await page.getByLabel('Provider Name', { exact: true }).fill('Header server');
  await page.getByLabel('API Base URL', { exact: true }).fill('https://headers.invalid/v1');
  const headers = page.getByLabel('Additional Headers (JSON)', { exact: true });
  assert.equal(await headers.getAttribute('type'), 'password');
  await headers.fill('{"X-API-Key":"synthetic-header-value"}');
  for (const width of [850, 400]) {
    await page.setViewportSize({ width, height: 900 });
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth), true);
    assert.equal(await page.locator('dialog').evaluate(node => node.scrollWidth <= node.clientWidth), true);
    await page.screenshot({ path: `logs/provider-headers-${width}.png` });
  }
  await page.getByRole('button', { name: 'Save', exact: true }).click();
  const server = page.getByRole('region', { name: 'Header server', exact: true });
  await server.waitFor();
  assert.deepEqual((await page.evaluate(() => window.requests)).at(-1).headers, { 'x-api-key': 'synthetic-header-value' });
  assert.equal(await page.evaluate(() => window.saved.get('openvision.model-providers.v1').includes('synthetic-header-value')), false);
  await server.getByRole('button', { name: 'Edit Provider', exact: true }).click();
  assert.equal(await headers.inputValue(), '');
  assert.match(await headers.getAttribute('placeholder'), /x-api-key/);
  await page.getByRole('button', { name: 'Save', exact: true }).click();
  await page.locator('dialog').waitFor({ state: 'detached' });
  assert.equal(await page.evaluate(() => [...window.secrets.values()].filter(value => value.includes('synthetic-header-value')).length), 1);
  await server.getByRole('button', { name: 'Edit Provider', exact: true }).click();
  await page.getByLabel('Clear Saved Headers', { exact: true }).check();
  await page.getByRole('button', { name: 'Save', exact: true }).click();
  await page.locator('dialog').waitFor({ state: 'detached' });
  assert.equal(await page.evaluate(() => [...window.secrets.values()].some(value => value.includes('synthetic-header-value'))), false);
});

test('account settings exposes errors, explicit retry and official agent actions without claiming authentication', async t => {
  const page = await fixture(t);
  const accounts = page.getByRole('region', { name: 'Account integrations', exact: true });
  await accounts.getByText('Fixture status temporarily unavailable').waitFor();
  await page.evaluate(() => { window.failAccounts = false; });
  await accounts.getByRole('button', { name: 'Refresh status' }).click();
  await accounts.getByRole('button', { name: 'Set up & sign in · ChatGPT', exact: true }).click();
  await accounts.getByText('Sign-in managed in Codex').waitFor();
  assert.equal(await accounts.getByText('Installed', { exact: true }).count(), 1);
  assert.equal(await accounts.getByText('Signed in', { exact: true }).count(), 0);
  await accounts.getByRole('button', { name: 'Open Codex', exact: true }).click();
  assert.deepEqual(await page.evaluate(() => window.calls), [['connect', 'codex'], ['open', 'codex']]);
  await page.evaluate(() => { window.openvisionProjectHome = undefined; });
  await accounts.getByRole('button', { name: 'Refresh status' }).click();
  await accounts.getByText('Account integrations are starting. Try Refresh status in a moment.').waitFor();
  assert.equal(await accounts.getByRole('button', { name: 'Refresh status' }).isEnabled(), true);
});

test('account cards show verified identity and provider models and refresh explicitly', async t => {
  const page = await fixture(t);
  await page.evaluate(() => {
    window.openvisionProjectHome.accountStatus = async options => {
      window.lastStatusOptions = options;
      return { supported: true, providers: [
        { id: 'codex', installed: true, signedIn: true, email: 'personal@example.invalid', plan: 'plus',
          accountId: 'personal', models: [{ id: 'model-one', name: 'Provider-reported model' }] },
        { id: 'claude', installed: true, signedIn: false, accountId: 'work' },
      ] };
    };
    window.openvisionProjectHome.accountProfiles = async () => ({ accounts: [
      { id: 'personal', provider: 'codex', label: 'Personal' }, { id: 'work', provider: 'claude', label: 'Work' },
    ], active: { codex: 'personal', claude: 'work' } });
  });
  await page.getByRole('button', { name: 'Refresh status' }).click();
  await page.getByText('personal@example.invalid', { exact: true }).waitFor();
  assert.deepEqual(await page.evaluate(() => window.lastStatusOptions), { refresh: true });
  assert.equal(await page.getByText('Signed in', { exact: true }).count(), 1);
  assert.equal(await page.getByRole('combobox', { name: 'Codex account', exact: true }).getAttribute('data-value'), 'personal');
  await page.getByText('Models · 1', { exact: true }).click();
  await page.getByText('Provider-reported model', { exact: true }).waitFor();
  await page.evaluate(() => {
    window.openvisionProjectHome.accountStatus = async () => ({ supported: true, providers: [
      { id: 'codex', installed: true, signedIn: true, models: [],
        modelNotice: 'This account does not currently offer GPT-6 models. Use your GPT-6 API provider in Agent chat.' },
    ] });
  });
  await page.getByRole('button', { name: 'Refresh status' }).click();
  await page.getByText('This account does not currently offer GPT-6 models. Use your GPT-6 API provider in Agent chat.', { exact: true }).waitFor();
  assert.equal(await page.getByText('Models · 1', { exact: true }).count(), 0);
});

test('stacked account rows fit wide and narrow panels and failed preparation restores controls', async t => {
  const page = await fixture(t);
  await page.addStyleTag({ content: `:root { --vscode-foreground:#ddd; --vscode-descriptionForeground:#a4a4a4;
    --vscode-editor-background:#202020; --vscode-input-background:#292929; --vscode-input-foreground:#ddd;
    --vscode-panel-border:#3c3c3c; --vscode-widget-border:#3c3c3c; --vscode-focusBorder:#aaa; --vscode-errorForeground:#f88; }
    body { margin:24px; background:#202020; font-family:system-ui,sans-serif; }` });
  await page.evaluate(() => {
    window.openvisionProjectHome.accountStatus = async () => ({ supported: true, providers: [
      { id: 'codex', installed: true, signedIn: true, email: 'personal@example.invalid', plan: 'Plus', accountId: 'personal', models: [{ id: 'one', name: 'Provider model' }] },
      { id: 'claude', installed: true, signedIn: false, accountId: 'work' },
    ] });
    window.openvisionProjectHome.accountProfiles = async () => ({ accounts: [
      { id: 'personal', provider: 'codex', label: 'Personal' }, { id: 'work', provider: 'claude', label: 'Work' },
    ], active: { codex: 'personal', claude: 'work' } });
    window.openvisionProjectHome.createAccount = async (provider, label) => ({ provider, label, id: 'created' });
    window.openvisionProjectHome.selectAccount = () => new Promise((resolve, reject) => { window.rejectSwitch = reject; });
  });
  await page.getByRole('button', { name: 'Refresh status' }).click();
  await page.getByText('personal@example.invalid', { exact: true }).waitFor();
  const boxes = await page.locator('.openvision-account-card').evaluateAll(nodes => nodes.map(node => {
    const { x, y, width, height } = node.getBoundingClientRect(); return { x, y, width, height };
  }));
  assert.equal(boxes[0].x, boxes[1].x); assert.equal(boxes[0].width, boxes[1].width);
  assert.ok(boxes[1].y >= boxes[0].y + boxes[0].height + 8);
  await page.screenshot({ path: 'logs/account-settings-wide.png' });
  await page.setViewportSize({ width: 400, height: 1000 });
  assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth), true);
  await page.screenshot({ path: 'logs/account-settings-narrow.png' });
  await page.getByRole('article', { name: 'Codex', exact: true }).getByRole('button', { name: 'Add account' }).click();
  const dialog = page.getByRole('dialog', { name: 'Add Codex account' });
  await dialog.getByRole('textbox', { name: 'Account name' }).fill('Second account');
  await page.evaluate(() => Promise.all(document.getAnimations().map(animation => animation.finished.catch(() => {}))));
  await page.screenshot({ path: 'logs/account-settings-dialog.png' });
  await dialog.getByRole('button', { name: 'Add account', exact: true }).click();
  await page.getByText('Preparing an isolated account…', { exact: true }).waitFor();
  assert.equal(await page.getByRole('button', { name: 'Refresh status' }).isEnabled(), false);
  await page.evaluate(() => window.rejectSwitch(Error('The account host did not become ready. Refresh status and try again.')));
  await page.getByText('The account host did not become ready. Refresh status and try again.', { exact: true }).waitFor();
  assert.equal(await page.getByRole('button', { name: 'Refresh status' }).isEnabled(), true);
  assert.equal(await page.locator('.openvision-account-status').getAttribute('data-state'), 'error');
});

test('account deletion confirms the exact profile, keeps history and recovers from cleanup failure', async t => {
  const page = await fixture(t);
  await page.evaluate(() => {
    window.deleted = [];
    window.profiles = [{ id: 'personal', provider: 'codex', label: 'Personal' }];
    window.openvisionProjectHome.accountStatus = async () => ({ supported: true,
      providers: [{ id: 'codex', installed: true, accountId: window.profiles[0]?.id ?? null }] });
    window.openvisionProjectHome.accountProfiles = async () => ({ accounts: window.profiles, active: {} });
    window.openvisionProjectHome.removeAccount = async (...args) => {
      window.deleted.push(args);
      if (window.failDelete) throw Error('Another window still uses this account.');
      window.profiles = [];
    };
  });
  await page.getByRole('button', { name: 'Refresh status' }).click();
  const account = page.getByRole('article', { name: 'Codex', exact: true });
  await account.getByRole('button', { name: 'Delete account', exact: true }).click();
  let dialog = page.getByRole('dialog', { name: 'Delete Codex account', exact: true });
  assert.match(await dialog.innerText(), /Personal.*credentials and cache/s);
  assert.match(await dialog.innerText(), /conversation files will be kept/);
  await dialog.getByRole('button', { name: 'Cancel', exact: true }).click();
  assert.deepEqual(await page.evaluate(() => window.deleted), []);
  await page.evaluate(() => { window.failDelete = true; });
  await account.getByRole('button', { name: 'Delete account', exact: true }).click();
  await page.getByRole('dialog').getByRole('button', { name: 'Delete account', exact: true }).click();
  await page.getByText('Another window still uses this account.', { exact: true }).waitFor();
  assert.equal(await page.getByRole('button', { name: 'Refresh status' }).isEnabled(), true);
  await page.evaluate(() => { window.failDelete = false; });
  await account.getByRole('button', { name: 'Delete account', exact: true }).click();
  await page.getByRole('dialog').getByRole('button', { name: 'Delete account', exact: true }).click();
  await page.getByText('Account deleted. Credentials and cache removed; conversation files kept locally.', { exact: true }).waitFor();
  assert.equal(await account.getByRole('button', { name: 'Delete account', exact: true }).count(), 0);
  assert.deepEqual(await page.evaluate(() => window.deleted), [['codex', 'personal'], ['codex', 'personal']]);
});

test('settings and account dialogs keep text readable in dark and light themes with faint description tokens', async t => {
  const page = await fixture(t);
  for (const theme of [{ background: '#1e2127', foreground: '#d8dee9', description: 'rgba(123,136,161,.7)' },
    { background: '#ffffff', foreground: '#242424', description: 'rgba(0,0,0,.3)' }]) {
    await page.evaluate(theme => {
      for (const [name, value] of Object.entries({ 'editor-background': theme.background,
        'input-background': theme.background, 'input-foreground': theme.foreground,
        'settings-textInputForeground': theme.foreground, foreground: theme.foreground, descriptionForeground: theme.description }))
        document.documentElement.style.setProperty(`--vscode-${name}`, value);
      document.body.style.background = theme.background;
    }, theme);
    await page.getByRole('button', { name: 'Add Provider', exact: true }).click();
    const ratios = await page.evaluate(() => {
      const channels = color => color.match(/[\d.]+/g).slice(0, 3).map(Number);
      const luminance = color => channels(color).map(v => v / 255).map(v => v <= .04045 ? v / 12.92 : ((v + .055) / 1.055) ** 2.4)
        .reduce((sum, v, i) => sum + v * [.2126, .7152, .0722][i], 0);
      const background = luminance(getComputedStyle(document.body).backgroundColor);
      return [...document.querySelectorAll('.openvision-account-card strong, .openvision-account-card small, .openvision-settings-description, .openvision-model-dialog label')].map(el => {
        const foreground = luminance(getComputedStyle(el).color);
        return { text: el.textContent.slice(0, 45), ratio: (Math.max(background, foreground) + .05) / (Math.min(background, foreground) + .05) };
      });
    });
    assert.ok(ratios.length > 5);
    assert.deepEqual(ratios.filter(item => item.ratio < 4.5), []);
    await page.getByRole('dialog').getByRole('button', { name: 'Cancel', exact: true }).click();
  }
});

async function saveWithSecretStorage(t, type) {
  const page = await fixture(t);
  await page.evaluate(type => {
    const secrets = window.bridge.secrets;
    secrets.type = type; secrets.resolvedStorageService = Promise.resolve();
    secrets.set = (key, value) => new Promise(resolve => {
      window.dialogOpenDuringSet = !!document.querySelector('dialog[open]');
      window.finishSet = () => { window.secrets.set(key, value); resolve(); };
    });
  }, type);
  await page.getByRole('button', { name: 'Add Provider', exact: true }).click();
  await page.getByRole('textbox', { name: 'Provider Name' }).fill('No keyring');
  await page.getByRole('textbox', { name: 'API Base URL' }).fill('https://fixture.invalid/v1');
  await page.getByLabel('API Key', { exact: true }).fill('fixture-key');
  await page.getByRole('checkbox', { name: 'Discover Models', exact: true }).uncheck();
  await page.locator('dialog').getByRole('button', { name: 'Save', exact: true }).click();
  await page.waitForFunction(() => window.finishSet);
  const dialogOpen = await page.evaluate(() => window.dialogOpenDuringSet);
  await page.evaluate(() => window.finishSet());
  return { page, dialogOpen };
}

test('without a Secret Service, Save releases the provider dialog so the keyring choice is reachable (issue #6)', async t => {
  const { page, dialogOpen } = await saveWithSecretStorage(t, 'in-memory');
  assert.equal(dialogOpen, false, 'A modal provider dialog would cover and disable the workbench keyring prompt');
  await page.getByText(/^Saved for this session only: no Secret Service is available/).waitFor();
  assert.equal(await page.evaluate(() => window.secrets.has([...window.secrets.keys()][0])), true);
});

test('with a persisted Secret Service, Save keeps the dialog until the key is stored', async t => {
  const { page, dialogOpen } = await saveWithSecretStorage(t, 'persisted');
  assert.equal(dialogOpen, true);
  await page.locator('.openvision-model-status').getByText('Saved', { exact: true }).waitFor();
});
