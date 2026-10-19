// OV-402 language matrix verifier. Launches the assembled desktop with a
// disposable profile/project and the bundled language extensions only. On Linux,
// when strace is available, the owned process family runs under a file-syscall
// trace so the result can show whether small edits trigger whole-project rescans.
import assert from 'node:assert/strict';
import { mkdir, mkdtemp, writeFile, readFile, copyFile, readdir, chmod, access } from 'node:fs/promises';
import { createReadStream } from 'node:fs';
import { createInterface } from 'node:readline';
import { dirname, join, resolve, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { _electron } from '../tooling/browser.mjs';
import { loadRuntime } from './source-assembly.mjs';
import { fileHash } from './import-files.mjs';
import { verificationSettings } from './verification-profile.mjs';
import { linuxSandboxArguments } from './platform.mjs';
import { enterWorkspace } from './verification-workspace.mjs';
import { spawnSync } from 'node:child_process';
import { languageMatrix, matrixFixtures, scanBudget, responsivenessBudget, classifyProcess, summarizeTrace,
  largeProjectFixtures, largePackageJson, largeTsconfig, largeProjectBudget, attributeWindows, evaluateLargeProject, isEditWindow } from './language-matrix.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const { layout } = await loadRuntime(root);
await mkdir(join(root, 'logs'), { recursive: true });
const large = process.argv.includes('--large-project');
const directory = await mkdtemp(join(root, large ? 'logs/language-matrix-large-' : 'logs/language-matrix-'));
const profile = join(directory, 'profile'), project = join(directory, 'project'), extension = join(directory, 'driver');
await Promise.all([mkdir(join(profile, 'User'), { recursive: true }), mkdir(project), mkdir(extension)]);
await writeFile(join(profile, 'User/settings.json'), JSON.stringify({ ...verificationSettings,
  'editor.quickSuggestions': false, 'git.openRepositoryInParentFolders': 'never', 'git.enabled': false,
  'typescript.disableAutomaticTypeAcquisition': true, 'typescript.tsserver.log': 'off',
  'typescript.format.enable': true, 'javascript.format.enable': true, 'json.schemaDownload.enable': false,
  'markdown.validate.enabled': true, 'editor.formatOnSave': false, 'editor.detectIndentation': false,
  'editor.tabSize': 2, 'editor.insertSpaces': true, 'files.autoSave': 'off', 'files.eol': '\n',
  'files.insertFinalNewline': false, 'html.format.endWithNewline': true, 'window.restoreWindows': 'none',
  'workbench.editor.enablePreview': false, 'editor.rename.enablePreview': false }));
const fixtures = large ? largeProjectFixtures() : matrixFixtures();
const only = process.argv.find(arg => arg.startsWith('--only='))?.slice(7).split(',');
await writeFile(join(directory, 'mode.json'), JSON.stringify({ mode: large ? 'large-project' : 'matrix', only,
  fixture: large ? { package_json_changed: largePackageJson(true), tsconfig_changed: largeTsconfig(true) } : null }));
for (const [name, content] of Object.entries(fixtures)) {
  await mkdir(dirname(join(project, name)), { recursive: true });
  await writeFile(join(project, name), content);
}
await writeFile(join(extension, 'package.json'), JSON.stringify({ name: 'openvision-language-matrix-verifier',
  publisher: 'openvision-local-verification', version: '0.0.0', engines: { vscode: '^1.90.0' },
  main: './extension.cjs', activationEvents: ['onStartupFinished'] }));
await copyFile(join(root, 'desktop/verify-language-matrix-extension.cjs'), join(extension, 'extension.cjs'));
await copyFile(join(root, 'desktop/verify-language-cross-file.cjs'), join(extension, 'cross-file.cjs'));

const identityPaths = ['build/source-build.json', 'source/app/out/vs/workbench/workbench.desktop.main.js',
  'source/app/out/vs/workbench/api/node/extensionHostProcess.js',
  'source/app/extensions/node_modules/typescript/lib/typescript.js',
  ...languageMatrix.flatMap(entry => entry.extension ? [`source/app/extensions/${entry.extension}/package.json`] : []),
  'desktop/verify-language-matrix-extension.cjs', 'desktop/verify-language-cross-file.cjs', 'desktop/language-matrix.mjs'];
const identities = Object.fromEntries(await Promise.all([...new Set(identityPaths)].map(async path => [path, await fileHash(join(root, path))])));
const pinned = {};
for (const entry of languageMatrix) {
  if (!entry.extension) continue;
  const manifest = JSON.parse(await readFile(join(root, 'source/app/extensions', entry.extension, 'package.json'), 'utf8'));
  pinned[entry.extension] = manifest.version;
  assert.equal(manifest.version, entry.version, `${entry.extension} version drifted from the pinned matrix`);
}
const typescriptVersion = JSON.parse(await readFile(join(root, 'source/app/extensions/node_modules/typescript/package.json'), 'utf8')).version;
const result = { checked_at: new Date().toISOString(), directory, mode: large ? 'large-project' : 'matrix',
  ...(only ? { only, partial: 'Development filter: not an acceptance run' } : {}), platform: process.platform, arch: process.arch,
  launcher_node: process.version, executable_sha256: await fileHash(layout.executable), identities,
  pinned_extensions: pinned, typescript: typescriptVersion, project_entries: Object.keys(fixtures).length,
  limitations: ['Public-API driver plus native rename widget; the only registered provider is the private .ovconflict race probe.',
    'Timings are single local observations on this machine, not cross-machine guarantees.',
    'Trace counts cover file-path syscalls of the owned process family; content reads through already-open descriptors are not path-attributed.'] };

let trace = null;
try { if (process.platform === 'linux' && process.env.OPENVISION_LANGUAGE_TRACE !== '0') { await access('/usr/bin/strace'); trace = join(directory, 'fs.trace'); } }
catch { trace = null; }
let executable = layout.executable;
if (trace) {
  executable = join(directory, 'traced-openvision.sh');
  await writeFile(executable, `#!/bin/sh\nexec /usr/bin/strace -f -qq --seccomp-bpf -ttt -s 1024 -e signal=none ` +
    `-e trace=openat,open,stat,lstat,newfstatat,statx,access,faccessat,faccessat2,readlink,readlinkat,inotify_add_watch,inotify_rm_watch,execve,unlink,rename,renameat2 ` +
    `-o '${trace}' -- '${layout.executable}' "$@"\n`);
  await chmod(executable, 0o755);
}

let app, page, rootPid, mainPid;
const errors = [], rtt = [], memory = [], processes = new Map(), timeline = [];
const optional = async name => JSON.parse(await readFile(join(directory, `${name}.json`), 'utf8').catch(() => 'null'));

async function family() {
  if (process.platform !== 'linux' || !rootPid) return [];
  const parents = new Map();
  for (const name of await readdir('/proc')) {
    if (!/^\d+$/.test(name)) continue;
    const stat = await readFile(`/proc/${name}/stat`, 'utf8').catch(() => null);
    if (stat) parents.set(Number(name), Number(stat.slice(stat.lastIndexOf(')') + 2).split(' ')[1]));
  }
  const owned = new Set([rootPid]);
  for (let grew = true; grew;) { grew = false;
    for (const [pid, parent] of parents) if (!owned.has(pid) && owned.has(parent)) { owned.add(pid); grew = true; } }
  // Under strace the Electron main process is the tracer's direct child.
  mainPid = trace ? [...owned].find(pid => parents.get(pid) === rootPid) : rootPid;
  return [...owned];
}

async function inspectFamily(label) {
  const snapshot = [];
  for (const pid of await family()) {
    const cmdline = (await readFile(`/proc/${pid}/cmdline`, 'utf8').catch(() => '')).split('\0').filter(Boolean);
    if (!cmdline.length) continue;
    const maps = await readFile(`/proc/${pid}/maps`, 'utf8').catch(() => '');
    const status = await readFile(`/proc/${pid}/status`, 'utf8').catch(() => '');
    const stat = await readFile(`/proc/${pid}/stat`, 'utf8').catch(() => '');
    const fields = stat.slice(stat.lastIndexOf(')') + 2).split(' ');
    const tasks = (await readdir(`/proc/${pid}/task`).catch(() => [])).map(Number);
    let inotify = 0, watches = 0;
    for (const fd of await readdir(`/proc/${pid}/fdinfo`).catch(() => [])) {
      const info = await readFile(`/proc/${pid}/fdinfo/${fd}`, 'utf8').catch(() => '');
      const count = info.split('\n').filter(line => line.startsWith('inotify wd:')).length;
      if (count || /inotify/.test(info)) { inotify += info.includes('inotify') ? 1 : 0; watches += count; }
    }
    const kind = classifyProcess({ pid, cmdline, maps, extensionHostPid: (await optional('driver-ready'))?.pid, mainPid });
    const entry = { pid, kind, argv0: cmdline[0].split('/').at(-1), type: cmdline.find(arg => arg.startsWith('--type='))?.slice(7),
      script: cmdline.find(arg => /\.(c?js|mjs)$/.test(arg))?.split('/').slice(-3).join('/'),
      rss_kib: Number(status.match(/VmRSS:\s+(\d+)/)?.[1] ?? 0), cpu_ticks: Number(fields[11] ?? 0) + Number(fields[12] ?? 0),
      inotify_instances: inotify, inotify_watches: watches };
    snapshot.push(entry);
    const known = processes.get(pid) ?? { ...entry, tids: new Set() };
    Object.assign(known, { ...entry, tids: known.tids });
    for (const tid of tasks) known.tids.add(tid);
    processes.set(pid, known);
  }
  return { label, at: Date.now(), processes: snapshot };
}

async function fillRename(submitted) {
  const phase = await optional('phase');
  if (!phase || submitted.has(phase.mode)) return;
  const input = page.locator('.rename-box input').filter({ visible: true });
  if (await input.count()) { await input.fill('renamed'); await input.press('Enter'); submitted.add(phase.mode); }
}

try {
  const env = { ...process.env }; delete env.ELECTRON_RUN_AS_NODE;
  app = await _electron.launch({ executablePath: executable, env, timeout: 90000,
    args: ['--user-data-dir', profile, '--extensions-dir', join(directory, 'extensions'),
      '--extensionDevelopmentPath', extension, '--new-window', '--disable-updates', '--skip-welcome',
      '--skip-release-notes', '--disable-telemetry', '--disable-crash-reporter',
      ...(process.platform === 'linux' ? await linuxSandboxArguments(layout.host) : []), project] });
  rootPid = app.process().pid;
  page = await app.firstWindow();
  page.on('pageerror', error => errors.push(error.message));
  await page.locator('.part.titlebar .openvision-local-profile').waitFor({ state: 'attached', timeout: 90000 });
  await enterWorkspace(page);
  const submitted = new Set(), snapshots = [];
  const deadline = Date.now() + 900000;
  let lastMemory = 0, sawReady = false, sawScan = false;
  while (Date.now() < deadline) {
    result.native = await optional('extension-result');
    if (result.native) break;
    const started = performance.now();
    await page.evaluate(() => 0);
    rtt.push(performance.now() - started);
    await fillRename(submitted);
    if (Date.now() - lastMemory > (large ? 500 : 1000)) {
      lastMemory = Date.now();
      const sample = await inspectFamily('periodic');
      memory.push(sample.processes.reduce((sum, item) => sum + item.rss_kib, 0));
      if (large) timeline.push({ at: sample.at, processes: sample.processes.map(({ pid, kind, rss_kib, cpu_ticks, inotify_watches }) =>
        ({ pid, kind, rss_kib, cpu_ticks, inotify_watches })) });
      if (!sawReady && await optional('driver-ready')) { sawReady = true; snapshots.push({ ...sample, label: 'driver-ready' }); }
      if (!sawScan && await optional('scan-complete')) { sawScan = true; snapshots.push({ ...sample, label: 'scan-complete' }); }
    }
    await page.waitForTimeout(200);
  }
  assert.ok(result.native, 'Native matrix driver must finish');
  snapshots.push(await inspectFamily('final'));
  result.process_snapshots = snapshots;
  const sorted = [...rtt].sort((a, b) => a - b);
  result.renderer_round_trip = { samples: sorted.length, p50_ms: Math.round(sorted[Math.floor(sorted.length / 2)] ?? 0),
    p95_ms: Math.round(sorted[Math.floor(sorted.length * 0.95)] ?? 0), max_ms: Math.round(sorted.at(-1) ?? 0) };
  result.peak_family_rss_mib = Math.round(Math.max(0, ...memory) / 1024);
  for (const path of Object.keys(identities)) assert.equal(await fileHash(join(root, path)), identities[path], `Input changed: ${path}`);
  result.input_build_unchanged = true;
  await page.screenshot({ path: join(directory, 'language-matrix.png') }).catch(() => {});
  result.success = result.native.success === true && !only;
  if (!result.success) result.failure = result.native.failure ?? `Failed cases: ${result.native.failures?.join(', ')}`;
} catch (error) {
  result.success = false; result.failure = error.stack;
  if (page) await page.screenshot({ path: join(directory, 'failure.png') }).catch(() => {});
} finally {
  if (app) {
    const child = app.process();
    await app.close();
    result.host_exit = { code: child.exitCode, signal: child.signalCode };
    if (child.exitCode !== 0) { result.success = false; result.cleanup_failure = 'Native host did not exit 0'; }
  }
  result.page_errors = errors;
  if (errors.length) { result.success = false; result.failure ??= 'Renderer page errors'; }
  if (trace) {
    try {
      const lines = createInterface({ input: createReadStream(trace), crlfDelay: Infinity });
      const tids = new Map();
      for (const item of processes.values()) for (const tid of item.tids) tids.set(tid, item.kind);
      result.filesystem = await summarizeTrace(lines, { project, tids, entries: Object.keys(fixtures) });
      result.filesystem.trace_sha256 = await fileHash(trace);
      const scan = result.filesystem.windows;
      result.budgets = { scan: scanBudget, responsiveness: responsivenessBudget, violations: [] };
      for (const [name, window] of Object.entries(scan)) {
        if (window.full_scan && isEditWindow(name)) result.budgets.violations.push(`${name}: touched ${window.distinct_entries}/${result.project_entries} project entries`);
      }
      if (!Object.keys(scan).length) result.budgets.violations.push('No trace windows were found');
    } catch (error) { result.success = false; result.failure ??= error.stack; }
  } else result.filesystem = { traced: false, reason: 'strace unavailable or disabled; filesystem scan counts not measured' };
  if (large && result.native?.scan_windows) {
    try {
      const clockTicks = Number(spawnSync('getconf', ['CLK_TCK'], { encoding: 'utf8' }).stdout.trim()) || 100;
      const maxUserWatches = Number((await readFile('/proc/sys/fs/inotify/max_user_watches', 'utf8')).trim());
      result.large_project = attributeWindows({ windows: result.native.scan_windows, timeline, clockTicks, maxUserWatches,
        trace: result.filesystem?.windows ?? {} });
      result.large_project.first_diagnostics_ms = result.native.large_project?.first_diagnostics_ms;
      result.large_project.budget = largeProjectBudget;
      const violations = evaluateLargeProject(result.large_project, largeProjectBudget);
      result.large_project.violations = violations;
      if (violations.length) (result.budgets ??= { violations: [] }).violations.push(...violations);
    } catch (error) { result.success = false; result.failure ??= error.stack; }
  }
  if (result.renderer_round_trip?.p95_ms > responsivenessBudget.renderer_round_trip_p95_ms)
    (result.budgets ??= { violations: [] }).violations.push(`renderer round-trip p95 ${result.renderer_round_trip.p95_ms} ms`);
  for (const [key, value] of Object.entries(result.native?.cases ?? {})) {
    if (!key.endsWith('.large_file') || value.status !== 'pass') continue;
    for (const metric of ['first_diagnostic_ms', 'edit_clear_ms', 'symbols_ms'])
      if (value[metric] > responsivenessBudget.large_file_ms) (result.budgets ??= { violations: [] }).violations.push(`${key}.${metric} ${value[metric]} ms`);
  }
  if (result.budgets?.violations.length) { result.success = false; result.failure ??= `Budget violations: ${result.budgets.violations.join('; ')}`; }
  result.summary = Object.fromEntries(Object.entries(result.native?.cases ?? {}).map(([key, value]) => [key, value.status]));
  await writeFile(join(directory, 'result.json'), JSON.stringify(result, (key, value) => value instanceof Set ? [...value] : value, 2));
  console.log(JSON.stringify({ success: result.success, directory, failure: result.failure, summary: result.summary,
    budgets: result.budgets, renderer_round_trip: result.renderer_round_trip, peak_family_rss_mib: result.peak_family_rss_mib,
    filesystem: result.filesystem?.windows ?? result.filesystem, large_project: result.large_project }, (key, value) => value instanceof Set ? [...value] : value, 2));
  process.exitCode = result.success ? 0 : 1;
}
