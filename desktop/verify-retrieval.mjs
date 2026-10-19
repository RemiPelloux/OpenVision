import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { createServer } from 'node:http';
import { once } from 'node:events';
import { cp, mkdir, mkdtemp, open, readFile, readdir, rename, rm, stat, symlink, unlink, writeFile } from 'node:fs/promises';
import { release } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { DatabaseSync } from 'node:sqlite';
import { _electron } from '../tooling/browser.mjs';
import { verificationRuntime } from './verification-runtime.mjs';
import { verificationSettings } from './verification-profile.mjs';
import { linuxSandboxArguments } from './platform.mjs';
import { fileHash } from './import-files.mjs';
import { enterWorkspace, openChat } from './verification-workspace.mjs';
import { electronNames, mib, processFamily, stillAlive, summarize } from './process-family-linux.mjs';
import { fixtureVector } from './retrieval-embedding-fixture.mjs';
import { createScaleFixture } from './retrieval-scale-fixture.mjs';
import { indexDirectory } from './retrieval-service.mjs';
import budgets from './retrieval-budgets.json' with { type: 'json' };

// Native retrieval verifiers (Linux x64, Xvfb). A controlled loopback model
// calls the Agent CodebaseSearch tool; results come from the OpenVision index
// in the real editor. Modes:
//   (default)       OV-502: tool schema, ranked results, chat card, target
//                   directory, embeddings fallback and hybrid ranking.
//   --incremental   OV-503: editor/external edit, rename, delete, ignore file,
//                   symlink, branch checkout and files.exclude counter budgets.
//   --recovery      OV-504: cancel latency, kill -9 mid-index, corruption,
//                   schema migration, idle release memory and reactivation,
//                   Rebuild/Delete commands.
// The model is a fixture, not live inference.
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const mode = process.argv.includes('--incremental') ? 'incremental' : process.argv.includes('--recovery') ? 'recovery' : 'tool';
assert.equal(process.platform, 'linux', 'Retrieval native verifiers run on Linux');
assert.notEqual(process.getuid?.(), 0, 'Run native verifiers as a non-root user');
const { layout, appRoot } = await verificationRuntime(root);
await mkdir(join(root, 'logs'), { recursive: true });
const directory = await mkdtemp(join(root, `logs/retrieval-${mode}-`));
const profile = join(directory, 'profile'), project = join(directory, 'project');
const git = (...args) => execFileSync('git', ['-c', 'user.name=OpenVision Test', '-c', 'user.email=test@openvision.invalid',
  '-c', 'commit.gpgsign=false', ...args], { cwd: project, encoding: 'utf8' });
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
async function until(check, label, timeoutMs = 60000, step = 100) {
  const deadline = Date.now() + timeoutMs;
  for (;;) {
    const value = await check();
    if (value) return value;
    if (Date.now() > deadline) throw new Error(`Timed out: ${label}`);
    await wait(step);
  }
}

// Project.
if (mode === 'recovery') await createScaleFixture(project, { files: 10000 });
else await cp(join(root, 'desktop/fixtures/retrieval-corpus/project'), project, { recursive: true });
execFileSync('git', ['init', '-q', '-b', 'main'], { cwd: project });
git('add', '-A'); git('commit', '-q', '-m', 'fixture');
if (mode === 'incremental') {
  git('checkout', '-q', '-b', 'feature');
  await writeFile(join(project, 'server/src/services/branch-feature.ts'), 'export function scheduleDockBranchFeature() {\n  return "feature branch dock";\n}\n');
  await rm(join(project, 'docs/runbook.md'), { force: true });
  git('add', '-A'); git('commit', '-q', '-m', 'feature');
  git('checkout', '-q', 'main');
}
const idleSeconds = mode === 'recovery' ? 15 : 600;
const settingsPath = join(profile, 'User/settings.json');
const baseSettings = { ...verificationSettings, 'git.openRepositoryInParentFolders': 'never', 'git.autoRepositoryDetection': false,
  'openvision.retrieval.idleSeconds': idleSeconds };
