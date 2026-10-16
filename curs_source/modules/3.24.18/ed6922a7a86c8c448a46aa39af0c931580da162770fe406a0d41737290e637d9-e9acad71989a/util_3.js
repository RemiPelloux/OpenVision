import { YIn } from "./f0s.js";
import { x } from "./tslib.es6.js";
var z6s, kBi, K6s, mvu, ZIn, Y6s, X6s, Z6s, gvu;
export { K6s, X6s, Y6s, Z6s, ZIn, gvu, kBi, mvu, z6s };
var __wakaru_Fv_initialized = false;
export function Fv() {
if (__wakaru_Fv_initialized) return;
__wakaru_Fv_initialized = true;
x(), z6s = Symbol("evaluating"), kBi = "captureStackTrace" in Error ? Error.captureStackTrace : (...e)=>{}, K6s = YIn(()=>{
    if (typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare")) return !1;
    try {
        const e = Function;
        return new e(""), !0;
    } catch  {
        return !1;
    }
}), mvu = (e)=>{
    const t = typeof e;
    switch(t){
        case "undefined":
            return "undefined";
        case "string":
            return "string";
        case "number":
            return Number.isNaN(e) ? "nan" : "number";
        case "boolean":
            return "boolean";
        case "function":
            return "function";
        case "bigint":
            return "bigint";
        case "symbol":
            return "symbol";
        case "object":
            return Array.isArray(e) ? "array" : e === null ? "null" : e.then && typeof e.then == "function" && e.catch && typeof e.catch == "function" ? "promise" : typeof Map < "u" && e instanceof Map ? "map" : typeof Set < "u" && e instanceof Set ? "set" : typeof Date < "u" && e instanceof Date ? "date" : typeof File < "u" && e instanceof File ? "file" : "object";
        default:
            throw new Error(`Unknown data type: ${t}`);
    }
}, ZIn = new Set([
    "string",
    "number",
    "symbol"
]), Y6s = new Set([
    "string",
    "number",
    "bigint",
    "boolean",
    "symbol",
    "undefined"
]), X6s = {
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
}, Z6s = {
    int64: [
        BigInt("-9223372036854775808"),
        BigInt("9223372036854775807")
    ],
    uint64: [
        BigInt(0),
        BigInt("18446744073709551615")
    ]
}, gvu = class {
    constructor(...e){}
};

}
