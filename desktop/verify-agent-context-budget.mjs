import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { mkdir, mkdtemp, readFile, writeFile } from 'node:fs/promises';
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
import { analyzeRequest, summarizeWorkload, checkBudgets, tokenEstimator, messagesContaining, fixtureUsage, usageComparison } from './agent-context-measure.mjs';
import { createLiveAgentRelay } from './live-agent-relay.mjs';

// OV-1001 fixed Agent workloads against a controlled loopback model fixture.
// Every response is scripted; this is not live inference. Request bodies are
// recorded exactly as received, so byte counts are exact and token counts are
// estimates (see agent-context-measure.mjs).
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const budgetsPath = join(root, 'desktop/agent-context-budgets.json');
const budgets = JSON.parse(await readFile(budgetsPath, 'utf8'));
const noBudgets = process.argv.includes('--no-budgets');
// Usage capture: `--live --model SAVED_ID` sends the workloads through the live
// relay to a saved provider (real quota) and records provider-reported usage.
// `--live-dry-run` runs the same relay path against this controlled fixture,
// which returns synthetic usage fields; it proves capture, not provider numbers.
const dryRun = process.argv.includes('--live-dry-run');
const live = dryRun || process.argv.includes('--live');
const modelIndex = process.argv.indexOf('--model');
const liveModel = dryRun ? 'context-fixture' : process.argv[modelIndex + 1];
if (live && !dryRun) assert.ok(modelIndex >= 0 && liveModel && !liveModel.startsWith('--'), 'Select an enabled saved model with --model');
const { layout } = await loadRuntime(root);
await mkdir(join(root, 'logs'), { recursive: true });
const directory = await mkdtemp(join(root, 'logs/agent-context-'));
const profile = join(directory, 'profile'), project = join(directory, 'project');
await mkdir(join(profile, 'User'), { recursive: true }); await mkdir(join(directory, 'requests')); await mkdir(project);
await writeFile(join(profile, 'User/settings.json'), JSON.stringify({ ...verificationSettings, 'git.openRepositoryInParentFolders': 'never' }));

// Fixture files: fixed, distinct bodies so every occurrence in a request is countable.
const body = (name, lines) => Array.from({ length: lines }, (_, line) =>
  `export const ${name}_${line} = ${JSON.stringify(`${name} fixture value ${line} `.padEnd(48, '.'))};`).join('\n') + '\n';
const files = { 'alpha.js': body('alpha', 40), 'beta.js': body('beta', 40) };
for (const pass of ['cold', 'warm']) {
  files[`edit-${pass}-a.js`] = body(`edit_a_${pass}`, 30); files[`edit-${pass}-b.js`] = body(`edit_b_${pass}`, 30);
}
await Promise.all(Object.entries(files).map(([name, content]) => writeFile(join(project, name), content)));
const opened = join(project, 'alpha.js');

// Scripted turns: each step is a tool call; the final step is text.
// Varied text: repeated sentences would trip the Agent's loop detector.
const longReply = index => `Long session reply ${index}. ` + Array.from({ length: 10 },
  (_, point) => `Point ${point} of turn ${index} covers item ${point * 7 + index}.`).join(' ') + ' ';
function workloads(pass) {
  const tag = text => `[${pass}] ${text}`;
  const read = path => ({ name: 'Read', arguments: { path: join(project, path) } });
  return {
    single: [{ prompt: tag('Single question: what does OpenVision verify here? Do not use tools.'), reply: tag('single answered') }],
    reads: [
      { prompt: tag('Read alpha.js and summarize it.'), tools: [read('alpha.js')], reply: tag('reads turn 1 done') },
      { prompt: tag('Read alpha.js again and beta.js, then compare them.'), tools: [read('alpha.js'), read('beta.js')], reply: tag('reads turn 2 done') },
      { prompt: tag('Which file is longer? Do not use tools.'), reply: tag('reads turn 3 done') },
    ],
    edit: [{ prompt: tag(`Read edit-${pass}-a.js and edit-${pass}-b.js, then change value 0 in both.`), reasoning: true, tools: [
      read(`edit-${pass}-a.js`), read(`edit-${pass}-b.js`),
      ...['a', 'b'].map(side => ({ name: 'StrReplace', arguments: { path: join(project, `edit-${pass}-${side}.js`),
        old_string: `edit_${side}_${pass} fixture value 0 `, new_string: `edit_${side}_${pass} changed value 0 ` } })),
    ], reply: tag('edit turn done') }],
    // Native Fork Chat of the finished edit chat, then one more turn in the fork.
    fork: [{ forkOf: 'edit', prompt: tag('Fork turn: which two files changed? Do not use tools.'), reply: tag('fork turn done') }],
    long: Array.from({ length: 22 }, (_, index) => ({
      prompt: tag(`Long session turn ${index + 1}: answer with the fixed fixture reply. Do not use tools.`),
      reply: `${longReply(index + 1)}${pass} long turn ${index + 1} done`, done: `${pass} long turn ${index + 1} done` })),
  };
}

