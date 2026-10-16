import { noh } from "./FloatingDelayGroup.js";
import { $I, BPr, Kli, Lm, Nf, O8t, W8t, Y7y, Zli, a6, hJo, iQo, jli, lGy, sGy, uJo, uL, zd, zhh } from "./LYd.js";
import { Whh } from "./TooltipProviderContext.js";
import { Kci } from "./TooltipRootContext.js";
import { Ghh, oGy } from "./TooltipTriggerDataAttributes.js";
import { aGy, qhh } from "./constants_13.js";
import { VS } from "./createBaseUIEventDetails.js";
import { Sne } from "./event_3.js";
import { aT } from "./floating-ui.utils.dom.js";
import { Oy, zS } from "./formatErrorMessage.js";
import { I4, abn } from "./popupStateMapping.js";
import { FY } from "./popupStoreUtils.js";
import { E4, Zb } from "./reason-parts.js";
import { Qli } from "./safePolygon.js";
import { $D } from "./shadowDom.js";
import { E } from "./tslib.es6.js";
import { _A } from "./useBaseUiId.js";
import { dJo } from "./useFocus.js";
import { mJo } from "./useHoverInteractionSharedState.js";
import { Yli } from "./useHoverReferenceInteraction.js";
import { Om } from "./useRenderElement.js";
import { M7 } from "./useTimeout.js";
import { Fwe } from "./useValueAsRef.js";
import * as xna from "./react-runtime/react/esm-index-production.js";
var Ana, HPr;
export { Ana, HPr };
var __wakaru_Vhh_initialized = false;
export function Vhh() {
if (__wakaru_Vhh_initialized) return;
__wakaru_Vhh_initialized = true;
E(), zS(), aT(), O8t(), M7(), Fwe(), Kci(), I4(), Om(), _A(), Whh(), Sne(), VS(), oGy(), mJo(), aGy(), FY(), noh(), $D(), Yli(), Qli(), dJo(), Zb(), Ana = "data-base-ui-tooltip-trigger", HPr = iQo(function(e, n) {
    const { render: i, className: r, style: s, handle: o, payload: a, disabled: l, delay: c, closeOnClick: u = !0, closeDelay: d, id: h, ...p } = e, g = BPr(!0), f = o?.store ?? g;
    if (!f) throw new Error(process.env.NODE_ENV !== "production" ? "Base UI: <Tooltip.Trigger> must be either used within a <Tooltip.Root> component or provided with a handle." : Oy(82));
    const _ = $I(h), b = f.useState("isTriggerActive", _), y = f.useState("isOpenedByTrigger", _), S = f.useState("floatingRootContext"), k = xna.useRef(null), C = c ?? qhh, T = d ?? 0, { registerTrigger: I, isMountedByThisTrigger: A } = jli(_, k, f, {
        payload: a,
        closeOnClick: u,
        closeDelay: T
    }), P = sGy(), { delayRef: M, isInstantPhase: O, hasProvider: N } = Y7y(S, {
        open: y
    }), U = hJo(S);
    f.useSyncedValue("isInstantPhase", O);
    const j = f.useState("disabled"), $ = l ?? j, H = uL($), G = f.useState("trackCursorAxis"), q = f.useState("disableHoverablePopup"), K = xna.useRef(!1), V = a6(), Y = xna.useRef(void 0);
    function J() {
        const ae = P?.delay, de = typeof M.current == "object" ? M.current.open : void 0;
        let he = C;
        return N && (de !== 0 ? he = c ?? ae ?? C : he = 0), he;
    }
    function Q(ae) {
        const de = k.current;
        if (!de || !ae) return !1;
        const he = lGy(ae);
        return he !== null && he !== de && Nf(de, he);
    }
    function te(ae) {
        const de = Q(ae);
        return K.current = de, de && (U.openChangeTimeout.clear(), U.restTimeout.clear(), U.restTimeoutPending = !1, V.clear()), de;
    }
    const ee = Kli(S, {
        enabled: !$,
        mouseOnly: !0,
        move: !1,
        handleClose: !q && G !== "both" ? Zli() : null,
        restMs: J,
        delay () {
            const ae = typeof M.current == "object" ? M.current.close : void 0;
            let de = T;
            return d == null && N && (de = ae), {
                close: de
            };
        },
        triggerElementRef: k,
        isActiveTrigger: b,
        isClosing: ()=>f.select("transitionStatus") === "ending",
        shouldOpen () {
            return !K.current;
        }
    }), re = uJo(S, {
        enabled: !$
    }).reference, ie = (ae)=>{
        const de = K.current, he = zhh(ae), ge = te(he), pe = k.current, ve = pe && he && Nf(pe, he);
        if (ge && f.select("open") && f.select("lastOpenChangeReason") === E4) {
            f.setOpen(!1, zd(E4, ae));
            return;
        }
        if (de && !ge && ve && !H.current && !f.select("open") && pe && W8t(Y.current)) {
            const fe = ()=>{
                !K.current && !H.current && !f.select("open") && f.setOpen(!0, zd(E4, ae, pe));
            }, Te = J();
            Te === 0 ? (V.clear(), fe()) : V.start(Te, fe);
        }
    }, oe = f.useState("triggerProps", A);
    return Lm("button", e, {
        state: {
            open: y
        },
        ref: [
            n,
            I,
            k
        ],
        props: [
            ee,
            re,
            A || G !== "none" ? oe : void 0,
            {
                onMouseOver (ae) {
                    ie(ae.nativeEvent);
                },
                onFocus (ae) {
                    Q(zhh(ae.nativeEvent)) && ae.preventBaseUIHandler();
                },
                onMouseLeave () {
                    K.current = !1, V.clear(), Y.current = void 0;
                },
                onPointerEnter (ae) {
                    Y.current = ae.pointerType;
                },
                onPointerDown (ae) {
                    Y.current = ae.pointerType, f.set("closeOnClick", u), u && !f.select("open") && f.cancelPendingOpen(ae.nativeEvent);
                },
                onClick (ae) {
                    u && !f.select("open") && f.cancelPendingOpen(ae.nativeEvent);
                },
                id: _,
                [Ghh.triggerDisabled]: $ ? "" : void 0,
                [Ana]: $ ? void 0 : ""
            },
            p
        ],
        stateAttributesMapping: abn
    });
}), process.env.NODE_ENV !== "production" && (HPr.displayName = "TooltipTrigger");

}
