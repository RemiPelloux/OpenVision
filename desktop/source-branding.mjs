import { parseExpressionAt } from '../tooling/dependencies.mjs';
import { readFile, writeFile, mkdir, copyFile } from 'node:fs/promises';
import { join } from 'node:path';

export function brandAgentWindowTitle(text) {
  const owners = [...text.matchAll(/HEIGHT_GLASS:\s*520,?\s*}\),\s*\([\w$]+\s*=\s*/g)];
  if (owners.length !== 1) throw new Error('Expected one agent window title owner');
  const start = owners[0].index + owners[0][0].length;
  const title = parseExpressionAt(text, start, { ecmaVersion: 'latest' });
  if (title.type !== 'Literal' || !['Cursor Agents', 'OpenVision'].includes(title.value))
    throw new Error('Unexpected agent window title');
  return text.slice(0, start) + '"OpenVision"' + text.slice(title.end);
}

export async function installWindowTitles(root) {
  const backup = join(root, 'backups/window-titles');
  await mkdir(backup, { recursive: true });
  for (const file of ['main.js', 'vs/workbench/workbench.desktop.main.js', 'vs/workbench/workbench.glass.main.js']) {
    const path = join(root, 'source/app/out', file);
    const before = await readFile(path, 'utf8');
    const after = brandAgentWindowTitle(before);
    if (before === after) continue;
    await copyFile(path, join(backup, file.replaceAll('/', '_')), 1)
      .catch(error => { if (error.code !== 'EEXIST') throw error; });
    await writeFile(path, after);
  }
}

function findFlags(node) {
  if (!node || typeof node !== 'object') return [];
  const found = [];
  if (node.type === 'ObjectExpression') {
    const properties = new Map(node.properties.map(property => [property.key?.name ?? property.key?.value, property]));
    if (properties.has('extensionIsDev') && properties.has('developmentTooling') && properties.has('localMode'))
      found.push(properties);
  }
  for (const value of Object.values(node)) {
    if (Array.isArray(value)) for (const child of value) found.push(...findFlags(child));
    else if (value && typeof value === 'object') found.push(...findFlags(value));
  }
  return found;
}

export function enableLocalMode(text, path) {
  const patches = [];
  const pattern = /["']buildFlags\.js["']\s*\(\)\s*\{/g;
  for (const match of text.matchAll(pattern)) {
    const start = text.lastIndexOf('{', match.index);
    const owner = parseExpressionAt(text, start, { ecmaVersion: 'latest', sourceType: 'module' });
    if (owner.type !== 'ObjectExpression') throw new Error(`Invalid buildFlags owner: ${path}`);
    const matches = findFlags(owner);
    if (matches.length !== 1) throw new Error(`Ambiguous buildFlags initializer: ${path}`);
    for (const [name, replacement] of [['localMode', 'true'], ['enableTraceSpanCollection', 'false']]) {
      const property = matches[0].get(name);
      if (!property) continue;
      const value = property.value;
      if (value.type !== 'Literal' && value.type !== 'UnaryExpression') throw new Error('Unexpected build flag representation');
      patches.push({ start: value.start, end: value.end, before: text.slice(value.start, value.end), after: replacement, flag: name });
    }
  }
  for (const patch of [...patches].sort((a, b) => b.start - a.start))
    text = text.slice(0, patch.start) + patch.after + text.slice(patch.end);
  return { text, patches };
}

export async function productBranding(app) {
  const packagePath = join(app, 'package.json');
  const packageJson = JSON.parse(await readFile(packagePath, 'utf8'));
  packageJson.name = 'OpenVision';
  await writeFile(packagePath, JSON.stringify(packageJson, null, 2) + '\n');
  const path = join(app, 'product.json');
  const data = JSON.parse(await readFile(path, 'utf8'));
  Object.assign(data, { nameShort: 'OpenVision', nameLong: 'OpenVision', applicationName: 'openvision',
    dataFolderName: '.openvision-local', win32MutexName: 'openvision-local', win32DirName: 'OpenVision',
    win32NameVersion: 'OpenVision', win32RegValueName: 'OpenVision', win32AppUserModelId: 'Local.OpenVision.Source',
    win32ShellNameShort: 'OpenVision', urlProtocol: 'openvision-local',
    darwinBundleIdentifier: 'local.openvision.source', linuxIconName: 'openvision' });
  delete data.updateUrl;
  delete data.backupUpdateUrl;
  delete data.checksums;
  await writeFile(path, JSON.stringify(data, null, 2) + '\n');
}
