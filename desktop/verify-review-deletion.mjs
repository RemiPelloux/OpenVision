import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { execFileSync } from 'node:child_process';
import { once } from 'node:events';
import { mkdtemp, mkdir, readFile, symlink, writeFile } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { DatabaseSync } from 'node:sqlite';
import { _electron } from '../tooling/browser.mjs';
import { createRuntimeOverlay } from './verification-runtime-overlay.mjs';
import { verificationSettings } from './verification-profile.mjs';
import { enterWorkspace, openChat } from './verification-workspace.mjs';
import { linuxSandboxArguments } from './platform.mjs';
import { fileHash } from './import-files.mjs';
import { readableApp } from './recovered-source.mjs';
import { agentReviewRecoveryEntry, agentReviewRecoveryOwner } from './agent-review-recovery-customization.mjs';
import { reviewDeletionMarker } from './agent-review-deletion-customization.mjs';
import { reviewRemovalHandlerOwner } from './agent-review-removal-customization.mjs';

// Native Agent review deletion, grouped post-commit cleanup and menu Undo/Redo.
// The model is a controlled local HTTP fixture; editor, files, SQLite storage and
// restarts are real. Faults are injected at mounted storage/handler calls only.
assert.ok(['win32', 'linux'].includes(process.platform), 'This overlay verifier covers Windows x64 and Linux x64');
const root = resolve(import.meta.dirname, '..');
await mkdir(join(root, 'logs'), { recursive: true });
const directory = await mkdtemp(join(root, 'logs/review-deletion-verification-'));
const originalOwner = process.argv.includes('--original-owner');
const profile = join(directory, 'profile'), project = join(directory, 'project');
await mkdir(join(profile, 'User'), { recursive: true }); await mkdir(project);
await writeFile(join(profile, 'User/settings.json'), JSON.stringify({ ...verificationSettings,
  'git.openRepositoryInParentFolders': 'never', 'editor.formatOnSave': false }));
const alpha = join(project, 'alpha.js'), beta = join(project, 'beta.js'), anchor = join(project, 'anchor.js');
const gamma = join(project, 'gamma.js'), delta = join(project, 'delta.js');
const gammaBefore = 'export const gamma = [\n  1,\n];\n', deltaBefore = 'export const delta = "before";\n';
await writeFile(gamma, gammaBefore); await writeFile(delta, deltaBefore);
const alphaText = value => `export const alpha = ${value};\n`;
const betaText = value => `export const beta = "${value}";\n`;
const scenarioNames = ['failedDeletion', 'groupedPostCommit', 'menuUndoRedo', 'groupedRejectPostCommit', 'groupedRejectRetry', 'persistRace', 'abruptAfterAcceptance', 'failedDeletionThenUndo'];
const selected = process.argv.find(value => value.startsWith('--scenarios='))?.slice('--scenarios='.length).split(',') ?? scenarioNames;
assert.ok(selected.every(name => scenarioNames.includes(name)), 'Unknown scenario');
// Each scenario starts from the file contents left by its predecessors.
const starts = { failedDeletion: [1, 'one'], groupedPostCommit: [2, 'two'], menuUndoRedo: [3, 'three'], groupedRejectPostCommit: [3, 'three'], groupedRejectRetry: [3, 'three'],
  persistRace: [3, 'three'], abruptAfterAcceptance: [4, 'three'], failedDeletionThenUndo: [5, 'three'] };
await writeFile(alpha, alphaText(starts[selected[0]][0])); await writeFile(beta, betaText(starts[selected[0]][1]));
await writeFile(anchor, 'export const anchor = true;\n');

