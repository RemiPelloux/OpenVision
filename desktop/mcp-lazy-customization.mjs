import { copyFile, mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { parseExpressionAt } from '../tooling/dependencies.mjs';
import { cachedFile } from './build-cache.mjs';
import { digest, fileHash } from './import-files.mjs';
import { lazyMcpRouting } from './mcp-routing-customization.mjs';

const marker = '/* OpenVision demand-driven MCP channel registration v1 */';

export function mcpConnectionOwner(text) {
  const anchor = 'this.pendingChannels = new Map()';
  const index = text.indexOf(anchor);
  if (index < 0 || text.indexOf(anchor, index + anchor.length) !== -1)
    throw new Error('MCP pending channel owner missing or ambiguous');
  const start = text.lastIndexOf('class extends ', index);
  const node = parseExpressionAt(text, start, { ecmaVersion: 'latest' });
  if (node.type !== 'ClassExpression' || node.end <= index) throw new Error('MCP connection class changed');
  for (const method of ['connect', 'getChannel', 'registerChannel', 'ensureConnection', 'createRawConnection', 'stop'])
    if (!node.body.body.some(entry => entry.key?.name === method)) throw new Error(`MCP connection contract missing: ${method}`);
  return node;
}

export function lazyMcpChannels(text) {
  const owner = mcpConnectionOwner(text);
  const method = owner.body.body.find(entry => entry.key?.name === 'registerChannel');
  const body = text.slice(method.value.body.start, method.value.body.end);
  if (body.includes(marker)) return text;
  const connect = owner.body.body.find(entry => entry.key?.name === 'connect');
  if (!/\w+\(\w+, this\.pendingChannels\)/.test(text.slice(connect.start, connect.end)) ||
      !body.includes('this.ensureConnection().then(') || method.value.params.length !== 2 ||
      method.value.params.some(parameter => parameter.type !== 'Identifier'))
    throw new Error('MCP registration/connection flush contract changed');
  const [name, channel] = method.value.params.map(parameter => parameter.name);
  const replacement = `{ ${marker}
    this.pendingChannels.set(${name}, ${channel});
    this.connection.value?.registerChannel(${name}, ${channel});
  }`;
  return text.slice(0, method.value.body.start) + replacement + text.slice(method.value.body.end);
}

export async function installLazyMcpChannels(root) {
  const recipe = digest(JSON.stringify(await Promise.all(['desktop/mcp-lazy-customization.mjs',
    'desktop/mcp-routing-customization.mjs',
    'desktop/build-cache.mjs', 'desktop/import-files.mjs', 'tooling/dependencies.mjs', 'tooling/package-lock.json']
    .map(path => fileHash(join(root, path))))));
  for (const variant of ['desktop', 'glass']) {
    const relative = `out/vs/workbench/workbench.${variant}.main.js`, path = join(root, 'source/app', relative);
    await cachedFile({ path, recipe, marker: join(root, `build/cache/mcp-lazy-${variant}.json`) }, async () => {
      const before = await readFile(path, 'utf8'), after = lazyMcpRouting(lazyMcpChannels(before));
      if (before === after) return;
      const backup = join(root, 'backups/mcp-lazy', relative);
      await mkdir(dirname(backup), { recursive: true });
      await copyFile(path, backup, 1).catch(error => { if (error.code !== 'EEXIST') throw error; });
      await writeFile(path, after);
    });
  }
  console.log('MCP callbacks and unconfigured routing defer connection until demand');
}