let current; // { pass, workload, turn, spec }
let slow; // pending slow request state
let lastFixtureRaw;
const requests = [];
const sse = (response, model, delta, finish_reason = null) => response.write(`data: ${JSON.stringify({ id: 'fixture-context',
  object: 'chat.completion.chunk', model, choices: [{ index: 0, delta, finish_reason }] })}\n\n`);
// Every request the application sends, recorded exactly as received.
async function recordRequest(raw) {
  const index = requests.length;
  await writeFile(join(directory, 'requests', `${String(index).padStart(4, '0')}.json`), raw);
  const record = { index, at: performance.now(), pass: current?.pass, workload: current?.workload, turn: current?.turn,
    analysis: analyzeRequest(raw, files) };
  if (current?.spec?.forkOf) record.forkSourceCopies = messagesContaining(raw, current.spec.sourcePrompt);
  requests.push(record);
  return record;
}
// Dry run only: append a synthetic usage chunk (see fixtureUsage) after the scripted reply.
const endStream = (response, model, raw, previousRaw, completion) => {
  if (dryRun) response.write(`data: ${JSON.stringify({ id: 'fixture-context', object: 'chat.completion.chunk', model, choices: [],
    usage: fixtureUsage(raw, previousRaw, completion) })}\n\n`);
  response.end('data: [DONE]\n\n');
};
const server = createServer(async (request, response) => {
  if (request.url === '/v1/models') {
    response.writeHead(200, { 'content-type': 'application/json' });
    return response.end(JSON.stringify({ data: [{ id: 'context-fixture' }] }));
  }
  if (request.url !== '/v1/chat/completions') { response.writeHead(404); return response.end(); }
  const chunks = []; for await (const chunk of request) chunks.push(chunk);
  const raw = Buffer.concat(chunks), payload = JSON.parse(raw.toString('utf8'));
  // In relay modes the relay's inspection hook records the request; the fixture only answers.
  const record = live ? { at: performance.now(), analysis: analyzeRequest(raw, files) } : await recordRequest(raw);
  const previousRaw = lastFixtureRaw; lastFixtureRaw = raw;
  if (!live && current?.pass === 'probe') record.toolResults = (payload.messages ?? []).filter(message => message.role === 'tool')
    .map(message => ({ id: message.tool_call_id, content: String(typeof message.content === 'string' ? message.content : JSON.stringify(message.content)).slice(0, 1500) }));
  response.on('close', () => { record.socketClosedAt = performance.now(); });
  response.writeHead(200, { 'content-type': 'text/event-stream' });
  if (slow) {
    record.slow = slow.name;
    sse(response, payload.model, { role: 'assistant', content: `${slow.name} partial` });
    slow.entered.resolve(record); return; // held open until Stop/close
  }
  const spec = current?.spec;
  if (!spec || record.analysis.auxiliary) {
    record.unscripted = true;
    sse(response, payload.model, { role: 'assistant', content: 'auxiliary fixture reply' });
    sse(response, payload.model, {}, 'stop'); return endStream(response, payload.model, raw, previousRaw, 'auxiliary fixture reply');
  }
  const prefix = `call_${current.pass}_${current.workload}_${current.turn}_`;
  const completed = (payload.messages ?? []).filter(message => message.role === 'tool' && message.tool_call_id?.startsWith(prefix)).length;
  record.step = `${current.pass}/${current.workload}/${current.turn}/${completed}`;
  const tool = spec.tools?.[completed];
  let completion = spec.reply;
  if (tool) {
    completion = JSON.stringify(tool.arguments);
    if (spec.reasoning) {
      sse(response, payload.model, { role: 'assistant', reasoning_content: `Plan step ${completed}: ${tool.name} is next.` });
      record.reasoningDeltasSent = 1;
    }
    sse(response, payload.model, { role: 'assistant', tool_calls: [{ index: 0, id: `${prefix}${completed}`, type: 'function',
      function: { name: tool.name, arguments: JSON.stringify(tool.arguments) } }] });
    sse(response, payload.model, {}, 'tool_calls');
  } else if (spec.loop) {
    // A model that keeps repeating one sentence: the Agent's loop detector fires.
    sse(response, payload.model, { role: 'assistant', content: 'The loop fixture repeats this sentence. '.repeat(12) });
    sse(response, payload.model, {}, 'stop');
  } else {
    sse(response, payload.model, { role: 'assistant', content: spec.reply });
    sse(response, payload.model, {}, 'stop');
  }
  endStream(response, payload.model, raw, previousRaw, completion);
});
await new Promise(resolveServer => server.listen(0, '127.0.0.1', resolveServer));

