import { Bul } from "./TooltipPositionerContext.js";
import { Lkn } from "./TooltipRootContext.js";
import { tft } from "./getDisabledMountTransitionStyles.js";
import { Ure, g2 } from "./popupStateMapping.js";
import { PTi, eft, gOg, hj, kp, u1i } from "./qIc.js";
import { $O, T5 } from "./stateAttributesMapping.js";
import { x } from "./tslib.es6.js";
import { d1i } from "./useHoverFloatingInteraction.js";
import { pj } from "./useOpenChangeComplete.js";
import { wp } from "./useRenderElement.js";
import * as _Og from "./react-runtime/react/esm-index-production.js";
var $ul, ygs;
export { $ul, ygs };
var __wakaru_bOg_initialized = false;
export function bOg() {
if (__wakaru_bOg_initialized) return;
__wakaru_bOg_initialized = true;
x(), Lkn(), Bul(), g2(), $O(), pj(), wp(), tft(), d1i(), $ul = {
    ...Ure,
    ...T5
}, ygs = _Og.forwardRef(function(t, n) {
    const { render: i, className: r, style: s, ...o } = t, a = PTi(), { side: c, align: l } = gOg(), u = a.useState("open"), h = a.useState("instantType"), p = a.useState("transitionStatus"), g = a.useState("popupProps"), f = a.useState("floatingRootContext"), v = a.useState("disabled"), b = a.useState("closeDelay");
    hj({
        open: u,
        ref: a.context.popupRef,
        onComplete () {
            u && a.context.onOpenChangeComplete?.(!0);
        }
    }), u1i(f, {
        enabled: !v,
        closeDelay: b
    });
    const y = a.useStateSetter("popupElement");
    return kp("div", t, {
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
            y
        ],
        props: [
            g,
            eft(p),
            o
        ],
        stateAttributesMapping: $ul
    });
}), process.env.NODE_ENV !== "production" && (ygs.displayName = "TooltipPopup");

}
