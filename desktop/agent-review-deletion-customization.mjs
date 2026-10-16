import { reviewRemovalHandlerOwner } from './agent-review-removal-customization.mjs';

// Owns two post-commit boundaries of the recovered inline-diff service:
// 1. Deleting a separately persisted live-review record is tracked until storage
//    acknowledges it, retried by the persistence owner (including the awaited
//    shutdown flush) and never applied to a review that is live again.
// 2. Accept/reject commits resume from their failed step instead of replaying
//    already completed commit side effects such as text edits and history entries.
export const reviewDeletionMarker = '/* OpenVision owned review record deletion v1 */';
const fateMarker = '/* OpenVision resumable review fate v1 */';

const escape = value => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

// Minified-output formatting may differ; tokens and their order may not.
function replaceOnce(source, before, after) {
  const pattern = new RegExp(before.trim().split(/\s+/).map(escape).join('\\s*'), 'g');
  const matches = [...source.matchAll(pattern)];
  if (matches.length !== 1) throw new Error(`Agent review deletion contract changed: ${before.trim().slice(0, 80)}`);
  const [match] = matches;
  return source.slice(0, match.index) + after + source.slice(match.index + match[0].length);
}

function deletionMethods() {
  return `${reviewDeletionMarker}
          openvisionReviewIsLive(id) {
            // A handler with a committed accept/reject fate is only finishing cleanup.
            const handler = this.diffHandlers.get(id);
            return handler ? !handler.openvisionFate : this.inlineDiffs.value.some(diff => diff.id === id);
          }
          openvisionRetryReviewFates() {
            for (const [id, handler] of [...this.diffHandlers])
              if (handler.openvisionFate)
                try { handler.openvisionFate.kind === "accept" ? this.acceptDiff(id) : this.rejectDiff(id); }
                catch (error) { console.error("[inlineDiff] Error completing committed review cleanup:", error); }
          }
          openvisionDeleteStoredReview(id) {
            const persisted = this._persistedDiffIds.delete(id);
            const pending = this.openvisionPendingReviewDeletions?.get(id);
            if (!persisted && !pending) return Promise.resolve();
            // Join an outstanding request instead of sending a duplicate deletion.
            if (!persisted && !pending.failed) return pending.attempt;
            return this.openvisionAttemptReviewDeletion(id);
          }
          openvisionAttemptReviewDeletion(id) {
            const pending = this.openvisionPendingReviewDeletions ??= new Map();
            const entry = { failed: false };
            let request;
            try { request = Promise.resolve(this.storageService.cursorDiskKVClearPrefix(this.getInlineDiffStorageKey(id))); }
            catch (error) { request = Promise.reject(error); }
            entry.attempt = request.then(() => {
              if (pending.get(id) === entry) pending.delete(id);
            }, error => {
              entry.failed = true;
              entry.error = error;
              console.error("[inlineDiff] Error deleting storage key for diff:", error);
            });
            pending.set(id, entry);
            return entry.attempt;
          }
          async openvisionRetryReviewDeletions() {
            const attempts = [];
            for (const [id, entry] of this.openvisionPendingReviewDeletions ?? []) {
              // A review restored under the same id owns its record again.
              if (this.openvisionReviewIsLive(id)) continue;
              attempts.push(entry.failed ? this.openvisionAttemptReviewDeletion(id) : entry.attempt);
            }
            await Promise.all(attempts);
          }
          `;
}