const result = { checkedAt: new Date().toISOString(), commit: execFileSync('git', ['rev-parse', 'HEAD'], { cwd: root, encoding: 'utf8' }).trim(),
  platform: process.platform, arch: process.arch, osRelease: release(), node: process.version, tokenEstimator,
  scope: 'Linux-native Agent (exec path) with a controlled loopback model fixture; scripted responses, not live inference.',
  hashes: Object.fromEntries(await Promise.all([
    ['host', layout.executable], ['agent', join(root, 'source/app/extensions/cursor-agent-exec/dist/main.js')],
    ['workbench', join(root, 'source/app/out/vs/workbench/workbench.desktop.main.js')],
    ['verifier', fileURLToPath(import.meta.url)], ['measure', join(root, 'desktop/agent-context-measure.mjs')], ['budgets', budgetsPath],
  ].map(async ([name, path]) => [name, await fileHash(path)]))),
  passes: {}, session: {}, composers: {}, forks: {}, success: false };
let app, page, relay;
const ownedHostExits = [];

// Saved provider for `--live`: the one enabled provider that offers the model (as verify-live-agent.mjs).
function savedProvider(model) {
  const db = new DatabaseSync(join(root, 'data/local/User/globalStorage/state.vscdb'), { readOnly: true });
  try {
    const state = JSON.parse(String(db.prepare('SELECT value FROM ItemTable WHERE key = ?').get('openvision.model-providers.v1').value));
    const matches = state.providers.filter(provider => provider.models.some(entry => entry.id === model && entry.enabled));
    assert.equal(matches.length, 1, 'Choose a model with exactly one enabled saved provider');
    const encrypted = db.prepare('SELECT value FROM ItemTable WHERE key = ?').get(`secret://openvision.provider.${matches[0].id}`)?.value;
    assert.ok(encrypted, 'Selected provider has no saved credential');
    return { ...matches[0], encrypted };
  } finally { db.close(); }
}

async function launch() {
  const env = { ...process.env }; delete env.ELECTRON_RUN_AS_NODE;
  app = await _electron.launch({ executablePath: layout.executable, env, timeout: 60000,
    args: ['--user-data-dir', profile, '--extensions-dir', join(directory, 'extensions'), '--new-window',
      '--disable-updates', '--skip-welcome', '--skip-release-notes', '--disable-telemetry', '--disable-crash-reporter',
      ...(process.platform === 'linux' ? await linuxSandboxArguments(layout.host) : []), project, opened] });
  page = await app.firstWindow();
  page.setDefaultTimeout(15000);
  await page.locator('.part.titlebar .openvision-local-profile').waitFor({ state: 'attached', timeout: 60000 }); await enterWorkspace(page);
  await page.waitForTimeout(8000);
}
async function closeOwnedApp() {
  if (!app) return;
  const child = app.process(), exited = new Promise(resolveExit => child.once('exit', resolveExit));
  const closing = app.close();
  await page?.getByText('Quit Anyway', { exact: true }).click({ timeout: 3000 }).catch(() => {});
  await closing; if (child.exitCode === null && child.signalCode === null) await exited;
  ownedHostExits.push({ exitCode: child.exitCode, signalCode: child.signalCode });
  app = undefined;
}
const input = () => page.locator('.aislash-editor-input[contenteditable=true]').filter({ visible: true }).first();
const idle = () => page.locator('.stop-button').filter({ visible: true }).waitFor({ state: 'hidden', timeout: 30000 });
async function newChat() {
  await openChat(page);
  const button = page.getByRole('button', { name: 'New Agent', exact: true }).filter({ visible: true });
  if (await button.count()) await button.first().click(); else await page.keyboard.press('ControlOrMeta+n');
  await input().waitFor();
}
const composerId = () => input().evaluate(element => element.closest('[data-composer-id]')?.getAttribute('data-composer-id'));

// Native Fork Chat (command palette) of the visible chat; resolves to the fork's id.
async function forkChat(sourceId) {
  await page.keyboard.press('ControlOrMeta+Shift+p');
  const command = page.locator('.quick-input-widget').getByRole('textbox', { name: 'input', exact: true });
  await command.fill('>Fork Chat');
  await page.locator('.quick-input-list .monaco-list-row').filter({ hasText: 'Fork Chat' }).first().click();
  await page.locator('.quick-input-widget').waitFor({ state: 'hidden' });
  await page.waitForFunction(sourceId => [...document.querySelectorAll('.aislash-editor-input[contenteditable=true]')]
    .filter(element => element.getClientRects().length)
    .some(element => { const id = element.closest('[data-composer-id]')?.getAttribute('data-composer-id'); return id && id !== sourceId; }),
  sourceId, { timeout: 15000 });
  await input().waitFor();
  return composerId();
}
// Live replies are not scripted: a turn is done when its requests stop and the chat is idle.
async function liveTurnSettled(before) {
  const deadline = performance.now() + 180000;
  while (requests.length === before && performance.now() < deadline) await page.waitForTimeout(250);
  let seen = requests.length, quietSince = performance.now();
  while (performance.now() < deadline) {
    await page.waitForTimeout(500);
    if (requests.length !== seen) { seen = requests.length; quietSince = performance.now(); continue; }
    if (performance.now() - quietSince > 3000 && !await page.locator('.stop-button').filter({ visible: true }).count()) return;
  }
  throw new Error('Live turn did not settle within 180 s');
}

