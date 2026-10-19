import { createServer } from 'node:http';
import { mkdir, mkdtemp, readFile, writeFile } from 'node:fs/promises';
import { createWriteStream } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { DatabaseSync } from 'node:sqlite';
import { release } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { _electron } from '../tooling/browser.mjs';
import { loadRuntime } from './source-assembly.mjs';
import { verificationSettings } from './verification-profile.mjs';
import { linuxSandboxArguments } from './platform.mjs';
import { fileHash } from './import-files.mjs';
import { enterWorkspace, openChat, openChatFromHistory } from './verification-workspace.mjs';
import { electronNames, hostLoad, processFamily } from './process-family-linux.mjs';
import { applicableBudgets, checkBudgets, collectProbe, editTraffic, installProbe, ioDelta, parseProcIo, percentile, profileHotspots, sizeRatios, summarizeFrames, summarizeLatency, waitForStreamPaint } from './responsiveness-measure.mjs';

// OV-1002 fixed responsiveness datasets on the native application. Every model
// response is scripted by a loopback fixture (not live inference). Datasets:
//   transcript  - one chat of TURNS turns (2 messages each) whose replies carry code blocks
//   stream      - one more reply of STREAM_CHUNKS SSE content deltas while the user types
//   editor      - rapid typing in a 50,000-line file (and a 40-line control file)
//   picker      - the Agent model picker over 10,000 saved synthetic models
//   closed chat - renderer heap and marker strings after closing the transcript chat
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const argument = (name, fallback) => Number(process.argv.find(value => value.startsWith(`--${name}=`))?.split('=')[1] ?? fallback);
// Default: a smoke run over every phase with smaller datasets. `--full` uses the
// datasets the budgets were set on; budgets listed in `fullOnly` are checked only there.
// `--phases=editorSmall,editorLarge` measures only those phases and skips the setup
// the others need (transcript, saved-model picker, closed-chat wait, restart).
const FULL = process.argv.includes('--full');
const TURNS = argument('turns', FULL ? 110 : 30), STREAM_CHUNKS = argument('chunks', FULL ? 2000 : 500);
const LARGE_LINES = argument('lines', FULL ? 50000 : 10000), MODELS_PER_PROVIDER = FULL ? 5000 : 1000;
const PHASES = ['picker', 'typingIdle', 'stream', 'scroll', 'turn', 'editorSmall', 'editorLarge', 'closedChat', 'persisted', 'restart'];
const selectedPhases = process.argv.find(value => value.startsWith('--phases='))?.slice(9).split(',').filter(Boolean) ?? PHASES;
for (const name of selectedPhases) if (!PHASES.includes(name)) throw new Error(`Unknown phase ${name}; known: ${PHASES.join(',')}`);
const wants = (...names) => names.some(name => selectedPhases.includes(name));
// Editor typing is measured as EDITOR_BURSTS bursts; the verdict uses the median burst
// p95, so one burst slowed by a host-load spike cannot decide the result alone.
const EDITOR_BURSTS = argument('bursts', 3);
const noBudgets = process.argv.includes('--no-budgets');
// Diagnostic: --profile=stream,editorLarge records a renderer CPU profile per named phase (perturbs timings).
const profiled = process.argv.find(value => value.startsWith('--profile='))?.slice(10).split(',') ?? [];
const traceStorage = process.argv.includes('--trace-storage'); // diagnostic logpoints, perturbs timings
// Diagnostic logpoints on the renderer's text delta coalescer: when each streamed delta
// arrives in the renderer and when text is handed to the transcript (perturbs timings).
const traceStream = process.argv.includes('--trace-stream');
const budgetsPath = join(root, 'desktop/responsiveness-budgets.json');
const budgets = JSON.parse(await readFile(budgetsPath, 'utf8'));
const { layout } = await loadRuntime(root);
await mkdir(join(root, 'logs'), { recursive: true });
const directory = await mkdtemp(join(root, 'logs/responsiveness-'));
const profile = join(directory, 'profile'), project = join(directory, 'project');
await mkdir(join(profile, 'User/globalStorage'), { recursive: true }); await mkdir(project);
await writeFile(join(profile, 'User/settings.json'), JSON.stringify({ ...verificationSettings, 'git.openRepositoryInParentFolders': 'never' }));
const smallFile = Array.from({ length: 40 }, (_, line) => `export const small_${line} = ${JSON.stringify(`small value ${line}`)};`).join('\n') + '\n';
const largeFile = Array.from({ length: LARGE_LINES }, (_, line) =>
  `export const large_${line} = ${JSON.stringify(`fixture line ${line} `.padEnd(40, '.'))};`).join('\n') + '\n';
await writeFile(join(project, 'small.js'), smallFile); await writeFile(join(project, 'large.js'), largeFile);

// Large saved catalog: the same 2 x 5,000 synthetic models as verify:model-menu:large.
const database = new DatabaseSync(join(profile, 'User/globalStorage/state.vscdb'));
database.exec('CREATE TABLE ItemTable (key TEXT UNIQUE ON CONFLICT REPLACE, value BLOB)');
database.prepare('INSERT INTO ItemTable (key,value) VALUES (?,?)').run('openvision.model-providers.v1', JSON.stringify({ version: 1,
  activeId: null, providers: Array.from({ length: 2 }, (_, provider) => ({ id: `provider-${provider}`, name: `Provider ${provider + 1}`,
    url: 'http://127.0.0.1:1/v1', capabilitiesDiscovered: true, models: Array.from({ length: MODELS_PER_PROVIDER }, (_, index) => ({
      id: `model-${String(provider * MODELS_PER_PROVIDER + index).padStart(5, '0')}`, name: `Model ${String(provider * MODELS_PER_PROVIDER + index).padStart(5, '0')}`, enabled: true })) })) }));
database.close();

const marker = `OV1002T${Date.now().toString(36)}`;
const turnReply = index => `${marker} reply ${index}. The fixture explains step ${index} in two short paragraphs.\n\n` +
  `Paragraph one of turn ${index} covers item ${index * 7}. Paragraph two covers item ${index * 11}.\n\n` +
  '```js\n' + Array.from({ length: 10 }, (_, line) => `const turn${index}_${line} = compute(${index}, ${line}); // step ${line}`).join('\n') + '\n```\n\n' +
  `${marker} turn ${index} done`;
