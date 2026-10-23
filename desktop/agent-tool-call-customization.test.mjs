import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { answerToolCallErrors, toolCallTargets, toolCallErrorResult, hiddenToolMessages } from './agent-tool-call-customization.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
// Shape of the AI SDK tool-call parser and the runtime's dispatcher (3.21.13).
const calls = `
class Bs extends Error { constructor({ toolName }) { super("Model tried to call unavailable tool '" + toolName + "'"); } }
class As extends Error { constructor({ toolName }) { super("Invalid arguments for tool " + toolName); } }
const Yt = ({ text }) => { try { const value = JSON.parse(text); return typeof value.path === "string" ? { success: true, value } : { success: false, error: new Error("path: Required") }; }
  catch (error) { return { success: false, error }; } };
        async function $s({ toolCall: e, tools: t }) {
          const r = e.toolName,
            n = t[r];
          if (null == n) throw new Bs({ toolName: e.toolName, availableTools: Object.keys(t) });
          const o = Yt({ text: e.args });
          if (!1 === o.success) throw new As({ toolName: r, toolArgs: e.args, cause: o.error });
          return { type: "tool-call", toolCallId: e.toolCallId, toolName: r, args: o.value };
        }
        const f9 = t => t.toolName, g9 = t => t.args, Q6 = { warn() {} };
        async function v9(e, t, r, n, s, o, i, a, l, c = new Set()) {
          const u = f9(t),
            d = g9(t),
            p = r[u],
            h = e.get?.(1);
          if (void 0 === p) {
            if (
              (Q6.warn(e, "nal.tool_call.failure", { toolNameFromModel: u }), !1)
            ) {}
            return {
              role: "tool",
              content: [{ type: "tool-result",
                  result: \`Tool not found: \${u}. Available tools: \${Object.keys(r).join(", ")}\`,
              }] };
          }
          return { content: [{ type: "tool-result", result: "ran " + u + " " + JSON.stringify(d) }] };
        }
function adapter(chunks) {
  const out = [];
  let u = "stop";
  const l = [];
  const stream = {
                    transform(e, t) {
                      for (const k of e) {
                          const c = k.index;
                          if (null == l[c]) {
                            l[c] = {
                              id: k.id,
                              type: "function",
                              function: {
                                name: k.function.name,
                                arguments: k.function.arguments,
                              },
                              hasFinished: !1,
                            };
                            try { JSON.parse(l[c].function.arguments); t.enqueue({ type: "tool-call", toolCallId: k.id, toolName: k.function.name, args: l[c].function.arguments }); l[c].hasFinished = !0; } catch {}
                          }
                      }
                    },
                    flush(e) {
                      var t, r;
                      e.enqueue({
                        type: "finish",
                        finishReason: u,
                      });
                    },
  };
  const sink = { enqueue: part => out.push(part) };
  stream.transform(chunks, sink); stream.flush(sink);
  return out;
}
return { $s, v9, adapter };`;
function argsStream() {
  const stream = { read: 0, async *[Symbol.asyncIterator]() { for (const chunk of ['{"pa', 'th":1']) { stream.read++; yield chunk; } } };
  return stream;
}

test('unknown and invalid tool calls pass the parser; valid calls are unchanged', async () => {
  const patched = answerToolCallErrors(calls);
  assert.equal(answerToolCallErrors(patched), patched, 'idempotent');
  const before = new Function(calls)(), after = new Function(patched)();
  const tools = { Read: {} };
  await assert.rejects(before.$s({ toolCall: { toolName: 'Invented', toolCallId: 'c1', args: '{}' }, tools }), /unavailable tool 'Invented'/, 'the original threw and the turn retried');
  await assert.rejects(before.$s({ toolCall: { toolName: 'Read', toolCallId: 'c2', args: '{"path":' }, tools }), /Invalid arguments/);
  assert.deepEqual(await after.$s({ toolCall: { toolName: 'Invented', toolCallId: 'c1', args: '{"x":1}' }, tools }),
    { type: 'tool-call', toolCallId: 'c1', toolName: 'Invented', args: { openvisionToolCallError: { kind: 'unavailable' } } });
  const invalid = await after.$s({ toolCall: { toolName: 'Read', toolCallId: 'c2', args: '{"path":' }, tools });
  assert.equal(invalid.args.openvisionToolCallError.kind, 'invalid-arguments');
  assert.match(invalid.args.openvisionToolCallError.detail, /JSON|Unexpected/);
  assert.equal((await after.$s({ toolCall: { toolName: 'Read', toolCallId: 'c3', args: '{}' }, tools })).args.openvisionToolCallError.detail, 'path: Required');
  assert.deepEqual(await after.$s({ toolCall: { toolName: 'Read', toolCallId: 'c4', args: '{"path":"a"}' }, tools }),
    { type: 'tool-call', toolCallId: 'c4', toolName: 'Read', args: { path: 'a' } });
});

