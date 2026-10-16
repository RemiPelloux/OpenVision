import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { runInNewContext } from 'node:vm';
import { readableApp } from './recovered-source.mjs';
import { agentReviewRecoveryEntry, agentReviewRecoveryOwner, preserveAgentReviewRecovery,
  preserveAgentReviewSnapshotOwnership } from './agent-review-recovery-customization.mjs';
import { preserveReviewUndoRetry, reviewUndoOwners } from './agent-review-undo-customization.mjs';
import { preserveReviewRemoval, reviewRemovalHandlerOwner } from './agent-review-removal-customization.mjs';
import { preserveReviewDeletion, reviewDeletionMarker } from './agent-review-deletion-customization.mjs';

const original = await readFile(new URL(agentReviewRecoveryEntry, readableApp), 'utf8');
const snapshot = preserveAgentReviewSnapshotOwnership(original);
const retryable = preserveReviewUndoRetry(snapshot, agentReviewRecoveryOwner(snapshot));
// Control: every earlier review-ownership customization, without this owner.
const previous = preserveReviewRemoval(retryable, agentReviewRecoveryOwner(retryable));
const patched = preserveAgentReviewRecovery(original);
const drain = async () => { for (let index = 0; index < 5; index++) await new Promise(resolve => setImmediate(resolve)); };
const serviceMethods = ['acceptDiff', 'rejectDiff', 'remove', '_remove', 'persistInlineDiffs', 'getStoredInlineDiff',
  'setStoredInlineDiff', 'updateInlineDiff', 'removeInlineDiff'];

