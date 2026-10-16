import { BPr, cGy, hbn, mbn } from "./LYd.js";
import { Yhh } from "./TooltipPortalContext.js";
import { Jhh, qPr } from "./TooltipPositionerContext.js";
import { Kci } from "./TooltipRootContext.js";
import { aci, lci } from "./adaptiveOriginMiddleware.js";
import { Rli, k_e } from "./constants_10.js";
import { E } from "./tslib.es6.js";
import { pbn } from "./useAnchorPositioning.js";
import { gbn } from "./usePositioner.js";
import * as eph from "./react-runtime/react/esm-index-production.js";
import { jsx as hGy } from "./react-runtime/react/esm-jsx-runtime-production.js";
var zPr;
export { zPr };
var __wakaru_tph_initialized = false;
export function tph() {
if (__wakaru_tph_initialized) return;
__wakaru_tph_initialized = true;
E(), Kci(), Jhh(), pbn(), Yhh(), k_e(), lci(), gbn(), zPr = eph.forwardRef(function(e, n) {
    const { render: i, className: r, anchor: s, positionMethod: o = "absolute", side: a = "top", align: l = "center", sideOffset: c = 0, alignOffset: u = 0, collisionBoundary: d = "clipping-ancestors", collisionPadding: h = 5, arrowPadding: p = 5, sticky: g = !1, disableAnchorTracking: f = !1, collisionAvoidance: _ = Rli, style: b, ...y } = e, S = BPr(), k = cGy(), C = S.useState("open"), T = S.useState("mounted"), I = S.useState("trackCursorAxis"), A = S.useState("disableHoverablePopup"), P = S.useState("floatingRootContext"), M = S.useState("instantType"), O = S.useState("transitionStatus"), N = S.useState("hasViewport"), U = hbn({
        anchor: s,
        positionMethod: o,
        floatingRootContext: P,
        mounted: T,
        side: a,
        sideOffset: c,
        align: l,
        alignOffset: u,
        collisionBoundary: d,
        collisionPadding: h,
        sticky: g,
        arrowPadding: p,
        disableAnchorTracking: f,
        keepMounted: k,
        collisionAvoidance: _,
        adaptiveOrigin: N ? aci : void 0
    }), j = eph.useMemo(()=>({
            open: C,
            side: U.side,
            align: U.align,
            anchorHidden: U.anchorHidden,
            instant: I !== "none" ? "tracking-cursor" : M
        }), [
        C,
        U.side,
        U.align,
        U.anchorHidden,
        I,
        M
    ]), $ = mbn(e, j, {
        styles: U.positionerStyles,
        transitionStatus: O,
        props: y,
        refs: [
            n,
            S.useStateSetter("positionerElement")
        ],
        hidden: !T,
        inert: !C || I === "both" || A
    });
    return hGy(qPr.Provider, {
        value: U,
        children: $
    });
}), process.env.NODE_ENV !== "production" && (zPr.displayName = "TooltipPositioner");

}
