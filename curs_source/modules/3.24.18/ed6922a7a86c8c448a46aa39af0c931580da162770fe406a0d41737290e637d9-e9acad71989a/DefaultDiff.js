import { xSs } from "./CodeTokenizerProvider.js";
import { A2l, C2l, Crf, DRi, E2l, G2l, I2l, LRi, MRi, Mrf, OE, PRi, R2l, Srf, T2l, Trf, _0n, a0s, grf, krf, wrf, x2l, yrf } from "./DSs.js";
import { o0s } from "./DefaultDiff.constants.js";
import { ORi } from "./DefaultDiff.stylex.js";
import { $2l } from "./DiffWrapMeasure.js";
import { hh } from "./attach.js";
import { qg } from "./cn.js";
import { Pft } from "./code-token.js";
import { Prf } from "./default-diff-presentation.js";
import { V2l } from "./default-diff-unloaded-state.js";
import { p0s, q2l } from "./diff-dom-selection.js";
import { F9e } from "./diff-lines.js";
import { prf } from "./diff-reveal-ranges.js";
import { S2l } from "./diff-word-wrap.js";
import { S0s, Ssf, cOl, k0s, ksf, lOl, msf, oOl, rOl, sOl, uOl } from "./f0s.js";
import { sp } from "./icon.js";
import { f2l } from "./line-range-set.js";
import { Nn, Ti, ni } from "./qIc.js";
import { Oc } from "./stylex.js";
import { x } from "./tslib.es6.js";
import { pY } from "./use-latest-ref.js";
import { Z2l } from "./useDefaultDiffInteraction.js";
import { eOl } from "./useDefaultDiffOverlayDock.js";
import { c as AY } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { jsx as Ab } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { jsxs as N3 } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { useState as gvt } from "./react-runtime/react/esm-index-production.js";
import { memo as mvt } from "./react-runtime/react/esm-index-production.js";
import { Fragment as v0s } from "./react-runtime/react/esm-jsx-runtime-production.js";
var GRi, VRi, fvt, pOl, mOl, gOl, fOl, vOl, jRi, qRi, _Ol, zRi, bOl, b0n, y0n;
export { GRi, VRi, _Ol, b0n, bOl, fOl, fvt, gOl, jRi, mOl, pOl, qRi, vOl, y0n, zRi };
var __wakaru_T0s_initialized = false;
export function T0s() {
if (__wakaru_T0s_initialized) return;
__wakaru_T0s_initialized = true;
"use strict";
x(), Oc(), pY(), qg(), xSs(), Pft(), F9e(), prf(), S2l(), f2l(), o0s(), ORi(), $2l(), Prf(), V2l(), q2l(), Z2l(), eOl(), hh(), sp(), GRi = 12, VRi = 11, fvt = 20, pOl = 33, mOl = 500, gOl = 4, fOl = {
    icon: {
        kmuXW: "ui-2lah0s",
        $$css: !0
    }
}, vOl = mvt(function(t) {
    const n = AY(22), { tokens: i, type: r, originalLineNumber: s, modifiedLineNumber: o, inlineChanges: a, contentLength: c, showLineNumbers: l, showPlusMinus: u, coloredLineNumbers: h, showAccentStrip: p, interaction: g, rowIndex: f, wrapInfo: v } = t, [b, y] = gvt(!1), T = a && a.length > 0 && !(a.length === 1 && a[0].startColumn === 1 && a[0].endColumn >= c + 1);
    let E;
    if (n[0] !== h || n[1] !== b || n[2] !== a || n[3] !== g || n[4] !== o || n[5] !== s || n[6] !== f || n[7] !== T || n[8] !== p || n[9] !== l || n[10] !== u || n[11] !== i || n[12] !== r || n[13] !== v) {
        const A = sOl(r), R = T && A ? rOl(i, a) : i.map(Ssf), D = l !== !1, P = l === "partial", N = o ?? s, O = h ? r : void 0, F = g, H = !!F && F.interactionGutter.rail != null && F.interactionGutter.rail !== "single";
        let $;
        n[15] !== b || n[16] !== F || n[17] !== D ? ($ = F && (b || F.interactionGutter.showPlus) ? Ab(cOl, {
            plusDragActive: F.interactionGutter.plusDragActive,
            onMouseDown: F.interactionGutter.onPlusMouseDown,
            placement: D ? "gutter" : "lineContentInteraction"
        }) : null, n[15] = b, n[16] = F, n[17] = D, n[18] = $) : $ = n[18];
        const W = $, G = !!F?.rangeSelected, q = Nn(A2l({
            type: r,
            rangeSelected: G
        })), z = Nn(MRi({
            type: r,
            rangeSelected: G
        })), X = Nn(PRi({
            type: r,
            rangeSelected: G,
            withIndicatorStrip: p
        })), Y = Nn(LRi({
            dataType: O
        })), Z = Nn(R2l({
            type: r
        })), K = Nn(E2l()), J = Nn(T2l()), ne = Nn(_0n()), ee = Nn(_0n(), DRi()), se = Nn(I2l()), re = Nn(C2l()), ue = T && A ? oOl(r) : null;
        let ce;
        n[19] !== F || n[20] !== f ? (ce = F ? {
            "data-ui-default-diff-interactive-row": !0,
            ...f !== void 0 && f >= 0 ? {
                [p0s]: String(f)
            } : {},
            onMouseEnter: ()=>{
                y(!0), F.onLineMouseEnter();
            },
            onMouseLeave: (de)=>{
                y(!1), F.onLineMouseLeave(de);
            }
        } : {}, n[19] = F, n[20] = f, n[21] = ce) : ce = n[21], E = N3("div", {
            className: ni("ui-default-diff__line", G && "ui-default-diff__line--range-selected", q.className),
            "data-type": r,
            style: q.style,
            ...ce,
            children: [
                p && Ab("div", {
                    className: ni("ui-default-diff__indicator-strip", z.className),
                    style: z.style
                }),
                D && N3("div", {
                    className: ni("ui-default-diff__gutter", X.className),
                    "data-type": r,
                    style: X.style,
                    children: [
                        P ? Ab("span", {
                            className: ni("ui-default-diff__line-number", Y.className),
                            "data-type": O,
                            style: Y.style,
                            children: N ?? ""
                        }) : N3(v0s, {
                            children: [
                                Ab("span", {
                                    className: ni("ui-default-diff__line-number", Y.className),
                                    "data-type": O,
                                    style: Y.style,
                                    children: s ?? ""
                                }),
                                Ab("span", {
                                    className: ni("ui-default-diff__line-number", Y.className),
                                    "data-type": O,
                                    style: Y.style,
                                    children: o ?? ""
                                })
                            ]
                        }),
                        u && N3("span", {
                            className: ni("ui-default-diff__line-indicator", Z.className),
                            style: Z.style,
                            children: [
                                r === "added" && "+",
                                r === "removed" && "-",
                                r === "unchanged" && "\xA0"
                            ]
                        }),
                        W
                    ]
                }),
                F ? Ab("div", {
                    className: ni("ui-default-diff__line-code-column", K.className),
                    style: K.style,
                    children: N3("div", {
                        className: ni("ui-default-diff__line-code-area", J.className),
                        style: J.style,
                        children: [
                            N3("div", {
                                className: ni("ui-default-diff__line-content", "ui-default-diff__line-content--interaction", ee.className),
                                style: ee.style,
                                children: [
                                    D ? null : W,
                                    S0s(R, A, ue, v),
                                    F.selectionEndMarker ? Ab("span", {
                                        "aria-hidden": !0,
                                        className: ni("ui-default-diff__selection-end-sentinel", re.className),
                                        "data-ui-default-diff-selection-end": !0,
                                        style: re.style
                                    }) : null
                                ]
                            }),
                            H ? Ab("div", {
                                "aria-hidden": !0,
                                className: ni("ui-default-diff__selection-rail", se.className),
                                style: se.style
                            }) : null
                        ]
                    })
                }) : Ab("div", {
                    className: ni("ui-default-diff__line-content", ne.className),
                    style: ne.style,
                    children: S0s(R, A, ue, v)
                })
            ]
        }), n[0] = h, n[1] = b, n[2] = a, n[3] = g, n[4] = o, n[5] = s, n[6] = f, n[7] = T, n[8] = p, n[9] = l, n[10] = u, n[11] = i, n[12] = r, n[13] = v, n[14] = E;
    } else E = n[14];
    return E;
}), jRi = mvt(function(t) {
    const n = AY(54), { lineCount: i, unloaded: r, onExpandUp: s, onExpandDown: o, onExpandAll: a } = t, c = r === void 0 ? !1 : r, l = Mrf(), u = G2l(), h = c && u === "unavailable", p = !!s && !h, g = !!o && !h, f = !c && p && g && i <= fvt, v = p || g, b = f ? 1 : (p ? 1 : 0) + (g ? 1 : 0), y = b === 0;
    let T;
    n[0] !== a || n[1] !== o || n[2] !== s ? (T = ()=>{
        if (a) {
            a();
            return;
        }
        s?.(), o?.();
    }, n[0] = a, n[1] = o, n[2] = s, n[3] = T) : T = n[3];
    const E = T;
    let A;
    n[4] !== i || n[5] !== c || n[6] !== u ? (A = c ? msf(u) : `${i} unmodified ${i === 1 ? "line" : "lines"}`, n[4] = i, n[5] = c, n[6] = u, n[7] = A) : A = n[7];
    const R = A, D = c && u === "failed" ? "Retry loading unmodified lines" : `Expand ${R}`;
    let P, N, O, F, H, $, W, G;
    if (n[8] !== b || n[9] !== E || n[10] !== v || n[11] !== i || n[12] !== y || n[13] !== o || n[14] !== s || n[15] !== l || n[16] !== g || n[17] !== f || n[18] !== p || n[19] !== c) {
        const X = Nn(yrf({
            noButtons: y,
            presentation: l
        })), Y = Nn(Srf()), Z = Nn(krf(l));
        let K;
        n[28] === Symbol.for("react.memo_cache_sentinel") ? (K = Nn(wrf()), n[28] = K) : K = n[28];
        const J = K;
        let ne, ee;
        n[29] !== v || n[30] !== y || n[31] !== l ? (ne = Nn(Crf({
            noButtons: y,
            presentation: l,
            clickable: v
        })), ee = ni("ui-default-diff__separator-text", ne.className), n[29] = v, n[30] = y, n[31] = l, n[32] = ne, n[33] = ee) : (ne = n[32], ee = n[33]), P = ee, N = ne.style;
        const se = Nn(Trf());
        O = ni("ui-default-diff__separator", X.className), F = l === "unified-diff" ? "" : void 0, H = b === 0 ? "none" : b === 1 ? "single" : "dual", $ = X.style;
        let re;
        n[34] !== i || n[35] !== c ? (re = c ? `
[unmodified lines not loaded]

` : lOl(i), n[34] = i, n[35] = c, n[36] = re) : re = n[36], n[37] !== re ? (W = Ab("span", {
            "aria-hidden": !0,
            className: ni("ui-default-diff__separator-copy-text", se.className),
            style: se.style,
            children: re
        }), n[37] = re, n[38] = W) : W = n[38], G = v && Ab("div", {
            className: ni("ui-default-diff__separator-buttons", Y.className),
            style: Y.style,
            children: f ? N3("button", {
                "aria-label": "Expand all",
                className: ni("ui-default-diff__expand-btn", Z.className),
                onClick: E,
                style: Z.style,
                type: "button",
                children: [
                    Ab(Ti, {
                        "aria-hidden": !0,
                        name: "chevron-down",
                        size: "sm"
                    }),
                    Ab(Ti, {
                        "aria-hidden": !0,
                        name: "chevron-up",
                        size: "sm",
                        className: J.className,
                        style: J.style
                    })
                ]
            }) : N3(v0s, {
                children: [
                    p && Ab("button", {
                        "aria-label": "Expand up",
                        className: ni("ui-default-diff__expand-btn", Z.className),
                        onClick: s,
                        style: Z.style,
                        type: "button",
                        children: Ab(Ti, {
                            "aria-hidden": !0,
                            name: "chevron-down",
                            size: "sm"
                        })
                    }),
                    g && Ab("button", {
                        "aria-label": "Expand down",
                        className: ni("ui-default-diff__expand-btn", Z.className),
                        onClick: o,
                        style: Z.style,
                        type: "button",
                        children: Ab(Ti, {
                            "aria-hidden": !0,
                            name: "chevron-up",
                            size: "sm"
                        })
                    })
                ]
            })
        }), n[8] = b, n[9] = E, n[10] = v, n[11] = i, n[12] = y, n[13] = o, n[14] = s, n[15] = l, n[16] = g, n[17] = f, n[18] = p, n[19] = c, n[20] = P, n[21] = N, n[22] = O, n[23] = F, n[24] = H, n[25] = $, n[26] = W, n[27] = G;
    } else P = n[20], N = n[21], O = n[22], F = n[23], H = n[24], $ = n[25], W = n[26], G = n[27];
    let q;
    n[39] !== D || n[40] !== E || n[41] !== v || n[42] !== P || n[43] !== N || n[44] !== R ? (q = v ? Ab("button", {
        "aria-label": D,
        className: P,
        onClick: E,
        style: N,
        type: "button",
        children: R
    }) : Ab("span", {
        className: P,
        style: N,
        children: R
    }), n[39] = D, n[40] = E, n[41] = v, n[42] = P, n[43] = N, n[44] = R, n[45] = q) : q = n[45];
    let z;
    return n[46] !== q || n[47] !== O || n[48] !== F || n[49] !== H || n[50] !== $ || n[51] !== W || n[52] !== G ? (z = N3("div", {
        className: O,
        "data-default-diff-separator": F,
        "data-buttons": H,
        style: $,
        children: [
            W,
            G,
            q
        ]
    }), n[46] = q, n[47] = O, n[48] = F, n[49] = H, n[50] = $, n[51] = W, n[52] = G, n[53] = z) : z = n[53], z;
}), qRi = mvt(function(t) {
    const n = AY(65), { line: i, tokens: r, side: s, showLineNumbers: o, coloredLineNumbers: a, showAccentStrip: c, rangeSelected: l, interactionGutter: u, hovered: h, selectionEndMarker: p, wrapInfo: g, pairWrapRowCount: f } = t, v = u, b = !!v && v.rail != null && v.rail !== "single";
    let y;
    n[0] !== h || n[1] !== v || n[2] !== o ? (y = v && (h || v.showPlus) ? Ab(cOl, {
        plusDragActive: v.plusDragActive,
        onMouseDown: v.onPlusMouseDown,
        placement: o !== !1 ? "gutter" : "lineContentInteraction"
    }) : null, n[0] = h, n[1] = v, n[2] = o, n[3] = y) : y = n[3];
    const T = y;
    let E, A, R, D, P, N, O, F, H, $, W;
    if (n[4] !== T || n[5] !== a || n[6] !== v || n[7] !== i || n[8] !== f || n[9] !== l || n[10] !== p || n[11] !== c || n[12] !== o || n[13] !== b || n[14] !== s || n[15] !== r || n[16] !== g) {
        R = Symbol.for("react.early_return_sentinel");
        e: {
            const z = Nn(x2l()), X = Nn(I2l()), Y = Nn(C2l());
            if (!i) {
                const Ge = Nn(a0s({
                    type: "empty",
                    rangeSelected: !!l
                })), Xe = Nn(PRi({
                    type: void 0,
                    rangeSelected: !!l,
                    withIndicatorStrip: c
                })), Ke = Nn(MRi({
                    type: "unchanged",
                    rangeSelected: !!l
                })), et = Nn(LRi({
                    dataType: void 0
                })), We = Nn(_0n(), v && DRi()), it = ni("ui-default-diff__split-cell", l && "ui-default-diff__split-cell--range-selected", Ge.className), Ne = Ge.style;
                let Fe;
                n[28] !== f ? (Fe = uOl(f), n[28] = f, n[29] = Fe) : Fe = n[29];
                let Qe;
                n[30] !== Ge || n[31] !== Fe ? (Qe = {
                    ...Ne,
                    ...Fe
                }, n[30] = Ge, n[31] = Fe, n[32] = Qe) : Qe = n[32];
                let tt;
                n[33] !== p ? (tt = p ? {
                    "data-ui-default-diff-selection-end": !0
                } : {}, n[33] = p, n[34] = tt) : tt = n[34];
                const st = ni("ui-default-diff__split-cell-code-area", z.className), vt = z.style, ht = ni("ui-default-diff__line-content", v && "ui-default-diff__line-content--interaction", We.className), ut = o === !1 ? T : null;
                let Dt;
                n[35] !== We || n[36] !== ht || n[37] !== ut ? (Dt = Ab("div", {
                    className: ht,
                    style: We.style,
                    children: ut
                }), n[35] = We, n[36] = ht, n[37] = ut, n[38] = Dt) : Dt = n[38], R = N3("div", {
                    className: it,
                    "data-type": "empty",
                    style: Qe,
                    ...tt,
                    children: [
                        c && Ab("div", {
                            className: ni("ui-default-diff__indicator-strip", Ke.className),
                            style: Ke.style
                        }),
                        o !== !1 && N3("div", {
                            className: ni("ui-default-diff__gutter", Xe.className),
                            style: Xe.style,
                            children: [
                                Ab("span", {
                                    className: ni("ui-default-diff__line-number", et.className),
                                    style: et.style
                                }),
                                T
                            ]
                        }),
                        N3("div", {
                            className: st,
                            style: vt,
                            children: [
                                Dt,
                                b ? Ab("div", {
                                    "aria-hidden": !0,
                                    className: ni("ui-default-diff__selection-rail", X.className),
                                    style: X.style
                                }) : null
                            ]
                        })
                    ]
                });
                break e;
            }
            const Z = i.type === "unchanged" ? "unchanged" : i.type, K = s === "left" ? i.originalLineNumber : i.modifiedLineNumber, J = i.inlineChanges && i.inlineChanges.length > 0 && !(i.inlineChanges.length === 1 && i.inlineChanges[0].startColumn === 1 && i.inlineChanges[0].endColumn >= i.content.length + 1), ne = sOl(Z), ee = J && ne ? rOl(r, i.inlineChanges) : r.map(ksf), se = a ? Z : void 0, re = Nn(a0s({
                type: Z,
                rangeSelected: !!l
            })), ue = Nn(MRi({
                type: Z,
                rangeSelected: !!l
            })), ce = Nn(PRi({
                type: Z,
                rangeSelected: !!l,
                withIndicatorStrip: c
            })), de = Nn(LRi({
                dataType: se
            })), le = Nn(_0n(), v && DRi()), ye = J && ne ? oOl(Z) : null;
            F = ni("ui-default-diff__split-cell", l && "ui-default-diff__split-cell--range-selected", re.className), H = Z;
            const _e = re.style;
            let me;
            n[39] !== f ? (me = uOl(f), n[39] = f, n[40] = me) : me = n[40], n[41] !== re || n[42] !== me ? ($ = {
                ..._e,
                ...me
            }, n[41] = re, n[42] = me, n[43] = $) : $ = n[43], n[44] !== p ? (W = p ? {
                "data-ui-default-diff-selection-end": !0
            } : {}, n[44] = p, n[45] = W) : W = n[45], E = c && Ab("div", {
                className: ni("ui-default-diff__indicator-strip", ue.className),
                style: ue.style
            }), A = o !== !1 && N3("div", {
                className: ni("ui-default-diff__gutter", ce.className),
                "data-type": Z,
                style: ce.style,
                children: [
                    Ab("span", {
                        className: ni("ui-default-diff__line-number", de.className),
                        "data-type": se,
                        style: de.style,
                        children: K ?? ""
                    }),
                    T
                ]
            }), D = ni("ui-default-diff__split-cell-code-area", z.className), P = z.style;
            const Ce = ni("ui-default-diff__line-content", v && "ui-default-diff__line-content--interaction", le.className), xe = le.style, Le = o === !1 ? T : null, Be = S0s(ee, ne, ye, g), je = p ? Ab("span", {
                "aria-hidden": !0,
                className: ni("ui-default-diff__selection-end-sentinel", Y.className),
                "data-ui-default-diff-selection-end": !0,
                style: Y.style
            }) : null;
            n[46] !== le || n[47] !== Ce || n[48] !== Le || n[49] !== Be || n[50] !== je ? (N = N3("div", {
                className: Ce,
                style: xe,
                children: [
                    Le,
                    Be,
                    je
                ]
            }), n[46] = le, n[47] = Ce, n[48] = Le, n[49] = Be, n[50] = je, n[51] = N) : N = n[51], O = b ? Ab("div", {
                "aria-hidden": !0,
                className: ni("ui-default-diff__selection-rail", X.className),
                style: X.style
            }) : null;
        }
        n[4] = T, n[5] = a, n[6] = v, n[7] = i, n[8] = f, n[9] = l, n[10] = p, n[11] = c, n[12] = o, n[13] = b, n[14] = s, n[15] = r, n[16] = g, n[17] = E, n[18] = A, n[19] = R, n[20] = D, n[21] = P, n[22] = N, n[23] = O, n[24] = F, n[25] = H, n[26] = $, n[27] = W;
    } else E = n[17], A = n[18], R = n[19], D = n[20], P = n[21], N = n[22], O = n[23], F = n[24], H = n[25], $ = n[26], W = n[27];
    if (R !== Symbol.for("react.early_return_sentinel")) return R;
    let G;
    n[52] !== D || n[53] !== P || n[54] !== N || n[55] !== O ? (G = N3("div", {
        className: D,
        style: P,
        children: [
            N,
            O
        ]
    }), n[52] = D, n[53] = P, n[54] = N, n[55] = O, n[56] = G) : G = n[56];
    let q;
    return n[57] !== E || n[58] !== A || n[59] !== G || n[60] !== F || n[61] !== H || n[62] !== $ || n[63] !== W ? (q = N3("div", {
        className: F,
        "data-type": H,
        style: $,
        ...W,
        children: [
            E,
            A,
            G
        ]
    }), n[57] = E, n[58] = A, n[59] = G, n[60] = F, n[61] = H, n[62] = $, n[63] = W, n[64] = q) : q = n[64], q;
}), _Ol = mvt(function(t) {
    const n = AY(29), { pair: i, leftTokens: r, rightTokens: s, showLineNumbers: o, coloredLineNumbers: a, showAccentStrip: c, wrapLayout: l } = t;
    let u;
    n[0] !== i.left?.content || n[1] !== i.right?.content || n[2] !== l ? (u = l ? l.rowCountForPair(i.left?.content, i.right?.content) : void 0, n[0] = i.left?.content, n[1] = i.right?.content, n[2] = l, n[3] = u) : u = n[3];
    const h = u;
    let p;
    n[4] !== i.left || n[5] !== l ? (p = i.left ? l?.infoFor(i.left.content) : null, n[4] = i.left, n[5] = l, n[6] = p) : p = n[6];
    let g;
    n[7] !== a || n[8] !== r || n[9] !== i.left || n[10] !== h || n[11] !== c || n[12] !== o || n[13] !== p ? (g = Ab(qRi, {
        line: i.left,
        tokens: r,
        side: "left",
        showLineNumbers: o,
        coloredLineNumbers: a,
        showAccentStrip: c,
        wrapInfo: p,
        pairWrapRowCount: h
    }), n[7] = a, n[8] = r, n[9] = i.left, n[10] = h, n[11] = c, n[12] = o, n[13] = p, n[14] = g) : g = n[14];
    let f;
    n[15] !== i.right || n[16] !== l ? (f = i.right ? l?.infoFor(i.right.content) : null, n[15] = i.right, n[16] = l, n[17] = f) : f = n[17];
    let v;
    n[18] !== a || n[19] !== i.right || n[20] !== h || n[21] !== s || n[22] !== c || n[23] !== o || n[24] !== f ? (v = Ab(qRi, {
        line: i.right,
        tokens: s,
        side: "right",
        showLineNumbers: o,
        coloredLineNumbers: a,
        showAccentStrip: c,
        wrapInfo: f,
        pairWrapRowCount: h
    }), n[18] = a, n[19] = i.right, n[20] = h, n[21] = s, n[22] = c, n[23] = o, n[24] = f, n[25] = v) : v = n[25];
    let b;
    return n[26] !== g || n[27] !== v ? (b = N3("div", {
        className: "ui-default-diff__split-row",
        children: [
            g,
            v
        ]
    }), n[26] = g, n[27] = v, n[28] = b) : b = n[28], b;
}), zRi = [
    {
        content: "",
        col: 0
    }
], bOl = mvt(function(t) {
    const n = AY(35), { entry: i, visibleLineTokens: r, precomputedLineTokens: s, asyncLineTokens: o, showLineNumbers: a, coloredLineNumbers: c, showAccentStrip: l, onExpandUp: u, onExpandDown: h, onExpandAll: p, wrapLayout: g } = t, f = i.item;
    if (OE(f)) {
        let R;
        n[0] !== i.key || n[1] !== p ? (R = p ? ()=>p(i.key) : void 0, n[0] = i.key, n[1] = p, n[2] = R) : R = n[2];
        const D = f.unloadedEdge !== void 0;
        let P;
        n[3] !== i.key || n[4] !== f.unloadedEdge || n[5] !== h ? (P = h && f.unloadedEdge !== "after" ? ()=>h(i.key) : void 0, n[3] = i.key, n[4] = f.unloadedEdge, n[5] = h, n[6] = P) : P = n[6];
        let N;
        n[7] !== i.key || n[8] !== f.unloadedEdge || n[9] !== u ? (N = u && f.unloadedEdge !== "before" ? ()=>u(i.key) : void 0, n[7] = i.key, n[8] = f.unloadedEdge, n[9] = u, n[10] = N) : N = n[10];
        let O;
        return n[11] !== f.lineCount || n[12] !== R || n[13] !== D || n[14] !== P || n[15] !== N ? (O = Ab(jRi, {
            lineCount: f.lineCount,
            onExpandAll: R,
            unloaded: D,
            onExpandDown: P,
            onExpandUp: N
        }), n[11] = f.lineCount, n[12] = R, n[13] = D, n[14] = P, n[15] = N, n[16] = O) : O = n[16], O;
    }
    const v = f;
    let b;
    n[17] !== o || n[18] !== v.left || n[19] !== s || n[20] !== r ? (b = v.left ? k0s(v.left, "left", r, o, s) : zRi, n[17] = o, n[18] = v.left, n[19] = s, n[20] = r, n[21] = b) : b = n[21];
    const y = b;
    let T;
    n[22] !== o || n[23] !== v.right || n[24] !== s || n[25] !== r ? (T = v.right ? k0s(v.right, "right", r, o, s) : zRi, n[22] = o, n[23] = v.right, n[24] = s, n[25] = r, n[26] = T) : T = n[26];
    const E = T;
    let A;
    return n[27] !== c || n[28] !== y || n[29] !== v || n[30] !== E || n[31] !== l || n[32] !== a || n[33] !== g ? (A = Ab(_Ol, {
        pair: v,
        leftTokens: y,
        rightTokens: E,
        showLineNumbers: a,
        coloredLineNumbers: c,
        showAccentStrip: l,
        wrapLayout: g
    }), n[27] = c, n[28] = y, n[29] = v, n[30] = E, n[31] = l, n[32] = a, n[33] = g, n[34] = A) : A = n[34], A;
}), b0n = mvt(function(t) {
    const n = AY(61), { entry: i, side: r, visibleLineTokens: s, precomputedLineTokens: o, asyncLineTokens: a, showLineNumbers: c, coloredLineNumbers: l, showAccentStrip: u, onExpandUp: h, onExpandDown: p, onExpandAll: g, splitPaneInteraction: f, wrapLayout: v } = t, [b, y] = gvt(!1), T = i.item;
    if (OE(T)) {
        let ee;
        n[0] !== i.key || n[1] !== g ? (ee = g ? ()=>g(i.key) : void 0, n[0] = i.key, n[1] = g, n[2] = ee) : ee = n[2];
        const se = T.unloadedEdge !== void 0;
        let re;
        n[3] !== i.key || n[4] !== T.unloadedEdge || n[5] !== p ? (re = p && T.unloadedEdge !== "after" ? ()=>p(i.key) : void 0, n[3] = i.key, n[4] = T.unloadedEdge, n[5] = p, n[6] = re) : re = n[6];
        let ue;
        n[7] !== i.key || n[8] !== T.unloadedEdge || n[9] !== h ? (ue = h && T.unloadedEdge !== "before" ? ()=>h(i.key) : void 0, n[7] = i.key, n[8] = T.unloadedEdge, n[9] = h, n[10] = ue) : ue = n[10];
        let ce;
        return n[11] !== T.lineCount || n[12] !== ee || n[13] !== se || n[14] !== re || n[15] !== ue ? (ce = Ab(jRi, {
            lineCount: T.lineCount,
            onExpandAll: ee,
            unloaded: se,
            onExpandDown: re,
            onExpandUp: ue
        }), n[11] = T.lineCount, n[12] = ee, n[13] = se, n[14] = re, n[15] = ue, n[16] = ce) : ce = n[16], ce;
    }
    const E = T, A = r === "left" ? E.left : E.right;
    let R;
    n[17] !== a || n[18] !== A || n[19] !== o || n[20] !== r || n[21] !== s ? (R = A ? k0s(A, r, s, a, o) : zRi, n[17] = a, n[18] = A, n[19] = o, n[20] = r, n[21] = s, n[22] = R) : R = n[22];
    const D = R;
    let P;
    n[23] !== i || n[24] !== r || n[25] !== f ? (P = f?.(i, r), n[23] = i, n[24] = r, n[25] = f, n[26] = P) : P = n[26];
    const N = P, O = i.rowIndex, F = N?.rangeSelected, H = N?.interactionGutter, $ = N?.selectionEndMarker;
    let W;
    n[27] !== A || n[28] !== v ? (W = A ? v?.infoFor(A.content) : null, n[27] = A, n[28] = v, n[29] = W) : W = n[29];
    let G;
    n[30] !== E.left?.content || n[31] !== E.right?.content || n[32] !== v ? (G = v ? v.rowCountForPair(E.left?.content, E.right?.content) : void 0, n[30] = E.left?.content, n[31] = E.right?.content, n[32] = v, n[33] = G) : G = n[33];
    let q;
    n[34] !== l || n[35] !== b || n[36] !== A || n[37] !== u || n[38] !== c || n[39] !== r || n[40] !== F || n[41] !== H || n[42] !== $ || n[43] !== W || n[44] !== G || n[45] !== D ? (q = Ab(qRi, {
        line: A,
        tokens: D,
        side: r,
        showLineNumbers: c,
        coloredLineNumbers: l,
        showAccentStrip: u,
        rangeSelected: F,
        interactionGutter: H,
        hovered: b,
        selectionEndMarker: $,
        wrapInfo: W,
        pairWrapRowCount: G
    }), n[34] = l, n[35] = b, n[36] = A, n[37] = u, n[38] = c, n[39] = r, n[40] = F, n[41] = H, n[42] = $, n[43] = W, n[44] = G, n[45] = D, n[46] = q) : q = n[46];
    const z = q;
    if (!N) return z;
    let X, Y;
    n[47] === Symbol.for("react.memo_cache_sentinel") ? (X = Nn(grf()), Y = ni("ui-default-diff__interactive-row", X.className), n[47] = X, n[48] = Y) : (X = n[47], Y = n[48]);
    let Z;
    n[49] !== O ? (Z = O !== void 0 && O >= 0 ? {
        [p0s]: String(O)
    } : {}, n[49] = O, n[50] = Z) : Z = n[50];
    let K, J;
    n[51] !== N ? (K = ()=>{
        y(!0), N.onLineMouseEnter();
    }, J = (ee)=>{
        y(!1), N.onLineMouseLeave(ee);
    }, n[51] = N, n[52] = K, n[53] = J) : (K = n[52], J = n[53]);
    let ne;
    return n[54] !== z || n[55] !== X.style || n[56] !== Z || n[57] !== K || n[58] !== J || n[59] !== Y ? (ne = Ab("fieldset", {
        className: Y,
        "data-ui-default-diff-interactive-row": !0,
        ...Z,
        onMouseEnter: K,
        onMouseLeave: J,
        style: X.style,
        children: z
    }), n[54] = z, n[55] = X.style, n[56] = Z, n[57] = K, n[58] = J, n[59] = Y, n[60] = ne) : ne = n[60], ne;
}), y0n = mvt(function(t) {
    const n = AY(48), { entry: i, visibleLineTokens: r, precomputedLineTokens: s, asyncLineTokens: o, showLineNumbers: a, showPlusMinus: c, coloredLineNumbers: l, showAccentStrip: u, onExpandUp: h, onExpandDown: p, onExpandAll: g, lineInteraction: f, wrapLayout: v } = t, b = i.item;
    if (OE(b)) {
        let O;
        n[0] !== i.key || n[1] !== g ? (O = g ? ()=>g(i.key) : void 0, n[0] = i.key, n[1] = g, n[2] = O) : O = n[2];
        const F = b.unloadedEdge !== void 0;
        let H;
        n[3] !== i.key || n[4] !== b.unloadedEdge || n[5] !== p ? (H = p && b.unloadedEdge !== "after" ? ()=>p(i.key) : void 0, n[3] = i.key, n[4] = b.unloadedEdge, n[5] = p, n[6] = H) : H = n[6];
        let $;
        n[7] !== i.key || n[8] !== b.unloadedEdge || n[9] !== h ? ($ = h && b.unloadedEdge !== "before" ? ()=>h(i.key) : void 0, n[7] = i.key, n[8] = b.unloadedEdge, n[9] = h, n[10] = $) : $ = n[10];
        let W;
        return n[11] !== b.lineCount || n[12] !== O || n[13] !== F || n[14] !== H || n[15] !== $ ? (W = Ab(jRi, {
            lineCount: b.lineCount,
            onExpandAll: O,
            unloaded: F,
            onExpandDown: H,
            onExpandUp: $
        }), n[11] = b.lineCount, n[12] = O, n[13] = F, n[14] = H, n[15] = $, n[16] = W) : W = n[16], W;
    }
    const y = b, T = y.originalTokenLineNumber ?? y.originalLineNumber, E = y.modifiedTokenLineNumber ?? y.modifiedLineNumber, A = y.type === "removed" ? `orig:${T}` : `mod:${E}`;
    let R;
    if (r?.has(A)) {
        let O;
        n[17] !== A || n[18] !== r ? (O = r.get(A), n[17] = A, n[18] = r, n[19] = O) : O = n[19], R = O;
    } else if (s?.has(A)) {
        let O;
        n[20] !== s || n[21] !== A ? (O = s.get(A), n[20] = s, n[21] = A, n[22] = O) : O = n[22], R = O;
    } else if (o?.has(A)) {
        let O;
        n[23] !== o || n[24] !== A ? (O = o.get(A), n[23] = o, n[24] = A, n[25] = O) : O = n[25], R = O;
    } else {
        let O;
        n[26] !== y.content ? (O = [
            {
                content: y.content,
                col: 0
            }
        ], n[26] = y.content, n[27] = O) : O = n[27], R = O;
    }
    let D;
    n[28] !== i || n[29] !== f ? (D = f?.(i), n[28] = i, n[29] = f, n[30] = D) : D = n[30];
    let P;
    n[31] !== y.content || n[32] !== v ? (P = v?.infoFor(y.content), n[31] = y.content, n[32] = v, n[33] = P) : P = n[33];
    let N;
    return n[34] !== l || n[35] !== i.rowIndex || n[36] !== y.content.length || n[37] !== y.inlineChanges || n[38] !== y.modifiedLineNumber || n[39] !== y.originalLineNumber || n[40] !== y.type || n[41] !== R || n[42] !== u || n[43] !== a || n[44] !== c || n[45] !== D || n[46] !== P ? (N = Ab(vOl, {
        tokens: R,
        type: y.type,
        originalLineNumber: y.originalLineNumber,
        modifiedLineNumber: y.modifiedLineNumber,
        inlineChanges: y.inlineChanges,
        contentLength: y.content.length,
        showLineNumbers: a,
        showPlusMinus: c,
        coloredLineNumbers: l,
        showAccentStrip: u,
        interaction: D,
        rowIndex: i.rowIndex,
        wrapInfo: P
    }), n[34] = l, n[35] = i.rowIndex, n[36] = y.content.length, n[37] = y.inlineChanges, n[38] = y.modifiedLineNumber, n[39] = y.originalLineNumber, n[40] = y.type, n[41] = R, n[42] = u, n[43] = a, n[44] = c, n[45] = D, n[46] = P, n[47] = N) : N = n[47], N;
});

}
