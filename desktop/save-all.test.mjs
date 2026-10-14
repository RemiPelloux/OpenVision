import assert from 'node:assert/strict';
import test from 'node:test';
import { saveWorkspaceDocuments } from './save-all-runtime.mjs';
import { fixWorkspaceSaveAll } from './save-all-customization.mjs';
import { fixSaveAllCommands } from './save-all-commands.mjs';

function fixture() {
  const calls = [];
  const model = (resource, options = {}) => ({ resource, dirty: true, ...options,
    isDirty() { return this.dirty; }, isDisposed() { return false; }, isReadonly() { return !!this.readonly; } });
  const closed = model('closed'), visible = model('visible'), untitled = model('untitled');
  const owner = {
    _editorService: { findEditors: uri => uri === 'visible' ? [{}] : [], async saveAll(options) {
      calls.push(['editors', options]); visible.dirty = false; return { success: true };
    } },
    _textFileService: { files: { models: [closed, visible] }, untitled: { models: [untitled] }, async save(uri, options) {
      calls.push([uri, options]); [closed, visible, untitled].find(item => item.resource === uri).dirty = false; return uri;
    } },
  };
  return { owner, calls, closed, visible, untitled };
}

test('saves unopened dirty files once, preserves native editor saves and excludes untitled by default', async () => {
  const f = fixture();
  assert.equal(await saveWorkspaceDocuments.call(f.owner, false), true);
  assert.deepEqual(f.calls, [['editors', { includeUntitled: false }], ['closed', { reason: 1 }]]);
  assert.equal(f.untitled.dirty, true);
  assert.equal(f.owner._textFileService.openvisionWorkspaceSaveQueue, undefined);
});

test('includes untitled only when selected and serializes concurrent differing calls', async () => {
  const f = fixture();
  const commandOwner = { ...f.owner };
  assert.deepEqual(await Promise.all([saveWorkspaceDocuments.call(f.owner, false), saveWorkspaceDocuments.call(commandOwner, true)]), [true, true]);
  assert.deepEqual(f.calls.map(call => call[0]), ['editors', 'closed', 'editors', 'untitled']);
});

test('tab-save rejection still attempts hidden documents and releases the shared queue', async () => {
  const f = fixture();
  f.owner._editorService.saveAll = async () => { throw new Error('editor failed'); };
  assert.equal(await saveWorkspaceDocuments.call(f.owner, false), false);
  assert.equal(f.closed.dirty, false);
  assert.equal(f.owner._textFileService.openvisionWorkspaceSaveQueue, undefined);
});

test('native failure remains false without retrying visible files; closed read-only models never save', async () => {
  const f = fixture(); f.closed.readonly = true;
  f.owner._editorService.saveAll = async () => ({ success: false });
  assert.equal(await saveWorkspaceDocuments.call(f.owner, false), false);
  assert.deepEqual(f.calls, []);
  assert.equal(f.closed.dirty, true);
});

test('conflict, cancellation and thrown failures remain false; no force overwrite is passed', async () => {
  for (const failure of [undefined, new Error('conflict')]) {
    const f = fixture();
    f.owner._textFileService.save = async (uri, options) => {
      assert.deepEqual(options, { reason: 1 });
      if (failure instanceof Error) throw failure;
      return failure;
    };
    assert.equal(await saveWorkspaceDocuments.call(f.owner, false), false);
    assert.equal(f.closed.dirty, true);
  }
});

const source = `const U=class { constructor(){this.mapResourceToModel = new Map();}
isUntitledWithAssociatedResource(e) { return e.scheme === 'untitled'; } };
const W=class { $save(e) { return this._editorService.findEditors(e, { supportSideBySide: Side.PRIMARY }); }
$saveAll(e) { return this._editorService.saveAll({ includeUntitled: e }).then((t) => t.success); } };`;
test('transform owns exact adapter and untitled inventory, is idempotent and rejects drift', () => {
  const patched = fixWorkspaceSaveAll(source);
  assert.equal(fixWorkspaceSaveAll(patched), patched);
  assert.ok(patched.includes('return [...this.mapResourceToModel.values()]'));
  assert.throws(() => fixWorkspaceSaveAll(source.replace('t.success', 't.other')), /contract changed/);
  assert.throws(() => fixWorkspaceSaveAll(source + source), /ambiguous/);
});

test('global commands share the model owner while scoped group saves remain unchanged', () => {
  const commands = `${source}
const Text = service("textFileService"), Editors = service("editorService");
const All = "saveAll", Files = "workbench.action.files.saveFiles";
register({id: All,
handler: (e) => scoped(e, e.get(Groups).getGroups(1), { reason: 1 }),
});
register({id: Files,
handler: async (e) => (await e.get(Editors).saveAll({ includeUntitled: !1, reason: 1 })).success,
});
register({id: "workbench.files.action.saveAllInGroup", handler: scoped});`;
  const patched = fixSaveAllCommands(commands);
  assert.equal(fixSaveAllCommands(patched), patched);
  assert.ok(patched.includes('"workbench.files.action.saveAllInGroup", handler: scoped'));
  assert.ok(patched.includes('_textFileService: e.get(Text)'));
  assert.throws(() => fixSaveAllCommands(commands.replace('getGroups(1)', 'getGroups(2)')), /contract changed/);
});
