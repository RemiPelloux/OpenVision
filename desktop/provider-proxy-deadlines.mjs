import { copyFile, mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { parseExpressionAt } from '../tooling/dependencies.mjs';

const marker = '/* OpenVision request deadline ownership after proxy selection v1 */';
const relative = 'node_modules/@vscode/proxy-agent/out/index.js';

export function preserveProxyDeadlines(text) {
  if (text.includes(marker)) return text;
  const anchor = 'function createFetchPatch(params, originalFetch, resolveProxyURL, options) {';
  const start = text.indexOf(anchor);
  if (start < 0 || text.indexOf(anchor, start + 1) !== -1) throw Error('Proxy fetch owner missing or ambiguous');
  const node = parseExpressionAt(text, start, { ecmaVersion: 'latest' });
  const body = text.slice(node.body.start, node.body.end);
  if (node.type !== 'FunctionExpression' || !body.includes('getAgentOptions(init)') ||
      (body.match(/originalFetch\(input, modifiedInit\)/g) ?? []).length !== 2)
    throw Error('Proxy/certificate dispatcher selection contract changed');
  const position = node.body.start + 1;
  return text.slice(0, position) + `\n${marker}\noriginalFetch = require("./openvision-provider-dispatch.cjs").withDeadlineDispatch(originalFetch, () => undici.getGlobalDispatcher());\n` + text.slice(position);
}

export async function installProxyDeadlines(root) {
  const path = join(root, 'source/app', relative);
  const before = await readFile(path, 'utf8'), after = preserveProxyDeadlines(before);
  await copyFile(join(root, 'desktop/openvision-provider-dispatch.cjs'), join(dirname(path), 'openvision-provider-dispatch.cjs'));
  if (before === after) return;
  const backup = join(root, 'backups/provider-proxy-deadlines', relative);
  await mkdir(dirname(backup), { recursive: true });
  await copyFile(path, backup, 1).catch(error => { if (error.code !== 'EEXIST') throw error; });
  await writeFile(path, after);
}
