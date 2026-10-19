// OV-1003 numeric budgets for verify:idle-memory (desktop/idle-memory-budgets.json).
// A measure that a budget names but the run did not produce fails as
// "unmeasured"; nothing is skipped. Values are per variant (full, quick).
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export async function loadBudgets(directory, variant) {
  const all = JSON.parse(await readFile(join(directory, 'idle-memory-budgets.json'), 'utf8'));
  if (!all.variants?.[variant]) throw new Error(`No idle-memory budget variant: ${variant}`);
  return all.variants[variant];
}

const round = value => Math.round(value * 100) / 100;
const privateMiB = role => role ? round((role.ussMiB ?? 0) + (role.swapMiB ?? 0)) : undefined;

// Idle CPU seconds per role between the first and last idle marks, scaled to 10 minutes.
// Only processes present at both marks count (a process that started in between
// has no baseline), so an exited or replaced process cannot hide CPU as negative.
export function idleCpuPer10Minutes(first, last) {
  if (!first || !last || last.minutes <= first.minutes) return undefined;
  const before = new Map(first.processes.map(item => [item.pid, item.cpuSeconds]));
  const roles = {};
  for (const item of last.processes) if (before.has(item.pid))
    roles[item.role] = (roles[item.role] ?? 0) + item.cpuSeconds - before.get(item.pid);
  const scale = 10 / (last.minutes - first.minutes);
  return Object.fromEntries(Object.entries(roles).map(([role, seconds]) => [role, round(seconds * scale)]));
}

export function measure(result) {
  const launch = kind => result.launches?.find(item => item.kind === kind);
  const [first, last] = [result.idle?.[0], result.idle?.at(-1)];
  const idleGrowthMiB = first && last && last !== first ? Object.fromEntries([...new Set([
    ...Object.keys(first.roles ?? {}), ...Object.keys(last.roles ?? {})])].map(role =>
    [role, round((privateMiB(last.roles[role]) ?? 0) - (privateMiB(first.roles[role]) ?? 0))])) : undefined;
  const counts = result.iterations?.map(item => item.settled.count) ?? [];
  return {
    workspaceMs: { cold: launch('cold')?.workspaceMs, warm: launch('warm')?.workspaceMs },
    startupPeakPssMiB: { cold: launch('cold')?.startup?.peakPssMiB, warm: launch('warm')?.startup?.peakPssMiB },
    idleWindowMinutes: first && last ? last.minutes - first.minutes : undefined,
    idleGrowthMiB,
    idleCpuSecondsPer10Min: idleCpuPer10Minutes(first, last),
    processCountGrowth: counts.length > 1 ? Math.max(...counts) - counts[0] : undefined,
    iterationPrivateSlopeMiB: counts.length > 1 ? result.growth?.privateWithSwapMiB?.slopeMiBPerIteration : undefined,
    killedTerminalShells: result.terminalRelease?.remainingShells,
    ptyHostMasters: result.terminalRelease?.ptyHostMasters,
  };
}

// Budgets: scalar limits, or { key: limit } maps where `default` covers every
// measured key not named and `required` lists keys that must be measured.
export function evaluate(budgets, measured) {
  const checks = [];
  const check = (name, value, limit) => checks.push({ name, value, limit,
    pass: typeof value === 'number' && Number.isFinite(value) && value <= limit,
    reason: typeof value === 'number' && Number.isFinite(value) ? (value <= limit ? 'within' : 'exceeded') : 'unmeasured' });
  for (const [name, budget] of Object.entries(budgets)) {
    if (name.startsWith('_')) continue;
    const value = measured[name];
    if (typeof budget === 'number') { check(name, value, budget); continue; }
    const { default: fallback, required = [], ...named } = budget;
    for (const key of new Set([...required, ...Object.keys(named)])) check(`${name}.${key}`, value?.[key], named[key] ?? fallback);
    if (fallback !== undefined) {
      if (!value) check(`${name}.*`, undefined, fallback);
      else for (const key of Object.keys(value)) if (!(key in named) && !required.includes(key)) check(`${name}.${key}`, value[key], fallback);
    }
  }
  return { pass: checks.every(item => item.pass), checks, failures: checks.filter(item => !item.pass) };
}
