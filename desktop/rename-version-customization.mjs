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

const diskMarker = '/* OpenVision rename disk changes v1 */';
const versionLoop = `          if (!before || !current || current !== before.document.deref() || current.version !== before.version)
            throw new Error("A file changed while computing the rename. Try again.");
        }
        return openvisionRenameEdit;`;
const versionSnapshot = `[data.document.uri.toString(), { document: new WeakRef(data.document), version: data.document.version }]));
`;

// Targets that are not loaded documents carry no version, so the version guard
// cannot see an external writer. Reject the whole rename when such a file:
// target was modified on disk after the provider started (50 ms covers coarse
// filesystem timestamps). Web worker hosts have no node:fs and keep v1 behavior.
export function guardRenameDiskChanges(text) {
  if (text.includes(diskMarker)) return text;
  if (!text.includes(marker)) throw Error('Rename version guard must be installed first');
  if (text.split(versionLoop).length !== 2 || text.split(versionSnapshot).length !== 2)
    throw Error('Rename version guard shape changed');
  return diskMarker + '\n' + text
    .replace(versionSnapshot, `${versionSnapshot}      const openvisionRenameStarted = Date.now();\n`)
    .replace(versionLoop, versionLoop.replace('return openvisionRenameEdit;', `const openvisionRenameFs = globalThis.process?.getBuiltinModule?.("node:fs")?.promises;
        if (openvisionRenameFs) {
          const unopened = new Map();
          for (const edit of openvisionRenameEdit.edits)
            if (edit.textEdit && typeof edit.versionId !== "number" && edit.resource?.scheme === "file") unopened.set(edit.resource.toString(), edit.resource);
          const changed = await Promise.all([...unopened.values()].map(uri => openvisionRenameFs.stat(uri.fsPath).then(
            info => Math.max(info.mtimeMs, info.ctimeMs) >= openvisionRenameStarted - 50, () => true)));
          if (changed.some(Boolean)) throw new Error("A file changed on disk while computing the rename. Try again.");
        }
        return openvisionRenameEdit;`));
}

const cancellationMarker = '/* OpenVision rename edit cancellation v1 */';
const startedLine = '      const openvisionRenameStarted = Date.now();\n';

// The workbench rename widget disposes the editor-state token source when the
// input box closes, which removes its edit listeners without cancelling, so a
// rename request in flight never sees a same-document edit. Give the provider a
// token that is also cancelled when the requested document changes. The
// version guard still decides whether the late result is applied.
export function guardRenameCancellation(text) {
  if (text.includes(cancellationMarker)) return text;
  if (!text.includes(diskMarker)) throw Error('Rename disk guard must be installed first');
  const calls = [...text.matchAll(/const (\w+) = await this\._provider\.provideRenameEdits\((\w+), (\w+), (\w+), (\w+)\);/g)]
    .filter(match => text.lastIndexOf(startedLine, match.index) > text.lastIndexOf('async provideRenameEdits(', match.index));
  if (calls.length !== 1 || text.split(startedLine).length !== 2) throw Error('Rename provider call shape changed');
  const [call, value, document, position, name, token] = calls[0];
  const linked = `      const openvisionRenameCancel = (() => {
        let cancelled = false;
        const listeners = new Set(), fire = () => {
          if (cancelled) return;
          cancelled = true;
          for (const listener of [...listeners]) try { listener(); } catch {}
          listeners.clear();
        };
        const token = { get isCancellationRequested() { return cancelled || ${token}.isCancellationRequested; },
          onCancellationRequested(listener, thisArg, disposables) {
            const run = () => listener.call(thisArg);
            let handle;
            if (token.isCancellationRequested) handle = { dispose: clearTimeout.bind(null, setTimeout(run)) };
            else { listeners.add(run); handle = { dispose: () => listeners.delete(run) }; }
            if (Array.isArray(disposables)) disposables.push(handle);
            return handle;
          } };
        const subscriptions = [${token}.onCancellationRequested(fire),
          this._documents.onDidChangeDocument(event => { if (event.document === ${document}) fire(); })];
        return { token, dispose: () => subscriptions.forEach(item => item.dispose()) };
      })();
`;
  const replacement = `const ${value} = await (async () => {
          try { return await this._provider.provideRenameEdits(${document}, ${position}, ${name}, openvisionRenameCancel.token); }
          finally { openvisionRenameCancel.dispose(); }
        })();`;
  // The listener needs the document, so it is created right after the document lookup.
  const lookup = new RegExp(`(const ${document} = this\\._documents\\.getDocument\\(\\w+\\),\\s*\\w+ = [\\w$]+\\.to\\(\\w+\\);\\n)`);
  const at = text.indexOf(startedLine);
  const head = text.slice(0, at), tail = text.slice(at).replace(call, replacement);
  if (!lookup.test(tail.slice(0, tail.indexOf(replacement)))) throw Error('Rename document lookup shape changed');
  return cancellationMarker + '\n' + head + tail.replace(lookup, `$1${linked}`);
}

export async function installRenameVersionGuard(root) {
  for (const variant of ['node/extensionHostProcess.js', 'worker/extensionHostWorkerMain.js']) {
    const path = join(root, 'source/app/out/vs/workbench/api', variant);
    const before = await readFile(path, 'utf8'), after = guardRenameCancellation(guardRenameDiskChanges(guardRenameVersions(before)));
    if (before === after) continue;
    const backup = join(root, 'backups/rename-versions', `${digest(before)}.js`);
    await mkdir(dirname(backup), { recursive: true });
    await copyFile(path, backup, 1).catch(error => { if (error.code !== 'EEXIST') throw error; });
    await writeFile(path, after);
  }
}
