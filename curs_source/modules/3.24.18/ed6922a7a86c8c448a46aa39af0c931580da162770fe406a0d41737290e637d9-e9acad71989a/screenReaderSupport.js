import { S } from "./HVr.js";
import { Op, ym } from "./accessibility.js";
import { C, ie } from "./actions_2.js";
import { WK } from "./domFontInfo.js";
import { en } from "./dom_2.js";
import { no, qr } from "./keybinding.js";
import { rt } from "./nls.js";
import { bts, c2, sa } from "./qIc.js";
import { K6c, yts } from "./screenReaderUtils.js";
import { _f, za } from "./selection.js";
import { x } from "./tslib.es6.js";
var Q_i;
export { Q_i };
var __wakaru_nbg_initialized = false;
export function nbg() {
if (__wakaru_nbg_initialized) return;
__wakaru_nbg_initialized = true;
"use strict";
x(), en(), rt(), Op(), no(), _f(), WK(), K6c(), Q_i = class {
    constructor(e, t, n, i){
        this._domNode = e, this._context = t, this._keybindingService = n, this._accessibilityService = i, this._contentLeft = 1, this._contentWidth = 1, this._contentHeight = 1, this._divWidth = 1, this._lineHeight = 1, this._accessibilityPageSize = 1, this._ignoreSelectionChangeTime = 0, this._primarySelection = new za(1, 1, 1, 1), this._primaryCursorVisibleRange = null, this._updateConfigurationSettings(), this._updateDomAttributes();
    }
    setIgnoreSelectionChangeTime(e) {
        this._ignoreSelectionChangeTime = Date.now();
    }
    getIgnoreSelectionChangeTime() {
        return this._ignoreSelectionChangeTime;
    }
    resetSelectionChangeTime() {
        this._ignoreSelectionChangeTime = 0;
    }
    onConfigurationChanged(e) {
        this._updateConfigurationSettings(), this._updateDomAttributes(), e.hasChanged(2) && this.writeScreenReaderContent();
    }
    _updateConfigurationSettings() {
        const e = this._context.configuration.options, t = e.get(151), n = t.wrappingColumn;
        this._contentLeft = t.contentLeft, this._contentWidth = t.contentWidth, this._contentHeight = t.height, this._fontInfo = e.get(52), this._lineHeight = e.get(68), this._accessibilityPageSize = e.get(3), this._divWidth = Math.round(n * this._fontInfo.typicalHalfwidthCharacterWidth);
    }
    _updateDomAttributes() {
        const e = this._context.configuration.options;
        this._domNode.domNode.setAttribute("role", "textbox"), this._domNode.domNode.setAttribute("aria-required", e.get(5) ? "true" : "false"), this._domNode.domNode.setAttribute("aria-multiline", "true"), this._domNode.domNode.setAttribute("aria-autocomplete", e.get(96) ? "none" : "both"), this._domNode.domNode.setAttribute("aria-roledescription", S(181, null)), this._domNode.domNode.setAttribute("aria-label", bts(e, this._keybindingService));
        const t = this._context.viewModel.model.getOptions().tabSize, n = e.get(52).spaceWidth;
        this._domNode.domNode.style.tabSize = `${t * n}px`;
        const i = e.get(142), r = i !== "inherit" ? i : e.get(137);
        this._domNode.domNode.style.textWrap = r === "off" ? "nowrap" : "wrap";
    }
    onCursorStateChanged(e) {
        this._primarySelection = e.selections[0] ?? new za(1, 1, 1, 1);
    }
    prepareRender(e) {
        this.writeScreenReaderContent(), this._primaryCursorVisibleRange = e.visibleRangeForPosition(this._primarySelection.getPosition());
    }
    render(e) {
        if (!this._screenReaderContentState) return;
        if (!this._primaryCursorVisibleRange) {
            this._renderAtTopLeft();
            return;
        }
        const t = this._context.viewLayout.getCurrentScrollLeft(), n = this._contentLeft + this._primaryCursorVisibleRange.left - t;
        if (n < this._contentLeft || n > this._contentLeft + this._contentWidth) {
            this._renderAtTopLeft();
            return;
        }
        const i = this._context.viewLayout.getCurrentScrollTop(), r = this._primarySelection.positionLineNumber, s = this._context.viewLayout.getVerticalOffsetForLineNumber(r) - i;
        if (s < 0 || s > this._contentHeight) {
            this._renderAtTopLeft();
            return;
        }
        const o = this._context.viewLayout.getVerticalOffsetForLineNumber(this._screenReaderContentState.startPositionWithinEditor.lineNumber), c = this._context.viewLayout.getVerticalOffsetForLineNumber(r) - o;
        this._doRender(c, s, this._contentLeft, this._divWidth, this._lineHeight);
    }
    _renderAtTopLeft() {
        this._doRender(0, 0, 0, this._contentWidth, 1);
    }
    _doRender(e, t, n, i, r) {
        c2(this._domNode, this._fontInfo), this._domNode.setTop(t), this._domNode.setLeft(n), this._domNode.setWidth(i), this._domNode.setHeight(r), this._domNode.domNode.scrollTop = e;
    }
    setAriaOptions(e) {
        e.activeDescendant ? (this._domNode.setAttribute("aria-haspopup", "true"), this._domNode.setAttribute("aria-autocomplete", "list"), this._domNode.setAttribute("aria-activedescendant", e.activeDescendant)) : (this._domNode.setAttribute("aria-haspopup", "false"), this._domNode.setAttribute("aria-autocomplete", "both"), this._domNode.removeAttribute("aria-activedescendant")), e.role && this._domNode.setAttribute("role", e.role);
    }
    writeScreenReaderContent() {
        const e = sa().document.activeElement;
        if (!e || e !== this._domNode.domNode) return;
        this._accessibilityService.isScreenReaderOptimized() ? (this._screenReaderContentState = this._getScreenReaderContentState(), this._domNode.domNode.textContent !== this._screenReaderContentState.value && (this.setIgnoreSelectionChangeTime("setValue"), this._domNode.domNode.textContent = this._screenReaderContentState.value), this._setSelectionOfScreenReaderContent(this._screenReaderContentState.selectionStart, this._screenReaderContentState.selectionEnd)) : (this._screenReaderContentState = void 0, this.setIgnoreSelectionChangeTime("setValue"), this._domNode.domNode.textContent = "");
    }
    get screenReaderContentState() {
        return this._screenReaderContentState;
    }
    _getScreenReaderContentState() {
        const e = {
            getLineCount: ()=>this._context.viewModel.getLineCount(),
            getLineMaxColumn: (t)=>this._context.viewModel.getLineMaxColumn(t),
            getValueInRange: (t, n)=>this._context.viewModel.getValueInRange(t, n),
            getValueLengthInRange: (t, n)=>this._context.viewModel.getValueLengthInRange(t, n),
            modifyPosition: (t, n)=>this._context.viewModel.modifyPosition(t, n)
        };
        return yts.fromEditorSelection(e, this._primarySelection, this._accessibilityPageSize, this._accessibilityService.getAccessibilitySupport() === 0);
    }
    _setSelectionOfScreenReaderContent(e, t) {
        const i = sa().document.getSelection();
        if (!i) return;
        const r = this._domNode.domNode.firstChild;
        if (!r) return;
        const s = new globalThis.Range;
        s.setStart(r, e), s.setEnd(r, t), this.setIgnoreSelectionChangeTime("setRange"), i.removeAllRanges(), i.addRange(s);
    }
}, Q_i = ie([
    C(2, qr),
    C(3, ym)
], Q_i);

}
