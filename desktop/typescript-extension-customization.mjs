import { copyFile, mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { cachedFile } from './build-cache.mjs';
import { digest, fileHash } from './import-files.mjs';

const marker = '/* OpenVision tsserver workspace file watches v1 */';

// tsserver asks the client to watch every program file. The bundled TypeScript
// extension answers each request with a single-file RelativePattern watcher,
// which the workbench serves with its own non-recursive OS watch in the main
// process (one inotify watch per program file on Linux) although the recursive
// workspace watcher already reports those files. Each registration also crosses
// the renderer. Serve file watches inside a workspace folder from one shared
// listener on the workspace watcher instead. Paths the workspace watcher may not
// report keep the original per-file watcher: non-file workspaces, paths under
// node_modules/.git/.hg, paths matched by files.watcherExclude (or by a pattern
// this matcher cannot evaluate), and paths whose real location leaves the folder.
export const sharedWatchHelper = `${marker}
function openvisionSharedFileWatch(client, id, path) {
  try {
    const vscode = require("vscode"), fs = require("fs"), paths = require("path");
    const state = client.openvisionFileWatch ??= { paths: new Map(), watcher: undefined, real: new Map() };
    const uri = vscode.Uri.file(path), folder = vscode.workspace.getWorkspaceFolder(uri);
    if (!folder || folder.uri.scheme !== "file") return false;
    const relative = paths.relative(folder.uri.fsPath, uri.fsPath);
    if (!relative || relative.startsWith("..") || paths.isAbsolute(relative)) return false;
    const segments = relative.split(paths.sep);
    if (segments.some(segment => segment === "node_modules" || segment === ".git" || segment === ".hg")) return false;
    const excludes = vscode.workspace.getConfiguration("files", folder.uri).get("watcherExclude") ?? {};
    const cacheKey = folder.uri.fsPath + "\\0" + JSON.stringify(excludes);
    let matchers = state.matchers?.get(cacheKey);
    if (!matchers) {
      matchers = [];
      for (const [pattern, enabled] of Object.entries(excludes)) {
        if (enabled !== true) continue;
        // Braces and classes are not evaluated here: keep per-file watchers.
        if (/[{}\\[\\]]/.test(pattern)) { matchers = null; break; }
        const source = pattern.replace(/\\\\/g, "/").split(/(\\*\\*\\/|\\/\\*\\*$|\\*\\*|\\*|\\?)/).map(part =>
          part === "**/" ? "(?:.*/)?" : part === "/**" ? "(?:/.*)?" : part === "**" ? ".*" : part === "*" ? "[^/]*" :
          part === "?" ? "[^/]" : part.replace(/[.+^$()|\\\\]/g, "\\\\$&")).join("");
        matchers.push(new RegExp(\`^\${source}$\`));
      }
      (state.matchers ??= new Map()).set(cacheKey, matchers);
    }
    if (!matchers) return false;
    for (const matcher of matchers) {
      for (let index = 1; index <= segments.length; index++) {
        const prefix = segments.slice(0, index).join("/");
        if (matcher.test(prefix) || matcher.test(paths.join(folder.uri.fsPath, prefix).replace(/\\\\/g, "/"))) return false;
      }
    }
    let real = state.real.get(folder.uri.fsPath);
    if (real === undefined) state.real.set(folder.uri.fsPath, real = fs.realpathSync.native(folder.uri.fsPath));
    let existing = uri.fsPath;
    while (!fs.existsSync(existing) && paths.dirname(existing) !== existing) existing = paths.dirname(existing);
    const inside = paths.relative(real, fs.realpathSync.native(existing));
    if (inside.startsWith("..") || paths.isAbsolute(inside)) return false;
    if (!state.watcher) {
      // A string glob is served by the workspace watcher; it adds no OS watch.
      state.watcher = vscode.workspace.createFileSystemWatcher("**/*");
      const forward = kind => changed => {
        for (const watchId of state.paths.get(changed.fsPath) ?? []) client.addWatchEvent(watchId, kind, changed.fsPath);
      };
      state.watcher.onDidChange(forward("updated"));
      state.watcher.onDidCreate(forward("created"));
      state.watcher.onDidDelete(forward("deleted"));
    }
    client.watches.has(id) && client.closeFileSystemWatcher(id);
    const key = uri.fsPath;
    let ids = state.paths.get(key);
    if (!ids) state.paths.set(key, ids = new Set());
    ids.add(id);
    client.watches.set(id, { dispose: () => {
      ids.delete(id);
      if (!ids.size && state.paths.get(key) === ids) state.paths.delete(key);
      client.watchEvents.delete(id);
      client.watches.delete(id);
    } });
    return true;
  } catch {
    return false;
  }
}
`;

export function shareTsserverFileWatches(text) {
  if (text.includes(marker)) return text;
  const cases = [...text.matchAll(/case "createFileWatcher": \{\n(\s*)let (\w+) = (\w+)\.body\.path;\n\s*if \(\2\.startsWith\(\w+\)\) return;\n(\s*)this\.createFileSystemWatcher\(\3\.body\.id, new (\w+)\.RelativePattern\(\5\.Uri\.file\(\2\), "\*"\)\);/g)];
  if (cases.length !== 1) throw new Error('tsserver createFileWatcher handler missing or changed');
  const [match, , path, event, indent] = cases[0];
  const methods = ['addWatchEvent(e, r, n) {', 'createFileSystemWatcher(e, r, n) {', 'closeFileSystemWatcher(e) {'];
  for (const method of methods) if (text.split(method).length !== 2) throw new Error(`tsserver watch contract changed: ${method}`);
  if (!/this\.watches\.set\(e, o\)/.test(text) || !/this\.watchEvents\.delete\(e\)/.test(text)) throw new Error('tsserver watch registry changed');
  const call = match.slice(match.lastIndexOf('this.createFileSystemWatcher('));
  const patched = match.replace(call, `if (openvisionSharedFileWatch(this, ${event}.body.id, ${path})) return;\n${indent}${call}`);
  const strict = text.indexOf('"use strict";');
  const at = strict === 0 ? strict + '"use strict";'.length + 1 : 0;
  return text.slice(0, at) + sharedWatchHelper + text.slice(at).replace(match, patched);
}

const readerMarker = '/* OpenVision tsserver reader growth v1 */';

// The extension's tsserver stdio reader grew its buffer to the bytes needed plus
// 8 KiB and copied everything already buffered on every chunk. Large responses
// arrive in hundreds of pipe chunks, so assembling the 11 MB document-symbol
// response for a 50,000-line file copied over a gigabyte and took about 2.9 s of
// extension-host time. Grow the buffer geometrically instead; the message framing
// and parsing are unchanged.
export function growTsserverReader(text) {
  if (text.includes(readerMarker)) return text;
  const pattern = /let (\w+) = \(Math\.ceil\(\(this\.index \+ (\w+)\.length\) \/ (\w+)\) \+ 1\) \* \3;\n(\s*)this\.index === 0\n\s*\? \(\(this\.buffer = Buffer\.allocUnsafe\(\1\)\), \2\.copy\(this\.buffer, 0, 0, \2\.length\)\)\n\s*: \(this\.buffer = Buffer\.concat\(\[this\.buffer\.slice\(0, this\.index\), \2\], \1\)\);/g;
  const matches = [...text.matchAll(pattern)];
  if (matches.length !== 1) throw new Error('tsserver reader append missing or changed');
  const [match, size, chunk, unit, indent] = matches[0];
  if (!text.includes('tryReadContentLength()') || !text.includes('tryReadContent(t) {')) throw new Error('tsserver reader contract changed');
  const replacement = `${readerMarker}
${indent}let ${size} = Math.max(this.buffer.length * 2, (Math.ceil((this.index + ${chunk}.length) / ${unit}) + 1) * ${unit});
${indent}const openvisionGrown = Buffer.allocUnsafe(${size});
${indent}this.buffer.copy(openvisionGrown, 0, 0, this.index);
${indent}${chunk}.copy(openvisionGrown, this.index, 0, ${chunk}.length);
${indent}this.buffer = openvisionGrown;`;
  return text.replace(match, replacement);
}

export async function installTypescriptExtensionFixes(root) {
  const relative = 'extensions/typescript-language-features/dist/extension.js', path = join(root, 'source/app', relative);
  const recipe = digest(JSON.stringify(await Promise.all(['desktop/typescript-extension-customization.mjs',
    'desktop/build-cache.mjs', 'desktop/import-files.mjs'].map(file => fileHash(join(root, file))))));
  await cachedFile({ path, recipe, marker: join(root, 'build/cache/typescript-extension.json') }, async () => {
    const before = await readFile(path, 'utf8'), after = growTsserverReader(shareTsserverFileWatches(before));
    if (before === after) return;
    const backup = join(root, 'backups/typescript-extension', relative);
    await mkdir(dirname(backup), { recursive: true });
    await copyFile(path, backup, 1).catch(error => { if (error.code !== 'EEXIST') throw error; });
    await writeFile(path, after);
  });
  console.log('tsserver file watches inside workspace folders use the workspace watcher; tsserver reader grows geometrically');
}
