import { $I, Gci, Kli, Lm, O8t, VUy, Zli, iQo, jli, uJo } from "./LYd.js";
import { qci } from "./PreviewCardContext.js";
import { dna, rhh, shh } from "./constants_12.js";
import { Oy, zS } from "./formatErrorMessage.js";
import { sJo } from "./inlineRect.js";
import { I4, abn } from "./popupStateMapping.js";
import { FY } from "./popupStoreUtils.js";
import { Qli } from "./safePolygon.js";
import { E } from "./tslib.es6.js";
import { _A } from "./useBaseUiId.js";
import { dJo } from "./useFocus.js";
import { Yli } from "./useHoverReferenceInteraction.js";
import { jv, su } from "./useIsoLayoutEffect.js";
import { Om } from "./useRenderElement.js";
import * as kWy from "./react-runtime/react/esm-index-production.js";
var xPr;
export { xPr };
var __wakaru_bhh_initialized = false;
export function bhh() {
if (__wakaru_bhh_initialized) return;
__wakaru_bhh_initialized = true;
E(), zS(), O8t(), jv(), qci(), I4(), Om(), _A(), shh(), FY(), Yli(), Qli(), dJo(), sJo(), xPr = iQo(function(e, n) {
    const { render: i, className: r, delay: s, closeDelay: o, id: a, payload: l, handle: c, style: u, ...d } = e, h = Gci(!0), p = c?.store ?? h;
    if (!p) throw new Error(process.env.NODE_ENV !== "production" ? "Base UI: <PreviewCard.Trigger> must be either used within a <PreviewCard.Root> component or provided with a handle." : Oy(89));
    const g = $I(a), f = p.useState("isTriggerActive", g), _ = p.useState("isOpenedByTrigger", g), b = p.useState("floatingRootContext"), y = p.context.inlineRectCoordsRef, S = kWy.useRef(null), k = s ?? rhh, C = o ?? dna, { registerTrigger: T, isMountedByThisTrigger: I } = jli(g, S, p, {
        payload: l
    });
    su(()=>{
        I && (p.context.closeDelayRef.current = C);
    }, [
        p,
        I,
        C
    ]);
    const A = Kli(b, {
        mouseOnly: !0,
        move: !1,
        handleClose: Zli(),
        delay: ()=>({
                open: k,
                close: C
            }),
        triggerElementRef: S,
        isActiveTrigger: f,
        isClosing: ()=>p.select("transitionStatus") === "ending"
    }), P = uJo(b, {
        delay: k
    }), M = {
        open: _
    }, O = p.useState("triggerProps", I), N = VUy(y, _);
    return Lm("a", e, {
        state: M,
        ref: [
            n,
            T,
            S
        ],
        props: [
            A,
            P.reference,
            O,
            N,
            {
                id: g
            },
            d
        ],
        stateAttributesMapping: abn
    });
}), process.env.NODE_ENV !== "production" && (xPr.displayName = "PreviewCardTrigger");

}
