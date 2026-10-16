import { GHo, WHo, mCr } from "./glyphMargin.js";
import { ZMy } from "./marginDecorations.css";
import { E } from "./tslib.es6.js";
var a$d;
export { a$d };
var __wakaru_QMy_initialized = false;
export function QMy() {
if (__wakaru_QMy_initialized) return;
__wakaru_QMy_initialized = true;
"use strict";
E(), ZMy(), GHo(), a$d = class extends WHo {
    constructor(t){
        super(), this._context = t, this._renderResult = null, this._context.addEventHandler(this);
    }
    dispose() {
        this._context.removeEventHandler(this), this._renderResult = null, super.dispose();
    }
    onConfigurationChanged(t) {
        return !0;
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
            const o = e[r], a = o.options.marginClassName, l = o.options.zIndex;
            a && (n[i++] = new mCr(o.range.startLineNumber, o.range.endLineNumber, a, null, l));
        }
        return n;
    }
    prepareRender(t) {
        const e = t.visibleRange.startLineNumber, n = t.visibleRange.endLineNumber, i = this._render(e, n, this._getDecorations(t)), r = [];
        for(let s = e; s <= n; s++){
            const o = s - e, a = i[o].getDecorations();
            let l = "";
            for (const c of a)l += '<div class="cmdr ' + c.className + '" style=""></div>';
            r[o] = l;
        }
        this._renderResult = r;
    }
    render(t, e) {
        return this._renderResult ? this._renderResult[e - t] : "";
    }
};

}
