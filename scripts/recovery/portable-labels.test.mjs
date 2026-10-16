import { test } from 'node:test';
import assert from 'node:assert/strict';
import { portableFactoryLabels } from './portable-labels.mjs';

test('portable analysis labels preserve byte offsets and all other input bytes', () => {
  const source = Buffer.from('const emoji = "👁"; var a = helper({\'import("../messages/**/*.json") in src/i18n.js\'(){return 42}});');
  const { derived, replacements } = portableFactoryLabels(source);
  assert.equal(replacements.length, 1);
  assert.equal(derived.length, source.length);
  const change = replacements[0];
  assert.deepEqual(derived.subarray(0, change.start), source.subarray(0, change.start));
  assert.deepEqual(derived.subarray(change.end), source.subarray(change.end));
  assert.match(change.filename, /^module-[a-f0-9]{16}_*\.js$/);
  assert.equal(source.subarray(change.start, change.end).toString(), change.original);
});

test('ordinary object methods, computed names and multi-property calls remain untouched', () => {
  const source = Buffer.from('const x = {"not:a/file.js"(){}}; helper({"not:a/file.js"(){}, other(){}}); helper({["not:a/file.js"](){}});');
  const result = portableFactoryLabels(source);
  assert.equal(result.replacements.length, 0);
  assert.deepEqual(result.derived, source);
});

test('invalid UTF-8 is rejected instead of losing input bytes', () => {
  assert.throws(() => portableFactoryLabels(Buffer.from([0xff])), /lossless UTF-8/);
});
