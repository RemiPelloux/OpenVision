import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, mkdtemp, mkdir, writeFile, rm } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { tmpdir } from 'node:os';
import { runInNewContext } from 'node:vm';
import { parseExpressionAt } from '../tooling/dependencies.mjs';
import { readableApp } from './recovered-source.mjs';
import { installLocalRetryReset, localRetryResetMarker, localRetryResetTargets, resetLocalRetriesInAgentExec,
  resetLocalRetriesInExtensionHost, resetLocalRetriesInWorkbench } from './local-agent-retry-reset-customization.mjs';

const recovered = Object.fromEntries(await Promise.all(Object.entries(localRetryResetTargets)
  .map(async ([id, relative]) => [id, await readFile(new URL(relative, readableApp), 'utf8')])));
const patched = { agentExec: resetLocalRetriesInAgentExec(recovered.agentExec),
  extensionHost: resetLocalRetriesInExtensionHost(recovered.extensionHost), workbench: resetLocalRetriesInWorkbench(recovered.workbench) };

// Evaluate one object literal or class member of a bundle, starting at `anchor`.
function objectAt(text, anchor, from = 0, context = {}) {
  const start = text.indexOf(anchor, from) + anchor.length - 1;
  let node = parseExpressionAt(text, start, { ecmaVersion: 'latest' });
  if (node.type === 'SequenceExpression') node = node.expressions[0];
  assert.equal(node.type, 'ObjectExpression');
  return runInNewContext(`(function () { return (${text.slice(node.start, node.end)}); })`, context);
}
function methodOf(text, signature) {
  const start = text.indexOf(signature);
  const node = parseExpressionAt(`class{${text.slice(start)}`, 0, { ecmaVersion: 'latest' }).body.body[0];
  return runInNewContext(`(class { ${text.slice(start, start + node.end - 'class{'.length)} })`, {});
}

// Values built in another realm compare by their JSON form.
const plain = value => JSON.parse(JSON.stringify(value));

// Agent exec: the local run options built from the request and its callbacks.
function localRunOptions(text, callbacks) {
  const owner = text.indexOf('async runLocalAgent(t, r, n) {');
  const build = objectAt(text, '(b = {', owner, { t: { runOptions: { conversationId: 'c' } }, r: callbacks, Va: {}, ja: {} });
  return build();
}
// Extension host: the callback object handed to the Agent exec runtime.
function hostCallbacks(text, proxy) {
  const owner = text.indexOf('async $startLocalAgentRun(n, a, t, s) {');
  const build = objectAt(text, 'f = {', owner, { n: 'run-1', H: { wrap: value => value } });
  return build.call({ _proxy: proxy });
}
// Renderer: the local run's callbacks for one turn whose run options are `l`.
function rendererCallbacks(text, l) {
  const owner = text.indexOf('async runLocalAgentInExtensionHost(e, t, n, i, r, s, o, a, c, l) {');
  const build = objectAt(text, 'v = {', owner, { l, t: 'conversation-state' });
  return build.call({});
}

test('recovered local run options never supply onRetryStarting; patched options forward it', async () => {
  assert.equal(localRunOptions(recovered.agentExec, { retryStarting() {} }).onRetryStarting, undefined);
  const calls = [];
  const options = localRunOptions(patched.agentExec, { retryStarting: async (...args) => { calls.push(args); } });
  assert.equal(options.conversationId, 'c');
  await options.onRetryStarting(2, { actionCase: 'userMessageAction', conversationState: { large: true }, isResume: false,
    attemptRequestId: 'attempt-2' });
  // Only plain values cross the process boundary.
  assert.deepEqual(plain(calls), [[2, { actionCase: 'userMessageAction', isResume: false, attemptRequestId: 'attempt-2' }]]);
  assert.equal(localRunOptions(patched.agentExec, {}).onRetryStarting, undefined, 'An older host without the route is unchanged');
});

