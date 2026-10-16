import { MRa, Vjr } from "./DialogPortalContext.js";
import { FGe } from "./DialogRootContext.js";
import { K8t, Y8t } from "./FloatingPortal.js";
import { cci, l7t } from "./InternalBackdrop.js";
import { lbn } from "./LYd.js";
import { cbn } from "./inertValue.js";
import { rst } from "./ipa.js";
import { E } from "./tslib.es6.js";
import { jsxs as E_1 } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { jsx as Owp } from "./react-runtime/react/esm-jsx-runtime-production.js";
import * as T_1 from "./react-runtime/react/esm-index-production.js";
var NRa;
export { NRa };
var __wakaru_I_1_initialized = false;
export function I_1() {
if (__wakaru_I_1_initialized) return;
__wakaru_I_1_initialized = true;
E(), cbn(), FGe(), MRa(), cci(), Y8t(), NRa = T_1.forwardRef(function(e, n) {
    const { keepMounted: i = !1, ...r } = e, { store: s } = rst(), o = s.useState("mounted"), a = s.useState("modal"), l = s.useState("open");
    return o || i ? Owp(Vjr.Provider, {
        value: i,
        children: E_1(K8t, {
            ref: n,
            ...r,
            children: [
                o && a === !0 && Owp(l7t, {
                    ref: s.context.internalBackdropRef,
                    inert: lbn(!l)
                }),
                e.children
            ]
        })
    }) : null;
}), process.env.NODE_ENV !== "production" && (NRa.displayName = "DialogPortal");

}
