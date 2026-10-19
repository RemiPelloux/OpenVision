import { copyFile, mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { parseExpressionAt } from '../tooling/dependencies.mjs';
import { cachedFile } from './build-cache.mjs';
import { digest, fileHash } from './import-files.mjs';

const marker = '/* OpenVision non-recursive watcher disposal v1 */';

// The main process serves each window's non-recursive file watches through a
// per-session watcher client whose in-process Node.js watcher only stops its
// fs.watch handles in stop(). Disposing the session (window close or reload)
// disposed the client but never stopped those handles, so a closed project's
// watched folders kept their inotify watches until the application exited
// (OV-304 --watchers). Stop every active watcher when it is disposed.
export function nodeWatcherOwner(text) {
  const anchor = '`[File Watcher (node.js)] ${e}`';
  const index = text.indexOf(anchor);
  if (index < 0 || text.indexOf(anchor, index + 1) !== -1) throw new Error('Node.js watcher owner missing or ambiguous');
  for (let start = text.lastIndexOf('class', index), tries = 0; start >= 0 && tries < 50; start = text.lastIndexOf('class', start - 1)) {
    if (/[\w$]/.test(text[start - 1] ?? '') || /[\w$]/.test(text[start + 5] ?? '')) continue;
    tries++;
    let node;
    try { node = parseExpressionAt(text, start, { ecmaVersion: 'latest' }); } catch { continue; }
    if (node.type === 'ClassExpression' && node.start <= index && node.end > index) return node;
  }
  throw new Error('Node.js watcher class not found');
}

export function disposeNodeWatchers(text) {
  const owner = nodeWatcherOwner(text);
  if (text.slice(owner.start, owner.end).includes(marker)) return text;
  const names = owner.body.body.map(entry => entry.key?.name);
  for (const name of ['watchers', 'stopWatching', 'stop']) if (!names.includes(name)) throw new Error(`Node.js watcher contract changed: ${name}`);
  if (names.includes('dispose')) throw new Error('Node.js watcher already defines dispose');
  const stop = owner.body.body.find(entry => entry.key?.name === 'stopWatching');
  const method = `
          ${marker}
          dispose() {
            for (const watcher of Array.from(this.watchers)) this.stopWatching(watcher);
            super.dispose();
          }
`;
  return text.slice(0, stop.start) + method.trimStart() + '\n          ' + text.slice(stop.start);
}

export async function installWatcherDisposal(root) {
  const relative = 'out/main.js', path = join(root, 'source/app', relative);
  const recipe = digest(JSON.stringify(await Promise.all(['desktop/watcher-dispose-customization.mjs',
    'desktop/build-cache.mjs', 'desktop/import-files.mjs', 'tooling/dependencies.mjs',
    'tooling/package-lock.json'].map(file => fileHash(join(root, file))))));
  await cachedFile({ path, recipe, marker: join(root, 'build/cache/watcher-dispose.json') }, async () => {
    const before = await readFile(path, 'utf8'), after = disposeNodeWatchers(before);
    if (before === after) return;
    const backup = join(root, 'backups/watcher-dispose', relative);
    await mkdir(dirname(backup), { recursive: true });
    await copyFile(path, backup, 1).catch(error => { if (error.code !== 'EEXIST') throw error; });
    await writeFile(path, after);
  });
  console.log('Closed windows release their non-recursive file watches');
}
