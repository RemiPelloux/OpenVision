import assert from 'node:assert/strict';
import { DatabaseSync } from 'node:sqlite';
import { join } from 'node:path';

function input(page) {
  return page.locator('.aislash-editor-input[contenteditable=true]').filter({ visible: true }).first();
}

async function composerId(page) {
  return input(page).evaluate(element => element.closest('[data-composer-id]')?.getAttribute('data-composer-id'));
}

export const forkRecallPrompt = 'Without using tools, reply with BRANCHED: followed immediately by the exact single line you read earlier from probe.txt. Do not read the file again.';

async function retryForkFailure({ page, relay, before, retry }) {
  await Promise.race([
    page.getByText('Try again', { exact: true }).filter({ visible: true }).last().waitFor({ timeout: 90000 }),
    relay.failure.then(message => { throw Error(message); }),
  ]);
  await page.locator('.stop-button').filter({ visible: true }).waitFor({ state: 'hidden' });
  await page.waitForTimeout(2500);
  assert.equal(relay.requests.length, before + 1, 'Fork failure must not cause an automatic retry');
  assert.equal(relay.requests[before].httpStatus, 401);
  assert.equal(relay.requests[before].expectedAuthenticationFailure, true);
  assert.match(await page.locator('body').innerText(), /401|unauthorized|invalid.*key|authentication/i);
  retry.restore();
  await page.getByText('Try again', { exact: true }).filter({ visible: true }).last().click();
}

function verifyRecallRequests(requests, retry) {
  assert.equal(requests.length, retry ? 2 : 1, 'History recall must have only the expected requests without new tools or titles');
  assert.ok(requests.every(request => request.assistantHistoryContainsMarker), 'Earlier assistant answer must be present in the actual outgoing history');
  assert.equal(requests.at(-1).httpStatus, 200);
  assert.equal(requests.at(-1).streamCompleted, true);
  assert.equal(requests.at(-1).assistantReturnedMarker, true, 'The live provider must recall the original file marker');
  assert.equal(requests.at(-1).responseToolCalls?.length ?? 0, 0, 'Recall must not reread the file');
  if (retry) assert.deepEqual(requests[1].roles, requests[0].roles, 'Failed fork must retain valid history without duplicate messages');
}

async function recall({ page, relay, marker, prefix, retry }) {
  const before = relay.requests.length;
  retry?.prepare();
  await input(page).fill(`Without using tools, reply with ${prefix} followed immediately by the exact single line you read earlier from probe.txt. Do not read the file again.`);
  await input(page).press('Enter');
  if (retry) await retryForkFailure({ page, relay, before, retry });
  await Promise.race([
    page.getByText(new RegExp(`^${prefix}\\s*${marker}$`)).filter({ visible: true }).first().waitFor({ timeout: 90000 }),
    relay.failure.then(message => { throw new Error(message); }),
  ]);
  await page.locator('.stop-button').filter({ visible: true }).waitFor({ state: 'hidden', timeout: 30000 });
  verifyRecallRequests(relay.requests.slice(before), retry);
  return { requestIndex: before + (retry ? 1 : 0), composerId: await composerId(page), replyPrefix: prefix };
}

export async function verifyLiveHistory({ page, relay, marker, restart, result, retryFork }) {
  const sourceId = await composerId(page);
  assert.ok(sourceId, 'Visible chat must have an identity');
  page = await restart();
  await page.getByText(marker, { exact: true }).filter({ visible: true }).first().waitFor();
  assert.equal(await composerId(page), sourceId, 'Restart must restore the same chat');
  result.history = { sourceId, restored: await recall({ page, relay, marker, prefix: 'RESTORED:' }) };
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
  result.history.fork = await recall({ page, relay, marker, prefix: 'BRANCHED:', retry: retryFork });
  assert.equal(result.history.fork.composerId, forkId);
  result.history.restartAndForkRecallVerified = true;
  if (retryFork) {
    assert.deepEqual(result.forkFailure.promptOccurrences.filter(count => count > 0), [1, 1]);
    result.forkFailure.nativeRetryVerified = true;
  }
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
