import { createReadStream } from 'node:fs';
import { readFile, readdir, stat } from 'node:fs/promises';
import { dirname, join, relative, resolve, sep } from 'node:path';
import { spawnSync } from 'node:child_process';
import { createRequire } from 'node:module';
import { validateLocalModuleImports } from './generated-module-integrity.mjs';

// These extensions own Agent execution and its local services. Include their
// chunks and workers, not just the extension entry points.
const criticalExtensions = [
  'cursor-agent-exec', 'cursor-agent-host', 'cursor-agent-worker',
  'cursor-always-local', 'cursor-browser-automation', 'cursor-computer-use',
  'cursor-local-agent-runtime', 'cursor-mcp', 'cursor-ndjson-ingest',
  'cursor-retrieval',
];
const scriptPattern = /\.(?:js|mjs|cjs)$/;

async function* files(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    if (entry.isSymbolicLink()) throw new Error(`Generated artifact must not be a symlink: ${join(directory, entry.name)}`);
    if (entry.isDirectory() && entry.name !== 'node_modules') yield* files(join(directory, entry.name));
    else if (entry.isFile()) yield join(directory, entry.name);
  }
}

async function requireFile(path) {
  if (!(await stat(path)).isFile()) throw new Error(`Generated artifact is not a file: ${path}`);
  return path;
}

async function checkManifest(path, scripts) {
  let value;
  try { value = JSON.parse(await readFile(path, 'utf8')); }
  catch (error) { throw new Error(`Invalid generated package manifest: ${path}: ${error.message}`, { cause: error }); }
  if (!value || typeof value !== 'object' || Array.isArray(value))
    throw new Error(`Generated package manifest is not an object: ${path}`);
  if (value.main !== undefined) {
    if (typeof value.main !== 'string' || !value.main) throw new Error(`Invalid generated package entry: ${path}`);
    const entry = resolve(dirname(path), value.main), base = resolve(dirname(path));
    if (!entry.startsWith(base + sep)) throw new Error(`Generated package entry escapes its package: ${path}`);
    const resolved = createRequire(path).resolve(entry);
    if (!resolved.startsWith(base + sep)) throw new Error(`Resolved generated package entry escapes its package: ${path}`);
    await requireFile(resolved);
    if (scriptPattern.test(resolved)) scripts.add(resolved);
  }
  return value;
}

export async function generatedArtifactInventory(root) {
  const app = join(root, 'source/app'), scripts = new Set(), manifests = new Set([join(app, 'package.json')]);
  for (const entry of await readdir(join(app, 'out'), { withFileTypes: true }))
    if (entry.isFile() && scriptPattern.test(entry.name)) scripts.add(join(app, 'out', entry.name));
  for (const file of ['out/main.js', 'out/vs/workbench/workbench.desktop.main.js',
    'out/vs/workbench/workbench.glass.main.js', 'out/vs/workbench/api/node/extensionHostProcess.js'])
    scripts.add(await requireFile(join(app, file)));
  for (const name of criticalExtensions) {
    const directory = join(app, 'extensions', name);
    manifests.add(await requireFile(join(directory, 'package.json')));
    for await (const path of files(directory)) {
      if (scriptPattern.test(path)) scripts.add(path);
      else if (path.endsWith(`${sep}package.json`)) manifests.add(path);
    }
  }
  for (const entry of await readdir(join(app, 'extensions'), { withFileTypes: true })) {
    if (!entry.isDirectory() || entry.name === 'node_modules') continue;
    const path = join(app, 'extensions', entry.name, 'package.json');
    try { await stat(path); manifests.add(path); }
    catch (error) { if (error.code !== 'ENOENT') throw error; }
  }
  for (const path of manifests) await checkManifest(path, scripts);
  return { scripts: [...scripts].sort(), manifests: [...manifests].sort() };
}

export async function rejectCorruptText(path) {
  let bytes = 0;
  for await (const chunk of createReadStream(path, { highWaterMark: 64 * 1024 })) {
    if (chunk.includes(0)) throw new Error(`Generated text contains NUL bytes: ${path}`);
    bytes += chunk.length;
  }
  if (!bytes) throw new Error(`Generated text is empty: ${path}`);
}

// Preflight runs before any in-place customization. Syntax/import validation
// runs after customization, so an obsolete patch can still be repaired.
export async function validateGeneratedArtifacts(root, { preflight = false } = {}) {
  const inventory = await generatedArtifactInventory(root);
  for (const path of [...inventory.manifests, ...inventory.scripts]) await rejectCorruptText(path);
  if (preflight) return { scripts: inventory.scripts.length, manifests: inventory.manifests.length };
  // One parser process at a time bounds memory and releases its heap between
  // large bundles. No artifact code is imported or executed.
  for (const path of inventory.scripts) {
    const checked = spawnSync(process.execPath, ['--check', path], { stdio: 'pipe', encoding: 'utf8', maxBuffer: 64 * 1024 });
    if (checked.error) throw new Error(`Cannot validate generated JavaScript: ${relative(root, path)}: ${checked.error.message}`, { cause: checked.error });
    if (checked.status !== 0) throw new Error(`Generated JavaScript failed syntax validation: ${relative(root, path)}\n${checked.stderr}`);
  }
  const app = join(root, 'source/app');
  const manifest = JSON.parse(await readFile(join(app, 'package.json'), 'utf8'));
  const imports = await validateLocalModuleImports([join(app, 'out/main.js'), resolve(app, manifest.main)]);
  return { scripts: inventory.scripts.length, manifests: inventory.manifests.length, localModules: imports.modules };
}
