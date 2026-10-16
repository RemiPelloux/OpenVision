import assert from 'node:assert/strict';
import { inferenceLimits } from './provider-request-deadlines.cjs';

export function timeoutLimit(phase) {
  assert.ok(['headers', 'body'].includes(phase), 'Timeout phase must be headers or body');
  return phase === 'headers' ? inferenceLimits.headersMs : inferenceLimits.inactivityMs;
}

// Deliberately local: no provider traffic or invented upstream error is involved.
export async function stallInitialResponse(response, phase, record) {
  const limit = timeoutLimit(phase), started = performance.now();
  record.controlledStall = phase;
  record.upstreamContacted = false;
  record.productionDeadlineMs = limit;
  await new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      response.off('close', closed);
      response.destroy();
      reject(new Error('Native request did not close before the verification guard expired'));
    }, limit + 60000);
    function closed() {
      clearTimeout(timer);
      record.downstreamClosedAt = performance.now();
      record.elapsedMs = Math.round(performance.now() - started);
      resolve();
    }
    response.once('close', closed);
    if (phase === 'body') {
      response.writeHead(200, { 'content-type': 'text/event-stream' });
      // Establish a successful SSE response without inventing assistant content.
      response.write(': OpenVision controlled inactivity fixture\n\n');
      record.fixtureHttpStatus = 200;
    }
  });
}

export async function retryNativeTimeout({ page, relay, phase, result }) {
  const limit = timeoutLimit(phase);
  await Promise.race([
    page.getByText('Try again', { exact: true }).filter({ visible: true }).last().waitFor({ timeout: limit + 90000 }),
    relay.failure.then(message => { throw Error(message); }),
  ]);
  await page.locator('.stop-button').filter({ visible: true }).waitFor({ state: 'hidden' });
  await page.waitForTimeout(2500);
  assert.equal(relay.requests.length, 1, 'Timeout must not trigger automatic inference retries');
  const request = relay.requests[0];
  assert.equal(request.controlledStall, phase);
  assert.equal(request.upstreamContacted, false);
  assert.ok(request.downstreamClosedAt, 'Native deadline must close the stalled transport');
  assert.ok(request.elapsedMs >= limit - 1000, 'An earlier timeout must not be mistaken for the production deadline');
  assert.ok(request.elapsedMs < limit + 30000, 'Native deadline must release transport promptly');
  const visible = await page.locator('body').innerText();
  assert.match(visible, /timed out/i);
  result.nativeDeadlineDetailShown = visible.includes(phase === 'headers'
    ? 'The provider did not send response headers before the request deadline.'
    : 'The provider stopped sending response data before the inactivity deadline.');
  assert.equal(result.nativeDeadlineDetailShown, true, 'The production timeout reason must reach the native error UI');
  assert.deepEqual(result.promptOccurrences, [1]);
  result.nativeTimeoutShown = true;
  result.stallElapsedMs = request.elapsedMs;
  await page.getByText('Try again', { exact: true }).filter({ visible: true }).last().click();
}
