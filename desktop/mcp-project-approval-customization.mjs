import { copyFile, mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { parseExpressionAt } from '../tooling/dependencies.mjs';
import { cachedFile } from './build-cache.mjs';
import { digest, fileHash } from './import-files.mjs';

const marker = '/* OpenVision MCP project approval folder scope v1 */';

// Project MCP approvals live in application-wide storage as
// `<identifier>:<config hash>`. The identifier is `project-<folder index>-<folder
// basename>-<server>`, so /a/app and /b/app share it: parsing /b/app's config
// pruned /a/app's approval (its hash differs) and stopped /a/app's server, and a
// byte-identical config in another same-named folder inherited the approval.
// Approval keys of project servers now also carry the workspace folder URI
// (`<identifier>:<hash>@<folder URI>`). Pruning and revocation only touch keys
// of the folder being parsed. Earlier unscoped keys stop matching, so each
// project server asks for approval once more.
function nodes(node, predicate, found = []) {
  if (!node || typeof node !== 'object') return found;
  if (predicate(node)) found.push(node);
  for (const value of Object.values(node)) {
    if (Array.isArray(value)) value.forEach(child => nodes(child, predicate, found));
    else if (value && typeof value === 'object') nodes(value, predicate, found);
  }
  return found;
}

export function mcpApprovalOwner(text) {
  const anchor = 'computeApprovalKey(';
  const definitions = [...text.matchAll(/\n\s+computeApprovalKey\([\w$]+\) \{/g)];
  if (definitions.length !== 1 || !text.includes(anchor)) throw new Error('MCP approval owner missing or ambiguous');
  const index = definitions[0].index;
  for (let start = text.lastIndexOf('class extends ', index); start >= 0; start = text.lastIndexOf('class extends ', start - 1)) {
    let node;
    try { node = parseExpressionAt(text, start, { ecmaVersion: 'latest' }); } catch { continue; }
    if (node.type !== 'ClassExpression' || node.end <= index) continue;
    const method = name => {
      const found = node.body.body.filter(item => item.key?.name === name && item.value?.body);
      if (found.length !== 1) throw new Error(`MCP approval contract missing: ${name}`);
      return found[0];
    };
    const owner = { node, computeApprovalKey: method('computeApprovalKey'), parse: method('parseMcpServersFromFile'),
      remove: method('removeServerApproval'), folderToKey: method('folderToKey'), isServerEnabled: method('isServerEnabled') };
    const source = text.slice(node.start, node.end);
    if (!source.includes('this.contextService.getWorkspace().folders') || !source.includes('this.approvedProjectMcpServers'))
      throw new Error('MCP approval storage or workspace contract changed');
    const key = text.slice(owner.computeApprovalKey.value.body.start, owner.computeApprovalKey.value.body.end);
    if (!/const ([\w$]+) = this\.computeServerConfigHash\(([\w$]+)\);\s*return `\$\{\2\.identifier\}:\$\{\1\}`;/.test(key))
      throw new Error('MCP approval key contract changed');
    return owner;
  }
  throw new Error('MCP approval class changed');
}

export function scopeProjectMcpApprovals(text) {
  if (text.includes(marker)) return text;
  const owner = mcpApprovalOwner(text), patches = [];
  // 1. Approval key.
  const keyMethod = owner.computeApprovalKey.value, server = keyMethod.params[0].name;
  const keyBody = text.slice(keyMethod.body.start, keyMethod.body.end);
  const [, hash] = /const ([\w$]+) = this\.computeServerConfigHash/.exec(keyBody);
  patches.push({ start: keyMethod.body.start, end: keyMethod.body.end, after: `{
            ${marker}
            const ${hash} = this.computeServerConfigHash(${server});
            return ${server}.projectManaged
              ? \`\${${server}.identifier}:\${${hash}}@\${this.openvisionApprovalScope(${server}.projectPath)}\`
              : \`\${${server}.identifier}:\${${hash}}\`;
          }
          openvisionApprovalScope(projectPath) {
            const folder = this.contextService.getWorkspace().folders.find((item) => this.folderToKey(item) === projectPath);
            return folder ? folder.uri.toString() : \`unresolved:\${projectPath}\`;
          }
          openvisionApprovalScopeOf(key) {
            const hash = key.indexOf(":"), at = hash < 0 ? -1 : key.indexOf("@", hash);
            return at < 0 ? void 0 : key.slice(at + 1);
          }
          openvisionIsOtherFolderApproval(key, projectPath) {
            const scope = this.openvisionApprovalScopeOf(key);
            return scope !== void 0 && scope !== this.openvisionApprovalScope(projectPath);
          }` });
  // 2. Config parse prunes only this folder's approvals.
  const options = owner.parse.value.params[1]?.name;
  const prunes = nodes(owner.parse.value.body, node => (node.type === 'ArrowFunctionExpression' || node.type === 'FunctionExpression') &&
    node.params.length === 1 && node.body.type === 'BlockStatement' &&
    text.slice(node.start, node.end).includes('this.computeApprovalKey(') && text.slice(node.start, node.end).includes('.startsWith('));
  if (!options || prunes.length !== 1) throw new Error('MCP approval prune contract changed');
  const [prune] = prunes, first = prune.body.body[0];
  if (first?.type !== 'IfStatement' || !text.slice(first.start, first.end).includes(`${prune.params[0].name}.startsWith(`))
    throw new Error('MCP approval prune prefix check changed');
  patches.push({ start: first.end, end: first.end,
    after: ` if (this.openvisionIsOtherFolderApproval(${prune.params[0].name}, ${options}.projectPath)) return !0;` });
  // 3. Revocation removes only this folder's approvals.
  const removed = owner.remove.value.params[0].name;
  const keeps = nodes(owner.remove.value.body, node => node.type === 'ArrowFunctionExpression' && node.params.length === 1 &&
    node.body.type !== 'BlockStatement' && text.slice(node.body.start, node.body.end).includes(`${removed}.identifier`));
  if (keeps.length !== 1) throw new Error('MCP approval revocation contract changed');
  const [keep] = keeps;
  patches.push({ start: keep.body.start, end: keep.body.end,
    after: `(${text.slice(keep.body.start, keep.body.end)}) || this.openvisionIsOtherFolderApproval(${keep.params[0].name}, ${removed}.projectPath)` });
  for (const patch of patches.sort((a, b) => b.start - a.start)) text = text.slice(0, patch.start) + patch.after + text.slice(patch.end);
  return text;
}

async function customize(root, relative, name) {
  const path = join(root, 'source/app', relative);
  const recipe = digest(JSON.stringify(await Promise.all(['desktop/mcp-project-approval-customization.mjs',
    'desktop/build-cache.mjs', 'desktop/import-files.mjs', 'tooling/dependencies.mjs', 'tooling/package-lock.json']
    .map(item => fileHash(join(root, item))))));
  await cachedFile({ path, recipe, marker: join(root, `build/cache/mcp-project-approval-${name}.json`) }, async () => {
    const before = await readFile(path, 'utf8'), after = scopeProjectMcpApprovals(before);
    if (after === before) return;
    const backup = join(root, 'backups/mcp-project-approval', relative);
    await mkdir(dirname(backup), { recursive: true });
    await copyFile(path, backup, 1).catch(error => { if (error.code !== 'EEXIST') throw error; });
    await writeFile(path, after);
  });
}

export async function installMcpProjectApprovalScope(root) {
  for (const variant of ['desktop', 'glass']) await customize(root, `out/vs/workbench/workbench.${variant}.main.js`, variant);
  console.log('Project MCP approvals are scoped to their workspace folder');
}
