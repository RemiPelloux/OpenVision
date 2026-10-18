import test from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { copyFile, mkdir, mkdtemp, rename, rm, symlink, unlink, utimes, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { DatabaseSync } from 'node:sqlite';
import { RetrievalIndex } from './retrieval-index.mjs';
import { retrievalRuntime } from './retrieval-runtime.mjs';

// OV-503: each case asserts the read/parse/enumeration counters of one
// incremental update over a temporary Git repository.
const runtime = retrievalRuntime();
const git = (cwd, ...args) => execFileSync('git', ['-c', 'user.name=OpenVision Test', '-c', 'user.email=test@openvision.invalid',
  '-c', 'init.defaultBranch=main', '-c', 'commit.gpgsign=false', ...args], { cwd, encoding: 'utf8' });

const numeric = ['enumerations', 'stats', 'reads', 'parses', 'filesIndexed', 'filesDeleted', 'renames', 'reuseByHash',
  'unchangedSkips', 'contentUnchanged', 'ignoredSkips', 'fullRebuilds', 'fullSyncs', 'gitDiffs', 'gitDiffFiles'];
function delta(index, before) {
  const result = {};
  for (const key of numeric) result[key] = index.counters[key] - before[key];
  result.subtreeReconciles = index.counters.subtreeReconciles.slice(before.subtreeReconciles.length);
  return result;
}
const snapshot = index => structuredClone(index.counters);

async function repository(files = {}) {
  const directory = await mkdtemp(join(tmpdir(), 'ov-retrieval-incremental-'));
  const root = join(directory, 'project');
  const base = {
    'src/orders.ts': 'export function createOrder(customer: string) {\n  return { customer, status: "open" };\n}\n',
    'src/billing.ts': 'export function computeInvoiceTotal(lines: number[]) {\n  return lines.reduce((a, b) => a + b, 0);\n}\n',
    'lib/geo.py': 'def haversine_distance(a, b):\n    return 0\n',
    'vendor/lib/legacy.js': 'function legacyHelper() { return 1; }\n',
    'docs/guide.md': '# Guide\nOrders are created by the API.\n',
    ...files,
  };
  for (const [path, text] of Object.entries(base)) {
    await mkdir(join(root, path, '..'), { recursive: true });
    await writeFile(join(root, path), text);
  }
  git(root, 'init', '-q');
  git(root, 'add', '-A');
  git(root, 'commit', '-q', '-m', 'initial');
  const store = join(directory, 'store/v1/workspace');
  const open = async (options = {}) => {
    const index = new RetrievalIndex({ root, directory: store, ...runtime, ...options });
    await index.open();
    return index;
  };
  return { directory, root, store, open, cleanup: () => rm(directory, { recursive: true, force: true }) };
}

const paths = index => index.store.files().map(row => row.path).sort();

test('single edit reads and parses one file and never rebuilds', async () => {
  const fixture = await repository();
  try {
    const index = await fixture.open({ grammarDirectory: runtime.grammarDirectory });
    await index.sync();
    const initial = snapshot(index);
    await writeFile(join(fixture.root, 'src/orders.ts'), 'export function createOrder(customer: string) {\n  return { customer, status: "pending-review" };\n}\n');
    await index.applyChanges([join(fixture.root, 'src/orders.ts')]);
    const change = delta(index, initial);
    assert.equal(change.reads, 1);
    assert.equal(change.parses, 1);
    assert.equal(change.enumerations, 0);
    assert.equal(change.fullRebuilds, 0);
    assert.equal(change.fullSyncs, 0);
    assert.equal(index.search('pending review').results[0]?.path, 'src/orders.ts');

    const touched = snapshot(index);
    const later = new Date(Date.now() + 5000);
    await utimes(join(fixture.root, 'src/billing.ts'), later, later);
    await index.applyChanges(['src/billing.ts']);
    assert.deepEqual([delta(index, touched).reads, delta(index, touched).parses, delta(index, touched).contentUnchanged], [1, 0, 1],
      'a timestamp-only change reads once and does not parse');

    const repeat = snapshot(index);
    await index.applyChanges(['src/billing.ts']);
    assert.equal(delta(index, repeat).reads, 0, 'an unchanged stat identity is not read');
    index.close();
  } finally { await fixture.cleanup(); }
});

test('create, delete, copy and rename update only the affected records', async () => {
  const fixture = await repository();
  try {
    const index = await fixture.open();
    await index.sync();
    let before = snapshot(index);
    await writeFile(join(fixture.root, 'src/refunds.ts'), 'export function issueRefund(orderId: string) {\n  return orderId;\n}\n');
    await index.applyChanges(['src/refunds.ts']);
    assert.deepEqual([delta(index, before).reads, delta(index, before).parses, delta(index, before).filesIndexed], [1, 1, 1]);

    before = snapshot(index);
    await unlink(join(fixture.root, 'docs/guide.md'));
    await index.applyChanges(['docs/guide.md']);
    assert.deepEqual([delta(index, before).reads, delta(index, before).filesDeleted], [0, 1]);
    assert.equal(index.search('Guide').results.some(result => result.path === 'docs/guide.md'), false);

    before = snapshot(index);
    await copyFile(join(fixture.root, 'src/billing.ts'), join(fixture.root, 'src/billing-copy.ts'));
    await index.applyChanges(['src/billing-copy.ts']);
    assert.deepEqual([delta(index, before).reads, delta(index, before).parses, delta(index, before).reuseByHash], [1, 0, 1],
      'identical content reuses stored chunks');

    before = snapshot(index);
    await rename(join(fixture.root, 'src/refunds.ts'), join(fixture.root, 'src/returns.ts'));
    await index.applyChanges(['src/refunds.ts', 'src/returns.ts']);
    const moved = delta(index, before);
    assert.deepEqual([moved.reads, moved.parses, moved.renames, moved.filesDeleted], [0, 0, 1, 0], 'rename keeps chunks without reading');
    const hit = index.search('issue refund').results[0];
    assert.equal(hit.path, 'src/returns.ts');

    before = snapshot(index);
    await rename(join(fixture.root, 'lib'), join(fixture.root, 'library'));
    await index.applyChanges(['lib', 'library']);
    const directory = delta(index, before);
    assert.deepEqual([directory.reads, directory.parses, directory.renames], [0, 0, 1], 'directory move is a rename of its files');
    assert.deepEqual(directory.subtreeReconciles, ['library']);
    assert.ok(paths(index).includes('library/geo.py') && !paths(index).includes('lib/geo.py'));
    index.close();
  } finally { await fixture.cleanup(); }
});

test('ignore-file changes re-evaluate only their subtree', async () => {
  const fixture = await repository({ 'src/generated/schema.ts': 'export const schema = {};\n', 'src/generated/types.ts': 'export type T = 1;\n' });
  try {
    const index = await fixture.open();
    await index.sync();
    let before = snapshot(index);
    await writeFile(join(fixture.root, 'src/.cursorindexingignore'), 'generated/\n');
    await index.applyChanges(['src/.cursorindexingignore']);
    let change = delta(index, before);
    assert.deepEqual(change.subtreeReconciles, ['src']);
    assert.equal(change.filesDeleted, 2);
    assert.equal(change.reads, 1, 'only the new ignore file itself is read');
    assert.equal(change.enumerations, 1);
    assert.ok(!paths(index).some(path => path.startsWith('src/generated/')));
    assert.ok(paths(index).includes('lib/geo.py'), 'records outside the subtree are untouched');

    before = snapshot(index);
    await writeFile(join(fixture.root, '.gitignore'), 'docs/\n');
    await index.applyChanges(['.gitignore']);
    change = delta(index, before);
    assert.deepEqual(change.subtreeReconciles, ['/']);
    assert.equal(change.reads, 1, 'root .gitignore re-enumerates without re-reading unchanged files');
    assert.ok(!paths(index).includes('docs/guide.md'));

    before = snapshot(index);
    await writeFile(join(fixture.root, 'docs/new.md'), '# New\n');
    await index.applyChanges(['docs/new.md']);
    change = delta(index, before);
    assert.deepEqual([change.reads, change.enumerations, change.ignoredSkips], [0, 0, 1], 'created ignored file is decided without enumeration');

    before = snapshot(index);
    await rm(join(fixture.root, 'src/.cursorindexingignore'));
    await index.applyChanges(['src/.cursorindexingignore']);
    change = delta(index, before);
    assert.equal(change.parses, 2, 'removing the rule restores exactly the two generated files');
    assert.ok(paths(index).includes('src/generated/schema.ts'));
    index.close();
  } finally { await fixture.cleanup(); }
});

test('files.exclude changes re-evaluate the affected subtree; settings and schema changes rebuild with a reason', async () => {
  const fixture = await repository();
  try {
    let index = await fixture.open({ filesExclude: {} });
    await index.sync();
    index.close();
    const logs = [];
    index = await fixture.open({ filesExclude: { 'vendor/**': true }, log: message => logs.push(message) });
    assert.deepEqual(index.pendingScopes, ['vendor']);
    const before = snapshot(index);
    await index.reconcilePending();
    const change = delta(index, before);
    assert.deepEqual(change.subtreeReconciles, ['vendor']);
    assert.deepEqual([change.reads, change.filesDeleted, change.fullRebuilds], [0, 1, 0]);
    assert.ok(logs.some(message => message.includes('files.exclude changed')));
    index.close();

    const rebuildLogs = [];
    index = await fixture.open({ filesExclude: { 'vendor/**': true }, maxFileBytes: 2048, log: message => rebuildLogs.push(message) });
    assert.equal(index.rebuildReason, 'settings-changed');
    assert.deepEqual(index.counters.rebuildReasons, ['settings-changed']);
    assert.ok(rebuildLogs.some(message => message.includes('rebuild required: settings-changed')));
    assert.equal(index.store.counts().files, 0);
    await index.sync();
    index.close();

    const database = new DatabaseSync(join(fixture.store, 'index.sqlite'));
    database.prepare("UPDATE meta SET value = '0' WHERE key = 'schema_version'").run();
    database.close();
    index = await fixture.open({ filesExclude: { 'vendor/**': true }, maxFileBytes: 2048 });
    assert.equal(index.rebuildReason, 'schema 0 -> 1');
    index.close();
  } finally { await fixture.cleanup(); }
});

test('symbolic links are classified and never followed, including cycles', async () => {
  const fixture = await repository();
  const outside = join(fixture.directory, 'outside');
  try {
    await mkdir(outside);
    await writeFile(join(outside, 'secret.ts'), 'export const outsideMarker = 1;\n');
    await symlink(outside, join(fixture.root, 'linked-outside'));
    await symlink('../src', join(fixture.root, 'docs/src-alias'));
    await symlink('loop-b', join(fixture.root, 'loop-a'));
    await symlink('loop-a', join(fixture.root, 'loop-b'));
    await symlink('missing-target', join(fixture.root, 'dangling'));
    const index = await fixture.open();
    await index.sync();
    assert.deepEqual(index.counters.symlinks, { alias: 1, outside: 1, cycle: 2, broken: 1 });
    assert.ok(!paths(index).some(path => path.startsWith('linked-outside') || path.startsWith('docs/src-alias')));
    assert.equal(index.search('outsideMarker').results.length, 0);
    const before = snapshot(index);
    await symlink('../loop-a', join(fixture.root, 'src/loop-c'));
    await index.applyChanges(['src/loop-c']);
    assert.deepEqual([delta(index, before).reads, delta(index, before).enumerations], [0, 0]);
    assert.equal(index.counters.symlinks.cycle, 3);
    index.close();
  } finally { await fixture.cleanup(); }
});

test('branch checkout reconciles exactly the files in git diff old..new', async () => {
  const fixture = await repository();
  try {
    git(fixture.root, 'checkout', '-q', '-b', 'feature');
    await writeFile(join(fixture.root, 'src/orders.ts'), 'export function createOrder(customer: string) {\n  return { customer, status: "feature-branch" };\n}\n');
    await writeFile(join(fixture.root, 'src/shipping.ts'), 'export function scheduleShipment() {\n  return "dock";\n}\n');
    await rm(join(fixture.root, 'docs/guide.md'));
    git(fixture.root, 'add', '-A');
    git(fixture.root, 'commit', '-q', '-m', 'feature');
    git(fixture.root, 'checkout', '-q', 'main');
    const index = await fixture.open();
    await index.sync();
    const before = snapshot(index);
    git(fixture.root, 'checkout', '-q', 'feature');
    await index.applyChanges(['.git/HEAD']);
    const change = delta(index, before);
    assert.deepEqual([change.gitDiffs, change.gitDiffFiles], [1, 3]);
    assert.deepEqual([change.reads, change.parses, change.filesDeleted, change.enumerations, change.fullRebuilds], [2, 2, 1, 0, 0]);
    assert.equal(index.search('schedule shipment').results[0]?.path, 'src/shipping.ts');
    const watcher = snapshot(index);
    await index.applyChanges(['src/orders.ts', 'src/shipping.ts', 'docs/guide.md']);
    assert.equal(delta(index, watcher).reads, 0, 'watcher events after the diff do not read again');
    index.close();
  } finally { await fixture.cleanup(); }
});
