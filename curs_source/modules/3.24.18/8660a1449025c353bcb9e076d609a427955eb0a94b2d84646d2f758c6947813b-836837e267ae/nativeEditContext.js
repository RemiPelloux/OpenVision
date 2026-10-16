import { Qe, Vn } from "./Iwo.js";
import { GS, Ty } from "./accessibility.js";
import { A_, _7 } from "./browser_2.js";
import { Afn, Esi, xfn } from "./clipboardUtils.js";
import { Hn, pO, ws } from "./dom_2.js";
import { kWo, oHd } from "./editContext.js";
import { EWo, XDy } from "./editContextFactory.js";
import { i6, msi } from "./fastDomNode.js";
import { It, dn } from "./instantiation.js";
import { Ma, Ze } from "./keyCodes.js";
import { nT, rv } from "./keyboardEvent.js";
import { VDy } from "./nativeEditContext.css";
import { IWo, hHd } from "./nativeEditContextRegistry.js";
import { KDy, uHd } from "./nativeEditContextUtils.js";
import { er, jc } from "./position.js";
import { Ffn, TWo } from "./positionToOffset.js";
import { Qs, qt } from "./range.js";
import { ECr, YDy } from "./screenReaderSupport.js";
import { Cy, bu } from "./selection.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { Ejd, Psi, li, rl } from "./ze.js";
var Msi;
export { Msi };
var __wakaru_ZDy_initialized = false;
export function ZDy() {
if (__wakaru_ZDy_initialized) return;
__wakaru_ZDy_initialized = true;
"use strict";
E(), VDy(), A_(), Hn(), i6(), nT(), Ma(), It(), Esi(), oHd(), KDy(), YDy(), Qs(), Cy(), jc(), TWo(), Qe(), XDy(), Ty(), hHd(), Msi = class extends kWo {
    constructor(t, e, n, i, r, s, o){
        super(e), this._visibleRangeProvider = r, this._accessibilityService = o, this._editContextPrimarySelection = new bu(1, 1, 1, 1), this._decorations = [], this._primarySelection = new bu(1, 1, 1, 1), this._targetWindowId = -1, this._scrollTop = 0, this._scrollLeft = 0, this.domNode = new msi(document.createElement("div")), this.domNode.setClassName("native-edit-context"), this._textArea = new msi(document.createElement("textarea")), this._textArea.setClassName("native-edit-context-textarea"), this._textArea.setAttribute("tabindex", "-1"), this.domNode.setAttribute("autocorrect", "off"), this.domNode.setAttribute("autocapitalize", "off"), this.domNode.setAttribute("autocomplete", "off"), this.domNode.setAttribute("spellcheck", "false"), this._updateDomAttributes(), n.appendChild(this.domNode), n.appendChild(this._textArea), this._parent = n.domNode, this._selectionChangeListener = this._register(new Vn), this._focusTracker = this._register(new uHd(this.domNode.domNode, (l)=>{
            l ? (this._selectionChangeListener.value = this._setSelectionChangeListener(i), this._screenReaderSupport.setIgnoreSelectionChangeTime("onFocus")) : this._selectionChangeListener.value = void 0, this._context.viewModel.setHasFocus(l);
        }));
        const a = ws(this.domNode.domNode);
        this._editContext = EWo.create(a), this.setEditContextOnDomNode(), this._screenReaderSupport = s.createInstance(ECr, this.domNode, e), this._register(li(this.domNode.domNode, "copy", (l)=>this._ensureClipboardGetsEditorSelection(l))), this._register(li(this.domNode.domNode, "cut", (l)=>{
            this._screenReaderSupport.setIgnoreSelectionChangeTime("onCut"), this._ensureClipboardGetsEditorSelection(l), i.cut();
        })), this._register(li(this.domNode.domNode, "keyup", (l)=>i.emitKeyUp(new rv(l)))), this._register(li(this.domNode.domNode, "keydown", async (l)=>{
            const c = new rv(l);
            c.keyCode === Ze.KEY_IN_COMPOSITION && c.stopPropagation(), i.emitKeyDown(c);
        })), this._register(li(this.domNode.domNode, "beforeinput", async (l)=>{
            (l.inputType === "insertParagraph" || l.inputType === "insertLineBreak") && this._onType(i, {
                text: `
`,
                replacePrevCharCnt: 0,
                replaceNextCharCnt: 0,
                positionDelta: 0
            });
        })), this._register(Psi(this._editContext, "textformatupdate", (l)=>this._handleTextFormatUpdate(l))), this._register(Psi(this._editContext, "characterboundsupdate", (l)=>this._updateCharacterBounds(l))), this._register(Psi(this._editContext, "textupdate", (l)=>{
            this._emitTypeEvent(i, l);
        })), this._register(Psi(this._editContext, "compositionstart", (l)=>{
            i.compositionStart(), this._context.viewModel.onCompositionStart();
        })), this._register(Psi(this._editContext, "compositionend", (l)=>{
            i.compositionEnd(), this._context.viewModel.onCompositionEnd();
        })), this._register(li(this._textArea.domNode, "paste", (l)=>{
            if (this._screenReaderSupport.setIgnoreSelectionChangeTime("onPaste"), l.preventDefault(), !l.clipboardData) return;
            let [c, u] = Afn.getTextData(l.clipboardData);
            if (!c) return;
            u = u || xfn.INSTANCE.get(c);
            let d = !1, h = null, p = null;
            u && (d = this._context.configuration.options.get(38) && !!u.isFromEmptySelection, h = typeof u.multicursorText < "u" ? u.multicursorText : null, p = u.mode), i.paste(c, d, h, p);
        })), this._register(IWo.register(t, this));
    }
    dispose() {
        this.domNode.domNode.blur(), this.domNode.domNode.remove(), this._textArea.domNode.remove(), super.dispose();
    }
    setAriaOptions(t) {
        this._screenReaderSupport.setAriaOptions(t);
    }
    getLastRenderData() {
        return this._primarySelection.getPosition();
    }
    prepareRender(t) {
        this._screenReaderSupport.prepareRender(t), this._updateEditContext(), this._updateSelectionAndControlBounds(t);
    }
    render(t) {
        this._screenReaderSupport.render(t);
    }
    onCursorStateChanged(t) {
        return this._primarySelection = t.modelSelections[0] ?? new bu(1, 1, 1, 1), this._screenReaderSupport.onCursorStateChanged(t), this._updateEditContext(), !0;
    }
    onConfigurationChanged(t) {
        return this._screenReaderSupport.onConfigurationChanged(t), this._updateDomAttributes(), !0;
    }
    onDecorationsChanged(t) {
        return !0;
    }
    onFlushed(t) {
        return !0;
    }
    onLinesChanged(t) {
        return !0;
    }
    onLinesDeleted(t) {
        return !0;
    }
    onLinesInserted(t) {
        return !0;
    }
    onScrollChanged(t) {
        return this._scrollLeft = t.scrollLeft, this._scrollTop = t.scrollTop, !0;
    }
    onZonesChanged(t) {
        return !0;
    }
    executePaste() {
        this._onWillPaste();
        try {
            this._focusTracker.pause(), this._textArea.focus();
            const t = this._textArea.domNode.ownerDocument.execCommand("paste");
            return this._textArea.domNode.textContent = "", this.domNode.focus(), t;
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
        const t = ws(this.domNode.domNode), e = pO(t);
        this._targetWindowId !== e && (this.domNode.domNode.editContext = this._editContext, this._targetWindowId = e);
    }
    _updateDomAttributes() {
        const t = this._context.configuration.options;
        this.domNode.domNode.setAttribute("tabindex", String(t.get(129)));
    }
    _updateEditContext() {
        const t = this._getNewEditContextState();
        t && (this._editContext.updateText(0, Number.MAX_SAFE_INTEGER, t.text ?? " "), this._editContext.updateSelection(t.selectionStartOffset, t.selectionEndOffset), this._editContextPrimarySelection = t.editContextPrimarySelection);
    }
    _emitTypeEvent(t, e) {
        if (!this._editContext || !this._editContextPrimarySelection.equalsSelection(this._primarySelection)) return;
        const n = this._context.viewModel.model, i = this._editContextStartPosition(), r = n.getOffsetAt(i), s = n.getOffsetAt(this._primarySelection.getEndPosition()), o = n.getOffsetAt(this._primarySelection.getStartPosition()), a = s - r, l = o - r;
        let c = 0, u = 0;
        e.updateRangeEnd > a && (c = e.updateRangeEnd - a), e.updateRangeStart < l && (u = l - e.updateRangeStart);
        let d = "";
        l < e.updateRangeStart && (d += this._editContext.text.substring(l, e.updateRangeStart)), d += e.text, a > e.updateRangeEnd && (d += this._editContext.text.substring(e.updateRangeEnd, a));
        let h = 0;
        e.selectionStart === e.selectionEnd && l === a && (h = e.selectionStart - (e.updateRangeStart + e.text.length));
        const p = {
            text: d,
            replacePrevCharCnt: u,
            replaceNextCharCnt: c,
            positionDelta: h
        };
        this._onType(t, p), this._updateEditContext();
    }
    _onType(t, e) {
        e.replacePrevCharCnt || e.replaceNextCharCnt || e.positionDelta ? t.compositionType(e.text, e.replacePrevCharCnt, e.replaceNextCharCnt, e.positionDelta) : t.type(e.text);
    }
    _getNewEditContextState() {
        const t = this._primarySelection, e = this._context.viewModel.model;
        if (!e.isValidRange(t)) return;
        const n = t.startLineNumber, i = t.endLineNumber, r = e.getLineMaxColumn(i), s = new qt(n, 1, i, r), o = e.getValueInRange(s, 0), a = t.startColumn - 1, l = o.length + t.endColumn - r;
        return {
            text: o,
            selectionStartOffset: a,
            selectionEndOffset: l,
            editContextPrimarySelection: t
        };
    }
    _editContextStartPosition() {
        return new er(this._editContextPrimarySelection.startLineNumber, 1);
    }
    _handleTextFormatUpdate(t) {
        if (!this._editContext) return;
        const e = t.getTextFormats(), n = this._editContextStartPosition(), i = [];
        e.forEach((r)=>{
            const s = this._context.viewModel.model, o = s.getOffsetAt(n), a = s.getPositionAt(o + r.rangeStart), l = s.getPositionAt(o + r.rangeEnd), c = qt.fromPositions(a, l), u = r.underlineThickness.toLowerCase();
            let d = "edit-context-composition-none";
            switch(u){
                case "thin":
                    d = "edit-context-composition-secondary";
                    break;
                case "thick":
                    d = "edit-context-composition-primary";
                    break;
            }
            i.push({
                range: c,
                options: {
                    description: "textFormatDecoration",
                    inlineClassName: d
                }
            });
        }), this._decorations = this._context.viewModel.model.deltaDecorations(this._decorations, i);
    }
    _updateSelectionAndControlBounds(t) {
        if (!this._parent) return;
        const e = this._context.configuration.options, n = e.get(68), i = e.get(151).contentLeft, r = this._parent.getBoundingClientRect(), s = this._primarySelection.getStartPosition(), o = this._context.viewModel.coordinatesConverter.convertModelPositionToViewPosition(s), a = this._context.viewLayout.getVerticalOffsetForLineNumber(o.lineNumber), l = r.top + a - this._scrollTop, c = (this._primarySelection.endLineNumber - this._primarySelection.startLineNumber + 1) * n;
        let u = r.left + i - this._scrollLeft, d;
        if (this._primarySelection.isEmpty()) {
            const p = t.visibleRangeForPosition(o);
            p && (u += p.left), d = 0;
        } else d = r.width - i;
        const h = new DOMRect(u, l, d, c);
        this._editContext.updateSelectionBounds(h), this._editContext.updateControlBounds(h);
    }
    _updateCharacterBounds(t) {
        if (!this._parent) return;
        const e = this._context.configuration.options, n = e.get(52).typicalHalfwidthCharacterWidth, i = e.get(68), r = e.get(151).contentLeft, s = this._parent.getBoundingClientRect(), o = [], a = new Ffn(this._editContext.text);
        for(let l = t.rangeStart; l < t.rangeEnd; l++){
            const c = a.getPosition(l), u = this._editContextPrimarySelection.startLineNumber - 1, d = new er(u + c.lineNumber, c.column), h = d.delta(0, 1), p = qt.fromPositions(d, h), g = this._context.viewModel.coordinatesConverter.convertModelRangeToViewRange(p), f = this._visibleRangeProvider.linesVisibleRangesForRange(g, !0) ?? [], _ = this._context.viewLayout.getVerticalOffsetForLineNumber(g.startLineNumber), b = s.top + _ - this._scrollTop;
            let y = 0, S = n;
            if (f.length > 0) for (const k of f[0].ranges){
                y = k.left, S = k.width;
                break;
            }
            o.push(new DOMRect(s.left + r + y - this._scrollLeft, b, S, i));
        }
        this._editContext.updateCharacterBounds(t.rangeStart, o);
    }
    _ensureClipboardGetsEditorSelection(t) {
        const e = this._context.configuration.options, n = e.get(38), i = e.get(25), r = this._context.viewModel.getCursorStates().map((a)=>a.modelState.selection), s = Ejd(this._context.viewModel, r, n, i), o = {
            version: 1,
            isFromEmptySelection: s.isFromEmptySelection,
            multicursorText: s.multicursorText,
            mode: s.mode
        };
        xfn.INSTANCE.set(_7 ? s.text.replace(/\r\n/g, `
`) : s.text, o), t.preventDefault(), t.clipboardData && Afn.setTextData(t.clipboardData, s.text, s.html, o);
    }
    _setSelectionChangeListener(t) {
        let e = 0;
        return li(this.domNode.domNode.ownerDocument, "selectionchange", ()=>{
            const n = this._accessibilityService.isScreenReaderOptimized();
            if (!this.isFocused() || !n) return;
            const i = this._screenReaderSupport.screenReaderContentState;
            if (!i) return;
            const r = Date.now(), s = r - e;
            if (e = r, s < 5) return;
            const o = r - this._screenReaderSupport.getIgnoreSelectionChangeTime();
            if (this._screenReaderSupport.resetSelectionChangeTime(), o < 100) return;
            const l = rl().document.getSelection();
            if (!l || l.rangeCount === 0) return;
            const u = l.getRangeAt(0), d = this._context.viewModel, h = d.model, g = d.coordinatesConverter.convertViewPositionToModelPosition(i.startPositionWithinEditor), f = h.getOffsetAt(g);
            let _ = u.startOffset + f, b = u.endOffset + f;
            if (h.getEndOfLineSequence() === 1) {
                const T = i.value, I = new Ffn(T), A = I.getPosition(u.startOffset), P = I.getPosition(u.endOffset);
                _ += A.lineNumber - 1, b += P.lineNumber - 1;
            }
            const S = h.getPositionAt(_), k = h.getPositionAt(b), C = bu.fromPositions(S, k);
            t.setSelection(C);
        });
    }
}, Msi = Re([
    F(5, dn),
    F(6, GS)
], Msi);

}
