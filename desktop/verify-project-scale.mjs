import assert from 'node:assert/strict';
import { mkdtemp, mkdir, readFile, writeFile, copyFile, readdir, symlink, unlink, rename } from 'node:fs/promises';
import { join, resolve, relative, sep } from 'node:path';
import { setTimeout as delay } from 'node:timers/promises';
import { _electron } from '../tooling/browser.mjs';
import { verificationRuntime } from './verification-runtime.mjs';
import { verificationSettings } from './verification-profile.mjs';
import { fileHash } from './import-files.mjs';
import { enterWorkspace } from './verification-workspace.mjs';

const root = resolve(import.meta.dirname, '..'), { layout, appRoot } = await verificationRuntime(root);
const directory = await mkdtemp(join(root, 'logs/project-scale-verification-'));
const sizes = [100, 10000], filesPerFolder = 100, rounds = 5;
const result = { directory, checkedAt: new Date().toISOString(), platform: process.platform, node: process.version,
  workbenchHash: await fileHash(join(appRoot, 'out/vs/workbench/workbench.desktop.main.js')),
  scope: 'Real native file watcher and extension API, synthetic disposable projects; no AI requests.',
  cases: [], errors: [], limitations: [
    'Watcher notifications are not counts of OS filesystem reads, directory traversals, or watcher handles.',
    'Fresh profiles with warm filesystem caches; sequential single samples are not a cold/warm benchmark.',
    'Electron metrics cover its reported processes. Summed working sets may double-count shared pages; snapshots are not peak process-family memory.',
    'Concurrent desktop workloads, trace logging and the verification driver affect timings. No superiority comparison is established.',
    'No macOS/Linux, physical I/O failure, full-disk failure or crash/power-loss recovery verification.' ] };
let app, page;

async function readOptional(path) {
  return readFile(path, 'utf8').catch(error => { if (error.code !== 'ENOENT') throw error; });
}

async function until(description, read, timeout = 30000) {
  const end = Date.now() + timeout;
  while (Date.now() < end) { const value = await read(); if (value) return value; await delay(50); }
  throw Error(`Timed out waiting for ${description}`);
}

async function prepare(count) {
  const base = join(directory, String(count)), project = join(base, 'project');
  const profile = join(base, 'profile'), driver = join(base, 'driver');
  await Promise.all([mkdir(project, { recursive: true }), mkdir(join(profile, 'User'), { recursive: true }), mkdir(driver, { recursive: true })]);
  // A bounded batch per directory; fixture generation is outside measured application work.
  for (let start = 0; start < count; start += filesPerFolder) {
    const folder = join(project, `group-${String(start / filesPerFolder).padStart(3, '0')}`);
    await mkdir(folder);
    await Promise.all(Array.from({ length: Math.min(filesPerFolder, count - start) }, (_, offset) =>
      writeFile(join(folder, `file-${start + offset}.txt`), `Untouched fixture ${start + offset}\n`)));
  }
  await writeFile(join(profile, 'User/settings.json'), JSON.stringify({ ...verificationSettings,
    'git.enabled': false, 'files.autoSave': 'off', 'window.restoreWindows': 'none',
    'editor.quickSuggestions': false, 'editor.minimap.enabled': false }));
  await writeFile(join(driver, 'package.json'), JSON.stringify({ name: 'openvision-project-scale-verifier',
    publisher: 'openvision-local-verification', version: '0.0.0', engines: { vscode: '^1.90.0' },
    main: './extension.cjs', activationEvents: ['onStartupFinished'] }));
  await copyFile(join(root, 'desktop/verify-project-scale-extension.cjs'), join(driver, 'extension.cjs'));
  return { count, base, project, profile, driver, checks: {}, samples: [], eventWindows: [], timings: [] };
}

