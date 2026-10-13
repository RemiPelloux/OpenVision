import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { parseExpressionAt } from '../tooling/dependencies.mjs';
import { strictModelSelection, providerSelectionErrors } from './model-selection-customization.mjs';
import { modelSelectionError, modelSelectionId } from './model-identity.js';

const options = { ecmaVersion: 'latest' };
function method(text, name, async = false) {
  const match = new RegExp(`^\\s+(${async ? 'async ' : ''}${name}\\([^\\n]+\\) \\{)`, 'm').exec(text);
  const start = match ? match.index + match[0].indexOf(match[1]) : -1;
  assert.ok(start >= 0);
  const prefix = async ? 'async function ' : 'function ';
  const expression = prefix + text.slice(start + (async ? 6 : 0));
  const node = parseExpressionAt(expression, 0, options);
  return expression.slice(0, node.end);
}

for (const variant of ['desktop', 'glass']) {
  const flag = variant === 'desktop' ? 'zc' : 'Rl';
  test(`${variant} preserves unavailable and legacy selections at the native normalization owners`, async () => {
    const source = await readFile(new URL(`../../cursor/readable/app/out/vs/workbench/workbench.${variant}.main.js`, import.meta.url), 'utf8');
    const patched = strictModelSelection(source, variant);
    assert.equal(strictModelSelection(patched, variant), patched);
    const resolve = new Function(flag, `return (${method(patched, 'resolvePersistedModelIdForRead')});`)({ localMode: true });
    const current = modelSelectionId('removed-provider', 'shared');
    const owner = { resolveToCatalogName: id => id === 'legacy' ? current : id };
    for (const value of [current, 'legacy', 'default'])
      assert.deepEqual(resolve.call(owner, value, []), { modelId: value === 'legacy' ? current : value, isFallback: false });
    const diagnostic = patched.indexOf('"Model reset by fixUnavailable"');
    const match = [...patched.slice(0, diagnostic).matchAll(/\([\w$]+ = (\([\w$]+\) => \{)/g)].at(-1);
    const start = match.index + match[0].indexOf(match[1]);
    const node = parseExpressionAt(patched, start, options), first = node.body.body[0];
    assert.equal(first.type, 'IfStatement');
    const guard = new Function(flag, node.params[0].name, patched.slice(first.start, first.end));
    const config = { modelName: current, selectedModels: [{ modelId: current, parameters: [{ id: 'reasoning', value: 'max' }] }] };
    const context = { specificModelField: 'composer', modelConfigService: { getModelConfig(field) {
      assert.equal(field, 'composer'); return config;
    } } };
    assert.equal(guard({ localMode: true }, context), config);
    assert.equal(guard({ localMode: false }, context), undefined);
    assert.throws(() => strictModelSelection(source.replace('"Model reset by fixUnavailable"', '"changed"'), variant), /owner changed/);
  });

  test(`${variant} selection failures enter the native actionable error contract`, async () => {
    const source = await readFile(new URL(`../../cursor/readable/app/out/vs/workbench/workbench.${variant}.main.js`, import.meta.url), 'utf8');
    const patched = providerSelectionErrors(source);
    assert.equal(providerSelectionErrors(patched), patched);
    const original = method(source, 'getLocalAgentProviderConfig', true);
    const wrapped = method(patched, 'getLocalAgentProviderConfig', true).replace(original.slice(original.indexOf('{') + 1, -1), '\nthrow this.failure;\n');
    const constructor = /throw new ([\w$]+)\(error.message/.exec(wrapped)[1];
    class NativeError extends Error { constructor(message, options) { super(message); Object.assign(this, options); } }
    const invoke = new Function(constructor, `return (${wrapped});`)(NativeError);
    const failure = modelSelectionError('The selected model or provider is unavailable.');
    await assert.rejects(invoke.call({ failure }), error => error instanceof NativeError &&
      error.cause === failure && error.displayInfo.detail === failure.message && error.displayInfo.isRetryable === false);
    const unknown = new Error('Unrelated failure');
    await assert.rejects(invoke.call({ failure: unknown }), error => error === unknown);
  });
}
