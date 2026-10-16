import { d6 } from "./PortalContext.js";
import { pul, rgs } from "./PreviewCard.types.js";
import { I2g } from "./PreviewCardHandle.js";
import { cul } from "./PreviewCardPopup.js";
import { tul } from "./PreviewCardPortal.js";
import { oul } from "./PreviewCardPositioner.js";
import { STi, Yll } from "./PreviewCardRoot.js";
import { nul } from "./PreviewCardTrigger.js";
import { qg } from "./cn.js";
import { SYe } from "./floating-anchor-transition.stylex.js";
import { akn, sue, wYe } from "./floating-anchor.js";
import { hul } from "./floating-scroll-dismiss.js";
import { Bfe } from "./floating-surface.stylex.js";
import { E5, G2g, GJ, V2g, W2g, kYe, x2g } from "./qIc.js";
import { ED } from "./scroll-area.js";
import { Oc } from "./stylex.js";
import { Mkn, gft } from "./tooltip-instant-dismiss.js";
import { x } from "./tslib.es6.js";
import { c as ATi } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useState as B2g } from "./react-runtime/react/esm-index-production.js";
import { jsxs as F2g } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { jsx as KRe } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { use as RTi } from "./react-runtime/react/esm-index-production.js";
import { useRef as fft } from "./react-runtime/react/esm-index-production.js";
import { useLayoutEffect as ogs } from "./react-runtime/react/esm-index-production.js";
import { createContext as sgs } from "./react-runtime/react/esm-index-production.js";
function _Ce(e) {
    const t = ATi(25), { children: n, placement: i, offset: r, sameAxisOnly: s, openDelay: o, closeDelay: a, controlledTargetId: c } = e, l = i === void 0 ? akn : i, u = r === void 0 ? 8 : r, h = s === void 0 ? !1 : s, p = o === void 0 ? rgs : o, g = a === void 0 ? wYe : a;
    let f;
    t[0] === Symbol.for("react.memo_cache_sentinel") ? (f = x2g(), t[0] = f) : f = t[0];
    const v = f, b = fft(null), y = fft(null), T = fft(null), E = fft(!1);
    let A;
    t[1] === Symbol.for("react.memo_cache_sentinel") ? (A = new Map, t[1] = A) : A = t[1];
    const R = fft(A), D = fft(c), [P, N] = B2g(!1), O = fft(null), F = RTi(Mkn), H = kYe(l, u, h);
    let $, W;
    t[2] !== P ? ($ = ()=>{
        P || O.current?.unmount();
    }, W = [
        P
    ], t[2] = P, t[3] = $, t[4] = W) : ($ = t[3], W = t[4]), ogs($, W);
    let G;
    t[5] === Symbol.for("react.memo_cache_sentinel") ? (G = (ye)=>{
        b.current === ye && (b.current = null, v.close());
    }, t[5] = G) : G = t[5];
    const q = G;
    let z;
    t[6] === Symbol.for("react.memo_cache_sentinel") ? (z = ()=>{
        const ye = D.current;
        if (ye === void 0) return;
        const _e = ye === null ? void 0 : R.current.get(ye);
        if (ye === null || _e === void 0 || _e.suppressed) {
            b.current = null, v.close();
            return;
        }
        b.current = _e.triggerId, v.open(_e.triggerId);
    }, t[6] = z) : z = t[6];
    const X = z;
    let Y;
    t[7] === Symbol.for("react.memo_cache_sentinel") ? (Y = ()=>{
        const ye = E.current;
        E.current = !1;
        const _e = y.current;
        if (_e === null) return;
        const me = T.current;
        me === null || me.id !== _e || !me.isConnected || me.hasAttribute("data-preview-card-layer-trigger-suppressed") || !ye && me !== me.ownerDocument.activeElement && !me.matches(":hover") || (b.current = _e, v.open(_e));
    }, t[7] = Y) : Y = t[7];
    const Z = Y;
    let K;
    t[8] === Symbol.for("react.memo_cache_sentinel") ? (K = (ye, _e)=>(R.current.set(ye, _e), X(), ()=>{
            R.current.get(ye) === _e && (R.current.delete(ye), X());
        }), t[8] = K) : K = t[8];
    const J = K;
    let ne, ee;
    t[9] !== c ? (ne = ()=>{
        const ye = D.current;
        if (ye === void 0 && c !== void 0 && (y.current = b.current), D.current = c, c === void 0) {
            ye !== void 0 && Z();
            return;
        }
        ye !== c && (E.current = !1), X();
    }, ee = [
        c,
        X,
        Z
    ], t[9] = c, t[10] = ne, t[11] = ee) : (ne = t[10], ee = t[11]), ogs(ne, ee);
    let se;
    t[12] === Symbol.for("react.memo_cache_sentinel") ? (se = (ye, _e)=>{
        if (D.current !== void 0 && _e.reason !== "imperative-action") {
            ye && _e.trigger !== void 0 && !_e.trigger.hasAttribute("data-preview-card-layer-trigger-suppressed") ? (y.current = _e.trigger.id, T.current = _e.trigger, E.current = !0) : !ye && _e.trigger?.id === y.current && (y.current = null, T.current = null, E.current = !1), _e.cancel(), X();
            return;
        }
        if (ye && _e.trigger?.hasAttribute("data-preview-card-layer-trigger-suppressed")) {
            if (_e.cancel(), D.current !== void 0) {
                X();
                return;
            }
            b.current = null, y.current = null, v.close();
            return;
        }
        if (!ye && _e.reason === "trigger-focus" && _e.event instanceof FocusEvent && _e.event.relatedTarget === null && _e.event.target instanceof Element && _e.event.target.matches(":hover")) {
            _e.cancel();
            return;
        }
        !ye && _e.reason !== "imperative-action" && _e.trigger?.id === y.current && (y.current = null, T.current = null, E.current = !1), b.current = ye ? _e.trigger?.id ?? b.current : null, D.current === void 0 && (y.current = b.current), N(ye), D.current === void 0 && _e.trigger !== void 0 && (T.current = ye ? _e.trigger : null);
    }, t[12] = se) : se = t[12];
    const re = se;
    let ue;
    t[13] !== g || t[14] !== F || t[15] !== p || t[16] !== H ? (ue = {
        handle: v,
        instantDismiss: F,
        openDelay: p,
        closeDelay: g,
        positioner: H,
        closeIfActive: q,
        registerTarget: J
    }, t[13] = g, t[14] = F, t[15] = p, t[16] = H, t[17] = ue) : ue = t[17];
    const ce = ue;
    let de;
    t[18] !== F || t[19] !== P ? (de = KRe(STi, {
        actionsRef: O,
        handle: v,
        onOpenChange: re,
        children: (ye)=>{
            const { payload: _e } = ye;
            return !F && P && _e !== void 0 ? KRe(cgs.Provider, {
                value: _e.triggerId,
                children: KRe(lgs.Provider, {
                    value: _e.contentKey,
                    children: KRe(W2g, {
                        children: _e.content
                    })
                })
            }) : null;
        }
    }), t[18] = F, t[19] = P, t[20] = de) : de = t[20];
    let le;
    return t[21] !== n || t[22] !== ce || t[23] !== de ? (le = F2g(ags.Provider, {
        value: ce,
        children: [
            n,
            de
        ]
    }), t[21] = n, t[22] = ce, t[23] = de, t[24] = le) : le = t[24], le;
}
var ags, cgs, lgs;
export { _Ce, ags, cgs, lgs };
var __wakaru_ugs_initialized = false;
export function ugs() {
if (__wakaru_ugs_initialized) return;
__wakaru_ugs_initialized = true;
"use strict";
x(), E5(), Oc(), SYe(), Bfe(), qg(), sue(), hul(), gft(), pul(), I2g(), Yll(), nul(), d6(), GJ(), tul(), oul(), cul(), ED(), ags = sgs(null), cgs = sgs(null), lgs = sgs(null), (function(e) {
    e.Trigger = G2g, e.Popup = V2g;
})(_Ce || (_Ce = {}));

}
