import { GQ, Gci, Lm, a2r, c7t, pu, wWy } from "./LYd.js";
import { qci } from "./PreviewCardContext.js";
import { Shh } from "./PreviewCardPositionerContext.js";
import { u7t } from "./getDisabledMountTransitionStyles.js";
import { I4, T_e } from "./popupStateMapping.js";
import { D7, l6 } from "./stateAttributesMapping.js";
import { E } from "./tslib.es6.js";
import { l2r } from "./useHoverFloatingInteraction.js";
import { qQ } from "./useOpenChangeComplete.js";
import { Om } from "./useRenderElement.js";
import { Jy } from "./useStableCallback.js";
import * as TWy from "./react-runtime/react/esm-index-production.js";
var Chh, PPr;
export { Chh, PPr };
var __wakaru_Thh_initialized = false;
export function Thh() {
if (__wakaru_Thh_initialized) return;
__wakaru_Thh_initialized = true;
E(), Jy(), qci(), Shh(), I4(), l6(), qQ(), Om(), u7t(), l2r(), Chh = {
    ...T_e,
    ...D7
}, PPr = TWy.forwardRef(function(e, n) {
    const { className: i, render: r, style: s, ...o } = e, a = Gci(), { side: l, align: c } = wWy(), u = a.useState("open"), d = a.useState("instantType"), h = a.useState("transitionStatus"), p = a.useState("popupProps"), g = a.useState("floatingRootContext");
    GQ({
        open: u,
        ref: a.context.popupRef,
        onComplete () {
            u && a.context.onOpenChangeComplete?.(!0);
        }
    });
    const f = pu(()=>a.context.closeDelayRef.current);
    return a2r(g, {
        closeDelay: f
    }), Lm("div", e, {
        state: {
            open: u,
            side: l,
            align: c,
            instant: d,
            transitionStatus: h
        },
        ref: [
            n,
            a.context.popupRef,
            a.useStateSetter("popupElement")
        ],
        props: [
            p,
            c7t(h),
            o
        ],
        stateAttributesMapping: Chh
    });
}), process.env.NODE_ENV !== "production" && (PPr.displayName = "PreviewCardPopup");

}
