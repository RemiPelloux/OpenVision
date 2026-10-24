import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { promptFocusMarker, keepPromptSelection, userSelection } from './prompt-focus-customization.mjs';

// The prompt input delegate's focus method as shipped in workbench.desktop.main.js
// (3.21.13); the glass bundle differs only in minified names.
const desktop = `        (pge = class {
          focus(e, t, n) {
            if (this._ref) {
              const i = this.promisedFocus;
              this.promisedFocus = !1;
              const r = () => {
                  if ((this._ref?.focus(), this._editor === void 0)) {
                    (e?.(), this._triggerScrollToBottom?.());
                    return;
                  }
                  this._editor.update(() => {
                    const u = $h();
                    (n ? u.selectStart() : u.selectEnd(), e?.(), this._triggerScrollToBottom?.());
                  });
                },
                s = i
                  ? this._promisedFocusActiveInForeignInput
                  : this._isActiveElementForeignInput(),
                o = () => !s && this._isActiveElementForeignInput(),
                a = (u) => {
                  setTimeout(() => {
                    if (u && this.isFocused()) return;
                    const h = this._ref?.ownerDocument.activeElement;
                    (Pu(h) && h.closest(".quick-input-widget")) || o() || r();
                  }, 25);
                },
                l = Xo() === Jt;
              t || !l ? o() || (r(), t && l && a(!1)) : a();
            } else {
              this.promisedFocus = !0;
              const i = Xo().document.activeElement;
              this._promisedFocusActiveInForeignInput = Pu(i) && (KO(i) || i.isContentEditable);
            }
          }
          isFocused() {
            if (!this._ref) return !1;
            const e = this._ref.ownerDocument.activeElement;
            return e === this._ref || this._ref.contains(e);
          }
          _isActiveElementForeignInput() {
            const e = this._ref?.ownerDocument.activeElement;
            return !Pu(e) || e === this._ref || (this._ref && this._ref.contains(e))
              ? !1
              : KO(e) || e.isContentEditable;
          }
        }),
`;
const glass = desktop.replace(/focus\(e, t, n\)/, 'focus(t, e, n)').replace(/\(e\?\.\(\)/g, '(t?.()').replace(/, e\?\.\(\)/g, ', t?.()')
  .replace('$h()', 'Em()').replace(/Pu\(/g, 'lh(').replace(/KO\(/g, 'aee(').replace(/Xo\(\)/g, 'Xa()').replace('=== Jt', '=== Ft')
  .replace('const h = this._ref', 'const d = this._ref').replace('(lh(h) && h.closest', '(lh(d) && d.closest')
  .replace('t || !l ? o() || (r(), t && l && a(!1)) : a();', 'e || !l ? o() || (r(), e && l && a(!1)) : a();');

const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

// Runs the (patched or upstream) delegate against a stand-in DOM and Lexical editor.
function delegate(text, variant) {
  const names = variant === 'desktop' ? ['$h', 'Pu', 'KO', 'Xo', 'Jt'] : ['Em', 'lh', 'aee', 'Xa', 'Ft'];
  const window = { document: {} }, root = { caret: [] };
  root.selectEnd = () => root.caret.push('end'); root.selectStart = () => root.caret.push('start');
  const range = { isCollapsed: true, anchorNode: null, focusNode: null };
  const document = { activeElement: null, getSelection: () => range };
  const element = { ownerDocument: document, isContentEditable: true, closest: () => null,
    contains: node => node === element || node === element.child, focus() { document.activeElement = element; } };
  element.child = { parent: element };
  const owner = new Function(...names, 'pge', `return ${text.trim().replace(/,$/, '')};`)(() => root, value => !!value, () => false, () => window, window);
  const instance = new owner();
  Object.assign(instance, { _ref: element, _editor: { update: callback => callback() } });
  return { instance, root, range, element, document };
}

for (const [variant, source] of [['desktop', desktop], ['glass', glass]]) {
  test(`${variant}: the deferred prompt focus keeps a select-all made within 25 ms`, async () => {
    const patched = keepPromptSelection(source);
    assert.equal(keepPromptSelection(patched), patched, 'Reapplication is a no-op');
    assert.equal(patched.split(promptFocusMarker).length, 2);
    assert.match(patched, /\|\| o\(\) \|\| r\(!0\);/);
    assert.match(patched, /t \|\| !l \? o\(\) \|\| \(r\(\), t && l && a\(!1\)\) : a\(\);|e \|\| !l \? o\(\) \|\| \(r\(\), e && l && a\(!1\)\) : a\(\);/);

    for (const [text, keeps] of [[source, false], [patched, true]]) {
      const { instance, root, range, element, document } = delegate(text, variant);
      instance.focus();                       // click on the prompt container: deferred focus
      element.focus();                        // the click itself focuses the prompt
      Object.assign(range, { isCollapsed: false, anchorNode: element.child, focusNode: element.child }); // Ctrl+A
      await wait(60);
      assert.deepEqual(root.caret, keeps ? [] : ['end'], keeps ? 'selection kept' : 'upstream collapses the select-all');
      assert.equal(document.activeElement, element);
    }
  });

  test(`${variant}: deferred focus still places the caret without a user selection`, async () => {
    const patched = keepPromptSelection(source);
    // Collapsed caret inside the focused prompt.
    let run = delegate(patched, variant);
    run.instance.focus(); run.element.focus();
    Object.assign(run.range, { isCollapsed: true, anchorNode: run.element.child, focusNode: run.element.child });
    await wait(60);
    assert.deepEqual(run.root.caret, ['end']);
    // Selection elsewhere and the prompt not focused yet.
    run = delegate(patched, variant);
    Object.assign(run.range, { isCollapsed: false, anchorNode: {}, focusNode: {} });
    run.instance.focus();
    await wait(60);
    assert.deepEqual(run.root.caret, ['end']);
    // Selection inside the prompt, but the prompt is not focused when the timer fires.
    run = delegate(patched, variant);
    Object.assign(run.range, { isCollapsed: false, anchorNode: run.element.child, focusNode: run.element.child });
    run.instance.focus();
    await wait(60);
    assert.deepEqual(run.root.caret, ['end']);
    // Immediate (forced) focus keeps upstream caret placement even over a selection.
    run = delegate(patched, variant);
    run.element.focus();
    Object.assign(run.range, { isCollapsed: false, anchorNode: run.element.child, focusNode: run.element.child });
    run.instance.focus(undefined, true, true);
    assert.deepEqual(run.root.caret, ['start']);
    run.range.isCollapsed = true; // the immediate selectStart collapsed it
    await wait(60);
    assert.deepEqual(run.root.caret, ['start', 'start'], 'the forced follow-up focus still places the caret');
  });
}

test('userSelection accepts only a non-empty range inside the element', () => {
  const element = { contains: node => node === inner, ownerDocument: { getSelection: () => selection } }, inner = {};
  let selection = { isCollapsed: false, anchorNode: inner, focusNode: inner };
  assert.equal(userSelection(element), true);
  selection = { isCollapsed: true, anchorNode: inner, focusNode: inner };
  assert.equal(userSelection(element), false);
  selection = { isCollapsed: false, anchorNode: inner, focusNode: {} };
  assert.equal(userSelection(element), false);
  selection = null;
  assert.equal(userSelection(element), false);
  assert.equal(userSelection(undefined), false);
});

test('the transform refuses a changed or ambiguous owner', () => {
  assert.throws(() => keepPromptSelection('function unrelated() {}'), /missing or ambiguous/);
  assert.throws(() => keepPromptSelection(desktop + desktop), /missing or ambiguous/);
  assert.throws(() => keepPromptSelection(desktop.replace('}, 25);', '}, 50);')), /deferred caret placement/);
  assert.throws(() => keepPromptSelection(desktop.replace('u.selectEnd(), e?.()', 'u.selectEnd(!0), e?.()')), /deferred caret placement/);
  assert.throws(() => keepPromptSelection(desktop.replace('if ((this._ref?.focus(), this._editor === void 0))', 'if (this._editor === void 0)')), /immediate focus/);
  assert.throws(() => keepPromptSelection(desktop.replace('focus(e, t, n) {', 'focus(e, t) {')), /contract changed/);
});

test('the shipped bundles carry the transform once, when built', async t => {
  for (const variant of ['desktop', 'glass']) {
    const text = await readFile(new URL(`../source/app/out/vs/workbench/workbench.${variant}.main.js`, import.meta.url), 'utf8').catch(() => undefined);
    if (!text) return t.skip('no source build');
    assert.equal(text.split(promptFocusMarker).length, 2, variant);
    assert.equal(keepPromptSelection(text), text);
  }
});
