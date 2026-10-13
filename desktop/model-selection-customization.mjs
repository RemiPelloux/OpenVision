import { parseExpressionAt } from '../tooling/dependencies.mjs';

const marker = '/* OpenVision unavailable choices require explicit replacement */';
const options = { ecmaVersion: 'latest', sourceType: 'module' };

export function strictModelSelection(text, variant) {
  if (text.includes(marker)) return text;
  const flag = variant === 'desktop' ? 'zc' : variant === 'glass' ? 'Rl' : undefined;
  if (!flag) throw new Error(`Unknown model selection variant: ${variant}`);
  const method = /resolvePersistedModelIdForRead\(([\w$]+), ([\w$]+)\) \{/g;
  if ([...text.matchAll(method)].length !== 1) throw new Error('Persisted model identity owner changed');
  text = text.replace(method, (anchor, id, models) => `${anchor}
    ${marker}
    if (${flag}.localMode) return {modelId: this.resolveToCatalogName(${id}, ${models}), isFallback: false};`);
  const diagnostic = '"Model reset by fixUnavailable"';
  const index = text.indexOf(diagnostic);
  if (index < 0 || text.indexOf(diagnostic, index + diagnostic.length) !== -1)
    throw new Error('Unavailable-model replacement owner changed');
  const match = [...text.slice(0, index).matchAll(/\([\w$]+ = (\([\w$]+\) => \{)/g)].at(-1);
  if (!match) throw new Error('Unavailable-model replacement function missing');
  const start = match.index + match[0].indexOf(match[1]);
  const owner = parseExpressionAt(text, start, options);
  if (owner.type !== 'ArrowFunctionExpression' || owner.end < index || owner.params[0]?.type !== 'Identifier')
    throw new Error('Unavailable-model replacement contract changed');
  const parameter = owner.params[0].name, body = text.slice(owner.body.start, owner.body.end);
  if (!body.includes('modelConfigService:') || !body.includes('specificModelField:'))
    throw new Error('Unavailable-model replacement fields changed');
  const guard = `\n    if (${flag}.localMode) return ${parameter}.modelConfigService.getModelConfig(${parameter}.specificModelField);\n`;
  return text.slice(0, owner.body.start + 1) + guard + text.slice(owner.body.start + 1);
}

export function providerSelectionErrors(text) {
  const marker = '/* OpenVision provider selection errors */';
  if (text.includes(marker)) return text;
  const constructors = [...text.matchAll(/case "NonRetriableError":\s+return new ([\w$]+)\([\w$]+\.message,/g)];
  if (constructors.length !== 1) throw new Error('Native non-retryable Agent error contract changed');
  const anchor = 'async getLocalAgentProviderConfig(', start = text.indexOf(anchor);
  if (start < 0 || text.indexOf(anchor, start + anchor.length) !== -1)
    throw new Error('Agent provider configuration owner changed');
  const prefix = 'async function ', expression = prefix + text.slice(start + 'async '.length);
  const node = parseExpressionAt(expression, 0, options), offset = start + 'async '.length - prefix.length;
  const bodyStart = node.body.start + offset + 1, bodyEnd = node.body.end + offset - 1;
  const guard = `\n${marker}\ntry {${text.slice(bodyStart, bodyEnd)}} catch (error) {
    if (error?.name !== 'LocalProviderError') throw error;
    throw new ${constructors[0][1]}(error.message, {cause: error, displayInfo: {
      title: 'Choose an available model', detail: error.message, isRetryable: false, showRequestId: false
    }});
  }\n`;
  return text.slice(0, bodyStart) + guard + text.slice(bodyEnd);
}
