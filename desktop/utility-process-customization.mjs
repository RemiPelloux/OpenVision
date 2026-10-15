import { mkdir, readFile, writeFile, copyFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { utilityProcessContract } from './utility-process-contract.mjs';
import { digest } from './import-files.mjs';

const marker = '/* OpenVision utility process listener ownership v1 */';
const field = 'this.openvisionProcessListeners';

function replaceCount(text, before, after, count) {
  if (text.split(before).length !== count + 1) throw Error(`Utility process contract changed: ${before}`);
  return text.replaceAll(before, after);
}

export function ownUtilityProcessListeners(text) {
  if (text.includes(marker)) return text;
  const { base, window, method } = utilityProcessContract(text);
  if (text.includes('openvisionProcessListeners') || !text.includes('(Te = $E)'))
    throw Error('Utility process disposable owner changed');
  const edits = [];
  for (const [owner, name, count] of [[base, 'registerListeners', 7], [base, 'once', 1], [window, 'registerWindowListeners', 2]]) {
    const node = method(owner, name), source = text.slice(node.start, node.end);
    edits.push({ start: node.start, end: node.end,
      value: replaceCount(source, 'this._register(', `${field}.add(`, count) });
  }
  const ended = method(base, 'onDidExitOrCrashOrKill');
  const terminalSource = text.slice(ended.start, ended.end);
  if (!terminalSource.includes('Hn.all.delete(this.processPid)') || !terminalSource.includes('(this.process = void 0)'))
    throw Error('Utility process termination identity changed');
  edits.push({ start: ended.value.body.end - 1, end: ended.value.body.end - 1,
    value: `${field}.clear();` });
  const kill = method(base, 'kill');
  const decision = kill.value.body.body.at(-1)?.expression?.expressions?.at(-1);
  const requested = decision?.consequent;
  if (decision?.type !== 'ConditionalExpression' || requested?.type !== 'SequenceExpression' ||
      requested.expressions.length !== 2 || text.slice(decision.test.start, decision.test.end) !== 'this.process.kill()' ||
      text.slice(requested.expressions[1].start, requested.expressions[1].end) !== 'this.onDidExitOrCrashOrKill()')
    throw Error('Utility process kill ownership changed');
  edits.push({ start: requested.start, end: requested.end,
    value: text.slice(requested.expressions[0].start, requested.expressions[0].end) });
  // A successful kill is a termination request. The exit/crash notification
  // releases listeners and identity; a failed kill retains the same owner too.
  edits.push({ start: base.body.start + 1, end: base.body.start + 1,
    value: `\nopenvisionProcessListeners = this._register(new Te());\n` });
  for (const edit of edits.sort((a, b) => b.start - a.start))
    text = text.slice(0, edit.start) + edit.value + text.slice(edit.end);
  return `${marker}\n${text}`;
}

export async function installUtilityProcessOwnership(root) {
  const path = join(root, 'source/app/out/main.js'), before = await readFile(path, 'utf8');
  const after = ownUtilityProcessListeners(before);
  if (before === after) return;
  const backup = join(root, 'backups/utility-process', `${digest(before)}.js`);
  await mkdir(dirname(backup), { recursive: true });
  await copyFile(path, backup, 1).catch(error => { if (error.code !== 'EEXIST') throw error; });
  await writeFile(path, after);
}
