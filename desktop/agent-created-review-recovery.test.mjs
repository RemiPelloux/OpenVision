import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { runInNewContext } from 'node:vm';
import { readableApp } from './recovered-source.mjs';
import { agentReviewRecoveryEntry, agentReviewRecoveryOwner, preserveAgentReviewRecovery } from './agent-review-recovery-customization.mjs';

const original = await readFile(new URL(agentReviewRecoveryEntry, readableApp), 'utf8');
const patched = preserveAgentReviewRecovery(original);
const drain = () => new Promise(resolve => setImmediate(resolve));

function legacyRecoveryFixture(includeCreation) {
  const owner = agentReviewRecoveryOwner(patched), oldOwner = agentReviewRecoveryOwner(original);
  const replacements = [];
  for (const [name, reference, diffId, operation] of [
    ['remove', 'openvisionPendingModelReference', 'e', 'undo'],
    ['addDiff', 'openvisionPendingCreateReference', 'r', 'redo'],
  ]) {
    const method = owner.body.body.find(node => node.key?.name === name);
    let source = patched.slice(method.start, method.end);
    if (name === 'addDiff' && !includeCreation) {
      const old = oldOwner.body.body.find(node => node.key?.name === name);
      source = original.slice(old.start, old.end);
    } else {
      source = source.replace('{\n            this.openvisionRetryReviewReferences();', '{');
      source = name === 'remove'
        ? source.replace('let openvisionSnapshotWrite;', 'let openvisionPendingModelReference, openvisionSnapshotWrite;')
        : source.replace('/* OpenVision created review recovery ownership v1 */\n',
          '/* OpenVision created review recovery ownership v1 */\nlet openvisionPendingCreateReference;\n');
      source = source.replace(`if (!this.openvisionRetryReviewReferences(${diffId})) return;`,
        `if (${reference}) {\n                      ${reference}.dispose();\n                      ${reference} = undefined;\n                    }`);
      const local = name === 'remove' ? 'm' : 'h';
      source = source.replace(`if (${local}) this.openvisionReleaseReviewReference(${local}, {diffId: ${diffId}, operation: "${operation}"});`,
        `if (${local}) {\n                      try { ${local}.dispose(); }\n                      catch (error) {\n                        ${reference} = ${local};\n                        console.error("[inlineDiff] Error releasing failed ${operation} model reference:", error);\n                      }\n                    }`);
    }
    replacements.push({ method, source });
  }
  for (const name of ['openvisionReleaseReviewReference', 'openvisionRetryReviewReferences', 'dispose']) {
    const method = owner.body.body.find(node => node.key?.name === name);
    const old = oldOwner.body.body.find(node => node.key?.name === name);
    replacements.push({ method, source: old ? original.slice(old.start, old.end) : '' });
  }
  let legacy = patched;
  for (const { method, source } of replacements.sort((a, b) => b.method.start - a.method.start))
    legacy = legacy.slice(0, method.start) + source + legacy.slice(method.end);
  return legacy.replace('/* OpenVision review reference ownership v2 */', '');
}

// Execute the recovered creation/storage owner and undo element. Only its I/O
// dependencies are controlled; the test never implements Undo or Redo itself.
function fixture(source = patched) {
  const owner = agentReviewRecoveryOwner(source);
  const methods = ['addDiff', 'getStoredInlineDiff', 'setStoredInlineDiff',
    'openvisionReleaseReviewReference', 'openvisionRetryReviewReferences', 'dispose'].flatMap(name => {
    const node = owner.body.body.find(method => method.key?.name === name);
    return node ? [source.slice(node.start, node.end)] : [];
  });
  const start = source.indexOf('pK = class {');
  const end = source.indexOf('\n      };', start) + '\n      }'.length;
  const state = { disk: new Map(), refs: [], handlers: [], errors: [], clears: 0, removed: 0, bars: 0 };
  const uri = { toString: () => 'file:///project/new-review.js' };
  const createReference = () => {
    const reference = { disposed: false, object: { textEditorModel: { uri } }, dispose() {
      if (state.failDispose) throw new Error('release failed');
      this.disposed = true;
    } };
    state.refs.push(reference); return reference;
  };
  const Class = runInNewContext(`const pK = (${source.slice(start + 'pK = '.length, end)});
    (class extends Base { ${methods.join('\n')} })`, {
    Base: class { dispose() { state.serviceDisposals = (state.serviceDisposals ?? 0) + 1; } },
    Nnd: () => 'create-key', Mge: class {}, fie: value => ({ ...value }), Kkf: value => value,
    console: { error(...args) { state.errors.push(args); } },
  });
  const service = Object.assign(new Class(), {
    diffHandlers: new Map(), _inlineDiffCache: new Map(), _dirtyDiffIds: new Set(),
    storageService: {
      async cursorDiskKVGet(key) { if (state.failRead) throw new Error('read failed'); return state.disk.get(key); },
      async cursorDiskKVSet(key, value) {
        await state.writeWait?.promise;
        if (state.failWrite) throw new Error('write failed');
        state.disk.set(key, value);
      },
      async cursorDiskKVClearPrefix(key) {
        state.clears++; await state.clearWait?.promise;
        if (state.failClear) throw new Error('clear failed');
        state.disk.delete(key);
      },
    },
    textModelService: { async createModelReference() {
      if (state.failModel) throw new Error('model failed');
      return createReference();
    } },
    instantiationService: { createInstance(Type, reference, diff) {
      if (state.failConstruct) throw new Error('construction failed');
      const handler = { id: diff.id, inlineDiff: diff, composerMetadata: diff.composerMetadata,
        reference, remove() { reference.dispose(); }, dispose() { reference.dispose(); } };
      state.handlers.push(handler); return handler;
    } },
    _onDidChangeDiffInfos: { fire() {} }, _onDidAddDiff: { fire() {} },
    _onDidAddDiffFromUndoRedo: { fire() {} }, _onDidRemoveDiffFromUndoRedo: { fire() {} },
    pushUndoElement(element) { state.element = element; }, cancelInUndo() {},
    _getPromptBar: () => ({ diffId: 'diff' }),
    cmdKStateService: { replacePromptBar() { state.bars++; } },
    _remove(handler) { service.diffHandlers.delete(handler.id); state.removed++; handler.remove(); },
  });
  const initial = service.addDiff({ id: 'diff', uri, originalTextLines: ['before'],
    newTextLines: ['after'], composerMetadata: { composerId: 'composer' } }, createReference(), 'bar');
  return { service, state, initial };
}

