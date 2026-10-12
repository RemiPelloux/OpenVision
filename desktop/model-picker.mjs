import { parseExpressionAt } from '../tooling/dependencies.mjs';

const marker = '/* OpenVision local model parameter menu */';
const options = { ecmaVersion: 'latest', sourceType: 'module' };

// Own the shared native picker, so Agent and plan execution use the same
// parameter submenu, keyboard navigation and saved model preferences.
export function localModelPicker(text, variant) {
  if (text.includes(marker)) return text;
  const anchors = [...text.matchAll(/showModelOptionsOnHover:\s*[\w$]+,\s*displayConfiguration:\s*[\w$]+,\s*labels:/g)];
  if (anchors.length !== 1) throw new Error('Native model picker owner missing or ambiguous');
  const index = anchors[0].index;
  const start = [...text.slice(0, index).matchAll(/^function [\w$]+\(/gm)].at(-1)?.index;
  if (start === undefined) throw new Error('Native model picker function missing');
  const node = parseExpressionAt(text, start, options);
  const props = node.params[0]?.name;
  const body = text.slice(node.body.start, node.body.end);
  if (node.type !== 'FunctionExpression' || node.end <= index || !props ||
      !body.includes('"hover-options" : "legacy"') || !body.includes('disableModelParameterEditing:'))
    throw new Error('Native model picker contract changed');
  const flag = variant === 'desktop' ? 'zc' : variant === 'glass' ? 'Rl' : undefined;
  if (!flag) throw new Error(`Unknown workbench variant: ${variant}`);
  const guard = `\n  ${marker}
  if (${flag}.localMode && ${props}.models?.some(model => model.providerId)) {
    ${props} = {...${props}, showModelOptionsOnHover: true, disableModelParameterEditing: false};
  }
`;
  return text.slice(0, node.body.start + 1) + guard + text.slice(node.body.start + 1);
}
