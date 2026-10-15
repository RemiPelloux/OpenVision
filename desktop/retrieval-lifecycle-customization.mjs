import { copyFile, mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { parseExpressionAt } from '../tooling/dependencies.mjs';

const marker = '/* OpenVision retrieval initialization ownership v1 */';
export const retrievalEntry = 'extensions/cursor-retrieval/dist/main.js';

export function retrievalOwner(text) {
  const anchor = 'async initializeGrepClient_(';
  const index = text.indexOf(anchor);
  if (index < 0 || text.indexOf(anchor, index + anchor.length) !== -1)
    throw new Error('Retrieval initialization owner missing or ambiguous');
  const owner = parseExpressionAt(text, text.lastIndexOf('class ', index), { ecmaVersion: 'latest' });
  if (!owner.body.body.some(method => method.key?.name === 'disposeGrepClient'))
    throw new Error('Retrieval disposal owner changed');
  return owner;
}

function replaceOnce(text, before, after) {
  if (!text.includes(before) || text.indexOf(before) !== text.lastIndexOf(before))
    throw new Error(`Retrieval lifecycle contract changed: ${before}`);
  return text.replace(before, after);
}

export function ownRetrievalInitialization(text) {
  const owner = retrievalOwner(text);
  if (text.slice(owner.start, owner.end).includes(marker)) return text;
  const edits = [];
  const method = name => {
    const found = owner.body.body.find(entry => entry.key?.name === name);
    if (!found) throw new Error(`Retrieval lifecycle method missing: ${name}`);
    return found;
  };
  const transform = (name, change) => {
    const node = method(name);
    edits.push({ start: node.start, end: node.end, text: change(text.slice(node.start, node.end)) });
  };
  transform('initializeGrepClient', before => {
    if (!before.includes('checkFeatureGate("instant_grep_indexing")') ||
        !before.includes('await this.initializeGrepClient_(e)'))
      throw new Error('Retrieval feature gate contract changed');
    return `async initializeGrepClient(e) {
      ${marker}
      if (this.openvisionRetrievalDisposed) return;
      const attempt = this.openvisionRetrievalAttempt = {};
      this._grepClientInitInFlight = true;
      try {
        const enabled = await $e.cursor.checkFeatureGate("instant_grep_indexing");
        if (this.openvisionRetrievalAttempt !== attempt) return;
        if (enabled && $e.cursor.indexingGrepEnabled()) await this.initializeGrepClient_(e, attempt);
        else {
          this.releaseGrepClient();
          this._fallbackMonitor.recordInit(enabled ? "indexing_grep_disabled" : "gate_off");
          this.updateTrackedStateSnapshot(null);
        }
      } catch (error) {
        if (this.openvisionRetrievalAttempt === attempt) {
          Vt.error("Failed to initialize GrepClient", error);
          this.updateTrackedStateSnapshot(null);
        }
      } finally {
        if (this.openvisionRetrievalAttempt === attempt) this._grepClientInitInFlight = false;
      }
    }`;
  });
  transform('initializeGrepClient_', before => {
    let after = replaceOnce(before, 'initializeGrepClient_(e)', 'initializeGrepClient_(e, attempt)');
    after = replaceOnce(after, '(Vt.info("Initializing GrepClient"), (this._grepClientInitInFlight = !0));',
      'Vt.info("Initializing GrepClient");');
    after = replaceOnce(after, 'const a = await $e.cursor.getSearchExcludes(e.uri),',
      'const a = await $e.cursor.getSearchExcludes(e.uri);\nif (this.openvisionRetrievalAttempt !== attempt) return;\nconst');
    after = replaceOnce(after, 'this.disposeGrepClient(),', 'this.releaseGrepClient(),');
    after = replaceOnce(after, 'r = await this.resolveMaxInMemoryDocuments_();',
      'r = await this.resolveMaxInMemoryDocuments_();\nif (this.openvisionRetrievalAttempt !== attempt) return;');
    after = replaceOnce(after, 'Vt.error("Failed to initialize GrepClient", a);',
      'if (this.openvisionRetrievalAttempt !== attempt) return;\nVt.error("Failed to initialize GrepClient", a);');
    const finalizer = after.match(/ finally \{\s*this\._grepClientInitInFlight = !1;\s*\}/g);
    if (finalizer?.length !== 1) throw new Error('Retrieval initialization finalizer changed');
    after = replaceOnce(after, finalizer[0], '');
    return after;
  });
  transform('disposeGrepClient', before => `disposeGrepClient() {
    this.openvisionRetrievalAttempt = undefined;
    this._grepClientInitInFlight = false;
    this.releaseGrepClient();
  }
  ${replaceOnce(before, 'disposeGrepClient()', 'releaseGrepClient()')}`);
  const disposal = method('dispose');
  edits.push({ start: disposal.value.body.start + 1, end: disposal.value.body.start + 1,
    text: '\nthis.openvisionRetrievalDisposed = true;\nthis.openvisionRetrievalAttempt = undefined;\n' });
  for (const edit of edits.sort((left, right) => right.start - left.start))
    text = text.slice(0, edit.start) + edit.text + text.slice(edit.end);
  return text;
}

export async function installRetrievalOwnership(root) {
  const path = join(root, 'source/app', retrievalEntry);
  const before = await readFile(path, 'utf8'), after = ownRetrievalInitialization(before);
  if (before !== after) {
    const backup = join(root, 'backups/retrieval-lifecycle', retrievalEntry);
    await mkdir(dirname(backup), { recursive: true });
    await copyFile(path, backup, 1).catch(error => { if (error.code !== 'EEXIST') throw error; });
    await writeFile(path, after);
  }
  console.log('Retrieval initialization rejects stale workspace and disposed-owner results');
}
