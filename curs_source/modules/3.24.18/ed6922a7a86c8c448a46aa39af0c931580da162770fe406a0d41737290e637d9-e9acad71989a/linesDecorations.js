import { $es, H_i, Hes } from "./glyphMargin.js";
import { t_g } from "./linesDecorations.css";
import { x } from "./tslib.es6.js";
var j9c;
export { j9c };
var __wakaru_n_g_initialized = false;
export function n_g() {
if (__wakaru_n_g_initialized) return;
__wakaru_n_g_initialized = true;
"use strict";
x(), t_g(), Hes(), j9c = class extends $es {
    constructor(e){
        super(), this._context = e;
        const n = this._context.configuration.options.get(151);
        this._decorationsLeft = n.decorationsLeft, this._decorationsWidth = n.decorationsWidth, this._renderResult = null, this._context.addEventHandler(this);
    }
    dispose() {
        this._context.removeEventHandler(this), this._renderResult = null, super.dispose();
    }
    onConfigurationChanged(e) {
        const n = this._context.configuration.options.get(151);
        return this._decorationsLeft = n.decorationsLeft, this._decorationsWidth = n.decorationsWidth, !0;
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
            const o = t[r], a = o.options.linesDecorationsClassName, c = o.options.zIndex;
            a && (n[i++] = new H_i(o.range.startLineNumber, o.range.endLineNumber, a, o.options.linesDecorationsTooltip ?? null, c));
            const l = o.options.firstLineDecorationClassName;
            l && (n[i++] = new H_i(o.range.startLineNumber, o.range.startLineNumber, l, o.options.linesDecorationsTooltip ?? null, c));
        }
        return n;
    }
    prepareRender(e) {
        const t = e.visibleRange.startLineNumber, n = e.visibleRange.endLineNumber, i = this._render(t, n, this._getDecorations(e)), r = this._decorationsLeft.toString(), s = this._decorationsWidth.toString(), o = '" style="left:' + r + "px;width:" + s + 'px;"></div>', a = [];
        for(let c = t; c <= n; c++){
            const l = c - t, u = i[l].getDecorations();
            let h = "";
            for (const p of u){
                let g = '<div class="cldr ' + p.className;
                p.tooltip !== null && (g += '" title="' + p.tooltip), g += o, h += g;
            }
            a[l] = h;
        }
        this._renderResult = a;
    }
    render(e, t) {
        return this._renderResult ? this._renderResult[t - e] : "";
    }
};

}
