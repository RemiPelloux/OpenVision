import { parseExpressionAt } from '../tooling/dependencies.mjs';
import { refreshSubagentSettings } from './subagent-settings-customization.mjs';

const marker = '/* OpenVision preserve subagent model parameters */';

export function subagentModelParameters(text, variant) {
  if (text.includes(marker)) return localSubagentCapabilities(text, variant);
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
  return localSubagentCapabilities(text.slice(0, match.index) + marker + text.slice(match.index + match[0].length), variant);
}

function localSubagentCapabilities(text, variant) {
  const marker = '/* OpenVision retain subagent reasoning controls */';
  if (text.includes(marker)) return refreshSubagentSettings(text, variant);
  const flag = variant === 'desktop' ? 'zc' : 'Rl';
  const pattern = new RegExp(`function ([\\w$]+)\\(([\\w$]+)\\) \\{\\s+return ${flag}\\.localMode \\? \\{ \\.\\.\\.\\2, parameterDefinitions: \\[\\], variants: \\[\\] \\} : \\2;\\s+\\}`, 'g');
  const matches = [...text.matchAll(pattern)];
  if (matches.length !== 1) throw new Error('Subagent capability mapper changed');
  const mapper = matches[0], call = `.map(${mapper[1]})`;
  if (text.split(call).length !== 2) throw new Error('Subagent capability mapper has unexpected consumers');
  return refreshSubagentSettings(`${marker}\n` + text.replace(call, '').replace(mapper[0], ''), variant);
}
