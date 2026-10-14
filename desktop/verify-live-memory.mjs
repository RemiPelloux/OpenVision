import assert from 'node:assert/strict';
import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';

export const liveMemoryDescription = 'When asked to read the verification file for this project';

export async function approveLiveMemory({ page, project, filename, result }) {
  const input = page.locator('.aislash-editor-input[contenteditable=true]').filter({ visible: true }).first();
  await input.fill(`Suggest a project memory for me to review, using the OpenVision memory suggestion format. The durable fact is: the verification file for this project is ${filename}; when asked to read the verification file, read it and reply with exactly its first line. Do not save files or call any tools. Only propose this memory.`);
  await input.press('Enter');
  const card = page.locator('.openvision-memory-card').filter({ visible: true }).last();
  await card.getByRole('button', { name: 'Save project memory', exact: true }).waitFor({ timeout: 90000 });
  await page.locator('.stop-button').filter({ visible: true }).waitFor({ state: 'hidden', timeout: 30000 });
  const folder = join(project, '.openvision/rules');
  const files = () => readdir(folder).catch(error => { if (error.code === 'ENOENT') return []; throw error; });
  assert.deepEqual(await files(), [], 'Real model suggestion must not write before approval');
  assert.ok((await card.getByLabel('Memory content', { exact: true }).inputValue()).includes(filename));
  await card.getByLabel('Memory title', { exact: true }).fill('Verification file');
  await card.getByLabel('When to use', { exact: true }).fill(liveMemoryDescription);
  await page.screenshot({ path: join(project, '..', 'memory-before-approval.png') });
  await card.getByRole('button', { name: 'Save project memory', exact: true }).click();
  await card.getByText('Saved to this project. Agent can read it when relevant.', { exact: true }).waitFor();
  const saved = await files(); assert.equal(saved.length, 1);
  const content = await readFile(join(folder, saved[0]), 'utf8');
  assert.ok(content.includes(filename) && content.includes('alwaysApply: false'));
  result.realSuggestionApproved = true; result.noFileBeforeApproval = true;
  result.savedFile = join('.openvision/rules', saved[0]);
  result.titleAndDescriptionReviewed = true;
}

export function inspectLiveMemoryContext(body, { filename, marker }, result) {
  const payload = JSON.parse(body), messages = JSON.stringify(payload.messages ?? payload.input);
  assert.ok(messages.includes(liveMemoryDescription), 'Saved memory description reaches new chat after restart');
  assert.ok(!messages.includes(filename), 'Memory body is fetched on demand, not eagerly injected');
  assert.ok(!messages.includes(marker), 'Answer is available only by reading the verification file');
  result.descriptionWithoutBodyInFreshContext = true;
}
