import { bn, wE } from "./async.js";
import { en, u2t, xi } from "./dom_2.js";
import { HV, SOc, iQr, kOc, lOt, nQr, vvi } from "./editorColorRegistry.js";
import { m1, t6 } from "./editorOptions.js";
import { Tx } from "./fastDomNode.js";
import { cre, kI, x_ } from "./qIc.js";
import { x0 } from "./theme.js";
import { as } from "./themeService.js";
import { x } from "./tslib.es6.js";
import { C_g, iFt, ots } from "./viewCursor.js";
import { w_g } from "./viewCursors.css";
import { aU, mW } from "./viewPart.js";
var ats, f6c;
export { ats, f6c };
var __wakaru_T_g_initialized = false;
export function T_g() {
if (__wakaru_T_g_initialized) return;
__wakaru_T_g_initialized = true;
"use strict";
x(), w_g(), Tx(), bn(), aU(), C_g(), m1(), HV(), as(), x0(), en(), ats = class BIa extends mW {
    constructor(t){
        super(t);
        const n = this._context.configuration.options;
        this._readOnly = n.get(96), this._cursorBlinking = n.get(26), this._cursorStyle = n.get(147), this._cursorSmoothCaretAnimation = n.get(27), this._experimentalEditContextEnabled = n.get(157), this._selectionIsEmpty = !0, this._isComposingInput = !1, this._isVisible = !1, this._primaryCursor = new ots(this._context, iFt.Single), this._secondaryCursors = [], this._renderData = [], this._domNode = x_(document.createElement("div")), this._domNode.setAttribute("role", "presentation"), this._domNode.setAttribute("aria-hidden", "true"), this._updateDomClassName(), this._domNode.appendChild(this._primaryCursor.getDomNode()), this._startCursorBlinkAnimation = new wE, this._cursorFlatBlinkInterval = new u2t, this._blinkingEnabled = !1, this._editorHasFocus = !1, this._updateBlinking();
    }
    dispose() {
        super.dispose(), this._startCursorBlinkAnimation.dispose(), this._cursorFlatBlinkInterval.dispose();
    }
    getDomNode() {
        return this._domNode;
    }
    onCompositionStart(t) {
        return this._isComposingInput = !0, this._updateBlinking(), !0;
    }
    onCompositionEnd(t) {
        return this._isComposingInput = !1, this._updateBlinking(), !0;
    }
    onConfigurationChanged(t) {
        const n = this._context.configuration.options;
        this._readOnly = n.get(96), this._cursorBlinking = n.get(26), this._cursorStyle = n.get(147), this._cursorSmoothCaretAnimation = n.get(27), this._experimentalEditContextEnabled = n.get(157), this._updateBlinking(), this._updateDomClassName(), this._primaryCursor.onConfigurationChanged(t);
        for(let i = 0, r = this._secondaryCursors.length; i < r; i++)this._secondaryCursors[i].onConfigurationChanged(t);
        return !0;
    }
    _onCursorPositionChanged(t, n, i) {
        const r = this._secondaryCursors.length !== n.length || this._cursorSmoothCaretAnimation === "explicit" && i !== 3;
        if (this._primaryCursor.setPlurality(n.length ? iFt.MultiPrimary : iFt.Single), this._primaryCursor.onCursorPositionChanged(t, r), this._updateBlinking(), this._secondaryCursors.length < n.length) {
            const s = n.length - this._secondaryCursors.length;
            for(let o = 0; o < s; o++){
                const a = new ots(this._context, iFt.MultiSecondary);
                this._domNode.domNode.insertBefore(a.getDomNode().domNode, this._primaryCursor.getDomNode().domNode.nextSibling), this._secondaryCursors.push(a);
            }
        } else if (this._secondaryCursors.length > n.length) {
            const s = this._secondaryCursors.length - n.length;
            for(let o = 0; o < s; o++)this._domNode.removeChild(this._secondaryCursors[0].getDomNode()), this._secondaryCursors.splice(0, 1);
        }
        for(let s = 0; s < n.length; s++)this._secondaryCursors[s].onCursorPositionChanged(n[s], r);
    }
    onCursorStateChanged(t) {
        const n = [];
        for(let r = 0, s = t.selections.length; r < s; r++)n[r] = t.selections[r].getPosition();
        this._onCursorPositionChanged(n[0], n.slice(1), t.reason);
        const i = t.selections[0].isEmpty();
        return this._selectionIsEmpty !== i && (this._selectionIsEmpty = i, this._updateDomClassName()), !0;
    }
    onDecorationsChanged(t) {
        return !0;
    }
    onFlushed(t) {
        return !0;
    }
    onFocusChanged(t) {
        return this._editorHasFocus = t.isFocused, this._updateBlinking(), !1;
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
        return !0;
    }
    onTokensChanged(t) {
        const n = (i)=>{
            for(let r = 0, s = t.ranges.length; r < s; r++)if (t.ranges[r].fromLineNumber <= i.lineNumber && i.lineNumber <= t.ranges[r].toLineNumber) return !0;
            return !1;
        };
        if (n(this._primaryCursor.getPosition())) return !0;
        for (const i of this._secondaryCursors)if (n(i.getPosition())) return !0;
        return !1;
    }
    onZonesChanged(t) {
        return !0;
    }
    _getCursorBlinking() {
        return this._isComposingInput && !this._experimentalEditContextEnabled || !this._editorHasFocus || this._cursorBlinking === 0 ? 0 : this._readOnly ? 5 : this._cursorBlinking;
    }
    _updateBlinking() {
        this._startCursorBlinkAnimation.cancel(), this._cursorFlatBlinkInterval.cancel();
        const t = this._getCursorBlinking(), n = t === 0, i = t === 5;
        n ? this._hide() : this._show(), this._blinkingEnabled = !1, this._updateDomClassName(), !n && !i && (t === 1 ? this._cursorFlatBlinkInterval.cancelAndSet(()=>{
            this._isVisible ? this._hide() : this._show();
        }, BIa.BLINK_INTERVAL, xi(this._domNode.domNode)) : this._startCursorBlinkAnimation.setIfNotSet(()=>{
            this._blinkingEnabled = !0, this._updateDomClassName();
        }, BIa.BLINK_INTERVAL));
    }
    _updateDomClassName() {
        this._domNode.setClassName(this._getClassName());
    }
    _getClassName() {
        let t = "cursors-layer";
        switch(this._selectionIsEmpty || (t += " has-selection"), this._cursorStyle){
            case t6.Line:
                t += " cursor-line-style";
                break;
            case t6.Block:
                t += " cursor-block-style";
                break;
            case t6.Underline:
                t += " cursor-underline-style";
                break;
            case t6.LineThin:
                t += " cursor-line-thin-style";
                break;
            case t6.BlockOutline:
                t += " cursor-block-outline-style";
                break;
            case t6.UnderlineThin:
                t += " cursor-underline-thin-style";
                break;
            default:
                t += " cursor-line-style";
        }
        if (this._blinkingEnabled) switch(this._getCursorBlinking()){
            case 1:
                t += " cursor-blink";
                break;
            case 2:
                t += " cursor-smooth";
                break;
            case 3:
                t += " cursor-phase";
                break;
            case 4:
                t += " cursor-expand";
                break;
            case 5:
                t += " cursor-solid";
                break;
            default:
                t += " cursor-solid";
        }
        else t += " cursor-solid";
        return (this._cursorSmoothCaretAnimation === "on" || this._cursorSmoothCaretAnimation === "explicit") && (t += " cursor-smooth-caret-animation"), t;
    }
    _show() {
        this._primaryCursor.show();
        for(let t = 0, n = this._secondaryCursors.length; t < n; t++)this._secondaryCursors[t].show();
        this._isVisible = !0;
    }
    _hide() {
        this._primaryCursor.hide();
        for(let t = 0, n = this._secondaryCursors.length; t < n; t++)this._secondaryCursors[t].hide();
        this._isVisible = !1;
    }
    prepareRender(t) {
        this._primaryCursor.prepareRender(t);
        for(let n = 0, i = this._secondaryCursors.length; n < i; n++)this._secondaryCursors[n].prepareRender(t);
    }
    render(t) {
        const n = [];
        let i = 0;
        const r = this._primaryCursor.render(t);
        r && (n[i++] = r);
        for(let s = 0, o = this._secondaryCursors.length; s < o; s++){
            const a = this._secondaryCursors[s].render(t);
            a && (n[i++] = a);
        }
        this._renderData = n;
    }
    getLastRenderData() {
        return this._renderData;
    }
}, ats.BLINK_INTERVAL = 500, f6c = ats, kI((e, t)=>{
    const n = [
        {
            class: ".cursor",
            foreground: lOt,
            background: vvi
        },
        {
            class: ".cursor-primary",
            foreground: nQr,
            background: SOc
        },
        {
            class: ".cursor-secondary",
            foreground: iQr,
            background: kOc
        }
    ];
    for (const i of n){
        const r = e.getColor(i.foreground);
        if (r) {
            let s = e.getColor(i.background);
            s || (s = r.opposite()), t.addRule(`.monaco-editor .cursors-layer ${i.class} { background-color: ${r}; border-color: ${r}; color: ${s}; }`), cre(e.type) && t.addRule(`.monaco-editor .cursors-layer.has-selection ${i.class} { border-left: 1px solid ${s}; border-right: 1px solid ${s}; }`);
        }
    }
});

}
