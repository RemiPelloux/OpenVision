import { vhe } from "./FloatingTree.js";
import { cci, l7t } from "./InternalBackdrop.js";
import { ORr, T2r, ZRr, hbn, lbn, mbn, zQo } from "./LYd.js";
import { FZh } from "./PopoverPortalContext.js";
import { P4r, jZh } from "./PopoverPositionerContext.js";
import { Okt } from "./PopoverRootContext.js";
import { aci, lci } from "./adaptiveOriginMiddleware.js";
import { Rli, k_e } from "./constants_10.js";
import { cbn } from "./inertValue.js";
import { K6S, Lkt } from "./ipa.js";
import { E4, Zb } from "./reason-parts.js";
import { E } from "./tslib.es6.js";
import { pbn } from "./useAnchorPositioning.js";
import { E2r } from "./useAnchoredPopupScrollLock.js";
import { QRr } from "./useAnimationsFinished.js";
import { jv, su } from "./useIsoLayoutEffect.js";
import { gbn } from "./usePositioner.js";
import { jsx as $Zh } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { jsxs as Q6S } from "./react-runtime/react/esm-jsx-runtime-production.js";
import * as USa from "./react-runtime/react/esm-index-production.js";
var jSa;
export { jSa };
var __wakaru_J6S_initialized = false;
export function J6S() {
if (__wakaru_J6S_initialized) return;
__wakaru_J6S_initialized = true;
E(), cbn(), jv(), Okt(), jZh(), pbn(), FZh(), cci(), k_e(), QRr(), lci(), gbn(), E2r(), vhe(), Zb(), jSa = USa.forwardRef(function(e, n) {
    const { render: i, className: r, style: s, anchor: o, positionMethod: a = "absolute", side: l = "bottom", align: c = "center", sideOffset: u = 0, alignOffset: d = 0, collisionBoundary: h = "clipping-ancestors", collisionPadding: p = 5, arrowPadding: g = 5, sticky: f = !1, disableAnchorTracking: _ = !1, collisionAvoidance: b = Rli, ...y } = e, { store: S } = Lkt(), k = K6S(), C = ORr(), T = S.useState("floatingRootContext"), I = S.useState("mounted"), A = S.useState("open"), P = S.useState("openChangeReason"), M = S.useState("activeTriggerElement"), O = S.useState("modal"), N = S.useState("openMethod"), U = S.useState("positionerElement"), j = S.useState("instantType"), $ = S.useState("transitionStatus"), H = S.useState("hasViewport"), G = USa.useRef(null), q = ZRr(U, !1, !1), K = hbn({
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
        adaptiveOrigin: H ? aci : void 0
    }), V = T.useState("domReferenceElement");
    su(()=>{
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
    ]), T2r(A && O === !0 && P !== E4, N === "touch", U, M);
    const Y = USa.useCallback((te)=>{
        S.set("positionerElement", te);
    }, [
        S
    ]), J = {
        open: A,
        side: K.side,
        align: K.align,
        anchorHidden: K.anchorHidden,
        instant: j
    }, Q = mbn(e, J, {
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
    return Q6S(P4r.Provider, {
        value: K,
        children: [
            I && O === !0 && P !== E4 && $Zh(l7t, {
                ref: S.context.internalBackdropRef,
                inert: lbn(!A),
                cutout: M
            }),
            $Zh(zQo, {
                id: C,
                children: Q
            })
        ]
    });
}), process.env.NODE_ENV !== "production" && (jSa.displayName = "PopoverPositioner");

}