async function sample() {
  return app.evaluate(({ app }) => app.getAppMetrics().map(item => ({ pid: item.pid, type: item.type,
    cpuSeconds: item.cpu.cumulativeCPUUsage, workingSetKiB: item.memory.workingSetSize })));
}

async function launch(run) {
  const env = { ...process.env }; delete env.ELECTRON_RUN_AS_NODE;
  const started = performance.now();
  app = await _electron.launch({ executablePath: layout.executable, env, timeout: 60000,
    args: ['--user-data-dir', run.profile, '--extensions-dir', join(run.base, 'extensions'),
      '--extensionDevelopmentPath', run.driver, '--new-window', '--disable-updates', '--disable-telemetry',
      '--disable-crash-reporter', '--skip-welcome', '--skip-release-notes', '--log', 'trace', run.project] });
  page = await app.firstWindow();
  page.on('pageerror', error => result.errors.push(error.message));
  const diagnosticTailLimit = 16384;
  app.process().stderr?.on('data', chunk => { run.stderrTail = ((run.stderrTail ?? '') + chunk).slice(-diagnosticTailLimit); });
  await page.locator('.part.titlebar .openvision-local-profile').waitFor({ state: 'attached', timeout: 60000 }); await enterWorkspace(page);
  await until('watcher driver readiness', () => readOptional(join(run.base, 'ready.json')));
  run.launchToDriverMs = Math.round(performance.now() - started);
  await delay(3000);
}

async function events(run) {
  const text = await readOptional(join(run.base, 'events.jsonl'));
  return (text ?? '').split('\n').slice(0, -1).filter(Boolean).map(line => JSON.parse(line));
}

async function mutate(run, type, path, action) {
  const before = (await events(run)).length, start = performance.now();
  await action();
  await until(`native ${type} for ${path}`, async () => (await events(run)).slice(before)
    .some(event => event.type === type && event.relative === relative(run.project, path)));
  run.timings.push({ type, elapsedMs: Math.round(performance.now() - start) });
}

async function nativeWatcherLines(run) {
  const logRoot = join(run.profile, 'logs');
  const files = (await readdir(logRoot, { recursive: true })).filter(name => /(?:^|[\\/])fileWatcher\.log$/.test(name));
  assert.equal(files.length, 1, 'One native window watcher trace must exist');
  return (await readFile(join(logRoot, files[0]), 'utf8')).split('\n').filter(Boolean);
}

function checkNativeWatchers(run, before, after) {
  // Windows paths are case-insensitive; Linux paths are compared exactly.
  const fold = path => process.platform === 'win32' ? path.toLowerCase() : path;
  const project = fold(run.project), isProject = path => fold(path) === project || fold(path).startsWith(`${project}${sep}`);
  const starts = before.map(line => line.match(/Started watching: '([^']+)' with backend '([^']+)'/))
    .filter(match => match && isProject(match[1])).map(match => ({ path: match[1], backend: match[2] }));
  assert.ok(starts.length > 0, 'Native recursive project watcher must start');
  assert.deepEqual([...new Set(starts.map(item => fold(item.path)))], [project]);
  const changes = after.slice(before.length).filter(line => /Started watching:|stopping file watcher/.test(line)
    && fold(line).includes(project));
  assert.deepEqual(changes, [], 'Edits must not restart the recursive project watcher');
  run.nativeWatcher = { initialStarts: starts, distinctProjectPaths: 1, restartsDuringEdits: changes.length };
  run.checks.shared_recursive_watcher_remains_active_during_edits = true;
}

