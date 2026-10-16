import { bVl } from "./PopoverPositionerContext.js";
import { ZXe } from "./PopoverRootContext.js";
import { Jhs } from "./ToolbarRootContext.js";
import { SVl } from "./closePart.js";
import { r5t, tkn } from "./composite_2.js";
import { FAf, MAf, OAf, XXe } from "./f0s.js";
import { D0 } from "./floating-ui.utils.dom.js";
import { tft } from "./getDisabledMountTransitionStyles.js";
import { Ure, g2 } from "./popupStateMapping.js";
import { Z5e, s$ } from "./popupStoreUtils.js";
import { Zhs, Zrl, _Sn, bSn, eft, hj, kp, pC, u1i } from "./qIc.js";
import { g_, m2 } from "./reason-parts.js";
import { $O, T5 } from "./stateAttributesMapping.js";
import { x } from "./tslib.es6.js";
import { d1i } from "./useHoverFloatingInteraction.js";
import { pj } from "./useOpenChangeComplete.js";
import { wp } from "./useRenderElement.js";
import * as kVl from "./react-runtime/react/esm-index-production.js";
import { jsx as wVl } from "./react-runtime/react/esm-jsx-runtime-production.js";
var CVl, qAs;
export { CVl, qAs };
var __wakaru_UAf_initialized = false;
export function UAf() {
if (__wakaru_UAf_initialized) return;
__wakaru_UAf_initialized = true;
x(), D0(), ZXe(), bVl(), g2(), $O(), pj(), wp(), tkn(), Jhs(), tft(), SVl(), d1i(), s$(), bSn(), g_(), CVl = {
    ...Ure,
    ...T5
}, qAs = kVl.forwardRef(function(t, n) {
    const { render: i, className: r, style: s, initialFocus: o, finalFocus: a, ...c } = t, { store: l } = XXe(), u = MAf(), h = Zhs(!0) != null, { context: p, hasClosePart: g } = OAf(), f = l.useState("open"), v = l.useState("openMethod"), b = l.useState("instantType"), y = l.useState("transitionStatus"), T = l.useState("popupProps"), E = l.useState("titleElementId"), A = l.useState("descriptionElementId"), R = l.useState("modal"), D = l.useState("mounted"), P = l.useState("openChangeReason"), N = l.useState("activeTriggerElement"), O = l.useState("floatingRootContext"), F = O.useState("floatingId"), H = l.useState("disabled"), $ = l.useState("openOnHover"), W = l.useState("closeDelay"), G = c.id ?? F;
    hj({
        open: f,
        ref: l.context.popupRef,
        onComplete () {
            f && l.context.onOpenChangeComplete?.(!0);
        }
    }), u1i(O, {
        enabled: $ && !H,
        closeDelay: W
    });
    const q = o === void 0 ? Zrl(l.context.popupRef) : o, z = R !== !1 && g;
    l.useSyncedValue("focusManagerModal", z);
    const X = kVl.useCallback((K)=>{
        l.set("popupElement", K);
    }, [
        l
    ]), Y = {
        open: f,
        side: u.side,
        align: u.align,
        instant: b,
        transitionStatus: y
    }, Z = kp("div", t, {
        state: Y,
        ref: [
            n,
            l.context.popupRef,
            X
        ],
        props: [
            T,
            {
                id: G,
                role: "dialog",
                ...Z5e,
                "aria-labelledby": E,
                "aria-describedby": A,
                onKeyDown (K) {
                    h && r5t.has(K.key) && K.stopPropagation();
                }
            },
            eft(y),
            c
        ],
        stateAttributesMapping: CVl
    });
    return wVl(_Sn, {
        context: O,
        openInteractionType: v,
        modal: z,
        disabled: !D || P === m2,
        initialFocus: q,
        returnFocus: a,
        restoreFocus: "popup",
        previousFocusableElement: pC(N) ? N : void 0,
        nextFocusableElement: l.context.triggerFocusTargetRef,
        beforeContentFocusGuardRef: l.context.beforeContentFocusGuardRef,
        children: wVl(FAf, {
            value: p,
            children: Z
        })
    });
}), process.env.NODE_ENV !== "production" && (qAs.displayName = "PopoverPopup");

}
