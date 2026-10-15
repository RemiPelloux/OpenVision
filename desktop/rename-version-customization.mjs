import { readFile, writeFile, copyFile, mkdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { parseExpressionAt } from '../tooling/dependencies.mjs';
import { digest } from './import-files.mjs';

const marker = '/* OpenVision rename document versions v1 */';

export function guardRenameVersions(text) {
  if (text.includes(marker)) return text;
  const starts = [...text.matchAll(/async provideRenameEdits\([^)]*\) \{/g)];
  if (starts.length !== 1) throw Error('Extension rename adapter missing or ambiguous');
  const start = starts[0].index;
  let owner = parseExpressionAt(text, text.lastIndexOf('class ', start), { ecmaVersion: 'latest' });
  while (owner.type === 'SequenceExpression') owner = owner.expressions.find(node => node.start <= start && node.end > start) ?? owner;
  while (owner.type === 'CallExpression' || owner.type === 'MemberExpression') owner = owner.callee ?? owner.object;
  const method = owner.body.body.find(node => node.key?.name === 'provideRenameEdits');
  if (!method || method.start !== start || method.value.params.length !== 4 ||
      !method.value.params.every(node => node.type === 'Identifier')) throw Error('Extension rename signature changed');
  const source = text.slice(method.start, method.end);
  const call = source.match(/const (\w+) = await this\._provider\.provideRenameEdits\((\w+), (\w+), (\w+), (\w+)\);/);
  const conversion = source.match(/return (\w+) \? (\w+)\.from\(\1\) : void 0;/);
  if (!call || !conversion || call[1] !== conversion[1] || call[5] !== method.value.params[3].name ||
      !source.includes('this._documents.getDocument(') || !source.includes('rejectReason:'))
    throw Error('Extension rename conversion contract changed');
  const [, value, converter] = conversion;
  const snapshot = `
      const openvisionRenameVersions = new Map(this._documents.getAllDocumentData().map(data =>
        [data.document.uri.toString(), { document: new WeakRef(data.document), version: data.document.version }]));
`;
  const replacement = `if (${call[5]}.isCancellationRequested || !${value}) return;
        const openvisionRenameEdit = ${converter}.from(${value}, {
          getTextDocumentVersion: uri => openvisionRenameVersions.get(uri.toString())?.version,
          getNotebookDocumentVersion: () => undefined,
        });
        for (const edit of openvisionRenameEdit.edits) {
          if (!edit.textEdit || typeof edit.versionId !== "number") continue;
          const before = openvisionRenameVersions.get(edit.resource.toString());
          const current = this._documents.getDocumentData(edit.resource)?.document;
          if (!before || !current || current !== before.document.deref() || current.version !== before.version)
            throw new Error("A file changed while computing the rename. Try again.");
        }
        return openvisionRenameEdit;`;
  const patched = source.replace(conversion[0], replacement);
  const bodyStart = patched.indexOf('{') + 1;
  return marker + '\n' + text.slice(0, method.start) + patched.slice(0, bodyStart) + snapshot +
    patched.slice(bodyStart) + text.slice(method.end);
}

export async function installRenameVersionGuard(root) {
  for (const variant of ['node/extensionHostProcess.js', 'worker/extensionHostWorkerMain.js']) {
    const path = join(root, 'source/app/out/vs/workbench/api', variant);
    const before = await readFile(path, 'utf8'), after = guardRenameVersions(before);
    if (before === after) continue;
    const backup = join(root, 'backups/rename-versions', `${digest(before)}.js`);
    await mkdir(dirname(backup), { recursive: true });
    await copyFile(path, backup, 1).catch(error => { if (error.code !== 'EEXIST') throw error; });
    await writeFile(path, after);
  }
}
