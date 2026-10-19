import assert from 'node:assert/strict';
import { randomUUID } from 'node:crypto';
import { execFileSync, spawnSync } from 'node:child_process';
import { createServer as createNetServer } from 'node:net';
import { mkdir, mkdtemp, readFile, readdir, writeFile } from 'node:fs/promises';
import { dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { verificationRuntime } from './verification-runtime.mjs';
import { openChat } from './verification-workspace.mjs';
import { electronNames, processRole } from './process-family-linux.mjs';
import { canaryKey } from './secret-scan.mjs';
import { addProvider, closeOwned, launchOwned, modelFixture, notifications, ownedProcesses, procStat, runIdentity, snapshot,
  survivors, waitFor, writeProfile } from './release-safety-harness.mjs';

// OV-1004 process crash recovery matrix (Linux x64). For each scenario (idle,
// Agent stream from a loopback fixture, terminal command) one owned child
// process is SIGKILLed: renderer, extension host, pty host, shared process or
// the file-watcher utility. A target is identified by Electron's own process
// metrics through the owned automation connection, re-identified by pid +
// /proc start time + membership of the owned host's process group immediately
// before the signal, and never selected by PID alone. Each cell then requires
// the process to come back (automatically or through the app's own recovery
// control), no orphaned owned processes, and the unsaved editor text and chat
// state to be restored. `--observe` records without asserting.
assert.equal(process.platform, 'linux', 'The crash-recovery matrix runs on Linux');
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const { layout, appRoot } = await verificationRuntime(root);
const observe = process.argv.includes('--observe');
const onlyTargets = process.argv.find(argument => argument.startsWith('--targets='))?.slice(10).split(',');
const onlyScenarios = process.argv.find(argument => argument.startsWith('--scenarios='))?.slice(12).split(',');
await mkdir(join(root, 'logs'), { recursive: true });
const directory = await mkdtemp(join(root, 'logs/crash-recovery-'));
const project = join(directory, 'project');
await mkdir(project);
const runId = randomUUID(), key = canaryKey(), errors = [], exits = [];
const notes = join(project, 'notes.md');
await writeFile(join(project, 'README.md'), '# Crash-recovery fixture\n');

// Terminal fixture: reports its identity to a nonce-authenticated socket; it is
// ended only through that socket.
const terminalToken = randomUUID(), terminals = new Map();
const terminalServer = createNetServer(socket => {
  socket.setEncoding('utf8'); let buffer = '';
  socket.on('error', () => {});
  socket.on('data', chunk => {
    buffer += chunk; if (!buffer.includes('\n')) return;
    let message; try { message = JSON.parse(buffer.slice(0, buffer.indexOf('\n'))); } catch { return socket.destroy(); }
    if (message.token !== terminalToken || terminals.has(message.name)) return socket.destroy();
    const closed = Promise.withResolvers(); socket.on('close', () => closed.resolve(Date.now()));
    terminals.set(message.name, { ...message, socket, closed: closed.promise, closedAt: undefined });
    closed.promise.then(at => { terminals.get(message.name).closedAt = at; });
  });
});
await new Promise(resolve => terminalServer.listen(0, '127.0.0.1', resolve));
const terminalScript = join(project, 'terminal-fixture.cjs');
await writeFile(terminalScript, [
  "const fs = require('node:fs');",
  "const stat = fs.readFileSync('/proc/self/stat', 'utf8'); const fields = stat.slice(stat.lastIndexOf(')') + 2).split(' ');",
  `const socket = require('node:net').connect(${terminalServer.address().port}, '127.0.0.1');`,
  `socket.on('connect', () => socket.write(JSON.stringify({ token: ${JSON.stringify(terminalToken)}, name: process.argv[2], pid: process.pid, ppid: process.ppid, pgid: Number(fields[2]), start: fields[19] }) + '\\n'));`,
  "socket.on('data', () => process.exit(0)); socket.on('end', () => process.exit(0)); socket.on('error', () => process.exit(1));",
  "setTimeout(() => process.exit(42), 300000);",
].join('\n'));

const fixture = await modelFixture({ model: 'fixture-crash', key, respond: ({ prompt, finish, hold }) => {
  const held = /HOLD-([\w-]+)/.exec(prompt);
  if (held) return hold(`Streaming for ${held[1]} `);
  const reply = /REPLY-([\w-]+)/.exec(prompt);
  finish(reply ? `Recovered reply ${reply[1]}.` : 'OpenVision crash fixture reply.');
} });

const identity = await runIdentity(root, { host: layout.executable, main: join(appRoot, 'out/main.js'),
  workbench: join(appRoot, 'out/vs/workbench/workbench.desktop.main.js'), verifier: fileURLToPath(import.meta.url) });
identity.xdotool = spawnSync('xdotool', ['version'], { encoding: 'utf8' }).stdout?.trim() || null;
const result = { checkedAt: new Date().toISOString(), runId, directory: relative(root, directory), identity, observe, cells: [], exits, errors,
  requests: fixture.requests, success: false,
  scope: 'Linux x64 (Xvfb) native host; SIGKILL of one owned child process per cell, identified through Electron metrics and re-checked by pid, /proc start time and owned process group; controlled loopback model fixture with a canary key. Not power loss, kernel crash, OOM-killer policy, Windows (0xC0000005) or macOS.' };

const baseline = join(directory, 'profile-baseline');
await writeProfile(baseline, { 'files.hotExit': 'onExitAndWindowClose', 'window.restoreWindows': 'all',
  'terminal.integrated.enablePersistentSessions': true });
await writeFile(notes, 'crash recovery notes\n');

async function roles(app, hostPid) {
  const metrics = await electronNames(app);
  const renderer = await app.evaluate(({ BrowserWindow }) => BrowserWindow.getAllWindows()
    .filter(window => !window.isDestroyed()).map(window => window.webContents.getOSProcessId()));
  const entries = [];
  for (const [pid, metric] of metrics) {
    const stat = procStat(pid); if (!stat) continue;
    let role = processRole(metric, '', stat.comm);
    if (role === 'renderer' && !renderer.includes(pid)) role = 'renderer:other';
    entries.push({ role, pid, start: stat.start, pgid: stat.pgid, name: metric.name, type: metric.type, owned: stat.pgid === hostPid });
  }
  return entries;
}

// Re-identifies the target immediately before the signal: same pid and start
// time, still in the owned host's group, still reported by Electron under the
// expected role. Only then is SIGKILL sent.
// Every process of the role is killed (the workbench runs several extension
// hosts; the Agent's is one of them).
async function killOwned(app, hostPid, role) {
  const candidates = (await roles(app, hostPid)).filter(entry => entry.role === role);
  assert.equal(candidates.length >= 1, true, `No owned ${role} process`);
  const again = await roles(app, hostPid);
  for (const target of candidates) {
    const now = procStat(target.pid);
    assert.ok(now && now.start === target.start && now.pgid === hostPid && now.state !== 'Z', `${role} identity changed before signal`);
    assert.equal(again.find(entry => entry.pid === target.pid)?.role, role, `${role} was not re-identified by Electron`);
  }
  for (const target of candidates) process.kill(target.pid, 'SIGKILL');
  for (const target of candidates)
    await waitFor(() => { const stat = procStat(target.pid); return !stat || stat.start !== target.start || stat.state === 'Z'; }, `${role} did not exit`, 10000);
  return { ...candidates[0], count: candidates.length, pids: candidates.map(target => target.pid) };
}

// Orphans: processes carrying this run's nonce that are no longer descendants
// of the live owned host (reparented away from it).
async function orphans(hostPid) {
  const owned = await ownedProcesses(runId, []);
  const byPid = new Map(owned.map(entry => [entry.pid, entry]));
  return owned.filter(entry => {
    if (entry.pid === hostPid || entry.state === 'Z') return false;
    for (let cursor = entry, depth = 0; cursor && depth < 64; depth++) {
      if (cursor.ppid === hostPid) return false;
      cursor = byPid.get(cursor.ppid) ?? procStat(cursor.ppid);
      if (cursor?.pid === hostPid) return false;
    }
    return true;
  }).map(entry => ({ pid: entry.pid, ppid: entry.ppid, cmdline: entry.cmdline }));
}

const xWindows = () => (spawnSync('xdotool', ['search', '--onlyvisible', '--name', '.*'], { encoding: 'utf8' }).stdout ?? '')
  .split('\n').filter(Boolean);
// Native message box (Electron dialog) after a renderer crash: press its
// default button ("Reopen") with real X input.
async function answerNativeDialog(before) {
  const dialog = await waitFor(() => xWindows().find(id => !before.includes(id)), 'No native crash dialog appeared', 20000, 250).catch(() => undefined);
  if (!dialog) return { dialog: false };
  const title = spawnSync('xdotool', ['getwindowname', dialog], { encoding: 'utf8' }).stdout?.trim();
  spawnSync('xdotool', ['windowfocus', '--sync', dialog]);
  spawnSync('xdotool', ['key', '--clearmodifiers', 'Return']);
  return { dialog: true, title };
}

const unsavedText = cell => `unsaved-${cell}`;
async function dirtyEditor(page, cell) {
  await page.locator('.tabs-container .tab').filter({ hasText: 'notes.md' }).first().click();
  await page.locator('.monaco-editor .view-lines').first().click();
  await page.keyboard.press('ControlOrMeta+End');
  await page.keyboard.type(` ${unsavedText(cell)}`);
  await page.waitForTimeout(2500); // working-copy backup delay
}
const editorText = page => page.locator('.monaco-editor .view-lines').first().innerText().catch(() => '');
const terminalText = page => page.locator('.terminal-wrapper .xterm-rows, .terminal .xterm-rows').evaluateAll(elements =>
  elements.map(element => element.textContent).join('\n')).catch(() => '');

// A new terminal through the command palette (the row also shows its keybinding).
async function newTerminal(page) {
  const before = await page.locator('.terminal-wrapper').count();
  await page.keyboard.press('ControlOrMeta+Shift+p');
  await page.locator('.quick-input-widget').getByRole('textbox', { name: 'input', exact: true }).fill('>Terminal: Create New Terminal');
  await page.locator('.quick-input-list .monaco-list-row').filter({ hasText: 'Terminal: Create New Terminal' })
    .filter({ hasNotText: /Editor|Profile|Window|Side/ }).first().click();
  await waitFor(async () => await page.locator('.terminal-wrapper').count() > before, 'terminal was not created', 20000);
  await page.locator('.terminal-wrapper .xterm').filter({ visible: true }).last().waitFor({ timeout: 20000 });
}

async function startTerminal(page, cell) {
  await newTerminal(page);
  await page.waitForTimeout(1500);
  await page.keyboard.type(`node "${terminalScript}" ${cell}`); await page.keyboard.press('Enter');
  await waitFor(() => terminals.has(cell), 'Terminal fixture did not connect', 20000);
}

async function terminalUsable(page, cell) {
  const marker = join(project, `terminal-ok-${cell}.txt`);
  if (!await newTerminal(page).then(() => true, () => false)) return false;
  await page.waitForTimeout(2500);
  await page.keyboard.type(`echo ok > "${marker}"`); await page.keyboard.press('Enter');
  return waitFor(() => readFile(marker, 'utf8').then(text => text.trim() === 'ok', () => false), 'terminal not usable', 15000).catch(() => false);
}

// Recovery of the killed role: a new process with a different identity in the
// same role, without a new owned host. `act` is the app's own recovery control.
// Every killed process of the role is replaced by a new one.
async function recovered(app, hostPid, role, killed, timeout) {
  return waitFor(async () => {
    const fresh = (await roles(app, hostPid)).filter(entry => entry.role === role && !killed.pids?.includes(entry.pid));
    return fresh.length >= (killed.count ?? 1) ? { ...fresh[0], count: fresh.length } : undefined;
  },
    `${role} did not come back`, timeout, 500).catch(() => undefined);
}

let session;
async function launch(profile, stage) {
  session = await launchOwned({ layout, profile, args: [project, notes], runId, errors });
  await session.page.waitForTimeout(6000);
  return session;
}

const scenarios = ['idle', 'agent', 'terminal'];
const targets = ['renderer', 'extension-host', 'pty-host', 'shared-process', 'file-watcher'];

async function runCell(scenario, role) {
  const cell = `${scenario}-${role}`, record = { cell, scenario, role, stages: [], violations: [] };
  result.cells.push(record);
  const profile = join(directory, `profile-${cell}`);
  execFileSync('cp', ['-a', '--', baseline, profile]);
  await writeFile(notes, 'crash recovery notes\n');
  let { app, page, child } = await launch(profile, cell);
  const hostPid = child.pid;
  try {
    record.rolesBefore = (await roles(app, hostPid)).map(({ role, pid, name }) => ({ role, pid, name }));
    await dirtyEditor(page, cell);
    let prompt;
    if (scenario === 'agent') {
      const input = await openChat(page);
      prompt = `HOLD-${cell} stream please.`;
      const before = fixture.requests.length;
      await input.fill(prompt); await input.press('Enter');
      await waitFor(() => fixture.requests.length > before, 'Agent request did not reach the fixture', 30000);
      await page.getByText(`Streaming for ${cell}`, { exact: false }).filter({ visible: true }).first().waitFor({ timeout: 20000 }).catch(() => {});
      record.agentRequest = fixture.requests.length - 1;
    } else if (scenario === 'terminal') {
      await startTerminal(page, cell);
      record.terminalChild = { ...terminals.get(cell), socket: undefined, closed: undefined };
    }
    // Observation only: Electron's child-process-gone events and the number of
    // app listeners for them, before and after the kill.
    record.goneListenersBefore = await app.evaluate(({ app }) => {
      globalThis.openvisionVerifierGone ??= [];
      if (!globalThis.openvisionVerifierGoneListener) {
        globalThis.openvisionVerifierGoneListener = (_event, details) => globalThis.openvisionVerifierGone.push({ at: Date.now(), ...details });
        app.on('child-process-gone', globalThis.openvisionVerifierGoneListener);
      }
      return app.listenerCount('child-process-gone') - 1;
    });
    // Recorded: native crash prompts are sent to the focused window only.
    record.focusedBeforeKill = await app.evaluate(({ BrowserWindow }) => !!BrowserWindow.getFocusedWindow());
    const windowsBefore = xWindows();
    record.killed = await killOwned(app, hostPid, role);
    record.killedAt = Date.now();
    if (role === 'renderer') {
      record.dialog = await answerNativeDialog(windowsBefore);
      page = await waitFor(async () => app.windows().find(candidate => !candidate.isClosed() && candidate !== page) ??
        (await page.locator('.part.titlebar .openvision-local-profile').count().catch(() => 0) ? page : undefined), 'window was not reopened', 30000, 500).catch(() => undefined);
      if (page) {
        page.setDefaultTimeout(15000);
        await page.locator('.part.titlebar .openvision-local-profile').waitFor({ state: 'attached', timeout: 60000 });
        await page.waitForTimeout(5000);
      }
      record.recovery = { mode: record.dialog.dialog ? 'native dialog Reopen' : 'none', windowRestored: !!page };
      record.replacement = page ? await recovered(app, hostPid, 'renderer', record.killed, 10000) : undefined;
    } else {
      record.replacement = await recovered(app, hostPid, role, record.killed, 20000);
      record.notifications = await notifications(page);
      if (!record.replacement) {
        // The app's own recovery control, when it offers one.
        const restart = page.getByRole('button', { name: /^Restart( Extension Host)?$/ }).filter({ visible: true });
        if (await restart.count()) {
          await restart.first().click(); record.recovery = { mode: 'notification Restart' };
          record.replacement = await recovered(app, hostPid, role, record.killed, 30000);
        }
      } else record.recovery = { mode: 'automatic' };
    }
    record.recoveryMs = record.replacement ? Date.now() - record.killedAt : undefined;
    const gone = await app.evaluate(({ app }) => ({ events: globalThis.openvisionVerifierGone ?? [],
      listeners: app.listenerCount('child-process-gone') - (globalThis.openvisionVerifierGoneListener ? 1 : 0) })).catch(() => undefined);
    record.goneEvents = gone?.events.filter(event => event.at >= record.killedAt - 1000); record.goneListenersAfter = gone?.listeners;
    record.notifications = [...new Set([...(record.notifications ?? []), ...(page ? await notifications(page) : [])])];
    if (page) {
      record.editorRestored = (await editorText(page)).includes(unsavedText(cell));
      if (scenario === 'agent') {
        const held = fixture.requests[record.agentRequest];
        // Whether the kill ended the in-flight provider stream (recorded), and
        // that it is closed once the user stops the turn (asserted below).
        record.agentStreamClosedByKill = await waitFor(() => held.closed, 'held stream not closed', 10000).then(() => true, () => false);
        await openChat(page).catch(() => {});
        record.chatRestored = await page.getByText(prompt, { exact: false }).filter({ visible: true }).count() > 0;
        // The same window can still use the Agent after recovery.
        const input = await openChat(page).catch(() => undefined);
        if (input) {
          const stop = page.locator('.stop-button').filter({ visible: true });
          if (await stop.count()) await stop.first().click().catch(() => {});
          record.agentStreamClosedAfterStop = await waitFor(() => held.closed, 'held stream not closed', 10000).then(() => true, () => false);
          await input.fill(`REPLY-${cell} now.`); await input.press('Enter');
          record.agentUsable = await page.getByText(`Recovered reply ${cell}.`, { exact: true }).first().waitFor({ timeout: 30000 }).then(() => true, () => false);
        }
      }
      if (scenario === 'terminal') {
        const terminal = terminals.get(cell);
        record.terminalChildEnded = !!terminal.closedAt;
        record.terminalUsable = await terminalUsable(page, cell);
      }
      record.body = (await snapshot(page, directory, `${cell}-after-recovery`)).slice(-1500);
    }
    record.orphans = await orphans(hostPid);
    // A full restart must also restore the state (hot exit and chat).
    await closeOwned(app, exits, `${cell} close`);
    record.closeExit = exits.at(-1);
    record.survivorsAfterClose = (await survivors(runId, [hostPid])).map(entry => entry.cmdline);
    ({ app, page, child } = await launch(profile, `${cell} restart`));
    record.restart = { editorRestored: (await editorText(page)).includes(unsavedText(cell)) };
    if (scenario === 'agent') {
      await openChat(page).catch(() => {});
      record.restart.chatRestored = await page.getByText(prompt, { exact: false }).filter({ visible: true }).count() > 0;
    }
    await closeOwned(app, exits, `${cell} restart close`);
    record.restartExit = exits.at(-1);
    record.survivorsAtEnd = (await survivors(runId, [child.pid])).map(entry => entry.cmdline);
  } catch (error) {
    record.failure = error.message;
    if (page && !page.isClosed()) await snapshot(page, directory, `${cell}-failure`);
    await closeOwned(app, exits, `${cell} failure`).catch(error => { record.cleanupFailure = error.message; });
  } finally {
    for (const terminal of terminals.values()) if (!terminal.socket.destroyed) terminal.socket.end('exit\n');
  }
  judge(record);
  await writeFile(join(directory, 'result.json'), JSON.stringify(result, null, 2));
}

function judge(record) {
  const fail = message => record.violations.push(message);
  if (record.failure) fail(`failure: ${record.failure}`);
  if (!record.replacement) fail(`${record.role} did not restart`);
  if (record.editorRestored === false) fail('unsaved editor text not present after recovery');
  if (record.restart && !record.restart.editorRestored) fail('unsaved editor text not restored after restart');
  if (record.scenario === 'agent') {
    const held = fixture.requests[record.agentRequest];
    record.agentStreamClosedAtEnd = !!held?.closed;
    if (!record.agentStreamClosedAtEnd) fail('the interrupted provider stream was never closed');
    if (record.chatRestored === false && record.restart?.chatRestored === false) fail('chat state not restored');
    if (record.agentUsable === false) fail('Agent unusable after recovery');
  }
  if (record.scenario === 'terminal' && record.terminalUsable === false) fail('terminal unusable after recovery');
  if (record.orphans?.length) fail(`${record.orphans.length} orphaned owned processes`);
  if (record.survivorsAfterClose?.length || record.survivorsAtEnd?.length) fail('owned processes survived close');
  for (const exit of [record.closeExit, record.restartExit]) if (exit && exit.exitCode !== 0) fail(`host exit ${exit.exitCode}/${exit.signalCode} at ${exit.stage}`);
}

try {
  // Baseline: one provider (canary key) so Agent cells can stream.
  let { app, page } = await launch(baseline, 'baseline');
  await addProvider(page, { name: 'Crash fixture', url: fixture.url, key, model: 'fixture-crash' });
  await page.waitForTimeout(2000);
  await closeOwned(app, exits, 'baseline');
  for (const scenario of scenarios) if (!onlyScenarios || onlyScenarios.includes(scenario))
    for (const role of targets) if (!onlyTargets || onlyTargets.includes(role)) await runCell(scenario, role);
  assert.ok(fixture.requests.every(request => request.authorized && request.model === 'fixture-crash'), 'Every inference used the canary-key fixture');
  result.violations = result.cells.flatMap(cell => cell.violations.map(message => `${cell.cell}: ${message}`));
  if (!observe) assert.deepEqual(result.violations, [], 'Crash-recovery acceptance');
  result.success = !observe;
} catch (error) {
  result.failure = error.stack; process.exitCode = 1;
} finally {
  // A failure outside a cell (baseline) must not leave the owned app running.
  const child = session?.app?.process();
  if (child && child.exitCode === null && child.signalCode === null) await closeOwned(session.app, exits, 'final cleanup').catch(() => {});
  await fixture.close();
  await new Promise(resolve => terminalServer.close(resolve));
  result.finalSurvivors = await survivors(runId, [], 3000);
  await writeFile(join(directory, 'result.json'), JSON.stringify(result, null, 2));
  console.log(JSON.stringify({ directory: result.directory, success: result.success, failure: result.failure?.split('\n')[0],
    cells: result.cells.map(cell => ({ cell: cell.cell, killed: cell.killed?.count, recovery: cell.recovery?.mode,
      streamClosedByKill: cell.agentStreamClosedByKill, streamClosedAfterStop: cell.agentStreamClosedAfterStop, recoveryMs: cell.recoveryMs, editor: cell.editorRestored,
      restart: cell.restart, chat: cell.chatRestored, agentUsable: cell.agentUsable, terminalUsable: cell.terminalUsable,
      orphans: cell.orphans?.length, notifications: cell.notifications, violations: cell.violations })) }, null, 2));
}
