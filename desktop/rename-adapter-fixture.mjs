import { runInNewContext } from 'node:vm';
import { parseExpressionAt } from '../tooling/dependencies.mjs';

// Execute the actual recovered class, with controlled document/provider boundaries.
export function compileRenameAdapter(source, context = {}) {
  const offset = source.indexOf('async provideRenameEdits(');
  let owner = parseExpressionAt(source, source.lastIndexOf('class ', offset), { ecmaVersion: 'latest' });
  while (owner.type === 'SequenceExpression')
    owner = owner.expressions.find(node => node.start <= offset && node.end > offset);
  while (owner.type === 'CallExpression' || owner.type === 'MemberExpression') owner = owner.callee ?? owner.object;
  const code = source.slice(owner.start, owner.end);
  const converter = code.match(/(\w+)\.from\(/)[1];
  const position = code.match(/(\w+)\.to\(a\)/)[1];
  return runInNewContext(`(${code})`, { [position]: { to: value => value },
    [converter]: { from: (edits, versions) => ({ edits: edits.map(edit => ({ ...edit,
      versionId: versions?.getTextDocumentVersion(edit.resource) })) }) }, ...context });
}
