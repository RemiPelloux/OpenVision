import { copyFile, mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { parseExpressionAt } from '../tooling/dependencies.mjs';

const marker = '/* OpenVision joined Agent review acceptance v1 */';
export const agentReviewEntry = 'out/vs/workbench/workbench.desktop.main.js';
const callers = ['acceptAll', '_applyWorktreeToCurrentBranchViaMerge'];

export function agentReviewOwner(text) {
  const anchors = [...text.matchAll(/\b(?:async )?acceptAllDiffs\(e, t\) \{/g)];
  if (anchors.length !== 1) throw new Error('Agent review owner missing or ambiguous');
  const owner = parseExpressionAt(text, text.lastIndexOf('class ', anchors[0].index), { ecmaVersion: 'latest' });
  if (owner.type !== 'ClassExpression' || !owner.body.body.some(node => node.start === anchors[0].index))
    throw new Error('Agent review class contract changed');
  return owner;
}

const originalAcceptance = `acceptAllDiffs(e, t) {
  const n = this.composerDataService.getHandleIfLoaded(e);
  if (!n) return;
  const i = this.composerDataService.getLoadedSubComposerHandles(n),
    r = [n, ...i], s = new Set(), o = { sourceContext: t };
  for (const a of r) {
    const c = this.composerCodeBlockService.getAllPendingDiffDescriptors(a);
    for (const l of c)
      s.has(l.id) || (s.add(l.id), this.diffChangeSourceRegistry.accept(l.id, o));
  }
}`;
const compact = text => text.replace(/\s+/g, '');

const joinedAcceptance = `async acceptAllDiffs(e, t) {
  ${marker}
  const handle = this.composerDataService.getHandleIfLoaded(e);
  if (!handle) return;
  const handles = [handle, ...this.composerDataService.getLoadedSubComposerHandles(handle)];
  const ids = new Set();
  for (const current of handles)
    for (const descriptor of this.composerCodeBlockService.getAllPendingDiffDescriptors(current))
      ids.add(descriptor.id);
  const options = { sourceContext: t };
  const results = await Promise.allSettled([...ids].map(id =>
    Promise.resolve().then(() => this.diffChangeSourceRegistry.accept(id, options))));
  const errors = results.filter(result => result.status === "rejected").map(result => result.reason);
  if (errors.length === 1) throw errors[0];
  if (errors.length > 1) throw new AggregateError(errors, "Could not accept " + errors.length + " file changes");
}`;

export function joinAgentReviewAcceptance(text) {
  const owner = agentReviewOwner(text), source = text.slice(owner.start, owner.end);
  if (source.includes(marker)) return text;
  const getMethod = name => {
    const methods = owner.body.body.filter(node => node.key?.name === name);
    if (methods.length !== 1) throw new Error(`Agent review method missing or ambiguous: ${name}`);
    return methods[0];
  };
  const acceptance = getMethod('acceptAllDiffs');
  if (compact(text.slice(acceptance.start, acceptance.end)) !== compact(originalAcceptance))
    throw new Error('Agent review acceptance contract changed');
  const call = 'this.acceptAllDiffs(e, "composer");';
  if ([...source.matchAll(/this\.acceptAllDiffs\(/g)].length !== callers.length)
    throw new Error('Agent review caller contract changed');
  const edits = [{ start: acceptance.start, end: acceptance.end, text: joinedAcceptance }];
  for (const name of callers) {
    const method = getMethod(name), before = text.slice(method.start, method.end);
    if (!method.value.async || !before.includes(call) || before.indexOf(call) !== before.lastIndexOf(call))
      throw new Error(`Agent review async caller contract changed: ${name}`);
    edits.push({ start: method.start, end: method.end, text: before.replace(call, `await ${call}`) });
  }
  for (const edit of edits.sort((left, right) => right.start - left.start))
    text = text.slice(0, edit.start) + edit.text + text.slice(edit.end);
  return text;
}

export async function installAgentReviewAcceptance(root) {
  const path = join(root, 'source/app', agentReviewEntry);
  const before = await readFile(path, 'utf8'), after = joinAgentReviewAcceptance(before);
  if (before === after) return;
  const backup = join(root, 'backups/agent-review', agentReviewEntry);
  await mkdir(dirname(backup), { recursive: true });
  await copyFile(path, backup, 1).catch(error => { if (error.code !== 'EEXIST') throw error; });
  await writeFile(path, after);
}