async function runWorkload(pass, workload, turns) {
  const forkOf = turns[0].forkOf;
  let forkSource;
  if (forkOf) {
    const sourceId = result.composers[`${pass}/${forkOf}`];
    assert.ok(sourceId, `${workload} needs the ${forkOf} workload first`);
    turns = turns.map(spec => ({ ...spec, sourcePrompt: workloads(pass)[forkOf][0].prompt }));
    forkSource = { sourceId, beforeFork: persistedTranscript(sourceId) };
    forkSource.forkId = await forkChat(sourceId);
  } else await newChat();
  const before = requests.length, started = performance.now();
  for (const [turn, spec] of turns.entries()) {
    current = { pass, workload, turn, spec };
    const turnBefore = requests.length;
    await input().fill(spec.prompt); await input().press('Enter');
    if (live && !dryRun) await liveTurnSettled(turnBefore);
    else await page.getByText(spec.done ?? spec.reply, { exact: false }).filter({ visible: true }).last().waitFor({ timeout: 45000 });
    await idle();
    if (workload === 'edit') {
      const keep = page.getByText('Keep All', { exact: true }).filter({ visible: true });
      if (await keep.count()) await keep.first().click();
    }
  }
  await page.waitForTimeout(2500); // late auxiliary or repeated requests land here
  current = undefined;
  const entries = requests.slice(before);
  const composer = await composerId();
  result.composers[`${pass}/${workload}`] = composer;
  const summary = summarizeWorkload(entries);
  summary.reasoningDeltasSent = entries.reduce((sum, entry) => sum + (entry.reasoningDeltasSent ?? 0), 0);
  if (forkSource) {
    assert.ok(composer && composer !== forkSource.sourceId && composer === forkSource.forkId, 'Fork must be a separate visible chat');
    forkSource.forkPrompt = turns[0].prompt; forkSource.forkReply = turns[0].reply; forkSource.sourcePromptText = turns[0].sourcePrompt;
    result.forks[pass] = forkSource;
    // Source history appears once (one copy of the source prompt) in every fork request.
    summary.sourceHistoryCopies = Math.max(0, ...entries.map(entry => entry.forkSourceCopies ?? 0));
    summary.minSourceHistoryCopies = Math.min(...entries.map(entry => entry.forkSourceCopies ?? 0));
  }
  return { elapsedMs: Math.round(performance.now() - started), turns: turns.length, composer,
    summary,
    requests: entries.map(entry => ({ index: entry.index, turn: entry.turn, step: entry.step, unscripted: entry.unscripted,
      ...Object.fromEntries(Object.entries(entry.analysis).filter(([key]) => !['identity', 'toolNames'].includes(key))),
      identity: entry.analysis.identity.slice(0, 16) })),
    toolNames: entries[0]?.analysis.toolNames };
}

// Stop latency: click Stop while the provider stream is held open.
async function slowTurn(name) {
  slow = { name, entered: Promise.withResolvers() };
  await input().fill(`${name}: answer slowly. Do not use tools.`); await input().press('Enter');
  const record = await Promise.race([slow.entered.promise, new Promise((_, reject) =>
    setTimeout(() => reject(new Error(`${name}: slow request not observed`)), 30000).unref())]);
  await page.getByText(`${name} partial`, { exact: false }).filter({ visible: true }).last().waitFor({ timeout: 30000 });
  slow = undefined;
  return record;
}
async function socketClosed(record, timeout = 10000) {
  const deadline = Date.now() + timeout;
  while (!record.socketClosedAt && Date.now() < deadline) await new Promise(resolveWait => setTimeout(resolveWait, 10));
  return record.socketClosedAt;
}

// Renderer heap retention: count heap-snapshot strings containing a marker
// (and, when given, a second needle such as the reply-only text).
async function heapMarkers(marker, sample, second) {
  const session = await page.context().newCDPSession(page);
  let count = 0, secondCount = 0, tail = '';
  const chunks = sample ? [] : undefined;
  const keep = Math.max(marker.length, second?.length ?? 0) - 1;
  const occurrences = (text, needle) => text.split(needle).length - 1;
  session.on('HeapProfiler.addHeapSnapshotChunk', ({ chunk }) => {
    chunks?.push(chunk);
    const text = tail + chunk; count += occurrences(text, marker) - occurrences(tail, marker);
    if (second) secondCount += occurrences(text, second) - occurrences(tail, second);
    tail = text.slice(-keep);
  });
  await session.send('HeapProfiler.enable');
  await session.send('HeapProfiler.collectGarbage');
  await session.send('HeapProfiler.takeHeapSnapshot', { reportProgress: false });
  await session.detach();
  if (chunks) {
    // Diagnostic only: lengths and prefixes of the retained marker strings.
    await writeFile(join(directory, `${sample}.heapsnapshot`), chunks.join(''));
    const strings = JSON.parse(chunks.join('')).strings.filter(value => value.includes(marker));
    await writeFile(join(directory, `${sample}.json`), JSON.stringify(strings.map(value => ({ length: value.length,
      prefix: value.slice(0, 160) })), null, 2));
  }
  return second ? { count, second: secondCount } : count;
}

