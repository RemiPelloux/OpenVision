import { O2i, QQl } from "./ComboboxPortalContext.js";
import { Nue } from "./ComboboxRootContext.js";
import { Fgt, Ogt } from "./FloatingPortal.js";
import { wve } from "./f0s.js";
import { jc } from "./qIc.js";
import { b6e, op } from "./store_5.js";
import { x } from "./tslib.es6.js";
import { kU } from "./useStore.js";
import { jsx as JQl } from "./react-runtime/react/esm-jsx-runtime-production.js";
import * as lUf from "./react-runtime/react/esm-index-production.js";
var XPs;
export { XPs };
var __wakaru_uUf_initialized = false;
export function uUf() {
if (__wakaru_uUf_initialized) return;
__wakaru_uUf_initialized = true;
x(), Nue(), QQl(), b6e(), kU(), Fgt(), XPs = lUf.forwardRef(function(t, n) {
    const { keepMounted: i = !1, ...r } = t, s = wve(), o = jc(s, op.mounted), a = jc(s, op.forceMounted);
    return o || i || a ? JQl(O2i.Provider, {
        value: i,
        children: JQl(Ogt, {
            ref: n,
            ...r
        })
    }) : null;
}), process.env.NODE_ENV !== "production" && (XPs.displayName = "ComboboxPortal");

}
