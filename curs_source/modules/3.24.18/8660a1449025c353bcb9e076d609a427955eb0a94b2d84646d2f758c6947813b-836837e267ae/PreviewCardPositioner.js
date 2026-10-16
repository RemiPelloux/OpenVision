import { vhe } from "./FloatingTree.js";
import { Gci, KUy, ORr, _Wy, hbn, mbn, zQo } from "./LYd.js";
import { qci } from "./PreviewCardContext.js";
import { mhh } from "./PreviewCardPortalContext.js";
import { APr, Shh } from "./PreviewCardPositionerContext.js";
import { aci, lci } from "./adaptiveOriginMiddleware.js";
import { Rli, k_e } from "./constants_10.js";
import { sJo } from "./inlineRect.js";
import { E } from "./tslib.es6.js";
import { pbn } from "./useAnchorPositioning.js";
import { jv, su } from "./useIsoLayoutEffect.js";
import { gbn } from "./usePositioner.js";
import * as CWy from "./react-runtime/react/esm-index-production.js";
import { jsx as khh } from "./react-runtime/react/esm-jsx-runtime-production.js";
var RPr;
export { RPr };
var __wakaru_whh_initialized = false;
export function whh() {
if (__wakaru_whh_initialized) return;
__wakaru_whh_initialized = true;
E(), jv(), qci(), Shh(), pbn(), mhh(), k_e(), lci(), gbn(), vhe(), sJo(), RPr = CWy.forwardRef(function(e, n) {
    const { render: i, className: r, anchor: s, positionMethod: o = "absolute", side: a = "bottom", align: l = "center", sideOffset: c = 0, alignOffset: u = 0, collisionBoundary: d = "clipping-ancestors", collisionPadding: h = 5, arrowPadding: p = 5, sticky: g = !1, disableAnchorTracking: f = !1, collisionAvoidance: _ = Rli, style: b, ...y } = e, S = Gci(), k = _Wy(), C = ORr(), T = S.useState("open"), I = S.useState("mounted"), A = S.useState("floatingRootContext"), P = S.useState("instantType"), M = S.useState("transitionStatus"), O = S.useState("hasViewport"), N = S.context.inlineRectCoordsRef, U = hbn({
        anchor: s,
        floatingRootContext: A,
        positionMethod: o,
        mounted: I,
        side: a,
        sideOffset: c,
        align: l,
        alignOffset: u,
        arrowPadding: p,
        collisionBoundary: d,
        collisionPadding: h,
        sticky: g,
        disableAnchorTracking: f,
        keepMounted: k,
        nodeId: C,
        collisionAvoidance: _,
        adaptiveOrigin: O ? aci : void 0,
        inline: KUy(N)
    }), j = U.update;
    su(()=>{
        T && I && j();
    }, [
        T,
        I,
        j
    ]);
    const $ = {
        open: T,
        side: U.side,
        align: U.align,
        anchorHidden: U.anchorHidden,
        instant: P
    }, H = mbn(e, $, {
        styles: U.positionerStyles,
        transitionStatus: M,
        props: y,
        refs: [
            n,
            S.useStateSetter("positionerElement")
        ],
        hidden: !I,
        inert: !T
    });
    return khh(APr.Provider, {
        value: U,
        children: khh(zQo, {
            id: C,
            children: H
        })
    });
}), process.env.NODE_ENV !== "production" && (RPr.displayName = "PreviewCardPositioner");

}
