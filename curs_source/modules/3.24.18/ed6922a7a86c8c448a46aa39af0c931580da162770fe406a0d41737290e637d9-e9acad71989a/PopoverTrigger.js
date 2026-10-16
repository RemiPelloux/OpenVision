import { URe, f0i } from "./FocusGuard.js";
import { ZXe } from "./PopoverRootContext.js";
import { D0i, Nre } from "./constants_10.js";
import { EAf, mVl } from "./constants_15.js";
import { XXe, zFl } from "./f0s.js";
import { Eb, p_ } from "./formatErrorMessage.js";
import { Qgt, ZBt, g2 } from "./popupStateMapping.js";
import { s$ } from "./popupStoreUtils.js";
import { Bgt, PSn, RSn, Rhs, SR, e$, kSn, kp } from "./qIc.js";
import { Dfe, g_ } from "./reason-parts.js";
import { LSn } from "./safePolygon.js";
import { x } from "./tslib.es6.js";
import { TD } from "./useBaseUiId.js";
import { t$ } from "./useButton.js";
import { Ugt } from "./useClick.js";
import { DSn } from "./useHoverReferenceInteraction.js";
import { FSn } from "./useOpenInteractionType.js";
import { wp } from "./useRenderElement.js";
import { KFl } from "./useTriggerFocusGuards.js";
import * as lTn from "./react-runtime/react/esm-index-production.js";
import { jsxs as xAf } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { jsx as yLi } from "./react-runtime/react/esm-jsx-runtime-production.js";
var WAs;
export { WAs };
var __wakaru_IAf_initialized = false;
export function IAf() {
if (__wakaru_IAf_initialized) return;
__wakaru_IAf_initialized = true;
x(), Eb(), ZXe(), t$(), g2(), wp(), Nre(), EAf(), TD(), f0i(), KFl(), FSn(), s$(), DSn(), LSn(), g_(), Ugt(), WAs = lTn.forwardRef(function(t, n) {
    const { render: i, className: r, style: s, disabled: o = !1, nativeButton: a = !0, handle: c, payload: l, openOnHover: u = !1, delay: h = mVl, closeDelay: p = 0, id: g, ...f } = t, v = XXe(!0), b = c?.store ?? v?.store;
    if (!b) throw new Error(process.env.NODE_ENV !== "production" ? "Base UI: <Popover.Trigger> must be either used within a <Popover.Root> component or provided with a handle." : p_(74));
    const y = SR(g), T = b.useState("isTriggerActive", y), E = b.useState("floatingRootContext"), A = b.useState("isOpenedByTrigger", y), R = b.useState("triggerPopupId", y), D = lTn.useRef(null), { registerTrigger: P, isMountedByThisTrigger: N } = kSn(y, D, b, {
        payload: l,
        disabled: o,
        openOnHover: u,
        closeDelay: p
    }), O = b.useState("openChangeReason"), F = b.useState("stickIfOpen"), H = b.useState("openMethod"), $ = b.useState("focusManagerModal"), W = RSn(E, {
        enabled: !o && E != null && u && (H !== "touch" || O !== Dfe),
        mouseOnly: !0,
        move: !1,
        handleClose: PSn(),
        restMs: h,
        delay: {
            close: p
        },
        triggerElementRef: D,
        isActiveTrigger: T,
        isClosing: ()=>b.select("transitionStatus") === "ending"
    }), G = Bgt(E, {
        enabled: E != null,
        stickIfOpen: F
    }), q = Rhs(()=>b.select("open"), (re)=>{
        b.set("openMethod", re);
    }), z = b.useState("triggerProps", N), { getButtonProps: X, buttonRef: Y } = e$({
        disabled: o,
        native: a
    }), Z = {
        open (re) {
            return re && O === Dfe ? Qgt.open(re) : ZBt.open(re);
        }
    }, { preFocusGuardRef: K, handlePreFocusGuardFocus: J, handleFocusTargetFocus: ne } = zFl(b, D), se = kp("button", t, {
        state: {
            disabled: o,
            open: A
        },
        ref: [
            Y,
            n,
            P,
            D
        ],
        props: [
            G.reference,
            W,
            z,
            q,
            {
                [D0i]: "",
                id: y,
                "aria-haspopup": "dialog",
                "aria-expanded": A,
                "aria-controls": R
            },
            f,
            X
        ],
        stateAttributesMapping: Z
    });
    return N && !$ ? xAf(lTn.Fragment, {
        children: [
            yLi(URe, {
                ref: K,
                onFocus: J
            }),
            yLi(lTn.Fragment, {
                children: se
            }, y),
            yLi(URe, {
                ref: b.context.triggerFocusTargetRef,
                onFocus: ne
            })
        ]
    }) : yLi(lTn.Fragment, {
        children: se
    }, y);
}), process.env.NODE_ENV !== "production" && (WAs.displayName = "PopoverTrigger");

}
