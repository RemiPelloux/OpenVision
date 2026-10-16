import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, mkdtemp, mkdir, writeFile, rm } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { tmpdir } from 'node:os';
import { runInNewContext } from 'node:vm';
import { readableApp } from './recovered-source.mjs';
import { agentReviewRecoveryEntry, agentReviewRecoveryOwner, preserveAgentReviewRecovery, installAgentReviewRecovery } from './agent-review-recovery-customization.mjs';

const original = await readFile(new URL(agentReviewRecoveryEntry, readableApp), 'utf8');
const patched = preserveAgentReviewRecovery(original);
const drain = () => new Promise(resolve => setImmediate(resolve));

// Run the actual recovered remove callback, undo element and storage owner.
// Inject failure only at model/storage/handler dependencies, never at undo logic.
function fixture(source = patched, options = {}) {
  const owner = agentReviewRecoveryOwner(source);
  const methods = ['remove', 'getStoredInlineDiff', 'setStoredInlineDiff',
    'openvisionReleaseReviewReference', 'openvisionRetryReviewReferences', 'dispose'].flatMap(name => {
    const node = owner.body.body.find(method => method.key?.name === name);
    return node ? [source.slice(node.start, node.end)] : [];
  });
  const undoStart = source.indexOf('pK = class {');
  const undoEnd = source.indexOf('\n      };', undoStart) + '\n      }'.length;
  const undoClass = source.slice(undoStart + 'pK = '.length, undoEnd);
  const state = { disk: new Map(), reads: 0, clears: 0, writes: 0, refs: [], errors: [], added: 0, removed: 0,
    failModel: false, failRead: false, failConstruct: false, failWrite: false, failClear: false, failDispose: false,
    writeWait: options.writeWait };
  const uri = { toString: () => 'file:///project/file.js' };
  const originalDiff = { id: 'diff', uri, originalTextLines: ['before'], newTextLines: ['after'],
    currentRange: { startLineNumber: 1, endLineNumberExclusive: 2 }, hideDecorations: options.hideDecorations ?? false };
  const handler = { inlineDiff: originalDiff, composerMetadata: { composerId: 'composer' }, remove() {} };
  const definitions = runInNewContext(`const pK = (${undoClass}); ({ Class: class extends Base { ${methods.join('\n')} } })`, {
    Base: class { dispose() { state.serviceDisposals = (state.serviceDisposals ?? 0) + 1; } },
    Nnd: () => 'undo-key', Hlf: value => ({ uri: value.uri, currentRange: { ...value.currentRange } }), Mge: class {},
    fie: value => ({ ...value }), Kkf: value => value,
    console: { error(...args) { state.errors.push(args); } },
  });
  const service = Object.assign(new definitions.Class(), {
    diffHandlers: new Map([['diff', handler]]), _inlineDiffCache: new Map(),
    getUndoResourceForInlineDiff: diff => diff.uri, getModelReferenceUri: diff => diff.uri,
    storageService: {
      async cursorDiskKVGet(key) { state.reads++; if (state.failRead) throw new Error('read failed'); return state.disk.get(key); },
      async cursorDiskKVSet(key, value) {
        state.writes++; await state.writeWait?.promise;
        if (state.failWrite) throw new Error('write failed'); state.disk.set(key, value);
      },
      async cursorDiskKVClearPrefix(key) {
        state.clears++; await state.clearWait?.promise;
        if (state.failClear) throw new Error('clear failed'); state.disk.delete(key);
      },
    },
    textModelService: { async createModelReference() {
      if (state.failModel) throw new Error('model failed');
      const reference = { disposed: false, object: { textEditorModel: { uri, getLinesContent: () => ['after'] } },
        dispose() { if (state.failDispose) throw new Error('release failed'); this.disposed = true; } };
      state.refs.push(reference); return reference;
    } },
    instantiationService: { createInstance(Type, reference, diff) {
      if (state.failConstruct) throw new Error('construction failed');
      return { inlineDiff: diff, reference, composerMetadata: { composerId: 'composer' },
        remove() { reference.dispose(); }, dispose() { reference.dispose(); } };
    } },
    _onDidChangeDiffInfos: { fire() {} }, _onDidAddDiffFromUndoRedo: { fire() { state.added++; } },
    _onDidRemoveDiffFromUndoRedo: { fire() { state.removed++; } },
    pushUndoElement(element) { state.element = element; }, cancelInUndo() {},
    _remove(value) { service.diffHandlers.delete('diff'); value.remove(); },
  });
  service.remove('diff', { accepted: true });
  return { service, state, originalDiff };
}

