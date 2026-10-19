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

// Undo All recovered as a sequential loop: a member that throws (for example a
// committed rejection whose handler cleanup fails) stops the loop, so later
// members stay pending, and neither group action told the user. Rejection is
// joined like acceptance, and a failed member of either group is reported with
// a Retry action. Retry first resumes committed decisions at the inline-diff
// owner, then repeats the group for anything still pending.
const rejectionMarker = '/* OpenVision joined Agent review rejection v1 */';
const originalRejection = `rejectAllDiffs(e, t) {
  const n = this.composerDataService.getHandleIfLoaded(e);
  if (!n || !this.composerDataService.getComposerData(n)) return;
  const r = this.composerDataService.getLoadedSubComposerHandles(n),
    s = [n, ...r], o = new Set(),
    a = { rejectSilently: t?.rejectSilently, sourceContext: "composer" };
  for (const c of s) {
    const l = this.composerCodeBlockService.getAllPendingDiffDescriptors(c);
    for (const u of l)
      o.has(u.id) || (o.add(u.id), this.diffChangeSourceRegistry.reject(u.id, a));
  }
}`;
const joinedRejection = `openvisionReportReviewCleanup(kind, e, t, errors) {
  ${rejectionMarker}
  for (const error of errors) console.error("[composer] Could not finish review " + kind + ":", error);
  const count = errors.length, files = count === 1 ? "1 file" : count + " files";
  try {
    this._notificationService.prompt(2,
      "OpenVision could not finish " + (kind === "accept" ? "keeping" : "undoing") + " the review of " + files +
        ". The decision is kept; retry to finish it.",
      [{ label: "Retry", run: () => {
        try { this.inlineDiffService.openvisionRetryReviewFates?.(); }
        catch (error) { console.error("[composer] Could not resume review cleanup:", error); }
        (kind === "accept" ? this.acceptAllDiffs(e, t) : this.rejectAllDiffs(e, t)).catch(() => {});
      } }]);
  } catch (error) { console.error("[composer] Could not report review cleanup failure:", error); }
}
async rejectAllDiffs(e, t) {
  const handle = this.composerDataService.getHandleIfLoaded(e);
  if (!handle || !this.composerDataService.getComposerData(handle)) return;
  const handles = [handle, ...this.composerDataService.getLoadedSubComposerHandles(handle)];
  const ids = new Set();
  for (const current of handles)
    for (const descriptor of this.composerCodeBlockService.getAllPendingDiffDescriptors(current))
      ids.add(descriptor.id);
  const options = { rejectSilently: t?.rejectSilently, sourceContext: "composer" };
  // Every member is attempted; one failure no longer leaves later members pending.
  const results = await Promise.allSettled([...ids].map(id =>
    Promise.resolve().then(() => this.diffChangeSourceRegistry.reject(id, options))));
  const errors = results.filter(result => result.status === "rejected").map(result => result.reason);
  errors.length && this.openvisionReportReviewCleanup("reject", e, t, errors);
  if (errors.length === 1) throw errors[0];
  if (errors.length > 1) throw new AggregateError(errors, "Could not reject " + errors.length + " file changes");
}`;
const acceptanceErrors = `const errors = results.filter(result => result.status === "rejected").map(result => result.reason);
  if (errors.length === 1) throw errors[0];`;

export function joinAgentReviewRejection(text) {
  const owner = agentReviewOwner(text), source = text.slice(owner.start, owner.end);
  if (source.includes(rejectionMarker)) return text;
  if (!source.includes(marker)) throw new Error('Agent review rejection requires joined acceptance');
  const methods = name => owner.body.body.filter(node => node.key?.name === name);
  const [rejection, ...others] = methods('rejectAllDiffs'), [rejectAll] = methods('rejectAll');
  if (!rejection || others.length || compact(text.slice(rejection.start, rejection.end)) !== compact(originalRejection))
    throw new Error('Agent review rejection contract changed');
  const call = 'this.rejectAllDiffs(e, t));';
  const rejectSource = rejectAll && text.slice(rejectAll.start, rejectAll.end);
  if (!rejectSource || rejectSource.split(call).length !== 2 || [...source.matchAll(/this\.rejectAllDiffs\(/g)].length !== 1 ||
      source.split(acceptanceErrors).length !== 2)
    throw new Error('Agent review rejection caller contract changed');
  const [acceptance] = methods('acceptAllDiffs');
  const edits = [
    { start: rejection.start, end: rejection.end, text: joinedRejection },
    // The caller returns the joined rejection so its outcome is observable.
    { start: rejectAll.start, end: rejectAll.end, text: rejectSource.replace('(this.analyticsService.trackEvent("composer.reject_all"',
      'return (this.analyticsService.trackEvent("composer.reject_all"') },
    { start: acceptance.start, end: acceptance.end, text: text.slice(acceptance.start, acceptance.end).replace(acceptanceErrors,
      acceptanceErrors.replace('\n', '\n  errors.length && this.openvisionReportReviewCleanup("accept", e, t, errors);\n')) },
  ];
  if (edits[1].text === rejectSource) throw new Error('Agent review rejection caller contract changed');
  for (const edit of edits.sort((left, right) => right.start - left.start))
    text = text.slice(0, edit.start) + edit.text + text.slice(edit.end);
  return text;
}

export async function installAgentReviewAcceptance(root) {
  const path = join(root, 'source/app', agentReviewEntry);
  const before = await readFile(path, 'utf8'), after = joinAgentReviewRejection(joinAgentReviewAcceptance(before));
  if (before === after) return;
  const backup = join(root, 'backups/agent-review', agentReviewEntry);
  await mkdir(dirname(backup), { recursive: true });
  await copyFile(path, backup, 1).catch(error => { if (error.code !== 'EEXIST') throw error; });
  await writeFile(path, after);
}
