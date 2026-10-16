// Extended process-family telemetry verification (Linux x64).
// Workload: startup, project open/edit, settings, extensions view, Agent chat
// against a loopback model fixture, terminal, search, long idle and quit.
// Observers: owned loopback proxy (refuses non-loopback), Chromium net log,
// /proc socket sampling of the owned process tree, and strace of the tree.
import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { chmod, mkdir, mkdtemp, readFile, writeFile } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { _electron } from '../tooling/browser.mjs';
import { verificationRuntime } from './verification-runtime.mjs';
import { verificationSettings } from './verification-profile.mjs';
import { linuxSandboxArguments } from './platform.mjs';
import { enterWorkspace } from './verification-workspace.mjs';
import { fileHash } from './import-files.mjs';
import { createLoopbackProxy, processFamily, socketSnapshot, remoteSockets, parseSyscallTrace, trafficConnects,
  classifyDestination, isLoopbackIp, isLoopbackHost, telemetryPattern } from './network-capture.mjs';

if (process.platform !== 'linux') throw Error('verify:telemetry:extended requires Linux (/proc and strace).');
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const { layout, appRoot, portable } = await verificationRuntime(root);
const option = (name, fallback) => {
  const index = process.argv.indexOf(name);
  return index < 0 ? fallback : Number(process.argv[index + 1]);
};
const idleSeconds = option('--idle-seconds', 600);
const useStrace = !process.argv.includes('--no-strace');
// The Chromium proxy observer is opt-in: with --proxy-server the BYOK Agent turn
// stays at "Preparing" on Linux (reproduced, cause not isolated). The loopback-only
// network namespace (verify-telemetry-extended.sh) is the isolation boundary.
const useProxy = process.argv.includes('--proxy');
await mkdir(join(root, 'logs'), { recursive: true });
const directory = await mkdtemp(join(root, 'logs/telemetry-extended-'));
const profile = join(directory, 'profile'), project = join(directory, 'project');
await mkdir(join(profile, 'User'), { recursive: true }); await mkdir(project);
await writeFile(join(profile, 'User/settings.json'), JSON.stringify({ ...verificationSettings,
  'git.openRepositoryInParentFolders': 'never',
  // A controlled shell: the user's rc files and prompt tools are not part of the product.
  'terminal.integrated.profiles.linux': { 'OpenVision test shell': { path: '/bin/bash', args: ['--noprofile', '--norc'] } },
  'terminal.integrated.defaultProfile.linux': 'OpenVision test shell' }));
await writeFile(join(profile, 'argv.json'), '{"enable-crash-reporter":false}');
await writeFile(join(project, 'hello.js'), 'console.log("OpenVision extended telemetry verification");\n');
await writeFile(join(project, 'notes.txt'), 'UniqueTelemetrySearchToken lives here.\n');

const phases = [];
let currentPhase = 'launch';
const mark = name => { currentPhase = name; phases.push({ name, at: Date.now() }); console.log(`[phase] ${name}`); };
const phaseAt = time => phases.findLast(phase => phase.at <= time)?.name ?? 'launch';

const modelRequests = [];
const fixture = createServer(async (request, response) => {
  if (request.url === '/v1/models') {
    response.setHeader('content-type', 'application/json');
    return response.end(JSON.stringify({ data: [{ id: 'fixture-agent' }] }));
  }
  if (request.url !== '/v1/chat/completions') { response.statusCode = 404; return response.end(); }
  const chunks = []; for await (const chunk of request) chunks.push(chunk);
  const payload = JSON.parse(Buffer.concat(chunks));
  modelRequests.push({ at: Date.now(), phase: currentPhase, tools: payload.tools?.length ?? 0 });
  response.writeHead(200, { 'Content-Type': 'text/event-stream' });
  for (const [delta, finish_reason] of [[{ role: 'assistant', content: 'OpenVision telemetry fixture reply.' }, null], [{}, 'stop']])
    response.write(`data: ${JSON.stringify({ id: 'fixture', object: 'chat.completion.chunk', model: payload.model,
      choices: [{ index: 0, delta, finish_reason }] })}\n\n`);
  response.end('data: [DONE]\n\n');
});
await new Promise(done => fixture.listen(0, '127.0.0.1', done));
const proxy = await createLoopbackProxy();

