import { parseExpressionAt } from '../tooling/dependencies.mjs';

const marker = '/* OpenVision resumable review removal v1 */';

function replaceOnce(source, before, after) {
  if (source.split(before).length !== 2)
    throw new Error(`Agent review removal contract changed: ${before}`);
  return source.replace(before, after);
}

export function reviewRemovalHandlerOwner(text) {
  const anchor = 'compileAndFirePartialHistory() {';
  const index = text.indexOf(anchor);
  if (index < 0 || text.indexOf(anchor, index + anchor.length) !== -1)
    throw new Error('Agent review removal handler missing or ambiguous');
  const owner = parseExpressionAt(text, text.lastIndexOf('class ', index), { ecmaVersion: 'latest' });
  if (owner.type !== 'ClassExpression') throw new Error('Agent review removal handler contract changed');
  return owner;
}

function resumableRemoval(source) {
  const expected = `remove() {
    (this.compileAndFirePartialHistory(), this.removeDecorations(),
    this.inlineDiffService.removeInlineDiff(this.inlineDiff.id), this.dispose());
  }`;
  const compact = value => value.replace(/\s+/g, '');
  if (compact(source) !== compact(expected)) throw new Error('Agent review handler removal contract changed');
  return `remove() {
    this.openvisionRemovalStep ??= 0;
    while (this.openvisionRemovalStep < 4) {
      switch (this.openvisionRemovalStep) {
        case 0: this.compileAndFirePartialHistory(); break;
        case 1: this.removeDecorations(); break;
        case 2: this.inlineDiffService.removeInlineDiff(this.inlineDiff.id); break;
        case 3: this.dispose(); break;
      }
      this.openvisionRemovalStep++;
    }
  }`;
}

function upgradeLegacyRemovalRetry(source, id) {
  if (!source.includes('let openvisionRemovalStarted')) {
    if (!source.includes(`if (this.diffHandlers.has(${id})) { return {openvisionReviewRetry: true}; }`))
      throw new Error('Agent review removal retry contract changed');
    return source;
  }
  source = replaceOnce(source, 'let openvisionRemovalStarted = false;\n', '');
  source = replaceOnce(source, `(openvisionRemovalStarted = true), this.cancelInUndo(${id}),`,
    `this.cancelInUndo(${id}),`);
  return replaceOnce(source, 'if (!openvisionRemovalStarted)', `if (this.diffHandlers.has(${id}))`);
}

export function preserveReviewRemoval(text, owner) {
  if (text.includes(marker)) return text;
  const handler = reviewRemovalHandlerOwner(text);
  const removal = handler.body.body.find(node => node.key?.name === 'remove');
  if (!removal) throw new Error('Agent review handler removal missing');
  const replacements = [{ ...removal, source: resumableRemoval(text.slice(removal.start, removal.end)) }];
  for (const name of ['remove', 'addDiff', '_remove']) {
    const method = owner.body.body.find(node => node.key?.name === name);
    if (!method) throw new Error(`Agent review removal owner missing: ${name}`);
    const source = text.slice(method.start, method.end);
    replacements.push({ ...method, source: name === '_remove'
      ? replaceOnce(source, 'this.diffHandlers.delete(n),\n              e.remove(),',
        `${marker}\ne.remove(),\n              this.diffHandlers.delete(n),`)
      : upgradeLegacyRemovalRetry(source, name === 'remove' ? 'e' : 'r') });
  }
  for (const replacement of replacements.sort((a, b) => b.start - a.start))
    text = text.slice(0, replacement.start) + replacement.source + text.slice(replacement.end);
  return text;
}
