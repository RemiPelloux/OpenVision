import { Ncp } from "./ComboboxPortalContext.js";
import { K8r, V8r } from "./ComboboxPositionerContext.js";
import { Y_e } from "./ComboboxRootContext.js";
import { cci, l7t } from "./InternalBackdrop.js";
import { Ic, T2r, hbn, lbn, mbn, pu } from "./LYd.js";
import { DRr, k_e } from "./constants_10.js";
import { cbn } from "./inertValue.js";
import { U8r, bGe, x0e, xZS } from "./ipa.js";
import { gm, yGe } from "./store_5.js";
import { E } from "./tslib.es6.js";
import { pbn } from "./useAnchorPositioning.js";
import { E2r } from "./useAnchoredPopupScrollLock.js";
import { jv, su } from "./useIsoLayoutEffect.js";
import { gbn } from "./usePositioner.js";
import { Jy } from "./useStableCallback.js";
import { TW } from "./useStore.js";
import { jsx as DZS } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { jsxs as MZS } from "./react-runtime/react/esm-jsx-runtime-production.js";
import * as PZS from "./react-runtime/react/esm-index-production.js";
var n7r;
export { n7r };
var __wakaru_Ucp_initialized = false;
export function Ucp() {
if (__wakaru_Ucp_initialized) return;
__wakaru_Ucp_initialized = true;
E(), jv(), Jy(), cbn(), Y_e(), K8r(), pbn(), Ncp(), k_e(), yGe(), cci(), gbn(), E2r(), TW(), n7r = PZS.forwardRef(function(e, n) {
    const { render: i, className: r, anchor: s, positionMethod: o = "absolute", side: a = "bottom", align: l = "center", sideOffset: c = 0, alignOffset: u = 0, collisionBoundary: d = "clipping-ancestors", collisionPadding: h = 5, arrowPadding: p = 5, sticky: g = !1, disableAnchorTracking: f = !1, collisionAvoidance: _ = DRr, style: b, ...y } = e, S = x0e(), { filteredItems: k } = bGe(), C = U8r(), T = xZS(), I = Ic(S, gm.modal), A = Ic(S, gm.open), P = Ic(S, gm.mounted), M = Ic(S, gm.openMethod), O = Ic(S, gm.positionerElement), N = Ic(S, gm.triggerElement), U = Ic(S, gm.inputElement), j = Ic(S, gm.inputGroupElement), $ = Ic(S, gm.inputInsidePopup), H = Ic(S, gm.transitionStatus), G = k.length === 0, K = hbn({
        anchor: s ?? ($ ? N : j ?? U),
        floatingRootContext: C,
        positionMethod: o,
        mounted: P,
        side: a,
        sideOffset: c,
        align: l,
        alignOffset: u,
        arrowPadding: p,
        collisionBoundary: d,
        collisionPadding: h,
        sticky: g,
        disableAnchorTracking: f,
        keepMounted: T,
        collisionAvoidance: _,
        lazyFlip: !0
    });
    T2r(A && I, M === "touch", O, N);
    const V = {
        open: A,
        side: K.side,
        align: K.align,
        anchorHidden: K.anchorHidden,
        empty: G
    };
    su(()=>{
        S.set("popupSide", K.side);
    }, [
        S,
        K.side
    ]);
    const Y = pu((Q)=>{
        S.set("positionerElement", Q);
    }), J = mbn(e, V, {
        styles: K.positionerStyles,
        transitionStatus: H,
        props: y,
        refs: [
            n,
            Y
        ],
        hidden: !P,
        inert: !A
    });
    return MZS(V8r.Provider, {
        value: K,
        children: [
            P && I && DZS(l7t, {
                inert: lbn(!A),
                cutout: j ?? U ?? N
            }),
            J
        ]
    });
}), process.env.NODE_ENV !== "production" && (n7r.displayName = "ComboboxPositioner");

}
