import { parseExpressionAt } from '../tooling/dependencies.mjs';

// The native owner is selected by its module and parsed class, not a global
// replacement of event registrations belonging to unrelated services.
export function utilityProcessContract(text) {
  const modules = [...text.matchAll(/"utilityProcess\.js"\(\)\s*\{/g)];
  if (modules.length !== 1) throw Error('Utility process module missing or ambiguous');
  const offset = text.indexOf('Hn = class extends z', modules[0].index);
  if (offset < 0) throw Error('Utility process owner changed');
  const base = parseExpressionAt(text, text.indexOf('class', offset), { ecmaVersion: 'latest' });
  const childOffset = text.indexOf('fp = class extends Hn', base.end);
  if (childOffset < 0) throw Error('Window utility process owner changed');
  const window = parseExpressionAt(text, text.indexOf('class', childOffset), { ecmaVersion: 'latest' });
  const method = (owner, name) => {
    const value = owner.body.body.find(item => item.key?.name === name);
    if (!value) throw Error(`Utility process method missing: ${name}`);
    return value;
  };
  return { base, window, method };
}

export function exposeUtilityProcessOwners(text) {
  const { window } = utilityProcessContract(text);
  const decoration = '(fp = __decorate([__param(0, J), __param(1, dt), __param(2, at)], fp))';
  const offset = text.indexOf(decoration, window.end);
  if (offset < 0 || offset - window.end > 100) throw Error('Utility process initialization changed');
  const exposed = `(${decoration}, globalThis.__openvisionUtilityOwners = { Base: Hn, Window: fp })`;
  return text.slice(0, offset) + exposed + text.slice(offset + decoration.length);
}