// Streaming reply: prose and code blocks split into STREAM_CHUNKS deltas.
const streamPieces = [];
for (let index = 0; streamPieces.length < STREAM_CHUNKS - 1; index++) {
  if (index % 120 === 0) streamPieces.push(index ? '\n```\n\n' : `${marker} stream begins.\n\n`);
  else if (index % 120 === 60) streamPieces.push('\n\n```js\n');
  else streamPieces.push(index % 120 > 60 ? `let s${index} = ${index};\n` : `word${index} `);
}
streamPieces.push(`\n\n${marker} stream done`);

let script; // { kind: 'turn', reply } | { kind: 'stream', sentLast }
// Wall-clock milliseconds with sub-millisecond resolution, comparable with the renderer's
// performance.timeOrigin + performance.now() on the same host.
const epochNow = () => performance.timeOrigin + performance.now();
const fixture = { requests: 0, streamChunksSent: 0, streamStartedAt: 0, streamEndedAt: 0, streamRequestEpoch: 0, firstChunkSentEpoch: 0, lastChunkSentEpoch: 0, unscripted: 0 };
const sse = (response, model, delta, finish_reason = null) => response.write(`data: ${JSON.stringify({ id: 'fixture-responsiveness',
  object: 'chat.completion.chunk', model, choices: [{ index: 0, delta, finish_reason }] })}\n\n`);
const server = createServer(async (request, response) => {
  if (request.url === '/v1/models') {
    response.writeHead(200, { 'content-type': 'application/json' });
    return response.end(JSON.stringify({ data: [{ id: 'responsiveness-fixture' }] }));
  }
  if (request.url !== '/v1/chat/completions') { response.writeHead(404); return response.end(); }
  const chunks = []; for await (const chunk of request) chunks.push(chunk);
  const payload = JSON.parse(Buffer.concat(chunks).toString('utf8'));
  fixture.requests++;
  response.writeHead(200, { 'content-type': 'text/event-stream' });
  const current = script;
  if (current?.kind === 'stream') {
    script = undefined; fixture.streamStartedAt = performance.now(); fixture.streamRequestEpoch = epochNow();
    sse(response, payload.model, { role: 'assistant', content: '' });
    for (const piece of streamPieces) {
      if (response.destroyed) break;
      sse(response, payload.model, { content: piece }); fixture.streamChunksSent++;
      if (fixture.streamChunksSent === 1) fixture.firstChunkSentEpoch = epochNow();
      if (fixture.streamChunksSent === streamPieces.length) { fixture.lastChunkSentEpoch = epochNow(); current.sentLast(); }
      await new Promise(resolveWait => setTimeout(resolveWait, 4));
    }
    fixture.streamEndedAt = performance.now();
  } else if (current?.kind === 'turn') {
    script = undefined;
    sse(response, payload.model, { role: 'assistant', content: current.reply });
  } else {
    fixture.unscripted++;
    sse(response, payload.model, { role: 'assistant', content: 'auxiliary fixture reply' });
  }
  sse(response, payload.model, {}, 'stop'); response.end('data: [DONE]\n\n');
});
await new Promise(resolveServer => server.listen(0, '127.0.0.1', resolveServer));

const result = { checkedAt: new Date().toISOString(), commit: execFileSync('git', ['rev-parse', 'HEAD'], { cwd: root, encoding: 'utf8' }).trim(),
  platform: process.platform, arch: process.arch, osRelease: release(), node: process.version,
  scope: 'Linux x64 native application, controlled loopback model fixture (scripted, not live inference).',
  mode: FULL ? 'full' : 'smoke', selectedPhases, editorBursts: EDITOR_BURSTS,
  dataset: { turns: TURNS, transcriptMessages: TURNS * 2 + 2, streamChunks: STREAM_CHUNKS, largeFileLines: LARGE_LINES,
    largeFileBytes: Buffer.byteLength(largeFile), pickerModels: MODELS_PER_PROVIDER * 2, marker },
  hashes: Object.fromEntries(await Promise.all([
    ['host', layout.executable], ['workbench', join(root, 'source/app/out/vs/workbench/workbench.desktop.main.js')],
    ['verifier', fileURLToPath(import.meta.url)], ['measure', join(root, 'desktop/responsiveness-measure.mjs')], ['budgets', budgetsPath],
  ].map(async ([name, path]) => [name, await fileHash(path).catch(() => null)]))),
  hostLoad: { start: await hostLoad() }, phases: {}, transcriptGrowth: [], success: false };
let app, page, cdp, names = new Map();

const ROW_SELECTOR = '.virtualized-composer-messages-row, [data-message-index]';
const CONTAINER_SELECTOR = '.virtualized-composer-messages-scroll-container, .composer-messages-container';
const input = () => page.locator('.aislash-editor-input[contenteditable=true]').filter({ visible: true }).first();
const idle = () => page.locator('.stop-button').filter({ visible: true }).waitFor({ state: 'hidden', timeout: 60000 });

