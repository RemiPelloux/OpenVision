import { Ops } from "./create-resize-observer.js";
import { tal } from "./horizontal-wheel-delta.js";
import { Fps, Nps } from "./qIc.js";
import { TLg, mal } from "./scrollbar-state.js";
import { x } from "./tslib.es6.js";
var gal, fal, TU, q1i, z1i;
export { TU, fal, gal, q1i, z1i };
var __wakaru_val_initialized = false;
export function val() {
if (__wakaru_val_initialized) return;
__wakaru_val_initialized = true;
"use strict";
x(), Ops(), tal(), TLg(), gal = Object.defineProperty, fal = (e, t, n)=>t in e ? gal(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : e[t] = n, TU = (e, t, n)=>fal(e, typeof t != "symbol" ? t + "" : t, n), q1i = class sAa {
    constructor(t){
        TU(this, "viewport"), TU(this, "content"), TU(this, "scrollbar"), TU(this, "thumb"), TU(this, "state"), TU(this, "direction"), TU(this, "mapVerticalWheelToHorizontal"), TU(this, "thumbInsetStart", 0), TU(this, "horizontalWheelAxisLock", null), TU(this, "horizontalWheelResetTimer", null), TU(this, "resizeObserver", null), TU(this, "boundOnScroll", null), TU(this, "boundOnThumbDown", null), TU(this, "boundOnTrackDown", null), TU(this, "boundOnWheel", null), TU(this, "dragCleanup", null), TU(this, "pendingSyncThumbFrame", null), this.viewport = t.viewport, this.content = t.content, this.scrollbar = t.scrollbar, this.thumb = t.thumb, this.state = new mal, this.direction = t.direction, this.mapVerticalWheelToHorizontal = t.mapVerticalWheelToHorizontal ?? !1;
    }
    get horizontal() {
        return this.direction === "horizontal";
    }
    attach() {
        this.attachScrollListener(), this.attachResizeObserver(), this.attachPointerEvents(), this.attachWheelForwarding(), this.scheduleSyncThumb();
    }
    detach() {
        this.detachScrollListener(), this.detachResizeObserver(), this.detachPointerEvents(), this.detachWheelForwarding(), this.pendingSyncThumbFrame !== null && (cancelAnimationFrame(this.pendingSyncThumbFrame), this.pendingSyncThumbFrame = null), this.horizontalWheelResetTimer && (clearTimeout(this.horizontalWheelResetTimer), this.horizontalWheelResetTimer = null), this.horizontalWheelAxisLock = null;
    }
    refresh() {
        this.scheduleSyncThumb();
    }
    attachScrollListener() {
        this.boundOnScroll = this.handleScroll.bind(this), this.viewport.addEventListener("scroll", this.boundOnScroll, {
            passive: !0
        });
    }
    detachScrollListener() {
        this.boundOnScroll && (this.viewport.removeEventListener("scroll", this.boundOnScroll), this.boundOnScroll = null);
    }
    handleScroll() {
        const t = this.horizontal ? this.viewport.scrollLeft : this.viewport.scrollTop;
        if (this.state.setScrollPosition(t)) {
            const n = this.state.getThumbPosition();
            this.thumb.style.transform = this.getThumbTransform(n);
        }
    }
    attachResizeObserver() {
        this.resizeObserver = Nps(()=>this.scheduleSyncThumb()), this.resizeObserver !== null && (this.resizeObserver.observe(this.viewport), this.content !== void 0 && this.resizeObserver.observe(this.content), this.resizeObserver.observe(this.scrollbar));
    }
    detachResizeObserver() {
        this.resizeObserver?.disconnect(), this.resizeObserver = null;
    }
    scheduleSyncThumb() {
        this.pendingSyncThumbFrame === null && (this.pendingSyncThumbFrame = requestAnimationFrame(()=>{
            this.pendingSyncThumbFrame = null, this.syncThumb();
        }));
    }
    syncThumb() {
        this.thumbInsetStart = this.getThumbInsetStart();
        const t = this.readDimensions();
        this.state.setDimensions(t.trackSize, t.viewportSize, t.scrollSize, t.scrollPos) && this.applyThumbStyle();
    }
    readDimensions() {
        const t = Math.max(0, this.scrollbar.clientHeight - this.thumbInsetStart);
        return {
            trackSize: this.horizontal ? this.scrollbar.clientWidth : t,
            viewportSize: this.horizontal ? this.viewport.clientWidth : this.viewport.clientHeight,
            scrollSize: this.horizontal ? this.viewport.scrollWidth : this.viewport.scrollHeight,
            scrollPos: this.horizontal ? this.viewport.scrollLeft : this.viewport.scrollTop
        };
    }
    applyThumbStyle() {
        const t = this.state.getThumbSize(), n = this.state.getThumbPosition();
        this.horizontal ? (this.thumb.style.width = `${t}px`, this.thumb.style.height = "", this.thumb.style.transform = this.getThumbTransform(n)) : (this.thumb.style.height = `${t}px`, this.thumb.style.width = "", this.thumb.style.transform = this.getThumbTransform(n)), this.scrollbar.dataset.scrollable = this.state.isScrollable() ? "true" : "false";
    }
    attachPointerEvents() {
        this.boundOnThumbDown = this.handleThumbDown.bind(this), this.boundOnTrackDown = this.handleTrackDown.bind(this), this.thumb.addEventListener("pointerdown", this.boundOnThumbDown), this.scrollbar.addEventListener("pointerdown", this.boundOnTrackDown);
    }
    detachPointerEvents() {
        this.boundOnThumbDown && (this.thumb.removeEventListener("pointerdown", this.boundOnThumbDown), this.boundOnThumbDown = null), this.boundOnTrackDown && (this.scrollbar.removeEventListener("pointerdown", this.boundOnTrackDown), this.boundOnTrackDown = null), this.dragCleanup?.(), this.dragCleanup = null;
    }
    handleThumbDown(t) {
        if (t.button !== 0) return;
        t.preventDefault();
        const n = this.horizontal ? t.clientX : t.clientY, i = this.horizontal ? this.viewport.scrollLeft : this.viewport.scrollTop, r = t.pointerId;
        this.thumb.setPointerCapture(r), this.thumb.classList.add("ui-scroll-area__thumb--active");
        const s = (a)=>{
            const c = (this.horizontal ? a.clientX : a.clientY) - n, l = this.state.getScrollPositionFromThumbDelta(c, i);
            this.horizontal ? this.viewport.scrollLeft = l : this.viewport.scrollTop = l;
        }, o = ()=>{
            this.thumb.classList.remove("ui-scroll-area__thumb--active");
            try {
                this.thumb.releasePointerCapture(r);
            } catch  {}
            this.thumb.removeEventListener("pointermove", s), this.thumb.removeEventListener("pointerup", o), this.thumb.removeEventListener("pointercancel", o), this.dragCleanup = null;
        };
        this.thumb.addEventListener("pointermove", s), this.thumb.addEventListener("pointerup", o), this.thumb.addEventListener("pointercancel", o), this.dragCleanup = o;
    }
    handleTrackDown(t) {
        if (t.button !== 0 || t.target === this.thumb) return;
        const n = this.scrollbar.getBoundingClientRect();
        if (!this.horizontal) {
            this.viewport.scrollTop = this.state.getScrollPositionFromTrackOffset(t.clientY - n.top - this.thumbInsetStart);
            return;
        }
        const i = getComputedStyle(this.viewport).direction === "rtl", r = i ? n.right - t.clientX : t.clientX - n.left, s = this.state.getScrollPositionFromTrackOffset(r);
        this.viewport.scrollLeft = i ? -s : s;
    }
    attachWheelForwarding() {
        this.boundOnWheel = (t)=>{
            if (this.horizontal) {
                const n = this.viewport.scrollWidth - this.viewport.clientWidth;
                if (n <= 0) return;
                let i = null;
                if (this.mapVerticalWheelToHorizontal) i = Fps({
                    deltaX: t.deltaX,
                    deltaY: t.deltaY,
                    mapVerticalWheelToHorizontal: !0,
                    mappedBehavior: "prefer-horizontal"
                });
                else {
                    if (this.horizontalWheelAxisLock || (this.horizontalWheelAxisLock = Math.abs(t.deltaX) > Math.abs(t.deltaY) ? "x" : "y"), this.horizontalWheelResetTimer && clearTimeout(this.horizontalWheelResetTimer), this.horizontalWheelResetTimer = setTimeout(()=>{
                        this.horizontalWheelAxisLock = null, this.horizontalWheelResetTimer = null;
                    }, sAa.WHEEL_GESTURE_RESET_MS), this.horizontalWheelAxisLock !== "x") return;
                    if (i = Fps({
                        deltaX: t.deltaX,
                        deltaY: t.deltaY,
                        mapVerticalWheelToHorizontal: !1,
                        axisBehavior: "raw"
                    }), i === null) {
                        t.preventDefault(), t.stopPropagation();
                        return;
                    }
                }
                if (i === null) return;
                const r = Math.max(0, Math.min(n, this.viewport.scrollLeft + i));
                this.viewport.scrollLeft = r, t.preventDefault(), t.stopPropagation();
            } else this.viewport.scrollTop += t.deltaY;
        }, this.scrollbar.addEventListener("wheel", this.boundOnWheel, {
            passive: !1
        });
    }
    detachWheelForwarding() {
        this.boundOnWheel && (this.scrollbar.removeEventListener("wheel", this.boundOnWheel), this.boundOnWheel = null);
    }
    getThumbTransform(t) {
        return this.horizontal ? `translateX(${t}px)` : `translateY(${t + this.thumbInsetStart}px)`;
    }
    getThumbInsetStart() {
        if (this.horizontal) return 0;
        const t = getComputedStyle(this.scrollbar).getPropertyValue(sAa.VERTICAL_THUMB_OFFSET_CSS_VAR), n = Number.parseFloat(t);
        return Number.isFinite(n) ? Math.max(0, n) : 0;
    }
}, TU(q1i, "VERTICAL_THUMB_OFFSET_CSS_VAR", "--scrollbar-thumb-top-offset"), TU(q1i, "WHEEL_GESTURE_RESET_MS", 150), z1i = q1i;

}
