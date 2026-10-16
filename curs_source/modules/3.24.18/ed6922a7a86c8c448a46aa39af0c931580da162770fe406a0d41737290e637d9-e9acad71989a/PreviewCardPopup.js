import { Rkn } from "./PreviewCardContext.js";
import { rul } from "./PreviewCardPositionerContext.js";
import { tft } from "./getDisabledMountTransitionStyles.js";
import { Ure, g2 } from "./popupStateMapping.js";
import { Akn, eft, hj, kp, su, u1i, w2g } from "./qIc.js";
import { $O, T5 } from "./stateAttributesMapping.js";
import { x } from "./tslib.es6.js";
import { d1i } from "./useHoverFloatingInteraction.js";
import { pj } from "./useOpenChangeComplete.js";
import { wp } from "./useRenderElement.js";
import { Cy } from "./useStableCallback.js";
import * as T2g from "./react-runtime/react/esm-index-production.js";
var aul, ITi;
export { ITi, aul };
var __wakaru_cul_initialized = false;
export function cul() {
if (__wakaru_cul_initialized) return;
__wakaru_cul_initialized = true;
x(), Cy(), Rkn(), rul(), g2(), $O(), pj(), wp(), tft(), d1i(), aul = {
    ...Ure,
    ...T5
}, ITi = T2g.forwardRef(function(t, n) {
    const { className: i, render: r, style: s, ...o } = t, a = Akn(), { side: c, align: l } = w2g(), u = a.useState("open"), h = a.useState("instantType"), p = a.useState("transitionStatus"), g = a.useState("popupProps"), f = a.useState("floatingRootContext");
    hj({
        open: u,
        ref: a.context.popupRef,
        onComplete () {
            u && a.context.onOpenChangeComplete?.(!0);
        }
    });
    const v = su(()=>a.context.closeDelayRef.current);
    return u1i(f, {
        closeDelay: v
    }), kp("div", t, {
        state: {
            open: u,
            side: c,
            align: l,
            instant: h,
            transitionStatus: p
        },
        ref: [
            n,
            a.context.popupRef,
            a.useStateSetter("popupElement")
        ],
        props: [
            g,
            eft(p),
            o
        ],
        stateAttributesMapping: aul
    });
}), process.env.NODE_ENV !== "production" && (ITi.displayName = "PreviewCardPopup");

}
