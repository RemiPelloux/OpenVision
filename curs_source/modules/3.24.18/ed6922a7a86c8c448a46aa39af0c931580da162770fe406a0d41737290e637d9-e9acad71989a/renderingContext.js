import { x } from "./tslib.es6.js";
var F5c, B5c, pes, T_i, e5e, mes, E_i;
export { B5c, E_i, F5c, T_i, e5e, mes, pes };
var __wakaru_qOt_initialized = false;
export function qOt() {
if (__wakaru_qOt_initialized) return;
__wakaru_qOt_initialized = true;
"use strict";
x(), F5c = class {
    constructor(e, t){
        this._restrictedRenderingContextBrand = void 0, this._viewLayout = e, this.viewportData = t, this.scrollWidth = this._viewLayout.getScrollWidth(), this.scrollHeight = this._viewLayout.getScrollHeight(), this.visibleRange = this.viewportData.visibleRange, this.bigNumbersDelta = this.viewportData.bigNumbersDelta;
        const n = this._viewLayout.getCurrentViewport();
        this.scrollTop = n.top, this.scrollLeft = n.left, this.viewportWidth = n.width, this.viewportHeight = n.height;
    }
    getScrolledTopFromAbsoluteTop(e) {
        return e - this.scrollTop;
    }
    getVerticalOffsetForLineNumber(e, t) {
        return this._viewLayout.getVerticalOffsetForLineNumber(e, t);
    }
    getVerticalOffsetAfterLineNumber(e, t) {
        return this._viewLayout.getVerticalOffsetAfterLineNumber(e, t);
    }
    getDecorationsInViewport() {
        return this.viewportData.getDecorationsInViewport();
    }
}, B5c = class extends F5c {
    constructor(e, t, n, i){
        super(e, t), this._renderingContextBrand = void 0, this._viewLines = n, this._viewLinesGpu = i;
    }
    linesVisibleRangesForRange(e, t) {
        const n = this._viewLines.linesVisibleRangesForRange(e, t);
        if (!this._viewLinesGpu) return n ?? null;
        const i = this._viewLinesGpu.linesVisibleRangesForRange(e, t);
        return n ? i ? n.concat(i).sort((r, s)=>r.lineNumber - s.lineNumber) : n : i;
    }
    visibleRangeForPosition(e) {
        return this._viewLines.visibleRangeForPosition(e) ?? this._viewLinesGpu?.visibleRangeForPosition(e) ?? null;
    }
}, pes = class {
    constructor(e, t, n, i){
        this.outsideRenderedLine = e, this.lineNumber = t, this.ranges = n, this.continuesOnNextLine = i;
    }
    static firstLine(e) {
        if (!e) return null;
        let t = null;
        for (const n of e)(!t || n.lineNumber < t.lineNumber) && (t = n);
        return t;
    }
    static lastLine(e) {
        if (!e) return null;
        let t = null;
        for (const n of e)(!t || n.lineNumber > t.lineNumber) && (t = n);
        return t;
    }
}, T_i = class Ekm {
    constructor(t, n){
        this._horizontalRangeBrand = void 0, this.left = Math.round(t), this.width = Math.round(n);
    }
    static from(t) {
        const n = new Array(t.length);
        for(let i = 0, r = t.length; i < r; i++){
            const s = t[i];
            n[i] = new Ekm(s.left, s.width);
        }
        return n;
    }
    toString() {
        return `[${this.left},${this.width}]`;
    }
}, e5e = class {
    constructor(e, t){
        this._floatHorizontalRangeBrand = void 0, this.left = e, this.width = t;
    }
    toString() {
        return `[${this.left},${this.width}]`;
    }
    static compare(e, t) {
        return e.left - t.left;
    }
}, mes = class {
    constructor(e, t){
        this.outsideRenderedLine = e, this.originalLeft = t, this.left = Math.round(this.originalLeft);
    }
}, E_i = class {
    constructor(e, t){
        this.outsideRenderedLine = e, this.ranges = t;
    }
};

}
