import { Rkn } from "./PreviewCardContext.js";
import { Hll, Wll, egs } from "./constants_12.js";
import { Eb, p_ } from "./formatErrorMessage.js";
import { shs } from "./inlineRect.js";
import { ZBt, g2 } from "./popupStateMapping.js";
import { s$ } from "./popupStoreUtils.js";
import { Akn, GMg, PSn, RSn, SR, Tgt, kSn, kp, sds, uhs } from "./qIc.js";
import { LSn } from "./safePolygon.js";
import { x } from "./tslib.es6.js";
import { TD } from "./useBaseUiId.js";
import { dhs } from "./useFocus.js";
import { DSn } from "./useHoverReferenceInteraction.js";
import { af, gl } from "./useIsoLayoutEffect.js";
import { wp } from "./useRenderElement.js";
import * as k2g from "./react-runtime/react/esm-index-production.js";
var TTi;
export { TTi };
var __wakaru_nul_initialized = false;
export function nul() {
if (__wakaru_nul_initialized) return;
__wakaru_nul_initialized = true;
x(), Eb(), Tgt(), af(), Rkn(), g2(), wp(), TD(), Wll(), s$(), DSn(), LSn(), dhs(), shs(), TTi = sds(function(t, n) {
    const { render: i, className: r, delay: s, closeDelay: o, id: a, payload: c, handle: l, style: u, ...h } = t, p = Akn(!0), g = l?.store ?? p;
    if (!g) throw new Error(process.env.NODE_ENV !== "production" ? "Base UI: <PreviewCard.Trigger> must be either used within a <PreviewCard.Root> component or provided with a handle." : p_(89));
    const f = SR(a), v = g.useState("isTriggerActive", f), b = g.useState("isOpenedByTrigger", f), y = g.useState("floatingRootContext"), T = g.context.inlineRectCoordsRef, E = k2g.useRef(null), A = s ?? Hll, R = o ?? egs, { registerTrigger: D, isMountedByThisTrigger: P } = kSn(f, E, g, {
        payload: c
    });
    gl(()=>{
        P && (g.context.closeDelayRef.current = R);
    }, [
        g,
        P,
        R
    ]);
    const N = RSn(y, {
        mouseOnly: !0,
        move: !1,
        handleClose: PSn(),
        delay: ()=>({
                open: A,
                close: R
            }),
        triggerElementRef: E,
        isActiveTrigger: v,
        isClosing: ()=>g.select("transitionStatus") === "ending"
    }), O = uhs(y, {
        delay: A
    }), F = {
        open: b
    }, H = g.useState("triggerProps", P), $ = GMg(T, b);
    return kp("a", t, {
        state: F,
        ref: [
            n,
            D,
            E
        ],
        props: [
            N,
            O.reference,
            H,
            $,
            {
                id: f
            },
            h
        ],
        stateAttributesMapping: ZBt
    });
}), process.env.NODE_ENV !== "production" && (TTi.displayName = "PreviewCardTrigger");

}
