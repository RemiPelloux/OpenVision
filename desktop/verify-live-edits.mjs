import assert from 'node:assert/strict';
import { readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { verifyKeptUndoForFiles } from './verify-agent-edits.mjs';

const fileUpdateTimeoutMs = 10000;
const fileUpdatePollMs = 100;

export async function createLiveEditFixture({ directory, project }) {
  const files = [
    { path: join(project, 'hello.js'), original: 'export const answer = 42;\n',
      changed: 'export const answer = 43;\n', old_string: 'answer = 42', new_string: 'answer = 43' },
    { path: join(project, 'second.js'), original: 'export const label = "before";\n',
      changed: 'export const label = "after café 日本語";\n', old_string: '"before"', new_string: '"after café 日本語"' },
  ];
  const unrelated = join(project, 'unrelated.txt');
  const preserved = 'Preserve this unrelated file — 日本語\n';
  await Promise.all([...files.map(file => writeFile(file.path, file.original)), writeFile(unrelated, preserved)]);
  const assertFiles = async changed => {
    await Promise.all(files.map(async file => assert.equal(await readFile(file.path, 'utf8'), changed ? file.changed : file.original)));
    assert.equal(await readFile(unrelated, 'utf8'), preserved);
  };
  const prompt = `Use exactly two StrReplace tool calls, one for each absolute path below. Do not use any other tool, terminal, shell, or editor operation. ` +
    `First replace the exact old_string with new_string in hello.js, then do the same in second.js. ` +
    `After both tool calls succeed, reply with exactly LIVE_EDIT_READY.\n\n` +
    files.map(file => JSON.stringify({ path: file.path, old_string: file.old_string, new_string: file.new_string })).join('\n');
  const waitForReview = async page => {
    await page.getByText('Keep All', { exact: true }).filter({ visible: true }).waitFor({ timeout: 120000 });
    await waitForFiles(page, true);
  };
  const rejectReview = async page => {
    await page.getByText('Undo All', { exact: true }).filter({ visible: true }).click();
    await page.getByText('Confirm', { exact: true }).filter({ visible: true }).click();
    await waitForFiles(page, false); await assertFiles(false);
  };
  const acceptReview = async page => {
    await page.getByText('Keep All', { exact: true }).filter({ visible: true }).click();
    await page.getByText('Keep All', { exact: true }).filter({ visible: true }).waitFor({ state: 'hidden' });
    await assertFiles(true);
  };
  const waitForFiles = async (page, changed) => {
    const expected = files.map(file => changed ? file.changed : file.original);
    const deadline = Date.now() + fileUpdateTimeoutMs;
    while (Date.now() < deadline) {
      const current = await Promise.all(files.map(file => readFile(file.path, 'utf8')));
      if (current.every((value, index) => value === expected[index])) return;
      await page.waitForTimeout(fileUpdatePollMs);
    }
    await assertFiles(changed);
  };
  return {
    files, unrelated, preserved, prompt, assertFiles,
    waitForReview, rejectReview, acceptReview,
    verifyKeptUndo: page => verifyKeptUndoForFiles(page, { directory, files, assertFiles }),
  };
}
