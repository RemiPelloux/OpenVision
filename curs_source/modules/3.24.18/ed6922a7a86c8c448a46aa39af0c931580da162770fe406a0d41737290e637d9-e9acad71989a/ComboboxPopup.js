import { $Ql, L2i } from "./ComboboxInternalDismissButton.js";
import { P2i } from "./ComboboxPositionerContext.js";
import { Nue } from "./ComboboxRootContext.js";
import { E2i, GPs, LQl, _6e, wve } from "./f0s.js";
import { tft } from "./getDisabledMountTransitionStyles.js";
import { BPs } from "./index_170.js";
import { Ure, g2 } from "./popupStateMapping.js";
import { UO, _Sn, bSn, cg, eft, hj, jc, kp } from "./qIc.js";
import { cN } from "./shadowDom.js";
import { $O, T5 } from "./stateAttributesMapping.js";
import { b6e, op } from "./store_5.js";
import { x } from "./tslib.es6.js";
import { af, gl } from "./useIsoLayoutEffect.js";
import { pj } from "./useOpenChangeComplete.js";
import { wp } from "./useRenderElement.js";
import { kU } from "./useStore.js";
import { jsx as nJl } from "./react-runtime/react/esm-jsx-runtime-production.js";
import * as tJl from "./react-runtime/react/esm-index-production.js";
import { jsxs as vUf } from "./react-runtime/react/esm-jsx-runtime-production.js";
var iJl, F2i;
export { F2i, iJl };
var __wakaru_rJl_initialized = false;
export function rJl() {
if (__wakaru_rJl_initialized) return;
__wakaru_rJl_initialized = true;
x(), af(), wp(), Nue(), b6e(), g2(), P2i(), pj(), $O(), tft(), $Ql(), BPs(), kU(), cN(), bSn(), iJl = {
    ...Ure,
    ...T5
}, F2i = tJl.forwardRef(function(t, n) {
    const { render: i, className: r, style: s, initialFocus: o, finalFocus: a, ...c } = t, l = wve(), u = GPs(), h = E2i(), { filteredItems: p } = _6e(), g = jc(l, op.mounted), f = jc(l, op.open), v = jc(l, op.openMethod), b = jc(l, op.transitionStatus), y = jc(l, op.inputInsidePopup), T = jc(l, op.inputElement), E = jc(l, op.modal), A = jc(l, op.id), R = p.length === 0, D = c.id ?? (y ? LQl(A) : void 0);
    gl(()=>(l.set("popupId", l.state.popupRef.current?.id || D), ()=>{
            l.set("popupId", void 0);
        }), [
        l,
        D
    ]), hj({
        open: f,
        ref: l.state.popupRef,
        onComplete () {
            f && l.state.onOpenChangeComplete(!0);
        }
    });
    const P = {
        open: f,
        side: u.side,
        align: u.align,
        anchorHidden: u.anchorHidden,
        transitionStatus: b,
        empty: R
    }, N = kp("div", t, {
        state: P,
        ref: [
            n,
            l.state.popupRef
        ],
        props: [
            {
                id: D,
                role: y ? "dialog" : "presentation",
                tabIndex: -1,
                onFocus (W) {
                    const G = UO(W.nativeEvent);
                    v !== "touch" && (cg(l.state.listElement, G) || G === W.currentTarget) && l.state.inputRef.current?.focus();
                }
            },
            eft(b),
            c
        ],
        stateAttributesMapping: iJl
    }), F = o === void 0 ? y ? (W)=>W === "touch" ? l.state.popupRef.current : T : !1 : o;
    let H;
    a != null ? H = a : H = y ? void 0 : !1;
    const $ = !y || E;
    return nJl(_Sn, {
        context: h,
        disabled: !g,
        modal: $,
        openInteractionType: v,
        initialFocus: F,
        returnFocus: H,
        getInsideElements: ()=>[
                l.state.startDismissRef.current,
                l.state.endDismissRef.current
            ],
        children: vUf(tJl.Fragment, {
            children: [
                N,
                $ && nJl(L2i, {
                    ref: l.state.endDismissRef
                })
            ]
        })
    });
}), process.env.NODE_ENV !== "production" && (F2i.displayName = "ComboboxPopup");

}
