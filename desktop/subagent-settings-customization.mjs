import { parseExpressionAt } from '../tooling/dependencies.mjs';

const marker = '/* OpenVision refresh subagent model capabilities */';
const options = { ecmaVersion: 'latest' };

export function refreshSubagentSettings(text, variant) {
  if (text.includes(marker)) return text;
  const index = text.indexOf('/* OpenVision preserve subagent model parameters */');
  const start = [...text.slice(0, index).matchAll(/^function [\w$]+\(/gm)].at(-1)?.index;
  if (index < 0 || start === undefined) throw new Error('Subagent settings owner missing');
  const node = parseExpressionAt(text, start, options);
  let body = text.slice(start, node.end);
  const selector = /function ([\w$]+)\(([\w$]+)\) \{\s+return \[\.\.\.\(\2.localProviderAgentModelIds \?\? \[\]\)\];\s+\}/g;
  const matches = [...text.matchAll(selector)];
  if (matches.length !== 1) throw new Error('Subagent catalog subscription owner changed');
  const [match] = matches, [name, state] = match.slice(1);
  const binding = new RegExp(`([\\w$]+) = [\\w$]+\\([\\w$]+, ${name}\\),`).exec(body)?.[1];
  if (!binding || body.split(`${binding}.map(`).length !== 2) throw new Error('Subagent catalog subscription consumer changed');
  body = body.replace(`${binding}.map(`, `${binding}.ids.map(`);
  body = retainUnavailableSelection(body, variant);
  body = selectionStatus(body, variant);
  text = text.slice(0, start) + body + text.slice(node.end);
  return `${marker}\nimport {subagentSelectionNotice as openvisionSubagentSelectionNotice} from "../code/electron-sandbox/workbench/model-reasoning.js";\n` +
    text.replace(match[0], `function ${name}(${state}) {
  return {ids: [...(${state}.localProviderAgentModelIds ?? [])], catalog: ${state}.availableDefaultModels2};
}`);
}

function retainUnavailableSelection(body, variant) {
  const flag = variant === 'desktop' ? 'zc' : 'Rl';
  const fallback = new RegExp(`if \\(${flag}\\.localMode && [\\w$]+ !== void 0 && [\\w$]+\\([\\w$]+\\.modelId, [\\w$]+\\) === void 0\\) \\{[^{}]+break [\\w$]+;\\s+\\}`, 'g');
  if ([...body.matchAll(fallback)].length !== 1) throw new Error('Unavailable subagent selection fallback changed');
  return body.replace(fallback, '');
}

function selectionStatus(body, variant) {
  const override = /([\w$]+) = [\w$]+\.explore,/.exec(body)?.[1];
  const service = /([\w$]+)\.getAvailableDefaultModels\(\)/.exec(body)?.[1];
  if (!override || !service) throw new Error('Subagent selection state changed');
  const node = parseExpressionAt(body, 0, options);
  const returned = node.body.body.at(-1);
  if (returned.type !== 'ReturnStatement' || returned.argument?.type !== 'SequenceExpression')
    throw new Error('Subagent settings result changed');
  const value = returned.argument.expressions.at(-1);
  if (value.type !== 'Identifier') throw new Error('Subagent settings result is not a component');
  const jsx = variant === 'desktop' ? 'Av' : 'W_';
  body = body.slice(0, value.start) + `${jsx}("div", {children: [${value.name},
    openvisionNotice ? ${jsx}("p", {role: "status", className: "openvision-subagent-status", children: openvisionNotice}) : null
  ]})` + body.slice(value.end);
  return body.slice(0, returned.start) + `const openvisionNotice = openvisionSubagentSelectionNotice(${override}, ${service}.getAvailableDefaultModels());\n  ` + body.slice(returned.start);
}
