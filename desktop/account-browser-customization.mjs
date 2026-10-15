import { readFile, writeFile, mkdir, copyFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { parseExpressionAt } from '../tooling/dependencies.mjs';
import { digest } from './import-files.mjs';

const marker = '/* OpenVision await external browser outcome v1 */';

function shellCall(node) {
  return node?.type === 'CallExpression' && node.callee?.type === 'MemberExpression' &&
    node.callee.object.type === 'ThisExpression' && node.callee.property.name === 'doOpenShellExternal' && node.arguments.length === 2;
}

export function customizeAccountBrowser(text) {
  const matches = [...text.matchAll(/\basync openExternal\(/g)];
  if (matches.length !== 1) throw new Error('Native external browser owner is missing or ambiguous.');
  const owner = parseExpressionAt(text, text.lastIndexOf('class ', matches[0].index), { ecmaVersion: 'latest' });
  const method = owner.body.body.find(node => node.key?.name === 'openExternal');
  const fallback = owner.body.body.find(node => node.key?.name === 'doOpenShellExternal');
  if (!method?.value.async || !fallback?.value.async) throw new Error('Native external browser ownership changed.');
  const attempt = method.value.body.body.find(node => node.type === 'TryStatement');
  const result = attempt?.block.body.find(node => node.type === 'ReturnStatement')?.argument;
  if (result?.type !== 'ConditionalExpression' || !attempt.finalizer || !text.slice(attempt.finalizer.start, attempt.finalizer.end).includes('restoreSnapExportedVariables'))
    throw new Error('Native external browser result contract changed.');
  const alternate = result.alternate;
  if (alternate.type === 'AwaitExpression' && shellCall(alternate.argument)) return text;
  const [call, success] = alternate.expressions ?? [];
  if (alternate.type !== 'SequenceExpression' || alternate.expressions.length !== 2 || !shellCall(call) ||
      success?.type !== 'UnaryExpression' || success.operator !== '!' || success.argument.value !== 0)
    throw new Error('Native external browser fallback changed.');
  return `${marker}\n` + text.slice(0, alternate.start) + `await ${text.slice(call.start, call.end)}` + text.slice(alternate.end);
}

export async function installAccountBrowser(root) {
  const path = join(root, 'source/app/out/main.js');
  const before = await readFile(path, 'utf8'), after = customizeAccountBrowser(before);
  if (before === after) return;
  const backup = join(root, 'backups/account-browser', `${digest(before)}.js`);
  await mkdir(dirname(backup), { recursive: true });
  await copyFile(path, backup, 1).catch(error => { if (error.code !== 'EEXIST') throw error; });
  await writeFile(path, after);
}
