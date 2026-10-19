import assert from 'node:assert/strict';
import test from 'node:test';
import { readFile, stat } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { runInNewContext } from 'node:vm';
import { parseExpressionAt } from '../tooling/dependencies.mjs';
import { readableAppDirectory } from './recovered-source.mjs';
import { guardRenameVersions, guardRenameDiskChanges, guardRenameCancellation } from './rename-version-customization.mjs';

function adapter(source, context) {
  const offset = source.indexOf('async provideRenameEdits(');
  const owner = parseExpressionAt(source, source.lastIndexOf('class ', offset), { ecmaVersion: 'latest' });
  let classNode = owner;
  while (classNode.type === 'SequenceExpression') classNode = classNode.expressions.find(node => node.start <= offset && node.end > offset);
  while (classNode.type === 'CallExpression' || classNode.type === 'MemberExpression') classNode = classNode.callee ?? classNode.object;
  const code = source.slice(classNode.start, classNode.end);
  const converter = code.match(/(\w+)\.from\(/)[1];
  const position = code.match(/(\w+)\.to\(a\)/)[1];
  return runInNewContext(`(${code})`, { [position]: { to: value => value },
    [converter]: { from: (edits, versions) => ({ edits: edits.map(edit => ({ ...edit,
      versionId: versions?.getTextDocumentVersion(edit.resource) })) }) }, ...context });
}

const candidates = [readableAppDirectory(), resolve(import.meta.dirname, '../../cursor/readable/app')];
let readableRoot;
for (const candidate of candidates) {
  if (await stat(join(candidate, 'out/vs/workbench/api/worker/extensionHostWorkerMain.js')).then(() => true).catch(() => false)) {
    readableRoot = candidate; break;
  }
}
if (!readableRoot) throw Error('Complete readable recovery input is required for rename adapter tests');
for (const variant of ['node/extensionHostProcess.js', 'worker/extensionHostWorkerMain.js']) {
  const original = await readFile(new URL(`out/vs/workbench/api/${variant}`, `file:///${readableRoot.replaceAll('\\', '/')}/`), 'utf8');
  const patched = guardRenameVersions(original);
  test(`${variant}: exact adapter snapshot rejects stale multi-file rename and retains versions through delivery`, async () => {
    assert.equal(guardRenameVersions(patched), patched);
    const docs = new Map(['source', 'other', 'unrelated'].map(name => [name, {
      uri: { toString: () => name }, version: 1, getText() { throw Error('Guard must not copy document text'); },
    }]));
    let inventories = 0, finish;
    const documents = { getDocument: uri => docs.get(uri.toString()),
      getDocumentData: uri => docs.has(uri.toString()) ? { document: docs.get(uri.toString()) } : undefined,
      getAllDocumentData: () => { inventories++; return [...docs.values()].map(document => ({ document })); } };
    const rename = async change => {
      const provider = { provideRenameEdits: () => new Promise(resolve => { finish = resolve; }) };
      const service = new (adapter(patched))(documents, provider, {});
      const pending = service.provideRenameEdits(docs.get('source').uri, {}, 'renamed', { isCancellationRequested: false });
      change();
      finish(['source', 'other'].map(name => ({ resource: docs.get(name).uri, textEdit: { text: 'renamed' } })));
      return pending;
    };
    const stale = await rename(() => { docs.get('other').version++; });
    assert.match(stale.rejectReason, /changed while computing/); assert.equal(stale.edits, undefined);
    const healthy = await rename(() => { docs.get('unrelated').version++; });
    assert.deepEqual(Array.from(healthy.edits, edit => edit.versionId), [1, 2]);
    assert.equal(inventories, 2, 'One metadata snapshot per rename, not per edit');
    const reopened = await rename(() => { docs.set('other', { ...docs.get('other') }); });
    assert.match(reopened.rejectReason, /changed while computing/, 'Reopened documents cannot reuse version identity');
  });

  test(`${variant}: cancelled late results are discarded, unknown files remain unversioned and provider rejections survive`, async () => {
    const uri = { toString: () => 'source' }, doc = { uri, version: 7 };
    const documents = { getDocument: () => doc, getAllDocumentData: () => [{ document: doc }],
      getDocumentData: value => value === uri ? { document: doc } : undefined };
    const token = { isCancellationRequested: false };
    const Adapter = adapter(patched);
    const cancelled = new Adapter(documents, { provideRenameEdits: async () => {
      token.isCancellationRequested = true; return [{ resource: uri, textEdit: {} }];
    } }, {});
    assert.equal(await cancelled.provideRenameEdits(uri, {}, '', token), undefined);
    const unknown = new Adapter(documents, { provideRenameEdits: async () => [
      { resource: { toString: () => 'not-loaded' }, textEdit: {} },
    ] }, {});
    assert.equal((await unknown.provideRenameEdits(uri, {}, '', { isCancellationRequested: false })).edits[0].versionId, undefined);
    const rejected = new Adapter(documents, { provideRenameEdits: async () => { throw 'Provider refused rename'; } }, {});
    assert.equal((await rejected.provideRenameEdits(uri, {}, '', { isCancellationRequested: false })).rejectReason, 'Provider refused rename');
  });
  test(`${variant}: unopened rename targets changed on disk reject the whole rename`, async () => {
    const guarded = guardRenameDiskChanges(patched);
    assert.equal(guardRenameDiskChanges(guarded), guarded, 'idempotent');
    assert.equal(guardRenameDiskChanges(guardRenameVersions(guarded)), guarded, 'v1 guard stays idempotent');
    const uri = { toString: () => 'source' }, doc = { uri, version: 3 };
    const documents = { getDocument: () => doc, getAllDocumentData: () => [{ document: doc }],
      getDocumentData: value => value === uri ? { document: doc } : undefined };
    const target = path => ({ toString: () => path, scheme: 'file', fsPath: path });
    const statted = [];
    const disk = new Map();
    const process = { getBuiltinModule: name => name === 'node:fs' ? { promises: { stat: async path => {
      statted.push(path);
      if (!disk.has(path)) throw Object.assign(Error('missing'), { code: 'ENOENT' });
      return disk.get(path)();
    } } } : undefined };
    const run = (edits, context = { process }) => new (adapter(guarded, context))(documents,
      { provideRenameEdits: async () => edits }, {}).provideRenameEdits(uri, {}, 'renamed', { isCancellationRequested: false });
    disk.set('/old', () => ({ mtimeMs: 1, ctimeMs: 1 }));
    disk.set('/new', () => ({ mtimeMs: Date.now() + 5, ctimeMs: Date.now() + 5 }));
    const healthy = await run([{ resource: uri, textEdit: {} }, { resource: target('/old'), textEdit: {} }]);
    assert.equal(healthy.edits.length, 2);
    assert.deepEqual(statted, ['/old'], 'loaded documents use versions, not disk metadata');
    const stale = await run([{ resource: uri, textEdit: {} }, { resource: target('/new'), textEdit: {} }]);
    assert.match(stale.rejectReason, /changed on disk/); assert.equal(stale.edits, undefined);
    assert.match((await run([{ resource: target('/gone'), textEdit: {} }])).rejectReason, /changed on disk/);
    statted.length = 0;
    const virtual = { toString: () => 'untitled:1', scheme: 'untitled', fsPath: '/new' };
    assert.equal((await run([{ resource: virtual, textEdit: {} }])).edits.length, 1);
    assert.deepEqual(statted, [], 'non-file schemes are not stat-ed');
    assert.equal((await run([{ resource: target('/new'), textEdit: {} }], {})).edits.length, 1,
      'hosts without node:fs keep the version-only guard');
  });
}

for (const variant of ['node/extensionHostProcess.js', 'worker/extensionHostWorkerMain.js']) {
  test(`${variant}: same-document edits cancel the provider token; the version guard still rejects the late result`, async () => {
    const original = await readFile(new URL(`out/vs/workbench/api/${variant}`, `file:///${readableRoot.replaceAll('\\', '/')}/`), 'utf8');
    const guarded = guardRenameCancellation(guardRenameDiskChanges(guardRenameVersions(original)));
    assert.equal(guardRenameCancellation(guarded), guarded, 'idempotent');
    assert.equal(guardRenameCancellation(guardRenameDiskChanges(guardRenameVersions(guarded))), guarded, 'chain stays idempotent');
    const docs = new Map(['source', 'other'].map(name => [name, { uri: { toString: () => name }, version: 1 }]));
    const listeners = new Set();
    const documents = { getDocument: uri => docs.get(uri.toString()), getAllDocumentData: () => [...docs.values()].map(document => ({ document })),
      getDocumentData: uri => docs.has(uri.toString()) ? { document: docs.get(uri.toString()) } : undefined,
      onDidChangeDocument: listener => { listeners.add(listener); return { dispose: () => listeners.delete(listener) }; } };
    const change = name => { docs.get(name).version++; for (const listener of [...listeners]) listener({ document: docs.get(name) }); };
    const outer = () => { const callbacks = new Set(); return { isCancellationRequested: false,
      onCancellationRequested: callback => { callbacks.add(callback); return { dispose: () => callbacks.delete(callback) }; },
      cancel() { this.isCancellationRequested = true; callbacks.forEach(callback => callback()); }, callbacks }; };
    const start = token => {
      let finish, seen;
      const provider = { provideRenameEdits: (_document, _position, _name, inner) => { seen = { inner, fired: 0 };
        inner.onCancellationRequested(() => { seen.fired++; });
        return new Promise(resolve => { finish = resolve; }); } };
      const pending = new (adapter(guarded, { process: {} }))(documents, provider, {})
        .provideRenameEdits(docs.get('source').uri, {}, 'renamed', token);
      return { pending, seen: () => seen, finish: () => finish(['source'].map(name => ({ resource: docs.get(name).uri, textEdit: {} }))) };
    };
    const same = start(outer());
    await Promise.resolve();
    change('other');
    assert.equal(same.seen().inner.isCancellationRequested, false, 'edits to other documents do not cancel');
    change('source');
    assert.equal(same.seen().inner.isCancellationRequested, true);
    assert.equal(same.seen().fired, 1);
    change('source');
    assert.equal(same.seen().fired, 1, 'fires once');
    same.finish();
    assert.match((await same.pending).rejectReason, /changed while computing/, 'late result ignoring the token is still rejected');
    assert.equal(listeners.size, 0, 'document listener disposed when the provider settles');
    const host = outer(), cancelled = start(host);
    await Promise.resolve();
    host.cancel();
    assert.equal(cancelled.seen().inner.isCancellationRequested, true, 'workbench cancellation still propagates');
    cancelled.finish();
    assert.equal(await cancelled.pending, undefined, 'host-cancelled request returns nothing');
    assert.equal(host.callbacks.size, 0, 'outer token subscription disposed');
    const healthy = start(outer());
    await Promise.resolve();
    healthy.finish();
    assert.deepEqual(Array.from((await healthy.pending).edits, edit => edit.versionId), [docs.get('source').version]);
    let late = 0;
    healthy.seen().inner.onCancellationRequested(() => late++);
    assert.equal(late, 0);
  });
}

test('cancellation guard requires the disk guard', () => {
  assert.throws(() => guardRenameCancellation('class Other {}'), /must be installed first/);
  assert.throws(() => guardRenameCancellation('/* OpenVision rename disk changes v1 */'), /shape changed/);
});

test('disk guard requires the version guard and an unchanged shape', () => {
  assert.throws(() => guardRenameDiskChanges('class Other {}'), /must be installed first/);
  assert.throws(() => guardRenameDiskChanges('/* OpenVision rename document versions v1 */'), /shape changed/);
});

test('changed adapter contract fails closed', () => {
  assert.throws(() => guardRenameVersions('class Other {}'), /missing or ambiguous/);
});