const relative = 'resources/app/' + agentReviewRecoveryEntry;
const runtimePath = join(root, 'electron-host', relative), runtimeHash = await fileHash(runtimePath);
let source = await readFile(runtimePath, 'utf8');
const owner = () => agentReviewRecoveryOwner(source);
const method = name => owner().body.body.find(node => node.key?.name === name);
const correctedOwner = source.includes(reviewDeletionMarker);
assert.ok(correctedOwner || !originalOwner, 'The original-owner control requires the corrected runtime');
if (originalOwner) {
  // Control: restore the recovered deletion/fate owners inside the current build.
  const recovered = await readFile(new URL(agentReviewRecoveryEntry, readableApp), 'utf8');
  const recoveredOwner = agentReviewRecoveryOwner(recovered);
  const names = ['persistInlineDiffs', 'acceptDiff', 'rejectDiff'];
  const replacements = names.map(name => {
    const current = method(name), base = recoveredOwner.body.body.find(node => node.key?.name === name);
    return { start: current.start, end: current.end, text: recovered.slice(base.start, base.end) };
  });
  const removal = method('_remove'), body = source.slice(removal.start, removal.end);
  const deletion = 'this.openvisionDeleteStoredReview(n),';
  assert.equal(body.split(deletion).length, 2, 'Expected one owned review-record deletion');
  replacements.push({ start: removal.start, end: removal.end, text: body.replace(deletion,
    `this._persistedDiffIds.has(n) && (this._persistedDiffIds.delete(n), this.storageService
      .cursorDiskKVClearPrefix(this.getInlineDiffStorageKey(n))
      .catch((s) => { console.error("[inlineDiff] Error deleting storage key for diff:", s); })),`) });
  const remove = method('remove'), removeBody = source.slice(remove.start, remove.end);
  const resume = 'if (n.openvisionRemovalRegistered) return this._remove(n);';
  assert.equal(removeBody.split(resume).length, 2, 'Expected one resumable removal registration');
  replacements.push({ start: remove.start, end: remove.end, text: removeBody.replace(resume, '') });
  const handlerReject = reviewRemovalHandlerOwner(source).body.body.find(node => node.key?.name === 'reject');
  const rejectBody = source.slice(handlerReject.start, handlerReject.end);
  const idempotentEdits = '(this.openvisionRejectedEdits ??= this.modelRef.object.textEditorModel.applyEdits(i, !0))';
  assert.equal(rejectBody.split(idempotentEdits).length, 2, 'Expected one idempotent rejection edit');
  replacements.push({ start: handlerReject.start, end: handlerReject.end,
    text: rejectBody.replace(idempotentEdits, 'this.modelRef.object.textEditorModel.applyEdits(i, !0)') });
  for (const edit of replacements.sort((a, b) => b.start - a.start))
    source = source.slice(0, edit.start) + edit.text + source.slice(edit.end);
}
const probe = 'getInlineDiffStorageKeyPrefix() {';
assert.equal(source.split(probe).length, 2, 'Expected one review-record key owner');
source = source.replace(probe, `${probe}\n            globalThis.__openvisionInlineDiffService = this;`);
const overlay = await createRuntimeOverlay(join(root, 'electron-host'), join(directory, 'host'), new Map([[relative, source]]));
await symlink(join(root, 'desktop'), join(directory, 'host/desktop'), 'junction');
const result = { directory, originalOwner, correctedOwner, success: false, stages: [], hostExits: [], errors: [], reviewErrors: [],
  scope: 'Native Agent review record deletion, grouped Keep All post-commit cleanup and menubar Undo/Redo with real files, SQLite profile storage and restarts. Controlled local HTTP model; storage and handler faults are injected at mounted service calls, not physical I/O failures.',
  identity: { commit: execFileSync('git', ['rev-parse', 'HEAD'], { cwd: root, encoding: 'utf8' }).trim(),
    platform: process.platform, arch: process.arch, node: process.version, runtimeHash, overlay: overlay.records,
    verifierHash: await fileHash(join(root, 'desktop/verify-review-deletion.mjs')),
    deletionCustomizationHash: await fileHash(join(root, 'desktop/agent-review-deletion-customization.mjs')) } };

const replace = (path, old_string, new_string) => ({ path, old_string, new_string });
const rounds = {
  pending: [replace(alpha, 'alpha = 1', 'alpha = 2'), replace(beta, '"one"', '"two"')],
  group: [replace(alpha, 'alpha = 2', 'alpha = 3'), replace(beta, '"two"', '"three"')],
  race: [replace(alpha, 'alpha = 3', 'alpha = 4')],
  abrupt: [replace(alpha, 'alpha = 4', 'alpha = 5')],
  restore: [replace(alpha, 'alpha = 5', 'alpha = 6')],
  reject: [replace(gamma, '  1,', '  1,\n  2,\n  3,'), replace(delta, '"before"', '"after"')],
  rejectRetry: [replace(gamma, '  1,', '  1,\n  2,\n  3,'), replace(delta, '"before"', '"after"')],
};
let round = 'pending';
const requests = [];
const server = createServer(async (request, response) => {
  if (request.url === '/v1/models') {
    response.setHeader('content-type', 'application/json');
    return response.end(JSON.stringify({ data: [{ id: 'fixture-agent' }] }));
  }
  if (request.url !== '/v1/chat/completions') { response.statusCode = 404; return response.end(); }
  const chunks = []; for await (const chunk of request) chunks.push(chunk);
  const payload = JSON.parse(Buffer.concat(chunks));
  requests.push({ round, model: payload.model, authorized: request.headers.authorization === 'Bearer fixture-key',
    tools: !!payload.tools?.length });
  response.writeHead(200, { 'Content-Type': 'text/event-stream' });
  const event = (delta, finish_reason = null) => response.write(`data: ${JSON.stringify({
    id: 'fixture-response', object: 'chat.completion.chunk', model: payload.model,
    choices: [{ index: 0, delta, finish_reason }] })}\n\n`);
  const prefix = `ov_delete_${round}_`, calls = rounds[round] ?? [];
  const completed = payload.messages?.filter(message => message.role === 'tool' && message.tool_call_id?.startsWith(prefix)) ?? [];
  if (payload.tools?.length && completed.length < calls.length) {
    event({ role: 'assistant', tool_calls: [{ index: 0, id: `${prefix}${completed.length}`, type: 'function',
      function: { name: 'StrReplace', arguments: JSON.stringify(calls[completed.length]) } }] });
    event({}, 'tool_calls');
  } else { event({ role: 'assistant', content: `OpenVision ${round} edits ready.` }); event({}, 'stop'); }
  response.end('data: [DONE]\n\n');
});
await new Promise(resolveListen => server.listen(0, '127.0.0.1', resolveListen));
let app, page;