await mkdir(dirname(settingsPath), { recursive: true });
await writeFile(settingsPath, JSON.stringify(baseSettings, null, 2));
const indexPath = await indexDirectory(profile, project);

// Controlled model and loopback embeddings endpoint.
const requests = [], embeddingRequests = [], errors = [];
let script, firstTools;
const embedding = { mode: 'error' };
const server = createServer(async (request, response) => {
  const chunks = []; for await (const chunk of request) chunks.push(chunk);
  const body = chunks.length ? JSON.parse(Buffer.concat(chunks)) : undefined;
  if (request.url === '/v1/models') { response.setHeader('content-type', 'application/json'); return response.end(JSON.stringify({ data: [{ id: 'fixture-agent' }] })); }
  if (request.url === '/v1/embeddings') {
    embeddingRequests.push({ inputs: body?.input?.length, chars: body?.input?.reduce((sum, text) => sum + text.length, 0), model: body?.model,
      authorized: request.headers.authorization === 'Bearer fixture-key', mode: embedding.mode });
    if (embedding.mode === 'error') { response.statusCode = 503; return response.end('{"error":"fixture unavailable"}'); }
    response.setHeader('content-type', 'application/json');
    return response.end(JSON.stringify({ data: body.input.map((text, index) => ({ index, embedding: fixtureVector(text) })) }));
  }
  if (request.url !== '/v1/chat/completions') { response.statusCode = 404; return response.end(); }
  firstTools ??= body.tools;
  requests.push({ tag: script?.tag, tools: body.tools?.length, messages: body.messages?.length });
  response.writeHead(200, { 'content-type': 'text/event-stream' });
  const event = (delta, finish_reason = null) => response.write(`data: ${JSON.stringify({ id: 'fixture', object: 'chat.completion.chunk',
    model: body.model, choices: [{ index: 0, delta, finish_reason }] })}\n\n`);
  if (!body.tools?.length || !script) { event({ role: 'assistant', content: 'OK' }); event({}, 'stop'); return response.end('data: [DONE]\n\n'); }
  const done = body.messages.filter(message => message.role === 'tool' && script.calls.some(call => call.id === message.tool_call_id));
  for (const message of done) script.results.set(message.tool_call_id, typeof message.content === 'string' ? message.content : JSON.stringify(message.content));
  const next = script.calls.find(call => !script.results.has(call.id));
  if (next) {
    event({ role: 'assistant', tool_calls: [{ index: 0, id: next.id, type: 'function', function: { name: 'CodebaseSearch', arguments: JSON.stringify(next.args) } }] });
    event({}, 'tool_calls');
  } else { event({ role: 'assistant', content: `OpenVision retrieval ${script.tag} done.` }); event({}, 'stop'); }
  response.end('data: [DONE]\n\n');
});
await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
const providerUrl = `http://127.0.0.1:${server.address().port}/v1`;

const result = { checkedAt: new Date().toISOString(), mode, success: false, controlledModel: true, checks: {}, cases: [], errors };
result.identity = { commit: execFileSync('git', ['rev-parse', 'HEAD'], { cwd: root, encoding: 'utf8' }).trim(), platform: process.platform,
  arch: process.arch, osRelease: release(), node: process.version, hashes: Object.fromEntries(await Promise.all([
    ['agentExec', join(appRoot, 'extensions/cursor-agent-exec/dist/main.js')],
    ['codebaseSearch', join(appRoot, 'extensions/cursor-agent-exec/dist/openvision-codebase-search.cjs')],
    ['index', join(appRoot, 'extensions/cursor-agent-exec/dist/openvision-retrieval/retrieval-index.mjs')],
    ['verifier', fileURLToPath(import.meta.url)]].map(async ([name, path]) => [name, await fileHash(path)]))) };

