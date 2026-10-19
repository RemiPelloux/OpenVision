import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, mkdtemp, mkdir, writeFile, rm } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { tmpdir } from 'node:os';
import { runInNewContext } from 'node:vm';
import { parseExpressionAt } from '../tooling/dependencies.mjs';
import { readableApp } from './recovered-source.mjs';
import { agentEditInterruptionEntry, installInterruptedAgentEdits, interruptedEditMessage,
  markInterruptedAgentEdits } from './agent-edit-interruption-customization.mjs';

const original = await readFile(new URL(agentEditInterruptionEntry, readableApp), 'utf8');
const patched = markInterruptedAgentEdits(original);

// Executes the recovered (or patched) load owner and live cancel owner with
// controlled storage revival, error class and bubble store.
class Pce { constructor(value) { Object.assign(this, value); } }
function loadOwner(source) {
  const start = source.indexOf('function I0u(e) {');
  const node = parseExpressionAt(source, start, { ecmaVersion: 'latest' });
  return runInNewContext(`(${source.slice(node.start, node.end)})`, {
    pce: Pce, D0u: bubble => ({ params: bubble.params, result: bubble.result, additionalData: bubble.additionalData, toolCall: bubble.toolCall }) });
}
function cancelOwner(source) {
  const index = source.indexOf('cancelUnfinishedToolCalls() {');
  const owner = parseExpressionAt(source, source.lastIndexOf('class ', index), { ecmaVersion: 'latest' });
  const method = owner.body.body.find(node => node.key?.name === 'cancelUnfinishedToolCalls');
  return runInNewContext(`(class { ${source.slice(method.start, method.end)} })`, { pce: Pce, Je: { TASK_V2: 'task', RUN_TERMINAL_COMMAND_V2: 'terminal' } });
}
const edit = (status, result, extra = {}) => ({ tool: 'edit', status, ...extra,
  toolCall: { tool: { case: 'editToolCall', value: { args: { path: '/p/a.js' }, ...(result ? { result } : {}) } } } });

test('recovered load shows an edit restored without a result as completed; patched load marks it interrupted', () => {
  const recovered = loadOwner(original)(edit('loading'));
  assert.equal(recovered.status, 'cancelled');
  assert.equal(recovered.error, undefined, 'Recovered owner: no failure, so the transcript says "Edited"');
  for (const status of ['loading', 'cancelled']) {
    const bubble = loadOwner(patched)(edit(status));
    assert.equal(bubble.status, 'error');
    assert.equal(bubble.error.clientVisibleErrorMessage, interruptedEditMessage);
    assert.equal(bubble.error.modelVisibleErrorMessage, interruptedEditMessage);
  }
});

test('patched load leaves edits with results, explicit errors, completed bubbles and other tools unchanged', () => {
  const load = loadOwner(patched);
  const success = load(edit('completed', { result: { case: 'success' } }));
  assert.equal(success.status, 'completed'); assert.equal(success.error, undefined);
  const rejected = load(edit('cancelled', { result: { case: 'rejected' } }));
  assert.equal(rejected.status, 'cancelled'); assert.equal(rejected.error, undefined);
  const existing = new Pce({ clientVisibleErrorMessage: 'Edit rejected: no' });
  assert.equal(load(edit('cancelled', undefined, { error: existing })).error, existing);
  assert.equal(load(edit('completed')).status, 'completed');
  const terminal = load({ tool: 'terminal', status: 'loading', toolCall: { tool: { case: 'shellToolCall', value: {} } } });
  assert.equal(terminal.status, 'cancelled'); assert.equal(terminal.error, undefined);
});

test('live cancellation marks an unfinished edit failed and keeps other tools cancelled', () => {
  for (const [source, expected] of [[original, 'cancelled'], [patched, 'error']]) {
    const bubbles = { e: edit('loading'), s: { tool: 'terminal', status: 'loading', additionalData: { status: 'running' },
      toolCall: { tool: { case: 'shellToolCall', value: {} } } }, d: edit('loading', { result: { case: 'success' } }) };
    const writes = [];
    const Owner = cancelOwner(source), owner = Object.assign(new Owner(), {
      unfinishedToolCallIds: new Set(['e', 's', 'd']), composerDataHandle: { data: {} },
      getToolFormer: () => ({ getBubbleData: id => bubbles[id], setBubbleData: (id, value) => writes.push([id, value]) }),
      getExistingToolFormerBubbleId: id => id,
    });
    owner.cancelUnfinishedToolCalls();
    const written = Object.fromEntries(writes);
    assert.equal(written.e.status, expected);
    assert.equal(written.e.error?.clientVisibleErrorMessage, expected === 'error' ? interruptedEditMessage : undefined);
    assert.equal(written.s.status, 'cancelled'); assert.deepEqual({ ...written.s.additionalData }, { status: 'cancelled' });
    assert.equal(written.s.error, undefined);
    assert.equal(written.d.status, 'cancelled', 'An edit that already has its result is only cancelled');
    assert.equal(owner.unfinishedToolCallIds.size, 0);
  }
});

test('transform is idempotent, fails closed on drift and the installer keeps the first backup', async () => {
  assert.equal(markInterruptedAgentEdits(patched), patched);
  for (const changed of [original.replace('e.status === "loading" && (e.status = "cancelled");', ''),
    original.replace('t.setBubbleData(i, { status: "cancelled", ...(o ? { additionalData: o } : {}) }),', 't.setBubbleData(i, { status: "cancelled" }),')])
    assert.throws(() => markInterruptedAgentEdits(changed), /contract changed/);
  const directory = await mkdtemp(join(tmpdir(), 'openvision-edit-interruption-'));
  try {
    const path = join(directory, 'source/app', agentEditInterruptionEntry);
    await mkdir(dirname(path), { recursive: true }); await writeFile(path, original);
    await installInterruptedAgentEdits(directory); await installInterruptedAgentEdits(directory);
    assert.equal(await readFile(path, 'utf8'), patched);
    assert.equal(await readFile(join(directory, 'backups/agent-edit-interruption', agentEditInterruptionEntry), 'utf8'), original);
  } finally { await rm(directory, { recursive: true, force: true }); }
});
