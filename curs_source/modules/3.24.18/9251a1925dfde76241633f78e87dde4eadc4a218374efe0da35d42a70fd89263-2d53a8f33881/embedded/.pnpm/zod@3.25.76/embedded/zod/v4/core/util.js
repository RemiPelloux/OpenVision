import { cached } from "../../../../../../../util_exports.js";
var captureStackTrace, allowsEval, getParsedType2, propertyKeyTypes, primitiveTypes, NUMBER_FORMAT_RANGES, BIGINT_FORMAT_RANGES, Class;
export { BIGINT_FORMAT_RANGES, Class, NUMBER_FORMAT_RANGES, allowsEval, captureStackTrace, getParsedType2, primitiveTypes, propertyKeyTypes };
var __wakaru_init_util4_initialized = false;
export function init_util4() {
if (__wakaru_init_util4_initialized) return;
__wakaru_init_util4_initialized = true;
captureStackTrace = Error.captureStackTrace ? Error.captureStackTrace : (..._args)=>{};
allowsEval = cached(()=>{
    if (typeof navigator !== "undefined" && navigator?.userAgent?.includes("Cloudflare")) {
        return false;
    }
    try {
        const F2 = Function;
        new F2("");
        return true;
    } catch (_2) {
        return false;
    }
});
getParsedType2 = (data)=>{
    const t = typeof data;
    switch(t){
        case "undefined":
            return "undefined";
        case "string":
            return "string";
        case "number":
            return Number.isNaN(data) ? "nan" : "number";
        case "boolean":
            return "boolean";
        case "function":
            return "function";
        case "bigint":
            return "bigint";
        case "symbol":
            return "symbol";
        case "object":
            if (Array.isArray(data)) {
                return "array";
            }
            if (data === null) {
                return "null";
            }
            if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") {
                return "promise";
            }
            if (typeof Map !== "undefined" && data instanceof Map) {
                return "map";
            }
            if (typeof Set !== "undefined" && data instanceof Set) {
                return "set";
            }
            if (typeof Date !== "undefined" && data instanceof Date) {
                return "date";
            }
            if (typeof File !== "undefined" && data instanceof File) {
                return "file";
            }
            return "object";
        default:
            throw new Error(`Unknown data type: ${t}`);
    }
};
propertyKeyTypes = new Set([
    "string",
    "number",
    "symbol"
]);
primitiveTypes = new Set([
    "string",
    "number",
    "bigint",
    "boolean",
    "symbol",
    "undefined"
]);
NUMBER_FORMAT_RANGES = {
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
BIGINT_FORMAT_RANGES = {
    int64: [
        BigInt("-9223372036854775808"),
        BigInt("9223372036854775807")
    ],
    uint64: [
        BigInt(0),
        BigInt("18446744073709551615")
    ]
};
Class = class {
    constructor(..._args){}
};

}