test('the recovered retry loop awaits onRetryStarting before every replay', () => {
  const loop = recovered.agentExec.indexOf('r.call(b, R, {\n                          actionCase: A.action.case,');
  assert.ok(loop > 0);
  assert.match(recovered.agentExec.slice(loop - 400, loop), /R > 0\s*\? \(\(M = crypto\.randomUUID\(\)\),\s*yield null === \(r = b\.onRetryStarting\)/);
});

test('extension host forwards retryStarting to the main thread for its run', async () => {
  const sent = [], proxy = { $localAgentRetryStarting: async (...args) => { sent.push(args); } };
  assert.equal(hostCallbacks(recovered.extensionHost, proxy).retryStarting, undefined);
  await hostCallbacks(patched.extensionHost, proxy).retryStarting(1, { actionCase: 'userMessageAction', isResume: false });
  assert.deepEqual(plain(sent), [['run-1', 1, { actionCase: 'userMessageAction', isResume: false }]]);
});

test('main thread reaches the run callbacks and rejects an unknown run like its siblings', async () => {
  const Class = methodOf(patched.workbench, 'async $localAgentRetryStarting(e, t, n) {');
  const reached = [], owner = new Class();
  owner._getLocalRunCallbacks = id => id === 'run-1' ? { retryStarting: async (...args) => { reached.push(args); } }
    : id === 'old' ? {} : undefined;
  await owner.$localAgentRetryStarting('run-1', 3, { isResume: false });
  await owner.$localAgentRetryStarting('old', 1, {});
  assert.deepEqual(plain(reached), [[3, { isResume: false }]]);
  await assert.rejects(owner.$localAgentRetryStarting('missing', 1, {}), /Local agent run missing not found/);
});

test("renderer callbacks call the turn's onRetryStarting with its conversation state", async () => {
  const resets = [], l = { onRetryStarting: async (...args) => { resets.push(args); } };
  assert.equal(rendererCallbacks(recovered.workbench, l).retryStarting, undefined);
  await rendererCallbacks(patched.workbench, l).retryStarting(1, { actionCase: 'userMessageAction', isResume: false });
  assert.deepEqual(plain(resets), [[1, { actionCase: 'userMessageAction', isResume: false, conversationState: 'conversation-state' }]]);
  await rendererCallbacks(patched.workbench, {}).retryStarting(1, {}); // a turn without the hook is unchanged
  // The hosted hook resets the turn unless the attempt resumes from a checkpoint.
  assert.ok(patched.workbench.includes('(Te(), !ht.isResume && (await De({ case: "replayCurrentAction" })));'));
});

test('transforms are idempotent, fail closed on drift and the installer keeps first backups', async () => {
  for (const [id, transform] of [['agentExec', resetLocalRetriesInAgentExec], ['extensionHost', resetLocalRetriesInExtensionHost],
    ['workbench', resetLocalRetriesInWorkbench]]) {
    assert.equal(transform(patched[id]), patched[id]);
    assert.ok(patched[id].includes(localRetryResetMarker));
  }
  assert.throws(() => resetLocalRetriesInAgentExec(recovered.agentExec.replace('await r.handleCheckpoint(t.toBinary());', 'await r.save();')), /contract changed/);
  assert.throws(() => resetLocalRetriesInExtensionHost(recovered.extensionHost.replace('$localAgentUploadPromptQualitySnapshot(n, A, w)', '$upload(n, A, w)')), /contract changed/);
  assert.throws(() => resetLocalRetriesInWorkbench(recovered.workbench.replace('onRetryStarting: He,', 'onRetryStarting: void 0,')), /contract changed/);
  const root = await mkdtemp(join(tmpdir(), 'openvision-local-retry-'));
  try {
    for (const [id, relative] of Object.entries(localRetryResetTargets)) {
      await mkdir(dirname(join(root, 'source/app', relative)), { recursive: true });
      await writeFile(join(root, 'source/app', relative), recovered[id]);
    }
    await installLocalRetryReset(root); await installLocalRetryReset(root);
    for (const [id, relative] of Object.entries(localRetryResetTargets)) {
      assert.equal(await readFile(join(root, 'source/app', relative), 'utf8'), patched[id]);
      assert.equal(await readFile(join(root, 'backups/local-retry-reset', relative), 'utf8'), recovered[id]);
    }
  } finally { await rm(root, { recursive: true, force: true }); }
});
