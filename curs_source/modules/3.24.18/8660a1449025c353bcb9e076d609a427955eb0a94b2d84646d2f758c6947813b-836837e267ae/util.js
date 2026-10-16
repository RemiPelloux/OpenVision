import { dQn } from "./SZu.js";
import { E } from "./tslib.es6.js";
var cxo, ffr, uxo, ard, pQn, dxo, hxo, pxo, lrd;
export { ard, cxo, dxo, ffr, hxo, lrd, pQn, pxo, uxo };
var __wakaru_ky_initialized = false;
export function ky() {
if (__wakaru_ky_initialized) return;
__wakaru_ky_initialized = true;
E(), cxo = Symbol("evaluating"), ffr = "captureStackTrace" in Error ? Error.captureStackTrace : (...t)=>{}, uxo = dQn(()=>{
    if (typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare")) return !1;
    try {
        const t = Function;
        return new t(""), !0;
    } catch  {
        return !1;
    }
}), ard = (t)=>{
    const e = typeof t;
    switch(e){
        case "undefined":
            return "undefined";
        case "string":
            return "string";
        case "number":
            return Number.isNaN(t) ? "nan" : "number";
        case "boolean":
            return "boolean";
        case "function":
            return "function";
        case "bigint":
            return "bigint";
        case "symbol":
            return "symbol";
        case "object":
            return Array.isArray(t) ? "array" : t === null ? "null" : t.then && typeof t.then == "function" && t.catch && typeof t.catch == "function" ? "promise" : typeof Map < "u" && t instanceof Map ? "map" : typeof Set < "u" && t instanceof Set ? "set" : typeof Date < "u" && t instanceof Date ? "date" : typeof File < "u" && t instanceof File ? "file" : "object";
        default:
            throw new Error(`Unknown data type: ${e}`);
    }
}, pQn = new Set([
    "string",
    "number",
    "symbol"
]), dxo = new Set([
    "string",
    "number",
    "bigint",
    "boolean",
    "symbol",
    "undefined"
]), hxo = {
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
}, pxo = {
    int64: [
        BigInt("-9223372036854775808"),
        BigInt("9223372036854775807")
    ],
    uint64: [
        BigInt(0),
        BigInt("18446744073709551615")
    ]
}, lrd = class {
    constructor(...t){}
};

}
