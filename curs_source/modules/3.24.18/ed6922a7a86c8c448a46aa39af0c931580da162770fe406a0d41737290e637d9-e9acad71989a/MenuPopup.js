import { Svt } from "./MenuPositionerContext.js";
import { Xre } from "./MenuRootContext.js";
import { Jhs } from "./ToolbarRootContext.js";
import { r5t, tkn } from "./composite_2.js";
import { Ty } from "./createBaseUIEventDetails.js";
import { Yre, n6t } from "./f0s.js";
import { tft } from "./getDisabledMountTransitionStyles.js";
import { Ure, g2 } from "./popupStateMapping.js";
import { Qu, Zhs, _Sn, bSn, eft, hj, kp, u1i } from "./qIc.js";
import { BBt, g_ } from "./reason-parts.js";
import { $O, T5 } from "./stateAttributesMapping.js";
import { x } from "./tslib.es6.js";
import { d1i } from "./useHoverFloatingInteraction.js";
import { pj } from "./useOpenChangeComplete.js";
import { wp } from "./useRenderElement.js";
import * as i1s from "./react-runtime/react/esm-index-production.js";
import { jsx as laf } from "./react-runtime/react/esm-jsx-runtime-production.js";
var wFl, r1s;
export { r1s, wFl };
var __wakaru_uaf_initialized = false;
export function uaf() {
if (__wakaru_uaf_initialized) return;
__wakaru_uaf_initialized = true;
x(), Xre(), Svt(), wp(), g2(), $O(), pj(), Ty(), Jhs(), tkn(), tft(), d1i(), g_(), bSn(), wFl = {
    ...Ure,
    ...T5
}, r1s = i1s.forwardRef(function(t, n) {
    const { render: i, className: r, style: s, finalFocus: o, ...a } = t, { store: c } = Yre(), { side: l, align: u } = n6t(), h = Zhs(!0) != null, p = c.useState("open"), g = c.useState("transitionStatus"), f = c.useState("popupProps"), v = c.useState("mounted"), b = c.useState("instantType"), y = c.useState("activeTriggerElement"), T = c.useState("parent"), E = c.useState("lastOpenChangeReason"), A = c.useState("rootId"), R = c.useState("floatingRootContext"), D = c.useState("floatingTreeRoot"), P = c.useState("closeDelay"), N = c.useState("activeTriggerElement"), O = c.useState("hoverEnabled"), F = c.useState("disabled"), H = c.useState("openMethod"), $ = T.type === "context-menu";
    hj({
        open: p,
        ref: c.context.popupRef,
        onComplete () {
            p && c.context.onOpenChangeComplete?.(!0);
        }
    }), i1s.useEffect(()=>{
        function X(Y) {
            c.setOpen(!1, Qu(Y.reason, Y.domEvent));
        }
        return D.events.on("close", X), ()=>{
            D.events.off("close", X);
        };
    }, [
        D.events,
        c
    ]), u1i(R, {
        enabled: O && !F && !$ && T.type !== "menubar",
        closeDelay: P
    });
    const W = i1s.useCallback((X)=>{
        c.set("popupElement", X);
    }, [
        c
    ]), G = {
        transitionStatus: g,
        side: l,
        align: u,
        open: p,
        nested: T.type === "menu",
        instant: b
    }, q = kp("div", t, {
        state: G,
        ref: [
            n,
            c.context.popupRef,
            W
        ],
        stateAttributesMapping: wFl,
        props: [
            f,
            {
                onKeyDown (X) {
                    h && r5t.has(X.key) && X.stopPropagation();
                }
            },
            eft(g),
            a,
            {
                "data-rootownerid": A
            }
        ]
    });
    let z = T.type === void 0 || $;
    return (y || T.type === "menubar" && E !== BBt) && (z = !0), laf(_Sn, {
        context: R,
        openInteractionType: H,
        modal: $,
        disabled: !v,
        returnFocus: o === void 0 ? z : o,
        initialFocus: T.type !== "menu",
        restoreFocus: !0,
        externalTree: T.type !== "menubar" ? D : void 0,
        previousFocusableElement: N,
        nextFocusableElement: T.type === void 0 ? c.context.triggerFocusTargetRef : void 0,
        beforeContentFocusGuardRef: T.type === void 0 ? c.context.beforeContentFocusGuardRef : void 0,
        children: q
    });
}), process.env.NODE_ENV !== "production" && (r1s.displayName = "MenuPopup");

}
