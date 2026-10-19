// OV-1003 idle and long-session private memory on Linux x64.
// Workload: fresh-profile (cold) start, same-profile (warm) start, idle marks,
// then N equal iterations of a controlled Agent chat (reply + Read tool), a
// workbench text search and a terminal command. Memory is sampled from /proc for
// the owned process family only (descendants of the launched host and its
// process group): USS, PSS and swapped pages, never summed RSS. The model is a
// deterministic loopback fixture; no live inference is used. Nothing outside the
// owned launch handle is signalled.
import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { execFileSync } from 'node:child_process';
import { chmod, mkdir, mkdtemp, readdir, readFile, writeFile } from 'node:fs/promises';
import { cpus, release, totalmem } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { _electron } from '../tooling/browser.mjs';
import { verificationRuntime } from './verification-runtime.mjs';
import { verificationSettings } from './verification-profile.mjs';
import { linuxSandboxArguments } from './platform.mjs';
import { enterWorkspace, openChat } from './verification-workspace.mjs';
import { fileHash } from './import-files.mjs';
import { electronNames, growth, hostLoad, mib, processFamily, stillAlive, summarize } from './process-family-linux.mjs';
import { evaluate as evaluateBudgets, loadBudgets, measure } from './idle-memory-budgets.mjs';
import { extensionHostResources } from './extension-host-timers.mjs';

assert.equal(process.platform, 'linux', 'verify:idle-memory reads Linux /proc private memory');
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const { layout, appRoot, portable } = await verificationRuntime(root);
const argument = (name, fallback) => process.argv.find(item => item.startsWith(`--${name}=`))?.slice(name.length + 3) ?? fallback;
const quick = process.argv.includes('--quick');
// Two idle marks in both variants, so idle growth and idle CPU are always measured.
const idleMarks = argument('idle-minutes', quick ? '1,2' : '5,15').split(',').map(Number).filter(value => value > 0);
const iterations = Number(argument('iterations', quick ? '2' : '6'));
const settleSeconds = Number(argument('settle-seconds', quick ? '20' : '45'));
const iterationSettleSeconds = Number(argument('iteration-settle-seconds', '20'));
const label = argument('label', 'run');
// Optional: run the owned host under strace (signals of the main process only) so an
// unrequested exit can be attributed to its sender. Adds ptrace overhead to the host.
const signalTrace = process.argv.includes('--signal-trace');
// Optional: start extension hosts with an inspector and read each host's active
// handles (timers, sockets, watchers) at every idle mark. Off for budgeted runs.
const timerInventory = process.argv.includes('--timer-inventory');
const budgetVariant = argument('budgets', quick ? 'quick' : 'full');
const budgets = budgetVariant === 'none' ? undefined : await loadBudgets(join(dirname(fileURLToPath(import.meta.url))), budgetVariant);
await mkdir(join(root, 'logs'), { recursive: true });
const directory = await mkdtemp(join(root, `logs/idle-memory-${label}-`));
const profile = join(directory, 'profile'), project = join(directory, 'project');
await mkdir(join(profile, 'User'), { recursive: true }); await mkdir(join(project, 'src'), { recursive: true });
await writeFile(join(profile, 'User/settings.json'), JSON.stringify({ ...verificationSettings,
  'git.openRepositoryInParentFolders': 'never', 'workbench.startupEditor': 'none',
  // Fixed terminal workload: no revived sessions, no user shell start-up files.
  'terminal.integrated.enablePersistentSessions': false, 'terminal.integrated.confirmOnKill': 'never',
  'terminal.integrated.confirmOnExit': 'never', 'terminal.integrated.gpuAcceleration': 'off',
  'terminal.integrated.profiles.linux': { 'ov-bash': { path: '/bin/bash', args: ['--noprofile', '--norc'] } },
  'terminal.integrated.defaultProfile.linux': 'ov-bash' }));
