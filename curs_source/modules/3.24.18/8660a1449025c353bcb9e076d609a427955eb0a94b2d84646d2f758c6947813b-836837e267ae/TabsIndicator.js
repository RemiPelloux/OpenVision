import { rea } from "./CSPContext.js";
import { Dsh, Ehh, Lm, nea } from "./LYd.js";
import { IqS, y$t } from "./TabsIndicatorCssVars.js";
import { n0a } from "./TabsListContext.js";
import { Cfi } from "./TabsRootContext.js";
import { EWy } from "./getCssDimensions.js";
import { Isp, Tsp, qBr } from "./ipa.js";
import { Asp, EqS } from "./prehydrationScript.min.js";
import { Tfi, gkn } from "./stateAttributesMapping_7.js";
import { E } from "./tslib.es6.js";
import { Nsh } from "./useForcedRerendering.js";
import { xsp } from "./useIsHydrating.js";
import { Om } from "./useRenderElement.js";
import { jsx as AqS } from "./react-runtime/react/esm-jsx-runtime-production.js";
import * as i0a from "./react-runtime/react/esm-index-production.js";
import { jsxs as xqS } from "./react-runtime/react/esm-jsx-runtime-production.js";
var Rsp, XBr;
export { Rsp, XBr };
var __wakaru_Psp_initialized = false;
export function Psp() {
if (__wakaru_Psp_initialized) return;
__wakaru_Psp_initialized = true;
E(), Nsh(), Om(), EWy(), xsp(), Cfi(), Tfi(), n0a(), EqS(), IqS(), rea(), Rsp = {
    ...gkn,
    activeTabPosition: ()=>null,
    activeTabSize: ()=>null
}, XBr = i0a.forwardRef(function(e, n) {
    const { className: i, render: r, renderBeforeHydration: s = !1, style: o, ...a } = e, { nonce: l } = nea(), { getTabElementBySelectedValue: c, orientation: u, tabActivationDirection: d, value: h } = qBr(), { tabsListElement: p, registerIndicatorUpdateListener: g } = Tsp(), f = Isp(), _ = Dsh();
    i0a.useEffect(()=>g(_), [
        g,
        _
    ]);
    let b = 0, y = 0, S = 0, k = 0, C = 0, T = 0, I = !1;
    if (h != null && p != null) {
        const j = c(h);
        if (j != null) {
            I = !0;
            const { width: $, height: H } = Ehh(j), { width: G, height: q } = Ehh(p), K = j.getBoundingClientRect(), V = p.getBoundingClientRect(), Y = G > 0 ? V.width / G : 1, J = q > 0 ? V.height / q : 1;
            if (Math.abs(Y) > Number.EPSILON && Math.abs(J) > Number.EPSILON) {
                const te = K.left - V.left, ee = K.top - V.top;
                b = te / Y + p.scrollLeft - p.clientLeft, S = ee / J + p.scrollTop - p.clientTop;
            } else b = j.offsetLeft, S = j.offsetTop;
            C = $, T = H, y = p.scrollWidth - b - C, k = p.scrollHeight - S - T;
        }
    }
    const A = I ? {
        left: b,
        right: y,
        top: S,
        bottom: k
    } : null, P = I ? {
        width: C,
        height: T
    } : null, M = I ? {
        [y$t.activeTabLeft]: `${b}px`,
        [y$t.activeTabRight]: `${y}px`,
        [y$t.activeTabTop]: `${S}px`,
        [y$t.activeTabBottom]: `${k}px`,
        [y$t.activeTabWidth]: `${C}px`,
        [y$t.activeTabHeight]: `${T}px`
    } : void 0, O = I && C > 0 && T > 0, U = Lm("span", e, {
        state: {
            orientation: u,
            activeTabPosition: A,
            activeTabSize: P,
            tabActivationDirection: d
        },
        ref: n,
        props: [
            {
                role: "presentation",
                style: M,
                hidden: !O
            },
            a,
            {
                suppressHydrationWarning: !0
            }
        ],
        stateAttributesMapping: Rsp
    });
    return h == null ? null : xqS(i0a.Fragment, {
        children: [
            U,
            f && s && AqS("script", {
                nonce: l,
                dangerouslySetInnerHTML: {
                    __html: Asp
                },
                suppressHydrationWarning: !0
            })
        ]
    });
}), process.env.NODE_ENV !== "production" && (XBr.displayName = "TabsIndicator");

}