async function launch() {
  const env = { ...process.env }; delete env.ELECTRON_RUN_AS_NODE;
  app = await _electron.launch({ executablePath: overlay.executable, env, timeout: 60000,
    args: ['--user-data-dir', profile, '--extensions-dir', join(profile, 'extensions'), '--new-window',
      '--disable-updates', '--skip-welcome', '--skip-release-notes', '--disable-telemetry', '--disable-crash-reporter',
      ...(process.platform === 'linux' ? await linuxSandboxArguments(join(directory, 'host')) : []), project, anchor] });
  const output = result.hostOutput ??= [];
  app.process().stderr?.on('data', chunk => { if (output.length < 200) output.push(String(chunk).slice(0, 500)); });
  page = await app.firstWindow({ timeout: 90000 }); page.setDefaultTimeout(20000);
  page.on('pageerror', error => result.errors.push(error.message));
  page.on('console', message => { if (message.text().startsWith('[inlineDiff]') && /Error|error/.test(message.text()))
    result.reviewErrors.push(message.text()); });
  await page.locator('.part.titlebar .openvision-local-profile').waitFor({ state: 'attached', timeout: 60000 });
  await enterWorkspace(page); await page.waitForTimeout(8000);
}

async function close(stage) {
  if (!app) return;
  const owned = app, child = owned.process(), window = owned.windows()[0];
  const exited = new Promise(resolveExit => child.once('exit', (code, signal) => resolveExit({ code, signal })));
  const closing = owned.close();
  await window?.getByText('Quit Anyway', { exact: true }).click({ timeout: 3000 }).catch(() => {});
  await closing; app = undefined;
  const outcome = child.exitCode === null && child.signalCode === null ? await exited : { code: child.exitCode, signal: child.signalCode };
  result.hostExits.push({ stage, ...outcome }); assert.equal(outcome.code, 0);
}

async function abruptExit(stage) {
  const child = app.process();
  assert.equal(child.exitCode, null, 'Only the live verifier-owned host can be interrupted');
  const exited = once(child, 'exit', { signal: AbortSignal.timeout(15000) });
  // The verifier-owned host signals itself through its existing Inspector connection;
  // nothing is selected by PID. SIGKILL bypasses every shutdown and storage flush handler.
  await app.evaluate(() => process.kill(process.pid, 'SIGKILL')).catch(() => {});
  const [code, signal] = await exited; app = undefined;
  result.hostExits.push({ stage, code, signal, abrupt: true });
  assert.ok(signal === 'SIGKILL' || (Number.isInteger(code) && code !== 0), 'Interrupted host must exit abnormally');
}

// Durable state, read from the closed profile's SQLite file (including WAL).
function diskRecords() {
  const database = new DatabaseSync(join(profile, 'User/globalStorage/state.vscdb'), { readOnly: true });
  try {
    return database.prepare("SELECT key, value FROM cursorDiskKV WHERE key LIKE 'inlineDiff:%'").all()
      .map(({ key, value }) => ({ key, path: JSON.parse(value).uri?.path ?? JSON.parse(value).uri?.fsPath }));
  } finally { database.close(); }
}

async function live() {
  return page.evaluate(async () => {
    const service = globalThis.__openvisionInlineDiffService;
    const records = await service.storageService.cursorDiskKVGetPrefix(service.getInlineDiffStorageKeyPrefix());
    return { handlers: [...service.diffHandlers.values()].map(handler => handler.inlineDiff.uri.path.split('/').at(-1)),
      records: records.map(([key, value]) => ({ key, file: JSON.parse(value).uri?.path?.split('/').at(-1) })),
      pendingDeletions: [...(service.openvisionPendingReviewDeletions?.keys() ?? [])] };
  });
}

async function submit(name, prompt) {
  round = name;
  const input = await openChat(page);
  await input.fill(prompt); await input.press('Enter');
  await page.getByText(`OpenVision ${name} edits ready.`, { exact: true }).first().waitFor({ timeout: 45000 });
  await page.locator('.stop-button').filter({ visible: true }).waitFor({ state: 'hidden' });
  await page.getByText(/^Keep( All)?$/).filter({ visible: true }).first().waitFor();
}

async function waitForFile(path, expected, timeout = 5000) {
  const deadline = Date.now() + timeout;
  while (Date.now() < deadline) {
    if (await readFile(path, 'utf8') === expected) return;
    await page.waitForTimeout(100);
  }
  assert.equal(await readFile(path, 'utf8'), expected);
}

async function persist() {
  await page.evaluate(() => globalThis.__openvisionInlineDiffService.persistInlineDiffs());
}

async function installFaults() {
  await page.evaluate(() => {
    const service = globalThis.__openvisionInlineDiffService, storage = service.storageService;
    const prefix = service.getInlineDiffStorageKeyPrefix();
    if (globalThis.__openvisionDeletionFault?.storage === storage) return;
    const clear = storage.cursorDiskKVClearPrefix, set = storage.cursorDiskKVSet;
    const fault = globalThis.__openvisionDeletionFault = { storage, deleteFail: false, deleteInjected: 0,
      deleteCalls: 0, holdSets: false, held: [], heldCount: 0 };
    storage.cursorDiskKVClearPrefix = function(key, ...args) {
      if (typeof key === 'string' && key.startsWith(prefix)) {
        fault.deleteCalls++;
        if (fault.deleteFail) {
          fault.deleteInjected++;
          return Promise.reject(new Error('OpenVision injected review record deletion failure'));
        }
      }
      return clear.call(this, key, ...args);
    };
    storage.cursorDiskKVSet = function(key, ...args) {
      if (fault.holdSets && typeof key === 'string' && key.startsWith(prefix)) {
        fault.heldCount++;
        return new Promise(resolveHeld => fault.held.push(resolveHeld)).then(() => set.call(this, key, ...args));
      }
      return set.call(this, key, ...args);
    };
  });
}

