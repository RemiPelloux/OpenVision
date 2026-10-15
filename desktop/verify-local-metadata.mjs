import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { DatabaseSync } from 'node:sqlite';
import { execFileSync } from 'node:child_process';
import { mkdtemp, mkdir, readFile, writeFile, symlink } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { _electron } from '../tooling/browser.mjs';
import { parseExpressionAt } from '../tooling/dependencies.mjs';
import { createRuntimeOverlay } from './verification-runtime-overlay.mjs';
import { verificationSettings } from './verification-profile.mjs';
import { enterWorkspace, openChat } from './verification-workspace.mjs';
import { fileHash } from './import-files.mjs';

assert.equal(process.platform, 'win32', 'Local metadata native verification currently covers Windows');
const root = resolve(import.meta.dirname, '..');
const directory = await mkdtemp(join(root, 'logs/local-metadata-verification-'));
const profile = join(directory, 'profile'), project = join(directory, 'project');
await mkdir(join(profile, 'User'), { recursive: true }); await mkdir(project);
await writeFile(join(profile, 'User/settings.json'), JSON.stringify(verificationSettings));
await writeFile(join(project, 'hello.js'), 'export const answer = 42;\n');
const relative = 'resources/app/out/vs/workbench/workbench.desktop.main.js';
const originalPath = join(root, 'electron-host', relative), originalHash = await fileHash(originalPath);
let source = await readFile(originalPath, 'utf8');
const hosted = process.argv.includes('--with-hosted-sync');
const registration = '!zc.localMode && gs("composer.localMetadataSyncContribution",';
assert.equal(source.split(registration).length, 2, 'Expected guarded production registration');
if (hosted) source = source.replace(registration, 'gs("composer.localMetadataSyncContribution",');
const anchor = source.indexOf('"[composer-local-metadata-sync] updateConversationMetadata failed"');
const start = [...source.slice(0, anchor).matchAll(/\bclass extends [\w$]+\s*\{/g)].at(-1)?.index;
assert.ok(start && anchor > 0);
const owner = parseExpressionAt(source, start, { ecmaVersion: 'latest' });
assert.ok(owner.end > anchor);
const constructor = owner.body.body.find(method => method.kind === 'constructor').value.body;
const methodStart = source.indexOf('async updateConversationMetadata(');
assert.equal(source.indexOf('async updateConversationMetadata(', methodStart + 1), -1);
const methodBody = source.indexOf('{', methodStart);
const insertions = [
  [constructor.start + 1, '\nglobalThis.__openvisionMetadataProbe.constructors++;\n'],
  [methodBody + 1, '\nglobalThis.__openvisionMetadataProbe.attempts++;\n'],
  [0, 'globalThis.__openvisionMetadataProbe = {constructors: 0, attempts: 0};\n'],
];
for (const [position, text] of insertions.sort((a, b) => b[0] - a[0]))
  source = source.slice(0, position) + text + source.slice(position);
const overlay = await createRuntimeOverlay(join(root, 'electron-host'), join(directory, 'host'), new Map([[relative, source]]));
await symlink(join(root, 'desktop'), join(directory, 'host/desktop'), 'junction');
const requests = [], errors = [];
let phase = 'initial';
const prompt = 'metadata title persistence probe';
const reply = () => `OpenVision metadata reply ${phase}.`;
const server = createServer(async (request, response) => {
  if (request.url === '/v1/models') return response.end(JSON.stringify({ data: [{ id: 'fixture-metadata' }] }));
  if (request.url !== '/v1/chat/completions') { response.statusCode = 404; return response.end(); }
  const chunks = []; for await (const chunk of request) chunks.push(chunk);
  const payload = JSON.parse(Buffer.concat(chunks));
  requests.push({ phase, authorized: request.headers.authorization === 'Bearer fixture-key',
    model: payload.model, messages: payload.messages });
  response.writeHead(200, { 'Content-Type': 'text/event-stream' });
  response.end(`data: ${JSON.stringify({ id: 'metadata-reply', object: 'chat.completion.chunk',
    model: payload.model, choices: [{ index: 0, delta: { role: 'assistant', content: reply() }, finish_reason: 'stop' }] })}\n\ndata: [DONE]\n\n`);
});
await new Promise(resolveListen => server.listen(0, '127.0.0.1', resolveListen));
const result = { directory, hostedControl: hosted, checkedAt: new Date().toISOString(),
  identity: { commit: execFileSync('git', ['rev-parse', 'HEAD'], { cwd: root, encoding: 'utf8' }).trim(),
    platform: process.platform, arch: process.arch, node: process.version, originalHash, overlay: overlay.records,
    verifierHash: await fileHash(join(root, 'desktop/verify-local-metadata.mjs')) },
  scope: 'Windows native local title/history persistence and actual contribution/client invocation counters in a disposable workbench overlay. Controlled inference; no process-wide network or live AI claim.',
  checks: {}, probes: [], pageErrors: errors, hostExits: [], hostStderr: [] };
let app, page, chatId;
async function launch() {
  const env = { ...process.env }; delete env.ELECTRON_RUN_AS_NODE;
  app = await _electron.launch({ executablePath: overlay.executable, env, timeout: 60000,
    args: ['--user-data-dir', profile, '--extensions-dir', join(profile, 'extensions'), '--new-window',
      '--disable-updates', '--skip-welcome', '--skip-release-notes', '--disable-telemetry', '--disable-crash-reporter', project, join(project, 'hello.js')] });
  const stderr = { tail: '' }; result.hostStderr.push(stderr);
  app.process().stderr?.on('data', chunk => { stderr.tail = (stderr.tail + chunk).slice(-16384); });
  page = await app.firstWindow(); page.setDefaultTimeout(20000);
  page.on('pageerror', error => errors.push(error.message));
  await page.locator('.part.titlebar .openvision-local-profile').waitFor({ state: 'attached', timeout: 60000 });
  await enterWorkspace(page); await page.waitForTimeout(8000);
}
async function close() {
  if (!app) return;
  const owned = app, ownedProcess = owned.process();
  const exit = new Promise(resolveExit => ownedProcess.once('exit', (code, signal) => resolveExit({ pid: ownedProcess.pid, code, signal })));
  await owned.close(); app = undefined;
  const observed = ownedProcess.exitCode === null && ownedProcess.signalCode === null ? await exit :
    { pid: ownedProcess.pid, code: ownedProcess.exitCode, signal: ownedProcess.signalCode };
  result.hostExits.push(observed); assert.equal(observed.code, 0);
}
function stored() {
  const db = new DatabaseSync(join(profile, 'User/globalStorage/state.vscdb'), { readOnly: true });
  try {
    const value = key => JSON.parse(String(db.prepare('SELECT value FROM cursorDiskKV WHERE key = ?').get(key)?.value));
    const data = value(`composerData:${chatId}`);
    return { name: data.name, texts: data.fullConversationHeadersOnly.map(header => value(`bubbleId:${chatId}:${header.bubbleId}`).text ?? '') };
  } finally { db.close(); }
}
async function submit(text) {
  const input = await openChat(page); await input.fill(text); await input.press('Enter');
  await page.getByText(reply(), { exact: true }).first().waitFor({ timeout: 45000 });
  await page.locator('.stop-button').filter({ visible: true }).waitFor({ state: 'hidden' });
  await page.waitForTimeout(2000);
  result.probes.push(await page.evaluate(() => globalThis.__openvisionMetadataProbe));
  return input.evaluate(element => element.closest('[data-composer-id]')?.getAttribute('data-composer-id'));
}
try {
  await launch();
  await page.locator('.part.titlebar a[aria-label$=" Settings"]').click();
  await page.locator('.cursor-settings-sidebar-cell-label').filter({ hasText: /^Models$/ }).locator('..').click();
  await page.locator('.openvision-model-settings').getByRole('button', { name: 'Add Provider', exact: true }).click();
  await page.getByLabel('Provider Name', { exact: true }).fill('Metadata fixture');
  await page.getByLabel('API Base URL', { exact: true }).fill(`http://127.0.0.1:${server.address().port}/v1`);
  await page.getByLabel('API Key', { exact: true }).fill('fixture-key');
  await page.locator('dialog').getByRole('button', { name: 'Save', exact: true }).click();
  await page.locator('dialog').waitFor({ state: 'detached' });
  await page.locator('.tabs-container .tab').filter({ hasText: 'hello.js' }).first().click();
  await openChat(page);
  await page.locator('.vscode-model-picker__trigger-markdown').filter({ visible: true }).first().click();
  await page.getByText('fixture-metadata', { exact: true }).last().click(); await page.keyboard.press('Escape');
  chatId = await submit(prompt); assert.ok(chatId); assert.equal(requests.length, 1);
  await close();
  const initial = stored(); assert.equal(initial.name, prompt);
  assert.ok(initial.texts.includes(prompt)); assert.ok(initial.texts.includes('OpenVision metadata reply initial.'));
  result.checks.localTitleAndHistoryPersist = true;
  await launch(); await openChat(page);
  await page.getByText('OpenVision metadata reply initial.', { exact: true }).first().waitFor();
  phase = 'resume'; assert.equal(await submit('Continue the saved conversation.'), chatId);
  assert.equal(requests.length, 2); assert.ok(requests.every(item => item.authorized && item.model === 'fixture-metadata'));
  const history = JSON.stringify(requests[1].messages);
  assert.ok(history.includes(prompt)); assert.ok(history.includes('OpenVision metadata reply initial.'));
  result.checks.sameChatResumesWithHistory = true;
  result.checks.noAuxiliaryInference = true;
  if (hosted) assert.ok(result.probes.every(probe => probe.constructors > 0 && probe.attempts > 0));
  else assert.ok(result.probes.every(probe => probe.constructors === 0 && probe.attempts === 0));
  result.checks[hosted ? 'hostedPositiveControlInvoked' : 'hostedContributionAndClientNeverInvoked'] = true;
  assert.deepEqual(errors, []);
  await page.screenshot({ path: join(directory, 'history.png') });
  await close(); assert.equal(stored().name, initial.name);
  assert.equal(await fileHash(originalPath), originalHash); result.checks.normalRuntimeUnchanged = true;
  result.success = true;
} catch (error) {
  result.failure = error.stack;
  await page?.screenshot({ path: join(directory, 'failure.png') }).catch(() => {});
  throw error;
} finally {
  try { await close(); }
  finally {
    server.closeAllConnections(); await new Promise(resolveClose => server.close(resolveClose));
    await writeFile(join(directory, 'requests.json'), JSON.stringify(requests, null, 2));
    await writeFile(join(directory, 'result.json'), JSON.stringify(result, null, 2));
    console.log(JSON.stringify({ ...result, directory }, null, 2));
  }
}