let app, page, hostExits = [];
async function launch() {
  const env = { ...process.env }; delete env.ELECTRON_RUN_AS_NODE;
  app = await _electron.launch({ executablePath: layout.executable, env, timeout: 60000,
    args: ['--user-data-dir', profile, '--extensions-dir', join(directory, 'extensions'), '--new-window', '--disable-updates',
      '--skip-welcome', '--skip-release-notes', '--disable-telemetry', '--disable-crash-reporter',
      ...await linuxSandboxArguments(layout.host), project] });
  page = await app.firstWindow();
  page.setDefaultTimeout(20000);
  page.on('pageerror', error => errors.push(error.message));
  await page.locator('.part.titlebar .openvision-local-profile').waitFor({ state: 'attached', timeout: 60000 });
  await enterWorkspace(page);
  await page.waitForTimeout(3000);
}
async function close() {
  if (!app) return;
  const child = app.process(), exited = once(child, 'exit');
  await app.close().catch(() => {});
  if (child.exitCode === null && child.signalCode === null) await exited;
  hostExits.push({ exitCode: child.exitCode, signal: child.signalCode });
  app = undefined; page = undefined;
}
async function addProvider() {
  await page.locator('.part.titlebar a[aria-label$=" Settings"]').click();
  await page.locator('.cursor-settings-sidebar-cell-label').filter({ hasText: /^Models$/ }).locator('..').click();
  await page.locator('.openvision-model-settings').getByRole('button', { name: 'Add Provider', exact: true }).click();
  await page.getByLabel('Provider Name', { exact: true }).fill('Retrieval fixture');
  await page.getByLabel('API Base URL', { exact: true }).fill(providerUrl);
  await page.getByLabel('API Key', { exact: true }).fill('fixture-key');
  await page.locator('dialog').getByRole('button', { name: 'Save', exact: true }).click();
  await page.locator('dialog').waitFor({ state: 'detached' });
  await page.keyboard.press('Escape');
}
async function selectModel() {
  await openChat(page);
  await page.locator('.vscode-model-picker__trigger-markdown').filter({ visible: true }).first().click();
  await page.getByText('fixture-agent', { exact: true }).last().click();
  await page.keyboard.press('Escape');
}
let askCount = 0;
async function ask(tag, calls, timeout = 90000) {
  script = { tag, calls: calls.map((args, index) => ({ id: `ov_${tag}_${index}`, args })), results: new Map() };
  const input = await openChat(page);
  if (askCount++ > 0) {
    const fresh = page.getByRole('button', { name: 'New Agent', exact: true }).filter({ visible: true });
    if (await fresh.count()) { await fresh.first().click(); await wait(500); }
  }
  const box = page.locator('.aislash-editor-input[contenteditable=true]').filter({ visible: true }).first();
  await (await box.count() ? box : input).fill(`Use CodebaseSearch for ${tag}. Do not modify files.`);
  await page.keyboard.press('Enter');
  await page.getByText(`OpenVision retrieval ${tag} done.`, { exact: true }).first().waitFor({ timeout });
  await page.locator('.stop-button').filter({ visible: true }).waitFor({ state: 'hidden' }).catch(() => {});
  return script.calls.map(call => script.results.get(call.id) ?? '');
}
async function command(name) {
  await page.keyboard.press('Escape');
  await page.keyboard.press('ControlOrMeta+Shift+p');
  await page.locator('.quick-input-widget input[type="text"]').fill(`>${name}`);
  await page.locator('.quick-input-widget').getByText(name, { exact: true }).first().click();
}
const json = async name => JSON.parse(await readFile(join(indexPath, name), 'utf8').catch(() => 'null'));
const statusAfter = async (previousAt, label, timeoutMs = 60000) =>
  until(async () => { const value = await json('status.json'); return value && value.at !== previousAt ? value : undefined; }, label, timeoutMs);
