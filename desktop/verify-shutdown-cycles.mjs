import assert from 'node:assert/strict';
import { createServer } from 'node:net';
import { createHash, randomUUID } from 'node:crypto';
import { execFileSync, spawn } from 'node:child_process';
import { once } from 'node:events';
import { copyFile, mkdir, mkdtemp, readFile, readdir, readlink, writeFile } from 'node:fs/promises';
import { release, tmpdir } from 'node:os';
import { realpathSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { _electron } from '../tooling/browser.mjs';
import { verificationRuntime } from './verification-runtime.mjs';
import { verificationSettings } from './verification-profile.mjs';
import { linuxSandboxArguments } from './platform.mjs';
import { fileHash } from './import-files.mjs';
import { enterWorkspace } from './verification-workspace.mjs';

// Repeated close/restart and abrupt exit with active terminal children, running
// build/watch tasks and the Node debugger. Linux process identities come from
// /proc; every fixture reports to a nonce-authenticated socket and is ended only
// through it. Read-only inventory: the run nonce in the inherited environment or
// membership of the owned host's process group. No AI requests are sent.
assert.equal(process.platform, 'linux', 'This shutdown-cycle verifier covers Linux process identity');
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const { layout, appRoot } = await verificationRuntime(root);
const scenario = process.argv.find(argument => argument.startsWith('--cycles='))?.slice('--cycles='.length).split(',') ??
  ['close-app', 'close-window', 'close-app', 'close-window', 'kill-main', 'close-app', 'kill-group', 'close-window', 'close-app'];
for (const mode of scenario) assert.ok(['close-app', 'close-window', 'kill-main', 'kill-group'].includes(mode), `Unknown cycle ${mode}`);
await mkdir(join(root, 'logs'), { recursive: true });
const directory = await mkdtemp(join(root, 'logs/shutdown-cycles-'));
const project = join(directory, 'project'), profile = join(directory, 'profile'), driver = join(directory, 'driver');
await Promise.all([mkdir(join(project, '.vscode'), { recursive: true }), mkdir(join(profile, 'User'), { recursive: true }),
  mkdir(driver), mkdir(join(directory, 'rpc')), mkdir(join(directory, 'screens'))]);
const fixture = join(directory, 'fixture.cjs');
await copyFile(join(root, 'desktop/verify-shutdown-cycles-fixture.cjs'), fixture);
await writeFile(join(project, 'watch.c'), 'int main() {\n  return 0;\n}\n');
const tasksJson = { version: '2.0.0', tasks: [
  { label: 'ov-build', type: 'shell', command: 'node', args: [fixture, 'build', 'build'], group: 'build', problemMatcher: [] },
  { label: 'ov-watch', type: 'shell', command: 'node', args: [fixture, 'watch', 'watch'], isBackground: true,
    problemMatcher: { owner: 'ov-watch', fileLocation: 'absolute',
      pattern: { regexp: '^(.+):(\\d+):(\\d+): (error|warning): (.*)$', file: 1, line: 2, column: 3, severity: 4, message: 5 },
      background: { activeBegins: true, beginsPattern: '^\\[watch\\] build started', endsPattern: '^\\[watch\\] build finished' } } }] };
const launchJson = { version: '0.2.0', configurations: [{ type: 'pwa-node', request: 'launch', name: 'ov-debug',
  program: fixture, args: ['tree', 'debuggee'], runtimeExecutable: process.execPath, console: 'internalConsole',
  skipFiles: ['<node_internals>/**'] }] };
await writeFile(join(project, '.vscode/tasks.json'), JSON.stringify(tasksJson, null, 2));
await writeFile(join(project, '.vscode/launch.json'), JSON.stringify(launchJson, null, 2));
const definitions = { tasks: await fileHash(join(project, '.vscode/tasks.json')), launch: await fileHash(join(project, '.vscode/launch.json')) };
// Persistent sessions keep their default (enabled, revive on exit); only prompts
// and shell start-up files are made deterministic.
await writeFile(join(profile, 'User/settings.json'), JSON.stringify({ ...verificationSettings,
  'git.enabled': false, 'editor.accessibilitySupport': 'on', 'terminal.integrated.gpuAcceleration': 'off',
  'terminal.integrated.confirmOnExit': 'never', 'terminal.integrated.confirmOnKill': 'never',
  'terminal.integrated.shellIntegration.enabled': false,
  'terminal.integrated.profiles.linux': { 'ov-bash': { path: '/bin/bash', args: ['--noprofile', '--norc'] } },
  'terminal.integrated.defaultProfile.linux': 'ov-bash',
  'task.problemMatchers.neverPrompt': true, 'debug.openDebug': 'neverOpen', 'window.dialogStyle': 'custom',
  'workbench.startupEditor': 'none' }));
await writeFile(join(driver, 'package.json'), JSON.stringify({ name: 'openvision-shutdown-verifier',
  publisher: 'openvision-local-verification', version: '0.0.0', engines: { vscode: '^1.90.0' },
  main: './extension.cjs', activationEvents: ['onStartupFinished'] }));
await copyFile(join(root, 'desktop/verify-shutdown-cycles-extension.cjs'), join(driver, 'extension.cjs'));

const runId = randomUUID(), token = randomUUID();
// The owned-process journal of this installation (read-only inspection).
const journalDirectory = join(tmpdir(), `openvision-owned-processes-${process.getuid()}-${
  createHash('sha256').update(realpathSync(appRoot)).digest('hex').slice(0, 16)}`);
const identity = { commit: execFileSync('git', ['rev-parse', 'HEAD'], { cwd: root, encoding: 'utf8' }).trim(),
  dirty: execFileSync('git', ['status', '--porcelain'], { cwd: root, encoding: 'utf8' }).split('\n').filter(Boolean),
  platform: process.platform, arch: process.arch, osRelease: release(), node: process.version,
  session: process.env.XDG_SESSION_TYPE, desktop: process.env.XDG_CURRENT_DESKTOP,
  hashes: Object.fromEntries(await Promise.all([
    ['host', layout.executable], ['verifier', fileURLToPath(import.meta.url)], ['main', join(appRoot, 'out/main.js')],
    ['ptyHost', join(appRoot, 'out/vs/platform/terminal/node/ptyHostMain.js')],
    ['workbench', join(appRoot, 'out/vs/workbench/workbench.desktop.main.js')],
    ['jsDebug', join(appRoot, 'extensions/ms-vscode.js-debug/src/extension.js')],
  ].map(async ([name, path]) => [name, await fileHash(path).catch(() => null)]))) };

// Fixture identity channel.
const fixtures = new Map();
const server = createServer(socket => {
  socket.setEncoding('utf8'); let buffer = '';
  socket.on('error', () => {});
  socket.on('data', chunk => {
    buffer += chunk;
    if (buffer.length > 4096) return socket.destroy();
    if (!buffer.includes('\n') || socket.identified) return;
    let message; try { message = JSON.parse(buffer.slice(0, buffer.indexOf('\n'))); } catch { return socket.destroy(); }
    if (message.token !== token || fixtures.has(message.name)) return socket.destroy();
    socket.identified = true;
    const entry = { ...message, token: undefined, socket, connectedAt: Date.now(), closedAt: null };
    entry.closed = new Promise(resolve => socket.on('close', () => { entry.closedAt = Date.now(); resolve(entry.closedAt); }));
    fixtures.set(message.name, entry);
  });
});
await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
await writeFile(join(directory, 'fixture-config.json'), JSON.stringify({ port: server.address().port, token, project }));
await writeFile(join(directory, 'cycle.txt'), '0');
const pause = ms => new Promise(resolve => setTimeout(resolve, ms));
async function fixtureNamed(name, timeout = 30000) {
  const deadline = Date.now() + timeout;
  while (Date.now() < deadline) { if (fixtures.has(name)) return fixtures.get(name); await pause(100); }
  throw new Error(`Fixture ${name} did not report`);
}
const exitedWithin = (entry, ms) => Promise.race([entry.closed.then(() => true), pause(ms).then(() => false)]);

// An external process outside the application: must never be ended by the app.
const sentinelEnv = { ...process.env }; delete sentinelEnv.OPENVISION_SHUTDOWN_RUN;
const sentinel = spawn(process.execPath, [fixture, 'plain', 'sentinel-c0'], { stdio: 'ignore', env: sentinelEnv });
await fixtureNamed('sentinel-c0');

function procStat(pid) {
  try {
    const text = execFileSync('cat', [`/proc/${pid}/stat`], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] });
    const fields = text.slice(text.lastIndexOf(')') + 2).split(' ');
    return { pid, comm: text.slice(text.indexOf('(') + 1, text.lastIndexOf(')')), state: fields[0],
      ppid: Number(fields[1]), pgid: Number(fields[2]), sid: Number(fields[3]), start: fields[19] };
  } catch { return undefined; }
}
async function readProc(pid, name, encoding = 'utf8') { try { return await readFile(`/proc/${pid}/${name}`, encoding); } catch { return ''; } }
// Read-only inventory of this run's process family.
// Terminal masters are /dev/ptmx descriptors; a process outside the pty host that
// holds one keeps that terminal's session from receiving its hangup.
async function masters(pid) {
  let count = 0;
  for (const fd of await readdir(`/proc/${pid}/fd`).catch(() => []))
    if (await readlink(`/proc/${pid}/fd/${fd}`).catch(() => '') === '/dev/ptmx') count++;
  return count;
}
async function family(groups = [], withMasters = false) {
  const result = [];
  for (const entry of await readdir('/proc')) {
    if (!/^\d+$/.test(entry) || Number(entry) === process.pid) continue;
    const stat = await readProc(entry, 'stat'); if (!stat) continue;
    const fields = stat.slice(stat.lastIndexOf(')') + 2).split(' ');
    const pgid = Number(fields[2]);
    const environment = await readProc(entry, 'environ', 'latin1');
    const byNonce = environment.includes(`OPENVISION_SHUTDOWN_RUN=${runId}`), byGroup = groups.includes(pgid);
    if (!byNonce && !byGroup) continue;
    const status = await readProc(entry, 'status');
    result.push({ pid: Number(entry), comm: stat.slice(stat.indexOf('(') + 1, stat.lastIndexOf(')')), state: fields[0],
      ppid: Number(fields[1]), pgid, sid: Number(fields[3]), start: fields[19],
      rssKiB: Number(/VmRSS:\s+(\d+)/.exec(status)?.[1] ?? 0), byNonce, byGroup,
      ...withMasters === true ? { masters: await masters(entry), sigIgn: /SigIgn:\s+(\w+)/.exec(status)?.[1], sigCgt: /SigCgt:\s+(\w+)/.exec(status)?.[1] } : {},
      ...withMasters ? { pssKiB: Number(/^Pss:\s+(\d+)/m.exec(await readProc(entry, 'smaps_rollup'))?.[1] ?? 0) } : {},
      // VS Code utility processes carry their entry point in the environment.
      entry: /(?:^|\0)VSCODE_ESM_ENTRYPOINT=([^\0]*)/.exec(environment)?.[1],
      cmdline: (await readProc(entry, 'cmdline')).replaceAll('\0', ' ').trim().slice(0, 160) });
  }
  return result;
}
const live = list => list.filter(item => item.state !== 'Z');
const exitedAt = record => record.host.exitedAt ?? Date.now();
// Read-only: how long each remaining non-fixture process of the family stays
// after the main process exited (up to 60 s). Nothing is signalled.
async function lingering(list, since) {
  // Fixture processes are accounted for separately through their sockets.
  const known = new Set([...fixtures.values()].map(entry => `${entry.pid}:${entry.start}`));
  const watched = list.filter(item => !known.has(`${item.pid}:${item.start}`));
  const result = watched.map(item => ({ comm: item.comm, entry: item.entry, cmdline: item.cmdline.slice(-60), goneAfterMs: null }));
  const deadline = Date.now() + 60000;
  while (Date.now() < deadline && result.some(item => item.goneAfterMs === null)) {
    for (const [index, item] of watched.entries()) {
      if (result[index].goneAfterMs !== null) continue;
      const current = procStat(item.pid);
      if (!current || current.start !== item.start || current.state === 'Z') result[index].goneAfterMs = Date.now() - since;
    }
    await pause(100);
  }
  return result;
}

