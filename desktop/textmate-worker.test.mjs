import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { grammarMissMarker, grammarMissMessage, textMateWorkerBundles, treatWorkerGrammarMissAsNone } from './textmate-worker-customization.mjs';
import { readableApp } from './recovered-source.mjs';

// Shape of the recovered worker host (formatted bundle).
const sample = `const nAs = "${grammarMissMessage}";
const host = {
            async getOrCreateGrammar(i, s) {
              const o = await n._grammarFactory;
              return o
                ? (n._grammarCache[s] || (n._grammarCache[s] = o.createGrammar(i, s)),
                  n._grammarCache[s])
                : Promise.resolve(null);
            },
          };`;

const load = (text, n) => new Function('n', `${text}; return host;`)(n);

test('a language without a grammar resolves null and is not cached; other errors still reject', async () => {
  const patched = treatWorkerGrammarMissAsNone(sample);
  assert.equal(treatWorkerGrammarMissAsNone(patched), patched, 'idempotent');
  assert.equal(patched.split(grammarMissMarker).length, 2);
  let grammars = {}, calls = 0;
  const factory = { createGrammar: async language => { calls++; if (grammars[language]) return grammars[language]; throw Error(language === 'broken' ? 'parse failed' : grammarMissMessage); } };
  const worker = { _grammarFactory: Promise.resolve(factory), _grammarCache: {} };

  const original = load(sample, { _grammarFactory: Promise.resolve(factory), _grammarCache: {} });
  await assert.rejects(original.getOrCreateGrammar('plaintext', 1), { message: grammarMissMessage }, 'upstream rejects');

  const host = load(patched, worker);
  assert.equal(await host.getOrCreateGrammar('plaintext', 1), null);
  assert.equal(worker._grammarCache[1], undefined, 'the miss is forgotten');
  grammars = { plaintext: { grammar: 'g' } };
  assert.deepEqual(await host.getOrCreateGrammar('plaintext', 1), { grammar: 'g' }, 'a later registration is used');
  const before = calls; await host.getOrCreateGrammar('plaintext', 1);
  assert.equal(calls, before, 'a found grammar stays cached');
  await assert.rejects(host.getOrCreateGrammar('broken', 2), { message: 'parse failed' });
  assert.equal(await load(patched, { _grammarFactory: Promise.resolve(null), _grammarCache: {} }).getOrCreateGrammar('x', 3), null);
});

test('unknown or ambiguous owners are refused', () => {
  assert.throws(() => treatWorkerGrammarMissAsNone('function t() {}'), /missing or ambiguous \(0\)/);
  assert.throws(() => treatWorkerGrammarMissAsNone(`${sample}\n${sample}`), /missing or ambiguous \(2\)/);
  assert.throws(() => treatWorkerGrammarMissAsNone(sample.replace(grammarMissMessage, 'changed')), /message changed/);
  const once = treatWorkerGrammarMissAsNone(sample);
  assert.throws(() => treatWorkerGrammarMissAsNone(`${once}${grammarMissMarker}`), /more than once/);
});

// Drift guard: the recovered worker still has exactly one patchable host.
for (const relative of textMateWorkerBundles) {
  test(`recovered ${relative.replace(/.*\//, '')} has one patchable owner`, async t => {
    let text;
    try { text = await readFile(new URL(relative.replace('source/app/', ''), readableApp), 'utf8'); }
    catch (error) { if (error.code === 'ENOENT') return t.skip('Recovered bundle unavailable'); throw error; }
    const patched = treatWorkerGrammarMissAsNone(text);
    assert.notEqual(patched, text);
    assert.equal(treatWorkerGrammarMissAsNone(patched), patched);
  });
}