const netLog = join(directory, 'chromium-netlog.json');
const trace = join(directory, 'syscalls.trace');
let executablePath = layout.executable;
if (useStrace) {
  executablePath = join(directory, 'traced-host.sh');
  // Only the owned launch is traced; strace follows every child of it.
  await writeFile(executablePath, `#!/bin/sh\nexec strace -f --seccomp-bpf -qq -ttt -yy -s 512 -e trace=connect,sendto,sendmsg,sendmmsg -o '${trace}' -- '${layout.executable}' "$@"\n`);
  await chmod(executablePath, 0o755);
}
const identity = { commit: execFileSync('git', ['rev-parse', 'HEAD'], { cwd: root, encoding: 'utf8' }).trim(),
  portable: Boolean(portable), host: { path: layout.executable, sha256: await fileHash(layout.executable) },
  workbench: await fileHash(join(appRoot, 'out/vs/workbench/workbench.desktop.main.js')),
  main: await fileHash(join(appRoot, 'out/main.js')), product: await fileHash(join(appRoot, 'product.json')) };

const sockets = new Map(), family = new Map();
let sampling = true, samples = 0, rootPid;
async function sampleLoop() {
  while (sampling) {
    if (rootPid) {
      const members = await processFamily(rootPid);
      for (const [pid, name] of members) if (!family.has(pid)) family.set(pid, { name, firstSeenPhase: currentPhase,
        command: (await readFile(`/proc/${pid}/cmdline`, 'utf8').catch(() => '')).split('\0').join(' ').replace(/--[\w-]*(token|key|secret)[\w-]*=\S+/gi, '$1=<redacted>').slice(0, 240) });
      for (const socket of await socketSnapshot(members)) {
        const key = `${socket.pid}|${socket.proto}|${socket.local.ip}:${socket.local.port}|${socket.remote.ip}:${socket.remote.port}`;
        if (!sockets.has(key)) sockets.set(key, { ...socket, phase: currentPhase });
      }
      samples++;
    }
    await new Promise(done => setTimeout(done, 500));
  }
}
const sampler = sampleLoop();

const errors = [];
const rendererUrls = [];
const env = { ...process.env }; delete env.ELECTRON_RUN_AS_NODE;
// A disposable XDG cache exposes machine-wide identifier writes (for example
// @vscode/deviceid's Microsoft/DeveloperTools/deviceid) without touching ~/.cache.
const xdgCache = join(directory, 'xdg-cache'); env.XDG_CACHE_HOME = xdgCache;
mark('startup');
const app = await _electron.launch({ executablePath, env, timeout: 120000,
  args: ['--user-data-dir', profile, '--extensions-dir', join(directory, 'extensions'),
    '--new-window', '--disable-updates', '--skip-welcome', '--skip-release-notes',
    '--disable-telemetry', '--disable-crash-reporter', `--log-net-log=${netLog}`,
    ...(useProxy ? [`--proxy-server=http://127.0.0.1:${proxy.port}`, ...(process.argv.includes('--proxy-loopback') ? ['--proxy-bypass-list=<-loopback>'] : [])] : []),
    ...await linuxSandboxArguments(layout.host), project, join(project, 'hello.js')] });
rootPid = app.process().pid;
const observe = page => {
  page.on('pageerror', error => errors.push(error.message));
  page.on('request', request => rendererUrls.push({ at: Date.now(), url: request.url() }));
};
app.on('window', observe);
for (const window of app.windows()) observe(window);
const result = { platform: process.platform, arch: process.arch, checkedAt: new Date().toISOString(), identity,
  idleSeconds, strace: useStrace, proxy: useProxy, networkNamespace: process.argv.includes('--netns') ? 'loopback-only' : 'host', success: false };
