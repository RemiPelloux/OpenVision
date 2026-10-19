import { readFile } from 'node:fs/promises';

export async function loadCompletionBudgets(path = new URL('./completion-budgets.json', import.meta.url)) {
  return JSON.parse(await readFile(path, 'utf8'));
}

// Latency and request-count measurements of the declared acceptance workload.
// Every budgeted metric must be measured: a missing value fails like an exceeded one.
export function completionMeasurements(acceptance) {
  const measurements = {};
  for (const burst of acceptance.bursts ?? []) {
    const key = String(burst.intervalMs);
    measurements[`burst${key}.lastKeyToRequestMs`] = burst.lastKeyToFinalRequestMs;
    measurements[`burst${key}.requestToVisibleMs`] = burst.finalRequestToVisibleMs;
    measurements[`burst${key}.requests`] = burst.requests;
    measurements[`burst${key}.staleVisible`] = burst.staleVisible;
  }
  if (acceptance.longLine) measurements['longLine.triggerToRequestMs'] = acceptance.longLine.typedToRequestMs;
  return measurements;
}

// `selected` limits the check to metrics of cases that ran (diagnostic `--cases`).
export function checkCompletionBudgets(acceptance, budgets, selected = () => true) {
  const measured = completionMeasurements(acceptance);
  const checks = Object.entries(budgets.budgets).filter(([metric]) => selected(metric)).map(([metric, budget]) => {
    const value = measured[metric];
    const status = typeof value !== 'number' || !Number.isFinite(value) ? 'unmeasured' : value > budget ? 'exceeded' : 'pass';
    return { metric, value: value ?? null, budget, status };
  });
  return { checks, pass: checks.every(check => check.status === 'pass') };
}
