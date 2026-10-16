import { gbe } from "./brands.ts";
import { Frr, U$h } from "./committed-geometry-controller.ts";
import { SLo, kLo } from "./disclosure-gesture.ts";
import { a$h, o$h } from "./local-growth-bridge.ts";
import { Hzt } from "./parts.ts";
import { d$h, h$h, wLo } from "./plane-epoch.ts";
import { Brr } from "./read-width-epoch.ts";
import { f$h } from "./row-frame.ts";
import { x } from "./tslib.es6.js";
import { G$h, qrr } from "./use-virtual-plane.ts";
import { useLayoutEffect as $$h } from "./react-runtime/react/esm-index-production.js";
import { useState as $v_ } from "./react-runtime/react/esm-index-production.js";
import { useState as ALo } from "./react-runtime/react/esm-index-production.js";
import { useMemo as H$h } from "./react-runtime/react/esm-index-production.js";
import { useSyncExternalStore as Hv_ } from "./react-runtime/react/esm-index-production.js";
import { useCallback as Vv_ } from "./react-runtime/react/esm-index-production.js";
import { useRef as jrr } from "./react-runtime/react/esm-index-production.js";
import { useLayoutEffect as jv_ } from "./react-runtime/react/esm-index-production.js";
import { useMemo as qv_ } from "./react-runtime/react/esm-index-production.js";
import { jsx as zrr } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { useSyncExternalStore as zv_ } from "./react-runtime/react/esm-index-production.js";
function vhe(e) {
    if (!Number.isFinite(e) || e < 0) throw new RangeError(`committedPx requires a finite non-negative number, got ${e}`);
    return Math.round(e);
}
function sLo(e) {
    if (!Number.isFinite(e) || e < 0) throw new RangeError(`estimatePx requires a finite non-negative number, got ${e}`);
    return e;
}
function ATe(e) {
    if (e.length === 0) throw new RangeError("rowId requires a non-empty string");
    return e;
}
function oLo(e) {
    if (e.length === 0) throw new RangeError("partId requires a non-empty string");
    return e;
}
function aLo(e) {
    return Yg_(e, "revisionId");
}
function C7h(e) {
    if (e.length === 0) throw new RangeError("typographyEpoch requires a non-empty string");
    return e;
}
function Kg_(e) {
    return Frr(e, "RevisionId");
}
function Yg_(e, t) {
    if (!Number.isSafeInteger(e) || e < 0) throw new RangeError(`${t} requires a non-negative safe integer, got ${e}`);
    return e;
}
function pLo(e) {
    return {
        kind: "settled-uncorrected",
        observation: {
            kind: "none"
        },
        lateGrowth: e?.lateGrowth ?? "reject"
    };
}
function Tf_(e) {
    const t = new Map(e.state.deadlineByRowId);
    return t.set(e.rowId, e.nowMs + e.settleDelayMs), {
        state: {
            deadlineByRowId: t
        }
    };
}
function Ef_(e) {
    const t = [];
    for (const [i, r] of e.state.deadlineByRowId)r <= e.nowMs && t.push(i);
    if (t.length === 0) return {
        settledRowIds: t,
        state: e.state
    };
    const n = new Map(e.state.deadlineByRowId);
    for (const i of t)n.delete(i);
    return {
        settledRowIds: t,
        state: {
            deadlineByRowId: n
        }
    };
}
function xf_(e) {
    const t = e.settleDelayMs ?? SLo, n = e.now ?? (()=>Date.now()), { schedule: i } = e;
    let r = kLo, s, o = !1;
    function a() {
        if (s?.dispose(), s = void 0, o || r.deadlineByRowId.size === 0) return;
        const l = Math.min(...r.deadlineByRowId.values());
        s = i(c, Math.max(0, l - n()));
    }
    function c() {
        s?.dispose(), s = void 0;
        const l = Ef_({
            state: r,
            nowMs: n()
        });
        r = l.state, a();
        for (const u of l.settledRowIds)e.mint(u, "settled");
    }
    return {
        notifyGesture: (l)=>{
            if (o) return;
            r = Tf_({
                state: r,
                rowId: l,
                nowMs: n(),
                settleDelayMs: t
            }).state, a(), e.mint(l, "gesture");
        },
        hasOpenBurst: (l)=>!o && r.deadlineByRowId.has(l),
        dispose: ()=>{
            o = !0, s?.dispose(), s = void 0, r = kLo;
        }
    };
}
function If_(e) {
    const t = [];
    for (const n of e.defects){
        if (n.kind !== "oscillation-terminated") continue;
        const i = e.geometry.rows.find((r)=>r.rowId === n.rowId);
        i !== void 0 && t.push({
            rowId: String(n.rowId),
            revision: i.revision
        });
    }
    return t;
}
function Af_(e) {
    const t = [], n = new Map(e.stateByRowId);
    for (const i of e.rejections){
        const r = e.liveRevisions.get(i.rowId);
        if (r === void 0 || r !== i.revision) continue;
        const s = n.get(i.rowId);
        if (s !== void 0 && s.mintedFromRevision >= i.revision) continue;
        const a = s !== void 0 && i.revision === s.mintedFromRevision + 1 && e.nowMs - s.mintedAtMs <= a$h ? s.consecutiveBridges + 1 : 1;
        a > o$h && e.capExemptRowIds?.has(i.rowId) !== !0 || (n.set(i.rowId, {
            mintedFromRevision: i.revision,
            consecutiveBridges: a,
            mintedAtMs: e.nowMs
        }), t.push(i.rowId));
    }
    return {
        invalidateRowIds: t,
        nextStateByRowId: n
    };
}
function Rf_(e) {
    let t;
    for (const [n, i] of e.stateByRowId){
        const r = e.liveRevisions.get(n);
        r !== void 0 && r <= i.mintedFromRevision + 1 || (t ??= new Map(e.stateByRowId), t.delete(n));
    }
    return t ?? e.stateByRowId;
}
function Df_(e) {
    return !Number.isFinite(e) || e <= 0 ? 1 : Math.max(.5, Math.round(e * 4) / 4);
}
function Grr(e, t) {
    const n = Number.parseFloat(e);
    return Number.isFinite(n) && n > 0 ? n : t;
}
function l$h(e) {
    const t = Grr(e.fontSize, 14), n = Grr(e.lineHeight, Math.round(t * 1.5)), i = e.font !== "" ? e.font : `${e.fontWeight || "400"} ${t}px ${e.fontFamily || "sans-serif"}`, r = {
        ...d$h,
        font: i,
        lineHeightPx: n,
        letterSpacingPx: Number.parseFloat(e.letterSpacing) || 0
    };
    return {
        epoch: C7h(`${i}/${n}`),
        body: r,
        heading1: r,
        heading2: r,
        code: {
            ...r,
            whiteSpace: "pre-wrap"
        },
        marker: r
    };
}
function u$h(e) {
    if (e == null || typeof getComputedStyle != "function") return Brr({
        contentWidthPx: 0,
        typography: l$h({}),
        zoomFactor: 1,
        dprBucket: 1,
        schemaVersion: wLo
    });
    const t = getComputedStyle(e), n = Grr(t.paddingLeft, 0) + Grr(t.paddingRight, 0);
    return Brr({
        contentWidthPx: Math.max(0, e.clientWidth - n),
        typography: l$h(t),
        zoomFactor: 1,
        dprBucket: Df_(typeof devicePixelRatio == "number" ? devicePixelRatio : 1),
        schemaVersion: wLo
    });
}
function Mf_(e) {
    let t = u$h(e);
    return {
        subscribe (n) {
            if (e == null) return ()=>{};
            const i = ()=>{
                const o = u$h(e);
                o.id !== t.id && (t = o, n());
            };
            i();
            const r = typeof ResizeObserver == "function" ? new ResizeObserver(i) : null;
            r?.observe(e);
            const s = e.ownerDocument.defaultView;
            return s?.addEventListener("resize", i), ()=>{
                r?.disconnect(), s?.removeEventListener("resize", i);
            };
        },
        read: ()=>t
    };
}
function p$h(e) {
    return {
        height: `${e}px`,
        position: "relative",
        width: "100%"
    };
}
function Lf_(e) {
    return {
        maxHeight: `${e.heightPx}px`,
        overflowY: "clip",
        overflowClipMargin: `${e.marginPx}px`
    };
}
function m$h(e) {
    const { topPx: t, stickyBoundaryHeightPx: n, clip: i } = e, r = n !== void 0;
    return {
        position: "absolute",
        top: r ? `${t}px` : 0,
        left: 0,
        right: 0,
        ...r ? {
            height: `${n}px`,
            pointerEvents: "none"
        } : {
            transform: `translateY(${t}px)`
        },
        ...i === void 0 ? void 0 : Lf_(i)
    };
}
function Nf_(e) {
    switch(e.kind){
        case "settled-uncorrected":
            return e.observation.kind === "observed";
        case "settled-corrected":
            return !0;
        case "monotonic-streaming":
            return e.hasAdmittedSample;
        default:
            {
                const t = e;
                throw new TypeError(`unknown measured policy ${JSON.stringify(t)}`);
            }
    }
}
function Of_(e, t) {
    let n;
    for (const [i, r] of e.entries()){
        const s = t.rows[t.indexOf(r.rowId) ?? -1];
        if (s === void 0 || s.rowId !== r.rowId || s.revision === r.revision) continue;
        let o;
        for (const [a, c] of r.parts.entries()){
            if (c.kind !== "measured") continue;
            const l = s.parts.find((u)=>u.kind === "measured" && u.partId === c.partId);
            l === void 0 || l.kind !== "measured" || !Nf_(l.policy) || l.committedPx === c.committedPx || (o ??= [
                ...r.parts
            ], o[a] = {
                ...c,
                estimatePx: sLo(l.committedPx),
                committedPx: l.committedPx
            });
        }
        o !== void 0 && (n ??= [
            ...e
        ], n[i] = {
            ...r,
            parts: o
        });
    }
    return n ?? e;
}
function Gv_(e, t) {
    const [n] = $v_(()=>new U$h(e, qrr)), i = Hv_(n.subscribe, n.getSnapshot, n.getSnapshot), r = jrr(t), s = jrr(null), o = jrr(new Map), a = jrr(-1);
    $$h(()=>{
        const l = xf_({
            mint: (u, h)=>r.current?.mint(u, h === "gesture" ? "disclosure-gesture" : "disclosure-settled"),
            schedule: (u, h)=>({
                    dispose: qrr.scheduleDeadline(u, h)
                }),
            settleDelayMs: r.current?.disclosureSettleDelayMs
        });
        return s.current = l, n.mount(), ()=>{
            n.unmount(), l.dispose(), s.current === l && (s.current = null);
        };
    }, [
        n
    ]), $$h(()=>{
        r.current = t;
        const l = n.getDebugState().lastPlan, u = l?.next.commitId === i.geometry.commitId ? l.defects : [], h = e.followState ?? {
            kind: "active"
        };
        n.updateOptions({
            ...e,
            rows: Of_(e.rows, i.geometry),
            followState: h
        }), n.syncViewport();
        const p = i.geometry.commitId;
        if (t === void 0 || p === a.current) return;
        a.current = p;
        const g = If_({
            defects: u,
            geometry: i.geometry
        });
        if (g.length === 0 && o.current.size === 0) return;
        const f = t.readLiveRevisions(), v = Rf_({
            stateByRowId: o.current,
            liveRevisions: f
        });
        if (g.length === 0) {
            o.current = v;
            return;
        }
        const b = s.current, y = new Set(g.map((E)=>E.rowId).filter((E)=>b?.hasOpenBurst(E) === !0)), T = Af_({
            rejections: g,
            liveRevisions: f,
            stateByRowId: v,
            nowMs: qrr.now(),
            capExemptRowIds: y
        });
        o.current = T.nextStateByRowId;
        for (const E of T.invalidateRowIds)t.mint(E, "local-growth");
    });
    const c = H$h(()=>({
            rowRef: (l)=>n.getRowRef(l),
            rowRefs: (l)=>n.getRowRefs(l),
            scrollElementRef: n.scrollElementRef,
            planeElementRef: n.planeElementRef,
            scrollTo: (l)=>n.scrollTo(l),
            navigate: (l)=>n.navigate(l),
            reportMeasurement: (l, u)=>n.reportMeasurement(l, u),
            writeUserInputProxyOffset: (l)=>{
                n.writeUserInputProxyOffset(l);
            },
            preserveAnchor: (l)=>n.preserveAnchor(l),
            setBottomOverscrollPx: n.setBottomOverscrollPx,
            getInteractionState: n.getInteractionState,
            getDebugState: n.getDebugState,
            notifyDisclosureGesture: (l)=>{
                s.current?.notifyGesture(l);
            }
        }), [
        n
    ]);
    return {
        snapshot: i,
        handle: c
    };
}
function W$h(e, t) {
    const { snapshot: n, handle: i } = Gv_(e, t);
    return H$h(()=>({
            ...n,
            ...i
        }), [
        n,
        i
    ]);
}
function Kv_(e, t) {
    return {
        rowId: ATe(e.id),
        kind: j$h,
        revision: t,
        parts: [
            {
                kind: "measured",
                partId: q$h,
                estimatePx: sLo(e.estimatePx),
                committedPx: vhe(e.estimatePx),
                policy: pLo({
                    lateGrowth: "admit"
                })
            }
        ],
        presentation: "content",
        identity: {
            stableIdentity: e.id,
            rowKey: e.id,
            collapseStableKey: e.id,
            bubbleIds: []
        }
    };
}
function Yv_() {
    const e = new Map, t = new WeakMap;
    return {
        project: (n)=>n.map((i)=>{
                const r = e.get(i.id);
                if (r != null && r.version === i.version && r.estimatePx === i.estimatePx) return r.model;
                const s = r == null ? aLo(0) : Kg_(r.revision), o = Kv_(i, s);
                return t.set(o, {
                    version: i.version,
                    estimatePx: i.estimatePx,
                    revision: s,
                    model: o
                }), o;
            }),
        commit: (n)=>{
            const i = new Set;
            for (const r of n){
                const s = String(r.rowId);
                i.add(s);
                const o = t.get(r);
                o != null && e.set(s, o);
            }
            for (const r of e.keys())i.has(r) || e.delete(r);
        }
    };
}
function V$h({ row: e, controller: t, children: n }) {
    return zrr("div", {
        "data-plane-row": String(e.model.rowId),
        ref: t.rowRef(e.model.rowId),
        style: m$h({
            topPx: e.topPx
        }),
        children: n
    });
}
function Xv_(e) {
    const [t, n] = ALo(null), [i] = ALo(Yv_), [r] = ALo(()=>({
            ...K$h,
            gapPx: vhe(e.gapPx ?? 0)
        })), s = qv_(()=>Mf_(t), [
        t
    ]), o = zv_(s.subscribe, s.read, s.read), a = i.project(e.rows);
    jv_(()=>{
        i.commit(a);
    });
    const c = e.isGenerating ?? !1, l = W$h({
        rows: a,
        epoch: o,
        initialViewport: {
            mode: {
                kind: "pinned-bottom"
            },
            scrollTopPx: 0,
            viewportHeightPx: 0
        },
        config: r,
        overscanRows: e.overscanRows ?? z$h,
        ...e.overscanPx === void 0 ? {} : {
            overscanPx: e.overscanPx
        },
        isGenerating: c,
        revisionCause: c ? "stream-delta" : "hydration"
    }), u = l.scrollElementRef, h = Vv_((g)=>{
        u(g), n(g);
    }, [
        u
    ]), p = new Map;
    for (const g of e.rows)p.set(g.id, g.render);
    return zrr("div", {
        "aria-label": e.label,
        className: e.className,
        "data-testid": e.testId,
        ref: h,
        role: "log",
        style: {
            ...e.style,
            ...Y$h
        },
        children: zrr("div", {
            ref: l.planeElementRef,
            style: p$h(l.totalSizePx),
            children: l.rows.map((g)=>{
                const f = String(g.model.rowId);
                return zrr(V$h, {
                    controller: l,
                    row: g,
                    children: p.get(f)?.()
                }, f);
            })
        })
    });
}
var j$h, q$h, z$h, K$h, Y$h, X$h;
export { ATe, Af_, C7h, Df_, Ef_, Grr, Gv_, If_, K$h, Kg_, Kv_, Lf_, Mf_, Nf_, Of_, Rf_, Tf_, V$h, W$h, X$h, Xv_, Y$h, Yg_, Yv_, aLo, j$h, l$h, m$h, oLo, p$h, pLo, q$h, sLo, u$h, vhe, xf_, z$h };
var __wakaru_Zv__initialized = false;
export function Zv_() {
if (__wakaru_Zv__initialized) return;
__wakaru_Zv__initialized = true;
"use strict";
x(), gbe(), Hzt(), h$h(), f$h(), G$h(), j$h = "plane-row", q$h = oLo("body"), z$h = 4, K$h = {
    nearBottomThresholdPx: 4,
    userInputWindowMs: 250,
    driftTolerancePx: 1
}, Y$h = {
    overflowY: "auto",
    overflowAnchor: "none",
    position: "relative"
}, X$h = Object.assign(Xv_, {
    Row: V$h
});

}
