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