let page;
async function command(name) {
  await page.keyboard.press('Escape');
  await page.keyboard.press('ControlOrMeta+Shift+p');
  const picker = page.locator('.quick-input-widget');
  await picker.locator('input[type="text"]').fill(`>${name}`);
  await picker.getByText(name, { exact: true }).first().click();
}
try {
  page = await app.firstWindow();
  page.setDefaultTimeout(20000);
  await page.locator('.monaco-workbench').waitFor({ state: 'visible', timeout: 90000 });
  await page.locator('.part.titlebar .openvision-local-profile').waitFor({ state: 'attached', timeout: 60000 });
  await enterWorkspace(page);
  await page.waitForTimeout(10000);

  mark('project');
  await page.keyboard.press('ControlOrMeta+p');
  await page.locator('.quick-input-widget input[type="text"]').fill('hello.js');
  await page.keyboard.press('Enter');
  await page.locator('.monaco-editor .inputarea').first().focus();
  await page.keyboard.press('ControlOrMeta+End');
  await page.keyboard.insertText('\n// Extended telemetry edit.\n');
  await page.keyboard.press('ControlOrMeta+s');
  await page.waitForTimeout(3000);
  assert.match(await readFile(join(project, 'hello.js'), 'utf8'), /Extended telemetry edit/);

  mark('settings');
  await command('Preferences: Open User Settings');
  await page.locator('.settings-editor').waitFor({ state: 'visible' });
  await page.waitForTimeout(3000);
  await page.keyboard.press('Escape');
  await page.locator('.part.titlebar a[aria-label$=" Settings"]').click();
  await page.locator('.cursor-settings-sidebar-cell-label').filter({ hasText: /^Models$/ }).locator('..').click();
  const models = page.locator('.openvision-model-settings');
  await models.getByRole('button', { name: 'Add Provider', exact: true }).click();
  await page.getByLabel('Provider Name', { exact: true }).fill('Telemetry fixture');
  await page.getByLabel('API Base URL', { exact: true }).fill(`http://127.0.0.1:${fixture.address().port}/v1`);
  await page.getByLabel('API Key', { exact: true }).fill('fixture-key');
  await page.locator('dialog').getByRole('button', { name: 'Save', exact: true }).click();
  await page.locator('dialog').waitFor({ state: 'detached' });
  await page.waitForTimeout(3000);

  mark('extensions');
  await page.keyboard.press('Escape');
  await page.keyboard.press('ControlOrMeta+Shift+x');
  await page.locator('.extensions-viewlet').waitFor({ state: 'visible' });
  await page.waitForTimeout(15000);
  await page.screenshot({ path: join(directory, 'extensions.png') });

  mark('agent');
  await page.locator('.tabs-container .tab').filter({ hasText: 'hello.js' }).first().click();
  await page.keyboard.press('ControlOrMeta+Shift+l');
  await page.locator('.vscode-model-picker__trigger-markdown').filter({ visible: true }).first().click();
  await page.getByText('fixture-agent', { exact: true }).last().click();
  await page.keyboard.press('Escape');
  const input = page.locator('.aislash-editor-input[contenteditable=true]').filter({ visible: true }).first();
  await input.fill('Reply with the fixture text. Do not use tools.');
  await input.press('Enter');
  await page.getByText('OpenVision telemetry fixture reply.', { exact: true }).first().waitFor({ timeout: 60000 });
  await page.waitForTimeout(5000);
  assert.ok(modelRequests.some(request => request.phase === 'agent'), 'Agent request must reach the loopback fixture');

  mark('terminal');
  await command('Terminal: Create New Terminal');
  const terminal = page.locator('.terminal-wrapper .xterm-helper-textarea').filter({ visible: true }).first();
  await terminal.waitFor();
  const marker = join(directory, 'terminal-marker.txt');
  const terminalDeadline = Date.now() + 45000;
  let terminalOutput;
  while (!terminalOutput && Date.now() < terminalDeadline) {
    await terminal.focus();
    await page.keyboard.type(`echo OPENVISION_TERMINAL_$((40+2)) > '${marker}'`);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(3000);
    terminalOutput = await readFile(marker, 'utf8').catch(() => undefined);
  }
  assert.equal(terminalOutput?.trim(), 'OPENVISION_TERMINAL_42', 'Terminal must execute the owned shell command');
  await page.waitForTimeout(3000);

  mark('search');
  await command('Search: Find in Files');
  const search = page.locator('.search-view .search-widget textarea').first();
  await search.fill('UniqueTelemetrySearchToken');
  await search.press('Enter');
  await page.locator('.search-view .monaco-list-row').filter({ hasText: 'notes.txt' }).first().waitFor();
  await page.waitForTimeout(3000);

  mark('idle');
  const idleUntil = Date.now() + idleSeconds * 1000;
  while (Date.now() < idleUntil) await page.waitForTimeout(Math.min(30000, idleUntil - Date.now()));
  await page.screenshot({ path: join(directory, 'idle.png') });
  result.workloadCompleted = true;
} catch (error) {
  result.failure = error.stack;
  await page?.screenshot({ path: join(directory, 'failure.png') }).catch(() => {});
} finally {
  mark('quit');
  const child = app.process();
  const exited = new Promise(done => child.exitCode !== null || child.signalCode !== null ? done() : child.once('exit', done));
  const closing = app.close().catch(() => {});
  await page?.getByText('Quit Anyway', { exact: true }).click({ timeout: 5000 }).catch(() => {});
  await closing;
  // Wait for the traced family to drain: strace exits after the last tracee.
  const drained = await Promise.race([exited.then(() => true), new Promise(done => setTimeout(() => done(false), 60000))]);
  result.familyDrainedAfterQuit = drained;
  if (!drained) {
    result.survivors = Object.fromEntries(await processFamily(rootPid));
    child.kill('SIGTERM'); // The launch handle owned by this verifier.
  }
  mark('done');
  sampling = false; await sampler;
  await proxy.close();
  await new Promise(done => fixture.close(done));
}