function ownRecordDeletion(owner, text) {
  const edits = [];
  const method = name => {
    const node = owner.body.body.find(candidate => candidate.key?.name === name);
    if (!node) throw new Error(`Agent review deletion owner missing: ${name}`);
    return node;
  };
  const removal = method('_remove');
  edits.push({ node: removal, source: deletionMethods() + replaceOnce(text.slice(removal.start, removal.end),
    `this._persistedDiffIds.has(n) && (this._persistedDiffIds.delete(n), this.storageService
      .cursorDiskKVClearPrefix(this.getInlineDiffStorageKey(n)) .catch((s) => {
      console.error("[inlineDiff] Error deleting storage key for diff:", s); })),`,
    'this.openvisionDeleteStoredReview(n),') });
  const persist = method('persistInlineDiffs');
  let source = text.slice(persist.start, persist.end);
  source = replaceOnce(source, 'async persistInlineDiffs() { try {',
    'async persistInlineDiffs() {\n            this.openvisionRetryReviewFates();\n            await this.openvisionRetryReviewDeletions();\n            try {');
  source = replaceOnce(source, '(t) => t.composerMetadata !== void 0 && this._dirtyDiffIds.has(t.id),',
    '(t) => t.composerMetadata !== void 0 && this._dirtyDiffIds.has(t.id) && this.openvisionReviewIsLive(t.id),');
  source = replaceOnce(source, 'this._dirtyDiffIds.delete(t.id), this._persistedDiffIds.add(t.id));',
    `this._dirtyDiffIds.delete(t.id), this._persistedDiffIds.add(t.id));
                  // Accepted or rejected while this write was outstanding.
                  if (!this.openvisionReviewIsLive(t.id)) await this.openvisionDeleteStoredReview(t.id);`);
  edits.push({ node: persist, source });
  return edits;
}

