import { copyFile, mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { parseExpressionAt } from '../tooling/dependencies.mjs';

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

export async function installAgentReviewRecovery(root) {
  const path = join(root, 'source/app', agentReviewRecoveryEntry);
  const before = await readFile(path, 'utf8'), after = preserveAgentReviewRecovery(before);
  if (before === after) return;
  const backup = join(root, 'backups/agent-review-recovery', agentReviewRecoveryEntry);
  await mkdir(dirname(backup), { recursive: true });
  await copyFile(path, backup, 1).catch(error => { if (error.code !== 'EEXIST') throw error; });
  await writeFile(path, after);
}
