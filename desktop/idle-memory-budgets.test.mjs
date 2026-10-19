import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { evaluate, idleCpuPer10Minutes, loadBudgets, measure } from './idle-memory-budgets.mjs';

const desktop = dirname(fileURLToPath(import.meta.url));

const role = (ussMiB, swapMiB = 0) => ({ count: 1, ussMiB, pssMiB: ussMiB, swapMiB });
const processes = (cpu) => Object.entries(cpu).map(([name, cpuSeconds], index) => ({ pid: index + 10, role: name, cpuSeconds }));
const run = {
  launches: [{ kind: 'cold', workspaceMs: 9000, startup: { peakPssMiB: 1900 } }, { kind: 'warm', workspaceMs: 7000, startup: { peakPssMiB: 1800 } }],
  idle: [{ minutes: 5, roles: { main: role(150), renderer: role(380, 5) }, processes: processes({ main: 10, renderer: 20 }) },
    { minutes: 15, roles: { main: role(152), renderer: role(390, 5) }, processes: processes({ main: 11.5, renderer: 27 }) }],
  iterations: [16, 16, 16].map(count => ({ settled: { count } })),
  growth: { privateWithSwapMiB: { slopeMiBPerIteration: 6.7 } },
  terminalRelease: { remainingShells: 0, ptyHostMasters: 0 },
};

test('measures every budgeted quantity from a verifier result', () => {
  assert.deepEqual(measure(run), {
    workspaceMs: { cold: 9000, warm: 7000 }, startupPeakPssMiB: { cold: 1900, warm: 1800 }, idleWindowMinutes: 10,
    idleGrowthMiB: { main: 2, renderer: 10 }, idleCpuSecondsPer10Min: { main: 1.5, renderer: 7 },
    processCountGrowth: 0, iterationPrivateSlopeMiB: 6.7, killedTerminalShells: 0, ptyHostMasters: 0 });
});

test('idle CPU is scaled to 10 minutes and ignores processes absent at the first mark', () => {
  const first = { minutes: 1, processes: [{ pid: 1, role: 'main', cpuSeconds: 1 }] };
  const last = { minutes: 2, processes: [{ pid: 1, role: 'main', cpuSeconds: 1.2 }, { pid: 2, role: 'main', cpuSeconds: 50 }] };
  assert.deepEqual(idleCpuPer10Minutes(first, last), { main: 2 });
  assert.equal(idleCpuPer10Minutes(first, first), undefined);
});

test('a budget fails when exceeded and when its measure is missing', () => {
  const budgets = { workspaceMs: { cold: 10000, warm: 6000 }, idleCpuSecondsPer10Min: { required: ['main', 'gpu'], default: 5, main: 2 },
    processCountGrowth: 0, killedTerminalShells: 0, _derivation: 'ignored' };
  const outcome = evaluate(budgets, measure(run));
  assert.equal(outcome.pass, false);
  assert.deepEqual(outcome.failures.map(item => [item.name, item.reason]), [
    ['workspaceMs.warm', 'exceeded'], ['idleCpuSecondsPer10Min.gpu', 'unmeasured'], ['idleCpuSecondsPer10Min.renderer', 'exceeded']]);
  assert.equal(evaluate({ processCountGrowth: 0 }, measure({ ...run, iterations: [] })).failures[0].reason, 'unmeasured');
  assert.equal(evaluate({ idleGrowthMiB: { default: 50 } }, measure({ ...run, idle: run.idle.slice(0, 1) })).failures[0].reason, 'unmeasured');
  assert.equal(evaluate({ workspaceMs: { cold: 10000, warm: 8000 } }, measure(run)).pass, true);
});

test('the committed budgets have both variants and name every measure', async () => {
  const all = JSON.parse(await readFile(join(desktop, 'idle-memory-budgets.json'), 'utf8'));
  for (const variant of ['full', 'quick']) {
    const budgets = await loadBudgets(desktop, variant);
    for (const key of ['workspaceMs', 'startupPeakPssMiB', 'idleGrowthMiB', 'idleCpuSecondsPer10Min', 'processCountGrowth',
      'iterationPrivateSlopeMiB', 'killedTerminalShells', 'ptyHostMasters']) assert.ok(key in budgets, `${variant}.${key}`);
    assert.equal(budgets.killedTerminalShells, 0);
    assert.equal(budgets.processCountGrowth, 0);
  }
  assert.ok(all.derivation?.length > 0);
  await assert.rejects(loadBudgets(desktop, 'missing'), /No idle-memory budget variant/);
});
