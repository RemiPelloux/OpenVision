import { parseExpressionAt } from '../tooling/dependencies.mjs';

const marker = '/* OpenVision completion accept version guard v1 */';

function visit(node, callback) {
  if (!node || typeof node.type !== 'string') return;
  callback(node);
  for (const value of Object.values(node))
    if (Array.isArray(value)) value.forEach(item => visit(item, callback));
    else if (value && typeof value.type === 'string') visit(value, callback);
}

const wordDiffAwait = node => node?.type === 'AwaitExpression' && node.argument?.type === 'CallExpression' &&
  node.argument.callee?.type === 'MemberExpression' && node.argument.callee.property?.name === 'wordDiff' &&
  node.argument.callee.object?.type === 'MemberExpression' && node.argument.callee.object.object?.type === 'ThisExpression' &&
  node.argument.callee.object.property?.name === '_diffingService';

// The recovered accept owner snapshots the suggestion range, awaits a word diff
// in the extension host and then applies edits computed from that snapshot. Full
// (Tab) and word acceptance share it; only an abort signal was checked after the
// await, so a keystroke inside that window shifted or overwrote the edit. In local
// mode the accept is dropped when the model changed during the await.
export function guardCompletionAcceptVersion(text, variant) {
  const local = { desktop: 'zc.localMode', glass: 'Rl.localMode' }[variant];
  if (!local) throw new Error('Unknown autocomplete workbench variant');
  if (text.includes(marker)) return text;
  const anchor = text.indexOf('async makeChangesOnAcceptCppSuggestion(');
  if (anchor < 0 || text.indexOf('async makeChangesOnAcceptCppSuggestion(', anchor + 1) >= 0)
    throw new Error('Completion accept owner missing or ambiguous.');
  const owner = parseExpressionAt(text, text.lastIndexOf('class ', anchor), { ecmaVersion: 'latest' });
  const method = owner.body?.body?.find(item => item.key?.name === 'makeChangesOnAcceptCppSuggestion')?.value;
  const model = method?.params[0]?.properties?.find(item => item.key?.name === 'model')?.value?.name;
  if (!method?.async || !model) throw new Error('Completion accept model owner changed.');
  const statements = method.body.body;
  const awaits = [];
  visit(method.body, node => { if (wordDiffAwait(node)) awaits.push(node); });
  const index = statements.findIndex(item => item.type === 'VariableDeclaration' &&
    item.declarations.some(declaration => wordDiffAwait(declaration.init)));
  if (awaits.length !== 1 || index < 0) throw new Error('Completion accept word diff changed.');
  // The only post-await check is the abort flag; reuse its rejection value.
  const check = statements[index + 1];
  const rejection = check?.type === 'IfStatement' && check.test.type === 'Identifier' && !check.alternate &&
    check.consequent.type === 'ReturnStatement' && check.consequent.argument;
  if (!rejection) throw new Error('Completion accept abort check changed.');
  const value = text.slice(rejection.start, rejection.end);
  const version = 'openvisionAcceptVersion';
  const before = `${marker} const ${version} = ${model}.getVersionId();\n`;
  const after = `\nif (${local} && (${model}.isDisposed() || ${model}.getVersionId() !== ${version})) return ${value};`;
  const declaration = statements[index];
  return text.slice(0, declaration.start) + before + text.slice(declaration.start, check.end) + after + text.slice(check.end);
}
