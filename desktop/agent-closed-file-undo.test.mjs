import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, mkdtemp, mkdir, writeFile, rm } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { tmpdir } from 'node:os';
import { runInNewContext } from 'node:vm';
import { readableApp } from './recovered-source.mjs';
import { agentClosedFileEntry, agentFileChangeOwner, preserveUnopenedAgentUndo, installUnopenedAgentUndo } from './agent-closed-file-undo-customization.mjs';

const original = await readFile(new URL(agentClosedFileEntry, readableApp), 'utf8');
const patched = preserveUnopenedAgentUndo(original);

// Recovered producer methods execute with controlled host/model dependencies.
// This is owner verification; native editor persistence is checked separately.
function fixture(source = patched, options = {}) {
  const before = options.before ?? 'export const value = "before";\n';
  const after = options.after ?? 'export const value = "after café 日本語";\n';
  const uri = { path: '/project/closed.js', toString: () => 'file:///project/closed.js' };
  const state = { model: undefined, dirty: false, disk: after, refs: 0, edits: 0, reverts: 0, undos: [], diffs: [], warnings: [], checkpoint: undefined };
  const createModel = value => ({
    value, eol: value.includes('\r\n') ? '\r\n' : '\n',
    getValue() { return this.value; }, getEOL() { return this.eol; },
    getFullModelRange() { return { full: true }; },
    applyEdits(edits) { state.edits++; this.value = edits[0].text.replace(/\r\n|\r|\n/g, this.eol); state.dirty = true; },
    setEOL(kind) { this.eol = kind === 1 ? '\r\n' : '\n'; this.value = this.value.replace(/\r\n|\r|\n/g, this.eol); },
  });
  if (options.open) state.model = createModel(before);
  const owner = agentFileChangeOwner(source);
  const names = ['_handleFileChangeImpl', 'handleRegularFileChangeWithInlineDiffs', '_handleRegularFileChange',
    'openvisionUnopenedAgentEditIsFresh', 'openvisionRecordUnopenedAgentEdit'];
  const methods = owner.body.body.filter(node => names.includes(node.key?.name)).map(node => source.slice(node.start, node.end));
  class UndoElement {
    constructor(label, code, id, resource, undo, redo) { Object.assign(this, { label, code, id, resource, undo, redo }); }
  }
  const Class = runInNewContext(`(class { ${methods.join('\n')} })`, {
    dco: () => ({ bubbleId: 'bubble' }), Tvt: () => uri, PRn: () => true, _V: () => false, cW: () => false,
    $_: value => value.split(/\r\n|\r|\n/), Vn: () => 'generated-id', Pl: class {}, RQ: 'fixture', pK: UndoElement, console,
  });
  const handle = { data: { composerId: 'composer', originalFileStates: {}, modelConfig: {} } };
  const service = Object.assign(new Class(), {
    composerDataService: { async getComposerHandleById() { return handle; }, getComposerData() { return handle.data; } },
    composerCheckpointService: { async updateLastCheckpointWithFileIfNotTracked() { await state.checkpoint?.(); } },
    composerFileService: { async revertFile() {
      state.reverts++;
      if (state.model) { state.model.value = state.disk; state.dirty = false; }
    } },
    composerEventService: { fireDidAiEditFile() {} },
    diffDecorationVisibilityService: { shouldHideInlineDiffs: () => false },
    textModelService: { async createModelReference() {
      await state.beforeReference?.();
      state.model ??= createModel(state.disk); state.refs++;
      return { object: { textEditorModel: state.model }, dispose() { state.refs--; } };
    } },
    textFileService: {
      isDirty() { return state.dirty; },
      files: { get() { return state.model ? { textEditorModel: state.model } : undefined; },
        async resolve() { await state.beforeReload?.(); if (!state.dirty) state.model.value = state.disk; } },
    },
    inlineDiffService: {
      inlineDiffs: { nonReactive: () => [] }, async addDecorationsOnlyDiff(diff) { state.diffs.push(diff); },
      pushUndoElement(element, options) { assert.equal(options.breakConsolidation, true); state.undos.push(element); },
    },
    async maybeHoldGlassLspTextModelReference() {},
    logService: { warn(message) { state.warnings.push(message); } },
  });
  const run = () => service._handleFileChangeImpl('composer', { path: uri.path, before, after, metadata: { toolCallId: 'tool' } }, true);
  return { service, state, before, after, run, createModel };
}

test('recovered closed-file path loses text undo; patch retains supplied before/after without opening early', async () => {
  for (const [source, count] of [[original, 0], [patched, 1]]) {
    const f = fixture(source); assert.equal(f.state.model, undefined);
    await f.run(); assert.equal(f.state.model.value, f.after);
    assert.equal(f.state.undos.length, count); assert.equal(f.state.edits, 0); assert.equal(f.state.refs, 0);
    assert.equal(f.state.diffs.length, 1);
    if (count) {
      await f.state.undos[0].undo(); assert.equal(f.state.model.value, f.before);
      await f.state.undos[0].redo(); assert.equal(f.state.model.value, f.after);
      assert.equal(f.state.refs, 0);
    }
  }
});

test('preexisting model keeps its native undo path without a duplicate element', async () => {
  const f = fixture(patched, { open: true }); await f.run();
  assert.equal(f.state.undos.length, 0); assert.equal(f.state.model.value, f.after);
});