// Waits for the debounced job(s) a change causes; the last status wins.
async function settle(previousAt, label) {
  let status = await statusAfter(previousAt, label);
  for (;;) {
    const later = await statusAfter(status.at, label, 1500).catch(() => undefined);
    if (!later) return status;
    status = later;
  }
}
const numeric = ['reads', 'parses', 'enumerations', 'fullSyncs', 'fullRebuilds', 'filesDeleted', 'renames', 'reuseByHash', 'gitDiffs',
  'gitDiffFiles', 'filesIndexed', 'unchangedSkips', 'ignoredSkips', 'stats'];
const delta = (before, after) => Object.fromEntries(numeric.map(key => [key, (after.counters[key] ?? 0) - (before.counters[key] ?? 0)]));
const database = () => { const value = new DatabaseSync(join(indexPath, 'index.sqlite'), { readOnly: true }); return value; };
const indexedPaths = () => { const value = database(); try { return value.prepare('SELECT path FROM files').all().map(row => row.path); } finally { value.close(); } };
const committedFiles = () => { const value = database(); try { return value.prepare('SELECT count(*) AS n FROM files').get().n; } finally { value.close(); } };
const resultPaths = text => [...text.matchAll(/([\w./-]+\.(?:ts|js|mjs|py|go|rs|java|css|md|sh|sql|toml|json|yaml|yml))/g)].map(match => match[1]);
async function writeSettings(extra) {
  await writeFile(settingsPath, JSON.stringify({ ...baseSettings, ...extra }, null, 2));
  await wait(2500);
}
async function family() {
  const names = await electronNames(app).catch(() => new Map());
  return processFamily({ rootPid: app.process().pid, names });
}
const hostMemory = list => mib(list.filter(item => item.role === 'extension-host').reduce((sum, item) => sum + item.ussKiB + item.swapKiB, 0));

