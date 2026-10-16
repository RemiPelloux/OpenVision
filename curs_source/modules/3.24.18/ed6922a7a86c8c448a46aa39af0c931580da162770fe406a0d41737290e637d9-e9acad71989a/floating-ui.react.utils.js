import { D0 } from "./floating-ui.utils.dom.js";
import { z5e } from "./floating-ui.utils.js";
import { ncl } from "./index.esm.js";
import { x } from "./tslib.es6.js";
import * as rTi from "./react-runtime/react/esm-index-production.js";
import { useLayoutEffect as wNg } from "./react-runtime/react/esm-index-production.js";
var pms, hcl, cTi, lTi, pcl, mcl, gcl, fcl, kR, vcl, _cl, bcl, d5t;
export { _cl, bcl, cTi, d5t, fcl, gcl, hcl, kR, lTi, mcl, pcl, pms, vcl };
var __wakaru_ycl_initialized = false;
export function ycl() {
if (__wakaru_ycl_initialized) return;
__wakaru_ycl_initialized = true;
x(), D0(), z5e(), ncl(), pms = "data-floating-ui-focusable", hcl = "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])", cTi = "ArrowLeft", lTi = "ArrowRight", pcl = "ArrowUp", mcl = "ArrowDown", gcl = typeof document < "u", fcl = function() {}, kR = gcl ? wNg : fcl, vcl = {
    ...rTi
}, _cl = vcl.useInsertionEffect, bcl = _cl || ((e)=>e()), d5t = ()=>({
        getShadowRoot: !0,
        displayCheck: typeof ResizeObserver == "function" && ResizeObserver.toString().includes("[native code]") ? "full" : "none"
    });

}
