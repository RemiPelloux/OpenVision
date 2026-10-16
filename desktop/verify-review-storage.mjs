import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { execFileSync } from 'node:child_process';
import { mkdtemp, mkdir, readFile, writeFile, symlink } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { _electron } from '../tooling/browser.mjs';
import { createRuntimeOverlay } from './verification-runtime-overlay.mjs';
import { verificationSettings } from './verification-profile.mjs';
import { enterWorkspace } from './verification-workspace.mjs';
import { fileHash } from './import-files.mjs';
import { readableApp } from './recovered-source.mjs';
import { linuxSandboxArguments } from './platform.mjs';
import { agentReviewRecoveryOwner, agentReviewRecoveryEntry, preserveAgentReviewRecovery } from './agent-review-recovery-customization.mjs';
import { checkNativeReviewUndoFailure } from './verify-review-undo-stack.mjs';
import { checkNativeReviewRemovalFailures } from './verify-review-removal.mjs';

assert.ok(['win32', 'linux'].includes(process.platform), 'This overlay verifier covers Windows x64 and Linux x64');
const root = resolve(import.meta.dirname, '..');
const directory = await mkdtemp(join(root, 'logs/review-storage-verification-'));
const originalOwner = process.argv.includes('--original-owner');
const updatedOwner = process.argv.includes('--updated-owner');
const undoStack = process.argv.includes('--undo-stack');
const removalFailures = process.argv.includes('--removal-failures');
const menu = process.argv.includes('--menu');
assert.ok(!menu || undoStack, 'Menu verification requires --undo-stack');
assert.ok(!removalFailures || undoStack, 'Removal verification requires --undo-stack');
assert.ok(!undoStack || !originalOwner, 'Undo-stack verification uses the prepared recovery owner');
assert.ok(!updatedOwner || !originalOwner, 'Select either the original owner or the updated owner');
const profile = join(directory, 'profile'), project = join(directory, 'project'), file = join(project, 'edit.js');
await mkdir(join(profile, 'User'), { recursive: true }); await mkdir(project);
await writeFile(join(profile, 'User/settings.json'), JSON.stringify({ ...verificationSettings,
  'git.openRepositoryInParentFolders': 'never', 'editor.formatOnSave': false }));
const before = 'const answer = 1;\r\n';
await writeFile(file, before);
const relative = 'resources/app/' + agentReviewRecoveryEntry;
const runtimePath = join(root, 'electron-host', relative), runtimeHash = await fileHash(runtimePath);
let source = await readFile(runtimePath, 'utf8');
if (updatedOwner) source = preserveAgentReviewRecovery(source);
let method = agentReviewRecoveryOwner(source).body.body.find(node => node.key?.name === 'addDiff');
assert.ok(source.slice(method.start, method.end).includes('OpenVision created review recovery ownership v1'), 'Build the corrected runtime first');
if (originalOwner) {
  const recovered = await readFile(new URL(agentReviewRecoveryEntry, readableApp), 'utf8');
  const baseline = agentReviewRecoveryOwner(recovered).body.body.find(node => node.key?.name === 'addDiff');
  source = source.slice(0, method.start) + recovered.slice(baseline.start, baseline.end) + source.slice(method.end);
  method = agentReviewRecoveryOwner(source).body.body.find(node => node.key?.name === 'addDiff');
}
const capture = 'return (this.pushUndoElement(u, {}), i);';
let body = source.slice(method.start, method.end);
assert.equal(body.split(capture).length, 2, 'Expected one recovered creation undo registration');
body = body.replace(capture, `globalThis.__openvisionCreatedReviewProbe = { service: this, element: u, id: r, key: l, initial: i };
            ${capture}`);
source = source.slice(0, method.start) + body + source.slice(method.end);
const settingsBridge = '  bridge.request = ';
assert.equal(source.split(settingsBridge).length, 2, 'Expected one provider-settings bridge');
source = source.replace(settingsBridge, `  globalThis.__openvisionReviewModelBridge = bridge;\n${settingsBridge}`);
const overlay = await createRuntimeOverlay(join(root, 'electron-host'), join(directory, 'host'), new Map([[relative, source]]));
await symlink(join(root, 'desktop'), join(directory, 'host/desktop'), 'junction');
const result = { directory, originalOwner, updatedOwner, menu, success: false, checks: {}, errors: [], hostExits: [],
  scope: 'Real native Quick Edit, mounted review callbacks, model service and SQLite storage in an owned overlay. Snapshot write/read/cleanup failures are injected at service calls; this is not physical I/O failure, live inference or the full undo-service error path.',
  identity: { commit: execFileSync('git', ['rev-parse', 'HEAD'], { cwd: root, encoding: 'utf8' }).trim(),
    platform: process.platform, arch: process.arch, node: process.version, runtimeHash, overlay: overlay.records,
    verifierHash: await fileHash(join(root, 'desktop/verify-review-storage.mjs')) } };
