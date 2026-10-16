import { Fgt, Ogt } from "./FloatingPortal.js";
import { EPg, Hhs } from "./SelectPortalContext.js";
import { VRe } from "./SelectRootContext.js";
import { Q5e, jc } from "./qIc.js";
import { J5e, f_ } from "./store_4.js";
import { x } from "./tslib.es6.js";
import { kU } from "./useStore.js";
import { jsx as Dsl } from "./react-runtime/react/esm-jsx-runtime-production.js";
import * as xPg from "./react-runtime/react/esm-index-production.js";
var Whs;
export { Whs };
var __wakaru_IPg_initialized = false;
export function IPg() {
if (__wakaru_IPg_initialized) return;
__wakaru_IPg_initialized = true;
x(), EPg(), VRe(), J5e(), kU(), Fgt(), Whs = xPg.forwardRef(function(t, n) {
    const { store: i } = Q5e(), r = jc(i, f_.mounted), s = jc(i, f_.forceMount);
    return r || s ? Dsl(Hhs.Provider, {
        value: !0,
        children: Dsl(Ogt, {
            ref: n,
            ...t
        })
    }) : null;
}), process.env.NODE_ENV !== "production" && (Whs.displayName = "SelectPortal");

}
