import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, mkdtemp, mkdir, writeFile, rm } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { tmpdir } from 'node:os';
import { parseExpressionAt } from '../tooling/dependencies.mjs';
import { readableApp } from './recovered-source.mjs';
import { loopRetryOwner, terminalLoopRetries, loopFailureRecovery, loopGuidance, installLoopRetryPolicy, isSingleMessageLoopError } from './agent-loop-retry-customization.mjs';

const original = await readFile(new URL(loopRetryOwner.relative, readableApp), 'utf8');

// Run the actual recovered classifier. Its collaborators are replaced only by
// neutral stubs (no provider failure, no blob error, no client status), so the
// result is what the classifier itself decides for the error.
function classifier(text) {
  const start = text.indexOf(`function ${loopRetryOwner.name}(e) {`);
  const node = parseExpressionAt(text, start, { ecmaVersion: 'latest' });
  const helper = text.indexOf('function openvisionSingleMessageLoop(');
  const shared = helper < 0 ? '' : text.slice(helper, text.indexOf('};\n', helper) + 2);
  return new Function('openvisionProviderErrors', 'Nwe', 'rbe', 'tj', 'PEe', 'CEe', 'AEe',
    `${shared}\nreturn (${text.slice(node.start, node.end)});`)({ isProviderFailure: () => false }, class {}, () => false,
    () => undefined, () => undefined, new Set([400, 401, 402, 403, 404, 405, 413, 422]), () => false);
}

class AgentLoopError extends Error {
  constructor(loopType) { super('Agent single-message loop detected: single_message_single_line'); this.name = 'AgentLoopError'; this.loopType = loopType; }
}

test('recovered classifier repeats a turn after loop exhaustion; patched classifier ends it', () => {
  const loop = new AgentLoopError('singleMessage');
  assert.equal(classifier(original)(loop), true, 'Original behaviour: loop exhaustion is retried as transient');
  const patched = classifier(terminalLoopRetries(original));
  assert.equal(patched(loop), false);
  assert.equal(patched(new Error('wrapped', { cause: loop })), false, 'Wrapped loop exhaustion is terminal too');
});

test('other retry decisions are unchanged', () => {
  const before = classifier(original), after = classifier(terminalLoopRetries(original));
  for (const error of [new Error('socket hang up'), Object.assign(new Error('timeout'), { code: 'ETIMEDOUT' }),
    new AgentLoopError('assistantMessage'), new Error('outer', { cause: new Error('inner') })])
    assert.equal(after(error), before(error), error.message);
});

test('loop predicate follows bounded cause chains only', () => {
  assert.equal(isSingleMessageLoopError(new AgentLoopError('singleMessage')), true);
  assert.equal(isSingleMessageLoopError(new AgentLoopError('assistantMessage')), false);
  const cycle = new Error('cycle'); cycle.cause = cycle;
  assert.equal(isSingleMessageLoopError(cycle), false);
});

test('patch is idempotent and refuses a changed owner', () => {
  const once = terminalLoopRetries(original);
  assert.equal(terminalLoopRetries(once), once);
  assert.throws(() => terminalLoopRetries(original.replace(`function ${loopRetryOwner.name}(e) {`, 'function renamedOwner(e) {')), /missing/);
  assert.throws(() => terminalLoopRetries(original.replace('"Single-message loop detected again after retry"', '"changed"')), /contract changed/);
});

test('installer patches the bundle once and keeps a first backup', async () => {
  const root = await mkdtemp(join(tmpdir(), 'openvision-loop-retry-'));
  try {
    const path = join(root, 'source/app', loopRetryOwner.relative);
    await mkdir(dirname(path), { recursive: true }); await writeFile(path, original);
    await installLoopRetryPolicy(root); const first = await readFile(path, 'utf8');
    await installLoopRetryPolicy(root);
    assert.equal(await readFile(path, 'utf8'), first);
    assert.equal(await readFile(join(root, 'backups/agent-loop-retry', loopRetryOwner.relative), 'utf8'), original);
  } finally { await rm(root, { recursive: true, force: true }); }
});

test('terminal loop failure becomes the local error type that offers Try again, with guidance', () => {
  const patched = loopFailureRecovery(terminalLoopRetries(original));
  const start = patched.indexOf('/* OpenVision loop exhaustion offers explicit Try again v1 */');
  assert.ok(start > 0);
  // Execute the inserted branch with the recovered error classes' shape.
  const end = patched.indexOf('new Lwe(i, l);', start) + 'new Lwe(i, l);'.length;
  const helper = patched.slice(0, patched.indexOf('};\n') + 2);
  const convert = new Function('e', 'i', 'l', 'a', 'openvisionProviderErrors', 'YEe', 'Lwe', `${helper}\n${patched.slice(start, end)}`);
  class Lwe { constructor(message, options) { this.message = message; this.options = options; } }
  class YEe extends Lwe { get name() { return 'LocalProviderError'; } }
  const options = { requestId: 'r', displayInfo: { title: 'Local agent request failed', detail: 'loop detail\n\nModel: m', isRetryable: false } };
  const loop = convert(new AgentLoopError('singleMessage'), 'loop detail', options, false, { isProviderFailure: () => false }, YEe, Lwe);
  assert.equal(loop.name, 'LocalProviderError');
  assert.equal(loop.message, `${loopGuidance}\n\nloop detail`);
  assert.equal(loop.options.displayInfo.detail, `${loopGuidance}\n\nloop detail\n\nModel: m`);
  assert.equal(loop.options.requestId, 'r');
  const other = convert(new Error('x'), 'x', options, false, { isProviderFailure: () => false }, YEe, Lwe);
  assert.equal(other.name, undefined, 'Other non-provider failures keep the non-retriable type');
  assert.equal(loopFailureRecovery(patched), patched);
});

test('an unpublished v1 build is upgraded in place to the shared helper', () => {
  const anchor = `function ${loopRetryOwner.name}(e) {`;
  const v1 = original.replace(anchor, `${anchor}\n          /* OpenVision loop exhaustion is terminal for turn retries v1 */\n          for (let x = e; x; x = x.cause)\n            if ("AgentLoopError" === x.name) return false;`);
  const upgraded = terminalLoopRetries(v1);
  assert.equal(upgraded.includes('turn retries v1'), false);
  assert.equal(upgraded, terminalLoopRetries(original));
});
