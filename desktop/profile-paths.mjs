import { copyFile, mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { parseExpressionAt } from '../tooling/dependencies.mjs';
import { cachedFile } from './build-cache.mjs';
import { digest, fileHash } from './import-files.mjs';

const marker = '/* OpenVision profile MCP path v1 */';

export function mcpConfigurationOwner(text) {
  const anchors = [...text.matchAll(/async getUserConfigFilePath\(\)\s*\{/g)];
  if (anchors.length !== 1) throw new Error('MCP configuration path owner missing or ambiguous');
  const start = text.lastIndexOf('= class extends ', anchors[0].index) + 2;
  if (start < 2) throw new Error('MCP configuration service class missing');
  const node = parseExpressionAt(text, start, { ecmaVersion: 'latest' });
  if (node.type !== 'ClassExpression' || node.end <= anchors[0].index)
    throw new Error('MCP configuration service class contract changed');
  for (const name of ['getUserConfigFilePath', 'initializeUserConfiguredServers', 'getConfigFileUri',
    'openConfigFile', 'removeServerFromUserConfig', 'removeServerFromProjectConfig'])
    if (!node.body.body.some(method => method.key?.name === name))
      throw new Error(`MCP configuration consumer missing: ${name}`);
  return node;
}

export function isolateMcpConfiguration(text) {
  const owner = mcpConfigurationOwner(text);
  const method = owner.body.body.find(item => item.key?.name === 'getUserConfigFilePath');
  const before = text.slice(method.value.body.start, method.value.body.end);
  if (before.includes(marker)) return text;
  if (!before.includes('this.pathService.userHome(') ||
      !/this\.uriIdentityService\.extUri\.joinPath\(\w+,\s*"\.cursor",\s*"mcp.json"\)/.test(before))
    throw new Error('Global MCP configuration path contract changed');
  const body = `{ ${marker}
    const root = this.environmentService.appSettingsHome;
    if (!root || root.scheme !== "file") throw new Error("OpenVision local profile directory unavailable");
    return this.uriIdentityService.extUri.joinPath(root, "mcp.json");
  }`;
  return text.slice(0, method.value.body.start) + body + text.slice(method.value.body.end);
}

async function customize(root, relative) {
  const path = join(root, 'source/app', relative);
  const before = await readFile(path, 'utf8'), after = isolateMcpConfiguration(before);
  if (before === after) return;
  const backup = join(root, 'backups/profile-paths', relative);
  await mkdir(dirname(backup), { recursive: true });
  await copyFile(path, backup, 1).catch(error => { if (error.code !== 'EEXIST') throw error; });
  await writeFile(path, after);
}

export async function installProfilePathIsolation(root) {
  const dependencies = ['desktop/profile-paths.mjs', 'desktop/build-cache.mjs',
    'desktop/import-files.mjs', 'tooling/dependencies.mjs', 'tooling/package-lock.json'];
  const hashes = await Promise.all(dependencies.map(path => fileHash(join(root, path))));
  if (hashes.some(hash => !hash)) throw new Error('Profile path customization dependency missing');
  const recipe = digest(JSON.stringify([process.versions.node, hashes]));
  for (const variant of ['desktop', 'glass']) {
    const relative = `out/vs/workbench/workbench.${variant}.main.js`;
    await cachedFile({ path: join(root, 'source/app', relative), recipe,
      marker: join(root, `build/cache/profile-paths-${variant}.json`) }, () => customize(root, relative));
  }
  console.log('Global MCP configuration isolated to the OpenVision data profile');
}
