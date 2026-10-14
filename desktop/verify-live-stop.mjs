import assert from 'node:assert/strict';

async function until(probe) {
  const end = Date.now() + 60000;
  while (Date.now() < end) {
    if (await probe()) return;
    await new Promise(resolve => setTimeout(resolve, 50));
  }
  throw Error('Timed out waiting for live Stop evidence');
}

export async function verifyLiveStop({ page, relay, marker, result }) {
  const input = page.locator('.aislash-editor-input[contenteditable=true]').filter({ visible: true }).first();
  const before = relay.requests.length;
  await input.fill('Do not use any tools or change files. Write 80 numbered short software testing tips. Start immediately with number 1, give each tip its own line, and continue through number 80.');
  await input.press('Enter');
  await Promise.race([
    until(() => relay.requests[before]?.assistantContentObserved),
    relay.failure.then(message => { throw Error(message); }),
  ]);
  const streaming = relay.requests[before];
  assert.equal(streaming.streamCompleted, undefined, 'Stop must interrupt a live stream');
  const started = performance.now();
  await page.locator('.stop-button').filter({ visible: true }).first().click();
  await until(() => streaming.cancelled);
  const stopMs = Math.round(performance.now() - started);
  await page.locator('.stop-button').filter({ visible: true }).waitFor({ state: 'hidden' });
  assert.equal(streaming.httpStatus, 200);
  assert.ok(streaming.bytes > 0);
  assert.equal(streaming.streamCompleted, undefined);
  assert.ok(stopMs < 5000, 'Native Stop must promptly close the live transport');
  await page.waitForTimeout(1000);
  assert.equal(relay.requests.length, before + 1, 'Stop must not trigger a hidden retry');
  result.liveStop = { requestIndex: before, stopMs, abortSettledMs: streaming.abortSettledMs };
  await input.fill('Without tools, reply with RESUMED: followed by the exact single line you read earlier from probe.txt.');
  await input.press('Enter');
  await Promise.race([
    page.getByText(new RegExp(`^RESUMED:\\s*${marker}$`)).filter({ visible: true }).first().waitFor({ timeout: 90000 }),
    relay.failure.then(message => { throw Error(message); }),
  ]);
  await page.locator('.stop-button').filter({ visible: true }).waitFor({ state: 'hidden', timeout: 30000 });
  assert.equal(relay.requests.length, before + 2, 'Resubmission must make exactly one request');
  const resumed = relay.requests.at(-1);
  assert.equal(resumed.httpStatus, 200);
  assert.equal(resumed.streamCompleted, true);
  assert.equal(resumed.assistantHistoryContainsMarker, true);
  assert.equal(resumed.assistantReturnedMarker, true);
  assert.equal(resumed.responseToolCalls?.length ?? 0, 0);
  result.liveStop.resubmissionPreservesHistory = true;
}
