import { parseExpressionAt } from '../tooling/dependencies.mjs';

const marker = '/* OpenVision bounded native model results */';
const options = { ecmaVersion: 'latest', sourceType: 'module' };

export function paginateModelPicker(text, variant) {
  if (text.includes(marker)) return text;
  const matches = [...text.matchAll(/\{ visibleModels: ([\w$]+), hasHiddenModels: [\w$]+ \} =/g)];
  if (matches.length !== 1) throw new Error('Model search result owner changed');
  const start = [...text.slice(0, matches[0].index).matchAll(/^function [\w$]+\(/gm)].at(-1)?.index;
  if (start === undefined) throw new Error('Model list function missing');
  const node = parseExpressionAt(text, start, options), body = text.slice(node.start, node.end);
  const context = node.body.body[0]?.declarations?.[0]?.id;
  const state = context?.properties?.find(property => property.key.name === 'state')?.value?.name;
  const models = context?.properties?.find(property => property.key.name === 'models')?.value?.name;
  const menuContext = node.body.body[0]?.declarations?.[1]?.id;
  const setActiveIndex = menuContext?.properties?.find(property => property.key.name === 'setActiveIndex')?.value?.name;
  const render = /([\w$]+) = [\w$]+\(([\w$]+), [\w$]+\),\s+\{ visibleModels:/.exec(body);
  const section = /([\w$]+)\(([\w$]+), \{ models: [\w$]+\.leading, renderModel:/.exec(body);
  const returned = node.body.body.findLast(item => item.type === 'ReturnStatement');
  if (!state || !models || !setActiveIndex || !render || !section || !returned) throw new Error('Model list contract changed');
  const sectionStart = text.indexOf(`function ${section[2]}(`);
  const sectionNode = parseExpressionAt(text, sectionStart, options);
  const menu = /\(([\w$]+)\.Item, \{/.exec(text.slice(sectionNode.start, sectionNode.end))?.[1];
  if (!menu) throw new Error('Native model menu item contract changed');
  const flag = variant === 'desktop' ? 'zc' : variant === 'glass' ? 'Rl' : undefined;
  if (!flag) throw new Error(`Unknown workbench variant: ${variant}`);
  const injected = `${marker}\nif (${flag}.localMode && ${models}.some(model => model.providerId))
    return ${section[1]}(OpenVisionModelPages, {models: ${matches[0][1]}, selectedId: ${state}.selections[0]?.modelId,
      query: ${render[2]}, renderModel: ${render[1]}, Section: ${section[2]}, Item: ${menu}.Item,
      setActiveIndex: ${setActiveIndex}}, ${render[2]});\n  `;
  const grouped = /if \(([\w$]+)\.length === 0\) return \[\];\s+const ([\w$]+) = \1\.filter/g;
  if ([...body.matchAll(grouped)].length !== 1) throw new Error('Native model section grouping changed');
  const beforeReturn = text.slice(node.start, returned.start).replace(grouped, value =>
    `if (${flag}.localMode && ${models}.some(model => model.providerId)) return [];\n      ${value}`);
  return 'import {ModelPages as OpenVisionModelPages} from "./openvision-model-picker-pages.js";\n' +
    text.slice(0, node.start) + beforeReturn + injected + text.slice(returned.start);
}
