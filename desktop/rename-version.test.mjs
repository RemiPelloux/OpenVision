import assert from 'node:assert/strict';
import test from 'node:test';
import { readFile, stat } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { runInNewContext } from 'node:vm';
import { parseExpressionAt } from '../tooling/dependencies.mjs';
import { readableAppDirectory } from './recovered-source.mjs';
import { guardRenameVersions } from './rename-version-customization.mjs';

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
}

test('changed adapter contract fails closed', () => {
  assert.throws(() => guardRenameVersions('class Other {}'), /missing or ambiguous/);
});
