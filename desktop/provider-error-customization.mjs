import { copyFile, mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { cachedFile } from './build-cache.mjs';
import { digest, fileHash } from './import-files.mjs';
import { parseExpressionAt } from '../tooling/dependencies.mjs';

const marker = '/* OpenVision provider error boundary v5 */';
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
  if (text.includes('/* OpenVision provider error boundary v4 */')) {
    const convert = 'const t = new jo(e.message);';
    const detail = 'i = s ? (r ? `${s} (${r})` : s) : o,';
    uniqueIndex(text, convert); uniqueIndex(text, detail);
    return text.replace('/* OpenVision provider error boundary v4 */', marker)
      .replace(convert, 'if (openvisionProviderErrors.isProviderFailure(e)) return openvisionProviderErrors.requireContextRecovery(e);\n          ' + convert)
      .replace(detail, 'i = openvisionProviderErrors.providerFailureDetail(n ?? e, s ? (r ? `${s} (${r})` : s) : o),');
  }
  if (text.includes('/* OpenVision provider error boundary v3 */')) {
    const read = 'const i = await n.text(),\n                a = qt(n);';
    uniqueIndex(text, read);
    const classify = 'return a ? new YEe(i, l) : new Lwe(i, l);';
    uniqueIndex(text, classify);
    const detail = 'o = null != r ? r : e instanceof Error ? e.message : String(e),';
    uniqueIndex(text, detail);
    return redactProviderErrors(text.replace('/* OpenVision provider error boundary v3 */', '/* OpenVision provider error boundary v4 */')
      .replace(read, 'const i = await openvisionProviderErrors.readProviderErrorBody(n, facts => new Te({...facts, url: s, requestBodyValues: o})),\n                a = qt(n);')
      .replace(detail, 'o = n?.responseBodyTruncated ? n.message : null != r ? r : e instanceof Error ? e.message : String(e),')
      .replace(classify, 'return a || openvisionProviderErrors.isProviderFailure(e) ? new YEe(i, l) : new Lwe(i, l);'));
  }
  if (text.includes('/* OpenVision provider error boundary v2 */')) {
    const anchor = 'return await n({ response: a, url: e, requestBodyValues: r.values });';
    uniqueIndex(text, anchor);
    return redactProviderErrors(text.replace('/* OpenVision provider error boundary v2 */', '/* OpenVision provider error boundary v3 */').replace(anchor,
      'return openvisionProviderErrors.protectProviderResult(await n({ response: a, url: e, requestBodyValues: r.values }), t);'));
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
  const helperSource = (await readFile(helper, 'utf8')).replaceAll('export function ', 'function ').replaceAll('export async function ', 'async function ').replaceAll('export const ', 'const ');
  await writeFile(helperTarget, `${helperSource}\nmodule.exports = {providerSecretFromHeaders, redactProviderSecret, redactProviderError, isProviderFailure, protectProviderResult, readProviderErrorBody, requireContextRecovery, providerFailureDetail};\n`);
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