if (undoStack) {
  result.scope = 'Native keyboard Undo/Redo through the real history service with an injected snapshot-service failure; controlled inference, not physical I/O or live inference.';
  result.identity.undoStackVerifierHash = await fileHash(join(root, 'desktop/verify-review-undo-stack.mjs'));
}
if (removalFailures) result.identity.removalVerifierHash = await fileHash(join(root, 'desktop/verify-review-removal.mjs'));
if (removalFailures) result.scope = (menu ? 'Native Edit-menubar' : 'Native keyboard') + ' Undo/Redo with injected snapshot, cancellation and handler-disposal failures, including model-overlap cleanup before the review callback. Real filesystem/SQLite and controlled HTTP inference; not physical I/O or live inference.';
result.identity.recoveryCustomizationHash = await fileHash(join(root, 'desktop/agent-review-recovery-customization.mjs'));
result.identity.undoCustomizationHash = await fileHash(join(root, 'desktop/agent-review-undo-customization.mjs'));
const requests = [];
const server = createServer(async (request, response) => {
  response.setHeader('content-type', 'application/json');
  if (request.url === '/v1/models') return response.end(JSON.stringify({ data: [{ id: 'fixture-review' }] }));
  if (request.url !== '/v1/chat/completions') { response.statusCode = 404; return response.end('{}'); }
  const chunks = []; for await (const chunk of request) chunks.push(chunk);
  const payload = JSON.parse(Buffer.concat(chunks));
  requests.push({ model: payload.model, authorized: request.headers.authorization === 'Bearer fixture-key' });
  response.end(JSON.stringify({ choices: [{ finish_reason: 'stop', message: { role: 'assistant', content: 'const answer = 2;' } }] }));
});
await new Promise(resolveListen => server.listen(0, '127.0.0.1', resolveListen));
let app, page;

async function openEdit() {
  await page.locator('.part.titlebar a[aria-label$=" Settings"]').click();
  await page.locator('.cursor-settings-sidebar-cell-label').filter({ hasText: /^Models$/ }).locator('..').click();
  await page.locator('.openvision-model-settings').getByRole('button', { name: 'Add Provider', exact: true }).click();
  await page.getByLabel('Provider Name', { exact: true }).fill('Review fixture');
  await page.getByLabel('API Base URL', { exact: true }).fill(`http://127.0.0.1:${server.address().port}/v1`);
  await page.getByLabel('API Key', { exact: true }).fill('fixture-key');
  await page.locator('dialog').getByRole('button', { name: 'Save', exact: true }).click();
  await page.locator('dialog').waitFor({ state: 'detached' });
  await page.locator('.tabs-container .tab').filter({ hasText: 'edit.js' }).first().click();
  await page.locator('.vscode-model-picker__trigger-markdown').filter({ visible: true }).first().click();
  await page.getByTestId('model-picker-menu').filter({ visible: true })
    .locator('[data-model-picker-item-name]').filter({ hasText: 'fixture-review' }).click();
  result.modelSelection = await page.evaluate(() => {
    const { ai, reactive } = globalThis.__openvisionReviewModelBridge;
    return { global: ai.modelConfigService.getModelConfig('composer'),
      published: reactive.applicationUserPersistentStorage.localProviderModelIds,
      visible: [...document.querySelectorAll('.vscode-model-picker__trigger-markdown')]
        .map(node => node.textContent) };
  });
  const selected = result.modelSelection.global.selectedModels?.[0]?.modelId;
  assert.ok(result.modelSelection.published.includes(selected), 'Quick Edit selection must resolve to the published provider catalog');
  await page.locator('.editor-instance .monaco-editor .inputarea').filter({ visible: true }).first().focus();
  await page.keyboard.press('ControlOrMeta+a'); await page.keyboard.press('ControlOrMeta+k');
  const prompt = page.locator('.monaco-editor [contenteditable="true"]').filter({ visible: true }).first();
  await prompt.click(); await prompt.press('ControlOrMeta+a'); await prompt.press('Backspace');
  await page.keyboard.insertText('Change answer to 2'); await prompt.press('Enter');
  await page.getByText('Reject', { exact: true }).filter({ visible: true }).waitFor();
  await page.waitForFunction(() => !!globalThis.__openvisionCreatedReviewProbe);
  await page.waitForTimeout(1500);
}

