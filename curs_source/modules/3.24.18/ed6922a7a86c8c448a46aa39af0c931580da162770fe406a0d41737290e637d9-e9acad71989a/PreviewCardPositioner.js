import { BJ } from "./FloatingTree.js";
import { Rkn } from "./PreviewCardContext.js";
import { Zll } from "./PreviewCardPortalContext.js";
import { ETi, rul } from "./PreviewCardPositionerContext.js";
import { qSn, zSn } from "./adaptiveOriginMiddleware.js";
import { Nre, fSn } from "./constants_10.js";
import { shs } from "./inlineRect.js";
import { Akn, N0i, QBt, VMg, _2g, e5t, qds } from "./qIc.js";
import { x } from "./tslib.es6.js";
import { JBt } from "./useAnchorPositioning.js";
import { af, gl } from "./useIsoLayoutEffect.js";
import { t5t } from "./usePositioner.js";
import * as C2g from "./react-runtime/react/esm-index-production.js";
import { jsx as sul } from "./react-runtime/react/esm-jsx-runtime-production.js";
var xTi;
export { xTi };
var __wakaru_oul_initialized = false;
export function oul() {
if (__wakaru_oul_initialized) return;
__wakaru_oul_initialized = true;
x(), af(), Rkn(), rul(), JBt(), Zll(), Nre(), zSn(), t5t(), BJ(), shs(), xTi = C2g.forwardRef(function(t, n) {
    const { render: i, className: r, anchor: s, positionMethod: o = "absolute", side: a = "bottom", align: c = "center", sideOffset: l = 0, alignOffset: u = 0, collisionBoundary: h = "clipping-ancestors", collisionPadding: p = 5, arrowPadding: g = 5, sticky: f = !1, disableAnchorTracking: v = !1, collisionAvoidance: b = fSn, style: y, ...T } = t, E = Akn(), A = _2g(), R = N0i(), D = E.useState("open"), P = E.useState("mounted"), N = E.useState("floatingRootContext"), O = E.useState("instantType"), F = E.useState("transitionStatus"), H = E.useState("hasViewport"), $ = E.context.inlineRectCoordsRef, W = QBt({
        anchor: s,
        floatingRootContext: N,
        positionMethod: o,
        mounted: P,
        side: a,
        sideOffset: l,
        align: c,
        alignOffset: u,
        arrowPadding: g,
        collisionBoundary: h,
        collisionPadding: p,
        sticky: f,
        disableAnchorTracking: v,
        keepMounted: A,
        nodeId: R,
        collisionAvoidance: b,
        adaptiveOrigin: H ? qSn : void 0,
        inline: VMg($)
    }), G = W.update;
    gl(()=>{
        D && P && G();
    }, [
        D,
        P,
        G
    ]);
    const q = {
        open: D,
        side: W.side,
        align: W.align,
        anchorHidden: W.anchorHidden,
        instant: O
    }, z = e5t(t, q, {
        styles: W.positionerStyles,
        transitionStatus: F,
        props: T,
        refs: [
            n,
            E.useStateSetter("positionerElement")
        ],
        hidden: !P,
        inert: !D
    });
    return sul(ETi.Provider, {
        value: W,
        children: sul(qds, {
            id: R,
            children: z
        })
    });
}), process.env.NODE_ENV !== "production" && (xTi.displayName = "PreviewCardPositioner");

}
