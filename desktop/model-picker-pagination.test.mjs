import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { paginateModelPicker } from './model-picker-pagination.mjs';
import { modelPage, initialModelPage, modelPageSize } from './model-picker-window.js';
import { readablePickerLabels } from './model-picker-labels.mjs';
import { parseExpressionAt } from '../tooling/dependencies.mjs';
import { readableApp } from './recovered-source.mjs';

test('all model identities remain reachable across bounded pages, including provider boundaries', () => {
  const models = Array.from({ length: 10000 }, (_, index) => ({ name: `model-${index}`, providerId: `provider-${index % 17}` }));
  const visited = new Set();
  for (let page = 0; page < 250; page++) {
    const view = modelPage(models, page), rows = [...view.groups.values()].flat();
    assert.equal(rows.length, modelPageSize);
    for (const model of rows) { assert.equal(visited.has(model), false); visited.add(model); }
  }
  assert.equal(visited.size, models.length);
  assert.equal(initialModelPage(models, models.at(-1).name, ''), 249);
  assert.equal(initialModelPage(models, models.at(-1).name, 'search'), 0);
  assert.equal(modelPage(models.slice(0, 2), 249).page, 0);
  assert.equal(modelPage([], 249).count, 0);
});

for (const variant of ['desktop', 'glass']) {
  test(`${variant} unavailable display text never changes a stored identity`, async () => {
    const source = await readFile(new URL(`out/vs/workbench/workbench.${variant}.main.js`, readableApp), 'utf8');
    const output = readablePickerLabels(source, variant);
    assert.equal(readablePickerLabels(output, variant), output);
    const index = output.indexOf('/* OpenVision readable unavailable model labels */');
    const start = [...output.slice(0, index).matchAll(/^function [\w$]+\(/gm)].at(-1).index;
    const owner = parseExpressionAt(output, start, { ecmaVersion: 'latest' });
    const factory = new Function(variant === 'desktop' ? 'zc' : 'Rl', `return (${output.slice(start, owner.end)});`);
    const selection = Object.freeze({ modelId: 'openvision-model:provider:model', parameters: [] });
    assert.equal(factory({ localMode: true })(selection, [], false), 'Unavailable model');
    assert.equal(factory({ localMode: false })(selection, [], false), selection.modelId);
    assert.equal(factory({ localMode: true })({ modelId: 'foreign' }, [], false), 'foreign');
  });
  test(`${variant} patch is idempotent and rejects a changed native result owner`, async () => {
    const source = await readFile(new URL(`out/vs/workbench/workbench.${variant}.main.js`, readableApp), 'utf8');
    const output = paginateModelPicker(source, variant);
    assert.equal(paginateModelPicker(output, variant), output);
    assert.throws(() => paginateModelPicker(source.replace('visibleModels:', 'changedModels:'), variant), /owner changed/);
  });
}