// Fork checks after the application has closed: the source transcript on disk
// is unchanged and the fork starts with it; then, after a restart, each fork
// opens from Chat History with its own reply and the source history.
async function verifyForks() {
  const strip = list => list?.map(({ type, text, tool }) => ({ type, text, tool }));
  for (const [pass, fork] of Object.entries(result.forks)) {
    const source = persistedTranscript(fork.sourceId), forked = persistedTranscript(fork.forkId);
    const summary = result.passes[pass].fork.summary;
    fork.persisted = { beforeForkEntries: fork.beforeFork?.length, sourceEntries: source?.length, forkEntries: forked?.length,
      sourceReasoningEntries: source?.filter(entry => entry.reasoning).length };
    summary.sourceUnchangedOnDisk = Number(Boolean(source?.length) && JSON.stringify(strip(source)) === JSON.stringify(strip(fork.beforeFork)) &&
      !source.some(entry => entry.text.includes(fork.forkPrompt) || entry.text.includes(fork.forkReply)));
    summary.forkKeepsSourceHistory = Number(Boolean(forked && source?.length) &&
      JSON.stringify(strip(forked.slice(0, source.length))) === JSON.stringify(strip(source)));
    summary.forkAddedEntries = forked && source ? forked.length - source.length : null;
    delete fork.beforeFork;
    fork.title = composerTitle(fork.forkId);
  }
  await launch();
  for (const [pass, fork] of Object.entries(result.forks)) {
    const summary = result.passes[pass].fork.summary;
    summary.forkSurvivesRestart = Number(Boolean(fork.title) && await openFromHistory(fork.forkId, fork.title, fork.forkReply, fork.sourcePromptText));
  }
  await closeOwnedApp();
}

// Reopen a chat through the native Chat History list and check its transcript.
const openFromHistory = (id, title, ...expected) => openChatFromHistory(page, { id, title, expected });

function composerTitle(composer) {
  const db = new DatabaseSync(join(profile, 'User/globalStorage/state.vscdb'), { readOnly: true });
  try {
    const row = db.prepare('SELECT value FROM cursorDiskKV WHERE key = ?').get(`composerData:${composer}`);
    return row ? JSON.parse(String(row.value)).name : undefined;
  } finally { db.close(); }
}

// A chat's persisted transcript: one entry per header, in order (SQLite records).
function persistedTranscript(composer) {
  const db = new DatabaseSync(join(profile, 'User/globalStorage/state.vscdb'), { readOnly: true });
  try {
    const read = key => { const row = db.prepare('SELECT value FROM cursorDiskKV WHERE key = ?').get(key); return row ? JSON.parse(String(row.value)) : undefined; };
    const data = read(`composerData:${composer}`);
    if (!data) return undefined;
    return (data.fullConversationHeadersOnly ?? []).map(header => {
      const bubble = read(`bubbleId:${composer}:${header.bubbleId}`) ?? {};
      return { type: bubble.type ?? header.type, text: bubble.text ?? '', tool: bubble.toolFormerData?.name,
        reasoning: Boolean(bubble.thinking?.text) };
    });
  } finally { db.close(); }
}

function persistedBytes(composer) {
  const db = new DatabaseSync(join(profile, 'User/globalStorage/state.vscdb'), { readOnly: true });
  try {
    const one = db.prepare('SELECT length(CAST(value AS BLOB)) AS size FROM cursorDiskKV WHERE key = ?').get(`composerData:${composer}`);
    const bubbles = db.prepare("SELECT count(*) AS count, coalesce(sum(length(CAST(value AS BLOB))), 0) AS size FROM cursorDiskKV WHERE key LIKE ?")
      .get(`bubbleId:${composer}:%`);
    return { composerBytes: one?.size ?? 0, bubbleRecords: bubbles.count, bubbleBytes: bubbles.size, totalBytes: (one?.size ?? 0) + bubbles.size };
  } finally { db.close(); }
}