async function toolMode() {
  const queries = JSON.parse(await readFile(join(root, 'desktop/fixtures/retrieval-corpus/queries.json'), 'utf8'));
  const chosen = ['natural', 'identifier', 'path'].map(kind => queries.find(entry => entry.kind === kind));
  const outputs = await ask('ranked', chosen.map(entry => ({ query: entry.query, target_directories: [] })));
  const tool = firstTools.find(entry => entry.function?.name === 'CodebaseSearch')?.function;
  assert.ok(tool, 'CodebaseSearch is offered to the custom provider');
  assert.ok(tool.parameters?.properties?.query && tool.parameters?.properties?.target_directories);
  assert.match(tool.description, /OpenVision index/);
  assert.ok(!firstTools.some(entry => entry.function?.name === 'SemanticSearch'), 'hosted SemanticSearch name is not offered');
  result.checks.toolSchema = true;
  result.ranked = chosen.map((entry, index) => {
    const paths = [...new Set(resultPaths(outputs[index]))];
    const rank = paths.findIndex(path => entry.expected.some(span => span.path === path)) + 1;
    return { id: entry.id, kind: entry.kind, query: entry.query, expected: entry.expected.map(span => span.path), rank, top: paths.slice(0, 5) };
  });
  await writeFile(join(directory, 'tool-results.json'), JSON.stringify({ outputs, ranked: result.ranked }, null, 2));
  for (const row of result.ranked) assert.ok(row.rank >= 1 && row.rank <= 5, `${row.id} expected file in top 5 (got ${row.rank})`);
  result.checks.rankedResultsInToolOutput = true;
  const expectedName = chosen[0].expected[0].path.split('/').at(-1);
  await page.getByText(expectedName).filter({ visible: true }).first().waitFor({ timeout: 15000 });
  result.checks.resultVisibleInChat = expectedName;
  await page.screenshot({ path: join(directory, 'codebase-search.png') });
  const status = await json('status.json');
  assert.equal(status.counters.fullRebuilds, 0);
  assert.equal(status.counts.files, indexedPaths().length);
  assert.ok(status.counts.files >= 70);
  result.checks.indexStatus = { files: status.counts.files, chunks: status.counts.chunks, reads: status.counters.reads,
    syntaxParses: status.counters.syntaxParses, lineChunkings: status.counters.lineChunkings, ranking: status.ranking };

  const scoped = chosen[0].expected[0].path.split('/').slice(0, -1).join('/');
  const [scopedOutput] = await ask('scoped', [{ query: chosen[0].query, target_directories: [scoped] }]);
  const scopedPaths = [...new Set(resultPaths(scopedOutput))];
  assert.ok(scopedPaths.length && scopedPaths.every(path => path.startsWith(`${scoped}/`) || !path.includes('/')), `results stay in ${scoped}`);
  result.checks.targetDirectory = { scoped, paths: scopedPaths.slice(0, 5) };

  assert.equal(embeddingRequests.length, 0, 'embeddings are off by default');
  embedding.mode = 'error';
  await writeSettings({ 'openvision.retrieval.embeddings.provider': providerUrl, 'openvision.retrieval.embeddings.model': 'fixture-embed' });
  const [fallbackOutput] = await ask('fallback', [{ query: chosen[1].query, target_directories: [] }]);
  await page.getByText(/OpenVision index: lexical ranking \(HTTP 503\)/).first().waitFor({ timeout: 15000 });
  const fallback = await json('status.json');
  assert.deepEqual([fallback.ranking.mode, fallback.ranking.reason], ['lexical', 'HTTP 503']);
  assert.ok(resultPaths(fallbackOutput).some(path => chosen[1].expected.some(span => span.path === path)), 'lexical results still returned');
  const failedRequests = embeddingRequests.length;
  assert.ok(failedRequests >= 1);
  result.checks.embeddingFallback = { visible: 'OpenVision index: lexical ranking (HTTP 503)', requests: failedRequests };
  await page.screenshot({ path: join(directory, 'embedding-fallback.png') });

  embedding.mode = 'ok';
  await writeSettings({ 'openvision.retrieval.embeddings.provider': providerUrl, 'openvision.retrieval.embeddings.model': 'fixture-embed-ok' });
  await ask('hybrid', [{ query: chosen[1].query, target_directories: [] }]);
  const hybrid = await json('status.json');
  const healthy = embeddingRequests.slice(failedRequests);
  assert.equal(hybrid.ranking.mode, 'hybrid');
  assert.ok(hybrid.ranking.embedded >= status.counts.chunks);
  assert.ok(healthy.every(request => request.inputs <= 32 && request.chars <= 64 * 1024 && request.authorized && request.model === 'fixture-embed-ok'));
  result.checks.embeddingsHybrid = { requests: healthy.length, embedded: hybrid.ranking.embedded, maxInputs: Math.max(...healthy.map(request => request.inputs)) };
  await writeSettings({});
}

// A settings change releases the index service; its next worker starts with
// fresh counters, so that case is measured from zero (fresh: true).
async function incrementalCase(name, action, check, { fresh = false } = {}) {
  const before = await json('status.json');
  await action();
  const after = await settle(before.at, name);
  const change = delta(fresh ? { counters: { subtreeReconciles: [] } } : before, after);
  const entry = { name, ...change, subtreeReconciles: after.counters.subtreeReconciles.slice(fresh ? 0 : before.counters.subtreeReconciles.length), fresh,
    symlinks: after.counters.symlinks, job: after.job };
  result.cases.push(entry);
  assert.equal(after.job.error, undefined, `${name}: job failed`);
  assert.equal(change.fullRebuilds, 0, `${name}: no rebuild`);
  await check(change, entry);
}

