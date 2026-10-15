import { copyFile, mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { parseExpressionAt } from '../tooling/dependencies.mjs';

const marker = '/* OpenVision preserve only emitted retry content v1 */';
export const retryOwners = {
  host: { name: 'gce', convert: 'fce', parts: 'l', finish: 'b' },
  exec: { name: 'S9', convert: '_9', parts: 'c', finish: 'S' },
};

export function retryFunction(text, name) {
  const anchor = `function ${name}(`, start = text.indexOf(anchor);
  if (start < 0 || text.indexOf(anchor, start + anchor.length) !== -1)
    throw Error(`Agent retry producer missing or ambiguous: ${name}`);
  const node = parseExpressionAt(text, start, { ecmaVersion: 'latest' });
  if (node.type !== 'FunctionExpression') throw Error('Agent retry producer contract changed');
  return node;
}

export function preserveRetryHistory(text, kind) {
  const owner = retryOwners[kind];
  if (!owner) throw Error('Unknown Agent retry implementation');
  const node = retryFunction(text, owner.name), source = text.slice(node.start, node.end);
  if (source.includes(marker)) return text;
  const pattern = new RegExp(`const t = \\[\\];\\s*\\(t.push\\(\\{ role: "assistant", content: ${owner.convert}\\(${owner.parts}\\), id: "1" \\}\\),`, 'g');
  if ([...source.matchAll(pattern)].length !== 1) throw Error('Agent failed-stream history contract changed');
  const patched = source.replace(pattern, `${marker}
    const openvisionReplay = ${owner.convert}(${owner.parts}), t = [];
    (openvisionReplay.length > 0 && t.push({ role: "assistant", content: openvisionReplay, id: "1" }),`);
  return text.slice(0, node.start) + patched + text.slice(node.end);
}

export async function installRetryHistory(root) {
  for (const kind of Object.keys(retryOwners)) {
    const relative = `extensions/cursor-agent-${kind}/dist/main.js`, path = join(root, 'source/app', relative);
    const before = await readFile(path, 'utf8'), after = preserveRetryHistory(before, kind);
    if (before === after) continue;
    const backup = join(root, 'backups/agent-retry-history', relative);
    await mkdir(dirname(backup), { recursive: true });
    await copyFile(path, backup, 1).catch(error => { if (error.code !== 'EEXIST') throw error; });
    await writeFile(path, after);
  }
}
