import { BJ } from "./FloatingTree.js";
import { Jgt, KSn } from "./InternalBackdrop.js";
import { fVl } from "./PopoverPortalContext.js";
import { bVl, kLi } from "./PopoverPositionerContext.js";
import { ZXe } from "./PopoverRootContext.js";
import { qSn, zSn } from "./adaptiveOriginMiddleware.js";
import { Nre, fSn } from "./constants_10.js";
import { AAf, XXe } from "./f0s.js";
import { HSn } from "./inertValue.js";
import { $Sn, C1i, N0i, QBt, e1i, e5t, qds } from "./qIc.js";
import { g_, m2 } from "./reason-parts.js";
import { x } from "./tslib.es6.js";
import { JBt } from "./useAnchorPositioning.js";
import { T1i } from "./useAnchoredPopupScrollLock.js";
import { t1i } from "./useAnimationsFinished.js";
import { af, gl } from "./useIsoLayoutEffect.js";
import { t5t } from "./usePositioner.js";
import { jsxs as PAf } from "./react-runtime/react/esm-jsx-runtime-production.js";
import * as VAs from "./react-runtime/react/esm-index-production.js";
import { jsx as yVl } from "./react-runtime/react/esm-jsx-runtime-production.js";
var jAs;
export { jAs };
var __wakaru_LAf_initialized = false;
export function LAf() {
if (__wakaru_LAf_initialized) return;
__wakaru_LAf_initialized = true;
x(), HSn(), af(), ZXe(), bVl(), JBt(), fVl(), KSn(), Nre(), t1i(), zSn(), t5t(), T1i(), BJ(), g_(), jAs = VAs.forwardRef(function(t, n) {
    const { render: i, className: r, style: s, anchor: o, positionMethod: a = "absolute", side: c = "bottom", align: l = "center", sideOffset: u = 0, alignOffset: h = 0, collisionBoundary: p = "clipping-ancestors", collisionPadding: g = 5, arrowPadding: f = 5, sticky: v = !1, disableAnchorTracking: b = !1, collisionAvoidance: y = fSn, ...T } = t, { store: E } = XXe(), A = AAf(), R = N0i(), D = E.useState("floatingRootContext"), P = E.useState("mounted"), N = E.useState("open"), O = E.useState("openChangeReason"), F = E.useState("activeTriggerElement"), H = E.useState("modal"), $ = E.useState("openMethod"), W = E.useState("positionerElement"), G = E.useState("instantType"), q = E.useState("transitionStatus"), z = E.useState("hasViewport"), X = VAs.useRef(null), Y = e1i(W, !1, !1), Z = QBt({
        anchor: o,
        floatingRootContext: D,
        positionMethod: a,
        mounted: P,
        side: c,
        sideOffset: u,
        align: l,
        alignOffset: h,
        arrowPadding: f,
        collisionBoundary: p,
        collisionPadding: g,
        sticky: v,
        disableAnchorTracking: b,
        keepMounted: A,
        nodeId: R,
        collisionAvoidance: y,
        adaptiveOrigin: z ? qSn : void 0
    }), K = D.useState("domReferenceElement");
    gl(()=>{
        const se = K, re = X.current;
        if (se && (X.current = se), re && se && se !== re) {
            E.set("instantType", void 0);
            const ue = new AbortController;
            return Y(()=>{
                E.set("instantType", "trigger-change");
            }, ue.signal), ()=>{
                ue.abort();
            };
        }
    }, [
        K,
        Y,
        E
    ]), C1i(N && H === !0 && O !== m2, $ === "touch", W, F);
    const J = VAs.useCallback((se)=>{
        E.set("positionerElement", se);
    }, [
        E
    ]), ne = {
        open: N,
        side: Z.side,
        align: Z.align,
        anchorHidden: Z.anchorHidden,
        instant: G
    }, ee = e5t(t, ne, {
        styles: Z.positionerStyles,
        transitionStatus: q,
        props: T,
        refs: [
            n,
            J
        ],
        hidden: !P,
        inert: !N
    });
    return PAf(kLi.Provider, {
        value: Z,
        children: [
            P && H === !0 && O !== m2 && yVl(Jgt, {
                ref: E.context.internalBackdropRef,
                inert: $Sn(!N),
                cutout: F
            }),
            yVl(qds, {
                id: R,
                children: ee
            })
        ]
    });
}), process.env.NODE_ENV !== "production" && (jAs.displayName = "PopoverPositioner");

}