async function incrementalMode() {
  await ask('initial', [{ query: 'retry with exponential backoff', target_directories: [] }]);
  const budget = budgets.incremental;
  const sourceFile = 'server/src/services/etaService.ts';
  assert.ok((await stat(join(project, sourceFile)).catch(() => undefined))?.isFile(), `${sourceFile} exists in the corpus`);
  await incrementalCase('editor edit and save', async () => {
    await page.keyboard.press('Escape');
    await page.keyboard.press('ControlOrMeta+p');
    await page.locator('.quick-input-widget input[type="text"]').fill(sourceFile);
    await page.locator('.quick-input-widget').getByText('etaService.ts', { exact: true }).first().click();
    await page.locator('.tabs-container .tab.active').filter({ hasText: 'etaService.ts' }).waitFor();
    await page.locator('.monaco-editor .inputarea').first().focus();
    await page.keyboard.press('ControlOrMeta+Home');
    await page.keyboard.type('// editorSavedRetrievalMarker\n');
    await page.keyboard.press('ControlOrMeta+s');
  }, change => {
    assert.ok(change.reads <= budget.singleEditReads && change.parses <= budget.singleEditParses, `editor edit reads ${change.reads} parses ${change.parses}`);
    assert.equal(change.fullSyncs, 0); assert.equal(change.enumerations, 0);
  });
  await incrementalCase('external edit', () => writeFile(join(project, 'server/src/services/external-edit.ts'), 'export const externalEditMarker = 1;\n'),
    change => { assert.ok(change.reads <= 1 && change.parses <= 1); assert.equal(change.fullSyncs, 0); });
  await incrementalCase('rename', () => rename(join(project, 'server/src/services/external-edit.ts'), join(project, 'server/src/services/renamed-edit.ts')), change => {
    assert.equal(change.reads, budget.renameReads); assert.equal(change.parses, budget.renameParses); assert.equal(change.renames, 1);
    assert.ok(indexedPaths().includes('server/src/services/renamed-edit.ts') && !indexedPaths().includes('server/src/services/external-edit.ts'));
  });
  await incrementalCase('delete', () => unlink(join(project, 'server/src/services/renamed-edit.ts')), change => {
    assert.equal(change.reads, 0); assert.equal(change.filesDeleted, 1);
  });
  const ignoredDirectory = 'docs';
  const ignoredCount = indexedPaths().filter(path => path.startsWith(`${ignoredDirectory}/`)).length;
  assert.ok(ignoredCount >= 1);
  await incrementalCase('ignore file', () => writeFile(join(project, ignoredDirectory, '.cursorindexingignore'), '*.md\n'), (change, entry) => {
    assert.deepEqual(entry.subtreeReconciles, [ignoredDirectory]);
    assert.ok(change.reads <= 1, `ignore change reads ${change.reads}`);
    assert.ok(!indexedPaths().some(path => path.startsWith(`${ignoredDirectory}/`) && path.endsWith('.md')));
  });
  const outside = join(directory, 'outside');
  await mkdir(outside); await writeFile(join(outside, 'outside.ts'), 'export const outsideRetrievalMarker = 1;\n');
  await incrementalCase('symlinks', async () => {
    await symlink(outside, join(project, 'linked-outside'));
    await symlink('loop-b', join(project, 'loop-a')); await symlink('loop-a', join(project, 'loop-b'));
  }, (change, entry) => {
    assert.equal(change.reads, 0); assert.equal(change.filesIndexed, 0);
    assert.ok(entry.symlinks.outside >= 1 && entry.symlinks.cycle >= 1, 'links are classified, not followed');
    assert.ok(!indexedPaths().some(path => path.startsWith('linked-outside') || path.startsWith('loop-')));
  });
  await incrementalCase('branch checkout', () => { git('checkout', '-q', 'feature'); }, change => {
    assert.ok(change.reads <= 2, `checkout reads ${change.reads}`); assert.equal(change.fullSyncs, 0);
    assert.ok(indexedPaths().includes('server/src/services/branch-feature.ts'));
  });
  result.checks.branchCheckoutReconcile = result.cases.at(-1).gitDiffs ? 'git diff' : 'watcher events';
  await incrementalCase('files.exclude', async () => {
    await writeSettings({ 'files.exclude': { ...(verificationSettings['files.exclude'] ?? {}), 'pipeline/**': true } });
    await ask('excluded', [{ query: 'csv export formula escaping', target_directories: [] }]);
  }, change => {
    assert.equal(change.reads, 0, 'files.exclude changes read no unchanged file');
    assert.ok(!indexedPaths().some(path => path.startsWith('pipeline/')));
  }, { fresh: true });
  const [output] = await ask('after', [{ query: 'schedule dock branch feature', target_directories: [] }]);
  assert.ok(resultPaths(output).includes('server/src/services/branch-feature.ts'));
  assert.ok(!resultPaths(output).some(path => path.startsWith('pipeline/')));
  result.checks.searchReflectsChanges = true;
}

