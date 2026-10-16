import { Nul } from "./TooltipPortalContext.js";
import { Bul, FTi } from "./TooltipPositionerContext.js";
import { Lkn } from "./TooltipRootContext.js";
import { qSn, zSn } from "./adaptiveOriginMiddleware.js";
import { Nre, fSn } from "./constants_10.js";
import { PTi, QBt, e5t, hOg } from "./qIc.js";
import { x } from "./tslib.es6.js";
import { JBt } from "./useAnchorPositioning.js";
import { t5t } from "./usePositioner.js";
import * as Uul from "./react-runtime/react/esm-index-production.js";
import { jsx as fOg } from "./react-runtime/react/esm-jsx-runtime-production.js";
var bgs;
export { bgs };
var __wakaru_vOg_initialized = false;
export function vOg() {
if (__wakaru_vOg_initialized) return;
__wakaru_vOg_initialized = true;
x(), Lkn(), Bul(), JBt(), Nul(), Nre(), zSn(), t5t(), bgs = Uul.forwardRef(function(t, n) {
    const { render: i, className: r, anchor: s, positionMethod: o = "absolute", side: a = "top", align: c = "center", sideOffset: l = 0, alignOffset: u = 0, collisionBoundary: h = "clipping-ancestors", collisionPadding: p = 5, arrowPadding: g = 5, sticky: f = !1, disableAnchorTracking: v = !1, collisionAvoidance: b = fSn, style: y, ...T } = t, E = PTi(), A = hOg(), R = E.useState("open"), D = E.useState("mounted"), P = E.useState("trackCursorAxis"), N = E.useState("disableHoverablePopup"), O = E.useState("floatingRootContext"), F = E.useState("instantType"), H = E.useState("transitionStatus"), $ = E.useState("hasViewport"), W = QBt({
        anchor: s,
        positionMethod: o,
        floatingRootContext: O,
        mounted: D,
        side: a,
        sideOffset: l,
        align: c,
        alignOffset: u,
        collisionBoundary: h,
        collisionPadding: p,
        sticky: f,
        arrowPadding: g,
        disableAnchorTracking: v,
        keepMounted: A,
        collisionAvoidance: b,
        adaptiveOrigin: $ ? qSn : void 0
    }), G = Uul.useMemo(()=>({
            open: R,
            side: W.side,
            align: W.align,
            anchorHidden: W.anchorHidden,
            instant: P !== "none" ? "tracking-cursor" : F
        }), [
        R,
        W.side,
        W.align,
        W.anchorHidden,
        P,
        F
    ]), q = e5t(t, G, {
        styles: W.positionerStyles,
        transitionStatus: H,
        props: T,
        refs: [
            n,
            E.useStateSetter("positionerElement")
        ],
        hidden: !D,
        inert: !R || P === "both" || N
    });
    return fOg(FTi.Provider, {
        value: W,
        children: q
    });
}), process.env.NODE_ENV !== "production" && (bgs.displayName = "TooltipPositioner");

}
