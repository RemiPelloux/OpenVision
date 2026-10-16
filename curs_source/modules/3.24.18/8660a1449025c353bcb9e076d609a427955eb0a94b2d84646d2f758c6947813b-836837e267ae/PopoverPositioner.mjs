import { BA, Ghw, Igw, RBe, _gw, lgw, pgw, qSs, qhw, wPf } from "./BA.js";
import { POl, vgw } from "./InternalBackdrop.mjs";
import { SPf } from "./PopoverPortalContext.mjs";
import { c1s, l1s } from "./PopoverPositionerContext.mjs";
import { PBe } from "./PopoverRootContext.mjs";
import { DPf, NPf } from "./adaptiveOriginMiddleware.mjs";
import { _Rf, g3n } from "./constants_2.mjs";
import { y3n } from "./index_5.mjs";
import { CPf } from "./inertValue.mjs";
import { rce } from "./reasons.mjs";
import { E } from "./tslib.es6.js";
import { mgw } from "./useAnchorPositioning.mjs";
import { xgw } from "./useAnchoredPopupScrollLock.mjs";
import { zSs } from "./useAnimationsFinished.mjs";
import { DG, pC } from "./useIsoLayoutEffect.mjs";
import { bgw } from "./usePositioner.mjs";
import { jsxs as Agw } from "./react-runtime/react/esm-jsx-runtime-production.js";
import * as LOl from "./react-runtime/react/esm-index-production.js";
import { jsx as WPf } from "./react-runtime/react/esm-jsx-runtime-production.js";
var OOl;
export { OOl };
var __wakaru_Rgw_initialized = false;
export function Rgw() {
if (__wakaru_Rgw_initialized) return;
__wakaru_Rgw_initialized = true;
"use client";
E(), CPf(), DG(), y3n(), PBe(), c1s(), mgw(), SPf(), vgw(), rce(), g3n(), zSs(), NPf(), bgw(), xgw(), OOl = LOl.forwardRef(function(e, n) {
    const { render: i, className: r, style: s, anchor: o, positionMethod: a = "absolute", side: l = "bottom", align: c = "center", sideOffset: u = 0, alignOffset: d = 0, collisionBoundary: h = "clipping-ancestors", collisionPadding: p = 5, arrowPadding: g = 5, sticky: f = !1, disableAnchorTracking: _ = !1, collisionAvoidance: b = _Rf, ...y } = e, { store: S } = RBe(), k = lgw(), C = Ghw(), T = S.useState("floatingRootContext"), I = S.useState("mounted"), A = S.useState("open"), P = S.useState("openChangeReason"), M = S.useState("activeTriggerElement"), O = S.useState("modal"), N = S.useState("openMethod"), U = S.useState("positionerElement"), j = S.useState("instantType"), $ = S.useState("transitionStatus"), H = S.useState("hasViewport"), G = LOl.useRef(null), q = qSs(U, !1, !1), K = pgw({
        anchor: o,
        floatingRootContext: T,
        positionMethod: a,
        mounted: I,
        side: l,
        sideOffset: u,
        align: c,
        alignOffset: d,
        arrowPadding: g,
        collisionBoundary: h,
        collisionPadding: p,
        sticky: f,
        disableAnchorTracking: _,
        keepMounted: k,
        nodeId: C,
        collisionAvoidance: b,
        adaptiveOrigin: H ? DPf : void 0
    }), V = T.useState("domReferenceElement");
    pC(()=>{
        const te = V, ee = G.current;
        if (te && (G.current = te), ee && te && te !== ee) {
            S.set("instantType", void 0);
            const re = new AbortController;
            return q(()=>{
                S.set("instantType", "trigger-change");
            }, re.signal), ()=>{
                re.abort();
            };
        }
    }, [
        V,
        q,
        S
    ]), Igw(A && O === !0 && P !== BA.triggerHover, N === "touch", U, M);
    const Y = LOl.useCallback((te)=>{
        S.set("positionerElement", te);
    }, [
        S
    ]), J = {
        open: A,
        side: K.side,
        align: K.align,
        anchorHidden: K.anchorHidden,
        instant: j
    }, Q = _gw(e, J, {
        styles: K.positionerStyles,
        transitionStatus: $,
        props: y,
        refs: [
            n,
            Y
        ],
        hidden: !I,
        inert: !A
    });
    return Agw(l1s.Provider, {
        value: K,
        children: [
            I && O === !0 && P !== BA.triggerHover && WPf(POl, {
                ref: S.context.internalBackdropRef,
                inert: wPf(!A),
                cutout: M
            }),
            WPf(qhw, {
                id: C,
                children: Q
            })
        ]
    });
}), process.env.NODE_ENV !== "production" && (OOl.displayName = "PopoverPositioner");

}
