import { Se, cn } from "./HVr.js";
import { Op, ym } from "./accessibility.js";
import { C, ie } from "./actions_2.js";
import { i5, n_ } from "./browser_2.js";
import { XOt, Xfn, ZOt } from "./clipboardUtils.js";
import { OV, en, xi } from "./dom_2.js";
import { _ts, q6c } from "./editContext.js";
import { ibg, kts } from "./editContextFactory.js";
import { Tx, pW } from "./fastDomNode.js";
import { Ze, _t } from "./instantiation.js";
import { Pr, fe } from "./keyCodes.js";
import { gu, jg } from "./keyboardEvent.js";
import { ebg } from "./nativeEditContext.css";
import { Q6c, wts } from "./nativeEditContextRegistry.js";
import { X6c, tbg } from "./nativeEditContextUtils.js";
import { Yn, ya } from "./position.js";
import { Sts, aFt } from "./positionToOffset.js";
import { Xt, evn, h9c, sa } from "./qIc.js";
import { dt, qi } from "./range.js";
import { Q_i, nbg } from "./screenReaderSupport.js";
import { _f, za } from "./selection.js";
import { x } from "./tslib.es6.js";
var tvn;
export { tvn };
var __wakaru_rbg_initialized = false;
export function rbg() {
if (__wakaru_rbg_initialized) return;
__wakaru_rbg_initialized = true;
"use strict";
x(), ebg(), n_(), en(), Tx(), jg(), Pr(), Ze(), Xfn(), q6c(), tbg(), nbg(), qi(), _f(), ya(), Sts(), Se(), ibg(), Op(), Q6c(), tvn = class extends _ts {
    constructor(e, t, n, i, r, s, o){
        super(t), this._visibleRangeProvider = r, this._accessibilityService = o, this._editContextPrimarySelection = new za(1, 1, 1, 1), this._decorations = [], this._primarySelection = new za(1, 1, 1, 1), this._targetWindowId = -1, this._scrollTop = 0, this._scrollLeft = 0, this.domNode = new pW(document.createElement("div")), this.domNode.setClassName("native-edit-context"), this._textArea = new pW(document.createElement("textarea")), this._textArea.setClassName("native-edit-context-textarea"), this._textArea.setAttribute("tabindex", "-1"), this.domNode.setAttribute("autocorrect", "off"), this.domNode.setAttribute("autocapitalize", "off"), this.domNode.setAttribute("autocomplete", "off"), this.domNode.setAttribute("spellcheck", "false"), this._updateDomAttributes(), n.appendChild(this.domNode), n.appendChild(this._textArea), this._parent = n.domNode, this._selectionChangeListener = this._register(new cn), this._focusTracker = this._register(new X6c(this.domNode.domNode, (c)=>{
            c ? (this._selectionChangeListener.value = this._setSelectionChangeListener(i), this._screenReaderSupport.setIgnoreSelectionChangeTime("onFocus")) : this._selectionChangeListener.value = void 0, this._context.viewModel.setHasFocus(c);
        }));
        const a = xi(this.domNode.domNode);
        this._editContext = kts.create(a), this.setEditContextOnDomNode(), this._screenReaderSupport = s.createInstance(Q_i, this.domNode, t), this._register(Xt(this.domNode.domNode, "copy", (c)=>this._ensureClipboardGetsEditorSelection(c))), this._register(Xt(this.domNode.domNode, "cut", (c)=>{
            this._screenReaderSupport.setIgnoreSelectionChangeTime("onCut"), this._ensureClipboardGetsEditorSelection(c), i.cut();
        })), this._register(Xt(this.domNode.domNode, "keyup", (c)=>i.emitKeyUp(new gu(c)))), this._register(Xt(this.domNode.domNode, "keydown", async (c)=>{
            const l = new gu(c);
            l.keyCode === fe.KEY_IN_COMPOSITION && l.stopPropagation(), i.emitKeyDown(l);
        })), this._register(Xt(this.domNode.domNode, "beforeinput", async (c)=>{
            (c.inputType === "insertParagraph" || c.inputType === "insertLineBreak") && this._onType(i, {
                text: `
`,
                replacePrevCharCnt: 0,
                replaceNextCharCnt: 0,
                positionDelta: 0
            });
        })), this._register(evn(this._editContext, "textformatupdate", (c)=>this._handleTextFormatUpdate(c))), this._register(evn(this._editContext, "characterboundsupdate", (c)=>this._updateCharacterBounds(c))), this._register(evn(this._editContext, "textupdate", (c)=>{
            this._emitTypeEvent(i, c);
        })), this._register(evn(this._editContext, "compositionstart", (c)=>{
            i.compositionStart(), this._context.viewModel.onCompositionStart();
        })), this._register(evn(this._editContext, "compositionend", (c)=>{
            i.compositionEnd(), this._context.viewModel.onCompositionEnd();
        })), this._register(Xt(this._textArea.domNode, "paste", (c)=>{
            if (this._screenReaderSupport.setIgnoreSelectionChangeTime("onPaste"), c.preventDefault(), !c.clipboardData) return;
            let [l, u] = ZOt.getTextData(c.clipboardData);
            if (!l) return;
            u = u || XOt.INSTANCE.get(l);
            let h = !1, p = null, g = null;
            u && (h = this._context.configuration.options.get(38) && !!u.isFromEmptySelection, p = typeof u.multicursorText < "u" ? u.multicursorText : null, g = u.mode), i.paste(l, h, p, g);
        })), this._register(wts.register(e, this));
    }
    dispose() {
        this.domNode.domNode.blur(), this.domNode.domNode.remove(), this._textArea.domNode.remove(), super.dispose();
    }
    setAriaOptions(e) {
        this._screenReaderSupport.setAriaOptions(e);
    }
    getLastRenderData() {
        return this._primarySelection.getPosition();
    }
    prepareRender(e) {
        this._screenReaderSupport.prepareRender(e), this._updateEditContext(), this._updateSelectionAndControlBounds(e);
    }
    render(e) {
        this._screenReaderSupport.render(e);
    }
    onCursorStateChanged(e) {
        return this._primarySelection = e.modelSelections[0] ?? new za(1, 1, 1, 1), this._screenReaderSupport.onCursorStateChanged(e), this._updateEditContext(), !0;
    }
    onConfigurationChanged(e) {
        return this._screenReaderSupport.onConfigurationChanged(e), this._updateDomAttributes(), !0;
    }
    onDecorationsChanged(e) {
        return !0;
    }
    onFlushed(e) {
        return !0;
    }
    onLinesChanged(e) {
        return !0;
    }
    onLinesDeleted(e) {
        return !0;
    }
    onLinesInserted(e) {
        return !0;
    }
    onScrollChanged(e) {
        return this._scrollLeft = e.scrollLeft, this._scrollTop = e.scrollTop, !0;
    }
    onZonesChanged(e) {
        return !0;
    }
    executePaste() {
        this._onWillPaste();
        try {
            this._focusTracker.pause(), this._textArea.focus();
            const e = this._textArea.domNode.ownerDocument.execCommand("paste");
            return this._textArea.domNode.textContent = "", this.domNode.focus(), e;
        } finally{
            this._focusTracker.resume();
        }
    }
    _onWillPaste() {
        this._screenReaderSupport.setIgnoreSelectionChangeTime("onWillPaste");
    }
    writeScreenReaderContent() {
        this._screenReaderSupport.writeScreenReaderContent();
    }
    isFocused() {
        return this._focusTracker.isFocused;
    }
    focus() {
        this._focusTracker.focus(), this.refreshFocusState();
    }
    refreshFocusState() {
        this._focusTracker.refreshFocusState();
    }
    setEditContextOnDomNode() {
        const e = xi(this.domNode.domNode), t = OV(e);
        this._targetWindowId !== t && (this.domNode.domNode.editContext = this._editContext, this._targetWindowId = t);
    }
    _updateDomAttributes() {
        const e = this._context.configuration.options;
        this.domNode.domNode.setAttribute("tabindex", String(e.get(129)));
    }
    _updateEditContext() {
        const e = this._getNewEditContextState();
        e && (this._editContext.updateText(0, Number.MAX_SAFE_INTEGER, e.text ?? " "), this._editContext.updateSelection(e.selectionStartOffset, e.selectionEndOffset), this._editContextPrimarySelection = e.editContextPrimarySelection);
    }
    _emitTypeEvent(e, t) {
        if (!this._editContext || !this._editContextPrimarySelection.equalsSelection(this._primarySelection)) return;
        const n = this._context.viewModel.model, i = this._editContextStartPosition(), r = n.getOffsetAt(i), s = n.getOffsetAt(this._primarySelection.getEndPosition()), o = n.getOffsetAt(this._primarySelection.getStartPosition()), a = s - r, c = o - r;
        let l = 0, u = 0;
        t.updateRangeEnd > a && (l = t.updateRangeEnd - a), t.updateRangeStart < c && (u = c - t.updateRangeStart);
        let h = "";
        c < t.updateRangeStart && (h += this._editContext.text.substring(c, t.updateRangeStart)), h += t.text, a > t.updateRangeEnd && (h += this._editContext.text.substring(t.updateRangeEnd, a));
        let p = 0;
        t.selectionStart === t.selectionEnd && c === a && (p = t.selectionStart - (t.updateRangeStart + t.text.length));
        const g = {
            text: h,
            replacePrevCharCnt: u,
            replaceNextCharCnt: l,
            positionDelta: p
        };
        this._onType(e, g), this._updateEditContext();
    }
    _onType(e, t) {
        t.replacePrevCharCnt || t.replaceNextCharCnt || t.positionDelta ? e.compositionType(t.text, t.replacePrevCharCnt, t.replaceNextCharCnt, t.positionDelta) : e.type(t.text);
    }
    _getNewEditContextState() {
        const e = this._primarySelection, t = this._context.viewModel.model;
        if (!t.isValidRange(e)) return;
        const n = e.startLineNumber, i = e.endLineNumber, r = t.getLineMaxColumn(i), s = new dt(n, 1, i, r), o = t.getValueInRange(s, 0), a = e.startColumn - 1, c = o.length + e.endColumn - r;
        return {
            text: o,
            selectionStartOffset: a,
            selectionEndOffset: c,
            editContextPrimarySelection: e
        };
    }
    _editContextStartPosition() {
        return new Yn(this._editContextPrimarySelection.startLineNumber, 1);
    }
    _handleTextFormatUpdate(e) {
        if (!this._editContext) return;
        const t = e.getTextFormats(), n = this._editContextStartPosition(), i = [];
        t.forEach((r)=>{
            const s = this._context.viewModel.model, o = s.getOffsetAt(n), a = s.getPositionAt(o + r.rangeStart), c = s.getPositionAt(o + r.rangeEnd), l = dt.fromPositions(a, c), u = r.underlineThickness.toLowerCase();
            let h = "edit-context-composition-none";
            switch(u){
                case "thin":
                    h = "edit-context-composition-secondary";
                    break;
                case "thick":
                    h = "edit-context-composition-primary";
                    break;
            }
            i.push({
                range: l,
                options: {
                    description: "textFormatDecoration",
                    inlineClassName: h
                }
            });
        }), this._decorations = this._context.viewModel.model.deltaDecorations(this._decorations, i);
    }
    _updateSelectionAndControlBounds(e) {
        if (!this._parent) return;
        const t = this._context.configuration.options, n = t.get(68), i = t.get(151).contentLeft, r = this._parent.getBoundingClientRect(), s = this._primarySelection.getStartPosition(), o = this._context.viewModel.coordinatesConverter.convertModelPositionToViewPosition(s), a = this._context.viewLayout.getVerticalOffsetForLineNumber(o.lineNumber), c = r.top + a - this._scrollTop, l = (this._primarySelection.endLineNumber - this._primarySelection.startLineNumber + 1) * n;
        let u = r.left + i - this._scrollLeft, h;
        if (this._primarySelection.isEmpty()) {
            const g = e.visibleRangeForPosition(o);
            g && (u += g.left), h = 0;
        } else h = r.width - i;
        const p = new DOMRect(u, c, h, l);
        this._editContext.updateSelectionBounds(p), this._editContext.updateControlBounds(p);
    }
    _updateCharacterBounds(e) {
        if (!this._parent) return;
        const t = this._context.configuration.options, n = t.get(52).typicalHalfwidthCharacterWidth, i = t.get(68), r = t.get(151).contentLeft, s = this._parent.getBoundingClientRect(), o = [], a = new aFt(this._editContext.text);
        for(let c = e.rangeStart; c < e.rangeEnd; c++){
            const l = a.getPosition(c), u = this._editContextPrimarySelection.startLineNumber - 1, h = new Yn(u + l.lineNumber, l.column), p = h.delta(0, 1), g = dt.fromPositions(h, p), f = this._context.viewModel.coordinatesConverter.convertModelRangeToViewRange(g), v = this._visibleRangeProvider.linesVisibleRangesForRange(f, !0) ?? [], b = this._context.viewLayout.getVerticalOffsetForLineNumber(f.startLineNumber), y = s.top + b - this._scrollTop;
            let T = 0, E = n;
            if (v.length > 0) for (const A of v[0].ranges){
                T = A.left, E = A.width;
                break;
            }
            o.push(new DOMRect(s.left + r + T - this._scrollLeft, y, E, i));
        }
        this._editContext.updateCharacterBounds(e.rangeStart, o);
    }
    _ensureClipboardGetsEditorSelection(e) {
        const t = this._context.configuration.options, n = t.get(38), i = t.get(25), r = this._context.viewModel.getCursorStates().map((a)=>a.modelState.selection), s = h9c(this._context.viewModel, r, n, i), o = {
            version: 1,
            isFromEmptySelection: s.isFromEmptySelection,
            multicursorText: s.multicursorText,
            mode: s.mode
        };
        XOt.INSTANCE.set(i5 ? s.text.replace(/\r\n/g, `
`) : s.text, o), e.preventDefault(), e.clipboardData && ZOt.setTextData(e.clipboardData, s.text, s.html, o);
    }
    _setSelectionChangeListener(e) {
        let t = 0;
        return Xt(this.domNode.domNode.ownerDocument, "selectionchange", ()=>{
            const n = this._accessibilityService.isScreenReaderOptimized();
            if (!this.isFocused() || !n) return;
            const i = this._screenReaderSupport.screenReaderContentState;
            if (!i) return;
            const r = Date.now(), s = r - t;
            if (t = r, s < 5) return;
            const o = r - this._screenReaderSupport.getIgnoreSelectionChangeTime();
            if (this._screenReaderSupport.resetSelectionChangeTime(), o < 100) return;
            const c = sa().document.getSelection();
            if (!c || c.rangeCount === 0) return;
            const u = c.getRangeAt(0), h = this._context.viewModel, p = h.model, f = h.coordinatesConverter.convertViewPositionToModelPosition(i.startPositionWithinEditor), v = p.getOffsetAt(f);
            let b = u.startOffset + v, y = u.endOffset + v;
            if (p.getEndOfLineSequence() === 1) {
                const D = i.value, P = new aFt(D), N = P.getPosition(u.startOffset), O = P.getPosition(u.endOffset);
                b += N.lineNumber - 1, y += O.lineNumber - 1;
            }
            const E = p.getPositionAt(b), A = p.getPositionAt(y), R = za.fromPositions(E, A);
            e.setSelection(R);
        });
    }
}, tvn = ie([
    C(5, _t),
    C(6, ym)
], tvn);

}
