import { parseExpressionAt } from '../tooling/dependencies.mjs';

const marker = '/* OpenVision preserve explicit reasoning selections */';
const options = { ecmaVersion: 'latest', sourceType: 'module' };
const helperImport = 'import {unavailableReasoning as openvisionUnavailableReasoning} from "../code/electron-sandbox/workbench/model-reasoning.js";';

function insertMethod(text, name, makeGuard) {
  const matches = [...text.matchAll(new RegExp(`${name}\\(([^)]*)\\) \\{`, 'g'))];
  if (matches.length !== 1) throw new Error(`Reasoning selection owner changed: ${name}`);
  const match = matches[0];
  const node = parseExpressionAt('function ' + text.slice(match.index), 0, options);
  const start = match.index + node.body.start + 1 - 'function '.length;
  return text.slice(0, start) + makeGuard(match[1].split(', ')) + text.slice(start);
}

export function preserveReasoningSelection(text, variant) {
  if (text.includes(marker)) return refreshReasoningCatalog(text, variant);
  const flag = variant === 'desktop' ? 'zc' : variant === 'glass' ? 'Rl' : undefined;
  if (!flag) throw new Error(`Unknown reasoning selection variant: ${variant}`);
  const submission = /resolveModelParametersForSubmission\([\w$]+, [\w$]+, [\w$]+\) \{[\s\S]*?return ([\w$]+)\([\w$]+, [\w$]+, [\w$]+\)\?\.parameterValues \?\? \[\];/;
  const solver = submission.exec(text)?.[1];
  if (!solver) throw new Error('Reasoning submission solver changed');
  const normalizer = new RegExp(`function ([\\w$]+)\\(([\\w$]+), ([\\w$]+), ([\\w$]+)\\) \\{\\s+return [\\w$]+\\(\\2, \\3, \\{ maxMode: \\4 \\}\\);\\s+\\}`);
  const match = normalizer.exec(text);
  if (!match || [...text.matchAll(new RegExp(normalizer.source, 'g'))].length !== 1)
    throw new Error('Reasoning normalization owner changed');
  const [, , model, parameters] = match;
  text = text.replace(match[0], match[0].replace('{', `{\n  if (${flag}.localMode && ${model}.providerId) return ${parameters};`));
  text = insertMethod(text, 'resolveModelParametersForSubmission', ([id, parameters]) => `
    if (${flag}.localMode && ${id}?.startsWith('openvision-model:'))
      return ${parameters}?.length ? ${parameters} : (this.getModelParameterPreferences(${id})?.parameters ?? []);
`);
  const labelAnchor = '/* OpenVision readable unavailable model labels */';
  const labelStart = text.indexOf(labelAnchor);
  const label = /const ([\w$]+) = [\w$]+\(([\w$]+), ([\w$]+)\.parameters, [\w$]+\);/.exec(text.slice(labelStart));
  if (labelStart < 0 || !label) throw new Error('Reasoning trigger label owner changed');
  const [, , catalog, selection] = label;
  const guard = `if (${flag}.localMode && ${catalog}.providerId) {
    const unavailable = openvisionUnavailableReasoning(${selection}.parameters,
      ${catalog}.parameterDefinitions.find(item => item.id === 'reasoning')?.parameterType?.enumParameter?.values.map(item => item.value) ?? []);
    if (unavailable) return \`\${${catalog}.inputboxShortModelName || ${catalog}.clientDisplayName} · \${unavailable} (unavailable)\`;
  }
  `;
  const offset = labelStart + label.index;
  return refreshReasoningCatalog(`${marker}\n${helperImport}\n` + text.slice(0, offset) + guard + text.slice(offset), variant);
}

function refreshReasoningCatalog(text, variant) {
  const marker = '/* OpenVision refresh local catalog metadata */';
  if (text.includes(marker)) return allowDefaultRecovery(text, variant);
  const flag = variant === 'desktop' ? 'zc' : 'Rl';
  const comparator = /function [\w$]+\(([\w$]+), ([\w$]+), [\w$]+ = !1\) \{\s+if \(\1.length !== \2.length\) return !1;[\s\S]{0,380}?\1\[[\w$]+\]\?\.defaultOn !== \2\[[\w$]+\]\?\.defaultOn/;
  const match = comparator.exec(text);
  if (!match) throw new Error('Model metadata comparison owner changed');
  const [, current, previous] = match;
  const start = match.index + match[0].indexOf('{') + 1;
  text = text.slice(0, start) + `\n  ${marker}
    if (${flag}.localMode && (${current}.some(model => model.providerId) || ${previous}.some(model => model.providerId)))
      return ${current}.length === ${previous}.length && ${current}.every((model, index) => model === ${previous}[index]);
` + text.slice(start);
  const preview = /if \(([\w$]+)\.variants.length !== 0\) return ([\w$]+)\(\1, ([\w$]+), ([\w$]+)\);/g;
  if ([...text.matchAll(preview)].length !== 1) throw new Error('Reasoning preview owner changed');
  return allowDefaultRecovery(text.replace(preview, (_match, model, solve, parameters, max) =>
    `if (${model}.variants.length !== 0) return ${solve}(${model}, ${parameters}, ${max}) ??
      (${flag}.localMode && ${model}.providerId ? ${model}.variants[0] : undefined);`), variant);
}

function allowDefaultRecovery(text, variant) {
  const marker = '/* OpenVision selectable provider default recovery */';
  if (text.includes(marker)) return text;
  const anchor = /\{ modelId: ([\w$]+), parameter: ([\w$]+), currentValue: ([\w$]+), onValueChange: [\w$]+ \} = [\w$]+,/;
  const match = anchor.exec(text);
  if (!match) throw new Error('Reasoning parameter control owner changed');
  const start = [...text.slice(0, match.index).matchAll(/^function [\w$]+\(/gm)].at(-1).index;
  const node = parseExpressionAt(text, start, options);
  const body = text.slice(start, node.end), flag = variant === 'desktop' ? 'zc' : 'Rl';
  const singleton = /if \(([\w$]+)\.length <= 1\) \{/g;
  if ([...body.matchAll(singleton)].length !== 1) throw new Error('Singleton reasoning control changed');
  const after = body.replace(singleton, (_match, values) => `${marker}
  if (${values}.length <= 1 && !(${flag}.localMode && ${match[1]}?.startsWith('openvision-model:'))) {`);
  return text.slice(0, start) + after + text.slice(node.end);
}
