import { nh } from "./HVr.js";
import { dr } from "./arrays.js";
import { Wvg } from "./currentLineHighlight.css";
import { jze, n5e } from "./dynamicViewOverlay.js";
import { HV, fvi, tQr } from "./editorColorRegistry.js";
import { Yn, ya } from "./position.js";
import { cre, kI } from "./qIc.js";
import { _f, za } from "./selection.js";
import { x0 } from "./theme.js";
import { as } from "./themeService.js";
import { x } from "./tslib.es6.js";
var Ues, A9c, R9c;
export { A9c, R9c, Ues };
var __wakaru_Gvg_initialized = false;
export function Gvg() {
if (__wakaru_Gvg_initialized) return;
__wakaru_Gvg_initialized = true;
"use strict";
x(), Wvg(), jze(), HV(), dr(), as(), _f(), x0(), ya(), Ues = class extends n5e {
    constructor(e){
        super(), this._context = e;
        const t = this._context.configuration.options, n = t.get(151);
        this._renderLineHighlight = t.get(101), this._renderLineHighlightOnlyWhenFocus = t.get(102), this._wordWrap = n.isViewportWrapping, this._contentLeft = n.contentLeft, this._contentWidth = n.contentWidth, this._selectionIsEmpty = !0, this._focused = !1, this._cursorLineNumbers = [
            1
        ], this._selections = [
            new za(1, 1, 1, 1)
        ], this._renderData = null, this._context.addEventHandler(this);
    }
    dispose() {
        this._context.removeEventHandler(this), super.dispose();
    }
    _readFromSelections() {
        let e = !1;
        const t = new Set;
        for (const r of this._selections)t.add(r.positionLineNumber);
        const n = Array.from(t);
        n.sort((r, s)=>r - s), nh(this._cursorLineNumbers, n) || (this._cursorLineNumbers = n, e = !0);
        const i = this._selections.every((r)=>r.isEmpty());
        return this._selectionIsEmpty !== i && (this._selectionIsEmpty = i, e = !0), e;
    }
    onThemeChanged(e) {
        return this._readFromSelections();
    }
    onConfigurationChanged(e) {
        const t = this._context.configuration.options, n = t.get(151);
        return this._renderLineHighlight = t.get(101), this._renderLineHighlightOnlyWhenFocus = t.get(102), this._wordWrap = n.isViewportWrapping, this._contentLeft = n.contentLeft, this._contentWidth = n.contentWidth, !0;
    }
    onCursorStateChanged(e) {
        return this._selections = e.selections, this._readFromSelections();
    }
    onFlushed(e) {
        return !0;
    }
    onLinesDeleted(e) {
        return !0;
    }
    onLinesInserted(e) {
        return !0;
    }
    onScrollChanged(e) {
        return e.scrollWidthChanged || e.scrollTopChanged;
    }
    onZonesChanged(e) {
        return !0;
    }
    onFocusChanged(e) {
        return this._renderLineHighlightOnlyWhenFocus ? (this._focused = e.isFocused, !0) : !1;
    }
    prepareRender(e) {
        if (!this._shouldRenderThis()) {
            this._renderData = null;
            return;
        }
        const t = e.visibleRange.startLineNumber, n = e.visibleRange.endLineNumber, i = [];
        for(let s = t; s <= n; s++){
            const o = s - t;
            i[o] = "";
        }
        if (this._wordWrap) {
            const s = this._renderOne(e, !1);
            for (const o of this._cursorLineNumbers){
                const a = this._context.viewModel.coordinatesConverter, c = a.convertViewPositionToModelPosition(new Yn(o, 1)).lineNumber, l = a.convertModelPositionToViewPosition(new Yn(c, 1)).lineNumber, u = a.convertModelPositionToViewPosition(new Yn(c, this._context.viewModel.model.getLineMaxColumn(c))).lineNumber, h = Math.max(l, t), p = Math.min(u, n);
                for(let g = h; g <= p; g++){
                    const f = g - t;
                    i[f] = s;
                }
            }
        }
        const r = this._renderOne(e, !0);
        for (const s of this._cursorLineNumbers){
            if (s < t || s > n) continue;
            const o = s - t;
            i[o] = r;
        }
        this._renderData = i;
    }
    render(e, t) {
        if (!this._renderData) return "";
        const n = t - e;
        return n >= this._renderData.length ? "" : this._renderData[n];
    }
    _shouldRenderInMargin() {
        return (this._renderLineHighlight === "gutter" || this._renderLineHighlight === "all") && (!this._renderLineHighlightOnlyWhenFocus || this._focused);
    }
    _shouldRenderInContent() {
        return (this._renderLineHighlight === "line" || this._renderLineHighlight === "all") && this._selectionIsEmpty && (!this._renderLineHighlightOnlyWhenFocus || this._focused);
    }
}, A9c = class extends Ues {
    _renderOne(e, t) {
        return `<div class="${"current-line" + (this._shouldRenderInMargin() ? " current-line-both" : "") + (t ? " current-line-exact" : "")}" style="width:${Math.max(e.scrollWidth, this._contentWidth)}px;"></div>`;
    }
    _shouldRenderThis() {
        return this._shouldRenderInContent();
    }
    _shouldRenderOther() {
        return this._shouldRenderInMargin();
    }
}, R9c = class extends Ues {
    _renderOne(e, t) {
        return `<div class="${"current-line" + (this._shouldRenderInMargin() ? " current-line-margin" : "") + (this._shouldRenderOther() ? " current-line-margin-both" : "") + (this._shouldRenderInMargin() && t ? " current-line-exact-margin" : "")}" style="width:${this._contentLeft}px"></div>`;
    }
    _shouldRenderThis() {
        return !0;
    }
    _shouldRenderOther() {
        return this._shouldRenderInContent();
    }
}, kI((e, t)=>{
    const n = e.getColor(fvi);
    if (n && (t.addRule(`.monaco-editor .view-overlays .current-line { background-color: ${n}; }`), t.addRule(`.monaco-editor .margin-view-overlays .current-line-margin { background-color: ${n}; border: none; }`)), !n || n.isTransparent() || e.defines(tQr)) {
        const i = e.getColor(tQr);
        i && (t.addRule(`.monaco-editor .view-overlays .current-line-exact { border: 2px solid ${i}; }`), t.addRule(`.monaco-editor .margin-view-overlays .current-line-exact-margin { border: 2px solid ${i}; }`), cre(e.type) && (t.addRule(".monaco-editor .view-overlays .current-line-exact { border-width: 1px; }"), t.addRule(".monaco-editor .margin-view-overlays .current-line-exact-margin { border-width: 1px; }")));
    }
});

}
