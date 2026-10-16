import { gGy } from "./LYd.js";
import { pB } from "./PortalContext.js";
import { fGy } from "./TooltipHandle.js";
import { iph } from "./TooltipPopup.js";
import { Zhh } from "./TooltipPortal.js";
import { tph } from "./TooltipPositioner.js";
import { $hh } from "./TooltipRoot.js";
import { Vhh } from "./TooltipTrigger.js";
import { oWe } from "./floating-anchor-transition.stylex.js";
import { Sbn, She, bci, lWe } from "./floating-anchor.js";
import { gna } from "./floating-scroll-dismiss.js";
import { E_e } from "./floating-surface.stylex.js";
import { LT1, UT1 } from "./ipa.js";
import { Va } from "./stylex.js";
import { KPr, R7t } from "./tooltip-delay-group.js";
import { Pbn, VSt } from "./tooltip-instant-dismiss.js";
import { E } from "./tslib.es6.js";
import { c as E0n } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { use as MMa } from "./react-runtime/react/esm-index-production.js";
import { useState as MT1 } from "./react-runtime/react/esm-index-production.js";
import { createContext as PT1 } from "./react-runtime/react/esm-index-production.js";
import { jsxs as RT1 } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { jsx as T6e } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { useRef as cRp } from "./react-runtime/react/esm-index-production.js";
function bbi(t) {
    const e = E0n(20), { children: n, placement: i, offset: r, openDelay: s, closeDelay: o, sameAxisOnly: a, disabled: l, maxWidth: c, onOpenChange: u } = t, d = i === void 0 ? Sbn : i, h = r === void 0 ? 8 : r, p = a === void 0 ? !1 : a, g = l === void 0 ? !1 : l, f = MMa(KPr), _ = f?.open ?? s ?? bci, b = f?.close ?? o ?? lWe;
    let y;
    e[0] === Symbol.for("react.memo_cache_sentinel") ? (y = gGy(), e[0] = y) : y = e[0];
    const S = y, k = cRp(null), [C, T] = MT1(!1), I = MMa(Pbn);
    let A;
    e[1] === Symbol.for("react.memo_cache_sentinel") ? (A = (K)=>{
        k.current = K, T(!1);
    }, e[1] = A) : A = e[1];
    const P = A;
    let M;
    e[2] === Symbol.for("react.memo_cache_sentinel") ? (M = (K)=>{
        k.current === K && (T(!0), S.close(), k.current = null);
    }, e[2] = M) : M = e[2];
    const O = M;
    let N;
    e[3] !== u ? (N = (K)=>{
        K || (k.current = null), u?.(K);
    }, e[3] = u, e[4] = N) : N = e[4];
    const U = N, j = I || C;
    let $;
    e[5] !== b || e[6] !== _ ? ($ = {
        handle: S,
        openDelay: _,
        closeDelay: b,
        markTriggerActive: P,
        closeIfTriggerActive: O
    }, e[5] = b, e[6] = _, e[7] = $) : $ = e[7];
    const H = $;
    let G;
    e[8] !== g || e[9] !== U || e[10] !== c || e[11] !== h || e[12] !== d || e[13] !== p || e[14] !== j ? (G = T6e(LT1, {
        disabled: g,
        handle: S,
        offset: h,
        onOpenChange: U,
        placement: d,
        sameAxisOnly: p,
        maxWidth: c,
        suppressPopup: j
    }), e[8] = g, e[9] = U, e[10] = c, e[11] = h, e[12] = d, e[13] = p, e[14] = j, e[15] = G) : G = e[15];
    let q;
    return e[16] !== n || e[17] !== H || e[18] !== G ? (q = RT1(DMa.Provider, {
        value: H,
        children: [
            n,
            G
        ]
    }), e[16] = n, e[17] = H, e[18] = G, e[19] = q) : q = e[19], q;
}
var hRp, DMa;
export { DMa, bbi, hRp };
var __wakaru_jT1_initialized = false;
export function jT1() {
if (__wakaru_jT1_initialized) return;
__wakaru_jT1_initialized = true;
"use strict";
E(), Va(), oWe(), E_e(), She(), gna(), R7t(), VSt(), fGy(), pB(), $hh(), iph(), tph(), Zhh(), Vhh(), hRp = {
    base: {
        kfSwDN: "ui-87ps6o",
        kfzvcC: "ui-47corl",
        $$css: !0
    }
}, DMa = PT1(null), (function(t) {
    t.Trigger = UT1;
})(bbi || (bbi = {}));

}
