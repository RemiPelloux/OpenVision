import { $S, ATt, CQn, ES, ETt, OT, OY, SS, Sme, _Qn, dB, e3, ek, nIe, rIe, tIe, vQn, wQn } from "./floating-ui.utils.mjs";
import { i } from "./plugin-brand-icon.js";
function BTt(r, e, a) {
    let { reference: s, floating: l } = r;
    const u = e3(e), p = rIe(e), m = nIe(p), b = ek(e), g = u === "y", _ = s.x + s.width / 2 - l.width / 2, v = s.y + s.height / 2 - l.height / 2, x = s[m] / 2 - l[m] / 2;
    let C;
    switch(b){
        case "top":
            C = {
                x: _,
                y: s.y - l.height
            };
            break;
        case "bottom":
            C = {
                x: _,
                y: s.y + s.height
            };
            break;
        case "right":
            C = {
                x: s.x + s.width,
                y: v
            };
            break;
        case "left":
            C = {
                x: s.x - l.width,
                y: v
            };
            break;
        default:
            C = {
                x: s.x,
                y: s.y
            };
    }
    const E = OT(e);
    return E && (C[p] += x * (E === "end" ? 1 : -1) * (a && g ? -1 : 1)), C;
}
async function ZQn(r, e) {
    var a;
    e === void 0 && (e = {});
    const { x: s, y: l, platform: u, rects: p, elements: m, strategy: b } = r, { boundary: g = "clippingAncestors", rootBoundary: _ = "viewport", elementContext: v = "floating", altBoundary: x = !1, padding: C = 0 } = SS(e, r), E = ATt(C), $ = m[x ? v === "floating" ? "reference" : "floating" : v], I = OY(await u.getClippingRect({
        element: (a = await (u.isElement == null ? void 0 : u.isElement($))) == null || a ? $ : $.contextElement || await (u.getDocumentElement == null ? void 0 : u.getDocumentElement(m.floating)),
        boundary: g,
        rootBoundary: _,
        strategy: b
    })), N = v === "floating" ? {
        x: s,
        y: l,
        width: p.floating.width,
        height: p.floating.height
    } : p.reference, R = await (u.getOffsetParent == null ? void 0 : u.getOffsetParent(m.floating)), P = await (u.isElement == null ? void 0 : u.isElement(R)) && await (u.getScale == null ? void 0 : u.getScale(R)) || {
        x: 1,
        y: 1
    }, L = OY(u.convertOffsetParentRelativeRectToViewportRelativeRect ? await u.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements: m,
        rect: N,
        offsetParent: R,
        strategy: b
    }) : N);
    return {
        top: (I.top - L.top + E.top) / P.y,
        bottom: (L.bottom - I.bottom + E.bottom) / P.y,
        left: (I.left - L.left + E.left) / P.x,
        right: (L.right - I.right + E.right) / P.x
    };
}
function qTt(r, e) {
    return {
        top: r.top - e.height,
        right: r.right - e.width,
        bottom: r.bottom - e.height,
        left: r.left - e.width
    };
}
function UTt(r) {
    return CQn.some((e)=>r[e] >= 0);
}
async function VQn(r, e) {
    const { placement: a, platform: s, elements: l } = r, u = await (s.isRTL == null ? void 0 : s.isRTL(l.floating)), p = ek(a), m = OT(a), b = e3(a) === "y", g = GTt.has(p) ? -1 : 1, _ = u && b ? -1 : 1, v = SS(e, r);
    let { mainAxis: x, crossAxis: C, alignmentAxis: E } = typeof v == "number" ? {
        mainAxis: v,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: v.mainAxis || 0,
        crossAxis: v.crossAxis || 0,
        alignmentAxis: v.alignmentAxis
    };
    return m && typeof E == "number" && (C = m === "end" ? E * -1 : E), b ? {
        x: C * _,
        y: x * g
    } : {
        x: x * g,
        y: C * _
    };
}
var KQn, XQn, YQn, JQn, GTt, QQn, eer, ter, ner;
export { BTt, GTt, JQn, KQn, QQn, UTt, VQn, XQn, YQn, ZQn, eer, ner, qTt, ter };
var __wakaru_mki_initialized = false;
export function mki() {
if (__wakaru_mki_initialized) return;
__wakaru_mki_initialized = true;
$S(), $S(), i(BTt, "computeCoordsFromPlacement"), i(ZQn, "detectOverflow"), KQn = 50, XQn = i(async (r, e, a)=>{
    const { placement: s = "bottom", strategy: l = "absolute", middleware: u = [], platform: p } = a, m = p.detectOverflow ? p : {
        ...p,
        detectOverflow: ZQn
    }, b = await (p.isRTL == null ? void 0 : p.isRTL(e));
    let g = await p.getElementRects({
        reference: r,
        floating: e,
        strategy: l
    }), { x: _, y: v } = BTt(g, s, b), x = s, C = 0;
    const E = {};
    for(let A = 0; A < u.length; A++){
        const $ = u[A];
        if (!$) continue;
        const { name: I, fn: N } = $, { x: R, y: P, data: L, reset: j } = await N({
            x: _,
            y: v,
            initialPlacement: s,
            placement: x,
            strategy: l,
            middlewareData: E,
            rects: g,
            platform: m,
            elements: {
                reference: r,
                floating: e
            }
        });
        _ = R ?? _, v = P ?? v, E[I] = {
            ...E[I],
            ...L
        }, j && C < KQn && (C++, typeof j == "object" && (j.placement && (x = j.placement), j.rects && (g = j.rects === !0 ? await p.getElementRects({
            reference: r,
            floating: e,
            strategy: l
        }) : j.rects), { x: _, y: v } = BTt(g, x, b)), A = -1);
    }
    return {
        x: _,
        y: v,
        placement: x,
        strategy: l,
        middlewareData: E
    };
}, "computePosition"), YQn = i(function(r) {
    return r === void 0 && (r = {}), {
        name: "flip",
        options: r,
        async fn (e) {
            var a, s;
            const { placement: l, middlewareData: u, rects: p, initialPlacement: m, platform: b, elements: g } = e, { mainAxis: _ = !0, crossAxis: v = !0, fallbackPlacements: x, fallbackStrategy: C = "bestFit", fallbackAxisSideDirection: E = "none", flipAlignment: A = !0, ...$ } = SS(r, e);
            if ((a = u.arrow) != null && a.alignmentOffset) return {};
            const I = ek(l), N = e3(m), R = ek(m) === m, P = await (b.isRTL == null ? void 0 : b.isRTL(g.floating)), L = x || (R || !A ? [
                Sme(m)
            ] : _Qn(m)), j = E !== "none";
            !x && j && L.push(...vQn(m, A, E, P));
            const z = [
                m,
                ...L
            ], q = await b.detectOverflow(e, $), O = [];
            let B = ((s = u.flip) == null ? void 0 : s.overflows) || [];
            if (_ && O.push(q[I]), v) {
                const K = wQn(l, p, P);
                O.push(q[K[0]], q[K[1]]);
            }
            if (B = [
                ...B,
                {
                    placement: l,
                    overflows: O
                }
            ], !O.every((K)=>K <= 0)) {
                var V, H;
                const K = (((V = u.flip) == null ? void 0 : V.index) || 0) + 1, Y = z[K];
                if (Y && (!(v === "alignment" ? N !== e3(Y) : !1) || B.every((ne)=>e3(ne.placement) === N ? ne.overflows[0] > 0 : !0))) return {
                    data: {
                        index: K,
                        overflows: B
                    },
                    reset: {
                        placement: Y
                    }
                };
                let J = (H = B.filter((re)=>re.overflows[0] <= 0).sort((re, ne)=>re.overflows[1] - ne.overflows[1])[0]) == null ? void 0 : H.placement;
                if (!J) switch(C){
                    case "bestFit":
                        {
                            var Z;
                            const re = (Z = B.filter((ne)=>{
                                if (j) {
                                    const ae = e3(ne.placement);
                                    return ae === N || ae === "y";
                                }
                                return !0;
                            }).map((ne)=>[
                                    ne.placement,
                                    ne.overflows.filter((ae)=>ae > 0).reduce((ae, W)=>ae + W, 0)
                                ]).sort((ne, ae)=>ne[1] - ae[1])[0]) == null ? void 0 : Z[0];
                            re && (J = re);
                            break;
                        }
                    case "initialPlacement":
                        J = m;
                        break;
                }
                if (l !== J) return {
                    reset: {
                        placement: J
                    }
                };
            }
            return {};
        }
    };
}, "flip"), i(qTt, "getSideOffsets"), i(UTt, "isAnySideFullyClipped"), JQn = i(function(r) {
    return r === void 0 && (r = {}), {
        name: "hide",
        options: r,
        async fn (e) {
            const { rects: a, platform: s } = e, { strategy: l = "referenceHidden", ...u } = SS(r, e);
            switch(l){
                case "referenceHidden":
                    {
                        const p = await s.detectOverflow(e, {
                            ...u,
                            elementContext: "reference"
                        }), m = qTt(p, a.reference);
                        return {
                            data: {
                                referenceHiddenOffsets: m,
                                referenceHidden: UTt(m)
                            }
                        };
                    }
                case "escaped":
                    {
                        const p = await s.detectOverflow(e, {
                            ...u,
                            altBoundary: !0
                        }), m = qTt(p, a.floating);
                        return {
                            data: {
                                escapedOffsets: m,
                                escaped: UTt(m)
                            }
                        };
                    }
                default:
                    return {};
            }
        }
    };
}, "hide"), GTt = new Set([
    "left",
    "top"
]), i(VQn, "convertValueToCoords"), QQn = i(function(r) {
    return r === void 0 && (r = 0), {
        name: "offset",
        options: r,
        async fn (e) {
            var a, s;
            const { x: l, y: u, placement: p, middlewareData: m } = e, b = await VQn(e, r);
            return p === ((a = m.offset) == null ? void 0 : a.placement) && (s = m.arrow) != null && s.alignmentOffset ? {} : {
                x: l + b.x,
                y: u + b.y,
                data: {
                    ...b,
                    placement: p
                }
            };
        }
    };
}, "offset"), eer = i(function(r) {
    return r === void 0 && (r = {}), {
        name: "shift",
        options: r,
        async fn (e) {
            const { x: a, y: s, placement: l, platform: u } = e, { mainAxis: p = !0, crossAxis: m = !1, limiter: b = {
                fn: i((N)=>{
                    let { x: R, y: P } = N;
                    return {
                        x: R,
                        y: P
                    };
                }, "fn")
            }, ...g } = SS(r, e), _ = {
                x: a,
                y: s
            }, v = await u.detectOverflow(e, g), x = e3(l), C = tIe(x);
            let E = _[C], A = _[x];
            const $ = i((N, R)=>ETt(R + v[N === "y" ? "top" : "left"], R, R - v[N === "y" ? "bottom" : "right"]), "clampCoord");
            p && (E = $(C, E)), m && (A = $(x, A));
            const I = b.fn({
                ...e,
                [C]: E,
                [x]: A
            });
            return {
                ...I,
                data: {
                    x: I.x - a,
                    y: I.y - s,
                    enabled: {
                        [C]: p,
                        [x]: m
                    }
                }
            };
        }
    };
}, "shift"), ter = i(function(r) {
    return r === void 0 && (r = {}), {
        options: r,
        fn (e) {
            var a, s;
            const { x: l, y: u, placement: p, rects: m, middlewareData: b } = e, { offset: g = 0, mainAxis: _ = !0, crossAxis: v = !0 } = SS(r, e), x = {
                x: l,
                y: u
            }, C = e3(p), E = tIe(C);
            let A = x[E], $ = x[C];
            const I = SS(g, e), N = typeof I == "number" ? {
                mainAxis: I,
                crossAxis: 0
            } : {
                mainAxis: (a = I.mainAxis) != null ? a : 0,
                crossAxis: (s = I.crossAxis) != null ? s : 0
            };
            if (_) {
                const L = E === "y" ? "height" : "width", j = m.reference[E] - m.floating[L] + N.mainAxis, z = m.reference[E] + m.reference[L] - N.mainAxis;
                A < j ? A = j : A > z && (A = z);
            }
            if (v) {
                var R, P;
                const L = E === "y" ? "width" : "height", j = GTt.has(ek(p)), z = m.reference[C] - m.floating[L] + (j && ((R = b.offset) == null ? void 0 : R[C]) || 0) + (j ? 0 : N.crossAxis), q = m.reference[C] + m.reference[L] + (j ? 0 : ((P = b.offset) == null ? void 0 : P[C]) || 0) - (j ? N.crossAxis : 0);
                $ < z ? $ = z : $ > q && ($ = q);
            }
            return {
                [E]: A,
                [C]: $
            };
        }
    };
}, "limitShift"), ner = i(function(r) {
    return r === void 0 && (r = {}), {
        name: "size",
        options: r,
        async fn (e) {
            const { placement: a, rects: s, platform: l, elements: u } = e, { apply: p = i(()=>{}, "apply"), ...m } = SS(r, e), b = await l.detectOverflow(e, m), g = ek(a), _ = OT(a), v = e3(a) === "y", { width: x, height: C } = s.floating;
            let E, A;
            g === "top" || g === "bottom" ? (E = g, A = _ === (await (l.isRTL == null ? void 0 : l.isRTL(u.floating)) ? "start" : "end") ? "left" : "right") : (A = g, E = _ === "end" ? "top" : "bottom");
            const $ = C - b.top - b.bottom, I = x - b.left - b.right, N = dB(C - b[E], $), R = dB(x - b[A], I), P = e.middlewareData.shift, L = !P;
            let j = N, z = R;
            P != null && P.enabled.x && (z = I), P != null && P.enabled.y && (j = $), L && !_ && (v ? z = x - 2 * ES(b.left, b.right) : j = C - 2 * ES(b.top, b.bottom)), await p({
                ...e,
                availableWidth: z,
                availableHeight: j
            });
            const q = await l.getDimensions(u.floating);
            return x !== q.width || C !== q.height ? {
                reset: {
                    rects: !0
                }
            } : {};
        }
    };
}, "size");

}