function resumableFates(owner, text) {
  const method = name => owner.body.body.find(candidate => candidate.key?.name === name);
  const edits = [];
  let accept = text.slice(method('acceptDiff').start, method('acceptDiff').end);
  accept = replaceOnce(accept, 'const n = this.diffHandlers.get(e); if (!n) return;',
    `const n = this.diffHandlers.get(e);
            if (!n) return;
            ${fateMarker}
            const openvisionFate = n.openvisionFate;
            if (openvisionFate?.kind === "reject") return this.rejectDiff(e, ...openvisionFate.args);
            openvisionFate ? ([t] = openvisionFate.args) : (n.openvisionFate = { kind: "accept", stage: 0, args: [t] });
            // The accepted text is already on disk; its pending-review record ends with this decision.
            this.openvisionDeleteStoredReview(e);`);
  const telemetry = accept.match(/this\.telemetryService\.publicLogCapture\(\w+, \{/g);
  if (telemetry?.length !== 1) throw new Error('Agent review acceptance telemetry contract changed');
  accept = accept.replace(telemetry[0], `openvisionFate || ${telemetry[0]}`);
  accept = replaceOnce(accept, 'const i = this.getUndoResourceForInlineDiff(n.inlineDiff); this.pushUndoElement(',
    'const i = this.getUndoResourceForInlineDiff(n.inlineDiff);\n            openvisionFate || this.pushUndoElement(');
  accept = replaceOnce(accept, 'let r = [], s = []; const o = []; (n instanceof Mge &&',
    `let r = openvisionFate?.accepted ?? [],
              s = openvisionFate?.rejected ?? [];
            const o = openvisionFate?.fates ?? [];
            Object.assign(n.openvisionFate, { accepted: r, rejected: s, fates: o });
            (!openvisionFate && n instanceof Mge &&`);
  accept = replaceOnce(accept, 'n.accept(), this._onDidAcceptDiff.fire({',
    `n.openvisionFate.stage < 1 &&
                (n.openvisionRemovalStep === void 0 ? n.accept() : n.remove(), (n.openvisionFate.stage = 1)),
              n.openvisionFate.stage < 2 && (this._onDidAcceptDiff.fire({`);
  accept = replaceOnce(accept, '}), this.remove(e, { closePromptBar: !0, accepted: !0 }));',
    '}), (n.openvisionFate.stage = 2)),\n              this.remove(e, { closePromptBar: !0, accepted: !0 }));');
  edits.push({ node: method('acceptDiff'), source: accept });

  let reject = text.slice(method('rejectDiff').start, method('rejectDiff').end);
  reject = replaceOnce(reject, 'if (!i) { this.removeInlineDiff(e); return; }',
    `if (!i) {
              this.removeInlineDiff(e);
              return;
            }
            ${fateMarker}
            const openvisionFate = i.openvisionFate;
            if (openvisionFate?.kind === "accept") return this.acceptDiff(e, ...openvisionFate.args);
            openvisionFate && ([t, n] = openvisionFate.args);`);
  reject = replaceOnce(reject, 't?.rejectSilently !== !0 && this.telemetryService.publicLogCapture(',
    '!openvisionFate && t?.rejectSilently !== !0 &&\n              this.telemetryService.publicLogCapture(');
  reject = replaceOnce(reject, 'const r = this.getUndoResourceForInlineDiff(i.inlineDiff); this.pushUndoElement(',
    'const r = this.getUndoResourceForInlineDiff(i.inlineDiff);\n            openvisionFate || this.pushUndoElement(');
  reject = replaceOnce(reject, 'const s = []; (i instanceof Mge &&',
    `const s = openvisionFate?.fates ?? [];
            openvisionFate || (i.openvisionFate = { kind: "reject", stage: 0, args: [t, n], fates: s });
            (!openvisionFate && i instanceof Mge &&`);
  reject = replaceOnce(reject, 'i.reject({ rejectSilently: t?.rejectSilently }, n), i.callRejectCallback(), t?.rejectSilently || this._onDidRejectDiff.fire({',
    `i.openvisionFate.stage < 1 && (i.reject({ rejectSilently: t?.rejectSilently }, n), (i.openvisionFate.stage = 1),
                // The record ends only after the original text has been restored.
                this.openvisionDeleteStoredReview(e)),
              i.openvisionFate.stage < 2 && (i.callRejectCallback(), (i.openvisionFate.stage = 2)),
              i.openvisionFate.stage < 3 && (t?.rejectSilently ||
                this._onDidRejectDiff.fire({`);
  reject = replaceOnce(reject, 'partialInlineDiffFates: s, }));',
    'partialInlineDiffFates: s,\n                }), (i.openvisionFate.stage = 3)));');
  edits.push({ node: method('rejectDiff'), source: reject });

  let remove = text.slice(method('remove').start, method('remove').end);
  remove = replaceOnce(remove, 'const n = this.diffHandlers.get(e); if (!n) return;',
    `const n = this.diffHandlers.get(e);
            if (!n) return;
            // A registered removal resumes its handler cleanup; its history entry and snapshot exist.
            if (n.openvisionRemovalRegistered) return this._remove(n);`);
  remove = replaceOnce(remove, 'if (this.diffHandlers.has(e)) return;',
    `const openvisionCommitted = this.diffHandlers.get(e);
                    if (openvisionCommitted?.openvisionFate) {
                      try {
                        openvisionCommitted.openvisionFate.kind === "accept" ? this.acceptDiff(e) : this.rejectDiff(e);
                      } catch (error) {
                        console.error("[inlineDiff] Error completing committed review cleanup:", error);
                        return {openvisionReviewRetry: true};
                      }
                    }
                    if (this.diffHandlers.has(e)) return;`);
  remove = replaceOnce(remove, '(this.pushUndoElement(h, {}),',
    '(this.pushUndoElement(h, {}),\n              (n.openvisionRemovalRegistered = !0),');
  edits.push({ node: method('remove'), source: remove });
  return edits;
}

function idempotentHandlerRejection(text) {
  const handler = reviewRemovalHandlerOwner(text);
  const node = handler.body.body.find(candidate => candidate.key?.name === 'reject');
  if (!node) throw new Error('Agent review handler rejection missing');
  return { node, source: replaceOnce(text.slice(node.start, node.end),
    'r.push(...this.modelRef.object.textEditorModel.applyEdits(i, !0));',
    `// Retrying a committed rejection must not reapply its text edits.
              r.push(...(this.openvisionRejectedEdits ??= this.modelRef.object.textEditorModel.applyEdits(i, !0)));`) };
}

export function preserveReviewDeletion(text, owner) {
  if (text.slice(owner.start, owner.end).includes(reviewDeletionMarker)) return text;
  const edits = [...ownRecordDeletion(owner, text), ...resumableFates(owner, text), idempotentHandlerRejection(text)];
  for (const { node, source } of edits.sort((a, b) => b.node.start - a.node.start))
    text = text.slice(0, node.start) + source + text.slice(node.end);
  return text;
}
