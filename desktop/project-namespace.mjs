import { tokenizer } from '../tooling/dependencies.mjs';

// Directory segments only: never API properties, extension IDs or vendor domains.
export function namespaceText(value) {
  return value.replace(/(^|[^\w.])\.cursor(?!\\\.)(?=$|[^\w.-])/g, '$1.openvision')
    .replace(/(^|[^\w.])\.cursorrules(?=$|[^\w.-])/g, '$1.openvisionrules');
}

export function namespaceEdits(source, json = false) {
  if (json) {
    JSON.parse(source);
    const edits = [];
    for (const match of source.matchAll(/"(?:[^"\\]|\\.)*"/g)) {
      const value = JSON.parse(match[0]), after = namespaceText(value);
      if (value !== after) edits.push({ start: match.index, before: match[0], after: JSON.stringify(after) });
    }
    return edits;
  }
  const edits = [];
  // Some recovered CLI files have an injected banner before their hashbang.
  const input = source.replace(/^#![^\r\n]*/gm, value => '//'+value.slice(2));
  for (const token of tokenizer(input, { ecmaVersion: 'latest', sourceType: 'module', allowHashBang: true })) {
    const type = token.type.label;
    if (!['string', 'template', 'regexp'].includes(type)) continue;
    const before = source.slice(token.start, token.end);
    let after;
    if (type === 'string') {
      const value = namespaceText(token.value);
      after = value === token.value ? before : JSON.stringify(value);
    } else if (type === 'regexp') {
      // Preserve domain expressions such as \.cursor\.com.
      after = before.replace(/\\\.cursor(?=\\\/|\[(?:\/\\\\|\\\\\/)\]|\$)/g, '\\.openvision');
    } else after = namespaceText(before);
    if (after !== before) edits.push({ start: token.start, before, after });
  }
  return edits;
}

export function applyNamespaceEdits(source, edits) {
  let previousEnd = 0;
  for (const edit of edits) {
    if (!Number.isSafeInteger(edit.start) || edit.start < previousEnd ||
        source.slice(edit.start, edit.start + edit.before.length) !== edit.before)
      throw new Error('Namespace edit no longer matches its source');
    previousEnd = edit.start + edit.before.length;
  }
  for (const edit of [...edits].reverse())
    source = source.slice(0, edit.start) + edit.after + source.slice(edit.start + edit.before.length);
  return source;
}
