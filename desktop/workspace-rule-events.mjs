import { parseExpressionAt } from '../tooling/dependencies.mjs';

const marker = '/* OpenVision workspace rule events v1 */';

// The native workspace adapter deliberately filters external storage events.
// Extend that owning boundary only for our rule records; unrelated workspace
// state retains its existing single-window semantics.
export function workspaceRuleEvents(text, variant) {
  if (text.includes(marker)) return text;
  const symbols = { desktop: ['vw_', 'Jan'], glass: ['WH0', 'dGn'] }[variant];
  if (!symbols) throw new Error(`Unknown workbench variant: ${variant}`);
  const [owner, existingKey] = symbols;
  const anchor = `${owner} = class extends `;
  const at = text.indexOf(anchor);
  if (at < 0 || text.indexOf(anchor, at + 1) !== -1) throw new Error('Workspace storage event owner changed');
  const start = at + `${owner} = `.length;
  const expression = parseExpressionAt(text, start, { ecmaVersion: 'latest' });
  const node = expression.type === 'SequenceExpression' ? expression.expressions[0] : expression;
  if (node.type !== 'ClassExpression') throw new Error('Workspace storage class changed');
  const method = node.body.body.find(member => member.key?.name === 'onDidChangeStorage');
  if (!method || !text.slice(start, node.end).includes('workspace: this.workspace') ||
      !text.slice(method.start, method.end).includes(`new Map([[${existingKey},`))
    throw new Error('Workspace storage event filter changed');
  const replacement = `onDidChangeStorage(event) {
    const ownsRule = key => typeof key === 'string' && key.startsWith('openvision.user-rule.v1.');
    const changed = new Map(Array.isArray(event.changed)
      ? event.changed.filter(([key]) => key === ${existingKey} || ownsRule(key)) : []);
    const deleted = new Set(Array.isArray(event.deleted) ? event.deleted.filter(ownsRule) : []);
    if (changed.size || deleted.size) this._onDidChangeItemsExternal.fire({
      changed: changed.size ? changed : undefined, deleted: deleted.size ? deleted : undefined,
    });
  }`;
  return marker + '\n' + text.slice(0, method.start) + replacement + text.slice(method.end);
}
