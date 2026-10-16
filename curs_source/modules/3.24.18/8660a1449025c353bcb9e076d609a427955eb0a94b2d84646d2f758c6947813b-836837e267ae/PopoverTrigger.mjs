import { BA, COl, Dmw, Jmw, Omw, Qhw, RBe, _Ke, cPf, pmw, rgw } from "./BA.js";
import { CLl, qxt } from "./FocusGuard.mjs";
import { PBe } from "./PopoverRootContext.mjs";
import { ZLl, g3n } from "./constants_2.mjs";
import { Zmw, _Pf } from "./constants_3.mjs";
import { fKe, vKe } from "./formatErrorMessage.mjs";
import { b3n } from "./index_4.mjs";
import { y3n } from "./index_5.mjs";
import { E3i, fPf, vPf } from "./popupStateMapping.mjs";
import { rce } from "./reasons.mjs";
import { E } from "./tslib.es6.js";
import { TOl } from "./useBaseUiId.mjs";
import { uPf } from "./useButton.mjs";
import { sgw } from "./useOpenInteractionType.mjs";
import { bKe } from "./useRenderElement.mjs";
import { egw } from "./useTriggerFocusGuards.mjs";
import * as I3i from "./react-runtime/react/esm-index-production.js";
import { jsx as o1s } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { jsxs as ogw } from "./react-runtime/react/esm-jsx-runtime-production.js";
var IOl;
export { IOl };
var __wakaru_agw_initialized = false;
export function agw() {
if (__wakaru_agw_initialized) return;
__wakaru_agw_initialized = true;
"use client";
E(), vKe(), PBe(), uPf(), E3i(), bKe(), g3n(), y3n(), Zmw(), TOl(), CLl(), rce(), b3n(), egw(), sgw(), IOl = I3i.forwardRef(function(e, n) {
    const { render: i, className: r, style: s, disabled: o = !1, nativeButton: a = !0, handle: l, payload: c, openOnHover: u = !1, delay: d = _Pf, closeDelay: h = 0, id: p, ...g } = e, f = RBe(!0), _ = l?.store ?? f?.store;
    if (!_) throw new Error(process.env.NODE_ENV !== "production" ? "Base UI: <Popover.Trigger> must be either used within a <Popover.Root> component or provided with a handle." : fKe(74));
    const b = COl(p), y = _.useState("isTriggerActive", b), S = _.useState("floatingRootContext"), k = _.useState("isOpenedByTrigger", b), C = _.useState("triggerPopupId", b), T = I3i.useRef(null), { registerTrigger: I, isMountedByThisTrigger: A } = pmw(b, T, _, {
        payload: c,
        disabled: o,
        openOnHover: u,
        closeDelay: h
    }), P = _.useState("openChangeReason"), M = _.useState("stickIfOpen"), O = _.useState("openMethod"), N = _.useState("focusManagerModal"), U = Dmw(S, {
        enabled: !o && S != null && u && (O !== "touch" || P !== BA.triggerPress),
        mouseOnly: !0,
        move: !1,
        handleClose: Omw(),
        restMs: d,
        delay: {
            close: h
        },
        triggerElementRef: T,
        isActiveTrigger: y,
        isClosing: ()=>_.select("transitionStatus") === "ending"
    }), j = Qhw(S, {
        enabled: S != null,
        stickIfOpen: M
    }), $ = rgw(()=>_.select("open"), (ee)=>{
        _.set("openMethod", ee);
    }), H = _.useState("triggerProps", A), { getButtonProps: G, buttonRef: q } = cPf({
        disabled: o,
        native: a
    }), K = {
        open (ee) {
            return ee && P === BA.triggerPress ? vPf.open(ee) : fPf.open(ee);
        }
    }, { preFocusGuardRef: V, handlePreFocusGuardFocus: Y, handleFocusTargetFocus: J } = Jmw(_, T), te = _Ke("button", e, {
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
                [ZLl]: "",
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
    return A && !N ? ogw(I3i.Fragment, {
        children: [
            o1s(qxt, {
                ref: V,
                onFocus: Y
            }),
            o1s(I3i.Fragment, {
                children: te
            }, b),
            o1s(qxt, {
                ref: _.context.triggerFocusTargetRef,
                onFocus: J
            })
        ]
    }) : o1s(I3i.Fragment, {
        children: te
    }, b);
}), process.env.NODE_ENV !== "production" && (IOl.displayName = "PopoverTrigger");

}