// Executes the recovered accept/reject/remove/persist owners and the recovered
// handler accept/reject/remove methods together. Storage, telemetry, text model
// and handler disposal are the controlled dependencies.
function fixture(source = patched) {
  const owner = agentReviewRecoveryOwner(source), { element } = reviewUndoOwners(source);
  const handlerOwner = reviewRemovalHandlerOwner(source);
  const pick = (node, names) => names.map(name => {
    const method = node.body.body.find(candidate => candidate.key?.name === name);
    assert.ok(method, name);
    return source.slice(method.start, method.end);
  });
  const owned = owner.body.body.filter(node => node.key?.name?.startsWith('openvision')).map(node => node.key.name);
  const text = pick(owner, [...serviceMethods, ...owned]).join('\n');
  const names = [...new Set(text.match(/publicLogCapture\((\w+)/g).map(value => value.slice('publicLogCapture('.length)))];
  const definitions = runInNewContext(`const pK = (${source.slice(element.start, element.end)});
    const Mge = class { ${pick(handlerOwner, ['accept', 'reject', 'remove']).join('\n')} };
    ({ Service: class { ${text} }, Handler: Mge })`, {
    Nnd: id => 'snapshot-' + id, Hlf: value => ({ ...value }), fie: value => ({ ...value }), Kkf: value => value,
    xF: { COMPOSER: 'composer' }, setTimeout: () => {}, console: { error() {}, warn() {} },
    ...Object.fromEntries(names.map(name => [name, name])),
  });
  const state = { disk: new Map(), held: [], holdSets: false, deleteFail: false, disposeFail: undefined,
    counts: { acceptRecords: 0, rejectRecords: 0, acceptEvents: 0, rejectEvents: 0, rejectCallbacks: 0, textEdits: 0,
      cleanup: [] }, undo: [] };
  const service = Object.assign(new definitions.Service(), {
    diffHandlers: new Map(), inlineDiffs: { value: [], change(value) { this.value = value; } },
    _inlineDiffCache: new Map(), _dirtyDiffIds: new Set(), _persistedDiffIds: new Set(), _parkInlineDiffs: false,
    getInlineDiffStorageKey: id => 'inlineDiff:workspace:' + id,
    storageService: {
      async cursorDiskKVGet(key) { return state.disk.get(key); },
      cursorDiskKVSet(key, value) {
        const write = () => { state.disk.set(key, value); };
        if (state.holdSets && key.startsWith('inlineDiff:')) return new Promise(resolve => state.held.push(resolve)).then(write);
        return Promise.resolve().then(write);
      },
      async cursorDiskKVClearPrefix(key) {
        if (state.deleteFail && key.startsWith('inlineDiff:')) throw new Error('record deletion failed');
        for (const candidate of [...state.disk.keys()]) if (candidate.startsWith(key)) state.disk.delete(candidate);
      },
    },
    telemetryService: { publicLogCapture() {} }, trackAcceptRejectDiffDetails() {},
    recordAcceptEvent() { state.counts.acceptRecords++; }, recordRejectEvent() { state.counts.rejectRecords++; },
    recordAfterRejectEvent() {}, reportEditFate() {}, getPromptBarCurrentRange() {},
    cmdKStateService: { getPromptBarByDiffId() {}, updatePromptBar() {} },
    tryCaptureNotebookCellDeletionInfo() {}, cancelInUndo() {},
    getUndoResourceForInlineDiff: diff => diff.uri, getModelReferenceUri: diff => diff.uri,
    textModelService: { async createModelReference() { return reference(); } },
    instantiationService: { createInstance(Type, modelReference, diff) { return handler(diff, modelReference); } },
    _onDidChangeDiffInfos: { fire() {} }, _onDidRemoveDiff: { fire() {} }, _onDidAddDiffFromUndoRedo: { fire() {} },
    _onDidRemoveDiffFromUndoRedo: { fire() {} },
    _onDidAcceptDiff: { fire() { state.counts.acceptEvents++; } },
    _onDidRejectDiff: { fire() { state.counts.rejectEvents++; } },
    pushUndoElement(undoElement) { state.undo.push(undoElement); },
  });
  const uri = { toString: () => 'file:///project/edit.js', path: '/project/edit.js' };
  function reference() {
    return { object: { textEditorModel: { uri, getEOL: () => '\n', getLinesContent: () => ['after'],
      applyEdits() { state.counts.textEdits++; return [{ undo: true }]; } } }, dispose() {} };
  }
  function handler(diff, modelReference = reference()) {
    const live = Object.assign(new definitions.Handler(), {
      id: diff.id, inlineDiff: diff, composerMetadata: diff.composerMetadata, modelRef: modelReference,
      inlineDiffService: service, cppService: {}, changes: [], promptBarId: undefined,
      numAcceptedPartialDiffs: 0, numRejectedPartialDiffs: 0,
      getUndoResourceForUri: value => value, getGreenRange() {},
      compileAndFirePartialHistory() { state.counts.cleanup.push('partial-history'); },
      removeDecorations() { state.counts.cleanup.push('decorations'); },
      callRejectCallback() { state.counts.rejectCallbacks++; },
      dispose() {
        state.counts.cleanup.push('dispose');
        if (state.disposeFail === diff.id) throw new Error('handler disposal failed');
      },
      cmdKStateService: { getPromptBarByDiffId() {} },
    });
    service.updateInlineDiff(diff);
    return live;
  }
  function add(id = 'diff') {
    const diff = { id, uri, originalTextLines: ['before'], newTextLines: ['after'], generationUUID: 'generation-' + id,
      composerMetadata: { composerId: 'composer' }, currentRange: { startLineNumber: 1, endLineNumberExclusive: 2 } };
    const live = handler(diff); service.diffHandlers.set(id, live); return live;
  }
  return { service, state, add, record: id => state.disk.has('inlineDiff:workspace:' + id) };
}

async function persisted(source, id = 'diff') {
  const f = fixture(source); f.add(id);
  await f.service.persistInlineDiffs();
  assert.equal(f.record(id), true, 'Pending review has a persisted live-review record');
  return f;
}

test('preview.7 control loses a failed record deletion and keeps an accepted review recoverable on restart', async () => {
  const f = await persisted(previous);
  f.state.deleteFail = true; f.service.acceptDiff('diff'); await drain();
  f.state.deleteFail = false; await f.service.persistInlineDiffs(); await drain();
  assert.equal(f.service.diffHandlers.size, 0);
  assert.equal(f.record('diff'), true, 'Control reproduces the stale record that restart restores as pending');
});

test('failed record deletion stays owned and the persistence owner retries it', async () => {
  const f = await persisted();
  f.state.deleteFail = true; f.service.acceptDiff('diff'); await drain();
  assert.equal(f.service.diffHandlers.size, 0);
  assert.equal(f.record('diff'), true);
  assert.equal(f.service.openvisionPendingReviewDeletions.get('diff').failed, true);
  await f.service.persistInlineDiffs();
  assert.equal(f.record('diff'), true, 'Still-failing storage retains the deletion obligation');
  assert.equal(f.service.openvisionPendingReviewDeletions.has('diff'), true);
  f.state.deleteFail = false; await f.service.persistInlineDiffs();
  assert.equal(f.record('diff'), false);
  assert.equal(f.service.openvisionPendingReviewDeletions.size, 0);
});

test('an outstanding live-review write cannot recreate an accepted review record', async () => {
  for (const [source, expected] of [[previous, true], [patched, false]]) {
    const f = fixture(source); f.add();
    f.state.holdSets = true;
    const writing = f.service.persistInlineDiffs(); await drain();
    assert.equal(f.state.held.length, 1);
    f.service.acceptDiff('diff'); await drain();
    f.state.holdSets = false; for (const release of f.state.held.splice(0)) release();
    await writing; await drain();
    assert.equal(f.record('diff'), expected, source === previous ? 'control' : 'owned deletion');
  }
});

test('a review restored under the same id keeps its record while an older deletion is pending', async () => {
  const f = await persisted();
  f.state.deleteFail = true; f.service.acceptDiff('diff'); await drain();
  const removal = f.state.undo.find(element => element.label === 'Undo Remove Diff');
  assert.equal(await removal.undo(), undefined);
  assert.equal(f.service.diffHandlers.has('diff'), true, 'Undo restores the accepted review');
  f.state.deleteFail = false;
  await f.service.persistInlineDiffs();
  assert.equal(f.record('diff'), true, 'Retry never deletes a live pending review');
  f.service.acceptDiff('diff'); await drain(); await f.service.persistInlineDiffs();
  assert.equal(f.record('diff'), false, 'The later decision removes the rewritten record');
});

test('preview.7 control replays accept side effects when post-commit cleanup is retried', async () => {
  const f = await persisted(previous);
  f.state.disposeFail = 'diff';
  assert.throws(() => f.service.acceptDiff('diff'), /handler disposal failed/);
  f.state.disposeFail = undefined; f.service.acceptDiff('diff'); await drain();
  assert.equal(f.state.counts.acceptRecords, 2);
  assert.equal(f.state.undo.filter(element => element.label === 'Undo Accept Diff').length, 2);
});

test('accept post-commit cleanup resumes once without replaying committed side effects', async () => {
  const f = await persisted(); const live = f.service.diffHandlers.get('diff');
  f.state.disposeFail = 'diff';
  assert.throws(() => f.service.acceptDiff('diff'), /handler disposal failed/);
  await drain();
  assert.equal(f.service.diffHandlers.get('diff'), live, 'Failed cleanup retains handler ownership');
  assert.equal(f.record('diff'), false, 'The accepted decision ends the pending-review record');
  await f.service.persistInlineDiffs();
  assert.equal(f.record('diff'), false, 'Committed reviews are not persisted as pending again');
  assert.equal(f.service.diffHandlers.get('diff'), live, 'Retry while still failing keeps ownership');
  f.state.disposeFail = undefined; await f.service.persistInlineDiffs(); await drain();
  assert.equal(f.service.diffHandlers.size, 0);
  assert.deepEqual(f.state.counts.cleanup.filter(step => step !== 'dispose'), ['partial-history', 'decorations']);
  assert.equal(f.state.counts.acceptRecords, 1); assert.equal(f.state.counts.acceptEvents, 1);
  assert.equal(f.state.undo.filter(element => element.label === 'Undo Accept Diff').length, 1);
  assert.equal(f.state.undo.filter(element => element.label === 'Undo Remove Diff').length, 1);
});

test('preview.7 control reapplies rejection text edits when cleanup is retried', async () => {
  const f = await persisted(previous);
  f.state.disposeFail = 'diff';
  assert.throws(() => f.service.rejectDiff('diff'), /handler disposal failed/);
  f.state.disposeFail = undefined; f.service.rejectDiff('diff');
  assert.equal(f.state.counts.textEdits, 2);
  assert.equal(f.state.counts.rejectCallbacks, 2);
});

for (const retry of ['persistence owner', 'accept request', 'Undo history']) {
  test(`reject post-commit cleanup resumes through the ${retry} without replaying text edits`, async () => {
    const f = await persisted(); const live = f.service.diffHandlers.get('diff');
    f.state.disposeFail = 'diff';
    assert.throws(() => f.service.rejectDiff('diff'), /handler disposal failed/);
    await drain();
    assert.equal(f.service.diffHandlers.get('diff'), live);
    assert.equal(f.record('diff'), false, 'Restored original text ends the record');
    const removal = f.state.undo.find(element => element.label === 'Undo Remove Diff');
    if (retry === 'Undo history')
      assert.equal((await removal.undo())?.openvisionReviewRetry, removal, 'Failing cleanup keeps Undo retryable');
    f.state.disposeFail = undefined;
    if (retry === 'persistence owner') await f.service.persistInlineDiffs();
    else if (retry === 'accept request') f.service.acceptDiff('diff');
    else assert.equal(await removal.undo(), undefined);
    await drain();
    assert.equal(f.state.counts.textEdits, 1, 'Rejection edits are applied once');
    assert.equal(f.state.counts.rejectRecords, 1); assert.equal(f.state.counts.rejectCallbacks, 1);
    assert.equal(f.state.counts.rejectEvents, 1); assert.equal(f.state.counts.acceptEvents, 0);
    assert.equal(f.state.undo.filter(element => element.label === 'Undo Reject Diff').length, 1);
    assert.equal(f.state.undo.filter(element => element.label === 'Undo Remove Diff').length, 1);
    if (retry === 'Undo history') assert.equal(f.service.diffHandlers.has('diff'), true, 'Undo then restores the review');
    else assert.equal(f.service.diffHandlers.size, 0);
  });
}

test('deletion ownership is idempotent, keeps earlier upgrades and rejects producer drift', () => {
  assert.equal(preserveAgentReviewRecovery(patched), patched);
  assert.equal(preserveAgentReviewRecovery(previous), patched, 'Earlier review customizations upgrade additively');
  assert.ok(patched.includes(reviewDeletionMarker));
  const owner = agentReviewRecoveryOwner(previous);
  for (const [name, before, after] of [
    ['_remove', 'this._persistedDiffIds.has(n) &&', 'this._persistedDiffIds.has(n) || '],
    ['persistInlineDiffs', 'this._persistedDiffIds.add(t.id)', 'this._persistedDiffIds.add(t.generationUUID)'],
    ['acceptDiff', 'n.accept(),', 'n.changedAccept(),'],
    ['rejectDiff', 'i.callRejectCallback(),', 'i.changedCallback(),'],
  ]) {
    const node = owner.body.body.find(method => method.key?.name === name);
    const body = previous.slice(node.start, node.end);
    assert.ok(body.includes(before), name);
    const changed = previous.slice(0, node.start) + body.replace(before, after) + previous.slice(node.end);
    assert.throws(() => preserveReviewDeletion(changed, agentReviewRecoveryOwner(changed)), /Agent review/);
  }
  const handler = reviewRemovalHandlerOwner(previous).body.body.find(method => method.key?.name === 'reject');
  const body = previous.slice(handler.start, handler.end);
  const changed = previous.slice(0, handler.start) + body.replace('applyEdits(i, !0)', 'applyEdits(i, !1)') + previous.slice(handler.end);
  assert.throws(() => preserveReviewDeletion(changed, agentReviewRecoveryOwner(changed)), /Agent review deletion contract/);
});
