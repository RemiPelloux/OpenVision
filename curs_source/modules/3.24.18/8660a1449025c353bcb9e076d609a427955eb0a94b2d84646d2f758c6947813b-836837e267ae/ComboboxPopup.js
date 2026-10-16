import { Y8r, ycp } from "./ComboboxInternalDismissButton.js";
import { K8r } from "./ComboboxPositionerContext.js";
import { Y_e } from "./ComboboxRootContext.js";
import { B5, Dli, GQ, Ic, Lm, Mli, Nf, c7t } from "./LYd.js";
import { u7t } from "./getDisabledMountTransitionStyles.js";
import { q8r } from "./index_176.js";
import { JCa, U8r, bGe, ucp, x0e } from "./ipa.js";
import { I4, T_e } from "./popupStateMapping.js";
import { $D } from "./shadowDom.js";
import { D7, l6 } from "./stateAttributesMapping.js";
import { gm, yGe } from "./store_5.js";
import { E } from "./tslib.es6.js";
import { jv, su } from "./useIsoLayoutEffect.js";
import { qQ } from "./useOpenChangeComplete.js";
import { Om } from "./useRenderElement.js";
import { TW } from "./useStore.js";
import { jsx as $cp } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { jsxs as NZS } from "./react-runtime/react/esm-jsx-runtime-production.js";
import * as jcp from "./react-runtime/react/esm-index-production.js";
var Hcp, Xfi;
export { Hcp, Xfi };
var __wakaru_sTa_initialized = false;
export function sTa() {
if (__wakaru_sTa_initialized) return;
__wakaru_sTa_initialized = true;
E(), jv(), Om(), Y_e(), yGe(), I4(), K8r(), qQ(), l6(), u7t(), ycp(), q8r(), TW(), $D(), Dli(), Hcp = {
    ...T_e,
    ...D7
}, Xfi = jcp.forwardRef(function(e, n) {
    const { render: i, className: r, style: s, initialFocus: o, finalFocus: a, ...l } = e, c = x0e(), u = JCa(), d = U8r(), { filteredItems: h } = bGe(), p = Ic(c, gm.mounted), g = Ic(c, gm.open), f = Ic(c, gm.openMethod), _ = Ic(c, gm.transitionStatus), b = Ic(c, gm.inputInsidePopup), y = Ic(c, gm.inputElement), S = Ic(c, gm.modal), k = Ic(c, gm.id), C = h.length === 0, T = l.id ?? (b ? ucp(k) : void 0);
    su(()=>(c.set("popupId", c.state.popupRef.current?.id || T), ()=>{
            c.set("popupId", void 0);
        }), [
        c,
        T
    ]), GQ({
        open: g,
        ref: c.state.popupRef,
        onComplete () {
            g && c.state.onOpenChangeComplete(!0);
        }
    });
    const I = {
        open: g,
        side: u.side,
        align: u.align,
        anchorHidden: u.anchorHidden,
        transitionStatus: _,
        empty: C
    }, A = Lm("div", e, {
        state: I,
        ref: [
            n,
            c.state.popupRef
        ],
        props: [
            {
                id: T,
                role: b ? "dialog" : "presentation",
                tabIndex: -1,
                onFocus (U) {
                    const j = B5(U.nativeEvent);
                    f !== "touch" && (Nf(c.state.listElement, j) || j === U.currentTarget) && c.state.inputRef.current?.focus();
                }
            },
            c7t(_),
            l
        ],
        stateAttributesMapping: Hcp
    }), M = o === void 0 ? b ? (U)=>U === "touch" ? c.state.popupRef.current : y : !1 : o;
    let O;
    a != null ? O = a : O = b ? void 0 : !1;
    const N = !b || S;
    return $cp(Mli, {
        context: d,
        disabled: !p,
        modal: N,
        openInteractionType: f,
        initialFocus: M,
        returnFocus: O,
        getInsideElements: ()=>[
                c.state.startDismissRef.current,
                c.state.endDismissRef.current
            ],
        children: NZS(jcp.Fragment, {
            children: [
                A,
                N && $cp(Y8r, {
                    ref: c.state.endDismissRef
                })
            ]
        })
    });
}), process.env.NODE_ENV !== "production" && (Xfi.displayName = "ComboboxPopup");

}
