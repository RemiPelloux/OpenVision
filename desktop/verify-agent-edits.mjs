import assert from 'node:assert/strict';
import { readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const fileUpdateTimeoutMs = 5000;
const fileUpdatePollMs = 100;

export async function createAgentEditFixture({ directory, project }) {
  const files = [
    { path: join(project, 'hello.js'), original: 'export const answer = 42;\n',
      changed: 'export const answer = 43;\n', old_string: 'answer = 42', new_string: 'answer = 43' },
    { path: join(project, 'second.js'), original: 'export const label = "before";\n',
      changed: 'export const label = "after café 日本語";\n', old_string: '"before"', new_string: '"after café 日本語"' },
  ];
  const unrelated = join(project, 'unrelated.txt'), preserved = 'Preserve this unrelated file — 日本語\n';
  await Promise.all([...files.map(file => writeFile(file.path, file.original)), writeFile(unrelated, preserved)]);
  const state = { round: 0, results: [] };
  const assertFiles = async changed => {
    await Promise.all(files.map(async file => assert.equal(await readFile(file.path, 'utf8'), changed ? file.changed : file.original)));
    assert.equal(await readFile(unrelated, 'utf8'), preserved);
  };
  return {
    respond: (payload, event) => respondToEdit(payload, event, { files, state }),
    verifyReview: (page, action) => verifyReview(page, action, { directory, files, state, assertFiles }),
    assertKeptFiles: () => assertFiles(true),
  };
}

function respondToEdit(payload, event, { files, state }) {
  const prefix = `call_openvision_edit_${state.round}_`;
  const completed = files.filter((_, index) => payload.messages?.some(message =>
    message.role === 'tool' && message.tool_call_id === `${prefix}${index}`));
  if (completed.length < files.length) {
    const { path, old_string, new_string } = files[completed.length];
    event({ role: 'assistant', tool_calls: [{ index: 0, id: `${prefix}${completed.length}`, type: 'function',
      function: { name: 'StrReplace', arguments: JSON.stringify({ path, old_string, new_string }) } }] });
    event({}, 'tool_calls');
    return;
  }
  state.results.push(...payload.messages.filter(message => message.role === 'tool' && message.tool_call_id?.startsWith(prefix)));
  event({ role: 'assistant', content: `OpenVision multi-file edits ${state.round} ready for review.` }); event({}, 'stop');
}

async function verifyReview(page, action, { directory, files, state, assertFiles }) {
  state.round++;
  const input = page.locator('.aislash-editor-input[contenteditable=true]').filter({ visible: true }).first();
  await input.fill('Change answer to 43 in hello.js and label to after café 日本語 in second.js. Preserve unrelated.txt.');
  await input.press('Enter');
  await page.getByText(`OpenVision multi-file edits ${state.round} ready for review.`, { exact: true }).first().waitFor({ timeout: 45000 });
  await writeFile(join(directory, 'edit-results.json'), JSON.stringify(state.results, null, 2));
  await writeFile(join(directory, `edit-review-${state.round}.txt`), await page.locator('body').innerText());
  await page.screenshot({ path: join(directory, `edit-review-${state.round}.png`) });
  await assertFiles(true);
  await page.getByText(action, { exact: true }).filter({ visible: true }).click();
  // The recovered toolbar requires a second click before rejecting pending edits.
  if (action === 'Undo All') await page.getByText('Confirm', { exact: true }).filter({ visible: true }).click();
  const keep = action === 'Keep All', deadline = Date.now() + fileUpdateTimeoutMs;
  while (Date.now() < deadline) {
    const settled = await Promise.all(files.map(async file => await readFile(file.path, 'utf8') === (keep ? file.changed : file.original)));
    if (settled.every(Boolean)) break;
    await page.waitForTimeout(fileUpdatePollMs);
  }
  await assertFiles(keep);
}
