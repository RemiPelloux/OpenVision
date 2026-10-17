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

const fullMarker = '/* OpenVision full completion undo boundary v1 */';

function visit(node, callback) {
  if (!node || typeof node.type !== 'string') return;
  callback(node);
  for (const value of Object.values(node))
    if (Array.isArray(value)) value.forEach(item => visit(item, callback));
    else if (value && typeof value.type === 'string') visit(value, callback);
}

const modelCall = (node, model, name) => node?.type === 'CallExpression' &&
  node.callee?.type === 'MemberExpression' && node.callee.object?.name === model &&
  node.callee.property?.name === name;

// The recovered full-accept owner closes an undo element after its edit but not
// before it, so Tab acceptance merged with the typing that triggered it.
export function isolateFullCompletionUndo(text, variant) {
  if (text.includes(fullMarker)) return text;
  const anchor = text.indexOf('updateVisibleSuggestionText(');
  if (anchor < 0) throw new Error('Full completion edit owner missing.');
  const owner = parseExpressionAt(text, text.lastIndexOf('class ', anchor), { ecmaVersion: 'latest' });
  const methods = owner.body?.body?.filter(item => item.key?.name === 'updateVisibleSuggestionText') ?? [];
  if (methods.length !== 1) throw new Error('Full completion edit owner missing or ambiguous.');
  const model = methods[0].value.params[3]?.name;
  if (!model) throw new Error('Full completion model owner changed.');
  const edits = [];
  visit(methods[0].value.body, node => {
    if (node.type !== 'SequenceExpression') return;
    node.expressions.forEach((item, index) => {
      if (modelCall(item, model, 'pushEditOperations') && modelCall(node.expressions[index + 1], model, 'pushStackElement'))
        edits.push(item);
    });
  });
  if (edits.length !== 1) throw new Error('Full completion edit statement changed.');
  const local = variant === 'desktop' ? 'zc.localMode' : 'Rl.localMode';
  const start = edits[0].start;
  return text.slice(0, start) + `${fullMarker} (${local} && ${model}.pushStackElement()), ` + text.slice(start);
}
