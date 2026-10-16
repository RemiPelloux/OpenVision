import { Pwp, y_1 } from "./DialogPopupCssVars.js";
import { Mwp, S_1 } from "./DialogPopupDataAttributes.js";
import { MRa } from "./DialogPortalContext.js";
import { FGe } from "./DialogRootContext.js";
import { Dli, GQ, Lm, Mli, Oah } from "./LYd.js";
import { $St, g7t } from "./composite_2.js";
import { Nwp, rst } from "./ipa.js";
import { I4, T_e } from "./popupStateMapping.js";
import { FY, Znt } from "./popupStoreUtils.js";
import { D7, l6 } from "./stateAttributesMapping.js";
import { E } from "./tslib.es6.js";
import { qQ } from "./useOpenChangeComplete.js";
import { Om } from "./useRenderElement.js";
import * as k_1 from "./react-runtime/react/esm-index-production.js";
import { jsx as w_1 } from "./react-runtime/react/esm-jsx-runtime-production.js";
var Lwp, DRa;
export { DRa, Lwp };
var __wakaru_C_1_initialized = false;
export function C_1() {
if (__wakaru_C_1_initialized) return;
__wakaru_C_1_initialized = true;
E(), FGe(), Om(), I4(), l6(), y_1(), S_1(), MRa(), qQ(), g7t(), FY(), Dli(), Lwp = {
    ...T_e,
    ...D7,
    nestedDialogOpen (t) {
        return t ? {
            [Mwp.nestedDialogOpen]: ""
        } : null;
    }
}, DRa = k_1.forwardRef(function(e, n) {
    const { render: i, className: r, style: s, finalFocus: o, initialFocus: a, ...l } = e, { store: c } = rst(), u = c.useState("descriptionElementId"), d = c.useState("disablePointerDismissal"), h = c.useState("floatingRootContext"), p = c.useState("popupProps"), g = c.useState("modal"), f = c.useState("mounted"), _ = c.useState("nested"), b = c.useState("nestedOpenDialogCount"), y = c.useState("open"), S = c.useState("openMethod"), k = c.useState("titleElementId"), C = c.useState("transitionStatus"), T = c.useState("role"), I = h.useState("floatingId"), A = l.id ?? I;
    Nwp(), GQ({
        open: y,
        ref: c.context.popupRef,
        onComplete () {
            y && c.context.onOpenChangeComplete?.(!0);
        }
    });
    const P = a === void 0 ? Oah(c.context.popupRef) : a, M = b > 0, O = c.useStateSetter("popupElement"), U = Lm("div", e, {
        state: {
            open: y,
            nested: _,
            transitionStatus: C,
            nestedDialogOpen: M
        },
        props: [
            p,
            {
                id: A,
                "aria-labelledby": k ?? void 0,
                "aria-describedby": u ?? void 0,
                role: T,
                ...Znt,
                hidden: !f,
                onKeyDown (j) {
                    $St.has(j.key) && j.stopPropagation();
                },
                style: {
                    [Pwp.nestedDialogs]: b
                }
            },
            l
        ],
        ref: [
            n,
            c.context.popupRef,
            O
        ],
        stateAttributesMapping: Lwp
    });
    return w_1(Mli, {
        context: h,
        openInteractionType: S,
        disabled: !f,
        closeOnFocusOut: !d,
        initialFocus: P,
        returnFocus: o,
        modal: g !== !1,
        restoreFocus: "popup",
        children: U
    });
}), process.env.NODE_ENV !== "production" && (DRa.displayName = "DialogPopup");

}
