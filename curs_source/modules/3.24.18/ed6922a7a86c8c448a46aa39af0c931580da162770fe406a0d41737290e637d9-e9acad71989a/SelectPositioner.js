import { VSn } from "./CompositeList.js";
import { Jgt, KSn } from "./InternalBackdrop.js";
import { Vhs, k1i } from "./SelectPositionerContext.js";
import { VRe } from "./SelectRootContext.js";
import { M0i, Nre } from "./constants_10.js";
import { Ty } from "./createBaseUIEventDetails.js";
import { HSn } from "./inertValue.js";
import { Ygt } from "./itemEquality.js";
import { $Sn, C1i, GSn, Q5e, QBt, Qu, e5t, fYe, jc, msl, su, usl, w1i } from "./qIc.js";
import { g_, lN } from "./reason-parts.js";
import { J5e, f_ } from "./store_4.js";
import { x } from "./tslib.es6.js";
import { JBt } from "./useAnchorPositioning.js";
import { T1i } from "./useAnchoredPopupScrollLock.js";
import { af, gl } from "./useIsoLayoutEffect.js";
import { t5t } from "./usePositioner.js";
import { Cy } from "./useStableCallback.js";
import { kU } from "./useStore.js";
import { qhs } from "./utils_17.js";
import { jsx as Zsl } from "./react-runtime/react/esm-jsx-runtime-production.js";
import * as ift from "./react-runtime/react/esm-index-production.js";
import { jsxs as jPg } from "./react-runtime/react/esm-jsx-runtime-production.js";
var Qsl, Xhs;
export { Qsl, Xhs };
var __wakaru_qPg_initialized = false;
export function qPg() {
if (__wakaru_qPg_initialized) return;
__wakaru_qPg_initialized = true;
x(), HSn(), af(), Cy(), VRe(), VSn(), JBt(), Vhs(), KSn(), Nre(), qhs(), J5e(), Ty(), Ygt(), t5t(), T1i(), kU(), g_(), Qsl = {
    position: "fixed"
}, Xhs = ift.forwardRef(function(t, n) {
    const { anchor: i, positionMethod: r = "absolute", className: s, render: o, side: a = "bottom", align: c = "center", sideOffset: l = 0, alignOffset: u = 0, collisionBoundary: h = "clipping-ancestors", collisionPadding: p, arrowPadding: g = 5, sticky: f = !1, disableAnchorTracking: v, alignItemWithTrigger: b = !0, collisionAvoidance: y = M0i, style: T, ...E } = t, { store: A, listRef: R, labelsRef: D, alignItemWithTriggerActiveRef: P, selectedItemTextRef: N, valuesRef: O, initialValueRef: F, popupRef: H, setValue: $ } = Q5e(), W = usl(), G = jc(A, f_.open), q = jc(A, f_.mounted), z = jc(A, f_.modal), X = jc(A, f_.value), Y = jc(A, f_.openMethod), Z = jc(A, f_.positionerElement), K = jc(A, f_.triggerElement), J = jc(A, f_.isItemEqualToValue), ne = jc(A, f_.transitionStatus), ee = ift.useRef(null), se = ift.useRef(null), [re, ue] = ift.useState(b), ce = q && re && Y !== "touch";
    !q && re !== b && ue(b), gl(()=>{
        q || (f_.scrollUpArrowVisible(A.state) && A.set("scrollUpArrowVisible", !1), f_.scrollDownArrowVisible(A.state) && A.set("scrollDownArrowVisible", !1));
    }, [
        A,
        q
    ]), ift.useImperativeHandle(P, ()=>ce), C1i((ce || z) && G, Y === "touch", Z, K);
    const de = QBt({
        anchor: i,
        floatingRootContext: W,
        positionMethod: r,
        mounted: q,
        side: a,
        sideOffset: l,
        align: c,
        alignOffset: u,
        arrowPadding: g,
        collisionBoundary: h,
        collisionPadding: p,
        sticky: f,
        disableAnchorTracking: v ?? ce,
        collisionAvoidance: y,
        keepMounted: !0
    }), le = ce ? "none" : de.side, ye = ce ? Qsl : de.positionerStyles, _e = {
        open: G,
        side: le,
        align: de.align,
        anchorHidden: de.anchorHidden
    };
    gl(()=>{
        A.set("popupSide", de.side);
    }, [
        A,
        de.side
    ]);
    const me = su((je)=>{
        A.set("positionerElement", je);
    }), Ce = e5t(t, _e, {
        styles: ye,
        transitionStatus: ne,
        props: E,
        refs: [
            n,
            me
        ],
        hidden: !q,
        inert: !G
    }), xe = ift.useRef(0), Le = su((je)=>{
        if (je.size === 0 && xe.current === 0 || O.current.length === 0) return;
        const Ge = xe.current;
        if (xe.current = je.size, je.size === Ge) return;
        const Xe = Qu(lN);
        if (Ge !== 0 && !A.state.multiple && X !== null && fYe(O.current, X, J) === -1) {
            const et = F.current, it = et != null && fYe(O.current, et, J) !== -1 ? et : null;
            $(it, Xe), it === null && (A.set("selectedIndex", null), N.current = null);
        }
        if (Ge !== 0 && A.state.multiple && Array.isArray(X)) {
            const Ke = (We)=>fYe(O.current, We, J) !== -1, et = X.filter((We)=>Ke(We));
            (et.length !== X.length || et.some((We)=>!msl(X, We, J))) && ($(et, Xe), et.length === 0 && (A.set("selectedIndex", null), N.current = null));
        }
        if (G && ce) {
            A.update({
                scrollUpArrowVisible: !1,
                scrollDownArrowVisible: !1
            });
            const Ke = {
                height: ""
            };
            w1i(Z, Ke), w1i(H.current, Ke);
        }
    }), Be = ift.useMemo(()=>({
            ...de,
            side: le,
            alignItemWithTriggerActive: ce,
            setControlledAlignItemWithTrigger: ue,
            scrollUpArrowRef: ee,
            scrollDownArrowRef: se
        }), [
        de,
        le,
        ce,
        ue
    ]);
    return Zsl(GSn, {
        elementsRef: R,
        labelsRef: D,
        onMapChange: Le,
        children: jPg(k1i.Provider, {
            value: Be,
            children: [
                q && z && Zsl(Jgt, {
                    inert: $Sn(!G),
                    cutout: K
                }),
                Ce
            ]
        })
    });
}), process.env.NODE_ENV !== "production" && (Xhs.displayName = "SelectPositioner");

}
