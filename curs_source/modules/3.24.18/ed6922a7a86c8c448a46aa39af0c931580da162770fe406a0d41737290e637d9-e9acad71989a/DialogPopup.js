import { Fcu, _Jf } from "./DialogPopupCssVars.js";
import { Bcu, bJf } from "./DialogPopupDataAttributes.js";
import { BOs } from "./DialogPortalContext.js";
import { iMe } from "./DialogRootContext.js";
import { r5t, tkn } from "./composite_2.js";
import { $cu, M6e } from "./f0s.js";
import { Ure, g2 } from "./popupStateMapping.js";
import { Z5e, s$ } from "./popupStoreUtils.js";
import { Zrl, _Sn, bSn, hj, kp } from "./qIc.js";
import { $O, T5 } from "./stateAttributesMapping.js";
import { x } from "./tslib.es6.js";
import { pj } from "./useOpenChangeComplete.js";
import { wp } from "./useRenderElement.js";
import { jsx as SJf } from "./react-runtime/react/esm-jsx-runtime-production.js";
import * as yJf from "./react-runtime/react/esm-index-production.js";
var Hcu, UOs;
export { Hcu, UOs };
var __wakaru_kJf_initialized = false;
export function kJf() {
if (__wakaru_kJf_initialized) return;
__wakaru_kJf_initialized = true;
x(), iMe(), wp(), g2(), $O(), _Jf(), bJf(), BOs(), pj(), tkn(), s$(), bSn(), Hcu = {
    ...Ure,
    ...T5,
    nestedDialogOpen (e) {
        return e ? {
            [Bcu.nestedDialogOpen]: ""
        } : null;
    }
}, UOs = yJf.forwardRef(function(t, n) {
    const { render: i, className: r, style: s, finalFocus: o, initialFocus: a, ...c } = t, { store: l } = M6e(), u = l.useState("descriptionElementId"), h = l.useState("disablePointerDismissal"), p = l.useState("floatingRootContext"), g = l.useState("popupProps"), f = l.useState("modal"), v = l.useState("mounted"), b = l.useState("nested"), y = l.useState("nestedOpenDialogCount"), T = l.useState("open"), E = l.useState("openMethod"), A = l.useState("titleElementId"), R = l.useState("transitionStatus"), D = l.useState("role"), P = p.useState("floatingId"), N = c.id ?? P;
    $cu(), hj({
        open: T,
        ref: l.context.popupRef,
        onComplete () {
            T && l.context.onOpenChangeComplete?.(!0);
        }
    });
    const O = a === void 0 ? Zrl(l.context.popupRef) : a, F = y > 0, H = l.useStateSetter("popupElement"), W = kp("div", t, {
        state: {
            open: T,
            nested: b,
            transitionStatus: R,
            nestedDialogOpen: F
        },
        props: [
            g,
            {
                id: N,
                "aria-labelledby": A ?? void 0,
                "aria-describedby": u ?? void 0,
                role: D,
                ...Z5e,
                hidden: !v,
                onKeyDown (G) {
                    r5t.has(G.key) && G.stopPropagation();
                },
                style: {
                    [Fcu.nestedDialogs]: y
                }
            },
            c
        ],
        ref: [
            n,
            l.context.popupRef,
            H
        ],
        stateAttributesMapping: Hcu
    });
    return SJf(_Sn, {
        context: p,
        openInteractionType: E,
        disabled: !v,
        closeOnFocusOut: !h,
        initialFocus: O,
        returnFocus: o,
        modal: f !== !1,
        restoreFocus: "popup",
        children: W
    });
}), process.env.NODE_ENV !== "production" && (UOs.displayName = "DialogPopup");

}
