import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { guardCompletionAcceptVersion } from './completion-accept.mjs';

// Shape of the recovered owner: snapshot, awaited word diff, abort check, then a
// full (Tab) or word (partial) edit computed from the snapshot.
const source = `class Completion {
  async makeChangesOnAcceptCppSuggestion({model: e, suggestion: n, abortController: r, onlyAcceptFirstWord: s}) {
    let o = !1; r?.signal.addEventListener("abort", () => { o = !0 }, {once: !0});
    let c = n.originalText;
    const l = n.replaceText, {changes: u} = await this._diffingService.wordDiff(c, l);
    if (o) return {type: Kind.NotAccepted};
    const h = async () => (e.edits.push(['all', c, u]), {type: Kind.AcceptedAll}),
      m = async () => (e.edits.push(['word', c, u]), {type: Kind.AcceptedWord});
    return s ? await m() : await h();
  }
}`;

function load(text, mode) {
  const Kind = { NotAccepted: 1, AcceptedAll: 2, AcceptedWord: 0 };
  return new Function('zc', 'Rl', 'Kind', `${text}; return Completion;`)(mode, mode, Kind);
}

function harness(variant, localMode) {
  const patched = guardCompletionAcceptVersion(source, variant);
  const Completion = load(patched, { localMode });
  let release;
  const model = { version: 1, disposed: false, edits: [], getVersionId() { return this.version; }, isDisposed() { return this.disposed; } };
  const instance = Object.assign(new Completion(), { _diffingService: {
    wordDiff: () => new Promise(resolve => { release = () => resolve({ changes: ['diff'] }); }) } });
  const accept = word => instance.makeChangesOnAcceptCppSuggestion({ model, suggestion: { originalText: 'a', replaceText: 'ab' },
    onlyAcceptFirstWord: word });
  return { patched, model, accept, release: () => release() };
}

for (const variant of ['desktop', 'glass']) {
  test(`${variant}: accept is idempotent and leaves one guard`, () => {
    const patched = guardCompletionAcceptVersion(source, variant);
    assert.equal(guardCompletionAcceptVersion(patched, variant), patched);
    assert.equal(patched.split('OpenVision completion accept version guard v1').length, 2);
  });

  for (const word of [false, true]) {
    const kind = word ? 'word (partial)' : 'full (Tab)';
    test(`${variant}: ${kind} accept applies when the model is unchanged during the diff`, async () => {
      const { model, accept, release } = harness(variant, true);
      const pending = accept(word); release();
      assert.deepEqual(await pending, { type: word ? 0 : 2 });
      assert.equal(model.edits.length, 1);
    });

    test(`${variant}: ${kind} accept is dropped when the model changed during the diff`, async () => {
      const { model, accept, release } = harness(variant, true);
      const pending = accept(word); model.version = 2; release();
      assert.deepEqual(await pending, { type: 1 });
      assert.deepEqual(model.edits, [], 'No edit computed from the stale snapshot');
    });

    test(`${variant}: ${kind} accept is dropped when the model was disposed during the diff`, async () => {
      const { model, accept, release } = harness(variant, true);
      const pending = accept(word); model.disposed = true; release();
      assert.deepEqual(await pending, { type: 1 });
      assert.deepEqual(model.edits, []);
    });
  }

  test(`${variant}: nonlocal behavior is unchanged`, async () => {
    const { model, accept, release } = harness(variant, false);
    const pending = accept(false); model.version = 2; release();
    assert.deepEqual(await pending, { type: 2 });
    assert.equal(model.edits.length, 1);
  });
}

test('accept owner drift fails closed', () => {
  assert.throws(() => guardCompletionAcceptVersion('class Missing {}', 'desktop'), /missing/);
  assert.throws(() => guardCompletionAcceptVersion(source, 'other'), /Unknown/);
  assert.throws(() => guardCompletionAcceptVersion(source.replace('model: e', 'document: e'), 'desktop'), /model owner/);
  assert.throws(() => guardCompletionAcceptVersion(source.replace('await this._diffingService.wordDiff', 'this._diffingService.wordDiff'), 'desktop'), /word diff/);
  assert.throws(() => guardCompletionAcceptVersion(source.replace('if (o) return', 'if (o || r) return'), 'desktop'), /abort check/);
  const method = source.slice(source.indexOf('  async make'), source.lastIndexOf('}'));
  assert.throws(() => guardCompletionAcceptVersion(source.replace(/}$/, `${method}}`), 'desktop'), /ambiguous/);
});

const recovered = process.env.OPENVISION_RECOVERY_DIR &&
  new URL(`file://${process.env.OPENVISION_RECOVERY_DIR}/readable/app/out/vs/workbench/`);
for (const variant of ['desktop', 'glass']) test(`${variant}: recovered accept owner is guarded once`,
  { skip: !recovered && 'OPENVISION_RECOVERY_DIR not set' }, async () => {
    const text = await readFile(new URL(`workbench.${variant}.main.js`, recovered), 'utf8');
    const patched = guardCompletionAcceptVersion(text, variant);
    assert.equal(guardCompletionAcceptVersion(patched, variant), patched);
    assert.equal(patched.split('OpenVision completion accept version guard v1').length, 2);
    assert.match(patched, /const openvisionAcceptVersion = [\w$]+\.getVersionId\(\);\s*const [\w$]+ = [^;]*await this\._diffingService\.wordDiff\(/);
  });
