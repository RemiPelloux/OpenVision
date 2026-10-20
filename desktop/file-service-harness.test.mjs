import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { mkdir, mkdtemp, rm, writeFile } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { characterize, compareResults, originalModule, surfaceOf } from './file-service-harness.mjs';

const root = resolve(import.meta.dirname, '..');

// A JavaScript stand-in with the recovered GrepClient surface. It answers every
// query with one fixed match, which is enough to exercise the harness itself.
const fake = `class GrepClient {
  constructor(workspaces, options, events) {
    if (!Array.isArray(workspaces)) { const e = Error('Given napi value is not an array'); e.code = 'InvalidArg'; throw e; }
    if (workspaces.some(w => typeof w.path !== 'string')) { const e = Error('Missing field \`path\`'); e.code = 'InvalidArg'; throw e; }
    this.roots = workspaces.map(w => w.path); this.disposed = false;
  }
  warmup() {} takeLastUnsupportedReason() { return this.reason; }
  async query(roots, pattern, options) {
    if (this.disposed || !roots.every(r => this.roots.includes(r))) { this.reason = 'no_index'; return null; }
    this.reason = undefined;
    return Object.fromEntries(roots.map(r => [r, { byFile: [{ file: 'src/alpha.txt', matches: [{ lineNumber: 1, content: 'alpha ' + pattern.slice(0, 6), isContextLine: false }] }], totalLines: 1, totalMatchedLines: 1, totalFiles: 1, truncated: false }]));
  }
  async getWorkspaceStatuses() { return this.roots.map(workspacePath => ({ workspacePath, ready: { pending: 0, isDirty: true } })); }
  dispose() { this.disposed = true; }
}
module.exports = { GrepClient, MULTI_ROOT_ABSOLUTE_PATH: '<root>' };`;

test('comparison reports every differing leaf and nothing for equal values', () => {
  assert.deepEqual(compareResults({ a: [1, { b: 2 }], c: null }, { a: [1, { b: 2 }], c: null }), []);
  assert.deepEqual(compareResults({ a: [1, { b: 2 }], c: 'x' }, { a: [1, { b: 3 }], c: null, d: 1 }),
    [{ path: '/a/1/b', expected: 2, actual: 3 }, { path: '/c', expected: 'x', actual: null }, { path: '/d', expected: undefined, actual: 1 }]);
});

test('the module surface lists classes with members and constants with values', () => {
  class Client { query() {} static make() {} }
  assert.deepEqual(surfaceOf({ Client, KIND: { A: 'a' }, ROOT: '<root>' }), [
    { name: 'Client', type: 'class', members: ['query'], statics: ['make'] },
    { name: 'KIND', type: 'object', value: { A: 'a' } }, { name: 'ROOT', type: 'string', value: '<root>' }]);
});

test('the harness characterizes a candidate end to end and detects a divergent one', async () => {
  await mkdir(join(root, 'logs'), { recursive: true });
  const directory = await mkdtemp(join(root, 'logs/file-service-harness-test-'));
  try {
    await writeFile(join(directory, 'fake.cjs'), fake);
    await mkdir(join(directory, 'a')); await mkdir(join(directory, 'b'));
    const first = await characterize(join(directory, 'fake.cjs'), join(directory, 'a'));
    assert.equal(first.indexReady, true);
    assert.deepEqual(first.constructor.noArguments, { threw: true, name: 'Error', code: 'InvalidArg', message: 'Given napi value is not an array' });
    assert.equal(first.queries.unknownRoot.unsupported, 'no_index');
    assert.equal(first.lifecycle.queryAfterDispose.value, null);
    assert.ok(Object.keys(first.queries.literal.value).every(key => key === '<repo>'), 'workspace paths are normalized');
    const second = await characterize(join(directory, 'fake.cjs'), join(directory, 'b'));
    assert.deepEqual(compareResults(first, second), [], 'deterministic across fixtures');
    await writeFile(join(directory, 'divergent.cjs'), fake.replace("'alpha ' + pattern.slice(0, 6)", "'ALPHA'"));
    await mkdir(join(directory, 'c'));
    const divergent = await characterize(join(directory, 'divergent.cjs'), join(directory, 'c'));
    assert.ok(compareResults(first, divergent).some(difference => difference.path.endsWith('/content')));
  } finally { await rm(directory, { recursive: true, force: true }); }
});

test('the recovered addon is characterized: surface, errors, index readiness', { skip: !existsSync(originalModule) && 'Prepared source build unavailable', timeout: 300000 }, async () => {
  const directory = await mkdtemp(join(root, 'logs/file-service-harness-test-'));
  try {
    const original = await characterize(originalModule, directory);
    assert.equal(original.indexReady, true);
    assert.deepEqual(original.surface.find(entry => entry.name === 'GrepClient').members, ['dispose', 'getTrackedState', 'getWorkspaceStatuses',
      'offTrackedStateInvalidated', 'onDidChange', 'onDidCreate', 'onDidDelete', 'onTrackedStateInvalidated', 'query', 'queryWithCallback', 'takeLastUnsupportedReason', 'warmup']);
    assert.equal(original.surface.find(entry => entry.name === 'MULTI_ROOT_ABSOLUTE_PATH').value, '<root>');
    assert.equal(original.constructor.noArguments.code, 'InvalidArg');
    assert.equal(original.queries.invalidRegex.unsupported, 'exec_failure');
    assert.equal(original.queries.emptyPattern.unsupported, 'unsupported_shape');
    assert.equal(original.queries.unknownRoot.unsupported, 'no_index');
    assert.deepEqual(original.queries.include.value['<repo>'].byFile.map(file => file.file), ['src/beta.js']);
  } finally { await rm(directory, { recursive: true, force: true }); }
});
