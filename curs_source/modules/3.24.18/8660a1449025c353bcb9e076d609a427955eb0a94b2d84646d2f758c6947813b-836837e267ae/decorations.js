import { FMy } from "./decorations.css";
import { Qtt, kyt } from "./dynamicViewOverlay.js";
import { Qs, qt } from "./range.js";
import { Q0r, Tfn } from "./renderingContext.js";
import { E } from "./tslib.es6.js";
var qjd;
export { qjd };
var __wakaru_BMy_initialized = false;
export function BMy() {
if (__wakaru_BMy_initialized) return;
__wakaru_BMy_initialized = true;
"use strict";
E(), FMy(), kyt(), Tfn(), Qs(), qjd = class extends Qtt {
    constructor(t){
        super(), this._context = t;
        const e = this._context.configuration.options;
        this._typicalHalfwidthCharacterWidth = e.get(52).typicalHalfwidthCharacterWidth, this._renderResult = null, this._context.addEventHandler(this);
    }
    dispose() {
        this._context.removeEventHandler(this), this._renderResult = null, super.dispose();
    }
    onConfigurationChanged(t) {
        const e = this._context.configuration.options;
        return this._typicalHalfwidthCharacterWidth = e.get(52).typicalHalfwidthCharacterWidth, !0;
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
        return t.scrollTopChanged || t.scrollWidthChanged;
    }
    onZonesChanged(t) {
        return !0;
    }
    prepareRender(t) {
        const e = t.getDecorationsInViewport();
        let n = [], i = 0;
        for(let a = 0, l = e.length; a < l; a++){
            const c = e[a];
            c.options.className && (n[i++] = c);
        }
        n = n.sort((a, l)=>{
            if (a.options.zIndex < l.options.zIndex) return -1;
            if (a.options.zIndex > l.options.zIndex) return 1;
            const c = a.options.className, u = l.options.className;
            return c < u ? -1 : c > u ? 1 : qt.compareRangesUsingStarts(a.range, l.range);
        });
        const r = t.visibleRange.startLineNumber, s = t.visibleRange.endLineNumber, o = [];
        for(let a = r; a <= s; a++){
            const l = a - r;
            o[l] = "";
        }
        this._renderWholeLineDecorations(t, n, o), this._renderNormalDecorations(t, n, o), this._renderResult = o;
    }
    _renderWholeLineDecorations(t, e, n) {
        const i = t.visibleRange.startLineNumber, r = t.visibleRange.endLineNumber;
        for(let s = 0, o = e.length; s < o; s++){
            const a = e[s];
            if (!a.options.isWholeLine) continue;
            const l = '<div class="cdr ' + a.options.className + '" style="left:0;width:100%;"></div>', c = Math.max(a.range.startLineNumber, i), u = Math.min(a.range.endLineNumber, r);
            for(let d = c; d <= u; d++){
                const h = d - i;
                n[h] += l;
            }
        }
    }
    _renderNormalDecorations(t, e, n) {
        const i = t.visibleRange.startLineNumber;
        let r = null, s = !1, o = null, a = !1;
        for(let l = 0, c = e.length; l < c; l++){
            const u = e[l];
            if (u.options.isWholeLine) continue;
            const d = u.options.className, h = !!u.options.showIfCollapsed;
            let p = u.range;
            if (h && p.endColumn === 1 && p.endLineNumber !== p.startLineNumber && (p = new qt(p.startLineNumber, p.startColumn, p.endLineNumber - 1, this._context.viewModel.getLineMaxColumn(p.endLineNumber - 1))), r === d && s === h && qt.areIntersectingOrTouching(o, p)) {
                o = qt.plusRange(o, p);
                continue;
            }
            r !== null && this._renderNormalDecoration(t, o, r, a, s, i, n), r = d, s = h, o = p, a = u.options.shouldFillLineOnLineBreak ?? !1;
        }
        r !== null && this._renderNormalDecoration(t, o, r, a, s, i, n);
    }
    _renderNormalDecoration(t, e, n, i, r, s, o) {
        const a = t.linesVisibleRangesForRange(e, n === "findMatch");
        if (a) for(let l = 0, c = a.length; l < c; l++){
            const u = a[l];
            if (u.outsideRenderedLine) continue;
            const d = u.lineNumber - s;
            if (r && u.ranges.length === 1) {
                const h = u.ranges[0];
                if (h.width < this._typicalHalfwidthCharacterWidth) {
                    const p = Math.round(h.left + h.width / 2), g = Math.max(0, Math.round(p - this._typicalHalfwidthCharacterWidth / 2));
                    u.ranges[0] = new Q0r(g, this._typicalHalfwidthCharacterWidth);
                }
            }
            for(let h = 0, p = u.ranges.length; h < p; h++){
                const g = i && u.continuesOnNextLine && p === 1, f = u.ranges[h], _ = '<div class="cdr ' + n + '" style="left:' + String(f.left) + "px;width:" + (g ? "100%;" : String(f.width) + "px;") + '"></div>';
                o[d] += _;
            }
        }
    }
    render(t, e) {
        if (!this._renderResult) return "";
        const n = e - t;
        return n < 0 || n >= this._renderResult.length ? "" : this._renderResult[n];
    }
};

}
