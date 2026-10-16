import { copyFile, mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { parseExpressionAt } from '../tooling/dependencies.mjs';
import { cachedFile } from './build-cache.mjs';
import { digest, fileHash } from './import-files.mjs';

const marker = '/* OpenVision MCP window subscription release v1 */';

// The shared MCP utility keeps per-window subscriptions to scoped servers. The
// recovered desktop runtime never calls the registry's unsubscribeAllForWindow,
// so a closed or profile-switched window kept its STDIO children until app exit.
function nodes(node, predicate, found = []) {
  if (!node || typeof node !== 'object') return found;
  if (predicate(node)) found.push(node);
  for (const value of Object.values(node)) {
    if (Array.isArray(value)) value.forEach(child => nodes(child, predicate, found));
    else if (value && typeof value === 'object') nodes(value, predicate, found);
  }
  return found;
}

function classAt(text, anchor, label) {
  const index = text.indexOf(anchor);
  if (index < 0 || text.indexOf(anchor, index + anchor.length) !== -1) throw new Error(`${label} missing or ambiguous`);
  const start = text.lastIndexOf('class extends ', index);
  const node = parseExpressionAt(text, start, { ecmaVersion: 'latest' });
  if (node.type !== 'ClassExpression' || node.end <= index) throw new Error(`${label} class changed`);
  return node;
}

export function mcpWindowRegistryOwner(text) {
  const node = classAt(text, 'this.parkedOAuthScopeKeys = new Set()', 'MCP subscription registry');
  const methods = new Set(node.body.body.map(method => method.key?.name));
  for (const name of ['subscribe', 'unsubscribe', 'unsubscribeAllForWindow', 'stopAndRemove'])
    if (!methods.has(name)) throw new Error(`MCP subscription registry contract missing: ${name}`);
  const source = text.slice(node.start, node.end);
  if (!/\.windowId === \w+ && \w+\.push\(/.test(source))
    throw new Error('MCP subscription registry window key changed');
  return node;
}

export function mcpProcessHostOwner(text) {
  const node = classAt(text, 'initChannels(e) {', 'MCP utility channel owner');
  const method = node.body.body.find(item => item.key?.name === 'initChannels');
  if (!method) throw new Error('MCP utility channel initialization missing');
  return { node, method };
}

export function releaseClosedMcpWindows(text) {
  const { method } = mcpProcessHostOwner(text);
  const body = text.slice(method.start, method.end);
  if (body.includes(marker)) return text;
  const registry = mcpWindowRegistryOwner(text);
  const registryName = /([\w$]+)\s*=\s*$/.exec(text.slice(Math.max(0, registry.start - 40), registry.start))?.[1];
  if (!registryName) throw new Error('MCP subscription registry binding changed');
  const source = node => text.slice(node.start, node.end);
  const declarators = nodes(method.value.body, node => node.type === 'VariableDeclarator' && node.init &&
    source(node.init).replace(/\s+/g, '') === `this._register(new${registryName}())`);
  if (declarators.length !== 1 || declarators[0].id.type !== 'Identifier')
    throw new Error('MCP utility registry ownership changed');
  const statement = method.value.body.body.find(item => item.start <= declarators[0].start && item.end >= declarators[0].end);
  if (statement?.type !== 'VariableDeclaration') throw new Error('MCP utility registry declaration changed');
  if (!body.includes('this.server.registerChannel(') || !text.includes('this.onDidRemoveConnection = this._onDidRemoveConnection.event') ||
      !text.includes('get connections()'))
    throw new Error('MCP utility connection lifecycle contract changed');
  const name = declarators[0].id.name;
  const addition = `
      ${marker}
      this._register(this.server.onDidRemoveConnection(connection => {
        const context = connection?.ctx;
        if (typeof context !== "string" || !context.startsWith("window:")) return;
        // A reloaded window may reconnect first; its live subscriptions stay owned.
        if (this.server.connections.some(other => other.ctx === context)) return;
        ${name}.unsubscribeAllForWindow(context.slice(7));
      }));
`;
  return text.slice(0, statement.end) + addition + text.slice(statement.end);
}

const profileMarker = '/* OpenVision MCP profile switch subscription release v1 */';

export function mcpProfileRoutingOwner(text) {
  const node = classAt(text, 'handleProfileChange() {', 'MCP profile routing owner');
  const methods = Object.fromEntries(node.body.body.map(method => [method.key?.name, method]));
  for (const name of ['handleProfileChange', 'applyFactoryForRegistration', 'syncFactoryForRegistration'])
    if (!methods[name]) throw new Error(`MCP profile routing contract missing: ${name}`);
  const constructor = node.body.body.find(method => method.kind === 'constructor');
  const source = item => text.slice(item.start, item.end);
  if (!/this\.serverService = [\w$]+\.toService\(this\.mcpProcessService\.getChannel\([\w$]+\.servers\)\)/.test(source(constructor)) ||
      !source(constructor).includes('this.handleProfileChange()') ||
      !source(methods.applyFactoryForRegistration).includes('this.mcpProcessService.windowId') ||
      !source(methods.handleProfileChange).includes('this.workspaceRegistrations.values()'))
    throw new Error('MCP profile routing subscription contract changed');
  return { node, method: methods.handleProfileChange };
}

// An in-place profile switch re-creates profile-scoped clients but never
// unsubscribed the previous profile's keys, so those children survived until exit.
export function releaseSwitchedMcpProfiles(text) {
  const { method } = mcpProfileRoutingOwner(text);
  if (text.slice(method.start, method.end).includes(profileMarker)) return text;
  const offset = method.value.body.start + 1;
  return text.slice(0, offset) + `
    ${profileMarker}
    if (this.enabled) {
      const windowId = this.mcpProcessService.windowId;
      // Queued on the same channel before the new profile's subscriptions.
      for (const registration of this.workspaceRegistrations.values())
        Promise.resolve(this.serverService.unsubscribeAllForWorkspace(windowId, registration.workspaceId)).catch(() => {});
    }
` + text.slice(offset);
}

async function customize(root, relative, transform, name) {
  const path = join(root, 'source/app', relative);
  const recipe = digest(JSON.stringify(await Promise.all(['desktop/mcp-window-release-customization.mjs',
    'desktop/build-cache.mjs', 'desktop/import-files.mjs', 'tooling/dependencies.mjs', 'tooling/package-lock.json']
    .map(item => fileHash(join(root, item))))));
  await cachedFile({ path, recipe, marker: join(root, `build/cache/mcp-window-release-${name}.json`) }, async () => {
    const before = await readFile(path, 'utf8'), after = transform(before);
    if (after === before) return;
    const backup = join(root, 'backups/mcp-window-release', relative);
    await mkdir(dirname(backup), { recursive: true });
    await copyFile(path, backup, 1).catch(error => { if (error.code !== 'EEXIST') throw error; });
    await writeFile(path, after);
  });
}

export async function installMcpWindowRelease(root) {
  await customize(root, 'out/vs/code/electron-utility/mcpProcess/mcpProcessMain.js', releaseClosedMcpWindows, 'process');
  for (const variant of ['desktop', 'glass'])
    await customize(root, `out/vs/workbench/workbench.${variant}.main.js`, releaseSwitchedMcpProfiles, variant);
  console.log('MCP subscriptions are released after window close and in-place profile switches');
}
