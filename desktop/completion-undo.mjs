import { parseExpressionAt } from '../tooling/dependencies.mjs';

const marker = '/* OpenVision partial completion undo boundary v1 */';

export function isolatePartialCompletionUndo(text, variant) {
  if (text.includes(marker)) return text;
  const anchor = text.indexOf('makeEditsForNextWordAccept({');
  const owner = parseExpressionAt(text, text.lastIndexOf('class ', anchor), { ecmaVersion: 'latest' });
  const method = owner.body.body.find(item => item.key?.name === 'makeEditsForNextWordAccept');
  const source = text.slice(method?.start, method?.end);
  const matches = [...source.matchAll(/const [\w$]+ = ([\w$]+)\.pushEditOperations\(/g)];
  if (!method || matches.length !== 1) throw new Error('Partial completion edit owner changed.');
  const match = matches[0], start = method.start + match.index;
  const model = method.value.params[0]?.properties?.find(item => item.key?.name === 'model')?.value?.name;
  if (!model || model !== match[1]) throw new Error('Partial completion model owner changed.');
  const callStart = text.indexOf(`${model}.pushEditOperations(`, start);
  const call = parseExpressionAt(text, callStart, { ecmaVersion: 'latest' });
  if (text[call.end] !== ';') throw new Error('Partial completion edit statement changed.');
  const local = variant === 'desktop' ? 'zc.localMode' : 'Rl.localMode';
  const boundary = `if (${local}) ${model}.pushStackElement();\n`;
  return text.slice(0, start) + marker + '\n' + boundary + text.slice(start, call.end + 1) +
    '\n' + boundary + text.slice(call.end + 1);
}
