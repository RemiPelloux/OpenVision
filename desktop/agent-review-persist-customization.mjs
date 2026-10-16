import { copyFile, mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { parseExpressionAt } from '../tooling/dependencies.mjs';
import { agentFileChangeOwner, agentClosedFileEntry } from './agent-closed-file-undo-customization.mjs';

// The Agent writes the file in the extension host first, then reports the change
// here. The recovered owner records the review baseline (original file state)
// only in memory; it reaches storage on a later bubble commit or periodic state
// save. An abrupt exit inside that window restarts with the changed file and no
// review to reject. Persist the conversation as soon as a file gains its review
// baseline, before the change is acknowledged back to the Agent. Later edits to
// the same file keep the first baseline and do not persist again.
//
// The completed edit (its tool bubble and before/after content references) is
// likewise only marked dirty and saved by a 30-second idle scheduler; after an
// abrupt exit the restarted conversation shows the edit as still loading, with
// no diff and no review controls. Persist once when a successful edit completes and
// its tool call is stored, before the result is used for the next model request.
export const agentReviewPersistMarker = '/* OpenVision Agent review baseline persistence v1 */';
export const agentReviewPersistEntry = agentClosedFileEntry;

function replaceOnce(text, before, after) {
  if (!text.includes(before) || text.indexOf(before) !== text.lastIndexOf(before))
    throw new Error(`Agent review baseline persistence contract changed: ${before}`);
  return text.replace(before, after);
}

const register = '    a.originalFileStates[l.toString()] === void 0 &&\n      (PRn(l, this.workspaceContextService) ||';
const deletion = 'if (t.after === void 0) {\n      console.log("[composer] Handling file deletion");';

const completed = 'h && u.setBubbleData(h, { toolCall: o });\n                    return;';
const completedMarker = '/* OpenVision Agent edit completion persistence v1 */';

// The response adapter routes an edit completion to its tool handler, then stores
// the full tool call on the bubble; the conversation header derives from both.
const stored = 'h && u.setBubbleData(h, { toolCall: o });';
export function editCompletionOwner(text) {
  const index = text.indexOf(stored);
  if (index < 0 || text.indexOf(stored, index + 1) >= 0) throw new Error('Agent edit completion owner missing or ambiguous');
  const anchor = text.lastIndexOf('async handleToolCallCompleted(t, n) {', index);
  const owner = parseExpressionAt(text, text.lastIndexOf('class ', anchor), { ecmaVersion: 'latest' });
  const method = owner.type === 'ClassExpression' &&
    owner.body.body.find(node => node.key?.name === 'handleToolCallCompleted' && node.start === anchor && node.end > index);
  const source = method && text.slice(method.start, method.end);
  if (!source?.includes('const r = this.composerDataHandle.data.composerId,') || !source.includes('const a = o.tool.case;') ||
      !source.includes('const c = this.specialToolHandlers.get(a);') || !source.includes('h.get(zs)'))
    throw new Error('Agent edit completion contract changed');
  return method;
}

function persistEditCompletion(text) {
  if (text.includes(completedMarker)) return text;
  const method = editCompletionOwner(text);
  const source = text.slice(method.start, method.end).replace(completed,
    'h && u.setBubbleData(h, { toolCall: o });\n                    ' + completedMarker + '\n' +
    '                    a === "editToolCall" && o.tool.value?.result?.result?.case === "success" &&\n' +
    '                      (await this.instantiationService.invokeFunction((p) => p.get(zs)).manuallyPersistComposer(r));\n' +
    '                    return;');
  return text.slice(0, method.start) + source + text.slice(method.end);
}

export function persistAgentReviewBaseline(text) {
  text = persistEditCompletion(text);
  const owner = agentFileChangeOwner(text);
  if (text.slice(owner.start, owner.end).includes(agentReviewPersistMarker)) return text;
  const methods = owner.body.body.filter(node => node.key?.name === '_handleFileChangeImpl');
  if (methods.length !== 1) throw new Error('Agent file-change method missing: _handleFileChangeImpl');
  const [method] = methods;
  let source = text.slice(method.start, method.end);
  if (!source.includes('this.composerDataService.updateComposerDataSetStore(i, (v) =>\n          v("originalFileStates", l.toString(), {') ||
      !text.slice(owner.start, owner.end).includes('this.composerDataService'))
    throw new Error('Agent review baseline persistence contract changed: original file state owner');
  source = replaceOnce(source, register,
    `    ${agentReviewPersistMarker}\n    const openvisionHadReviewBaseline = a.originalFileStates[l.toString()] !== void 0;\n${register}`);
  // Before deletion handling and inline-diff creation: both depend on the baseline.
  source = replaceOnce(source, deletion,
    'if (!openvisionHadReviewBaseline && a.originalFileStates[l.toString()] !== void 0)\n' +
    '      await this.composerDataService.manuallyPersistComposer(e);\n    ' + deletion);
  // The review itself (inline diff with its original lines) is otherwise written
  // only by the periodic/shutdown storage save. Persist it before returning, so the
  // change is not acknowledged while its review exists only in memory.
  const tail = '      this.composerEventService.fireDidAiEditFile({ composerId: e, path: l }));\n  }';
  if (!source.endsWith(tail) || !text.slice(owner.start, owner.end).includes('this.inlineDiffService.remove(v.id)') ||
      !text.includes('async persistInlineDiffs() {'))
    throw new Error('Agent review baseline persistence contract changed: review creation tail');
  source = source.slice(0, -'\n  }'.length) + '\n    await this.inlineDiffService.persistInlineDiffs();\n  }';
  return text.slice(0, method.start) + source + text.slice(method.end);
}

export async function installAgentReviewPersistence(root) {
  const path = join(root, 'source/app', agentReviewPersistEntry);
  const before = await readFile(path, 'utf8'), after = persistAgentReviewBaseline(before);
  if (before === after) return;
  const backup = join(root, 'backups/agent-review-persist', agentReviewPersistEntry);
  await mkdir(dirname(backup), { recursive: true });
  await copyFile(path, backup, 1).catch(error => { if (error.code !== 'EEXIST') throw error; });
  await writeFile(path, after);
}
