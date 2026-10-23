import assert from 'node:assert/strict';
import { toolCallErrorPrompts, toolResultPrefix, unavailableToolName } from './agent-fixture-provider.mjs';

// Native check: a tool call the Agent cannot run fails that call, not the turn.
// The fixture emits the call; the Agent must answer it with a tool error, without
// retrying the stream, and the fixture then quotes that error as its final reply.
const cases = {
  // An invented tool has no tool type, so no tool row exists for it (recorded, not asserted).
  unavailable: { tool: unavailableToolName, expected: new RegExp(`Tool ${unavailableToolName} is not available\\.`), failedRow: undefined },
  // Read starts from its streamed arguments, so the runtime's own parser answers.
  invalid: { tool: 'Read', expected: /Tool call arguments were not valid JSON \(.*\)\. Re-issue the call/, failedRow: true },
};

export async function verifyToolCallErrors({ page, relay, input, result, directory }) {
  result.toolCallErrors = {};
  for (const [name, { tool, expected, failedRow }] of Object.entries(cases)) {
    const record = result.toolCallErrors[name] = {}, before = relay.requests.length;
    const replies = page.getByText(toolResultPrefix, { exact: false }).filter({ visible: true });
    const seen = await replies.count();
    const started = performance.now();
    await input.fill(toolCallErrorPrompts[name]); await input.press('Enter');
    await Promise.race([
      page.waitForFunction(([prefix, count]) => [...document.querySelectorAll('*')]
        .filter(element => element.childElementCount === 0 && element.textContent.includes(prefix)).length > count,
      [toolResultPrefix, seen], { timeout: 60000 }),
      relay.failure.then(message => { throw new Error(message); }),
    ]).catch(error => { throw new Error(`${name}: the turn did not finish with the quoted tool error (${error.message.split('\n')[0]})`); });
    await page.locator('.stop-button').filter({ visible: true }).waitFor({ state: 'hidden', timeout: 30000 });
    record.finishedMs = Math.round(performance.now() - started);
    await page.waitForTimeout(2500); // no automatic retry after the turn ends
    const requests = relay.requests.slice(before);
    const call = requests[0]?.responseToolCalls?.[0];
    const body = await page.locator('body').innerText();
    const quoted = body.split('\n').filter(line => line.includes(toolResultPrefix)).at(-1) ?? '';
    Object.assign(record, { requests: requests.length, calledTool: call?.name, quoted: quoted.slice(0, 600),
      continuationRoles: requests[1]?.roles?.slice(-2), toolResultForCall: requests[1]?.toolResults?.some(entry => entry.callId === call?.id) ?? false,
      statuses: requests.map(request => request.httpStatus), failedRowVisible: new RegExp(`${tool}\\s*attempted`).test(body) });
    await page.screenshot({ path: `${directory}/tool-call-${name}.png` });
    assert.equal(record.calledTool, tool, `${name}: the fixture called ${tool}`);
    assert.equal(record.requests, 2, `${name}: one call and one continuation; no stream retry`);
    assert.deepEqual(record.continuationRoles, ['assistant', 'tool'], `${name}: the continuation carries the tool error`);
    assert.equal(record.toolResultForCall, true, `${name}: the tool error answers the actual call`);
    assert.match(record.quoted, expected, `${name}: the model was told why the call failed`);
    assert.deepEqual(record.statuses, [200, 200]);
    if (failedRow !== undefined) assert.equal(record.failedRowVisible, failedRow, `${name}: the failed tool row is shown`);
  }
}
