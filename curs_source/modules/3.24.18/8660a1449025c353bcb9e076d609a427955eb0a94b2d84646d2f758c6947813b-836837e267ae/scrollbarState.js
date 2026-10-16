import { E } from "./tslib.es6.js";
var fjd, rCr;
export { fjd, rCr };
var __wakaru_PHo_initialized = false;
export function PHo() {
if (__wakaru_PHo_initialized) return;
__wakaru_PHo_initialized = true;
"use strict";
E(), fjd = 20, rCr = class fJc {
    constructor(e, n, i, r, s, o){
        this._scrollbarSize = Math.round(n), this._oppositeScrollbarSize = Math.round(i), this._arrowSize = Math.round(e), this._visibleSize = r, this._scrollSize = s, this._scrollPosition = o, this._computedAvailableSize = 0, this._computedIsNeeded = !1, this._computedSliderSize = 0, this._computedSliderRatio = 0, this._computedSliderPosition = 0, this._refreshComputedValues();
    }
    clone() {
        return new fJc(this._arrowSize, this._scrollbarSize, this._oppositeScrollbarSize, this._visibleSize, this._scrollSize, this._scrollPosition);
    }
    setVisibleSize(e) {
        const n = Math.round(e);
        return this._visibleSize !== n ? (this._visibleSize = n, this._refreshComputedValues(), !0) : !1;
    }
    setScrollSize(e) {
        const n = Math.round(e);
        return this._scrollSize !== n ? (this._scrollSize = n, this._refreshComputedValues(), !0) : !1;
    }
    setScrollPosition(e) {
        const n = Math.round(e);
        return this._scrollPosition !== n ? (this._scrollPosition = n, this._refreshComputedValues(), !0) : !1;
    }
    setScrollbarSize(e) {
        this._scrollbarSize = Math.round(e);
    }
    setOppositeScrollbarSize(e) {
        this._oppositeScrollbarSize = Math.round(e);
    }
    static _computeValues(e, n, i, r, s) {
        const o = Math.max(0, i - e), a = Math.max(0, o - 2 * n), l = r > 0 && r > i;
        if (!l) return {
            computedAvailableSize: Math.round(o),
            computedIsNeeded: l,
            computedSliderSize: Math.round(a),
            computedSliderRatio: 0,
            computedSliderPosition: 0
        };
        const c = Math.round(Math.max(fjd, Math.floor(i * a / r))), u = (a - c) / (r - i), d = s * u;
        return {
            computedAvailableSize: Math.round(o),
            computedIsNeeded: l,
            computedSliderSize: Math.round(c),
            computedSliderRatio: u,
            computedSliderPosition: Math.round(d)
        };
    }
    _refreshComputedValues() {
        const e = fJc._computeValues(this._oppositeScrollbarSize, this._arrowSize, this._visibleSize, this._scrollSize, this._scrollPosition);
        this._computedAvailableSize = e.computedAvailableSize, this._computedIsNeeded = e.computedIsNeeded, this._computedSliderSize = e.computedSliderSize, this._computedSliderRatio = e.computedSliderRatio, this._computedSliderPosition = e.computedSliderPosition;
    }
    getArrowSize() {
        return this._arrowSize;
    }
    getScrollPosition() {
        return this._scrollPosition;
    }
    getRectangleLargeSize() {
        return this._computedAvailableSize;
    }
    getRectangleSmallSize() {
        return this._scrollbarSize;
    }
    isNeeded() {
        return this._computedIsNeeded;
    }
    getSliderSize() {
        return this._computedSliderSize;
    }
    getSliderPosition() {
        return this._computedSliderPosition;
    }
    getDesiredScrollPositionFromOffset(e) {
        if (!this._computedIsNeeded) return 0;
        const n = e - this._arrowSize - this._computedSliderSize / 2;
        return Math.round(n / this._computedSliderRatio);
    }
    getDesiredScrollPositionFromOffsetPaged(e) {
        if (!this._computedIsNeeded) return 0;
        const n = e - this._arrowSize;
        let i = this._scrollPosition;
        return n < this._computedSliderPosition ? i -= this._visibleSize : i += this._visibleSize, i;
    }
    getDesiredScrollPositionFromDelta(e) {
        if (!this._computedIsNeeded) return 0;
        const n = this._computedSliderPosition + e;
        return Math.round(n / this._computedSliderRatio);
    }
};

}
