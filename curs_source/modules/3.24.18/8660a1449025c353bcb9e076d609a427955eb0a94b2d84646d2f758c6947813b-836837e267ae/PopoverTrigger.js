import { YHe, vRr } from "./FocusGuard.js";
import { $I, AJo, Kli, Lm, X8t, Zli, jli, wz } from "./LYd.js";
import { Okt } from "./PopoverRootContext.js";
import { MRr, k_e } from "./constants_10.js";
import { LZh, q6S } from "./constants_15.js";
import { Oy, zS } from "./formatErrorMessage.js";
import { C6h, Lkt } from "./ipa.js";
import { I4, a7t, abn } from "./popupStateMapping.js";
import { FY } from "./popupStoreUtils.js";
import { PRe, Zb } from "./reason-parts.js";
import { Qli } from "./safePolygon.js";
import { E } from "./tslib.es6.js";
import { _A } from "./useBaseUiId.js";
import { Cz } from "./useButton.js";
import { Z8t } from "./useClick.js";
import { Yli } from "./useHoverReferenceInteraction.js";
import { nci } from "./useOpenInteractionType.js";
import { Om } from "./useRenderElement.js";
import { T6h } from "./useTriggerFocusGuards.js";
import { jsx as A4r } from "./react-runtime/react/esm-jsx-runtime-production.js";
import * as Jmi from "./react-runtime/react/esm-index-production.js";
import { jsxs as z6S } from "./react-runtime/react/esm-jsx-runtime-production.js";
var FSa;
export { FSa };
var __wakaru_V6S_initialized = false;
export function V6S() {
if (__wakaru_V6S_initialized) return;
__wakaru_V6S_initialized = true;
E(), zS(), Okt(), Cz(), I4(), Om(), k_e(), q6S(), _A(), vRr(), T6h(), nci(), FY(), Yli(), Qli(), Zb(), Z8t(), FSa = Jmi.forwardRef(function(e, n) {
    const { render: i, className: r, style: s, disabled: o = !1, nativeButton: a = !0, handle: l, payload: c, openOnHover: u = !1, delay: d = LZh, closeDelay: h = 0, id: p, ...g } = e, f = Lkt(!0), _ = l?.store ?? f?.store;
    if (!_) throw new Error(process.env.NODE_ENV !== "production" ? "Base UI: <Popover.Trigger> must be either used within a <Popover.Root> component or provided with a handle." : Oy(74));
    const b = $I(p), y = _.useState("isTriggerActive", b), S = _.useState("floatingRootContext"), k = _.useState("isOpenedByTrigger", b), C = _.useState("triggerPopupId", b), T = Jmi.useRef(null), { registerTrigger: I, isMountedByThisTrigger: A } = jli(b, T, _, {
        payload: c,
        disabled: o,
        openOnHover: u,
        closeDelay: h
    }), P = _.useState("openChangeReason"), M = _.useState("stickIfOpen"), O = _.useState("openMethod"), N = _.useState("focusManagerModal"), U = Kli(S, {
        enabled: !o && S != null && u && (O !== "touch" || P !== PRe),
        mouseOnly: !0,
        move: !1,
        handleClose: Zli(),
        restMs: d,
        delay: {
            close: h
        },
        triggerElementRef: T,
        isActiveTrigger: y,
        isClosing: ()=>_.select("transitionStatus") === "ending"
    }), j = X8t(S, {
        enabled: S != null,
        stickIfOpen: M
    }), $ = AJo(()=>_.select("open"), (ee)=>{
        _.set("openMethod", ee);
    }), H = _.useState("triggerProps", A), { getButtonProps: G, buttonRef: q } = wz({
        disabled: o,
        native: a
    }), K = {
        open (ee) {
            return ee && P === PRe ? a7t.open(ee) : abn.open(ee);
        }
    }, { preFocusGuardRef: V, handlePreFocusGuardFocus: Y, handleFocusTargetFocus: J } = C6h(_, T), te = Lm("button", e, {
        state: {
            disabled: o,
            open: k
        },
        ref: [
            q,
            n,
            I,
            T
        ],
        props: [
            j.reference,
            U,
            H,
            $,
            {
                [MRr]: "",
                id: b,
                "aria-haspopup": "dialog",
                "aria-expanded": k,
                "aria-controls": C
            },
            g,
            G
        ],
        stateAttributesMapping: K
    });
    return A && !N ? z6S(Jmi.Fragment, {
        children: [
            A4r(YHe, {
                ref: V,
                onFocus: Y
            }),
            A4r(Jmi.Fragment, {
                children: te
            }, b),
            A4r(YHe, {
                ref: _.context.triggerFocusTargetRef,
                onFocus: J
            })
        ]
    }) : A4r(Jmi.Fragment, {
        children: te
    }, b);
}), process.env.NODE_ENV !== "production" && (FSa.displayName = "PopoverTrigger");

}