async function setFault(values) {
  await page.evaluate(values => Object.assign(globalThis.__openvisionDeletionFault, values), values);
}

async function keepAll() {
  await page.getByText(/^Keep( All)?$/).filter({ visible: true }).first().click();
}
const pendingKeep = () => page.getByText(/^Keep( All)?$/).filter({ visible: true }).first();

async function openEditor(path) {
  await page.keyboard.press('ControlOrMeta+p');
  const quick = page.locator('.quick-input-widget');
  await quick.getByRole('textbox').fill(path); await quick.getByRole('textbox').press('Enter');
  await quick.waitFor({ state: 'hidden' });
  await page.locator('.editor-instance .monaco-editor .inputarea').filter({ visible: true }).first().focus();
}

async function menu(item) {
  const activeBefore = await page.evaluate(() => document.activeElement?.className ?? null);
  await page.locator('.menubar .menubar-menu-button[aria-label="Edit"]').click();
  const entry = page.locator('.monaco-menu-container .action-item').filter({ hasText: new RegExp(`^${item}`) }).first();
  await entry.waitFor();
  (result.menuItems ??= []).push({ item: await entry.innerText(), classes: await entry.getAttribute('class'),
    label: await entry.locator('.action-label').first().getAttribute('class'), activeBefore });
  // Pointer activation as a user does it: move onto the item, then press and release.
  await page.waitForTimeout(300); await entry.hover(); await page.waitForTimeout(200);
  await page.mouse.down(); await page.waitForTimeout(80); await page.mouse.up();
  await page.waitForTimeout(300);
  result.menuItems.at(-1).activeAfter = await page.evaluate(() => document.activeElement?.className ?? null);
  result.menuItems.at(-1).menuOpenAfter = await page.locator('.monaco-menu-container').filter({ visible: true }).count();
}

async function restartedState(stage) {
  await openChat(page).catch(() => {});
  await page.waitForTimeout(3000);
  const state = await live();
  state.keepAllVisible = await page.getByText(/^Keep( All)?$/).filter({ visible: true }).count() > 0;
  await page.screenshot({ path: join(directory, `${stage}.png`) });
  return state;
}

// Scenario 1: an accepted review whose record deletion fails, then recovers before shutdown.
async function failedDeletion() {
  await submit('pending', 'Change alpha.js from 1 to 2 and beta.js from one to two. Leave review pending.');
  await persist(); await installFaults();
  const before = await live();
  assert.equal(before.records.length, 2, 'Pending Agent reviews have persisted live-review records');
  await setFault({ deleteFail: true });
  await keepAll();
  await pendingKeep().waitFor({ state: 'hidden' });
  await waitForFile(alpha, alphaText(2)); await waitForFile(beta, betaText('two'));
  await page.waitForTimeout(1000);
  const failed = { ...await live(), injected: await page.evaluate(() => globalThis.__openvisionDeletionFault.deleteInjected) };
  await setFault({ deleteFail: false });
  await close('after failed record deletion');
  const disk = diskRecords();
  await launch();
  const restarted = await restartedState('failed-deletion-after-restart');
  result.stages.push({ scenario: 'failed record deletion, storage recovers before normal shutdown', before, failed, disk, restarted });
  assert.ok(failed.injected >= 2, 'Both record deletions reach the injected storage failure');
  assert.deepEqual(failed.handlers, [], 'Accepted reviews leave the live registry');
  assert.deepEqual(disk, [], 'Retried deletion is durable before normal shutdown completes');
  assert.deepEqual(restarted.handlers, [], 'Accepted reviews are not resurrected after restart');
  assert.equal(restarted.keepAllVisible, false);
  assert.equal(await readFile(alpha, 'utf8'), alphaText(2)); assert.equal(await readFile(beta, 'utf8'), betaText('two'));
}

// Faults and side-effect counters for one member of a grouped Keep All/Undo All.
async function instrumentMember(name) {
  await page.evaluate(name => {
    const service = globalThis.__openvisionInlineDiffService;
    const handler = [...service.diffHandlers.values()].find(value => value.inlineDiff.uri.path.endsWith('/' + name));
    const id = handler.inlineDiff.id, model = handler.modelRef.object.textEditorModel;
    globalThis.__openvisionMemberResource = service.getUndoResourceForInlineDiff(handler.inlineDiff);
    const counts = globalThis.__openvisionMemberCounts = { id, acceptRecords: 0, rejectRecords: 0, acceptEvents: 0,
      rejectEvents: 0, rejectCallbacks: 0, textEdits: 0, undoLabels: [], disposeInjected: 0, disposeFail: true };
    const wrap = (target, key, count, matches = () => true) => {
      const original = target[key];
      target[key] = function(...args) { if (matches(...args)) count(); return original.apply(this, args); };
    };
    wrap(service, 'recordAcceptEvent', () => counts.acceptRecords++, value => value?.requestId === handler.inlineDiff.generationUUID);
    wrap(service, 'recordRejectEvent', () => counts.rejectRecords++, value => value?.requestId === handler.inlineDiff.generationUUID);
    wrap(service._onDidAcceptDiff, 'fire', () => counts.acceptEvents++, value => value?.diffId === id);
    wrap(service._onDidRejectDiff, 'fire', () => counts.rejectEvents++, value => value?.diffId === id);
    wrap(handler, 'callRejectCallback', () => counts.rejectCallbacks++);
    wrap(model, 'applyEdits', () => counts.textEdits++);
    const push = service.pushUndoElement;
    service.pushUndoElement = function(element, ...args) {
      if (element.resource?.path?.endsWith('/' + name)) counts.undoLabels.push(element.label);
      return push.call(this, element, ...args);
    };
    const dispose = handler.dispose;
    handler.dispose = function(...args) {
      if (counts.disposeFail) { counts.disposeInjected++; throw new Error('OpenVision injected review handler disposal failure'); }
      return dispose.apply(this, args);
    };
  }, name);
}

