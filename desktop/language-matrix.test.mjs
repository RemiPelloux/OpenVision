import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { languageMatrix, matrixFixtures, LARGE_LINES, classifyProcess, summarizeTrace } from './language-matrix.mjs';

const root = resolve(import.meta.dirname, '..');

test('matrix declares every bundled language-server family and keeps claims disjoint', () => {
  const languages = languageMatrix.map(entry => entry.language);
  for (const name of ['typescript', 'javascript', 'json', 'css', 'html', 'markdown', 'python', 'c/c++', 'go', 'rust'])
    assert.ok(languages.includes(name), name);
  for (const entry of languageMatrix) {
    assert.ok(entry.verified.every(feature => !entry.notProvided.includes(feature)), entry.language);
    if (!entry.server) assert.deepEqual(entry.verified, [], `${entry.language} has no bundled server`);
  }
});

test('pinned versions match the assembled extensions when a build is present', async t => {
  const base = join(root, 'source/app/extensions');
  if (!await access(base).then(() => true, () => false)) return t.skip('desktop not assembled');
  for (const entry of languageMatrix) {
    const manifest = JSON.parse(await readFile(join(base, entry.extension, 'package.json'), 'utf8'));
    assert.equal(manifest.version, entry.version, entry.extension);
    if (!entry.server) assert.equal(manifest.main, undefined, `${entry.extension} unexpectedly ships code`);
  }
});

test('large fixtures are at least the declared size', () => {
  const fixtures = matrixFixtures();
  for (const name of ['large.ts', 'large.json', 'large.css', 'large.html', 'large.md'])
    assert.ok(fixtures[name].split('\n').length >= LARGE_LINES, name);
  assert.equal(Object.keys(fixtures).filter(name => name.startsWith('pkg/')).length, 600);
});

test('process classification uses script, extension-host pid and watcher module', () => {
  assert.equal(classifyProcess({ pid: 5, cmdline: ['/x/openvision', '/e/typescript/lib/tsserver.js'] }), 'tsserver');
  assert.equal(classifyProcess({ pid: 6, cmdline: ['/x/openvision', '--type=utility'], extensionHostPid: 6 }), 'extension-host');
  assert.equal(classifyProcess({ pid: 7, cmdline: ['/x/openvision', '--type=utility'], maps: '/m/@parcel/watcher/build/watcher.node' }), 'file-watcher');
  assert.equal(classifyProcess({ pid: 8, cmdline: ['/x/openvision', '/e/css-language-features/server/dist/node/cssServerMain.js'] }), 'css-server');
  assert.equal(classifyProcess({ pid: 9, cmdline: ['app --enable-sandbox --renderer-client-id=4'] }), 'renderer');
  assert.equal(classifyProcess({ pid: 10, cmdline: ['tsserver[6.0.3]: semantic'] }), 'tsserver', 'rewritten title');
  assert.equal(classifyProcess({ pid: 11, cmdline: ['project'], mainPid: 11 }), 'main');
});

test('trace summary isolates marker windows and flags whole-project rescans', async () => {
  const project = '/p', entries = ['a.ts', 'b.ts', 'c.ts', 'd.ts'];
  const lines = [
    '10 1.000 openat(AT_FDCWD, "/p/a.ts", O_RDONLY) = 3',
    '11 2.000 statx(AT_FDCWD, "/d/MARK-small-start", 0) = -1 ENOENT',
    '20 2.100 openat(AT_FDCWD, "/p/a.ts", O_RDONLY <unfinished ...>',
    '20 2.101 <... openat resumed>) = 3',
    '11 3.000 statx(AT_FDCWD, "/d/MARK-small-end", 0) = -1 ENOENT',
    '11 4.000 statx(AT_FDCWD, "/d/MARK-big-start", 0) = -1 ENOENT',
    ...entries.map(entry => `20 4.5 newfstatat(AT_FDCWD, "/p/${entry}", {}, 0) = 0`),
    '21 4.6 inotify_add_watch(5, "/p/pkg", IN_MODIFY) = 9',
    '11 5.000 statx(AT_FDCWD, "/d/MARK-big-end", 0) = -1 ENOENT',
  ];
  const summary = await summarizeTrace(lines, { project, tids: new Map([[20, 'tsserver'], [21, 'file-watcher']]), entries });
  assert.equal(summary.startup.distinct_entries, 1);
  assert.equal(summary.windows.small.distinct_entries, 1);
  assert.equal(summary.windows.small.full_scan, false);
  assert.equal(summary.windows.small.by_kind.tsserver.syscalls, 1, 'resumed lines are not double counted');
  assert.equal(summary.windows.big.full_scan, true);
  assert.equal(summary.windows.big.by_kind['file-watcher'].inotify_add_watch, 1);
  assert.equal(summary.inotify_add_watch_total_by_kind['file-watcher'], 1);
});