// Continuous sampler for the current phase: process count and summed RSS of the
// owned family. Summed RSS double-counts shared pages; it is reported as such.
let sampling, groups = [];
function startSampler(label) {
  const stats = { label, samples: 0, maxCount: 0, peakRssMiB: 0, peakPssMiB: 0, startedAt: Date.now() };
  let stopped = false;
  const loop = (async () => {
    while (!stopped) {
      const list = live(await family(groups, 'pss'));
      const mib = key => Math.round(list.reduce((sum, item) => sum + (item[key] ?? 0), 0) / 102.4) / 10;
      stats.samples++; stats.maxCount = Math.max(stats.maxCount, list.length);
      stats.peakRssMiB = Math.max(stats.peakRssMiB, mib('rssKiB'));
      if (mib('pssKiB') > stats.peakPssMiB) {
        stats.peakPssMiB = mib('pssKiB');
        stats.atPeak = [...list].sort((a, b) => b.pssKiB - a.pssKiB).slice(0, 4).map(item => ({ comm: item.comm,
          role: /--utility-sub-type=([\w.]+)/.exec(item.cmdline)?.[1] ?? /--type=([\w-]+)/.exec(item.cmdline)?.[1] ?? item.cmdline.slice(-40),
          pssMiB: Math.round(item.pssKiB / 1024) }));
      }
      await pause(250);
    }
  })();
  sampling = { stats, stop: async () => { stopped = true; await loop; stats.elapsedMs = Date.now() - stats.startedAt; return stats; } };
}

