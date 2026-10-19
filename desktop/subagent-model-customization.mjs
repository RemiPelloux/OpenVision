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

// OV-104: a Task row labelled its child "Provider default" while the child request
// carried inherited High (or an explicit Explore level). The child runs as its own
// local composer whose saved selection holds no parameters, so its submission uses
// resolveModelParametersForSubmission's per-model preference. The label resolved the
// same model through the catalog without parameters and showed the default variant.
// The label now asks the same submission resolver, so it names what is actually sent.
const statusMarker = '/* OpenVision Task status shows effective child reasoning */';
const escape = value => value.replaceAll('$', '\\$');
const statusOwner = /function ([\w$]+)\(([\w$]+), ([\w$]+), ([\w$]+)\) \{\s+const ([\w$]+) = ([\w$]+)\(\3, \2\);\s+if \(\5\) return ([\w$]+)\(\5, \3, \4\?\.maxMode\);/g;

export function subagentStatusReasoning(text, variant) {
  if (text.includes(statusMarker)) return text;
  const flag = variant === 'desktop' ? 'zc' : variant === 'glass' ? 'Rl' : undefined;
  if (!flag) throw new Error(`Unknown workbench variant: ${variant}`);
  const owners = [...text.matchAll(statusOwner)];
  if (owners.length !== 1) throw new Error('Task subagent model label owner missing or ambiguous');
  const [match, name, , models, config, resolved, , format] = owners[0];
  const node = parseExpressionAt(text, owners[0].index, { ecmaVersion: 'latest' });
  let body = text.slice(node.start, node.end);
  const selected = new RegExp(`const ([\\w$]+) = ${escape(config)}\\?\\.selectedModels\\?\\.\\[0\\];\\s+return \\1 \\? ${escape(format)}\\(\\{ modelId: \\1\\.modelId, parameters: \\1\\.parameters \\}, ${escape(models)}, ${escape(config)}\\.maxMode\\) : "";`);
  if (!selected.test(body) || !body.startsWith(`function ${name}(`))
    throw new Error('Task subagent model label contract changed');
  body = body.replace(match.slice(0, match.indexOf(') {')), `${match.slice(0, match.indexOf(') {'))}, openvisionModels`)
    .replace(`return ${format}(${resolved}, ${models}, ${config}?.maxMode);`,
      `return ${format}(openvisionEffectiveTaskModel(${resolved}, ${config}, openvisionModels), ${models}, ${config}?.maxMode);`)
    .replace(selected, (value, item) => value.replace(`${format}({ modelId: ${item}.modelId, parameters: ${item}.parameters }`,
      `${format}(openvisionEffectiveTaskModel({ modelId: ${item}.modelId, parameters: ${item}.parameters }, ${config}, openvisionModels)`));
  if (body.split('openvisionEffectiveTaskModel(').length !== 3) throw new Error('Task subagent model label rewrite incomplete');
  const helper = `${statusMarker}
function openvisionEffectiveTaskModel(model, config, service) {
  if (!${flag}.localMode || typeof service?.resolveModelParametersForSubmission !== "function") return model;
  const saved = config?.selectedModels?.find((item) => item.modelId === model.modelId)?.parameters ?? [];
  const parameters = service.resolveModelParametersForSubmission(model.modelId, saved, config?.maxMode) ?? [];
  return { modelId: model.modelId, parameters: parameters.map((item) => ({ id: item.id, value: item.value })) };
}
`;
  text = text.slice(0, node.start) + helper + body + text.slice(node.end);
  // Each row renderer receives the workbench services as its first parameter.
  const calls = [...text.matchAll(new RegExp(`(?<![\\w$.])${escape(name)}\\(`, 'g'))]
    .filter(call => !text.slice(Math.max(0, call.index - 9), call.index).endsWith('function '));
  if (calls.length !== 2) throw new Error('Task subagent model label consumers changed');
  for (const call of calls.reverse()) {
    const owner = [...text.slice(0, call.index).matchAll(/^function [\w$]+\(([\w$]+)/gm)].at(-1);
    const parsed = parseExpressionAt(text, call.index, { ecmaVersion: 'latest' });
    const expression = parsed.type === 'SequenceExpression' ? parsed.expressions[0] : parsed;
    if (expression.type !== 'CallExpression' || expression.arguments.length !== 3 || !owner)
      throw new Error('Task subagent model label call contract changed');
    const scope = text.slice(owner.index, call.index);
    if (!scope.includes('composerDataService')) throw new Error('Task subagent model label services changed');
    text = text.slice(0, expression.end - 1) + `, ${owner[1]}.modelConfigService` + text.slice(expression.end - 1);
  }
  return text;
}
