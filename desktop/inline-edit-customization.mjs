import { readFile, writeFile, copyFile } from 'node:fs/promises';
import { join } from 'node:path';
import { parseExpressionAt } from '../tooling/dependencies.mjs';
import { backedWrite } from './telemetry-settings.mjs';

const marker = '/* OpenVision custom inline edits v1 */';

function replaceOnce(text, pattern, replacement) {
  const matches = [...text.matchAll(pattern)];
  if (matches.length !== 1) throw Error(`Inline edit boundary missing or ambiguous: ${pattern}`);
  return text.replace(pattern, replacement);
}

export function customInlineEdit(text, variant) {
  if (!['desktop', 'glass'].includes(variant)) throw Error('Unsupported inline edit variant.');
  text = activateInlineEdit(text, variant);
  if (text.includes(marker)) return inlineEditErrors(text, variant);
  const anchor = '  submitContextSessionEdit(', start = text.indexOf(anchor);
  if (start < 0 || text.indexOf(anchor, start + anchor.length) !== -1) throw Error('Inline edit owner missing or ambiguous.');
  const prefix = 'function ', tail = text.slice(start + 2);
  const node = parseExpressionAt(prefix + tail, 0, { ecmaVersion: 'latest' });
  const length = node.end - prefix.length, original = tail.slice(0, length);
  const local = variant === 'desktop' ? 'zc.localMode' : 'Rl.localMode';
  const secret = variant === 'desktop' ? 'K6e' : 'oHe';
  const session = /const ([\w$]+) = [\w$]+\.contextSessionUuid,/.exec(original)?.[1];
  const generation = /generationUUID: ([\w$]+),\s+abortSignal:/.exec(original)?.[1];
  if (!session || !generation) throw Error('Inline edit context identity changed.');
  let body = replaceOnce(original, /const ([\w$]+) = ([\w$]+)\(\);(\s+this\.telemetryService\.publicLogCapture\("submitted\.cmd-k")/g,
    (_, model, factory, next) => `const ${model} = ${local} ? openvisionInlineEditModel(this.aiService) : ${factory}();${next}`);
  body = replaceOnce(body, /await this\.aiService\.cmdKClient\(\)/g, `${local} ? undefined : await this.aiService.cmdKClient()`);
  body = replaceOnce(body, /endpoint: async \(([\w$]+), ([\w$]+)\) => ([\w$]+)\.streamCmdK\(new ([\w$]+)\(\1\), \2\)/g,
    (_, request, options, client, message) => `endpoint: async (${request}, ${options}) => ${local}
      ? openvisionInlineEdit({ ai: this.aiService, request: ${request}, id: ${generation},
          session: this.aiContextSessionService.getReactiveReadonlyContextSession(${session}) }, ${options}.signal, ${secret})
      : ${client}.streamCmdK(new ${message}(${request}), ${options})`);
  return inlineEditErrors(`${marker}\nimport {inlineEdit as openvisionInlineEdit, inlineEditModel as openvisionInlineEditModel} from "../code/electron-sandbox/workbench/openvision-inline-edit-provider.js";\n` +
    text.slice(0, start + 2) + body + tail.slice(length), variant);
}

function inlineEditErrors(text, variant) {
  const marker = '/* OpenVision inline error ownership */';
  if (text.includes(marker)) return inlineStreamErrors(text, variant);
  const start = text.indexOf('  submitContextSessionEdit(') + 2, tail = text.slice(start);
  const length = parseExpressionAt('function ' + tail, 0, { ecmaVersion: 'latest' }).end - 9;
  let body = tail.slice(0, length);
  const local = variant === 'desktop' ? 'zc.localMode' : 'Rl.localMode';
  const controller = /let ([\w$]+) = new AbortController\(\)/.exec(body)?.[1];
  if (!controller) throw Error('Inline cancellation owner missing.');
  const streamStart = body.indexOf('this.aiService.streamResponse(');
  if (streamStart < 0) throw Error('Inline stream response owner missing.');
  const expression = parseExpressionAt(body, streamStart, { ecmaVersion: 'latest' });
  const stream = expression.type === 'SequenceExpression' ? expression.expressions[0] : expression;
  const input = stream.arguments[0]?.properties.find(item => item.key?.name === 'streamer')?.value;
  if (!input) throw Error('Inline response stream missing.');
  const source = body.slice(input.start, input.end);
  body = body.slice(0, streamStart) + `${local} ? ${source} : ` + body.slice(streamStart);
  body = replaceOnce(body, /if \(([\w$]+)\.shouldShowImmediateErrorMessage\(([\w$]+)\)\)/g,
    (_, service, error) => `if (!${local} && ${service}.shouldShowImmediateErrorMessage(${error}))`);
  body = replaceOnce(body, /\} catch \(([\w$]+)\) \{\s+\(console\.error\(\1\), \(([\w$]+) = !0\), this\.triggerStopHook\(([\w$]+), "error", ([\w$]+)\)\);/g,
    (original, error, done, prompt, generation) => `} catch (${error}) {
      if (${local} && !${controller}.signal.aborted) this.cmdKStateService.updatePromptBar(${prompt}, "errorDetails", {
        generationUUID: ${generation}, error: { details: { title: "Inline edit", detail: openvisionInlineEditFailure(${error}) } },
      });
      (console.error(${error}), (${done} = !0), this.triggerStopHook(${prompt}, "error", ${generation}));`);
  return inlineStreamErrors(`${marker}\nimport {inlineEditFailure as openvisionInlineEditFailure} from "../code/electron-sandbox/workbench/openvision-inline-edit-provider.js";\n` + text.slice(0, start) + body + tail.slice(length), variant);
}

function inlineStreamErrors(text, variant) {
  const marker = '/* OpenVision inline stream error */';
  if (text.includes(marker)) return text;
  const start = text.indexOf('  submitContextSessionEdit(') + 2, tail = text.slice(start);
  const length = parseExpressionAt('function ' + tail, 0, { ecmaVersion: 'latest' }).end - 9;
  let body = tail.slice(0, length);
  const local = variant === 'desktop' ? 'zc.localMode' : 'Rl.localMode';
  const controller = /let ([\w$]+) = new AbortController\(\)/.exec(body)?.[1];
  const state = /([\w$]+)\.updatePromptBar\(([\w$]+), "errorDetails", \{\s+generationUUID: ([\w$]+),\s+error: ([\w$]+),/.exec(body);
  if (!controller || !state) throw Error('Inline stream error owner changed.');
  body = replaceOnce(body, /if \(![\w$]+\.localMode && ([\w$]+)\.shouldShowImmediateErrorMessage\(([\w$]+)\)\)/g,
    (original, service, error) => `${marker}
      if (${local} && !${controller}.signal.aborted) ${state[1]}.updatePromptBar(${state[2]}, "errorDetails", {
        generationUUID: ${state[3]}, error: { details: { title: "Inline edit", detail: openvisionInlineEditFailure(${error}) } },
      });
      ${original}`);
  return text.slice(0, start) + body + tail.slice(length);
}

function activateInlineEdit(text, variant) {
  const local = variant === 'desktop' ? 'zc.localMode' : 'Rl.localMode';
  const anchor = '"StartEditPrompt is already running, skipping"', index = text.indexOf(anchor);
  if (index < 0 || text.indexOf(anchor, index + 1) !== -1) throw Error('Inline action owner missing or ambiguous.');
  const start = [...text.slice(0, index).matchAll(/\bclass(?: [\w$]+)? extends [\w$]+\s*\{/g)].at(-1)?.index;
  if (start === undefined) throw Error('Inline action class missing.');
  const owner = parseExpressionAt(text, start, { ecmaVersion: 'latest' });
  const run = owner.body.body.find(item => item.key?.name === 'run')?.value.body;
  if (!run || run.end < index) throw Error('Inline action run boundary changed.');
  let body = text.slice(run.start, run.end);
  body = body.replace(`if (${local}) return;`, '');
  if (!body.includes(`if (!${local} && `))
    body = replaceOnce(body, /if \(!([\w$]+)\(([\w$]+), "cmdk"\)\)/g, `if (!${local} && !$1($2, "cmdk"))`);
  text = text.slice(0, run.start) + body + text.slice(run.end);
  const available = '  assertCmdKAvailable() {';
  const guard = `${available}\n    if (${local}) return;`;
  if (!text.includes(guard)) text = replaceOnce(text, /  assertCmdKAvailable\(\) \{/g, guard);
  return text;
}

export async function installInlineEdit(root) {
  const out = join(root, 'source/app/out');
  const helper = await readFile(join(root, 'desktop/inline-edit-provider.js'), 'utf8');
  await writeFile(join(out, 'vs/code/electron-sandbox/workbench/openvision-inline-edit-provider.js'),
    helper.replace("from './model-providers.js'", "from './openvision-model-providers.js'"));
  await copyFile(join(root, 'desktop/inline-edit-context.js'), join(out, 'vs/code/electron-sandbox/workbench/inline-edit-context.js'));
  await copyFile(join(root, 'desktop/inline-edit-ipc.mjs'), join(out, 'openvision-inline-edit-ipc.js'));
  const main = await readFile(join(out, 'main.js'), 'utf8'), statement = 'import "./openvision-inline-edit-ipc.js";';
  if (!main.includes(statement)) await backedWrite(root, 'source/app/out/main.js', statement + '\n' + main);
}
