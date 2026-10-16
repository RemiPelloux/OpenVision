import { xGt } from "./DefaultDiff.stylex.ts";
import { Zr, rd } from "./cn.ts";
import { DAr } from "./diff-word-wrap.ts";
import { $Q, CGt, Gge, Hge, QAr, UAr, Wge, Yje, Zge, _Gt, bGt, gGt, kGt, yGt } from "./f6r.js";
import { i } from "./plugin-brand-icon.js";
import { Ho, wn } from "./stylex.mjs";
import { Rme, t3 } from "./use-latest-ref.ts";
import { jsx as X5 } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as bHn } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { memo as epi } from "./react-runtime/react/esm-index-production.js";
import { jsxs as tTe } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { useRef as yHn } from "./react-runtime/react/esm-index-production.js";
var SGt, EGt, eTr, tTr, nTr, rTr;
export { EGt, SGt, eTr, nTr, rTr, tTr };
var __wakaru_ECi_initialized = false;
export function ECi() {
if (__wakaru_ECi_initialized) return;
__wakaru_ECi_initialized = true;
"use strict";
Ho(), Rme(), rd(), DAr(), xGt(), SGt = 64, EGt = 32, eTr = "x".repeat(SGt), tTr = "\u4E00".repeat(EGt), nTr = 8, rTr = epi(i(function(e) {
    const a = bHn(46), { viewMode: s, showLineNumbers: l, showPlusMinus: u, showAccentStrip: p, interactionEnabled: m, onMetrics: b } = e, g = yHn(null), _ = yHn(null), v = t3(b);
    let x;
    a[0] !== v ? (x = i((W)=>{
        if (!W) return;
        const oe = i((Q)=>{
            const le = g.current?.getBoundingClientRect().width, he = _.current?.getBoundingClientRect().width;
            if (!le || Q <= 0) return;
            const me = le / SGt, be = he ? he / EGt : me * 2;
            v.current({
                contentWidthPx: Q,
                charWidthPx: me,
                columnsForFullWidthChar: be / me
            });
        }, "report"), ce = new ResizeObserver((Q)=>{
            const le = Q[0]?.contentRect.width;
            le !== void 0 && oe(le);
        });
        return ce.observe(W), ()=>ce.disconnect();
    }, "t1"), a[0] = v, a[1] = x) : x = a[1];
    const C = x;
    let E;
    if (a[2] !== p || a[3] !== l || a[4] !== u || a[5] !== s) {
        const W = wn(Zge({
            dataType: void 0
        })), oe = i((le)=>X5("span", {
                className: Zr("ui-default-diff__line-number", W.className),
                style: W.style
            }, le), "renderLineNumber"), ce = wn(Hge({
            type: void 0,
            rangeSelected: !1,
            withIndicatorStrip: p
        })), Q = wn(kGt({
            type: "unchanged"
        }));
        E = l !== !1 ? tTe("div", {
            className: Zr("ui-default-diff__gutter", ce.className),
            style: ce.style,
            children: [
                l === "partial" || s === "split" ? oe("partial") : [
                    oe("orig"),
                    oe("mod")
                ],
                u && s === "unified" && X5("span", {
                    className: Zr("ui-default-diff__line-indicator", Q.className),
                    style: Q.style,
                    children: "\xA0"
                })
            ]
        }) : null, a[2] = p, a[3] = l, a[4] = u, a[5] = s, a[6] = E;
    } else E = a[6];
    const A = E;
    let $;
    a[7] === Symbol.for("react.memo_cache_sentinel") ? ($ = wn(Wge({
        type: "unchanged",
        rangeSelected: !1
    })), a[7] = $) : $ = a[7];
    const I = $;
    let N;
    a[8] !== p ? (N = p ? X5("div", {
        className: I.className,
        style: I.style
    }) : null, a[8] = p, a[9] = N) : N = a[9];
    const R = N;
    let P, L;
    a[10] !== m ? (P = wn($Q(), m && Gge()), L = Zr("ui-default-diff__line-content", m && "ui-default-diff__line-content--interaction", P.className), a[10] = m, a[11] = P, a[12] = L) : (P = a[11], L = a[12]);
    let j, z;
    a[13] === Symbol.for("react.memo_cache_sentinel") ? (j = X5("span", {
        ref: g,
        children: eTr
    }), z = X5("span", {
        ref: _,
        children: tTr
    }), a[13] = j, a[14] = z) : (j = a[13], z = a[14]);
    let q;
    a[15] !== C || a[16] !== P.style || a[17] !== L ? (q = tTe("div", {
        className: L,
        ref: C,
        style: P.style,
        children: [
            j,
            z
        ]
    }), a[15] = C, a[16] = P.style, a[17] = L, a[18] = q) : q = a[18];
    const O = q;
    let B;
    a[19] === Symbol.for("react.memo_cache_sentinel") ? (B = wn(UAr()), a[19] = B) : B = a[19];
    const V = B;
    if (s === "split") {
        let W;
        a[20] === Symbol.for("react.memo_cache_sentinel") ? (W = wn(Yje({
            type: "unchanged",
            rangeSelected: !1
        })), a[20] = W) : W = a[20];
        const oe = W;
        let ce;
        a[21] === Symbol.for("react.memo_cache_sentinel") ? (ce = wn(yGt()), a[21] = ce) : ce = a[21];
        const Q = ce;
        let le;
        a[22] !== Q.className || a[23] !== Q.style || a[24] !== O ? (le = X5("div", {
            className: Q.className,
            style: Q.style,
            children: O
        }), a[22] = Q.className, a[23] = Q.style, a[24] = O, a[25] = le) : le = a[25];
        let he;
        return a[26] !== R || a[27] !== oe.className || a[28] !== oe.style || a[29] !== A || a[30] !== le ? (he = X5("div", {
            "aria-hidden": !0,
            className: V.className,
            style: V.style,
            children: tTe("div", {
                className: oe.className,
                style: oe.style,
                children: [
                    R,
                    A,
                    le
                ]
            })
        }), a[26] = R, a[27] = oe.className, a[28] = oe.style, a[29] = A, a[30] = le, a[31] = he) : he = a[31], he;
    }
    let H;
    a[32] === Symbol.for("react.memo_cache_sentinel") ? (H = wn(_Gt({
        type: "unchanged",
        rangeSelected: !1
    })), a[32] = H) : H = a[32];
    const Z = H;
    let K;
    a[33] === Symbol.for("react.memo_cache_sentinel") ? (K = wn(bGt()), a[33] = K) : K = a[33];
    const Y = K;
    let J;
    a[34] === Symbol.for("react.memo_cache_sentinel") ? (J = wn(gGt()), a[34] = J) : J = a[34];
    const re = J;
    let ne;
    a[35] !== O || a[36] !== m || a[37] !== re || a[38] !== Y ? (ne = m ? X5("div", {
        className: Y.className,
        style: Y.style,
        children: X5("div", {
            className: re.className,
            style: re.style,
            children: O
        })
    }) : O, a[35] = O, a[36] = m, a[37] = re, a[38] = Y, a[39] = ne) : ne = a[39];
    let ae;
    return a[40] !== R || a[41] !== A || a[42] !== Z.className || a[43] !== Z.style || a[44] !== ne ? (ae = X5("div", {
        "aria-hidden": !0,
        className: V.className,
        style: V.style,
        children: tTe("div", {
            className: Z.className,
            style: Z.style,
            children: [
                R,
                A,
                ne
            ]
        })
    }), a[40] = R, a[41] = A, a[42] = Z.className, a[43] = Z.style, a[44] = ne, a[45] = ae) : ae = a[45], ae;
}, "DiffWrapMeasureRow")), i(QAr, "resolveWrapMetrics"), i(CGt, "useDiffWordWrapLayout");

}