test('original creation Undo removes review after failed snapshot; corrected owner keeps it for retry', async () => {
  for (const [source, preserved] of [[original, false], [patched, true]]) {
    const { service, state, initial } = fixture(source); state.failWrite = true;
    await state.element.undo();
    assert.equal(service.diffHandlers.get('diff') === initial, preserved);
    assert.equal(initial.reference.disposed, !preserved);
    if (preserved) {
      await state.element.redo();
      assert.equal(state.handlers.length, 1, 'Redo after failed Undo must keep the live handler');
      state.failWrite = false; await state.element.undo();
      assert.equal(service.diffHandlers.size, 0);
      assert.equal(state.disk.has('create-key'), true);
      await state.element.redo();
      assert.deepEqual([...service.diffHandlers.get('diff').inlineDiff.originalTextLines], ['before']);
      assert.equal(state.bars, 1);
    }
  }
});

for (const failure of ['model', 'read', 'construct', 'missing']) {
  test(`creation Redo retains recovery after ${failure} failure and allows retry`, async () => {
    const { service, state } = fixture(); await state.element.undo();
    const saved = state.disk.get('create-key'); service._inlineDiffCache.clear();
    state['fail' + failure[0].toUpperCase() + failure.slice(1)] = true;
    if (failure === 'missing') state.disk.delete('create-key');
    await state.element.redo();
    assert.equal(service.diffHandlers.size, 0); assert.equal(state.clears, 0);
    if (failure !== 'missing') assert.equal(state.disk.get('create-key'), saved);
    state.failModel = state.failRead = state.failConstruct = false;
    if (failure === 'missing') state.disk.set('create-key', saved);
    await state.element.redo();
    assert.equal(service.diffHandlers.size, 1); assert.equal(state.clears, 1);
    assert.equal(state.disk.has('create-key'), false);
    assert.ok(state.refs.slice(0, -1).every(reference => reference.disposed));
    assert.equal(state.refs.at(-1).disposed, false);
  });
}

test('original failed creation Redo erases saved review while corrected owner retains it', async () => {
  for (const [source, preserved] of [[original, false], [patched, true]]) {
    const { state } = fixture(source); await state.element.undo(); state.failModel = true;
    await state.element.redo(); await drain();
    assert.equal(state.disk.has('create-key'), preserved);
  }
});

test('creation Undo joins snapshot persistence before removing the live handler', async () => {
  const { service, state, initial } = fixture(); state.writeWait = Promise.withResolvers();
  let done = false; const undo = state.element.undo().then(() => { done = true; }); await drain();
  assert.equal(done, false); assert.equal(service.diffHandlers.get('diff'), initial);
  state.writeWait.resolve(); await undo;
  assert.equal(service.diffHandlers.size, 0); assert.equal(initial.reference.disposed, true);
});

test('creation Redo joins cleanup before a following Undo can overwrite its snapshot', async () => {
  const { service, state } = fixture(); await state.element.undo(); state.clearWait = Promise.withResolvers();
  let done = false; const redo = state.element.redo().then(() => { done = true; }); await drain();
  assert.equal(done, false); assert.equal(service.diffHandlers.size, 1);
  state.clearWait.resolve(); await redo; state.clearWait = undefined;
  await state.element.undo(); assert.equal(state.disk.has('create-key'), true);
  await state.element.redo(); assert.equal(service.diffHandlers.size, 1);
});

