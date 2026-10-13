import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { parseExpressionAt } from '../tooling/dependencies.mjs';
import { preserveReasoningSelection } from './reasoning-selection-customization.mjs';
import { readablePickerLabels } from './model-picker-labels.mjs';
import { unavailableReasoning } from './model-reasoning.js';

for (const variant of ['desktop', 'glass']) {
  test(`${variant} retains explicit parameters through native normalization and submission`, async () => {
    const source = await readFile(new URL(`../../cursor/readable/app/out/vs/workbench/workbench.${variant}.main.js`, import.meta.url), 'utf8');
    const patched = preserveReasoningSelection(readablePickerLabels(source, variant), variant);
    assert.equal(preserveReasoningSelection(patched, variant), patched);
    const flag = variant === 'desktop' ? 'zc' : 'Rl';
    const owner = /function [\w$]+\([\w$]+, [\w$]+, [\w$]+\) \{\n  if \([\w$]+\.localMode && [\w$]+\.providerId\) return [\w$]+;/.exec(patched);
    assert.ok(owner);
    const node = parseExpressionAt(patched, owner.index, { ecmaVersion: 'latest' });
    const normalize = new Function(flag, `return (${patched.slice(owner.index, node.end)});`)({ localMode: true });
    const saved = [{ id: 'reasoning', value: 'removed-ultra' }];
    assert.equal(normalize({ providerId: 'fixture' }, saved, false), saved);
    const index = patched.indexOf('resolveModelParametersForSubmission(');
    const expression = 'function ' + patched.slice(index);
    const method = parseExpressionAt(expression, 0, { ecmaVersion: 'latest' });
    const submit = new Function(flag, `return (${expression.slice(0, method.end)});`)({ localMode: true });
    assert.equal(submit.call({}, 'openvision-model:fixture:model', saved, false), saved);
    assert.equal(submit.call({ getModelParameterPreferences: () => ({ parameters: saved }) }, 'openvision-model:fixture:model', [], false), saved);
    assert.equal(unavailableReasoning(saved, ['high']), 'removed-ultra');
    const marker = patched.indexOf('/* OpenVision refresh local catalog metadata */');
    const equalityStart = [...patched.slice(0, marker).matchAll(/^function [\w$]+\(/gm)].at(-1).index;
    const equalityNode = parseExpressionAt(patched, equalityStart, { ecmaVersion: 'latest' });
    const equals = new Function(flag, `return (${patched.slice(equalityStart, equalityNode.end)});`)({ localMode: true });
    const old = { providerId: 'fixture', name: 'model', variants: ['ultra'] };
    assert.equal(equals([old], [old]), true);
    assert.equal(equals([{ ...old, variants: ['high'] }], [old]), false, 'Same model ID does not mean unchanged capabilities');
  });
}
