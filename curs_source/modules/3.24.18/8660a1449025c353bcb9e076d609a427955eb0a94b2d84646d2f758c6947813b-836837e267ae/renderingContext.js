import { E } from "./tslib.es6.js";
var ZUd, QUd, fHo, Q0r, Ktt, vHo, J0r;
export { J0r, Ktt, Q0r, QUd, ZUd, fHo, vHo };
var __wakaru_Tfn_initialized = false;
export function Tfn() {
if (__wakaru_Tfn_initialized) return;
__wakaru_Tfn_initialized = true;
"use strict";
E(), ZUd = class {
    constructor(t, e){
        this._restrictedRenderingContextBrand = void 0, this._viewLayout = t, this.viewportData = e, this.scrollWidth = this._viewLayout.getScrollWidth(), this.scrollHeight = this._viewLayout.getScrollHeight(), this.visibleRange = this.viewportData.visibleRange, this.bigNumbersDelta = this.viewportData.bigNumbersDelta;
        const n = this._viewLayout.getCurrentViewport();
        this.scrollTop = n.top, this.scrollLeft = n.left, this.viewportWidth = n.width, this.viewportHeight = n.height;
    }
    getScrolledTopFromAbsoluteTop(t) {
        return t - this.scrollTop;
    }
    getVerticalOffsetForLineNumber(t, e) {
        return this._viewLayout.getVerticalOffsetForLineNumber(t, e);
    }
    getVerticalOffsetAfterLineNumber(t, e) {
        return this._viewLayout.getVerticalOffsetAfterLineNumber(t, e);
    }
    getDecorationsInViewport() {
        return this.viewportData.getDecorationsInViewport();
    }
}, QUd = class extends ZUd {
    constructor(t, e, n, i){
        super(t, e), this._renderingContextBrand = void 0, this._viewLines = n, this._viewLinesGpu = i;
    }
    linesVisibleRangesForRange(t, e) {
        const n = this._viewLines.linesVisibleRangesForRange(t, e);
        if (!this._viewLinesGpu) return n ?? null;
        const i = this._viewLinesGpu.linesVisibleRangesForRange(t, e);
        return n ? i ? n.concat(i).sort((r, s)=>r.lineNumber - s.lineNumber) : n : i;
    }
    visibleRangeForPosition(t) {
        return this._viewLines.visibleRangeForPosition(t) ?? this._viewLinesGpu?.visibleRangeForPosition(t) ?? null;
    }
}, fHo = class {
    constructor(t, e, n, i){
        this.outsideRenderedLine = t, this.lineNumber = e, this.ranges = n, this.continuesOnNextLine = i;
    }
    static firstLine(t) {
        if (!t) return null;
        let e = null;
        for (const n of t)(!e || n.lineNumber < e.lineNumber) && (e = n);
        return e;
    }
    static lastLine(t) {
        if (!t) return null;
        let e = null;
        for (const n of t)(!e || n.lineNumber > e.lineNumber) && (e = n);
        return e;
    }
}, Q0r = class ZAb {
    constructor(e, n){
        this._horizontalRangeBrand = void 0, this.left = Math.round(e), this.width = Math.round(n);
    }
    static from(e) {
        const n = new Array(e.length);
        for(let i = 0, r = e.length; i < r; i++){
            const s = e[i];
            n[i] = new ZAb(s.left, s.width);
        }
        return n;
    }
    toString() {
        return `[${this.left},${this.width}]`;
    }
}, Ktt = class {
    constructor(t, e){
        this._floatHorizontalRangeBrand = void 0, this.left = t, this.width = e;
    }
    toString() {
        return `[${this.left},${this.width}]`;
    }
    static compare(t, e) {
        return t.left - e.left;
    }
}, vHo = class {
    constructor(t, e){
        this.outsideRenderedLine = t, this.originalLeft = e, this.left = Math.round(this.originalLeft);
    }
}, J0r = class {
    constructor(t, e){
        this.outsideRenderedLine = t, this.ranges = e;
    }
};

}
