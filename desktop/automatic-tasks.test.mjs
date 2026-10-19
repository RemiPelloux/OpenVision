import assert from 'node:assert/strict';
import test from 'node:test';
import { readFile } from 'node:fs/promises';
import { automaticTasksOff } from './automatic-tasks-customization.mjs';

const fixture = `const tasks = {
    "task.allowAutomaticTasks": {
      type: "string",
      enum: ["on", "off"],
      enumDescriptions: [S(9885, null), S(9886, null)],
      description: S(9887, null),
      default: "on",
      restricted: !0,
    },
    "task.reconnection": { type: "boolean", default: !0 } };`;

test('automatic folder-open tasks default to off; idempotent and drift-guarded', () => {
  const output = automaticTasksOff(fixture);
  const value = Function('S', `${output.replace('const tasks =', 'return')}`)(() => '');
  assert.equal(value['task.allowAutomaticTasks'].default, 'off');
  assert.equal(value['task.allowAutomaticTasks'].restricted, true);
  assert.equal(automaticTasksOff(output), output);
  assert.throws(() => automaticTasksOff(fixture.replace('default: "on"', 'default: "auto"')), /missing or ambiguous/);
  assert.throws(() => automaticTasksOff(fixture + fixture), /missing or ambiguous/);
});

for (const variant of ['desktop', 'glass'])
  test(`${variant} prepared workbench has exactly one automatic task default`, async t => {
    let text;
    try { text = await readFile(new URL(`../source/app/out/vs/workbench/workbench.${variant}.main.js`, import.meta.url), 'utf8'); }
    catch (error) { if (error.code === 'ENOENT') return t.skip('Prepared workbench required'); throw error; }
    const output = automaticTasksOff(text);
    assert.equal(automaticTasksOff(output), output);
    assert.equal(output.split('/* OpenVision automatic tasks off by default v1 */').length, 2);
  });