async function checkFailedWrite() {
  const observed = await page.evaluate(async () => {
    const { service, element, id, key, initial } = globalThis.__openvisionCreatedReviewProbe;
    const storage = service.storageService, saved = storage.cursorDiskKVSet;
    let injected = 0;
    storage.cursorDiskKVSet = function(candidate, ...args) {
      if (candidate === key) { injected++; return Promise.reject(new Error('OpenVision injected review snapshot write failure')); }
      return saved.call(this, candidate, ...args);
    };
    try {
      await element.undo();
      const kept = service.diffHandlers.get(id) === initial;
      return { injected, liveReviewPreserved: kept, snapshotStored: !!await storage.cursorDiskKVGet(key) };
    } finally { storage.cursorDiskKVSet = saved; }
  });
  assert.equal(observed.injected, 1);
  assert.equal(observed.liveReviewPreserved, !originalOwner);
  assert.equal(observed.snapshotStored, false);
  result.checks.failedWrite = observed;
}

async function checkRestoreFailures() {
  const observed = await page.evaluate(async () => {
    const { service, element, id, key, initial } = globalThis.__openvisionCreatedReviewProbe;
    await element.redo();
    const preservedOnNoopRedo = service.diffHandlers.get(id) === initial;
    await element.undo();
    const removedAfterSave = !service.diffHandlers.has(id);
    const savedSnapshot = await service.storageService.cursorDiskKVGet(key);
    const read = service.getStoredInlineDiff;
    let injected = 0;
    service.getStoredInlineDiff = function(candidate, ...args) {
      if (candidate === key) { injected++; return Promise.reject(new Error('OpenVision injected review snapshot read failure')); }
      return read.call(this, candidate, ...args);
    };
    try { await element.redo(); } finally { service.getStoredInlineDiff = read; }
    const snapshotRetainedAfterFailure = await service.storageService.cursorDiskKVGet(key) === savedSnapshot;
    const absentAfterFailedRestore = !service.diffHandlers.has(id);
    await element.redo();
    const restored = service.diffHandlers.get(id);
    return { preservedOnNoopRedo, removedAfterSave, snapshotSaved: !!savedSnapshot, injected,
      snapshotRetainedAfterFailure, absentAfterFailedRestore, reviewRestored: !!restored,
      originalLines: restored?.inlineDiff.originalTextLines,
      snapshotClearedAfterRestore: !await service.storageService.cursorDiskKVGet(key) };
  });
  result.checks.restore = observed;
  assert.equal(observed.injected, 1); assert.deepEqual(observed.originalLines, ['const answer = 1;']);
  for (const key of ['preservedOnNoopRedo', 'removedAfterSave', 'snapshotSaved', 'snapshotRetainedAfterFailure',
    'absentAfterFailedRestore', 'reviewRestored', 'snapshotClearedAfterRestore']) assert.equal(observed[key], true, key);
}

async function checkCleanupFailure() {
  const observed = await page.evaluate(async () => {
    const { service, element, id, key } = globalThis.__openvisionCreatedReviewProbe;
    await element.undo();
    const storage = service.storageService, clear = storage.cursorDiskKVClearPrefix;
    let injected = 0;
    storage.cursorDiskKVClearPrefix = function(candidate, ...args) {
      if (candidate === key) { injected++; return Promise.reject(new Error('OpenVision injected review cleanup failure')); }
      return clear.call(this, candidate, ...args);
    };
    try { await element.redo(); } finally { storage.cursorDiskKVClearPrefix = clear; }
    const restored = service.diffHandlers.get(id), snapshotRetained = !!await storage.cursorDiskKVGet(key);
    await element.redo();
    const reusedHandler = service.diffHandlers.get(id) === restored;
    await element.undo(); await element.redo();
    return { injected, snapshotRetained, reusedHandler, reviewRetained: !!restored,
      eventualCleanup: !await storage.cursorDiskKVGet(key), finalReview: !!service.diffHandlers.get(id) };
  });
  assert.equal(observed.injected, 1);
  for (const key of ['snapshotRetained', 'reusedHandler', 'reviewRetained', 'eventualCleanup', 'finalReview'])
    assert.equal(observed[key], true, key);
  result.checks.cleanup = observed;
}

