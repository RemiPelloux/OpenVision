import { parseExpressionAt } from '../tooling/dependencies.mjs';

const marker = '/* OpenVision retryable review undo v1 */';
const retry = 'return {openvisionReviewRetry: true};';

function replaceOnce(text, before, after) {
  if (text.split(before).length !== 2)
    throw new Error(`Agent review Undo contract changed: ${before}`);
  return text.replace(before, after);
}

export function reviewUndoOwners(text) {
  const elementIndex = text.indexOf('pK = class {');
  const invokeIndex = text.indexOf('_safeInvokeWithLocks(e, t, n, i, r)');
  if (elementIndex < 0 || invokeIndex < 0 ||
      text.indexOf('pK = class {', elementIndex + 1) !== -1 ||
      text.indexOf('_safeInvokeWithLocks(e, t, n, i, r)', invokeIndex + 1) !== -1)
    throw new Error('Agent review Undo owners missing or ambiguous');
  return {
    element: parseExpressionAt(text, elementIndex + 'pK = '.length, { ecmaVersion: 'latest' }),
    history: parseExpressionAt(text, text.lastIndexOf('class ', invokeIndex), { ecmaVersion: 'latest' }),
  };
}

function markReviewFailures(source, name) {
  const id = name === 'remove' ? 'e' : 'r';
  source = replaceOnce(source, `if (!this.openvisionRetryReviewReferences(${id})) return;`,
    `if (!this.openvisionRetryReviewReferences(${id})) { ${retry} }`);
  const restoreError = name === 'remove' ? 'g' : 'm';
  const restoreMessage = name === 'remove' ? 'Error retrieving undo data:' : 'Error in redo operation:';
  source = replaceOnce(source, `console.error("[inlineDiff] ${restoreMessage}", ${restoreError});`,
    `console.error("[inlineDiff] ${restoreMessage}", ${restoreError});
                    if (!openvisionRestored) { ${retry} }`);
  const removalError = name === 'remove' ? 'm' : 'h';
  const removalMessage = name === 'remove' ? 'Error in redo operation:' : 'Error retrieving undo data:';
  source = replaceOnce(source, `console.error("[inlineDiff] ${removalMessage}", ${removalError});`,
    `console.error("[inlineDiff] ${removalMessage}", ${removalError});
                    if (this.diffHandlers.has(${id})) { ${retry} }`);
  if (name === 'addDiff') source = replaceOnce(source,
    ': console.error("[inlineDiff] No stored data found for create diff redo");',
    ': (() => { throw new Error("[inlineDiff] No stored data found for create diff redo"); })();');
  return source;
}

function resumableMethod(direction) {
  const undo = direction === 'undo', list = undo ? 'undos' : 'redos';
  const cursor = undo ? 'openvisionUndoIndex' : 'openvisionRedoIndex';
  const opposite = undo ? 'openvisionRedoIndex' : 'openvisionUndoIndex';
  return `async ${direction}() {
          this.${cursor} ??= ${undo ? 'this.undos.length - 1' : '0'};
          while (${undo ? `this.${cursor} >= 0` : `this.${cursor} < this.redos.length`}) {
            const callback = this.${list}[this.${cursor}];
            const result = await callback();
            if (result?.openvisionReviewRetry === true)
              return {openvisionReviewRetry: this, direction: "${direction}"};
            this.${cursor}${undo ? '--' : '++'};
          }
          delete this.${cursor}; delete this.${opposite};
        }`;
}

function historyRetryMethod() {
  return `${marker}
  openvisionRetryReviewUndo(element, affected, outcome) {
    const undo = outcome.direction === "undo";
    const closest = undo ? "getClosestFutureElement" : "getClosestPastElement";
    if (!affected.editStacks.every(stack => stack[closest]() === element)) {
      this._notificationService.error("OpenVision could not finish review recovery because edit history changed. The saved review has been retained.");
      return;
    }
    for (const stack of affected.editStacks)
      undo ? stack.moveForward(element) : stack.moveBackward(element);
    this._notificationService.error("OpenVision could not finish " + (undo ? "Undo" : "Redo") +
      ". Your review data is retained. Resolve the storage or file access problem, then try " + (undo ? "Undo" : "Redo") + " again.");
  }`;
}

export function preserveReviewUndoRetry(text, reviewOwner) {
  if (text.includes(marker)) return text;
  const { element, history } = reviewUndoOwners(text);
  const replacements = [];
  for (const name of ['remove', 'addDiff']) {
    const method = reviewOwner.body.body.find(node => node.key?.name === name);
    replacements.push({ ...method, source: markReviewFailures(text.slice(method.start, method.end), name) });
  }
  const push = reviewOwner.body.body.find(node => node.key?.name === 'pushUndoElement');
  replacements.push({ ...push, source: replaceOnce(text.slice(push.start, push.end), 'n instanceof pK ? n.push(e)',
    'n instanceof pK && n.openvisionUndoIndex === undefined && n.openvisionRedoIndex === undefined ? n.push(e)') });
  for (const direction of ['undo', 'redo']) {
    const method = element.body.body.find(node => node.key?.name === direction);
    replacements.push({ ...method, source: resumableMethod(direction) });
  }
  const invoke = history.body.body.find(node => node.key?.name === '_safeInvokeWithLocks');
  let source = text.slice(invoke.start, invoke.end);
  source = replaceOnce(source, '() => (s(), i.dispose(), r()),',
    '(outcome) => (s(), i.dispose(), outcome?.openvisionReviewRetry === e.actual ? this.openvisionRetryReviewUndo(e, n, outcome) : r()),');
  // Review callbacks are asynchronous; unmarked and synchronous operations keep
  // the original completion and destructive-error policy.
  replacements.push({ ...invoke, source: historyRetryMethod() + '\n' + source });
  for (const replacement of replacements.sort((a, b) => b.start - a.start))
    text = text.slice(0, replacement.start) + replacement.source + text.slice(replacement.end);
  return text;
}