// A small, self-contained repository: its own Git root, so nothing walks up into
// the OpenVision checkout that contains logs/.
await writeFile(join(project, 'hello.js'), 'export const answer = 42;\n');
await writeFile(join(project, 'search.txt'), Array.from({ length: 64 }, (_, index) => `IdleSearchToken${index} line\n`).join(''));
for (let index = 0; index < 120; index++)
  await writeFile(join(project, 'src', `module-${index}.js`), `export function value${index}() {\n  return ${index};\n}\n`);
execFileSync('git', ['init', '-q', project]);
execFileSync('git', ['-C', project, '-c', 'user.name=OpenVision', '-c', 'user.email=verify@openvision.invalid', 'add', '.']);
execFileSync('git', ['-C', project, '-c', 'user.name=OpenVision', '-c', 'user.email=verify@openvision.invalid', 'commit', '-qm', 'fixture']);

let executablePath = layout.executable;
const signalLog = join(directory, 'host-signals.trace');
if (signalTrace) {
  executablePath = join(directory, 'signal-traced-host.sh');
  await writeFile(executablePath, `#!/bin/sh\nexec strace -qq -ttt -e trace=none -e signal=TERM,INT,HUP,QUIT,KILL -o '${signalLog}' -- '${layout.executable}' "$@"\n`);
  await chmod(executablePath, 0o755);
}
const identity = { commit: execFileSync('git', ['rev-parse', 'HEAD'], { cwd: root, encoding: 'utf8' }).trim(),
  dirty: execFileSync('git', ['status', '--porcelain'], { cwd: root, encoding: 'utf8' }).split('\n').filter(Boolean),
  portable: Boolean(portable), platform: process.platform, arch: process.arch, osRelease: release(), node: process.version,
  session: process.env.XDG_SESSION_TYPE, desktop: process.env.XDG_CURRENT_DESKTOP,
  cpu: cpus()[0]?.model, logicalProcessors: cpus().length, totalMemoryMiB: Math.round(totalmem() / 1048576),
  hashes: Object.fromEntries(await Promise.all([['host', layout.executable], ['verifier', fileURLToPath(import.meta.url)],
    ['sampler', join(root, 'desktop/process-family-linux.mjs')], ['main', join(appRoot, 'out/main.js')],
    ['workbench', join(appRoot, 'out/vs/workbench/workbench.desktop.main.js')]]
    .map(async ([name, path]) => [name, await fileHash(path).catch(() => null)]))) };

// Deterministic loopback model: reply, or one Read tool call then a reply.
const requests = [];
let phase = 'setup';
const server = createServer(async (request, response) => {
  if (request.url === '/v1/models') {
    response.setHeader('content-type', 'application/json');
    return response.end(JSON.stringify({ data: [{ id: 'fixture-agent' }] }));
  }
  if (request.url !== '/v1/chat/completions') { response.statusCode = 404; return response.end(); }
  const chunks = []; for await (const chunk of request) chunks.push(chunk);
  const body = Buffer.concat(chunks), payload = JSON.parse(body);
  const user = JSON.stringify(payload.messages?.findLast(message => message.role === 'user')?.content ?? '');
  const marker = /idle-(\w+)-(\d+)/.exec(user);
  const toolResult = payload.messages?.at(-1)?.role === 'tool';
  requests.push({ phase, at: Date.now(), bodyBytes: body.length, tools: payload.tools?.length ?? 0, marker: marker?.[0], toolResult });
  response.writeHead(200, { 'Content-Type': 'text/event-stream' });
  const event = (delta, finish_reason = null) => response.write(`data: ${JSON.stringify({ id: 'fixture', object: 'chat.completion.chunk',
    model: payload.model, choices: [{ index: 0, delta, finish_reason }] })}\n\n`);
  const read = payload.tools?.find(tool => tool.function?.name === 'Read');
  if (marker?.[1] === 'read' && !toolResult && read) {
    event({ role: 'assistant', tool_calls: [{ index: 0, id: `call_${marker[0]}`, type: 'function',
      function: { name: 'Read', arguments: JSON.stringify({ path: join(project, 'hello.js') }) } }] });
    event({}, 'tool_calls');
  } else {
    const verified = !toolResult || JSON.stringify(payload.messages.at(-1).content).includes('answer = 42');
    event({ role: 'assistant', content: `OpenVision ${marker?.[0] ?? 'idle-reply-0'} ${verified ? 'done' : 'missing-tool-result'}.` });
    event({}, 'stop');
  }
  response.end('data: [DONE]\n\n');
});
await new Promise(done => server.listen(0, '127.0.0.1', done));