async function close() {
  if (!app) return;
  const owned = app, child = owned.process();
  const exited = new Promise(resolveExit => child.once('exit', (code, signal) => resolveExit({ code, signal })));
  await owned.close(); app = undefined;
  const outcome = child.exitCode === null && child.signalCode === null ? await exited : { code: child.exitCode, signal: child.signalCode };
  result.hostExits.push(outcome); assert.equal(outcome.code, 0);
}

try {
  const env = { ...process.env }; delete env.ELECTRON_RUN_AS_NODE;
  app = await _electron.launch({ executablePath: overlay.executable, env, timeout: 60000,
    args: ['--user-data-dir', profile, '--extensions-dir', join(profile, 'extensions'), '--new-window',
      '--disable-updates', '--skip-welcome', '--skip-release-notes', '--disable-telemetry', '--disable-crash-reporter',
      ...(process.platform === 'linux' ? await linuxSandboxArguments(join(directory, 'host')) : []), project, file] });
  page = await app.firstWindow(); page.setDefaultTimeout(20000);
  page.on('pageerror', error => result.errors.push(error.message));
  result.reviewErrors = [];
  page.on('console', message => { if (message.text().startsWith('[inlineDiff]')) result.reviewErrors.push(message.text()); });
  await page.locator('.part.titlebar .openvision-local-profile').waitFor({ state: 'attached', timeout: 60000 });
  await enterWorkspace(page); await page.waitForTimeout(8000); await openEdit();
  assert.deepEqual(requests, [{ model: 'fixture-review', authorized: true }]);
  if (undoStack) await checkNativeReviewUndoFailure({ page, result });
  else await checkFailedWrite();
  if (removalFailures) await checkNativeReviewRemovalFailures({ page, result });
  if (!originalOwner && !undoStack) {
    await checkRestoreFailures(); await checkCleanupFailure();
    await page.getByText('Reject', { exact: true }).filter({ visible: true }).click();
  }
  if (undoStack) await page.getByText('Reject', { exact: true }).filter({ visible: true }).click();
  await page.locator('.editor-instance .monaco-editor .inputarea').filter({ visible: true }).first().focus();
  await page.keyboard.press('ControlOrMeta+s'); await page.waitForTimeout(1000);
  // Undo restores the original text even when the original owner loses review.
  assert.equal(await readFile(file, 'utf8'), before);
  result.checks.originalTextSaved = true;
  assert.equal(requests.length, 1, 'Review recovery must not request more inference');
  assert.deepEqual(result.errors, []);
  const expectedFailures = ['snapshot write failure', ...(undoStack ? ['snapshot read failure'] :
    !originalOwner ? ['snapshot read failure', 'cleanup failure'] : []),
    ...(removalFailures ? ['cancellation failure', 'handler disposal failure'] : [])];
  assert.equal(result.reviewErrors.length, expectedFailures.length);
  for (const failure of expectedFailures)
    assert.equal(result.reviewErrors.filter(message => message.includes(`OpenVision injected review ${failure}`)).length, 1);
  result.checks.onlyInjectedReviewErrors = true;
  await page.screenshot({ path: join(directory, 'review.png') }); await close();
  assert.equal(await fileHash(runtimePath), runtimeHash); result.checks.normalRuntimeUnchanged = true;
  result.success = true;
} catch (error) {
  result.failure = error.stack; process.exitCode = 1;
  await page?.screenshot({ path: join(directory, 'failure.png') }).catch(() => {});
} finally {
  try { await close(); } catch (error) { result.success = false; result.cleanupFailure = error.stack; process.exitCode = 1; }
  server.closeAllConnections(); await new Promise(resolveClose => server.close(resolveClose));
  await writeFile(join(directory, 'result.json'), JSON.stringify({ ...result, requests }, null, 2));
  console.log(JSON.stringify({ ...result, requests }, null, 2));
}