async function exercise(run) {
  run.samples.push({ phase: 'before', metrics: await sample() });
  const watcherBefore = await nativeWatcherLines(run);
  const before = (await events(run)).length;
  const target = join(run.project, 'group-000', 'incremental.txt');
  for (let round = 0; round < rounds; round++) {
    await mutate(run, 'create', target, () => writeFile(target, `Created ${round}\n`));
    await mutate(run, 'change', target, () => writeFile(target, `Changed ${round}\n`));
    await mutate(run, 'delete', target, () => unlink(target));
  }
  await delay(1000);
  const received = (await events(run)).slice(before);
  assert.ok(received.length >= rounds * 3);
  assert.ok(received.every(event => event.relative === relative(run.project, target)), 'No unrelated fixture notifications');
  run.eventWindows.push({ phase: 'mutations', total: received.length,
    byType: Object.fromEntries(['create', 'change', 'delete'].map(type => [type, received.filter(event => event.type === type).length])) });
  run.checks.incremental_create_change_delete = true;
  run.checks.no_unrelated_file_notifications = true;
  run.samples.push({ phase: 'after', metrics: await sample() });
  checkNativeWatchers(run, watcherBefore, await nativeWatcherLines(run));
  assert.equal(await readFile(join(run.project, 'group-000/file-0.txt'), 'utf8'), 'Untouched fixture 0\n');
  run.checks.unrelated_file_preserved = true;
}

async function finish(run) {
  const target = join(run.base, 'symlink-target.txt'), link = join(run.project, 'file-link.txt');
  await writeFile(target, 'Original file symlink target\n');
  let config = {};
  try { await symlink(target, link, 'file'); config = { target, link }; }
  catch (error) {
    if (!['EPERM', 'EACCES', 'ENOTSUP'].includes(error.code)) throw error;
    run.fileSymlinkUnavailable = { code: error.code, reason: 'Host did not authorize creating a file symlink.' };
  }
  await writeFile(join(run.base, 'finish.json.tmp'), JSON.stringify(config));
  await rename(join(run.base, 'finish.json.tmp'), join(run.base, 'finish.json'));
  const native = JSON.parse(await until('native driver completion', () => readOptional(join(run.base, 'extension-result.json'))));
  assert.equal(native.error, undefined, native.error);
  Object.assign(run.checks, native.checks);
  await page.screenshot({ path: join(run.base, 'native-project.png') });
}

async function close(run) {
  if (!app) return;
  const child = app.process(); await app.close(); app = undefined;
  run.exitCode = child.exitCode; assert.equal(child.exitCode, 0);
}

async function traces(run) {
  const logRoot = join(run.profile, 'logs');
  const files = (await readdir(logRoot, { recursive: true })).filter(name => name.endsWith('.log'));
  const summaries = [];
  for (const file of files) {
    const path = join(logRoot, file), lines = (await readFile(path, 'utf8')).split('\n');
    const watcherLines = lines.filter(line => /File Watcher|FileWatcher|watcher service/i.test(line));
    if (!watcherLines.length) continue;
    const retained = join(run.base, `watcher-trace-${summaries.length}.txt`);
    await writeFile(retained, watcherLines.join('\n'));
    summaries.push({ source: path, sha256: await fileHash(path), retained, lines: watcherLines.length });
  }
  run.watcherTraces = summaries;
}

try {
  for (const count of sizes) {
    const run = await prepare(count); result.cases.push(run);
    try { await launch(run); await exercise(run); await finish(run); }
    finally { await close(run); await traces(run); }
  }
  assert.deepEqual(result.errors, []);
  result.status = 'passed';
} catch (error) {
  result.status = 'failed'; result.error = error.stack; process.exitCode = 1;
  await page?.screenshot({ path: join(directory, 'failure.png') }).catch(() => {});
} finally {
  await close(result.cases.at(-1) ?? {}).catch(error => { result.cleanupError = String(error); process.exitCode = 1; });
  await writeFile(join(directory, 'result.json'), JSON.stringify(result, null, 2));
  console.log(JSON.stringify({ directory, status: result.status, error: result.error,
    cases: result.cases.map(run => ({ count: run.count, checks: run.checks, events: run.eventWindows,
      nativeWatcher: run.nativeWatcher, fileSymlinkUnavailable: run.fileSymlinkUnavailable, exitCode: run.exitCode })) }, null, 2));
}
