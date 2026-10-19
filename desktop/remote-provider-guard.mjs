// OV-703: the two workbench methods that build provider configurations for
// the extension-host Agent runtime (getLocalAgentProviderConfig and
// getLocalInferenceProviderConfig, which also feeds provider model discovery)
// refuse in remote windows before any key is read, including the original
// stored-key fallback. Tab and inline edit request from the local main process
// and are unchanged.
import { parseExpressionAt } from '../tooling/dependencies.mjs';

export const marker = '/* OpenVision remote provider guard v1 */';
const importLine = 'import {assertLocalProviderWindow as openvisionAssertLocalProviderWindow} from "../code/electron-sandbox/workbench/openvision-model-providers.js";';
export const guardedMethods = ['getLocalAgentProviderConfig', 'getLocalInferenceProviderConfig'];

function bodyStart(text, name) {
  const anchor = `async ${name}(`;
  const start = text.indexOf(anchor);
  if (start < 0 || text.indexOf(anchor, start + anchor.length) !== -1)
    throw new Error(`Remote provider guard owner missing or ambiguous: ${name}`);
  const prefix = 'async function ';
  const node = parseExpressionAt(prefix + text.slice(start + 'async '.length), 0, { ecmaVersion: 'latest', sourceType: 'module' });
  if (node.type !== 'FunctionExpression') throw new Error(`Remote provider guard owner changed: ${name}`);
  const offset = start + 'async '.length - prefix.length + node.body.start + 1;
  // Inside the provider selection error wrapper when it is already applied,
  // so the refusal is shown as a non-retryable Agent error in either order.
  const wrapped = text.slice(offset).match(/^\s*\/\* OpenVision provider selection errors \*\/\s*try \{/);
  return wrapped ? offset + wrapped[0].length : offset;
}

export function remoteProviderGuard(text) {
  if (text.includes(marker)) return text;
  const offsets = guardedMethods.map(name => bodyStart(text, name)).sort((a, b) => b - a);
  for (const offset of offsets)
    text = text.slice(0, offset) + ` ${marker} openvisionAssertLocalProviderWindow();` + text.slice(offset);
  return `${importLine}\n${text}`;
}
