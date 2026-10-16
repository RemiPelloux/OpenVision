import { copyFile, mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { parseExpressionAt } from '../tooling/dependencies.mjs';
import { preserveReviewUndoRetry } from './agent-review-undo-customization.mjs';

const marker = '/* OpenVision review recovery ownership v1 */';
export const agentReviewRecoveryEntry = 'out/vs/workbench/workbench.desktop.main.js';

export function agentReviewRecoveryOwner(text) {
  const anchor = '[inlineDiff] No revived diff found for create diff undo';
  const index = text.indexOf(anchor);
  if (index < 0 || text.indexOf(anchor, index + anchor.length) !== -1)
    throw new Error('Agent review recovery owner missing or ambiguous');
  const owner = parseExpressionAt(text, text.lastIndexOf('class ', index), { ecmaVersion: 'latest' });
  if (owner.type !== 'ClassExpression' || !owner.body.body.some(node =>
    node.key?.name === 'remove' && node.start < index && node.end > index))
    throw new Error('Agent review recovery class contract changed');
  return owner;
}

function replaceOnce(text, before, after) {
  if (!text.includes(before) || text.indexOf(before) !== text.lastIndexOf(before))
    throw new Error(`Agent review recovery contract changed: ${before}`);
  return text.replace(before, after);
}

export function preserveAgentReviewRecovery(text) {
  const recovered = preserveAgentReviewSnapshotOwnership(text);
  return preserveReviewUndoRetry(recovered, agentReviewRecoveryOwner(recovered));
}

export function preserveAgentReviewSnapshotOwnership(text) {
  return ownFailedReviewReferences(preserveCreatedReviewRecovery(preserveRemovedReviewRecovery(text)));
}

function preserveRemovedReviewRecovery(text) {
  const owner = agentReviewRecoveryOwner(text);
  const method = owner.body.body.find(node => node.key?.name === 'remove');
  let source = text.slice(method.start, method.end);
  if (source.includes(marker)) return text;
  source = replaceOnce(source, 'let i;', `let i;\n${marker}\nlet openvisionPendingModelReference, openvisionSnapshotWrite;`);
  source = replaceOnce(source, 'this.setStoredInlineDiff(s, n.inlineDiff).catch((m) => {',
    'openvisionSnapshotWrite = this.setStoredInlineDiff(s, n.inlineDiff).catch((m) => {');
  source = replaceOnce(source, 'let m;\n                  try {\n                    let g;',
    `let m, openvisionRestored = false;
                  try {
                    await openvisionSnapshotWrite;
                    if (openvisionPendingModelReference) {
                      openvisionPendingModelReference.dispose();
                      openvisionPendingModelReference = undefined;
                    }
                    if (this.diffHandlers.has(e)) return;
                    let g;`);
  source = replaceOnce(source, 'this.diffHandlers.set(e, i),',
    'this.diffHandlers.set(e, i),\n                      (openvisionRestored = true),');
  const cleanup = source.match(/\(m\?\.dispose\(\),\s*r &&\s*s &&\s*this\.setStoredInlineDiff\(s, void 0\)\.catch\(\(g\) =>\s*console\.error\("\[inlineDiff\] Error cleaning up undo data:", g\),\s*\)\);/g);
  if (cleanup?.length !== 1) throw new Error('Agent review recovery cleanup contract changed');
  source = replaceOnce(source, cleanup[0], `if (m) {
                      try { m.dispose(); }
                      catch (error) {
                        openvisionPendingModelReference = m;
                        console.error("[inlineDiff] Error releasing failed undo model reference:", error);
                      }
                    }
                    if (openvisionRestored && r && s)
                      await this.setStoredInlineDiff(s, void 0).catch(error =>
                        console.error("[inlineDiff] Error cleaning up undo data:", error));`);
  source = replaceOnce(source, 'r && s && this.setStoredInlineDiff(s, m.inlineDiff),',
    'r && s && (await this.setStoredInlineDiff(s, m.inlineDiff)),');
  return text.slice(0, method.start) + source + text.slice(method.end);
}

function preserveCreatedReviewRecovery(text) {
  const owner = agentReviewRecoveryOwner(text);
  const method = owner.body.body.find(node => node.key?.name === 'addDiff');
  if (!method) throw new Error('Agent review creation owner missing');
  let source = text.slice(method.start, method.end);
  const creationMarker = '/* OpenVision created review recovery ownership v1 */';
  if (source.includes(creationMarker)) return text;
  source = replaceOnce(source, 'let o,', `${creationMarker}\nlet openvisionPendingCreateReference;\nlet o,`);
  const write = source.match(/await this\.setStoredInlineDiff\(l, h\.inlineDiff\)\.catch\(\(m\) =>\s*console\.error\("\[inlineDiff\] Error storing undo data:", m\),\s*\)/g);
  if (write?.length !== 1) throw new Error('Agent review creation snapshot contract changed');
  source = replaceOnce(source, write[0], 'await this.setStoredInlineDiff(l, h.inlineDiff)');
  source = replaceOnce(source, 'let h;\n                  try {\n                    const m = await this.getStoredInlineDiff(l);',
    `let h, openvisionRestored = false;
                  try {
                    if (openvisionPendingCreateReference) {
                      openvisionPendingCreateReference.dispose();
                      openvisionPendingCreateReference = undefined;
                    }
                    if (this.diffHandlers.has(r)) return;
                    const m = await this.getStoredInlineDiff(l);`);
  source = replaceOnce(source, 'this.diffHandlers.set(r, o),',
    'this.diffHandlers.set(r, o),\n                        (openvisionRestored = true),');
  const cleanup = source.match(/\(h\?\.dispose\(\),\s*this\.setStoredInlineDiff\(l, void 0\)\.catch\(\(m\) =>\s*console\.error\("\[inlineDiff\] Error cleaning up redo data:", m\),\s*\)\);/g);
  if (cleanup?.length !== 1) throw new Error('Agent review creation cleanup contract changed');
  source = replaceOnce(source, cleanup[0], `if (h) {
                      try { h.dispose(); }
                      catch (error) {
                        openvisionPendingCreateReference = h;
                        console.error("[inlineDiff] Error releasing failed redo model reference:", error);
                      }
                    }
                    if (openvisionRestored)
                      await this.setStoredInlineDiff(l, void 0).catch(error =>
                        console.error("[inlineDiff] Error cleaning up redo data:", error));`);
  return text.slice(0, method.start) + source + text.slice(method.end);
}

function ownFailedReviewReferences(text) {
  const owner = agentReviewRecoveryOwner(text);
  const ownershipMarker = '/* OpenVision review reference ownership v2 */';
  if (text.slice(owner.start, owner.end).includes(ownershipMarker)) return text;
  const replacements = [];
  for (const [name, reference, diffId, operation] of [
    ['remove', 'openvisionPendingModelReference', 'e', 'undo'],
    ['addDiff', 'openvisionPendingCreateReference', 'r', 'redo'],
  ]) {
    const method = owner.body.body.find(node => node.key?.name === name);
    let source = text.slice(method.start, method.end);
    source = name === 'remove'
      ? replaceOnce(source, 'let openvisionPendingModelReference, openvisionSnapshotWrite;', 'let openvisionSnapshotWrite;')
      : replaceOnce(source, 'let openvisionPendingCreateReference;\n', '');
    source = replaceOnce(source, `if (${reference}) {\n                      ${reference}.dispose();\n                      ${reference} = undefined;\n                    }`,
      `if (!this.openvisionRetryReviewReferences(${diffId})) return;`);
    const local = name === 'remove' ? 'm' : 'h';
    source = replaceOnce(source, `if (${local}) {\n                      try { ${local}.dispose(); }\n                      catch (error) {\n                        ${reference} = ${local};\n                        console.error("[inlineDiff] Error releasing failed ${operation} model reference:", error);\n                      }\n                    }`,
      `if (${local}) this.openvisionReleaseReviewReference(${local}, {diffId: ${diffId}, operation: "${operation}"});`);
    source = source.replace('{', '{\n            this.openvisionRetryReviewReferences();');
    replacements.push({ method, source });
  }
  const dispose = owner.body.body.find(node => node.key?.name === 'dispose');
  if (!dispose) throw new Error('Agent review service disposal owner missing');
  const disposal = text.slice(dispose.start, dispose.end);
  if (!disposal.includes('super.dispose();') || !disposal.includes('this.diffHandlers.clear()'))
    throw new Error('Agent review service disposal contract changed');
  const body = disposal.slice(disposal.indexOf('{') + 1, -1);
  replacements.push({ method: dispose, source: `${ownershipMarker}
          openvisionReleaseReviewReference(reference, context) {
            this.openvisionFailedReviewReferences ??= new Map();
            try {
              reference.dispose();
              this.openvisionFailedReviewReferences.delete(reference);
              return true;
            } catch (error) {
              this.openvisionFailedReviewReferences.set(reference, {...context, error});
              console.error("[inlineDiff] Error releasing failed " + context.operation + " model reference:", error);
              return false;
            }
          }
          openvisionRetryReviewReferences(diffId) {
            let blocked = false;
            for (const [reference, context] of this.openvisionFailedReviewReferences ?? [])
              if (!this.openvisionReleaseReviewReference(reference, context) && context.diffId === diffId)
                blocked = true;
            return !blocked;
          }
          dispose() {
            let openvisionDisposeError;
            try { ${body} }
            catch (error) { openvisionDisposeError = error; }
            this.openvisionRetryReviewReferences();
            const failures = [...(this.openvisionFailedReviewReferences?.values() ?? [])].map(context => context.error);
            if (openvisionDisposeError) failures.unshift(openvisionDisposeError);
            if (failures.length)
              throw new AggregateError(failures, "[inlineDiff] Review service cleanup remains incomplete");
          }` });
  for (const { method, source } of replacements.sort((a, b) => b.method.start - a.method.start))
    text = text.slice(0, method.start) + source + text.slice(method.end);
  return text;
}

export async function installAgentReviewRecovery(root) {
  const path = join(root, 'source/app', agentReviewRecoveryEntry);
  const before = await readFile(path, 'utf8'), after = preserveAgentReviewRecovery(before);
  if (before === after) return;
  const backup = join(root, 'backups/agent-review-recovery', agentReviewRecoveryEntry);
  await mkdir(dirname(backup), { recursive: true });
  await copyFile(path, backup, 1).catch(error => { if (error.code !== 'EEXIST') throw error; });
  await writeFile(path, after);
}
