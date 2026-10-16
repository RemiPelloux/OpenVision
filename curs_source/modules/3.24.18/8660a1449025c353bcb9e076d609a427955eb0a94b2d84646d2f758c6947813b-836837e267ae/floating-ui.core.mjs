import { DRf, ESs, FTe, LRf, MAf, NRf, Nct, TLl, ehw, ihw, pDe, rpw, spw, thw, zxt } from "./BA.js";
import { UXt, Vxt, mKe } from "./floating-ui.utils.mjs";
import { E } from "./tslib.es6.js";
var ORf, FRf, BRf, URf, rOl, jRf, $Rf, HRf, WRf;
export { $Rf, BRf, FRf, HRf, ORf, URf, WRf, jRf, rOl };
var __wakaru_opw_initialized = false;
export function opw() {
if (__wakaru_opw_initialized) return;
__wakaru_opw_initialized = true;
E(), Vxt(), Vxt(), ORf = 50, FRf = async (t, e, n)=>{
    const { placement: i = "bottom", strategy: r = "absolute", middleware: s = [], platform: o } = n, a = o.detectOverflow ? o : {
        ...o,
        detectOverflow: rpw
    }, l = await (o.isRTL == null ? void 0 : o.isRTL(e));
    let c = await o.getElementRects({
        reference: t,
        floating: e,
        strategy: r
    }), { x: u, y: d } = DRf(c, i, l), h = i, p = 0;
    const g = {};
    for(let f = 0; f < s.length; f++){
        const _ = s[f];
        if (!_) continue;
        const { name: b, fn: y } = _, { x: S, y: k, data: C, reset: T } = await y({
            x: u,
            y: d,
            initialPlacement: i,
            placement: h,
            strategy: r,
            middlewareData: g,
            rects: c,
            platform: a,
            elements: {
                reference: t,
                floating: e
            }
        });
        u = S ?? u, d = k ?? d, g[b] = {
            ...g[b],
            ...C
        }, T && p < ORf && (p++, typeof T == "object" && (T.placement && (h = T.placement), T.rects && (c = T.rects === !0 ? await o.getElementRects({
            reference: t,
            floating: e,
            strategy: r
        }) : T.rects), { x: u, y: d } = DRf(c, h, l)), f = -1);
    }
    return {
        x: u,
        y: d,
        placement: h,
        strategy: r,
        middlewareData: g
    };
}, BRf = function(t) {
    return t === void 0 && (t = {}), {
        name: "flip",
        options: t,
        async fn (e) {
            var n, i;
            const { placement: r, middlewareData: s, rects: o, initialPlacement: a, platform: l, elements: c } = e, { mainAxis: u = !0, crossAxis: d = !0, fallbackPlacements: h, fallbackStrategy: p = "bestFit", fallbackAxisSideDirection: g = "none", flipAlignment: f = !0, ..._ } = Nct(t, e);
            if ((n = s.arrow) != null && n.alignmentOffset) return {};
            const b = FTe(r), y = pDe(a), S = FTe(a) === a, k = await (l.isRTL == null ? void 0 : l.isRTL(c.floating)), C = h || (S || !f ? [
                ESs(a)
            ] : thw(a)), T = g !== "none";
            !h && T && C.push(...ihw(a, f, g, k));
            const I = [
                a,
                ...C
            ], A = await l.detectOverflow(e, _), P = [];
            let M = ((i = s.flip) == null ? void 0 : i.overflows) || [];
            if (u && P.push(A[b]), d) {
                const j = ehw(r, o, k);
                P.push(A[j[0]], A[j[1]]);
            }
            if (M = [
                ...M,
                {
                    placement: r,
                    overflows: P
                }
            ], !P.every((j)=>j <= 0)) {
                var O, N;
                const j = (((O = s.flip) == null ? void 0 : O.index) || 0) + 1, $ = I[j];
                if ($ && (!(d === "alignment" ? y !== pDe($) : !1) || M.every((q)=>pDe(q.placement) === y ? q.overflows[0] > 0 : !0))) return {
                    data: {
                        index: j,
                        overflows: M
                    },
                    reset: {
                        placement: $
                    }
                };
                let H = (N = M.filter((G)=>G.overflows[0] <= 0).sort((G, q)=>G.overflows[1] - q.overflows[1])[0]) == null ? void 0 : N.placement;
                if (!H) switch(p){
                    case "bestFit":
                        {
                            var U;
                            const G = (U = M.filter((q)=>{
                                if (T) {
                                    const K = pDe(q.placement);
                                    return K === y || K === "y";
                                }
                                return !0;
                            }).map((q)=>[
                                    q.placement,
                                    q.overflows.filter((K)=>K > 0).reduce((K, V)=>K + V, 0)
                                ]).sort((q, K)=>q[1] - K[1])[0]) == null ? void 0 : U[0];
                            G && (H = G);
                            break;
                        }
                    case "initialPlacement":
                        H = a;
                        break;
                }
                if (r !== H) return {
                    reset: {
                        placement: H
                    }
                };
            }
            return {};
        }
    };
}, URf = function(t) {
    return t === void 0 && (t = {}), {
        name: "hide",
        options: t,
        async fn (e) {
            const { rects: n, platform: i } = e, { strategy: r = "referenceHidden", ...s } = Nct(t, e);
            switch(r){
                case "referenceHidden":
                    {
                        const o = await i.detectOverflow(e, {
                            ...s,
                            elementContext: "reference"
                        }), a = NRf(o, n.reference);
                        return {
                            data: {
                                referenceHiddenOffsets: a,
                                referenceHidden: LRf(a)
                            }
                        };
                    }
                case "escaped":
                    {
                        const o = await i.detectOverflow(e, {
                            ...s,
                            altBoundary: !0
                        }), a = NRf(o, n.floating);
                        return {
                            data: {
                                escapedOffsets: a,
                                escaped: LRf(a)
                            }
                        };
                    }
                default:
                    return {};
            }
        }
    };
}, rOl = new Set([
    "left",
    "top"
]), jRf = function(t) {
    return t === void 0 && (t = 0), {
        name: "offset",
        options: t,
        async fn (e) {
            var n, i;
            const { x: r, y: s, placement: o, middlewareData: a } = e, l = await spw(e, t);
            return o === ((n = a.offset) == null ? void 0 : n.placement) && (i = a.arrow) != null && i.alignmentOffset ? {} : {
                x: r + l.x,
                y: s + l.y,
                data: {
                    ...l,
                    placement: o
                }
            };
        }
    };
}, $Rf = function(t) {
    return t === void 0 && (t = {}), {
        name: "shift",
        options: t,
        async fn (e) {
            const { x: n, y: i, placement: r, platform: s } = e, { mainAxis: o = !0, crossAxis: a = !1, limiter: l = {
                fn: (y)=>{
                    let { x: S, y: k } = y;
                    return {
                        x: S,
                        y: k
                    };
                }
            }, ...c } = Nct(t, e), u = {
                x: n,
                y: i
            }, d = await s.detectOverflow(e, c), h = pDe(r), p = TLl(h);
            let g = u[p], f = u[h];
            const _ = (y, S)=>MAf(S + d[y === "y" ? "top" : "left"], S, S - d[y === "y" ? "bottom" : "right"]);
            o && (g = _(p, g)), a && (f = _(h, f));
            const b = l.fn({
                ...e,
                [p]: g,
                [h]: f
            });
            return {
                ...b,
                data: {
                    x: b.x - n,
                    y: b.y - i,
                    enabled: {
                        [p]: o,
                        [h]: a
                    }
                }
            };
        }
    };
}, HRf = function(t) {
    return t === void 0 && (t = {}), {
        options: t,
        fn (e) {
            var n, i;
            const { x: r, y: s, placement: o, rects: a, middlewareData: l } = e, { offset: c = 0, mainAxis: u = !0, crossAxis: d = !0 } = Nct(t, e), h = {
                x: r,
                y: s
            }, p = pDe(o), g = TLl(p);
            let f = h[g], _ = h[p];
            const b = Nct(c, e), y = typeof b == "number" ? {
                mainAxis: b,
                crossAxis: 0
            } : {
                mainAxis: (n = b.mainAxis) != null ? n : 0,
                crossAxis: (i = b.crossAxis) != null ? i : 0
            };
            if (u) {
                const C = g === "y" ? "height" : "width", T = a.reference[g] - a.floating[C] + y.mainAxis, I = a.reference[g] + a.reference[C] - y.mainAxis;
                f < T ? f = T : f > I && (f = I);
            }
            if (d) {
                var S, k;
                const C = g === "y" ? "width" : "height", T = rOl.has(FTe(o)), I = a.reference[p] - a.floating[C] + (T && ((S = l.offset) == null ? void 0 : S[p]) || 0) + (T ? 0 : y.crossAxis), A = a.reference[p] + a.reference[C] + (T ? 0 : ((k = l.offset) == null ? void 0 : k[p]) || 0) - (T ? y.crossAxis : 0);
                _ < I ? _ = I : _ > A && (_ = A);
            }
            return {
                [g]: f,
                [p]: _
            };
        }
    };
}, WRf = function(t) {
    return t === void 0 && (t = {}), {
        name: "size",
        options: t,
        async fn (e) {
            const { placement: n, rects: i, platform: r, elements: s } = e, { apply: o = ()=>{}, ...a } = Nct(t, e), l = await r.detectOverflow(e, a), c = FTe(n), u = zxt(n), d = pDe(n) === "y", { width: h, height: p } = i.floating;
            let g, f;
            c === "top" || c === "bottom" ? (g = c, f = u === (await (r.isRTL == null ? void 0 : r.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (f = c, g = u === "end" ? "top" : "bottom");
            const _ = p - l.top - l.bottom, b = h - l.left - l.right, y = UXt(p - l[g], _), S = UXt(h - l[f], b), k = e.middlewareData.shift, C = !k;
            let T = y, I = S;
            k != null && k.enabled.x && (I = b), k != null && k.enabled.y && (T = _), C && !u && (d ? I = h - 2 * mKe(l.left, l.right) : T = p - 2 * mKe(l.top, l.bottom)), await o({
                ...e,
                availableWidth: I,
                availableHeight: T
            });
            const A = await r.getDimensions(s.floating);
            return h !== A.width || p !== A.height ? {
                reset: {
                    rects: !0
                }
            } : {};
        }
    };
};

}
