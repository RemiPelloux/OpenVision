import { $es, H_i, Hes } from "./glyphMargin.js";
import { r_g } from "./marginDecorations.css";
import { x } from "./tslib.es6.js";
var z9c;
export { z9c };
var __wakaru_s_g_initialized = false;
export function s_g() {
if (__wakaru_s_g_initialized) return;
__wakaru_s_g_initialized = true;
"use strict";
x(), r_g(), Hes(), z9c = class extends $es {
    constructor(e){
        super(), this._context = e, this._renderResult = null, this._context.addEventHandler(this);
    }
    dispose() {
        this._context.removeEventHandler(this), this._renderResult = null, super.dispose();
    }
    onConfigurationChanged(e) {
        return !0;
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
        return e.scrollTopChanged;
    }
    onZonesChanged(e) {
        return !0;
    }
    _getDecorations(e) {
        const t = e.getDecorationsInViewport(), n = [];
        let i = 0;
        for(let r = 0, s = t.length; r < s; r++){
            const o = t[r], a = o.options.marginClassName, c = o.options.zIndex;
            a && (n[i++] = new H_i(o.range.startLineNumber, o.range.endLineNumber, a, null, c));
        }
        return n;
    }
    prepareRender(e) {
        const t = e.visibleRange.startLineNumber, n = e.visibleRange.endLineNumber, i = this._render(t, n, this._getDecorations(e)), r = [];
        for(let s = t; s <= n; s++){
            const o = s - t, a = i[o].getDecorations();
            let c = "";
            for (const l of a)c += '<div class="cmdr ' + l.className + '" style=""></div>';
            r[o] = c;
        }
        this._renderResult = r;
    }
    render(e, t) {
        return this._renderResult ? this._renderResult[t - e] : "";
    }
};

}
