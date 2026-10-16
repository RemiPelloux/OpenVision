import { DUf, Q4t, gJl } from "./f0s.js";
import { x } from "./tslib.es6.js";
import { RUf, fJl, vJl } from "./utils_19.js";
var rLs, _Jl, bJl, yJl, sLs, oLs, SJl, kJl, wJl, CJl, aLs;
export { CJl, SJl, _Jl, aLs, bJl, kJl, oLs, rLs, sLs, wJl, yJl };
var __wakaru_MUf_initialized = false;
export function MUf() {
if (__wakaru_MUf_initialized) return;
__wakaru_MUf_initialized = true;
x(), RUf(), rLs = (e)=>{
    const { offsetWidth: t, offsetHeight: n } = e;
    return {
        width: t,
        height: n
    };
}, _Jl = (e)=>e, bJl = (e)=>{
    const t = Math.max(e.startIndex - e.overscan, 0), n = Math.min(e.endIndex + e.overscan, e.count - 1), i = [];
    for(let r = t; r <= n; r++)i.push(r);
    return i;
}, yJl = (e, t)=>{
    const n = e.scrollElement;
    if (!n) return;
    const i = e.targetWindow;
    if (!i) return;
    const r = (o)=>{
        const { width: a, height: c } = o;
        t({
            width: Math.round(a),
            height: Math.round(c)
        });
    };
    if (r(rLs(n)), !i.ResizeObserver) return ()=>{};
    const s = new i.ResizeObserver((o)=>{
        const a = ()=>{
            const c = o[0];
            if (c?.borderBoxSize) {
                const l = c.borderBoxSize[0];
                if (l) {
                    r({
                        width: l.inlineSize,
                        height: l.blockSize
                    });
                    return;
                }
            }
            r(rLs(n));
        };
        e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(a) : a();
    });
    return s.observe(n, {
        box: "border-box"
    }), ()=>{
        s.unobserve(n);
    };
}, sLs = {
    passive: !0
}, oLs = typeof window > "u" ? !0 : "onscrollend" in window, SJl = (e, t)=>{
    const n = e.scrollElement;
    if (!n) return;
    const i = e.targetWindow;
    if (!i) return;
    let r = 0;
    const s = e.options.useScrollendEvent && oLs ? ()=>{} : vJl(i, ()=>{
        t(r, !1);
    }, e.options.isScrollingResetDelay), o = (u)=>()=>{
            const { horizontal: h, isRtl: p } = e.options;
            r = h ? n.scrollLeft * (p && -1 || 1) : n.scrollTop, s(), t(r, u);
        }, a = o(!0), c = o(!1);
    n.addEventListener("scroll", a, sLs);
    const l = e.options.useScrollendEvent && oLs;
    return l && n.addEventListener("scrollend", c, sLs), ()=>{
        n.removeEventListener("scroll", a), l && n.removeEventListener("scrollend", c);
    };
}, kJl = (e, t, n)=>{
    if (t?.borderBoxSize) {
        const i = t.borderBoxSize[0];
        if (i) return Math.round(i[n.options.horizontal ? "inlineSize" : "blockSize"]);
    }
    return e[n.options.horizontal ? "offsetWidth" : "offsetHeight"];
}, wJl = (e, { adjustments: t = 0, behavior: n }, i)=>{
    var r, s;
    const o = e + t;
    (s = (r = i.scrollElement) == null ? void 0 : r.scrollTo) == null || s.call(r, {
        [i.options.horizontal ? "left" : "top"]: o,
        behavior: n
    });
}, CJl = class {
    constructor(e){
        this.unsubs = [], this.scrollElement = null, this.targetWindow = null, this.isScrolling = !1, this.scrollState = null, this.measurementsCache = [], this.itemSizeCache = new Map, this.laneAssignments = new Map, this.pendingMeasuredCacheIndexes = [], this.prevLanes = void 0, this.lanesChangedFlag = !1, this.lanesSettling = !1, this.scrollRect = null, this.scrollOffset = null, this.scrollDirection = null, this.scrollAdjustments = 0, this.elementsCache = new Map, this.now = ()=>{
            var t, n, i;
            return ((i = (n = (t = this.targetWindow) == null ? void 0 : t.performance) == null ? void 0 : n.now) == null ? void 0 : i.call(n)) ?? Date.now();
        }, this.observer = (()=>{
            let t = null;
            const n = ()=>t || (!this.targetWindow || !this.targetWindow.ResizeObserver ? null : t = new this.targetWindow.ResizeObserver((i)=>{
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
                    (i = n()) == null || i.disconnect(), t = null;
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
        })(), this.range = null, this.setOptions = (t)=>{
            Object.entries(t).forEach(([n, i])=>{
                typeof i > "u" && delete t[n];
            }), this.options = {
                debug: !1,
                initialOffset: 0,
                overscan: 1,
                paddingStart: 0,
                paddingEnd: 0,
                scrollPaddingStart: 0,
                scrollPaddingEnd: 0,
                horizontal: !1,
                getItemKey: _Jl,
                rangeExtractor: bJl,
                onChange: ()=>{},
                measureElement: kJl,
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
                ...t
            };
        }, this.notify = (t)=>{
            var n, i;
            (i = (n = this.options).onChange) == null || i.call(n, this, t);
        }, this.maybeNotify = Q4t(()=>(this.calculateRange(), [
                this.isScrolling,
                this.range ? this.range.startIndex : null,
                this.range ? this.range.endIndex : null
            ]), (t)=>{
            this.notify(t);
        }, {
            key: process.env.NODE_ENV !== "production" && "maybeNotify",
            debug: ()=>this.options.debug,
            initialDeps: [
                this.isScrolling,
                this.range ? this.range.startIndex : null,
                this.range ? this.range.endIndex : null
            ]
        }), this.cleanup = ()=>{
            this.unsubs.filter(Boolean).forEach((t)=>t()), this.unsubs = [], this.observer.disconnect(), this.rafId != null && this.targetWindow && (this.targetWindow.cancelAnimationFrame(this.rafId), this.rafId = null), this.scrollState = null, this.scrollElement = null, this.targetWindow = null;
        }, this._didMount = ()=>()=>{
                this.cleanup();
            }, this._willUpdate = ()=>{
            var t;
            const n = this.options.enabled ? this.options.getScrollElement() : null;
            if (this.scrollElement !== n) {
                if (this.cleanup(), !n) {
                    this.maybeNotify();
                    return;
                }
                this.scrollElement = n, this.scrollElement && "ownerDocument" in this.scrollElement ? this.targetWindow = this.scrollElement.ownerDocument.defaultView : this.targetWindow = ((t = this.scrollElement) == null ? void 0 : t.window) ?? null, this.elementsCache.forEach((i)=>{
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
        }, this.rafId = null, this.getSize = ()=>this.options.enabled ? (this.scrollRect = this.scrollRect ?? this.options.initialRect, this.scrollRect[this.options.horizontal ? "width" : "height"]) : (this.scrollRect = null, 0), this.getScrollOffset = ()=>this.options.enabled ? (this.scrollOffset = this.scrollOffset ?? (typeof this.options.initialOffset == "function" ? this.options.initialOffset() : this.options.initialOffset), this.scrollOffset) : (this.scrollOffset = null, 0), this.getFurthestMeasurement = (t, n)=>{
            const i = new Map, r = new Map;
            for(let s = n - 1; s >= 0; s--){
                const o = t[s];
                if (i.has(o.lane)) continue;
                const a = r.get(o.lane);
                if (a == null || o.end > a.end ? r.set(o.lane, o) : o.end < a.end && i.set(o.lane, !0), i.size === this.options.lanes) break;
            }
            return r.size === this.options.lanes ? Array.from(r.values()).sort((s, o)=>s.end === o.end ? s.index - o.index : s.end - o.end)[0] : void 0;
        }, this.getMeasurementOptions = Q4t(()=>[
                this.options.count,
                this.options.paddingStart,
                this.options.scrollMargin,
                this.options.getItemKey,
                this.options.enabled,
                this.options.lanes
            ], (t, n, i, r, s, o)=>(this.prevLanes !== void 0 && this.prevLanes !== o && (this.lanesChangedFlag = !0), this.prevLanes = o, this.pendingMeasuredCacheIndexes = [], {
                count: t,
                paddingStart: n,
                scrollMargin: i,
                getItemKey: r,
                enabled: s,
                lanes: o
            }), {
            key: !1
        }), this.getMeasurements = Q4t(()=>[
                this.getMeasurementOptions(),
                this.itemSizeCache
            ], ({ count: t, paddingStart: n, scrollMargin: i, getItemKey: r, enabled: s, lanes: o }, a)=>{
            if (!s) return this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), [];
            if (this.laneAssignments.size > t) for (const h of this.laneAssignments.keys())h >= t && this.laneAssignments.delete(h);
            this.lanesChangedFlag && (this.lanesChangedFlag = !1, this.lanesSettling = !0, this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), this.pendingMeasuredCacheIndexes = []), this.measurementsCache.length === 0 && !this.lanesSettling && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((h)=>{
                this.itemSizeCache.set(h.key, h.size);
            }));
            const c = this.lanesSettling ? 0 : this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
            this.pendingMeasuredCacheIndexes = [], this.lanesSettling && this.measurementsCache.length === t && (this.lanesSettling = !1);
            const l = this.measurementsCache.slice(0, c), u = new Array(o).fill(void 0);
            for(let h = 0; h < c; h++){
                const p = l[h];
                p && (u[p.lane] = h);
            }
            for(let h = c; h < t; h++){
                const p = r(h), g = this.laneAssignments.get(h);
                let f, v;
                if (g !== void 0 && this.options.lanes > 1) {
                    f = g;
                    const E = u[f], A = E !== void 0 ? l[E] : void 0;
                    v = A ? A.end + this.options.gap : n + i;
                } else {
                    const E = this.options.lanes === 1 ? l[h - 1] : this.getFurthestMeasurement(l, h);
                    v = E ? E.end + this.options.gap : n + i, f = E ? E.lane : h % this.options.lanes, this.options.lanes > 1 && this.laneAssignments.set(h, f);
                }
                const b = a.get(p), y = typeof b == "number" ? b : this.options.estimateSize(h), T = v + y;
                l[h] = {
                    index: h,
                    start: v,
                    size: y,
                    end: T,
                    key: p,
                    lane: f
                }, u[f] = h;
            }
            return this.measurementsCache = l, l;
        }, {
            key: process.env.NODE_ENV !== "production" && "getMeasurements",
            debug: ()=>this.options.debug
        }), this.calculateRange = Q4t(()=>[
                this.getMeasurements(),
                this.getSize(),
                this.getScrollOffset(),
                this.options.lanes
            ], (t, n, i, r)=>this.range = t.length > 0 && n > 0 ? DUf({
                measurements: t,
                outerSize: n,
                scrollOffset: i,
                lanes: r
            }) : null, {
            key: process.env.NODE_ENV !== "production" && "calculateRange",
            debug: ()=>this.options.debug
        }), this.getVirtualIndexes = Q4t(()=>{
            let t = null, n = null;
            const i = this.calculateRange();
            return i && (t = i.startIndex, n = i.endIndex), this.maybeNotify.updateDeps([
                this.isScrolling,
                t,
                n
            ]), [
                this.options.rangeExtractor,
                this.options.overscan,
                this.options.count,
                t,
                n
            ];
        }, (t, n, i, r, s)=>r === null || s === null ? [] : t({
                startIndex: r,
                endIndex: s,
                overscan: n,
                count: i
            }), {
            key: process.env.NODE_ENV !== "production" && "getVirtualIndexes",
            debug: ()=>this.options.debug
        }), this.indexFromElement = (t)=>{
            const n = this.options.indexAttribute, i = t.getAttribute(n);
            return i ? parseInt(i, 10) : (console.warn(`Missing attribute name '${n}={index}' on measured element.`), -1);
        }, this.shouldMeasureDuringScroll = (t)=>{
            var n;
            if (!this.scrollState || this.scrollState.behavior !== "smooth") return !0;
            const i = this.scrollState.index ?? ((n = this.getVirtualItemForOffset(this.scrollState.lastTargetOffset)) == null ? void 0 : n.index);
            if (i !== void 0 && this.range) {
                const r = Math.max(this.options.overscan, Math.ceil((this.range.endIndex - this.range.startIndex) / 2)), s = Math.max(0, i - r), o = Math.min(this.options.count - 1, i + r);
                return t >= s && t <= o;
            }
            return !0;
        }, this.measureElement = (t)=>{
            if (!t) {
                this.elementsCache.forEach((s, o)=>{
                    s.isConnected || (this.observer.unobserve(s), this.elementsCache.delete(o));
                });
                return;
            }
            const n = this.indexFromElement(t), i = this.options.getItemKey(n), r = this.elementsCache.get(i);
            r !== t && (r && this.observer.unobserve(r), this.observer.observe(t), this.elementsCache.set(i, t)), (!this.isScrolling || this.scrollState) && this.shouldMeasureDuringScroll(n) && this.resizeItem(n, this.options.measureElement(t, void 0, this));
        }, this.resizeItem = (t, n)=>{
            var i;
            const r = this.measurementsCache[t];
            if (!r) return;
            const s = this.itemSizeCache.get(r.key) ?? r.size, o = n - s;
            o !== 0 && (((i = this.scrollState) == null ? void 0 : i.behavior) !== "smooth" && (this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(r, o, this) : r.start < this.getScrollOffset() + this.scrollAdjustments) && (process.env.NODE_ENV !== "production" && this.options.debug && console.info("correction", o), this._scrollToOffset(this.getScrollOffset(), {
                adjustments: this.scrollAdjustments += o,
                behavior: void 0
            })), this.pendingMeasuredCacheIndexes.push(r.index), this.itemSizeCache = new Map(this.itemSizeCache.set(r.key, n)), this.notify(!1));
        }, this.getVirtualItems = Q4t(()=>[
                this.getVirtualIndexes(),
                this.getMeasurements()
            ], (t, n)=>{
            const i = [];
            for(let r = 0, s = t.length; r < s; r++){
                const o = t[r], a = n[o];
                i.push(a);
            }
            return i;
        }, {
            key: process.env.NODE_ENV !== "production" && "getVirtualItems",
            debug: ()=>this.options.debug
        }), this.getVirtualItemForOffset = (t)=>{
            const n = this.getMeasurements();
            if (n.length !== 0) return gJl(n[aLs(0, n.length - 1, (i)=>gJl(n[i]).start, t)]);
        }, this.getMaxScrollOffset = ()=>{
            if (!this.scrollElement) return 0;
            if ("scrollHeight" in this.scrollElement) return this.options.horizontal ? this.scrollElement.scrollWidth - this.scrollElement.clientWidth : this.scrollElement.scrollHeight - this.scrollElement.clientHeight;
            {
                const t = this.scrollElement.document.documentElement;
                return this.options.horizontal ? t.scrollWidth - this.scrollElement.innerWidth : t.scrollHeight - this.scrollElement.innerHeight;
            }
        }, this.getOffsetForAlignment = (t, n, i = 0)=>{
            if (!this.scrollElement) return 0;
            const r = this.getSize(), s = this.getScrollOffset();
            n === "auto" && (n = t >= s + r ? "end" : "start"), n === "center" ? t += (i - r) / 2 : n === "end" && (t -= r);
            const o = this.getMaxScrollOffset();
            return Math.max(Math.min(o, t), 0);
        }, this.getOffsetForIndex = (t, n = "auto")=>{
            t = Math.max(0, Math.min(t, this.options.count - 1));
            const i = this.getSize(), r = this.getScrollOffset(), s = this.measurementsCache[t];
            if (!s) return;
            if (n === "auto") if (s.end >= r + i - this.options.scrollPaddingEnd) n = "end";
            else if (s.start <= r + this.options.scrollPaddingStart) n = "start";
            else return [
                r,
                n
            ];
            if (n === "end" && t === this.options.count - 1) return [
                this.getMaxScrollOffset(),
                n
            ];
            const o = n === "end" ? s.end + this.options.scrollPaddingEnd : s.start - this.options.scrollPaddingStart;
            return [
                this.getOffsetForAlignment(o, n, s.size),
                n
            ];
        }, this.scrollToOffset = (t, { align: n = "start", behavior: i = "auto" } = {})=>{
            const r = this.getOffsetForAlignment(t, n), s = this.now();
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
        }, this.scrollToIndex = (t, { align: n = "auto", behavior: i = "auto" } = {})=>{
            t = Math.max(0, Math.min(t, this.options.count - 1));
            const r = this.getOffsetForIndex(t, n);
            if (!r) return;
            const [s, o] = r, a = this.now();
            this.scrollState = {
                index: t,
                align: o,
                behavior: i,
                startedAt: a,
                lastTargetOffset: s,
                stableFrames: 0
            }, this._scrollToOffset(s, {
                adjustments: void 0,
                behavior: i
            }), this.scheduleScrollReconcile();
        }, this.scrollBy = (t, { behavior: n = "auto" } = {})=>{
            const i = this.getScrollOffset() + t, r = this.now();
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
            var t;
            const n = this.getMeasurements();
            let i;
            if (n.length === 0) i = this.options.paddingStart;
            else if (this.options.lanes === 1) i = ((t = n[n.length - 1]) == null ? void 0 : t.end) ?? 0;
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
        }, this._scrollToOffset = (t, { adjustments: n, behavior: i })=>{
            this.options.scrollToFn(t, {
                behavior: i,
                adjustments: n
            }, this);
        }, this.measure = ()=>{
            this.itemSizeCache = new Map, this.laneAssignments = new Map, this.notify(!1);
        }, this.setOptions(e);
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
        if (!s && fJl(i, this.getScrollOffset())) {
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
}, aLs = (e, t, n, i)=>{
    for(; e <= t;){
        const r = (e + t) / 2 | 0, s = n(r);
        if (s < i) e = r + 1;
        else if (s > i) t = r - 1;
        else return r;
    }
    return e > 0 ? e - 1 : 0;
};

}
