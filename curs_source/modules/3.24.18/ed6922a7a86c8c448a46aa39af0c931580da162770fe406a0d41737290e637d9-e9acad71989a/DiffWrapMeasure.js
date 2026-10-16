import { A2l, DRi, E2l, LRi, MRi, PRi, R2l, T2l, _0n, a0s, brf, x2l } from "./DSs.js";
import { ORi } from "./DefaultDiff.stylex.js";
import { qg } from "./cn.js";
import { S2l } from "./diff-word-wrap.js";
import { Nn, jl, ni } from "./qIc.js";
import { Oc } from "./stylex.js";
import { x } from "./tslib.es6.js";
import { pY } from "./use-latest-ref.js";
import { jsxs as FRi } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as L2l } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useRef as N2l } from "./react-runtime/react/esm-index-production.js";
import { jsx as VCe } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { memo as xrf } from "./react-runtime/react/esm-index-production.js";
var l0s, u0s, O2l, F2l, B2l, U2l;
export { B2l, F2l, O2l, U2l, l0s, u0s };
var __wakaru_$2l_initialized = false;
export function $2l() {
if (__wakaru_$2l_initialized) return;
__wakaru_$2l_initialized = true;
"use strict";
x(), Oc(), pY(), qg(), S2l(), ORi(), l0s = 64, u0s = 32, O2l = "x".repeat(l0s), F2l = "\u4E00".repeat(u0s), B2l = 8, U2l = xrf(function(t) {
    const n = L2l(46), { viewMode: i, showLineNumbers: r, showPlusMinus: s, showAccentStrip: o, interactionEnabled: a, onMetrics: c } = t, l = N2l(null), u = N2l(null), h = jl(c);
    let p;
    n[0] !== h ? (p = (K)=>{
        if (!K) return;
        const J = (ee)=>{
            const se = l.current?.getBoundingClientRect().width, re = u.current?.getBoundingClientRect().width;
            if (!se || ee <= 0) return;
            const ue = se / l0s, ce = re ? re / u0s : ue * 2;
            h.current({
                contentWidthPx: ee,
                charWidthPx: ue,
                columnsForFullWidthChar: ce / ue
            });
        }, ne = new ResizeObserver((ee)=>{
            const se = ee[0]?.contentRect.width;
            se !== void 0 && J(se);
        });
        return ne.observe(K), ()=>ne.disconnect();
    }, n[0] = h, n[1] = p) : p = n[1];
    const g = p;
    let f;
    if (n[2] !== o || n[3] !== r || n[4] !== s || n[5] !== i) {
        const K = Nn(LRi({
            dataType: void 0
        })), J = (se)=>VCe("span", {
                className: ni("ui-default-diff__line-number", K.className),
                style: K.style
            }, se), ne = Nn(PRi({
            type: void 0,
            rangeSelected: !1,
            withIndicatorStrip: o
        })), ee = Nn(R2l({
            type: "unchanged"
        }));
        f = r !== !1 ? FRi("div", {
            className: ni("ui-default-diff__gutter", ne.className),
            style: ne.style,
            children: [
                r === "partial" || i === "split" ? J("partial") : [
                    J("orig"),
                    J("mod")
                ],
                s && i === "unified" && VCe("span", {
                    className: ni("ui-default-diff__line-indicator", ee.className),
                    style: ee.style,
                    children: "\xA0"
                })
            ]
        }) : null, n[2] = o, n[3] = r, n[4] = s, n[5] = i, n[6] = f;
    } else f = n[6];
    const v = f;
    let b;
    n[7] === Symbol.for("react.memo_cache_sentinel") ? (b = Nn(MRi({
        type: "unchanged",
        rangeSelected: !1
    })), n[7] = b) : b = n[7];
    const y = b;
    let T;
    n[8] !== o ? (T = o ? VCe("div", {
        className: y.className,
        style: y.style
    }) : null, n[8] = o, n[9] = T) : T = n[9];
    const E = T;
    let A, R;
    n[10] !== a ? (A = Nn(_0n(), a && DRi()), R = ni("ui-default-diff__line-content", a && "ui-default-diff__line-content--interaction", A.className), n[10] = a, n[11] = A, n[12] = R) : (A = n[11], R = n[12]);
    let D, P;
    n[13] === Symbol.for("react.memo_cache_sentinel") ? (D = VCe("span", {
        ref: l,
        children: O2l
    }), P = VCe("span", {
        ref: u,
        children: F2l
    }), n[13] = D, n[14] = P) : (D = n[13], P = n[14]);
    let N;
    n[15] !== g || n[16] !== A.style || n[17] !== R ? (N = FRi("div", {
        className: R,
        ref: g,
        style: A.style,
        children: [
            D,
            P
        ]
    }), n[15] = g, n[16] = A.style, n[17] = R, n[18] = N) : N = n[18];
    const O = N;
    let F;
    n[19] === Symbol.for("react.memo_cache_sentinel") ? (F = Nn(brf()), n[19] = F) : F = n[19];
    const H = F;
    if (i === "split") {
        let K;
        n[20] === Symbol.for("react.memo_cache_sentinel") ? (K = Nn(a0s({
            type: "unchanged",
            rangeSelected: !1
        })), n[20] = K) : K = n[20];
        const J = K;
        let ne;
        n[21] === Symbol.for("react.memo_cache_sentinel") ? (ne = Nn(x2l()), n[21] = ne) : ne = n[21];
        const ee = ne;
        let se;
        n[22] !== ee.className || n[23] !== ee.style || n[24] !== O ? (se = VCe("div", {
            className: ee.className,
            style: ee.style,
            children: O
        }), n[22] = ee.className, n[23] = ee.style, n[24] = O, n[25] = se) : se = n[25];
        let re;
        return n[26] !== E || n[27] !== J.className || n[28] !== J.style || n[29] !== v || n[30] !== se ? (re = VCe("div", {
            "aria-hidden": !0,
            className: H.className,
            style: H.style,
            children: FRi("div", {
                className: J.className,
                style: J.style,
                children: [
                    E,
                    v,
                    se
                ]
            })
        }), n[26] = E, n[27] = J.className, n[28] = J.style, n[29] = v, n[30] = se, n[31] = re) : re = n[31], re;
    }
    let $;
    n[32] === Symbol.for("react.memo_cache_sentinel") ? ($ = Nn(A2l({
        type: "unchanged",
        rangeSelected: !1
    })), n[32] = $) : $ = n[32];
    const W = $;
    let G;
    n[33] === Symbol.for("react.memo_cache_sentinel") ? (G = Nn(E2l()), n[33] = G) : G = n[33];
    const q = G;
    let z;
    n[34] === Symbol.for("react.memo_cache_sentinel") ? (z = Nn(T2l()), n[34] = z) : z = n[34];
    const X = z;
    let Y;
    n[35] !== O || n[36] !== a || n[37] !== X || n[38] !== q ? (Y = a ? VCe("div", {
        className: q.className,
        style: q.style,
        children: VCe("div", {
            className: X.className,
            style: X.style,
            children: O
        })
    }) : O, n[35] = O, n[36] = a, n[37] = X, n[38] = q, n[39] = Y) : Y = n[39];
    let Z;
    return n[40] !== E || n[41] !== v || n[42] !== W.className || n[43] !== W.style || n[44] !== Y ? (Z = VCe("div", {
        "aria-hidden": !0,
        className: H.className,
        style: H.style,
        children: FRi("div", {
            className: W.className,
            style: W.style,
            children: [
                E,
                v,
                Y
            ]
        })
    }), n[40] = E, n[41] = v, n[42] = W.className, n[43] = W.style, n[44] = Y, n[45] = Z) : Z = n[45], Z;
});

}
