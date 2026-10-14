import assert from 'node:assert/strict';
import { DatabaseSync } from 'node:sqlite';
import { join } from 'node:path';

function input(page) {
  return page.locator('.aislash-editor-input[contenteditable=true]').filter({ visible: true }).first();
}

async function composerId(page) {
  return input(page).evaluate(element => element.closest('[data-composer-id]')?.getAttribute('data-composer-id'));
}

async function recall(page, relay, marker, prefix) {
  const before = relay.requests.length;
  await input(page).fill(`Without using tools, reply with ${prefix} followed immediately by the exact single line you read earlier from probe.txt. Do not read the file again.`);
  await input(page).press('Enter');
  await Promise.race([
    page.getByText(new RegExp(`^${prefix}\\s*${marker}$`)).filter({ visible: true }).first().waitFor({ timeout: 90000 }),
    relay.failure.then(message => { throw new Error(message); }),
  ]);
  await page.locator('.stop-button').filter({ visible: true }).waitFor({ state: 'hidden', timeout: 30000 });
  const requests = relay.requests.slice(before);
  assert.equal(requests.length, 1, 'History recall must make one request without new tools or titles');
  assert.equal(requests[0].assistantHistoryContainsMarker, true, 'Earlier assistant answer must be present in the actual outgoing history');
  assert.equal(requests[0].assistantReturnedMarker, true, 'The live provider must recall the original file marker');
  assert.equal(requests[0].responseToolCalls?.length ?? 0, 0, 'Recall must not reread the file');
  return { requestIndex: before, composerId: await composerId(page), replyPrefix: prefix };
}

export async function verifyLiveHistory({ page, relay, marker, restart, result }) {
  const sourceId = await composerId(page);
  assert.ok(sourceId, 'Visible chat must have an identity');
  page = await restart();
  await page.getByText(marker, { exact: true }).filter({ visible: true }).first().waitFor();
  assert.equal(await composerId(page), sourceId, 'Restart must restore the same chat');
  result.history = { sourceId, restored: await recall(page, relay, marker, 'RESTORED:') };
  console.log('Live history: restart recall passed; checking Fork Chat.');
  await page.keyboard.press('ControlOrMeta+Shift+p');
  const command = page.locator('.quick-input-widget').getByRole('textbox', { name: 'input', exact: true });
  await command.fill('>Fork Chat');
  await page.locator('.quick-input-list .monaco-list-row').filter({ hasText: 'Fork Chat' }).first().click();
  await page.locator('.quick-input-widget').waitFor({ state: 'hidden' });
  await page.waitForFunction(sourceId => [...document.querySelectorAll('.aislash-editor-input[contenteditable=true]')]
    .filter(element => element.getClientRects().length)
    .some(element => {
      const id = element.closest('[data-composer-id]')?.getAttribute('data-composer-id');
      return id && id !== sourceId;
    }), sourceId, { timeout: 15000 });
  const forkId = await composerId(page);
  assert.ok(forkId && forkId !== sourceId, 'Fork must create a separate chat identity');
  result.history.fork = await recall(page, relay, marker, 'BRANCHED:');
  assert.equal(result.history.fork.composerId, forkId);
  result.history.restartAndForkRecallVerified = true;
  return page;
}

export function verifyPersistedLiveHistory(profile, result) {
  const db = new DatabaseSync(join(profile, 'User/globalStorage/state.vscdb'), { readOnly: true });
  try {
    const read = key => {
      const row = db.prepare('SELECT value FROM cursorDiskKV WHERE key = ?').get(key);
      assert.ok(row, 'Expected persisted chat record'); return JSON.parse(String(row.value));
    };
    const texts = id => read(`composerData:${id}`).fullConversationHeadersOnly.map(header =>
      read(`bubbleId:${id}:${header.bubbleId}`).text ?? '');
    const source = texts(result.history.sourceId), fork = texts(result.history.fork.composerId);
    assert.ok(source.some(text => text.startsWith('RESTORED:')), 'Source recall must persist');
    assert.ok(!source.some(text => text.includes('BRANCHED:')), 'Fork must not modify source transcript');
    assert.equal(fork.length, source.length + 2, 'Fork adds precisely one user/assistant exchange');
    assert.deepEqual(fork.slice(0, source.length), source, 'Fork preserves the original transcript');
    assert.ok(fork.at(-1).startsWith('BRANCHED:'), 'Fork answer must persist');
    result.history.persistedForkIsolationVerified = true;
    result.history.persistedMessageCounts = { source: source.length, fork: fork.length };
  } finally { db.close(); }
}
