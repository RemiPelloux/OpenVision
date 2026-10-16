// OV-501: keep project data away from the original hosted service.
// Native capture (verify:data-destinations) observed the Cmd-K context
// reranker sending file contents, file/directory names and the typed
// instruction to `aiserver.v1.CmdKService/RerankCmdKContext` during and after
// Quick Edit, even though the edit itself uses the configured provider. The
// owner methods now refuse locally; their callers already tolerate a failed
// rerank and keep the unranked local context.
// The same capture observed `FileSyncService/FSIsEnabledForUser` during Tab.
// A positive server answer would enable FSUploadFile/FSSyncFile (file bodies
// and paths); the owner now answers locally that file sync is disabled. Tab
// itself uses the configured provider.
import { copyFile, mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { parseExpressionAt } from '../tooling/dependencies.mjs';

const marker = '/* OpenVision hosted context reranking disabled v1 */';
export const projectDataTargets = ['out/vs/workbench/workbench.desktop.main.js', 'out/vs/workbench/workbench.glass.main.js'];
export const rerankUnavailable = 'OpenVision keeps Quick Edit context local: hosted context reranking is unavailable.';

// Locate the single class that owns both hosted rerank methods.
export function rerankOwner(text) {
  const anchors = [...text.matchAll(/\n\s*async rerankCmdK\([\w$]+\) \{/g)];
  if (anchors.length !== 1) throw new Error(`Cmd-K rerank owner missing or ambiguous (${anchors.length})`);
  const start = text.lastIndexOf('class extends ', anchors[0].index);
  if (start < 0) throw new Error('Cmd-K rerank owner class missing');
  const owner = parseExpressionAt(text, start, { ecmaVersion: 'latest' });
  const methods = Object.fromEntries(owner.body.body.filter(item => item.type === 'MethodDefinition')
    .map(item => [item.key?.name, item]));
  for (const name of ['rerankCmdK', 'rerankTerminalCmdK']) {
    const method = methods[name];
    if (!method) throw new Error(`Cmd-K rerank method missing: ${name}`);
    const body = text.slice(method.start, method.end);
    if (!body.includes(marker) && !/\.rerank(?:Terminal)?CmdKContext\(/.test(body))
      throw new Error(`Cmd-K rerank transport contract changed: ${name}`);
  }
  return { owner, methods };
}

export function disableHostedRerank(text) {
  const { methods } = rerankOwner(text);
  const edits = [];
  for (const name of ['rerankCmdK', 'rerankTerminalCmdK']) {
    const method = methods[name], body = method.value.body;
    if (text.slice(body.start, body.end).includes(marker)) continue;
    edits.push({ start: body.start, end: body.end,
      text: `{ ${marker}\n throw Object.assign(new Error(${JSON.stringify(rerankUnavailable)}), { name: "OpenVisionLocalOnly", feature: "cmdk-rerank" }); }` });
  }
  for (const edit of edits.sort((left, right) => right.start - left.start))
    text = text.slice(0, edit.start) + edit.text + text.slice(edit.end);
  return text;
}

const fileSyncMarker = '/* OpenVision hosted file sync disabled v1 */';
export const fileSyncTarget = 'extensions/cursor-always-local/dist/main.js';

// The file-sync client asks the server whether to upload file bodies. Answer
// locally instead; every upload/sync/config path is already guarded by it.
export function disableHostedFileSync(text) {
  const anchors = [...text.matchAll(/\n\s*async isEnabledForUserFromServer\(\) \{/g)];
  if (anchors.length !== 1) throw new Error(`File-sync enablement owner missing or ambiguous (${anchors.length})`);
  const start = text.lastIndexOf('class ', anchors[0].index);
  const owner = parseExpressionAt(text, start, { ecmaVersion: 'latest' });
  const methods = Object.fromEntries(owner.body.body.filter(item => item.type === 'MethodDefinition')
    .map(item => [item.key?.name, item]));
  const method = methods.isEnabledForUserFromServer;
  if (!method) throw new Error('File-sync enablement method missing');
  const body = text.slice(method.value.body.start, method.value.body.end);
  if (body.includes(fileSyncMarker)) return text;
  if (!body.includes('.fSIsEnabledForUser(')) throw new Error('File-sync enablement contract changed');
  for (const name of ['uploadFile', 'syncFile', 'fsConfig'])
    if (!methods[name] || !text.slice(methods[name].start, methods[name].end).includes('this.throwIfFSDisabled()'))
      throw new Error(`File-sync guard contract changed: ${name}`);
  return text.slice(0, method.value.body.start) + `{ ${fileSyncMarker}\n return false; }` + text.slice(method.value.body.end);
}

export async function installProjectDataBoundaries(root) {
  for (const [target, transform] of [...projectDataTargets.map(target => [target, disableHostedRerank]),
    [fileSyncTarget, disableHostedFileSync]]) {
    const path = join(root, 'source/app', target);
    const before = await readFile(path, 'utf8'), after = transform(before);
    if (before === after) continue;
    const backup = join(root, 'backups/project-data', target);
    await mkdir(dirname(backup), { recursive: true });
    await copyFile(path, backup, 1).catch(error => { if (error.code !== 'EEXIST') throw error; });
    await writeFile(path, after);
  }
  console.log('Project data stays local: hosted Cmd-K reranking and file sync disabled');
}
