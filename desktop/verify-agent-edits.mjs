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
    verifyKeptUndo: page => verifyKeptUndoForFiles(page, { directory, files, assertFiles }),
  };
}

export async function verifyKeptUndoForFiles(page, { directory, files, assertFiles }) {
  const open = async file => {
    await page.keyboard.press('ControlOrMeta+p');
    const quick = page.locator('.quick-input-widget');
    await quick.getByRole('textbox').fill(file.path); await quick.getByRole('textbox').press('Enter');
    await quick.waitFor({ state: 'hidden' });
    await page.locator('.editor-instance .monaco-editor .inputarea').filter({ visible: true }).first().focus();
  };
  const stages = [];
  // Acceptance is a separate undo element from the text edit. Verify both.
  for (const file of files) {
    await open(file);
    const keep = page.getByText('Keep File', { exact: true }).filter({ visible: true });
    await keep.waitFor({ state: 'hidden' });
    await page.keyboard.press('ControlOrMeta+z');
    await keep.waitFor({ state: 'visible' });
    await saveAndCheck(page, file, file.changed);
    stages.push({ path: file.path, action: 'undo acceptance', pendingReview: true, text: 'changed' });
    await page.keyboard.press('ControlOrMeta+z');
    await saveAndCheck(page, file, file.original);
    stages.push({ path: file.path, action: 'undo text', text: 'original' });
  }
  await assertFiles(false);
  await page.screenshot({ path: join(directory, 'kept-edits-undone.png') });
  for (const file of files) {
    await open(file);
    const redo = process.platform === 'win32' ? 'Control+y' : 'ControlOrMeta+Shift+z';
    await page.keyboard.press(redo); await saveAndCheck(page, file, file.changed);
    const keep = page.getByText('Keep File', { exact: true }).filter({ visible: true });
    // Returning to the original bytes may dispose the diff; text redo need not recreate it.
    stages.push({ path: file.path, action: 'redo text', pendingReview: await keep.count() > 0, text: 'changed' });
    await page.keyboard.press(redo);
    await keep.waitFor({ state: 'hidden' });
    await saveAndCheck(page, file, file.changed);
    stages.push({ path: file.path, action: 'redo acceptance', pendingReview: false, text: 'changed' });
    await page.keyboard.press('ControlOrMeta+End');
    // One character avoids depending on the editor's word/newline undo grouping.
    await page.keyboard.type('x');
    await saveAndCheck(page, file, `${file.changed}x`);
    await page.keyboard.press('ControlOrMeta+z');
    await saveAndCheck(page, file, file.changed);
    await keep.waitFor({ state: 'hidden' });
    stages.push({ path: file.path, action: 'undo subsequent user edit', pendingReview: false, text: 'changed' });
  }
  await assertFiles(true);
  await page.screenshot({ path: join(directory, 'kept-edits-redone.png') });
  await writeFile(join(directory, 'kept-edit-undo.json'), JSON.stringify(stages, null, 2));
  return stages;
}

async function saveAndCheck(page, file, expected) {
  await page.keyboard.press('ControlOrMeta+s');
  await waitForFile(page, file.path, expected);
}

async function waitForFile(page, path, expected) {
  const deadline = Date.now() + fileUpdateTimeoutMs;
  while (Date.now() < deadline) {
    if (await readFile(path, 'utf8') === expected) return;
    await page.waitForTimeout(fileUpdatePollMs);
  }
  assert.equal(await readFile(path, 'utf8'), expected);
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
