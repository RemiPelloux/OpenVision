import { copyFile, mkdir, readFile, readdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { parseExpressionAt } from '../tooling/dependencies.mjs';
import { digest, fileHash, safeDestination } from './import-files.mjs';
import { cachedFile } from './build-cache.mjs';

function literalObject(node) {
  if (node.type !== 'ObjectExpression') throw new Error('Extension integrity table must contain literal objects.');
  const result = Object.create(null);
  for (const property of node.properties) {
    if (property.type !== 'Property' || property.computed || property.method || property.kind !== 'init')
      throw new Error('Dynamic extension integrity metadata is unsupported.');
    const key = property.key.name ?? property.key.value;
    if (typeof key !== 'string' || key in result || !key || /[\\/]/.test(key) || key === '..')
      throw new Error('Invalid extension integrity path.');
    const value = property.value;
    if (value.type === 'Literal' && typeof value.value === 'string' && /^[a-f0-9]{64}$/.test(value.value))
      result[key] = value.value;
    else result[key] = literalObject(value);
  }
  return result;
}

export function integrityTable(text) {
  const matches = [...text.matchAll(/\bvar ([\w$]+) = (\{\s*"anysphere\.cursor-agent-worker"\s*:)/g)];
  if (matches.length !== 1) throw new Error('Extension integrity table owner is missing or ambiguous.');
  const match = matches[0];
  const start = match.index + match[0].indexOf('{');
  const node = parseExpressionAt(text, start, { ecmaVersion: 'latest' });
  if (!text.includes(` in ${match[1]}`) || !text.includes('_verifyExtensionFiles('))
    throw new Error('Extension integrity consumer is missing.');
  return { start, end: node.end, value: literalObject(node) };
}

async function extensionDirectories(app) {
  const result = new Map();
  for (const entry of await readdir(join(app, 'extensions'), { withFileTypes: true })) {
    if (!entry.isDirectory() || entry.isSymbolicLink() || entry.name === 'node_modules') continue;
    const directory = join(app, 'extensions', entry.name);
    let manifest;
    try { manifest = JSON.parse(await readFile(join(directory, 'package.json'), 'utf8')); }
    catch (error) { if (error.code === 'ENOENT') continue; throw error; }
    if (!manifest.publisher || !manifest.name) continue;
    const id = `${manifest.publisher}.${manifest.name}`;
    if (result.has(id)) throw new Error(`Duplicate extension identity: ${id}`);
    result.set(id, directory);
  }
  return result;
}

async function hashTree(directory, table, records, prefix = '') {
  const result = Object.create(null);
  for (const [name, expected] of Object.entries(table)) {
    const relative = prefix ? `${prefix}/${name}` : name;
    const path = join(directory, relative);
    await safeDestination(directory, path);
    if (typeof expected !== 'string') result[name] = await hashTree(directory, expected, records, relative);
    else {
      const sha256 = await fileHash(path);
      if (!sha256) throw new Error(`Protected extension source is missing: ${path}`);
      result[name] = sha256;
      records.push({ path: relative, previous_sha256: expected, sha256 });
    }
  }
  return result;
}

export async function buildExtensionIntegrity(root) {
  const app = join(root, 'source/app');
  const path = join(app, 'out/vs/workbench/api/node/extensionHostProcess.js');
  const before = await readFile(path, 'utf8');
  const table = integrityTable(before);
  const directories = await extensionDirectories(app);
  const next = Object.create(null);
  const records = [];
  for (const [id, tree] of Object.entries(table.value)) {
    const directory = directories.get(id);
    if (!directory) { next[id] = tree; continue; }
    const files = [];
    next[id] = await hashTree(directory, tree, files);
    records.push({ id, files });
  }
  const recipe = digest(JSON.stringify(next));
  await mkdir(join(root, 'build'), { recursive: true });
  await cachedFile({ path, marker: join(root, 'build/cache/extension-integrity.json'), recipe }, async () => {
    const replacement = JSON.stringify(next, null, 2);
    const after = before.slice(0, table.start) + replacement + before.slice(table.end);
    if (JSON.stringify(table.value) === JSON.stringify(next)) return;
    const backup = join(root, 'backups/extension-integrity', `${digest(before)}.js`);
    await mkdir(dirname(backup), { recursive: true });
    await copyFile(path, backup, 1).catch(error => { if (error.code !== 'EEXIST') throw error; });
    await writeFile(path, after);
    await writeFile(join(root, 'build/extension-integrity.json'), JSON.stringify({
      authority: 'OpenVision local build consistency; not a vendor signature',
      before_sha256: digest(before), after_sha256: digest(after), records,
      built_at: new Date().toISOString(),
    }, null, 2) + '\n');
  });
  return { extensions: records.length, files: records.reduce((sum, record) => sum + record.files.length, 0) };
}
