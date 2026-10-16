import { Dli, GQ, Lm, Mli, VJo, a2r, c7t, zd } from "./LYd.js";
import { WUt } from "./MenuPositionerContext.js";
import { F_e } from "./MenuRootContext.js";
import { YJo } from "./ToolbarRootContext.js";
import { $St, g7t } from "./composite_2.js";
import { VS } from "./createBaseUIEventDetails.js";
import { u7t } from "./getDisabledMountTransitionStyles.js";
import { O_e, gSn } from "./ipa.js";
import { I4, T_e } from "./popupStateMapping.js";
import { Z_n, Zb } from "./reason-parts.js";
import { D7, l6 } from "./stateAttributesMapping.js";
import { E } from "./tslib.es6.js";
import { l2r } from "./useHoverFloatingInteraction.js";
import { qQ } from "./useOpenChangeComplete.js";
import { Om } from "./useRenderElement.js";
import * as Ypa from "./react-runtime/react/esm-index-production.js";
import { jsx as zyS } from "./react-runtime/react/esm-jsx-runtime-production.js";
var e6h, Xpa;
export { Xpa, e6h };
var __wakaru_VyS_initialized = false;
export function VyS() {
if (__wakaru_VyS_initialized) return;
__wakaru_VyS_initialized = true;
E(), F_e(), WUt(), Om(), I4(), l6(), qQ(), VS(), YJo(), g7t(), u7t(), l2r(), Zb(), Dli(), e6h = {
    ...T_e,
    ...D7
}, Xpa = Ypa.forwardRef(function(e, n) {
    const { render: i, className: r, style: s, finalFocus: o, ...a } = e, { store: l } = O_e(), { side: c, align: u } = gSn(), d = VJo(!0) != null, h = l.useState("open"), p = l.useState("transitionStatus"), g = l.useState("popupProps"), f = l.useState("mounted"), _ = l.useState("instantType"), b = l.useState("activeTriggerElement"), y = l.useState("parent"), S = l.useState("lastOpenChangeReason"), k = l.useState("rootId"), C = l.useState("floatingRootContext"), T = l.useState("floatingTreeRoot"), I = l.useState("closeDelay"), A = l.useState("activeTriggerElement"), P = l.useState("hoverEnabled"), M = l.useState("disabled"), O = l.useState("openMethod"), N = y.type === "context-menu";
    GQ({
        open: h,
        ref: l.context.popupRef,
        onComplete () {
            h && l.context.onOpenChangeComplete?.(!0);
        }
    }), Ypa.useEffect(()=>{
        function G(q) {
            l.setOpen(!1, zd(q.reason, q.domEvent));
        }
        return T.events.on("close", G), ()=>{
            T.events.off("close", G);
        };
    }, [
        T.events,
        l
    ]), a2r(C, {
        enabled: P && !M && !N && y.type !== "menubar",
        closeDelay: I
    });
    const U = Ypa.useCallback((G)=>{
        l.set("popupElement", G);
    }, [
        l
    ]), j = {
        transitionStatus: p,
        side: c,
        align: u,
        open: h,
        nested: y.type === "menu",
        instant: _
    }, $ = Lm("div", e, {
        state: j,
        ref: [
            n,
            l.context.popupRef,
            U
        ],
        stateAttributesMapping: e6h,
        props: [
            g,
            {
                onKeyDown (G) {
                    d && $St.has(G.key) && G.stopPropagation();
                }
            },
            c7t(p),
            a,
            {
                "data-rootownerid": k
            }
        ]
    });
    let H = y.type === void 0 || N;
    return (b || y.type === "menubar" && S !== Z_n) && (H = !0), zyS(Mli, {
        context: C,
        openInteractionType: O,
        modal: N,
        disabled: !f,
        returnFocus: o === void 0 ? H : o,
        initialFocus: y.type !== "menu",
        restoreFocus: !0,
        externalTree: y.type !== "menubar" ? T : void 0,
        previousFocusableElement: A,
        nextFocusableElement: y.type === void 0 ? l.context.triggerFocusTargetRef : void 0,
        beforeContentFocusGuardRef: y.type === void 0 ? l.context.beforeContentFocusGuardRef : void 0,
        children: $
    });
}), process.env.NODE_ENV !== "production" && (Xpa.displayName = "MenuPopup");

}