// Collect observations.
const netlog = JSON.parse(await readFile(netLog, 'utf8').catch(() => '{"events":[]}'));
const constants = netlog.constants?.timeTickOffset ? Number(netlog.constants.timeTickOffset) : undefined;
const chromiumUrls = new Map();
for (const event of netlog.events ?? []) {
  const url = event.params?.url;
  if (typeof url === 'string' && /^(https?|wss?):/.test(url) && !chromiumUrls.has(url))
    chromiumUrls.set(url, constants ? phaseAt(constants + Number(event.time)) : 'unknown');
}
for (const { at, url } of rendererUrls) if (/^(https?|wss?):/.test(url) && !chromiumUrls.has(url)) chromiumUrls.set(url, phaseAt(at));
const traced = useStrace ? parseSyscallTrace(await readFile(trace, 'utf8').catch(() => '')) : { connects: [], lookups: [], datagrams: [] };
const directInet = useStrace ? trafficConnects(traced) : [];
const procRemote = remoteSockets([...sockets.values()]);

const destinations = new Map();
const add = (host, source, detail) => {
  const entry = destinations.get(host) ?? { host, sources: new Set(), phases: new Set(), details: new Set() };
  entry.sources.add(source); if (detail.phase) entry.phases.add(detail.phase); if (detail.text) entry.details.add(detail.text);
  destinations.set(host, entry);
};
for (const event of proxy.events) add(event.host, `proxy-${event.method}`, { phase: phaseAt(event.at),
  text: `${event.method} ${event.url ?? `${event.host}:${event.port}`} ${event.allowed ? 'forwarded' : 'refused'}` });
for (const [url, phase] of chromiumUrls) add(new URL(url).hostname, 'chromium-netlog', { phase, text: url });
for (const entry of directInet) add(entry.ip, `syscall-${entry.call}`, { phase: phaseAt(entry.at ?? 0),
  text: `pid ${entry.pid} ${entry.ip}:${entry.port} ${entry.errno ?? entry.return}` });
for (const socket of procRemote) add(socket.remote.ip, 'proc-socket', { phase: socket.phase,
  text: `${socket.process}(${socket.pid}) ${socket.proto} ${socket.remote.ip}:${socket.remote.port} state ${socket.state}` });
for (const lookup of traced.lookups) add(lookup.name, 'dns-lookup', { phase: phaseAt(lookup.at ?? 0), text: `pid ${lookup.pid} resolved ${lookup.name}` });

