import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { loadTreeChunkLazily, treeChunkLazyBundles, treeChunkLazyMarker } from './tree-chunk-lazy-customization.mjs';
import { readableApp } from './recovered-source.mjs';

// Shape of the recovered 3.21.13 owner (agent-exec, formatted bundle).
const sample = `      Fhe = require("@anysphere/tree-chunk-napi");
    async function Uhe(e, t, r) {
      return (async function (e, t) {
        const r = new Fhe.ChunkerRouter({ maxSize: 1 }),
          n = new Map();
        return [r, n];
      })(e, t);
    }`;

test('the addon is required on first ChunkerRouter use, once, and load failures reject the call', async () => {
  const patched = loadTreeChunkLazily(sample);
  assert.equal(loadTreeChunkLazily(patched), patched, 'idempotent');
  assert.equal(patched.split(treeChunkLazyMarker).length, 2);
  const loads = [];
  const build = fail => new Function('require', `let Fhe;\n${patched}\nreturn Uhe;`)(specifier => {
    loads.push(specifier);
    if (fail) throw Error('Cannot find native binding');
    return { ChunkerRouter: class { constructor(options) { this.options = options; } } };
  });
  const search = build(false);
  assert.deepEqual(loads, [], 'module evaluation no longer loads the addon');
  const [router] = await search([], {});
  assert.deepEqual(router.options, { maxSize: 1 });
  assert.deepEqual(loads, ['@anysphere/tree-chunk-napi']);
  await assert.rejects(build(true)([], {}), /Cannot find native binding/, 'failure is the search call, not module evaluation');
});

test('unknown, ambiguous or widened owners are refused', () => {
  assert.throws(() => loadTreeChunkLazily('x = 1;'), /missing or ambiguous \(0\)/);
  assert.throws(() => loadTreeChunkLazily(`${sample}\n${sample}`), /missing or ambiguous \(2\)/);
  assert.throws(() => loadTreeChunkLazily(`${sample}\nFhe.FileTree;`), /unexpected uses/);
  assert.throws(() => loadTreeChunkLazily(`${loadTreeChunkLazily(sample)}${treeChunkLazyMarker}`), /more than once/);
});

for (const relative of treeChunkLazyBundles) {
  test(`recovered ${relative.replace('source/app/', '')} has one lazily loadable owner`, async t => {
    let text;
    try { text = await readFile(new URL(relative.replace('source/app/', ''), readableApp), 'utf8'); }
    catch (error) { if (error.code === 'ENOENT') return t.skip('Recovered bundle unavailable'); throw error; }
    const patched = loadTreeChunkLazily(text);
    assert.notEqual(patched, text);
    assert.equal(loadTreeChunkLazily(patched), patched);
    assert.doesNotMatch(patched, /= require\("[^"]*tree-chunk-napi"\);/);
  });
}
