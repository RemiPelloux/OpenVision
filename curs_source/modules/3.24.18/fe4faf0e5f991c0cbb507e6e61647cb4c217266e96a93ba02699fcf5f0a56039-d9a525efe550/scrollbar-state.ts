import { i } from "./plugin-brand-icon.js";
var dtr, _$t, ptr;
export { _$t, dtr, ptr };
var __wakaru_Cki_initialized = false;
export function Cki() {
if (__wakaru_Cki_initialized) return;
__wakaru_Cki_initialized = true;
"use strict";
dtr = 20, _$t = class {
    constructor(){
        this._trackSize = 0, this._viewportSize = 0, this._scrollSize = 0, this._scrollPosition = 0, this._isScrollable = !1, this._thumbSize = 0, this._thumbPosition = 0, this._thumbRatio = 0;
    }
    setDimensions(e, a, s, l) {
        const u = Math.round(e), p = Math.round(a), m = Math.round(s), b = Math.round(l);
        return this._trackSize === u && this._viewportSize === p && this._scrollSize === m && this._scrollPosition === b ? !1 : (this._trackSize = u, this._viewportSize = p, this._scrollSize = m, this._scrollPosition = b, this._recompute(), !0);
    }
    setScrollPosition(e) {
        const a = Math.round(e);
        return this._scrollPosition === a ? !1 : (this._scrollPosition = a, this._thumbPosition = this._computeThumbPosition(), !0);
    }
    _recompute() {
        if (this._isScrollable = this._scrollSize > 0 && this._viewportSize > 0 && this._scrollSize > this._viewportSize, !this._isScrollable || this._trackSize <= 0) {
            this._thumbSize = 0, this._thumbPosition = 0, this._thumbRatio = 0;
            return;
        }
        const e = Math.floor(this._trackSize * this._viewportSize / this._scrollSize);
        this._thumbSize = Math.min(this._trackSize, Math.max(dtr, e));
        const a = this._trackSize - this._thumbSize, s = this._scrollSize - this._viewportSize;
        this._thumbRatio = s > 0 ? a / s : 0, this._thumbPosition = this._computeThumbPosition();
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
    getScrollPositionFromThumbDelta(e, a) {
        return !this._isScrollable || this._thumbRatio === 0 ? 0 : Math.round(a + e / this._thumbRatio);
    }
    getScrollPositionFromTrackOffset(e) {
        if (!this._isScrollable || this._thumbRatio === 0) return 0;
        const a = Math.max(0, Math.min(this._trackSize - this._thumbSize, e - this._thumbSize / 2));
        return Math.round(a / this._thumbRatio);
    }
}, i(_$t, "ScrollbarState"), ptr = _$t;

}