async function recoveryMode() {
  const total = 10001;
  // Cancel: start the first index and cancel it from the command palette.
  const pending = ask('cancel', [{ query: 'order invoice shipment', target_directories: [] }], 120000);
  await until(async () => (await json('service.json'))?.activations >= 1, 'index activation');
  await until(() => { try { return committedFiles() >= 200; } catch { return false; } }, 'first committed batch', 60000, 20);
  await command('OpenVision: Cancel Codebase Indexing');
  const canceled = await until(async () => (await json('service.json'))?.lastCancel, 'cancel recorded');
  await pending;
  const afterCancel = await json('status.json');
  assert.equal(afterCancel.job.code, 'ABORT_ERR');
  assert.ok(canceled.latencyMs <= budgets.lifecycle.cancelLatencyMs, `cancel latency ${canceled.latencyMs} ms`);
  const committedAtCancel = committedFiles();
  assert.ok(committedAtCancel < total);
  result.checks.cancel = { latencyMs: canceled.latencyMs, committedAtCancel };

  // kill -9 mid-index: the owned app is killed through its own process handle.
  const resumed = ask('kill', [{ query: 'route warehouse retry', target_directories: [] }], 120000).catch(error => error);
  await until(() => committedFiles() >= committedAtCancel + 400, 'indexing resumed', 60000, 20);
  const members = await family();
  const child = app.process(), exited = once(child, 'exit');
  child.kill('SIGKILL');
  await exited;
  hostExits.push({ signal: child.signalCode, abrupt: true });
  app = undefined; page = undefined;
  await resumed;
  const survivors = await until(async () => { const alive = await stillAlive(members); return alive.length ? undefined : []; }, 'process family exit', 20000, 250).catch(async () => stillAlive(members));
  assert.equal(survivors.length, 0, 'no owned process survives the killed host');
  const quick = (() => { const value = new DatabaseSync(join(indexPath, 'index.sqlite')); try { return value.prepare('PRAGMA quick_check').get().quick_check; } finally { value.close(); } })();
  assert.equal(quick, 'ok');
  const committedAtKill = committedFiles();
  await launch(); await selectModel();
  await ask('restart', [{ query: 'customer session', target_directories: [] }], 120000);
  const restarted = await json('status.json');
  assert.equal(restarted.counters.fullRebuilds, 0);
  assert.equal(restarted.counters.reads, total - committedAtKill, 'only uncommitted files are read after kill -9');
  assert.equal(restarted.counts.files, total);
  result.checks.killRestart = { committedAtKill, readsAfterRestart: restarted.counters.reads, quickCheck: quick, survivors: 0 };

  // Idle release and reactivation, measured on the extension host.
  const active = hostMemory(await family());
  await until(async () => (await json('service.json'))?.running === false, 'idle release', (idleSeconds + 30) * 1000, 500);
  await wait(3000);
  const released = hostMemory(await family());
  const reactivationStarted = Date.now();
  await ask('reactivate', [{ query: 'payment refund token', target_directories: [] }]);
  const reactivated = await json('status.json');
  const service = await json('service.json');
  assert.ok(service.activations >= 2 && service.releases >= 1);
  assert.deepEqual([reactivated.counters.fullSyncs, reactivated.counters.reads], [0, 0], 'reactivation applies recorded changes only');
  result.checks.idleRelease = { extensionHostPrivateMiB: { active, released, delta: Math.round((active - released) * 10) / 10 },
    reactivationMs: Date.now() - reactivationStarted, activations: service.activations, releases: service.releases,
    summary: summarize(await family()) };

  // Corruption: quarantined and rebuilt on the next launch.
  await close();
  const handle = await open(join(indexPath, 'index.sqlite'), 'r+');
  await handle.write(Buffer.alloc(4096, 0x5a), 0, 4096, 0); await handle.close();
  await launch(); await selectModel();
  await ask('corrupt', [{ query: 'order invoice', target_directories: [] }], 180000);
  const corrupt = await json('status.json');
  assert.deepEqual(corrupt.counters.rebuildReasons, ['corrupt']);
  const quarantined = (await readdir(dirname(indexPath))).filter(name => name.startsWith(`${indexPath.split('/').at(-1)}.corrupt-`));
  assert.equal(quarantined.length, 1);
  assert.equal(corrupt.counts.files, total);
  result.checks.corruption = { reason: 'corrupt', quarantined: quarantined[0], rebuiltFiles: corrupt.counts.files };

  // Schema migration: an older schema rebuilds with its reason; an older
  // version directory is removed once the current one completes.
  await close();
  const value = new DatabaseSync(join(indexPath, 'index.sqlite'));
  value.prepare("UPDATE meta SET value = '0' WHERE key = 'schema_version'").run(); value.close();
  const older = join(dirname(dirname(indexPath)), 'v0', indexPath.split('/').at(-1));
  await mkdir(older, { recursive: true }); await writeFile(join(older, 'index.sqlite'), 'schema 0');
  await launch(); await selectModel();
  await ask('migrate', [{ query: 'schedule notify', target_directories: [] }], 180000);
  const migrated = await json('status.json');
  assert.deepEqual(migrated.counters.rebuildReasons, ['schema 0 -> 1']);
  await until(async () => !(await stat(older).catch(() => undefined)), 'older version removed', 30000);
  result.checks.migration = { reason: migrated.counters.rebuildReasons[0], olderVersionRemoved: true };

  // Delete and Rebuild commands.
  const beforeRebuild = await json('status.json');
  await command('OpenVision: Rebuild Codebase Index');
  const rebuilt = await statusAfter(beforeRebuild.at, 'rebuild', 120000);
  assert.equal(rebuilt.counters.reads, total);
  await command('OpenVision: Delete Codebase Index');
  await until(async () => !(await stat(join(indexPath, 'index.sqlite')).catch(() => undefined)), 'index deleted', 30000);
  result.checks.commands = { rebuildReads: rebuilt.counters.reads, deleted: true };
}