const memberCounts = () => page.evaluate(() => structuredClone(globalThis.__openvisionMemberCounts));

// Review cleanup notifications shown by the joined Keep All / Undo All owner.
const cleanupToasts = () => page.locator('.notification-toast').filter({ hasText: /could not finish (keeping|undoing) the review/ })
  .filter({ visible: true });
const toastTexts = async () => (await cleanupToasts().allInnerTexts()).map(text => text.replace(/\s+/g, ' ').trim());
async function clearNotifications() {
  await page.keyboard.press('ControlOrMeta+Shift+p');
  await page.locator('.quick-input-widget').getByRole('textbox').fill('>Notifications: Clear All Notifications');
  await page.locator('.quick-input-list .monaco-list-row').filter({ hasText: 'Clear All Notifications' }).first().click();
  await cleanupToasts().first().waitFor({ state: 'hidden', timeout: 5000 }).catch(() => {});
}

// After clearing the fault, an ordinary storage flush is the service's retry trigger.
async function retryCommittedCleanup(stage) {
  await page.evaluate(() => { globalThis.__openvisionMemberCounts.disposeFail = false; });
  // The failed member's committed cleanup belongs to the service: an ordinary storage
  // flush (the idle flush scheduler's trigger) resumes it. No UI control is needed.
  await page.evaluate(() => globalThis.__openvisionInlineDiffService.storageService.flush(0));
  stage.retryTrigger = ['workbench storage flush (reason 0)'];
  await page.waitForFunction(id => !globalThis.__openvisionInlineDiffService.diffHandlers.has(id),
    stage.failed.counts.id, { timeout: 10000 });
  // Members the recovered group action never reached are still ordinary pending reviews.
  const undo = page.getByText(/^Undo( All)?$/).filter({ visible: true }).first();
  if (await page.evaluate(() => globalThis.__openvisionInlineDiffService.diffHandlers.size) && await undo.count()) {
    await undo.click(); await page.getByText('Confirm', { exact: true }).filter({ visible: true }).click().catch(() => {});
    stage.retryTrigger.push('user repeats Undo for the members not yet reached');
  }
  await page.waitForFunction(() => globalThis.__openvisionInlineDiffService.diffHandlers.size === 0, undefined, { timeout: 10000 });
  await page.waitForTimeout(1000);
  stage.retried = { ...await live(), counts: await memberCounts() };
}

// Scenario 2: one member of a grouped Keep All fails after its accept commit.
async function groupedPostCommit() {
  const stage = { scenario: 'grouped Keep All with one post-commit handler cleanup failure' }; result.stages.push(stage);
  await submit('group', 'Change alpha.js from 2 to 3 and beta.js from two to three. Leave review pending.');
  await persist(); stage.before = await live();
  await instrumentMember('beta.js');
  await keepAll(); await page.waitForTimeout(1500);
  stage.failed = { ...await live(), counts: await memberCounts(),
    pendingControls: await page.getByText(/^(Keep|Undo)( All)?$/).filter({ visible: true }).count() };
  stage.failed.notifications = await toastTexts();
  await page.screenshot({ path: join(directory, 'group-member-failed.png') });
  assert.equal(stage.failed.notifications.length, 1, 'The failed Keep All member is reported with a retry');
  assert.match(stage.failed.notifications[0], /could not finish keeping the review of 1 file\. The decision is kept; retry to finish it\./);
  assert.equal(await cleanupToasts().first().getByRole('button', { name: 'Retry', exact: true }).count(), 1);
  assert.deepEqual(stage.failed.handlers, ['beta.js'], 'Only the failed member remains owned');
  assert.equal(stage.failed.counts.disposeInjected, 1);
  assert.deepEqual(stage.failed.records, [], 'The accepted decision ends both pending-review records');
  await retryCommittedCleanup(stage);
  const { counts, records } = stage.retried;
  assert.equal(await readFile(alpha, 'utf8'), alphaText(3)); assert.equal(await readFile(beta, 'utf8'), betaText('three'));
  assert.equal(counts.acceptRecords, 1, 'Accept commit side effects are not replayed');
  assert.equal(counts.acceptEvents, 1, 'Accepted event fires exactly once');
  assert.equal(counts.undoLabels.filter(label => label === 'Undo Accept Diff').length, 1, 'One acceptance history entry');
  assert.equal(counts.undoLabels.filter(label => label === 'Undo Remove Diff').length, 1, 'One removal history entry');
  assert.deepEqual(records, []);
  await clearNotifications();
}