const result = { checkedAt: new Date().toISOString(), identity, directory,
  scope: 'Linux x64 native source build; fresh-profile start is not a cold OS page cache; controlled loopback model; one run per configuration.',
  options: { idleMarks, iterations, settleSeconds, iterationSettleSeconds, quick, signalTrace, timerInventory, budgetVariant }, budgets,
  launches: [], idle: [], iterations: [], errors: [], hostExits: [], success: false };
const pause = ms => new Promise(done => setTimeout(done, ms));
let app, page, rootPid, names = new Map(), closing = false;

// Continuous sampler for one phase: peak private memory and its composition.
function sampler(name, intervalMs) {
  const stats = { name, samples: 0, peakUssMiB: 0, peakPssMiB: 0, maxCount: 0, startedAt: Date.now() };
  let stopped = false;
  const loop = (async () => {
    while (!stopped) {
      const list = await processFamily({ rootPid, names });
      const summary = summarize(list);
      stats.samples++; stats.maxCount = Math.max(stats.maxCount, summary.count);
      if (summary.pssMiB > stats.peakPssMiB) {
        Object.assign(stats, { peakPssMiB: summary.pssMiB, peakAtMs: Date.now() - stats.startedAt, peakSwapMiB: summary.swapMiB,
          peakTop: [...list].sort((a, b) => b.pssKiB - a.pssKiB).slice(0, 4)
            .map(item => ({ role: item.role, name: item.name, pid: item.pid, pssMiB: mib(item.pssKiB), ussMiB: mib(item.ussKiB) })) });
      }
      stats.peakUssMiB = Math.max(stats.peakUssMiB, summary.ussMiB);
      await pause(intervalMs);
    }
  })();
  return async () => { stopped = true; await loop; stats.elapsedMs = Date.now() - stats.startedAt; return stats; };
}

async function snapshot(name, detail = true) {
  names = await electronNames(app).catch(() => names);
  const list = await processFamily({ rootPid, names, detail });
  const summary = summarize(list);
  // Main-process handles (timers, sockets, file watchers) from Node itself.
  const mainResources = detail ? await app.evaluate(() => process.getActiveResourcesInfo()
    .reduce((counts, type) => ({ ...counts, [type]: (counts[type] ?? 0) + 1 }), {})).catch(() => undefined) : undefined;
  return { name, at: new Date().toISOString(), host: await hostLoad(), ...summary, mainResources,
    processes: detail ? list.sort((a, b) => b.pssKiB - a.pssKiB).map(item => ({ pid: item.pid, ppid: item.ppid, role: item.role,
      name: item.name, cpuSeconds: item.cpuTicks / 100, ussMiB: mib(item.ussKiB), pssMiB: mib(item.pssKiB), swapMiB: mib(item.swapKiB), threads: item.threads,
      fds: item.fds, inotifyWatches: item.inotifyWatches, ptmx: item.ptmx, addons: item.addons,
      cmdline: item.role.startsWith('child:') ? item.cmdline.slice(0, 200) : undefined })) : undefined };
}