test('creation Redo retains failed-release ownership without acquiring another reference', async () => {
  const { service, state } = fixture(); await state.element.undo();
  state.failConstruct = state.failDispose = true; await state.element.redo();
  const count = state.refs.length; await state.element.redo();
  assert.equal(state.refs.length, count); assert.equal(state.refs.at(-1).disposed, false);
  assert.equal(state.disk.has('create-key'), true);
  state.failConstruct = state.failDispose = false; await state.element.redo();
  assert.equal(service.diffHandlers.size, 1); assert.equal(state.refs[count - 1].disposed, true);
});

test('failed Redo release survives discarded history and is retried by a new review', async () => {
  const { service, state, initial } = fixture(); await state.element.undo();
  state.failConstruct = state.failDispose = true; await state.element.redo();
  const reference = state.refs.at(-1); state.element = undefined;
  assert.equal(service.openvisionFailedReviewReferences.has(reference), true);
  state.failConstruct = state.failDispose = false;
  service.addDiff({ ...initial.inlineDiff, id: 'another' }, {
    object: initial.reference.object, dispose() {},
  });
  assert.equal(reference.disposed, true); assert.equal(service.openvisionFailedReviewReferences.size, 0);
});

test('review service cleanup retains failed Redo releases and reports errors until cleanup succeeds', async () => {
  const { service, state } = fixture(); await state.element.undo();
  state.failConstruct = state.failDispose = true; await state.element.redo();
  const reference = state.refs.at(-1); state.element = undefined;
  assert.throws(() => service.dispose(), error => error.name === 'AggregateError' &&
    error.errors.some(failure => failure.message === 'release failed'));
  assert.equal(service.openvisionFailedReviewReferences.has(reference), true);
  assert.equal(reference.disposed, false); assert.equal(state.serviceDisposals, 1);
  state.failDispose = false; assert.doesNotThrow(() => service.dispose());
  assert.equal(reference.disposed, true); assert.equal(service.openvisionFailedReviewReferences.size, 0);
});

test('failed creation cleanup preserves the restored review and retries without replacing its owner', async () => {
  const { service, state } = fixture(); await state.element.undo(); state.failClear = true;
  await assert.doesNotReject(state.element.redo());
  const handler = service.diffHandlers.get('diff'); await state.element.redo();
  assert.equal(service.diffHandlers.get('diff'), handler); assert.equal(state.handlers.length, 2);
  assert.equal(state.disk.has('create-key'), true);
  state.failClear = false; await state.element.undo(); await state.element.redo();
  assert.equal(state.disk.has('create-key'), false);
});

test('creation transform rejects changed producers', () => {
  for (const change of ['this.setStoredInlineDiff(l, h.inlineDiff)', 'this.diffHandlers.set(r, o)', 'Error cleaning up redo data:'])
    assert.throws(() => preserveAgentReviewRecovery(original.replace(change, 'changedProducer')), /Agent/);
});

for (const includeCreation of [false, true]) test(`service ownership upgrades ${includeCreation ? 'creation v1' : 'remove-only'} recovery without retaining obsolete state`, async () => {
  const legacy = legacyRecoveryFixture(includeCreation);
  assert.ok(legacy.includes('let openvisionPendingModelReference, openvisionSnapshotWrite;'));
  assert.equal(legacy.includes('let openvisionPendingCreateReference;'), includeCreation);
  const upgraded = preserveAgentReviewRecovery(legacy);
  assert.equal(upgraded.includes('openvisionPendingModelReference'), false);
  assert.equal(upgraded.includes('openvisionPendingCreateReference'), false);
  assert.equal(preserveAgentReviewRecovery(upgraded), upgraded);
  const { service, state } = fixture(upgraded); await state.element.undo();
  state.failConstruct = state.failDispose = true; await state.element.redo();
  const reference = state.refs.at(-1); state.element = undefined;
  assert.equal(service.openvisionFailedReviewReferences.has(reference), true);
  state.failDispose = false; service.dispose();
  assert.equal(reference.disposed, true);
});

test('service ownership rejects changed legacy cleanup and disposal producers', () => {
  const legacy = legacyRecoveryFixture(true);
  const dispose = agentReviewRecoveryOwner(legacy).body.body.find(node => node.key?.name === 'dispose');
  const changedDisposal = legacy.slice(0, dispose.start) + legacy.slice(dispose.start, dispose.end)
    .replace('super.dispose();', 'super.changedDispose();') + legacy.slice(dispose.end);
  for (const changed of [changedDisposal,
    legacy.replace('openvisionPendingCreateReference = h;', 'changedReference = h;'),
    legacy.replace('openvisionPendingModelReference.dispose();', 'openvisionPendingModelReference.changedDispose();')])
    assert.throws(() => preserveAgentReviewRecovery(changed), /Agent/);
});