async function familyIo() {
  const members = await processFamily({ rootPid: app.process().pid, names });
  const samples = new Map();
  for (const member of members) {
    const text = await readFile(`/proc/${member.pid}/io`, 'utf8').catch(() => '');
    if (text) samples.set(`${member.pid}:${member.start}`, { role: member.role, cpuTicks: member.cpuTicks, ...parseProcIo(text) });
  }
  return { samples, members: members.length, readable: samples.size };
}
async function heap() {
  await cdp.send('HeapProfiler.collectGarbage');
  const usage = await cdp.send('Runtime.getHeapUsage');
  const counters = await cdp.send('Memory.getDOMCounters');
  return { heapUsedMiB: Math.round(usage.usedSize / 1048576 * 10) / 10, domNodesLive: counters.nodes,
    jsEventListeners: counters.jsEventListeners, documents: counters.documents };
}
async function dom() {
  return page.evaluate(({ row, container }) => {
    const scroller = [...document.querySelectorAll(container)].find(node => node.offsetParent !== null) ?? document.querySelector(container);
    return { domNodesAttached: document.getElementsByTagName('*').length,
      transcriptNodes: scroller ? scroller.getElementsByTagName('*').length : 0,
      mountedRows: scroller ? scroller.querySelectorAll(row).length : 0,
      renderedMessages: scroller ? scroller.querySelectorAll('.composer-rendered-message').length : 0,
      virtualizedRows: document.querySelectorAll('.virtualized-composer-messages-row').length,
      codeBlocks: scroller ? scroller.querySelectorAll('pre, .composer-code-block-container, .monaco-editor').length : 0,
      containerClass: scroller?.className?.slice(0, 160) ?? null };
  }, { row: ROW_SELECTOR, container: CONTAINER_SELECTOR });
}
// Host CPU time from /proc/stat: per-phase busy and steal shares put a timing
// result next to the load it was measured under.
async function cpuTimes() {
  const [, ...fields] = (await readFile('/proc/stat', 'utf8')).split('\n')[0].trim().split(/\s+/);
  const [user, nice, system, idleTime, iowait, irq, softirq, steal] = fields.map(Number);
  return { busy: user + nice + system + irq + softirq, idle: idleTime + iowait, steal: steal ?? 0 };
}
function cpuShare(before, after) {
  const busy = after.busy - before.busy, idleTime = after.idle - before.idle, steal = after.steal - before.steal;
  const total = busy + idleTime + steal;
  return total > 0 ? { cpuBusyPercent: Math.round(busy / total * 1000) / 10, cpuStealPercent: Math.round(steal / total * 1000) / 10 } : {};
}
// One measured phase: probe + filesystem counters around `work`.
async function measure(name, work, { transcript = false } = {}) {
  const ioBefore = await familyIo(), cpuBefore = await cpuTimes(), loadBefore = (await hostLoad()).loadavg[0];
  await page.evaluate(installProbe, transcript ? { rowSelector: ROW_SELECTOR, containerSelector: CONTAINER_SELECTOR } : {});
  if (profiled.includes(name)) {
    await cdp.send('Profiler.enable'); await cdp.send('Profiler.setSamplingInterval', { interval: 500 }); await cdp.send('Profiler.start');
  }
  if (traceStorage) await page.evaluate(() => { globalThis.__openvisionStorageTrace = { saves: 0, items: [], kv: [] }; });
  const started = performance.now();
  const extra = await work() ?? {};
  if (traceStorage) extra.storageTrace = await page.evaluate(() => {
    const trace = globalThis.__openvisionStorageTrace; globalThis.__openvisionStorageTrace = undefined;
    return { applicationUserSaves: trace.saves, updateItemsCalls: trace.items.length,
      updateItemsBytes: trace.items.flat().reduce((sum, [, size]) => sum + size, 0),
      largestItems: trace.items.flat().sort((a, b) => b[1] - a[1]).slice(0, 5),
      kvWrites: Object.fromEntries(Object.entries(trace.kv.reduce((sum, [prefix, size]) => {
        const entry = sum[prefix] ??= [0, 0]; entry[0]++; entry[1] += size; return sum; }, {}))) };
  });
  const probe = await page.evaluate(collectProbe);
  if (profiled.includes(name)) {
    const { profile } = await cdp.send('Profiler.stop');
    await writeFile(join(directory, `${name}.cpuprofile`), JSON.stringify(profile));
    (result.profiles ??= {})[name] = profileHotspots(profile);
  }
  const elapsedMs = performance.now() - started;
  const ioAfter = await familyIo();
  const io = ioDelta(ioBefore.samples, ioAfter.samples);
  const phase = { ...summarizeFrames({ ...probe, elapsedMs }), ...summarizeLatency(probe.latency, probe.eventTimings),
    // Ordered [key, ms] pairs: attributes latency outliers to the keys that caused them.
    latencySamples: probe.latencyKeys, mutationRecords: probe.mutations, rowsMutated: Object.keys(probe.mutatedRows).filter(key => key !== 'outside-row').length,
    mutatedRows: probe.mutatedRows, fsSyscallsWrite: io.syscw, fsSyscallsRead: io.syscr, fsWriteChars: io.wchar,
    fsWriteBytes: io.write_bytes, fsByRole: io.byRole, ioProcessesReadable: `${ioAfter.readable}/${ioAfter.members}`,
    ...await dom(), ...await heap(), hostLoad1m: loadBefore, ...cpuShare(cpuBefore, await cpuTimes()), ...extra };
  result.phases[name] = phase;
  console.log(`${name}: ${JSON.stringify({ ...phase, mutatedRows: undefined, fsByRole: undefined, latencySamples: undefined, lastChunkDrainProgress: undefined, streamTrace: undefined })}`);
  return phase;
}
async function typeKeys(text, delay) { for (const key of text) { await page.keyboard.type(key); await page.waitForTimeout(delay); } }