async function launch(kind) {
  const env = { ...process.env }; delete env.ELECTRON_RUN_AS_NODE;
  const started = performance.now();
  app = await _electron.launch({ executablePath, env, timeout: 90000,
    args: ['--user-data-dir', profile, '--extensions-dir', join(directory, 'extensions'), '--new-window', '--disable-updates',
      '--skip-welcome', '--skip-release-notes', '--disable-telemetry', '--disable-crash-reporter',
      ...timerInventory ? ['--inspect-extensions=19229'] : [], ...await linuxSandboxArguments(layout.host), project] });
  rootPid = app.process().pid;
  // Record every owned host exit, including one this verifier did not request.
  app.process().once('exit', (code, signal) => result.hostExits.push({ kind, code, signal, at: new Date().toISOString(), requested: closing }));
  // Under --signal-trace the launched process is strace; measure from the Electron main process.
  if (signalTrace) {
    const tracer = rootPid;
    for (let attempt = 0; attempt < 100 && rootPid === tracer; attempt++) {
      const main = (await processFamily({ rootPid: tracer })).find(item => item.ppid === tracer);
      if (main) rootPid = main.pid; else await pause(50);
    }
    assert.notEqual(rootPid, tracer, 'Traced Electron main process not found');
  }
  const stop = sampler(`${kind}-startup`, 1000);
  page = await app.firstWindow(); page.setDefaultTimeout(30000);
  page.on('pageerror', error => result.errors.push(`${kind}: ${error.message}`));
  await page.locator('.part.titlebar .openvision-local-profile').waitFor({ state: 'attached', timeout: 90000 });
  const titlebarMs = Math.round(performance.now() - started);
  await enterWorkspace(page);
  await page.locator('.part.sidebar').getByRole('treeitem').filter({ hasText: 'hello.js' }).first().waitFor({ timeout: 60000 })
    .catch(() => {});
  const workspaceMs = Math.round(performance.now() - started);
  names = await electronNames(app).catch(() => names);
  await pause(settleSeconds * 1000);
  const startup = await stop();
  const record = { kind, titlebarMs, workspaceMs, startup, settled: await snapshot(`${kind}-settled-${settleSeconds}s`) };
  result.launches.push(record);
  console.log(`[${kind}] titlebar ${titlebarMs} ms, workspace ${workspaceMs} ms, startup peak PSS ${startup.peakPssMiB} MiB, settled USS ${record.settled.ussMiB} MiB / PSS ${record.settled.pssMiB} MiB, ${record.settled.count} processes`);
  return record;
}

async function close() {
  const child = app.process();
  const exited = child.exitCode !== null || child.signalCode !== null ? Promise.resolve() : new Promise(done => child.once('exit', done));
  const members = (await processFamily({ rootPid })).map(item => ({ pid: item.pid, start: item.start, role: item.role }));
  closing = true;
  const closed = app.close().catch(() => {});
  await page?.getByText('Quit Anyway', { exact: true }).click({ timeout: 5000 }).catch(() => {});
  await closed; await Promise.race([exited, pause(30000)]);
  // Read-only: every recorded member must be gone (or reaped) within 30 s.
  const deadline = Date.now() + 30000;
  let remaining = members;
  while (Date.now() < deadline && remaining.length) {
    remaining = await stillAlive(members);
    if (remaining.length) await pause(500);
  }
  app = undefined; page = undefined; closing = false;
  return { exit: { code: child.exitCode, signal: child.signalCode }, remaining };
}

async function command(name) {
  await page.keyboard.press('Escape');
  await page.keyboard.press('ControlOrMeta+Shift+p');
  const picker = page.locator('.quick-input-widget');
  await picker.locator('input[type="text"]').fill(`>${name}`);
  await picker.getByText(name, { exact: true }).first().click();
}

async function chat(prompt, expected) {
  const input = await openChat(page);
  const fresh = page.getByRole('button', { name: 'New Agent', exact: true }).filter({ visible: true });
  if (await fresh.count()) await fresh.first().click();
  await input.fill(prompt); await input.press('Enter');
  await page.getByText(expected, { exact: true }).first().waitFor({ timeout: 60000 });
}

