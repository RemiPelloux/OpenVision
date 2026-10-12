import { readFile, writeFile, mkdir, copyFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { parseExpressionAt } from '../tooling/dependencies.mjs';
import { cachedFile } from './build-cache.mjs';
import { fileHash, digest } from './import-files.mjs';

const marker = '/* OpenVision Agent streaming and catalog ownership v1 */';
const options = { ecmaVersion: 'latest', sourceType: 'script' };
const relative = 'extensions/cursor-agent-host/dist/main.js';

function unique(text, anchor) {
  const start = text.indexOf(anchor);
  if (start < 0 || text.indexOf(anchor, start + anchor.length) >= 0)
    throw new Error(`Agent customization anchor missing or ambiguous: ${anchor}`);
  return start;
}

function functionAt(text, start) {
  let node = parseExpressionAt(text, start, options);
  while (node.type === 'CallExpression') node = node.callee;
  if (node.type !== 'FunctionExpression') throw new Error('Agent customization function owner mismatch');
  return node;
}

export function customizeAgent(text) {
  if (text.includes(marker)) return text;
  const relay = functionAt(text, unique(text, 'function kMe() {'));
  if (!text.slice(relay.start, relay.end).includes('const i = n.clone();'))
    throw new Error('Agent reasoning relay no longer uses the expected response clone');
  text = text.slice(0, relay.start) +
    'function kMe() { return openvisionAgentRuntime.createReasoningRelay(Wy, IMe); }' + text.slice(relay.end);
  const catalog = functionAt(text, unique(text, 'function BJe(e) {'));
  const body = text.slice(catalog.start, catalog.end);
  const loaderOffset = unique(body, 'const t = yield (function (e) {') + 'const t = yield ('.length;
  const loader = functionAt(text, catalog.start + loaderOffset);
  const loaderText = text.slice(loader.start, loader.end);
  const producerOffset = unique(loaderText, 'const n = (function (e) {') + 'const n = ('.length;
  const producer = functionAt(text, loader.start + producerOffset);
  const replacement = `async function (e) {
    return openvisionAgentRuntime.catalog(e, async () => {
      const models = await (${text.slice(producer.start, producer.end)})(e);
      return models === undefined ? undefined : dJe(models);
    });
  }`;
  text = text.slice(0, loader.start) + replacement + text.slice(loader.end);
  const obsolete = '    const xJe = new Map(),\n      TJe = new Map();';
  unique(text, obsolete);
  text = text.replace(obsolete, '');
  return `${marker}\nconst openvisionAgentRuntime = require("./openvision-agent-runtime.cjs");\n${text}`;
}

export async function installAgentRuntime(root) {
  const app = join(root, 'source/app');
  const path = join(app, relative);
  const runtime = join(root, 'desktop/agent-runtime.cjs');
  const recipe = digest(JSON.stringify(await Promise.all([
    fileHash(join(root, 'desktop/agent-customization.mjs')), fileHash(runtime),
    fileHash(join(root, 'tooling/package-lock.json')),
  ])));
  const runtimeTarget = join(dirname(path), 'openvision-agent-runtime.cjs');
  await copyFile(runtime, runtimeTarget);
  const changed = await cachedFile({ path, marker: join(root, 'build/cache/agent-runtime.json'), recipe }, async () => {
    const before = await readFile(path, 'utf8');
    const after = customizeAgent(before);
    if (before === after) return;
    const backup = join(root, 'backups/agent-runtime', relative);
    await mkdir(dirname(backup), { recursive: true });
    await copyFile(path, backup, 1).catch(error => { if (error.code !== 'EEXIST') throw error; });
    await writeFile(path, after);
  });
  console.log(`Agent stream and catalog: ${changed ? 'verified' : 'unchanged (cached)'}`);
}
