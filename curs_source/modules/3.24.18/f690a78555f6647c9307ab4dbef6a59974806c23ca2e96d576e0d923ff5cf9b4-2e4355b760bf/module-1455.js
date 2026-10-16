"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.isScalarZeroValue = exports.scalarZeroValue = exports.scalarEquals = void 0;
const n = require("./module-1498.js"), r = require("./module-3408.js");
exports.scalarEquals = function(e, A, t) {
    if (A === t) return !0;
    if (e == r.ScalarType.BYTES) {
        if (!(A instanceof Uint8Array && t instanceof Uint8Array)) return !1;
        if (A.length !== t.length) return !1;
        for(let e = 0; e < A.length; e++)if (A[e] !== t[e]) return !1;
        return !0;
    }
    switch(e){
        case r.ScalarType.UINT64:
        case r.ScalarType.FIXED64:
        case r.ScalarType.INT64:
        case r.ScalarType.SFIXED64:
        case r.ScalarType.SINT64:
            return A == t;
    }
    return !1;
}, exports.scalarZeroValue = function(e, A) {
    switch(e){
        case r.ScalarType.BOOL:
            return !1;
        case r.ScalarType.UINT64:
        case r.ScalarType.FIXED64:
        case r.ScalarType.INT64:
        case r.ScalarType.SFIXED64:
        case r.ScalarType.SINT64:
            return 0 == A ? n.protoInt64.zero : "0";
        case r.ScalarType.DOUBLE:
        case r.ScalarType.FLOAT:
            return 0;
        case r.ScalarType.BYTES:
            return new Uint8Array(0);
        case r.ScalarType.STRING:
            return "";
        default:
            return 0;
    }
}, exports.isScalarZeroValue = function(e, A) {
    switch(e){
        case r.ScalarType.BOOL:
            return !1 === A;
        case r.ScalarType.STRING:
            return "" === A;
        case r.ScalarType.BYTES:
            return A instanceof Uint8Array && !A.byteLength;
        default:
            return 0 == A;
    }
};