async function workload(index) {
  const timing = {};
  let started = performance.now();
  phase = `reply-${index}`;
  await chat(`Reply with the fixture text for idle-reply-${index}. Do not use tools.`, `OpenVision idle-reply-${index} done.`);
  phase = `read-${index}`;
  await chat(`Read hello.js for idle-read-${index}. Do not modify files.`, `OpenVision idle-read-${index} done.`);
  timing.chatMs = Math.round(performance.now() - started);
  started = performance.now();
  await page.keyboard.press('Escape');
  await page.keyboard.press('ControlOrMeta+Shift+f');
  const search = page.locator('.search-view .search-widget textarea').first();
  await search.fill(`IdleSearchToken${index % 64} `);
  await search.press('Enter');
  await page.locator('.search-view .monaco-list-row').filter({ hasText: 'search.txt' }).first().waitFor({ timeout: 30000 });
  timing.searchMs = Math.round(performance.now() - started);
  started = performance.now();
  await command('Terminal: Create New Terminal');
  const terminal = page.locator('.terminal-wrapper .xterm-helper-textarea').filter({ visible: true }).first();
  await terminal.waitFor(); await terminal.focus();
  await page.keyboard.insertText(`echo OPENVISION_IDLE_$((${index}+1000))`);
  await page.keyboard.press('Enter');
  const marker = `OPENVISION_IDLE_${index + 1000}`;
  const deadline = Date.now() + 30000;
  while (!(await page.locator('.terminal-wrapper').filter({ visible: true }).innerText().catch(() => '')).includes(marker)) {
    assert.ok(Date.now() < deadline, 'Terminal must run the owned shell command'); await pause(250);
  }
  await command('Terminal: Kill the Active Terminal Instance');
  timing.terminalMs = Math.round(performance.now() - started);
  return timing;
}

async function processSamplingEvidence() {
  const pattern = /\[CursorProclistService\] Config enabled feature|\[Cursor Proclist Polling\] (Started polling|Transport down|Failed to send V2 metrics|Replaying)|Samples written:/;
  const logLines = [], files = [];
  async function walk(path, visit) {
    for (const entry of await readdir(path, { withFileTypes: true }).catch(() => [])) {
      const next = join(path, entry.name);
      if (entry.isDirectory()) await walk(next, visit); else await visit(next, entry.name);
    }
  }
  await walk(join(profile, 'logs'), async (path, name) => {
    if (name.endsWith('.log')) for (const line of (await readFile(path, 'utf8')).split('\n')) if (pattern.test(line)) logLines.push(line.slice(0, 300));
  });
  await walk(join(profile, 'process-monitor'), async (path, name) => {
    if (name.endsWith('.log') || name === 'pending-uploads.json') files.push(path.replace(`${profile}/`, ''));
  });
  return { logLines, files };
}

// Extension-host placement from the renderer log (observed lines; host order inferred).
async function extensionHosts() {
  const lines = [];
  async function walk(path) {
    for (const entry of await readdir(path, { withFileTypes: true }).catch(() => [])) {
      const next = join(path, entry.name);
      if (entry.isDirectory()) await walk(next);
      else if (entry.name === 'renderer.log') for (const line of (await readFile(next, 'utf8')).split('\n'))
        if (/Started local extension host with pid|Placing extension\(s\)/.test(line)) lines.push(line.replace(/^\S+ \S+ /, ''));
    }
  }
  await walk(join(profile, 'logs'));
  return lines;
}

