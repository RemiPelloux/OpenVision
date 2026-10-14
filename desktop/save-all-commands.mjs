import { saveWorkspaceDocuments } from './save-all-runtime.mjs';
import { workspaceSaveBoundary } from './save-all-customization.mjs';

const marker = '/* OpenVision global Save All commands v1 */';
function uniqueMatch(text, expression, label) {
  const matches = [...text.matchAll(expression)];
  if (matches.length !== 1) throw new Error(`${label} missing or ambiguous`);
  return matches[0];
}

// Patch only named global commands. Save All in Group retains its scoped semantics.
export function fixSaveAllCommands(text) {
  if (text.includes(marker)) {
    if (!text.includes(saveWorkspaceDocuments.toString())) throw new Error('Save All command runtime changed; restore selected pre-customization source');
    return text;
  }
  const textService = uniqueMatch(text, /\b([\w$]+) = [\w$]+\("textFileService"\)/g, 'Text file service')[1];
  const editorService = uniqueMatch(text, /\b([\w$]+) = [\w$]+\("editorService"\)/g, 'Editor service')[1];
  const { primary } = workspaceSaveBoundary(text);
  const edits = [];
  for (const [name, includeUntitled] of [['saveAll', true], ['workbench.action.files.saveFiles', false]]) {
    const escaped = name.replaceAll('.', '\\.');
    const id = uniqueMatch(text, new RegExp(`\\b([\\w$]+) = "${escaped}"`, 'g'), name)[1];
    const handler = uniqueMatch(text, new RegExp(`id: ${id},\\s*handler: ([^\\n]+)`, 'g'), `${name} handler`);
    const original = handler[1];
    if (!(includeUntitled ? /^\(([\w$]+)\) => [\w$]+\(\1, \1\.get\([\w$]+\)\.getGroups\(1\), \{ reason: 1 \}\),$/
      : /^async \(([\w$]+)\) => \(await \1\.get\([\w$]+\)\.saveAll\(\{ includeUntitled: !1, reason: 1 \}\)\)\.success,$/).test(original))
      throw new Error(`${name} command contract changed`);
    const start = handler.index + handler[0].lastIndexOf(original);
    edits.push([start, start + original.length, `(e) => (${saveWorkspaceDocuments.toString()}).call({
      _editorService: e.get(${editorService}), _textFileService: e.get(${textService})
    }, ${includeUntitled}, ${primary}),`]);
  }
  for (const [start, end, replacement] of edits.sort((a, b) => b[0] - a[0]))
    text = text.slice(0, start) + replacement + text.slice(end);
  return `${marker}\n${text}`;
}
