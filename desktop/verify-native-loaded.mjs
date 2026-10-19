// OV-801 measured loaded roles on Linux x64. Runs the owned host under
// strace -ff (execve/openat/clone only, successful calls) and samples
// /proc/<pid>/maps across the owned process family during a fixed workload:
// startup, Explorer, terminal, task, debugger, Agent chat against a loopback
// model fixture (reply, Read and a search tool call), workbench search and file
// search (ripgrep), local VSIX install, then a fixed idle period. Every path in
// the committed native/WASM inventory gets a record: process role, trigger phase,
// frequency, or never-loaded. Nothing outside the owned launch is signalled.
//
//   npm run verify:native-loaded [-- --idle-minutes=10] [--settle-seconds=30]
import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { closeSync, openSync, readSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { chmod, copyFile, mkdir, mkdtemp, readdir, readFile, realpath, rename, writeFile } from 'node:fs/promises';
import { cpus, release, totalmem } from 'node:os';
import { dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { _electron } from '../tooling/browser.mjs';
import { verificationRuntime } from './verification-runtime.mjs';
import { verificationSettings } from './verification-profile.mjs';
import { linuxSandboxArguments } from './platform.mjs';
import { enterWorkspace, openChat } from './verification-workspace.mjs';
import { fileHash } from './import-files.mjs';
import { electronNames, hostLoad, processFamily, stillAlive } from './process-family-linux.mjs';
import { vsix } from './extension-lifecycle.mjs';
import { inventoryPath } from './native-inventory.mjs';
import { aggregate, inventoryPathFor, mappedPaths, parseTraceLine, processTree } from './native-loaded.mjs';

assert.equal(process.platform, 'linux', 'verify:native-loaded reads Linux /proc maps and strace output');
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const { layout, appRoot } = await verificationRuntime(root);
const argument = (name, fallback) => process.argv.find(item => item.startsWith(`--${name}=`))?.slice(name.length + 3) ?? fallback;
const idleMinutes = Number(argument('idle-minutes', '10'));
const settleSeconds = Number(argument('settle-seconds', '30'));
await mkdir(join(root, 'logs'), { recursive: true });
const directory = await mkdtemp(join(root, 'logs/native-loaded-'));
const profile = join(directory, 'profile'), project = join(directory, 'project'), driver = join(directory, 'driver');
const extensions = join(directory, 'extensions'), traces = join(directory, 'strace');
await Promise.all([mkdir(join(profile, 'User'), { recursive: true }), mkdir(join(project, 'src'), { recursive: true }), mkdir(driver), mkdir(traces)]);
await writeFile(join(profile, 'User/settings.json'), JSON.stringify({ ...verificationSettings,
  'git.openRepositoryInParentFolders': 'never', 'workbench.startupEditor': 'none', 'extensions.autoCheckUpdates': false,
  'extensions.ignoreRecommendations': true, 'debug.openDebug': 'neverOpen',
  'terminal.integrated.enablePersistentSessions': false, 'terminal.integrated.confirmOnKill': 'never',
  'terminal.integrated.confirmOnExit': 'never', 'terminal.integrated.gpuAcceleration': 'off',
  'terminal.integrated.profiles.linux': { 'ov-bash': { path: '/bin/bash', args: ['--noprofile', '--norc'] } },
  'terminal.integrated.defaultProfile.linux': 'ov-bash' }));
await writeFile(join(project, 'hello.js'), 'export const answer = 42;\n');
await writeFile(join(project, 'search.txt'), Array.from({ length: 32 }, (_, index) => `NativeSearchToken${index} line\n`).join(''));
for (let index = 0; index < 40; index++) await writeFile(join(project, 'src', `module-${index}.js`), `export const value${index} = ${index};\n`);
await writeFile(join(project, 'debug.cjs'), "require('node:fs').writeFileSync(process.env.OPENVISION_DEBUG_MARKER, JSON.stringify({ pid: process.pid, value: 6 * 7 }));\n");
execFileSync('git', ['init', '-q', project]);
execFileSync('git', ['-C', project, '-c', 'user.name=OpenVision', '-c', 'user.email=verify@openvision.invalid', 'add', '.']);
execFileSync('git', ['-C', project, '-c', 'user.name=OpenVision', '-c', 'user.email=verify@openvision.invalid', 'commit', '-qm', 'fixture']);
await writeFile(join(driver, 'package.json'), JSON.stringify({ name: 'openvision-native-loaded-verifier', publisher: 'openvision-local-verification',
  version: '0.0.0', engines: { vscode: '^1.90.0' }, main: './extension.cjs', activationEvents: ['onStartupFinished'] }));
await copyFile(join(root, 'desktop/verify-native-loaded-extension.cjs'), join(driver, 'extension.cjs'));
// Local VSIX for the install phase: a plain JavaScript extension, no native code.
const vsixPath = join(directory, 'ov-native-install.vsix'), vsixId = 'openvision-local-verification.ov-native-install';
await writeFile(vsixPath, vsix({ manifest: { name: 'ov-native-install', publisher: 'openvision-local-verification', version: '1.0.0',
  engines: { vscode: '^1.90.0' }, main: './extension.js', activationEvents: ['onStartupFinished'] },
  files: { 'extension.js': '"use strict";\nexports.activate = () => ({ pid: process.pid });\n' } }));
await writeFile(join(directory, 'driver-config.json'), JSON.stringify({ node: process.execPath, vsix: vsixPath, vsixId, extensions }));

const inventory = JSON.parse(await readFile(join(root, inventoryPath), 'utf8'));
const items = [...inventory.natives, ...inventory.wasm];
const roots = { host: await realpath(layout.host), app: await realpath(appRoot), executable: relative(layout.host, layout.executable) };
// Runtime counterparts of every inventory path, with digest agreement.
const runtimeFiles = [];
for (const item of items) {
  const suffix = item.path.replace(/^usr\/share\/cursor\//, '');
  const candidate = suffix === 'cursor' ? layout.executable : suffix.startsWith('resources/app/') ? join(roots.app, suffix.slice(14)) : join(roots.host, suffix);
  const digest = suffix.startsWith('/') ? null : await fileHash(candidate).catch(() => null);
  runtimeFiles.push({ path: item.path, runtime: relative(root, candidate), present: digest !== null, matchesInventory: digest === item.sha256 });
}

const identity = { commit: execFileSync('git', ['rev-parse', 'HEAD'], { cwd: root, encoding: 'utf8' }).trim(),
  dirty: execFileSync('git', ['status', '--porcelain'], { cwd: root, encoding: 'utf8' }).split('\n').filter(Boolean),
  platform: process.platform, arch: process.arch, osRelease: release(), node: process.version,
  strace: execFileSync('strace', ['-V'], { encoding: 'utf8' }).split('\n')[0],
  cpu: cpus()[0]?.model, logicalProcessors: cpus().length, totalMemoryMiB: Math.round(totalmem() / 1048576),
  inventory: await fileHash(join(root, inventoryPath)), hashes: Object.fromEntries(await Promise.all([['host', layout.executable],
    ['verifier', fileURLToPath(import.meta.url)], ['logic', join(root, 'desktop/native-loaded.mjs')],
    ['driver', join(root, 'desktop/verify-native-loaded-extension.cjs')], ['main', join(appRoot, 'out/main.js')],
    ['workbench', join(appRoot, 'out/vs/workbench/workbench.desktop.main.js')]].map(async ([name, path]) => [name, await fileHash(path)]))) };

// Deterministic loopback model: a reply, one Read call, or one search-tool call.
const requests = [];
let toolNames = [];
const server = createServer(async (request, response) => {
  if (request.url === '/v1/models') { response.setHeader('content-type', 'application/json'); return response.end(JSON.stringify({ data: [{ id: 'fixture-agent' }] })); }
  if (request.url !== '/v1/chat/completions') { response.statusCode = 404; return response.end(); }
  const chunks = []; for await (const chunk of request) chunks.push(chunk);
  const payload = JSON.parse(Buffer.concat(chunks));
  const user = JSON.stringify(payload.messages?.findLast(message => message.role === 'user')?.content ?? '');
  const marker = /native-(reply|read|search)-(\d+)/.exec(user);
  const toolResult = payload.messages?.at(-1)?.role === 'tool';
  toolNames = (payload.tools ?? []).map(tool => tool.function?.name).filter(Boolean);
  requests.push({ at: Date.now(), marker: marker?.[0], toolResult, tools: toolNames.length });
  response.writeHead(200, { 'Content-Type': 'text/event-stream' });
  const event = (delta, finish_reason = null) => response.write(`data: ${JSON.stringify({ id: 'fixture', object: 'chat.completion.chunk',
    model: payload.model, choices: [{ index: 0, delta, finish_reason }] })}\n\n`);
  const search = payload.tools?.find(tool => /^grep$/i.test(tool.function?.name ?? '')) ?? payload.tools?.find(tool => /grep|search/i.test(tool.function?.name ?? ''));
  const read = payload.tools?.find(tool => tool.function?.name === 'Read');
  const call = marker?.[1] === 'read' ? read && { name: 'Read', arguments: { path: join(project, 'hello.js') } }
    : marker?.[1] === 'search' ? search && { name: search.function.name, arguments: Object.fromEntries(Object.keys(search.function.parameters?.properties ?? {})
      .filter(key => /pattern|query|regex/i.test(key) || key === 'path').map(key => [key, key === 'path' ? project : 'NativeSearchToken7'])) } : null;
  if (call && !toolResult) {
    event({ role: 'assistant', tool_calls: [{ index: 0, id: `call_${marker[0]}`, type: 'function', function: { name: call.name, arguments: JSON.stringify(call.arguments) } }] });
    event({}, 'tool_calls');
  } else {
    event({ role: 'assistant', content: `OpenVision ${marker?.[0] ?? 'native-reply-0'} done.` });
    event({}, 'stop');
  }
  response.end('data: [DONE]\n\n');
});
await new Promise(done => server.listen(0, '127.0.0.1', done));

const result = { checkedAt: new Date().toISOString(), story: 'OV-801', identity, directory: relative(root, directory),
  scope: 'Linux x64 source build under Xvfb; fixed workload; controlled loopback model fixture and local VSIX; one host launch traced with strace -ff.',
  options: { idleMinutes, settleSeconds }, roots: { host: relative(root, roots.host), app: relative(root, roots.app) },
  runtimeFiles, phases: [], actions: [], errors: [], success: false };
const pause = ms => new Promise(done => setTimeout(done, ms));
let app, page, tracer, rootPid, names = new Map();
const samples = [], roles = new Map();
let currentPhase = 'launch';

async function sample() {
  names = await electronNames(app).catch(() => names);
  const list = await processFamily({ rootPid: tracer, names });
  const processes = [];
  for (const item of list) {
    if (item.pid === tracer) continue;
    roles.set(item.pid, item.role);
    const maps = await readFile(`/proc/${item.pid}/maps`, 'utf8').catch(() => '');
    processes.push({ pid: item.pid, role: item.role, maps: mappedPaths(maps).filter(path => inventoryPathFor(path, roots)) });
  }
  samples.push({ phase: currentPhase, at: Date.now() / 1000, processes });
}
function sampler(intervalMs) {
  let stopped = false;
  const loop = (async () => { while (!stopped) { await sample().catch(error => result.errors.push(`sample: ${error.message}`)); await pause(intervalMs); } })();
  return async () => { stopped = true; await loop; };
}
async function phase(name, work, intervalMs = 1000) {
  const record = { name, start: Date.now() / 1000 };
  currentPhase = name;
  const stop = sampler(intervalMs);
  try { record.detail = await work(); }
  finally { await stop(); await sample().catch(() => {}); record.end = Date.now() / 1000; result.phases.push(record); }
  console.log(`[${name}] ${Math.round((record.end - record.start) * 1000)} ms ${JSON.stringify(record.detail ?? {}).slice(0, 200)}`);
  return record.detail;
}

let requestId = 0;
async function drive(action) {
  const id = ++requestId;
  await writeFile(join(directory, 'request.json.pending'), JSON.stringify({ id, action }));
  await rename(join(directory, 'request.json.pending'), join(directory, 'request.json'));
  const deadline = Date.now() + 180000;
  for (;;) {
    const text = await readFile(join(directory, `response-${id}.json`), 'utf8').catch(() => null);
    if (text) { const response = JSON.parse(text); result.actions.push(response); assert.ok(response.ok, `${action}: ${response.error}`); return response; }
    assert.ok(Date.now() < deadline, `Driver did not answer ${action}`);
    await pause(200);
  }
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
  await page.getByText(expected, { exact: true }).first().waitFor({ timeout: 90000 });
}

async function close() {
  const child = app.process();
  const exited = child.exitCode !== null || child.signalCode !== null ? Promise.resolve() : new Promise(done => child.once('exit', done));
  const members = (await processFamily({ rootPid: tracer })).map(item => ({ pid: item.pid, start: item.start, role: item.role }));
  const closed = app.close().catch(() => {});
  await page?.getByText('Quit Anyway', { exact: true }).click({ timeout: 5000 }).catch(() => {});
  await closed; await Promise.race([exited, pause(30000)]);
  const deadline = Date.now() + 30000;
  let remaining = members;
  while (Date.now() < deadline && remaining.length) { remaining = await stillAlive(members); if (remaining.length) await pause(500); }
  app = undefined; page = undefined;
  return { exit: { code: child.exitCode, signal: child.signalCode }, remaining };
}

async function readTraces() {
  const events = [];
  let lines = 0, files = 0;
  for (const entry of await readdir(traces)) {
    const tid = Number(/\.(\d+)$/.exec(entry)?.[1]);
    if (!tid) continue;
    files++;
    for (const line of (await readFile(join(traces, entry), 'utf8')).split('\n')) {
      lines++;
      const event = parseTraceLine(line, tid);
      if (!event) continue;
      if (event.call === 'openat' && !/\.(node|wasm)$|\.so(\.\d+)*$/.test(event.path ?? '')) continue;
      events.push(event);
    }
  }
  return { events, lines, files };
}

try {
  const wrapper = join(directory, 'traced-host.sh');
  await writeFile(wrapper, `#!/bin/sh\nexec strace -f -ff -qq -ttt -s 512 --status=successful -e trace=execve,execveat,openat,clone,clone3,fork,vfork -o '${traces}/t' -- '${layout.executable}' "$@"\n`);
  await chmod(wrapper, 0o755);
  const env = { ...process.env, OPENVISION_NATIVE_LOADED_DIR: directory }; delete env.ELECTRON_RUN_AS_NODE;
  await phase('startup', async () => {
    const started = performance.now();
    app = await _electron.launch({ executablePath: wrapper, env, timeout: 180000,
      args: ['--user-data-dir', profile, '--extensions-dir', extensions, '--extensionDevelopmentPath', driver, '--new-window', '--disable-updates',
        '--skip-welcome', '--skip-release-notes', '--disable-telemetry', '--disable-crash-reporter', ...await linuxSandboxArguments(layout.host), project] });
    tracer = app.process().pid;
    for (let attempt = 0; attempt < 200 && !rootPid; attempt++) {
      rootPid = (await processFamily({ rootPid: tracer })).find(item => item.ppid === tracer)?.pid;
      if (!rootPid) await pause(50);
    }
    assert.ok(rootPid, 'Traced Electron main process not found');
    page = await app.firstWindow(); page.setDefaultTimeout(60000);
    page.on('pageerror', error => result.errors.push(`page: ${error.message}`));
    await page.locator('.part.titlebar .openvision-local-profile').waitFor({ state: 'attached', timeout: 180000 });
    await enterWorkspace(page);
    await page.locator('.part.sidebar').getByRole('treeitem').filter({ hasText: 'hello.js' }).first().waitFor({ timeout: 90000 });
    const workspaceMs = Math.round(performance.now() - started);
    const deadline = Date.now() + 120000;
    while (!await readFile(join(directory, 'driver-ready.json'), 'utf8').catch(() => null)) { assert.ok(Date.now() < deadline, 'Driver extension did not start'); await pause(250); }
    await pause(settleSeconds * 1000);
    return { workspaceMs, mainPid: rootPid };
  });
  await phase('explorer', async () => {
    const tree = page.locator('.part.sidebar');
    await tree.getByRole('treeitem').filter({ hasText: /^src$/ }).first().click();
    await tree.getByRole('treeitem').filter({ hasText: 'module-7.js' }).first().waitFor();
    // Collapse again: the expanded folder pushes hello.js out of the virtualized tree.
    await tree.getByRole('treeitem').filter({ hasText: /^src$/ }).first().click();
    await tree.getByRole('treeitem').filter({ hasText: 'hello.js' }).first().dblclick();
    await page.locator('.tabs-container .tab').filter({ hasText: 'hello.js' }).first().waitFor();
    await pause(5000);
    return { opened: 'hello.js' };
  });
  await phase('terminal', async () => {
    await command('Terminal: Create New Terminal');
    const terminal = page.locator('.terminal-wrapper .xterm-helper-textarea').filter({ visible: true }).first();
    await terminal.waitFor(); await terminal.focus();
    await page.keyboard.insertText('echo OV_NATIVE_TERMINAL_$((40+2))'); await page.keyboard.press('Enter');
    const deadline = Date.now() + 30000;
    while (!(await page.locator('.terminal-wrapper').filter({ visible: true }).innerText().catch(() => '')).includes('OV_NATIVE_TERMINAL_42')) {
      assert.ok(Date.now() < deadline, 'Terminal must run the owned shell command'); await pause(250);
    }
    await pause(3000);
    await command('Terminal: Kill the Active Terminal Instance');
    return { marker: 'OV_NATIVE_TERMINAL_42' };
  });
  await phase('task', async () => { const response = await drive('task'); assert.equal(response.exitCode, 0); await pause(3000); return { exitCode: response.exitCode }; });
  await phase('debugger', async () => { const response = await drive('debug'); assert.equal(response.marker.value, 42); await pause(3000); return { ended: response.ended }; });
  await phase('agent', async () => {
    await page.locator('.part.titlebar a[aria-label$=" Settings"]').click();
    await page.locator('.cursor-settings-sidebar-cell-label').filter({ hasText: /^Models$/ }).locator('..').click();
    await page.locator('.openvision-model-settings').getByRole('button', { name: 'Add Provider', exact: true }).click();
    await page.getByLabel('Provider Name', { exact: true }).fill('Native fixture');
    await page.getByLabel('API Base URL', { exact: true }).fill(`http://127.0.0.1:${server.address().port}/v1`);
    await page.getByLabel('API Key', { exact: true }).fill('fixture-key');
    await page.locator('dialog').getByRole('button', { name: 'Save', exact: true }).click();
    await page.locator('dialog').waitFor({ state: 'detached' });
    await page.keyboard.press('ControlOrMeta+w');
    await page.keyboard.press('ControlOrMeta+Shift+l');
    await page.locator('.vscode-model-picker__trigger-markdown').filter({ visible: true }).first().click();
    await page.getByText('fixture-agent', { exact: true }).last().click(); await page.keyboard.press('Escape');
    await chat('Reply with the fixture text for native-reply-1. Do not use tools.', 'OpenVision native-reply-1 done.');
    await chat('Read hello.js for native-read-1. Do not modify files.', 'OpenVision native-read-1 done.');
    await chat('Search the project for native-search-1. Do not modify files.', 'OpenVision native-search-1 done.');
    await pause(5000);
    return { requests: requests.length, toolResults: requests.filter(item => item.toolResult).length, toolNames };
  });
  await phase('search', async () => {
    await page.keyboard.press('Escape');
    await page.keyboard.press('ControlOrMeta+Shift+f');
    const search = page.locator('.search-view .search-widget textarea').first();
    await search.fill('NativeSearchToken3 '); await search.press('Enter');
    await page.locator('.search-view .monaco-list-row').filter({ hasText: 'search.txt' }).first().waitFor({ timeout: 30000 });
    const files = await drive('findFiles');
    assert.equal(files.files, 40);
    await pause(3000);
    return { workbenchSearch: 'search.txt', findFiles: files.files };
  });
  await phase('extension-install', async () => { const response = await drive('install'); await pause(5000); return { installed: response.installed }; });
  await phase('idle', async () => {
    const until = Date.now() + idleMinutes * 60000;
    while (Date.now() < until) {
      assert.equal(app.process().exitCode ?? app.process().signalCode ?? null, null, 'Owned host exited during idle');
      await pause(Math.min(15000, until - Date.now()));
    }
    return { minutes: idleMinutes, host: await hostLoad() };
  }, 15000);
  currentPhase = 'shutdown';
  const shutdownStart = Date.now() / 1000;
  result.close = await close();
  result.phases.push({ name: 'shutdown', start: shutdownStart, end: Date.now() / 1000 });

  const { events, lines, files } = await readTraces();
  const tree = processTree(events, [rootPid]);
  result.trace = { files, lines, retainedEvents: events.length, executions: events.filter(item => item.call.startsWith('exec')).length };
  const isNative = path => {
    try { const head = Buffer.alloc(4); const fd = openSync(path, 'r'); try { readSync(fd, head, 0, 4, 0); } finally { closeSync(fd); }
      return head.readUInt32BE(0) === 0x7f454c46 || head.toString('latin1', 0, 2) === 'MZ' || head.readUInt32BE(0) === 0x0061736d; }
    catch { return true; }
  };
  const aggregated = aggregate({ inventory: items, samples, events, phases: result.phases, roles, roots, tree, isNative });
  result.scriptExecutions = aggregated.scriptExecutions;
  result.records = aggregated.records;
  result.unknownLoaded = aggregated.unknown;
  result.samples = { count: samples.length, byPhase: Object.fromEntries(Object.entries(Object.groupBy(samples, item => item.phase)).map(([key, value]) => [key, value.length])) };
  result.requests = requests.length;
  const state = Object.groupBy(result.records, item => item.state);
  result.summary = Object.fromEntries(Object.entries(state).map(([key, value]) => [key, value.length]));
  const record = path => result.records.find(item => item.path === path);
  const failures = [];
  if (result.close.exit.code !== 0) failures.push(`host exit ${JSON.stringify(result.close.exit)}`);
  if (result.close.remaining.length) failures.push(`${result.close.remaining.length} owned processes remained 30 s after exit`);
  if (result.unknownLoaded.length) failures.push(`Loaded natives without an inventory record: ${result.unknownLoaded.map(item => item.path).join(', ')}`);
  for (const file of runtimeFiles) if (!file.matchesInventory) failures.push(`Runtime file differs from inventory: ${file.path}`);
  // Instrument canaries: the terminal must map the PTY addon and search must execute ripgrep.
  if (!record('usr/share/cursor/resources/app/node_modules/node-pty/build/Release/pty.node')?.phases.includes('terminal')) failures.push('Canary: pty.node not observed during terminal');
  if (!record('usr/share/cursor/resources/app/node_modules/@vscode/ripgrep/bin/rg')?.frequency.executions) failures.push('Canary: rg never executed');
  if (!record('usr/share/cursor/cursor')?.frequency.mappedProcesses) failures.push('Canary: host executable not mapped');
  if (result.errors.length) failures.push(`${result.errors.length} sampling/page errors`);
  result.failures = failures;
  result.success = failures.length === 0;
} catch (error) {
  result.failure = error.stack;
  await page?.screenshot({ path: join(directory, 'failure.png') }).catch(() => {});
  if (app) result.cleanup = await close().catch(cleanupError => ({ error: cleanupError.message }));
} finally {
  server.close();
  await writeFile(join(directory, 'samples.json'), JSON.stringify(samples));
  await writeFile(join(directory, 'result.json'), JSON.stringify(result, null, 2));
  console.log(JSON.stringify({ directory: result.directory, success: result.success, failures: result.failures, failure: result.failure?.slice(0, 2000),
    summary: result.summary, trace: result.trace, samples: result.samples, unknownLoaded: result.unknownLoaded, scriptExecutions: result.scriptExecutions,
    phases: result.phases.map(item => ({ name: item.name, ms: Math.round((item.end - item.start) * 1000) })), close: result.close }, null, 2));
  if (!result.success) process.exitCode = 1;
}
