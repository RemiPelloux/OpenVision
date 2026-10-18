import { existsSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

// Runtime inputs the retrieval index uses from the pinned application:
// @vscode/ripgrep and @vscode/tree-sitter-wasm. Tests and verifiers resolve
// them from the source build so they exercise the shipped binaries.
export const repositoryRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');

export function retrievalRuntime(appRoot = join(repositoryRoot, 'source/app')) {
  const modules = join(appRoot, 'node_modules/@vscode');
  const rgPath = join(modules, 'ripgrep/bin', process.platform === 'win32' ? 'rg.exe' : 'rg');
  const grammarDirectory = join(modules, 'tree-sitter-wasm/wasm');
  if (!existsSync(rgPath)) throw new Error(`Pinned ripgrep is missing at ${rgPath}; run npm run build:desktop`);
  if (!existsSync(join(grammarDirectory, 'tree-sitter.js')))
    throw new Error(`Pinned tree-sitter-wasm is missing at ${grammarDirectory}; run npm run build:desktop`);
  return { rgPath, grammarDirectory };
}
