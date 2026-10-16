import { Uf_ } from "./apply-committed-geometry.ts";
import { E7h, I7h, Uzt, gbe, x7h } from "./brands.ts";
import { Vf_ } from "./controller-state.ts";
import { Kf_ } from "./frame-trigger.ts";
import { iLo, v7h } from "./geometry.ts";
import { Xf_ } from "./host-surface-visibility.ts";
import { Jf_ } from "./keyboard-intent.ts";
import { cv_ } from "./measurement-proposals.ts";
import { hLo } from "./motion.ts";
import { Vrr, fv_ } from "./navigation.ts";
import { $7h, $zt, J7h, O7h, Orr, Q7h, Urr, Z7h, e$h, t$h, vLo, yLo } from "./plan-frame.ts";
import { vhe } from "./plane.tsx";
import { M$h, wv_ } from "./read-width-epoch.ts";
import { M7h } from "./row-positions.ts";
import { A$h, D$h, E$h, ELo, I$h, R$h, T$h, TLo, kv_, x$h, xLo } from "./smooth-follow.ts";
import { x } from "./tslib.es6.js";
import { Lrr, vL } from "./viewport-anchor.ts";
import { Bv_ } from "./virtual-plane-model-state.ts";
function f7h(e) {
    return e.kind === "undirected" ? 0 : e.direction;
}
function _7h(e, t) {
    return Math.min(Math.max(t, 0), Math.max(0, e));
}
function b7h(e) {
    const t = e.isRowIndexUsable ?? (()=>!0), n = (l)=>l.stableIdentity === e.anchor.stableIdentity || l.collapseStableKey === e.anchor.collapseStableKey || l.rowKey === e.anchor.rowKey || e.anchor.bubbleId !== void 0 && l.bubbleIds.includes(e.anchor.bubbleId), i = e.rows[e.anchor.rowIndex];
    if (i !== void 0 && n(i) && t(e.anchor.rowIndex)) return e.anchor.rowIndex;
    const r = (l)=>{
        for(let u = 0; u < e.rows.length; u++){
            const h = e.rows[u];
            if (!(h === void 0 || !l(h) || !t(u))) return u;
        }
    }, s = r((l)=>l.stableIdentity === e.anchor.stableIdentity);
    if (s !== void 0) return s;
    const o = r((l)=>l.collapseStableKey === e.anchor.collapseStableKey);
    if (o !== void 0) return o;
    const a = r((l)=>l.rowKey === e.anchor.rowKey);
    if (a !== void 0) return a;
    const c = e.anchor.bubbleId;
    if (c !== void 0) return r((l)=>l.bubbleIds.includes(c));
}
function Wg_(e) {
    if (e.anchor === void 0) return {
        kind: "skip",
        reason: "no-anchor"
    };
    if (!e.initReady) return {
        kind: "skip",
        reason: "not-ready"
    };
    if (e.pinnedFollowing) return {
        kind: "skip",
        reason: "pinned-following"
    };
    if (e.anchor.mode === "bottom") return {
        kind: "rebase",
        anchorDisposition: "rebase-read"
    };
    if (e.anchor.mode === "read" && e.isStreaming) return {
        kind: "skip",
        reason: "streaming-hold"
    };
    const t = e.anchor.mode === "preserve-once" ? "rebase-read" : "retain";
    if (e.resolvedOffset === void 0) return {
        kind: "rebase",
        anchorDisposition: t
    };
    let n;
    switch(e.anchor.mode){
        case "read":
            n = _7h(e.liveScrollTop + e.resolvedOffset - e.anchor.edgeOffset, e.maxScrollTop);
            break;
        case "preserve-once":
            n = _7h(e.resolvedOffset - e.anchor.viewportOffsetPx, e.maxScrollTop);
            break;
    }
    const i = n - e.liveScrollTop;
    return Math.abs(i) < vL ? {
        kind: "noop",
        anchorDisposition: t
    } : e.anchor.mode === "read" && e.isUserScrolling && e.userScrollDir > 0 && i < 0 ? {
        kind: "skip",
        reason: "user-scrolling"
    } : {
        kind: "adjust",
        targetScrollTop: n,
        deltaPx: i,
        anchorDisposition: t
    };
}
function Gg_(e) {
    return e < 0 ? -1 : e > 0 ? 1 : 0;
}
function y7h(e) {
    return e.isUserPointerDown || e.msSinceUserScrollInput <= e.userInputWindowMs;
}
function Vg_(e, t) {
    const n = f7h(e.userInput);
    return y7h(e) && (n === 0 || t === 0 || n === t);
}
function jg_(e) {
    if (!e.isScrolling) return {
        kind: "settled"
    };
    if (e.isProgrammaticScrollActive) return {
        kind: "programmatic"
    };
    const t = Gg_(e.clampedOffset - e.lastObservedScrollOffset);
    return Vg_(e, t) ? {
        kind: "reader",
        direction: t
    } : e.viewportHeight !== e.lastObservedViewportHeight ? {
        kind: "geometry-change",
        of: "viewport"
    } : Math.abs(e.totalHeight - e.lastObservedTotalHeight) > e.nearBottomThresholdPx ? {
        kind: "geometry-change",
        of: "content"
    } : {
        kind: "foreign",
        direction: t
    };
}
function S7h(e) {
    const t = e.totalHeight - e.clampedOffset - e.viewportHeight, n = t <= e.nearBottomThresholdPx, i = jg_(e), r = n && e.totalHeight - e.viewportHeight < e.lastObservedTotalHeight - e.lastObservedViewportHeight, s = i.kind === "reader" ? i.direction === -1 && !r : i.kind === "foreign" && i.direction === -1 && !n;
    if (e.isReady && s) return {
        atBottom: n,
        attribution: i,
        event: {
            kind: "release-requested",
            reason: i.kind === "reader" ? "attributed-scroll-away" : "unattributed-scroll-away"
        }
    };
    const o = e.userInput.kind === "scroll" && e.userInput.direction === -1 && e.msSinceUserScrollInput <= e.userInputWindowMs && e.clampedOffset < vL && t >= vL;
    if (e.isReady && o) return {
        atBottom: n,
        attribution: i,
        event: {
            kind: "release-requested",
            reason: "scroll-away-at-top-edge"
        }
    };
    const a = e.totalHeight < e.lastObservedTotalHeight, l = e.lastObservedTotalHeight - e.lastObservedScrollOffset - e.lastObservedViewportHeight <= e.nearBottomThresholdPx, u = e.allowAutomaticRelatch && a && l, h = e.allowAutomaticRelatch && i.kind === "settled" && !y7h(e) && !(a && !l);
    let p;
    return i.kind === "reader" && i.direction === 1 ? p = "attributed-scroll-to-bottom" : i.kind === "foreign" && i.direction === 1 ? p = "unattributed-scroll-to-bottom" : u ? p = "content-shrink-at-bottom" : h && (p = "idle-at-bottom"), e.isReady && n && p !== void 0 ? {
        atBottom: n,
        attribution: i,
        event: {
            kind: "pin-requested",
            reason: p
        }
    } : {
        atBottom: n,
        attribution: i,
        event: {
            kind: "neutral",
            reason: e.isReady ? i.kind === "programmatic" ? "programmatic-scroll" : n ? "near-bottom" : "unqualified-observation" : "not-ready"
        }
    };
}
function k7h(e, t) {
    switch(t.kind){
        case "release-requested":
            return e.kind === "pinned" ? {
                state: {
                    kind: "released"
                },
                reason: {
                    kind: "released",
                    reason: t.reason
                }
            } : {
                state: e,
                reason: {
                    kind: "retained",
                    reason: "already-released"
                }
            };
        case "pin-requested":
            return e.kind === "released" ? {
                state: {
                    kind: "pinned"
                },
                reason: {
                    kind: "pinned",
                    reason: t.reason
                }
            } : {
                state: e,
                reason: {
                    kind: "retained",
                    reason: "already-pinned"
                }
            };
        case "neutral":
            return {
                state: e,
                reason: {
                    kind: "retained",
                    reason: t.reason
                }
            };
        default:
            {
                const n = t;
                throw new TypeError(`unknown bottom pin event ${JSON.stringify(n)}`);
            }
    }
}
function Nrr(e) {
    if (!Number.isFinite(e) || e < 0) throw new RangeError(`driftPx requires a finite non-negative number, got ${e}`);
    return e;
}
function qg_(e) {
    return Frr(e, "CommitId");
}
function T7h(e) {
    return Frr(e, "MeasurementOrder");
}
function zg_(e) {
    return Frr(e, "NavigationId");
}
function Frr(e, t) {
    if (!Number.isSafeInteger(e) || e < 0 || e >= Number.MAX_SAFE_INTEGER) throw new RangeError(`${t} cannot advance from ${e}`);
    return e + 1;
}
function $rr(e) {
    const t = new Map;
    for(let n = 0; n < e.length; n++){
        const i = e[n];
        if (i !== void 0) {
            if (t.has(i.rowId)) throw D7h(i.rowId, n);
            t.set(i.rowId, n);
        }
    }
    return {
        derivation: {
            kind: "fresh"
        },
        depth: 0,
        indexOf: (n)=>t.get(n)
    };
}
function R7h(e, t, { prev: n, next: i }) {
    if (ef_(t, n, i)) return e.derivation.kind === "shared" ? e : {
        ...e,
        derivation: {
            kind: "shared"
        }
    };
    if (e.depth >= M7h || t.insertedCount * 4 > i.length) return $rr(i);
    const { at: r, removedCount: s, insertedCount: o } = t, a = new Map;
    for(let l = r; l < r + o; l++){
        const u = i[l];
        if (u === void 0) continue;
        const h = e.indexOf(u.rowId);
        if (a.has(u.rowId) || h !== void 0 && (h < r || h >= r + s)) throw D7h(u.rowId, l);
        a.set(u.rowId, l);
    }
    const c = o - s;
    return {
        derivation: {
            kind: "spliced",
            at: r,
            removedCount: s,
            insertedCount: o
        },
        depth: e.depth + 1,
        indexOf: (l)=>{
            const u = a.get(l);
            if (u !== void 0) return u;
            const h = e.indexOf(l);
            return h === void 0 || h < r ? h : h < r + s ? void 0 : h + c;
        }
    };
}
function ef_(e, t, n) {
    if (e.removedCount !== e.insertedCount) return !1;
    for(let i = e.at; i < e.at + e.insertedCount; i++)if (t[i]?.rowId !== n[i]?.rowId) return !1;
    return !0;
}
function D7h(e, t) {
    return new RangeError(`duplicate rowId "${e}" at index ${t}`);
}
function P7h(e) {
    const t = if_(e.part.policy);
    if (t !== void 0 && e.measurementOrder <= t) return {
        kind: "rejected",
        reason: "stale-order",
        part: e.part,
        latestMeasurementOrder: t
    };
    const n = vhe(e.measuredPx), i = e.measuredPx - e.part.committedPx, r = rf_(e.part.policy, e.measurementOrder), s = {
        ...e.part,
        policy: r
    };
    if (Math.abs(i) <= e.tolerancePx) return {
        kind: "ignored",
        reason: "within-tolerance",
        part: s
    };
    if (i < 0 && e.shrinkPolicy.kind === "blocked-placeholder") return {
        kind: "ignored",
        reason: "placeholder-shrink",
        part: s
    };
    switch(e.part.policy.kind){
        case "settled-uncorrected":
            return {
                kind: "applied",
                part: {
                    ...e.part,
                    committedPx: n,
                    policy: {
                        kind: "settled-corrected",
                        measurementOrder: e.measurementOrder,
                        lateGrowth: e.part.policy.lateGrowth
                    }
                }
            };
        case "settled-corrected":
            return e.part.policy.lateGrowth === "admit" && i > 0 ? {
                kind: "applied",
                part: {
                    ...e.part,
                    committedPx: n,
                    policy: {
                        kind: "settled-corrected",
                        measurementOrder: e.measurementOrder,
                        lateGrowth: "admit"
                    }
                }
            } : {
                kind: "rejected",
                reason: "settled-oscillation",
                part: s,
                latestMeasurementOrder: e.measurementOrder
            };
        case "monotonic-streaming":
            return e.part.policy.hasAdmittedSample && i < 0 ? {
                kind: "ignored",
                reason: "streaming-shrink",
                part: s
            } : {
                kind: "applied",
                part: {
                    ...e.part,
                    policy: {
                        kind: "monotonic-streaming",
                        observation: dLo(e.measurementOrder),
                        hasAdmittedSample: !0
                    },
                    committedPx: n
                }
            };
        default:
            {
                const o = e.part.policy;
                throw new TypeError(`unknown measured part policy ${JSON.stringify(o)}`);
            }
    }
}
function if_(e) {
    switch(e.kind){
        case "settled-uncorrected":
        case "monotonic-streaming":
            return e.observation.kind === "observed" ? e.observation.measurementOrder : void 0;
        case "settled-corrected":
            return e.measurementOrder;
        default:
            {
                const t = e;
                throw new TypeError(`unknown measured part policy ${JSON.stringify(t)}`);
            }
    }
}
function rf_(e, t) {
    switch(e.kind){
        case "settled-uncorrected":
            return {
                kind: "settled-uncorrected",
                observation: dLo(t),
                lateGrowth: e.lateGrowth
            };
        case "settled-corrected":
            return {
                kind: "settled-corrected",
                measurementOrder: t,
                lateGrowth: e.lateGrowth
            };
        case "monotonic-streaming":
            return {
                kind: "monotonic-streaming",
                observation: dLo(t),
                hasAdmittedSample: e.hasAdmittedSample
            };
        default:
            {
                const n = e;
                throw new TypeError(`unknown measured part policy ${JSON.stringify(n)}`);
            }
    }
}
function dLo(e) {
    return {
        kind: "observed",
        measurementOrder: e
    };
}
function N7h(e) {
    return !e.isGenerating && !e.isPinnedBottom && (e.isUserPointerDown || e.msSinceUserScrollInput <= e.userInputWindowMs);
}
function F7h(e) {
    let t = Uzt;
    for (const n of e)t = Orr(t, O7h(n));
    return t;
}
function mLo(e, t) {
    const n = new Set;
    for (const i of e){
        if (n.has(i.partId)) throw new RangeError(`row "${t}" has duplicate partId "${i.partId}"`);
        n.add(i.partId);
    }
}
function lf_(e, t, n, i) {
    const r = G7h(e, t, n, i, n.scrollTopPx);
    return i.releaseHeldShrinkAtCommittedBox === !0 ? uf_(r, e, t, n, i) : r;
}
function uf_(e, t, n, i, r) {
    let s = e;
    for(let o = 0; o < e$h; o += 1){
        const a = s.scroll?.targetScrollTopPx;
        if (a === void 0 || s.scroll?.motion !== "instant" || a >= i.scrollTopPx - vL || !s.held.some((l)=>l.reason === "above-fold-during-motion")) return s;
        const c = G7h(t, n, i, r, a);
        if (c.held.length === s.held.length) return s;
        s = c;
    }
    return s;
}
function G7h(e, t, n, i, r) {
    const s = [], o = [];
    let a = e.epoch;
    const c = $zt(e.rows, i.gapPx), l = new J7h(e.rows, c, i.gapPx);
    let u, h, p;
    const g = [
        ...t.filter(($)=>$.kind === "epoch-change"),
        ...t.filter(($)=>$.kind !== "epoch-change")
    ];
    for (const $ of g)switch($.kind){
        case "epoch-change":
            {
                a = $.next, u = Wrr(u, "epoch-change");
                break;
            }
        case "rows-replaced":
            {
                if ($.epochId !== a.id) {
                    s.push({
                        proposal: $,
                        reason: "awaiting-epoch"
                    });
                    break;
                }
                const W = l.current(), G = Urr({
                    prev: W,
                    next: $.rows
                }), q = W.slice(0, G.at);
                let z = !0;
                for(let X = G.at; X < G.at + G.insertedCount; X++){
                    const Y = $.rows[X];
                    if (Y === void 0) continue;
                    const Z = gf_(Y, l.lookup(Y.rowId)?.row, a.id);
                    z &&= Z.heightPx === vLo(Z), q.push(Z);
                }
                for(let X = G.at + G.removedCount; X < W.length; X++){
                    const Y = W[X];
                    Y !== void 0 && q.push(Y);
                }
                l.replace(q, z), u = Wrr(u, $.cause);
                break;
            }
        case "content-revision":
            {
                const W = ff_(l, $, a.id);
                W.kind === "held" ? s.push({
                    proposal: $,
                    reason: W.reason
                }) : u = Wrr(u, $.cause);
                break;
            }
        case "measured-verification":
            {
                const W = l.lookup($.rowId), G = W?.row;
                if (G !== void 0 && G.epochId !== $.epochId) {
                    s.push({
                        proposal: $,
                        reason: "awaiting-epoch"
                    });
                    break;
                }
                if (p?.mutationCount !== l.mutationCount && (p = {
                    mutationCount: l.mutationCount,
                    state: hf_(e, n, i, l.currentTotalSizePx())
                }), df_({
                    prev: e,
                    row: G,
                    proposal: $,
                    input: n,
                    config: i,
                    isPinnedBottom: p.state.kind === "pinned",
                    holdTopPx: r
                })) {
                    s.push({
                        proposal: $,
                        reason: "above-fold-during-motion"
                    });
                    break;
                }
                const q = vf_(l, W, $, i.driftTolerancePx);
                switch(q.kind){
                    case "unchanged":
                        break;
                    case "applied":
                        u = Wrr(u, "measured-verification");
                        break;
                    case "defect":
                        o.push(q.defect);
                        break;
                    default:
                        {
                            const z = q;
                            throw new TypeError(`unknown measurement result ${JSON.stringify(z)}`);
                        }
                }
                break;
            }
        case "scroll-intent":
            {
                h = $;
                break;
            }
    }
    const f = l.finalRows(), v = $zt(f, i.gapPx, {
        derivedFrom: l.positionsSharedWith
    }), b = Math.max(0, v.totalSizePx - n.viewportHeightPx), y = Math.max(0, c.totalSizePx - e.viewport.viewportHeightPx), T = Math.max(0, n.bottomOverscrollPx ?? 0), E = b + T;
    let A = e.viewport.mode, R, D = !1, P = !1;
    if (h !== void 0) switch(h.target.kind){
        case "bottom":
            P = !0, A = {
                kind: "pinned-bottom"
            }, R = {
                targetScrollTopPx: b,
                reason: h.cause,
                motion: "instant"
            };
            break;
        case "row":
            {
                const $ = v.offsetOf(h.target.rowId);
                $ === void 0 ? s.push({
                    proposal: h,
                    reason: "stale-revision"
                }) : (P = !0, A = {
                    kind: "anchored",
                    rowId: h.target.rowId,
                    edgeOffsetPx: h.target.edgeOffsetPx
                }, R = {
                    targetScrollTopPx: v7e({
                        value: $ - h.target.edgeOffsetPx,
                        min: 0,
                        max: b
                    }),
                    reason: h.cause,
                    motion: "instant"
                });
                break;
            }
        case "offset":
            P = !0, A = h.target.arrivalMode, R = {
                targetScrollTopPx: v7e({
                    value: h.target.scrollTopPx,
                    min: 0,
                    max: b
                }),
                reason: h.cause,
                motion: "instant"
            };
            break;
        default:
            {
                const $ = h.target;
                throw new TypeError(`unknown geometry scroll target ${JSON.stringify($)}`);
            }
    }
    R?.reason === "restore" && n.navigation.kind === "in-flight" && (R = void 0);
    let N;
    if (R === void 0 && !P) {
        const $ = S7h({
            isReady: !0,
            isScrolling: n.trigger === "scroll-observation",
            clampedOffset: v7e({
                value: n.scrollTopPx,
                min: 0,
                max: b
            }),
            lastObservedScrollOffset: v7e({
                value: e.viewport.scrollTopPx,
                min: 0,
                max: y
            }),
            totalHeight: v.totalSizePx,
            lastObservedTotalHeight: c.totalSizePx,
            viewportHeight: n.viewportHeightPx,
            lastObservedViewportHeight: e.viewport.viewportHeightPx,
            isProgrammaticScrollActive: n.isProgrammaticScrollActive,
            nearBottomThresholdPx: i.nearBottomThresholdPx,
            msSinceUserScrollInput: n.msSinceUserScrollInput,
            userInputWindowMs: i.userInputWindowMs,
            isUserPointerDown: n.isUserPointerDown,
            userInput: n.userInput,
            allowAutomaticRelatch: q7h(e.viewport.mode, n.navigation)
        }), W = k7h(z7h(e.viewport.mode), $.event);
        if (N = {
            kind: "resolved",
            modeBefore: e.viewport.mode.kind,
            modeAfter: W.state.kind === "pinned" ? "pinned-bottom" : "free",
            transitionReason: `${W.reason.kind}:${W.reason.reason}`,
            atBottom: $.atBottom,
            distanceFromBottomPx: v.totalSizePx - n.scrollTopPx - n.viewportHeightPx,
            isScrolling: n.trigger === "scroll-observation",
            msSinceUserScrollInput: n.msSinceUserScrollInput,
            isProgrammaticScrollActive: n.isProgrammaticScrollActive,
            attribution: $.attribution
        }, W.state.kind === "pinned") {
            let G = Math.min(pf_(e.viewport.mode), T);
            if ($.attribution.kind === "reader") {
                const ee = n.scrollTopPx - b;
                G = ee >= vL ? Math.min(ee, T) : 0;
            }
            A = G > 0 ? {
                kind: "pinned-bottom",
                overscrollDepthPx: G
            } : {
                kind: "pinned-bottom"
            };
            const q = b + G, z = n.isProgrammaticScrollActive && u === void 0, X = q - n.scrollTopPx, Y = n.scrollTopPx - q, Z = n.msSinceUserScrollInput <= i.userInputWindowMs && n.userInput.kind !== "undirected" && n.userInput.direction === -1, K = n.isUserPointerDown && n.follow.kind === "interrupted" && u === void 0, J = Z || K, ne = n.follow.kind !== "suspended" && n.navigation.kind === "idle" && !z && (X >= vL || Y >= vL);
            if (D = ne && J, ne && !J) {
                const ee = q - n.scrollTopPx, se = u ?? (n.follow.kind === "interrupted" ? Q7h : void 0), re = n.streamingFollowEligible && se !== void 0 && Z7h.has(se) && ee > vL && ee <= n.viewportHeightPx ? "smooth" : "instant";
                R = {
                    targetScrollTopPx: q,
                    reason: se ?? "stream-delta",
                    motion: re
                };
            }
        } else {
            const G = _f_({
                prev: e,
                prevIndex: c,
                nextIndex: v,
                nextRows: f,
                input: n,
                maxScrollTop: b,
                dominantCause: u,
                config: i,
                epochChanged: a.id !== e.epoch.id
            });
            A = G.mode, R = G.scroll;
        }
    }
    const O = l.heightWrites(), F = R?.motion === "smooth" ? v7e({
        value: n.scrollTopPx,
        min: 0,
        max: E
    }) : R?.targetScrollTopPx ?? v7e({
        value: n.scrollTopPx,
        min: 0,
        max: E
    });
    return {
        next: {
            commitId: qg_(e.commitId),
            epoch: a,
            rows: f,
            indexOf: v.indexOf,
            offsetOf: v.offsetOf,
            totalSizePx: v.totalSizePx,
            viewport: {
                mode: A,
                scrollTopPx: F,
                viewportHeightPx: n.viewportHeightPx
            }
        },
        rowHeightWrites: O,
        scroll: R,
        held: s,
        followAwaitsQuietInput: D,
        defects: o,
        pinResolution: N ?? {
            kind: "skipped",
            modeBefore: e.viewport.mode.kind,
            modeAfter: A.kind,
            transitionReason: "skipped:prior-scroll-write",
            atBottom: v.totalSizePx - n.scrollTopPx - n.viewportHeightPx <= i.nearBottomThresholdPx,
            distanceFromBottomPx: v.totalSizePx - n.scrollTopPx - n.viewportHeightPx,
            isScrolling: n.trigger === "scroll-observation",
            msSinceUserScrollInput: n.msSinceUserScrollInput,
            isProgrammaticScrollActive: n.isProgrammaticScrollActive
        }
    };
}
function df_(e) {
    if (!N7h({
        isGenerating: e.input.isGenerating,
        isPinnedBottom: e.isPinnedBottom,
        isUserPointerDown: e.input.isUserPointerDown,
        msSinceUserScrollInput: e.input.msSinceUserScrollInput,
        userInputWindowMs: e.config.userInputWindowMs
    })) return !1;
    const t = e.row;
    if (t === void 0 || t.revision !== e.proposal.revision || t.epochId !== e.proposal.epochId) return !1;
    const n = t.parts.find((h)=>h.partId === e.proposal.partId);
    if (n?.kind !== "measured") return !1;
    const i = P7h({
        part: n,
        measuredPx: e.proposal.measuredPx,
        measurementOrder: e.proposal.measurementOrder,
        tolerancePx: e.config.driftTolerancePx,
        shrinkPolicy: t.presentation === "placeholder" ? {
            kind: "blocked-placeholder"
        } : {
            kind: "allowed"
        }
    });
    if (i.kind !== "applied") return !1;
    const r = e.prev.indexOf(e.proposal.rowId), s = r === void 0 ? void 0 : e.prev.rows[r], o = e.prev.offsetOf(e.proposal.rowId), a = s?.parts.find((h)=>h.partId === e.proposal.partId);
    if (s === void 0 || o === void 0 || a?.kind !== "measured") return !1;
    const c = o + s.heightPx, l = c + i.part.committedPx - a.committedPx;
    return (e.config.releaseHeldShrinkAtCommittedBox === !0 && V7h(e.input, e.config) <= 0 ? Math.max(c, l) : l) <= e.holdTopPx + vL;
}
function V7h(e, t) {
    return t.releaseHeldShrinkAtCommittedBox === !0 && e.userInput.kind === "scroll" ? e.userInput.direction : e.userScrollDir;
}
function j7h(e, t) {
    const n = V7h(e, t);
    return n > 0 && e.userScrollDir <= 0 ? e.userScrollDir : n;
}
function q7h(e, t) {
    return e.kind !== "anchored" && t.kind === "idle";
}
function hf_(e, t, n, i) {
    const r = Math.max(0, i - t.viewportHeightPx), s = v7e({
        value: t.scrollTopPx,
        min: 0,
        max: r
    }), o = v7e({
        value: e.viewport.scrollTopPx,
        min: 0,
        max: Math.max(0, e.totalSizePx - e.viewport.viewportHeightPx)
    }), a = S7h({
        isReady: !0,
        isScrolling: t.trigger === "scroll-observation",
        clampedOffset: s,
        lastObservedScrollOffset: o,
        totalHeight: i,
        lastObservedTotalHeight: e.totalSizePx,
        viewportHeight: t.viewportHeightPx,
        lastObservedViewportHeight: e.viewport.viewportHeightPx,
        isProgrammaticScrollActive: t.isProgrammaticScrollActive,
        nearBottomThresholdPx: n.nearBottomThresholdPx,
        msSinceUserScrollInput: t.msSinceUserScrollInput,
        userInputWindowMs: n.userInputWindowMs,
        isUserPointerDown: t.isUserPointerDown,
        userInput: t.userInput,
        allowAutomaticRelatch: q7h(e.viewport.mode, t.navigation)
    });
    return k7h(z7h(e.viewport.mode), a.event).state;
}
function pf_(e) {
    return e.kind === "pinned-bottom" ? e.overscrollDepthPx ?? 0 : 0;
}
function z7h(e) {
    return e.kind === "pinned-bottom" ? {
        kind: "pinned"
    } : {
        kind: "released"
    };
}
function mf_(e) {
    const t = $7h(e.seeds.map((i)=>_Lo(i, e.epoch.id))), n = $zt(t, e.gapPx);
    return {
        commitId: E7h,
        epoch: e.epoch,
        rows: t,
        indexOf: n.indexOf,
        offsetOf: n.offsetOf,
        totalSizePx: n.totalSizePx,
        viewport: {
            mode: e.mode,
            scrollTopPx: e.scrollTopPx,
            viewportHeightPx: e.viewportHeightPx
        }
    };
}
function _Lo(e, t) {
    return mLo(e.parts, e.rowId), {
        rowId: e.rowId,
        kind: e.kind,
        revision: e.revision,
        epochId: t,
        parts: e.parts,
        heightPx: Uzt,
        presentation: e.presentation,
        gapAfterPx: e.gapAfterPx
    };
}
function gf_(e, t, n) {
    return t !== void 0 && t.revision === e.revision ? t.epochId === n && t.parts === e.parts ? t : K7h({
        ..._Lo(e, n),
        parts: Y7h(t.parts, e.parts)
    }) : K7h(_Lo(e, n));
}
function K7h(e) {
    const t = vLo(e);
    return t === void 0 || t === e.heightPx ? e : {
        ...e,
        heightPx: t
    };
}
function ff_(e, t, n) {
    if (t.epochId !== n) return {
        kind: "held",
        reason: "awaiting-epoch"
    };
    mLo(t.parts, t.rowId);
    const i = e.lookup(t.rowId);
    if (i === void 0) return {
        kind: "held",
        reason: "stale-revision"
    };
    const { index: r, row: s } = i;
    if (t.revision < s.revision) return {
        kind: "held",
        reason: "stale-revision"
    };
    const o = s.epochId !== t.epochId;
    return t.revision === s.revision && t.parts === s.parts && t.presentation === s.presentation && t.gapAfterPx === s.gapAfterPx && !o ? {
        kind: "applied"
    } : t.revision === s.revision && !o ? {
        kind: "held",
        reason: "stale-revision"
    } : (e.write(r, {
        ...s,
        revision: t.revision,
        epochId: n,
        parts: o && t.revision === s.revision ? Y7h(s.parts, t.parts) : t.parts,
        presentation: t.presentation,
        gapAfterPx: t.gapAfterPx
    }), {
        kind: "applied"
    });
}
function Y7h(e, t) {
    let n = !1;
    const i = t.map((r)=>{
        if (r.kind !== "measured") return r;
        const s = e.find((o)=>o.partId === r.partId);
        return s === void 0 || s.kind !== "measured" || s.committedPx === r.committedPx ? r : (n = !0, {
            ...r,
            committedPx: s.committedPx
        });
    });
    return n ? i : t;
}
function vf_(e, t, n, i) {
    if (t === void 0) return {
        kind: "unchanged"
    };
    const { index: r, row: s } = t;
    if (s.revision !== n.revision || s.epochId !== n.epochId) return {
        kind: "unchanged"
    };
    const o = s.parts.findIndex((l)=>l.partId === n.partId), a = o < 0 ? void 0 : s.parts[o];
    if (a === void 0) return {
        kind: "unchanged"
    };
    if (a.kind !== "measured") {
        if (a.kind === "sibling-remainder") return {
            kind: "unchanged"
        };
        const l = a.kind === "chrome" || a.kind === "text" ? a.heightPx : F7h([
            a
        ]), u = n.measuredPx - l;
        return Math.abs(u) <= i ? {
            kind: "unchanged"
        } : {
            kind: "defect",
            defect: {
                kind: "prediction-miss",
                rowId: s.rowId,
                rowKind: s.kind,
                tier: a.kind === "text" ? "computed" : "declared",
                deltaPx: u
            }
        };
    }
    const c = P7h({
        part: a,
        measuredPx: n.measuredPx,
        measurementOrder: n.measurementOrder,
        tolerancePx: i,
        shrinkPolicy: s.presentation === "placeholder" ? {
            kind: "blocked-placeholder"
        } : {
            kind: "allowed"
        }
    });
    switch(c.kind){
        case "applied":
            return bLo(e, r, s, o, c.part), {
                kind: "applied"
            };
        case "ignored":
            return bLo(e, r, s, o, c.part), {
                kind: "unchanged"
            };
        case "rejected":
            return c.reason === "stale-order" ? {
                kind: "defect",
                defect: {
                    kind: "stale-measurement-rejected",
                    rowId: s.rowId,
                    measurementOrder: n.measurementOrder,
                    latestMeasurementOrder: c.latestMeasurementOrder
                }
            } : (bLo(e, r, s, o, c.part), {
                kind: "defect",
                defect: {
                    kind: "oscillation-terminated",
                    rowId: s.rowId,
                    rejectedPx: n.measuredPx
                }
            });
        default:
            {
                const l = c;
                throw new TypeError(`unknown measured admission ${JSON.stringify(l)}`);
            }
    }
}
function bLo(e, t, n, i, r) {
    if (n.parts[i] === r) return;
    const s = [
        ...n.parts
    ];
    s[i] = r, e.write(t, {
        ...n,
        parts: s
    });
}
function _f_({ prev: e, prevIndex: t, nextIndex: n, nextRows: i, input: r, maxScrollTop: s, dominantCause: o, config: a, epochChanged: c }) {
    const l = r.trigger === "scroll-observation" && !r.isProgrammaticScrollActive || r.isUserPointerDown || r.msSinceUserScrollInput <= a.userInputWindowMs, u = a.anchorFollowsReader === !0 && l && r.navigation.kind === "idle" && r.userInput.kind !== "zoom" && !c && r.viewportHeightPx === e.viewport.viewportHeightPx, h = yf_(e, t, r, u ? j7h(r, a) : 0, a), p = h === void 0 || a.anchorFallsToSurvivingRow !== !0 ? h : bf_(e, t, i, n, r, h, a);
    if (p === void 0) return {
        mode: {
            kind: "free",
            lastUserDirection: r.userScrollDir
        }
    };
    const g = t.offsetOf(p), f = (g ?? 0) - r.scrollTopPx, v = e.viewport.mode.kind === "anchored" && e.viewport.mode.rowId === p ? e.viewport.mode.edgeOffsetPx : f, b = r.navigation.kind === "idle" && !l && Math.abs(v - f) >= vL, y = X7h(e, i, n, p, a), T = Wg_({
        anchor: g === void 0 ? void 0 : {
            mode: b ? "preserve-once" : "read",
            edge: "top",
            rowIndex: t.indexOf(p) ?? 0,
            stableIdentity: p,
            rowKey: p,
            bubbleId: void 0,
            collapseStableKey: p,
            edgeOffset: g,
            viewportOffsetPx: v
        },
        resolvedOffset: y === void 0 ? void 0 : n.offsetAt(y),
        liveScrollTop: r.scrollTopPx,
        maxScrollTop: s,
        initReady: !0,
        pinnedFollowing: !1,
        isStreaming: r.isGenerating,
        isUserScrolling: l,
        userScrollDir: j7h(r, a)
    });
    if (y === void 0) return {
        mode: {
            kind: "free",
            lastUserDirection: r.userScrollDir
        }
    };
    const E = i[y]?.rowId ?? p, A = T.kind !== "skip" && T.anchorDisposition === "rebase-read" ? n.offsetAt(y) - (T.kind === "adjust" ? T.targetScrollTop : r.scrollTopPx) : b ? v : f, R = {
        kind: "anchored",
        rowId: E,
        edgeOffsetPx: A
    }, D = b ? "restore" : o ?? "measured-verification";
    if (T.kind === "adjust") return {
        mode: R,
        scroll: {
            targetScrollTopPx: T.targetScrollTop,
            reason: D,
            motion: "instant"
        }
    };
    if (T.kind === "skip" && T.reason === "streaming-hold") {
        if (g !== void 0) {
            const P = n.offsetAt(y) - g;
            if (Math.abs(P) >= vL) return {
                mode: R,
                scroll: {
                    targetScrollTopPx: v7e({
                        value: r.scrollTopPx + P,
                        min: 0,
                        max: s
                    }),
                    reason: D,
                    motion: "instant"
                }
            };
        }
        return {
            mode: R
        };
    }
    return {
        mode: R
    };
}
function X7h(e, t, n, i, r) {
    const s = n.indexOf(i);
    if (s !== void 0) return s;
    const o = r.identityOf;
    if (o === void 0) return;
    const a = e.rows.findIndex((l)=>l.rowId === i);
    if (a < 0) return;
    const c = e.rows[a];
    if (c !== void 0) return b7h({
        anchor: {
            mode: "read",
            edge: "top",
            rowIndex: a,
            ...o(c),
            bubbleId: o(c).bubbleIds[0],
            edgeOffset: 0,
            viewportOffsetPx: 0
        },
        rows: t.map((l)=>o(l))
    });
}
function bf_(e, t, n, i, r, s, o) {
    if (X7h(e, n, i, s, o) !== void 0) return s;
    const a = r.scrollTopPx + r.viewportHeightPx;
    for(let c = (t.indexOf(s) ?? t.rowCount) + 1; c < t.rowCount && t.offsetAt(c) < a; c++){
        const l = e.rows[c];
        if (l !== void 0 && o.identityOf?.(l).anchorable !== !1 && i.indexOf(l.rowId) !== void 0) return l.rowId;
    }
    return s;
}
function yf_(e, t, n, i, r) {
    const s = (g)=>{
        const f = e.rows[g];
        return f === void 0 || r.identityOf?.(f).anchorable !== !1;
    }, o = (g, f)=>{
        let v = g;
        for(; !s(v) && v + f >= 0 && v + f < t.rowCount;)v += f;
        return e.rows[v]?.rowId;
    }, a = (g)=>g >= n.scrollTopPx - vL && g <= n.scrollTopPx + n.viewportHeightPx - vL, c = e.viewport.mode.kind === "anchored";
    if (e.viewport.mode.kind === "anchored") {
        const g = e.viewport.mode.rowId, f = t.offsetOf(g), v = t.indexOf(g);
        if (f !== void 0 && v !== void 0 && s(v) && (i === 0 || a(f))) return g;
    }
    if (t.rowCount === 0) return;
    const l = c ? i : 0, u = n.scrollTopPx + n.viewportHeightPx;
    if (l < 0) {
        const g = t.indexAtOffset(u - vL);
        return g < 0 ? void 0 : o(g, -1);
    }
    const h = n.scrollTopPx;
    let p = t.indexAtOffset(h + vL);
    if (!(p < 0)) {
        for(; p < t.rowCount - 1 && t.offsetAt(p) + t.heightAt(p) <= h + vL;)p++;
        return l > 0 && p < t.rowCount - 1 && t.offsetAt(p) < h - vL && t.offsetAt(p + 1) < u - vL && p++, o(p, 1);
    }
}
function Wrr(e, t) {
    return e === void 0 || yLo[t] > yLo[e] ? t : e;
}
function v7e(e) {
    return Math.min(e.max, Math.max(e.min, e.value));
}
function kf_(e) {
    const t = e.stickyIndexes.length - 1;
    for(let n = t; n >= 0; n--){
        const i = e.stickyIndexes[n];
        if (i === void 0) continue;
        const r = e.getMeasurementStart(i);
        if (r === void 0) continue;
        const s = e.allowBottomPinnedStickySlack && e.viewportMode.kind === "pinned-bottom" && n === t ? Math.max(e.epsilonPx, e.getMeasurementSize(i) ?? 0) : e.epsilonPx;
        if (r <= e.scrollTop + s) return i;
    }
}
function n$h(e) {
    return e.viewportHeight <= 0 || e.rowHeight < e.viewportHeight;
}
function wf_(e) {
    const t = e.nextStartPx ?? e.totalSizePx;
    return Math.max(0, t - e.startPx);
}
function Cf_(e, t, n) {
    if (e.rowCount === 0) return {
        rows: [],
        firstIndex: -1,
        lastIndex: -1,
        totalSizePx: e.totalSizePx
    };
    if (n.viewportHeightPx < 0) throw new RangeError(`viewportHeightPx must be non-negative, got ${n.viewportHeightPx}`);
    const i = n.overscanPx;
    if (i !== void 0 && (Number.isNaN(i) || i < 0)) throw new RangeError(`overscanPx must be non-negative, got ${i}`);
    const r = Math.max(0, Math.floor(n.overscanRows)), s = Math.max(0, n.scrollTopPx), o = s + n.viewportHeightPx, a = (A)=>{
        const R = e.offsetAt(A);
        return R < o && R + e.heightAt(A) > s;
    };
    let c = e.indexAtOffset(s);
    for(; c < e.rowCount - 1 && e.offsetAt(c) + e.heightAt(c) <= s;)c++;
    let l = c;
    for(; l < e.rowCount - 1 && e.offsetAt(l + 1) < o;)l++;
    const u = a(c);
    let h = -1, p = -1;
    if (u) if (h = c, p = l, i === void 0) r > 0 && (h = Math.max(0, c - r), p = Math.min(e.rowCount - 1, l + r));
    else {
        for(; h > 0 && c - h < r && s - e.offsetAt(h) < i;)h--;
        for(; p < e.rowCount - 1 && p - l < r && e.offsetAt(p) + e.heightAt(p) - o < i;)p++;
    }
    const g = new Set;
    if (u) for(let A = h; A <= p; A++)g.add(A);
    for (const A of n.forcedIndices ?? [])A >= 0 && A < e.rowCount && g.add(A);
    let f, v = [];
    if (n.sticky?.kind === "active") f = e.indexOf(n.sticky.rowId), f !== void 0 && (v = [
        f
    ]);
    else if (n.sticky?.kind === "candidates") {
        v = [
            ...new Set(n.sticky.rowIds.flatMap((R)=>{
                const D = e.indexOf(R);
                return D === void 0 ? [] : [
                    D
                ];
            }))
        ].sort((R, D)=>R - D);
        const A = kf_({
            stickyIndexes: v,
            getMeasurementStart: (R)=>e.offsetAt(R),
            getMeasurementSize: (R)=>e.heightAt(R),
            scrollTop: s,
            epsilonPx: n.sticky.activationEpsilonPx,
            viewportMode: n.viewportMode,
            allowBottomPinnedStickySlack: n.sticky.allowBottomPinnedStickySlack
        });
        A !== void 0 && n$h({
            rowHeight: e.heightAt(A),
            viewportHeight: n.viewportHeightPx
        }) && (f = A);
    }
    let b;
    f !== void 0 && (g.add(f), b = {
        rowId: t(f),
        index: f
    });
    const y = new Map;
    for(let A = 0; A < v.length; A++){
        const R = v[A];
        if (R === void 0 || !n$h({
            rowHeight: e.heightAt(R),
            viewportHeight: n.viewportHeightPx
        })) continue;
        const D = v[A + 1];
        y.set(R, vhe(wf_({
            startPx: e.offsetAt(R),
            nextStartPx: D === void 0 ? void 0 : e.offsetAt(D),
            totalSizePx: e.totalSizePx
        })));
    }
    return {
        rows: [
            ...g
        ].sort((A, R)=>A - R).map((A)=>({
                rowId: t(A),
                index: A,
                topPx: e.offsetAt(A),
                heightPx: e.heightAt(A),
                stickyBoundaryHeightPx: y.get(A)
            })),
        firstIndex: h,
        lastIndex: p,
        totalSizePx: e.totalSizePx,
        stickyOverlay: b
    };
}
function Bf_(e, t, n, i) {
    t !== null && v$h(t, e);
    for (const [r, s] of n)_$h(e, r, s, i);
}
function v$h(e, t) {
    const n = `${t.totalSizePx}px`;
    e.style.height !== n && (e.style.height = n);
}
function _$h(e, t, n, i) {
    const r = e.rows.find((l)=>l.rowId === t);
    if (r === void 0) return;
    const s = r.stickyBoundaryHeightPx !== void 0;
    if (!s && !i.has(n)) {
        const l = `translateY(${r.topPx}px)`;
        n.style.transform !== l && (n.style.transform = l);
        return;
    }
    s ? i.add(n) : i.delete(n);
    const o = s ? `${r.topPx}px` : "", a = s ? "" : `translateY(${r.topPx}px)`, c = s ? `${r.stickyBoundaryHeightPx}px` : "";
    n.style.top !== o && (n.style.top = o), n.style.transform !== a && (n.style.transform = a), n.style.height !== c && (n.style.height = c);
}
function q0t(e, t) {
    switch(t.kind){
        case "input":
            {
                const n = f7h(t.input), i = n === 0 ? b$h(e) : n;
                return e.kind === "pointer-held" ? {
                    kind: "pointer-held",
                    lastInputAtMs: t.atMs,
                    direction: i,
                    input: t.input
                } : {
                    kind: "recent",
                    lastInputAtMs: t.atMs,
                    direction: i,
                    input: t.input
                };
            }
        case "pointer-down":
            return {
                kind: "pointer-held",
                lastInputAtMs: t.atMs,
                direction: b$h(e),
                input: iLo
            };
        case "pointer-up":
            return e.kind === "pointer-held" ? {
                kind: "recent",
                lastInputAtMs: e.lastInputAtMs,
                direction: e.direction,
                input: e.input
            } : e;
        case "scroll-direction":
            switch(e.kind){
                case "idle":
                    return e;
                case "recent":
                    return {
                        ...e,
                        direction: t.direction
                    };
                case "pointer-held":
                    return {
                        ...e,
                        direction: t.direction
                    };
                default:
                    {
                        const n = e;
                        throw new TypeError(`unknown user input state ${JSON.stringify(n)}`);
                    }
            }
        case "time-observed":
            return e.kind === "recent" && t.nowMs - e.lastInputAtMs > t.inputWindowMs ? {
                kind: "idle"
            } : e;
        case "reset":
            return {
                kind: "idle"
            };
        default:
            {
                const n = t;
                throw new TypeError(`unknown user input event ${JSON.stringify(n)}`);
            }
    }
}
function $f_(e) {
    const t = q0t(e.state, {
        kind: "time-observed",
        nowMs: e.nowMs,
        inputWindowMs: e.inputWindowMs
    });
    switch(t.kind){
        case "idle":
            return {
                state: t,
                msSinceUserInput: v7h,
                direction: 0,
                input: iLo,
                isPointerHeld: !1
            };
        case "recent":
            return {
                state: t,
                msSinceUserInput: Math.max(0, e.nowMs - t.lastInputAtMs),
                direction: t.direction,
                input: t.input,
                isPointerHeld: !1
            };
        case "pointer-held":
            return {
                state: t,
                msSinceUserInput: Math.max(0, e.nowMs - t.lastInputAtMs),
                direction: t.direction,
                input: t.input,
                isPointerHeld: !0
            };
        default:
            {
                const n = t;
                throw new TypeError(`unknown user input state ${JSON.stringify(n)}`);
            }
    }
}
function Hf_(e, t) {
    switch(t.kind){
        case "bound-correction-requested":
            return {
                kind: "awaiting-observation",
                targetScrollTopPx: t.targetScrollTopPx
            };
        case "unbound-correction-requested":
            return {
                kind: "pending-bind",
                targetScrollTopPx: t.targetScrollTopPx
            };
        case "write-applied":
            return e.kind === "idle" ? e : {
                kind: "awaiting-observation",
                targetScrollTopPx: t.observedScrollTopPx
            };
        case "write-skipped":
            return {
                kind: "idle"
            };
        case "clamp-observed":
            return {
                kind: "awaiting-observation",
                targetScrollTopPx: t.observedScrollTopPx
            };
        case "scroll-observed":
            return e.kind === "pending-bind" ? e : {
                kind: "idle"
            };
        case "user-input":
            return e.kind === "awaiting-observation" ? e : {
                kind: "idle"
            };
        case "element-unbound":
            return e.kind === "awaiting-observation" ? {
                kind: "pending-bind",
                targetScrollTopPx: e.targetScrollTopPx
            } : e;
        default:
            {
                const n = t;
                throw new TypeError(`unknown programmatic scroll event ${JSON.stringify(n)}`);
            }
    }
}
function Wf_(e, t) {
    return e.kind === "awaiting-observation" && e.targetScrollTopPx === t;
}
function b$h(e) {
    return e.kind === "idle" ? 0 : e.direction;
}
function Gf_(e, t, n) {
    const i = e.scroll;
    if (i === void 0 || i.motion === "smooth" === t) return e.next;
    const r = t ? n : i.targetScrollTopPx;
    return {
        ...e.next,
        viewport: {
            ...e.next.viewport,
            scrollTopPx: r
        }
    };
}
function jf_(e) {
    switch(e){
        case "scroll":
            return "scroll-observation";
        case "observer":
        case "options":
        case "layout":
        case "input":
        case "deadline":
        case "input-quiet":
        case "held-replay":
        case "navigation":
            return "state-change";
        default:
            {
                const t = e;
                throw new TypeError(`unknown publish source ${JSON.stringify(t)}`);
            }
    }
}
function qf_(e) {
    const t = jf_(e.source), n = e.followState.kind === "active" && (e.source === "input-quiet" || e.followOwedAtQuietInput);
    return {
        ...e.facts,
        trigger: t,
        isProgrammaticScrollActive: e.programmaticMotionActive || t === "scroll-observation" && e.offsetMatchesProgrammaticWrite,
        follow: n ? {
            kind: "interrupted"
        } : e.followState,
        isUserPointerDown: e.userInput.isPointerHeld,
        msSinceUserScrollInput: e.userInput.msSinceUserInput,
        userScrollDir: e.userInput.direction,
        userInput: e.userInput.input
    };
}
function zf_(e, t) {
    return e.trigger === "state-change" && e.follow.kind === "interrupted" && !e.isUserPointerDown && e.msSinceUserScrollInput > t;
}
function Yf_({ hidden: e, parked: t, scrollElement: n }) {
    return e === !0 ? "park" : e !== !1 || !t || n === null ? void 0 : (typeof n.checkVisibility != "function" || n.checkVisibility()) && n.clientHeight > 0 ? "unpark" : void 0;
}
function Zf_(e) {
    if (e.defaultPrevented || e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
    const t = e.target;
    if (!(t instanceof HTMLElement && (t.isContentEditable || t.closest("input, textarea, select") !== null || Qf_(t) || e.key === " " && t.closest("button") !== null))) switch(e.key){
        case "ArrowDown":
        case "PageDown":
        case "End":
        case " ":
            return 1;
        case "ArrowUp":
        case "PageUp":
        case "Home":
            return -1;
        default:
            return;
    }
}
function Qf_(e) {
    const t = e.closest("[contenteditable]");
    return t !== null && t.getAttribute("contenteditable") !== "false";
}
function y$h(e) {
    const { sample: t, model: n, geometry: i, epoch: r } = e, s = i.indexOf(t.rowId), o = s === void 0 ? void 0 : i.rows[s];
    if (n === void 0 || !e.isCurrentSource || n.revision !== t.revision || (r.kind === "incoming" ? r.id : i.epoch.id) !== t.epochId || o === void 0 || o.revision !== t.revision || r.kind === "committed" && o.epochId !== t.epochId) return;
    const a = o.parts.find((l)=>l.kind === "measured");
    if (a === void 0) return;
    const c = t.source.kind === "border-box" ? Nrr(Math.max(0, t.heightPx - (o.heightPx - a.committedPx))) : t.heightPx;
    return {
        kind: "measured-verification",
        rowId: o.rowId,
        partId: a.partId,
        revision: o.revision,
        epochId: t.epochId,
        measuredPx: c,
        measurementOrder: t.measurementOrder
    };
}
function ev_(e) {
    const t = [], n = [];
    for (const i of e.samples){
        const r = y$h({
            sample: i,
            model: e.models.get(i.rowId),
            geometry: e.geometry,
            isCurrentSource: e.isCurrentSource(i),
            epoch: {
                kind: "committed"
            }
        });
        r !== void 0 && (tv_(r, e.geometry, e.tolerancePx) ? n.push(r.rowId) : t.push(r));
    }
    return {
        proposals: t,
        reverified: n
    };
}
function tv_(e, t, n) {
    const i = t.indexOf(e.rowId), s = (i === void 0 ? void 0 : t.rows[i])?.parts.find((o)=>o.partId === e.partId);
    return s?.kind === "measured" && nv_(s.policy) && Math.abs(e.measuredPx - s.committedPx) <= n;
}
function nv_(e) {
    return e.kind === "settled-corrected" || e.observation.kind === "observed";
}
function iv_(e) {
    const t = [], n = new Map;
    let i = e.latestMeasurementOrder;
    for (const r of e.rowIds){
        const s = e.next.get(r), o = e.previous.get(r), a = e.measurementElements.get(r), c = s?.parts.find((h)=>h.kind === "measured");
        if (s === void 0 || o === void 0 || e.epochChanged !== !0 && s.revision <= o.revision || s.presentation === "placeholder" || a === void 0 || c === void 0) continue;
        const l = a.box === "border-box" ? s.parts.filter((h)=>h.kind !== "measured") : [];
        if (l.some((h)=>h.kind === "sibling-remainder")) continue;
        const u = e.readElementHeightPx(a.element);
        u === void 0 || u <= 0 || (i = T7h(i), n.set(r, u), t.push({
            kind: "measured-verification",
            rowId: r,
            partId: c.partId,
            revision: s.revision,
            epochId: e.epochId,
            measuredPx: Nrr(Math.max(0, u - F7h(l))),
            measurementOrder: i
        }));
    }
    return {
        proposals: t,
        sampledHeightPx: n,
        latestMeasurementOrder: i
    };
}
function rv_(e) {
    const { source: t } = e, n = [];
    for (const a of t.kind === "surface-fold" ? t.samples : []){
        const c = y$h({
            sample: a,
            model: e.next.get(a.rowId),
            geometry: e.geometry,
            isCurrentSource: e.isCurrentSource(a),
            epoch: {
                kind: "incoming",
                id: t.epochId
            }
        });
        c !== void 0 && n.push(c);
    }
    const i = new Set(n.map((a)=>a.rowId)), r = new Set;
    let s = e.latestMeasurementOrder;
    if (e.readElementHeightPx !== void 0) {
        const a = iv_({
            previous: e.previous,
            next: e.next,
            rowIds: e.measuredRowIds.filter((c)=>!i.has(c)),
            measurementElements: e.measurementElements,
            epochId: t.epochId,
            epochChanged: t.kind === "surface-fold",
            readElementHeightPx: e.readElementHeightPx,
            latestMeasurementOrder: s
        });
        s = a.latestMeasurementOrder;
        for (const c of a.proposals)n.push(c), i.add(c.rowId);
        for (const [c, l] of a.sampledHeightPx){
            const u = e.measurementElements.get(c)?.element, h = u === void 0 ? void 0 : e.lastObservedHeightPx(u);
            h !== void 0 && Math.abs(h - l) <= e.tolerancePx && r.add(c);
        }
    }
    const o = t.kind === "host" ? e.measuredRowIds.filter((a)=>!r.has(a)) : e.measuredRowIds.filter((a)=>!i.has(a) && e.next.get(a)?.presentation !== "placeholder");
    return {
        proposals: n,
        reobserve: o,
        latestMeasurementOrder: s
    };
}
function sv_(e, t, n) {
    if (e !== void 0) for (const i of n){
        const r = t.get(i);
        r !== void 0 && (e.unobserve(r.element), e.observe(r.element));
    }
}
function ov_(e, t) {
    if (t.releaseHeldShrinkAtCommittedBox !== !0 && !t.isDue) return [];
    const n = [
        ...e.values()
    ];
    return e.clear(), n;
}
function av_(e, t) {
    const n = [], i = new Map;
    for (const r of [
        ...e,
        ...t
    ])if (r.kind === "measured-verification") {
        const s = i.get(r.rowId);
        (s === void 0 || r.measurementOrder > s.measurementOrder) && i.set(r.rowId, r);
    } else n.push(r);
    return [
        ...n,
        ...i.values()
    ];
}
function lv_(e) {
    return e.request.kind === "instant" ? {
        kind: "instant",
        target: e.request.target,
        origin: e.request.origin,
        reason: "requested"
    } : e.reducedMotion.kind === "reduce" ? {
        kind: "instant",
        target: e.request.target,
        origin: e.request.origin,
        reason: "reduced-motion"
    } : e.request;
}
function uv_(e) {
    switch(e.target.kind){
        case "bottom":
            return Wzt({
                snapshot: e.snapshot,
                destination: {
                    kind: "bottom"
                }
            });
        case "row":
            {
                const t = S$h(e.snapshot, e.target.rowId);
                if (t === void 0) return k$h(e.target.rowId);
                if (e.target.align !== "nearest") return Wzt({
                    snapshot: e.snapshot,
                    destination: {
                        kind: "row-aligned",
                        rowId: e.target.rowId,
                        align: e.target.align,
                        offsetPx: e.target.offsetPx
                    }
                });
                const n = e.snapshot.viewport.scrollTopPx, i = n + e.snapshot.viewport.viewportHeightPx, r = t.topPx + t.heightPx;
                return t.topPx >= n && r <= i || t.topPx <= n && r >= i ? Wzt({
                    snapshot: e.snapshot,
                    destination: {
                        kind: "row-edge",
                        rowId: e.target.rowId,
                        edgeOffsetPx: t.topPx - n
                    }
                }) : Wzt({
                    snapshot: e.snapshot,
                    destination: {
                        kind: "row-aligned",
                        rowId: e.target.rowId,
                        align: r > i ? "end" : "start",
                        offsetPx: e.target.offsetPx
                    }
                });
            }
        case "offset":
            return Wzt({
                snapshot: e.snapshot,
                destination: {
                    kind: "offset",
                    scrollTopPx: e.target.scrollTopPx,
                    lastUserDirection: pv_(e.snapshot.viewport.scrollTopPx, e.target.scrollTopPx)
                }
            });
        default:
            {
                const t = e.target;
                throw new TypeError(`unknown navigation target ${JSON.stringify(t)}`);
            }
    }
}
function Wzt(e) {
    const t = hv_(e.snapshot);
    switch(e.destination.kind){
        case "bottom":
            {
                const n = {
                    kind: "bottom"
                };
                return {
                    kind: "resolved",
                    resolved: {
                        destination: e.destination,
                        targetScrollTopPx: t,
                        arrivalTarget: n
                    }
                };
            }
        case "row-aligned":
        case "row-edge":
            {
                const n = S$h(e.snapshot, e.destination.rowId);
                if (n === void 0) return k$h(e.destination.rowId);
                const i = e.destination.kind === "row-edge" ? n.topPx - e.destination.edgeOffsetPx : dv_({
                    rowTopPx: n.topPx,
                    rowHeightPx: n.heightPx,
                    viewportHeightPx: e.snapshot.viewport.viewportHeightPx,
                    align: e.destination.align,
                    offsetPx: e.destination.offsetPx
                }), r = w$h({
                    value: i,
                    min: 0,
                    max: t
                }), s = {
                    kind: "row",
                    rowId: e.destination.rowId,
                    edgeOffsetPx: n.topPx - r
                };
                return {
                    kind: "resolved",
                    resolved: {
                        destination: e.destination,
                        targetScrollTopPx: r,
                        arrivalTarget: s
                    }
                };
            }
        case "offset":
            {
                const n = w$h({
                    value: e.destination.scrollTopPx,
                    min: 0,
                    max: t
                }), i = {
                    kind: "offset",
                    scrollTopPx: e.destination.scrollTopPx,
                    arrivalMode: {
                        kind: "free",
                        lastUserDirection: e.destination.lastUserDirection
                    }
                };
                return {
                    kind: "resolved",
                    resolved: {
                        destination: e.destination,
                        targetScrollTopPx: n,
                        arrivalTarget: i
                    }
                };
            }
        default:
            {
                const n = e.destination;
                throw new TypeError(`unknown navigation destination ${JSON.stringify(n)}`);
            }
    }
}
function S$h(e, t) {
    const n = e.indexOf(t), i = n === void 0 ? void 0 : e.rows[n], r = e.offsetOf(t);
    return i === void 0 || r === void 0 ? void 0 : {
        topPx: r,
        heightPx: i.heightPx
    };
}
function dv_(e) {
    switch(e.align){
        case "start":
            return e.rowTopPx + e.offsetPx;
        case "center":
            return e.rowTopPx - (e.viewportHeightPx - e.rowHeightPx) / 2 + e.offsetPx;
        case "end":
            return e.rowTopPx + e.rowHeightPx - e.viewportHeightPx + e.offsetPx;
        default:
            {
                const t = e.align;
                throw new TypeError(`unknown resolved navigation alignment ${JSON.stringify(t)}`);
            }
    }
}
function hv_(e) {
    return Math.max(0, e.totalSizePx - e.viewport.viewportHeightPx);
}
function k$h(e) {
    return {
        kind: "unresolved",
        reason: "row-not-found",
        rowId: e
    };
}
function pv_(e, t) {
    return t > e ? 1 : t < e ? -1 : 0;
}
function w$h(e) {
    if (!Number.isFinite(e.value)) throw new RangeError(`navigation target must be finite, got ${e.value}`);
    return Math.min(e.max, Math.max(e.min, e.value));
}
function mv_(e) {
    const t = uv_({
        snapshot: e.snapshot,
        target: e.motion.target
    });
    return t.kind === "unresolved" ? {
        kind: "unresolved",
        resolution: t
    } : {
        kind: "started",
        state: e.motion.kind === "instant" ? {
            kind: "instant",
            navigationId: e.navigationId,
            target: e.motion.target,
            origin: e.motion.origin,
            resolvedTarget: t.resolved,
            startedAtMs: e.startedAtMs,
            reason: e.motion.reason
        } : {
            kind: "smooth",
            navigationId: e.navigationId,
            target: e.motion.target,
            origin: e.motion.origin,
            resolvedTarget: t.resolved,
            startedAtMs: e.startedAtMs,
            watchdogDeadlineMs: e.startedAtMs + e.motion.watchdog.timeoutMs
        }
    };
}
function gv_(e, t) {
    return e.kind === "idle" || e.navigationId !== t.navigationId ? {
        kind: "stale",
        state: e
    } : {
        kind: "completed",
        state: {
            kind: "idle"
        },
        navigationId: t.navigationId,
        outcome: t.outcome
    };
}
function C$h(e) {
    const t = Wzt({
        snapshot: e.snapshot,
        destination: e.state.resolvedTarget.destination
    });
    return t.kind === "unresolved" ? {
        kind: "unresolved",
        resolution: t
    } : {
        kind: "retargeted",
        state: {
            ...e.state,
            resolvedTarget: t.resolved
        }
    };
}
function vv_(e) {
    return Math.max(TLo, Math.abs(e.distancePx) / Math.max(e.remainingTravelMs ?? ELo, I$h));
}
function _v_(e) {
    return {
        targetScrollTopPx: e.targetScrollTopPx,
        startScrollTopPx: e.startScrollTopPx,
        maxVelocityPxPerMs: e.pace.maxVelocityPxPerMs,
        positionPx: e.startScrollTopPx,
        landedPx: e.startScrollTopPx,
        velocityPxPerMs: 0,
        lastTickMs: e.nowMs,
        cancelFrame: ()=>{},
        cancelWatchdog: ()=>{}
    };
}
function bv_(e, t) {
    e.targetScrollTopPx = t.targetPx, e.maxVelocityPxPerMs = Math.max(e.maxVelocityPxPerMs, t.pace.maxVelocityPxPerMs);
}
function yv_(e, t, n) {
    if (t === void 0) return !1;
    const i = Math.abs(t.targetScrollTopPx - e) <= n;
    return !D$h.has(t.reason) && i;
}
function Sv_(e, t, n) {
    const i = Math.min(n, x$h), r = e.maxVelocityPxPerMs ?? TLo, s = t - e.positionPx;
    if (s === 0) return {
        positionPx: t,
        velocityPxPerMs: 0
    };
    const o = E$h, a = o * o * s - 2 * o * e.velocityPxPerMs, c = Math.sign(s), l = Math.max(-r, Math.min(r, e.velocityPxPerMs + a * i)), u = Math.max(A$h * i, R$h), h = Math.max(l * c * i, u), p = e.positionPx + c * h;
    return Math.sign(t - p) !== c ? {
        positionPx: t,
        velocityPxPerMs: 0
    } : {
        positionPx: p,
        velocityPxPerMs: i > 0 ? c * h / i : e.velocityPxPerMs
    };
}
function Cv_(e) {
    return O$h(e.rows), L$h(e.rows, $rr(e.rows), e, !1);
}
function Tv_(e) {
    return e.models.map(F$h);
}
function Ev_(e, t) {
    const n = t.held.some((i)=>i.proposal.kind === "content-revision" || i.proposal.kind === "rows-replaced");
    return n === e.geometryMayLag ? e : {
        ...e,
        geometryMayLag: n
    };
}
function xv_(e) {
    const { current: t, geometry: n, options: i } = e, r = e.viewportTopPx ?? n.viewport.scrollTopPx, s = Ov_(t.sourceRows, i.rows) ? void 0 : Av_(t, i.rows);
    if (i.config.gapPx !== t.config.gapPx) throw new RangeError("VirtualPlaneConfig.gapPx is immutable for a plane; create a new plane for a different gap");
    const o = i.epoch.id !== n.epoch.id, a = s?.models ?? t.models, c = i.overscanRows !== t.overscanRows || i.overscanPx !== t.overscanPx || !B$h(i.forcedRowIds ?? [], t.forcedRowIds) || !Fv_(i.sticky, t.sticky), l = i.isGenerating !== t.isGenerating || i.config.nearBottomThresholdPx !== t.config.nearBottomThresholdPx || i.config.userInputWindowMs !== t.config.userInputWindowMs || i.config.driftTolerancePx !== t.config.driftTolerancePx || i.config.releaseHeldShrinkAtCommittedBox !== t.config.releaseHeldShrinkAtCommittedBox || i.config.anchorFollowsReader !== t.config.anchorFollowsReader || i.config.anchorFallsToSurvivingRow !== t.config.anchorFallsToSurvivingRow, u = s === void 0 && !o && !t.geometryMayLag ? [] : Mv_({
        geometry: n,
        viewportTopPx: r,
        current: t,
        options: i,
        nextModels: a,
        epochChanged: o,
        reconciled: s
    });
    if (u.length === 0 && s?.modelChanged !== !0 && !c && !l) return {
        kind: "unchanged"
    };
    const h = L$h(a, s?.positions ?? t.positions, i, t.geometryMayLag);
    return {
        kind: "commit",
        next: h,
        proposals: u,
        identityOf: (p)=>(h.modelsById.get(p) ?? t.modelsById.get(p))?.identity,
        measuredRowsToReobserve: s === void 0 && !o ? [] : Iv_(t, h, e.registeredRowIds, o)
    };
}
function Iv_(e, t, n, i) {
    const r = [];
    for (const s of n){
        const o = t.positions.indexOf(s);
        if (o === void 0) continue;
        const a = t.models[o], c = e.modelsById.get(s);
        a?.rowId === s && c !== void 0 && (i || a.revision > c.revision) && a.parts.some((l)=>l.kind === "measured") && r.push({
            rowId: s,
            index: o
        });
    }
    return r.sort((s, o)=>s.index - o.index).map((s)=>s.rowId);
}
function P$h(e, t) {
    const n = $zt(t.rows, e.config.gapPx), i = Cf_(n, (s)=>{
        const o = t.rows[s];
        if (o === void 0) throw new RangeError(`missing geometry row at index ${s}`);
        return o.rowId;
    }, {
        scrollTopPx: t.viewport.scrollTopPx,
        viewportHeightPx: t.viewport.viewportHeightPx,
        viewportMode: t.viewport.mode,
        overscanRows: e.overscanRows,
        overscanPx: e.overscanPx,
        forcedIndices: e.forcedRowIds.flatMap((s)=>{
            const o = t.indexOf(s);
            return o === void 0 ? [] : [
                o
            ];
        }),
        sticky: e.sticky
    }), r = i.rows.map((s)=>{
        const o = e.modelsById.get(s.rowId);
        if (o === void 0) throw new RangeError(`missing virtual row model for "${s.rowId}"`);
        return {
            ...s,
            model: o
        };
    });
    return {
        geometry: t,
        window: i,
        rows: r,
        totalSizePx: i.totalSizePx
    };
}
function Av_(e, t) {
    const n = Urr({
        prev: e.sourceRows,
        next: t
    }), { at: i, removedCount: r, insertedCount: s } = n, o = e.models.slice(i, i + r), a = new Map(o.map((h)=>[
            h.rowId,
            h
        ])), c = t.slice(i, i + s);
    O$h(c, a, e.modelsById), Nv_(a, c);
    const l = c.map((h)=>{
        const p = a.get(h.rowId);
        return p?.revision === h.revision ? p : h;
    }), u = [
        ...e.models.slice(0, i),
        ...l,
        ...e.models.slice(i + r)
    ];
    return {
        splice: n,
        models: u,
        positions: R7h(e.positions, n, {
            prev: e.models,
            next: u
        }),
        structureChanged: r !== s || l.some((h, p)=>h.rowId !== o[p]?.rowId || h.kind !== o[p]?.kind),
        modelChanged: r !== s || l.some((h, p)=>h !== o[p])
    };
}
function L$h(e, t, n, i) {
    return {
        sourceRows: n.rows,
        geometryMayLag: i,
        models: e,
        positions: t,
        modelsById: Rv_(e, t),
        config: n.config,
        overscanRows: n.overscanRows,
        overscanPx: n.overscanPx,
        isGenerating: n.isGenerating,
        forcedRowIds: n.forcedRowIds ?? [],
        sticky: n.sticky
    };
}
function Rv_(e, t) {
    const n = (i)=>{
        const r = t.indexOf(i), s = r === void 0 ? void 0 : e[r];
        return s?.rowId === i ? s : void 0;
    };
    return {
        get: n,
        has: (i)=>n(i) !== void 0
    };
}
function Dv_(e, t, n, i, r) {
    const s = Math.min(n.length, i.length);
    let o = 0;
    for(; o < s && n[o]?.rowId === i[o]?.rowId && n[o]?.kind === i[o]?.kind;)o++;
    const a = n[o];
    if (a === void 0) return r;
    const c = e.offsetOf(a.rowId);
    return c !== void 0 && c >= t ? r : "structure-change";
}
function Mv_(e) {
    const { geometry: t, current: n, options: i, nextModels: r, reconciled: s } = e, o = [];
    if (e.epochChanged && o.push({
        kind: "epoch-change",
        next: i.epoch
    }), s?.structureChanged === !0) return o.push({
        kind: "rows-replaced",
        cause: Dv_(t, e.viewportTopPx, n.models, s.models, i.revisionCause),
        epochId: i.epoch.id,
        rows: Pv_(t, n, r, s.splice, i.epoch.id)
    }), o;
    const a = s === void 0 || e.epochChanged || n.geometryMayLag, c = a ? 0 : s.splice.at, l = a ? r.length : s.splice.at + s.splice.insertedCount;
    for(let u = c; u < l; u++){
        const h = r[u], p = t.rows[u];
        h === void 0 || p === void 0 || !e.epochChanged && h.revision === p.revision || o.push({
            kind: "content-revision",
            rowId: h.rowId,
            revision: h.revision,
            epochId: i.epoch.id,
            cause: i.revisionCause,
            parts: h.parts,
            presentation: h.presentation,
            gapAfterPx: h.gapAfterPx
        });
    }
    return o;
}
function Pv_(e, t, n, i, r) {
    const s = !t.geometryMayLag && e.rows.length === t.models.length, o = [], a = (c)=>{
        const l = t.models[c];
        l !== void 0 && o.push(N$h(e, l, r, s ? e.rows[c] : void 0));
    };
    for(let c = 0; c < i.at; c++)a(c);
    for(let c = i.at; c < i.at + i.insertedCount; c++){
        const l = n[c];
        l !== void 0 && o.push(N$h(e, l, r));
    }
    for(let c = i.at + i.removedCount; c < t.models.length; c++)a(c);
    return o;
}
function N$h(e, t, n, i) {
    const r = i?.rowId === t.rowId ? i : Lv_(e, t.rowId);
    return r === void 0 || r.revision !== t.revision || r.epochId !== n ? F$h(t) : r;
}
function Lv_(e, t) {
    const n = e.indexOf(t);
    return n === void 0 ? void 0 : e.rows[n];
}
function O$h(e, t, n) {
    const i = new Set;
    for (const r of e){
        if (i.has(r.rowId) || n?.has(r.rowId) === !0 && !t?.has(r.rowId)) throw new RangeError(`duplicate virtual rowId "${r.rowId}"`);
        if (i.add(r.rowId), t?.get(r.rowId)?.revision === r.revision) continue;
        mLo(r.parts, r.rowId);
        const s = r.parts.filter((o)=>o.kind === "measured").length;
        if (s > 1) throw new RangeError(`row "${r.rowId}" has ${s} measured parts; one row observer cannot disambiguate them`);
    }
}
function Nv_(e, t) {
    for (const n of t){
        const i = e.get(n.rowId);
        if (i !== void 0 && n.revision < i.revision) throw new RangeError(`row "${n.rowId}" revision moved backward from ${i.revision} to ${n.revision}`);
        if (i !== void 0 && n.kind !== i.kind && n.revision === i.revision) throw new RangeError(`row "${n.rowId}" changed kind without advancing revision ${n.revision}`);
        if (i !== void 0 && n.gapAfterPx !== i.gapAfterPx && n.revision === i.revision) throw new RangeError(`row "${n.rowId}" changed gapAfterPx without advancing revision ${n.revision}`);
    }
}
function F$h(e) {
    return {
        rowId: e.rowId,
        kind: e.kind,
        revision: e.revision,
        parts: e.parts,
        presentation: e.presentation,
        gapAfterPx: e.gapAfterPx
    };
}
function Ov_(e, t) {
    if (e === t) return !0;
    if (e.length !== t.length) return !1;
    for(let n = 0; n < t.length; n++)if (t[n] !== e[n]) return !1;
    return !0;
}
function B$h(e, t) {
    return e.length === t.length && e.every((n, i)=>n === t[i]);
}
function Fv_(e, t) {
    return e === void 0 || t === void 0 ? e === t : e.kind !== t.kind ? !1 : e.kind === "active" && t.kind === "active" ? e.rowId === t.rowId : e.kind === "candidates" && t.kind === "candidates" ? B$h(e.rowIds, t.rowIds) && e.activationEpsilonPx === t.activationEpsilonPx && e.allowBottomPinnedStickySlack === t.allowBottomPinnedStickySlack : !1;
}
var ILo, _7e, U$h;
export { $f_, $rr, Av_, B$h, Bf_, C$h, Cf_, Cv_, D7h, Dv_, Ev_, F$h, F7h, Frr, Fv_, G7h, Gf_, Gg_, Hf_, ILo, Iv_, K7h, L$h, Lv_, Mv_, N$h, N7h, Nrr, Nv_, O$h, Ov_, P$h, P7h, Pv_, Qf_, R7h, Rv_, S$h, S7h, Sv_, T7h, Tv_, U$h, V7h, Vg_, Wf_, Wg_, Wrr, Wzt, X7h, Y7h, Yf_, Zf_, _$h, _7e, _7h, _Lo, _f_, _v_, av_, b$h, b7h, bLo, bf_, bv_, dLo, df_, dv_, ef_, ev_, f7h, ff_, gf_, gv_, hf_, hv_, if_, iv_, j7h, jf_, jg_, k$h, k7h, kf_, lf_, lv_, mLo, mf_, mv_, n$h, nv_, ov_, pf_, pv_, q0t, q7h, qf_, qg_, rf_, rv_, sv_, tv_, uf_, uv_, v$h, v7e, vf_, vv_, w$h, wf_, xv_, y$h, y7h, yf_, yv_, z7h, zf_, zg_ };
var __wakaru_Uv__initialized = false;
export function Uv_() {
if (__wakaru_Uv__initialized) return;
__wakaru_Uv__initialized = true;
"use strict";
x(), gbe(), hLo(), t$h(), Lrr(), Uf_(), Vf_(), Kf_(), Xf_(), Jf_(), cv_(), fv_(), kv_(), wv_(), Bv_(), ILo = 128, _7e = new WeakMap, U$h = class {
    constructor(e, t){
        this.environment = t, this.listeners = new Set, this.outerElements = new Map, this.outerRowIdsByElement = new Map, this.boundaryStyledElements = new WeakSet, this.measurementElements = new Map, this.measurementRowIdsByElement = new Map, this.rowRefs = new Map, this.splitRowRefs = new Map, this.pendingMeasurements = new Map, this.heldMeasurements = new Map, this.mounted = !1, this.replanAfterRemount = !1, this.lifecycleGeneration = 0, this.lastObservedHeightPx = new WeakMap, this.observerDrainScheduled = !1, this.viewportResizePending = !1, this.surfaceHidden = !1, this.scrollElement = null, this.planeElement = null, this.listenersElement = null, this.pointerDocument = null, this.userInputState = {
            kind: "idle"
        }, this.scrollInputCount = 0, this.programmaticScrollState = {
            kind: "idle"
        }, this.programmaticScrollGeneration = 0, this.activeNavigationState = {
            kind: "idle"
        }, this.latestNavigationId = I7h, this.followFrameOwedAtQuietInput = !1, this.correctionWriteState = {
            kind: "idle"
        }, this.isScrolling = !1, this.followState = {
            kind: "active"
        }, this.streamingFollowEligible = !1, this.bottomOverscrollPx = 0, this.latestMeasurementOrder = x7h, this.pinTrace = [], this.subscribe = (i)=>(this.listeners.add(i), ()=>{
                this.listeners.delete(i);
            }), this.getSnapshot = ()=>this.snapshot, this.getDebugState = ()=>({
                lastPlan: this.lastPlan,
                heldProposals: [
                    ...this.heldMeasurements.values()
                ].map((i)=>({
                        proposal: i,
                        reason: "above-fold-during-motion"
                    })),
                defects: this.lastPlan?.defects ?? [],
                pinTrace: [
                    ...this.pinTrace
                ],
                bottomPinState: this.snapshot.geometry.viewport.mode.kind === "pinned-bottom" ? {
                    kind: "pinned"
                } : {
                    kind: "released"
                },
                userInputState: this.userInputState,
                programmaticScrollState: this.programmaticScrollState,
                activeNavigationState: this.activeNavigationState,
                latestNavigationCompletion: this.latestNavigationCompletion,
                followState: this.followState
            }), this.getInteractionState = ()=>{
            const i = this.observeUserInput(this.environment.now());
            return {
                isScrolling: this.isScrolling,
                isUserInputActive: i.state.kind !== "idle",
                scrollInputCount: this.scrollInputCount,
                direction: i.direction,
                bottomPin: this.snapshot.geometry.viewport.mode.kind === "pinned-bottom" ? {
                    kind: "pinned"
                } : {
                    kind: "released"
                },
                follow: this.followState,
                navigation: this.activeNavigationState
            };
        }, this.scrollElementRef = (i)=>{
            i !== this.scrollElement && (i !== null && this.assertScrollElementAvailable(i), this.detachScrollElement(), this.scrollElement = i, i !== null && (_7e.set(i, this), this.applyPendingBoundCorrection(), this.mounted && (this.attachScrollElement(), this.syncViewport())));
        }, this.planeElementRef = (i)=>{
            if (i !== this.planeElement) {
                if (this.planeElement = i, i === null) {
                    this.cancelFollowUnlessNavigating(), this.reduceProgrammaticScroll({
                        kind: "element-unbound"
                    });
                    return;
                }
                v$h(i, this.snapshot), this.scrollTopShadow = void 0, this.applyPendingBoundCorrection();
            }
        }, this.setBottomOverscrollPx = (i)=>{
            const r = Number.isFinite(i) ? Math.max(0, i) : 0;
            r !== this.bottomOverscrollPx && (this.bottomOverscrollPx = r);
        }, this.handleResizeObservations = (i)=>{
            for (const s of i)this.lastObservedHeightPx.set(s.target, s.heightPx);
            if (!this.mounted) return;
            const r = i.find((s)=>s.target === this.scrollElement);
            if (r !== void 0) if (r.heightPx <= 0) this.noteSurfaceHidden();
            else {
                this.surfaceHidden && this.latestOptions.surfaceHidden !== !0 && this.restoreViewportAfterSurfaceShown(), this.viewportResizePending = !0, this.invalidateViewportShadow();
                const s = this.latestOptions.readContentWidthPx;
                s !== void 0 && this.scrollElement !== null && this.readWidthEpoch.observe(s(this.scrollElement));
            }
            for (const s of i){
                if (s.target === this.scrollElement || this.surfaceHidden) continue;
                const o = this.measurementRowIdsByElement.get(s.target), a = o === void 0 ? void 0 : this.measurementElements.get(o);
                o === void 0 || a === void 0 || a.element !== s.target || this.enqueueMeasurement(o, Nrr(Math.max(0, s.heightPx)), {
                    kind: a.box,
                    element: a.element
                });
            }
            this.scheduleObserverDrain();
        }, this.handleScroll = ()=>{
            const i = this.readLiveScrollTop();
            if (this.surfaceHidden) return;
            if (this.correctionWriteState.kind === "writing") {
                this.correctionWriteState.echoObserved = !0;
                return;
            }
            this.nativeFollow !== void 0 && Math.abs(i - this.nativeFollow.targetScrollTopPx) < vL && (this.nativeFollow = void 0);
            const s = this.readLiveViewportHeight(), o = !this.isScrolling && this.programmaticScrollState.kind === "awaiting-observation" && i === this.programmaticScrollState.targetScrollTopPx;
            this.userInputState.kind === "pointer-held" && (this.scrollInputCount += 1), o || (this.isScrolling = !0, this.scheduleScrollIdle());
            const a = this.snapshot.geometry.viewport.scrollTopPx, c = i - a;
            if (c !== 0 && (this.userInputState = q0t(this.userInputState, {
                kind: "scroll-direction",
                direction: c > 0 ? 1 : -1
            })), i === a && s === this.snapshot.geometry.viewport.viewportHeightPx) {
                this.reduceProgrammaticScroll({
                    kind: "scroll-observed"
                }), this.syncNavigationPacer();
                return;
            }
            const l = this.programmaticScrollGeneration;
            this.commitFrame([], "scroll"), this.programmaticScrollGeneration === l && this.reduceProgrammaticScroll({
                kind: "scroll-observed"
            });
        }, this.handleScrollEnd = ()=>{
            this.isScrolling = !1, this.cancelScrollIdle(), this.publishInteractionChange(), this.activeNavigationState.kind === "smooth" && this.syncNavigationPacer();
        }, this.handleWheel = (i)=>{
            const r = i.deltaY > 0 ? 1 : i.deltaY < 0 ? -1 : 0;
            this.recordPinTrace({
                kind: "input",
                atMs: this.environment.now(),
                input: "wheel",
                direction: r,
                deltaY: i.deltaY,
                deltaMode: i.deltaMode
            }), this.recordUserInput(r, i.ctrlKey ? "zoom" : "scroll");
        }, this.handleKeyDown = (i)=>{
            const r = Zf_(i);
            r !== void 0 && (this.recordPinTrace({
                kind: "input",
                atMs: this.environment.now(),
                input: "keydown",
                direction: r
            }), this.recordUserInput(r, "scroll"));
        }, this.handlePointerDown = ()=>{
            this.recordPinTrace({
                kind: "input",
                atMs: this.environment.now(),
                input: "pointer-down",
                direction: 0
            }), this.userInputState = q0t(this.userInputState, {
                kind: "pointer-down",
                atMs: this.environment.now()
            }), this.cancelSmoothFollowUnderInput(this.yieldToUserInput(0)), this.scheduleHeldReplay(), this.publishInteractionChange();
        }, this.handlePointerUp = ()=>{
            if (this.userInputState.kind !== "pointer-held") return;
            this.userInputState = q0t(this.userInputState, {
                kind: "pointer-up"
            });
            const i = this.createFrameInput("input");
            if (this.heldMeasurements.size > 0 && this.shouldReplayHeld(i)) {
                this.commitFrame([], "input");
                return;
            }
            this.scheduleHeldReplay();
        }, this.modelState = Cv_(e), this.latestOptions = e, this.readWidthEpoch = new M$h(e.epoch), this.streamingFollowEligible = e.streamingFollowEligible ?? !1;
        const n = mf_({
            epoch: e.epoch,
            seeds: Tv_(this.modelState),
            scrollTopPx: e.initialViewport.scrollTopPx,
            viewportHeightPx: e.initialViewport.viewportHeightPx,
            mode: e.initialViewport.mode,
            gapPx: e.config.gapPx
        });
        this.snapshot = P$h(this.modelState, n), this.reduceProgrammaticScroll({
            kind: "unbound-correction-requested",
            targetScrollTopPx: e.initialViewport.scrollTopPx
        });
    }
    mount() {
        if (!this.mounted) {
            this.scrollElement !== null && this.assertScrollElementAvailable(this.scrollElement), this.mounted = !0, this.lifecycleGeneration += 1, this.ensureResizeObserver();
            for (const e of this.measurementElements.values())this.resizeObserver?.observe(e.element);
            this.attachScrollElement(), this.syncViewport(), this.replanAfterRemount && (this.replanAfterRemount = !1, this.commitFrame([], "options")), this.scheduleHeldReplay(), this.pendingMeasurements.size > 0 && this.scheduleObserverDrain();
        }
    }
    unmount() {
        this.mounted && (this.replanAfterRemount = this.replanAfterRemount || this.activeNavigationState.kind !== "idle" || this.followState.kind !== "active", this.mounted = !1, this.lifecycleGeneration += 1, this.disposeActiveNavigation(), this.followState = {
            kind: "active"
        }, this.userInputState = q0t(this.userInputState, {
            kind: "reset"
        }), this.isScrolling = !1, this.detachScrollElement(), this.resizeObserver?.disconnect(), this.pendingMeasurements.clear(), this.viewportResizePending = !1, this.readWidthEpoch.release(), this.observerDrainScheduled = !1, this.cancelHeldReplay(), this.cancelScrollIdle());
    }
    updateOptions(e) {
        this.updateOptionsInternal(e);
    }
    updateOptionsInternal(e) {
        const t = this.readWidthEpoch.forHost(e, this.snapshot.geometry.epoch);
        this.latestOptions = t;
        const n = Yf_({
            hidden: t.surfaceHidden,
            parked: this.surfaceHidden,
            scrollElement: this.scrollElement
        });
        n === "park" ? this.noteSurfaceHidden() : n === "unpark" && this.restoreViewportAfterSurfaceShown();
        const i = t.followState !== void 0 && t.followState.kind !== this.followState.kind;
        i && t.followState?.kind === "suspended" && this.cancelFollowUnlessNavigating(), t.followState !== void 0 && (this.followState = t.followState), this.streamingFollowEligible = t.streamingFollowEligible ?? !1;
        const r = this.prepareOptionUpdate(t);
        if (r.kind === "unchanged") {
            i && this.followState.kind === "active" && this.commitFrame([], "options");
            return;
        }
        this.commitOptionUpdate(r, {
            kind: "host",
            epochId: t.epoch.id
        });
    }
    prepareOptionUpdate(e) {
        return xv_({
            current: this.modelState,
            geometry: this.snapshot.geometry,
            options: e,
            viewportTopPx: this.smoothFollow?.startScrollTopPx ?? this.nativeFollow?.startScrollTopPx,
            registeredRowIds: new Set([
                ...this.outerElements.keys(),
                ...this.measurementElements.keys()
            ])
        });
    }
    commitOptionUpdate(e, t) {
        const n = rv_({
            source: t,
            geometry: this.snapshot.geometry,
            previous: this.modelState.modelsById,
            next: e.next.modelsById,
            measuredRowIds: e.measuredRowsToReobserve,
            isCurrentSource: (r)=>this.isCurrentMeasurementSource(r),
            measurementElements: this.measurementElements,
            readElementHeightPx: this.surfaceHidden ? void 0 : this.environment.readElementHeightPx,
            lastObservedHeightPx: (r)=>this.lastObservedHeightPx.get(r),
            tolerancePx: this.modelState.config.driftTolerancePx,
            latestMeasurementOrder: this.latestMeasurementOrder
        });
        this.latestMeasurementOrder = n.latestMeasurementOrder, this.modelState = e.next, this.pruneRowState(), this.pruneHeldMeasurements();
        const i = this.commitFrame([
            ...e.proposals,
            ...n.proposals
        ], t.kind === "host" ? "options" : "observer", e.identityOf);
        this.modelState = Ev_(this.modelState, i), this.reobserveMeasuredRows(n.reobserve);
    }
    syncViewport() {
        if (this.scrollElement === null) return;
        const t = this.readFrameScrollTop(), n = this.readTrackedViewportHeight();
        if (n <= 0 || Math.abs(t - this.snapshot.geometry.viewport.scrollTopPx) < vL && n === this.snapshot.geometry.viewport.viewportHeightPx) return;
        const i = this.layoutSyncedViewportInput;
        i !== void 0 && Math.abs(t - i.scrollTopPx) < vL && n === i.viewportHeightPx || (this.layoutSyncedViewportInput = {
            scrollTopPx: t,
            viewportHeightPx: n
        }, this.commitFrame([], "layout"));
    }
    getRowRef(e) {
        const t = this.rowRefs.get(e);
        if (t !== void 0) return t;
        const n = (i)=>{
            if (i === null) {
                this.setMeasurementElement(e, null, "border-box"), this.setOuterElement(e, null);
                return;
            }
            this.setOuterElement(e, i), this.setMeasurementElement(e, i, "border-box");
        };
        return this.rowRefs.set(e, n), n;
    }
    getRowRefs(e) {
        const t = this.splitRowRefs.get(e);
        if (t !== void 0) return t;
        const n = {
            outerRef: (i)=>{
                this.setOuterElement(e, i);
            },
            measurementRef: (i)=>{
                this.setMeasurementElement(e, i, "measured-part");
            }
        };
        return this.splitRowRefs.set(e, n), n;
    }
    reportMeasurement(e, t) {
        if (!this.mounted || this.surfaceHidden) return !1;
        const n = this.enqueueMeasurement(e, Nrr(t), {
            kind: "reported"
        });
        return n && this.scheduleObserverDrain(), n;
    }
    navigate(e) {
        const t = zg_(this.latestNavigationId), n = mv_({
            navigationId: t,
            motion: lv_({
                request: e,
                reducedMotion: this.environment.reducedMotion()
            }),
            snapshot: this.snapshot.geometry,
            startedAtMs: this.environment.now()
        });
        if (n.kind === "unresolved") return n;
        const i = this.activeNavigationState;
        return i.kind !== "idle" && this.completeNavigation(i.navigationId, {
            kind: "replaced",
            replacementNavigationId: t
        }, {
            kind: "none"
        }), this.cancelSmoothFollow(), this.latestNavigationId = t, this.activeNavigationState = n.state, n.state.kind === "instant" ? (this.completeNavigation(n.state.navigationId, n.state.reason === "reduced-motion" ? {
            kind: "reduced-motion"
        } : {
            kind: "target-reached"
        }, {
            kind: "semantic-target"
        }), n) : this.isNavigationTargetReached(n.state) ? (this.completeNavigation(n.state.navigationId, {
            kind: "target-reached"
        }, {
            kind: "semantic-target"
        }), n) : (n.state.target.kind !== "bottom" && this.snapshot.geometry.viewport.mode.kind === "pinned-bottom" && this.releaseBottomPinForNavigationAway(n.state), this.publishInteractionChange(), this.scheduleNavigationWatchdog(n.state), this.syncNavigationPacer(), n);
    }
    releaseBottomPinForNavigationAway(e) {
        const t = this.readLiveScrollTop();
        this.commitFrame([
            {
                kind: "scroll-intent",
                cause: "user-navigation",
                target: this.freeOffsetTarget(t, e.resolvedTarget.targetScrollTopPx < t ? -1 : 1)
            }
        ], "navigation");
    }
    writeUserInputProxyOffset(e) {
        const t = this.readLiveScrollTop(), n = this.clampScrollTop(e), i = n > t ? 1 : n < t ? -1 : 0;
        this.recordUserInput(i, "scroll"), this.scrollElement !== null && (this.scrollElement.scrollTop = n, this.scrollTopShadow = this.scrollElement.scrollTop), this.commitFrame([
            {
                kind: "scroll-intent",
                cause: "user-navigation",
                target: this.freeOffsetTarget(n, i)
            }
        ], "input");
    }
    scrollTo(e) {
        return this.activeNavigationState.kind !== "idle" ? !1 : (this.scrollInputCount += 1, this.commitScrollTarget(e, "user-navigation"));
    }
    restoreTo(e) {
        return this.commitScrollTarget(e, "restore");
    }
    commitScrollTarget(e, t) {
        return e.kind === "row" && this.snapshot.geometry.indexOf(e.rowId) === void 0 ? !1 : (this.commitFrame([
            {
                kind: "scroll-intent",
                cause: t,
                target: e
            }
        ], "options"), !0);
    }
    preserveAnchor(e) {
        if (this.activeNavigationState.kind !== "idle") return !1;
        const t = this.snapshot.geometry.offsetOf(e);
        if (t === void 0) return !1;
        const n = t - this.readFrameScrollTop();
        return this.restoreTo({
            kind: "row",
            rowId: e,
            edgeOffsetPx: n
        });
    }
    assertScrollElementAvailable(e) {
        const t = _7e.get(e);
        if (t !== void 0 && t !== this) throw new RangeError("a scroll element cannot be bound to more than one committed geometry controller");
    }
    recordPinTrace(e) {
        this.pinTrace.push(e), this.pinTrace.length > ILo && this.pinTrace.splice(0, this.pinTrace.length - ILo);
    }
    observeUserInput(e, t = !0) {
        const n = $f_({
            state: this.userInputState,
            nowMs: e,
            inputWindowMs: this.modelState.config.userInputWindowMs
        });
        return t && (this.userInputState = n.state), n;
    }
    recordUserInput(e, t) {
        const n = this.observeUserInput(this.environment.now(), !1).state.kind === "idle";
        this.userInputState = q0t(this.userInputState, {
            kind: "input",
            atMs: this.environment.now(),
            input: e === 0 ? {
                kind: "undirected"
            } : {
                kind: t,
                direction: e
            }
        }), this.cancelSmoothFollowUnderInput(this.yieldToUserInput(e)), this.scheduleHeldReplay(), n && this.publishInteractionChange();
    }
    yieldToUserInput(e) {
        this.scrollInputCount += 1, this.reduceProgrammaticScroll({
            kind: "user-input"
        });
        const t = this.activeNavigationState;
        return t.kind === "idle" ? !1 : (this.completeNavigation(t.navigationId, {
            kind: "user-cancelled"
        }, {
            kind: "observed-offset",
            direction: e
        }), !0);
    }
    completeNavigation(e, t, n) {
        const i = this.activeNavigationState;
        if (i.kind === "idle" || i.navigationId !== e) return !1;
        const r = gv_(i, {
            navigationId: e,
            outcome: t
        });
        if (r.kind === "stale") return !1;
        let s;
        switch(n.kind){
            case "semantic-target":
                {
                    const o = C$h({
                        state: i,
                        snapshot: this.snapshot.geometry
                    });
                    s = o.kind === "retargeted" ? o.state.resolvedTarget.arrivalTarget : this.freeOffsetTarget(this.readLiveScrollTop(), 0);
                    break;
                }
            case "observed-offset":
                s = this.freeOffsetTarget(this.readLiveScrollTop(), n.direction);
                break;
            case "none":
                break;
            default:
                {
                    const o = n;
                    throw new TypeError(`unknown navigation settlement ${JSON.stringify(o)}`);
                }
        }
        return this.cancelNavigationWatchdog(e), this.activeNavigationState = r.state, this.cancelSmoothFollow(), this.latestNavigationCompletion = {
            navigationId: e,
            outcome: t
        }, this.isScrolling = !1, this.cancelScrollIdle(), s !== void 0 && this.commitFrame([
            {
                kind: "scroll-intent",
                cause: "user-navigation",
                target: s
            }
        ], "navigation"), !0;
    }
    disposeActiveNavigation() {
        const e = this.activeNavigationState;
        if (e.kind === "idle") {
            this.cancelNavigationWatchdog();
            return;
        }
        this.completeNavigation(e.navigationId, {
            kind: "disposed"
        }, {
            kind: "none"
        });
    }
    scheduleNavigationWatchdog(e, t = e.watchdogDeadlineMs - e.startedAtMs) {
        this.cancelNavigationWatchdog();
        const n = e.navigationId, i = this.environment.scheduleDeadline(()=>{
            this.navigationWatchdog?.navigationId === n && (this.navigationWatchdog = void 0), this.completeNavigation(n, {
                kind: "watchdog-expired"
            }, {
                kind: "semantic-target"
            });
        }, Math.max(0, e.watchdogDeadlineMs - this.environment.now()));
        this.navigationWatchdog = {
            navigationId: n,
            timeoutMs: t,
            cancel: i
        };
    }
    extendNavigationWatchdog(e) {
        const t = this.navigationWatchdog?.timeoutMs ?? e.watchdogDeadlineMs - e.startedAtMs, n = this.environment.now() + t;
        if (n <= e.watchdogDeadlineMs) return e;
        const i = {
            ...e,
            watchdogDeadlineMs: n
        };
        return this.scheduleNavigationWatchdog(i, t), i;
    }
    cancelNavigationWatchdog(e) {
        const t = this.navigationWatchdog;
        t === void 0 || e !== void 0 && t.navigationId !== e || (t.cancel(), this.navigationWatchdog = void 0);
    }
    syncNavigationPacer() {
        const e = this.activeNavigationState;
        if (e.kind !== "smooth") return;
        const t = C$h({
            state: e,
            snapshot: this.snapshot.geometry
        });
        if (t.kind === "unresolved") {
            this.completeNavigation(e.navigationId, {
                kind: "target-unresolved"
            }, {
                kind: "observed-offset",
                direction: 0
            });
            return;
        }
        const n = this.readTrackedScrollTop(), i = t.state.resolvedTarget.targetScrollTopPx, r = this.smoothFollow, o = r !== void 0 && Math.abs(i - n) > Math.abs(r.targetScrollTopPx - r.positionPx) + Vrr ? this.extendNavigationWatchdog(t.state) : t.state;
        if (this.activeNavigationState = o, this.isNavigationTargetReached(o)) {
            this.completeNavigation(o.navigationId, {
                kind: "target-reached"
            }, {
                kind: "semantic-target"
            });
            return;
        }
        this.applySmoothFollow(i, {
            maxVelocityPxPerMs: vv_({
                distancePx: i - n,
                remainingTravelMs: o.startedAtMs + ELo - this.environment.now()
            })
        });
    }
    isNavigationTargetReached(e) {
        return Math.abs(this.readLiveScrollTop() - e.resolvedTarget.targetScrollTopPx) <= Vrr;
    }
    freeOffsetTarget(e, t) {
        return {
            kind: "offset",
            scrollTopPx: e,
            arrivalMode: {
                kind: "free",
                lastUserDirection: t
            }
        };
    }
    clampScrollTop(e) {
        if (!Number.isFinite(e)) throw new RangeError(`scroll offset must be finite, got ${e}`);
        return Math.min(Math.max(0, this.snapshot.geometry.totalSizePx - this.snapshot.geometry.viewport.viewportHeightPx), Math.max(0, e));
    }
    setOuterElement(e, t) {
        const n = this.outerElements.get(e);
        n !== t && (n !== void 0 && (this.outerRowIdsByElement.delete(n), this.outerElements.delete(e)), !(t === null || !this.modelState.modelsById.has(e)) && (this.assertRowElementAvailable(e, t), this.outerElements.set(e, t), this.outerRowIdsByElement.set(t, e), _$h(this.snapshot, e, t, this.boundaryStyledElements)));
    }
    setMeasurementElement(e, t, n) {
        const i = this.measurementElements.get(e);
        i?.element === t && i.box === n || (i !== void 0 && (this.resizeObserver?.unobserve(i.element), this.measurementRowIdsByElement.delete(i.element), this.measurementElements.delete(e)), !(t === null || !this.modelState.modelsById.has(e)) && (this.assertRowElementAvailable(e, t), this.measurementElements.set(e, {
            element: t,
            box: n
        }), this.measurementRowIdsByElement.set(t, e), this.mounted && (this.ensureResizeObserver(), this.resizeObserver?.observe(t))));
    }
    assertRowElementAvailable(e, t) {
        const n = this.outerRowIdsByElement.get(t) ?? this.measurementRowIdsByElement.get(t);
        if (n !== void 0 && n !== e) throw new RangeError(`one row element cannot register both "${n}" and "${e}"`);
    }
    reobserveMeasuredRows(e) {
        const t = this.mounted ? this.resizeObserver : void 0;
        sv_(t, this.measurementElements, e);
    }
    ensureResizeObserver() {
        this.resizeObserver ??= this.environment.createResizeObserver(this.handleResizeObservations);
    }
    enqueueMeasurement(e, t, n) {
        const i = this.modelState.modelsById.get(e);
        return i === void 0 || !i.parts.some((r)=>r.kind === "measured") ? !1 : (this.latestMeasurementOrder = T7h(this.latestMeasurementOrder), this.pendingMeasurements.set(e, {
            rowId: e,
            revision: i.revision,
            epochId: this.readWidthEpoch.current()?.id ?? this.snapshot.geometry.epoch.id,
            heightPx: t,
            measurementOrder: this.latestMeasurementOrder,
            source: n
        }), !0);
    }
    scheduleObserverDrain() {
        if (this.observerDrainScheduled) return;
        this.observerDrainScheduled = !0;
        const e = this.lifecycleGeneration;
        this.environment.queueObserverMicrotask(()=>{
            if (this.observerDrainScheduled = !1, !!this.mounted) {
                if (e !== this.lifecycleGeneration) {
                    this.scheduleObserverDrain();
                    return;
                }
                this.drainObserverBatch();
            }
        });
    }
    drainObserverBatch() {
        const e = this.viewportResizePending;
        this.viewportResizePending = !1;
        const t = [
            ...this.pendingMeasurements.values()
        ];
        this.pendingMeasurements.clear();
        const n = this.readWidthEpoch.current();
        if (n !== void 0 && n.id !== this.snapshot.geometry.epoch.id) {
            this.commitReadWidthEpoch(n, t);
            return;
        }
        const i = this.readWidthEpoch.release(), { proposals: r, reverified: s } = ev_({
            samples: t,
            models: this.modelState.modelsById,
            geometry: this.snapshot.geometry,
            isCurrentSource: (o)=>this.isCurrentMeasurementSource(o),
            tolerancePx: this.modelState.config.driftTolerancePx
        });
        for (const o of s)this.heldMeasurements.delete(o);
        r.length === 0 && !e && !i || this.commitFrame(r, "observer");
    }
    commitReadWidthEpoch(e, t) {
        this.latestOptions = {
            ...this.latestOptions,
            epoch: e
        };
        const n = this.prepareOptionUpdate(this.latestOptions);
        n.kind === "commit" && (this.readWidthEpoch.retain([
            ...this.measurementElements.keys()
        ]), this.commitOptionUpdate(n, {
            kind: "surface-fold",
            epochId: e.id,
            samples: t
        }), this.reobserveMeasuredRows(this.readWidthEpoch.keepOutsideBand(this.snapshot)));
    }
    isCurrentMeasurementSource(e) {
        if (e.source.kind === "reported") return !0;
        const t = this.measurementElements.get(e.rowId);
        return t?.element === e.source.element && t.box === e.source.kind;
    }
    commitFrame(e, t, n = (i)=>this.modelState.modelsById.get(i)?.identity) {
        t !== "layout" && (this.layoutSyncedViewportInput = void 0);
        for (const c of e)c.kind === "measured-verification" && this.heldMeasurements.delete(c.rowId);
        const i = this.createFrameInput(t), r = ov_(this.heldMeasurements, {
            releaseHeldShrinkAtCommittedBox: this.modelState.config.releaseHeldShrinkAtCommittedBox,
            isDue: t === "scroll" || this.shouldReplayHeld(i)
        }), s = av_(r, e), o = lf_(this.snapshot.geometry, s, i, this.planConfig(n));
        this.recordPinTrace({
            kind: "commit",
            atMs: this.environment.now(),
            source: t,
            scrollTopPx: i.scrollTopPx,
            resolution: o.pinResolution,
            scrollWriteTargetPx: o.scroll?.targetScrollTopPx,
            scrollWriteReason: o.scroll?.reason
        });
        for (const c of o.held)c.reason === "above-fold-during-motion" && c.proposal.kind === "measured-verification" && this.heldMeasurements.set(c.proposal.rowId, c.proposal);
        const a = ()=>{
            const c = this.scrollElement, l = this.readTrackedViewportHeight(), u = (o.scroll?.motion === "smooth" || this.nativeFollow !== void 0 && yv_(this.readTrackedScrollTop(), o.scroll, l)) && this.environment.reducedMotion().kind !== "reduce" && this.hasCorrectionWriteSurface() && c !== null && _7e.get(c) === this;
            this.snapshot = P$h(this.readWidthEpoch.withRetainedRows(this.modelState), Gf_(o, u, this.readTrackedScrollTop())), this.lastPlan = o, this.followFrameOwedAtQuietInput = o.next.viewport.mode.kind === "pinned-bottom" && (o.followAwaitsQuietInput || this.followFrameOwedAtQuietInput && !zf_(i, this.modelState.config.userInputWindowMs));
            const h = this.scrollTopShadow;
            if (Bf_(this.snapshot, this.planeElement, this.outerElements, this.boundaryStyledElements), this.invalidateShadowIfClampPossible(this.snapshot), o.scroll !== void 0) if (u) this.applyNativeFollow(o.scroll.targetScrollTopPx);
            else if (c === null || _7e.get(c) !== this || !this.hasCorrectionWriteSurface() || Math.abs(o.scroll.targetScrollTopPx - this.readTrackedScrollTop()) >= vL) this.cancelFollowUnlessNavigating(), this.applyCorrection(o.scroll.targetScrollTopPx);
            else {
                this.cancelFollowUnlessNavigating();
                const p = this.readTrackedScrollTop();
                p !== h && p !== o.scroll.targetScrollTopPx ? this.reduceProgrammaticScroll({
                    kind: "clamp-observed",
                    observedScrollTopPx: p
                }) : p === o.scroll.targetScrollTopPx && this.programmaticScrollState.kind === "awaiting-observation" && this.reduceProgrammaticScroll({
                    kind: "write-skipped"
                });
            }
            else !this.hasCorrectionWriteSurface() && this.programmaticScrollState.kind === "pending-bind" && this.reduceProgrammaticScroll({
                kind: "unbound-correction-requested",
                targetScrollTopPx: o.next.viewport.scrollTopPx
            });
            this.syncNavigationPacer();
            for (const p of [
                ...this.listeners
            ])p();
        };
        return t === "observer" ? this.environment.publishObserverUpdate(a) : a(), this.scheduleHeldReplay(), o;
    }
    applyCorrection(e) {
        this.nativeFollow = void 0;
        const t = this.readTrackedScrollTop(), n = this.scrollElement;
        if (!this.hasCorrectionWriteSurface() || n === null || _7e.get(n) !== this) {
            this.reduceProgrammaticScroll({
                kind: "unbound-correction-requested",
                targetScrollTopPx: e
            });
            return;
        }
        if (this.reduceProgrammaticScroll({
            kind: "bound-correction-requested",
            targetScrollTopPx: e
        }), t === e) {
            this.reduceProgrammaticScroll({
                kind: "write-skipped"
            });
            return;
        }
        const i = {
            kind: "writing",
            echoObserved: !1
        };
        this.correctionWriteState = i;
        try {
            n.scrollTop = e;
        } finally{
            this.correctionWriteState = {
                kind: "idle"
            };
        }
        const r = i.echoObserved ? this.readTrackedScrollTop() : n.scrollTop;
        if (this.scrollTopShadow = r, this.reduceProgrammaticScroll({
            kind: "write-applied",
            observedScrollTopPx: r
        }), i.echoObserved) {
            const s = this.programmaticScrollGeneration;
            this.commitFrame([], "scroll"), this.programmaticScrollGeneration === s && this.reduceProgrammaticScroll({
                kind: "scroll-observed"
            });
        }
    }
    applySmoothFollow(e, t) {
        const n = this.smoothFollow;
        if (n !== void 0) {
            bv_(n, {
                targetPx: e,
                pace: t
            });
            return;
        }
        if (this.scrollElement === null) {
            this.applyCorrection(e);
            return;
        }
        const i = _v_({
            targetScrollTopPx: e,
            startScrollTopPx: this.readTrackedScrollTop(),
            nowMs: this.environment.now(),
            pace: t
        });
        this.smoothFollow = i, this.scheduleSmoothFollowTick(i);
    }
    applyNativeFollow(e) {
        const t = this.scrollElement;
        if (t === null) {
            this.applyCorrection(e);
            return;
        }
        const n = this.readTrackedScrollTop();
        if (Math.abs(e - n) < vL) {
            this.nativeFollow = void 0;
            return;
        }
        this.nativeFollow?.targetScrollTopPx !== e && (this.nativeFollow = {
            startScrollTopPx: this.nativeFollow?.startScrollTopPx ?? n,
            targetScrollTopPx: e
        }, t.scrollTo({
            top: e,
            behavior: "smooth"
        }));
    }
    scheduleSmoothFollowTick(e) {
        e.cancelFrame = this.environment.requestFrame((t)=>{
            this.smoothFollow === e && this.tickSmoothFollow(e, t);
        }), this.armSmoothFollowDeadline(e);
    }
    armSmoothFollowDeadline(e) {
        e.cancelWatchdog(), e.cancelWatchdog = this.environment.scheduleDeadline(()=>{
            if (this.smoothFollow !== e) return;
            if (this.environment.isFrameClockPaused?.() !== !0) {
                this.armSmoothFollowDeadline(e);
                return;
            }
            e.cancelFrame(), this.smoothFollow = void 0;
            const t = Math.abs(e.targetScrollTopPx - this.readTrackedScrollTop()) < vL;
            if (t || this.applyCorrection(e.targetScrollTopPx), !this.completeNavigationAtClamp(e.targetScrollTopPx)) {
                if (t) {
                    this.syncNavigationPacer();
                    return;
                }
                this.commitFrame([], "deadline");
            }
        }, T$h);
    }
    tickSmoothFollow(e, t) {
        const n = Math.max(t - e.lastTickMs, 0);
        e.lastTickMs = t;
        const i = this.readTrackedScrollTop();
        Math.abs(i - e.landedPx) > xLo && (e.positionPx = i);
        const r = Sv_(e, e.targetScrollTopPx, n);
        if (e.positionPx = r.positionPx, e.velocityPxPerMs = r.velocityPxPerMs, Math.abs(e.targetScrollTopPx - e.positionPx) < xLo) {
            e.cancelWatchdog(), this.smoothFollow = void 0, this.applyCorrection(e.targetScrollTopPx), this.completeNavigationAtClamp(e.targetScrollTopPx) || this.syncNavigationPacer();
            return;
        }
        this.applyCorrection(e.positionPx), e.landedPx = this.readTrackedScrollTop(), this.scheduleSmoothFollowTick(e);
    }
    completeNavigationAtClamp(e) {
        const t = this.activeNavigationState;
        return t.kind !== "smooth" || Math.abs(this.readLiveScrollTop() - e) <= Vrr ? !1 : (this.completeNavigation(t.navigationId, {
            kind: "target-reached"
        }, {
            kind: "semantic-target"
        }), !0);
    }
    cancelSmoothFollow() {
        if (this.activeNavigationState.kind === "smooth") throw new TypeError("a paced navigation owns the spring until it completes or lands; cancel the streaming follow through cancelFollowUnlessNavigating");
        this.nativeFollow = void 0;
        const e = this.smoothFollow;
        e !== void 0 && (e.cancelFrame(), e.cancelWatchdog(), this.smoothFollow = void 0);
    }
    cancelSmoothFollowUnderInput(e) {
        this.followFrameOwedAtQuietInput ||= !e && this.nativeFollow !== void 0, this.cancelSmoothFollow();
    }
    cancelFollowUnlessNavigating() {
        this.activeNavigationState.kind !== "smooth" && this.cancelSmoothFollow();
    }
    hasCorrectionWriteSurface() {
        return !this.surfaceHidden && this.scrollElement?.isConnected === !0 && this.planeElement?.isConnected === !0;
    }
    applyPendingBoundCorrection() {
        this.programmaticScrollState.kind === "pending-bind" && this.applyCorrection(this.programmaticScrollState.targetScrollTopPx);
    }
    noteSurfaceHidden() {
        this.surfaceHidden || (this.surfaceHidden = !0, this.pendingMeasurements.clear());
    }
    restoreViewportAfterSurfaceShown() {
        if (this.surfaceHidden = !1, this.invalidateViewportShadow(), this.programmaticScrollState.kind === "pending-bind") this.applyPendingBoundCorrection();
        else {
            const e = this.snapshot.geometry.viewport.scrollTopPx;
            Math.abs(this.readLiveScrollTop() - e) >= vL && this.applyCorrection(e);
        }
        this.reobserveMeasuredRows([
            ...this.measurementElements.keys()
        ]);
    }
    createFrameInput(e) {
        const t = this.environment.now(), n = this.readFrameScrollTop(), i = this.observeUserInput(t);
        return qf_({
            source: e,
            userInput: i,
            followState: this.followState,
            followOwedAtQuietInput: this.followFrameOwedAtQuietInput,
            programmaticMotionActive: this.activeNavigationState.kind === "smooth" || this.nativeFollow !== void 0,
            offsetMatchesProgrammaticWrite: Wf_(this.programmaticScrollState, n),
            facts: {
                nowMs: t,
                scrollTopPx: n,
                viewportHeightPx: this.readTrackedViewportHeight(),
                isGenerating: this.modelState.isGenerating,
                streamingFollowEligible: this.streamingFollowEligible,
                navigation: this.activeNavigationState.kind === "idle" ? {
                    kind: "idle"
                } : {
                    kind: "in-flight"
                },
                bottomOverscrollPx: this.bottomOverscrollPx
            }
        });
    }
    planConfig(e) {
        return {
            ...this.modelState.config,
            identityOf: (t)=>{
                const n = e(t.rowId);
                if (n === void 0) throw new RangeError(`missing anchor identity for row "${t.rowId}"`);
                return n;
            }
        };
    }
    shouldReplayHeld(e) {
        return !N7h({
            isGenerating: e.isGenerating,
            isPinnedBottom: this.snapshot.geometry.viewport.mode.kind === "pinned-bottom",
            isUserPointerDown: e.isUserPointerDown,
            msSinceUserScrollInput: e.msSinceUserScrollInput,
            userInputWindowMs: this.modelState.config.userInputWindowMs
        });
    }
    scheduleHeldReplay() {
        this.cancelHeldReplay();
        const e = this.observeUserInput(this.environment.now());
        if (!this.mounted || this.heldMeasurements.size === 0 && !this.followFrameOwedAtQuietInput || e.isPointerHeld) return;
        const t = Math.max(0, this.modelState.config.userInputWindowMs - e.msSinceUserInput + 1);
        this.cancelHeldDeadline = this.environment.scheduleDeadline(()=>{
            if (this.cancelHeldDeadline = void 0, !this.mounted) return;
            const n = this.createFrameInput("held-replay");
            if (!this.shouldReplayHeld(n)) {
                this.scheduleHeldReplay();
                return;
            }
            const i = this.followFrameOwedAtQuietInput;
            this.followFrameOwedAtQuietInput = !1, this.commitFrame([], i ? "input-quiet" : "held-replay");
        }, t);
    }
    cancelHeldReplay() {
        this.cancelHeldDeadline?.(), this.cancelHeldDeadline = void 0;
    }
    scheduleScrollIdle() {
        this.cancelScrollIdle();
        const e = this.lifecycleGeneration;
        this.cancelScrollIdleDeadline = this.environment.scheduleDeadline(()=>{
            this.cancelScrollIdleDeadline = void 0, !(!this.mounted || e !== this.lifecycleGeneration || !this.isScrolling) && (this.isScrolling = !1, this.publishInteractionChange());
        }, Math.max(1, this.modelState.config.userInputWindowMs));
    }
    cancelScrollIdle() {
        this.cancelScrollIdleDeadline?.(), this.cancelScrollIdleDeadline = void 0;
    }
    reduceProgrammaticScroll(e) {
        this.programmaticScrollState = Hf_(this.programmaticScrollState, e), this.programmaticScrollGeneration += 1;
    }
    publishInteractionChange() {
        this.snapshot = {
            ...this.snapshot
        };
        for (const e of [
            ...this.listeners
        ])e();
    }
    surfaceHasBox() {
        const e = this.scrollElement;
        return e === null || typeof e.checkVisibility != "function" || e.checkVisibility();
    }
    readLiveScrollTop() {
        if (!this.surfaceHidden && !this.surfaceHasBox() && this.noteSurfaceHidden(), this.surfaceHidden) return this.scrollTopShadow ?? this.snapshot.geometry.viewport.scrollTopPx;
        const e = this.scrollElement?.scrollTop ?? this.snapshot.geometry.viewport.scrollTopPx;
        return this.scrollElement !== null && (this.scrollTopShadow = e), e;
    }
    readTrackedScrollTop() {
        return this.scrollTopShadow ?? this.readLiveScrollTop();
    }
    readLiveViewportHeight() {
        if (this.surfaceHidden) return this.viewportHeightShadow ?? this.snapshot.geometry.viewport.viewportHeightPx;
        const e = this.scrollElement?.clientHeight ?? this.snapshot.geometry.viewport.viewportHeightPx;
        return this.scrollElement !== null && e > 0 && (this.viewportHeightShadow = e), e;
    }
    readTrackedViewportHeight() {
        return this.viewportHeightShadow ?? this.readLiveViewportHeight();
    }
    invalidateViewportShadow() {
        this.scrollTopShadow = void 0, this.viewportHeightShadow = void 0;
    }
    invalidateShadowIfClampPossible(e) {
        this.scrollTopShadow !== void 0 && this.scrollTopShadow > e.totalSizePx - e.geometry.viewport.viewportHeightPx && (this.scrollTopShadow = void 0);
    }
    readFrameScrollTop() {
        return this.programmaticScrollState.kind === "pending-bind" ? this.programmaticScrollState.targetScrollTopPx : this.readTrackedScrollTop();
    }
    attachScrollElement() {
        const e = this.scrollElement;
        e !== null && (this.assertScrollElementAvailable(e), _7e.set(e, this), this.invalidateViewportShadow(), this.applyPendingBoundCorrection(), this.ensureResizeObserver(), this.resizeObserver?.observe(e), this.listenersElement !== e && (this.detachScrollListeners(), this.listenersElement = e, e.addEventListener("scroll", this.handleScroll, {
            passive: !0
        }), e.addEventListener("scrollend", this.handleScrollEnd), e.addEventListener("wheel", this.handleWheel, {
            passive: !0
        }), e.addEventListener("keydown", this.handleKeyDown), e.addEventListener("pointerdown", this.handlePointerDown), this.pointerDocument = e.ownerDocument, this.pointerDocument.addEventListener("pointerup", this.handlePointerUp, {
            capture: !0
        }), this.pointerDocument.addEventListener("pointercancel", this.handlePointerUp, {
            capture: !0
        })));
    }
    detachScrollElement() {
        this.cancelFollowUnlessNavigating(), this.invalidateViewportShadow();
        const e = this.scrollElement, t = this.surfaceHidden ? this.snapshot.geometry.viewport.scrollTopPx : e?.scrollTop;
        this.surfaceHidden = !1, e !== null && (this.resizeObserver?.unobserve(e), _7e.get(e) === this && _7e.delete(e)), this.detachScrollListeners();
        const n = this.isScrolling;
        this.isScrolling = !1, this.cancelScrollIdle(), n && this.mounted && this.publishInteractionChange(), this.reduceProgrammaticScroll({
            kind: "element-unbound"
        }), this.programmaticScrollState.kind === "idle" && t !== void 0 && this.reduceProgrammaticScroll({
            kind: "unbound-correction-requested",
            targetScrollTopPx: t
        });
    }
    detachScrollListeners() {
        const e = this.listenersElement;
        e !== null && (e.removeEventListener("scroll", this.handleScroll), e.removeEventListener("scrollend", this.handleScrollEnd), e.removeEventListener("wheel", this.handleWheel), e.removeEventListener("keydown", this.handleKeyDown), e.removeEventListener("pointerdown", this.handlePointerDown)), this.pointerDocument?.removeEventListener("pointerup", this.handlePointerUp, {
            capture: !0
        }), this.pointerDocument?.removeEventListener("pointercancel", this.handlePointerUp, {
            capture: !0
        }), this.userInputState.kind === "pointer-held" && (this.userInputState = q0t(this.userInputState, {
            kind: "pointer-up"
        }), this.scheduleHeldReplay()), this.listenersElement = null, this.pointerDocument = null;
    }
    pruneRowState() {
        const e = this.modelState.modelsById;
        for (const [t, n] of this.outerElements)e.has(t) || (this.outerElements.delete(t), this.outerRowIdsByElement.delete(n), this.rowRefs.delete(t), this.splitRowRefs.delete(t));
        for (const [t, n] of this.measurementElements)e.has(t) || (this.resizeObserver?.unobserve(n.element), this.measurementElements.delete(t), this.measurementRowIdsByElement.delete(n.element), this.rowRefs.delete(t), this.splitRowRefs.delete(t));
    }
    pruneHeldMeasurements() {
        for (const [e, t] of this.heldMeasurements)this.modelState.modelsById.get(t.rowId)?.revision === t.revision && this.snapshot.geometry.epoch.id === t.epochId || this.heldMeasurements.delete(e);
    }
};

}
