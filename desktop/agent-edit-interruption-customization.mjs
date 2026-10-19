import { copyFile, mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { agentReviewEntry } from './agent-review-customization.mjs';

// An Agent edit interrupted before its tool result (Stop, window close, or an
// abrupt exit while the write is held) keeps a bubble with only the streamed
// arguments. The recovered owners mark such a bubble "cancelled" (live, from
// the response adapter) or turn a restored "loading" bubble into "cancelled"
// (on load). The transcript only treats "error" or a non-success result as a
// failure, so a cancelled edit with no result is rendered as completed:
// "Edited", even though nothing was confirmed and the bytes may be unchanged.
// Both owners now mark an edit bubble without a result as a failed,
// interrupted edit ("Edit attempted" with this message). Edits that have a
// result (success, rejected, other failures) are unchanged.
export const agentEditInterruptionMarker = '/* OpenVision interrupted Agent edit result v1 */';
export const agentEditInterruptionEntry = agentReviewEntry;
export const interruptedEditMessage =
  'Edit interrupted before it completed. Check the file; any change that was written stays available in review.';

// The persisted bubble carries the tool type, streamed parameters and status; it
// keeps no tool call. An edit without a result was never confirmed.
const unconfirmedEdit = bubble => `(${bubble}.tool === Je.EDIT_FILE_V2 || ${bubble}.tool === Je.EDIT_FILE) &&
        ${bubble}.result === void 0 && ${bubble}.error === void 0`;
const interruptedError = `new pce({ clientVisibleErrorMessage: ${JSON.stringify(interruptedEditMessage)},
          modelVisibleErrorMessage: ${JSON.stringify(interruptedEditMessage)} })`;
const failInterruptedEdit = bubble => `${unconfirmedEdit(bubble)} &&
        ((${bubble}.error = ${interruptedError}), (${bubble}.status = "error"))`;

const load = `function I0u(e) {
  e.status === "loading" && (e.status = "cancelled");
  const t = D0u(e, { forStorage: !1 });
  return (
    (e.params = t.params),
    (e.result = t.result),
    (e.additionalData = t.additionalData),
    (e.toolCall = t.toolCall),
    e
  );
}`;
const loadFixed = `function I0u(e) {
  ${agentEditInterruptionMarker}
  e.status === "loading" && (e.status = "cancelled");
  const t = D0u(e, { forStorage: !1 });
  return (
    (e.params = t.params),
    (e.result = t.result),
    (e.additionalData = t.additionalData),
    (e.toolCall = t.toolCall),
    e.status === "cancelled" && ${failInterruptedEdit('e')},
    e
  );
}`;

const live = 't.setBubbleData(i, { status: "cancelled", ...(o ? { additionalData: o } : {}) }),';
const liveFixed = `(${unconfirmedEdit('r')}
                  ? t.setBubbleData(i, { status: "error", ...(o ? { additionalData: o } : {}), error: ${interruptedError} })
                  : t.setBubbleData(i, { status: "cancelled", ...(o ? { additionalData: o } : {}) })),`;

const once = (text, value) => text.split(value).length === 2;

export function markInterruptedAgentEdits(text) {
  if (text.includes(agentEditInterruptionMarker)) {
    if (!once(text, agentEditInterruptionMarker)) throw new Error('Interrupted Agent edit marker is ambiguous');
    return text;
  }
  const compact = value => value.replace(/\s+/g, '');
  const start = text.indexOf('function I0u(e) {');
  const end = start < 0 ? -1 : text.indexOf('\n}', start) + 2;
  if (!once(text, 'function I0u(e) {') || compact(text.slice(start, end)) !== compact(load) || !once(text, live) ||
      !text.includes('(pce = T.makeMessageType("aiserver.v1.ToolResultError"') ||
      !text.includes('cancelUnfinishedToolCalls() {'))
    throw new Error('Interrupted Agent edit contract changed');
  return (text.slice(0, start) + loadFixed + text.slice(end)).replace(live, liveFixed);
}

// Stop leaves the live edit bubble "loading": the transcript shows it as running
// while the turn is generating and as completed ("Edited") once it stops. The
// activity step now carries an error for an edit without a result; the renderer
// still shows a live "loading" state first, so an edit in progress is unchanged.
export const agentEditDisplayMarker = '/* OpenVision interrupted Agent edit display v1 */';
const stepError = 'error: o.status === "error" || k || void 0,';
const stepErrorFixed = `${agentEditDisplayMarker}
      error: o.status === "error" || k ||
        ((o.status === "loading" || o.status === "cancelled") && ${unconfirmedEdit('o')}) || void 0,`;

export function showInterruptedAgentEdits(text) {
  if (text.includes(agentEditDisplayMarker)) {
    if (!once(text, agentEditDisplayMarker)) throw new Error('Interrupted Agent edit display marker is ambiguous');
    return text;
  }
  const start = text.indexOf('\nfunction fh_({'), end = start < 0 ? -1 : text.indexOf('\n}\n', start);
  const owner = start < 0 ? '' : text.slice(start, end);
  if (!once(text, '\nfunction fh_({') || !once(owner, stepError) || !owner.includes('const o = t.toolFormerData,') ||
      !owner.includes('status: h ? "generating" : "none",'))
    throw new Error('Interrupted Agent edit display contract changed');
  return text.slice(0, start) + owner.replace(stepError, stepErrorFixed) + text.slice(end);
}

export async function installInterruptedAgentEdits(root) {
  const path = join(root, 'source/app', agentEditInterruptionEntry);
  const before = await readFile(path, 'utf8'), after = showInterruptedAgentEdits(markInterruptedAgentEdits(before));
  if (before === after) return;
  const backup = join(root, 'backups/agent-edit-interruption', agentEditInterruptionEntry);
  await mkdir(dirname(backup), { recursive: true });
  await copyFile(path, backup, 1).catch(error => { if (error.code !== 'EEXIST') throw error; });
  await writeFile(path, after);
}
