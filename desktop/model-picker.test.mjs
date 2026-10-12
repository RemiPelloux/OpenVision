import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { parseExpressionAt } from '../tooling/dependencies.mjs';
import { localModelPicker } from './model-picker.mjs';

const marker = '/* OpenVision local model parameter menu */';
for (const variant of ['desktop', 'glass']) {
  test(`${variant} native picker enables local provider submenus without changing model capabilities`, async () => {
    const source = await readFile(new URL(`../../cursor/readable/app/out/vs/workbench/workbench.${variant}.main.js`, import.meta.url), 'utf8');
    const patched = localModelPicker(source, variant);
    assert.equal(localModelPicker(patched, variant), patched);
    const index = patched.indexOf(marker);
    const start = [...patched.slice(0, index).matchAll(/^function [\w$]+\(/gm)].at(-1).index;
    const owner = parseExpressionAt(patched, start, { ecmaVersion: 'latest' });
    const first = owner.body.body[0];
    assert.equal(first.type, 'IfStatement');
    // Execute the real inserted boundary with the original function's props.
    // The rest of the native renderer retains its own submenu and accessibility.
    const apply = new Function(variant === 'desktop' ? 'zc' : 'Rl', owner.params[0].name,
      patched.slice(first.start, first.end) + `\nreturn ${owner.params[0].name};`);
    const models = [
      { name: 'gpt', providerId: 'provider-a', parameterDefinitions: [{ id: 'reasoning' }] },
      { name: 'deepseek', providerId: 'provider-b', parameterDefinitions: [] },
    ];
    const selected = [{ modelId: 'gpt', parameters: [{ id: 'reasoning', value: 'max' }] }];
    const props = { models, initialSelections: selected, showModelOptionsOnHover: false,
      disableModelParameterEditing: true, onParameterPreferencesChange() {} };
    const result = apply({ localMode: true }, props);
    assert.equal(result.showModelOptionsOnHover, true);
    assert.equal(result.disableModelParameterEditing, false);
    assert.equal(result.models, models);
    assert.equal(result.initialSelections, selected);
    assert.equal(result.onParameterPreferencesChange, props.onParameterPreferencesChange);
    assert.equal(props.disableModelParameterEditing, true, 'Do not mutate caller props');
    assert.equal(apply({ localMode: false }, props), props);
    const other = { ...props, models: [{ name: 'remote', parameterDefinitions: [] }] };
    assert.equal(apply({ localMode: true }, other), other);
    assert.throws(() => localModelPicker(source.replace(/showModelOptionsOnHover:\s*[\w$]+,\s*displayConfiguration:\s*[\w$]+,\s*labels:/,
      'changedPickerContract:'), variant), /owner missing/);
  });
}
