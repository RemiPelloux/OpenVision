import { rtr, y$t } from "./create-resize-observer.ts";
import { EIe, itr } from "./horizontal-wheel-delta.ts";
import { i } from "./plugin-brand-icon.js";
import { Cki, ptr } from "./scrollbar-state.ts";
var zme, k$t;
export { k$t, zme };
var __wakaru_Ski_initialized = false;
export function Ski() {
if (__wakaru_Ski_initialized) return;
__wakaru_Ski_initialized = true;
"use strict";
rtr(), itr(), Cki(), zme = class san {
    constructor(e){
        this.thumbInsetStart = 0, this.horizontalWheelAxisLock = null, this.horizontalWheelResetTimer = null, this.resizeObserver = null, this.boundOnScroll = null, this.boundOnThumbDown = null, this.boundOnTrackDown = null, this.boundOnWheel = null, this.dragCleanup = null, this.pendingSyncThumbFrame = null, this.viewport = e.viewport, this.content = e.content, this.scrollbar = e.scrollbar, this.thumb = e.thumb, this.state = new ptr, this.direction = e.direction, this.mapVerticalWheelToHorizontal = e.mapVerticalWheelToHorizontal ?? !1;
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
            const a = this.state.getThumbPosition();
            this.thumb.style.transform = this.getThumbTransform(a);
        }
    }
    attachResizeObserver() {
        this.resizeObserver = y$t(()=>this.scheduleSyncThumb()), this.resizeObserver !== null && (this.resizeObserver.observe(this.viewport), this.content !== void 0 && this.resizeObserver.observe(this.content), this.resizeObserver.observe(this.scrollbar));
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
        const e = this.state.getThumbSize(), a = this.state.getThumbPosition();
        this.horizontal ? (this.thumb.style.width = `${e}px`, this.thumb.style.height = "", this.thumb.style.transform = this.getThumbTransform(a)) : (this.thumb.style.height = `${e}px`, this.thumb.style.width = "", this.thumb.style.transform = this.getThumbTransform(a)), this.scrollbar.dataset.scrollable = this.state.isScrollable() ? "true" : "false";
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
        const a = this.horizontal ? e.clientX : e.clientY, s = this.horizontal ? this.viewport.scrollLeft : this.viewport.scrollTop, l = e.pointerId;
        this.thumb.setPointerCapture(l), this.thumb.classList.add("ui-scroll-area__thumb--active");
        const u = i((m)=>{
            const b = (this.horizontal ? m.clientX : m.clientY) - a, g = this.state.getScrollPositionFromThumbDelta(b, s);
            this.horizontal ? this.viewport.scrollLeft = g : this.viewport.scrollTop = g;
        }, "onMove"), p = i(()=>{
            this.thumb.classList.remove("ui-scroll-area__thumb--active");
            try {
                this.thumb.releasePointerCapture(l);
            } catch  {}
            this.thumb.removeEventListener("pointermove", u), this.thumb.removeEventListener("pointerup", p), this.thumb.removeEventListener("pointercancel", p), this.dragCleanup = null;
        }, "onUp");
        this.thumb.addEventListener("pointermove", u), this.thumb.addEventListener("pointerup", p), this.thumb.addEventListener("pointercancel", p), this.dragCleanup = p;
    }
    handleTrackDown(e) {
        if (e.button !== 0 || e.target === this.thumb) return;
        const a = this.scrollbar.getBoundingClientRect();
        if (!this.horizontal) {
            this.viewport.scrollTop = this.state.getScrollPositionFromTrackOffset(e.clientY - a.top - this.thumbInsetStart);
            return;
        }
        const s = getComputedStyle(this.viewport).direction === "rtl", l = s ? a.right - e.clientX : e.clientX - a.left, u = this.state.getScrollPositionFromTrackOffset(l);
        this.viewport.scrollLeft = s ? -u : u;
    }
    attachWheelForwarding() {
        this.boundOnWheel = (e)=>{
            if (this.horizontal) {
                const a = this.viewport.scrollWidth - this.viewport.clientWidth;
                if (a <= 0) return;
                let s = null;
                if (this.mapVerticalWheelToHorizontal) s = EIe({
                    deltaX: e.deltaX,
                    deltaY: e.deltaY,
                    mapVerticalWheelToHorizontal: !0,
                    mappedBehavior: "prefer-horizontal"
                });
                else {
                    if (this.horizontalWheelAxisLock || (this.horizontalWheelAxisLock = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? "x" : "y"), this.horizontalWheelResetTimer && clearTimeout(this.horizontalWheelResetTimer), this.horizontalWheelResetTimer = setTimeout(()=>{
                        this.horizontalWheelAxisLock = null, this.horizontalWheelResetTimer = null;
                    }, san.WHEEL_GESTURE_RESET_MS), this.horizontalWheelAxisLock !== "x") return;
                    if (s = EIe({
                        deltaX: e.deltaX,
                        deltaY: e.deltaY,
                        mapVerticalWheelToHorizontal: !1,
                        axisBehavior: "raw"
                    }), s === null) {
                        e.preventDefault(), e.stopPropagation();
                        return;
                    }
                }
                if (s === null) return;
                const l = Math.max(0, Math.min(a, this.viewport.scrollLeft + s));
                this.viewport.scrollLeft = l, e.preventDefault(), e.stopPropagation();
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
        const e = getComputedStyle(this.scrollbar).getPropertyValue(san.VERTICAL_THUMB_OFFSET_CSS_VAR), a = Number.parseFloat(e);
        return Number.isFinite(a) ? Math.max(0, a) : 0;
    }
}, i(zme, "ScrollbarController"), zme.VERTICAL_THUMB_OFFSET_CSS_VAR = "--scrollbar-thumb-top-offset", zme.WHEEL_GESTURE_RESET_MS = 150, k$t = zme;

}
