import { EPr, fhh } from "./FloatingPortalLite.js";
import { Gci } from "./LYd.js";
import { qci } from "./PreviewCardContext.js";
import { TPr, mhh } from "./PreviewCardPortalContext.js";
import { E } from "./tslib.es6.js";
import * as SWy from "./react-runtime/react/esm-index-production.js";
import { jsx as vhh } from "./react-runtime/react/esm-jsx-runtime-production.js";
var IPr;
export { IPr };
var __wakaru__hh_initialized = false;
export function _hh() {
if (__wakaru__hh_initialized) return;
__wakaru__hh_initialized = true;
E(), qci(), mhh(), fhh(), IPr = SWy.forwardRef(function(e, n) {
    const { keepMounted: i = !1, ...r } = e;
    return Gci().useState("mounted") || i ? vhh(TPr.Provider, {
        value: i,
        children: vhh(EPr, {
            ref: n,
            ...r
        })
    }) : null;
}), process.env.NODE_ENV !== "production" && (IPr.displayName = "PreviewCardPortal");

}