test('baseline ownership is captured before checkpoint work can create an already-edited model', async () => {
  const f = fixture(); f.state.checkpoint = () => { f.state.model = f.createModel(f.after); };
  await f.run(); assert.equal(f.state.undos.length, 1);
  await f.state.undos[0].undo(); assert.equal(f.state.model.value, f.before);
});

test('intervening user edits while checkpointing are preserved without a hard reload', async () => {
  for (const dirty of [true, false]) {
    const f = fixture();
    f.state.checkpoint = () => { f.state.model = f.createModel('user edits\n'); f.state.dirty = dirty; };
    await f.run(); assert.equal(f.state.reverts, 0); assert.equal(f.state.model.value, 'user edits\n');
    assert.equal(f.state.undos.length, 0); assert.equal(f.state.warnings.length, 1);
  }
});

test('changed contents after asynchronous reload reject the stale undo baseline', async () => {
  const f = fixture(); f.state.beforeReload = () => { f.state.disk = 'newer external edit\n'; };
  await assert.rejects(f.run(), /file changed while recording Agent undo/);
  assert.equal(f.state.model.value, 'newer external edit\n');
  assert.equal(f.state.undos.length, 0); assert.equal(f.state.refs, 0);
});

test('undo/redo reject changed content after acquiring a fresh model reference', async () => {
  const f = fixture(); await f.run(); const element = f.state.undos[0];
  f.state.beforeReference = () => { f.state.model.value = 'user edit'; };
  await assert.rejects(element.undo(), /file has changed since this Agent edit/);
  assert.equal(f.state.model.value, 'user edit'); assert.equal(f.state.refs, 0);
  f.state.beforeReference = undefined; f.state.model.value = f.after;
  await element.undo(); f.state.model.value = 'different user edit';
  await assert.rejects(element.redo(), /file has changed since this Agent edit/);
  assert.equal(f.state.model.value, 'different user edit'); assert.equal(f.state.refs, 0);
});

test('undo reacquires a disposed model and preserves an LF/CRLF transition', async () => {
  const f = fixture(patched, { before: 'before\nnext\n', after: 'after\r\nnext\r\n' });
  await f.run(); f.state.model = undefined;
  await f.state.undos[0].undo(); assert.equal(f.state.model.value, f.before);
  await f.state.undos[0].redo(); assert.equal(f.state.model.value, f.after);
  assert.equal(f.state.refs, 0);
});

test('unrepresentable mixed-EOL and BOM baselines do not manufacture an incorrect undo', async () => {
  for (const before of ['before\r\nnext\n', '\uFEFFbefore\n', 'before\rnext']) {
    const f = fixture(patched, { before }); await f.run();
    assert.equal(f.state.undos.length, 0); assert.equal(f.state.warnings.length, 1);
    assert.equal(f.state.model.value, f.after);
  }
});

test('normalized BOM and mixed-EOL results keep review even when extra undo is unsupported', async () => {
  for (const after of ['after\r\nnext\n', '\uFEFFafter\n', 'after\rnext']) {
    for (const loadedDuringCheckpoint of [false, true]) {
      const f = fixture(patched, { before: 'before\n', after });
      const normalized = after.replace(/^\uFEFF/, '').replace(/\r\n|\r|\n/g, '\n');
      if (loadedDuringCheckpoint) f.state.checkpoint = () => {
        f.state.model = f.createModel(normalized); f.state.disk = normalized;
      };
      f.state.beforeReload = () => { f.state.disk = normalized; };
      await f.run();
      assert.equal(f.state.model.value, normalized);
      assert.equal(f.state.undos.length, 0);
      assert.equal(f.state.diffs.length, 1, 'Unsupported synthetic undo must not abort review creation');
      assert.equal(f.state.warnings.length, 1);
      assert.equal(f.state.refs, 0);
    }
  }
});

test('patch is idempotent and fails closed on changed producer/call contracts', () => {
  assert.equal(preserveUnopenedAgentUndo(patched), patched);
  for (const source of [original + original,
    original.replace('t.metadata.toolCallId ?? "",', 't.metadata.toolCallId,'),
    original.replace('this._handleRegularFileChange(e, t, n, i, r)', 'this._handleRegularFileChange(e, t, n, i)'),
    original.replace('await this.textFileService.files.resolve(t, { reload: { async: !1 }, forceReadFromFile: !0 });', 'await this.reload(t);')])
    assert.throws(() => preserveUnopenedAgentUndo(source), /Agent/);
});

test('installer is repeatable and preserves its first baseline', async () => {
  const root = await mkdtemp(join(tmpdir(), 'openvision-agent-undo-'));
  try {
    const path = join(root, 'source/app', agentClosedFileEntry);
    await mkdir(dirname(path), { recursive: true }); await writeFile(path, original);
    await installUnopenedAgentUndo(root); assert.equal(await readFile(path, 'utf8'), patched);
    await installUnopenedAgentUndo(root); assert.equal(await readFile(path, 'utf8'), patched);
    assert.equal(await readFile(join(root, 'backups/agent-closed-file-undo', agentClosedFileEntry), 'utf8'), original);
  } finally { await rm(root, { recursive: true, force: true }); }
});