async function launch() {
  const env = { ...process.env }; delete env.ELECTRON_RUN_AS_NODE;
  // The fixture project lives under logs/ inside the OpenVision checkout. Without a
  // ceiling, the Agent's per-turn `git status` found that checkout and walked it
  // (17,000+ files; most of the 6.5 s between submit and the model request here).
  env.GIT_CEILING_DIRECTORIES = directory;
  app = await _electron.launch({ executablePath: layout.executable, env, timeout: 60000,
    args: ['--user-data-dir', profile, '--extensions-dir', join(directory, 'extensions'), '--new-window',
      '--disable-updates', '--skip-welcome', '--skip-release-notes', '--disable-telemetry', '--disable-crash-reporter',
      ...(process.platform === 'linux' ? await linuxSandboxArguments(layout.host) : []), project, join(project, 'small.js')] });
  page = await app.firstWindow(); page.setDefaultTimeout(20000);
  page.on('pageerror', error => (result.pageErrors ??= []).push(error.message.slice(0, 300)));
  await page.locator('.part.titlebar .openvision-local-profile').waitFor({ state: 'attached', timeout: 60000 }); await enterWorkspace(page);
  await page.waitForTimeout(8000);
  cdp = await page.context().newCDPSession(page);
  await cdp.send('HeapProfiler.enable');
  names = await electronNames(app).catch(() => new Map());
  if (traceStorage) {
    // Diagnostic logpoints (never pause): count reactive application storage saves
    // and the sizes of storage items sent to the main process.
    const workbench = await readFile(join(root, 'source/app/out/vs/workbench/workbench.desktop.main.js'), 'utf8');
    const lineOf = needle => { const index = workbench.indexOf(needle); if (index < 0) throw new Error(`trace anchor missing: ${needle}`);
      return workbench.slice(0, index).split('\n').length; }; // 1-based line of the anchor = 0-based line of the next
    await cdp.send('Debugger.enable');
    const urlRegex = 'workbench\\.desktop\\.main\\.js$';
    for (const [needle, condition, offset = 0] of [
      ['    savePersistentStorage(e, t, n, i, r) {', '(globalThis.__openvisionStorageSaves = (globalThis.__openvisionStorageSaves || 0) + 1, globalThis.__openvisionStorageTrace && globalThis.__openvisionStorageTrace.saves++, false)'],
      ['            const s = this.stringifyAvailableModelsCatalogForChangeCheck();', '(globalThis.__openvisionStorageEchoes = (globalThis.__openvisionStorageEchoes || 0) + 1, false)', -1],
      ['    async updateItems(e, openvisionAcknowledge) {', '(globalThis.__openvisionStorageTrace && globalThis.__openvisionStorageTrace.items.push([...(e.insert ? e.insert.entries() : [])].map(([k, v]) => [String(k).slice(-48), String(v).length])), false)'],
      ['          async cursorDiskKVSet(t, n) {', '(globalThis.__openvisionStorageTrace && globalThis.__openvisionStorageTrace.kv.push([String(t).split(":")[0], typeof n === "string" ? n.length : (n?.byteLength ?? 0)]), false)'],
      ['          async cursorDiskKVSetBinary(t, n) {', '(globalThis.__openvisionStorageTrace && globalThis.__openvisionStorageTrace.kv.push([String(t).split(":")[0] + "(binary)", n?.byteLength ?? 0]), false)'],
    ]) (result.storageTraceBreakpoints ??= []).push((await cdp.send('Debugger.setBreakpointByUrl', { urlRegex, lineNumber: lineOf(needle) + offset, condition })).locations.length);
  }
  if (traceStream) {
    const workbench = await readFile(join(root, 'source/app/out/vs/workbench/workbench.desktop.main.js'), 'utf8');
    const module = workbench.indexOf('"textDeltaCoalescer.js"() {');
    // 0-based line of the first `needle` after the coalescer module anchor.
    const lineAfter = needle => { const index = workbench.indexOf(needle, module); if (module < 0 || index < 0) throw new Error(`stream trace anchor missing: ${needle}`);
      return workbench.slice(0, index).split('\n').length - 1; };
    const record = (kind, size) => `((globalThis.__openvisionStreamTrace ??= []).length < 20000 && globalThis.__openvisionStreamTrace.push([${JSON.stringify(kind)}, performance.now(), ${size}]), false)`;
    await cdp.send('Debugger.enable');
    const urlRegex = 'workbench\\.desktop\\.main\\.js$';
    for (const [needle, condition, offset] of [['enqueue(t, n) {', record('enqueue', 'n.length'), 1],
      ['this.onFlush(t.ctx, o),', record('flushFrame', 'o.length'), 0], ['this.onFlush(t.ctx, t.text),', record('flush', 't.text.length'), 0]])
      (result.streamTraceBreakpoints ??= []).push((await cdp.send('Debugger.setBreakpointByUrl', { urlRegex, lineNumber: lineAfter(needle) + offset, condition })).locations.length);
  }
}
const hostExits = [];
async function closeApp() {
  if (!app) return;
  const child = app.process(), exited = new Promise(resolveExit => child.once('exit', resolveExit));
  const closing = app.close().catch(error => { result.cleanupError = error.message; });
  await page?.getByText('Quit Anyway', { exact: true }).click({ timeout: 3000 }).catch(() => {});
  await closing; if (child.exitCode === null && child.signalCode === null) await exited;
  hostExits.push({ exitCode: child.exitCode, signalCode: child.signalCode });
  app = undefined; page = undefined;
}
// Size of the persisted application-user object and of its catalog fields (read after the host exits).
function persistedApplicationStorage() {
  const db = new DatabaseSync(join(profile, 'User/globalStorage/state.vscdb'), { readOnly: true });
  try {
    const row = db.prepare('SELECT value FROM ItemTable WHERE key = ?')
      .get('src.vs.platform.reactivestorage.browser.reactiveStorageServiceImpl.persistentStorage.applicationUser');
    const text = row ? String(row.value) : '', value = text ? JSON.parse(text) : {};
    const size = key => key in value ? Buffer.byteLength(JSON.stringify(value[key])) : 0;
    return { applicationUserBytes: Buffer.byteLength(text), persistedCatalogBytes: size('availableDefaultModels2'),
      persistedModelNameListBytes: size('availableAPIKeyModels') + size('localProviderModelIds') + size('localProviderAgentModelIds') };
  } finally { db.close(); }
}
async function heapMarkerStrings(text, save) {
  const session = await page.context().newCDPSession(page);
  let count = 0, tail = ''; const chunks = save ? [] : undefined;
  session.on('HeapProfiler.addHeapSnapshotChunk', ({ chunk }) => { chunks?.push(chunk);
    const joined = tail + chunk; count += joined.split(text).length - 1 - (tail.split(text).length - 1);
    tail = joined.slice(-text.length + 1);
  });
  await session.send('HeapProfiler.enable'); await session.send('HeapProfiler.collectGarbage');
  await session.send('HeapProfiler.takeHeapSnapshot', { reportProgress: false });
  await session.detach();
  if (chunks) await new Promise((resolveWrite, rejectWrite) => { const out = createWriteStream(join(directory, save)); out.on('error', rejectWrite);
    for (const chunk of chunks) out.write(chunk); out.end(resolveWrite); });
  return count;
}

