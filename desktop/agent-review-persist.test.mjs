import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { runInNewContext } from 'node:vm';
import { readableApp } from './recovered-source.mjs';
import { agentClosedFileEntry, agentFileChangeOwner, preserveUnopenedAgentUndo } from './agent-closed-file-undo-customization.mjs';
import { agentReviewPersistMarker, editCompletionOwner, persistAgentReviewBaseline } from './agent-review-persist-customization.mjs';

const original = await readFile(new URL(agentClosedFileEntry, readableApp), 'utf8');
const undo = preserveUnopenedAgentUndo(original);
const patched = persistAgentReviewBaseline(undo);

// Executes the recovered file-change owner with controlled composer services.
function fixture(source) {
  const events = [];
  const owner = agentFileChangeOwner(source);
  const methods = owner.body.body.filter(node => ['_handleFileChangeImpl', 'openvisionUnopenedAgentEditIsFresh'].includes(node.key?.name))
    .map(node => source.slice(node.start, node.end));
  const uri = { path: '/project/edit.js', toString: () => 'file:///project/edit.js' };
  const Class = runInNewContext(`(class { ${methods.join('\n')} })`, {
    dco: () => ({ bubbleId: 'bubble' }), Tvt: () => uri, PRn: () => false, $_: value => value.split('\n'), console,
  });
  const handle = { data: { composerId: 'composer', originalFileStates: {} } };
  const service = Object.assign(new Class(), {
    composerDataService: {
      async getComposerHandleById() { return handle; }, getComposerData() { return handle.data; },
      updateComposerDataSetStore(_, update) {
        update((field, key, value) => { events.push(`baseline ${value.content}`); handle.data[field][key] = value; });
      },
      async manuallyPersistComposer(id) { events.push(`persist ${id} ${JSON.stringify(handle.data.originalFileStates)}`); },
    },
    composerCheckpointService: { async updateLastCheckpointWithFileIfNotTracked() { events.push('checkpoint'); } },
    composerFileService: { async revertFile() { events.push('revert'); } },
    composerEventService: { fireDidAiEditFile() { events.push('edited'); } },
    inlineDiffService: { remove() {}, async persistInlineDiffs() { events.push('persist review'); } },
    composerCodeBlockService: { getInlineDiff() {} },
    workspaceContextService: {},
    logService: { warn() {} },
    textFileService: { files: { get() {} } },
    async maybeHoldGlassLspTextModelReference() {},
    async handleRegularFileChangeWithInlineDiffs() { events.push('review'); },
  });
  const change = (before, after) => service._handleFileChangeImpl('composer', { path: uri.path, before, after,
    metadata: { toolCallId: 'call' } }, true);
  return { events, change };
}

test('a new review baseline is persisted before the review is created or acknowledged', async () => {
  const { events, change } = fixture(patched);
  await change('one\n', 'two\n');
  assert.deepEqual(events, ['baseline one\n', 'checkpoint',
    'persist composer {"file:///project/edit.js":{"content":"one\\n","firstEditBubbleId":"bubble","isNewlyCreated":false,"newlyCreatedFolders":[]}}',
    'revert', 'review', 'edited', 'persist review']);
  events.length = 0;
  // Later edits keep the first baseline; no repeated persistence.
  await change('two\n', 'three\n');
  assert.deepEqual(events, ['checkpoint', 'revert', 'review', 'edited', 'persist review']);
});

test('deletion and new-file baselines are persisted too', async () => {
  const deleted = fixture(patched);
  await deleted.change('gone\n', undefined);
  assert.deepEqual(deleted.events.slice(0, 3), ['baseline gone\n', 'checkpoint', deleted.events[2]]);
  assert.match(deleted.events[2], /^persist composer /);
  const created = fixture(patched);
  await created.change(undefined, 'new\n');
  assert.match(created.events[2], /^persist composer .*"isNewlyCreated":true/);
});

test('the recovered owner keeps the baseline only in memory (control)', async () => {
  const { events, change } = fixture(undo);
  await change('one\n', 'two\n');
  assert.deepEqual(events, ['baseline one\n', 'checkpoint', 'revert', 'review', 'edited']);
});

test('baseline persistence transform is idempotent and drift-guarded', () => {
  assert.equal(persistAgentReviewBaseline(patched), patched);
  assert.equal(patched.split(agentReviewPersistMarker).length, 2);
  // Either order relative to the unopened-file undo transform.
  assert.ok(preserveUnopenedAgentUndo(persistAgentReviewBaseline(original)).includes(agentReviewPersistMarker));
  assert.throws(() => persistAgentReviewBaseline(undo.replace('console.log("[composer] Handling file deletion");', 'void 0;')),
    /contract changed/);
  assert.throws(() => persistAgentReviewBaseline(undo.replace('a.originalFileStates[l.toString()] === void 0 &&', 'void 0 === a.originalFileStates[l.toString()] &&')),
    /contract changed/);
});

test('a completed edit is persisted after its tool call is stored, before the adapter returns', () => {
  const method = text => { const node = editCompletionOwner(text); return text.slice(node.start, node.end); };
  const before = method(undo), after = method(patched);
  assert.equal(before.includes('manuallyPersistComposer'), false, 'Recovered owner leaves the completed edit dirty (control)');
  const storedAt = after.indexOf('h && u.setBubbleData(h, { toolCall: o });');
  const persistAt = after.indexOf('a === "editToolCall" && o.tool.value?.result?.result?.case === "success" &&');
  assert.ok(storedAt > 0 && storedAt < persistAt && persistAt < after.indexOf('return;', storedAt));
  assert.ok(after.includes('(await this.instantiationService.invokeFunction((p) => p.get(zs)).manuallyPersistComposer(r));'));
  assert.equal(after.split('manuallyPersistComposer').length, 2);
  assert.throws(() => persistAgentReviewBaseline(undo.replace('const c = this.specialToolHandlers.get(a);', 'const c = void 0;')),
    /contract changed/);
});
