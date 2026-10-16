import { Se, bt, cn, ve, we } from "./HVr.js";
import { YZr, mgg } from "./qIc.js";
import { x } from "./tslib.es6.js";
var Q1, I2c, mwe, XZr, ZZr;
export { I2c, Q1, XZr, ZZr, mwe };
var __wakaru_e6_initialized = false;
export function e6() {
if (__wakaru_e6_initialized) return;
__wakaru_e6_initialized = true;
"use strict";
x(), bt(), Se(), Q1 = ((e)=>(e[e.Auto = 1] = "Auto", e[e.Hidden = 2] = "Hidden", e[e.Visible = 3] = "Visible", e))(Q1 || {}), I2c = class yIa {
    constructor(t, n, i, r, s, o, a){
        this._forceIntegerValues = t, this._scrollStateBrand = void 0, this._forceIntegerValues && (n = n | 0, i = i | 0, r = r | 0, s = s | 0, o = o | 0, a = a | 0), this.rawScrollLeft = r, this.rawScrollTop = a, n < 0 && (n = 0), r + n > i && (r = i - n), r < 0 && (r = 0), s < 0 && (s = 0), a + s > o && (a = o - s), a < 0 && (a = 0), this.width = n, this.scrollWidth = i, this.scrollLeft = r, this.height = s, this.scrollHeight = o, this.scrollTop = a;
    }
    equals(t) {
        return this.rawScrollLeft === t.rawScrollLeft && this.rawScrollTop === t.rawScrollTop && this.width === t.width && this.scrollWidth === t.scrollWidth && this.scrollLeft === t.scrollLeft && this.height === t.height && this.scrollHeight === t.scrollHeight && this.scrollTop === t.scrollTop;
    }
    withScrollDimensions(t, n) {
        return new yIa(this._forceIntegerValues, typeof t.width < "u" ? t.width : this.width, typeof t.scrollWidth < "u" ? t.scrollWidth : this.scrollWidth, n ? this.rawScrollLeft : this.scrollLeft, typeof t.height < "u" ? t.height : this.height, typeof t.scrollHeight < "u" ? t.scrollHeight : this.scrollHeight, n ? this.rawScrollTop : this.scrollTop);
    }
    withScrollPosition(t) {
        return new yIa(this._forceIntegerValues, this.width, this.scrollWidth, typeof t.scrollLeft < "u" ? t.scrollLeft : this.rawScrollLeft, this.height, this.scrollHeight, typeof t.scrollTop < "u" ? t.scrollTop : this.rawScrollTop);
    }
    createScrollEvent(t, n) {
        const i = this.width !== t.width, r = this.scrollWidth !== t.scrollWidth, s = this.scrollLeft !== t.scrollLeft, o = this.height !== t.height, a = this.scrollHeight !== t.scrollHeight, c = this.scrollTop !== t.scrollTop;
        return {
            inSmoothScrolling: n,
            oldWidth: t.width,
            oldScrollWidth: t.scrollWidth,
            oldScrollLeft: t.scrollLeft,
            width: this.width,
            scrollWidth: this.scrollWidth,
            scrollLeft: this.scrollLeft,
            oldHeight: t.height,
            oldScrollHeight: t.scrollHeight,
            oldScrollTop: t.scrollTop,
            height: this.height,
            scrollHeight: this.scrollHeight,
            scrollTop: this.scrollTop,
            widthChanged: i,
            scrollWidthChanged: r,
            scrollLeftChanged: s,
            heightChanged: o,
            scrollHeightChanged: a,
            scrollTopChanged: c
        };
    }
}, mwe = class extends we {
    constructor(e){
        super(), this._options = e, this._scrollableBrand = void 0, this._onScroll = this._register(new ve), this.onScroll = this._onScroll.event, this._smoothScrollDuration = this._options.smoothScrollDuration, this._scheduleAtNextAnimationFrame = this._options.scheduleAtNextAnimationFrame, this._state = new I2c(this._options.forceIntegerValues, 0, 0, 0, 0, 0, 0), this._smoothScrolling = null;
    }
    dispose() {
        this._smoothScrolling && (this._smoothScrolling.dispose(), this._smoothScrolling = null), super.dispose();
    }
    setSmoothScrollDuration(e) {
        this._smoothScrollDuration = e;
    }
    validateScrollPosition(e) {
        return this._state.withScrollPosition(e);
    }
    getScrollDimensions() {
        return this._state;
    }
    setScrollDimensions(e, t) {
        const n = this._state.withScrollDimensions(e, t);
        this._setState(n, !!this._smoothScrolling), this._smoothScrolling?.acceptScrollDimensions(this._state);
    }
    getFutureScrollPosition() {
        return this._smoothScrolling ? this._smoothScrolling.to : this._state;
    }
    getCurrentScrollPosition() {
        return this._state;
    }
    setScrollPositionNow(e) {
        const t = this._state.withScrollPosition(e);
        this._smoothScrolling && (this._smoothScrolling.dispose(), this._smoothScrolling = null), this._setState(t, !1);
    }
    setScrollPositionSmooth(e, t) {
        if (this._smoothScrollDuration === 0) return this.setScrollPositionNow(e);
        if (this._smoothScrolling) {
            e = {
                scrollLeft: typeof e.scrollLeft > "u" ? this._smoothScrolling.to.scrollLeft : e.scrollLeft,
                scrollTop: typeof e.scrollTop > "u" ? this._smoothScrolling.to.scrollTop : e.scrollTop
            };
            const n = this._state.withScrollPosition(e);
            if (this._smoothScrolling.to.scrollLeft === n.scrollLeft && this._smoothScrolling.to.scrollTop === n.scrollTop) return;
            let i;
            t ? i = new ZZr(this._smoothScrolling.from, n, this._smoothScrolling.startTime, this._smoothScrolling.duration) : i = this._smoothScrolling.combine(this._state, n, this._smoothScrollDuration), this._smoothScrolling.dispose(), this._smoothScrolling = i;
        } else {
            const n = this._state.withScrollPosition(e);
            this._smoothScrolling = ZZr.start(this._state, n, this._smoothScrollDuration);
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
        const e = this._smoothScrolling.tick(), t = this._state.withScrollPosition(e);
        if (this._setState(t, !0), !!this._smoothScrolling) {
            if (e.isDone) {
                this._smoothScrolling.dispose(), this._smoothScrolling = null;
                return;
            }
            this._smoothScrolling.animationFrameDisposable.value = this._scheduleAtNextAnimationFrame(()=>{
                this._smoothScrolling && (this._smoothScrolling.animationFrameDisposable.clear(), this._performSmoothScrolling());
            });
        }
    }
    _setState(e, t) {
        const n = this._state;
        n.equals(e) || (this._options.stickyScrollHorizontal && ((this._options.stickyScrollHorizontal === "right" || typeof this._options.stickyScrollHorizontal == "function" && this._options.stickyScrollHorizontal() === "right") && e.scrollLeft + e.width >= e.scrollWidth && (e = e.withScrollPosition({
            scrollLeft: 1 / 0
        })), (this._options.stickyScrollHorizontal === "left" || typeof this._options.stickyScrollHorizontal == "function" && this._options.stickyScrollHorizontal() === "left") && e.scrollLeft <= 0 && (e = e.withScrollPosition({
            scrollLeft: -1 / 0
        }))), this._options.stickyScrollVertical && ((this._options.stickyScrollVertical === "down" || typeof this._options.stickyScrollVertical == "function" && this._options.stickyScrollVertical() === "down") && e.scrollTop + e.height >= e.scrollHeight && (e = e.withScrollPosition({
            scrollTop: 1 / 0
        })), (this._options.stickyScrollVertical === "up" || typeof this._options.stickyScrollVertical == "function" && this._options.stickyScrollVertical() === "up") && e.scrollTop <= 0 && (e = e.withScrollPosition({
            scrollTop: -1 / 0
        }))), this._state = e, this._onScroll.fire(this._state.createScrollEvent(n, t)));
    }
    getScrollHeight() {
        return this._state.scrollHeight;
    }
}, XZr = class {
    constructor(e, t, n){
        this.scrollLeft = e, this.scrollTop = t, this.isDone = n;
    }
}, ZZr = class SIa extends we {
    constructor(t, n, i, r){
        super(), this.animationFrameDisposable = this._register(new cn), this.from = t, this.to = n, this.duration = r, this.startTime = i, this._initAnimations();
    }
    _initAnimations() {
        this.scrollLeft = this._initAnimation(this.from.scrollLeft, this.to.scrollLeft, this.to.width), this.scrollTop = this._initAnimation(this.from.scrollTop, this.to.scrollTop, this.to.height);
    }
    _initAnimation(t, n, i) {
        if (Math.abs(t - n) > 2.5 * i) {
            let s, o;
            return t < n ? (s = t + .75 * i, o = n - .75 * i) : (s = t - .75 * i, o = n + .75 * i), mgg(YZr(t, s), YZr(o, n), .33);
        }
        return YZr(t, n);
    }
    acceptScrollDimensions(t) {
        this.to = t.withScrollPosition(this.to), this._initAnimations();
    }
    tick() {
        return this._tick(Date.now());
    }
    _tick(t) {
        const n = (t - this.startTime) / this.duration;
        if (n < 1) {
            const i = this.scrollLeft(n), r = this.scrollTop(n);
            return new XZr(i, r, !1);
        }
        return new XZr(this.to.scrollLeft, this.to.scrollTop, !0);
    }
    combine(t, n, i) {
        return SIa.start(t, n, i);
    }
    static start(t, n, i) {
        i = i + 10;
        const r = Date.now() - 10;
        return new SIa(t, n, r, i);
    }
};

}
