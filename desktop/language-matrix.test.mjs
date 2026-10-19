import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { languageMatrix, matrixFixtures, LARGE_LINES, LARGE_MODULES, classifyProcess, summarizeTrace, largeProjectFixtures,
  largeTsconfig, largePackageJson, entryGroup, isEditWindow, attributeWindows, evaluateLargeProject, largeProjectBudget } from './language-matrix.mjs';

const root = resolve(import.meta.dirname, '..');

test('matrix declares every bundled language-server family and keeps claims disjoint', () => {
  const languages = languageMatrix.map(entry => entry.language);
  for (const name of ['typescript', 'javascript', 'json', 'css', 'html', 'markdown', 'python', 'c/c++', 'go', 'rust'])
    assert.ok(languages.includes(name), name);
  for (const entry of languageMatrix) {
    assert.ok(entry.verified.every(feature => !entry.notProvided.includes(feature)), entry.language);
    if (!entry.server) assert.deepEqual(entry.verified, [], `${entry.language} has no bundled server`);
    if (!entry.server) assert.ok(entry.syntaxOnly || entry.pinnedSetup, `${entry.language} declares syntax-only or a pinned setup`);
  }
  assert.deepEqual(languageMatrix.filter(entry => entry.syntaxOnly).map(entry => entry.language), ['python', 'go', 'rust']);
  const cpp = languageMatrix.find(entry => entry.language === 'c/c++');
  assert.deepEqual(cpp.pinnedSetup.platforms, ['win32-x64', 'linux-x64']);
  assert.equal(cpp.pinnedSetup.verifier, 'verify:cpp');
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

test('large-project fixture has 5,000+ program modules, dependency trees and changed configs', () => {
  const fixtures = largeProjectFixtures();
  const program = Object.keys(fixtures).filter(name => name.startsWith('src/') && name.endsWith('.ts'));
  assert.ok(program.length >= LARGE_MODULES && LARGE_MODULES >= 5000, `${program.length} modules`);
  assert.ok(Object.keys(fixtures).filter(name => name.startsWith('node_modules/')).length >= 1000);
  assert.deepEqual(JSON.parse(fixtures['tsconfig.json']).include, ['src/**/*.ts']);
  assert.notEqual(largeTsconfig(true), fixtures['tsconfig.json']);
  assert.ok(JSON.parse(largePackageJson(true)).dependencies['dep-c']);
  assert.match(fixtures['src/use.ts'], /depNew/, 'dependency change has an observable diagnostic');
  for (const name of ['src/m00/f000.ts', 'src/m49/f099.ts']) assert.ok(fixtures[name], name);
  assert.equal(entryGroup('src/m00/f000.ts'), 'program');
  assert.equal(entryGroup('node_modules/dep-a/index.d.ts'), 'node_modules');
  assert.equal(isEditWindow('ts-edit-1'), true);
  assert.equal(isEditWindow('dependency-change'), false);
  assert.equal(isEditWindow('tsconfig-change'), false);
});

test('window attribution uses per-process CPU deltas, in-window RSS peaks and watch totals', () => {
  const sample = (at, tsCpu, tsRss, watches, extra = []) => ({ at, processes: [
    { pid: 1, kind: 'tsserver', cpu_ticks: tsCpu, rss_kib: tsRss, inotify_watches: 0 },
    { pid: 2, kind: 'main', cpu_ticks: 10, rss_kib: 1024, inotify_watches: watches }, ...extra] });
  const timeline = [sample(1000, 100, 2048, 50), sample(2000, 150, 4096, 60,
    [{ pid: 3, kind: 'tsserver', cpu_ticks: 5, rss_kib: 1024, inotify_watches: 0 }]), sample(3000, 160, 2048, 70)];
  const measured = attributeWindows({ windows: { edit: { started_at: 1000, ended_at: 2000, elapsed_ms: 1000, diagnostic_update_ms: 7 } },
    timeline, clockTicks: 100, maxUserWatches: 1000,
    trace: { edit: { distinct_entries: 2, pkg_entries: 1, node_modules_entries: 0, project_syscalls: 9,
      by_kind: { main: { inotify_add_watch: 3 }, tsserver: { inotify_add_watch: 0 } } } } });
  const window = measured.windows.edit;
  assert.equal(window.cpu_ms.tsserver, 550, '50 ticks from pid 1 plus 5 from a new pid');
  assert.equal(window.peak_rss_mib.tsserver, 5);
  assert.equal(window.distinct_entries, 2);
  assert.equal(window.inotify_add_watch, 3);
  assert.equal(window.diagnostic_update_ms, 7);
  assert.equal(measured.cpu_ms_total.tsserver, 550);
  assert.equal(measured.peak_inotify_watches, 70);
  assert.equal(measured.peak_watch_fraction, 0.07);
});

test('large-project budgets fail on excess and on missing measurements', () => {
  const measurement = { windows: { 'ts-edit-1': { distinct_entries: 3, cpu_ms: { tsserver: 100 } } },
    peak_rss_mib: { tsserver: 500 }, peak_inotify_watches: 10, peak_watch_fraction: 0.1, first_diagnostics_ms: 1000 };
  const budget = { windows: { 'ts-edit-1': { distinct_entries: 3, cpu_ms: { tsserver: 150 } } }, peak_rss_mib: { tsserver: 600 },
    peak_inotify_watches: 20, peak_watch_fraction: 0.2, first_diagnostics_ms: 2000 };
  assert.deepEqual(evaluateLargeProject(measurement, budget), []);
  assert.deepEqual(evaluateLargeProject({ ...measurement, peak_inotify_watches: 21 }, budget), ['peak_inotify_watches 21 > 20']);
  assert.deepEqual(evaluateLargeProject({ ...measurement, windows: {} }, budget), ['ts-edit-1: window missing']);
  assert.deepEqual(evaluateLargeProject({ ...measurement, first_diagnostics_ms: undefined }, budget), ['first_diagnostics_ms: not measured']);
  assert.deepEqual(evaluateLargeProject({ ...measurement, cpu_ms_total: { tsserver: 900 } }, { ...budget, cpu_ms_total: { tsserver: 800 } }),
    ['cpu_ms_total.tsserver 900 > 800']);
});

test('large-project budgets are declared for every measured window with a recorded derivation', () => {
  assert.match(largeProjectBudget.derivation, /x 1\.5/);
  assert.deepEqual(Object.keys(largeProjectBudget.windows), ['idle', 'ts-edit-1', 'ts-edit-2', 'ts-save', 'dependency-change',
    'dependency-install', 'tsconfig-change', 'ts-edit-after-reload']);
  for (const [name, window] of Object.entries(largeProjectBudget.windows)) {
    assert.ok(window.distinct_entries < 0.5 * LARGE_MODULES, `${name} stays far below a program rescan`);
  }
  assert.ok(largeProjectBudget.cpu_ms_total.tsserver > 0 && largeProjectBudget.cpu_ms_total['extension-host'] > 0);
  assert.ok(largeProjectBudget.peak_watch_fraction < 1);
});
