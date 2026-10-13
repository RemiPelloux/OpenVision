import { copyFile, mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { parseExpressionAt } from '../tooling/dependencies.mjs';
import { cachedFile } from './build-cache.mjs';
import { digest, fileHash } from './import-files.mjs';
import { callRendererMcpTool, callProcessMcpTool, cancellableMcpToolChannel } from './mcp-cancel-runtime.mjs';

const marker = '/* OpenVision MCP IPC cancellation v1 */';
function owner(text, anchor) {
  const index = text.indexOf(anchor);
  if (index < 0 || text.indexOf(anchor, index + anchor.length) !== -1) throw new Error(`MCP cancellation anchor changed: ${anchor}`);
  const node = parseExpressionAt(text, text.lastIndexOf('class ', index), { ecmaVersion: 'latest' });
  if (node.type !== 'ClassExpression' || node.end <= index) throw new Error('MCP cancellation owner changed');
  return node;
}
function replaceMethod(text, anchor, name, implementation) {
  const method = owner(text, anchor).body.body.find(method => method.key?.name === name);
  if (!method) throw new Error(`MCP cancellation method missing: ${name}`);
  return text.slice(0, method.start) + implementation + text.slice(method.end);
}
const methodText = (name, fn) => fn.toString().replace(/^async function \w+/, `async ${name}`);
function nodes(node, predicate, result = []) {
  if (!node || typeof node !== 'object') return result;
  if (predicate(node)) result.push(node);
  for (const value of Object.values(node)) {
    if (Array.isArray(value)) for (const child of value) nodes(child, predicate, result);
    else if (value && typeof value === 'object') nodes(value, predicate, result);
  }
  return result;
}

export function cancelRendererMcp(text) {
  if (text.includes(marker)) return text;
  text = replaceMethod(text, 'requireActiveProcessRegistryKey("call tool")', 'callTool',
    methodText('callTool', callRendererMcpTool));
  const pattern = /this\.toolService = ([\w$]+)\.toService\(this\.mcpProcessService\.getChannel\(([\w$]+)\.tools\)\)/g;
  const matches = [...text.matchAll(pattern)];
  if (matches.length !== 1) throw new Error('MCP renderer tool proxy changed');
  return text.replace(pattern, (_, proxy, channels) => `this.toolService = (() => { ${marker}
    const channel = this.mcpProcessService.getChannel(${channels}.tools);
    return ${proxy}.toService(channel, { properties: new Map([
      ["callTool", (request, token) => channel.call("callTool", [request], token)]
    ]) });
  })()`);
}

export function cancelProcessMcp(text) {
  if (text.includes(marker)) return text;
  text = replaceMethod(text, '[McpProcessToolService] callTool:', 'callTool', methodText('callTool', callProcessMcpTool));
  text = forwardManagerSignal(text);
  text = forwardSdkSignal(text);
  const pattern = /([\w$]+) = ([\w$]+)\.fromService\(([\w$]+), this\._store\);\s+return \(this\.server\.registerChannel\(([\w$]+)\.tools, \1\), ([\w$]+)\);/g;
  if ([...text.matchAll(pattern)].length !== 1) throw new Error('MCP process tools channel registration changed');
  return text.replace(pattern, (_, name, proxy, service, channels, diagnostics) =>
    `${name} = (${cancellableMcpToolChannel.toString()})(${service}, ${proxy}.fromService(${service}, this._store));
    ${marker}
    return (this.server.registerChannel(${channels}.tools, ${name}), ${diagnostics});`);
}

function forwardManagerSignal(text) {
  const method = owner(text, 'this.toolCallTargets.set(').body.body.find(method => method.key?.name === 'callTool');
  const options = method?.value.params[3]?.left?.name;
  const calls = nodes(method, node => node.type === 'CallExpression' && node.callee?.property?.name === 'callToolForUI');
  if (!options || calls.length !== 1 || calls[0].arguments.length !== 4) throw new Error('MCP manager tool call contract changed');
  const end = calls[0].end - 1;
  return text.slice(0, end) + `, ${options}.abortSignal` + text.slice(end);
}

function forwardSdkSignal(text) {
  const method = owner(text, 'async callToolForUI(').body.body.find(method => method.key?.name === 'callToolForUI');
  const calls = nodes(method, node => node.type === 'CallExpression' && node.callee?.property?.name === 'callTool' &&
    node.callee.object?.property?.name === 'client');
  if (!method || method.value.params.length !== 4 || calls.length !== 1 || calls[0].arguments.length !== 3)
    throw new Error('MCP SDK tool options contract changed');
  const options = calls[0].arguments[2];
  const edits = [
    [options.start, options.end, `{ ...${text.slice(options.start, options.end)}, signal: openvisionSignal }`],
    [method.value.body.start + 1, method.value.body.start + 1, '\nopenvisionSignal?.throwIfAborted();\n'],
    [method.value.params.at(-1).end, method.value.params.at(-1).end, ', openvisionSignal'],
  ];
  for (const [start, end, value] of edits.sort((a, b) => b[0] - a[0])) text = text.slice(0, start) + value + text.slice(end);
  return text;
}

export async function installMcpCancellation(root) {
  const recipe = digest(JSON.stringify(await Promise.all(['desktop/mcp-cancel-customization.mjs',
    'desktop/mcp-cancel-runtime.mjs', 'desktop/build-cache.mjs', 'desktop/import-files.mjs',
    'tooling/dependencies.mjs', 'tooling/package-lock.json'].map(path => fileHash(join(root, path))))));
  const targets = [['process', 'out/vs/code/electron-utility/mcpProcess/mcpProcessMain.js', cancelProcessMcp],
    ...['desktop', 'glass'].map(variant => [variant, `out/vs/workbench/workbench.${variant}.main.js`, cancelRendererMcp])];
  for (const [variant, relative, transform] of targets) {
    const path = join(root, 'source/app', relative);
    await cachedFile({ path, recipe, marker: join(root, `build/cache/mcp-cancel-${variant}.json`) }, async () => {
      const before = await readFile(path, 'utf8'), after = transform(before);
      if (before === after) return;
      const backup = join(root, 'backups/mcp-cancel', relative);
      await mkdir(dirname(backup), { recursive: true });
      await copyFile(path, backup, 1).catch(error => { if (error.code !== 'EEXIST') throw error; });
      await writeFile(path, after);
    });
  }
  console.log('MCP tool cancellation follows IPC request ownership to the SDK transport');
}
