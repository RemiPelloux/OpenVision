import { LUm } from "./gYa.js";
import { E } from "./tslib.es6.js";
var yXa, $Um, HUm;
export { $Um, HUm, yXa };
var __wakaru_uIn_initialized = false;
export function uIn() {
if (__wakaru_uIn_initialized) return;
__wakaru_uIn_initialized = true;
E(), yXa = Error.captureStackTrace ? Error.captureStackTrace : (...t)=>{}, $Um = LUm(()=>{
    if (typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare")) return !1;
    try {
        const t = Function;
        return new t(""), !0;
    } catch  {
        return !1;
    }
}), HUm = new Set([
    "string",
    "number",
    "symbol"
]);

}
