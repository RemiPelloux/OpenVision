import assert from 'node:assert/strict';

export const liveReadPrompt = 'Use the Read tool to read probe.txt. Reply with exactly its single line. Do not edit files, run commands or use any other tools.';
// Deliberately invalid; this is never a saved account credential.
export const invalidProbeKey = 'openvision-invalid-verification-key';

export function inspectRetryPrompt(body, result) {
  const payload = JSON.parse(body);
  assert.ok(Array.isArray(payload.messages), 'Live retry currently verifies the native chat-completions contract');
  const occurrences = payload.messages.filter(message => message.role === 'user')
    .reduce((count, message) => count + JSON.stringify(message.content).split(liveReadPrompt).length - 1, 0);
  result.promptOccurrences.push(occurrences);
}

const unauthorizedText = /401|unauthorized|invalid.*key|authentication/i;

function composerId(page) {
  return page.locator('.aislash-editor-input[contenteditable=true]').filter({ visible: true }).first()
    .evaluate(element => element.closest('[data-composer-id]')?.getAttribute('data-composer-id'));
}

// Restart between the real failure and the retry: the unresolved error and Try again
// must be restored from the saved chat without sending any request.
export async function restoreFailureAfterRestart({ page, relay, restart, result, failureText = unauthorizedText }) {
  const source = await composerId(page), before = relay.requests.length;
  page = await restart();
  await page.getByText(liveReadPrompt, { exact: true }).filter({ visible: true }).first().waitFor({ timeout: 30000 });
  const retry = page.getByText('Try again', { exact: true }).filter({ visible: true });
  await retry.last().waitFor({ timeout: 15000 }).catch(() => {});
  await page.waitForTimeout(2500);
  const body = await page.locator('body').innerText();
  result.afterRestart = { sameChat: await composerId(page) === source, failureVisible: failureText.test(body),
    tryAgainVisible: await retry.count() > 0, requestsOnRestore: relay.requests.length - before };
  assert.deepEqual(result.afterRestart, { sameChat: true, failureVisible: true, tryAgainVisible: true, requestsOnRestore: 0 },
    'Restart must restore the same chat, the real provider failure and Try again without sending a request');
  return page;
}

export async function retryAuthenticationFailure({ page, relay, restoreCredential, result, restart }) {
  await Promise.race([
    page.getByText('Try again', { exact: true }).filter({ visible: true }).last().waitFor({ timeout: 90000 }),
    relay.failure.then(message => { throw Error(message); }),
  ]);
  await page.locator('.stop-button').filter({ visible: true }).waitFor({ state: 'hidden' });
  await page.waitForTimeout(2500);
  assert.equal(relay.requests.length, 1, 'Authentication failure must not trigger automatic retries');
  assert.equal(relay.requests[0].httpStatus, 401);
  assert.equal(relay.requests[0].expectedAuthenticationFailure, true);
  assert.match(await page.locator('body').innerText(), unauthorizedText);
  assert.deepEqual(result.promptOccurrences, [1]);
  result.upstreamUnauthorizedShown = true;
  if (restart) page = await restoreFailureAfterRestart({ page, relay, restart, result });
  restoreCredential();
  result.retryClickedAtRequest = relay.requests.length;
  await page.getByText('Try again', { exact: true }).filter({ visible: true }).last().click();
}

export async function verifyRetryContinuation({ page, relay, result }) {
  await page.waitForTimeout(2500);
  const resumed = relay.requests.slice(1);
  assert.ok(resumed.length >= 2, 'Retry must perform a real tool roundtrip');
  assert.ok(resumed.every(request => request.httpStatus === 200 && request.streamCompleted));
  assert.deepEqual(resumed[0].roles, relay.requests[0].roles, 'A pre-content failure must not add an assistant to retry history');
  assert.ok(result.promptOccurrences.every(count => count === 1), 'Retry must retain one original user prompt');
  assert.equal(resumed[0].toolResults.length, 0, 'Retry must start from the failed request, not fabricated tool output');
  const callIds = new Set();
  for (let index = 0; index < resumed.length - 1; index++) {
    const calls = resumed[index].responseToolCalls;
    assert.ok(calls?.length, 'Every additional inference must be explained by tool continuation');
    for (const call of calls) {
      assert.ok(call.id && !callIds.has(call.id), 'Tool calls must not be replayed');
      callIds.add(call.id);
      assert.ok(resumed[index + 1].toolResults.some(output => output.callId === call.id), 'Continuation must match the actual tool call');
    }
  }
  assert.equal(resumed.at(-1).responseToolCalls?.length ?? 0, 0);
  assert.equal(resumed.at(-1).assistantReturnedMarker, true);
  result.manualRetryVerified = true;
  result.noUnexplainedInference = true;
  result.successfulInferenceRequests = resumed.length;
}
