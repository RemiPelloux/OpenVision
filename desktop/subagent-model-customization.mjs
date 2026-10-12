import { parseExpressionAt } from '../tooling/dependencies.mjs';

const marker = '/* OpenVision preserve subagent model parameters */';

export function subagentModelParameters(text, variant) {
  if (text.includes(marker)) return text;
  const flag = variant === 'desktop' ? 'zc' : variant === 'glass' ? 'Rl' : undefined;
  if (!flag) throw new Error(`Unknown workbench variant: ${variant}`);
  const pattern = new RegExp(`if \\(${flag}\\.localMode\\) return \\{ modelId: [\\w$]+, count: 1, parameters: \\[\\] \\};`, 'g');
  const matches = [...text.matchAll(pattern)];
  if (matches.length !== 1) throw new Error('Subagent parameter discard owner missing or ambiguous');
  const match = matches[0];
  const start = [...text.slice(0, match.index).matchAll(/^function [\w$]+\(/gm)].at(-1)?.index;
  if (start === undefined) throw new Error('Subagent model component missing');
  const node = parseExpressionAt(text, start, { ecmaVersion: 'latest' });
  const body = text.slice(start, node.end);
  if (node.end <= match.index || !body.includes('"subagentModelOverrides"') || !body.includes('resolveModelParametersForSubmission'))
    throw new Error('Subagent parameter submission contract changed');
  return text.slice(0, match.index) + marker + text.slice(match.index + match[0].length);
}
