import { Gt, Qe, Vn, st, tt } from "./Iwo.js";
import { E } from "./tslib.es6.js";
import { g2y, ojo } from "./ze.js";
var D5, i9d, rHe, ajo, ljo;
export { D5, ajo, i9d, ljo, rHe };
var __wakaru_coe_initialized = false;
export function coe() {
if (__wakaru_coe_initialized) return;
__wakaru_coe_initialized = true;
"use strict";
E(), Gt(), Qe(), D5 = ((t)=>(t[t.Auto = 1] = "Auto", t[t.Hidden = 2] = "Hidden", t[t.Visible = 3] = "Visible", t))(D5 || {}), i9d = class iJc {
    constructor(e, n, i, r, s, o, a){
        this._forceIntegerValues = e, this._scrollStateBrand = void 0, this._forceIntegerValues && (n = n | 0, i = i | 0, r = r | 0, s = s | 0, o = o | 0, a = a | 0), this.rawScrollLeft = r, this.rawScrollTop = a, n < 0 && (n = 0), r + n > i && (r = i - n), r < 0 && (r = 0), s < 0 && (s = 0), a + s > o && (a = o - s), a < 0 && (a = 0), this.width = n, this.scrollWidth = i, this.scrollLeft = r, this.height = s, this.scrollHeight = o, this.scrollTop = a;
    }
    equals(e) {
        return this.rawScrollLeft === e.rawScrollLeft && this.rawScrollTop === e.rawScrollTop && this.width === e.width && this.scrollWidth === e.scrollWidth && this.scrollLeft === e.scrollLeft && this.height === e.height && this.scrollHeight === e.scrollHeight && this.scrollTop === e.scrollTop;
    }
    withScrollDimensions(e, n) {
        return new iJc(this._forceIntegerValues, typeof e.width < "u" ? e.width : this.width, typeof e.scrollWidth < "u" ? e.scrollWidth : this.scrollWidth, n ? this.rawScrollLeft : this.scrollLeft, typeof e.height < "u" ? e.height : this.height, typeof e.scrollHeight < "u" ? e.scrollHeight : this.scrollHeight, n ? this.rawScrollTop : this.scrollTop);
    }
    withScrollPosition(e) {
        return new iJc(this._forceIntegerValues, this.width, this.scrollWidth, typeof e.scrollLeft < "u" ? e.scrollLeft : this.rawScrollLeft, this.height, this.scrollHeight, typeof e.scrollTop < "u" ? e.scrollTop : this.rawScrollTop);
    }
    createScrollEvent(e, n) {
        const i = this.width !== e.width, r = this.scrollWidth !== e.scrollWidth, s = this.scrollLeft !== e.scrollLeft, o = this.height !== e.height, a = this.scrollHeight !== e.scrollHeight, l = this.scrollTop !== e.scrollTop;
        return {
            inSmoothScrolling: n,
            oldWidth: e.width,
            oldScrollWidth: e.scrollWidth,
            oldScrollLeft: e.scrollLeft,
            width: this.width,
            scrollWidth: this.scrollWidth,
            scrollLeft: this.scrollLeft,
            oldHeight: e.height,
            oldScrollHeight: e.scrollHeight,
            oldScrollTop: e.scrollTop,
            height: this.height,
            scrollHeight: this.scrollHeight,
            scrollTop: this.scrollTop,
            widthChanged: i,
            scrollWidthChanged: r,
            scrollLeftChanged: s,
            heightChanged: o,
            scrollHeightChanged: a,
            scrollTopChanged: l
        };
    }
}, rHe = class extends st {
    constructor(t){
        super(), this._options = t, this._scrollableBrand = void 0, this._onScroll = this._register(new tt), this.onScroll = this._onScroll.event, this._smoothScrollDuration = this._options.smoothScrollDuration, this._scheduleAtNextAnimationFrame = this._options.scheduleAtNextAnimationFrame, this._state = new i9d(this._options.forceIntegerValues, 0, 0, 0, 0, 0, 0), this._smoothScrolling = null;
    }
    dispose() {
        this._smoothScrolling && (this._smoothScrolling.dispose(), this._smoothScrolling = null), super.dispose();
    }
    setSmoothScrollDuration(t) {
        this._smoothScrollDuration = t;
    }
    validateScrollPosition(t) {
        return this._state.withScrollPosition(t);
    }
    getScrollDimensions() {
        return this._state;
    }
    setScrollDimensions(t, e) {
        const n = this._state.withScrollDimensions(t, e);
        this._setState(n, !!this._smoothScrolling), this._smoothScrolling?.acceptScrollDimensions(this._state);
    }
    getFutureScrollPosition() {
        return this._smoothScrolling ? this._smoothScrolling.to : this._state;
    }
    getCurrentScrollPosition() {
        return this._state;
    }
    setScrollPositionNow(t) {
        const e = this._state.withScrollPosition(t);
        this._smoothScrolling && (this._smoothScrolling.dispose(), this._smoothScrolling = null), this._setState(e, !1);
    }
    setScrollPositionSmooth(t, e) {
        if (this._smoothScrollDuration === 0) return this.setScrollPositionNow(t);
        if (this._smoothScrolling) {
            t = {
                scrollLeft: typeof t.scrollLeft > "u" ? this._smoothScrolling.to.scrollLeft : t.scrollLeft,
                scrollTop: typeof t.scrollTop > "u" ? this._smoothScrolling.to.scrollTop : t.scrollTop
            };
            const n = this._state.withScrollPosition(t);
            if (this._smoothScrolling.to.scrollLeft === n.scrollLeft && this._smoothScrolling.to.scrollTop === n.scrollTop) return;
            let i;
            e ? i = new ljo(this._smoothScrolling.from, n, this._smoothScrolling.startTime, this._smoothScrolling.duration) : i = this._smoothScrolling.combine(this._state, n, this._smoothScrollDuration), this._smoothScrolling.dispose(), this._smoothScrolling = i;
        } else {
            const n = this._state.withScrollPosition(t);
            this._smoothScrolling = ljo.start(this._state, n, this._smoothScrollDuration);
        }
        this._smoothScrolling.animationFrameDisposable.value = this._scheduleAtNextAnimationFrame(()=>{
            this._smoothScrolling && (this._smoothScrolling.animationFrameDisposable.clear(), this._performSmoothScrolling());
        });
    }
    hasPendingScrollAnimation() {
        return !!this._smoothScrolling;
    }
    _performSmoothScrolling() {
        if (!this._smoothScrolling) return;
        const t = this._smoothScrolling.tick(), e = this._state.withScrollPosition(t);
        if (this._setState(e, !0), !!this._smoothScrolling) {
            if (t.isDone) {
                this._smoothScrolling.dispose(), this._smoothScrolling = null;
                return;
            }
            this._smoothScrolling.animationFrameDisposable.value = this._scheduleAtNextAnimationFrame(()=>{
                this._smoothScrolling && (this._smoothScrolling.animationFrameDisposable.clear(), this._performSmoothScrolling());
            });
        }
    }
    _setState(t, e) {
        const n = this._state;
        n.equals(t) || (this._options.stickyScrollHorizontal && ((this._options.stickyScrollHorizontal === "right" || typeof this._options.stickyScrollHorizontal == "function" && this._options.stickyScrollHorizontal() === "right") && t.scrollLeft + t.width >= t.scrollWidth && (t = t.withScrollPosition({
            scrollLeft: 1 / 0
        })), (this._options.stickyScrollHorizontal === "left" || typeof this._options.stickyScrollHorizontal == "function" && this._options.stickyScrollHorizontal() === "left") && t.scrollLeft <= 0 && (t = t.withScrollPosition({
            scrollLeft: -1 / 0
        }))), this._options.stickyScrollVertical && ((this._options.stickyScrollVertical === "down" || typeof this._options.stickyScrollVertical == "function" && this._options.stickyScrollVertical() === "down") && t.scrollTop + t.height >= t.scrollHeight && (t = t.withScrollPosition({
            scrollTop: 1 / 0
        })), (this._options.stickyScrollVertical === "up" || typeof this._options.stickyScrollVertical == "function" && this._options.stickyScrollVertical() === "up") && t.scrollTop <= 0 && (t = t.withScrollPosition({
            scrollTop: -1 / 0
        }))), this._state = t, this._onScroll.fire(this._state.createScrollEvent(n, e)));
    }
    getScrollHeight() {
        return this._state.scrollHeight;
    }
}, ajo = class {
    constructor(t, e, n){
        this.scrollLeft = t, this.scrollTop = e, this.isDone = n;
    }
}, ljo = class rJc extends st {
    constructor(e, n, i, r){
        super(), this.animationFrameDisposable = this._register(new Vn), this.from = e, this.to = n, this.duration = r, this.startTime = i, this._initAnimations();
    }
    _initAnimations() {
        this.scrollLeft = this._initAnimation(this.from.scrollLeft, this.to.scrollLeft, this.to.width), this.scrollTop = this._initAnimation(this.from.scrollTop, this.to.scrollTop, this.to.height);
    }
    _initAnimation(e, n, i) {
        if (Math.abs(e - n) > 2.5 * i) {
            let s, o;
            return e < n ? (s = e + .75 * i, o = n - .75 * i) : (s = e - .75 * i, o = n + .75 * i), g2y(ojo(e, s), ojo(o, n), .33);
        }
        return ojo(e, n);
    }
    acceptScrollDimensions(e) {
        this.to = e.withScrollPosition(this.to), this._initAnimations();
    }
    tick() {
        return this._tick(Date.now());
    }
    _tick(e) {
        const n = (e - this.startTime) / this.duration;
        if (n < 1) {
            const i = this.scrollLeft(n), r = this.scrollTop(n);
            return new ajo(i, r, !1);
        }
        return new ajo(this.to.scrollLeft, this.to.scrollTop, !0);
    }
    combine(e, n, i) {
        return rJc.start(e, n, i);
    }
    static start(e, n, i) {
        i = i + 10;
        const r = Date.now() - 10;
        return new rJc(e, n, r, i);
    }
};

}