test('a call whose arguments never parse is emitted when the stream completes', () => {
  const before = new Function(calls)(), after = new Function(answerToolCallErrors(calls))();
  const chunks = [{ index: 0, id: 'c1', function: { name: 'Read', arguments: '{"path": "probe.txt"' } },
    { index: 1, id: 'c2', function: { name: 'Read', arguments: '{"path":"a"}' } }];
  assert.deepEqual(before.adapter(chunks).map(part => part.toolCallId ?? part.type), ['c2', 'finish'], 'the original dropped the malformed call');
  assert.deepEqual(after.adapter(chunks).map(part => [part.type, part.toolCallId, part.args]),
    [['tool-call', 'c2', '{"path":"a"}'], ['tool-call', 'c1', '{"path": "probe.txt"'], ['finish', undefined, undefined]]);
});

test('the dispatcher drains, answers with a tool error and never runs a flagged call', async () => {
  const after = new Function(answerToolCallErrors(calls))();
  const registry = { Read: {}, Hidden: {} };
  const unavailable = argsStream();
  const answer = await after.v9({}, { toolName: 'Invented', toolCallId: 'c1', args: { openvisionToolCallError: { kind: 'unavailable' } } }, registry, 0, {}, 0, 0, unavailable);
  assert.equal(unavailable.read, 2, 'the argument stream is drained');
  assert.equal(answer.content[0].isError, true);
  assert.equal(answer.content[0].result, 'Tool Invented is not available. Available tools: Read, Hidden. Do not call Invented again.');
  // Registered in the runtime but not offered to the model: still refused.
  const hidden = await after.v9({}, { toolName: 'Hidden', toolCallId: 'c2', args: { openvisionToolCallError: { kind: 'unavailable' } } }, registry, 0, {}, 0, 0, argsStream());
  assert.match(hidden.content[0].result, /^Tool Hidden is not available/);
  const invalid = await after.v9({}, { toolName: 'Read', toolCallId: 'c3', args: { openvisionToolCallError: { kind: 'invalid-arguments', detail: 'path: Required' } } }, registry, 0, {}, 0, 0, argsStream());
  assert.match(invalid.content[0].result, /^Tool Read was called with invalid arguments: path: Required\. Call it again/);
  // Offered but missing from the runtime: drained, clearer answer, no error flag change needed.
  const missing = argsStream();
  assert.match((await after.v9({}, { toolName: 'Gone', args: {} }, registry, 0, {}, 0, 0, missing)).content[0].result, /^Tool Gone is not available/);
  assert.equal(missing.read, 2);
  assert.equal((await after.v9({}, { toolName: 'Read', args: { path: 'a' } }, registry, 0, {}, 0, 0, argsStream())).content[0].result, 'ran Read {"path":"a"}');
  assert.equal(toolCallErrorResult('GenerateImage', { kind: 'unavailable' }, ['Read']), hiddenToolMessages.GenerateImage);
});

test('hidden-tool handling v1/v2 is replaced in place; a changed owner is refused', () => {
  const patched = answerToolCallErrors(calls);
  const v2 = calls
    .replace('if (null == n) throw', 'if (null == n && ["GenerateImage"].includes(r)) { /* OpenVision hidden tool call answered v2 */\n            return { type: "tool-call", toolCallId: e.toolCallId, toolName: r, args: {} };\n          }\n          if (null == n) throw')
    .replace('if (void 0 === p) {', 'if (void 0 === p) { /* OpenVision hidden tool call answered v2 */ if (["GenerateImage"].includes(u) && a) try { for await (const openvisionChunk of a); } catch {}')
    .replace('result: `Tool not found', 'result: /* OpenVision hidden tool call answered v2 */ ["GenerateImage"].includes(u) ? "Image generation is not available." : `Tool not found');
  assert.equal(answerToolCallErrors(v2), patched);
  assert.throws(() => answerToolCallErrors(calls.replace('availableTools: Object.keys(t)', 'available: 1')), /parse owner/);
  assert.throws(() => answerToolCallErrors(calls.replace('Tool not found: ', 'Missing: ')), /not-found result/);
  assert.throws(() => answerToolCallErrors(patched.replace('/* OpenVision unavailable or invalid tool call answered v4 */', '')), /handling changed/);
});

for (const relative of toolCallTargets) {
  const path = join(root, 'source/app', relative);
  test(`built ${relative} answers unavailable and invalid tool calls`, { skip: !existsSync(path) }, async () => {
    const text = answerToolCallErrors(await readFile(path, 'utf8'));
    assert.equal(text.split('OpenVision unavailable or invalid tool call answered v4').length, 5);
    assert.doesNotMatch(text, /hidden tool call answered/);
  });
}
