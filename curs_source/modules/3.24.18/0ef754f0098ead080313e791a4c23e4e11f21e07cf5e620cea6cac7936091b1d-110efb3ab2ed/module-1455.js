"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.isScalarZeroValue = exports.scalarZeroValue = exports.scalarEquals = void 0;
const t = require("./module-1498.js"), s = require("./module-3408.js");
exports.scalarEquals = function(e, a, n) {
    if (a === n) return !0;
    if (e == s.ScalarType.BYTES) {
        if (!(a instanceof Uint8Array && n instanceof Uint8Array)) return !1;
        if (a.length !== n.length) return !1;
        for(let e = 0; e < a.length; e++)if (a[e] !== n[e]) return !1;
        return !0;
    }
    switch(e){
        case s.ScalarType.UINT64:
        case s.ScalarType.FIXED64:
        case s.ScalarType.INT64:
        case s.ScalarType.SFIXED64:
        case s.ScalarType.SINT64:
            return a == n;
    }
    return !1;
}, exports.scalarZeroValue = function(e, a) {
    switch(e){
        case s.ScalarType.BOOL:
            return !1;
        case s.ScalarType.UINT64:
        case s.ScalarType.FIXED64:
        case s.ScalarType.INT64:
        case s.ScalarType.SFIXED64:
        case s.ScalarType.SINT64:
            return 0 == a ? t.protoInt64.zero : "0";
        case s.ScalarType.DOUBLE:
        case s.ScalarType.FLOAT:
            return 0;
        case s.ScalarType.BYTES:
            return new Uint8Array(0);
        case s.ScalarType.STRING:
            return "";
        default:
            return 0;
    }
}, exports.isScalarZeroValue = function(e, a) {
    switch(e){
        case s.ScalarType.BOOL:
            return !1 === a;
        case s.ScalarType.STRING:
            return "" === a;
        case s.ScalarType.BYTES:
            return a instanceof Uint8Array && !a.byteLength;
        default:
            return 0 == a;
    }
};
