import { $I, Fah, Kli, Lm, X8t, Zli, iWe, tQo, zvn } from "./LYd.js";
import { WUt } from "./MenuPositionerContext.js";
import { F_e } from "./MenuRootContext.js";
import { ima } from "./MenuSubmenuRootContext.js";
import { pE, vA } from "./empty.js";
import { Oy, zS } from "./formatErrorMessage.js";
import { COr, O_e, b6h, gSn } from "./ipa.js";
import { nQo } from "./isElementDisabled.js";
import { I4, abn } from "./popupStateMapping.js";
import { FY } from "./popupStoreUtils.js";
import { Qli } from "./safePolygon.js";
import { BHe, Qvn } from "./safeReact.js";
import { E } from "./tslib.es6.js";
import { _A } from "./useBaseUiId.js";
import { Z8t } from "./useClick.js";
import { rWe } from "./useCompositeListItem.js";
import { Yli } from "./useHoverReferenceInteraction.js";
import { jv, su } from "./useIsoLayoutEffect.js";
import { EOr } from "./useMenuItem.js";
import { Om } from "./useRenderElement.js";
import { Vvn } from "./warn.js";
import * as tpi from "./react-runtime/react/esm-index-production.js";
var ama;
export { ama };
var __wakaru_mSS_initialized = false;
export function mSS() {
if (__wakaru_mSS_initialized) return;
__wakaru_mSS_initialized = true;
E(), zS(), nQo(), jv(), Vvn(), Qvn(), vA(), F_e(), _A(), I4(), rWe(), EOr(), Om(), WUt(), ima(), FY(), Yli(), Qli(), Z8t(), ama = tpi.forwardRef(function(e, n) {
    const { render: i, className: r, style: s, label: o, id: a, nativeButton: l = !1, openOnHover: c = !0, delay: u = 100, closeDelay: d = 0, disabled: h = !1, ...p } = e, g = iWe({
        label: o
    }), f = gSn(), { store: _ } = O_e(), b = $I(a), y = _.useState("open"), S = _.useState("floatingRootContext"), k = _.useState("floatingTreeRoot"), C = _.useState("triggerPopupId", b), T = Fah(b, _), I = tpi.useCallback((ie)=>{
        const oe = T(ie);
        return ie !== null && _.select("open") && _.select("activeTriggerId") == null && _.update({
            activeTriggerId: b,
            activeTriggerElement: ie,
            closeDelay: d
        }), oe;
    }, [
        T,
        d,
        _,
        b
    ]), A = tpi.useRef(null), P = tpi.useCallback((ie)=>{
        A.current = ie, _.set("activeTriggerElement", ie);
    }, [
        _
    ]), M = b6h();
    if (!M?.parentMenu) throw new Error(process.env.NODE_ENV !== "production" ? "Base UI: <Menu.SubmenuTrigger> must be placed in <Menu.SubmenuRoot>." : Oy(37));
    _.useSyncedValue("closeDelay", d);
    const O = M.parentMenu, N = _.useState("disabled"), U = O.useState("disabled"), j = h || N || U;
    process.env.NODE_ENV !== "production" && su(()=>{
        const ie = A.current;
        if (ie && tQo(ie) && !j) {
            const oe = BHe.captureOwnerStack?.() || "";
            zvn(`A disabled element was detected on <Menu.SubmenuTrigger>. To properly disable the trigger, use the \`disabled\` prop on the component instead of setting it on the rendered element.${oe}`);
        }
    });
    const $ = O.useState("itemProps"), H = O.useState("isActive", g.index), G = tpi.useMemo(()=>({
            type: "submenu-trigger",
            setActive () {
                O.select("highlightItemOnHover") && O.set("activeIndex", g.index);
            }
        }), [
        O,
        g.index
    ]), { getItemProps: q, itemRef: K } = COr({
        closeOnClick: !1,
        disabled: j,
        highlighted: H,
        id: b,
        store: _,
        typingRef: O.context.typingRef,
        nativeButton: l,
        itemMetadata: G,
        nodeId: f?.context.nodeId
    }), V = _.useState("hoverEnabled"), Y = Kli(S, {
        enabled: V && c && !j,
        handleClose: Zli({
            blockPointerEvents: !0
        }),
        mouseOnly: !0,
        move: !0,
        restMs: u,
        delay: {
            open: u,
            close: d
        },
        shouldOpen: u > 0 ? ()=>O.select("allowMouseEnter") : void 0,
        triggerElementRef: A,
        externalTree: k,
        isClosing: ()=>_.select("transitionStatus") === "ending"
    }), Q = X8t(S, {
        enabled: !j,
        event: "mousedown",
        toggle: !c,
        ignoreMouse: c,
        stickIfOpen: !1
    }).reference ?? pE, te = _.useState("triggerProps", !0);
    return delete te.id, Lm("div", e, {
        state: {
            disabled: j,
            highlighted: H,
            open: y
        },
        stateAttributesMapping: abn,
        props: [
            Q,
            Y,
            te,
            $,
            {
                "aria-controls": C,
                tabIndex: y || H ? 0 : -1,
                onBlur () {
                    H && O.set("activeIndex", null);
                }
            },
            p,
            q
        ],
        ref: [
            n,
            g.ref,
            K,
            I,
            P
        ]
    });
}), process.env.NODE_ENV !== "production" && (ama.displayName = "MenuSubmenuTrigger");

}
