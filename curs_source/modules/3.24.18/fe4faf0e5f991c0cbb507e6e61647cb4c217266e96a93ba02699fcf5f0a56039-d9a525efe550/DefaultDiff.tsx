import { e6r } from "./CodeTokenizerProvider.tsx";
import { FAr } from "./DefaultDiff.constants.ts";
import { xGt } from "./DefaultDiff.stylex.ts";
import { ECi } from "./DiffWrapMeasure.tsx";
import { BGt, BTr, DGt, DTr, FGt, FTr, GGt, LGt, LTr, MGt, MTr, NTr, OGt, OTr, PGt, PTr, RGt, RTr, UGt, WGt, aLe, eLe, iLe, jGt, jTr, nLe, oLe, qGt, qTr, rLe, tLe, zGt, zTr } from "./ITr.js";
import { Zr, rd } from "./cn.ts";
import { DB } from "./code-token.ts";
import { ACi } from "./default-diff-presentation.tsx";
import { TCi } from "./default-diff-unloaded-state.tsx";
import { $Ci, $Gt } from "./diff-dom-selection.ts";
import { Vje } from "./diff-lines.ts";
import { SCi } from "./diff-reveal-ranges.ts";
import { DAr } from "./diff-word-wrap.ts";
import { $Q, GAr, Gge, HAr, Hge, KAr, OAr, VAr, WAr, Wge, Yje, ZAr, Zge, _Gt, bGt, gGt, hGt, iTr, kGt, sTr, sd, wGt, yGt } from "./f6r.js";
import { Mn } from "./icon.tsx";
import { ji } from "./index_2.ts";
import { Ra } from "./index_4.ts";
import { PAr } from "./line-range-set.ts";
import { i } from "./plugin-brand-icon.js";
import { Ho, wn } from "./stylex.mjs";
import { Rme } from "./use-latest-ref.ts";
import { NCi } from "./useDefaultDiffInteraction.ts";
import { PCi } from "./useDefaultDiffOverlayDock.tsx";
import { jsxs as Af } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { memo as Az } from "./react-runtime/react/esm-index-production.js";
import { c as My } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useState as Tz } from "./react-runtime/react/esm-index-production.js";
import { Fragment as w8t } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { jsx as ws } from "./react-runtime/react/esm-jsx-runtime-production.js";
var HGt, ZGt, lq, UTr, GTr, WTr, HTr, ZTr, sLe, cLe, VTr, lLe, KTr, VGt, uLe;
export { GTr, HGt, HTr, KTr, UTr, VGt, VTr, WTr, ZGt, ZTr, cLe, lLe, lq, sLe, uLe };
var __wakaru_jCi_initialized = false;
export function jCi() {
if (__wakaru_jCi_initialized) return;
__wakaru_jCi_initialized = true;
"use strict";
Ho(), Rme(), ji(), rd(), e6r(), DB(), Vje(), SCi(), DAr(), PAr(), Ra(), FAr(), xGt(), ECi(), ACi(), TCi(), $Ci(), NCi(), PCi(), FAr(), HGt = 12, ZGt = 11, lq = 20, UTr = 33, i(NTr, "collapsedSeparatorHeightPx"), GTr = 500, i(MGt, "useSplitViewFitsContainer"), i(RGt, "sliceLines"), WTr = 4, i(MTr, "maxLineNumberWidthCh"), i(PGt, "buildDefaultDiffRootStyle"), i(eLe, "DefaultDiffFrame"), i(jGt, "SplitDiffPanesFrame"), i(LGt, "splitTokensWithHighlights"), i(tLe, "markHighlightRunBoundaries"), i(DGt, "getInlineHighlightClass"), i(FGt, "getInlineHighlightSxSet"), i(RTr, "selectInlineHighlightSx"), i(OGt, "renderTokenSpan"), i(nLe, "renderLineContentTokens"), HTr = {
    icon: {
        kmuXW: "ui-2lah0s",
        $$css: !0
    }
}, i(zGt, "AddLineButton"), ZTr = Az(i(function(e) {
    const a = My(22), { tokens: s, type: l, originalLineNumber: u, modifiedLineNumber: p, inlineChanges: m, contentLength: b, showLineNumbers: g, showPlusMinus: _, coloredLineNumbers: v, showAccentStrip: x, interaction: C, rowIndex: E, wrapInfo: A } = e, [$, I] = Tz(!1), N = m && m.length > 0 && !(m.length === 1 && m[0].startColumn === 1 && m[0].endColumn >= b + 1);
    let R;
    if (a[0] !== v || a[1] !== $ || a[2] !== m || a[3] !== C || a[4] !== p || a[5] !== u || a[6] !== E || a[7] !== N || a[8] !== x || a[9] !== g || a[10] !== _ || a[11] !== s || a[12] !== l || a[13] !== A) {
        const P = DGt(l), L = N && P ? LGt(s, m) : s.map(BTr), j = g !== !1, z = g === "partial", q = p ?? u, O = v ? l : void 0, B = C, V = !!B && B.interactionGutter.rail != null && B.interactionGutter.rail !== "single";
        let H;
        a[15] !== $ || a[16] !== B || a[17] !== j ? (H = B && ($ || B.interactionGutter.showPlus) ? ws(zGt, {
            plusDragActive: B.interactionGutter.plusDragActive,
            onMouseDown: B.interactionGutter.onPlusMouseDown,
            placement: j ? "gutter" : "lineContentInteraction"
        }) : null, a[15] = $, a[16] = B, a[17] = j, a[18] = H) : H = a[18];
        const Z = H, K = !!B?.rangeSelected, Y = wn(_Gt({
            type: l,
            rangeSelected: K
        })), J = wn(Wge({
            type: l,
            rangeSelected: K
        })), re = wn(Hge({
            type: l,
            rangeSelected: K,
            withIndicatorStrip: x
        })), ne = wn(Zge({
            dataType: O
        })), ae = wn(kGt({
            type: l
        })), W = wn(bGt()), oe = wn(gGt()), ce = wn($Q()), Q = wn($Q(), Gge()), le = wn(wGt()), he = wn(hGt()), me = N && P ? FGt(l) : null;
        let be;
        a[19] !== B || a[20] !== E ? (be = B ? {
            "data-ui-default-diff-interactive-row": !0,
            ...E !== void 0 && E >= 0 ? {
                [$Gt]: String(E)
            } : {},
            onMouseEnter: i(()=>{
                I(!0), B.onLineMouseEnter();
            }, "onMouseEnter"),
            onMouseLeave: i((ue)=>{
                I(!1), B.onLineMouseLeave(ue);
            }, "onMouseLeave")
        } : {}, a[19] = B, a[20] = E, a[21] = be) : be = a[21], R = Af("div", {
            className: Zr("ui-default-diff__line", K && "ui-default-diff__line--range-selected", Y.className),
            "data-type": l,
            style: Y.style,
            ...be,
            children: [
                x && ws("div", {
                    className: Zr("ui-default-diff__indicator-strip", J.className),
                    style: J.style
                }),
                j && Af("div", {
                    className: Zr("ui-default-diff__gutter", re.className),
                    "data-type": l,
                    style: re.style,
                    children: [
                        z ? ws("span", {
                            className: Zr("ui-default-diff__line-number", ne.className),
                            "data-type": O,
                            style: ne.style,
                            children: q ?? ""
                        }) : Af(w8t, {
                            children: [
                                ws("span", {
                                    className: Zr("ui-default-diff__line-number", ne.className),
                                    "data-type": O,
                                    style: ne.style,
                                    children: u ?? ""
                                }),
                                ws("span", {
                                    className: Zr("ui-default-diff__line-number", ne.className),
                                    "data-type": O,
                                    style: ne.style,
                                    children: p ?? ""
                                })
                            ]
                        }),
                        _ && Af("span", {
                            className: Zr("ui-default-diff__line-indicator", ae.className),
                            style: ae.style,
                            children: [
                                l === "added" && "+",
                                l === "removed" && "-",
                                l === "unchanged" && "\xA0"
                            ]
                        }),
                        Z
                    ]
                }),
                B ? ws("div", {
                    className: Zr("ui-default-diff__line-code-column", W.className),
                    style: W.style,
                    children: Af("div", {
                        className: Zr("ui-default-diff__line-code-area", oe.className),
                        style: oe.style,
                        children: [
                            Af("div", {
                                className: Zr("ui-default-diff__line-content", "ui-default-diff__line-content--interaction", Q.className),
                                style: Q.style,
                                children: [
                                    j ? null : Z,
                                    nLe(L, P, me, A),
                                    B.selectionEndMarker ? ws("span", {
                                        "aria-hidden": !0,
                                        className: Zr("ui-default-diff__selection-end-sentinel", he.className),
                                        "data-ui-default-diff-selection-end": !0,
                                        style: he.style
                                    }) : null
                                ]
                            }),
                            V ? ws("div", {
                                "aria-hidden": !0,
                                className: Zr("ui-default-diff__selection-rail", le.className),
                                style: le.style
                            }) : null
                        ]
                    })
                }) : ws("div", {
                    className: Zr("ui-default-diff__line-content", ce.className),
                    style: ce.style,
                    children: nLe(L, P, me, A)
                })
            ]
        }), a[0] = v, a[1] = $, a[2] = m, a[3] = C, a[4] = p, a[5] = u, a[6] = E, a[7] = N, a[8] = x, a[9] = g, a[10] = _, a[11] = s, a[12] = l, a[13] = A, a[14] = R;
    } else R = a[14];
    return R;
}, "DiffLineRow")), i(BGt, "formatCollapsedRegionCopyText"), i(PTr, "unloadedSeparatorLabel"), sLe = Az(i(function(e) {
    const a = My(54), { lineCount: s, unloaded: l, onExpandUp: u, onExpandDown: p, onExpandAll: m } = e, b = l === void 0 ? !1 : l, g = iTr(), _ = sTr(), v = b && _ === "unavailable", x = !!u && !v, C = !!p && !v, E = !b && x && C && s <= lq, A = x || C, $ = E ? 1 : (x ? 1 : 0) + (C ? 1 : 0), I = $ === 0;
    let N;
    a[0] !== m || a[1] !== p || a[2] !== u ? (N = i(()=>{
        if (m) {
            m();
            return;
        }
        u?.(), p?.();
    }, "t2"), a[0] = m, a[1] = p, a[2] = u, a[3] = N) : N = a[3];
    const R = N;
    let P;
    a[4] !== s || a[5] !== b || a[6] !== _ ? (P = b ? PTr(_) : `${s} unmodified ${s === 1 ? "line" : "lines"}`, a[4] = s, a[5] = b, a[6] = _, a[7] = P) : P = a[7];
    const L = P, j = b && _ === "failed" ? "Retry loading unmodified lines" : `Expand ${L}`;
    let z, q, O, B, V, H, Z, K;
    if (a[8] !== $ || a[9] !== R || a[10] !== A || a[11] !== s || a[12] !== I || a[13] !== p || a[14] !== u || a[15] !== g || a[16] !== C || a[17] !== E || a[18] !== x || a[19] !== b) {
        const re = wn(GAr({
            noButtons: I,
            presentation: g
        })), ne = wn(WAr()), ae = wn(HAr(g));
        let W;
        a[28] === Symbol.for("react.memo_cache_sentinel") ? (W = wn(ZAr()), a[28] = W) : W = a[28];
        const oe = W;
        let ce, Q;
        a[29] !== A || a[30] !== I || a[31] !== g ? (ce = wn(VAr({
            noButtons: I,
            presentation: g,
            clickable: A
        })), Q = Zr("ui-default-diff__separator-text", ce.className), a[29] = A, a[30] = I, a[31] = g, a[32] = ce, a[33] = Q) : (ce = a[32], Q = a[33]), z = Q, q = ce.style;
        const le = wn(KAr());
        O = Zr("ui-default-diff__separator", re.className), B = g === "unified-diff" ? "" : void 0, V = $ === 0 ? "none" : $ === 1 ? "single" : "dual", H = re.style;
        let he;
        a[34] !== s || a[35] !== b ? (he = b ? `
[unmodified lines not loaded]

` : BGt(s), a[34] = s, a[35] = b, a[36] = he) : he = a[36], a[37] !== he ? (Z = ws("span", {
            "aria-hidden": !0,
            className: Zr("ui-default-diff__separator-copy-text", le.className),
            style: le.style,
            children: he
        }), a[37] = he, a[38] = Z) : Z = a[38], K = A && ws("div", {
            className: Zr("ui-default-diff__separator-buttons", ne.className),
            style: ne.style,
            children: E ? Af("button", {
                "aria-label": "Expand all",
                className: Zr("ui-default-diff__expand-btn", ae.className),
                onClick: R,
                style: ae.style,
                type: "button",
                children: [
                    ws(Mn, {
                        "aria-hidden": !0,
                        name: "chevron-down",
                        size: "sm"
                    }),
                    ws(Mn, {
                        "aria-hidden": !0,
                        name: "chevron-up",
                        size: "sm",
                        className: oe.className,
                        style: oe.style
                    })
                ]
            }) : Af(w8t, {
                children: [
                    x && ws("button", {
                        "aria-label": "Expand up",
                        className: Zr("ui-default-diff__expand-btn", ae.className),
                        onClick: u,
                        style: ae.style,
                        type: "button",
                        children: ws(Mn, {
                            "aria-hidden": !0,
                            name: "chevron-down",
                            size: "sm"
                        })
                    }),
                    C && ws("button", {
                        "aria-label": "Expand down",
                        className: Zr("ui-default-diff__expand-btn", ae.className),
                        onClick: p,
                        style: ae.style,
                        type: "button",
                        children: ws(Mn, {
                            "aria-hidden": !0,
                            name: "chevron-up",
                            size: "sm"
                        })
                    })
                ]
            })
        }), a[8] = $, a[9] = R, a[10] = A, a[11] = s, a[12] = I, a[13] = p, a[14] = u, a[15] = g, a[16] = C, a[17] = E, a[18] = x, a[19] = b, a[20] = z, a[21] = q, a[22] = O, a[23] = B, a[24] = V, a[25] = H, a[26] = Z, a[27] = K;
    } else z = a[20], q = a[21], O = a[22], B = a[23], V = a[24], H = a[25], Z = a[26], K = a[27];
    let Y;
    a[39] !== j || a[40] !== R || a[41] !== A || a[42] !== z || a[43] !== q || a[44] !== L ? (Y = A ? ws("button", {
        "aria-label": j,
        className: z,
        onClick: R,
        style: q,
        type: "button",
        children: L
    }) : ws("span", {
        className: z,
        style: q,
        children: L
    }), a[39] = j, a[40] = R, a[41] = A, a[42] = z, a[43] = q, a[44] = L, a[45] = Y) : Y = a[45];
    let J;
    return a[46] !== Y || a[47] !== O || a[48] !== B || a[49] !== V || a[50] !== H || a[51] !== Z || a[52] !== K ? (J = Af("div", {
        className: O,
        "data-default-diff-separator": B,
        "data-buttons": V,
        style: H,
        children: [
            Z,
            K,
            Y
        ]
    }), a[46] = Y, a[47] = O, a[48] = B, a[49] = V, a[50] = H, a[51] = Z, a[52] = K, a[53] = J) : J = a[53], J;
}, "CollapsedRegionRow")), i(qGt, "splitCellWrapMinHeight"), cLe = Az(i(function(e) {
    const a = My(65), { line: s, tokens: l, side: u, showLineNumbers: p, coloredLineNumbers: m, showAccentStrip: b, rangeSelected: g, interactionGutter: _, hovered: v, selectionEndMarker: x, wrapInfo: C, pairWrapRowCount: E } = e, A = _, $ = !!A && A.rail != null && A.rail !== "single";
    let I;
    a[0] !== v || a[1] !== A || a[2] !== p ? (I = A && (v || A.showPlus) ? ws(zGt, {
        plusDragActive: A.plusDragActive,
        onMouseDown: A.onPlusMouseDown,
        placement: p !== !1 ? "gutter" : "lineContentInteraction"
    }) : null, a[0] = v, a[1] = A, a[2] = p, a[3] = I) : I = a[3];
    const N = I;
    let R, P, L, j, z, q, O, B, V, H, Z;
    if (a[4] !== N || a[5] !== m || a[6] !== A || a[7] !== s || a[8] !== E || a[9] !== g || a[10] !== x || a[11] !== b || a[12] !== p || a[13] !== $ || a[14] !== u || a[15] !== l || a[16] !== C) {
        L = Symbol.for("react.early_return_sentinel");
        e: {
            const J = wn(yGt()), re = wn(wGt()), ne = wn(hGt());
            if (!s) {
                const ut = wn(Yje({
                    type: "empty",
                    rangeSelected: !!g
                })), it = wn(Hge({
                    type: void 0,
                    rangeSelected: !!g,
                    withIndicatorStrip: b
                })), Ze = wn(Wge({
                    type: "unchanged",
                    rangeSelected: !!g
                })), Ie = wn(Zge({
                    dataType: void 0
                })), Me = wn($Q(), A && Gge()), et = Zr("ui-default-diff__split-cell", g && "ui-default-diff__split-cell--range-selected", ut.className), Ue = ut.style;
                let Be;
                a[28] !== E ? (Be = qGt(E), a[28] = E, a[29] = Be) : Be = a[29];
                let Fe;
                a[30] !== ut || a[31] !== Be ? (Fe = {
                    ...Ue,
                    ...Be
                }, a[30] = ut, a[31] = Be, a[32] = Fe) : Fe = a[32];
                let Je;
                a[33] !== x ? (Je = x ? {
                    "data-ui-default-diff-selection-end": !0
                } : {}, a[33] = x, a[34] = Je) : Je = a[34];
                const ee = Zr("ui-default-diff__split-cell-code-area", J.className), Xe = J.style, We = Zr("ui-default-diff__line-content", A && "ui-default-diff__line-content--interaction", Me.className), He = p === !1 ? N : null;
                let Ge;
                a[35] !== Me || a[36] !== We || a[37] !== He ? (Ge = ws("div", {
                    className: We,
                    style: Me.style,
                    children: He
                }), a[35] = Me, a[36] = We, a[37] = He, a[38] = Ge) : Ge = a[38], L = Af("div", {
                    className: et,
                    "data-type": "empty",
                    style: Fe,
                    ...Je,
                    children: [
                        b && ws("div", {
                            className: Zr("ui-default-diff__indicator-strip", Ze.className),
                            style: Ze.style
                        }),
                        p !== !1 && Af("div", {
                            className: Zr("ui-default-diff__gutter", it.className),
                            style: it.style,
                            children: [
                                ws("span", {
                                    className: Zr("ui-default-diff__line-number", Ie.className),
                                    style: Ie.style
                                }),
                                N
                            ]
                        }),
                        Af("div", {
                            className: ee,
                            style: Xe,
                            children: [
                                Ge,
                                $ ? ws("div", {
                                    "aria-hidden": !0,
                                    className: Zr("ui-default-diff__selection-rail", re.className),
                                    style: re.style
                                }) : null
                            ]
                        })
                    ]
                });
                break e;
            }
            const ae = s.type === "unchanged" ? "unchanged" : s.type, W = u === "left" ? s.originalLineNumber : s.modifiedLineNumber, oe = s.inlineChanges && s.inlineChanges.length > 0 && !(s.inlineChanges.length === 1 && s.inlineChanges[0].startColumn === 1 && s.inlineChanges[0].endColumn >= s.content.length + 1), ce = DGt(ae), Q = oe && ce ? LGt(l, s.inlineChanges) : l.map(qTr), le = m ? ae : void 0, he = wn(Yje({
                type: ae,
                rangeSelected: !!g
            })), me = wn(Wge({
                type: ae,
                rangeSelected: !!g
            })), be = wn(Hge({
                type: ae,
                rangeSelected: !!g,
                withIndicatorStrip: b
            })), ue = wn(Zge({
                dataType: le
            })), ge = wn($Q(), A && Gge()), _e = oe && ce ? FGt(ae) : null;
            B = Zr("ui-default-diff__split-cell", g && "ui-default-diff__split-cell--range-selected", he.className), V = ae;
            const ve = he.style;
            let Se;
            a[39] !== E ? (Se = qGt(E), a[39] = E, a[40] = Se) : Se = a[40], a[41] !== he || a[42] !== Se ? (H = {
                ...ve,
                ...Se
            }, a[41] = he, a[42] = Se, a[43] = H) : H = a[43], a[44] !== x ? (Z = x ? {
                "data-ui-default-diff-selection-end": !0
            } : {}, a[44] = x, a[45] = Z) : Z = a[45], R = b && ws("div", {
                className: Zr("ui-default-diff__indicator-strip", me.className),
                style: me.style
            }), P = p !== !1 && Af("div", {
                className: Zr("ui-default-diff__gutter", be.className),
                "data-type": ae,
                style: be.style,
                children: [
                    ws("span", {
                        className: Zr("ui-default-diff__line-number", ue.className),
                        "data-type": le,
                        style: ue.style,
                        children: W ?? ""
                    }),
                    N
                ]
            }), j = Zr("ui-default-diff__split-cell-code-area", J.className), z = J.style;
            const Ne = Zr("ui-default-diff__line-content", A && "ui-default-diff__line-content--interaction", ge.className), je = ge.style, tt = p === !1 ? N : null, Ke = nLe(Q, ce, _e, C), nt = x ? ws("span", {
                "aria-hidden": !0,
                className: Zr("ui-default-diff__selection-end-sentinel", ne.className),
                "data-ui-default-diff-selection-end": !0,
                style: ne.style
            }) : null;
            a[46] !== ge || a[47] !== Ne || a[48] !== tt || a[49] !== Ke || a[50] !== nt ? (q = Af("div", {
                className: Ne,
                style: je,
                children: [
                    tt,
                    Ke,
                    nt
                ]
            }), a[46] = ge, a[47] = Ne, a[48] = tt, a[49] = Ke, a[50] = nt, a[51] = q) : q = a[51], O = $ ? ws("div", {
                "aria-hidden": !0,
                className: Zr("ui-default-diff__selection-rail", re.className),
                style: re.style
            }) : null;
        }
        a[4] = N, a[5] = m, a[6] = A, a[7] = s, a[8] = E, a[9] = g, a[10] = x, a[11] = b, a[12] = p, a[13] = $, a[14] = u, a[15] = l, a[16] = C, a[17] = R, a[18] = P, a[19] = L, a[20] = j, a[21] = z, a[22] = q, a[23] = O, a[24] = B, a[25] = V, a[26] = H, a[27] = Z;
    } else R = a[17], P = a[18], L = a[19], j = a[20], z = a[21], q = a[22], O = a[23], B = a[24], V = a[25], H = a[26], Z = a[27];
    if (L !== Symbol.for("react.early_return_sentinel")) return L;
    let K;
    a[52] !== j || a[53] !== z || a[54] !== q || a[55] !== O ? (K = Af("div", {
        className: j,
        style: z,
        children: [
            q,
            O
        ]
    }), a[52] = j, a[53] = z, a[54] = q, a[55] = O, a[56] = K) : K = a[56];
    let Y;
    return a[57] !== R || a[58] !== P || a[59] !== K || a[60] !== B || a[61] !== V || a[62] !== H || a[63] !== Z ? (Y = Af("div", {
        className: B,
        "data-type": V,
        style: H,
        ...Z,
        children: [
            R,
            P,
            K
        ]
    }), a[57] = R, a[58] = P, a[59] = K, a[60] = B, a[61] = V, a[62] = H, a[63] = Z, a[64] = Y) : Y = a[64], Y;
}, "SplitDiffCell")), VTr = Az(i(function(e) {
    const a = My(29), { pair: s, leftTokens: l, rightTokens: u, showLineNumbers: p, coloredLineNumbers: m, showAccentStrip: b, wrapLayout: g } = e;
    let _;
    a[0] !== s.left?.content || a[1] !== s.right?.content || a[2] !== g ? (_ = g ? g.rowCountForPair(s.left?.content, s.right?.content) : void 0, a[0] = s.left?.content, a[1] = s.right?.content, a[2] = g, a[3] = _) : _ = a[3];
    const v = _;
    let x;
    a[4] !== s.left || a[5] !== g ? (x = s.left ? g?.infoFor(s.left.content) : null, a[4] = s.left, a[5] = g, a[6] = x) : x = a[6];
    let C;
    a[7] !== m || a[8] !== l || a[9] !== s.left || a[10] !== v || a[11] !== b || a[12] !== p || a[13] !== x ? (C = ws(cLe, {
        line: s.left,
        tokens: l,
        side: "left",
        showLineNumbers: p,
        coloredLineNumbers: m,
        showAccentStrip: b,
        wrapInfo: x,
        pairWrapRowCount: v
    }), a[7] = m, a[8] = l, a[9] = s.left, a[10] = v, a[11] = b, a[12] = p, a[13] = x, a[14] = C) : C = a[14];
    let E;
    a[15] !== s.right || a[16] !== g ? (E = s.right ? g?.infoFor(s.right.content) : null, a[15] = s.right, a[16] = g, a[17] = E) : E = a[17];
    let A;
    a[18] !== m || a[19] !== s.right || a[20] !== v || a[21] !== u || a[22] !== b || a[23] !== p || a[24] !== E ? (A = ws(cLe, {
        line: s.right,
        tokens: u,
        side: "right",
        showLineNumbers: p,
        coloredLineNumbers: m,
        showAccentStrip: b,
        wrapInfo: E,
        pairWrapRowCount: v
    }), a[18] = m, a[19] = s.right, a[20] = v, a[21] = u, a[22] = b, a[23] = p, a[24] = E, a[25] = A) : A = a[25];
    let $;
    return a[26] !== C || a[27] !== A ? ($ = Af("div", {
        className: "ui-default-diff__split-row",
        children: [
            C,
            A
        ]
    }), a[26] = C, a[27] = A, a[28] = $) : $ = a[28], $;
}, "SplitDiffLineRow")), i(rLe, "resolveTokensForLine"), lLe = [
    {
        content: "",
        col: 0
    }
], KTr = Az(i(function(e) {
    const a = My(35), { entry: s, visibleLineTokens: l, precomputedLineTokens: u, asyncLineTokens: p, showLineNumbers: m, coloredLineNumbers: b, showAccentStrip: g, onExpandUp: _, onExpandDown: v, onExpandAll: x, wrapLayout: C } = e, E = s.item;
    if (sd(E)) {
        let L;
        a[0] !== s.key || a[1] !== x ? (L = x ? ()=>x(s.key) : void 0, a[0] = s.key, a[1] = x, a[2] = L) : L = a[2];
        const j = E.unloadedEdge !== void 0;
        let z;
        a[3] !== s.key || a[4] !== E.unloadedEdge || a[5] !== v ? (z = v && E.unloadedEdge !== "after" ? ()=>v(s.key) : void 0, a[3] = s.key, a[4] = E.unloadedEdge, a[5] = v, a[6] = z) : z = a[6];
        let q;
        a[7] !== s.key || a[8] !== E.unloadedEdge || a[9] !== _ ? (q = _ && E.unloadedEdge !== "before" ? ()=>_(s.key) : void 0, a[7] = s.key, a[8] = E.unloadedEdge, a[9] = _, a[10] = q) : q = a[10];
        let O;
        return a[11] !== E.lineCount || a[12] !== L || a[13] !== j || a[14] !== z || a[15] !== q ? (O = ws(sLe, {
            lineCount: E.lineCount,
            onExpandAll: L,
            unloaded: j,
            onExpandDown: z,
            onExpandUp: q
        }), a[11] = E.lineCount, a[12] = L, a[13] = j, a[14] = z, a[15] = q, a[16] = O) : O = a[16], O;
    }
    const A = E;
    let $;
    a[17] !== p || a[18] !== A.left || a[19] !== u || a[20] !== l ? ($ = A.left ? rLe(A.left, "left", l, p, u) : lLe, a[17] = p, a[18] = A.left, a[19] = u, a[20] = l, a[21] = $) : $ = a[21];
    const I = $;
    let N;
    a[22] !== p || a[23] !== A.right || a[24] !== u || a[25] !== l ? (N = A.right ? rLe(A.right, "right", l, p, u) : lLe, a[22] = p, a[23] = A.right, a[24] = u, a[25] = l, a[26] = N) : N = a[26];
    const R = N;
    let P;
    return a[27] !== b || a[28] !== I || a[29] !== A || a[30] !== R || a[31] !== g || a[32] !== m || a[33] !== C ? (P = ws(VTr, {
        pair: A,
        leftTokens: I,
        rightTokens: R,
        showLineNumbers: m,
        coloredLineNumbers: b,
        showAccentStrip: g,
        wrapLayout: C
    }), a[27] = b, a[28] = I, a[29] = A, a[30] = R, a[31] = g, a[32] = m, a[33] = C, a[34] = P) : P = a[34], P;
}, "SplitDefaultDiffRenderItem")), VGt = Az(i(function(e) {
    const a = My(61), { entry: s, side: l, visibleLineTokens: u, precomputedLineTokens: p, asyncLineTokens: m, showLineNumbers: b, coloredLineNumbers: g, showAccentStrip: _, onExpandUp: v, onExpandDown: x, onExpandAll: C, splitPaneInteraction: E, wrapLayout: A } = e, [$, I] = Tz(!1), N = s.item;
    if (sd(N)) {
        let Q;
        a[0] !== s.key || a[1] !== C ? (Q = C ? ()=>C(s.key) : void 0, a[0] = s.key, a[1] = C, a[2] = Q) : Q = a[2];
        const le = N.unloadedEdge !== void 0;
        let he;
        a[3] !== s.key || a[4] !== N.unloadedEdge || a[5] !== x ? (he = x && N.unloadedEdge !== "after" ? ()=>x(s.key) : void 0, a[3] = s.key, a[4] = N.unloadedEdge, a[5] = x, a[6] = he) : he = a[6];
        let me;
        a[7] !== s.key || a[8] !== N.unloadedEdge || a[9] !== v ? (me = v && N.unloadedEdge !== "before" ? ()=>v(s.key) : void 0, a[7] = s.key, a[8] = N.unloadedEdge, a[9] = v, a[10] = me) : me = a[10];
        let be;
        return a[11] !== N.lineCount || a[12] !== Q || a[13] !== le || a[14] !== he || a[15] !== me ? (be = ws(sLe, {
            lineCount: N.lineCount,
            onExpandAll: Q,
            unloaded: le,
            onExpandDown: he,
            onExpandUp: me
        }), a[11] = N.lineCount, a[12] = Q, a[13] = le, a[14] = he, a[15] = me, a[16] = be) : be = a[16], be;
    }
    const R = N, P = l === "left" ? R.left : R.right;
    let L;
    a[17] !== m || a[18] !== P || a[19] !== p || a[20] !== l || a[21] !== u ? (L = P ? rLe(P, l, u, m, p) : lLe, a[17] = m, a[18] = P, a[19] = p, a[20] = l, a[21] = u, a[22] = L) : L = a[22];
    const j = L;
    let z;
    a[23] !== s || a[24] !== l || a[25] !== E ? (z = E?.(s, l), a[23] = s, a[24] = l, a[25] = E, a[26] = z) : z = a[26];
    const q = z, O = s.rowIndex, B = q?.rangeSelected, V = q?.interactionGutter, H = q?.selectionEndMarker;
    let Z;
    a[27] !== P || a[28] !== A ? (Z = P ? A?.infoFor(P.content) : null, a[27] = P, a[28] = A, a[29] = Z) : Z = a[29];
    let K;
    a[30] !== R.left?.content || a[31] !== R.right?.content || a[32] !== A ? (K = A ? A.rowCountForPair(R.left?.content, R.right?.content) : void 0, a[30] = R.left?.content, a[31] = R.right?.content, a[32] = A, a[33] = K) : K = a[33];
    let Y;
    a[34] !== g || a[35] !== $ || a[36] !== P || a[37] !== _ || a[38] !== b || a[39] !== l || a[40] !== B || a[41] !== V || a[42] !== H || a[43] !== Z || a[44] !== K || a[45] !== j ? (Y = ws(cLe, {
        line: P,
        tokens: j,
        side: l,
        showLineNumbers: b,
        coloredLineNumbers: g,
        showAccentStrip: _,
        rangeSelected: B,
        interactionGutter: V,
        hovered: $,
        selectionEndMarker: H,
        wrapInfo: Z,
        pairWrapRowCount: K
    }), a[34] = g, a[35] = $, a[36] = P, a[37] = _, a[38] = b, a[39] = l, a[40] = B, a[41] = V, a[42] = H, a[43] = Z, a[44] = K, a[45] = j, a[46] = Y) : Y = a[46];
    const J = Y;
    if (!q) return J;
    let re, ne;
    a[47] === Symbol.for("react.memo_cache_sentinel") ? (re = wn(OAr()), ne = Zr("ui-default-diff__interactive-row", re.className), a[47] = re, a[48] = ne) : (re = a[47], ne = a[48]);
    let ae;
    a[49] !== O ? (ae = O !== void 0 && O >= 0 ? {
        [$Gt]: String(O)
    } : {}, a[49] = O, a[50] = ae) : ae = a[50];
    let W, oe;
    a[51] !== q ? (W = i(()=>{
        I(!0), q.onLineMouseEnter();
    }, "t11"), oe = i((Q)=>{
        I(!1), q.onLineMouseLeave(Q);
    }, "t12"), a[51] = q, a[52] = W, a[53] = oe) : (W = a[52], oe = a[53]);
    let ce;
    return a[54] !== J || a[55] !== re.style || a[56] !== ae || a[57] !== W || a[58] !== oe || a[59] !== ne ? (ce = ws("fieldset", {
        className: ne,
        "data-ui-default-diff-interactive-row": !0,
        ...ae,
        onMouseEnter: W,
        onMouseLeave: oe,
        style: re.style,
        children: J
    }), a[54] = J, a[55] = re.style, a[56] = ae, a[57] = W, a[58] = oe, a[59] = ne, a[60] = ce) : ce = a[60], ce;
}, "SplitPaneRenderItem")), uLe = Az(i(function(e) {
    const a = My(48), { entry: s, visibleLineTokens: l, precomputedLineTokens: u, asyncLineTokens: p, showLineNumbers: m, showPlusMinus: b, coloredLineNumbers: g, showAccentStrip: _, onExpandUp: v, onExpandDown: x, onExpandAll: C, lineInteraction: E, wrapLayout: A } = e, $ = s.item;
    if (sd($)) {
        let O;
        a[0] !== s.key || a[1] !== C ? (O = C ? ()=>C(s.key) : void 0, a[0] = s.key, a[1] = C, a[2] = O) : O = a[2];
        const B = $.unloadedEdge !== void 0;
        let V;
        a[3] !== s.key || a[4] !== $.unloadedEdge || a[5] !== x ? (V = x && $.unloadedEdge !== "after" ? ()=>x(s.key) : void 0, a[3] = s.key, a[4] = $.unloadedEdge, a[5] = x, a[6] = V) : V = a[6];
        let H;
        a[7] !== s.key || a[8] !== $.unloadedEdge || a[9] !== v ? (H = v && $.unloadedEdge !== "before" ? ()=>v(s.key) : void 0, a[7] = s.key, a[8] = $.unloadedEdge, a[9] = v, a[10] = H) : H = a[10];
        let Z;
        return a[11] !== $.lineCount || a[12] !== O || a[13] !== B || a[14] !== V || a[15] !== H ? (Z = ws(sLe, {
            lineCount: $.lineCount,
            onExpandAll: O,
            unloaded: B,
            onExpandDown: V,
            onExpandUp: H
        }), a[11] = $.lineCount, a[12] = O, a[13] = B, a[14] = V, a[15] = H, a[16] = Z) : Z = a[16], Z;
    }
    const I = $, N = I.originalTokenLineNumber ?? I.originalLineNumber, R = I.modifiedTokenLineNumber ?? I.modifiedLineNumber, P = I.type === "removed" ? `orig:${N}` : `mod:${R}`;
    let L;
    if (l?.has(P)) {
        let O;
        a[17] !== P || a[18] !== l ? (O = l.get(P), a[17] = P, a[18] = l, a[19] = O) : O = a[19], L = O;
    } else if (u?.has(P)) {
        let O;
        a[20] !== u || a[21] !== P ? (O = u.get(P), a[20] = u, a[21] = P, a[22] = O) : O = a[22], L = O;
    } else if (p?.has(P)) {
        let O;
        a[23] !== p || a[24] !== P ? (O = p.get(P), a[23] = p, a[24] = P, a[25] = O) : O = a[25], L = O;
    } else {
        let O;
        a[26] !== I.content ? (O = [
            {
                content: I.content,
                col: 0
            }
        ], a[26] = I.content, a[27] = O) : O = a[27], L = O;
    }
    let j;
    a[28] !== s || a[29] !== E ? (j = E?.(s), a[28] = s, a[29] = E, a[30] = j) : j = a[30];
    let z;
    a[31] !== I.content || a[32] !== A ? (z = A?.infoFor(I.content), a[31] = I.content, a[32] = A, a[33] = z) : z = a[33];
    let q;
    return a[34] !== g || a[35] !== s.rowIndex || a[36] !== I.content.length || a[37] !== I.inlineChanges || a[38] !== I.modifiedLineNumber || a[39] !== I.originalLineNumber || a[40] !== I.type || a[41] !== L || a[42] !== _ || a[43] !== m || a[44] !== b || a[45] !== j || a[46] !== z ? (q = ws(ZTr, {
        tokens: L,
        type: I.type,
        originalLineNumber: I.originalLineNumber,
        modifiedLineNumber: I.modifiedLineNumber,
        inlineChanges: I.inlineChanges,
        contentLength: I.content.length,
        showLineNumbers: m,
        showPlusMinus: b,
        coloredLineNumbers: g,
        showAccentStrip: _,
        interaction: j,
        rowIndex: s.rowIndex,
        wrapInfo: z
    }), a[34] = g, a[35] = s.rowIndex, a[36] = I.content.length, a[37] = I.inlineChanges, a[38] = I.modifiedLineNumber, a[39] = I.originalLineNumber, a[40] = I.type, a[41] = L, a[42] = _, a[43] = m, a[44] = b, a[45] = j, a[46] = z, a[47] = q) : q = a[47], q;
}, "DefaultDiffRenderItem")), i(iLe, "addTokenLineNumberForDiffLine"), i(jTr, "collectTokenLineNumbers"), i(UGt, "useResolvedLineTokenizer"), i(aLe, "useCodeLineTokenizerTokens"), i(LTr, "_temp3"), i(oLe, "useDefaultDiffRenderState"), i(GGt, "expandRegionItems"), i(DTr, "loadedCollapsedRegionAtEdge"), i(WGt, "useExpandableRegions"), i(FTr, "DefaultDiffPreview"), i(OTr, "_temp4"), i(zTr, "DefaultDiff"), i(BTr, "_temp"), i(qTr, "_temp2");

}
