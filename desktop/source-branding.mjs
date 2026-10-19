import { parseExpressionAt, tokenizer } from '../tooling/dependencies.mjs';
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

// End offset (exclusive) of the block whose `{` is at `open`, using JavaScript tokens
// so braces in strings, templates and regular expressions are not miscounted.
export function blockEnd(text, open) {
  if (text[open] !== '{') throw new Error('Block must start at an opening brace');
  let depth = 0;
  for (const token of tokenizer(text.slice(open), { ecmaVersion: 'latest', sourceType: 'module' })) {
    const label = token.type.label;
    if (label === '{' || label === '${') depth++;
    else if (label === '}' && --depth === 0) return open + token.end;
  }
  throw new Error('Unterminated block');
}

const emptyScreenMarker = '/* OpenVision: local profiles have no hosted sign-in */';
export const emptyScreenLogo = 'openvision-lockup.png';

// The empty editor window (no folder) is Cursor's landing screen: its lockup image,
// "Cursor logo" alternative text and a hosted "Sign in" link. Brand the image and
// remove the sign-in fallback; New/Open project and Recent projects stay.
export function brandEmptyEditorScreen(text) {
  const lockups = [...text.matchAll(/"(\.\.\/\.\.\/\.\.\/workbench\/browser\/parts\/editor\/media\/)lockup-horizontal-(?:dark|light)\.png"/g)];
  if (text.includes(emptyScreenMarker)) {
    if (lockups.length || text.includes('alt="Cursor logo"')) throw new Error('Empty editor screen branding is incomplete');
    return text;
  }
  if (lockups.length !== 2) throw new Error('Expected the dark and light empty-screen lockups');
  const alts = text.split('alt="Cursor logo"').length - 1;
  if (alts !== 1) throw new Error('Expected one empty-screen logo');
  const templates = [...text.matchAll(/([\w$]+) = [\w$]+\(\s*'<div class="[^"']*">Sign in',?\s*\)/g)];
  if (templates.length !== 1) throw new Error('Expected one empty-screen sign-in template');
  const template = templates[0][1];
  const calls = [...text.matchAll(new RegExp(`(?<![$\\w])${template.replace(/\$/g, '\\$')}\\(\\)`, 'g'))];
  if (calls.length !== 1) throw new Error('Expected one empty-screen sign-in use');
  const getter = text.lastIndexOf('get fallback() {', calls[0].index);
  if (getter < 0 || text.slice(getter, calls[0].index).includes('get children()'))
    throw new Error('Empty-screen sign-in fallback owner changed');
  const open = getter + 'get fallback() '.length, end = blockEnd(text, open);
  if (end < calls[0].index || !text.slice(open, end).includes('.login()')) throw new Error('Empty-screen sign-in fallback changed');
  text = text.slice(0, open) + `{ ${emptyScreenMarker} return null; }` + text.slice(end);
  text = text.replace('alt="Cursor logo"', 'alt="OpenVision"');
  return text.replace(/"(\.\.\/\.\.\/\.\.\/workbench\/browser\/parts\/editor\/media\/)lockup-horizontal-(?:dark|light)\.png"/g,
    `"$1${emptyScreenLogo}"`);
}

export async function installEmptyScreenBranding(root) {
  const app = join(root, 'source/app');
  const backup = join(root, 'backups/empty-screen');
  await mkdir(backup, { recursive: true });
  for (const file of ['vs/workbench/workbench.desktop.main.js', 'vs/workbench/workbench.glass.main.js']) {
    const path = join(app, 'out', file);
    const before = await readFile(path, 'utf8');
    const after = brandEmptyEditorScreen(before);
    if (before === after) continue;
    await copyFile(path, join(backup, file.replaceAll('/', '_')), 1)
      .catch(error => { if (error.code !== 'EEXIST') throw error; });
    await writeFile(path, after);
  }
  // The landing screen shows a 30 px high image; use the OpenVision mark from the workbench assets.
  await copyFile(join(app, 'out/vs/code/electron-sandbox/workbench/openvision-logo.png'),
    join(app, 'out/vs/workbench/browser/parts/editor/media', emptyScreenLogo));
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
  // Linux uses this for the Wayland app ID / X11 window class and launcher matching.
  if (packageJson.desktopName) packageJson.desktopName = 'openvision.desktop';
  await writeFile(packagePath, JSON.stringify(packageJson, null, 2) + '\n');
  const path = join(app, 'product.json');
  const data = JSON.parse(await readFile(path, 'utf8'));
  Object.assign(data, { nameShort: 'OpenVision', nameLong: 'OpenVision', applicationName: 'openvision',
    dataFolderName: '.openvision-local', win32MutexName: 'openvision-local', win32DirName: 'OpenVision',
    win32NameVersion: 'OpenVision', win32RegValueName: 'OpenVision', win32AppUserModelId: 'Local.OpenVision.Source',
    win32ShellNameShort: 'OpenVision', urlProtocol: 'openvision-local',
    darwinBundleIdentifier: 'local.openvision.source', linuxIconName: 'openvision' });
  // Without an installer target, Linux treats `<app>/../../data` as portable
  // mode and ignores --user-data-dir. Windows inputs already carry "user".
  if (!('target' in data)) data.target = 'archive';
  delete data.updateUrl;
  delete data.backupUpdateUrl;
  delete data.checksums;
  await writeFile(path, JSON.stringify(data, null, 2) + '\n');
}
