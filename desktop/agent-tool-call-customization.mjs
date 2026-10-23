// OV-102/OV-204: a model's tool call that the Agent cannot run must fail that call,
// not the turn. The recovered AI SDK parser threw AI_NoSuchToolError for a tool
// that was not offered and AI_InvalidToolArgumentsError for arguments that are not
// valid JSON for the tool's schema. The Agent then retried the stream and left the
// call's argument stream undrained, so the turn hung (native runs 7Cg8M6, y5G9dQ).
//
// The parser now passes such a call through with an OpenVision sentinel as its
// arguments. The runtime dispatcher checks the sentinel before looking the tool up,
// so a tool that is registered but was not offered is never executed. It drains the
// call's argument stream and answers with a tool error the model can act on; the
// turn continues. A tool that is offered to the model but missing from the
// runtime gets the same drained, clearer answer. This supersedes the hidden-tool-only
// handling (v1/v2), which is removed in place. Drift-guarded and idempotent.
import { readFile, writeFile, mkdir, copyFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';

const marker = '/* OpenVision unavailable or invalid tool call answered v4 */';
export const toolCallTargets = ['extensions/cursor-agent-exec/dist/main.js',
  'extensions/cursor-local-agent-runtime/dist/main.js', 'extensions/cursor-agent-host/dist/main.js'];
export const sentinel = 'openvisionToolCallError';
// Hidden on purpose (OV-704 owner decision); the model gets the reason.
export const hiddenToolMessages = { GenerateImage: 'Image generation is not available in this OpenVision release. Do not call GenerateImage; ' +
  'tell the user that images cannot be generated here.' };
const detailLimit = 500;

// Self-contained source inlined into the bundle; tests evaluate the same text.
const helperSource = `((name, error, available) => error?.kind === "invalid-arguments"
            ? \`Tool \${name} was called with invalid arguments: \${error.detail || "the arguments are not valid JSON for its schema"}. Call it again with arguments that match its schema, or continue without it.\`
            : (${JSON.stringify(hiddenToolMessages)})[name] ?? \`Tool \${name} is not available. Available tools: \${available.join(", ")}. Do not call \${name} again.\`)`;
export const toolCallErrorResult = new Function(`return ${helperSource}`)();

function removeHiddenToolHandling(text) {
  for (const version of ['v1', 'v2']) {
    const previous = `/* OpenVision hidden tool call answered ${version} */`;
    if (!text.includes(previous)) continue;
    const escaped = previous.replace(/[.*+?^${}()|[\]\\/]/g, '\\$&');
    const block = new RegExp(`if \\(null == [\\w$]+ && \\[[^\\]]*\\]\\.includes\\([\\w$]+\\)\\) \\{ ${escaped}\\s*return \\{ type: "tool-call",[^\\n]*\\};\\s*\\}\\s*`, 'g');
    const drain = new RegExp(` ${escaped} if \\(\\[[^\\]]*\\]\\.includes\\([\\w$]+\\) && [\\w$]+\\) try \\{ for await \\(const openvisionChunk of [\\w$]+\\); \\} catch \\{\\}`, 'g');
    const result = new RegExp(`result: ${escaped} \\[[^\\]]*\\]\\.includes\\([\\w$]+\\) \\? "[^"]*" : (\`Tool not found: [^\`]*\`),`, 'g');
    const counts = [block, drain, result].map(pattern => (text.match(pattern) ?? []).length);
    if (counts[0] !== 1 || counts[2] !== 1 || counts[1] !== (version === 'v2' ? 1 : 0)) throw new Error(`Hidden tool call handling ${version} changed`);
    text = text.replace(block, '').replace(drain, '').replace(result, (_match, original) => `result: ${original},`);
  }
  return text;
}

export function answerToolCallErrors(text) {
  if (text.includes(marker)) {
    if (text.split(marker).length !== 5) throw new Error('Tool call error handling changed');
    return text;
  }
  text = removeHiddenToolHandling(text);
  const parses = [...text.matchAll(/const ([\w$]+) = ([\w$]+)\.toolName,\s*([\w$]+) = ([\w$]+)\[\1\];\s*(if \(null == \3\) throw new [\w$]+\(\{ toolName: \2\.toolName, availableTools: Object\.keys\(\4\) \}\);)([\s\S]{0,400}?)(if \(!1 === ([\w$]+)\.success\) throw new [\w$]+\(\{ toolName: \1, toolArgs: \2\.args, cause: \8\.error \}\);)/g)];
  if (parses.length !== 1) throw new Error('Tool-call parse owner missing or ambiguous');
  const [parse, name, call, , , missing, between, invalid, parsed] = parses[0];
  const pass = args => `return { type: "tool-call", toolCallId: ${call}.toolCallId, toolName: ${name}, args: ${args} };`;
  const parseAfter = parse.slice(0, parse.indexOf(missing)) +
    `if (null == ${parses[0][3]}) { ${marker} ${pass(`{ ${sentinel}: { kind: "unavailable" } }`)} }` + between +
    `if (!1 === ${parsed}.success) ${pass(`{ ${sentinel}: { kind: "invalid-arguments", detail: String(${parsed}.error?.message ?? ${parsed}.error ?? "").slice(0, ${detailLimit}) } }`)}`;
  const dispatchers = [...text.matchAll(/async function [\w$]+\(([\w$]+), ([\w$]+), ([\w$]+), ([\w$]+), ([\w$]+), ([\w$]+), ([\w$]+), ([\w$]+), ([\w$]+), ([\w$]+) = new Set\(\)\) \{\s*const ([\w$]+) = [\w$]+\(\2\),\s*([\w$]+) = [\w$]+\(\2\),\s*([\w$]+) = \3\[\11\],[^;]*;/g)];
  if (dispatchers.length !== 1) throw new Error('Tool-call dispatcher owner missing or ambiguous');
  const [header, , toolCall, registry, , , , , argsStream, , , called, args] = dispatchers[0];
  const results = [...text.matchAll(/result: `Tool not found: \$\{([\w$]+)\}\. Available tools: \$\{Object\.keys\(([\w$]+)\)\.join\(", "\)\}`,/g)];
  if (results.length !== 1 || results[0][1] !== called || results[0][2] !== registry ||
      results[0].index < dispatchers[0].index || results[0].index - dispatchers[0].index > 3000)
    throw new Error('Tool-call not-found result changed');
  const helper = helperSource;
  const guard = ` ${marker}
          const openvisionCallError = ${args}?.${sentinel};
          if ((openvisionCallError || void 0 === ${registry}[${called}]) && ${argsStream}) try { for await (const openvisionChunk of ${argsStream}); } catch {}
          if (openvisionCallError) return { role: "tool", id: ${toolCall}.toolCallId, content: [{ type: "tool-result", toolName: ${toolCall}.toolName,
            toolCallId: ${toolCall}.toolCallId, isError: !0, result: ${helper}(${called}, openvisionCallError, Object.keys(${registry})) }] };`;
  const resultAfter = `result: ${marker} ${helper}(${called}, { kind: "unavailable" }, Object.keys(${registry})),`;
  // The Chat Completions stream adapter emits a call only once its arguments parse
  // as JSON and never flushes the rest, so a malformed call vanished and the Agent
  // re-sent the turn as empty. Emit unfinished calls at the end of a completed
  // stream; the parser above turns them into invalid-argument tool errors.
  const adapters = [...text.matchAll(/([\w$]+)\[([\w$]+)\] = \{\s*id: [\w$]+\.id,\s*type: "function",\s*function: \{\s*name: [\w$]+\.function\.name,[\s\S]{0,200}?hasFinished: !1,/g)];
  if (adapters.length !== 1) throw new Error('Tool-call stream adapter missing or ambiguous');
  const calls = adapters[0][1];
  const flush = /flush\(([\w$]+)\) \{\s*var [\w$]+, [\w$]+;\s*\1\.enqueue\(\{\s*type: "finish",/g;
  flush.lastIndex = adapters[0].index;
  const flushAt = flush.exec(text);
  if (!flushAt || flushAt.index - adapters[0].index > 4000) throw new Error('Tool-call stream flush changed');
  const sink = flushAt[1], bodyAt = flushAt.index + flushAt[0].indexOf('{') + 1;
  const emit = ` ${marker}
                      for (const openvisionCall of ${calls}) if (openvisionCall && !openvisionCall.hasFinished && openvisionCall.function?.name)
                        (${sink}.enqueue({ type: "tool-call", toolCallType: "function", toolCallId: openvisionCall.id, toolName: openvisionCall.function.name,
                          args: openvisionCall.function.arguments ?? "" }), (openvisionCall.hasFinished = !0));`;
  const edits = [{ at: bodyAt, length: 0, value: emit }, { at: parses[0].index, length: parse.length, value: parseAfter },
    { at: dispatchers[0].index + header.length, length: 0, value: guard },
    { at: results[0].index, length: results[0][0].length, value: resultAfter }].sort((a, b) => b.at - a.at);
  for (const edit of edits) text = text.slice(0, edit.at) + edit.value + text.slice(edit.at + edit.length);
  return text;
}

export async function installToolCallErrors(root) {
  for (const relative of toolCallTargets) {
    const path = join(root, 'source/app', relative);
    const before = await readFile(path, 'utf8');
    const after = answerToolCallErrors(before);
    if (before === after) continue;
    const backup = join(root, 'backups/agent-tool-calls', relative);
    await mkdir(dirname(backup), { recursive: true });
    await copyFile(path, backup, 1).catch(error => { if (error.code !== 'EEXIST') throw error; });
    await writeFile(path, after);
  }
  console.log(`Agent tool calls: unavailable or invalid calls are answered as tool errors in ${toolCallTargets.length} runtimes`);
}
