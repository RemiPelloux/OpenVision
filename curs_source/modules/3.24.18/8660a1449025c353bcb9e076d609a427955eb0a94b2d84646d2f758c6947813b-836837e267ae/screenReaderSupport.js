import { D } from "./Iwo.js";
import { GS, Ty } from "./accessibility.js";
import { she } from "./domFontInfo.js";
import { Hn } from "./dom_2.js";
import { Al, ru } from "./keybinding.js";
import { Bt } from "./nls.js";
import { CWo, lHd } from "./screenReaderUtils.js";
import { Cy, bu } from "./selection.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { oB, rl, wWo } from "./ze.js";
var ECr;
export { ECr };
var __wakaru_YDy_initialized = false;
export function YDy() {
if (__wakaru_YDy_initialized) return;
__wakaru_YDy_initialized = true;
"use strict";
E(), Hn(), Bt(), Ty(), ru(), Cy(), she(), lHd(), ECr = class {
    constructor(t, e, n, i){
        this._domNode = t, this._context = e, this._keybindingService = n, this._accessibilityService = i, this._contentLeft = 1, this._contentWidth = 1, this._contentHeight = 1, this._divWidth = 1, this._lineHeight = 1, this._accessibilityPageSize = 1, this._ignoreSelectionChangeTime = 0, this._primarySelection = new bu(1, 1, 1, 1), this._primaryCursorVisibleRange = null, this._updateConfigurationSettings(), this._updateDomAttributes();
    }
    setIgnoreSelectionChangeTime(t) {
        this._ignoreSelectionChangeTime = Date.now();
    }
    getIgnoreSelectionChangeTime() {
        return this._ignoreSelectionChangeTime;
    }
    resetSelectionChangeTime() {
        this._ignoreSelectionChangeTime = 0;
    }
    onConfigurationChanged(t) {
        this._updateConfigurationSettings(), this._updateDomAttributes(), t.hasChanged(2) && this.writeScreenReaderContent();
    }
    _updateConfigurationSettings() {
        const t = this._context.configuration.options, e = t.get(151), n = e.wrappingColumn;
        this._contentLeft = e.contentLeft, this._contentWidth = e.contentWidth, this._contentHeight = e.height, this._fontInfo = t.get(52), this._lineHeight = t.get(68), this._accessibilityPageSize = t.get(3), this._divWidth = Math.round(n * this._fontInfo.typicalHalfwidthCharacterWidth);
    }
    _updateDomAttributes() {
        const t = this._context.configuration.options;
        this._domNode.domNode.setAttribute("role", "textbox"), this._domNode.domNode.setAttribute("aria-required", t.get(5) ? "true" : "false"), this._domNode.domNode.setAttribute("aria-multiline", "true"), this._domNode.domNode.setAttribute("aria-autocomplete", t.get(96) ? "none" : "both"), this._domNode.domNode.setAttribute("aria-roledescription", D(181, null)), this._domNode.domNode.setAttribute("aria-label", wWo(t, this._keybindingService));
        const e = this._context.viewModel.model.getOptions().tabSize, n = t.get(52).spaceWidth;
        this._domNode.domNode.style.tabSize = `${e * n}px`;
        const i = t.get(142), r = i !== "inherit" ? i : t.get(137);
        this._domNode.domNode.style.textWrap = r === "off" ? "nowrap" : "wrap";
    }
    onCursorStateChanged(t) {
        this._primarySelection = t.selections[0] ?? new bu(1, 1, 1, 1);
    }
    prepareRender(t) {
        this.writeScreenReaderContent(), this._primaryCursorVisibleRange = t.visibleRangeForPosition(this._primarySelection.getPosition());
    }
    render(t) {
        if (!this._screenReaderContentState) return;
        if (!this._primaryCursorVisibleRange) {
            this._renderAtTopLeft();
            return;
        }
        const e = this._context.viewLayout.getCurrentScrollLeft(), n = this._contentLeft + this._primaryCursorVisibleRange.left - e;
        if (n < this._contentLeft || n > this._contentLeft + this._contentWidth) {
            this._renderAtTopLeft();
            return;
        }
        const i = this._context.viewLayout.getCurrentScrollTop(), r = this._primarySelection.positionLineNumber, s = this._context.viewLayout.getVerticalOffsetForLineNumber(r) - i;
        if (s < 0 || s > this._contentHeight) {
            this._renderAtTopLeft();
            return;
        }
        const o = this._context.viewLayout.getVerticalOffsetForLineNumber(this._screenReaderContentState.startPositionWithinEditor.lineNumber), l = this._context.viewLayout.getVerticalOffsetForLineNumber(r) - o;
        this._doRender(l, s, this._contentLeft, this._divWidth, this._lineHeight);
    }
    _renderAtTopLeft() {
        this._doRender(0, 0, 0, this._contentWidth, 1);
    }
    _doRender(t, e, n, i, r) {
        oB(this._domNode, this._fontInfo), this._domNode.setTop(e), this._domNode.setLeft(n), this._domNode.setWidth(i), this._domNode.setHeight(r), this._domNode.domNode.scrollTop = t;
    }
    setAriaOptions(t) {
        t.activeDescendant ? (this._domNode.setAttribute("aria-haspopup", "true"), this._domNode.setAttribute("aria-autocomplete", "list"), this._domNode.setAttribute("aria-activedescendant", t.activeDescendant)) : (this._domNode.setAttribute("aria-haspopup", "false"), this._domNode.setAttribute("aria-autocomplete", "both"), this._domNode.removeAttribute("aria-activedescendant")), t.role && this._domNode.setAttribute("role", t.role);
    }
    writeScreenReaderContent() {
        const t = rl().document.activeElement;
        if (!t || t !== this._domNode.domNode) return;
        this._accessibilityService.isScreenReaderOptimized() ? (this._screenReaderContentState = this._getScreenReaderContentState(), this._domNode.domNode.textContent !== this._screenReaderContentState.value && (this.setIgnoreSelectionChangeTime("setValue"), this._domNode.domNode.textContent = this._screenReaderContentState.value), this._setSelectionOfScreenReaderContent(this._screenReaderContentState.selectionStart, this._screenReaderContentState.selectionEnd)) : (this._screenReaderContentState = void 0, this.setIgnoreSelectionChangeTime("setValue"), this._domNode.domNode.textContent = "");
    }
    get screenReaderContentState() {
        return this._screenReaderContentState;
    }
    _getScreenReaderContentState() {
        const t = {
            getLineCount: ()=>this._context.viewModel.getLineCount(),
            getLineMaxColumn: (e)=>this._context.viewModel.getLineMaxColumn(e),
            getValueInRange: (e, n)=>this._context.viewModel.getValueInRange(e, n),
            getValueLengthInRange: (e, n)=>this._context.viewModel.getValueLengthInRange(e, n),
            modifyPosition: (e, n)=>this._context.viewModel.modifyPosition(e, n)
        };
        return CWo.fromEditorSelection(t, this._primarySelection, this._accessibilityPageSize, this._accessibilityService.getAccessibilitySupport() === 0);
    }
    _setSelectionOfScreenReaderContent(t, e) {
        const i = rl().document.getSelection();
        if (!i) return;
        const r = this._domNode.domNode.firstChild;
        if (!r) return;
        const s = new globalThis.Range;
        s.setStart(r, t), s.setEnd(r, e), this.setIgnoreSelectionChangeTime("setRange"), i.removeAllRanges(), i.addRange(s);
    }
}, ECr = Re([
    F(2, Al),
    F(3, GS)
], ECr);

}
