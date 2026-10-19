import test from 'node:test';
import assert from 'node:assert/strict';
import { checkCompletionBudgets, completionMeasurements, loadCompletionBudgets } from './completion-budgets.mjs';

const budgets = { budgets: { 'burst30.lastKeyToRequestMs': 700, 'burst30.requests': 1, 'burst30.staleVisible': 0,
  'longLine.triggerToRequestMs': 2000 } };
const acceptance = { bursts: [{ intervalMs: 30, lastKeyToFinalRequestMs: 450, finalRequestToVisibleMs: 300, requests: 1, staleVisible: 0 }],
  longLine: { typedToRequestMs: 900 } };

test('measurements map bursts and the long line to budget metrics', () => {
  assert.deepEqual(completionMeasurements(acceptance), { 'burst30.lastKeyToRequestMs': 450, 'burst30.requestToVisibleMs': 300,
    'burst30.requests': 1, 'burst30.staleVisible': 0, 'longLine.triggerToRequestMs': 900 });
});

test('a workload within budget passes', () => {
  const result = checkCompletionBudgets(acceptance, budgets);
  assert.equal(result.pass, true);
  assert.ok(result.checks.every(check => check.status === 'pass'));
});

test('an exceeded budget fails', () => {
  const slow = structuredClone(acceptance); slow.bursts[0].requests = 2;
  const result = checkCompletionBudgets(slow, budgets);
  assert.equal(result.pass, false);
  assert.deepEqual(result.checks.find(check => check.metric === 'burst30.requests'), { metric: 'burst30.requests', value: 2, budget: 1, status: 'exceeded' });
});

test('an unmeasured budget fails', () => {
  const missing = structuredClone(acceptance); missing.longLine.typedToRequestMs = undefined;
  const result = checkCompletionBudgets(missing, budgets);
  assert.equal(result.pass, false);
  assert.equal(result.checks.find(check => check.metric === 'longLine.triggerToRequestMs').status, 'unmeasured');
  assert.equal(checkCompletionBudgets({}, budgets).checks.every(check => check.status === 'unmeasured'), true);
});

test('a diagnostic selection checks only the cases that ran', () => {
  const result = checkCompletionBudgets({ longLine: { typedToRequestMs: 900 } }, budgets, metric => metric.startsWith('longLine.'));
  assert.deepEqual(result.checks.map(check => check.metric), ['longLine.triggerToRequestMs']);
  assert.equal(result.pass, true);
});

test('the declared budgets cover every workload metric', async () => {
  const declared = await loadCompletionBudgets();
  const metrics = Object.keys(declared.budgets);
  for (const interval of declared.workload.burstIntervalsMs)
    for (const name of ['lastKeyToRequestMs', 'requestToVisibleMs', 'requests', 'staleVisible'])
      assert.ok(metrics.includes(`burst${interval}.${name}`), `missing burst${interval}.${name}`);
  assert.ok(metrics.includes('longLine.triggerToRequestMs'));
  assert.ok(Object.values(declared.budgets).every(value => Number.isInteger(value) && value >= 0));
});