let app, page, session = 0, request = 0;
const result = { checkedAt: new Date().toISOString(), identity, directory, runId, scenario, definitions, cycles: [], errors: [],
  scope: 'Linux x64 native source build: real bash terminals (persistent sessions on), shell build and background watch tasks with a problem matcher, shipped Node debugger; synthetic fixtures; no AI requests. Not Windows/macOS.',
  success: false };

async function rpc(action, parameters = {}) {
  const rpcDirectory = join(directory, 'rpc', String(session)), index = request++;
  await writeFile(join(rpcDirectory, `request-${index}.json.pending`), JSON.stringify({ action, ...parameters }));
  execFileSync('mv', [join(rpcDirectory, `request-${index}.json.pending`), join(rpcDirectory, `request-${index}.json`)]);
  const deadline = Date.now() + 120000;
  while (Date.now() < deadline) {
    const reply = await readFile(join(rpcDirectory, `reply-${index}.json`), 'utf8').catch(() => undefined);
    if (reply) { const parsed = JSON.parse(reply); if (!parsed.ok) throw new Error(`${action}: ${parsed.error}`); return parsed.value; }
    await pause(150);
  }
  throw new Error(`Driver did not answer ${action}`);
}

async function launch(record) {
  session++; request = 0;
  await mkdir(join(directory, 'rpc', String(session)));
  await writeFile(join(directory, 'rpc', 'current.txt'), String(session));
  const env = { ...process.env, OPENVISION_SHUTDOWN_RUN: runId }; delete env.ELECTRON_RUN_AS_NODE;
  const started = Date.now();
  app = await _electron.launch({ executablePath: layout.executable, env, timeout: 60000,
    args: ['--user-data-dir', profile, '--extensions-dir', join(directory, 'extensions'), '--extensionDevelopmentPath', driver,
      '--new-window', '--disable-updates', '--skip-welcome', '--skip-release-notes', '--disable-telemetry',
      '--disable-crash-reporter', ...await linuxSandboxArguments(layout.host), project] });
  const child = app.process();
  assert.equal(procStat(child.pid)?.pgid, child.pid, 'The owned host must lead its own process group');
  groups = [child.pid];
  record.host = { pid: child.pid, stderrTail: '' };
  child.stderr?.on('data', chunk => { record.host.stderrTail = (record.host.stderrTail + chunk).slice(-16384); });
  child.once('exit', (code, signal) => { record.host.exit = { code, signal }; record.host.exitedAt = Date.now(); });
  page = await app.firstWindow(); page.setDefaultTimeout(30000);
  page.on('pageerror', error => result.errors.push(`${record.cycle}: ${error.message}`));
  await page.locator('.part.titlebar .openvision-local-profile').waitFor({ state: 'attached', timeout: 60000 });
  await enterWorkspace(page);
  record.launchMs = Date.now() - started;
  return child;
}

