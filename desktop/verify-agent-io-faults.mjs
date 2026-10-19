import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { execFileSync, spawnSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { mkdir, mkdtemp, readFile, readdir, statfs, unlink, utimes, writeFile } from 'node:fs/promises';
import { release } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { _electron } from '../tooling/browser.mjs';
import { verificationRuntime } from './verification-runtime.mjs';
import { verificationSettings } from './verification-profile.mjs';
import { linuxSandboxArguments } from './platform.mjs';
import { fileHash } from './import-files.mjs';
import { enterWorkspace, openChat } from './verification-workspace.mjs';

// Native Agent edit under a genuine full volume. The project lives on a
// size-limited tmpfs mounted in a disposable user+mount namespace; the verifier
// and its Electron host run as the invoking uid through a nested user namespace.
// The model is a controlled local HTTP fixture, not live inference.
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const insideNamespace = process.env.OPENVISION_IO_FAULT_DIRECTORY;
assert.equal(process.platform, 'linux', 'Full-volume verification uses Linux user and mount namespaces');

if (!insideNamespace) {
  await mkdir(join(root, 'logs'), { recursive: true });
  const directory = await mkdtemp(join(root, 'logs/agent-io-fault-verification-'));
  const volume = join(directory, 'volume');
  await mkdir(volume);
  const script = join(directory, 'namespace.sh');
  await writeFile(script, ['set -e',
    `mount -t tmpfs -o size=1m openvision-agent-volume "${volume}"`,
    `OPENVISION_IO_FAULT_DIRECTORY="${directory}" exec unshare --map-user=${process.getuid()} --map-group=${process.getgid()} ` +
      `"${process.execPath}" "${fileURLToPath(import.meta.url)}" ${process.argv.slice(2).map(value => JSON.stringify(value)).join(' ')}`,
    ''].join('\n'));
  // The tmpfs disappears with the namespace; nothing outside `directory` is mounted.
  const child = spawnSync('unshare', ['-rm', 'sh', script], { stdio: 'inherit' });
  process.exit(child.status ?? 1);
}

const directory = insideNamespace, volume = join(directory, 'volume');
const { layout, appRoot } = await verificationRuntime(root);
const profile = join(directory, 'profile'), project = join(volume, 'project');
await mkdir(join(profile, 'User'), { recursive: true }); await mkdir(project);
await writeFile(join(profile, 'User/settings.json'), JSON.stringify({ ...verificationSettings,
  'git.openRepositoryInParentFolders': 'never', 'files.hotExit': 'off' }));
const notes = join(project, 'notes.md'), unrelated = join(project, 'unrelated.txt'), filler = join(volume, 'filler.bin');
const original = Array.from({ length: 640 }, (_, index) => `saved user line ${index} — café 日本語\n`).join('');
const marker = 'saved user line 320 — café 日本語';
const insertion = Array.from({ length: 2400 }, (_, index) => `agent line ${index} 0123456789 abcdefghij\n`).join('');
const changed = original.replace(marker, insertion.trimEnd());
const preserved = 'Preserve this unrelated file.\n';
await writeFile(notes, original); await writeFile(unrelated, preserved);
const sha = value => createHash('sha256').update(value).digest('hex');
const temporaries = async () => (await readdir(project)).filter(entry => entry.includes('.openvision-'));
const freeBytes = async () => { const stats = await statfs(volume); return Number(stats.bavail) * Number(stats.bsize); };
async function fillVolume() {
  // Consume the free blocks with an owned filler; ENOSPC is the expected end.
  const error = await writeFile(filler, Buffer.alloc(4 << 20)).then(() => undefined, error => error);
  assert.equal(error?.code, 'ENOSPC', 'The verifier filler must exhaust the 1 MiB volume');
  return freeBytes();
}
async function describe(path) {
  const bytes = await readFile(path).catch(() => undefined);
  if (!bytes) return { exists: false };
  const text = bytes.toString('utf8');
  return { exists: true, size: bytes.length, sha256: sha(bytes), original: text === original, changed: text === changed,
    partialChanged: bytes.length > 0 && text !== changed && changed.startsWith(text) };
}

const identity = { commit: execFileSync('git', ['rev-parse', 'HEAD'], { cwd: root, encoding: 'utf8' }).trim(),
  platform: process.platform, arch: process.arch, osRelease: release(), node: process.version,
  volume: { filesystem: 'tmpfs', size: '1 MiB', mount: 'unprivileged user+mount namespace', uid: process.getuid() },
  bytes: { originalSha256: sha(original), changedSha256: sha(changed), originalSize: Buffer.byteLength(original),
    changedSize: Buffer.byteLength(changed) },
  hashes: Object.fromEntries(await Promise.all([
    ['host', layout.executable], ['workbench', join(appRoot, 'out/vs/workbench/workbench.desktop.main.js')],
    ['agentExec', join(appRoot, 'extensions/cursor-agent-exec/dist/main.js')],
    ['agentHost', join(appRoot, 'extensions/cursor-agent-host/dist/main.js')],
    ['agentHostDaemon', join(appRoot, 'extensions/cursor-agent-host/dist/agent-host-daemon/dist/bin/daemon.cjs')],
    ['verifier', fileURLToPath(import.meta.url)],
  ].map(async ([name, path]) => [name, { path, sha256: await fileHash(path) }]))) };
identity.durableWriteOwner = (await readFile(join(appRoot, 'extensions/cursor-agent-exec/dist/main.js'), 'utf8'))
  .match(/\/\* OpenVision durable Agent write (v\d+) \*\//)?.[1] ?? false;

// One pending file shows Keep; several show Keep All.
const keepLabel = /^Keep( All)?$/;
const requests = [], errors = [], toolResults = [];
let phase = 'reply';
const server = createServer(async (request, response) => {
  if (request.url === '/v1/models') {
    response.setHeader('content-type', 'application/json');
    return response.end(JSON.stringify({ data: [{ id: 'fixture-agent' }] }));
  }
  if (request.url !== '/v1/chat/completions') { response.statusCode = 404; return response.end(); }
  const chunks = []; for await (const chunk of request) chunks.push(chunk);
  const payload = JSON.parse(Buffer.concat(chunks));
  requests.push({ phase, model: payload.model, authorized: request.headers.authorization === 'Bearer fixture-key',
    tools: payload.tools?.length ?? 0 });
  response.writeHead(200, { 'Content-Type': 'text/event-stream' });
  const event = (delta, finish_reason = null) => response.write(`data: ${JSON.stringify({
    id: 'fixture-response', object: 'chat.completion.chunk', model: payload.model,
    choices: [{ index: 0, delta, finish_reason }] })}\n\n`);
  const id = `call_openvision_io_${phase}`;
  const result = payload.messages?.find(message => message.role === 'tool' && message.tool_call_id === id);
  if (phase === 'reply') {
    event({ role: 'assistant', content: 'OpenVision fault fixture ready.' }); event({}, 'stop');
  } else if (!result) {
    event({ role: 'assistant', tool_calls: [{ index: 0, id, type: 'function', function: { name: 'StrReplace',
      // The shrink phase removes the inserted block again, so its Undo must grow the file.
      arguments: JSON.stringify(phase === 'shrink' ? { path: notes, old_string: insertion.trimEnd(), new_string: marker }
        : { path: notes, old_string: marker, new_string: insertion.trimEnd() }) } }] });
    event({}, 'tool_calls');
  } else {
    toolResults.push({ phase, content: typeof result.content === 'string' ? result.content : JSON.stringify(result.content) });
    event({ role: 'assistant', content: `OpenVision ${phase} edit turn finished.` }); event({}, 'stop');
  }
  response.end('data: [DONE]\n\n');
});
await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));

