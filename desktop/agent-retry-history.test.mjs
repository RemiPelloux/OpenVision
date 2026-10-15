import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, mkdtemp, mkdir, writeFile, rm } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { tmpdir } from 'node:os';
import { readableApp } from './recovered-source.mjs';
import { retryOwners, retryFunction, preserveRetryHistory, installRetryHistory } from './agent-retry-history-customization.mjs';

const originals = Object.fromEntries(await Promise.all(Object.keys(retryOwners).map(async kind => [kind,
  await readFile(new URL(`extensions/cursor-agent-${kind}/dist/main.js`, readableApp), 'utf8')])));
const AsyncFunction = Object.getPrototypeOf(async function () {}).constructor;

function catchOwner(text, kind) {
  const { name, convert, parts } = retryOwners[kind], node = retryFunction(text, name);
  const matches = [], pending = [node];
  while (pending.length) {
    const value = pending.pop();
    if (!value || typeof value !== 'object') continue;
    if (value.type === 'CatchClause' && text.slice(value.start, value.end).includes(`content: ${convert}(${parts})`)) matches.push(value);
    else if (value.type === 'CatchClause' && text.slice(value.start, value.end).includes('const openvisionReplay')) matches.push(value);
    for (const child of Object.values(value)) if (child && typeof child === 'object') pending.push(...(Array.isArray(child) ? child : [child]));
  }
  assert.equal(matches.length, 1);
  return matches[0];
}

function recoveredFailure(text, kind) {
  const owner = retryOwners[kind], node = catchOwner(text, kind), convert = retryFunction(text, owner.convert);
  // Execute the actual recovered failure producer and content converter. Stream
  // transport is outside this boundary; the live native verifier covers it.
  return new AsyncFunction(owner.parts, 'e', `
    ${text.slice(convert.start, convert.end)}
    let d, flushed = 0, finished = 0;
    const u = [], p = Promise.resolve(), _ = () => flushed++, ${owner.finish} = () => finished++;
    ${text.slice(node.body.start, node.body.end)}
    return { response: d, messages: u, flushed, finished };
  `);
}

for (const [kind, original] of Object.entries(originals)) {
  const patched = preserveRetryHistory(original, kind), run = recoveredFailure(patched, kind);
  test(`${kind}: pre-content failure no longer adds an empty assistant; original error remains`, async () => {
    const error = new Error('Unauthorized'), before = await recoveredFailure(original, kind)([], error), after = await run([], error);
    assert.deepEqual(before.messages, [{ role: 'assistant', content: [], id: '1' }]);
    assert.deepEqual(after.messages, []); assert.deepEqual(after.response.messages, []);
    assert.equal(after.response.error, error); assert.equal(after.flushed, 1); assert.equal(after.finished, 1);
  });

  test(`${kind}: replayable partial text, tool calls, files and reasoning retain their data and order`, async () => {
    const parts = [
      { type: 'text', text: 'partial answer' },
      { type: 'tool-call', toolCallId: 'read-1', toolName: 'Read', args: { path: 'probe.txt' } },
      { type: 'file', data: 'fixture', mimeType: 'text/plain' },
      { type: 'reasoning', text: 'partial reasoning' },
      { type: 'reasoning', text: 'signed', signature: 'signed-fixture', providerOptions: { cursor: { modelName: 'fixture-model' } } },
      { type: 'reasoning', text: 'summary', signature: 'summary-signature', providerOptions: { cursor: { isAlreadySummarizedThinking: true, modelName: 'fixture-model' } } },
    ];
    const error = new Error('Stream disconnected'), before = await recoveredFailure(original, kind)(parts, error), after = await run(parts, error);
    assert.deepEqual(after.messages, before.messages);
    assert.equal(after.messages[0].content.length, parts.length);
    assert.equal(after.messages[0].content.at(-2).signature, 'signed-fixture');
    assert.equal(after.messages[0].content.at(-1).data, 'summary-signature');
    assert.equal(after.response.error, error);
  });

  test(`${kind}: filtered reasoning does not manufacture a replay message; abort identity survives`, async () => {
    const abort = new DOMException('Stopped', 'AbortError');
    const after = await run([{ type: 'reasoning', text: 'not replayable', providerOptions: { cursor: { isAlreadySummarizedThinking: true } } }], abort);
    assert.deepEqual(after.messages, []); assert.equal(after.response.error, abort);
  });

  test(`${kind}: patch changes only the failure body, is idempotent and rejects producer drift`, () => {
    assert.equal(preserveRetryHistory(patched, kind), patched);
    const before = catchOwner(original, kind), after = catchOwner(patched, kind);
    assert.equal(original.slice(0, before.start), patched.slice(0, after.start));
    assert.equal(original.slice(before.end), patched.slice(after.end));
    assert.throws(() => preserveRetryHistory(original.replace(`content: ${retryOwners[kind].convert}(${retryOwners[kind].parts}), id: "1"`, 'content: changed, id: "1"'), kind), /contract changed/);
    assert.throws(() => preserveRetryHistory('', kind), /missing or ambiguous/);
  });
}

test('installer patches both owners and preserves first backups on repeated installation', async () => {
  const root = await mkdtemp(join(tmpdir(), 'openvision-retry-history-'));
  try {
    for (const [kind, source] of Object.entries(originals)) {
      const path = join(root, `source/app/extensions/cursor-agent-${kind}/dist/main.js`);
      await mkdir(dirname(path), { recursive: true }); await writeFile(path, source);
    }
    await installRetryHistory(root); await installRetryHistory(root);
    for (const [kind, source] of Object.entries(originals)) {
      const relative = `extensions/cursor-agent-${kind}/dist/main.js`;
      assert.equal(await readFile(join(root, 'source/app', relative), 'utf8'), preserveRetryHistory(source, kind));
      assert.equal(await readFile(join(root, 'backups/agent-retry-history', relative), 'utf8'), source);
    }
  } finally { await rm(root, { recursive: true, force: true }); }
});