try {
  await launch();
  await page.locator('.part.titlebar a[aria-label$=" Settings"]').click();
  await page.locator('.cursor-settings-sidebar-cell-label').filter({ hasText: /^Models$/ }).locator('..').click();
  await page.locator('.openvision-model-settings').getByRole('button', { name: 'Add Provider', exact: true }).click();
  await page.getByLabel('Provider Name', { exact: true }).fill('Context budget fixture');
  if (live) {
    const provider = dryRun ? { url: `http://127.0.0.1:${server.address().port}/v1`, models: [{ id: liveModel }] } : savedProvider(liveModel);
    relay = await createLiveAgentRelay({ provider, model: liveModel, marker: 'OV1001-LIVE-USAGE', requestLimit: 32,
      inspectRequest: body => recordRequest(Buffer.from(body)) });
    relay.setKey(dryRun ? 'fixture-key' : await app.evaluate(({ safeStorage }, saved) =>
      safeStorage.decryptString(Buffer.from(JSON.parse(String(saved)).data)), provider.encrypted));
    result.relay = { mode: dryRun ? 'dry run' : 'live', model: liveModel, providerHost: dryRun ? 'loopback fixture' : new URL(provider.url).host };
  }
  await page.getByLabel('API Base URL', { exact: true }).fill(live ? relay.url : `http://127.0.0.1:${server.address().port}/v1`);
  await page.getByLabel('API Key', { exact: true }).fill(live ? 'native-probe-key' : 'fixture-key');
  await page.locator('dialog').getByRole('button', { name: 'Save', exact: true }).click();
  // Save waits for model discovery; Linux container runs took longer than 15 s (as verify-responsiveness allows 90 s).
  const savedAt = performance.now();
  await page.locator('dialog').waitFor({ state: 'detached', timeout: 90000 });
  result.providerSaveMs = Math.round(performance.now() - savedAt);
  await page.locator('.tabs-container .tab').filter({ hasText: 'alpha.js' }).first().click();
  await page.keyboard.press('ControlOrMeta+Shift+l');
  await page.locator('.vscode-model-picker__trigger-markdown').filter({ visible: true }).first().click();
  await page.getByTestId('model-picker-menu').filter({ visible: true }).locator('[data-model-picker-item-name]')
    .filter({ hasText: live ? liveModel : 'context-fixture' }).click();
  await page.keyboard.press('Escape');
  // Cold: first Agent work after a fresh-profile launch. Warm: the same
  // workloads again in the same running application, in new chats.
  for (const pass of live ? ['cold'] : ['cold', 'warm']) {
    result.passes[pass] = {};
    const only = process.argv.find(value => value.startsWith('--workloads='))?.slice(12).split(',') ?? (live && !dryRun ? ['single', 'reads'] : undefined);
    for (const [name, turns] of Object.entries(workloads(pass)).filter(([name]) => !only || only.includes(name))) {
      result.passes[pass][name] = await runWorkload(pass, name, turns);
      const s = result.passes[pass][name].summary;
      console.log(`${pass}/${name}: ${s.requests} requests, ${s.inputBytes} B, ~${s.estimatedInputTokens} tokens, ` +
        `dup ${s.duplicateRequests}/${s.nearDuplicateRequests}, aux ${s.auxiliaryRequests}, repeated files ${s.repeatedFileOccurrences}`);
    }
  }
  if (process.argv.includes('--probe-tools')) {
    // Exploration: do hosted-only tools produce a usable result in local mode?
    await newChat();
    const spec = { tools: [{ name: 'WebSearch', arguments: { search_term: 'OpenVision context fixture query' } },
      { name: 'GenerateImage', arguments: { description: 'A flat blue square icon with a white circle centred on a plain background' } }],
    reply: 'probe tools done' };
    const before = requests.length;
    current = { pass: 'probe', workload: 'tools', turn: 0, spec };
    await input().fill('Probe hosted tools: search the web, then generate an image.'); await input().press('Enter');
    const deadline = Date.now() + 90000;
    while (Date.now() < deadline && !await page.getByText('probe tools done', { exact: false }).filter({ visible: true }).count()) {
      const run = page.getByRole('button', { name: /^Run/ }).filter({ visible: true });
      if (await run.count()) await run.first().click().catch(() => {});
      await page.waitForTimeout(500);
    }
    await idle().catch(() => {}); current = undefined;
    result.toolProbe = requests.slice(before).map(entry => entry.toolResults);
    await page.screenshot({ path: join(directory, 'tool-probe.png') });
  }
  // Session checks use the controlled fixture only; relay modes measure usage.
  if (!live) {
    // Looping model: count every request one submission causes.
    if (!process.argv.includes('--skip-loop')) {
      await newChat();
      const before = requests.length, started = performance.now();
      current = { pass: 'loop', workload: 'loop', turn: 0, spec: { loop: true } };
      await input().fill('Loop workload: answer once. Do not use tools.'); await input().press('Enter');
      // Automatic retries back off, and the Stop control can be hidden between
      // attempts, so settle on request quiescence: 45 s without a new request,
      // capped at 300 s, after which the turn is stopped explicitly.
      let seen = requests.length, quietSince = performance.now(), settled = false;
      while (performance.now() - started < 300000) {
        await page.waitForTimeout(500);
        if (requests.length !== seen) { seen = requests.length; quietSince = performance.now(); }
        else if (performance.now() - quietSince > 45000) { settled = true; break; }
      }
      await page.screenshot({ path: join(directory, 'loop-settled.png') });
      if (!settled) await page.locator('.stop-button').filter({ visible: true }).first().click().catch(() => {});
      await idle().catch(() => {}); await page.waitForTimeout(2500);
      current = undefined;
      const entries = requests.slice(before);
      result.session.loop = { requests: entries.length, settledWithin300s: settled,
        elapsedToLastRequestMs: entries.length ? Math.round(entries.at(-1).at - started) : 0,
        distinctBodies: new Set(entries.map(entry => entry.analysis.identity)).size,
        reminderRequests: entries.filter(entry => entry.analysis.loopReminders > 0).length,
        bodyTail: (await page.locator('body').innerText()).slice(-600) };
      result.session.loopRequests = entries.length;
      result.session.loopDuplicateRequests = entries.length - result.session.loop.distinctBodies;
      // Explicit recovery stays available and sends exactly one request.
      const tryAgain = page.getByText(/^(Try again|Resume)$/).filter({ visible: true });
      result.session.loop.recoveryAction = await tryAgain.count() ? await tryAgain.last().innerText() : null;
      if (result.session.loop.recoveryAction) {
        const retryBefore = requests.length;
        current = { pass: 'loop', workload: 'loop-retry', turn: 0, spec: { reply: 'loop recovered once' } };
        await tryAgain.last().click();
        await page.getByText('loop recovered once', { exact: false }).filter({ visible: true }).last().waitFor({ timeout: 30000 });
        await idle(); await page.waitForTimeout(2500); current = undefined;
        result.session.loopRecoveryRequests = requests.length - retryBefore;
      }
      console.log(`loop: ${JSON.stringify({ ...result.session.loop, bodyTail: undefined })}`);
    }
    // Stop latency on three held streams in one chat.
    await newChat();
    const stops = [];
    for (let attempt = 1; attempt <= 3; attempt++) {
      const before = requests.length, record = await slowTurn(`stop-${attempt}`);
      const clicked = performance.now();
      await page.locator('.stop-button').filter({ visible: true }).first().click();
      await idle(); const idleAt = performance.now();
      const closed = await socketClosed(record);
      await page.waitForTimeout(1500);
      stops.push({ stopToTransportCloseMs: closed ? Math.round(closed - clicked) : null, stopToIdleMs: Math.round(idleAt - clicked),
        requests: requests.length - before });
    }
    result.session.stops = stops;
    result.session.maxStopToTransportCloseMs = Math.max(...stops.map(stop => stop.stopToTransportCloseMs ?? Infinity));
    result.session.stopExtraRequests = stops.reduce((sum, stop) => sum + stop.requests - 1, 0);
    // Chat disposal: a chat with marked history and an in-flight request is closed.
    await newChat();
    const marker = `OV1001-DISPOSE-${Date.now().toString(36)}`;
    const disposeTurns = Array.from({ length: 3 }, (_, index) => ({ prompt: `${marker} turn ${index}. Do not use tools.`,
      reply: `${marker} reply ${index} ` + Array.from({ length: 40 }, (_, part) => `history part ${part} of reply ${index} is ${part * 13 + index}.`).join(' ') }));
    for (const [turn, spec] of disposeTurns.entries()) {
      current = { pass: 'dispose', workload: 'chat', turn, spec };
      await input().fill(spec.prompt); await input().press('Enter');
      await page.getByText(`${marker} reply ${turn}`, { exact: false }).filter({ visible: true }).last().waitFor({ timeout: 30000 });
      await idle();
    }
    current = undefined;
    const disposeComposer = await composerId();
    const inFlight = await slowTurn(`${marker} in-flight`);
    // Reply text is chat history only; prompts are also kept by the bounded (10)
    // prompt-input history and the chat title, which are not chat history.
    const replyNeedle = `${marker} reply `;
    const heapBefore = await heapMarkers(marker, undefined, replyNeedle);
    let closeStarted;
    await page.screenshot({ path: join(directory, 'dispose-before-close.png') });
    if (process.argv.includes('--dump-dom')) await writeFile(join(directory, 'dispose-dom.html'), await page.evaluate(() => document.body.outerHTML));
    // Close the chat's own tab (its hover close control) while the request is in flight.
    const tab = page.locator('li.composite-bar-action-tab').filter({ hasText: marker }).first();
    const disposeTitle = (await tab.getAttribute('aria-label')) || (await tab.innerText()).trim();
    await tab.hover();
    closeStarted = performance.now();
    await tab.locator('.remove-button').click({ force: true });
    // The recovered UI confirms closing a running chat; latency starts at the confirmation.
    const confirmClose = page.getByText('Close Tab', { exact: false }).filter({ visible: true });
    result.session.chatCloseConfirmation = await confirmClose.first().waitFor({ timeout: 5000 }).then(() => true, () => false);
    if (result.session.chatCloseConfirmation) { closeStarted = performance.now(); await confirmClose.first().click(); }
    await page.waitForTimeout(500);
    await page.screenshot({ path: join(directory, 'dispose-after-tab-close.png') });
    result.session.disposeTabsRemaining = await page.locator('li.composite-bar-action-tab').filter({ hasText: marker }).count();
    const chatClosed = await socketClosed(inFlight, 5000);
    result.session.chatCloseCancelsInFlight = Boolean(chatClosed);
    result.session.chatCloseToTransportCloseMs = chatClosed ? Math.round(chatClosed - closeStarted) : null;
    await page.waitForTimeout(3000);
    const heapAfter = await heapMarkers(marker, undefined, replyNeedle);
    // Loaded chats stay in a three-entry LRU for 60 s after their last use, then a
    // sweep finalizes them (recovered composer handle manager). Measure after it.
    await page.waitForTimeout(75000);
    const heapReleased = await heapMarkers(marker, process.argv.includes('--heap-strings') ? 'heap-after-release' : undefined, replyNeedle);
    Object.assign(result.session, { heapMarkerStringsBeforeClose: heapBefore.count, heapMarkerStringsAfterClose: heapAfter.count,
      heapMarkerStringsAfterRelease: heapReleased.count, heapReplyStringsBeforeClose: heapBefore.second,
      heapReplyStringsAfterClose: heapAfter.second, heapReplyStringsAfterRelease: heapReleased.second });
    // Reopen from Chat History: every prompt and reply of the closed chat comes back (from SQLite once released).
    result.session.disposeReopenRestoresTranscript = Number(await openFromHistory(disposeComposer, disposeTitle,
      ...disposeTurns.flatMap((spec, index) => [`${marker} turn ${index}`, `${marker} reply ${index} `])));
    await page.screenshot({ path: join(directory, 'dispose-reopened.png') });
    result.composers['dispose/chat'] = disposeComposer;
    await page.screenshot({ path: join(directory, 'dispose-after-close.png') });
    // Window close: an in-flight request must be cancelled and the host must exit.
    await newChat();
    const windowFlight = await slowTurn('window-close in-flight');
    const windowStarted = performance.now();
    await closeOwnedApp();
    const windowClosed = await socketClosed(windowFlight, 5000);
    result.session.windowCloseCancelsInFlight = Boolean(windowClosed);
    result.session.windowCloseToTransportCloseMs = windowClosed ? Math.round(windowClosed - windowStarted) : null;
    result.session.ownedHostExitedCleanly = ownedHostExits.every(exit => exit.exitCode === 0);
  } else await closeOwnedApp();
  // Forks: source unchanged on disk, fork keeps the source prefix, then the fork survives a restart.
  if (Object.keys(result.forks).length) await verifyForks();
  // Retained history on disk for each workload chat (SQLite records).
  result.persisted = Object.fromEntries(Object.entries(result.composers).filter(([, id]) => id).map(([key, id]) => [key, persistedBytes(id)]));
  for (const pass of Object.keys(result.passes)) for (const [name, run] of Object.entries(result.passes[pass]))
    run.summary.persistedHistoryBytes = result.persisted[`${pass}/${name}`]?.totalBytes;
  result.session.unscriptedRequests = requests.filter(entry => entry.unscripted && !entry.slow).length;
  if (live) {
    // Usage capture: provider-reported (or, in a dry run, synthetic fixture) usage next to tokenx estimates.
    for (const [index, record] of relay.requests.entries()) if (requests[index]) requests[index].usage = record.usage;
    result.usage = { source: dryRun ? 'controlled fixture through the live relay (dry run): synthetic usage values, not provider-reported'
      : 'provider-reported usage relayed from the saved provider', model: liveModel,
    workloads: Object.fromEntries(Object.entries(result.passes.cold ?? {}).map(([name, run]) =>
      [name, usageComparison(requests.filter(entry => entry.pass === 'cold' && entry.workload === name))])) };
    result.usage.total = usageComparison(requests);
    result.usage.relayRequests = relay.requests.map(record => ({ endpoint: record.endpoint, httpStatus: record.httpStatus,
      streamCompleted: record.streamCompleted, usage: record.usage }));
    console.log(`usage: ${JSON.stringify({ ...result.usage.total, rows: undefined })}`);
    // A dry run must capture every usage field; a live run records whatever the provider reports.
    result.budgetFailures = [];
    if (dryRun && (result.usage.total.requestsWithUsage !== requests.length || result.usage.total.requestsWithCachedTokens !== requests.length || !requests.length))
      result.budgetFailures.push({ path: 'usage.captured', actual: result.usage.total.requestsWithUsage, limit: requests.length });
    if (relay.requests.some(record => !record.streamCompleted)) result.budgetFailures.push({ path: 'usage.relayStreams', reason: 'a relayed stream did not complete' });
  } else result.budgetFailures = noBudgets ? [] : checkBudgets(result, budgets);
  result.success = result.budgetFailures.length === 0;
} catch (error) {
  result.error = error.stack;
  if (page && !page.isClosed()) {
    await page.screenshot({ path: join(directory, 'failure.png') }).catch(() => {});
    await writeFile(join(directory, 'failure.txt'), await page.locator('body').innerText()).catch(() => {});
  }
} finally {
  server.closeAllConnections(); await new Promise(resolveClose => server.close(resolveClose));
  await relay?.close();
  await closeOwnedApp().catch(error => { result.cleanupError = error.message; result.success = false; });
  result.ownedHostExits = ownedHostExits;
  await writeFile(join(directory, 'result.json'), JSON.stringify(result, null, 2) + '\n');
  const table = Object.fromEntries(Object.entries(result.passes).flatMap(([pass, runs]) => Object.entries(runs)
    .map(([name, run]) => [`${pass}/${name}`, run.summary])));
  console.log(JSON.stringify({ directory, success: result.success, summaries: table, session: result.session,
    budgetFailures: result.budgetFailures, error: result.error, ownedHostExits }, null, 2));
}
if (!result.success) process.exitCode = 1;
