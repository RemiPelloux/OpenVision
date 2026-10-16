// Derive analysis-only filename labels; never rewrite the captured installation.
import { createHash } from 'node:crypto';
import { parse } from '@babel/parser';

const hash = value => createHash('sha256').update(value).digest('hex');
const invalidWindowsName = /[<>:"|?*\x00-\x1f]/;

function visit(node, callback, ancestors = []) {
  if (!node || typeof node !== 'object' || typeof node.type !== 'string') return;
  callback(node, ancestors);
  for (const value of Object.values(node)) {
    if (Array.isArray(value)) value.forEach(child => visit(child, callback, [...ancestors, node]));
    else if (value && typeof value === 'object') visit(value, callback, [...ancestors, node]);
  }
}

export function portableFactoryLabels(bytes) {
  const source = bytes.toString('utf8');
  if (!Buffer.from(source).equals(bytes)) throw new Error('Input is not lossless UTF-8');
  const ast = parse(source, { sourceType: 'unambiguous' });
  const replacements = [];
  visit(ast.program, (node, ancestors) => {
    if (node.type !== 'ObjectMethod' || node.computed || node.key.type !== 'StringLiteral' ||
        !invalidWindowsName.test(node.key.value)) return;
    const object = ancestors.at(-1);
    const call = ancestors.at(-2);
    if (object?.type !== 'ObjectExpression' || object.properties.length !== 1 ||
        call?.type !== 'CallExpression' || call.arguments.length !== 1 ||
        call.arguments[0] !== object || call.callee.type !== 'Identifier') return;
    const raw = source.slice(node.key.start, node.key.end);
    // Equal ASCII widths keep both UTF-16 and byte offsets identical.
    if (!/^[\x20-\x7e]+$/.test(raw)) throw new Error('Non-ASCII factory label requires another representation');
    const stem = 'module-' + hash(raw).slice(0, 16);
    if (raw.length < stem.length + 5) throw new Error('Factory label is too short for a collision-safe name');
    const filename = stem.padEnd(raw.length - 5, '_') + '.js';
    const replacement = JSON.stringify(filename);
    const start = Buffer.byteLength(source.slice(0, node.key.start));
    replacements.push({ start, end: start + Buffer.byteLength(raw), original: raw,
      replacement, original_label: node.key.value, filename, helper: call.callee.name });
  });
  const derived = Buffer.from(bytes);
  for (const change of replacements) {
    const text = Buffer.from(change.replacement);
    if (text.length !== change.end - change.start) throw new Error('Factory-label byte width changed');
    text.copy(derived, change.start);
  }
  parse(derived.toString('utf8'), { sourceType: 'unambiguous' });
  return { derived, replacements };
}
