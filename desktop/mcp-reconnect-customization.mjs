import { copyFile, mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { parseExpressionAt } from '../tooling/dependencies.mjs';
import { cachedFile } from './build-cache.mjs';
import { digest, fileHash } from './import-files.mjs';

const marker = '/* OpenVision MCP closed STDIO readiness v1 */';
export function mcpReadinessMethod(text) {
  const anchor = 'async getReadyAdapter(';
  const index = text.indexOf(anchor);
  if (index < 0 || text.indexOf(anchor, index + anchor.length) !== -1)
    throw new Error('MCP readiness owner missing or ambiguous');
  const owner = parseExpressionAt(text, text.lastIndexOf('class ', index), { ecmaVersion: 'latest' });
  const method = owner.body.body.find(entry => entry.key?.name === 'getReadyAdapter');
  if (!method || method.value.params.length !== 1 || method.value.params[0].type !== 'Identifier')
    throw new Error('MCP readiness contract changed');
  return method;
}

export function reconnectClosedMcp(text) {
  const method = mcpReadinessMethod(text), body = text.slice(method.start, method.end);
  if (body.includes(marker)) return text;
  if (!body.includes('this.markServerUsed(') || !body.includes('this.waitForConnection('))
    throw new Error('MCP readiness lifecycle changed');
  const id = method.value.params[0].name;
  const addition = `
    ${marker}
    const lifecycle = this.lifecycles.get(${id});
    if (lifecycle?.getServerInfo().type === "stdio" &&
        ["closed", "connecting"].includes(lifecycle.getConnectionState().type)) {
      // Reconnect before a new operation; never replay an operation that may have run.
      if (lifecycle.getConnectionState().type === "closed") lifecycle.connect();
      await lifecycle.getConnectPromise();
      if (this.lifecycles.get(${id}) !== lifecycle ||
          !["connected", "degraded"].includes(lifecycle.getConnectionState().type) ||
          !this.adapters.get(${id})?.client?.transport)
        throw new Error(lifecycle.getLastStatus()?.error || "MCP server did not reconnect");
    }
`;
  const start = method.value.body.start + 1;
  return text.slice(0, start) + addition + text.slice(start);
}

export async function installMcpReconnect(root) {
  const relative = 'out/vs/code/electron-utility/mcpProcess/mcpProcessMain.js';
  const path = join(root, 'source/app', relative);
  const recipe = digest(JSON.stringify(await Promise.all(['desktop/mcp-reconnect-customization.mjs',
    'desktop/build-cache.mjs', 'desktop/import-files.mjs', 'tooling/dependencies.mjs',
    'tooling/package-lock.json'].map(file => fileHash(join(root, file))))));
  await cachedFile({ path, recipe, marker: join(root, 'build/cache/mcp-reconnect.json') }, async () => {
    const before = await readFile(path, 'utf8'), after = reconnectClosedMcp(before);
    if (before === after) return;
    const backup = join(root, 'backups/mcp-reconnect', relative);
    await mkdir(dirname(backup), { recursive: true });
    await copyFile(path, backup, 1).catch(error => { if (error.code !== 'EEXIST') throw error; });
    await writeFile(path, after);
  });
  console.log('Closed MCP STDIO connections recover on the next operation');
}
