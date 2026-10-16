import { Jll, wTi } from "./FloatingPortalLite.js";
import { Nul, OTi } from "./TooltipPortalContext.js";
import { Lkn } from "./TooltipRootContext.js";
import { PTi } from "./qIc.js";
import { x } from "./tslib.es6.js";
import { jsx as Oul } from "./react-runtime/react/esm-jsx-runtime-production.js";
import * as pOg from "./react-runtime/react/esm-index-production.js";
var _gs;
export { _gs };
var __wakaru_mOg_initialized = false;
export function mOg() {
if (__wakaru_mOg_initialized) return;
__wakaru_mOg_initialized = true;
x(), Lkn(), Nul(), Jll(), _gs = pOg.forwardRef(function(t, n) {
    const { keepMounted: i = !1, ...r } = t;
    return PTi().useState("mounted") || i ? Oul(OTi.Provider, {
        value: i,
        children: Oul(wTi, {
            ref: n,
            ...r
        })
    }) : null;
}), process.env.NODE_ENV !== "production" && (_gs.displayName = "TooltipPortal");

}
