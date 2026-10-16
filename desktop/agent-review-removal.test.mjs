import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { runInNewContext } from 'node:vm';
import { readableApp } from './recovered-source.mjs';
import { agentReviewRecoveryEntry, agentReviewRecoveryOwner, preserveAgentReviewRecovery,
  preserveAgentReviewSnapshotOwnership } from './agent-review-recovery-customization.mjs';
import { preserveReviewUndoRetry, reviewUndoOwners } from './agent-review-undo-customization.mjs';
import { reviewRemovalHandlerOwner } from './agent-review-removal-customization.mjs';

const original = await readFile(new URL(agentReviewRecoveryEntry, readableApp), 'utf8');
const snapshotOwner = preserveAgentReviewSnapshotOwnership(original);
const previous = preview7Fixture(preserveReviewUndoRetry(snapshotOwner, agentReviewRecoveryOwner(snapshotOwner)));
const patched = preserveAgentReviewRecovery(original);
const drain = () => new Promise(resolve => setImmediate(resolve));

// Preserve the shipped v1 retry representation as a compatibility/control
// fixture, independently of the current producer's ownership-based condition.
function preview7Fixture(text) {
  const owner = agentReviewRecoveryOwner(text), replacements = [];
  for (const [name, id, local] of [['remove', 'e', 'm'], ['addDiff', 'r', 'h']]) {
    const method = owner.body.body.find(node => node.key?.name === name);
    let source = text.slice(method.start, method.end);
    const start = `try {\n                    const ${local} = this.diffHandlers.get(${id});`;
    assert.ok(source.includes(start));
    source = source.replace(start, `let openvisionRemovalStarted = false;\n                  ${start}`)
      .replace(`this.cancelInUndo(${id}),`, `(openvisionRemovalStarted = true), this.cancelInUndo(${id}),`)
      .replace(`if (this.diffHandlers.has(${id}))`, 'if (!openvisionRemovalStarted)');
    replacements.push({ ...method, source });
  }
  for (const replacement of replacements.sort((a, b) => b.start - a.start))
    text = text.slice(0, replacement.start) + replacement.source + text.slice(replacement.end);
  return text;
}

// Execute the real review callbacks, registry removal, handler removal and undo
// element together. Faults belong only to their cancellation/cleanup dependencies.
function fixture(source = patched) {
  const owner = agentReviewRecoveryOwner(source), { element } = reviewUndoOwners(source);
  const handlerOwner = reviewRemovalHandlerOwner(source);
  const handlerRemoval = handlerOwner.body.body.find(node => node.key?.name === 'remove');
  const methods = ['addDiff', 'remove', '_remove', 'getStoredInlineDiff', 'setStoredInlineDiff',
    // Every OpenVision service owner, including record deletion where present.
    ...owner.body.body.filter(node => node.key?.name?.startsWith('openvision')).map(node => node.key.name)].map(name => {
    const node = owner.body.body.find(method => method.key?.name === name);
    return source.slice(node.start, node.end);
  });
  const definitions = runInNewContext(`const pK = (${source.slice(element.start, element.end)});
    ({ Service: class { ${methods.join('\n')} }, Handler: class {
      ${source.slice(handlerRemoval.start, handlerRemoval.end)}
    } })`, {
    Nnd: () => 'snapshot-key', Hlf: value => ({ ...value }), fie: value => ({ ...value }), Kkf: value => value,
    Mge: class {}, console: { error() {} },
  });
  const state = { disk: new Map(), calls: [], handlers: [], fault: undefined };
  const step = name => {
    state.calls.push(name);
    if (state.fault === name) throw new Error(`failed ${name}`);
  };
  const uri = { toString: () => 'file:///project/edit.js' };
  const service = Object.assign(new definitions.Service(), {
    diffHandlers: new Map(), _inlineDiffCache: new Map(), _dirtyDiffIds: new Set(), _persistedDiffIds: new Set(),
    getUndoResourceForInlineDiff: diff => diff.uri, getModelReferenceUri: diff => diff.uri,
    getInlineDiffStorageKey: id => 'review-' + id,
    storageService: {
      async cursorDiskKVGet(key) { return state.disk.get(key); },
      async cursorDiskKVSet(key, value) { state.disk.set(key, value); },
      async cursorDiskKVClearPrefix(key) { state.disk.delete(key); },
    },
    textModelService: { async createModelReference() { return createReference(); } },
    instantiationService: { createInstance(Type, reference, diff) {
      const handler = Object.assign(new definitions.Handler(), {
        id: diff.id, inlineDiff: diff, composerMetadata: diff.composerMetadata, reference,
        inlineDiffService: { removeInlineDiff() { step('handler-state'); } },
        compileAndFirePartialHistory() { step('partial-history'); },
        removeDecorations() { step('decorations'); },
        dispose() { step('dispose'); reference.dispose(); },
      });
      state.handlers.push(handler); return handler;
    } },
    cmdKStateService: { getPromptBarByDiffId() {}, replacePromptBar() {} },
    removeInlineDiff() { step('service-state'); },
    _onDidChangeDiffInfos: { fire() {} }, _onDidAddDiff: { fire() {} },
    _onDidRemoveDiff: { fire() { step('removed-event'); } },
    _onDidAddDiffFromUndoRedo: { fire() {} },
    _onDidRemoveDiffFromUndoRedo: { fire() { step('history-event'); } },
    cancelInUndo() { step('cancel'); }, pushUndoElement(element) { state.element = element; },
  });
  function createReference() {
    return { disposed: false, object: { textEditorModel: { uri, getLinesContent: () => ['after'] } },
      dispose() { this.disposed = true; } };
  }
  const initial = service.addDiff({ id: 'diff', uri, originalTextLines: ['before'], newTextLines: ['after'],
    currentRange: { startLineNumber: 1, endLineNumberExclusive: 2 } }, createReference());
  return { service, state, initial };
}

