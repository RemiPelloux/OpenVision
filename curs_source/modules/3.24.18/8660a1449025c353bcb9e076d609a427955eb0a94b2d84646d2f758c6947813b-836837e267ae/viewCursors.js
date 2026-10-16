import { ZE, qn } from "./async.js";
import { Hn, bgn, ws } from "./dom_2.js";
import { X9d, Z9d, Zgn, doe, hjo, n0r, pjo } from "./editorColorRegistry.js";
import { s2, the } from "./editorOptions.js";
import { i6 } from "./fastDomNode.js";
import { LI } from "./theme.js";
import { Dl } from "./themeService.js";
import { E } from "./tslib.es6.js";
import { Dfn, dWo, vDy } from "./viewCursor.js";
import { fDy } from "./viewCursors.css";
import { AQ, pz } from "./viewPart.js";
import { $Ae, Ew, nne } from "./ze.js";
var hWo, A$d;
export { A$d, hWo };
var __wakaru__Dy_initialized = false;
export function _Dy() {
if (__wakaru__Dy_initialized) return;
__wakaru__Dy_initialized = true;
"use strict";
E(), fDy(), i6(), qn(), pz(), vDy(), s2(), doe(), Dl(), LI(), Hn(), hWo = class SJc extends AQ {
    constructor(e){
        super(e);
        const n = this._context.configuration.options;
        this._readOnly = n.get(96), this._cursorBlinking = n.get(26), this._cursorStyle = n.get(147), this._cursorSmoothCaretAnimation = n.get(27), this._experimentalEditContextEnabled = n.get(157), this._selectionIsEmpty = !0, this._isComposingInput = !1, this._isVisible = !1, this._primaryCursor = new dWo(this._context, Dfn.Single), this._secondaryCursors = [], this._renderData = [], this._domNode = Ew(document.createElement("div")), this._domNode.setAttribute("role", "presentation"), this._domNode.setAttribute("aria-hidden", "true"), this._updateDomClassName(), this._domNode.appendChild(this._primaryCursor.getDomNode()), this._startCursorBlinkAnimation = new ZE, this._cursorFlatBlinkInterval = new bgn, this._blinkingEnabled = !1, this._editorHasFocus = !1, this._updateBlinking();
    }
    dispose() {
        super.dispose(), this._startCursorBlinkAnimation.dispose(), this._cursorFlatBlinkInterval.dispose();
    }
    getDomNode() {
        return this._domNode;
    }
    onCompositionStart(e) {
        return this._isComposingInput = !0, this._updateBlinking(), !0;
    }
    onCompositionEnd(e) {
        return this._isComposingInput = !1, this._updateBlinking(), !0;
    }
    onConfigurationChanged(e) {
        const n = this._context.configuration.options;
        this._readOnly = n.get(96), this._cursorBlinking = n.get(26), this._cursorStyle = n.get(147), this._cursorSmoothCaretAnimation = n.get(27), this._experimentalEditContextEnabled = n.get(157), this._updateBlinking(), this._updateDomClassName(), this._primaryCursor.onConfigurationChanged(e);
        for(let i = 0, r = this._secondaryCursors.length; i < r; i++)this._secondaryCursors[i].onConfigurationChanged(e);
        return !0;
    }
    _onCursorPositionChanged(e, n, i) {
        const r = this._secondaryCursors.length !== n.length || this._cursorSmoothCaretAnimation === "explicit" && i !== 3;
        if (this._primaryCursor.setPlurality(n.length ? Dfn.MultiPrimary : Dfn.Single), this._primaryCursor.onCursorPositionChanged(e, r), this._updateBlinking(), this._secondaryCursors.length < n.length) {
            const s = n.length - this._secondaryCursors.length;
            for(let o = 0; o < s; o++){
                const a = new dWo(this._context, Dfn.MultiSecondary);
                this._domNode.domNode.insertBefore(a.getDomNode().domNode, this._primaryCursor.getDomNode().domNode.nextSibling), this._secondaryCursors.push(a);
            }
        } else if (this._secondaryCursors.length > n.length) {
            const s = this._secondaryCursors.length - n.length;
            for(let o = 0; o < s; o++)this._domNode.removeChild(this._secondaryCursors[0].getDomNode()), this._secondaryCursors.splice(0, 1);
        }
        for(let s = 0; s < n.length; s++)this._secondaryCursors[s].onCursorPositionChanged(n[s], r);
    }
    onCursorStateChanged(e) {
        const n = [];
        for(let r = 0, s = e.selections.length; r < s; r++)n[r] = e.selections[r].getPosition();
        this._onCursorPositionChanged(n[0], n.slice(1), e.reason);
        const i = e.selections[0].isEmpty();
        return this._selectionIsEmpty !== i && (this._selectionIsEmpty = i, this._updateDomClassName()), !0;
    }
    onDecorationsChanged(e) {
        return !0;
    }
    onFlushed(e) {
        return !0;
    }
    onFocusChanged(e) {
        return this._editorHasFocus = e.isFocused, this._updateBlinking(), !1;
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
        return !0;
    }
    onTokensChanged(e) {
        const n = (i)=>{
            for(let r = 0, s = e.ranges.length; r < s; r++)if (e.ranges[r].fromLineNumber <= i.lineNumber && i.lineNumber <= e.ranges[r].toLineNumber) return !0;
            return !1;
        };
        if (n(this._primaryCursor.getPosition())) return !0;
        for (const i of this._secondaryCursors)if (n(i.getPosition())) return !0;
        return !1;
    }
    onZonesChanged(e) {
        return !0;
    }
    _getCursorBlinking() {
        return this._isComposingInput && !this._experimentalEditContextEnabled || !this._editorHasFocus || this._cursorBlinking === 0 ? 0 : this._readOnly ? 5 : this._cursorBlinking;
    }
    _updateBlinking() {
        this._startCursorBlinkAnimation.cancel(), this._cursorFlatBlinkInterval.cancel();
        const e = this._getCursorBlinking(), n = e === 0, i = e === 5;
        n ? this._hide() : this._show(), this._blinkingEnabled = !1, this._updateDomClassName(), !n && !i && (e === 1 ? this._cursorFlatBlinkInterval.cancelAndSet(()=>{
            this._isVisible ? this._hide() : this._show();
        }, SJc.BLINK_INTERVAL, ws(this._domNode.domNode)) : this._startCursorBlinkAnimation.setIfNotSet(()=>{
            this._blinkingEnabled = !0, this._updateDomClassName();
        }, SJc.BLINK_INTERVAL));
    }
    _updateDomClassName() {
        this._domNode.setClassName(this._getClassName());
    }
    _getClassName() {
        let e = "cursors-layer";
        switch(this._selectionIsEmpty || (e += " has-selection"), this._cursorStyle){
            case the.Line:
                e += " cursor-line-style";
                break;
            case the.Block:
                e += " cursor-block-style";
                break;
            case the.Underline:
                e += " cursor-underline-style";
                break;
            case the.LineThin:
                e += " cursor-line-thin-style";
                break;
            case the.BlockOutline:
                e += " cursor-block-outline-style";
                break;
            case the.UnderlineThin:
                e += " cursor-underline-thin-style";
                break;
            default:
                e += " cursor-line-style";
        }
        if (this._blinkingEnabled) switch(this._getCursorBlinking()){
            case 1:
                e += " cursor-blink";
                break;
            case 2:
                e += " cursor-smooth";
                break;
            case 3:
                e += " cursor-phase";
                break;
            case 4:
                e += " cursor-expand";
                break;
            case 5:
                e += " cursor-solid";
                break;
            default:
                e += " cursor-solid";
        }
        else e += " cursor-solid";
        return (this._cursorSmoothCaretAnimation === "on" || this._cursorSmoothCaretAnimation === "explicit") && (e += " cursor-smooth-caret-animation"), e;
    }
    _show() {
        this._primaryCursor.show();
        for(let e = 0, n = this._secondaryCursors.length; e < n; e++)this._secondaryCursors[e].show();
        this._isVisible = !0;
    }
    _hide() {
        this._primaryCursor.hide();
        for(let e = 0, n = this._secondaryCursors.length; e < n; e++)this._secondaryCursors[e].hide();
        this._isVisible = !1;
    }
    prepareRender(e) {
        this._primaryCursor.prepareRender(e);
        for(let n = 0, i = this._secondaryCursors.length; n < i; n++)this._secondaryCursors[n].prepareRender(e);
    }
    render(e) {
        const n = [];
        let i = 0;
        const r = this._primaryCursor.render(e);
        r && (n[i++] = r);
        for(let s = 0, o = this._secondaryCursors.length; s < o; s++){
            const a = this._secondaryCursors[s].render(e);
            a && (n[i++] = a);
        }
        this._renderData = n;
    }
    getLastRenderData() {
        return this._renderData;
    }
}, hWo.BLINK_INTERVAL = 500, A$d = hWo, nne((t, e)=>{
    const n = [
        {
            class: ".cursor",
            foreground: Zgn,
            background: n0r
        },
        {
            class: ".cursor-primary",
            foreground: hjo,
            background: X9d
        },
        {
            class: ".cursor-secondary",
            foreground: pjo,
            background: Z9d
        }
    ];
    for (const i of n){
        const r = t.getColor(i.foreground);
        if (r) {
            let s = t.getColor(i.background);
            s || (s = r.opposite()), e.addRule(`.monaco-editor .cursors-layer ${i.class} { background-color: ${r}; border-color: ${r}; color: ${s}; }`), $Ae(t.type) && e.addRule(`.monaco-editor .cursors-layer.has-selection ${i.class} { border-left: 1px solid ${s}; border-right: 1px solid ${s}; }`);
        }
    }
});

}
