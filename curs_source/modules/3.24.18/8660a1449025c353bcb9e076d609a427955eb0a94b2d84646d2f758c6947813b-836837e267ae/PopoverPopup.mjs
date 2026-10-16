import { AOl, BA, BPf, Lgw, Mgw, Ogw, RBe, Rmw, Xhw, _Ke, amw, z2f } from "./BA.js";
import { c1s } from "./PopoverPositionerContext.mjs";
import { PBe } from "./PopoverRootContext.mjs";
import { Dgw } from "./ToolbarRootContext.mjs";
import { hU } from "./Ycg.js";
import { tMf } from "./closePart.mjs";
import { JPf, Pgw } from "./composite_2.mjs";
import { t8 } from "./floating-ui.utils.dom.mjs";
import { UPf } from "./getDisabledMountTransitionStyles.mjs";
import { b3n } from "./index_4.mjs";
import { y3n } from "./index_5.mjs";
import { E3i, T3i } from "./popupStateMapping.mjs";
import { _Ol } from "./popupStoreUtils.mjs";
import { rce } from "./reasons.mjs";
import { GSs, vOl } from "./stateAttributesMapping.mjs";
import { E } from "./tslib.es6.js";
import { V2f } from "./useOpenChangeComplete.mjs";
import { bKe } from "./useRenderElement.mjs";
import { jsx as iMf } from "./react-runtime/react/esm-jsx-runtime-production.js";
import * as nMf from "./react-runtime/react/esm-index-production.js";
var rMf, BOl;
export { BOl, rMf };
var __wakaru_Bgw_initialized = false;
export function Bgw() {
if (__wakaru_Bgw_initialized) return;
__wakaru_Bgw_initialized = true;
"use client";
E(), t8(), y3n(), PBe(), c1s(), E3i(), GSs(), V2f(), bKe(), rce(), Pgw(), Dgw(), UPf(), tMf(), b3n(), rMf = {
    ...T3i,
    ...vOl
}, BOl = nMf.forwardRef(function(e, n) {
    const { render: i, className: r, style: s, initialFocus: o, finalFocus: a, ...l } = e, { store: c } = RBe(), u = AOl(), d = Mgw(!0) != null, { context: h, hasClosePart: p } = Lgw(), g = c.useState("open"), f = c.useState("openMethod"), _ = c.useState("instantType"), b = c.useState("transitionStatus"), y = c.useState("popupProps"), S = c.useState("titleElementId"), k = c.useState("descriptionElementId"), C = c.useState("modal"), T = c.useState("mounted"), I = c.useState("openChangeReason"), A = c.useState("activeTriggerElement"), P = c.useState("floatingRootContext"), M = P.useState("floatingId"), O = c.useState("disabled"), N = c.useState("openOnHover"), U = c.useState("closeDelay"), j = l.id ?? M;
    z2f({
        open: g,
        ref: c.context.popupRef,
        onComplete () {
            g && c.context.onOpenChangeComplete?.(!0);
        }
    }), Rmw(P, {
        enabled: N && !O,
        closeDelay: U
    });
    const $ = o === void 0 ? amw(c.context.popupRef) : o, H = C !== !1 && p;
    c.useSyncedValue("focusManagerModal", H);
    const G = nMf.useCallback((V)=>{
        c.set("popupElement", V);
    }, [
        c
    ]), q = {
        open: g,
        side: u.side,
        align: u.align,
        instant: _,
        transitionStatus: b
    }, K = _Ke("div", e, {
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
                ..._Ol,
                "aria-labelledby": S,
                "aria-describedby": k,
                onKeyDown (V) {
                    d && JPf.has(V.key) && V.stopPropagation();
                }
            },
            BPf(b),
            l
        ],
        stateAttributesMapping: rMf
    });
    return iMf(Xhw, {
        context: P,
        openInteractionType: f,
        modal: H,
        disabled: !T || I === BA.triggerHover,
        initialFocus: $,
        returnFocus: a,
        restoreFocus: "popup",
        previousFocusableElement: hU(A) ? A : void 0,
        nextFocusableElement: c.context.triggerFocusTargetRef,
        beforeContentFocusGuardRef: c.context.beforeContentFocusGuardRef,
        children: iMf(Ogw, {
            value: h,
            children: K
        })
    });
}), process.env.NODE_ENV !== "production" && (BOl.displayName = "PopoverPopup");

}
