import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { hideGenerateImageTool, imageGenerationTargets, answerHiddenToolCalls, hiddenToolMessage } from './image-generation-customization.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
// Shape of both registration sites in the recovered Agent runtimes (3.21.13).
const fixture = `
function tools(e, v) {
  const C = [], k = [];
  if (
    (C.push("Read"),
    e.enableGenerateImage)
  ) {
    const r = e.imageGenerationConcurrencyLimiter ?? limit(2);
    C.push("GenerateImage");
  }
  if (
    (k.push("Read"),
    e.enableGenerateImage && !v)
  ) {
    const t = e.imageGenerationConcurrencyLimiter ?? limit(2);
    k.push("GenerateImage");
  }
  return [C, k];
}
const limit = n => n;
return tools;`;

test('GenerateImage is never registered; other tools are unchanged', () => {
  const patched = hideGenerateImageTool(fixture);
  assert.equal(hideGenerateImageTool(patched), patched, 'idempotent');
  const before = new Function(fixture)(), after = new Function(patched)();
  assert.deepEqual(before({ enableGenerateImage: true }, false), [['Read', 'GenerateImage'], ['Read', 'GenerateImage']]);
  for (const enableGenerateImage of [true, false, undefined]) for (const subagent of [true, false])
    assert.deepEqual(after({ enableGenerateImage }, subagent), [['Read'], ['Read']]);
});

test('GenerateImage gate refuses a changed owner', () => {
  assert.throws(() => hideGenerateImageTool(fixture.replaceAll('imageGenerationConcurrencyLimiter', 'limiter')), /registration owner/);
  assert.throws(() => hideGenerateImageTool(fixture + fixture), /ambiguous/);
  const patched = hideGenerateImageTool(fixture);
  assert.throws(() => hideGenerateImageTool(patched.replace('/* OpenVision image generation hidden v1 */', '')), /gate changed/);
});

// Shape of the AI SDK tool-call parser and the runtime's dispatcher (3.21.13).
const calls = `
class Bs extends Error { constructor({ toolName }) { super("Model tried to call unavailable tool '" + toolName + "'"); } }
        async function $s({ toolCall: e, tools: t }) {
          const r = e.toolName,
            n = t[r];
          if (null == n) throw new Bs({ toolName: e.toolName, availableTools: Object.keys(t) });
          return { type: "tool-call", toolCallId: e.toolCallId, toolName: r, args: JSON.parse(e.args) };
        }
function dispatch(u, r) {
  return { content: [{ type: "tool-result",
                  result: \`Tool not found: \${u}. Available tools: \${Object.keys(r).join(", ")}\`,
  }] };
}
return { $s, dispatch };`;

test('a call to a hidden tool is answered with the reason; other unknown tools are unchanged', async () => {
  const patched = answerHiddenToolCalls(calls);
  assert.equal(answerHiddenToolCalls(patched), patched, 'idempotent');
  const before = new Function(calls)(), after = new Function(patched)();
  const tools = { Read: {} };
  await assert.rejects(before.$s({ toolCall: { toolName: 'GenerateImage', toolCallId: 'c1', args: '{}' }, tools }), /unavailable tool 'GenerateImage'/, 'the original threw, and the turn hung');
  assert.deepEqual(await after.$s({ toolCall: { toolName: 'GenerateImage', toolCallId: 'c1', args: '{"description":"x"}' }, tools }),
    { type: 'tool-call', toolCallId: 'c1', toolName: 'GenerateImage', args: {} });
  await assert.rejects(after.$s({ toolCall: { toolName: 'Invented', toolCallId: 'c2', args: '{}' }, tools }), /unavailable tool 'Invented'/);
  assert.deepEqual(await after.$s({ toolCall: { toolName: 'Read', toolCallId: 'c3', args: '{"path":"a"}' }, tools }),
    { type: 'tool-call', toolCallId: 'c3', toolName: 'Read', args: { path: 'a' } });
  assert.equal(after.dispatch('GenerateImage', tools).content[0].result, hiddenToolMessage);
  assert.equal(after.dispatch('Invented', tools).content[0].result, before.dispatch('Invented', tools).content[0].result);
  assert.throws(() => answerHiddenToolCalls(calls.replace('availableTools: Object.keys(t)', 'available: 1')), /owner missing/);
});

for (const relative of imageGenerationTargets) {
  const path = join(root, 'source/app', relative);
  test(`built ${relative} registers no GenerateImage tool`, { skip: !existsSync(path) }, async () => {
    const text = answerHiddenToolCalls(hideGenerateImageTool(await readFile(path, 'utf8')));
    assert.equal(text.split('OpenVision image generation hidden v1').length, 3);
    assert.equal(text.split('OpenVision hidden tool call answered v1').length, 3);
  });
}
