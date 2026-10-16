import { YHe, vRr } from "./FocusGuard.js";
import { DQo, GHe, Moh, V8t, _oh, cUy, foh, nbn, r0, xli, zd } from "./LYd.js";
import { b_e } from "./addEventListener.js";
import { Aoh, k_e } from "./constants_10.js";
import { IRr } from "./createAttribute.js";
import { VS } from "./createBaseUIEventDetails.js";
import { vA } from "./empty.js";
import { aT } from "./floating-ui.utils.dom.js";
import { V_n } from "./mergeCleanups.js";
import { KHe, Zb } from "./reason-parts.js";
import { NQo } from "./tabbable.js";
import { E } from "./tslib.es6.js";
import { jv, su } from "./useIsoLayoutEffect.js";
import { Om } from "./useRenderElement.js";
import { Jy } from "./useStableCallback.js";
import { jsx as HQo } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { jsxs as Poh } from "./react-runtime/react/esm-jsx-runtime-production.js";
import * as Roh from "./react-runtime/react-dom/esm-index-production.js";
import * as fhe from "./react-runtime/react/esm-index-production.js";
var NRr, WQo, Doh, K8t;
export { Doh, K8t, NRr, WQo };
var __wakaru_Y8t_initialized = false;
export function Y8t() {
if (__wakaru_Y8t_initialized) return;
__wakaru_Y8t_initialized = true;
E(), aT(), b_e(), V_n(), V8t(), jv(), Jy(), vA(), vRr(), NQo(), VS(), IRr(), Om(), k_e(), Zb(), NRr = fhe.createContext(null), process.env.NODE_ENV !== "production" && (NRr.displayName = "PortalContext"), WQo = ()=>fhe.useContext(NRr), Doh = xli("portal"), K8t = fhe.forwardRef(function(e, n) {
    const { render: i, className: r, style: s, children: o, container: a, renderGuards: l, ...c } = e, { portalNode: u, portalSubtree: d } = Moh({
        container: a,
        ref: n,
        componentProps: e,
        elementProps: c
    }), h = fhe.useRef(null), p = fhe.useRef(null), g = fhe.useRef(null), f = fhe.useRef(null), [_, b] = fhe.useState(null), y = fhe.useRef(!1), S = _?.modal, k = _?.open, C = typeof l == "boolean" ? l : !!_ && !_.modal && _.open && !!u;
    fhe.useEffect(()=>{
        if (!u || S) return;
        function I(A) {
            u && A.relatedTarget && nbn(A) && (A.type === "focusin" ? y.current && (_oh(u), y.current = !1) : (cUy(u), y.current = !0));
        }
        return GHe(r0(u, "focusin", I, !0), r0(u, "focusout", I, !0));
    }, [
        u,
        S
    ]), su(()=>{
        !u || k !== !0 || !y.current || (_oh(u), y.current = !1);
    }, [
        k,
        u
    ]);
    const T = fhe.useMemo(()=>({
            beforeOutsideRef: h,
            afterOutsideRef: p,
            beforeInsideRef: g,
            afterInsideRef: f,
            portalNode: u,
            setFocusManagerState: b
        }), [
        u
    ]);
    return Poh(fhe.Fragment, {
        children: [
            d,
            Poh(NRr.Provider, {
                value: T,
                children: [
                    C && u && HQo(YHe, {
                        "data-type": "outside",
                        ref: h,
                        onFocus: (I)=>{
                            if (nbn(I, u)) g.current?.focus();
                            else {
                                const A = _ ? _.domReference : null;
                                foh(A)?.focus();
                            }
                        }
                    }),
                    C && u && HQo("span", {
                        "aria-owns": u.id,
                        style: Aoh
                    }),
                    u && Roh.createPortal(o, u),
                    C && u && HQo(YHe, {
                        "data-type": "outside",
                        ref: p,
                        onFocus: (I)=>{
                            if (nbn(I, u)) f.current?.focus();
                            else {
                                const A = _ ? _.domReference : null;
                                DQo(A)?.focus(), _?.closeOnFocusOut && _?.onOpenChange(!1, zd(KHe, I.nativeEvent));
                            }
                        }
                    })
                ]
            })
        ]
    });
}), process.env.NODE_ENV !== "production" && (K8t.displayName = "FloatingPortal");

}