async function terminalText() {
  await page.keyboard.press('Escape').catch(() => {});
  const wrappers = page.locator('.terminal-wrapper').filter({ visible: true });
  return (await wrappers.allInnerTexts().catch(() => [])).join('\n');
}

async function confirmShutdownPrompts(record) {
  // Only this verifier's disposable window: accept a running-task/quit prompt.
  for (let attempt = 0; attempt < 20; attempt++) {
    const dialog = page?.locator('.monaco-dialog-box').filter({ visible: true });
    if (await dialog?.count().catch(() => 0)) {
      const text = await dialog.innerText().catch(() => '');
      const button = dialog.getByRole('button').filter({ hasText: /Terminate|Quit Anyway|Yes|Close/ }).first();
      record.prompts.push(text.slice(0, 300));
      await button.click({ timeout: 2000 }).catch(() => {});
    }
    await pause(250);
  }
}

async function shutdown(mode, record) {
  const child = app.process();
  const exited = child.exitCode === null && child.signalCode === null ? once(child, 'exit') : Promise.resolve();
  record.prompts = [];
  if (mode === 'close-app') {
    const closing = app.close().catch(error => { record.closeError = error.message; });
    await Promise.race([Promise.all([confirmShutdownPrompts(record), closing]), pause(30000)]);
  } else if (mode === 'close-window') {
    await app.evaluate(({ BrowserWindow }) => BrowserWindow.getAllWindows().forEach(window => window.close()));
    await Promise.race([Promise.all([confirmShutdownPrompts(record), exited]), pause(30000)]);
  } else if (mode === 'kill-main') {
    // Owned launch handle: only the main process; children see their parent vanish.
    child.kill('SIGKILL');
  } else {
    // The group was created by this verifier's detached launch; its leader is the owned handle.
    assert.equal(procStat(child.pid)?.pgid, child.pid);
    process.kill(-child.pid, 'SIGKILL');
  }
  await Promise.race([exited, pause(30000)]);
  record.host.exit ??= { code: child.exitCode, signal: child.signalCode };
  app = undefined; page = undefined;
}

