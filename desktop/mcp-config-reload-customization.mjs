import { copyFile, mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { cachedFile } from './build-cache.mjs';
import { digest, fileHash } from './import-files.mjs';

const marker = '/* OpenVision MCP config reloads serialized v1 */';

// Each change of a project `.openvision/mcp.json` (or the profile `mcp.json`)
// starts a reload that parses the file, awaits client deletion and then
// replaces the window's server list. Overlapping reloads finished in any order,
// so the last to finish won: a reload that parsed an older revision could
// overwrite the newest, and the window kept, re-approved and spawned a stale
// configuration (OV-303 `--simultaneous`, "5 !== 8"). Reloads of one file are
// now queued; each still reads the file when it runs, so the last one applies
// the newest content.
export function serializeMcpConfigReloads(text) {
  if (text.includes(marker)) return text;
  const project = [...text.matchAll(/\n(\s+)async handleProjectMcpJsonChange\(([\w$]+), ([\w$]+)\) \{\n\s*[\w$]+\(`\[MCPService\] Project MCP JSON changed/g)];
  const user = [...text.matchAll(/\n(\s+)async initializeUserConfiguredServers\(\) \{\n\s*[\w$]+\("\[MCPService\] Initializing user-configured servers from file"\);/g)];
  if (project.length !== 1 || user.length !== 1 || !text.includes('this.folderToKey(') ||
      !/this\.userConfiguredServers = await this\._handleMcpConfigFileChange\(/.test(text) ||
      !/this\.projectManagedServers\.push\(\.\.\.[\w$]+\)/.test(text))
    throw new Error('MCP config reload contract changed');
  const [projectMatch] = project, [, indent, uri, folder] = projectMatch, [userMatch] = user;
  const helper = `
${indent}${marker}
${indent}openvisionSerialMcpConfigReload(key, run) {
${indent}  const queue = (this.openvisionMcpConfigReloads ??= new Map());
${indent}  const next = (queue.get(key) ?? Promise.resolve()).catch(() => {}).then(run);
${indent}  queue.set(key, next);
${indent}  next.finally(() => { queue.get(key) === next && queue.delete(key); }).catch(() => {});
${indent}  return next;
${indent}}
${indent}handleProjectMcpJsonChange(${uri}, ${folder}) {
${indent}  return this.openvisionSerialMcpConfigReload(\`project:\${this.folderToKey(${folder})}\`,
${indent}    () => this.openvisionHandleProjectMcpJsonChangeNow(${uri}, ${folder}));
${indent}}
${indent}initializeUserConfiguredServers() {
${indent}  return this.openvisionSerialMcpConfigReload("user", () => this.openvisionInitializeUserConfiguredServersNow());
${indent}}`;
  const patches = [
    { at: userMatch.index, from: '\n' + userMatch[1] + 'async initializeUserConfiguredServers()', to: '\n' + userMatch[1] + 'async openvisionInitializeUserConfiguredServersNow()' },
    { at: projectMatch.index, from: '\n' + indent + 'async handleProjectMcpJsonChange(', to: helper + '\n' + indent + 'async openvisionHandleProjectMcpJsonChangeNow(' },
  ].sort((a, b) => b.at - a.at);
  for (const { at, from, to } of patches) {
    if (!text.startsWith(from, at)) throw new Error('MCP config reload contract changed');
    text = text.slice(0, at) + to + text.slice(at + from.length);
  }
  return text;
}

async function customize(root, relative, name) {
  const path = join(root, 'source/app', relative);
  const recipe = digest(JSON.stringify(await Promise.all(['desktop/mcp-config-reload-customization.mjs',
    'desktop/build-cache.mjs', 'desktop/import-files.mjs'].map(item => fileHash(join(root, item))))));
  await cachedFile({ path, recipe, marker: join(root, `build/cache/mcp-config-reload-${name}.json`) }, async () => {
    const before = await readFile(path, 'utf8'), after = serializeMcpConfigReloads(before);
    if (after === before) return;
    const backup = join(root, 'backups/mcp-config-reload', relative);
    await mkdir(dirname(backup), { recursive: true });
    await copyFile(path, backup, 1).catch(error => { if (error.code !== 'EEXIST') throw error; });
    await writeFile(path, after);
  });
}

export async function installMcpConfigReloadSerialization(root) {
  for (const variant of ['desktop', 'glass']) await customize(root, `out/vs/workbench/workbench.${variant}.main.js`, variant);
  console.log('MCP config reloads of each file are serialized');
}
