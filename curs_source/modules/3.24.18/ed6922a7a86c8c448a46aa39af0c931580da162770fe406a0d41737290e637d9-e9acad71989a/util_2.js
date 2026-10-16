import { Mtu } from "./f0s.js";
import { x } from "./tslib.es6.js";
var JLs, Btu, Utu, HHf;
export { Btu, HHf, JLs, Utu };
var __wakaru_dUt_initialized = false;
export function dUt() {
if (__wakaru_dUt_initialized) return;
__wakaru_dUt_initialized = true;
x(), JLs = Error.captureStackTrace ? Error.captureStackTrace : (...e)=>{}, Btu = Mtu(()=>{
    if (typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare")) return !1;
    try {
        const e = Function;
        return new e(""), !0;
    } catch  {
        return !1;
    }
}), Utu = new Set([
    "string",
    "number",
    "symbol"
]), HHf = {
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
