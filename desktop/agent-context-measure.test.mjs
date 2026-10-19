import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { analyzeRequest, summarizeWorkload, checkBudgets, requestIdentity, messagesContaining, fixtureUsage, usageComparison } from './agent-context-measure.mjs';

const file = 'export const alpha = 1;\n';
const request = (extra = []) => ({ model: 'm', stream: true, tools: [{ type: 'function', function: { name: 'Read', parameters: {} } }],
  messages: [{ role: 'system', content: 'sys' }, { role: 'user', content: 'first' },
    { role: 'assistant', content: null, reasoning_content: 'plan', tool_calls: [{ id: 'a', type: 'function', function: { name: 'Read', arguments: '{}' } }] },
    { role: 'tool', tool_call_id: 'a', content: file }, { role: 'assistant', content: 'done' },
    { role: 'user', content: 'second' }, ...extra] });

test('request accounting splits system, tools, history, current turn and file context exactly', () => {
  const body = request([{ role: 'tool', tool_call_id: 'b', content: file }]);
  const raw = JSON.stringify(body), analysis = analyzeRequest(raw, { 'alpha.js': file });
  assert.equal(analysis.bodyBytes, Buffer.byteLength(raw));
  assert.equal(analysis.systemBytes, Buffer.byteLength(JSON.stringify(body.messages[0])));
  assert.equal(analysis.toolSchemaBytes, Buffer.byteLength(JSON.stringify(body.tools)));
  assert.equal(analysis.historyBytes, body.messages.slice(1, 5).reduce((sum, message) => sum + Buffer.byteLength(JSON.stringify(message)), 0));
  assert.equal(analysis.currentTurnToolBytes, Buffer.byteLength(JSON.stringify(body.messages[6])));
  assert.equal(analysis.systemBytes + analysis.toolSchemaBytes + analysis.historyBytes + analysis.currentUserBytes +
    analysis.currentTurnToolBytes + analysis.otherBytes, analysis.bodyBytes);
  assert.deepEqual(analysis.fileOccurrences, { 'alpha.js': 2 });
  assert.equal(analysis.fileContextBytes, 2 * Buffer.byteLength(file));
  assert.equal(analysis.reasoningReplayed, 1); assert.equal(analysis.toolCallsReplayed, 1);
  assert.ok(analysis.estimatedTokens > 0); assert.equal(analysis.auxiliary, false);
});

test('duplicates ignore envelope fields; near duplicates repeat one scripted step', () => {
  const a = request(), b = { ...request(), stream_options: { include_usage: true } };
  assert.equal(requestIdentity(a), requestIdentity(b));
  const entries = [a, b, request([{ role: 'user', content: 'x' }])].map((body, index) =>
    ({ index, step: index < 2 ? 's/0' : 's/1', analysis: analyzeRequest(body, { 'alpha.js': file }) }));
  const summary = summarizeWorkload(entries);
  assert.equal(summary.requests, 3); assert.equal(summary.duplicateRequests, 1); assert.equal(summary.nearDuplicateRequests, 1);
  assert.equal(summary.repeatedFileOccurrences, 0);
});

test('budgets fail on excess, on missing measurements and on minimums', () => {
  const result = { passes: { cold: { single: { summary: { requests: 2, inputBytes: 10 } } } }, session: { stopMs: 900 } };
  const failures = checkBudgets(result, { workloads: { single: { requests: 1, inputBytes: 20, 'min:reasoningReplayed': 1 } },
    session: { stopMs: 500, missing: 1 } });
  assert.deepEqual(failures.map(failure => failure.path).sort(),
    ['cold.single.reasoningReplayed', 'cold.single.requests', 'session.missing', 'session.stopMs']);
  assert.deepEqual(checkBudgets(result, { workloads: { single: { requests: 2 } }, session: { stopMs: 900 } }), []);
});

test('committed budgets cover every fixed workload and the session clauses', async () => {
  const budgets = JSON.parse(await readFile(new URL('./agent-context-budgets.json', import.meta.url), 'utf8'));
  for (const name of ['single', 'reads', 'edit', 'long'])
    for (const key of ['requests', 'inputBytes', 'estimatedInputTokens', 'duplicateRequests', 'nearDuplicateRequests', 'auxiliaryRequests'])
      assert.equal(typeof budgets.workloads[name]?.[key], 'number', `${name}.${key}`);
  for (const key of ['maxStopToTransportCloseMs', 'stopExtraRequests', 'windowCloseToTransportCloseMs'])
    assert.equal(typeof budgets.session[key], 'number', key);
});

test('fork accounting counts source copies; dry-run usage and usage comparison stay labelled synthetic inputs', () => {
  const body = request();
  assert.equal(messagesContaining(body, 'first'), 1); assert.equal(messagesContaining(body, 'missing'), 0);
  assert.equal(messagesContaining(body, 'done', 'assistant'), 1);
  const first = JSON.stringify(request()), second = JSON.stringify(request([{ role: 'user', content: 'third' }]));
  const cold = fixtureUsage(first, undefined, 'reply'), warm = fixtureUsage(second, first, 'reply');
  assert.equal(cold.prompt_tokens_details.cached_tokens, 0);
  assert.ok(warm.prompt_tokens_details.cached_tokens > 0 && warm.prompt_tokens_details.cached_tokens <= warm.prompt_tokens);
  assert.equal(warm.total_tokens, warm.prompt_tokens + warm.completion_tokens);
  const entries = [first, second].map((raw, index) => ({ index, analysis: analyzeRequest(raw),
    usage: index ? { promptTokens: 10, completionTokens: 2, cachedTokens: 8 } : undefined }));
  const comparison = usageComparison(entries);
  assert.equal(comparison.requests, 2); assert.equal(comparison.requestsWithUsage, 1); assert.equal(comparison.requestsWithCachedTokens, 1);
  assert.equal(comparison.promptTokens, null, 'A total is reported only when every request has usage');
  assert.equal(usageComparison(entries.slice(1)).cachedTokens, 8);
});
