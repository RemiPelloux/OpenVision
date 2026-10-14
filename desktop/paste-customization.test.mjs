import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { parseExpressionAt } from '../tooling/dependencies.mjs';
import { customizePaste } from './paste-customization.mjs';

for (const [variant, owner, props] of [['desktop', 'Dxv', 'e'], ['glass', 'VAm', 't']]) {
  test(`${variant}: recovered clipboard owner receives the file path before rich text expansion`, async () => {
    const source = await readFile(new URL(`../../cursor/readable/app/out/vs/workbench/workbench.${variant}.main.js`, import.meta.url), 'utf8');
    const result = customizePaste(source, variant);
    assert.equal(customizePaste(result, variant), result);
    const anchor = `${owner} = `, start = result.indexOf(anchor) + anchor.length;
    let node = parseExpressionAt(result, start, { ecmaVersion: 'latest' });
    if (node.type === 'SequenceExpression') node = node.expressions[0];
    assert.equal(node.type, 'ArrowFunctionExpression');
    const body = result.slice(node.start, node.end);
    assert.ok(body.indexOf('openvisionHandleLargePaste(v,') < body.indexOf('getData("Text")'));
    assert.ok(body.includes('setMode("token")'), 'A pending reference must not merge with surrounding text');
    assert.ok(body.includes('setMode("normal")'), 'Failure fallback must remain editable');
    assert.ok(result.includes(`await openvisionWaitForLargePastes(${props});`));
    assert.equal(result.match(/openvisionHandleLargePaste\(v,/g).length, 1);
    assert.throws(() => customizePaste(source.replace('"copyPasteMentions"', '"different-storage-owner"'), variant), /owner changed/);
  });
}
