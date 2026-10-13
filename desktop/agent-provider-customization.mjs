import { copyFile, mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { parseExpressionAt } from '../tooling/dependencies.mjs';
import { cachedFile } from './build-cache.mjs';
import { digest, fileHash } from './import-files.mjs';

const marker = '/* OpenVision provider-scoped Agent model identity v1 */';
function insertFunction(text, name, body) {
  const anchor = `function ${name}(`, start = text.indexOf(anchor);
  if (start < 0 || text.indexOf(anchor, start + anchor.length) !== -1)
    throw new Error(`Agent model identity owner changed: ${name}`);
  const node = parseExpressionAt(text, start, { ecmaVersion: 'latest' });
  if (node.type !== 'FunctionExpression' || node.params[0]?.name !== 'e')
    throw new Error(`Agent model identity contract changed: ${name}`);
  return text.slice(0, node.body.start + 1) + body + text.slice(node.body.start + 1);
}

export function scopedAgentProviders(text) {
  if (text.includes(marker)) return text;
  text = insertFunction(text, 'Zxe', '\n e = openvisionModelIdentity.resolveAgentModel(e);\n');
  text = insertFunction(text, 'ybe', '\n e = openvisionModelIdentity.parseModelSelection(e)?.modelId ?? e;\n');
  const pattern = /localProvider: \{\s+kind: "http",\s+endpoints: \[\s+\{ baseUrl: t\.baseUrl, \.\.\.\(void 0 !== t\.apiKey \? \{ apiKey: t\.apiKey \} : \{\}\) \},/g;
  if ([...text.matchAll(pattern)].length !== 1) throw new Error('Agent runtime provider transfer changed');
  text = text.replace(pattern, value => value.replace('kind: "http",',
    'kind: "http", openvisionProviders: t.openvisionProviders,'));
  return `${marker}\nconst openvisionModelIdentity = require("./openvision-model-identity.cjs");\n${text}`;
}

export async function installAgentProviders(root) {
  const relative = 'extensions/cursor-agent-exec/dist/main.js';
  const path = join(root, 'source/app', relative);
  const helper = await readFile(join(root, 'desktop/model-identity.js'), 'utf8');
  await writeFile(join(dirname(path), 'openvision-model-identity.cjs'),
    helper.replaceAll('export function ', 'function ') + '\nmodule.exports = { modelSelectionId, parseModelSelection, resolveAgentModel };\n');
  const recipe = digest(JSON.stringify(await Promise.all(['desktop/agent-provider-customization.mjs',
    'desktop/model-identity.js', 'desktop/build-cache.mjs', 'desktop/import-files.mjs',
    'tooling/package-lock.json'].map(file => fileHash(join(root, file))))));
  await cachedFile({ path, recipe, marker: join(root, 'build/cache/agent-providers.json') }, async () => {
    const before = await readFile(path, 'utf8'), after = scopedAgentProviders(before);
    if (after === before) return;
    const backup = join(root, 'backups/agent-providers', relative);
    await mkdir(dirname(backup), { recursive: true });
    await copyFile(path, backup, 1).catch(error => { if (error.code !== 'EEXIST') throw error; });
    await writeFile(path, after);
  });
}
