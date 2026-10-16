import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { runInNewContext } from 'node:vm';
import { parseExpressionAt } from '../tooling/dependencies.mjs';
import { readableApp } from './recovered-source.mjs';
import { agentReviewRecoveryEntry, agentReviewRecoveryOwner, preserveAgentReviewRecovery } from './agent-review-recovery-customization.mjs';
import { reviewUndoOwners } from './agent-review-undo-customization.mjs';

const original = await readFile(new URL(agentReviewRecoveryEntry, readableApp), 'utf8');
const patched = preserveAgentReviewRecovery(original);

function fixture(source = patched) {
  const { element, history } = reviewUndoOwners(source);
  const index = source.indexOf('moveBackward(e)');
  const parsedStack = parseExpressionAt(source, source.lastIndexOf('class ', index), { ecmaVersion: 'latest' });
  const stack = parsedStack.type === 'SequenceExpression' ? parsedStack.expressions[0] : parsedStack;
  assert.equal(stack.type, 'ClassExpression');
  const names = ['_resourceUndo', '_resourceRedo', '_safeInvokeWithLocks', '_acquireLocks', '_onError', 'openvisionRetryReviewUndo'];
  const methods = history.body.body.filter(node => names.includes(node.key?.name))
    .map(node => source.slice(node.start, node.end));
  const push = agentReviewRecoveryOwner(source).body.body.find(node => node.key?.name === 'pushUndoElement');
  const state = { notifications: [], removed: 0, continued: 0, disposals: 0 };
  const definitions = runInNewContext(`const pK = (${source.slice(element.start, element.end)}); ({ Element: pK,
    Stack: (${source.slice(stack.start, stack.end)}),
    Review: class { ${source.slice(push.start, push.end)} },
    History: class { ${methods.join('\n')} } })`, {
    O3o: class { constructor(editStacks) { this.editStacks = editStacks; } },
    Yr() {}, S: () => 'locked',
  });
  const editStack = new definitions.Stack('file', 'file');
  const service = Object.assign(new definitions.History(), {
    _notificationService: { error(message) { state.notifications.push(message); }, warn() {} },
    _invokeResourcePrepare(element, run) { return run({ dispose() { state.disposals++; } }); },
    _continueUndoInGroup() { state.continued++; }, _continueRedoInGroup() { state.continued++; },
    removeElements() { state.removed++; editStack.flushAllElements(); },
  });
  function create(undo, redo) {
    const actual = new definitions.Element('review', 'review', 'diff', 'file', undo, redo);
    const entry = { actual, label: 'review', groupId: 0, isValid: true, strResources: ['file'] };
    editStack._past.push(entry);
    return { actual, entry, undo: () => service._resourceUndo(editStack, entry, false),
      redo: () => service._resourceRedo(editStack, entry) };
  }
  return { state, editStack, service, create, Element: definitions.Element, Review: definitions.Review };
}

test('real resource Undo/Redo keeps a failed review on its original side, releases locks and permits retry', async () => {
  const f = fixture(); let failUndo = true, failRedo = true, undos = 0, redos = 0;
  const item = f.create(async () => { undos++; if (failUndo) return { openvisionReviewRetry: true }; },
    async () => { redos++; if (failRedo) return { openvisionReviewRetry: true }; });
  await item.undo();
  assert.equal(f.editStack.getClosestPastElement(), item.entry);
  assert.equal(f.editStack.locked, false); assert.equal(f.state.continued, 0);
  assert.match(f.state.notifications[0], /try Undo again/);
  failUndo = false; await item.undo(); assert.equal(f.editStack.getClosestFutureElement(), item.entry);
  await item.redo(); assert.equal(f.editStack.getClosestFutureElement(), item.entry);
  assert.equal(f.editStack.locked, false); assert.match(f.state.notifications[1], /try Redo again/);
  failRedo = false; await item.redo(); assert.equal(f.editStack.getClosestPastElement(), item.entry);
  assert.equal(undos, 2); assert.equal(redos, 2); assert.equal(f.state.removed, 0);
  assert.equal(f.state.disposals, 4); assert.equal(f.state.continued, 2);
});

