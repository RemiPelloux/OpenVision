import { copyFile, mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { cachedFile } from './build-cache.mjs';
import { digest, fileHash } from './import-files.mjs';
import { parseExpressionAt } from '../tooling/dependencies.mjs';

const marker = '/* OpenVision provider error boundary v3 */';
const target = 'extensions/cursor-agent-exec/dist/main.js';

function uniqueIndex(text, anchor) {
  const start = text.indexOf(anchor);
  if (start < 0 || text.indexOf(anchor, start + anchor.length) !== -1)
    throw new Error(`Provider error owner missing or ambiguous: ${anchor}`);
  return start;
}

function wrapTransport(text) {
  const start = uniqueIndex(text, 'er = async ({') + 'er = '.length;
  const node = parseExpressionAt(text, start, { ecmaVersion: 'latest' });
  if (node.type !== 'ArrowFunctionExpression' || node.body.type !== 'BlockStatement' ||
      !node.params[0].properties.some(p => p.key.name === 'headers' && p.value.left?.name === 't'))
    throw new Error('Provider transport header contract changed');
  return text.slice(0, node.body.start + 1) + '\ntry {' + text.slice(node.body.start + 1, node.body.end - 1) +
    '\n} catch (openvisionError) { throw openvisionProviderErrors.redactProviderError(openvisionError, t); }\n' +
    text.slice(node.body.end - 1);
}

export function redactProviderErrors(text) {
  if (text.includes(marker)) return text;
  if (text.includes('/* OpenVision provider error boundary v2 */')) {
    const anchor = 'return await n({ response: a, url: e, requestBodyValues: r.values });';
    uniqueIndex(text, anchor);
    return text.replace('/* OpenVision provider error boundary v2 */', marker).replace(anchor,
      'return openvisionProviderErrors.protectProviderResult(await n({ response: a, url: e, requestBodyValues: r.values }), t);');
  }
  // Upgrade the unpublished v1 patch without replacing other customizations.
  text = text.replace('/* OpenVision provider error redaction v1 */\nconst openvisionProviderErrors = require("./openvision-provider-errors.cjs");\n', '')
    .replace('                openvisionProviderErrors.redactProviderError(t.value, t);\n', '');
  text = wrapTransport(text);
  for (const [anchor, insertion] of [
    ['if (Lt(o)) throw o;', 'if (openvisionProviderErrors.isProviderFailure(o)) throw o;\n            '],
    ['function TEe(e) {', '\n          if (openvisionProviderErrors.isProviderFailure(e)) return false;'],
  ]) {
    const index = uniqueIndex(text, anchor);
    const position = anchor.startsWith('function') ? index + anchor.length : index;
    text = text.slice(0, position) + insertion + text.slice(position);
  }
  return redactProviderErrors(`/* OpenVision provider error boundary v2 */\nconst openvisionProviderErrors = require("./openvision-provider-errors.cjs");\n${text}`);
}

export async function installProviderErrorPolicy(root) {
  const path = join(root, 'source/app', target);
  const helper = join(root, 'desktop/provider-error-policy.js');
  const helperTarget = join(dirname(path), 'openvision-provider-errors.cjs');
  const helperSource = (await readFile(helper, 'utf8')).replaceAll('export function ', 'function ');
  await writeFile(helperTarget, `${helperSource}\nmodule.exports = {providerSecretFromHeaders, redactProviderSecret, redactProviderError, isProviderFailure, protectProviderResult};\n`);
  const recipe = digest(JSON.stringify(await Promise.all([
    fileHash(join(root, 'desktop/provider-error-customization.mjs')),
    fileHash(helper), fileHash(join(root, 'tooling/package-lock.json')),
  ])));
  await cachedFile({ path, recipe, marker: join(root, 'build/cache/provider-errors.json') }, async () => {
    const before = await readFile(path, 'utf8'), after = redactProviderErrors(before);
    if (after === before) return;
    const backup = join(root, 'backups/provider-errors', target);
    await mkdir(dirname(backup), { recursive: true });
    await copyFile(path, backup, 1).catch(error => { if (error.code !== 'EEXIST') throw error; });
    await writeFile(path, after);
  });
}
