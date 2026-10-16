import { x } from "./tslib.es6.js";
import { Geh } from "./xmo.js";
var Igo, Yeh, Xeh;
export { Igo, Xeh, Yeh };
var __wakaru_dGt_initialized = false;
export function dGt() {
if (__wakaru_dGt_initialized) return;
__wakaru_dGt_initialized = true;
x(), Igo = Error.captureStackTrace ? Error.captureStackTrace : (...e)=>{}, Yeh = Geh(()=>{
    if (typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare")) return !1;
    try {
        const e = Function;
        return new e(""), !0;
    } catch  {
        return !1;
    }
}), Xeh = new Set([
    "string",
    "number",
    "symbol"
]);

}