try {
  await launch();
  await addProvider();
  await selectModel();
  if (mode === 'tool') await toolMode();
  else if (mode === 'incremental') await incrementalMode();
  else await recoveryMode();
  assert.deepEqual(errors, []);
  result.success = true;
} catch (error) {
  result.failure = error.stack;
  if (page) {
    await page.screenshot({ path: join(directory, 'failure.png') }).catch(() => {});
    await writeFile(join(directory, 'failure.txt'), await page.locator('body').innerText().catch(() => '')).catch(() => {});
  }
  throw error;
} finally {
  await close().catch(error => { result.success = false; result.cleanupFailure = error.stack; });
  server.closeAllConnections(); server.close();
  result.requests = requests.length; result.embeddingRequests = embeddingRequests; result.hostExits = hostExits;
  result.status = await json('status.json'); result.service = await json('service.json');
  await writeFile(join(directory, 'result.json'), JSON.stringify(result, null, 2) + '\n');
  await rm(join(directory, 'project'), { recursive: true, force: true }).catch(() => {});
  console.log(JSON.stringify({ mode, success: result.success, checks: result.checks, cases: result.cases, failure: result.failure?.split('\n')[0] }, null, 2));
  console.log(`Retrieval ${mode} verification: ${directory}/result.json`);
}
