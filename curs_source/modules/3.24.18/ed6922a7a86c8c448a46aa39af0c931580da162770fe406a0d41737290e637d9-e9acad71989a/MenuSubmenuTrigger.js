import { Svt } from "./MenuPositionerContext.js";
import { Xre } from "./MenuRootContext.js";
import { d1s } from "./MenuSubmenuRootContext.js";
import { LE, R0 } from "./empty.js";
import { WFl, Yre, n6t, nDi } from "./f0s.js";
import { Eb, p_ } from "./formatErrorMessage.js";
import { rds } from "./isElementDisabled.js";
import { ZBt, g2 } from "./popupStateMapping.js";
import { s$ } from "./popupStoreUtils.js";
import { Bgt, PSn, Qrl, RSn, SR, ids, kp, qbn, vYe } from "./qIc.js";
import { LSn } from "./safePolygon.js";
import { RRe, q3t } from "./safeReact.js";
import { x } from "./tslib.es6.js";
import { TD } from "./useBaseUiId.js";
import { Ugt } from "./useClick.js";
import { _Ye } from "./useCompositeListItem.js";
import { DSn } from "./useHoverReferenceInteraction.js";
import { af, gl } from "./useIsoLayoutEffect.js";
import { rDi } from "./useMenuItem.js";
import { wp } from "./useRenderElement.js";
import { zbn } from "./warn.js";
import * as L0n from "./react-runtime/react/esm-index-production.js";
var g1s;
export { g1s };
var __wakaru_Daf_initialized = false;
export function Daf() {
if (__wakaru_Daf_initialized) return;
__wakaru_Daf_initialized = true;
x(), Eb(), rds(), af(), zbn(), q3t(), LE(), Xre(), TD(), g2(), _Ye(), rDi(), wp(), Svt(), d1s(), s$(), DSn(), LSn(), Ugt(), g1s = L0n.forwardRef(function(t, n) {
    const { render: i, className: r, style: s, label: o, id: a, nativeButton: c = !1, openOnHover: l = !0, delay: u = 100, closeDelay: h = 0, disabled: p = !1, ...g } = t, f = vYe({
        label: o
    }), v = n6t(), { store: b } = Yre(), y = SR(a), T = b.useState("open"), E = b.useState("floatingRootContext"), A = b.useState("floatingTreeRoot"), R = b.useState("triggerPopupId", y), D = Qrl(y, b), P = L0n.useCallback((ce)=>{
        const de = D(ce);
        return ce !== null && b.select("open") && b.select("activeTriggerId") == null && b.update({
            activeTriggerId: y,
            activeTriggerElement: ce,
            closeDelay: h
        }), de;
    }, [
        D,
        h,
        b,
        y
    ]), N = L0n.useRef(null), O = L0n.useCallback((ce)=>{
        N.current = ce, b.set("activeTriggerElement", ce);
    }, [
        b
    ]), F = WFl();
    if (!F?.parentMenu) throw new Error(process.env.NODE_ENV !== "production" ? "Base UI: <Menu.SubmenuTrigger> must be placed in <Menu.SubmenuRoot>." : p_(37));
    b.useSyncedValue("closeDelay", h);
    const H = F.parentMenu, $ = b.useState("disabled"), W = H.useState("disabled"), G = p || $ || W;
    process.env.NODE_ENV !== "production" && gl(()=>{
        const ce = N.current;
        if (ce && ids(ce) && !G) {
            const de = RRe.captureOwnerStack?.() || "";
            qbn(`A disabled element was detected on <Menu.SubmenuTrigger>. To properly disable the trigger, use the \`disabled\` prop on the component instead of setting it on the rendered element.${de}`);
        }
    });
    const q = H.useState("itemProps"), z = H.useState("isActive", f.index), X = L0n.useMemo(()=>({
            type: "submenu-trigger",
            setActive () {
                H.select("highlightItemOnHover") && H.set("activeIndex", f.index);
            }
        }), [
        H,
        f.index
    ]), { getItemProps: Y, itemRef: Z } = nDi({
        closeOnClick: !1,
        disabled: G,
        highlighted: z,
        id: y,
        store: b,
        typingRef: H.context.typingRef,
        nativeButton: c,
        itemMetadata: X,
        nodeId: v?.context.nodeId
    }), K = b.useState("hoverEnabled"), J = RSn(E, {
        enabled: K && l && !G,
        handleClose: PSn({
            blockPointerEvents: !0
        }),
        mouseOnly: !0,
        move: !0,
        restMs: u,
        delay: {
            open: u,
            close: h
        },
        shouldOpen: u > 0 ? ()=>H.select("allowMouseEnter") : void 0,
        triggerElementRef: N,
        externalTree: A,
        isClosing: ()=>b.select("transitionStatus") === "ending"
    }), ee = Bgt(E, {
        enabled: !G,
        event: "mousedown",
        toggle: !l,
        ignoreMouse: l,
        stickIfOpen: !1
    }).reference ?? R0, se = b.useState("triggerProps", !0);
    return delete se.id, kp("div", t, {
        state: {
            disabled: G,
            highlighted: z,
            open: T
        },
        stateAttributesMapping: ZBt,
        props: [
            ee,
            J,
            se,
            q,
            {
                "aria-controls": R,
                tabIndex: T || z ? 0 : -1,
                onBlur () {
                    z && H.set("activeIndex", null);
                }
            },
            g,
            Y
        ],
        ref: [
            n,
            f.ref,
            Z,
            P,
            O
        ]
    });
}), process.env.NODE_ENV !== "production" && (g1s.displayName = "MenuSubmenuTrigger");

}
