import { GHo, WHo, mCr } from "./glyphMargin.js";
import { KMy } from "./linesDecorations.css";
import { E } from "./tslib.es6.js";
var s$d;
export { s$d };
var __wakaru_YMy_initialized = false;
export function YMy() {
if (__wakaru_YMy_initialized) return;
__wakaru_YMy_initialized = true;
"use strict";
E(), KMy(), GHo(), s$d = class extends WHo {
    constructor(t){
        super(), this._context = t;
        const n = this._context.configuration.options.get(151);
        this._decorationsLeft = n.decorationsLeft, this._decorationsWidth = n.decorationsWidth, this._renderResult = null, this._context.addEventHandler(this);
    }
    dispose() {
        this._context.removeEventHandler(this), this._renderResult = null, super.dispose();
    }
    onConfigurationChanged(t) {
        const n = this._context.configuration.options.get(151);
        return this._decorationsLeft = n.decorationsLeft, this._decorationsWidth = n.decorationsWidth, !0;
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
        return t.scrollTopChanged;
    }
    onZonesChanged(t) {
        return !0;
    }
    _getDecorations(t) {
        const e = t.getDecorationsInViewport(), n = [];
        let i = 0;
        for(let r = 0, s = e.length; r < s; r++){
            const o = e[r], a = o.options.linesDecorationsClassName, l = o.options.zIndex;
            a && (n[i++] = new mCr(o.range.startLineNumber, o.range.endLineNumber, a, o.options.linesDecorationsTooltip ?? null, l));
            const c = o.options.firstLineDecorationClassName;
            c && (n[i++] = new mCr(o.range.startLineNumber, o.range.startLineNumber, c, o.options.linesDecorationsTooltip ?? null, l));
        }
        return n;
    }
    prepareRender(t) {
        const e = t.visibleRange.startLineNumber, n = t.visibleRange.endLineNumber, i = this._render(e, n, this._getDecorations(t)), r = this._decorationsLeft.toString(), s = this._decorationsWidth.toString(), o = '" style="left:' + r + "px;width:" + s + 'px;"></div>', a = [];
        for(let l = e; l <= n; l++){
            const c = l - e, u = i[c].getDecorations();
            let d = "";
            for (const h of u){
                let p = '<div class="cldr ' + h.className;
                h.tooltip !== null && (p += '" title="' + h.tooltip), p += o, d += p;
            }
            a[c] = d;
        }
        this._renderResult = a;
    }
    render(t, e) {
        return this._renderResult ? this._renderResult[e - t] : "";
    }
};

}