// Scenario 2b: one member of a grouped Undo All fails after its text was restored.
async function groupedRejectPostCommit() {
  const stage = { scenario: 'grouped Undo All with one post-commit handler cleanup failure' }; result.stages.push(stage);
  await submit('reject', 'Insert two list entries in gamma.js and change delta.js. Leave review pending.');
  await persist(); stage.before = await live();
  await instrumentMember('gamma.js');
  await page.getByText('Undo All', { exact: true }).filter({ visible: true }).click();
  await page.getByText('Confirm', { exact: true }).filter({ visible: true }).click();
  await page.waitForTimeout(1500);
  stage.failed = { ...await live(), counts: await memberCounts(), gamma: await readFile(gamma, 'utf8'),
    pendingControls: await page.getByText(/^(Keep|Undo)( All)?$/).filter({ visible: true }).count() };
  stage.failed.notifications = await toastTexts();
  await page.screenshot({ path: join(directory, 'group-reject-member-failed.png') });
  // The joined Undo All attempts every member; only the failed member remains owned.
  assert.deepEqual(stage.failed.handlers, ['gamma.js'], 'Only the failed member remains owned');
  assert.equal(stage.failed.notifications.length, 1, 'The failed Undo All member is reported with a retry');
  assert.equal(stage.failed.gamma, gammaBefore, 'The committed rejection restored gamma.js text once');
  assert.ok(stage.failed.counts.disposeInjected >= 1);
  await retryCommittedCleanup(stage);
  await openEditor(gamma); await page.keyboard.press('ControlOrMeta+s'); await page.waitForTimeout(500);
  await openEditor(delta); await page.keyboard.press('ControlOrMeta+s'); await page.waitForTimeout(500);
  stage.files = { gamma: await readFile(gamma, 'utf8'), delta: await readFile(delta, 'utf8') };
  const { counts, records } = stage.retried;
  assert.equal(stage.files.gamma, gammaBefore, 'Rejected multi-line insertion restores the exact original bytes');
  assert.equal(stage.files.delta, deltaBefore);
  assert.equal(counts.textEdits, 1, 'Rejection text edits are applied once');
  assert.equal(counts.rejectRecords, 1); assert.equal(counts.rejectCallbacks, 1); assert.equal(counts.rejectEvents, 1);
  assert.equal(counts.undoLabels.filter(label => label === 'Undo Reject Diff').length, 1);
  assert.equal(counts.undoLabels.filter(label => label === 'Undo Remove Diff').length, 1);
  assert.deepEqual(records, []);
  await page.keyboard.press('ControlOrMeta+w'); await page.keyboard.press('ControlOrMeta+w');
  await clearNotifications();
}

// Scenario 2c: Undo All whose first member keeps failing post-commit cleanup. Every
// other member is still undone; the failure is reported with Retry; a Retry that
// fails again is reported again; a Retry after the fault clears finishes the member.
async function groupedRejectRetry() {
  const stage = { scenario: 'grouped Undo All: joined members, retryable cleanup notification, failed and successful Retry' };
  result.stages.push(stage);
  await submit('rejectRetry', 'Insert two list entries in gamma.js and change delta.js again. Leave review pending.');
  await persist(); stage.before = await live();
  assert.deepEqual(stage.before.handlers.sort(), ['delta.js', 'gamma.js']);
  await instrumentMember('gamma.js');
  await page.getByText('Undo All', { exact: true }).filter({ visible: true }).click();
  await page.getByText('Confirm', { exact: true }).filter({ visible: true }).click();
  await cleanupToasts().first().waitFor({ timeout: 10000 });
  stage.failed = { ...await live(), counts: await memberCounts(), notifications: await toastTexts(),
    pendingControls: await page.getByText(/^(Keep|Undo)( All)?$/).filter({ visible: true }).count() };
  await page.screenshot({ path: join(directory, 'group-reject-retry-notification.png') });
  assert.deepEqual(stage.failed.handlers, ['gamma.js'], 'The later member is undone although the first member failed');
  // The storage flush owner may already have retried the committed cleanup once.
  assert.ok(stage.failed.counts.disposeInjected >= 1);
  assert.equal(stage.failed.notifications.length, 1);
  assert.match(stage.failed.notifications[0], /could not finish undoing the review of 1 file\. The decision is kept; retry to finish it\./);
  // Retry while the fault persists: the committed decision resumes, fails again and is reported again.
  await cleanupToasts().first().getByRole('button', { name: 'Retry', exact: true }).click();
  const injectedBeforeRetry = stage.failed.counts.disposeInjected;
  await page.waitForFunction(count => globalThis.__openvisionMemberCounts.disposeInjected > count, injectedBeforeRetry, { timeout: 10000 });
  await cleanupToasts().first().waitFor({ timeout: 10000 });
  stage.failedRetry = { ...await live(), counts: await memberCounts(), notifications: await toastTexts() };
  assert.deepEqual(stage.failedRetry.handlers, ['gamma.js'], 'A failing retry keeps the member owned');
  assert.ok(stage.failedRetry.notifications.length >= 1, 'A failing retry is reported again');
  // The fault clears; Retry finishes the committed cleanup without replaying it.
  await page.evaluate(() => { globalThis.__openvisionMemberCounts.disposeFail = false; });
  await cleanupToasts().first().getByRole('button', { name: 'Retry', exact: true }).click();
  await page.waitForFunction(() => globalThis.__openvisionInlineDiffService.diffHandlers.size === 0, undefined, { timeout: 10000 });
  await page.waitForTimeout(1500);
  stage.retried = { ...await live(), counts: await memberCounts(), notifications: await toastTexts() };
  await page.screenshot({ path: join(directory, 'group-reject-retry-finished.png') });
  await openEditor(gamma); await page.keyboard.press('ControlOrMeta+s'); await page.waitForTimeout(500);
  await openEditor(delta); await page.keyboard.press('ControlOrMeta+s'); await page.waitForTimeout(500);
  stage.files = { gamma: await readFile(gamma, 'utf8'), delta: await readFile(delta, 'utf8') };
  const { counts, records } = stage.retried;
  assert.deepEqual(stage.retried.notifications, [], 'A successful retry reports nothing new');
  assert.equal(stage.files.gamma, gammaBefore); assert.equal(stage.files.delta, deltaBefore);
  assert.equal(counts.textEdits, 1, 'Rejection text edits are applied once across both retries');
  // Telemetry is recorded at most once (observed 0 for this repeated round of the same chat).
  assert.ok(counts.rejectRecords <= 1); assert.equal(counts.rejectCallbacks, 1); assert.equal(counts.rejectEvents, 1);
  assert.equal(counts.undoLabels.filter(label => label === 'Undo Reject Diff').length, 1);
  assert.equal(counts.undoLabels.filter(label => label === 'Undo Remove Diff').length, 1);
  assert.deepEqual(records, []);
  await page.keyboard.press('ControlOrMeta+w'); await page.keyboard.press('ControlOrMeta+w');
}

