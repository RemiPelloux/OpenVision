import { parseExpressionAt } from '../tooling/dependencies.mjs';

const options = { ecmaVersion: 'latest', sourceType: 'module' };

export function classAt(text, index) {
  const starts = [...text.slice(0, index).matchAll(/\bclass(?:\s+[\w$]+)?(?:\s+extends\s+[\w$.]+)?\s*\{/g)];
  for (const start of starts.reverse()) {
    let node;
    try { node = parseExpressionAt(text, start.index, options); }
    catch (error) { if (error instanceof SyntaxError) continue; throw error; }
    while (node.type === 'CallExpression' || node.type === 'MemberExpression') node = node.callee ?? node.object;
    if (node.type === 'ClassExpression' && node.end > index) return node;
  }
  throw new Error(`Telemetry class owner missing at ${index}`);
}

export function functionAt(text, index) {
  const starts = [...text.slice(0, index).matchAll(/^(?:async )?function [\w$]+\(/gm)];
  for (const start of starts.reverse()) {
    let node = parseExpressionAt(text, start.index, options);
    while (node.type === 'CallExpression') node = node.callee;
    if (node.type === 'FunctionExpression' && node.end > index) return node;
  }
  throw new Error(`Telemetry function owner missing at ${index}`);
}

export function replaceBody(node, code, reason) {
  return { start: node.body.start, end: node.body.end,
    after: `{ /* OpenVision: ${reason} */ ${code} }`, reason };
}

export function replaceMethods(owner, replacements) {
  return Object.entries(replacements).flatMap(([name, code]) => {
    const methods = owner.body.body.filter(item => item.key?.name === name && item.value?.body);
    if (!methods.length) throw new Error(`Telemetry method contract missing: ${name}`);
    return methods.map(method => replaceBody(method.value,
      typeof code === 'function' ? code(method.value) : code, `disabled ${name}`));
  });
}

export function applyTelemetryPatches(text, patches) {
  let end = text.length;
  for (const patch of patches.sort((a, b) => b.start - a.start)) {
    if (patch.end > end) throw new Error(`Overlapping telemetry patches: ${patch.reason}`);
    text = text.slice(0, patch.start) + patch.after + text.slice(patch.end);
    end = patch.start;
  }
  return text;
}

export { parseExpressionAt, options };
