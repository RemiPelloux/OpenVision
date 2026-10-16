import { QQl } from "./ComboboxPortalContext.js";
import { M2i, P2i } from "./ComboboxPositionerContext.js";
import { Nue } from "./ComboboxRootContext.js";
import { Jgt, KSn } from "./InternalBackdrop.js";
import { M0i, Nre } from "./constants_10.js";
import { E2i, _6e, cUf, wve } from "./f0s.js";
import { HSn } from "./inertValue.js";
import { $Sn, C1i, QBt, e5t, jc, su } from "./qIc.js";
import { b6e, op } from "./store_5.js";
import { x } from "./tslib.es6.js";
import { JBt } from "./useAnchorPositioning.js";
import { T1i } from "./useAnchoredPopupScrollLock.js";
import { af, gl } from "./useIsoLayoutEffect.js";
import { t5t } from "./usePositioner.js";
import { Cy } from "./useStableCallback.js";
import { kU } from "./useStore.js";
import { jsx as gUf } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { jsxs as mUf } from "./react-runtime/react/esm-jsx-runtime-production.js";
import * as pUf from "./react-runtime/react/esm-index-production.js";
var QPs;
export { QPs };
var __wakaru_fUf_initialized = false;
export function fUf() {
if (__wakaru_fUf_initialized) return;
__wakaru_fUf_initialized = true;
x(), af(), Cy(), HSn(), Nue(), P2i(), JBt(), QQl(), Nre(), b6e(), KSn(), t5t(), T1i(), kU(), QPs = pUf.forwardRef(function(t, n) {
    const { render: i, className: r, anchor: s, positionMethod: o = "absolute", side: a = "bottom", align: c = "center", sideOffset: l = 0, alignOffset: u = 0, collisionBoundary: h = "clipping-ancestors", collisionPadding: p = 5, arrowPadding: g = 5, sticky: f = !1, disableAnchorTracking: v = !1, collisionAvoidance: b = M0i, style: y, ...T } = t, E = wve(), { filteredItems: A } = _6e(), R = E2i(), D = cUf(), P = jc(E, op.modal), N = jc(E, op.open), O = jc(E, op.mounted), F = jc(E, op.openMethod), H = jc(E, op.positionerElement), $ = jc(E, op.triggerElement), W = jc(E, op.inputElement), G = jc(E, op.inputGroupElement), q = jc(E, op.inputInsidePopup), z = jc(E, op.transitionStatus), X = A.length === 0, Z = QBt({
        anchor: s ?? (q ? $ : G ?? W),
        floatingRootContext: R,
        positionMethod: o,
        mounted: O,
        side: a,
        sideOffset: l,
        align: c,
        alignOffset: u,
        arrowPadding: g,
        collisionBoundary: h,
        collisionPadding: p,
        sticky: f,
        disableAnchorTracking: v,
        keepMounted: D,
        collisionAvoidance: b,
        lazyFlip: !0
    });
    C1i(N && P, F === "touch", H, $);
    const K = {
        open: N,
        side: Z.side,
        align: Z.align,
        anchorHidden: Z.anchorHidden,
        empty: X
    };
    gl(()=>{
        E.set("popupSide", Z.side);
    }, [
        E,
        Z.side
    ]);
    const J = su((ee)=>{
        E.set("positionerElement", ee);
    }), ne = e5t(t, K, {
        styles: Z.positionerStyles,
        transitionStatus: z,
        props: T,
        refs: [
            n,
            J
        ],
        hidden: !O,
        inert: !N
    });
    return mUf(M2i.Provider, {
        value: Z,
        children: [
            O && P && gUf(Jgt, {
                inert: $Sn(!N),
                cutout: G ?? W ?? $
            }),
            ne
        ]
    });
}), process.env.NODE_ENV !== "production" && (QPs.displayName = "ComboboxPositioner");

}
