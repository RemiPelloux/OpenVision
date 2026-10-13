import { readFile, writeFile, copyFile, mkdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { parseExpressionAt } from '../tooling/dependencies.mjs';
import { fileHash, digest } from './import-files.mjs';
import { cachedFile } from './build-cache.mjs';
import { customizeContextWork } from './context-work-customization.mjs';

const marker = '/* OpenVision demand-driven request context v2 */';
const previousMarker = '/* OpenVision demand-driven request context v1 */';
const anchor = 'class Nc {';

export function customizeContext(text) {
  if (text.includes(marker)) return text;
  const upgrading = text.includes(previousMarker);
  const start = text.indexOf(anchor);
  if (start < 0 || text.indexOf(anchor, start + anchor.length) !== -1)
    throw new Error('Request context class owner missing or ambiguous.');
  const owner = parseExpressionAt(text, start, { ecmaVersion: 'latest' });
  const source = text.slice(owner.start, owner.end);
  if (!source.includes('LocalRequestContextExecutor.computeGlobalCache') ||
      !source.includes('this.globalCache ?? this.rebuildGlobalCache()'))
    throw new Error('Request context consumer changed.');
  const edits = [];
  const obsolete = owner.body.body.find(item => item.key?.name === 'warmWorkspaceCaches');
  if (!obsolete && !upgrading) throw new Error('Request context warmup owner missing.');
  if (obsolete) edits.push({ start: obsolete.start, end: obsolete.end, body: '' });
  for (const [name, body] of Object.entries({
    rebuildAllCaches: `{ ${marker}\nthis.globalCache = undefined; this.lastGoodGlobalCache = undefined;
      this.globalCacheTraceId = undefined; }`,
    dispose: `{ this.openvisionDisposed = true;
      this.fileWatcher?.dispose(); this.fileWatcher = undefined;
      this.globalCache = undefined; this.lastGoodGlobalCache = undefined;
      this.globalCacheTraceId = undefined; this.cachedWorkspaces.clear();
      // Pending warms keep their owner until settling; their writes are suppressed.
    }`,
  })) {
    const method = owner.body.body.find(item => item.key?.name === name);
    if (!method?.value?.body) throw new Error(`Request context method missing: ${name}`);
    edits.push({ start: method.value.body.start, end: method.value.body.end, body });
  }
  for (const name of ['ensureWorkspaceCacheWarm', 'rebuildGlobalCache', 'computeCachedRequestContext']) {
    const method = owner.body.body.find(item => item.key?.name === name);
    if (!method?.value?.body) throw new Error(`Request context method missing: ${name}`);
    const guard = name === 'ensureWorkspaceCacheWarm'
      ? '\nif (this.openvisionDisposed) return Promise.resolve();\n'
      : '\nif (this.openvisionDisposed) throw new Error("Request context executor is disposed");\n';
    edits.push({ start: method.value.body.start + 1, end: method.value.body.start + 1, body: guard });
  }
  let result = text;
  for (const edit of edits.sort((a, b) => b.start - a.start))
    result = result.slice(0, edit.start) + edit.body + result.slice(edit.end);
  const eager = 'this.warmWorkspaceCaches(),\n              this.rebuildGlobalCache(),';
  const write = 'this.cachedWorkspaces.set(t, i);';
  for (const candidate of upgrading ? [] : [eager, write])
    if (result.indexOf(candidate) < 0 || result.indexOf(candidate) !== result.lastIndexOf(candidate))
      throw new Error(`Request context initializer missing or ambiguous: ${candidate}`);
  result = result.replace(eager, '/* Context loads on first request; edits only invalidate it. */');
  if (upgrading) return result;
  return result.replace(write, 'if (!this.openvisionDisposed) this.cachedWorkspaces.set(t, i);');
}

export async function installContextRuntime(root) {
  const relative = 'extensions/cursor-agent-exec/dist/main.js';
  const path = join(root, 'source/app', relative);
  const runtime = join(root, 'desktop/context-work.cjs');
  await copyFile(runtime, join(dirname(path), 'openvision-context-work.cjs'));
  const recipe = digest(JSON.stringify([await fileHash(join(root, 'desktop/context-customization.mjs')),
    await fileHash(join(root, 'desktop/context-work-customization.mjs')), await fileHash(runtime),
    await fileHash(join(root, 'tooling/package-lock.json'))]));
  await cachedFile({ path, marker: join(root, 'build/cache/request-context.json'), recipe }, async () => {
    const before = await readFile(path, 'utf8');
    const after = customizeContextWork(customizeContext(before));
    if (before === after) return;
    const backup = join(root, 'backups/request-context', relative);
    await mkdir(dirname(backup), { recursive: true });
    await copyFile(path, backup, 1).catch(error => { if (error.code !== 'EEXIST') throw error; });
    await writeFile(path, after);
  });
}