try {
  // Cold: fresh profile.
  await launch('cold');
  phase = 'setup';
  await page.locator('.part.titlebar a[aria-label$=" Settings"]').click();
  await page.locator('.cursor-settings-sidebar-cell-label').filter({ hasText: /^Models$/ }).locator('..').click();
  await page.locator('.openvision-model-settings').getByRole('button', { name: 'Add Provider', exact: true }).click();
  await page.getByLabel('Provider Name', { exact: true }).fill('Idle fixture');
  await page.getByLabel('API Base URL', { exact: true }).fill(`http://127.0.0.1:${server.address().port}/v1`);
  await page.getByLabel('API Key', { exact: true }).fill('fixture-key');
  await page.locator('dialog').getByRole('button', { name: 'Save', exact: true }).click();
  await page.locator('dialog').waitFor({ state: 'detached' });
  await page.keyboard.press('ControlOrMeta+w');
  await page.keyboard.press('ControlOrMeta+Shift+l');
  await page.locator('.vscode-model-picker__trigger-markdown').filter({ visible: true }).first().click();
  await page.getByText('fixture-agent', { exact: true }).last().click(); await page.keyboard.press('Escape');
  await chat('Reply with the fixture text for idle-reply-0. Do not use tools.', 'OpenVision idle-reply-0 done.');
  result.coldClose = await close();

  // Warm: same profile, same project.
  await launch('warm');
  result.extensionHosts = await extensionHosts();

  // Idle marks, measured from the end of the warm settle.
  const idleStart = Date.now();
  const stopIdle = sampler('idle', 15000);
  for (const minutes of idleMarks) {
    await pause(Math.max(0, idleStart + minutes * 60000 - Date.now()));
    assert.equal(app.process().exitCode ?? app.process().signalCode ?? null, null, `Owned host exited unexpectedly: ${JSON.stringify(result.hostExits)}`);
    const sample = await snapshot(`idle-${minutes}min`);
    if (timerInventory) sample.extensionHostResources = await extensionHostResources(sample.processes
      .filter(item => item.role === 'extension-host').map(item => ({ pid: item.pid, name: names.get(item.pid)?.name })));
    result.idle.push({ minutes, ...sample });
    console.log(`[idle ${minutes} min] USS ${sample.ussMiB} MiB, PSS ${sample.pssMiB} MiB, swap ${sample.swapMiB} MiB, ${sample.count} processes`);
  }
  result.idleSampler = await stopIdle();
  // Idle CPU per role between the first and last idle marks (same processes only).
  if (result.idle.length > 1) {
    const [first, last] = [result.idle[0], result.idle.at(-1)];
    const before = new Map(first.processes.map(item => [item.pid, item.cpuSeconds]));
    const roles = {};
    for (const item of last.processes) if (before.has(item.pid))
      roles[item.role] = Math.round(((roles[item.role] ?? 0) + item.cpuSeconds - before.get(item.pid)) * 100) / 100;
    result.idleCpuSeconds = { fromMinutes: first.minutes, toMinutes: last.minutes, roles };
  }

  // Long session: N equal iterations.
  for (let index = 1; index <= iterations; index++) {
    const stop = sampler(`iteration-${index}`, 1000);
    const timing = await workload(index);
    const active = await stop();
    await pause(iterationSettleSeconds * 1000);
    const settled = await snapshot(`iteration-${index}-settled`);
    result.iterations.push({ index, timing, active, settled });
    console.log(`[iteration ${index}] active peak PSS ${active.peakPssMiB} MiB; settled USS ${settled.ussMiB} / PSS ${settled.pssMiB} / swap ${settled.swapMiB} MiB, ${settled.count} processes`);
  }
  const series = key => result.iterations.map(item => item.settled[key]);
  const roleSeries = role => result.iterations.map(item => item.settled.roles[role]?.ussMiB ?? 0);
  const roles = [...new Set(result.iterations.flatMap(item => Object.keys(item.settled.roles)))];
  result.growth = { ussMiB: growth(series('ussMiB')), pssMiB: growth(series('pssMiB')), privateWithSwapMiB: growth(series('privateWithSwapMiB')),
    count: growth(series('count')), roles: Object.fromEntries(roles.map(role => [role, growth(roleSeries(role))])) };
  result.inventory = await snapshot('final-inventory');
  // Every workload terminal was killed: none of its shells or pty masters may remain.
  result.terminalRelease = { killedTerminals: iterations,
    remainingShells: result.inventory.processes.filter(item => item.role === 'child:shell' && /--noprofile --norc/.test(item.cmdline ?? '')).length,
    ptyHostMasters: result.inventory.processes.filter(item => item.role === 'pty-host').reduce((sum, item) => sum + (item.ptmx ?? 0), 0) };
  result.requests = { total: requests.length, byPhase: Object.groupBy(requests, item => item.phase.replace(/-\d+$/, '')) };
  for (const key of Object.keys(result.requests.byPhase)) result.requests.byPhase[key] = result.requests.byPhase[key].length;
  result.warmClose = await close();

  const failures = [];
  for (const [name, closed] of [['cold', result.coldClose], ['warm', result.warmClose]]) {
    if (closed.exit.code !== 0) failures.push(`${name} host exit ${JSON.stringify(closed.exit)}`);
    if (closed.remaining.length) failures.push(`${name}: ${closed.remaining.length} owned processes remained 30 s after exit`);
  }
  if (result.iterations.length !== iterations) failures.push('Not every workload iteration completed');
  if (requests.length !== 1 + iterations * 3) failures.push(`Expected ${1 + iterations * 3} model requests, saw ${requests.length}`);
  if (result.errors.length) failures.push(`${result.errors.length} renderer errors`);
  if (result.terminalRelease.remainingShells || result.terminalRelease.ptyHostMasters)
    failures.push(`Killed terminals left ${result.terminalRelease.remainingShells} shells and ${result.terminalRelease.ptyHostMasters} pty masters`);
  // OV-1003: process sampling stays inert: no whole-system scan, no sample build,
  // stash or upload attempt in any log, and no shard or pending-upload file.
  result.processSampling = await processSamplingEvidence();
  if (result.processSampling.logLines.length) failures.push(`Process sampling ran: ${result.processSampling.logLines.slice(0, 3).join(' | ')}`);
  if (result.processSampling.files.length) failures.push(`Process samples were written: ${result.processSampling.files.join(', ')}`);
  if (budgets) {
    result.measured = measure(result);
    result.budgetOutcome = evaluateBudgets(budgets, result.measured);
    for (const item of result.budgetOutcome.failures) failures.push(`Budget ${item.name}: ${item.reason} (${item.value} > ${item.limit})`);
  }
  result.failures = failures;
  result.success = failures.length === 0;
} catch (error) {
  result.failure = error.stack;
  await page?.screenshot({ path: join(directory, 'failure.png') }).catch(() => {});
  if (app) result.cleanup = await close().catch(cleanupError => ({ error: cleanupError.message }));
} finally {
  server.close();
  if (signalTrace) result.hostSignals = (await readFile(signalLog, 'utf8').catch(() => '')).split('\n').filter(Boolean).slice(-20);
  await writeFile(join(directory, 'result.json'), JSON.stringify(result, null, 2));
  const brief = item => item && { ussMiB: item.ussMiB, pssMiB: item.pssMiB, swapMiB: item.swapMiB, count: item.count };
  console.log(JSON.stringify({ directory, success: result.success, failures: result.failures, failure: result.failure?.slice(0, 2000),
    launches: result.launches.map(item => ({ kind: item.kind, titlebarMs: item.titlebarMs, workspaceMs: item.workspaceMs,
      startupPeakPssMiB: item.startup.peakPssMiB, startupPeakTop: item.startup.peakTop, settled: brief(item.settled), roles: item.settled.roles })),
    idle: result.idle.map(item => ({ minutes: item.minutes, ...brief(item), host: item.host })),
    iterations: result.iterations.map(item => ({ index: item.index, timing: item.timing, activePeakPssMiB: item.active.peakPssMiB, settled: brief(item.settled) })),
    growth: result.growth && { ussMiB: result.growth.ussMiB, pssMiB: result.growth.pssMiB, count: result.growth.count },
    terminalRelease: result.terminalRelease, idleCpuSeconds: result.idleCpuSeconds, measured: result.measured,
    budgetFailures: result.budgetOutcome?.failures, processSampling: result.processSampling,
    extensionHostResources: result.idle.map(item => ({ minutes: item.minutes, hosts: item.extensionHostResources })).filter(item => item.hosts), hostExits: result.hostExits, hostSignals: result.hostSignals }, null, 2));
  if (!result.success) process.exitCode = 1;
}