test('original restore failure erases its saved review; patched owner retains it for retry', async () => {
  for (const [source, expectedSaved] of [[original, false], [patched, true]]) {
    const f = fixture(source); await drain(); f.state.failModel = true;
    await f.state.element.undo(); await drain();
    assert.equal(f.state.disk.has('undo-key'), expectedSaved);
    assert.equal(f.service.diffHandlers.size, 0);
    if (expectedSaved) {
      f.state.failModel = false; await f.state.element.redo(); await f.state.element.undo();
      assert.deepEqual([...f.service.diffHandlers.get('diff').inlineDiff.originalTextLines], ['before']);
      assert.equal(f.state.disk.has('undo-key'), false); assert.equal(f.state.refs[0].disposed, false);
      await f.state.element.redo(); assert.equal(f.state.refs[0].disposed, true);
    }
  }
});

for (const failure of ['read', 'construct', 'missing']) {
  test(`failed ${failure} restoration releases its model and retains recovery state`, async () => {
    const f = fixture(); await drain(); f.service._inlineDiffCache.clear();
    const saved = f.state.disk.get('undo-key');
    if (failure === 'read') f.state.failRead = true;
    if (failure === 'construct') f.state.failConstruct = true;
    if (failure === 'missing') f.state.disk.delete('undo-key');
    await f.state.element.undo();
    assert.equal(f.state.clears, 0); assert.equal(f.state.refs[0].disposed, true);
    assert.equal(f.service.diffHandlers.size, 0);
    f.state.failRead = f.state.failConstruct = false;
    if (failure === 'missing') f.state.disk.set('undo-key', saved);
    await f.state.element.redo(); await f.state.element.undo();
    assert.equal(f.service.diffHandlers.size, 1); assert.equal(f.state.clears, 1);
  });
}

test('successful undo waits for cleanup so subsequent redo cannot race a late deletion', async () => {
  const f = fixture(); await drain(); f.state.clearWait = Promise.withResolvers(); let done = false;
  const undo = f.state.element.undo().then(() => { done = true; }); await drain();
  assert.equal(f.service.diffHandlers.size, 1); assert.equal(done, false);
  f.state.clearWait.resolve(); await undo; f.state.clearWait = undefined;
  await f.state.element.redo(); assert.equal(f.state.disk.has('undo-key'), true);
  assert.equal(f.service.diffHandlers.size, 0);
  await f.state.element.undo(); assert.equal(f.service.diffHandlers.size, 1);
});

test('undo joins its initial snapshot write before reading or deleting recovery state', async () => {
  const writeWait = Promise.withResolvers(), f = fixture(patched, { writeWait }); let done = false;
  const undo = f.state.element.undo().then(() => { done = true; }); await drain();
  assert.equal(done, false); assert.equal(f.state.refs.length, 0); assert.equal(f.state.clears, 0);
  writeWait.resolve(); await undo;
  assert.equal(f.service.diffHandlers.size, 1); assert.equal(f.state.disk.has('undo-key'), false);
});

test('failed redo persistence keeps the live review and retries without replacing its handler', async () => {
  const f = fixture(); await drain(); await f.state.element.undo();
  const live = f.service.diffHandlers.get('diff'); f.state.failWrite = true;
  await f.state.element.redo(); assert.equal(f.service.diffHandlers.get('diff'), live);
  assert.equal(live.reference.disposed, false);
  await f.state.element.undo(); assert.equal(f.service.diffHandlers.get('diff'), live);
  f.state.failWrite = false; await f.state.element.redo();
  assert.equal(f.service.diffHandlers.size, 0); assert.equal(live.reference.disposed, true);
  assert.equal(f.state.disk.has('undo-key'), true);
});