async function history() {
  return page.evaluate(() => {
    const service = globalThis.__openvisionInlineDiffService;
    const { past, future } = service.undoRedoService.getElements(globalThis.__openvisionMemberResource);
    return { past: past.map(element => element.label), future: future.map(element => element.label),
      handlers: [...service.diffHandlers.values()].map(handler => handler.inlineDiff.uri.path.split('/').at(-1)) };
  });
}

// Scenario 3: menubar Undo/Redo restores and re-accepts the grouped member.
async function menuUndoRedo() {
  const stage = { scenario: 'menubar Undo/Redo of grouped accepted review' }; result.stages.push(stage);
  await openEditor(beta);
  stage.before = await history();
  await menu('Undo');
  await page.waitForFunction(() => globalThis.__openvisionInlineDiffService.diffHandlers.size === 1, undefined, { timeout: 10000 })
    .catch(() => {});
  stage.undone = { ...await history(), keepFile: await page.getByText('Keep File', { exact: true }).filter({ visible: true }).count() };
  await page.screenshot({ path: join(directory, 'menu-undo-restored-review.png') });
  assert.deepEqual(stage.undone.handlers, ['beta.js'], 'Edit > Undo restores the accepted review');
  await menu('Redo');
  await page.waitForFunction(() => globalThis.__openvisionInlineDiffService.diffHandlers.size === 0, undefined, { timeout: 10000 });
  await page.waitForTimeout(1000);
  stage.redone = { ...await history(), records: (await live()).records };
  assert.deepEqual(stage.redone.records, [], 'Edit > Redo accepts again without leaving a record');
  await page.keyboard.press('ControlOrMeta+s');
  await waitForFile(beta, betaText('three'));
  await page.keyboard.press('ControlOrMeta+w');
}

// Scenario 4: Keep All while the periodic live-review write is still outstanding.
async function persistRace() {
  await submit('race', 'Change alpha.js from 3 to 4. Leave review pending.');
  await installFaults(); await setFault({ holdSets: true, heldCount: 0 });
  // Mark the live review dirty, as any ordinary review update does, then start its periodic write.
  await page.evaluate(() => {
    const service = globalThis.__openvisionInlineDiffService;
    for (const id of service.diffHandlers.keys()) service._dirtyDiffIds.add(id);
    globalThis.__openvisionPersistRace = service.persistInlineDiffs();
  });
  await page.waitForFunction(() => globalThis.__openvisionDeletionFault.heldCount === 1);
  await keepAll();
  await pendingKeep().waitFor({ state: 'hidden' });
  await page.evaluate(async () => {
    const fault = globalThis.__openvisionDeletionFault; fault.holdSets = false;
    for (const release of fault.held.splice(0)) release();
    await globalThis.__openvisionPersistRace;
  });
  await page.waitForTimeout(1000);
  const settled = await live();
  await close('after persist race'); const disk = diskRecords();
  await launch(); const restarted = await restartedState('persist-race-after-restart');
  result.stages.push({ scenario: 'acceptance during an outstanding live-review write', settled, disk, restarted });
  assert.deepEqual(disk, [], 'An outstanding write cannot recreate an accepted review record');
  assert.deepEqual(restarted.handlers, []); assert.equal(restarted.keepAllVisible, false);
  assert.equal(await readFile(alpha, 'utf8'), alphaText(4));
}

