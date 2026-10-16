import { E } from "./tslib.es6.js";
var Lch, Och, cit, Fch, Bch;
export { Bch, Fch, Lch, Och, cit };
var __wakaru_I$y_initialized = false;
export function I$y() {
if (__wakaru_I$y_initialized) return;
__wakaru_I$y_initialized = true;
"use strict";
E(), Lch = Object.defineProperty, Och = (t, e, n)=>e in t ? Lch(t, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : t[e] = n, cit = (t, e, n)=>Och(t, typeof e != "symbol" ? e + "" : e, n), Fch = 20, Bch = class {
    constructor(){
        cit(this, "_trackSize", 0), cit(this, "_viewportSize", 0), cit(this, "_scrollSize", 0), cit(this, "_scrollPosition", 0), cit(this, "_isScrollable", !1), cit(this, "_thumbSize", 0), cit(this, "_thumbPosition", 0), cit(this, "_thumbRatio", 0);
    }
    setDimensions(t, e, n, i) {
        const r = Math.round(t), s = Math.round(e), o = Math.round(n), a = Math.round(i);
        return this._trackSize === r && this._viewportSize === s && this._scrollSize === o && this._scrollPosition === a ? !1 : (this._trackSize = r, this._viewportSize = s, this._scrollSize = o, this._scrollPosition = a, this._recompute(), !0);
    }
    setScrollPosition(t) {
        const e = Math.round(t);
        return this._scrollPosition === e ? !1 : (this._scrollPosition = e, this._thumbPosition = this._computeThumbPosition(), !0);
    }
    _recompute() {
        if (this._isScrollable = this._scrollSize > 0 && this._viewportSize > 0 && this._scrollSize > this._viewportSize, !this._isScrollable || this._trackSize <= 0) {
            this._thumbSize = 0, this._thumbPosition = 0, this._thumbRatio = 0;
            return;
        }
        const t = Math.floor(this._trackSize * this._viewportSize / this._scrollSize);
        this._thumbSize = Math.min(this._trackSize, Math.max(Fch, t));
        const e = this._trackSize - this._thumbSize, n = this._scrollSize - this._viewportSize;
        this._thumbRatio = n > 0 ? e / n : 0, this._thumbPosition = this._computeThumbPosition();
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
    getScrollPositionFromThumbDelta(t, e) {
        return !this._isScrollable || this._thumbRatio === 0 ? 0 : Math.round(e + t / this._thumbRatio);
    }
    getScrollPositionFromTrackOffset(t) {
        if (!this._isScrollable || this._thumbRatio === 0) return 0;
        const e = Math.max(0, Math.min(this._trackSize - this._thumbSize, t - this._thumbSize / 2));
        return Math.round(e / this._thumbRatio);
    }
};

}