async function removalFixture(direction, source) {
  const f = fixture(source);
  if (direction === 'redo') {
    f.service.remove('diff', { accepted: true }); await drain();
    await f.state.element.undo();
  }
  f.state.calls.length = 0;
  return f;
}

for (const direction of ['undo', 'redo']) {
  for (const fault of ['cancel', 'partial-history', 'decorations', 'handler-state', 'dispose']) {
    test(`${direction} retains the review and retry outcome after ${fault} failure`, async () => {
      const f = await removalFixture(direction), live = f.service.diffHandlers.get('diff');
      f.state.fault = fault;
      const outcome = await f.state.element[direction]();
      assert.equal(outcome?.openvisionReviewRetry, f.state.element);
      assert.equal(outcome.direction, direction);
      assert.equal(f.service.diffHandlers.get('diff'), live, 'Service retains its handler until cleanup completes');
      assert.equal(live.reference.disposed, false);
      assert.equal(f.state.disk.has('snapshot-key'), true);
      assert.equal(f.state.calls.includes('removed-event'), false);
      const callsBeforeRetry = [...f.state.calls];
      f.state.fault = undefined;
      await f.state.element[direction]();
      assert.equal(f.service.diffHandlers.size, 0);
      assert.equal(live.reference.disposed, true);
      const completed = ['partial-history', 'decorations', 'handler-state', 'dispose'];
      for (const name of completed.slice(0, Math.max(0, completed.indexOf(fault))))
        assert.equal(f.state.calls.filter(call => call === name).length, 1, `${name} must not replay`);
      assert.equal(f.state.calls.filter(call => call === 'removed-event').length, 1);
      assert.equal(f.state.calls.filter(call => call === 'history-event').length, 1);
      assert.ok(callsBeforeRetry.length > 0);
      await f.state.element[direction === 'undo' ? 'redo' : 'undo']();
      assert.deepEqual([...f.service.diffHandlers.get('diff').inlineDiff.originalTextLines], ['before']);
    });
  }
}

test('preview.7 advances after cancellation failure and loses handler ownership after cleanup failure', async () => {
  const cancellation = await removalFixture('undo', previous);
  cancellation.state.fault = 'cancel';
  assert.equal(await cancellation.state.element.undo(), undefined);
  assert.equal(cancellation.service.diffHandlers.size, 1);
  const removal = await removalFixture('undo', previous);
  removal.state.fault = 'dispose';
  assert.equal(await removal.state.element.undo(), undefined);
  assert.equal(removal.service.diffHandlers.size, 0);
  assert.equal(removal.initial.reference.disposed, false);
});

test('a model-overlap removal failure resumes through its review callback without replaying completed cleanup', async () => {
  const { service, state, initial } = fixture(); state.fault = 'dispose';
  assert.throws(() => initial.remove(), /failed dispose/);
  const outcome = await state.element.undo();
  assert.equal(outcome.openvisionReviewRetry, state.element);
  assert.equal(service.diffHandlers.get('diff'), initial);
  state.fault = undefined; await state.element.undo();
  assert.equal(service.diffHandlers.size, 0); assert.equal(initial.reference.disposed, true);
  assert.equal(state.calls.filter(call => call === 'partial-history').length, 1);
  assert.equal(state.calls.filter(call => call === 'decorations').length, 1);
  assert.equal(state.calls.filter(call => call === 'handler-state').length, 1);
});

test('removal upgrade is idempotent, removes the premature flag and rejects producer drift', () => {
  assert.ok(preserveAgentReviewRecovery(patched) === patched, 'Repeated removal transformation is byte-stable');
  const upgraded = preserveAgentReviewRecovery(previous);
  const upgradedOwner = agentReviewRecoveryOwner(upgraded), currentOwner = agentReviewRecoveryOwner(patched);
  for (const name of ['_remove', 'remove', 'addDiff']) {
    const body = (source, owner) => {
      const node = owner.body.body.find(method => method.key?.name === name);
      return source.slice(node.start, node.end).replace(/\s+/g, '');
    };
    assert.equal(body(upgraded, upgradedOwner), body(patched, currentOwner));
  }
  assert.equal(patched.includes('openvisionRemovalStarted'), false);
  for (const [owner, name, before, after] of [
    [agentReviewRecoveryOwner(previous), '_remove', 'e.remove(),', 'e.changedRemoval(),'],
    [reviewRemovalHandlerOwner(previous), 'remove', 'this.compileAndFirePartialHistory(),', 'this.changedPartialHistory(),'],
    [agentReviewRecoveryOwner(previous), 'addDiff', 'this.cancelInUndo(r),', 'this.changedCancellation(r),'],
  ]) {
    const node = owner.body.body.find(method => method.key?.name === name);
    const body = previous.slice(node.start, node.end);
    assert.ok(body.includes(before));
    const changed = previous.slice(0, node.start) + body.replace(before, after) + previous.slice(node.end);
    assert.throws(() => preserveAgentReviewRecovery(changed), /Agent review/);
  }
});
