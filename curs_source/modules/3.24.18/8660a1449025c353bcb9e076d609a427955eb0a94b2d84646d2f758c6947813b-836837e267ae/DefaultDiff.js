import { Qla } from "./CodeTokenizerProvider.js";
import { VLr } from "./DefaultDiff.constants.js";
import { JLr } from "./DefaultDiff.stylex.js";
import { b5h } from "./DiffWrapMeasure.js";
import { gn, ri, zt } from "./LYd.js";
import { qu } from "./attach.js";
import { mf } from "./cn.js";
import { Eit } from "./code-token.js";
import { y5h } from "./default-diff-presentation.js";
import { Xha } from "./default-diff-unloaded-state.js";
import { nOr, tOr } from "./diff-dom-selection.js";
import { RFe } from "./diff-lines.js";
import { Fha } from "./diff-reveal-ranges.js";
import { e5h } from "./diff-word-wrap.js";
import { fd } from "./icon.js";
import { $5h, G5h, H5h, cbS, cpa, j5h, lpa, q5h, rbS, ubS, z5h } from "./ipa.js";
import { GLr } from "./line-range-set.js";
import { E_S, Gha, KLr, Lhi, M0, XLr, YLr, ZLr, a5h, c5h, d_S, f_S, g_S, h_S, i5h, l5h, m_S, o5h, o_S, p_S, r5h, s5h, w5h } from "./nca.js";
import { Va } from "./stylex.js";
import { E } from "./tslib.es6.js";
import { joe } from "./use-latest-ref.js";
import { D5h } from "./useDefaultDiffInteraction.js";
import { O5h } from "./useDefaultDiffOverlayDock.js";
import { useState as FUt } from "./react-runtime/react/esm-index-production.js";
import { jsx as H1 } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { memo as OUt } from "./react-runtime/react/esm-index-production.js";
import { jsxs as j7 } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { Fragment as rpa } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as tae } from "./react-runtime/react/esm-compiler-runtime-production.js";
var Fhi, Bhi, UUt, Y5h, X5h, Z5h, Q5h, J5h, cOr, uOr, eFh, dOr, tFh, Uhi, jhi;
export { Bhi, Fhi, J5h, Q5h, UUt, Uhi, X5h, Y5h, Z5h, cOr, dOr, eFh, jhi, tFh, uOr };
var __wakaru_$hi_initialized = false;
export function $hi() {
if (__wakaru_$hi_initialized) return;
__wakaru_$hi_initialized = true;
"use strict";
E(), Va(), joe(), mf(), Qla(), Eit(), RFe(), Fha(), e5h(), GLr(), VLr(), JLr(), b5h(), y5h(), Xha(), nOr(), D5h(), O5h(), qu(), fd(), Fhi = 12, Bhi = 11, UUt = 20, Y5h = 33, X5h = 500, Z5h = 4, Q5h = {
    icon: {
        kmuXW: "ui-2lah0s",
        $$css: !0
    }
}, J5h = OUt(function(e) {
    const n = tae(22), { tokens: i, type: r, originalLineNumber: s, modifiedLineNumber: o, inlineChanges: a, contentLength: l, showLineNumbers: c, showPlusMinus: u, coloredLineNumbers: d, showAccentStrip: h, interaction: p, rowIndex: g, wrapInfo: f } = e, [_, b] = FUt(!1), y = a && a.length > 0 && !(a.length === 1 && a[0].startColumn === 1 && a[0].endColumn >= l + 1);
    let S;
    if (n[0] !== d || n[1] !== _ || n[2] !== a || n[3] !== p || n[4] !== o || n[5] !== s || n[6] !== g || n[7] !== y || n[8] !== h || n[9] !== c || n[10] !== u || n[11] !== i || n[12] !== r || n[13] !== f) {
        const k = $5h(r), C = y && k ? j5h(i, a) : i.map(cbS), T = c !== !1, I = c === "partial", A = o ?? s, P = d ? r : void 0, M = p, O = !!M && M.interactionGutter.rail != null && M.interactionGutter.rail !== "single";
        let N;
        n[15] !== _ || n[16] !== M || n[17] !== T ? (N = M && (_ || M.interactionGutter.showPlus) ? H1(G5h, {
            plusDragActive: M.interactionGutter.plusDragActive,
            onMouseDown: M.interactionGutter.onPlusMouseDown,
            placement: T ? "gutter" : "lineContentInteraction"
        }) : null, n[15] = _, n[16] = M, n[17] = T, n[18] = N) : N = n[18];
        const U = N, j = !!M?.rangeSelected, $ = gn(l5h({
            type: r,
            rangeSelected: j
        })), H = gn(YLr({
            type: r,
            rangeSelected: j
        })), G = gn(XLr({
            type: r,
            rangeSelected: j,
            withIndicatorStrip: h
        })), q = gn(ZLr({
            dataType: P
        })), K = gn(c5h({
            type: r
        })), V = gn(s5h()), Y = gn(r5h()), J = gn(Lhi()), Q = gn(Lhi(), KLr()), te = gn(a5h()), ee = gn(i5h()), re = y && k ? H5h(r) : null;
        let ie;
        n[19] !== M || n[20] !== g ? (ie = M ? {
            "data-ui-default-diff-interactive-row": !0,
            ...g !== void 0 && g >= 0 ? {
                [tOr]: String(g)
            } : {},
            onMouseEnter: ()=>{
                b(!0), M.onLineMouseEnter();
            },
            onMouseLeave: (oe)=>{
                b(!1), M.onLineMouseLeave(oe);
            }
        } : {}, n[19] = M, n[20] = g, n[21] = ie) : ie = n[21], S = j7("div", {
            className: ri("ui-default-diff__line", j && "ui-default-diff__line--range-selected", $.className),
            "data-type": r,
            style: $.style,
            ...ie,
            children: [
                h && H1("div", {
                    className: ri("ui-default-diff__indicator-strip", H.className),
                    style: H.style
                }),
                T && j7("div", {
                    className: ri("ui-default-diff__gutter", G.className),
                    "data-type": r,
                    style: G.style,
                    children: [
                        I ? H1("span", {
                            className: ri("ui-default-diff__line-number", q.className),
                            "data-type": P,
                            style: q.style,
                            children: A ?? ""
                        }) : j7(rpa, {
                            children: [
                                H1("span", {
                                    className: ri("ui-default-diff__line-number", q.className),
                                    "data-type": P,
                                    style: q.style,
                                    children: s ?? ""
                                }),
                                H1("span", {
                                    className: ri("ui-default-diff__line-number", q.className),
                                    "data-type": P,
                                    style: q.style,
                                    children: o ?? ""
                                })
                            ]
                        }),
                        u && j7("span", {
                            className: ri("ui-default-diff__line-indicator", K.className),
                            style: K.style,
                            children: [
                                r === "added" && "+",
                                r === "removed" && "-",
                                r === "unchanged" && "\xA0"
                            ]
                        }),
                        U
                    ]
                }),
                M ? H1("div", {
                    className: ri("ui-default-diff__line-code-column", V.className),
                    style: V.style,
                    children: j7("div", {
                        className: ri("ui-default-diff__line-code-area", Y.className),
                        style: Y.style,
                        children: [
                            j7("div", {
                                className: ri("ui-default-diff__line-content", "ui-default-diff__line-content--interaction", Q.className),
                                style: Q.style,
                                children: [
                                    T ? null : U,
                                    lpa(C, k, re, f),
                                    M.selectionEndMarker ? H1("span", {
                                        "aria-hidden": !0,
                                        className: ri("ui-default-diff__selection-end-sentinel", ee.className),
                                        "data-ui-default-diff-selection-end": !0,
                                        style: ee.style
                                    }) : null
                                ]
                            }),
                            O ? H1("div", {
                                "aria-hidden": !0,
                                className: ri("ui-default-diff__selection-rail", te.className),
                                style: te.style
                            }) : null
                        ]
                    })
                }) : H1("div", {
                    className: ri("ui-default-diff__line-content", J.className),
                    style: J.style,
                    children: lpa(C, k, re, f)
                })
            ]
        }), n[0] = d, n[1] = _, n[2] = a, n[3] = p, n[4] = o, n[5] = s, n[6] = g, n[7] = y, n[8] = h, n[9] = c, n[10] = u, n[11] = i, n[12] = r, n[13] = f, n[14] = S;
    } else S = n[14];
    return S;
}), cOr = OUt(function(e) {
    const n = tae(54), { lineCount: i, unloaded: r, onExpandUp: s, onExpandDown: o, onExpandAll: a } = e, l = r === void 0 ? !1 : r, c = E_S(), u = w5h(), d = l && u === "unavailable", h = !!s && !d, p = !!o && !d, g = !l && h && p && i <= UUt, f = h || p, _ = g ? 1 : (h ? 1 : 0) + (p ? 1 : 0), b = _ === 0;
    let y;
    n[0] !== a || n[1] !== o || n[2] !== s ? (y = ()=>{
        if (a) {
            a();
            return;
        }
        s?.(), o?.();
    }, n[0] = a, n[1] = o, n[2] = s, n[3] = y) : y = n[3];
    const S = y;
    let k;
    n[4] !== i || n[5] !== l || n[6] !== u ? (k = l ? rbS(u) : `${i} unmodified ${i === 1 ? "line" : "lines"}`, n[4] = i, n[5] = l, n[6] = u, n[7] = k) : k = n[7];
    const C = k, T = l && u === "failed" ? "Retry loading unmodified lines" : `Expand ${C}`;
    let I, A, P, M, O, N, U, j;
    if (n[8] !== _ || n[9] !== S || n[10] !== f || n[11] !== i || n[12] !== b || n[13] !== o || n[14] !== s || n[15] !== c || n[16] !== p || n[17] !== g || n[18] !== h || n[19] !== l) {
        const G = gn(d_S({
            noButtons: b,
            presentation: c
        })), q = gn(h_S()), K = gn(p_S(c));
        let V;
        n[28] === Symbol.for("react.memo_cache_sentinel") ? (V = gn(m_S()), n[28] = V) : V = n[28];
        const Y = V;
        let J, Q;
        n[29] !== f || n[30] !== b || n[31] !== c ? (J = gn(g_S({
            noButtons: b,
            presentation: c,
            clickable: f
        })), Q = ri("ui-default-diff__separator-text", J.className), n[29] = f, n[30] = b, n[31] = c, n[32] = J, n[33] = Q) : (J = n[32], Q = n[33]), I = Q, A = J.style;
        const te = gn(f_S());
        P = ri("ui-default-diff__separator", G.className), M = c === "unified-diff" ? "" : void 0, O = _ === 0 ? "none" : _ === 1 ? "single" : "dual", N = G.style;
        let ee;
        n[34] !== i || n[35] !== l ? (ee = l ? `
[unmodified lines not loaded]

` : q5h(i), n[34] = i, n[35] = l, n[36] = ee) : ee = n[36], n[37] !== ee ? (U = H1("span", {
            "aria-hidden": !0,
            className: ri("ui-default-diff__separator-copy-text", te.className),
            style: te.style,
            children: ee
        }), n[37] = ee, n[38] = U) : U = n[38], j = f && H1("div", {
            className: ri("ui-default-diff__separator-buttons", q.className),
            style: q.style,
            children: g ? j7("button", {
                "aria-label": "Expand all",
                className: ri("ui-default-diff__expand-btn", K.className),
                onClick: S,
                style: K.style,
                type: "button",
                children: [
                    H1(zt, {
                        "aria-hidden": !0,
                        name: "chevron-down",
                        size: "sm"
                    }),
                    H1(zt, {
                        "aria-hidden": !0,
                        name: "chevron-up",
                        size: "sm",
                        className: Y.className,
                        style: Y.style
                    })
                ]
            }) : j7(rpa, {
                children: [
                    h && H1("button", {
                        "aria-label": "Expand up",
                        className: ri("ui-default-diff__expand-btn", K.className),
                        onClick: s,
                        style: K.style,
                        type: "button",
                        children: H1(zt, {
                            "aria-hidden": !0,
                            name: "chevron-down",
                            size: "sm"
                        })
                    }),
                    p && H1("button", {
                        "aria-label": "Expand down",
                        className: ri("ui-default-diff__expand-btn", K.className),
                        onClick: o,
                        style: K.style,
                        type: "button",
                        children: H1(zt, {
                            "aria-hidden": !0,
                            name: "chevron-up",
                            size: "sm"
                        })
                    })
                ]
            })
        }), n[8] = _, n[9] = S, n[10] = f, n[11] = i, n[12] = b, n[13] = o, n[14] = s, n[15] = c, n[16] = p, n[17] = g, n[18] = h, n[19] = l, n[20] = I, n[21] = A, n[22] = P, n[23] = M, n[24] = O, n[25] = N, n[26] = U, n[27] = j;
    } else I = n[20], A = n[21], P = n[22], M = n[23], O = n[24], N = n[25], U = n[26], j = n[27];
    let $;
    n[39] !== T || n[40] !== S || n[41] !== f || n[42] !== I || n[43] !== A || n[44] !== C ? ($ = f ? H1("button", {
        "aria-label": T,
        className: I,
        onClick: S,
        style: A,
        type: "button",
        children: C
    }) : H1("span", {
        className: I,
        style: A,
        children: C
    }), n[39] = T, n[40] = S, n[41] = f, n[42] = I, n[43] = A, n[44] = C, n[45] = $) : $ = n[45];
    let H;
    return n[46] !== $ || n[47] !== P || n[48] !== M || n[49] !== O || n[50] !== N || n[51] !== U || n[52] !== j ? (H = j7("div", {
        className: P,
        "data-default-diff-separator": M,
        "data-buttons": O,
        style: N,
        children: [
            U,
            j,
            $
        ]
    }), n[46] = $, n[47] = P, n[48] = M, n[49] = O, n[50] = N, n[51] = U, n[52] = j, n[53] = H) : H = n[53], H;
}), uOr = OUt(function(e) {
    const n = tae(65), { line: i, tokens: r, side: s, showLineNumbers: o, coloredLineNumbers: a, showAccentStrip: l, rangeSelected: c, interactionGutter: u, hovered: d, selectionEndMarker: h, wrapInfo: p, pairWrapRowCount: g } = e, f = u, _ = !!f && f.rail != null && f.rail !== "single";
    let b;
    n[0] !== d || n[1] !== f || n[2] !== o ? (b = f && (d || f.showPlus) ? H1(G5h, {
        plusDragActive: f.plusDragActive,
        onMouseDown: f.onPlusMouseDown,
        placement: o !== !1 ? "gutter" : "lineContentInteraction"
    }) : null, n[0] = d, n[1] = f, n[2] = o, n[3] = b) : b = n[3];
    const y = b;
    let S, k, C, T, I, A, P, M, O, N, U;
    if (n[4] !== y || n[5] !== a || n[6] !== f || n[7] !== i || n[8] !== g || n[9] !== c || n[10] !== h || n[11] !== l || n[12] !== o || n[13] !== _ || n[14] !== s || n[15] !== r || n[16] !== p) {
        C = Symbol.for("react.early_return_sentinel");
        e: {
            const H = gn(o5h()), G = gn(a5h()), q = gn(i5h());
            if (!i) {
                const fe = gn(Gha({
                    type: "empty",
                    rangeSelected: !!c
                })), Te = gn(XLr({
                    type: void 0,
                    rangeSelected: !!c,
                    withIndicatorStrip: l
                })), _e = gn(YLr({
                    type: "unchanged",
                    rangeSelected: !!c
                })), Ce = gn(ZLr({
                    dataType: void 0
                })), Se = gn(Lhi(), f && KLr()), Pe = ri("ui-default-diff__split-cell", c && "ui-default-diff__split-cell--range-selected", fe.className), we = fe.style;
                let Ie;
                n[28] !== g ? (Ie = z5h(g), n[28] = g, n[29] = Ie) : Ie = n[29];
                let Me;
                n[30] !== fe || n[31] !== Ie ? (Me = {
                    ...we,
                    ...Ie
                }, n[30] = fe, n[31] = Ie, n[32] = Me) : Me = n[32];
                let De;
                n[33] !== h ? (De = h ? {
                    "data-ui-default-diff-selection-end": !0
                } : {}, n[33] = h, n[34] = De) : De = n[34];
                const Ne = ri("ui-default-diff__split-cell-code-area", H.className), be = H.style, je = ri("ui-default-diff__line-content", f && "ui-default-diff__line-content--interaction", Se.className), $e = o === !1 ? y : null;
                let Je;
                n[35] !== Se || n[36] !== je || n[37] !== $e ? (Je = H1("div", {
                    className: je,
                    style: Se.style,
                    children: $e
                }), n[35] = Se, n[36] = je, n[37] = $e, n[38] = Je) : Je = n[38], C = j7("div", {
                    className: Pe,
                    "data-type": "empty",
                    style: Me,
                    ...De,
                    children: [
                        l && H1("div", {
                            className: ri("ui-default-diff__indicator-strip", _e.className),
                            style: _e.style
                        }),
                        o !== !1 && j7("div", {
                            className: ri("ui-default-diff__gutter", Te.className),
                            style: Te.style,
                            children: [
                                H1("span", {
                                    className: ri("ui-default-diff__line-number", Ce.className),
                                    style: Ce.style
                                }),
                                y
                            ]
                        }),
                        j7("div", {
                            className: Ne,
                            style: be,
                            children: [
                                Je,
                                _ ? H1("div", {
                                    "aria-hidden": !0,
                                    className: ri("ui-default-diff__selection-rail", G.className),
                                    style: G.style
                                }) : null
                            ]
                        })
                    ]
                });
                break e;
            }
            const K = i.type === "unchanged" ? "unchanged" : i.type, V = s === "left" ? i.originalLineNumber : i.modifiedLineNumber, Y = i.inlineChanges && i.inlineChanges.length > 0 && !(i.inlineChanges.length === 1 && i.inlineChanges[0].startColumn === 1 && i.inlineChanges[0].endColumn >= i.content.length + 1), J = $5h(K), Q = Y && J ? j5h(r, i.inlineChanges) : r.map(ubS), te = a ? K : void 0, ee = gn(Gha({
                type: K,
                rangeSelected: !!c
            })), re = gn(YLr({
                type: K,
                rangeSelected: !!c
            })), ie = gn(XLr({
                type: K,
                rangeSelected: !!c,
                withIndicatorStrip: l
            })), oe = gn(ZLr({
                dataType: te
            })), se = gn(Lhi(), f && KLr()), le = Y && J ? H5h(K) : null;
            M = ri("ui-default-diff__split-cell", c && "ui-default-diff__split-cell--range-selected", ee.className), O = K;
            const ce = ee.style;
            let ae;
            n[39] !== g ? (ae = z5h(g), n[39] = g, n[40] = ae) : ae = n[40], n[41] !== ee || n[42] !== ae ? (N = {
                ...ce,
                ...ae
            }, n[41] = ee, n[42] = ae, n[43] = N) : N = n[43], n[44] !== h ? (U = h ? {
                "data-ui-default-diff-selection-end": !0
            } : {}, n[44] = h, n[45] = U) : U = n[45], S = l && H1("div", {
                className: ri("ui-default-diff__indicator-strip", re.className),
                style: re.style
            }), k = o !== !1 && j7("div", {
                className: ri("ui-default-diff__gutter", ie.className),
                "data-type": K,
                style: ie.style,
                children: [
                    H1("span", {
                        className: ri("ui-default-diff__line-number", oe.className),
                        "data-type": te,
                        style: oe.style,
                        children: V ?? ""
                    }),
                    y
                ]
            }), T = ri("ui-default-diff__split-cell-code-area", H.className), I = H.style;
            const de = ri("ui-default-diff__line-content", f && "ui-default-diff__line-content--interaction", se.className), he = se.style, ge = o === !1 ? y : null, pe = lpa(Q, J, le, p), ve = h ? H1("span", {
                "aria-hidden": !0,
                className: ri("ui-default-diff__selection-end-sentinel", q.className),
                "data-ui-default-diff-selection-end": !0,
                style: q.style
            }) : null;
            n[46] !== se || n[47] !== de || n[48] !== ge || n[49] !== pe || n[50] !== ve ? (A = j7("div", {
                className: de,
                style: he,
                children: [
                    ge,
                    pe,
                    ve
                ]
            }), n[46] = se, n[47] = de, n[48] = ge, n[49] = pe, n[50] = ve, n[51] = A) : A = n[51], P = _ ? H1("div", {
                "aria-hidden": !0,
                className: ri("ui-default-diff__selection-rail", G.className),
                style: G.style
            }) : null;
        }
        n[4] = y, n[5] = a, n[6] = f, n[7] = i, n[8] = g, n[9] = c, n[10] = h, n[11] = l, n[12] = o, n[13] = _, n[14] = s, n[15] = r, n[16] = p, n[17] = S, n[18] = k, n[19] = C, n[20] = T, n[21] = I, n[22] = A, n[23] = P, n[24] = M, n[25] = O, n[26] = N, n[27] = U;
    } else S = n[17], k = n[18], C = n[19], T = n[20], I = n[21], A = n[22], P = n[23], M = n[24], O = n[25], N = n[26], U = n[27];
    if (C !== Symbol.for("react.early_return_sentinel")) return C;
    let j;
    n[52] !== T || n[53] !== I || n[54] !== A || n[55] !== P ? (j = j7("div", {
        className: T,
        style: I,
        children: [
            A,
            P
        ]
    }), n[52] = T, n[53] = I, n[54] = A, n[55] = P, n[56] = j) : j = n[56];
    let $;
    return n[57] !== S || n[58] !== k || n[59] !== j || n[60] !== M || n[61] !== O || n[62] !== N || n[63] !== U ? ($ = j7("div", {
        className: M,
        "data-type": O,
        style: N,
        ...U,
        children: [
            S,
            k,
            j
        ]
    }), n[57] = S, n[58] = k, n[59] = j, n[60] = M, n[61] = O, n[62] = N, n[63] = U, n[64] = $) : $ = n[64], $;
}), eFh = OUt(function(e) {
    const n = tae(29), { pair: i, leftTokens: r, rightTokens: s, showLineNumbers: o, coloredLineNumbers: a, showAccentStrip: l, wrapLayout: c } = e;
    let u;
    n[0] !== i.left?.content || n[1] !== i.right?.content || n[2] !== c ? (u = c ? c.rowCountForPair(i.left?.content, i.right?.content) : void 0, n[0] = i.left?.content, n[1] = i.right?.content, n[2] = c, n[3] = u) : u = n[3];
    const d = u;
    let h;
    n[4] !== i.left || n[5] !== c ? (h = i.left ? c?.infoFor(i.left.content) : null, n[4] = i.left, n[5] = c, n[6] = h) : h = n[6];
    let p;
    n[7] !== a || n[8] !== r || n[9] !== i.left || n[10] !== d || n[11] !== l || n[12] !== o || n[13] !== h ? (p = H1(uOr, {
        line: i.left,
        tokens: r,
        side: "left",
        showLineNumbers: o,
        coloredLineNumbers: a,
        showAccentStrip: l,
        wrapInfo: h,
        pairWrapRowCount: d
    }), n[7] = a, n[8] = r, n[9] = i.left, n[10] = d, n[11] = l, n[12] = o, n[13] = h, n[14] = p) : p = n[14];
    let g;
    n[15] !== i.right || n[16] !== c ? (g = i.right ? c?.infoFor(i.right.content) : null, n[15] = i.right, n[16] = c, n[17] = g) : g = n[17];
    let f;
    n[18] !== a || n[19] !== i.right || n[20] !== d || n[21] !== s || n[22] !== l || n[23] !== o || n[24] !== g ? (f = H1(uOr, {
        line: i.right,
        tokens: s,
        side: "right",
        showLineNumbers: o,
        coloredLineNumbers: a,
        showAccentStrip: l,
        wrapInfo: g,
        pairWrapRowCount: d
    }), n[18] = a, n[19] = i.right, n[20] = d, n[21] = s, n[22] = l, n[23] = o, n[24] = g, n[25] = f) : f = n[25];
    let _;
    return n[26] !== p || n[27] !== f ? (_ = j7("div", {
        className: "ui-default-diff__split-row",
        children: [
            p,
            f
        ]
    }), n[26] = p, n[27] = f, n[28] = _) : _ = n[28], _;
}), dOr = [
    {
        content: "",
        col: 0
    }
], tFh = OUt(function(e) {
    const n = tae(35), { entry: i, visibleLineTokens: r, precomputedLineTokens: s, asyncLineTokens: o, showLineNumbers: a, coloredLineNumbers: l, showAccentStrip: c, onExpandUp: u, onExpandDown: d, onExpandAll: h, wrapLayout: p } = e, g = i.item;
    if (M0(g)) {
        let C;
        n[0] !== i.key || n[1] !== h ? (C = h ? ()=>h(i.key) : void 0, n[0] = i.key, n[1] = h, n[2] = C) : C = n[2];
        const T = g.unloadedEdge !== void 0;
        let I;
        n[3] !== i.key || n[4] !== g.unloadedEdge || n[5] !== d ? (I = d && g.unloadedEdge !== "after" ? ()=>d(i.key) : void 0, n[3] = i.key, n[4] = g.unloadedEdge, n[5] = d, n[6] = I) : I = n[6];
        let A;
        n[7] !== i.key || n[8] !== g.unloadedEdge || n[9] !== u ? (A = u && g.unloadedEdge !== "before" ? ()=>u(i.key) : void 0, n[7] = i.key, n[8] = g.unloadedEdge, n[9] = u, n[10] = A) : A = n[10];
        let P;
        return n[11] !== g.lineCount || n[12] !== C || n[13] !== T || n[14] !== I || n[15] !== A ? (P = H1(cOr, {
            lineCount: g.lineCount,
            onExpandAll: C,
            unloaded: T,
            onExpandDown: I,
            onExpandUp: A
        }), n[11] = g.lineCount, n[12] = C, n[13] = T, n[14] = I, n[15] = A, n[16] = P) : P = n[16], P;
    }
    const f = g;
    let _;
    n[17] !== o || n[18] !== f.left || n[19] !== s || n[20] !== r ? (_ = f.left ? cpa(f.left, "left", r, o, s) : dOr, n[17] = o, n[18] = f.left, n[19] = s, n[20] = r, n[21] = _) : _ = n[21];
    const b = _;
    let y;
    n[22] !== o || n[23] !== f.right || n[24] !== s || n[25] !== r ? (y = f.right ? cpa(f.right, "right", r, o, s) : dOr, n[22] = o, n[23] = f.right, n[24] = s, n[25] = r, n[26] = y) : y = n[26];
    const S = y;
    let k;
    return n[27] !== l || n[28] !== b || n[29] !== f || n[30] !== S || n[31] !== c || n[32] !== a || n[33] !== p ? (k = H1(eFh, {
        pair: f,
        leftTokens: b,
        rightTokens: S,
        showLineNumbers: a,
        coloredLineNumbers: l,
        showAccentStrip: c,
        wrapLayout: p
    }), n[27] = l, n[28] = b, n[29] = f, n[30] = S, n[31] = c, n[32] = a, n[33] = p, n[34] = k) : k = n[34], k;
}), Uhi = OUt(function(e) {
    const n = tae(61), { entry: i, side: r, visibleLineTokens: s, precomputedLineTokens: o, asyncLineTokens: a, showLineNumbers: l, coloredLineNumbers: c, showAccentStrip: u, onExpandUp: d, onExpandDown: h, onExpandAll: p, splitPaneInteraction: g, wrapLayout: f } = e, [_, b] = FUt(!1), y = i.item;
    if (M0(y)) {
        let Q;
        n[0] !== i.key || n[1] !== p ? (Q = p ? ()=>p(i.key) : void 0, n[0] = i.key, n[1] = p, n[2] = Q) : Q = n[2];
        const te = y.unloadedEdge !== void 0;
        let ee;
        n[3] !== i.key || n[4] !== y.unloadedEdge || n[5] !== h ? (ee = h && y.unloadedEdge !== "after" ? ()=>h(i.key) : void 0, n[3] = i.key, n[4] = y.unloadedEdge, n[5] = h, n[6] = ee) : ee = n[6];
        let re;
        n[7] !== i.key || n[8] !== y.unloadedEdge || n[9] !== d ? (re = d && y.unloadedEdge !== "before" ? ()=>d(i.key) : void 0, n[7] = i.key, n[8] = y.unloadedEdge, n[9] = d, n[10] = re) : re = n[10];
        let ie;
        return n[11] !== y.lineCount || n[12] !== Q || n[13] !== te || n[14] !== ee || n[15] !== re ? (ie = H1(cOr, {
            lineCount: y.lineCount,
            onExpandAll: Q,
            unloaded: te,
            onExpandDown: ee,
            onExpandUp: re
        }), n[11] = y.lineCount, n[12] = Q, n[13] = te, n[14] = ee, n[15] = re, n[16] = ie) : ie = n[16], ie;
    }
    const S = y, k = r === "left" ? S.left : S.right;
    let C;
    n[17] !== a || n[18] !== k || n[19] !== o || n[20] !== r || n[21] !== s ? (C = k ? cpa(k, r, s, a, o) : dOr, n[17] = a, n[18] = k, n[19] = o, n[20] = r, n[21] = s, n[22] = C) : C = n[22];
    const T = C;
    let I;
    n[23] !== i || n[24] !== r || n[25] !== g ? (I = g?.(i, r), n[23] = i, n[24] = r, n[25] = g, n[26] = I) : I = n[26];
    const A = I, P = i.rowIndex, M = A?.rangeSelected, O = A?.interactionGutter, N = A?.selectionEndMarker;
    let U;
    n[27] !== k || n[28] !== f ? (U = k ? f?.infoFor(k.content) : null, n[27] = k, n[28] = f, n[29] = U) : U = n[29];
    let j;
    n[30] !== S.left?.content || n[31] !== S.right?.content || n[32] !== f ? (j = f ? f.rowCountForPair(S.left?.content, S.right?.content) : void 0, n[30] = S.left?.content, n[31] = S.right?.content, n[32] = f, n[33] = j) : j = n[33];
    let $;
    n[34] !== c || n[35] !== _ || n[36] !== k || n[37] !== u || n[38] !== l || n[39] !== r || n[40] !== M || n[41] !== O || n[42] !== N || n[43] !== U || n[44] !== j || n[45] !== T ? ($ = H1(uOr, {
        line: k,
        tokens: T,
        side: r,
        showLineNumbers: l,
        coloredLineNumbers: c,
        showAccentStrip: u,
        rangeSelected: M,
        interactionGutter: O,
        hovered: _,
        selectionEndMarker: N,
        wrapInfo: U,
        pairWrapRowCount: j
    }), n[34] = c, n[35] = _, n[36] = k, n[37] = u, n[38] = l, n[39] = r, n[40] = M, n[41] = O, n[42] = N, n[43] = U, n[44] = j, n[45] = T, n[46] = $) : $ = n[46];
    const H = $;
    if (!A) return H;
    let G, q;
    n[47] === Symbol.for("react.memo_cache_sentinel") ? (G = gn(o_S()), q = ri("ui-default-diff__interactive-row", G.className), n[47] = G, n[48] = q) : (G = n[47], q = n[48]);
    let K;
    n[49] !== P ? (K = P !== void 0 && P >= 0 ? {
        [tOr]: String(P)
    } : {}, n[49] = P, n[50] = K) : K = n[50];
    let V, Y;
    n[51] !== A ? (V = ()=>{
        b(!0), A.onLineMouseEnter();
    }, Y = (Q)=>{
        b(!1), A.onLineMouseLeave(Q);
    }, n[51] = A, n[52] = V, n[53] = Y) : (V = n[52], Y = n[53]);
    let J;
    return n[54] !== H || n[55] !== G.style || n[56] !== K || n[57] !== V || n[58] !== Y || n[59] !== q ? (J = H1("fieldset", {
        className: q,
        "data-ui-default-diff-interactive-row": !0,
        ...K,
        onMouseEnter: V,
        onMouseLeave: Y,
        style: G.style,
        children: H
    }), n[54] = H, n[55] = G.style, n[56] = K, n[57] = V, n[58] = Y, n[59] = q, n[60] = J) : J = n[60], J;
}), jhi = OUt(function(e) {
    const n = tae(48), { entry: i, visibleLineTokens: r, precomputedLineTokens: s, asyncLineTokens: o, showLineNumbers: a, showPlusMinus: l, coloredLineNumbers: c, showAccentStrip: u, onExpandUp: d, onExpandDown: h, onExpandAll: p, lineInteraction: g, wrapLayout: f } = e, _ = i.item;
    if (M0(_)) {
        let P;
        n[0] !== i.key || n[1] !== p ? (P = p ? ()=>p(i.key) : void 0, n[0] = i.key, n[1] = p, n[2] = P) : P = n[2];
        const M = _.unloadedEdge !== void 0;
        let O;
        n[3] !== i.key || n[4] !== _.unloadedEdge || n[5] !== h ? (O = h && _.unloadedEdge !== "after" ? ()=>h(i.key) : void 0, n[3] = i.key, n[4] = _.unloadedEdge, n[5] = h, n[6] = O) : O = n[6];
        let N;
        n[7] !== i.key || n[8] !== _.unloadedEdge || n[9] !== d ? (N = d && _.unloadedEdge !== "before" ? ()=>d(i.key) : void 0, n[7] = i.key, n[8] = _.unloadedEdge, n[9] = d, n[10] = N) : N = n[10];
        let U;
        return n[11] !== _.lineCount || n[12] !== P || n[13] !== M || n[14] !== O || n[15] !== N ? (U = H1(cOr, {
            lineCount: _.lineCount,
            onExpandAll: P,
            unloaded: M,
            onExpandDown: O,
            onExpandUp: N
        }), n[11] = _.lineCount, n[12] = P, n[13] = M, n[14] = O, n[15] = N, n[16] = U) : U = n[16], U;
    }
    const b = _, y = b.originalTokenLineNumber ?? b.originalLineNumber, S = b.modifiedTokenLineNumber ?? b.modifiedLineNumber, k = b.type === "removed" ? `orig:${y}` : `mod:${S}`;
    let C;
    if (r?.has(k)) {
        let P;
        n[17] !== k || n[18] !== r ? (P = r.get(k), n[17] = k, n[18] = r, n[19] = P) : P = n[19], C = P;
    } else if (s?.has(k)) {
        let P;
        n[20] !== s || n[21] !== k ? (P = s.get(k), n[20] = s, n[21] = k, n[22] = P) : P = n[22], C = P;
    } else if (o?.has(k)) {
        let P;
        n[23] !== o || n[24] !== k ? (P = o.get(k), n[23] = o, n[24] = k, n[25] = P) : P = n[25], C = P;
    } else {
        let P;
        n[26] !== b.content ? (P = [
            {
                content: b.content,
                col: 0
            }
        ], n[26] = b.content, n[27] = P) : P = n[27], C = P;
    }
    let T;
    n[28] !== i || n[29] !== g ? (T = g?.(i), n[28] = i, n[29] = g, n[30] = T) : T = n[30];
    let I;
    n[31] !== b.content || n[32] !== f ? (I = f?.infoFor(b.content), n[31] = b.content, n[32] = f, n[33] = I) : I = n[33];
    let A;
    return n[34] !== c || n[35] !== i.rowIndex || n[36] !== b.content.length || n[37] !== b.inlineChanges || n[38] !== b.modifiedLineNumber || n[39] !== b.originalLineNumber || n[40] !== b.type || n[41] !== C || n[42] !== u || n[43] !== a || n[44] !== l || n[45] !== T || n[46] !== I ? (A = H1(J5h, {
        tokens: C,
        type: b.type,
        originalLineNumber: b.originalLineNumber,
        modifiedLineNumber: b.modifiedLineNumber,
        inlineChanges: b.inlineChanges,
        contentLength: b.content.length,
        showLineNumbers: a,
        showPlusMinus: l,
        coloredLineNumbers: c,
        showAccentStrip: u,
        interaction: T,
        rowIndex: i.rowIndex,
        wrapInfo: I
    }), n[34] = c, n[35] = i.rowIndex, n[36] = b.content.length, n[37] = b.inlineChanges, n[38] = b.modifiedLineNumber, n[39] = b.originalLineNumber, n[40] = b.type, n[41] = C, n[42] = u, n[43] = a, n[44] = l, n[45] = T, n[46] = I, n[47] = A) : A = n[47], A;
});

}
