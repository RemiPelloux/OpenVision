import { copyFile, mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { parseExpressionAt } from '../tooling/dependencies.mjs';

const marker = '/* OpenVision unopened Agent edit undo v1 */';
export const agentClosedFileEntry = 'out/vs/workbench/workbench.desktop.main.js';

export function agentFileChangeOwner(text) {
  const anchors = [...text.matchAll(/async _handleFileChangeImpl\(e, t, n\) \{/g)];
  if (anchors.length !== 1) throw new Error('Agent file-change owner missing or ambiguous');
  const owner = parseExpressionAt(text, text.lastIndexOf('class ', anchors[0].index), { ecmaVersion: 'latest' });
  if (owner.type !== 'ClassExpression' || !owner.body.body.some(node => node.start === anchors[0].index))
    throw new Error('Agent file-change class contract changed');
  return owner;
}

function replaceOnce(text, before, after) {
  if (!text.includes(before) || text.indexOf(before) !== text.lastIndexOf(before))
    throw new Error(`Agent closed-file undo contract changed: ${before}`);
  return text.replace(before, after);
}

const undoMethods = `
  openvisionUnopenedAgentEditIsFresh(uri, after) {
    const model = this.textFileService.files.get(uri)?.textEditorModel;
    if (!model) return true;
    // Compare the model representation; raw source bytes remain in the checkpoint.
    const expected = after.replace(/^\\uFEFF/, "").replace(/\\r\\n|\\r|\\n/g, model.getEOL());
    return !this.textFileService.isDirty(uri) && model.getValue() === expected;
  }
  openvisionRecordUnopenedAgentEdit({ uri, before, after, model }) {
    if (typeof before !== "string" || before === after) return;
    const beforeEol = before.match(/\\r\\n|\\r|\\n/)?.[0] ?? model.getEOL();
    const afterEol = model.getEOL();
    const unsupported = value => {
      const eol = value.match(/\\r\\n|\\r|\\n/)?.[0] ?? model.getEOL();
      return value.startsWith("\\uFEFF") || eol === "\\r" || value.replace(/\\r\\n|\\r|\\n/g, eol) !== value;
    };
    if (unsupported(before) || unsupported(after)) {
      this.logService.warn("[OpenVision] Agent undo baseline uses an unsupported byte representation"); return;
    }
    if (model.getValue() !== after)
      throw new Error("The file changed while recording Agent undo. Its current contents were preserved.");
    const apply = async (expected, replacement, eol) => {
      const reference = await this.textModelService.createModelReference(uri);
      try {
        const current = reference.object.textEditorModel;
        if (current.getValue() !== expected)
          throw new Error("The file has changed since this Agent edit. Undo or redo was not applied.");
        current.applyEdits([{ range: current.getFullModelRange(), text: replacement }]);
        current.setEOL(eol === "\\r\\n" ? 1 : 0);
      } finally { reference.dispose(); }
    };
    this.inlineDiffService.pushUndoElement(new pK(
      "Undo Agent Edit", "undo-agent-file-edit", Vn(), uri,
      () => apply(after, before, beforeEol), () => apply(before, after, afterEol)
    ), { breakConsolidation: true });
  }
`;

export function preserveUnopenedAgentUndo(text) {
  const owner = agentFileChangeOwner(text);
  if (text.slice(owner.start, owner.end).includes(marker)) return text;
  const edits = [];
  const transform = (name, change) => {
    const methods = owner.body.body.filter(node => node.key?.name === name);
    if (methods.length !== 1) throw new Error(`Agent file-change method missing: ${name}`);
    const node = methods[0];
    edits.push({ start: node.start, end: node.end, text: change(text.slice(node.start, node.end)) });
  };
  transform('_handleFileChangeImpl', source => {
    source = replaceOnce(source,
      'if (!l) throw new Error(`[composer] Failed to resolve path: ${t.path}`);',
      'if (!l) throw new Error(`[composer] Failed to resolve path: ${t.path}`);\n' + marker + '\n' +
      'const openvisionNeedsTextUndo = typeof t.before === "string" && typeof t.after === "string" &&\n' +
      '!l.path.endsWith(".ipynb") && !this.textFileService.files.get(l)?.textEditorModel;');
    source = replaceOnce(source, 'const g = t.after;',
      'if (openvisionNeedsTextUndo && !this.openvisionUnopenedAgentEditIsFresh(l, t.after)) {\n' +
      'this.logService.warn("[OpenVision] Preserved user changes while processing a delayed Agent edit"); return;\n}\nconst g = t.after;');
    return replaceOnce(source, 't.metadata.toolCallId ?? "",', 't.metadata.toolCallId ?? "",\nopenvisionNeedsTextUndo,');
  });
  transform('handleRegularFileChangeWithInlineDiffs', source => {
    source = replaceOnce(source, '(e, t, n, i, r) {', '(e, t, n, i, r, openvisionNeedsTextUndo = false) {');
    return replaceOnce(source, 'this._handleRegularFileChange(e, t, n, i, r)',
      'this._handleRegularFileChange(e, t, n, i, r, openvisionNeedsTextUndo)');
  });
  transform('_handleRegularFileChange', source => {
    source = replaceOnce(source, '(e, t, n, i, r) {', '(e, t, n, i, r, openvisionNeedsTextUndo = false) {');
    const resolve = 'await this.textFileService.files.resolve(t, { reload: { async: !1 }, forceReadFromFile: !0 });';
    return replaceOnce(source, resolve, resolve + '\nif (openvisionNeedsTextUndo)\n' +
      'this.openvisionRecordUnopenedAgentEdit({ uri: t, before: n, after: i, model: o.object.textEditorModel });');
  });
  edits.push({ start: owner.body.end - 1, end: owner.body.end - 1, text: undoMethods });
  for (const edit of edits.sort((left, right) => right.start - left.start))
    text = text.slice(0, edit.start) + edit.text + text.slice(edit.end);
  return text;
}

export async function installUnopenedAgentUndo(root) {
  const path = join(root, 'source/app', agentClosedFileEntry);
  const before = await readFile(path, 'utf8'), after = preserveUnopenedAgentUndo(before);
  if (before === after) return;
  const backup = join(root, 'backups/agent-closed-file-undo', agentClosedFileEntry);
  await mkdir(dirname(backup), { recursive: true });
  await copyFile(path, backup, 1).catch(error => { if (error.code !== 'EEXIST') throw error; });
  await writeFile(path, after);
}
