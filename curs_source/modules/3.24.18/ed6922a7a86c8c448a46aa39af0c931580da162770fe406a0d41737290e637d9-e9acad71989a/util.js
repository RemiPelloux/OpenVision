import { q9l } from "./f0s.js";
import { x } from "./tslib.es6.js";
var CEs, TEs, jpf, qpf;
export { CEs, TEs, jpf, qpf };
var __wakaru_cv_initialized = false;
export function cv() {
if (__wakaru_cv_initialized) return;
__wakaru_cv_initialized = true;
x(), CEs = Symbol("evaluating"), TEs = "captureStackTrace" in Error ? Error.captureStackTrace : (...e)=>{}, jpf = q9l(()=>{
    if (typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare")) return !1;
    try {
        const e = Function;
        return new e(""), !0;
    } catch  {
        return !1;
    }
}), qpf = {
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
