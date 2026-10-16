"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.isScalarZeroValue = exports.scalarZeroValue = exports.scalarEquals = void 0;
const t = require("./module-1498.js"), s = require("./module-3408.js");
exports.scalarEquals = function(e, n, a) {
    if (n === a) return !0;
    if (e == s.ScalarType.BYTES) {
        if (!(n instanceof Uint8Array && a instanceof Uint8Array)) return !1;
        if (n.length !== a.length) return !1;
        for(let e = 0; e < n.length; e++)if (n[e] !== a[e]) return !1;
        return !0;
    }
    switch(e){
        case s.ScalarType.UINT64:
        case s.ScalarType.FIXED64:
        case s.ScalarType.INT64:
        case s.ScalarType.SFIXED64:
        case s.ScalarType.SINT64:
            return n == a;
    }
    return !1;
}, exports.scalarZeroValue = function(e, n) {
    switch(e){
        case s.ScalarType.BOOL:
            return !1;
        case s.ScalarType.UINT64:
        case s.ScalarType.FIXED64:
        case s.ScalarType.INT64:
        case s.ScalarType.SFIXED64:
        case s.ScalarType.SINT64:
            return 0 == n ? t.protoInt64.zero : "0";
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
}, exports.isScalarZeroValue = function(e, n) {
    switch(e){
        case s.ScalarType.BOOL:
            return !1 === n;
        case s.ScalarType.STRING:
            return "" === n;
        case s.ScalarType.BYTES:
            return n instanceof Uint8Array && !n.byteLength;
        default:
            return 0 == n;
    }
};