const ownedNames = cycle => ['term', 'term-child', 'bg', 'build', 'build-child', 'watch', 'watch-child', 'debuggee', 'debuggee-child']
  .map(name => name.replace(/^([a-z]+)/, `$1-c${cycle}`));
async function hostLogLines() {
  const lines = [];
  async function walk(path) {
    for (const entry of await readdir(path, { withFileTypes: true }).catch(() => [])) {
      const next = join(path, entry.name);
      if (entry.isDirectory()) await walk(next);
      else if (entry.name.endsWith('.log')) for (const line of (await readFile(next, 'utf8').catch(() => '')).split('\n'))
        if (/terminated unexpectedly|terminated normally|ptyHost|\[error\]|FATAL|Assertion|abort/i.test(line))
          lines.push(`${next.slice(profile.length + 1)}: ${line.slice(0, 300)}`);
    }
  }
  await walk(join(profile, 'logs'));
  return lines;
}

let previous;
try {
  for (const [index, mode] of scenario.entries()) {
    const cycle = index + 1, record = { cycle, mode, kind: cycle === 1 ? 'cold' : 'warm' };
    result.cycles.push(record);
    await writeFile(join(directory, 'cycle.txt'), String(cycle));
    startSampler(`cycle ${cycle} ${mode}`);
    const child = await launch(record);
    // State restored from the previous cycle, before any new workload.
    record.restored = await rpc('inspect');
    await rpc('focus');
    record.restored.texts = [];
    for (const [terminalIndex] of record.restored.terminals.entries()) {
      await rpc('show', { index: terminalIndex });
      await pause(1000);
      record.restored.texts.push(await terminalText());
      await page.screenshot({ path: join(directory, 'screens', `cycle-${cycle}-restored-${terminalIndex}.png`) });
    }
    if (previous) {
      const marker = `OV-RESTORE-MARKER-c${previous.cycle}`;
      record.restored.previousMarker = record.restored.texts.some(text => text.includes(marker));
      // The restored buffer is the previous cycle's: the marker and the workload command.
      record.restored.previousWorkload = record.restored.texts.some(text => text.includes(marker) && text.includes('tree term'));
      // Orphans left by an abrupt previous exit must end after this start.
      if (previous.survivors?.length) {
        record.reclaimed = [];
        for (const name of previous.survivors) record.reclaimed.push({ name, ended: await exitedWithin(fixtures.get(name), 15000) });
      }
    }
    // Active workload for this cycle.
    record.workload = { terminal: await rpc('terminal', { cycle, fixture }) };
    record.workload.tasks = await rpc('tasks');
    record.workload.debug = await rpc('debug');
    for (const name of [...ownedNames(cycle), `detached-c${cycle}`]) await fixtureNamed(name);
    record.identities = Object.fromEntries([...ownedNames(cycle), `detached-c${cycle}`].map(name => {
      const { pid, ppid, pgid, sid, start } = fixtures.get(name); return [name, { pid, ppid, pgid, sid, start }];
    }));
    await pause(2000);
    record.beforeExit = live(await family(groups, true));
    record.journalBeforeExit = await Promise.all((await readdir(journalDirectory).catch(() => []))
      .map(async name => ({ name, ...JSON.parse(await readFile(join(journalDirectory, name), 'utf8').catch(() => '{}')) })));
    await page.screenshot({ path: join(directory, 'screens', `cycle-${cycle}-active.png`) });
    const shutdownStarted = Date.now();
    await shutdown(mode, record);
    record.shutdownMs = Date.now() - shutdownStarted;
    // Owned workloads must end with the app (graceful) or remain until reclaimed (abrupt).
    record.afterExit = {};
    await Promise.all(ownedNames(cycle).map(async name => { record.afterExit[name] = await exitedWithin(fixtures.get(name), 10000); }));
    record.survivors = ownedNames(cycle).filter(name => !record.afterExit[name]);
    record.detachedAlive = fixtures.get(`detached-c${cycle}`).closedAt === null;
    record.sentinelAlive = fixtures.get('sentinel-c0').closedAt === null;
    await pause(1000);
    record.familyAfterExit = live(await family(groups, true)).map(({ pid, comm, ppid, pgid, sid, start, entry, masters, sigIgn, sigCgt, cmdline }) =>
      ({ pid, comm, ppid, pgid, sid, start, entry, masters, sigIgn, sigCgt, cmdline }));
    record.journal = await readdir(journalDirectory).catch(() => []);
    record.lingering = await lingering(record.familyAfterExit, exitedAt(record));
    record.memory = await sampling.stop();
    record.logLines = await hostLogLines();
    await writeFile(join(directory, `cycle-${cycle}.json`), JSON.stringify(record, null, 2));
    previous = record;
  }
  // Final start: reclaim anything left by the last abrupt exit, then close.
  const final = { cycle: scenario.length + 1, mode: 'close-app', kind: 'final' };
  result.final = final;
  startSampler('final');
  await launch(final);
  final.restored = await rpc('inspect');
  if (previous.survivors?.length) {
    final.reclaimed = [];
    for (const name of previous.survivors) final.reclaimed.push({ name, ended: await exitedWithin(fixtures.get(name), 15000) });
  }
  await shutdown('close-app', final);
  final.memory = await sampling.stop();
  final.familyAfterExit = live(await family(groups)).map(({ pid, comm, ppid, pgid, sid, cmdline }) => ({ pid, comm, ppid, pgid, sid, cmdline }));

  // Assertions.
  const failures = [];
  for (const record of result.cycles) {
    const graceful = record.mode.startsWith('close');
    if (graceful && record.survivors.length) failures.push(`cycle ${record.cycle}: ${record.survivors.join(', ')} survived graceful ${record.mode}`);
    if (graceful && record.host.exit?.code !== 0) failures.push(`cycle ${record.cycle}: host exit ${JSON.stringify(record.host.exit)}`);
    // Only user-detached fixtures (their own session, reported over the socket) may remain.
    const detached = [...fixtures.values()].filter(entry => /^detached-/.test(entry.name)).map(entry => `${entry.pid}:${entry.start}`);
    record.unexpectedAfterExit = record.familyAfterExit.filter(item => !detached.includes(`${item.pid}:${item.start}`));
    if (graceful && record.unexpectedAfterExit.length)
      failures.push(`cycle ${record.cycle}: ${record.unexpectedAfterExit.map(item => item.comm).join(', ')} remained after graceful exit`);
    if (!record.detachedAlive) failures.push(`cycle ${record.cycle}: user-detached process was ended`);
    if (!record.sentinelAlive) failures.push(`cycle ${record.cycle}: external sentinel was ended`);
    if (record.cycle > 1) {
      if (JSON.stringify(record.restored.tasks) !== JSON.stringify(['ov-build', 'ov-watch'])) failures.push(`cycle ${record.cycle}: task definitions not restored`);
      if (!record.restored.launch.includes('ov-debug')) failures.push(`cycle ${record.cycle}: launch definition not restored`);
    }
    const prior = result.cycles[record.cycle - 2];
    if (prior?.mode.startsWith('close') && !record.restored.previousMarker) failures.push(`cycle ${record.cycle}: terminal history not restored`);
    for (const item of record.reclaimed ?? []) if (!item.ended) failures.push(`cycle ${record.cycle}: orphan ${item.name} not reclaimed`);
  }
  for (const item of final.reclaimed ?? []) if (!item.ended) failures.push(`final: orphan ${item.name} not reclaimed`);
  if (final.host.exit?.code !== 0) failures.push(`final host exit ${JSON.stringify(final.host.exit)}`);
  if (JSON.stringify(definitions) !== JSON.stringify({ tasks: await fileHash(join(project, '.vscode/tasks.json')), launch: await fileHash(join(project, '.vscode/launch.json')) }))
    failures.push('task/launch definition files changed');
  if (result.errors.length) failures.push(`${result.errors.length} renderer errors`);
  result.failures = failures;
  result.success = failures.length === 0;
  if (!result.success) process.exitCode = 1;
} catch (error) {
  result.failure = error.stack; process.exitCode = 1;
  await page?.screenshot({ path: join(directory, 'failure.png') }).catch(() => {});
} finally {
  if (app) await shutdown('close-app', { host: {}, prompts: [] }).catch(() => {});
  await sampling?.stop().catch(() => {});
  // Cleanup through owned channels only: fixture sockets, then the sentinel handle.
  result.cleanup = { fixtureSockets: 0 };
  for (const entry of fixtures.values()) if (entry.closedAt === null) { entry.socket.end('exit\n'); result.cleanup.fixtureSockets++; }
  await pause(1500);
  sentinel.kill();
  // Anything still carrying this run's nonce after its sockets closed is reported.
  result.cleanup.nonceSurvivors = live(await family([])).map(({ pid, comm, cmdline }) => ({ pid, comm, cmdline }));
  server.close();
  result.summary = result.cycles.map(record => ({ cycle: record.cycle, mode: record.mode, kind: record.kind,
    exit: record.host.exit, launchMs: record.launchMs, shutdownMs: record.shutdownMs,
    restoredTerminals: record.restored?.terminals?.length, previousMarker: record.restored?.previousMarker,
    survivors: record.survivors, reclaimed: record.reclaimed, familyBefore: record.beforeExit?.length,
    familyAfter: record.familyAfterExit?.length, maxCount: record.memory?.maxCount, peakRssMiB: record.memory?.peakRssMiB, peakPssMiB: record.memory?.peakPssMiB,
    unexpected: record.logLines?.filter(line => /unexpectedly/.test(line)).length }));
  await writeFile(join(directory, 'result.json'), JSON.stringify(result, null, 2));
  console.log(JSON.stringify({ directory, success: result.success, failures: result.failures, failure: result.failure,
    summary: result.summary, final: result.final && { exit: result.final.host?.exit, reclaimed: result.final.reclaimed },
    cleanup: result.cleanup }, null, 2));
}
