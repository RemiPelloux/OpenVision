import { Zm } from "./Iwo.js";
import { bo } from "./arrays.js";
import { LMy } from "./currentLineHighlight.css";
import { Qtt, kyt } from "./dynamicViewOverlay.js";
import { djo, doe, t0r } from "./editorColorRegistry.js";
import { er, jc } from "./position.js";
import { Cy, bu } from "./selection.js";
import { LI } from "./theme.js";
import { Dl } from "./themeService.js";
import { E } from "./tslib.es6.js";
import { $Ae, nne } from "./ze.js";
var HHo, Wjd, Gjd;
export { Gjd, HHo, Wjd };
var __wakaru_OMy_initialized = false;
export function OMy() {
if (__wakaru_OMy_initialized) return;
__wakaru_OMy_initialized = true;
"use strict";
E(), LMy(), kyt(), doe(), bo(), Dl(), Cy(), LI(), jc(), HHo = class extends Qtt {
    constructor(t){
        super(), this._context = t;
        const e = this._context.configuration.options, n = e.get(151);
        this._renderLineHighlight = e.get(101), this._renderLineHighlightOnlyWhenFocus = e.get(102), this._wordWrap = n.isViewportWrapping, this._contentLeft = n.contentLeft, this._contentWidth = n.contentWidth, this._selectionIsEmpty = !0, this._focused = !1, this._cursorLineNumbers = [
            1
        ], this._selections = [
            new bu(1, 1, 1, 1)
        ], this._renderData = null, this._context.addEventHandler(this);
    }
    dispose() {
        this._context.removeEventHandler(this), super.dispose();
    }
    _readFromSelections() {
        let t = !1;
        const e = new Set;
        for (const r of this._selections)e.add(r.positionLineNumber);
        const n = Array.from(e);
        n.sort((r, s)=>r - s), Zm(this._cursorLineNumbers, n) || (this._cursorLineNumbers = n, t = !0);
        const i = this._selections.every((r)=>r.isEmpty());
        return this._selectionIsEmpty !== i && (this._selectionIsEmpty = i, t = !0), t;
    }
    onThemeChanged(t) {
        return this._readFromSelections();
    }
    onConfigurationChanged(t) {
        const e = this._context.configuration.options, n = e.get(151);
        return this._renderLineHighlight = e.get(101), this._renderLineHighlightOnlyWhenFocus = e.get(102), this._wordWrap = n.isViewportWrapping, this._contentLeft = n.contentLeft, this._contentWidth = n.contentWidth, !0;
    }
    onCursorStateChanged(t) {
        return this._selections = t.selections, this._readFromSelections();
    }
    onFlushed(t) {
        return !0;
    }
    onLinesDeleted(t) {
        return !0;
    }
    onLinesInserted(t) {
        return !0;
    }
    onScrollChanged(t) {
        return t.scrollWidthChanged || t.scrollTopChanged;
    }
    onZonesChanged(t) {
        return !0;
    }
    onFocusChanged(t) {
        return this._renderLineHighlightOnlyWhenFocus ? (this._focused = t.isFocused, !0) : !1;
    }
    prepareRender(t) {
        if (!this._shouldRenderThis()) {
            this._renderData = null;
            return;
        }
        const e = t.visibleRange.startLineNumber, n = t.visibleRange.endLineNumber, i = [];
        for(let s = e; s <= n; s++){
            const o = s - e;
            i[o] = "";
        }
        if (this._wordWrap) {
            const s = this._renderOne(t, !1);
            for (const o of this._cursorLineNumbers){
                const a = this._context.viewModel.coordinatesConverter, l = a.convertViewPositionToModelPosition(new er(o, 1)).lineNumber, c = a.convertModelPositionToViewPosition(new er(l, 1)).lineNumber, u = a.convertModelPositionToViewPosition(new er(l, this._context.viewModel.model.getLineMaxColumn(l))).lineNumber, d = Math.max(c, e), h = Math.min(u, n);
                for(let p = d; p <= h; p++){
                    const g = p - e;
                    i[g] = s;
                }
            }
        }
        const r = this._renderOne(t, !0);
        for (const s of this._cursorLineNumbers){
            if (s < e || s > n) continue;
            const o = s - e;
            i[o] = r;
        }
        this._renderData = i;
    }
    render(t, e) {
        if (!this._renderData) return "";
        const n = e - t;
        return n >= this._renderData.length ? "" : this._renderData[n];
    }
    _shouldRenderInMargin() {
        return (this._renderLineHighlight === "gutter" || this._renderLineHighlight === "all") && (!this._renderLineHighlightOnlyWhenFocus || this._focused);
    }
    _shouldRenderInContent() {
        return (this._renderLineHighlight === "line" || this._renderLineHighlight === "all") && this._selectionIsEmpty && (!this._renderLineHighlightOnlyWhenFocus || this._focused);
    }
}, Wjd = class extends HHo {
    _renderOne(t, e) {
        return `<div class="${"current-line" + (this._shouldRenderInMargin() ? " current-line-both" : "") + (e ? " current-line-exact" : "")}" style="width:${Math.max(t.scrollWidth, this._contentWidth)}px;"></div>`;
    }
    _shouldRenderThis() {
        return this._shouldRenderInContent();
    }
    _shouldRenderOther() {
        return this._shouldRenderInMargin();
    }
}, Gjd = class extends HHo {
    _renderOne(t, e) {
        return `<div class="${"current-line" + (this._shouldRenderInMargin() ? " current-line-margin" : "") + (this._shouldRenderOther() ? " current-line-margin-both" : "") + (this._shouldRenderInMargin() && e ? " current-line-exact-margin" : "")}" style="width:${this._contentLeft}px"></div>`;
    }
    _shouldRenderThis() {
        return !0;
    }
    _shouldRenderOther() {
        return this._shouldRenderInContent();
    }
}, nne((t, e)=>{
    const n = t.getColor(t0r);
    if (n && (e.addRule(`.monaco-editor .view-overlays .current-line { background-color: ${n}; }`), e.addRule(`.monaco-editor .margin-view-overlays .current-line-margin { background-color: ${n}; border: none; }`)), !n || n.isTransparent() || t.defines(djo)) {
        const i = t.getColor(djo);
        i && (e.addRule(`.monaco-editor .view-overlays .current-line-exact { border: 2px solid ${i}; }`), e.addRule(`.monaco-editor .margin-view-overlays .current-line-exact-margin { border: 2px solid ${i}; }`), $Ae(t.type) && (e.addRule(".monaco-editor .view-overlays .current-line-exact { border-width: 1px; }"), e.addRule(".monaco-editor .margin-view-overlays .current-line-exact-margin { border-width: 1px; }")));
    }
});

}
