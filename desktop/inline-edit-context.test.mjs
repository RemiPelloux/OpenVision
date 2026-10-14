import test from 'node:test';
import assert from 'node:assert/strict';
import { inlineEditContext, inlineContextCharacters } from './inline-edit-context.js';

const session = { intents: [{ items: [
  ['cmdKSelection', { lines: ['const café = 1;'], startLineNumber: 1 }],
  ['cmdKQuery', { query: 'Preserve instruction exactly 日本語' }],
  ['cmdKImmediateContext', { lines: [], relativeWorkspacePath: 'edit.js' }],
].map(([type, value]) => ({ item: { item: { case: type, value } } })) }] };
const attachment = { relativeWorkspacePath: 'edit.js', contents: 'const café = 1;\r\n',
  range: { startPosition: { line: 1, column: 1 }, endPosition: { line: 2, column: 1 } },
  signatures: { ranges: [] }, detailedLines: [{ text: 'const café = 1;\r', lineNumber: 1, isSignature: false }] };
const request = attachments => ({ rules: [{ body: 'APPROVED_RULE' }, { body: 'APPROVED_RULE' }],
  legacyContext: { promptCodeBlocks: attachments, explicitContext: { context: 'APPROVED_USER_RULE' } } });

test('exact attachment duplicates normalize once, including reordered object properties', () => {
  const reordered = { detailedLines: attachment.detailedLines, signatures: attachment.signatures,
    range: { endPosition: attachment.range.endPosition, startPosition: attachment.range.startPosition },
    contents: attachment.contents, relativeWorkspacePath: attachment.relativeWorkspacePath };
  const input = request([attachment, structuredClone(attachment), reordered]);
  const snapshot = structuredClone(input);
  const context = JSON.parse(inlineEditContext(input, session));
  assert.deepEqual(context.codeAttachments, [attachment]);
  assert.deepEqual(input, snapshot, 'Caller data is never mutated');
  assert.deepEqual(context.rules, input.rules, 'Approved rules and their order are untouched');
  assert.equal(context.userRules, 'APPROVED_USER_RULE');
  assert.equal(context.instruction, 'Preserve instruction exactly 日本語');
  assert.deepEqual(context.selection, session.intents[0].items[0].item.item.value);
});

test('different paths, ranges, text, metadata, arrays and explicit nulls remain distinct', () => {
  const variants = [attachment,
    { ...attachment, relativeWorkspacePath: 'other.js' },
    { ...attachment, range: { ...attachment.range, endPosition: { line: 3, column: 1 } } },
    { ...attachment, contents: 'const café = 2;\r\n' },
    { ...attachment, version: 2 }, { ...attachment, version: null },
    { ...attachment, detailedLines: [] },
    { ...attachment, signatures: { ranges: [{ start: 1 }, { start: 2 }] } },
    { ...attachment, signatures: { ranges: [{ start: 2 }, { start: 1 }] } }];
  assert.deepEqual(JSON.parse(inlineEditContext(request([...variants, attachment]), session)).codeAttachments, variants);
});

test('duplicate normalization cannot bypass the original input traversal and escaped-size budget', () => {
  let visited = false;
  const huge = { contents: 'x'.repeat(inlineContextCharacters) };
  assert.throws(() => inlineEditContext(request([huge, { get contents() { visited = true; return ''; } }]), session), /too large/);
  assert.equal(visited, false);
  assert.throws(() => inlineEditContext(request([{ contents: '\u0001'.repeat(inlineContextCharacters / 4) }, attachment]), session), /too large/);
  assert.throws(() => inlineEditContext(request(Array(10000).fill(attachment)), session), /too large/);
});
