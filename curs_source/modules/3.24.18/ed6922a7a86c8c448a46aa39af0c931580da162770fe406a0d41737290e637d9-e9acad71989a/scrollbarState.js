import { x } from "./tslib.es6.js";
var n9c, D_i;
export { D_i, n9c };
var __wakaru_Ies_initialized = false;
export function Ies() {
if (__wakaru_Ies_initialized) return;
__wakaru_Ies_initialized = true;
"use strict";
x(), n9c = 20, D_i = class PIa {
    constructor(t, n, i, r, s, o){
        this._scrollbarSize = Math.round(n), this._oppositeScrollbarSize = Math.round(i), this._arrowSize = Math.round(t), this._visibleSize = r, this._scrollSize = s, this._scrollPosition = o, this._computedAvailableSize = 0, this._computedIsNeeded = !1, this._computedSliderSize = 0, this._computedSliderRatio = 0, this._computedSliderPosition = 0, this._refreshComputedValues();
    }
    clone() {
        return new PIa(this._arrowSize, this._scrollbarSize, this._oppositeScrollbarSize, this._visibleSize, this._scrollSize, this._scrollPosition);
    }
    setVisibleSize(t) {
        const n = Math.round(t);
        return this._visibleSize !== n ? (this._visibleSize = n, this._refreshComputedValues(), !0) : !1;
    }
    setScrollSize(t) {
        const n = Math.round(t);
        return this._scrollSize !== n ? (this._scrollSize = n, this._refreshComputedValues(), !0) : !1;
    }
    setScrollPosition(t) {
        const n = Math.round(t);
        return this._scrollPosition !== n ? (this._scrollPosition = n, this._refreshComputedValues(), !0) : !1;
    }
    setScrollbarSize(t) {
        this._scrollbarSize = Math.round(t);
    }
    setOppositeScrollbarSize(t) {
        this._oppositeScrollbarSize = Math.round(t);
    }
    static _computeValues(t, n, i, r, s) {
        const o = Math.max(0, i - t), a = Math.max(0, o - 2 * n), c = r > 0 && r > i;
        if (!c) return {
            computedAvailableSize: Math.round(o),
            computedIsNeeded: c,
            computedSliderSize: Math.round(a),
            computedSliderRatio: 0,
            computedSliderPosition: 0
        };
        const l = Math.round(Math.max(n9c, Math.floor(i * a / r))), u = (a - l) / (r - i), h = s * u;
        return {
            computedAvailableSize: Math.round(o),
            computedIsNeeded: c,
            computedSliderSize: Math.round(l),
            computedSliderRatio: u,
            computedSliderPosition: Math.round(h)
        };
    }
    _refreshComputedValues() {
        const t = PIa._computeValues(this._oppositeScrollbarSize, this._arrowSize, this._visibleSize, this._scrollSize, this._scrollPosition);
        this._computedAvailableSize = t.computedAvailableSize, this._computedIsNeeded = t.computedIsNeeded, this._computedSliderSize = t.computedSliderSize, this._computedSliderRatio = t.computedSliderRatio, this._computedSliderPosition = t.computedSliderPosition;
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
    getDesiredScrollPositionFromOffset(t) {
        if (!this._computedIsNeeded) return 0;
        const n = t - this._arrowSize - this._computedSliderSize / 2;
        return Math.round(n / this._computedSliderRatio);
    }
    getDesiredScrollPositionFromOffsetPaged(t) {
        if (!this._computedIsNeeded) return 0;
        const n = t - this._arrowSize;
        let i = this._scrollPosition;
        return n < this._computedSliderPosition ? i -= this._visibleSize : i += this._visibleSize, i;
    }
    getDesiredScrollPositionFromDelta(t) {
        if (!this._computedIsNeeded) return 0;
        const n = this._computedSliderPosition + t;
        return Math.round(n / this._computedSliderRatio);
    }
};

}