// Opening the Extensions view is an explicit request to browse the Marketplace.
// Its gallery query counts as user-initiated only within that phase, together
// with the addresses connected by the process that resolved the gallery host.
const initiated = { 'marketplace.cursorapi.com': 'extensions' };
// strace reports thread ids, so addresses are attributed by phase: only when
// every name resolved during the Extensions phase is an initiated host.
const extensionLookups = traced.lookups.filter(lookup => phaseAt(lookup.at ?? 0) === 'extensions');
const onlyInitiated = extensionLookups.length > 0 && extensionLookups.every(lookup => initiated[lookup.name] === 'extensions');
const initiatedIps = new Set(onlyInitiated ? directInet.filter(entry => phaseAt(entry.at ?? 0) === 'extensions').map(entry => entry.ip) : []);
const classify = entry => {
  const phase = initiated[entry.host];
  if ((phase && [...entry.phases].every(name => name === phase)) || (initiatedIps.has(entry.host) && [...entry.phases].every(name => name === 'extensions')))
    return { class: 'user-initiated (Extensions Marketplace view opened)', allowed: true };
  return classifyDestination(entry.host);
};
const table = [...destinations.values()].map(entry => ({ host: entry.host, ...classify(entry),
  sources: [...entry.sources], phases: [...entry.phases], details: [...entry.details].slice(0, 12) }))
  .sort((a, b) => a.host.localeCompare(b.host));
const remote = table.filter(entry => !entry.allowed);
const telemetry = table.filter(entry => entry.class === 'telemetry' || entry.details.some(detail => telemetryPattern.test(detail)));
const forwardedRemote = proxy.events.filter(event => event.allowed && !isLoopbackHost(event.host));
const directRemote = [...directInet.filter(entry => !isLoopbackIp(entry.ip) && !initiatedIps.has(entry.ip)),
  ...procRemote.filter(socket => !isLoopbackIp(socket.remote.ip) && !initiatedIps.has(socket.remote.ip))];
Object.assign(result, {
  phases, modelRequests, errors, samples,
  processFamily: { members: family.size, names: [...new Set([...family.values()].map(entry => entry.name))].sort(),
    byPid: Object.fromEntries(family) },
  observers: {
    proxy: { events: proxy.events.length, refused: proxy.events.filter(event => !event.allowed).length },
    chromiumNetlogUrls: chromiumUrls.size, rendererRequests: rendererUrls.length,
    procSockets: sockets.size, procRemoteSockets: procRemote.length,
    syscallConnects: traced.connects.length, inetConnects: directInet.length, dnsLookups: traced.lookups.length,
    unixPaths: [...new Set(traced.connects.filter(entry => entry.family === 'unix').map(entry => entry.path))].sort(),
  },
  destinations: table, nonLoopbackDestinations: remote, telemetryMatches: telemetry,
  directRemoteSockets: directRemote, forwardedRemote,
  scope: 'Linux x64 only. Built-in collectors and bundled extensions in a fresh disposable profile. Third-party extensions the user installs and user-configured MCP servers are out of scope. Non-loopback proxy traffic is refused, so responses that would trigger follow-up requests are not observed.',
});
result.deviceIdFileWritten = existsSync(join(xdgCache, 'Microsoft/DeveloperTools/deviceid'));
result.success = Boolean(result.workloadCompleted) && !result.deviceIdFileWritten && remote.length === 0 && telemetry.length === 0 &&
  directRemote.length === 0 && forwardedRemote.length === 0 && result.familyDrainedAfterQuit;
await writeFile(join(directory, 'result.json'), JSON.stringify(result, null, 2) + '\n');
console.log(JSON.stringify({ directory, success: result.success, failure: result.failure,
  observers: result.observers, processFamily: { members: family.size, names: result.processFamily.names }, nonLoopbackDestinations: remote,
  directRemoteSockets: directRemote.length, familyDrainedAfterQuit: result.familyDrainedAfterQuit,
  modelRequests: modelRequests.length, errors: errors.length }, null, 2));
assert.ok(result.workloadCompleted, result.failure ?? 'Workload did not complete');
assert.deepEqual(telemetry, [], 'Telemetry destination observed');
assert.deepEqual(remote, [], 'Automatic non-loopback destination observed');
assert.deepEqual(directRemote, [], 'Direct non-loopback socket observed');
assert.ok(result.familyDrainedAfterQuit, 'Process family must exit after quit');
assert.equal(result.deviceIdFileWritten, false, 'Machine-wide device id file written');
