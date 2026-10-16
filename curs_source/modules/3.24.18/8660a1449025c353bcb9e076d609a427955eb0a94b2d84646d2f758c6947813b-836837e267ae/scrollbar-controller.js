import { Wea, qea } from "./LYd.js";
import { Gea } from "./create-resize-observer.js";
import { Tch } from "./horizontal-wheel-delta.js";
import { Bch, I$y } from "./scrollbar-state.js";
import { E } from "./tslib.es6.js";
var Uch, jch, xz, K2r, Y2r;
export { K2r, Uch, Y2r, jch, xz };
var __wakaru_$ch_initialized = false;
export function $ch() {
if (__wakaru_$ch_initialized) return;
__wakaru_$ch_initialized = true;
"use strict";
E(), Gea(), Tch(), I$y(), Uch = Object.defineProperty, jch = (t, e, n)=>e in t ? Uch(t, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : t[e] = n, xz = (t, e, n)=>jch(t, typeof e != "symbol" ? e + "" : e, n), K2r = class WJc {
    constructor(e){
        xz(this, "viewport"), xz(this, "content"), xz(this, "scrollbar"), xz(this, "thumb"), xz(this, "state"), xz(this, "direction"), xz(this, "mapVerticalWheelToHorizontal"), xz(this, "thumbInsetStart", 0), xz(this, "horizontalWheelAxisLock", null), xz(this, "horizontalWheelResetTimer", null), xz(this, "resizeObserver", null), xz(this, "boundOnScroll", null), xz(this, "boundOnThumbDown", null), xz(this, "boundOnTrackDown", null), xz(this, "boundOnWheel", null), xz(this, "dragCleanup", null), xz(this, "pendingSyncThumbFrame", null), this.viewport = e.viewport, this.content = e.content, this.scrollbar = e.scrollbar, this.thumb = e.thumb, this.state = new Bch, this.direction = e.direction, this.mapVerticalWheelToHorizontal = e.mapVerticalWheelToHorizontal ?? !1;
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
        const e = this.horizontal ? this.viewport.scrollLeft : this.viewport.scrollTop;
        if (this.state.setScrollPosition(e)) {
            const n = this.state.getThumbPosition();
            this.thumb.style.transform = this.getThumbTransform(n);
        }
    }
    attachResizeObserver() {
        this.resizeObserver = Wea(()=>this.scheduleSyncThumb()), this.resizeObserver !== null && (this.resizeObserver.observe(this.viewport), this.content !== void 0 && this.resizeObserver.observe(this.content), this.resizeObserver.observe(this.scrollbar));
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
        const e = this.readDimensions();
        this.state.setDimensions(e.trackSize, e.viewportSize, e.scrollSize, e.scrollPos) && this.applyThumbStyle();
    }
    readDimensions() {
        const e = Math.max(0, this.scrollbar.clientHeight - this.thumbInsetStart);
        return {
            trackSize: this.horizontal ? this.scrollbar.clientWidth : e,
            viewportSize: this.horizontal ? this.viewport.clientWidth : this.viewport.clientHeight,
            scrollSize: this.horizontal ? this.viewport.scrollWidth : this.viewport.scrollHeight,
            scrollPos: this.horizontal ? this.viewport.scrollLeft : this.viewport.scrollTop
        };
    }
    applyThumbStyle() {
        const e = this.state.getThumbSize(), n = this.state.getThumbPosition();
        this.horizontal ? (this.thumb.style.width = `${e}px`, this.thumb.style.height = "", this.thumb.style.transform = this.getThumbTransform(n)) : (this.thumb.style.height = `${e}px`, this.thumb.style.width = "", this.thumb.style.transform = this.getThumbTransform(n)), this.scrollbar.dataset.scrollable = this.state.isScrollable() ? "true" : "false";
    }
    attachPointerEvents() {
        this.boundOnThumbDown = this.handleThumbDown.bind(this), this.boundOnTrackDown = this.handleTrackDown.bind(this), this.thumb.addEventListener("pointerdown", this.boundOnThumbDown), this.scrollbar.addEventListener("pointerdown", this.boundOnTrackDown);
    }
    detachPointerEvents() {
        this.boundOnThumbDown && (this.thumb.removeEventListener("pointerdown", this.boundOnThumbDown), this.boundOnThumbDown = null), this.boundOnTrackDown && (this.scrollbar.removeEventListener("pointerdown", this.boundOnTrackDown), this.boundOnTrackDown = null), this.dragCleanup?.(), this.dragCleanup = null;
    }
    handleThumbDown(e) {
        if (e.button !== 0) return;
        e.preventDefault();
        const n = this.horizontal ? e.clientX : e.clientY, i = this.horizontal ? this.viewport.scrollLeft : this.viewport.scrollTop, r = e.pointerId;
        this.thumb.setPointerCapture(r), this.thumb.classList.add("ui-scroll-area__thumb--active");
        const s = (a)=>{
            const l = (this.horizontal ? a.clientX : a.clientY) - n, c = this.state.getScrollPositionFromThumbDelta(l, i);
            this.horizontal ? this.viewport.scrollLeft = c : this.viewport.scrollTop = c;
        }, o = ()=>{
            this.thumb.classList.remove("ui-scroll-area__thumb--active");
            try {
                this.thumb.releasePointerCapture(r);
            } catch  {}
            this.thumb.removeEventListener("pointermove", s), this.thumb.removeEventListener("pointerup", o), this.thumb.removeEventListener("pointercancel", o), this.dragCleanup = null;
        };
        this.thumb.addEventListener("pointermove", s), this.thumb.addEventListener("pointerup", o), this.thumb.addEventListener("pointercancel", o), this.dragCleanup = o;
    }
    handleTrackDown(e) {
        if (e.button !== 0 || e.target === this.thumb) return;
        const n = this.scrollbar.getBoundingClientRect();
        if (!this.horizontal) {
            this.viewport.scrollTop = this.state.getScrollPositionFromTrackOffset(e.clientY - n.top - this.thumbInsetStart);
            return;
        }
        const i = getComputedStyle(this.viewport).direction === "rtl", r = i ? n.right - e.clientX : e.clientX - n.left, s = this.state.getScrollPositionFromTrackOffset(r);
        this.viewport.scrollLeft = i ? -s : s;
    }
    attachWheelForwarding() {
        this.boundOnWheel = (e)=>{
            if (this.horizontal) {
                const n = this.viewport.scrollWidth - this.viewport.clientWidth;
                if (n <= 0) return;
                let i = null;
                if (this.mapVerticalWheelToHorizontal) i = qea({
                    deltaX: e.deltaX,
                    deltaY: e.deltaY,
                    mapVerticalWheelToHorizontal: !0,
                    mappedBehavior: "prefer-horizontal"
                });
                else {
                    if (this.horizontalWheelAxisLock || (this.horizontalWheelAxisLock = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? "x" : "y"), this.horizontalWheelResetTimer && clearTimeout(this.horizontalWheelResetTimer), this.horizontalWheelResetTimer = setTimeout(()=>{
                        this.horizontalWheelAxisLock = null, this.horizontalWheelResetTimer = null;
                    }, WJc.WHEEL_GESTURE_RESET_MS), this.horizontalWheelAxisLock !== "x") return;
                    if (i = qea({
                        deltaX: e.deltaX,
                        deltaY: e.deltaY,
                        mapVerticalWheelToHorizontal: !1,
                        axisBehavior: "raw"
                    }), i === null) {
                        e.preventDefault(), e.stopPropagation();
                        return;
                    }
                }
                if (i === null) return;
                const r = Math.max(0, Math.min(n, this.viewport.scrollLeft + i));
                this.viewport.scrollLeft = r, e.preventDefault(), e.stopPropagation();
            } else this.viewport.scrollTop += e.deltaY;
        }, this.scrollbar.addEventListener("wheel", this.boundOnWheel, {
            passive: !1
        });
    }
    detachWheelForwarding() {
        this.boundOnWheel && (this.scrollbar.removeEventListener("wheel", this.boundOnWheel), this.boundOnWheel = null);
    }
    getThumbTransform(e) {
        return this.horizontal ? `translateX(${e}px)` : `translateY(${e + this.thumbInsetStart}px)`;
    }
    getThumbInsetStart() {
        if (this.horizontal) return 0;
        const e = getComputedStyle(this.scrollbar).getPropertyValue(WJc.VERTICAL_THUMB_OFFSET_CSS_VAR), n = Number.parseFloat(e);
        return Number.isFinite(n) ? Math.max(0, n) : 0;
    }
}, xz(K2r, "VERTICAL_THUMB_OFFSET_CSS_VAR", "--scrollbar-thumb-top-offset"), xz(K2r, "WHEEL_GESTURE_RESET_MS", 150), Y2r = K2r;

}
