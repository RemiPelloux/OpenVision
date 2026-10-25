import { copyFile, mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { parseExpressionAt } from '../tooling/dependencies.mjs';
import { cachedFile } from './build-cache.mjs';
import { digest, fileHash } from './import-files.mjs';
import { closeMcpAttempt, retryMcpCleanup } from './mcp-attempt-runtime.mjs';
import { ownMcpLifecycleCleanup } from './mcp-lifecycle-cleanup-customization.mjs';

const marker = '/* OpenVision MCP transport close ownership v4 */';
function classContaining(node, index) {
  if (!node || typeof node !== 'object' || index < node.start || index >= node.end) return undefined;
  if (['ClassExpression', 'ClassDeclaration'].includes(node.type)) return node;
  for (const value of Object.values(node)) {
    if (Array.isArray(value)) for (const child of value) {
      const found = classContaining(child, index);
      if (found) return found;
    } else {
      const found = classContaining(value, index);
      if (found) return found;
    }
  }
  return undefined;
}

export function mcpAttemptOwner(text) {
  // Recovery may retain the readable form or a minified production bundle.
  // Match both spellings, then let the parser own class and method boundaries.
  const matches = [...text.matchAll(/this\.closePromises\s*=\s*new WeakMap(?:\(\))?/g)];
  if (matches.length !== 1) throw new Error('MCP attempt owner missing or ambiguous');
  const index = matches[0].index;
  const parsed = parseExpressionAt(text, text.lastIndexOf('class', index), { ecmaVersion: 'latest' });
  const node = classContaining(parsed, index);
  if (!node || !['ClassExpression', 'ClassDeclaration'].includes(node.type) || node.end <= index)
    throw new Error('MCP attempt class changed');
  for (const name of ['setClient', 'requestClose', 'commit', 'closeCurrent'])
    if (!node.body.body.some(method => method.key?.name === name)) throw new Error(`MCP attempt contract missing: ${name}`);
  return node;
}

export function closeOwnedMcpTransports(text) {
  const owner = mcpAttemptOwner(text);
  const method = owner.body.body.find(method => method.key?.name === 'closeCurrent');
  const body = text.slice(method.value.body.start, method.value.body.end);
  if (body.includes(marker)) return ownMcpLifecycleCleanup(text);
  if (!body.includes('this.closePromises.get(') || !body.includes('.close()') || !body.includes('this.client'))
    throw new Error('MCP attempt cleanup contract changed');
  const log = /([\w$]+\(this.identifier\))\.(?:debug|error)\(/.exec(body)?.[1];
  if (!log) throw new Error('MCP attempt logger contract changed');
  const implementation = closeMcpAttempt.toString();
  const replacement = `closeCurrent(reason) ${implementation.slice(implementation.indexOf('{'))
    .replace('{', `{ ${marker}`)
    .replace('console.error(', `${log}.error(`)}`;
  const retry = retryMcpCleanup.toString();
  const retryMethod = owner.body.body.some(method => method.static && method.key?.name === 'retryCleanup') ? '' :
    `\nstatic async retryCleanup(identifier) ${retry.slice(retry.indexOf('{'))}\n`;
  return ownMcpLifecycleCleanup(text.slice(0, method.start) + replacement + retryMethod + text.slice(method.end));
}

export async function installMcpAttemptCleanup(root) {
  const recipe = digest(JSON.stringify(await Promise.all(['desktop/mcp-attempt-customization.mjs',
    'desktop/mcp-attempt-runtime.mjs', 'desktop/mcp-lifecycle-cleanup-customization.mjs', 'desktop/build-cache.mjs', 'desktop/import-files.mjs',
    'tooling/dependencies.mjs', 'tooling/package-lock.json'].map(path => fileHash(join(root, path))))));
  for (const relative of ['out/vs/code/electron-utility/mcpProcess/mcpProcessMain.js', 'extensions/cursor-mcp/dist/main.js']) {
    const path = join(root, 'source/app', relative);
    await cachedFile({ path, recipe, marker: join(root, `build/cache/mcp-attempt-${relative.startsWith('out') ? 'process' : 'extension'}.json`) }, async () => {
      const before = await readFile(path, 'utf8'), after = closeOwnedMcpTransports(before);
      if (after === before) return;
      const backup = join(root, 'backups/mcp-attempt', relative);
      await mkdir(dirname(backup), { recursive: true });
      await copyFile(path, backup, 1).catch(error => { if (error.code !== 'EEXIST') throw error; });
      await writeFile(path, after);
    });
  }
  console.log('MCP startup cancellation closes the owned transport, including late attachment');
}
