import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { runInNewContext } from 'node:vm';
import { parseExpressionAt } from '../tooling/dependencies.mjs';
import { workspaceRuleEvents } from './workspace-rule-events.mjs';

for (const variant of ['desktop', 'glass']) {
  test(`${variant}: workspace storage forwards owned memory changes and preserves unrelated filtering`, async () => {
    const original = await readFile(new URL(`../../cursor/readable/app/out/vs/workbench/workbench.${variant}.main.js`, import.meta.url), 'utf8');
    const transformed = workspaceRuleEvents(original, variant);
    assert.equal(workspaceRuleEvents(transformed, variant), transformed);
    const [name, base, key] = variant === 'desktop' ? ['vw_', 'pVh', 'Jan'] : ['WH0', 'gfv', 'dGn'];
    const start = transformed.indexOf(`${name} = class`) + `${name} = `.length;
    const expression = parseExpressionAt(transformed, start, { ecmaVersion: 'latest' });
    const node = expression.type === 'SequenceExpression' ? expression.expressions[0] : expression;
    const Class = runInNewContext(`(${transformed.slice(start, node.end)})`, {
      [base]: class {}, [key]: 'existing-native-key', Map, Set,
    });
    const events = [], service = Object.create(Class.prototype);
    service._onDidChangeItemsExternal = { fire: event => events.push(event) };
    const owned = 'openvision.user-rule.v1.generated-memory';
    service.onDidChangeStorage({ changed: [['unrelated-workspace-setting', 'private'], [owned, 'updated'], ['existing-native-key', 'native']] });
    assert.deepEqual([...events[0].changed], [[owned, 'updated'], ['existing-native-key', 'native']]);
    service.onDidChangeStorage({ deleted: [owned, 'unrelated-workspace-setting', 'existing-native-key'] });
    assert.deepEqual([...events[1].deleted], [owned]);
    assert.equal(events[1].changed, undefined);
    service.onDidChangeStorage({ changed: [['unrelated-workspace-setting', 'ignored']] });
    service.onDidChangeStorage({});
    assert.equal(events.length, 2, 'No events or downstream refresh for unrelated or empty changes');
    assert.throws(() => workspaceRuleEvents(original.replace(`${name} = class`, `${name}2 = class`), variant), /owner changed/);
  });
}
