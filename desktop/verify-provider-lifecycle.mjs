import assert from 'node:assert/strict';

// Operates only on the disposable provider-identity verifier's native window.
export async function verifyProviderLifecycle(context) {
  const { settings, result, setPhase, infer, restart, chatInput } = context;
  let { page } = context;
  const provider = name => page.locator('.openvision-provider').filter({ hasText: name });
  const settled = () => page.waitForFunction(() => document.querySelector('.openvision-model-settings')?.dataset.busy === 'false');
  const editor = () => page.locator('.tabs-container .tab').filter({ hasText: 'hello.js' }).first().click();
  async function choose(name) {
    await editor(); await chatInput();
    await page.locator('.vscode-model-picker__trigger-markdown').filter({ visible: true }).first().click();
    const menu = page.getByTestId('model-picker-menu').filter({ visible: true });
    await menu.getByText(name, { exact: true }).last().click();
  }
  async function blocked(label) {
    setPhase(label); await editor();
    const input = await chatInput();
    await input.fill(`Verify ${label}. Do not use tools.`); await input.press('Enter');
    await page.getByText(/The selected model or provider is unavailable/).filter({ visible: true }).first().waitFor({ timeout: 30000 });
    await page.locator('.stop-button').filter({ visible: true }).waitFor({ state: 'hidden' });
    assert.equal(result.connections.filter(connection => connection.phase === label).length, 0,
      'An unavailable selection must fail before any provider connection');
    result[label] = true;
  }
  // The previous Agent selection is A; autocomplete's B selection is independent.
  await settings();
  await page.getByRole('combobox', { name: 'Tab autocomplete model' }).selectOption('');
  await provider('Provider A').getByRole('checkbox', { name: 'Enable Shared Coder', exact: true }).uncheck();
  await settled(); await blocked('disabled-selection');
  await settings();
  await provider('Provider A').getByRole('checkbox', { name: 'Enable Shared Coder', exact: true }).check();
  await settled(); await editor(); await infer('a', 'reenabled');
  await settings();
  await provider('Provider A').getByRole('button', { name: 'Remove Provider', exact: true }).click();
  await settled(); assert.equal(await provider('Provider A').count(), 0);
  await blocked('removed-provider');
  page = await restart();
  await blocked('removed-after-restart');
  await choose('Shared Coder'); await infer('b', 'explicit-recovery');

  await settings();
  await provider('Provider B').getByRole('button', { name: 'Add Model', exact: true }).click();
  const manualId = 'manual/日本語:custom';
  await page.getByLabel('Model ID', { exact: true }).fill(manualId);
  await page.getByLabel('Display Name', { exact: true }).fill('Manual model');
  await page.locator('dialog').getByRole('button', { name: 'Save', exact: true }).click();
  await page.locator('dialog').waitFor({ state: 'detached' });
  await provider('Provider B').getByRole('checkbox', { name: 'Enable Manual model', exact: true }).waitFor();
  await choose('Manual model'); await infer('b', 'manual');
  assert.equal(result.requests.at(-1).model, manualId);
  await settings();
  await provider('Provider B').getByRole('button', { name: 'Edit Manual model', exact: true }).click();
  await page.getByLabel('Display Name', { exact: true }).fill('Renamed manual model');
  await page.locator('dialog').getByRole('button', { name: 'Save', exact: true }).click();
  await page.locator('dialog').waitFor({ state: 'detached' });
  await provider('Provider B').getByRole('button', { name: 'Discover Models', exact: true }).click();
  await settled();
  await provider('Provider B').getByRole('checkbox', { name: 'Enable Renamed manual model', exact: true }).waitFor();
  page = await restart(); await settings();
  await provider('Provider B').getByRole('checkbox', { name: 'Enable Renamed manual model', exact: true }).waitFor();
  await choose('Renamed manual model'); await infer('b', 'manual-restart');
  assert.equal(result.requests.at(-1).model, manualId);
  result.manualAddRenameDiscoveryRestart = true;
}
