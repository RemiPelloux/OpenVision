import { readFile, writeFile, mkdir, copyFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { digest } from './import-files.mjs';

export const treeChunkLazyMarker = '/* OpenVision lazy tree-chunk-napi v1 */';

// The 3.21.13 Agent bundles require the proprietary tree-chunk-napi addon at
// module scope, so it is loaded on the first Agent turn although its only use is
// the semantic-search result recontextualizer (cloud codebase index only;
// measured: 0 calls in verify:native-calls). The binding becomes a getter that
// loads the addon on first use. A load failure then rejects that search call,
// as in 3.24.18, instead of failing while the Agent module evaluates.
export const treeChunkLazyBundles = Object.freeze([
  'source/app/extensions/cursor-agent-exec/dist/main.js',
  'source/app/extensions/cursor-agent-host/dist/main.js',
  'source/app/extensions/cursor-local-agent-runtime/dist/main.js',
]);

const owner = /\b([\w$]+) = require\(("(?:\.\.\/\.\.\/cursor-agent-exec\/dist\/node_modules\/)?@anysphere\/tree-chunk-napi")\);/g;

export function loadTreeChunkLazily(text) {
  if (text.includes(treeChunkLazyMarker)) {
    if (text.split(treeChunkLazyMarker).length !== 2) throw Error('tree-chunk-napi lazy load applied more than once');
    return text;
  }
  const matches = [...text.matchAll(owner)];
  if (matches.length !== 1) throw Error(`tree-chunk-napi owner missing or ambiguous (${matches.length})`);
  const [{ 1: binding, 2: specifier }] = matches;
  const uses = [...text.matchAll(new RegExp(`(?<![\\w$.])${binding.replace(/\$/g, '\\$')}\\b(\\.\\w+)?`, 'g'))].slice(1);
  if (uses.length !== 1 || uses[0][1] !== '.ChunkerRouter') throw Error(`tree-chunk-napi binding ${binding} has unexpected uses (${uses.map(use => use[0]).join(', ')})`);
  return text.replace(owner, `${binding} = { get ChunkerRouter() { return require(${specifier}).ChunkerRouter; } } ${treeChunkLazyMarker};`);
}

export async function installTreeChunkLazyLoad(root) {
  let changed = 0;
  for (const relative of treeChunkLazyBundles) {
    const path = join(root, relative), before = await readFile(path, 'utf8');
    const after = loadTreeChunkLazily(before);
    if (before === after) continue;
    const backup = join(root, 'backups/tree-chunk-lazy', `${digest(before)}.js`);
    await mkdir(dirname(backup), { recursive: true });
    await copyFile(path, backup, 1).catch(error => { if (error.code !== 'EEXIST') throw error; });
    await writeFile(path, after);
    changed++;
  }
  if (changed) console.log('tree-chunk-napi loads only when semantic search recontextualizes results');
}
