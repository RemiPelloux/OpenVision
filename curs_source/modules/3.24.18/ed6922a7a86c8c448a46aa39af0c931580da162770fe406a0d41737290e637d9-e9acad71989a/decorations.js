import { Vvg } from "./decorations.css";
import { jze, n5e } from "./dynamicViewOverlay.js";
import { dt, qi } from "./range.js";
import { T_i, qOt } from "./renderingContext.js";
import { x } from "./tslib.es6.js";
var D9c;
export { D9c };
var __wakaru_jvg_initialized = false;
export function jvg() {
if (__wakaru_jvg_initialized) return;
__wakaru_jvg_initialized = true;
"use strict";
x(), Vvg(), jze(), qOt(), qi(), D9c = class extends n5e {
    constructor(e){
        super(), this._context = e;
        const t = this._context.configuration.options;
        this._typicalHalfwidthCharacterWidth = t.get(52).typicalHalfwidthCharacterWidth, this._renderResult = null, this._context.addEventHandler(this);
    }
    dispose() {
        this._context.removeEventHandler(this), this._renderResult = null, super.dispose();
    }
    onConfigurationChanged(e) {
        const t = this._context.configuration.options;
        return this._typicalHalfwidthCharacterWidth = t.get(52).typicalHalfwidthCharacterWidth, !0;
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
        return e.scrollTopChanged || e.scrollWidthChanged;
    }
    onZonesChanged(e) {
        return !0;
    }
    prepareRender(e) {
        const t = e.getDecorationsInViewport();
        let n = [], i = 0;
        for(let a = 0, c = t.length; a < c; a++){
            const l = t[a];
            l.options.className && (n[i++] = l);
        }
        n = n.sort((a, c)=>{
            if (a.options.zIndex < c.options.zIndex) return -1;
            if (a.options.zIndex > c.options.zIndex) return 1;
            const l = a.options.className, u = c.options.className;
            return l < u ? -1 : l > u ? 1 : dt.compareRangesUsingStarts(a.range, c.range);
        });
        const r = e.visibleRange.startLineNumber, s = e.visibleRange.endLineNumber, o = [];
        for(let a = r; a <= s; a++){
            const c = a - r;
            o[c] = "";
        }
        this._renderWholeLineDecorations(e, n, o), this._renderNormalDecorations(e, n, o), this._renderResult = o;
    }
    _renderWholeLineDecorations(e, t, n) {
        const i = e.visibleRange.startLineNumber, r = e.visibleRange.endLineNumber;
        for(let s = 0, o = t.length; s < o; s++){
            const a = t[s];
            if (!a.options.isWholeLine) continue;
            const c = '<div class="cdr ' + a.options.className + '" style="left:0;width:100%;"></div>', l = Math.max(a.range.startLineNumber, i), u = Math.min(a.range.endLineNumber, r);
            for(let h = l; h <= u; h++){
                const p = h - i;
                n[p] += c;
            }
        }
    }
    _renderNormalDecorations(e, t, n) {
        const i = e.visibleRange.startLineNumber;
        let r = null, s = !1, o = null, a = !1;
        for(let c = 0, l = t.length; c < l; c++){
            const u = t[c];
            if (u.options.isWholeLine) continue;
            const h = u.options.className, p = !!u.options.showIfCollapsed;
            let g = u.range;
            if (p && g.endColumn === 1 && g.endLineNumber !== g.startLineNumber && (g = new dt(g.startLineNumber, g.startColumn, g.endLineNumber - 1, this._context.viewModel.getLineMaxColumn(g.endLineNumber - 1))), r === h && s === p && dt.areIntersectingOrTouching(o, g)) {
                o = dt.plusRange(o, g);
                continue;
            }
            r !== null && this._renderNormalDecoration(e, o, r, a, s, i, n), r = h, s = p, o = g, a = u.options.shouldFillLineOnLineBreak ?? !1;
        }
        r !== null && this._renderNormalDecoration(e, o, r, a, s, i, n);
    }
    _renderNormalDecoration(e, t, n, i, r, s, o) {
        const a = e.linesVisibleRangesForRange(t, n === "findMatch");
        if (a) for(let c = 0, l = a.length; c < l; c++){
            const u = a[c];
            if (u.outsideRenderedLine) continue;
            const h = u.lineNumber - s;
            if (r && u.ranges.length === 1) {
                const p = u.ranges[0];
                if (p.width < this._typicalHalfwidthCharacterWidth) {
                    const g = Math.round(p.left + p.width / 2), f = Math.max(0, Math.round(g - this._typicalHalfwidthCharacterWidth / 2));
                    u.ranges[0] = new T_i(f, this._typicalHalfwidthCharacterWidth);
                }
            }
            for(let p = 0, g = u.ranges.length; p < g; p++){
                const f = i && u.continuesOnNextLine && g === 1, v = u.ranges[p], b = '<div class="cdr ' + n + '" style="left:' + String(v.left) + "px;width:" + (f ? "100%;" : String(v.width) + "px;") + '"></div>';
                o[h] += b;
            }
        }
    }
    render(e, t) {
        if (!this._renderResult) return "";
        const n = t - e;
        return n < 0 || n >= this._renderResult.length ? "" : this._renderResult[n];
    }
};

}
