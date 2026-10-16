import { EPr, fhh } from "./FloatingPortalLite.js";
import { BPr } from "./LYd.js";
import { WPr, Yhh } from "./TooltipPortalContext.js";
import { Kci } from "./TooltipRootContext.js";
import { E } from "./tslib.es6.js";
import { jsx as Xhh } from "./react-runtime/react/esm-jsx-runtime-production.js";
import * as uGy from "./react-runtime/react/esm-index-production.js";
var GPr;
export { GPr };
var __wakaru_Zhh_initialized = false;
export function Zhh() {
if (__wakaru_Zhh_initialized) return;
__wakaru_Zhh_initialized = true;
E(), Kci(), Yhh(), fhh(), GPr = uGy.forwardRef(function(e, n) {
    const { keepMounted: i = !1, ...r } = e;
    return BPr().useState("mounted") || i ? Xhh(WPr.Provider, {
        value: i,
        children: Xhh(EPr, {
            ref: n,
            ...r
        })
    }) : null;
}), process.env.NODE_ENV !== "production" && (GPr.displayName = "TooltipPortal");

}
