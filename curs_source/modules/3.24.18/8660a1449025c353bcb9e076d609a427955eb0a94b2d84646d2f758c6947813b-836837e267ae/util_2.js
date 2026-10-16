import { Lfa } from "./ipa.js";
import { E } from "./tslib.es6.js";
var Ufa, jfa, R8h, P8h, M8h;
export { M8h, P8h, R8h, Ufa, jfa };
var __wakaru_yb_initialized = false;
export function yb() {
if (__wakaru_yb_initialized) return;
__wakaru_yb_initialized = true;
E(), Ufa = Symbol("evaluating"), jfa = "captureStackTrace" in Error ? Error.captureStackTrace : (...t)=>{}, R8h = Lfa(()=>{
    if (typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare")) return !1;
    try {
        const t = Function;
        return new t(""), !0;
    } catch  {
        return !1;
    }
}), P8h = new Set([
    "string",
    "number",
    "symbol"
]), M8h = {
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
