import { parseExpressionAt } from '../tooling/dependencies.mjs';

const marker = '/* OpenVision readable model menu v1 */';
const options = { ecmaVersion: 'latest', sourceType: 'module' };

function owner(text, pattern) {
  const matches = [...text.matchAll(pattern)];
  if (matches.length !== 1) throw new Error('Model menu layout owner missing or ambiguous');
  const start = [...text.slice(0, matches[0].index).matchAll(/^function [\w$]+\(/gm)].at(-1)?.index;
  if (start === undefined) throw new Error('Model menu layout function missing');
  const node = parseExpressionAt(text, start, options);
  if (node.end <= matches[0].index || node.params[0]?.type !== 'Identifier')
    throw new Error('Model menu layout contract changed');
  return node;
}

function insert(text, node, body) {
  return text.slice(0, node.body.start + 1) + '\n' + body + '\n' + text.slice(node.body.start + 1);
}

export function readableModelMenu(text, variant) {
  if (text.includes(marker)) return text;
  const flag = variant === 'desktop' ? 'zc' : variant === 'glass' ? 'Rl' : undefined;
  if (!flag) throw new Error(`Unknown workbench variant: ${variant}`);
  const section = owner(text, /models:\s*[\w$]+, onShowAllModels:\s*[\w$]+, renderModel:\s*[\w$]+, title:/g);
  const sectionBody = text.slice(section.start, section.end);
  const jsx = sectionBody.match(/([\w$]+)\("span",/u)?.[1];
  if (!jsx) throw new Error('Model section renderer missing');
  let props = section.params[0].name;
  text = insert(text, section, `${marker}
  if (${flag}.localMode && ${props}.models?.[0]?.providerId) {
    ${props} = {...${props}, title: ${jsx}("span", {
      className: "openvision-provider-title", children: ${props}.models[0].tagline || "Custom provider"
    }), titleTrailing: String(${props}.models.length)};
  }`);
  const row = owner(text, /"data-model-picker-item-name":/g);
  props = row.params[0].name;
  text = insert(text, row, `/* OpenVision model name and reasoning hierarchy */
  if (${flag}.localMode && ${props}.model?.providerId) {
    const model = ${props}.model;
    const selected = ${props}.variant?.parameterValues?.find(value => value.id === "reasoning");
    const definition = model.parameterDefinitions?.find(value => value.id === "reasoning");
    const effort = definition?.parameterType?.enumParameter?.values?.find(value => value.value === selected?.value);
    ${props} = {...${props}, variant: {...${props}.variant, displayName: model.inputboxShortModelName || model.name},
      tagline: effort?.displayName === "Provider default" ? "Default" : effort?.displayName};
  }`);
  const root = owner(text, /showModelOptionsOnHover:\s*[\w$]+,\s*displayConfiguration:\s*[\w$]+,\s*labels:/g);
  props = root.params[0].name;
  return insert(text, root, `/* OpenVision model menu dimensions */
  if (${flag}.localMode && ${props}.models?.some(model => model.providerId)) {
    ${props} = {...${props}, menuWidth: 360, menuMaxHeight: 560};
  }`);
}
