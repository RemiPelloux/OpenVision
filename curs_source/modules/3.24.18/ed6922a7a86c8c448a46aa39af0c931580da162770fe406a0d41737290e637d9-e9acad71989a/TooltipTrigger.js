import { vil } from "./FloatingDelayGroup.js";
import { Rul } from "./TooltipProviderContext.js";
import { Lkn } from "./TooltipRootContext.js";
import { Dul, cOg } from "./TooltipTriggerDataAttributes.js";
import { Mul, lOg } from "./constants_13.js";
import { Ty } from "./createBaseUIEventDetails.js";
import { lj } from "./event_3.js";
import { D0 } from "./floating-ui.utils.dom.js";
import { Eb, p_ } from "./formatErrorMessage.js";
import { ZBt, g2 } from "./popupStateMapping.js";
import { s$ } from "./popupStoreUtils.js";
import { Dgt, KP, PSn, PTi, Pul, Qu, RSn, SR, Tgt, aN, aOg, cg, hhs, jDg, kSn, kp, sds, uOg, uhs } from "./qIc.js";
import { g_, m2 } from "./reason-parts.js";
import { LSn } from "./safePolygon.js";
import { cN } from "./shadowDom.js";
import { x } from "./tslib.es6.js";
import { TD } from "./useBaseUiId.js";
import { dhs } from "./useFocus.js";
import { mhs } from "./useHoverInteractionSharedState.js";
import { DSn } from "./useHoverReferenceInteraction.js";
import { wp } from "./useRenderElement.js";
import { A3 } from "./useTimeout.js";
import { oCe } from "./useValueAsRef.js";
import * as ggs from "./react-runtime/react/esm-index-production.js";
var fgs, vgs;
export { fgs, vgs };
var __wakaru_dOg_initialized = false;
export function dOg() {
if (__wakaru_dOg_initialized) return;
__wakaru_dOg_initialized = true;
x(), Eb(), D0(), Tgt(), A3(), oCe(), Lkn(), g2(), wp(), TD(), Rul(), lj(), Ty(), cOg(), mhs(), lOg(), s$(), vil(), cN(), DSn(), LSn(), dhs(), g_(), fgs = "data-base-ui-tooltip-trigger", vgs = sds(function(t, n) {
    const { render: i, className: r, style: s, handle: o, payload: a, disabled: c, delay: l, closeOnClick: u = !0, closeDelay: h, id: p, ...g } = t, f = PTi(!0), v = o?.store ?? f;
    if (!v) throw new Error(process.env.NODE_ENV !== "production" ? "Base UI: <Tooltip.Trigger> must be either used within a <Tooltip.Root> component or provided with a handle." : p_(82));
    const b = SR(p), y = v.useState("isTriggerActive", b), T = v.useState("isOpenedByTrigger", b), E = v.useState("floatingRootContext"), A = ggs.useRef(null), R = l ?? Mul, D = h ?? 0, { registerTrigger: P, isMountedByThisTrigger: N } = kSn(b, A, v, {
        payload: a,
        closeOnClick: u,
        closeDelay: D
    }), O = aOg(), { delayRef: F, isInstantPhase: H, hasProvider: $ } = jDg(E, {
        open: T
    }), W = hhs(E);
    v.useSyncedValue("isInstantPhase", H);
    const G = v.useState("disabled"), q = c ?? G, z = KP(q), X = v.useState("trackCursorAxis"), Y = v.useState("disableHoverablePopup"), Z = ggs.useRef(!1), K = aN(), J = ggs.useRef(void 0);
    function ne() {
        const me = O?.delay, Ce = typeof F.current == "object" ? F.current.open : void 0;
        let xe = R;
        return $ && (Ce !== 0 ? xe = l ?? me ?? R : xe = 0), xe;
    }
    function ee(me) {
        const Ce = A.current;
        if (!Ce || !me) return !1;
        const xe = uOg(me);
        return xe !== null && xe !== Ce && cg(Ce, xe);
    }
    function se(me) {
        const Ce = ee(me);
        return Z.current = Ce, Ce && (W.openChangeTimeout.clear(), W.restTimeout.clear(), W.restTimeoutPending = !1, K.clear()), Ce;
    }
    const re = RSn(E, {
        enabled: !q,
        mouseOnly: !0,
        move: !1,
        handleClose: !Y && X !== "both" ? PSn() : null,
        restMs: ne,
        delay () {
            const me = typeof F.current == "object" ? F.current.close : void 0;
            let Ce = D;
            return h == null && $ && (Ce = me), {
                close: Ce
            };
        },
        triggerElementRef: A,
        isActiveTrigger: y,
        isClosing: ()=>v.select("transitionStatus") === "ending",
        shouldOpen () {
            return !Z.current;
        }
    }), ue = uhs(E, {
        enabled: !q
    }).reference, ce = (me)=>{
        const Ce = Z.current, xe = Pul(me), Le = se(xe), Be = A.current, je = Be && xe && cg(Be, xe);
        if (Le && v.select("open") && v.select("lastOpenChangeReason") === m2) {
            v.setOpen(!1, Qu(m2, me));
            return;
        }
        if (Ce && !Le && je && !z.current && !v.select("open") && Be && Dgt(J.current)) {
            const Ge = ()=>{
                !Z.current && !z.current && !v.select("open") && v.setOpen(!0, Qu(m2, me, Be));
            }, Xe = ne();
            Xe === 0 ? (K.clear(), Ge()) : K.start(Xe, Ge);
        }
    }, de = v.useState("triggerProps", N);
    return kp("button", t, {
        state: {
            open: T
        },
        ref: [
            n,
            P,
            A
        ],
        props: [
            re,
            ue,
            N || X !== "none" ? de : void 0,
            {
                onMouseOver (me) {
                    ce(me.nativeEvent);
                },
                onFocus (me) {
                    ee(Pul(me.nativeEvent)) && me.preventBaseUIHandler();
                },
                onMouseLeave () {
                    Z.current = !1, K.clear(), J.current = void 0;
                },
                onPointerEnter (me) {
                    J.current = me.pointerType;
                },
                onPointerDown (me) {
                    J.current = me.pointerType, v.set("closeOnClick", u), u && !v.select("open") && v.cancelPendingOpen(me.nativeEvent);
                },
                onClick (me) {
                    u && !v.select("open") && v.cancelPendingOpen(me.nativeEvent);
                },
                id: b,
                [Dul.triggerDisabled]: q ? "" : void 0,
                [fgs]: q ? void 0 : ""
            },
            g
        ],
        stateAttributesMapping: ZBt
    });
}), process.env.NODE_ENV !== "production" && (vgs.displayName = "TooltipTrigger");

}