let app, page;
const hostExits = [];
const result = { checkedAt: new Date().toISOString(), identity, requests, errors, toolResults, stages: [], success: false,
  scope: 'Linux x64 native Agent StrReplace on a genuinely full tmpfs project volume, freeing space, retry, Undo with the volume full again, a repeated edit, Keep, an Undo that grows the file on a full volume and restart. Controlled local model fixture; profile storage stays on the ordinary disk. Does not cover EIO, power loss, other platforms or live providers.' };
async function launch() {
  const env = { ...process.env }; delete env.ELECTRON_RUN_AS_NODE; delete env.OPENVISION_IO_FAULT_DIRECTORY;
  app = await _electron.launch({ executablePath: layout.executable, env, timeout: 60000,
    args: ['--user-data-dir', profile, '--extensions-dir', join(directory, 'extensions'),
      '--new-window', '--disable-updates', '--skip-welcome', '--skip-release-notes',
      '--disable-telemetry', '--disable-crash-reporter', ...await linuxSandboxArguments(layout.host), project, unrelated] });
  page = await app.firstWindow();
  page.setDefaultTimeout(15000);
  page.on('pageerror', error => errors.push(error.message));
  await page.locator('.part.titlebar .openvision-local-profile').waitFor({ state: 'attached', timeout: 60000 });
  await enterWorkspace(page);
  await page.waitForTimeout(8000);
}
async function closeOwnedApp() {
  if (!app) return;
  const child = app.process(), window = app.windows()[0];
  const exited = new Promise(resolve => child.once('exit', resolve));
  const closing = app.close();
  // Only this verifier's disposable app can be closed here.
  await window?.getByText('Quit Anyway', { exact: true }).click({ timeout: 5000 }).catch(() => {});
  await closing;
  if (child.exitCode === null && child.signalCode === null) await exited;
  hostExits.push({ pid: child.pid, exitCode: child.exitCode, signalCode: child.signalCode });
  app = undefined;
}
async function submit(text, expected) {
  const input = await openChat(page);
  await input.fill(text); await input.press('Enter');
  await page.getByText(expected, { exact: true }).first().waitFor({ timeout: 45000 });
}
// Focus notes.md in an editor (Quick Open), so a save retry targets it.
async function openNotes() {
  await page.keyboard.press('ControlOrMeta+p');
  const quick = page.locator('.quick-input-widget');
  await quick.getByRole('textbox').fill('notes.md'); await quick.getByRole('textbox').press('Enter');
  await quick.waitFor({ state: 'hidden' });
  await page.locator('.editor-instance .monaco-editor .inputarea').filter({ visible: true }).first().focus();
}
async function stage(name, extra = {}) {
  const record = { name, notes: await describe(notes), unrelated: (await readFile(unrelated, 'utf8')) === preserved,
    temporaries: await temporaries(), freeBytes: await freeBytes(),
    pendingReviewVisible: await page?.getByText(keepLabel).filter({ visible: true }).count().catch(() => 0) > 0,
    ...extra };
  result.stages.push(record);
  await writeFile(join(directory, 'stages.json'), JSON.stringify(result.stages, null, 2));
  await page?.screenshot({ path: join(directory, `${name}.png`) }).catch(() => {});
  return record;
}