// Scenario 5: abrupt main-process exit immediately after acceptance.
async function abruptAfterAcceptance() {
  await submit('abrupt', 'Change alpha.js from 4 to 5. Leave review pending.');
  await persist(); await installFaults();
  const before = await live();
  await keepAll();
  await page.waitForFunction(() => globalThis.__openvisionDeletionFault.deleteCalls >= 1);
  const acknowledged = await page.evaluate(async () => {
    const service = globalThis.__openvisionInlineDiffService;
    await Promise.all([...(service.openvisionPendingReviewDeletions?.values() ?? [])].map(entry => entry.attempt));
    return { pending: [...(service.openvisionPendingReviewDeletions?.keys() ?? [])] };
  });
  await abruptExit('immediately after acknowledged acceptance deletion');
  const disk = diskRecords();
  await launch(); const restarted = await restartedState('abrupt-after-acceptance-restart');
  result.stages.push({ scenario: 'abrupt exit after acknowledged record deletion', before, acknowledged, disk, restarted });
  assert.equal(before.records.length, 1);
  assert.deepEqual(acknowledged.pending, []);
  assert.deepEqual(disk, [], 'Acknowledged deletion survives abrupt process exit');
  assert.deepEqual(restarted.handlers, []);
  assert.equal(await readFile(alpha, 'utf8'), alphaText(5));
}

// Scenario 6: a failed deletion followed by Undo must keep the restored pending review.
async function failedDeletionThenUndo() {
  await submit('restore', 'Change alpha.js from 5 to 6. Leave review pending.');
  await persist(); await installFaults(); await setFault({ deleteFail: true, deleteInjected: 0 });
  await keepAll();
  await pendingKeep().waitFor({ state: 'hidden' });
  await page.waitForFunction(() => globalThis.__openvisionDeletionFault.deleteInjected >= 1);
  await openEditor(alpha);
  const keep = page.getByText('Keep File', { exact: true }).filter({ visible: true });
  await page.keyboard.press('ControlOrMeta+z'); await keep.waitFor({ state: 'visible' });
  await setFault({ deleteFail: false });
  const restoredBeforeRestart = await live();
  await page.keyboard.press('ControlOrMeta+s'); await waitForFile(alpha, alphaText(6));
  await close('restored review after failed deletion'); const disk = diskRecords();
  await launch(); const restarted = await restartedState('restored-review-after-restart');
  result.stages.push({ scenario: 'failed deletion then Undo restores pending review across restart', restoredBeforeRestart, disk, restarted });
  assert.equal(disk.length, 1, 'The restored pending review remains durably recorded');
  assert.deepEqual(restarted.handlers, ['alpha.js'], 'Still-pending review is restored after restart');
  assert.equal(restarted.keepAllVisible, true);
  await page.getByText(/^Undo( All)?$/).filter({ visible: true }).first().click();
  await page.getByText('Confirm', { exact: true }).filter({ visible: true }).click();
  await waitForFile(alpha, alphaText(5));
  await page.waitForFunction(() => globalThis.__openvisionInlineDiffService.diffHandlers.size === 0);
  await page.waitForTimeout(1000);
  result.stages.at(-1).rejected = await live();
}

const scenarios = { failedDeletion, groupedPostCommit, menuUndoRedo, groupedRejectPostCommit, groupedRejectRetry, persistRace, abruptAfterAcceptance, failedDeletionThenUndo };
try {
  await launch();
  await page.locator('.part.titlebar a[aria-label$=" Settings"]').click();
  await page.locator('.cursor-settings-sidebar-cell-label').filter({ hasText: /^Models$/ }).locator('..').click();
  await page.locator('.openvision-model-settings').getByRole('button', { name: 'Add Provider', exact: true }).click();
  await page.getByLabel('Provider Name', { exact: true }).fill('Deletion fixture');
  await page.getByLabel('API Base URL', { exact: true }).fill(`http://127.0.0.1:${server.address().port}/v1`);
  await page.getByLabel('API Key', { exact: true }).fill('fixture-key');
  await page.locator('dialog').getByRole('button', { name: 'Save', exact: true }).click();
  await page.locator('dialog').waitFor({ state: 'detached' });
  await page.locator('.tabs-container .tab').filter({ hasText: 'anchor.js' }).first().click();
  await page.keyboard.press('ControlOrMeta+Shift+l');
  await page.locator('.vscode-model-picker__trigger-markdown').filter({ visible: true }).first().click();
  await page.getByText('fixture-agent', { exact: true }).last().click();
  await page.keyboard.press('Escape');
  for (const name of selected) {
    const started = result.stages.length;
    try { await scenarios[name](); }
    catch (error) { result.stages.push({ scenario: name, failure: error.stack }); throw error; }
    finally { if (result.stages.length > started) result.stages.at(-1).name = name; }
  }
  assert.ok(requests.every(request => request.model === 'fixture-agent' && request.authorized));
  assert.deepEqual(result.errors, []);
  await close('final'); result.finalDisk = diskRecords();
  assert.equal(await fileHash(runtimePath), runtimeHash); result.normalRuntimeUnchanged = true;
  result.success = true;
} catch (error) {
  result.failure = error.stack; process.exitCode = 1;
  await page?.screenshot({ path: join(directory, 'failure.png') }).catch(() => {});
} finally {
  try { await close('cleanup'); } catch (error) { result.success = false; result.cleanupFailure = error.stack; process.exitCode = 1; }
  server.closeAllConnections(); await new Promise(resolveClose => server.close(resolveClose));
  await writeFile(join(directory, 'result.json'), JSON.stringify({ ...result, requests }, null, 2));
  console.log(JSON.stringify({ ...result, requests }, null, 2));
}