try {
  await launch();
  // Fixture provider through the product UI, then its model through the large picker.
  await page.locator('.part.titlebar a[aria-label$=" Settings"]').click();
  await page.locator('.cursor-settings-sidebar-cell-label').filter({ hasText: /^Models$/ }).locator('..').click();
  await page.locator('.openvision-model-settings').getByRole('button', { name: 'Add Provider', exact: true }).click();
  await page.getByLabel('Provider Name', { exact: true }).fill('Responsiveness fixture');
  await page.getByLabel('API Base URL', { exact: true }).fill(`http://127.0.0.1:${server.address().port}/v1`);
  await page.getByLabel('API Key', { exact: true }).fill('fixture-key');
  await page.locator('dialog').getByRole('button', { name: 'Save', exact: true }).click();
  await page.locator('dialog').waitFor({ state: 'detached', timeout: 90000 });
  await page.keyboard.press('ControlOrMeta+w');
  await page.locator('.tabs-container .tab').filter({ hasText: 'small.js' }).first().click();
  await openChat(page);
  const trigger = page.locator('.vscode-model-picker__trigger-markdown').filter({ visible: true }).first();
  const menu = page.getByTestId('model-picker-menu').filter({ visible: true });

  const needsTranscript = wants('typingIdle', 'stream', 'scroll', 'turn', 'closedChat');
  const needsModel = needsTranscript || wants('picker', 'restart');
  // Picker dataset: open over the saved models and type a search query.
  if (wants('picker')) await measure('picker', async () => {
    const opened = performance.now(); await trigger.click();
    await menu.locator('[data-model-picker-item-name]').first().waitFor({ timeout: 60000 });
    const openMs = Math.round(performance.now() - opened);
    const rowsOpen = await menu.locator('[data-model-picker-item-name]').count();
    await menu.getByRole('textbox', { name: 'Search menu items' }).focus();
    // Ten matching models in either dataset (model-0999x of 10,000; model-0199x of 2,000).
    await typeKeys(`model-${String(MODELS_PER_PROVIDER * 2 - 10).padStart(5, '0').slice(0, -1)}`, 60);
    await menu.locator('[data-model-picker-item-name]').first().waitFor();
    const rowsSearch = await menu.locator('[data-model-picker-item-name]').count();
    const menuElements = await menu.locator('*').count();
    return { openMs, pickerRowsOpen: rowsOpen, pickerRowsSearch: rowsSearch, pickerElements: menuElements };
  });
  else if (needsModel) { await trigger.click(); await menu.locator('[data-model-picker-item-name]').first().waitFor({ timeout: 60000 }); }
  if (needsModel) {
    await menu.getByRole('textbox', { name: 'Search menu items' }).fill('responsiveness-fixture');
    await menu.locator('[data-model-picker-item-name]').filter({ hasText: 'responsiveness-fixture' }).first().click();
    await menu.waitFor({ state: 'hidden' }).catch(() => page.keyboard.press('Escape'));
  }
  if (needsTranscript) {

  // Transcript dataset: TURNS scripted turns in one new chat.
  const newAgent = page.getByRole('button', { name: 'New Agent', exact: true }).filter({ visible: true });
  if (await newAgent.count()) await newAgent.first().click(); else await page.keyboard.press('ControlOrMeta+n');
  await input().waitFor();
  const buildStarted = performance.now(), turnMs = [];
  for (let index = 1; index <= TURNS; index++) {
    const turnStarted = performance.now();
    script = { kind: 'turn', reply: turnReply(index) };
    await input().fill(`${marker} turn ${index}: reply with the fixture text.`); await input().press('Enter');
    await page.getByText(`${marker} turn ${index} done`, { exact: true }).filter({ visible: true }).last().waitFor({ timeout: 60000 });
    await idle();
    turnMs.push(Math.round(performance.now() - turnStarted));
    if ([1, 10, 25, 50, 75, 100, TURNS].includes(index) && !result.transcriptGrowth.some(entry => entry.turn === index))
      result.transcriptGrowth.push({ turn: index, messages: index * 2, turnMs: turnMs.at(-1), ...await dom(), ...await heap() });
  }
  result.transcriptBuild = { elapsedMs: Math.round(performance.now() - buildStarted), firstTenTurnMs: turnMs.slice(0, 10),
    lastTenTurnMs: turnMs.slice(-10) };
  console.log(`transcript: ${JSON.stringify(result.transcriptGrowth.map(({ turn, turnMs, mountedRows, transcriptNodes, domNodesAttached, heapUsedMiB }) =>
    ({ turn, turnMs, mountedRows, transcriptNodes, domNodesAttached, heapUsedMiB })))}`);
  if (process.argv.includes('--dump-dom')) await writeFile(join(directory, 'transcript-dom.html'), await page.evaluate(() => document.body.outerHTML));

  // Typing into the composer with the long transcript mounted and idle.
  await input().click();
  if (wants('typingIdle')) await measure('typingIdle', async () => { await typeKeys('typing while idle in a long chat', 40); });
  await input().fill('');

  // Stream dataset: STREAM_CHUNKS deltas while the user types the next prompt.
  if (wants('stream')) await measure('stream', async () => {
    let sentLast; const lastChunkSent = new Promise(resolveSent => { sentLast = resolveSent; });
    script = { kind: 'stream', sentLast };
    await input().fill(`${marker} stream: reply with the long fixture stream.`);
    const submittedEpoch = epochNow(), submitted = performance.now(); await input().press('Enter');
    // Light polling (250 ms textContent check) instead of Playwright's per-frame text matching,
    // which itself costs renderer time inside the measured window.
    await page.waitForFunction(({ text, container }) =>
      [...document.querySelectorAll(container)].some(node => node.textContent.includes(text)), { text: `${marker} stream begins`, container: CONTAINER_SELECTOR },
    { polling: 250, timeout: 60000 });
    const firstPaintMs = Math.round(performance.now() - submitted), firstPaintEpoch = epochNow();
    // The last chunk is detected in the page, per frame, from the moment the fixture sends
    // it, concurrently with the typing below. It used to be polled only after the typing:
    // with 500 chunks (about 2.3 s) the stream ends before the 56 keys (about 4 s) do, so
    // the old figure was mostly the remaining typing time (smoke run xXcKIA: 1,789 ms).
    const lastPaint = lastChunkSent.then(() => page.evaluate(waitForStreamPaint, { text: `${marker} stream done`, begins: `${marker} stream begins`,
      rowSelector: ROW_SELECTOR, containerSelector: CONTAINER_SELECTOR, timeoutMs: 120000 }));
    lastPaint.catch(() => {});
    await input().click();
    const typingStarted = performance.now();
    await typeKeys('typing during the long fixture stream to measure latency', 60);
    const typingEndedEpoch = epochNow(), typingMs = Math.round(performance.now() - typingStarted);
    const painted = await lastPaint;
    const streamTrace = traceStream ? await page.evaluate(() => { const trace = globalThis.__openvisionStreamTrace ?? []; globalThis.__openvisionStreamTrace = undefined;
      return { origin: performance.timeOrigin, events: trace }; }) : undefined;
    await idle();
    return { firstChunkPaintMs: firstPaintMs, chunksSent: fixture.streamChunksSent,
      fixtureStreamMs: Math.round(fixture.streamEndedAt - fixture.streamStartedAt),
      // Where the first-chunk time goes: submit -> fixture request -> first chunk sent -> seen (250 ms polling).
      submitToRequestMs: Math.round(fixture.streamRequestEpoch - submittedEpoch),
      firstChunkSentToSeenMs: Math.round(firstPaintEpoch - fixture.firstChunkSentEpoch),
      lastChunkToPaintMs: Math.round(painted.paintedEpoch - fixture.lastChunkSentEpoch),
      lastChunkToFoundMs: Math.round(painted.foundEpoch - fixture.lastChunkSentEpoch), lastChunkCheckFrames: painted.frames, lastChunkDrainProgress: painted.progress,
      // Positive: the stream outlasted the typing; negative: typing continued after the last chunk.
      lastChunkAfterTypingMs: Math.round(fixture.lastChunkSentEpoch - typingEndedEpoch), typingMs,
      ...streamTrace ? { streamTrace: { ...streamTrace, firstChunkSentEpoch: fixture.firstChunkSentEpoch, lastChunkSentEpoch: fixture.lastChunkSentEpoch } } : {} };
  }, { transcript: true });
  await input().fill('');

  // Scrolling the long transcript to the top and back.
  if (wants('scroll')) await measure('scroll', async () => {
    const scroller = page.locator(CONTAINER_SELECTOR).filter({ visible: true }).first();
    const box = await scroller.boundingBox();
    await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
    for (let step = 0; step < 60; step++) { await page.mouse.wheel(0, -1500); await page.waitForTimeout(16); }
    const top = await dom();
    for (let step = 0; step < 60; step++) { await page.mouse.wheel(0, 1500); await page.waitForTimeout(16); }
    return { mountedRowsAtTop: top.mountedRows, transcriptNodesAtTop: top.transcriptNodes };
  }, { transcript: true });
  // Retention check: live DOM nodes (after forced GC) over three more scroll cycles.
  result.scrollRetention = [];
  for (let cycle = 0; cycle < (wants('scroll') ? 3 : 0); cycle++) {
    for (const delta of [-1500, 1500]) for (let step = 0; step < 60; step++) { await page.mouse.wheel(0, delta); await page.waitForTimeout(16); }
    await page.waitForTimeout(500);
    const { domNodesLive, heapUsedMiB } = await heap(); result.scrollRetention.push({ cycle: cycle + 1, domNodesLive, heapUsedMiB });
  }
  console.log(`scrollRetention: ${JSON.stringify(result.scrollRetention)}`);

  // One more ordinary turn in the long chat while the user keeps typing: submit
  // work (model selection, chat state saves) lands inside the measured window.
  if (wants('turn')) await measure('turn', async () => {
    const index = TURNS + 1; script = { kind: 'turn', reply: turnReply(index) };
    await input().fill(`${marker} turn ${index}: reply with the fixture text.`);
    const submitted = performance.now(); await input().press('Enter');
    await input().click();
    await typeKeys('typing while the next turn is submitted', 40);
    await page.waitForFunction(({ text, container }) => [...document.querySelectorAll(container)].some(node => node.textContent.includes(text)),
      { text: `${marker} turn ${index} done`, container: CONTAINER_SELECTOR }, { polling: 250, timeout: 60000 });
    const replyMs = Math.round(performance.now() - submitted);
    await idle();
    await page.waitForTimeout(3000); // the submit's storage flushes land inside the window
    return { submitToReplyPaintMs: replyMs };
  });
  await input().fill('');
  }

  // Editor datasets: rapid typing in a 40-line control file and the large file.
  async function openFile(name) {
    await page.locator('.monaco-editor .inputarea').first().focus().catch(() => {});
    await page.keyboard.press('ControlOrMeta+p'); await page.keyboard.type(name);
    await page.locator('.quick-input-list .monaco-list-row').filter({ hasText: name }).first().waitFor();
    const started = performance.now(); await page.keyboard.press('Enter');
    await page.locator('.tabs-container .tab.active').filter({ hasText: name }).waitFor();
    await page.locator('.editor-group-container.active .monaco-editor .view-line').first().waitFor();
    return Math.round(performance.now() - started);
  }
  // Go to Line runs before the measured window and waits for its widget to open and
  // close. Its keys used to be inside the window: Ctrl, g, the digits and Enter were the
  // slowest 5-7 of 60 samples (Quick Input creation, 75-270 ms under load), so the phase
  // p95 measured that widget rather than typing, and a key typed before the widget opened
  // reached the editor.
  async function goToLine(line) {
    const widget = page.locator('.quick-input-widget').filter({ visible: true });
    const started = performance.now();
    await page.keyboard.press('ControlOrMeta+g'); await widget.waitFor();
    await page.keyboard.type(String(line)); await page.keyboard.press('Enter'); await widget.waitFor({ state: 'hidden' });
    await page.locator('.editor-group-container.active .monaco-editor .view-line').first().waitFor();
    return Math.round(performance.now() - started);
  }
  // EDITOR_BURSTS typing bursts (End, Enter, then the 53-character line). Budgets compare
  // the median burst p95; every burst and the pooled p95 are recorded.
  const BURST_TEXT = 'const typed = "rapid typing into the editor fixture";', BURST_KEYS = BURST_TEXT.length + 2;
  async function typeBursts() {
    const bursts = [];
    for (let burst = 0; burst < EDITOR_BURSTS; burst++) {
      const from = await page.evaluate(() => window.__openvisionResponsivenessProbe.latency.length);
      await page.keyboard.press('End'); await page.keyboard.press('Enter');
      await typeKeys(BURST_TEXT, 15);
      // The last key's sample lands one frame plus one task after the key.
      await page.waitForFunction(count => window.__openvisionResponsivenessProbe.latency.length >= count, from + BURST_KEYS);
      bursts.push(await page.evaluate(start => window.__openvisionResponsivenessProbe.latency.slice(start), from));
    }
    return bursts;
  }
  async function editorAttempt(name, line, openMs) {
    const navigateMs = await goToLine(line);
    let bursts;
    const phase = await measure(name, async () => { bursts = await typeBursts(); return { openMs, navigateMs }; });
    const burstP95Ms = bursts.map(samples => percentile(samples, 95));
    Object.assign(phase, { allKeysLatencyP95Ms: phase.latencyP95Ms, burstP95Ms, latencyP95Ms: percentile(burstP95Ms, 50),
      ...editTraffic(phase.fsByRole, bursts.reduce((sum, samples) => sum + samples.length, 0)) });
    console.log(`${name} bursts: ${JSON.stringify({ burstP95Ms, median: phase.latencyP95Ms, navigateMs,
      hostLoad1m: phase.hostLoad1m, cpuBusyPercent: phase.cpuBusyPercent, cpuStealPercent: phase.cpuStealPercent })}`);
    return phase;
  }
  // Repeated exceedance: an editor phase that misses a budget is measured once more in
  // the same run, and fails only if the repeat misses too. Both attempts are kept, with
  // the host CPU busy and steal shares they ran under.
  async function editorPhase(name, line, openMs) {
    const first = await editorAttempt(name, line, openMs);
    const missed = noBudgets ? [] : checkBudgets({ phases: { [name]: first } },
      applicableBudgets({ ...budgets, phases: { [name]: budgets.phases[name] } }, { full: FULL }));
    if (!missed.length) return;
    const summary = ({ latencyP95Ms, burstP95Ms, frameP95Ms, longTaskTotalMs, hostLoad1m, cpuBusyPercent, cpuStealPercent }) =>
      ({ latencyP95Ms, burstP95Ms, frameP95Ms, longTaskTotalMs, hostLoad1m, cpuBusyPercent, cpuStealPercent });
    const second = await editorAttempt(name, line, openMs);
    second.attempts = [{ ...summary(first), budgetMisses: missed }, summary(second)];
  }
  // Incremental editing: the same keys typed into the large file must cost about what they
  // cost in the 40-line control file (per-key synchronisation bytes, per-role CPU, long tasks).
  const SIZE_COMPARED = ['rendererWritePerKey', 'extensionHostReadPerKey', 'tsserverReadPerKey', 'rendererCpuMsPerKey',
    'extensionHostCpuMsPerKey', 'tsserverCpuMsPerKey', 'longTaskTotalMs'];
  if (wants('editorSmall')) await editorPhase('editorSmall', 20, await openFile('small.js'));
  if (wants('editorLarge')) {
    const largeOpenMs = await openFile('large.js');
    await page.waitForTimeout(3000);
    await editorPhase('editorLarge', Math.floor(LARGE_LINES / 2), largeOpenMs);
    const large = result.phases.editorLarge;
    large.largeFileBytes = Buffer.byteLength(largeFile);
    // Largest per-key edit-synchronisation payload (renderer -> extension host, extension host
    // -> TypeScript server) as a share of the file (1 = the whole file per key). Replies are not
    // edits: tsserver's documentHighlights for a keyword on every line is O(file) (4 MB here).
    large.syncBytesPerKeyFileShare = Math.round(Math.max(large.rendererWritePerKey ?? 0, large.tsserverReadPerKey ?? 0)
      / large.largeFileBytes * 1e5) / 1e5;
    if (result.phases.editorSmall) Object.assign(large, sizeRatios(large, result.phases.editorSmall, SIZE_COMPARED));
    console.log(`editorLarge sync: ${JSON.stringify(Object.fromEntries(Object.entries(large).filter(([key]) =>
      /PerKey|Ratio$|FileShare|editKeys/.test(key))))}`);
  }

  // Closed chat: renderer heap and marker strings before and after closing the transcript chat.
  if (wants('closedChat')) {
  await openChat(page);
  // Reply text is chat history only; prompts are also kept by the bounded (10)
  // prompt-input history and the chat title.
  const historyNeedle = `${marker} reply `;
  const markersOpen = await heapMarkerStrings(marker), historyOpen = await heapMarkerStrings(historyNeedle), heapOpen = await heap();
  const tab = page.locator('li.composite-bar-action-tab').filter({ hasText: marker }).first();
  const closedId = await input().evaluate(element => element.closest('[data-composer-id]')?.getAttribute('data-composer-id'));
  const closedTitle = (await tab.getAttribute('aria-label')) || (await tab.innerText()).trim();
  // The chat's latest persisted reply (the transcript is virtualized, so read SQLite, not the DOM).
  const lastReply = (() => {
    const db = new DatabaseSync(join(profile, 'User/globalStorage/state.vscdb'), { readOnly: true });
    try {
      const read = key => { const row = db.prepare('SELECT value FROM cursorDiskKV WHERE key = ?').get(key); return row ? JSON.parse(String(row.value)) : undefined; };
      const texts = (read(`composerData:${closedId}`)?.fullConversationHeadersOnly ?? [])
        .map(header => read(`bubbleId:${closedId}:${header.bubbleId}`)?.text ?? '');
      return Math.max(...texts.flatMap(text => [...text.matchAll(new RegExp(`${marker} turn (\\d+) done`, 'g'))].map(match => Number(match[1]))));
    } finally { db.close(); }
  })();
  await tab.hover(); await tab.locator('.remove-button').click({ force: true });
  const confirm = page.getByText('Close Tab', { exact: false }).filter({ visible: true });
  if (await confirm.first().waitFor({ timeout: 3000 }).then(() => true, () => false)) await confirm.first().click();
  await page.waitForTimeout(75000); // past the recovered composer handle cache's 60 s idle window
  const markersClosed = await heapMarkerStrings(marker, process.argv.includes('--save-closed-snapshot') ? 'closed.heapsnapshot' : undefined), heapClosed = await heap();
  const historyClosed = await heapMarkerStrings(historyNeedle);
  // Reopen from Chat History: the released chat comes back from SQLite with its latest reply.
  const reopenRestored = Number(await openChatFromHistory(page, { id: closedId, title: closedTitle,
    expected: Number.isFinite(lastReply) ? [`${marker} turn ${lastReply} done`] : ['(no reply found before close)'] }));
  result.phases.closedChat = { markerStringsOpen: markersOpen, markerStringsClosed: markersClosed,
    historyStringsOpen: historyOpen, historyStringsClosed: historyClosed, reopenRestoresTranscript: reopenRestored, reopenExpectedTurn: lastReply,
    heapOpenMiB: heapOpen.heapUsedMiB, heapClosedMiB: heapClosed.heapUsedMiB,
    heapReleasedMiB: Math.round((heapOpen.heapUsedMiB - heapClosed.heapUsedMiB) * 10) / 10,
    domNodesLiveOpen: heapOpen.domNodesLive, domNodesLiveClosed: heapClosed.domNodesLive };
  console.log(`closedChat: ${JSON.stringify(result.phases.closedChat)}`);
  }
  if (traceStorage) result.storageTraceTotals = await page.evaluate(() => ({ applicationUserSaves: globalThis.__openvisionStorageSaves ?? 0,
    catalogChangeChecks: globalThis.__openvisionStorageEchoes ?? 0 }));
  // Filesystem footprint of the persisted application-user object, then a
  // restart: the saved catalog and the selected model must come back.
  await closeApp();
  if (wants('persisted')) {
    result.phases.persisted = persistedApplicationStorage();
    console.log(`persisted: ${JSON.stringify(result.phases.persisted)}`);
  }
  if (wants('restart')) {
  const restartStarted = performance.now();
  await launch();
  await openChat(page);
  // Launch includes a fixed 8 s settle; the selected model must be shown by then or soon after.
  const restartTrigger = page.locator('.vscode-model-picker__trigger-markdown').filter({ visible: true }).first();
  const restartMenu = page.getByTestId('model-picker-menu').filter({ visible: true });
  await restartTrigger.getByText('responsiveness-fixture', { exact: false }).waitFor({ timeout: 60000 });
  const restartSelectedMs = Math.round(performance.now() - restartStarted);
  await restartTrigger.click();
  await restartMenu.locator('[data-model-picker-item-name]').first().waitFor({ timeout: 60000 });
  const catalogText = await restartMenu.innerText();
  result.phases.restart = { selectedModelRestored: 1, launchToSelectedModelMs: restartSelectedMs,
    catalogModelsAfterRestart: Number(/of (\d+) models/.exec(catalogText)?.[1] ?? 0) };
  await page.keyboard.press('Escape');
  console.log(`restart: ${JSON.stringify(result.phases.restart)}`);
  }
  result.fixture = { ...fixture };
  result.hostLoad.end = await hostLoad();
  const applicable = applicableBudgets(budgets, { full: FULL, selectedPhases });
  // Large/small ratios need the control file: without editorSmall they are not measured.
  if (!wants('editorSmall') && applicable.phases.editorLarge)
    applicable.phases.editorLarge = Object.fromEntries(Object.entries(applicable.phases.editorLarge).filter(([key]) => !key.endsWith('Ratio')));
  result.budgetFailures = noBudgets ? [] : checkBudgets(result, applicable);
  // Smoke datasets are smaller, so the full-only minimums are replaced by exact dataset checks.
  if (!noBudgets && !FULL) {
    if (wants('stream') && result.phases.stream?.chunksSent !== STREAM_CHUNKS)
      result.budgetFailures.push(`stream.chunksSent: ${result.phases.stream?.chunksSent} !== ${STREAM_CHUNKS}`);
    if (wants('restart') && result.phases.restart?.catalogModelsAfterRestart < MODELS_PER_PROVIDER * 2)
      result.budgetFailures.push(`restart.catalogModelsAfterRestart: ${result.phases.restart?.catalogModelsAfterRestart} < ${MODELS_PER_PROVIDER * 2}`);
  }
  if (fixture.unscripted) result.budgetFailures.push(`fixture: ${fixture.unscripted} unscripted requests`);
  result.success = result.budgetFailures.length === 0;
} catch (error) {
  result.error = error.stack;
  if (page && !page.isClosed()) {
    await page.screenshot({ path: join(directory, 'failure.png') }).catch(() => {});
    await writeFile(join(directory, 'failure.txt'), await page.locator('body').innerText()).catch(() => {});
  }
} finally {
  server.closeAllConnections(); await new Promise(resolveClose => server.close(resolveClose));
  await closeApp();
  result.hostExit = hostExits.at(-1);
  if (hostExits.some(exit => exit.exitCode !== 0)) { result.success = false; result.cleanupError ??= 'Owned host did not exit normally'; }
  result.hostExits = hostExits;
  await writeFile(join(directory, 'result.json'), JSON.stringify(result, null, 2) + '\n');
  console.log(JSON.stringify({ directory, success: result.success, budgetFailures: result.budgetFailures, error: result.error,
    hostExit: result.hostExit, hostLoad: result.hostLoad }, null, 2));
}
if (!result.success) process.exitCode = 1;
