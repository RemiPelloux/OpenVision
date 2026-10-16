import { JLr } from "./DefaultDiff.stylex.js";
import { gn, ri, ro } from "./LYd.js";
import { mf } from "./cn.js";
import { e5h } from "./diff-word-wrap.js";
import { Gha, KLr, Lhi, XLr, YLr, ZLr, c5h, l5h, o5h, r5h, s5h, u_S } from "./nca.js";
import { Va } from "./stylex.js";
import { E } from "./tslib.es6.js";
import { joe } from "./use-latest-ref.js";
import { jsx as MFe } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { memo as __S } from "./react-runtime/react/esm-index-production.js";
import { jsxs as eOr } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { useRef as m5h } from "./react-runtime/react/esm-index-production.js";
import { c as p5h } from "./react-runtime/react/esm-compiler-runtime-production.js";
var zha, Vha, g5h, f5h, v5h, _5h;
export { Vha, _5h, f5h, g5h, v5h, zha };
var __wakaru_b5h_initialized = false;
export function b5h() {
if (__wakaru_b5h_initialized) return;
__wakaru_b5h_initialized = true;
"use strict";
E(), Va(), joe(), mf(), e5h(), JLr(), zha = 64, Vha = 32, g5h = "x".repeat(zha), f5h = "\u4E00".repeat(Vha), v5h = 8, _5h = __S(function(e) {
    const n = p5h(46), { viewMode: i, showLineNumbers: r, showPlusMinus: s, showAccentStrip: o, interactionEnabled: a, onMetrics: l } = e, c = m5h(null), u = m5h(null), d = ro(l);
    let h;
    n[0] !== d ? (h = (V)=>{
        if (!V) return;
        const Y = (Q)=>{
            const te = c.current?.getBoundingClientRect().width, ee = u.current?.getBoundingClientRect().width;
            if (!te || Q <= 0) return;
            const re = te / zha, ie = ee ? ee / Vha : re * 2;
            d.current({
                contentWidthPx: Q,
                charWidthPx: re,
                columnsForFullWidthChar: ie / re
            });
        }, J = new ResizeObserver((Q)=>{
            const te = Q[0]?.contentRect.width;
            te !== void 0 && Y(te);
        });
        return J.observe(V), ()=>J.disconnect();
    }, n[0] = d, n[1] = h) : h = n[1];
    const p = h;
    let g;
    if (n[2] !== o || n[3] !== r || n[4] !== s || n[5] !== i) {
        const V = gn(ZLr({
            dataType: void 0
        })), Y = (te)=>MFe("span", {
                className: ri("ui-default-diff__line-number", V.className),
                style: V.style
            }, te), J = gn(XLr({
            type: void 0,
            rangeSelected: !1,
            withIndicatorStrip: o
        })), Q = gn(c5h({
            type: "unchanged"
        }));
        g = r !== !1 ? eOr("div", {
            className: ri("ui-default-diff__gutter", J.className),
            style: J.style,
            children: [
                r === "partial" || i === "split" ? Y("partial") : [
                    Y("orig"),
                    Y("mod")
                ],
                s && i === "unified" && MFe("span", {
                    className: ri("ui-default-diff__line-indicator", Q.className),
                    style: Q.style,
                    children: "\xA0"
                })
            ]
        }) : null, n[2] = o, n[3] = r, n[4] = s, n[5] = i, n[6] = g;
    } else g = n[6];
    const f = g;
    let _;
    n[7] === Symbol.for("react.memo_cache_sentinel") ? (_ = gn(YLr({
        type: "unchanged",
        rangeSelected: !1
    })), n[7] = _) : _ = n[7];
    const b = _;
    let y;
    n[8] !== o ? (y = o ? MFe("div", {
        className: b.className,
        style: b.style
    }) : null, n[8] = o, n[9] = y) : y = n[9];
    const S = y;
    let k, C;
    n[10] !== a ? (k = gn(Lhi(), a && KLr()), C = ri("ui-default-diff__line-content", a && "ui-default-diff__line-content--interaction", k.className), n[10] = a, n[11] = k, n[12] = C) : (k = n[11], C = n[12]);
    let T, I;
    n[13] === Symbol.for("react.memo_cache_sentinel") ? (T = MFe("span", {
        ref: c,
        children: g5h
    }), I = MFe("span", {
        ref: u,
        children: f5h
    }), n[13] = T, n[14] = I) : (T = n[13], I = n[14]);
    let A;
    n[15] !== p || n[16] !== k.style || n[17] !== C ? (A = eOr("div", {
        className: C,
        ref: p,
        style: k.style,
        children: [
            T,
            I
        ]
    }), n[15] = p, n[16] = k.style, n[17] = C, n[18] = A) : A = n[18];
    const P = A;
    let M;
    n[19] === Symbol.for("react.memo_cache_sentinel") ? (M = gn(u_S()), n[19] = M) : M = n[19];
    const O = M;
    if (i === "split") {
        let V;
        n[20] === Symbol.for("react.memo_cache_sentinel") ? (V = gn(Gha({
            type: "unchanged",
            rangeSelected: !1
        })), n[20] = V) : V = n[20];
        const Y = V;
        let J;
        n[21] === Symbol.for("react.memo_cache_sentinel") ? (J = gn(o5h()), n[21] = J) : J = n[21];
        const Q = J;
        let te;
        n[22] !== Q.className || n[23] !== Q.style || n[24] !== P ? (te = MFe("div", {
            className: Q.className,
            style: Q.style,
            children: P
        }), n[22] = Q.className, n[23] = Q.style, n[24] = P, n[25] = te) : te = n[25];
        let ee;
        return n[26] !== S || n[27] !== Y.className || n[28] !== Y.style || n[29] !== f || n[30] !== te ? (ee = MFe("div", {
            "aria-hidden": !0,
            className: O.className,
            style: O.style,
            children: eOr("div", {
                className: Y.className,
                style: Y.style,
                children: [
                    S,
                    f,
                    te
                ]
            })
        }), n[26] = S, n[27] = Y.className, n[28] = Y.style, n[29] = f, n[30] = te, n[31] = ee) : ee = n[31], ee;
    }
    let N;
    n[32] === Symbol.for("react.memo_cache_sentinel") ? (N = gn(l5h({
        type: "unchanged",
        rangeSelected: !1
    })), n[32] = N) : N = n[32];
    const U = N;
    let j;
    n[33] === Symbol.for("react.memo_cache_sentinel") ? (j = gn(s5h()), n[33] = j) : j = n[33];
    const $ = j;
    let H;
    n[34] === Symbol.for("react.memo_cache_sentinel") ? (H = gn(r5h()), n[34] = H) : H = n[34];
    const G = H;
    let q;
    n[35] !== P || n[36] !== a || n[37] !== G || n[38] !== $ ? (q = a ? MFe("div", {
        className: $.className,
        style: $.style,
        children: MFe("div", {
            className: G.className,
            style: G.style,
            children: P
        })
    }) : P, n[35] = P, n[36] = a, n[37] = G, n[38] = $, n[39] = q) : q = n[39];
    let K;
    return n[40] !== S || n[41] !== f || n[42] !== U.className || n[43] !== U.style || n[44] !== q ? (K = MFe("div", {
        "aria-hidden": !0,
        className: O.className,
        style: O.style,
        children: eOr("div", {
            className: U.className,
            style: U.style,
            children: [
                S,
                f,
                q
            ]
        })
    }), n[40] = S, n[41] = f, n[42] = U.className, n[43] = U.style, n[44] = q, n[45] = K) : K = n[45], K;
});

}
