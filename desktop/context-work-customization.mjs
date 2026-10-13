import { parseExpressionAt } from '../tooling/dependencies.mjs';

const marker = '/* OpenVision bounded workspace context v1 */';

function descendants(node, predicate, result = []) {
  if (!node || typeof node !== 'object') return result;
  if (predicate(node)) result.push(node);
  for (const value of Object.values(node)) {
    if (Array.isArray(value)) value.forEach(child => descendants(child, predicate, result));
    else if (value && typeof value === 'object') descendants(value, predicate, result);
  }
  return result;
}

export function customizeContextWork(text) {
  if (text.includes(marker)) return text;
  const start = text.indexOf('class Nc {');
  if (start < 0 || text.indexOf('class Nc {', start + 1) >= 0)
    throw new Error('Workspace context owner missing or ambiguous');
  const owner = parseExpressionAt(text, start, { ecmaVersion: 'latest' });
  const method = owner.body.body.find(item => item.key?.name === 'collectWorkspaceCaches')?.value;
  if (!method?.async) throw new Error('Workspace context collection contract changed');
  const matches = descendants(method.body, node => node.type === 'CallExpression' &&
    node.callee?.object?.name === 'Promise' && node.callee.property?.name === 'all' &&
    node.arguments[0]?.callee?.object?.property?.name === 'workspacePaths');
  if (matches.length !== 1) throw new Error('Workspace context fan-out missing or ambiguous');
  const aggregate = matches[0], callback = aggregate.arguments[0].arguments[0];
  const reads = descendants(callback, node => node.type === 'AwaitExpression' &&
    node.argument?.callee?.type === 'FunctionExpression' && node.argument.arguments.length === 4 &&
    node.argument.arguments[2]?.property?.name === 'repoPath');
  const warms = descendants(callback, node => node.type === 'ReturnStatement' &&
    text.slice(node.start, node.end).replace(/\s/g, '') === 'return((o=!1),voidthis.ensureWorkspaceCacheWarm(n.ctx,e));');
  if (reads.length !== 1 || warms.length !== 1) throw new Error('Workspace Git read/warm contract changed');
  const read = reads[0].argument;
  if (text.slice(read.arguments[2].start, read.arguments[2].end) !== 'r.repoPath')
    throw new Error('Workspace repository identity binding changed');
  const edits = [
    { start: read.start, end: read.end, value: `openvisionContextWork.repositoryRead(openvisionRepoReads, r.repoPath, () => (${text.slice(read.start, read.end)}))` },
    { start: warms[0].start, end: warms[0].end, value: 'return ((o = !1), void openvisionContextWork.warmWorkspaces(this, n.ctx));' },
  ];
  let body = text.slice(callback.start, callback.end);
  for (const edit of edits.sort((a, b) => b.start - a.start))
    body = body.slice(0, edit.start - callback.start) + edit.value + body.slice(edit.end - callback.start);
  text = text.slice(0, aggregate.start) + `openvisionContextWork.mapWorkspaces(this, ${body})` + text.slice(aggregate.end);
  const at = method.body.start + 1;
  text = text.slice(0, at) + '\nconst openvisionRepoReads = new Map();\nif (this.openvisionDisposed) throw new Error("Request context executor is disposed");\n' + text.slice(at);
  return `${marker}\nconst openvisionContextWork = require("./openvision-context-work.cjs");\n${text}`;
}
