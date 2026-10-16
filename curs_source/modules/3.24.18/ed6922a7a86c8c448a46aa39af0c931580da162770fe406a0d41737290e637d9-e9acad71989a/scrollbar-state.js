import { x } from "./tslib.es6.js";
var dal, hal, i9e, pal, mal;
export { dal, hal, i9e, mal, pal };
var __wakaru_TLg_initialized = false;
export function TLg() {
if (__wakaru_TLg_initialized) return;
__wakaru_TLg_initialized = true;
"use strict";
x(), dal = Object.defineProperty, hal = (e, t, n)=>t in e ? dal(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : e[t] = n, i9e = (e, t, n)=>hal(e, typeof t != "symbol" ? t + "" : t, n), pal = 20, mal = class {
    constructor(){
        i9e(this, "_trackSize", 0), i9e(this, "_viewportSize", 0), i9e(this, "_scrollSize", 0), i9e(this, "_scrollPosition", 0), i9e(this, "_isScrollable", !1), i9e(this, "_thumbSize", 0), i9e(this, "_thumbPosition", 0), i9e(this, "_thumbRatio", 0);
    }
    setDimensions(e, t, n, i) {
        const r = Math.round(e), s = Math.round(t), o = Math.round(n), a = Math.round(i);
        return this._trackSize === r && this._viewportSize === s && this._scrollSize === o && this._scrollPosition === a ? !1 : (this._trackSize = r, this._viewportSize = s, this._scrollSize = o, this._scrollPosition = a, this._recompute(), !0);
    }
    setScrollPosition(e) {
        const t = Math.round(e);
        return this._scrollPosition === t ? !1 : (this._scrollPosition = t, this._thumbPosition = this._computeThumbPosition(), !0);
    }
    _recompute() {
        if (this._isScrollable = this._scrollSize > 0 && this._viewportSize > 0 && this._scrollSize > this._viewportSize, !this._isScrollable || this._trackSize <= 0) {
            this._thumbSize = 0, this._thumbPosition = 0, this._thumbRatio = 0;
            return;
        }
        const e = Math.floor(this._trackSize * this._viewportSize / this._scrollSize);
        this._thumbSize = Math.min(this._trackSize, Math.max(pal, e));
        const t = this._trackSize - this._thumbSize, n = this._scrollSize - this._viewportSize;
        this._thumbRatio = n > 0 ? t / n : 0, this._thumbPosition = this._computeThumbPosition();
    }
    _computeThumbPosition() {
        return !this._isScrollable || this._thumbRatio === 0 ? 0 : Math.round(this._scrollPosition * this._thumbRatio);
    }
    isScrollable() {
        return this._isScrollable;
    }
    getThumbSize() {
        return this._thumbSize;
    }
    getThumbPosition() {
        return this._thumbPosition;
    }
    getScrollPositionFromThumbDelta(e, t) {
        return !this._isScrollable || this._thumbRatio === 0 ? 0 : Math.round(t + e / this._thumbRatio);
    }
    getScrollPositionFromTrackOffset(e) {
        if (!this._isScrollable || this._thumbRatio === 0) return 0;
        const t = Math.max(0, Math.min(this._trackSize - this._thumbSize, e - this._thumbSize / 2));
        return Math.round(t / this._thumbRatio);
    }
};

}
