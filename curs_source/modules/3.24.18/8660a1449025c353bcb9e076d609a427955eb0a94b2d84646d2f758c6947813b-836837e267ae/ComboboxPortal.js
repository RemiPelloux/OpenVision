import { J8r, Ncp } from "./ComboboxPortalContext.js";
import { Y_e } from "./ComboboxRootContext.js";
import { K8t, Y8t } from "./FloatingPortal.js";
import { Ic } from "./LYd.js";
import { x0e } from "./ipa.js";
import { gm, yGe } from "./store_5.js";
import { E } from "./tslib.es6.js";
import { TW } from "./useStore.js";
import * as AZS from "./react-runtime/react/esm-index-production.js";
import { jsx as Lcp } from "./react-runtime/react/esm-jsx-runtime-production.js";
var e7r;
export { e7r };
var __wakaru_Ocp_initialized = false;
export function Ocp() {
if (__wakaru_Ocp_initialized) return;
__wakaru_Ocp_initialized = true;
E(), Y_e(), Ncp(), yGe(), TW(), Y8t(), e7r = AZS.forwardRef(function(e, n) {
    const { keepMounted: i = !1, ...r } = e, s = x0e(), o = Ic(s, gm.mounted), a = Ic(s, gm.forceMounted);
    return o || i || a ? Lcp(J8r.Provider, {
        value: i,
        children: Lcp(K8t, {
            ref: n,
            ...r
        })
    }) : null;
}), process.env.NODE_ENV !== "production" && (e7r.displayName = "ComboboxPortal");

}