try {
  await launch();
  await page.locator('.part.titlebar a[aria-label$=" Settings"]').click();
  await page.locator('.cursor-settings-sidebar-cell-label').filter({ hasText: /^Models$/ }).locator('..').click();
  await page.locator('.openvision-model-settings').getByRole('button', { name: 'Add Provider', exact: true }).click();
  await page.getByLabel('Provider Name', { exact: true }).fill('Agent fixture');
  await page.getByLabel('API Base URL', { exact: true }).fill(`http://127.0.0.1:${server.address().port}/v1`);
  await page.getByLabel('API Key', { exact: true }).fill('fixture-key');
  await page.locator('dialog').getByRole('button', { name: 'Save', exact: true }).click();
  await page.locator('dialog').waitFor({ state: 'detached' });
  await page.locator('.tabs-container .tab').filter({ hasText: 'unrelated.txt' }).first().click();
  await page.keyboard.press('ControlOrMeta+Shift+l');
  await page.locator('.vscode-model-picker__trigger-markdown').filter({ visible: true }).first().click();
  await page.getByText('fixture-agent', { exact: true }).last().click();
  await page.keyboard.press('Escape');
  await submit('Reply with OpenVision fault fixture ready. Do not use tools.', 'OpenVision fault fixture ready.');

  const free = await fillVolume();
  await stage('volume-full', { fillerFreeBytes: free });
  phase = 'full';
  await submit('Insert the generated block into notes.md.', 'OpenVision full edit turn finished.');
  await page.waitForTimeout(2000);
  const fault = await stage('after-full-volume-edit');
  await writeFile(join(directory, 'after-full-volume-edit.txt'), await page.locator('body').innerText());

  await unlink(filler);
  const freed = await stage('after-freeing-space');
  // A sibling left by a writer interrupted before its rename, two minutes old.
  const orphan = join(project, '.notes.md.openvision-00000000-1111-2222-3333-444444444444.tmp');
  await writeFile(orphan, original.slice(0, 4096));
  const orphanTime = new Date(Date.now() - 120000); await utimes(orphan, orphanTime, orphanTime);
  phase = 'retry';
  await submit('Space is available again. Insert the generated block into notes.md.', 'OpenVision retry edit turn finished.');
  await page.waitForTimeout(2000);
  const retried = await stage('after-retry');

  // Reject/Undo with the project volume full: restoring the saved bytes must never
  // leave a torn file, and a failed restore must stay recoverable after freeing space.
  const undoFree = await fillVolume();
  await stage('volume-full-before-undo', { fillerFreeBytes: undoFree });
  await page.getByText(/^Undo( All)?$/).filter({ visible: true }).first().click();
  await page.getByText('Confirm', { exact: true }).filter({ visible: true }).click({ timeout: 3000 }).catch(() => {});
  await page.waitForTimeout(3000);
  const undoText = await page.locator('body').innerText();
  await writeFile(join(directory, 'after-undo-full-volume.txt'), undoText);
  const undone = await stage('after-undo-full-volume', { visibleErrors: undoText.split('\n')
    .filter(line => /no space|ENOSPC|could not|failed to save|unable/i.test(line)).slice(0, 10) });
  await unlink(filler);
  let undoFreed = await stage('after-undo-freed');
  if (!undoFreed.notes.original) {
    // The restore did not reach disk while full: save the restored editor text again.
    await openNotes(); await page.keyboard.press('ControlOrMeta+s');
    for (let attempt = 0; attempt < 50 && !(await describe(notes)).original; attempt++) await page.waitForTimeout(100);
    undoFreed = await stage('after-undo-freed-save-retry', { saveRetried: true });
  }
  // A new pending review for the Keep and restart stages.
  phase = 'again';
  await submit('Insert the generated block into notes.md once more.', 'OpenVision again edit turn finished.');
  await page.waitForTimeout(2000);
  const again = await stage('after-repeat-edit');
  await page.getByText(keepLabel).filter({ visible: true }).first().click();
  await page.waitForTimeout(2000);
  const kept = await stage('after-keep-all');

  // Undo that must grow the file on a full volume: the Agent removes the block,
  // the volume fills, and Undo restores the larger kept text.
  phase = 'shrink';
  await submit('Remove the generated block from notes.md.', 'OpenVision shrink edit turn finished.');
  await page.waitForTimeout(2000);
  const shrunk = await stage('after-shrink-edit');
  const growFree = await fillVolume();
  await stage('volume-full-before-growing-undo', { fillerFreeBytes: growFree });
  await page.getByText(/^Undo( All)?$/).filter({ visible: true }).first().click();
  await page.getByText('Confirm', { exact: true }).filter({ visible: true }).click({ timeout: 3000 }).catch(() => {});
  await page.waitForTimeout(3000);
  const growText = await page.locator('body').innerText();
  await writeFile(join(directory, 'after-growing-undo-full-volume.txt'), growText);
  const grown = await stage('after-growing-undo-full-volume', { visibleErrors: growText.split('\n')
    .filter(line => /no space|ENOSPC|could not|failed to save|unable|error/i.test(line)).slice(0, 10) });
  await unlink(filler);
  let grownFreed = await stage('after-growing-undo-freed');
  if (!grownFreed.notes.changed) {
    // The restore did not reach disk while full: save the restored editor text again.
    await openNotes(); await page.keyboard.press('ControlOrMeta+s');
    for (let attempt = 0; attempt < 50 && !(await describe(notes)).changed; attempt++) await page.waitForTimeout(100);
    grownFreed = await stage('after-growing-undo-save-retry', { saveRetried: true });
  }
  await closeOwnedApp();
  await launch();
  await openChat(page);
  await page.getByText('OpenVision again edit turn finished.', { exact: true }).first().waitFor({ timeout: 30000 });
  const restarted = await stage('after-restart');

  result.observations = {
    faultToolResult: toolResults.find(entry => entry.phase === 'full')?.content,
    retryToolResult: toolResults.find(entry => entry.phase === 'retry')?.content,
    savedBytesSurviveFullVolume: fault.notes.original, partialFileAfterFault: fault.notes.partialChanged,
    savedBytesAfterFreeing: freed.notes.original, retryWritesCompleteBytes: retried.notes.changed,
    keptBytes: kept.notes.changed, keptBytesAfterRestart: restarted.notes.changed,
    undoWhileFull: { notes: undone.notes, freeBytesBeforeUndo: undoFree, freeBytesAfterUndo: undone.freeBytes, pendingReview: undone.pendingReviewVisible,
      visibleErrors: undone.visibleErrors }, undoAfterFreeing: { notes: undoFreed.notes, saveRetried: !!undoFreed.saveRetried },
    growingUndoWhileFull: { notes: grown.notes, freeBytesBeforeUndo: growFree, freeBytesAfterUndo: grown.freeBytes,
      pendingReview: grown.pendingReviewVisible, visibleErrors: grown.visibleErrors },
    growingUndoAfterFreeing: { notes: grownFreed.notes, saveRetried: !!grownFreed.saveRetried },
  };
  assert.equal(fault.freeBytes, 0, 'The volume must still be full after the failed edit');
  assert.match(result.observations.faultToolResult ?? '', /no space/i, 'The Agent must report the full volume');
  assert.equal(fault.notes.original, true, 'A failed full-volume edit must leave the saved bytes intact');
  assert.deepEqual(fault.temporaries, []);
  assert.equal(fault.pendingReviewVisible, false, 'A failed write must not create a pending review');
  assert.equal(freed.notes.original, true);
  assert.equal(retried.notes.changed, true, 'The retried edit must write the complete replacement');
  assert.deepEqual(retried.temporaries, [], 'The retried write must remove the stale interrupted-writer sibling');
  assert.equal(retried.pendingReviewVisible, true, 'The successful retry must create a pending review');
  // Restoring the smaller saved text releases blocks, so only the start of Undo is full.
  assert.equal(undoFree, 0, 'The volume must be full when Undo starts');
  assert.ok(undone.notes.original || undone.notes.changed, 'Undo on a full volume leaves the original or the complete edited bytes, never a torn file');
  assert.equal(undoFreed.notes.original, true, 'After freeing space the undone file holds the exact original bytes');
  assert.equal(undoFreed.pendingReviewVisible, false, 'The undone review is gone');
  assert.equal(again.notes.changed, true); assert.equal(again.pendingReviewVisible, true);
  assert.equal(kept.notes.changed, true);
  assert.equal(shrunk.notes.original, true, 'The shrink edit removed the block'); assert.equal(shrunk.pendingReviewVisible, true);
  assert.equal(growFree, 0, 'The volume must be full when the growing Undo starts');
  assert.ok(grown.notes.original || grown.notes.changed, 'A growing Undo on a full volume never leaves a torn file');
  assert.equal(grownFreed.notes.changed, true, 'After freeing space the undone file holds the exact kept bytes');
  assert.equal(restarted.notes.changed, true, 'Accepted bytes must survive restart');
  for (const record of [fault, freed, retried, undone, undoFreed, again, kept, shrunk, grown, grownFreed, restarted]) {
    assert.equal(record.unrelated, true); assert.deepEqual(record.temporaries, []);
  }
  assert.ok(requests.every(request => request.model === 'fixture-agent' && request.authorized));
  assert.equal(requests.filter(request => request.phase === 'full').length, 2);
  assert.equal(requests.filter(request => request.phase === 'retry').length, 2);
  assert.equal(requests.filter(request => request.phase === 'again').length, 2);
  assert.equal(requests.filter(request => request.phase === 'shrink').length, 2);
  assert.deepEqual(errors, []);
  result.success = true;
} catch (error) {
  result.failure = error.stack;
  await page?.screenshot({ path: join(directory, 'failure.png') }).catch(() => {});
  await writeFile(join(directory, 'failure.txt'), await page?.locator('body').innerText().catch(() => '') ?? '').catch(() => {});
  process.exitCode = 1;
} finally {
  try { await closeOwnedApp(); } catch (error) { result.cleanupFailure = error.stack; process.exitCode = 1; }
  server.closeAllConnections(); await new Promise(resolve => server.close(resolve));
  await unlink(filler).catch(() => {});
  result.hostExits = hostExits;
  await writeFile(join(directory, 'result.json'), JSON.stringify(result, null, 2));
  console.log(JSON.stringify({ directory, success: result.success, observations: result.observations,
    failure: result.failure?.split('\n')[0], hostExits }, null, 2));
}
