import { GFg, KTi, VFg, WFg, jFg } from "./qIc.js";
import { x } from "./tslib.es6.js";
var w5t;
export { w5t };
var __wakaru_YTi_initialized = false;
export function YTi() {
if (__wakaru_YTi_initialized) return;
__wakaru_YTi_initialized = true;
x(), w5t = (function(e) {
    if (e == null) return jFg;
    if (typeof e == "function") return KTi(e);
    if (typeof e == "object") return Array.isArray(e) ? WFg(e) : GFg(e);
    if (typeof e == "string") return VFg(e);
    throw new Error("Expected function, string, or object as test");
});

}
