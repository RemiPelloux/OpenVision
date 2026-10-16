import { $we, CUy, EUy, IUy, J7y, Koh, MRe, SRr, S_e, TUy, Voh, Z7y, _Rr, bRr, kQo, kRr, kne, qoh, roh, wQo, znt, zoh } from "./LYd.js";
import { DRe, EQo, Hwe, Vnt } from "./floating-ui.utils.js";
import { E } from "./tslib.es6.js";
var Yoh, Xoh, Zoh, Qoh, Joh, eah, tah, ZQo, nah, iah, rah, sah;
export { Joh, Qoh, Xoh, Yoh, ZQo, Zoh, eah, iah, nah, rah, sah, tah };
var __wakaru_xUy_initialized = false;
export function xUy() {
if (__wakaru_xUy_initialized) return;
__wakaru_xUy_initialized = true;
E(), Vnt(), Yoh = 50, Xoh = async (t, e, n)=>{
    const { placement: i = "bottom", strategy: r = "absolute", middleware: s = [], platform: o } = n, a = o.detectOverflow ? o : {
        ...o,
        detectOverflow: CUy
    }, l = await (o.isRTL == null ? void 0 : o.isRTL(e));
    let c = await o.getElementRects({
        reference: t,
        floating: e,
        strategy: r
    }), { x: u, y: d } = qoh(c, i, l), h = i, p = 0;
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
        }, T && p < Yoh && (p++, typeof T == "object" && (T.placement && (h = T.placement), T.rects && (c = T.rects === !0 ? await o.getElementRects({
            reference: t,
            floating: e,
            strategy: r
        }) : T.rects), { x: u, y: d } = qoh(c, h, l)), f = -1);
    }
    return {
        x: u,
        y: d,
        placement: h,
        strategy: r,
        middlewareData: g
    };
}, Zoh = (t)=>({
        name: "arrow",
        options: t,
        async fn (e) {
            const { x: n, y: i, placement: r, rects: s, platform: o, elements: a, middlewareData: l } = e, { element: c, padding: u = 0 } = MRe(t, e) || {};
            if (c == null) return {};
            const d = kRr(u), h = {
                x: n,
                y: i
            }, p = bRr(r), g = _Rr(p), f = await o.getDimensions(c), _ = p === "y", b = _ ? "top" : "left", y = _ ? "bottom" : "right", S = _ ? "clientHeight" : "clientWidth", k = s.reference[g] + s.reference[p] - h[p] - s.floating[g], C = h[p] - s.reference[p], T = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(c));
            let I = T ? T[S] : 0;
            (!I || !await (o.isElement == null ? void 0 : o.isElement(T))) && (I = a.floating[S] || s.floating[g]);
            const A = k / 2 - C / 2, P = I / 2 - f[g] / 2 - 1, M = DRe(d[b], P), O = DRe(d[y], P), N = I - f[g] - O, U = I / 2 - f[g] / 2 + A, j = kQo(M, U, N), $ = !l.arrow && S_e(r) != null && U !== j && s.reference[g] / 2 - (U < M ? M : O) - f[g] / 2 < 0, H = $ ? U < M ? U - M : U - N : 0;
            return {
                [p]: h[p] + H,
                data: {
                    [p]: j,
                    centerOffset: U - j - H,
                    ...$ && {
                        alignmentOffset: H
                    }
                },
                reset: $
            };
        }
    }), Qoh = function(t) {
    return t === void 0 && (t = {}), {
        name: "autoPlacement",
        options: t,
        async fn (e) {
            var n, i, r;
            const { rects: s, middlewareData: o, placement: a, platform: l, elements: c } = e, { crossAxis: u = !1, alignment: d, allowedPlacements: h = EQo, autoAlignment: p = !0, ...g } = MRe(t, e), f = d !== void 0 || h === EQo ? TUy(d || null, p, h) : h, _ = ((n = o.autoPlacement) == null ? void 0 : n.index) || 0, b = f[_];
            if (b == null) return {};
            if (a !== b) return {
                reset: {
                    placement: f[0]
                }
            };
            const y = await l.detectOverflow(e, g), S = roh(b, s, await (l.isRTL == null ? void 0 : l.isRTL(c.floating))), k = [
                y[kne(b)],
                y[S[0]],
                y[S[1]]
            ], C = [
                ...((i = o.autoPlacement) == null ? void 0 : i.overflows) || [],
                {
                    placement: b,
                    overflows: k
                }
            ], T = f[_ + 1];
            if (T) return {
                data: {
                    index: _ + 1,
                    overflows: C
                },
                reset: {
                    placement: T
                }
            };
            const I = C.map((M)=>{
                const O = S_e(M.placement);
                return [
                    M.placement,
                    O && u ? M.overflows.slice(0, 2).reduce((N, U)=>N + U, 0) : M.overflows[0],
                    M.overflows
                ];
            }).sort((M, O)=>M[1] - O[1]), P = ((r = I.filter((M)=>M[2].slice(0, S_e(M[0]) ? 2 : 3).every((O)=>O <= 0))[0]) == null ? void 0 : r[0]) || I[0][0];
            return P !== a ? {
                data: {
                    index: _ + 1,
                    overflows: C
                },
                reset: {
                    placement: P
                }
            } : {};
        }
    };
}, Joh = function(t) {
    return t === void 0 && (t = {}), {
        name: "flip",
        options: t,
        async fn (e) {
            var n, i;
            const { placement: r, middlewareData: s, rects: o, initialPlacement: a, platform: l, elements: c } = e, { mainAxis: u = !0, crossAxis: d = !0, fallbackPlacements: h, fallbackStrategy: p = "bestFit", fallbackAxisSideDirection: g = "none", flipAlignment: f = !0, ..._ } = MRe(t, e);
            if ((n = s.arrow) != null && n.alignmentOffset) return {};
            const b = kne(r), y = $we(a), S = kne(a) === a, k = await (l.isRTL == null ? void 0 : l.isRTL(c.floating)), C = h || (S || !f ? [
                SRr(a)
            ] : Z7y(a)), T = g !== "none";
            !h && T && C.push(...J7y(a, f, g, k));
            const I = [
                a,
                ...C
            ], A = await l.detectOverflow(e, _), P = [];
            let M = ((i = s.flip) == null ? void 0 : i.overflows) || [];
            if (u && P.push(A[b]), d) {
                const j = roh(r, o, k);
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
                if ($ && (!(d === "alignment" ? y !== $we($) : !1) || M.every((q)=>$we(q.placement) === y ? q.overflows[0] > 0 : !0))) return {
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
                                    const K = $we(q.placement);
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
}, eah = function(t) {
    return t === void 0 && (t = {}), {
        name: "hide",
        options: t,
        async fn (e) {
            const { rects: n, platform: i } = e, { strategy: r = "referenceHidden", ...s } = MRe(t, e);
            switch(r){
                case "referenceHidden":
                    {
                        const o = await i.detectOverflow(e, {
                            ...s,
                            elementContext: "reference"
                        }), a = zoh(o, n.reference);
                        return {
                            data: {
                                referenceHiddenOffsets: a,
                                referenceHidden: Voh(a)
                            }
                        };
                    }
                case "escaped":
                    {
                        const o = await i.detectOverflow(e, {
                            ...s,
                            altBoundary: !0
                        }), a = zoh(o, n.floating);
                        return {
                            data: {
                                escapedOffsets: a,
                                escaped: Voh(a)
                            }
                        };
                    }
                default:
                    return {};
            }
        }
    };
}, tah = function(t) {
    return t === void 0 && (t = {}), {
        name: "inline",
        options: t,
        async fn (e) {
            const { placement: n, elements: i, rects: r, platform: s, strategy: o } = e, { padding: a = 2, x: l, y: c } = MRe(t, e), u = Array.from(await (s.getClientRects == null ? void 0 : s.getClientRects(i.reference)) || []);
            if (!u.length) return {};
            const d = EUy(u), h = znt(Koh(u)), p = kRr(a);
            function g() {
                if (d.length === 2 && (d[0].left > d[1].right || d[1].left > d[0].right) && l != null && c != null) return d.find((_)=>l > _.left - p.left && l < _.right + p.right && c > _.top - p.top && c < _.bottom + p.bottom) || h;
                if (d.length >= 2) {
                    if ($we(n) === "y") {
                        const T = d[0], I = d[d.length - 1], A = kne(n) === "top", P = T.top, M = I.bottom, O = A ? T.left : I.left, N = A ? T.right : I.right;
                        return znt({
                            x: O,
                            y: P,
                            width: N - O,
                            height: M - P
                        });
                    }
                    const _ = kne(n) === "left", b = Hwe(...d.map((T)=>T.right)), y = DRe(...d.map((T)=>T.left)), S = d.filter((T)=>_ ? T.left === y : T.right === b), k = S[0].top, C = S[S.length - 1].bottom;
                    return znt({
                        x: y,
                        y: k,
                        width: b - y,
                        height: C - k
                    });
                }
                return h;
            }
            const f = await s.getElementRects({
                reference: {
                    getBoundingClientRect: g
                },
                floating: i.floating,
                strategy: o
            });
            return r.reference.x !== f.reference.x || r.reference.y !== f.reference.y || r.reference.width !== f.reference.width || r.reference.height !== f.reference.height ? {
                reset: {
                    rects: f
                }
            } : {};
        }
    };
}, ZQo = new Set([
    "left",
    "top"
]), nah = function(t) {
    return t === void 0 && (t = 0), {
        name: "offset",
        options: t,
        async fn (e) {
            var n, i;
            const { x: r, y: s, placement: o, middlewareData: a } = e, l = await IUy(e, t);
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
}, iah = function(t) {
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
            }, ...c } = MRe(t, e), u = {
                x: n,
                y: i
            }, d = await s.detectOverflow(e, c), h = $we(r), p = wQo(h);
            let g = u[p], f = u[h];
            const _ = (y, S)=>kQo(S + d[y === "y" ? "top" : "left"], S, S - d[y === "y" ? "bottom" : "right"]);
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
}, rah = function(t) {
    return t === void 0 && (t = {}), {
        options: t,
        fn (e) {
            var n, i;
            const { x: r, y: s, placement: o, rects: a, middlewareData: l } = e, { offset: c = 0, mainAxis: u = !0, crossAxis: d = !0 } = MRe(t, e), h = {
                x: r,
                y: s
            }, p = $we(o), g = wQo(p);
            let f = h[g], _ = h[p];
            const b = MRe(c, e), y = typeof b == "number" ? {
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
                const C = g === "y" ? "width" : "height", T = ZQo.has(kne(o)), I = a.reference[p] - a.floating[C] + (T && ((S = l.offset) == null ? void 0 : S[p]) || 0) + (T ? 0 : y.crossAxis), A = a.reference[p] + a.reference[C] + (T ? 0 : ((k = l.offset) == null ? void 0 : k[p]) || 0) - (T ? y.crossAxis : 0);
                _ < I ? _ = I : _ > A && (_ = A);
            }
            return {
                [g]: f,
                [p]: _
            };
        }
    };
}, sah = function(t) {
    return t === void 0 && (t = {}), {
        name: "size",
        options: t,
        async fn (e) {
            const { placement: n, rects: i, platform: r, elements: s } = e, { apply: o = ()=>{}, ...a } = MRe(t, e), l = await r.detectOverflow(e, a), c = kne(n), u = S_e(n), d = $we(n) === "y", { width: h, height: p } = i.floating;
            let g, f;
            c === "top" || c === "bottom" ? (g = c, f = u === (await (r.isRTL == null ? void 0 : r.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (f = c, g = u === "end" ? "top" : "bottom");
            const _ = p - l.top - l.bottom, b = h - l.left - l.right, y = DRe(p - l[g], _), S = DRe(h - l[f], b), k = e.middlewareData.shift, C = !k;
            let T = y, I = S;
            k != null && k.enabled.x && (I = b), k != null && k.enabled.y && (T = _), C && !u && (d ? I = h - 2 * Hwe(l.left, l.right) : T = p - 2 * Hwe(l.top, l.bottom)), await o({
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
