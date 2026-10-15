import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { parseExpressionAt } from '../tooling/dependencies.mjs';
import { readableModelMenu } from './model-picker-layout.mjs';
import { readableApp } from './recovered-source.mjs';

function applyGuard(source, marker, variant, props) {
  const index = source.indexOf(marker);
  const start = [...source.slice(0, index).matchAll(/^function [\w$]+\(/gm)].at(-1).index;
  const owner = parseExpressionAt(source, start, { ecmaVersion: 'latest' });
  const guard = owner.body.body[0];
  return new Function(variant === 'desktop' ? 'zc' : 'Rl', owner.params[0].name,
    source.slice(guard.start, guard.end) + `\nreturn ${owner.params[0].name};`)({ localMode: true }, props);
}

for (const variant of ['desktop', 'glass']) {
  test(`${variant} native menu separates model identity from provider-specific reasoning`, async () => {
    const source = await readFile(new URL(`out/vs/workbench/workbench.${variant}.main.js`, readableApp), 'utf8');
    const patched = readableModelMenu(source, variant);
    assert.equal(readableModelMenu(patched, variant), patched);
    const model = { name: 'custom/id', inputboxShortModelName: 'My model', providerId: 'saved-provider',
      parameterDefinitions: [{ id: 'reasoning', parameterType: { enumParameter: {
        values: [{ value: 'custom-effort', displayName: 'Ultra' }],
      } } }] };
    const variantValue = { displayName: 'My model · Ultra', parameterValues: [{ id: 'reasoning', value: 'custom-effort' }] };
    const result = applyGuard(patched, '/* OpenVision model name and reasoning hierarchy */', variant,
      { model, variant: variantValue });
    assert.equal(result.variant.displayName, 'My model');
    assert.equal(result.tagline, 'Ultra');
    assert.equal(result.model, model);
    assert.equal(result.variant.parameterValues, variantValue.parameterValues);
    assert.equal(variantValue.displayName, 'My model · Ultra');
    const foreign = { model: { name: 'remote' }, variant: variantValue };
    assert.equal(applyGuard(patched, '/* OpenVision model name and reasoning hierarchy */', variant, foreign), foreign);
    const callbacks = { models: [model], onSelectionChange() {}, onParameterPreferencesChange() {} };
    const sized = applyGuard(patched, '/* OpenVision model menu dimensions */', variant, callbacks);
    assert.equal(sized.menuWidth, 360);
    assert.equal(sized.onSelectionChange, callbacks.onSelectionChange);
    assert.equal(sized.onParameterPreferencesChange, callbacks.onParameterPreferencesChange);
    assert.throws(() => readableModelMenu(source.replace('"data-model-picker-item-name":', '"changed":'), variant), /owner missing/);
  });
}