test('consolidated review retry resumes after completed callbacks in both directions', async () => {
  const f = fixture(); const calls = []; let failUndo = true, failRedo = true;
  const item = f.create(async () => { calls.push('undo-first'); if (failUndo) return { openvisionReviewRetry: true }; },
    async () => { calls.push('redo-first'); });
  item.actual.push(new f.Element('second', 'second', 'second', 'file',
    async () => { calls.push('undo-second'); },
    async () => { calls.push('redo-second'); if (failRedo) return { openvisionReviewRetry: true }; }));
  await item.undo(); failUndo = false; await item.undo();
  assert.deepEqual(calls, ['undo-second', 'undo-first', 'undo-first']);
  await item.redo(); failRedo = false; await item.redo();
  assert.deepEqual(calls.slice(3), ['redo-first', 'redo-second', 'redo-second']);
  assert.equal(item.actual.openvisionUndoIndex, undefined);
  assert.equal(item.actual.openvisionRedoIndex, undefined);
});

test('ordinary Undo failures retain the original history invalidation policy', async () => {
  const f = fixture(); const error = new Error('ordinary undo failure');
  const item = f.create(async () => { throw error; }, async () => {});
  await item.undo(); assert.equal(f.state.removed, 1);
  assert.equal(f.state.notifications[0], error); assert.equal(f.editStack.locked, false);
});

test('new reviews consolidate with healthy history but cannot append to a partially undone element', async () => {
  const f = fixture(); const pushed = [];
  const item = f.create(async () => ({ openvisionReviewRetry: true }), async () => {});
  const service = Object.assign(new f.Review(), { undoRedoService: {
    getLastElement: () => item.actual, pushElement: element => pushed.push(element),
  } });
  const newElement = () => new f.Element('new', 'new', 'new', 'file', async () => {}, async () => {});
  service.pushUndoElement(newElement(), {});
  assert.equal(item.actual.undos.length, 2); assert.equal(pushed.length, 0);
  await item.undo();
  const next = newElement(); service.pushUndoElement(next, {});
  assert.deepEqual(pushed, [next]); assert.equal(item.actual.undos.length, 2);
});

test('an unrelated result cannot impersonate the mounted review owner', async () => {
  const f = fixture(); const item = f.create(async () => {}, async () => {});
  item.actual.undo = async () => ({ openvisionReviewRetry: {}, direction: 'undo' });
  await item.undo(); assert.equal(f.editStack.getClosestFutureElement(), item.entry);
  assert.equal(f.state.notifications.length, 0); assert.equal(f.state.continued, 1);
});

test('changed history is never popped speculatively during failed recovery', async () => {
  const f = fixture(); const unrelated = {};
  const item = f.create(async () => {
    f.editStack._future.push(unrelated); return { openvisionReviewRetry: true };
  }, async () => {});
  await item.undo(); assert.equal(f.editStack.getClosestFutureElement(), unrelated);
  assert.equal(f.state.removed, 0); assert.equal(f.state.continued, 0);
  assert.match(f.state.notifications[0], /history changed/);
});

test('original recovered history advances after a swallowed failure without notifying', async () => {
  const f = fixture(original); const item = f.create(async () => {}, async () => {});
  await item.undo(); assert.equal(f.editStack.getClosestFutureElement(), item.entry);
  assert.equal(f.state.notifications.length, 0);
});

test('retry customization is idempotent and rejects changed history or producer boundaries', () => {
  assert.equal(preserveAgentReviewRecovery(patched), patched);
  for (const value of [original.replace('() => (s(), i.dispose(), r()),', '() => changedCompletion(),'),
    original.replace('n instanceof pK ? n.push(e)', 'n instanceof ChangedElement ? n.push(e)'),
    original.replace('_safeInvokeWithLocks(e, t, n, i, r)', 'changedInvoke(e, t, n, i, r)')])
    assert.throws(() => preserveAgentReviewRecovery(value), /Agent/);
});
