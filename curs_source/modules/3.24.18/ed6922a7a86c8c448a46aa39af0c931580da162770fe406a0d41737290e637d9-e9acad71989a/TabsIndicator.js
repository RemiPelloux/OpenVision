import { mol } from "./CSPContext.js";
import { O_t, cBf } from "./TabsIndicatorCssVars.js";
import { pMs } from "./TabsListContext.js";
import { KNi } from "./TabsRootContext.js";
import { GYl, dMs, sBf } from "./f0s.js";
import { E2g } from "./getCssDimensions.js";
import { VYl, aBf } from "./prehydrationScript.min.js";
import { Xnl, hol, kp, lul } from "./qIc.js";
import { YNi, pEn } from "./stateAttributesMapping_7.js";
import { x } from "./tslib.es6.js";
import { Znl } from "./useForcedRerendering.js";
import { oBf } from "./useIsHydrating.js";
import { wp } from "./useRenderElement.js";
import * as gMs from "./react-runtime/react/esm-index-production.js";
import { jsxs as lBf } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { jsx as uBf } from "./react-runtime/react/esm-jsx-runtime-production.js";
var jYl, fMs;
export { fMs, jYl };
var __wakaru_dBf_initialized = false;
export function dBf() {
if (__wakaru_dBf_initialized) return;
__wakaru_dBf_initialized = true;
x(), Znl(), wp(), E2g(), oBf(), KNi(), YNi(), pMs(), aBf(), cBf(), mol(), jYl = {
    ...pEn,
    activeTabPosition: ()=>null,
    activeTabSize: ()=>null
}, fMs = gMs.forwardRef(function(t, n) {
    const { className: i, render: r, renderBeforeHydration: s = !1, style: o, ...a } = t, { nonce: c } = hol(), { getTabElementBySelectedValue: l, orientation: u, tabActivationDirection: h, value: p } = dMs(), { tabsListElement: g, registerIndicatorUpdateListener: f } = GYl(), v = sBf(), b = Xnl();
    gMs.useEffect(()=>f(b), [
        f,
        b
    ]);
    let y = 0, T = 0, E = 0, A = 0, R = 0, D = 0, P = !1;
    if (p != null && g != null) {
        const G = l(p);
        if (G != null) {
            P = !0;
            const { width: q, height: z } = lul(G), { width: X, height: Y } = lul(g), Z = G.getBoundingClientRect(), K = g.getBoundingClientRect(), J = X > 0 ? K.width / X : 1, ne = Y > 0 ? K.height / Y : 1;
            if (Math.abs(J) > Number.EPSILON && Math.abs(ne) > Number.EPSILON) {
                const se = Z.left - K.left, re = Z.top - K.top;
                y = se / J + g.scrollLeft - g.clientLeft, E = re / ne + g.scrollTop - g.clientTop;
            } else y = G.offsetLeft, E = G.offsetTop;
            R = q, D = z, T = g.scrollWidth - y - R, A = g.scrollHeight - E - D;
        }
    }
    const N = P ? {
        left: y,
        right: T,
        top: E,
        bottom: A
    } : null, O = P ? {
        width: R,
        height: D
    } : null, F = P ? {
        [O_t.activeTabLeft]: `${y}px`,
        [O_t.activeTabRight]: `${T}px`,
        [O_t.activeTabTop]: `${E}px`,
        [O_t.activeTabBottom]: `${A}px`,
        [O_t.activeTabWidth]: `${R}px`,
        [O_t.activeTabHeight]: `${D}px`
    } : void 0, H = P && R > 0 && D > 0, W = kp("span", t, {
        state: {
            orientation: u,
            activeTabPosition: N,
            activeTabSize: O,
            tabActivationDirection: h
        },
        ref: n,
        props: [
            {
                role: "presentation",
                style: F,
                hidden: !H
            },
            a,
            {
                suppressHydrationWarning: !0
            }
        ],
        stateAttributesMapping: jYl
    });
    return p == null ? null : lBf(gMs.Fragment, {
        children: [
            W,
            v && s && uBf("script", {
                nonce: c,
                dangerouslySetInnerHTML: {
                    __html: VYl
                },
                suppressHydrationWarning: !0
            })
        ]
    });
}), process.env.NODE_ENV !== "production" && (fMs.displayName = "TabsIndicator");

}
