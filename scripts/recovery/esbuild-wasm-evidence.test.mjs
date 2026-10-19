import { test } from 'node:test';
import assert from 'node:assert/strict';
import { compare, pins, summary } from './esbuild-wasm-evidence.mjs';

const module = extra => Buffer.from([0, 0x61, 0x73, 0x6d, 1, 0, 0, 0, 1, 4, 1, 0x60, 0, 0, 3, 2, 1, 0, 7, 7, 1, 3, 0x72, 0x75, 0x6e, 0, 0,
  10, 4, 1, 2, 0, 0x0b, 0, extra.length + 6, 5, 0x6e, 0x6f, 0x74, 0x65, 0x73, ...extra]);

test('bounded summary and byte comparison explain a mismatch without decoding bodies', () => {
  const left = module([1, 2, 3]), right = module([1, 2, 4, 5]);
  const brief = summary(left);
  assert.equal(brief.valid, true);
  assert.deepEqual(brief.exports, ['run:func']);
  assert.deepEqual(brief.sections.map(item => item.name ?? item.kind), ['type', 'function', 'export', 'code', 'notes']);
  assert.deepEqual(compare(left, left), { identical: true });
  const difference = compare(left, right);
  assert.equal(difference.identical, false);
  assert.equal(difference.firstDifferenceOffset, 34);
  assert.deepEqual(difference.sections, [{ kind: 'notes', expected: 9, actual: 10 }]);
});

test('pins name the esbuild tag commit and the Go release archive', () => {
  assert.match(pins.esbuild.commit, /^[0-9a-f]{40}$/);
  assert.equal(pins.esbuild.tag, 'v0.25.9');
  assert.match(pins.go.sha256, /^[0-9a-f]{64}$/);
  assert.ok(pins.build.includes('-trimpath') && pins.build.includes('-ldflags=-s -w'));
});
