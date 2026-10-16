import { Dli, GQ, Lm, Mli, Oah, VJo, a2r, c7t, mE } from "./LYd.js";
import { jZh } from "./PopoverPositionerContext.js";
import { Okt } from "./PopoverRootContext.js";
import { YJo } from "./ToolbarRootContext.js";
import { HZh } from "./closePart.js";
import { $St, g7t } from "./composite_2.js";
import { aT } from "./floating-ui.utils.dom.js";
import { u7t } from "./getDisabledMountTransitionStyles.js";
import { Lkt, Z6S, n4S, t4S } from "./ipa.js";
import { I4, T_e } from "./popupStateMapping.js";
import { FY, Znt } from "./popupStoreUtils.js";
import { E4, Zb } from "./reason-parts.js";
import { D7, l6 } from "./stateAttributesMapping.js";
import { E } from "./tslib.es6.js";
import { l2r } from "./useHoverFloatingInteraction.js";
import { qQ } from "./useOpenChangeComplete.js";
import { Om } from "./useRenderElement.js";
import { jsx as GZh } from "./react-runtime/react/esm-jsx-runtime-production.js";
import * as WZh from "./react-runtime/react/esm-index-production.js";
var qZh, $Sa;
export { $Sa, qZh };
var __wakaru_r4S_initialized = false;
export function r4S() {
if (__wakaru_r4S_initialized) return;
__wakaru_r4S_initialized = true;
E(), aT(), Okt(), jZh(), I4(), l6(), qQ(), Om(), g7t(), YJo(), u7t(), HZh(), l2r(), FY(), Dli(), Zb(), qZh = {
    ...T_e,
    ...D7
}, $Sa = WZh.forwardRef(function(e, n) {
    const { render: i, className: r, style: s, initialFocus: o, finalFocus: a, ...l } = e, { store: c } = Lkt(), u = Z6S(), d = VJo(!0) != null, { context: h, hasClosePart: p } = t4S(), g = c.useState("open"), f = c.useState("openMethod"), _ = c.useState("instantType"), b = c.useState("transitionStatus"), y = c.useState("popupProps"), S = c.useState("titleElementId"), k = c.useState("descriptionElementId"), C = c.useState("modal"), T = c.useState("mounted"), I = c.useState("openChangeReason"), A = c.useState("activeTriggerElement"), P = c.useState("floatingRootContext"), M = P.useState("floatingId"), O = c.useState("disabled"), N = c.useState("openOnHover"), U = c.useState("closeDelay"), j = l.id ?? M;
    GQ({
        open: g,
        ref: c.context.popupRef,
        onComplete () {
            g && c.context.onOpenChangeComplete?.(!0);
        }
    }), a2r(P, {
        enabled: N && !O,
        closeDelay: U
    });
    const $ = o === void 0 ? Oah(c.context.popupRef) : o, H = C !== !1 && p;
    c.useSyncedValue("focusManagerModal", H);
    const G = WZh.useCallback((V)=>{
        c.set("popupElement", V);
    }, [
        c
    ]), q = {
        open: g,
        side: u.side,
        align: u.align,
        instant: _,
        transitionStatus: b
    }, K = Lm("div", e, {
        state: q,
        ref: [
            n,
            c.context.popupRef,
            G
        ],
        props: [
            y,
            {
                id: j,
                role: "dialog",
                ...Znt,
                "aria-labelledby": S,
                "aria-describedby": k,
                onKeyDown (V) {
                    d && $St.has(V.key) && V.stopPropagation();
                }
            },
            c7t(b),
            l
        ],
        stateAttributesMapping: qZh
    });
    return GZh(Mli, {
        context: P,
        openInteractionType: f,
        modal: H,
        disabled: !T || I === E4,
        initialFocus: $,
        returnFocus: a,
        restoreFocus: "popup",
        previousFocusableElement: mE(A) ? A : void 0,
        nextFocusableElement: c.context.triggerFocusTargetRef,
        beforeContentFocusGuardRef: c.context.beforeContentFocusGuardRef,
        children: GZh(n4S, {
            value: h,
            children: K
        })
    });
}), process.env.NODE_ENV !== "production" && ($Sa.displayName = "PopoverPopup");

}