test('failed release retains the reference until a retry can release it', async () => {
  const f = fixture(); await drain(); f.state.failConstruct = f.state.failDispose = true;
  await f.state.element.undo(); assert.equal(f.state.refs.length, 1); assert.equal(f.state.refs[0].disposed, false);
  await f.state.element.undo(); assert.equal(f.state.refs.length, 1); assert.equal(f.state.clears, 0);
  f.state.failConstruct = f.state.failDispose = false; await f.state.element.undo();
  assert.equal(f.state.refs[0].disposed, true); assert.equal(f.state.refs.length, 2);
  assert.equal(f.service.diffHandlers.size, 1);
});

test('failed Undo release survives discarded history and is retried by later review activity', async () => {
  const f = fixture(); await drain(); f.state.failConstruct = f.state.failDispose = true;
  await f.state.element.undo(); const reference = f.state.refs[0];
  assert.equal(f.service.openvisionFailedReviewReferences.has(reference), true);
  f.state.element = undefined;
  f.state.failDispose = false;
  f.service.remove('unrelated');
  assert.equal(reference.disposed, true);
  assert.equal(f.service.openvisionFailedReviewReferences.size, 0);
});

test('review service cleanup retains failed Undo releases and reports errors until cleanup succeeds', async () => {
  const f = fixture(); await drain(); f.state.failConstruct = f.state.failDispose = true;
  await f.state.element.undo(); const reference = f.state.refs[0]; f.state.element = undefined;
  assert.throws(() => f.service.dispose(), error => error.name === 'AggregateError' &&
    error.errors.some(failure => failure.message === 'release failed'));
  assert.equal(f.service.openvisionFailedReviewReferences.has(reference), true);
  assert.equal(reference.disposed, false); assert.equal(f.state.serviceDisposals, 1);
  f.state.failDispose = false; assert.doesNotThrow(() => f.service.dispose());
  assert.equal(reference.disposed, true); assert.equal(f.service.openvisionFailedReviewReferences.size, 0);
});

test('cleanup failure preserves the restored handler and does not erase other undo history', async () => {
  const f = fixture(); await drain(); f.state.failClear = true;
  await assert.doesNotReject(f.state.element.undo());
  assert.equal(f.service.diffHandlers.size, 1); assert.equal(f.state.disk.has('undo-key'), true);
  f.state.failClear = false; await f.state.element.redo(); await f.state.element.undo();
  assert.equal(f.state.disk.has('undo-key'), false);
});

test('hidden decorations retain their existing model-derived restoration without storage operations', async () => {
  const f = fixture(patched, { hideDecorations: true }); await f.state.element.undo();
  assert.equal(f.state.writes, 0); assert.equal(f.state.reads, 0); assert.equal(f.state.clears, 0);
  assert.deepEqual([...f.service.diffHandlers.get('diff').inlineDiff.originalTextLines], ['after']);
});

test('transform is idempotent and refuses drift in recovery and redo producers', () => {
  assert.equal(preserveAgentReviewRecovery(patched), patched);
  for (const changed of [original + original,
    original.replace('r && s && this.setStoredInlineDiff(s, m.inlineDiff),', 'this.otherStore(s, m.inlineDiff),'),
    original.replace('this.diffHandlers.set(e, i),', 'this.otherHandlers.set(e, i),'),
    original.replace('Error cleaning up undo data:', 'changed cleanup owner:')])
    assert.throws(() => preserveAgentReviewRecovery(changed), /Agent/);
});

test('installer preserves the first backup and repeated installation is stable', async () => {
  const root = await mkdtemp(join(tmpdir(), 'openvision-review-recovery-'));
  try {
    const path = join(root, 'source/app', agentReviewRecoveryEntry);
    await mkdir(dirname(path), { recursive: true }); await writeFile(path, original);
    await installAgentReviewRecovery(root); assert.equal(await readFile(path, 'utf8'), patched);
    await installAgentReviewRecovery(root); assert.equal(await readFile(path, 'utf8'), patched);
    assert.equal(await readFile(join(root, 'backups/agent-review-recovery', agentReviewRecoveryEntry), 'utf8'), original);
  } finally { await rm(root, { recursive: true, force: true }); }
});
