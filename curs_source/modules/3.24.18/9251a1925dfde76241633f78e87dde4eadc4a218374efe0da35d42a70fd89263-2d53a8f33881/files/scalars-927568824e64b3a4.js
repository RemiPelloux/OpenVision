import { require_proto_int64 } from "../proto-int64.js";
import { require_scalar } from "../scalar.js";
var __wakaru_require_scalars_cache;
export function require_scalars() {
if (__wakaru_require_scalars_cache) return __wakaru_require_scalars_cache;
var exports2 = {};
__wakaru_require_scalars_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.isScalarZeroValue = exports2.scalarZeroValue = exports2.scalarEquals = void 0;
var proto_int64_js_1 = require_proto_int64();
var scalar_js_1 = require_scalar();
function scalarEquals2(type2, a, b2) {
    if (a === b2) {
        return true;
    }
    if (type2 == scalar_js_1.ScalarType.BYTES) {
        if (!(a instanceof Uint8Array) || !(b2 instanceof Uint8Array)) {
            return false;
        }
        if (a.length !== b2.length) {
            return false;
        }
        for(let i = 0; i < a.length; i++){
            if (a[i] !== b2[i]) {
                return false;
            }
        }
        return true;
    }
    switch(type2){
        case scalar_js_1.ScalarType.UINT64:
        case scalar_js_1.ScalarType.FIXED64:
        case scalar_js_1.ScalarType.INT64:
        case scalar_js_1.ScalarType.SFIXED64:
        case scalar_js_1.ScalarType.SINT64:
            return a == b2;
    }
    return false;
}
exports2.scalarEquals = scalarEquals2;
function scalarZeroValue2(type2, longType) {
    switch(type2){
        case scalar_js_1.ScalarType.BOOL:
            return false;
        case scalar_js_1.ScalarType.UINT64:
        case scalar_js_1.ScalarType.FIXED64:
        case scalar_js_1.ScalarType.INT64:
        case scalar_js_1.ScalarType.SFIXED64:
        case scalar_js_1.ScalarType.SINT64:
            return longType == 0 ? proto_int64_js_1.protoInt64.zero : "0";
        case scalar_js_1.ScalarType.DOUBLE:
        case scalar_js_1.ScalarType.FLOAT:
            return 0;
        case scalar_js_1.ScalarType.BYTES:
            return new Uint8Array(0);
        case scalar_js_1.ScalarType.STRING:
            return "";
        default:
            return 0;
    }
}
exports2.scalarZeroValue = scalarZeroValue2;
function isScalarZeroValue2(type2, value) {
    switch(type2){
        case scalar_js_1.ScalarType.BOOL:
            return value === false;
        case scalar_js_1.ScalarType.STRING:
            return value === "";
        case scalar_js_1.ScalarType.BYTES:
            return value instanceof Uint8Array && !value.byteLength;
        default:
            return value == 0;
    }
}
exports2.isScalarZeroValue = isScalarZeroValue2;

return exports2;
}
