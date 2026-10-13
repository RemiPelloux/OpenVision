import { parseExpressionAt } from '../tooling/dependencies.mjs';

const marker = '/* OpenVision autocomplete cancellation v1 */';

function completionOwner(text) {
  const anchor = 'async getStream({';
  const start = text.indexOf(anchor);
  if (start < 0 || text.indexOf(anchor, start + anchor.length) !== -1)
    throw new Error('Autocomplete stream owner missing or ambiguous');
  const owner = parseExpressionAt(text, text.lastIndexOf('class ', start), { ecmaVersion: 'latest' });
  if (owner.type !== 'ClassExpression') throw new Error('Autocomplete class contract changed');
  const methods = owner.body.body;
  const request = methods.find(item => item.key?.name === 'getStream');
  const stream = methods.find(item => item.key?.name === 'streamCpp');
  if (!request?.value.async || !stream?.value.async || !stream.value.generator)
    throw new Error('Autocomplete method contract changed');
  return { request: request.value, stream: stream.value };
}

function requestGuards(request) {
  const signal = request.params[0]?.properties?.find(item => item.key?.name === 'abortController')?.value;
  const workspace = request.body.body.filter(statement => statement.type === 'VariableDeclaration' &&
    statement.declarations.some(item => item.init?.callee?.property?.name === 'getOrCreateUniqueWorkspaceId'));
  if (signal?.type !== 'Identifier' || workspace.length !== 1)
    throw new Error('Autocomplete request dispatch boundary changed');
  const guard = `if (${signal.name}.signal.aborted) return null;`;
  return [{ at: request.body.start + 1, text: `\n${marker}\n${guard}\n` },
    { at: workspace[0].start, text: `${guard}\n` }];
}

function responseGuards(stream) {
  const [signal, provider, generation] = stream.params;
  const loop = stream.body.body.find(item => item.type === 'ForStatement');
  const flush = loop?.body?.body.find(item => item.type === 'VariableDeclaration' &&
    item.declarations.some(value => value.init?.type === 'AwaitExpression' &&
      value.init.argument?.callee?.object?.name === provider?.name &&
      value.init.argument?.callee?.property?.name === 'flushCpp' &&
      value.init.argument?.arguments[0]?.name === generation?.name));
  const buffer = loop?.body?.body.find(item => item.type === 'ForOfStatement');
  if (signal?.type !== 'Identifier' || !flush || buffer?.body?.type !== 'BlockStatement')
    throw new Error('Autocomplete response boundary changed');
  const guard = `\nif (${signal.name}.signal.aborted) return;\n`;
  return [{ at: flush.end, text: guard }, { at: buffer.body.start + 1, text: guard }];
}

export function completionCancellation(text) {
  if (text.includes(marker)) return text;
  const { request, stream } = completionOwner(text);
  const patches = [...requestGuards(request), ...responseGuards(stream)];
  for (const patch of patches.sort((left, right) => right.at - left.at))
    text = text.slice(0, patch.at) + patch.text + text.slice(patch.at);
  return text;
}
