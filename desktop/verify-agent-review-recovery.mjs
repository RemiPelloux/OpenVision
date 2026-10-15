import assert from 'node:assert/strict';
import { readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const timeoutMs = 5000;
const redo = process.platform === 'darwin' ? 'Meta+Shift+z' : 'Control+y';

export async function createReviewRecoveryFixture({ directory, project }) {
  const repeated = join(project, 'repeat café.js'), parked = join(project, 'parked.js');
  const text = value => `export const value = ${value};\n`;
  const parkedBefore = 'export const parked = "before";\n', parkedAfter = 'export const parked = "after";\n';
  await writeFile(repeated, text(1)); await writeFile(parked, parkedBefore);
  const state = { round: 'repeat', results: [], stages: [], protectedFiles: new Map() };
  const rounds = {
    repeat: [replace(repeated, 'value = 1', 'value = 2'), replace(repeated, 'value = 2', 'value = 3')],
    pending: [replace(repeated, 'value = 3', 'value = 4'), replace(parked, '"before"', '"after"')],
  };
  rounds.pendingKeep = rounds.pending;
  const assertProtected = async () => {
    for (const [path, contents] of state.protectedFiles) assert.equal(await readFile(path, 'utf8'), contents);
  };
  return {
    results: state.stages,
    respond: (payload, event) => respond(payload, event, { state, rounds }),
    async verifyRepeated(page) {
      for (const name of ['hello.js', 'second.js', 'unrelated.txt']) {
        const path = join(project, name); state.protectedFiles.set(path, await readFile(path, 'utf8'));
      }
      assert.equal(await page.locator('.tabs-container .tab').filter({ hasText: 'repeat café.js' }).count(), 0);
      await submit(page, 'Change repeat café.js from value 1 to 2, then from 2 to 3, using separate edits.', state);
      await waitForFile(page, repeated, text(3));
      await keepAll(page, 'Keep'); await openEditor(page, repeated);
      const keep = page.getByText('Keep File', { exact: true }).filter({ visible: true });
      await page.keyboard.press('ControlOrMeta+z'); await keep.waitFor({ state: 'visible' });
      await saveAndCheck(page, repeated, text(3));
      for (const value of [2, 1]) {
        await page.keyboard.press('ControlOrMeta+z'); await saveAndCheck(page, repeated, text(value));
        state.stages.push({ action: 'undo repeated edit', value });
      }
      for (const value of [2, 3]) {
        await page.keyboard.press(redo); await saveAndCheck(page, repeated, text(value));
        state.stages.push({ action: 'redo repeated edit', value });
      }
      await page.keyboard.press(redo); await keep.waitFor({ state: 'hidden' });
      await saveAndCheck(page, repeated, text(3)); await assertProtected();
      await page.screenshot({ path: join(directory, 'repeated-edit-redone.png') });
      await page.keyboard.press('ControlOrMeta+w');
    },
    async preparePending(page, round = 'pending') {
      state.round = round;
      await submit(page, 'Change repeat café.js from value 3 to 4 and parked.js from before to after. Leave review pending.', state);
      await waitForFile(page, repeated, text(4)); await waitForFile(page, parked, parkedAfter);
      await page.getByText('Keep All', { exact: true }).filter({ visible: true }).waitFor();
      assert.equal(await page.locator('.tabs-container .tab').filter({ hasText: /repeat café\.js|parked\.js/ }).count(), 0);
      await assertProtected();
      await writeFile(join(directory, 'review-recovery-tools.json'), JSON.stringify(state.results, null, 2));
      await page.screenshot({ path: join(directory, `pending-${state.round}-before-restart.png`) });
    },
    async rejectRestored(page) {
      await page.getByText(`OpenVision ${state.round} edits ready.`, { exact: true }).first().waitFor();
      await page.getByText('Undo All', { exact: true }).filter({ visible: true }).click();
      await page.getByText('Confirm', { exact: true }).filter({ visible: true }).click();
      await waitForFile(page, repeated, text(3)); await waitForFile(page, parked, parkedBefore);
      await page.getByText('Keep All', { exact: true }).filter({ visible: true }).waitFor({ state: 'hidden' });
      await assertProtected();
      state.stages.push({ action: 'reject pending edits after restart restores original bytes', files: 2 });
      await page.screenshot({ path: join(directory, 'pending-review-rejected.png') });
    },
    async acceptRestored(page) {
      await page.getByText(`OpenVision ${state.round} edits ready.`, { exact: true }).first().waitFor();
      await page.getByText('Keep All', { exact: true }).filter({ visible: true }).waitFor();
      await waitForFile(page, repeated, text(4)); await waitForFile(page, parked, parkedAfter);
      await page.screenshot({ path: join(directory, 'pending-review-restored.png') });
      await keepAll(page); await assertProtected();
      state.stages.push({ action: 'accept pending edits after restart', files: 2 });
    },
    async verifyAcceptedRestart(page) {
      await page.getByText(`OpenVision ${state.round} edits ready.`, { exact: true }).first().waitFor();
      await page.getByText('Keep All', { exact: true }).filter({ visible: true }).waitFor({ state: 'hidden' });
      await waitForFile(page, repeated, text(4)); await waitForFile(page, parked, parkedAfter);
      await assertProtected();
      state.stages.push({ action: 'accepted edits survive second restart', files: 2 });
      await page.screenshot({ path: join(directory, 'accepted-review-after-restart.png') });
      await writeFile(join(directory, 'review-recovery.json'), JSON.stringify(state.stages, null, 2));
    },
  };
}

const replace = (path, old_string, new_string) => ({ path, old_string, new_string });

function respond(payload, event, { state, rounds }) {
  const prefix = `ov_review_${state.round}_`, calls = rounds[state.round];
  const completed = payload.messages?.filter(message => message.role === 'tool' && message.tool_call_id?.startsWith(prefix)) ?? [];
  if (completed.length < calls.length) {
    event({ role: 'assistant', tool_calls: [{ index: 0, id: `${prefix}${completed.length}`, type: 'function',
      function: { name: 'StrReplace', arguments: JSON.stringify(calls[completed.length]) } }] });
    event({}, 'tool_calls'); return;
  }
  state.results.push(...completed);
  event({ role: 'assistant', content: `OpenVision ${state.round} edits ready.` }); event({}, 'stop');
}

async function submit(page, prompt, state) {
  const input = page.locator('.aislash-editor-input[contenteditable=true]').filter({ visible: true }).first();
  await input.fill(prompt); await input.press('Enter');
  await page.getByText(`OpenVision ${state.round} edits ready.`, { exact: true }).first().waitFor({ timeout: 45000 });
  await page.locator('.stop-button').filter({ visible: true }).waitFor({ state: 'hidden' });
}

async function keepAll(page, label = 'Keep All') {
  const keep = page.getByText(label, { exact: true }).filter({ visible: true });
  await keep.click(); await keep.waitFor({ state: 'hidden' });
}

async function openEditor(page, path) {
  await page.keyboard.press('ControlOrMeta+p');
  const quick = page.locator('.quick-input-widget');
  await quick.getByRole('textbox').fill(path); await quick.getByRole('textbox').press('Enter');
  await quick.waitFor({ state: 'hidden' });
  await page.locator('.editor-instance .monaco-editor .inputarea').filter({ visible: true }).first().focus();
}

async function saveAndCheck(page, path, expected) {
  await page.keyboard.press('ControlOrMeta+s'); await waitForFile(page, path, expected);
}

async function waitForFile(page, path, expected) {
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    if (await readFile(path, 'utf8') === expected) return;
    await page.waitForTimeout(100);
  }
  assert.equal(await readFile(path, 'utf8'), expected);
}
