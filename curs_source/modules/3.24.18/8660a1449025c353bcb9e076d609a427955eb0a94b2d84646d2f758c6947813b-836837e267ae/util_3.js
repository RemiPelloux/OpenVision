import { Ghp } from "./ipa.js";
import { E } from "./tslib.es6.js";
var pEa, Xhp, Zhp, Wt1;
export { Wt1, Xhp, Zhp, pEa };
var __wakaru_cwn_initialized = false;
export function cwn() {
if (__wakaru_cwn_initialized) return;
__wakaru_cwn_initialized = true;
E(), pEa = Error.captureStackTrace ? Error.captureStackTrace : (...t)=>{}, Xhp = Ghp(()=>{
    if (typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare")) return !1;
    try {
        const t = Function;
        return new t(""), !0;
    } catch  {
        return !1;
    }
}), Zhp = new Set([
    "string",
    "number",
    "symbol"
]), Wt1 = {
    safeint: [
        Number.MIN_SAFE_INTEGER,
        Number.MAX_SAFE_INTEGER
    ],
    int32: [
        -2147483648,
        2147483647
    ],
    uint32: [
        0,
        4294967295
    ],
    float32: [
        -34028234663852886e22,
        34028234663852886e22
    ],
    float64: [
        -Number.MAX_VALUE,
        Number.MAX_VALUE
    ]
};

}
