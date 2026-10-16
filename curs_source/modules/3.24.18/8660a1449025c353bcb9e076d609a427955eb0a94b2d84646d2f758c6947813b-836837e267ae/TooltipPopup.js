import { BPr, GQ, Lm, a2r, c7t, dGy } from "./LYd.js";
import { Jhh } from "./TooltipPositionerContext.js";
import { Kci } from "./TooltipRootContext.js";
import { u7t } from "./getDisabledMountTransitionStyles.js";
import { I4, T_e } from "./popupStateMapping.js";
import { D7, l6 } from "./stateAttributesMapping.js";
import { E } from "./tslib.es6.js";
import { l2r } from "./useHoverFloatingInteraction.js";
import { qQ } from "./useOpenChangeComplete.js";
import { Om } from "./useRenderElement.js";
import * as pGy from "./react-runtime/react/esm-index-production.js";
var nph, VPr;
export { VPr, nph };
var __wakaru_iph_initialized = false;
export function iph() {
if (__wakaru_iph_initialized) return;
__wakaru_iph_initialized = true;
E(), Kci(), Jhh(), I4(), l6(), qQ(), Om(), u7t(), l2r(), nph = {
    ...T_e,
    ...D7
}, VPr = pGy.forwardRef(function(e, n) {
    const { render: i, className: r, style: s, ...o } = e, a = BPr(), { side: l, align: c } = dGy(), u = a.useState("open"), d = a.useState("instantType"), h = a.useState("transitionStatus"), p = a.useState("popupProps"), g = a.useState("floatingRootContext"), f = a.useState("disabled"), _ = a.useState("closeDelay");
    GQ({
        open: u,
        ref: a.context.popupRef,
        onComplete () {
            u && a.context.onOpenChangeComplete?.(!0);
        }
    }), a2r(g, {
        enabled: !f,
        closeDelay: _
    });
    const b = a.useStateSetter("popupElement");
    return Lm("div", e, {
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
            b
        ],
        props: [
            p,
            c7t(h),
            o
        ],
        stateAttributesMapping: nph
    });
}), process.env.NODE_ENV !== "production" && (VPr.displayName = "TooltipPopup");

}
