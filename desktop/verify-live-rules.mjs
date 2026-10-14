import assert from 'node:assert/strict';

export async function createLiveUserRule(page, rule) {
  await page.keyboard.press('ControlOrMeta+Shift+p');
  await page.locator('.quick-input-widget input[type="text"]').fill('>Open Customize');
  await page.locator('.quick-input-widget').getByText('Open Customize', { exact: true }).first().waitFor();
  await page.keyboard.press('Enter');
  await page.getByRole('button', { name: 'Rules', exact: true }).click();
  await page.getByRole('button', { name: 'New', exact: true }).click();
  await page.locator('.quick-input-widget input[type="text"]').fill(rule);
  await page.keyboard.press('Enter');
  await page.getByText(rule, { exact: true }).waitFor();
  await page.keyboard.press('ControlOrMeta+w');
}

export function inspectRulesRequest(body, { userRule, projectRule, marker }, result) {
  const payload = JSON.parse(body);
  const messages = JSON.stringify(payload.messages ?? payload.input);
  assert.ok(messages.includes(userRule), 'Persisted user rule must reach the first real Agent context');
  assert.ok(messages.includes(projectRule), 'Always-applied project rule must reach the real Agent context');
  assert.ok(!messages.includes(marker), 'Only Read may reveal the file marker');
  result.userRuleInFirstRequest = true;
  result.projectRuleInFirstRequest = true;
  result.initialRequestDoesNotContainAnswer = true;
}
