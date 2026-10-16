import { Q2v, SM0, r5n } from "./XRv.js";
import { E } from "./tslib.es6.js";
import { J2v, ePv, yM0 } from "./utils_37.js";
var Ntc, tPv, Ltc, Otc, Ftc, Btc, nPv, iPv, rPv, sPv, Utc;
export { Btc, Ftc, Ltc, Ntc, Otc, Utc, iPv, nPv, rPv, sPv, tPv };
var __wakaru_oPv_initialized = false;
export function oPv() {
if (__wakaru_oPv_initialized) return;
__wakaru_oPv_initialized = true;
E(), yM0(), Ntc = (t)=>{
    const { offsetWidth: e, offsetHeight: n } = t;
    return {
        width: e,
        height: n
    };
}, tPv = (t)=>t, Ltc = (t)=>{
    const e = Math.max(t.startIndex - t.overscan, 0), n = Math.min(t.endIndex + t.overscan, t.count - 1), i = [];
    for(let r = e; r <= n; r++)i.push(r);
    return i;
}, Otc = (t, e)=>{
    const n = t.scrollElement;
    if (!n) return;
    const i = t.targetWindow;
    if (!i) return;
    const r = (o)=>{
        const { width: a, height: l } = o;
        e({
            width: Math.round(a),
            height: Math.round(l)
        });
    };
    if (r(Ntc(n)), !i.ResizeObserver) return ()=>{};
    const s = new i.ResizeObserver((o)=>{
        const a = ()=>{
            const l = o[0];
            if (l?.borderBoxSize) {
                const c = l.borderBoxSize[0];
                if (c) {
                    r({
                        width: c.inlineSize,
                        height: c.blockSize
                    });
                    return;
                }
            }
            r(Ntc(n));
        };
        t.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(a) : a();
    });
    return s.observe(n, {
        box: "border-box"
    }), ()=>{
        s.unobserve(n);
    };
}, Ftc = {
    passive: !0
}, Btc = typeof window > "u" ? !0 : "onscrollend" in window, nPv = (t, e)=>{
    const n = t.scrollElement;
    if (!n) return;
    const i = t.targetWindow;
    if (!i) return;
    let r = 0;
    const s = t.options.useScrollendEvent && Btc ? ()=>{} : ePv(i, ()=>{
        e(r, !1);
    }, t.options.isScrollingResetDelay), o = (u)=>()=>{
            const { horizontal: d, isRtl: h } = t.options;
            r = d ? n.scrollLeft * (h && -1 || 1) : n.scrollTop, s(), e(r, u);
        }, a = o(!0), l = o(!1);
    n.addEventListener("scroll", a, Ftc);
    const c = t.options.useScrollendEvent && Btc;
    return c && n.addEventListener("scrollend", l, Ftc), ()=>{
        n.removeEventListener("scroll", a), c && n.removeEventListener("scrollend", l);
    };
}, iPv = (t, e, n)=>{
    if (e?.borderBoxSize) {
        const i = e.borderBoxSize[0];
        if (i) return Math.round(i[n.options.horizontal ? "inlineSize" : "blockSize"]);
    }
    return t[n.options.horizontal ? "offsetWidth" : "offsetHeight"];
}, rPv = (t, { adjustments: e = 0, behavior: n }, i)=>{
    var r, s;
    const o = t + e;
    (s = (r = i.scrollElement) == null ? void 0 : r.scrollTo) == null || s.call(r, {
        [i.options.horizontal ? "left" : "top"]: o,
        behavior: n
    });
}, sPv = class {
    constructor(t){
        this.unsubs = [], this.scrollElement = null, this.targetWindow = null, this.isScrolling = !1, this.scrollState = null, this.measurementsCache = [], this.itemSizeCache = new Map, this.laneAssignments = new Map, this.pendingMeasuredCacheIndexes = [], this.prevLanes = void 0, this.lanesChangedFlag = !1, this.lanesSettling = !1, this.scrollRect = null, this.scrollOffset = null, this.scrollDirection = null, this.scrollAdjustments = 0, this.elementsCache = new Map, this.now = ()=>{
            var e, n, i;
            return ((i = (n = (e = this.targetWindow) == null ? void 0 : e.performance) == null ? void 0 : n.now) == null ? void 0 : i.call(n)) ?? Date.now();
        }, this.observer = (()=>{
            let e = null;
            const n = ()=>e || (!this.targetWindow || !this.targetWindow.ResizeObserver ? null : e = new this.targetWindow.ResizeObserver((i)=>{
                    i.forEach((r)=>{
                        const s = ()=>{
                            const o = r.target, a = this.indexFromElement(o);
                            if (!o.isConnected) {
                                this.observer.unobserve(o);
                                return;
                            }
                            this.shouldMeasureDuringScroll(a) && this.resizeItem(a, this.options.measureElement(o, r, this));
                        };
                        this.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(s) : s();
                    });
                }));
            return {
                disconnect: ()=>{
                    var i;
                    (i = n()) == null || i.disconnect(), e = null;
                },
                observe: (i)=>{
                    var r;
                    return (r = n()) == null ? void 0 : r.observe(i, {
                        box: "border-box"
                    });
                },
                unobserve: (i)=>{
                    var r;
                    return (r = n()) == null ? void 0 : r.unobserve(i);
                }
            };
        })(), this.range = null, this.setOptions = (e)=>{
            Object.entries(e).forEach(([n, i])=>{
                typeof i > "u" && delete e[n];
            }), this.options = {
                debug: !1,
                initialOffset: 0,
                overscan: 1,
                paddingStart: 0,
                paddingEnd: 0,
                scrollPaddingStart: 0,
                scrollPaddingEnd: 0,
                horizontal: !1,
                getItemKey: tPv,
                rangeExtractor: Ltc,
                onChange: ()=>{},
                measureElement: iPv,
                initialRect: {
                    width: 0,
                    height: 0
                },
                scrollMargin: 0,
                gap: 0,
                indexAttribute: "data-index",
                initialMeasurementsCache: [],
                lanes: 1,
                isScrollingResetDelay: 150,
                enabled: !0,
                isRtl: !1,
                useScrollendEvent: !1,
                useAnimationFrameWithResizeObserver: !1,
                ...e
            };
        }, this.notify = (e)=>{
            var n, i;
            (i = (n = this.options).onChange) == null || i.call(n, this, e);
        }, this.maybeNotify = r5n(()=>(this.calculateRange(), [
                this.isScrolling,
                this.range ? this.range.startIndex : null,
                this.range ? this.range.endIndex : null
            ]), (e)=>{
            this.notify(e);
        }, {
            key: !1,
            debug: ()=>this.options.debug,
            initialDeps: [
                this.isScrolling,
                this.range ? this.range.startIndex : null,
                this.range ? this.range.endIndex : null
            ]
        }), this.cleanup = ()=>{
            this.unsubs.filter(Boolean).forEach((e)=>e()), this.unsubs = [], this.observer.disconnect(), this.rafId != null && this.targetWindow && (this.targetWindow.cancelAnimationFrame(this.rafId), this.rafId = null), this.scrollState = null, this.scrollElement = null, this.targetWindow = null;
        }, this._didMount = ()=>()=>{
                this.cleanup();
            }, this._willUpdate = ()=>{
            var e;
            const n = this.options.enabled ? this.options.getScrollElement() : null;
            if (this.scrollElement !== n) {
                if (this.cleanup(), !n) {
                    this.maybeNotify();
                    return;
                }
                this.scrollElement = n, this.scrollElement && "ownerDocument" in this.scrollElement ? this.targetWindow = this.scrollElement.ownerDocument.defaultView : this.targetWindow = ((e = this.scrollElement) == null ? void 0 : e.window) ?? null, this.elementsCache.forEach((i)=>{
                    this.observer.observe(i);
                }), this.unsubs.push(this.options.observeElementRect(this, (i)=>{
                    this.scrollRect = i, this.maybeNotify();
                })), this.unsubs.push(this.options.observeElementOffset(this, (i, r)=>{
                    this.scrollAdjustments = 0, this.scrollDirection = r ? this.getScrollOffset() < i ? "forward" : "backward" : null, this.scrollOffset = i, this.isScrolling = r, this.scrollState && this.scheduleScrollReconcile(), this.maybeNotify();
                })), this._scrollToOffset(this.getScrollOffset(), {
                    adjustments: void 0,
                    behavior: void 0
                });
            }
        }, this.rafId = null, this.getSize = ()=>this.options.enabled ? (this.scrollRect = this.scrollRect ?? this.options.initialRect, this.scrollRect[this.options.horizontal ? "width" : "height"]) : (this.scrollRect = null, 0), this.getScrollOffset = ()=>this.options.enabled ? (this.scrollOffset = this.scrollOffset ?? (typeof this.options.initialOffset == "function" ? this.options.initialOffset() : this.options.initialOffset), this.scrollOffset) : (this.scrollOffset = null, 0), this.getFurthestMeasurement = (e, n)=>{
            const i = new Map, r = new Map;
            for(let s = n - 1; s >= 0; s--){
                const o = e[s];
                if (i.has(o.lane)) continue;
                const a = r.get(o.lane);
                if (a == null || o.end > a.end ? r.set(o.lane, o) : o.end < a.end && i.set(o.lane, !0), i.size === this.options.lanes) break;
            }
            return r.size === this.options.lanes ? Array.from(r.values()).sort((s, o)=>s.end === o.end ? s.index - o.index : s.end - o.end)[0] : void 0;
        }, this.getMeasurementOptions = r5n(()=>[
                this.options.count,
                this.options.paddingStart,
                this.options.scrollMargin,
                this.options.getItemKey,
                this.options.enabled,
                this.options.lanes
            ], (e, n, i, r, s, o)=>(this.prevLanes !== void 0 && this.prevLanes !== o && (this.lanesChangedFlag = !0), this.prevLanes = o, this.pendingMeasuredCacheIndexes = [], {
                count: e,
                paddingStart: n,
                scrollMargin: i,
                getItemKey: r,
                enabled: s,
                lanes: o
            }), {
            key: !1
        }), this.getMeasurements = r5n(()=>[
                this.getMeasurementOptions(),
                this.itemSizeCache
            ], ({ count: e, paddingStart: n, scrollMargin: i, getItemKey: r, enabled: s, lanes: o }, a)=>{
            if (!s) return this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), [];
            if (this.laneAssignments.size > e) for (const d of this.laneAssignments.keys())d >= e && this.laneAssignments.delete(d);
            this.lanesChangedFlag && (this.lanesChangedFlag = !1, this.lanesSettling = !0, this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), this.pendingMeasuredCacheIndexes = []), this.measurementsCache.length === 0 && !this.lanesSettling && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((d)=>{
                this.itemSizeCache.set(d.key, d.size);
            }));
            const l = this.lanesSettling ? 0 : this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
            this.pendingMeasuredCacheIndexes = [], this.lanesSettling && this.measurementsCache.length === e && (this.lanesSettling = !1);
            const c = this.measurementsCache.slice(0, l), u = new Array(o).fill(void 0);
            for(let d = 0; d < l; d++){
                const h = c[d];
                h && (u[h.lane] = d);
            }
            for(let d = l; d < e; d++){
                const h = r(d), p = this.laneAssignments.get(d);
                let g, f;
                if (p !== void 0 && this.options.lanes > 1) {
                    g = p;
                    const S = u[g], k = S !== void 0 ? c[S] : void 0;
                    f = k ? k.end + this.options.gap : n + i;
                } else {
                    const S = this.options.lanes === 1 ? c[d - 1] : this.getFurthestMeasurement(c, d);
                    f = S ? S.end + this.options.gap : n + i, g = S ? S.lane : d % this.options.lanes, this.options.lanes > 1 && this.laneAssignments.set(d, g);
                }
                const _ = a.get(h), b = typeof _ == "number" ? _ : this.options.estimateSize(d), y = f + b;
                c[d] = {
                    index: d,
                    start: f,
                    size: b,
                    end: y,
                    key: h,
                    lane: g
                }, u[g] = d;
            }
            return this.measurementsCache = c, c;
        }, {
            key: !1,
            debug: ()=>this.options.debug
        }), this.calculateRange = r5n(()=>[
                this.getMeasurements(),
                this.getSize(),
                this.getScrollOffset(),
                this.options.lanes
            ], (e, n, i, r)=>this.range = e.length > 0 && n > 0 ? SM0({
                measurements: e,
                outerSize: n,
                scrollOffset: i,
                lanes: r
            }) : null, {
            key: !1,
            debug: ()=>this.options.debug
        }), this.getVirtualIndexes = r5n(()=>{
            let e = null, n = null;
            const i = this.calculateRange();
            return i && (e = i.startIndex, n = i.endIndex), this.maybeNotify.updateDeps([
                this.isScrolling,
                e,
                n
            ]), [
                this.options.rangeExtractor,
                this.options.overscan,
                this.options.count,
                e,
                n
            ];
        }, (e, n, i, r, s)=>r === null || s === null ? [] : e({
                startIndex: r,
                endIndex: s,
                overscan: n,
                count: i
            }), {
            key: !1,
            debug: ()=>this.options.debug
        }), this.indexFromElement = (e)=>{
            const n = this.options.indexAttribute, i = e.getAttribute(n);
            return i ? parseInt(i, 10) : (console.warn(`Missing attribute name '${n}={index}' on measured element.`), -1);
        }, this.shouldMeasureDuringScroll = (e)=>{
            var n;
            if (!this.scrollState || this.scrollState.behavior !== "smooth") return !0;
            const i = this.scrollState.index ?? ((n = this.getVirtualItemForOffset(this.scrollState.lastTargetOffset)) == null ? void 0 : n.index);
            if (i !== void 0 && this.range) {
                const r = Math.max(this.options.overscan, Math.ceil((this.range.endIndex - this.range.startIndex) / 2)), s = Math.max(0, i - r), o = Math.min(this.options.count - 1, i + r);
                return e >= s && e <= o;
            }
            return !0;
        }, this.measureElement = (e)=>{
            if (!e) {
                this.elementsCache.forEach((s, o)=>{
                    s.isConnected || (this.observer.unobserve(s), this.elementsCache.delete(o));
                });
                return;
            }
            const n = this.indexFromElement(e), i = this.options.getItemKey(n), r = this.elementsCache.get(i);
            r !== e && (r && this.observer.unobserve(r), this.observer.observe(e), this.elementsCache.set(i, e)), (!this.isScrolling || this.scrollState) && this.shouldMeasureDuringScroll(n) && this.resizeItem(n, this.options.measureElement(e, void 0, this));
        }, this.resizeItem = (e, n)=>{
            var i;
            const r = this.measurementsCache[e];
            if (!r) return;
            const s = this.itemSizeCache.get(r.key) ?? r.size, o = n - s;
            o !== 0 && (((i = this.scrollState) == null ? void 0 : i.behavior) !== "smooth" && (this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(r, o, this) : r.start < this.getScrollOffset() + this.scrollAdjustments) && (this.options.debug && console.info("correction", o), this._scrollToOffset(this.getScrollOffset(), {
                adjustments: this.scrollAdjustments += o,
                behavior: void 0
            })), this.pendingMeasuredCacheIndexes.push(r.index), this.itemSizeCache = new Map(this.itemSizeCache.set(r.key, n)), this.notify(!1));
        }, this.getVirtualItems = r5n(()=>[
                this.getVirtualIndexes(),
                this.getMeasurements()
            ], (e, n)=>{
            const i = [];
            for(let r = 0, s = e.length; r < s; r++){
                const o = e[r], a = n[o];
                i.push(a);
            }
            return i;
        }, {
            key: !1,
            debug: ()=>this.options.debug
        }), this.getVirtualItemForOffset = (e)=>{
            const n = this.getMeasurements();
            if (n.length !== 0) return Q2v(n[Utc(0, n.length - 1, (i)=>Q2v(n[i]).start, e)]);
        }, this.getMaxScrollOffset = ()=>{
            if (!this.scrollElement) return 0;
            if ("scrollHeight" in this.scrollElement) return this.options.horizontal ? this.scrollElement.scrollWidth - this.scrollElement.clientWidth : this.scrollElement.scrollHeight - this.scrollElement.clientHeight;
            {
                const e = this.scrollElement.document.documentElement;
                return this.options.horizontal ? e.scrollWidth - this.scrollElement.innerWidth : e.scrollHeight - this.scrollElement.innerHeight;
            }
        }, this.getOffsetForAlignment = (e, n, i = 0)=>{
            if (!this.scrollElement) return 0;
            const r = this.getSize(), s = this.getScrollOffset();
            n === "auto" && (n = e >= s + r ? "end" : "start"), n === "center" ? e += (i - r) / 2 : n === "end" && (e -= r);
            const o = this.getMaxScrollOffset();
            return Math.max(Math.min(o, e), 0);
        }, this.getOffsetForIndex = (e, n = "auto")=>{
            e = Math.max(0, Math.min(e, this.options.count - 1));
            const i = this.getSize(), r = this.getScrollOffset(), s = this.measurementsCache[e];
            if (!s) return;
            if (n === "auto") if (s.end >= r + i - this.options.scrollPaddingEnd) n = "end";
            else if (s.start <= r + this.options.scrollPaddingStart) n = "start";
            else return [
                r,
                n
            ];
            if (n === "end" && e === this.options.count - 1) return [
                this.getMaxScrollOffset(),
                n
            ];
            const o = n === "end" ? s.end + this.options.scrollPaddingEnd : s.start - this.options.scrollPaddingStart;
            return [
                this.getOffsetForAlignment(o, n, s.size),
                n
            ];
        }, this.scrollToOffset = (e, { align: n = "start", behavior: i = "auto" } = {})=>{
            const r = this.getOffsetForAlignment(e, n), s = this.now();
            this.scrollState = {
                index: null,
                align: n,
                behavior: i,
                startedAt: s,
                lastTargetOffset: r,
                stableFrames: 0
            }, this._scrollToOffset(r, {
                adjustments: void 0,
                behavior: i
            }), this.scheduleScrollReconcile();
        }, this.scrollToIndex = (e, { align: n = "auto", behavior: i = "auto" } = {})=>{
            e = Math.max(0, Math.min(e, this.options.count - 1));
            const r = this.getOffsetForIndex(e, n);
            if (!r) return;
            const [s, o] = r, a = this.now();
            this.scrollState = {
                index: e,
                align: o,
                behavior: i,
                startedAt: a,
                lastTargetOffset: s,
                stableFrames: 0
            }, this._scrollToOffset(s, {
                adjustments: void 0,
                behavior: i
            }), this.scheduleScrollReconcile();
        }, this.scrollBy = (e, { behavior: n = "auto" } = {})=>{
            const i = this.getScrollOffset() + e, r = this.now();
            this.scrollState = {
                index: null,
                align: "start",
                behavior: n,
                startedAt: r,
                lastTargetOffset: i,
                stableFrames: 0
            }, this._scrollToOffset(i, {
                adjustments: void 0,
                behavior: n
            }), this.scheduleScrollReconcile();
        }, this.getTotalSize = ()=>{
            var e;
            const n = this.getMeasurements();
            let i;
            if (n.length === 0) i = this.options.paddingStart;
            else if (this.options.lanes === 1) i = ((e = n[n.length - 1]) == null ? void 0 : e.end) ?? 0;
            else {
                const r = Array(this.options.lanes).fill(null);
                let s = n.length - 1;
                for(; s >= 0 && r.some((o)=>o === null);){
                    const o = n[s];
                    r[o.lane] === null && (r[o.lane] = o.end), s--;
                }
                i = Math.max(...r.filter((o)=>o !== null));
            }
            return Math.max(i - this.options.scrollMargin + this.options.paddingEnd, 0);
        }, this._scrollToOffset = (e, { adjustments: n, behavior: i })=>{
            this.options.scrollToFn(e, {
                behavior: i,
                adjustments: n
            }, this);
        }, this.measure = ()=>{
            this.itemSizeCache = new Map, this.laneAssignments = new Map, this.notify(!1);
        }, this.invalidateMeasurements = ()=>{
            this.itemSizeCache = new Map(this.itemSizeCache), this.notify(!1);
        }, this.setOptions(t);
    }
    scheduleScrollReconcile() {
        if (!this.targetWindow) {
            this.scrollState = null;
            return;
        }
        this.rafId == null && (this.rafId = this.targetWindow.requestAnimationFrame(()=>{
            this.rafId = null, this.reconcileScroll();
        }));
    }
    reconcileScroll() {
        if (!this.scrollState || !this.scrollElement) return;
        if (this.now() - this.scrollState.startedAt > 5e3) {
            this.scrollState = null;
            return;
        }
        const n = this.scrollState.index != null ? this.getOffsetForIndex(this.scrollState.index, this.scrollState.align) : void 0, i = n ? n[0] : this.scrollState.lastTargetOffset, r = 1, s = i !== this.scrollState.lastTargetOffset;
        if (!s && J2v(i, this.getScrollOffset())) {
            if (this.scrollState.stableFrames++, this.scrollState.stableFrames >= r) {
                this.scrollState = null;
                return;
            }
        } else this.scrollState.stableFrames = 0, s && (this.scrollState.lastTargetOffset = i, this.scrollState.behavior = "auto", this._scrollToOffset(i, {
            adjustments: void 0,
            behavior: "auto"
        }));
        this.scheduleScrollReconcile();
    }
}, Utc = (t, e, n, i)=>{
    for(; t <= e;){
        const r = (t + e) / 2 | 0, s = n(r);
        if (s < i) t = r + 1;
        else if (s > i) e = r - 1;
        else return r;
    }
    return t > 0 ? t - 1 : 0;
};

}
