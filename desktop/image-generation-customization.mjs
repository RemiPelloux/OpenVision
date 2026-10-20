// OV-704 owner decision (20 October 2026): image generation is hidden for this
// release. The local Agent runtimes registered a GenerateImage tool whenever
// `enableGenerateImage` was on (its default follows the web-tools setting), and the
// tool calls the configured provider's /images/generations endpoint. Gate both
// registration sites in every bundled Agent runtime so the tool is never offered.
// A model may still call GenerateImage (old history, or it guesses the name). The
// AI SDK then threw AI_NoSuchToolError and the turn retried and hung (native run).
// For hidden tools only, let the parser pass the call through to the runtime's own
// dispatcher, which already answers unknown tools with a tool result, and make that
// result say why. Drift-guarded (each site is pinned by its image-generation limiter
// or its exact error contract) and idempotent.
import { readFile, writeFile, mkdir, copyFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';

const marker = '/* OpenVision image generation hidden v1 */';
export const imageGenerationTargets = ['extensions/cursor-agent-exec/dist/main.js',
  'extensions/cursor-local-agent-runtime/dist/main.js', 'extensions/cursor-agent-host/dist/main.js'];

export function hideGenerateImageTool(text) {
  if (text.includes(marker)) {
    if (text.split(marker).length !== 3) throw new Error('Image generation gate changed');
    return text;
  }
  const sites = [...text.matchAll(/([\w$]+)\.enableGenerateImage((?: && ![\w$]+)?)\)(\s*\)\s*\{\s*const [\w$]+ = \1\.imageGenerationConcurrencyLimiter)/g)];
  if (sites.length !== 2) throw new Error('GenerateImage registration owner missing or ambiguous');
  for (const site of sites.reverse()) {
    const [match, owner, rest, tail] = site;
    text = text.slice(0, site.index) + `(${marker} !1 && ${owner}.enableGenerateImage${rest}))${tail}` +
      text.slice(site.index + match.length);
  }
  return text;
}

const callMarker = '/* OpenVision hidden tool call answered v2 */';
export const hiddenTools = ['GenerateImage'];
export const hiddenToolMessage = 'Image generation is not available in this OpenVision release. Do not call GenerateImage; ' +
  'tell the user that images cannot be generated here.';

export function answerHiddenToolCalls(text) {
  if (text.includes(callMarker)) {
    if (text.split(callMarker).length !== 4) throw new Error('Hidden tool call handling changed');
    return text;
  }
  // Upgrade v1 (answered the call but left its argument stream undrained).
  const previous = '/* OpenVision hidden tool call answered v1 */';
  if (text.includes(previous)) {
    const block = /if \(null == [\w$]+ && \[[^\]]*\]\.includes\([\w$]+\)\) \{ \/\* OpenVision hidden tool call answered v1 \*\/\s*return \{ type: "tool-call",[^\n]*\};\s*\}\s*/g;
    const result = /result: \/\* OpenVision hidden tool call answered v1 \*\/ \[[^\]]*\]\.includes\([\w$]+\) \? "[^"]*" : (`Tool not found: [^`]*`),/g;
    if ((text.match(block) ?? []).length !== 1 || (text.match(result) ?? []).length !== 1) throw new Error('Hidden tool call handling v1 changed');
    text = text.replace(block, '').replace(result, (_match, original) => `result: ${original},`);
  }
  const parses = [...text.matchAll(/const ([\w$]+) = ([\w$]+)\.toolName,\s*([\w$]+) = ([\w$]+)\[\1\];\s*if \(null == \3\) throw new ([\w$]+)\(\{ toolName: \2\.toolName, availableTools: Object\.keys\(\4\) \}\);/g)];
  const dispatches = [...text.matchAll(/result: `Tool not found: \$\{([\w$]+)\}\. Available tools: \$\{Object\.keys\(([\w$]+)\)\.join\(", "\)\}`,/g)];
  if (parses.length !== 1 || dispatches.length !== 1) throw new Error('Tool-call parse or dispatch owner missing or ambiguous');
  const hidden = JSON.stringify(hiddenTools);
  const [parse, name, call, , , , error] = parses[0];
  const throwAt = parse.indexOf('if (null == ');
  const parseAfter = parse.slice(0, throwAt) + `if (null == ${parse.slice(throwAt + 'if (null == '.length).split(')')[0]} && ${hidden}.includes(${name})) { ${callMarker}
            return { type: "tool-call", toolCallId: ${call}.toolCallId, toolName: ${name}, args: {} };
          }
          ` + parse.slice(throwAt);
  // The dispatcher's not-found branch returns before reading the call's argument
  // stream; other early exits drain it, and an undrained stream stalls the turn.
  const dispatchers = [...text.matchAll(/async function [\w$]+\(([\w$]+), ([\w$]+), ([\w$]+), ([\w$]+), ([\w$]+), ([\w$]+), ([\w$]+), ([\w$]+), ([\w$]+), ([\w$]+) = new Set\(\)\) \{\s*const ([\w$]+) = [\w$]+\(\2\),/g)];
  if (dispatchers.length !== 1) throw new Error('Tool-call dispatcher owner missing or ambiguous');
  const [, , , , , , , , argsStream] = dispatchers[0], called = dispatchers[0][11];
  const notFound = /if \(void 0 === [\w$]+\) \{(?=\s*if \(\s*\([\w$]+\.warn\([\w$]+, "nal\.tool_call\.failure")/.exec(text.slice(dispatchers[0].index, dispatchers[0].index + 1500));
  if (!notFound) throw new Error('Tool-call not-found branch changed');
  const drainAt = dispatchers[0].index + notFound.index + notFound[0].length;
  const drain = ` ${callMarker} if (${hidden}.includes(${called}) && ${argsStream}) try { for await (const openvisionChunk of ${argsStream}); } catch {}`;
  const [dispatch, tool, tools] = dispatches[0];
  const dispatchAfter = `result: ${callMarker} ${hidden}.includes(${tool}) ? ${JSON.stringify(hiddenToolMessage)} : \`Tool not found: \${${tool}}. Available tools: \${Object.keys(${tools}).join(", ")}\`,`;
  const edits = [{ at: parses[0].index, length: parse.length, value: parseAfter },
    { at: drainAt, length: 0, value: drain },
    { at: dispatches[0].index, length: dispatch.length, value: dispatchAfter }].sort((a, b) => b.at - a.at);
  for (const edit of edits) text = text.slice(0, edit.at) + edit.value + text.slice(edit.at + edit.length);
  return text;
}

export async function installImageGenerationHidden(root) {
  for (const relative of imageGenerationTargets) {
    const path = join(root, 'source/app', relative);
    const before = await readFile(path, 'utf8');
    const after = answerHiddenToolCalls(hideGenerateImageTool(before));
    if (before === after) continue;
    const backup = join(root, 'backups/image-generation', relative);
    await mkdir(dirname(backup), { recursive: true });
    await copyFile(path, backup, 1).catch(error => { if (error.code !== 'EEXIST') throw error; });
    await writeFile(path, after);
  }
  console.log(`Image generation: GenerateImage hidden from ${imageGenerationTargets.length} Agent runtimes; calls made anyway are answered`);
}
