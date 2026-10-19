// Project Home opens over project windows at startup. Verifiers that exercise
// the editor enter the workspace first; Project Home has its own verifiers.
export async function enterWorkspace(page, timeout = 5000) {
  const home = page.getByRole('region', { name: 'Welcome to OpenVision' });
  if (!await home.waitFor({ state: 'visible', timeout }).then(() => true, () => false)) return false;
  await home.getByRole('button', { name: 'Enter workspace', exact: true }).click();
  await home.waitFor({ state: 'hidden' });
  return true;
}

// Open the Agent pane when a restart or Project Home left it closed.
export async function openChat(page) {
  const input = page.locator('.aislash-editor-input[contenteditable=true]').filter({ visible: true }).first();
  if (!await input.waitFor({ timeout: 3000 }).then(() => true, () => false)) {
    await page.locator('.monaco-editor .inputarea').first().focus().catch(() => {});
    await page.keyboard.press('ControlOrMeta+Shift+l');
    await input.waitFor();
  }
  return input;
}

// Reopen a chat that is not on screen through the native Chat History list (by
// its title) and confirm that the reopened chat shows every `expected` text.
// Matching is case-sensitive and limited to that chat: titles repeat prompt
// words in title case. Returns false when any step does not happen.
export async function openChatFromHistory(page, { id, title, expected = [], timeout = 15000 }) {
  await openChat(page);
  await page.keyboard.press("Control+Alt+'"); // Show Chat History: its search box takes focus
  const search = page.getByRole('textbox', { name: 'Search agents' }).filter({ visible: true });
  if (!await search.first().waitFor({ timeout: 10000 }).then(() => true, () => false)) return false;
  await search.first().fill(title);
  const row = page.locator('[data-component="menu-row"]').filter({ visible: true })
    .filter({ has: page.getByText(title, { exact: true }) });
  if (!await row.first().waitFor({ timeout: 10000 }).then(() => true, () => false) || await row.count() !== 1) return false;
  await row.first().click();
  const opened = await page.waitForFunction(id => [...document.querySelectorAll('[data-composer-id]')]
    .some(element => element.getAttribute('data-composer-id') === id && element.getClientRects().length), id, { timeout })
    .then(() => true, () => false);
  if (!opened) return false;
  const chat = page.locator(`[data-composer-id="${id}"]`).filter({ visible: true });
  for (const text of expected)
    if (!await chat.getByText(new RegExp(text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))).filter({ visible: true }).first()
      .waitFor({ timeout }).then(() => true, () => false)) return false;
  return true;
}
