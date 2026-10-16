import { Eds, Pfe, nue, z5e } from "./floating-ui.utils.js";
import { Lre, Mfe, S0i, SMg, YDg, _0i, arl, bil, crl, dj, kMg, kds, lrl, orl, q5e, tue, v0i, wMg, wds, y0i, yMg, zDg } from "./qIc.js";
import { x } from "./tslib.es6.js";
var url, drl, hrl, prl, mrl, grl, frl, Zds, vrl, _rl, brl, yrl;
export { Zds, _rl, brl, drl, frl, grl, hrl, mrl, prl, url, vrl, yrl };
var __wakaru_CMg_initialized = false;
export function CMg() {
if (__wakaru_CMg_initialized) return;
__wakaru_CMg_initialized = true;
x(), z5e(), url = 50, drl = async (e, t, n)=>{
    const { placement: i = "bottom", strategy: r = "absolute", middleware: s = [], platform: o } = n, a = o.detectOverflow ? o : {
        ...o,
        detectOverflow: yMg
    }, c = await (o.isRTL == null ? void 0 : o.isRTL(t));
    let l = await o.getElementRects({
        reference: e,
        floating: t,
        strategy: r
    }), { x: u, y: h } = orl(l, i, c), p = i, g = 0;
    const f = {};
    for(let v = 0; v < s.length; v++){
        const b = s[v];
        if (!b) continue;
        const { name: y, fn: T } = b, { x: E, y: A, data: R, reset: D } = await T({
            x: u,
            y: h,
            initialPlacement: i,
            placement: p,
            strategy: r,
            middlewareData: f,
            rects: l,
            platform: a,
            elements: {
                reference: e,
                floating: t
            }
        });
        u = E ?? u, h = A ?? h, f[y] = {
            ...f[y],
            ...R
        }, D && g < url && (g++, typeof D == "object" && (D.placement && (p = D.placement), D.rects && (l = D.rects === !0 ? await o.getElementRects({
            reference: e,
            floating: t,
            strategy: r
        }) : D.rects), { x: u, y: h } = orl(l, p, c)), v = -1);
    }
    return {
        x: u,
        y: h,
        placement: p,
        strategy: r,
        middlewareData: f
    };
}, hrl = (e)=>({
        name: "arrow",
        options: e,
        async fn (t) {
            const { x: n, y: i, placement: r, rects: s, platform: o, elements: a, middlewareData: c } = t, { element: l, padding: u = 0 } = Mfe(e, t) || {};
            if (l == null) return {};
            const h = S0i(u), p = {
                x: n,
                y: i
            }, g = _0i(r), f = v0i(g), v = await o.getDimensions(l), b = g === "y", y = b ? "top" : "left", T = b ? "bottom" : "right", E = b ? "clientHeight" : "clientWidth", A = s.reference[f] + s.reference[g] - p[g] - s.floating[f], R = p[g] - s.reference[g], D = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l));
            let P = D ? D[E] : 0;
            (!P || !await (o.isElement == null ? void 0 : o.isElement(D))) && (P = a.floating[E] || s.floating[f]);
            const N = A / 2 - R / 2, O = P / 2 - v[f] / 2 - 1, F = Pfe(h[y], O), H = Pfe(h[T], O), $ = P - v[f] - H, W = P / 2 - v[f] / 2 + N, G = kds(F, W, $), q = !c.arrow && Lre(r) != null && W !== G && s.reference[f] / 2 - (W < F ? F : H) - v[f] / 2 < 0, z = q ? W < F ? W - F : W - $ : 0;
            return {
                [g]: p[g] + z,
                data: {
                    [g]: G,
                    centerOffset: W - G - z,
                    ...q && {
                        alignmentOffset: z
                    }
                },
                reset: q
            };
        }
    }), prl = function(e) {
    return e === void 0 && (e = {}), {
        name: "autoPlacement",
        options: e,
        async fn (t) {
            var n, i, r;
            const { rects: s, middlewareData: o, placement: a, platform: c, elements: l } = t, { crossAxis: u = !1, alignment: h, allowedPlacements: p = Eds, autoAlignment: g = !0, ...f } = Mfe(e, t), v = h !== void 0 || p === Eds ? SMg(h || null, g, p) : p, b = ((n = o.autoPlacement) == null ? void 0 : n.index) || 0, y = v[b];
            if (y == null) return {};
            if (a !== y) return {
                reset: {
                    placement: v[0]
                }
            };
            const T = await c.detectOverflow(t, f), E = bil(y, s, await (c.isRTL == null ? void 0 : c.isRTL(l.floating))), A = [
                T[dj(y)],
                T[E[0]],
                T[E[1]]
            ], R = [
                ...((i = o.autoPlacement) == null ? void 0 : i.overflows) || [],
                {
                    placement: y,
                    overflows: A
                }
            ], D = v[b + 1];
            if (D) return {
                data: {
                    index: b + 1,
                    overflows: R
                },
                reset: {
                    placement: D
                }
            };
            const P = R.map((F)=>{
                const H = Lre(F.placement);
                return [
                    F.placement,
                    H && u ? F.overflows.slice(0, 2).reduce(($, W)=>$ + W, 0) : F.overflows[0],
                    F.overflows
                ];
            }).sort((F, H)=>F[1] - H[1]), O = ((r = P.filter((F)=>F[2].slice(0, Lre(F[0]) ? 2 : 3).every((H)=>H <= 0))[0]) == null ? void 0 : r[0]) || P[0][0];
            return O !== a ? {
                data: {
                    index: b + 1,
                    overflows: R
                },
                reset: {
                    placement: O
                }
            } : {};
        }
    };
}, mrl = function(e) {
    return e === void 0 && (e = {}), {
        name: "flip",
        options: e,
        async fn (t) {
            var n, i;
            const { placement: r, middlewareData: s, rects: o, initialPlacement: a, platform: c, elements: l } = t, { mainAxis: u = !0, crossAxis: h = !0, fallbackPlacements: p, fallbackStrategy: g = "bestFit", fallbackAxisSideDirection: f = "none", flipAlignment: v = !0, ...b } = Mfe(e, t);
            if ((n = s.arrow) != null && n.alignmentOffset) return {};
            const y = dj(r), T = tue(a), E = dj(a) === a, A = await (c.isRTL == null ? void 0 : c.isRTL(l.floating)), R = p || (E || !v ? [
                y0i(a)
            ] : zDg(a)), D = f !== "none";
            !p && D && R.push(...YDg(a, v, f, A));
            const P = [
                a,
                ...R
            ], N = await c.detectOverflow(t, b), O = [];
            let F = ((i = s.flip) == null ? void 0 : i.overflows) || [];
            if (u && O.push(N[y]), h) {
                const G = bil(r, o, A);
                O.push(N[G[0]], N[G[1]]);
            }
            if (F = [
                ...F,
                {
                    placement: r,
                    overflows: O
                }
            ], !O.every((G)=>G <= 0)) {
                var H, $;
                const G = (((H = s.flip) == null ? void 0 : H.index) || 0) + 1, q = P[G];
                if (q && (!(h === "alignment" ? T !== tue(q) : !1) || F.every((Y)=>tue(Y.placement) === T ? Y.overflows[0] > 0 : !0))) return {
                    data: {
                        index: G,
                        overflows: F
                    },
                    reset: {
                        placement: q
                    }
                };
                let z = ($ = F.filter((X)=>X.overflows[0] <= 0).sort((X, Y)=>X.overflows[1] - Y.overflows[1])[0]) == null ? void 0 : $.placement;
                if (!z) switch(g){
                    case "bestFit":
                        {
                            var W;
                            const X = (W = F.filter((Y)=>{
                                if (D) {
                                    const Z = tue(Y.placement);
                                    return Z === T || Z === "y";
                                }
                                return !0;
                            }).map((Y)=>[
                                    Y.placement,
                                    Y.overflows.filter((Z)=>Z > 0).reduce((Z, K)=>Z + K, 0)
                                ]).sort((Y, Z)=>Y[1] - Z[1])[0]) == null ? void 0 : W[0];
                            X && (z = X);
                            break;
                        }
                    case "initialPlacement":
                        z = a;
                        break;
                }
                if (r !== z) return {
                    reset: {
                        placement: z
                    }
                };
            }
            return {};
        }
    };
}, grl = function(e) {
    return e === void 0 && (e = {}), {
        name: "hide",
        options: e,
        async fn (t) {
            const { rects: n, platform: i } = t, { strategy: r = "referenceHidden", ...s } = Mfe(e, t);
            switch(r){
                case "referenceHidden":
                    {
                        const o = await i.detectOverflow(t, {
                            ...s,
                            elementContext: "reference"
                        }), a = arl(o, n.reference);
                        return {
                            data: {
                                referenceHiddenOffsets: a,
                                referenceHidden: crl(a)
                            }
                        };
                    }
                case "escaped":
                    {
                        const o = await i.detectOverflow(t, {
                            ...s,
                            altBoundary: !0
                        }), a = arl(o, n.floating);
                        return {
                            data: {
                                escapedOffsets: a,
                                escaped: crl(a)
                            }
                        };
                    }
                default:
                    return {};
            }
        }
    };
}, frl = function(e) {
    return e === void 0 && (e = {}), {
        name: "inline",
        options: e,
        async fn (t) {
            const { placement: n, elements: i, rects: r, platform: s, strategy: o } = t, { padding: a = 2, x: c, y: l } = Mfe(e, t), u = Array.from(await (s.getClientRects == null ? void 0 : s.getClientRects(i.reference)) || []);
            if (!u.length) return {};
            const h = kMg(u), p = q5e(lrl(u)), g = S0i(a);
            function f() {
                if (h.length === 2 && (h[0].left > h[1].right || h[1].left > h[0].right) && c != null && l != null) return h.find((b)=>c > b.left - g.left && c < b.right + g.right && l > b.top - g.top && l < b.bottom + g.bottom) || p;
                if (h.length >= 2) {
                    if (tue(n) === "y") {
                        const D = h[0], P = h[h.length - 1], N = dj(n) === "top", O = D.top, F = P.bottom, H = N ? D.left : P.left, $ = N ? D.right : P.right;
                        return q5e({
                            x: H,
                            y: O,
                            width: $ - H,
                            height: F - O
                        });
                    }
                    const b = dj(n) === "left", y = nue(...h.map((D)=>D.right)), T = Pfe(...h.map((D)=>D.left)), E = h.filter((D)=>b ? D.left === T : D.right === y), A = E[0].top, R = E[E.length - 1].bottom;
                    return q5e({
                        x: T,
                        y: A,
                        width: y - T,
                        height: R - A
                    });
                }
                return p;
            }
            const v = await s.getElementRects({
                reference: {
                    getBoundingClientRect: f
                },
                floating: i.floating,
                strategy: o
            });
            return r.reference.x !== v.reference.x || r.reference.y !== v.reference.y || r.reference.width !== v.reference.width || r.reference.height !== v.reference.height ? {
                reset: {
                    rects: v
                }
            } : {};
        }
    };
}, Zds = new Set([
    "left",
    "top"
]), vrl = function(e) {
    return e === void 0 && (e = 0), {
        name: "offset",
        options: e,
        async fn (t) {
            var n, i;
            const { x: r, y: s, placement: o, middlewareData: a } = t, c = await wMg(t, e);
            return o === ((n = a.offset) == null ? void 0 : n.placement) && (i = a.arrow) != null && i.alignmentOffset ? {} : {
                x: r + c.x,
                y: s + c.y,
                data: {
                    ...c,
                    placement: o
                }
            };
        }
    };
}, _rl = function(e) {
    return e === void 0 && (e = {}), {
        name: "shift",
        options: e,
        async fn (t) {
            const { x: n, y: i, placement: r, platform: s } = t, { mainAxis: o = !0, crossAxis: a = !1, limiter: c = {
                fn: (T)=>{
                    let { x: E, y: A } = T;
                    return {
                        x: E,
                        y: A
                    };
                }
            }, ...l } = Mfe(e, t), u = {
                x: n,
                y: i
            }, h = await s.detectOverflow(t, l), p = tue(r), g = wds(p);
            let f = u[g], v = u[p];
            const b = (T, E)=>kds(E + h[T === "y" ? "top" : "left"], E, E - h[T === "y" ? "bottom" : "right"]);
            o && (f = b(g, f)), a && (v = b(p, v));
            const y = c.fn({
                ...t,
                [g]: f,
                [p]: v
            });
            return {
                ...y,
                data: {
                    x: y.x - n,
                    y: y.y - i,
                    enabled: {
                        [g]: o,
                        [p]: a
                    }
                }
            };
        }
    };
}, brl = function(e) {
    return e === void 0 && (e = {}), {
        options: e,
        fn (t) {
            var n, i;
            const { x: r, y: s, placement: o, rects: a, middlewareData: c } = t, { offset: l = 0, mainAxis: u = !0, crossAxis: h = !0 } = Mfe(e, t), p = {
                x: r,
                y: s
            }, g = tue(o), f = wds(g);
            let v = p[f], b = p[g];
            const y = Mfe(l, t), T = typeof y == "number" ? {
                mainAxis: y,
                crossAxis: 0
            } : {
                mainAxis: (n = y.mainAxis) != null ? n : 0,
                crossAxis: (i = y.crossAxis) != null ? i : 0
            };
            if (u) {
                const R = f === "y" ? "height" : "width", D = a.reference[f] - a.floating[R] + T.mainAxis, P = a.reference[f] + a.reference[R] - T.mainAxis;
                v < D ? v = D : v > P && (v = P);
            }
            if (h) {
                var E, A;
                const R = f === "y" ? "width" : "height", D = Zds.has(dj(o)), P = a.reference[g] - a.floating[R] + (D && ((E = c.offset) == null ? void 0 : E[g]) || 0) + (D ? 0 : T.crossAxis), N = a.reference[g] + a.reference[R] + (D ? 0 : ((A = c.offset) == null ? void 0 : A[g]) || 0) - (D ? T.crossAxis : 0);
                b < P ? b = P : b > N && (b = N);
            }
            return {
                [f]: v,
                [g]: b
            };
        }
    };
}, yrl = function(e) {
    return e === void 0 && (e = {}), {
        name: "size",
        options: e,
        async fn (t) {
            const { placement: n, rects: i, platform: r, elements: s } = t, { apply: o = ()=>{}, ...a } = Mfe(e, t), c = await r.detectOverflow(t, a), l = dj(n), u = Lre(n), h = tue(n) === "y", { width: p, height: g } = i.floating;
            let f, v;
            l === "top" || l === "bottom" ? (f = l, v = u === (await (r.isRTL == null ? void 0 : r.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (v = l, f = u === "end" ? "top" : "bottom");
            const b = g - c.top - c.bottom, y = p - c.left - c.right, T = Pfe(g - c[f], b), E = Pfe(p - c[v], y), A = t.middlewareData.shift, R = !A;
            let D = T, P = E;
            A != null && A.enabled.x && (P = y), A != null && A.enabled.y && (D = b), R && !u && (h ? P = p - 2 * nue(c.left, c.right) : D = g - 2 * nue(c.top, c.bottom)), await o({
                ...t,
                availableWidth: P,
                availableHeight: D
            });
            const N = await r.getDimensions(s.floating);
            return p !== N.width || g !== N.height ? {
                reset: {
                    rects: !0
                }
            } : {};
        }
    };
};

}
