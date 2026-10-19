import assert from 'node:assert/strict';
import test from 'node:test';
import { readFile } from 'node:fs/promises';
import { runInNewContext } from 'node:vm';
import { reportUnreadableReviews } from './review-snapshot-guidance-customization.mjs';

const loader = `async function load(t) {
              let e = [];
              if (t.length > 0) {
                for (const [, s] of t)
                  try {
                    const o = JSON.parse(s);
                    e.push(o);
                  } catch (o) {
                    console.error("[inlineDiff] Error parsing stored diff:", o);
                  }
              }
              return e;
            }`;

test('an unreadable saved review is skipped as before and reported once with its key', async () => {
  const patched = reportUnreadableReviews(loader);
  assert.equal(reportUnreadableReviews(patched), patched, 'idempotent');
  const queue = [], errors = [];
  const load = runInNewContext(`(${patched})`, { console: { error: (...args) => errors.push(args) }, globalThis: { openvisionProfileRecoveryQueue: queue } });
  const loaded = await load([['inlineDiff:w:good', '{"diffId":"good"}'], ['inlineDiff:w:bad', '{"diffId":']]);
  assert.equal(JSON.stringify(loaded.map(item => item.diffId)), JSON.stringify(["good"]));
  assert.equal(errors.length, 1);
  assert.equal(JSON.stringify(queue.map(finding => [finding.id, finding.path])), JSON.stringify([["unreadable-review:inlineDiff:w:bad", "inlineDiff:w:bad"]]));
  assert.match(queue[0].detail, /left unchanged/);
});

test('the loader contract is guarded', () => {
  assert.throws(() => reportUnreadableReviews('nothing here'), /missing or ambiguous/);
  assert.throws(() => reportUnreadableReviews(loader + loader), /missing or ambiguous/);
});

for (const variant of ['desktop', 'glass'])
  test(`${variant} prepared workbench has exactly one saved review loader`, async t => {
    let text;
    try { text = await readFile(new URL(`../source/app/out/vs/workbench/workbench.${variant}.main.js`, import.meta.url), 'utf8'); }
    catch (error) { if (error.code === 'ENOENT') return t.skip('Prepared workbench required'); throw error; }
    const patched = reportUnreadableReviews(text);
    assert.equal(reportUnreadableReviews(patched), patched);
    assert.equal(patched.split('/* OpenVision unreadable review guidance v1 */').length, 2);
  });
