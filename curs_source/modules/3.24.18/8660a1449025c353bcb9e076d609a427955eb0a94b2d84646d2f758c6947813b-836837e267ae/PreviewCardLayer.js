import { GWy, HWy, IWy, Ooe, U5, WWy, aWe } from "./LYd.js";
import { pB } from "./PortalContext.js";
import { MPr, x7t } from "./PreviewCard.types.js";
import { xWy } from "./PreviewCardHandle.js";
import { Thh } from "./PreviewCardPopup.js";
import { _hh } from "./PreviewCardPortal.js";
import { whh } from "./PreviewCardPositioner.js";
import { CPr, hhh } from "./PreviewCardRoot.js";
import { bhh } from "./PreviewCardTrigger.js";
import { mf } from "./cn.js";
import { oWe } from "./floating-anchor-transition.stylex.js";
import { Sbn, She, lWe } from "./floating-anchor.js";
import { gna } from "./floating-scroll-dismiss.js";
import { E_e } from "./floating-surface.stylex.js";
import { f2 } from "./scroll-area.js";
import { Va } from "./stylex.js";
import { Pbn, VSt } from "./tooltip-instant-dismiss.js";
import { E } from "./tslib.es6.js";
import { useRef as A7t } from "./react-runtime/react/esm-index-production.js";
import { useState as BWy } from "./react-runtime/react/esm-index-production.js";
import { c as DPr } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { jsxs as FWy } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { use as NPr } from "./react-runtime/react/esm-index-production.js";
import { useLayoutEffect as _na } from "./react-runtime/react/esm-index-production.js";
import { jsx as dWe } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { createContext as vna } from "./react-runtime/react/esm-index-production.js";
function jY(t) {
    const e = DPr(25), { children: n, placement: i, offset: r, sameAxisOnly: s, openDelay: o, closeDelay: a, controlledTargetId: l } = t, c = i === void 0 ? Sbn : i, u = r === void 0 ? 8 : r, d = s === void 0 ? !1 : s, h = o === void 0 ? x7t : o, p = a === void 0 ? lWe : a;
    let g;
    e[0] === Symbol.for("react.memo_cache_sentinel") ? (g = IWy(), e[0] = g) : g = e[0];
    const f = g, _ = A7t(null), b = A7t(null), y = A7t(null), S = A7t(!1);
    let k;
    e[1] === Symbol.for("react.memo_cache_sentinel") ? (k = new Map, e[1] = k) : k = e[1];
    const C = A7t(k), T = A7t(l), [I, A] = BWy(!1), P = A7t(null), M = NPr(Pbn), O = aWe(c, u, d);
    let N, U;
    e[2] !== I ? (N = ()=>{
        I || P.current?.unmount();
    }, U = [
        I
    ], e[2] = I, e[3] = N, e[4] = U) : (N = e[3], U = e[4]), _na(N, U);
    let j;
    e[5] === Symbol.for("react.memo_cache_sentinel") ? (j = (le)=>{
        _.current === le && (_.current = null, f.close());
    }, e[5] = j) : j = e[5];
    const $ = j;
    let H;
    e[6] === Symbol.for("react.memo_cache_sentinel") ? (H = ()=>{
        const le = T.current;
        if (le === void 0) return;
        const ce = le === null ? void 0 : C.current.get(le);
        if (le === null || ce === void 0 || ce.suppressed) {
            _.current = null, f.close();
            return;
        }
        _.current = ce.triggerId, f.open(ce.triggerId);
    }, e[6] = H) : H = e[6];
    const G = H;
    let q;
    e[7] === Symbol.for("react.memo_cache_sentinel") ? (q = ()=>{
        const le = S.current;
        S.current = !1;
        const ce = b.current;
        if (ce === null) return;
        const ae = y.current;
        ae === null || ae.id !== ce || !ae.isConnected || ae.hasAttribute("data-preview-card-layer-trigger-suppressed") || !le && ae !== ae.ownerDocument.activeElement && !ae.matches(":hover") || (_.current = ce, f.open(ce));
    }, e[7] = q) : q = e[7];
    const K = q;
    let V;
    e[8] === Symbol.for("react.memo_cache_sentinel") ? (V = (le, ce)=>(C.current.set(le, ce), G(), ()=>{
            C.current.get(le) === ce && (C.current.delete(le), G());
        }), e[8] = V) : V = e[8];
    const Y = V;
    let J, Q;
    e[9] !== l ? (J = ()=>{
        const le = T.current;
        if (le === void 0 && l !== void 0 && (b.current = _.current), T.current = l, l === void 0) {
            le !== void 0 && K();
            return;
        }
        le !== l && (S.current = !1), G();
    }, Q = [
        l,
        G,
        K
    ], e[9] = l, e[10] = J, e[11] = Q) : (J = e[10], Q = e[11]), _na(J, Q);
    let te;
    e[12] === Symbol.for("react.memo_cache_sentinel") ? (te = (le, ce)=>{
        if (T.current !== void 0 && ce.reason !== "imperative-action") {
            le && ce.trigger !== void 0 && !ce.trigger.hasAttribute("data-preview-card-layer-trigger-suppressed") ? (b.current = ce.trigger.id, y.current = ce.trigger, S.current = !0) : !le && ce.trigger?.id === b.current && (b.current = null, y.current = null, S.current = !1), ce.cancel(), G();
            return;
        }
        if (le && ce.trigger?.hasAttribute("data-preview-card-layer-trigger-suppressed")) {
            if (ce.cancel(), T.current !== void 0) {
                G();
                return;
            }
            _.current = null, b.current = null, f.close();
            return;
        }
        if (!le && ce.reason === "trigger-focus" && ce.event instanceof FocusEvent && ce.event.relatedTarget === null && ce.event.target instanceof Element && ce.event.target.matches(":hover")) {
            ce.cancel();
            return;
        }
        !le && ce.reason !== "imperative-action" && ce.trigger?.id === b.current && (b.current = null, y.current = null, S.current = !1), _.current = le ? ce.trigger?.id ?? _.current : null, T.current === void 0 && (b.current = _.current), A(le), T.current === void 0 && ce.trigger !== void 0 && (y.current = le ? ce.trigger : null);
    }, e[12] = te) : te = e[12];
    const ee = te;
    let re;
    e[13] !== p || e[14] !== M || e[15] !== h || e[16] !== O ? (re = {
        handle: f,
        instantDismiss: M,
        openDelay: h,
        closeDelay: p,
        positioner: O,
        closeIfActive: $,
        registerTarget: Y
    }, e[13] = p, e[14] = M, e[15] = h, e[16] = O, e[17] = re) : re = e[17];
    const ie = re;
    let oe;
    e[18] !== M || e[19] !== I ? (oe = dWe(CPr, {
        actionsRef: P,
        handle: f,
        onOpenChange: ee,
        children: (le)=>{
            const { payload: ce } = le;
            return !M && I && ce !== void 0 ? dWe(yna.Provider, {
                value: ce.triggerId,
                children: dWe(Sna.Provider, {
                    value: ce.contentKey,
                    children: dWe(HWy, {
                        children: ce.content
                    })
                })
            }) : null;
        }
    }), e[18] = M, e[19] = I, e[20] = oe) : oe = e[20];
    let se;
    return e[21] !== n || e[22] !== ie || e[23] !== oe ? (se = FWy(bna.Provider, {
        value: ie,
        children: [
            n,
            oe
        ]
    }), e[21] = n, e[22] = ie, e[23] = oe, e[24] = se) : se = e[24], se;
}
var bna, yna, Sna;
export { Sna, bna, jY, yna };
var __wakaru_LPr_initialized = false;
export function LPr() {
if (__wakaru_LPr_initialized) return;
__wakaru_LPr_initialized = true;
"use strict";
E(), U5(), Va(), oWe(), E_e(), mf(), She(), gna(), VSt(), MPr(), xWy(), hhh(), bhh(), pB(), Ooe(), _hh(), whh(), Thh(), f2(), bna = vna(null), yna = vna(null), Sna = vna(null), (function(t) {
    t.Trigger = WWy, t.Popup = GWy;
})(jY || (jY = {}));

}
