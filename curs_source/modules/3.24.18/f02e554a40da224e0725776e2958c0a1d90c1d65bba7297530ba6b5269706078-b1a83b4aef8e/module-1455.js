"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.isScalarZeroValue = exports.scalarZeroValue = exports.scalarEquals = void 0;
const n = require("./module-1498.js"), s = require("./module-3408.js");
exports.scalarEquals = function(t, e, r) {
    if (e === r) return !0;
    if (t == s.ScalarType.BYTES) {
        if (!(e instanceof Uint8Array && r instanceof Uint8Array)) return !1;
        if (e.length !== r.length) return !1;
        for(let t = 0; t < e.length; t++)if (e[t] !== r[t]) return !1;
        return !0;
    }
    switch(t){
        case s.ScalarType.UINT64:
        case s.ScalarType.FIXED64:
        case s.ScalarType.INT64:
        case s.ScalarType.SFIXED64:
        case s.ScalarType.SINT64:
            return e == r;
    }
    return !1;
}, exports.scalarZeroValue = function(t, e) {
    switch(t){
        case s.ScalarType.BOOL:
            return !1;
        case s.ScalarType.UINT64:
        case s.ScalarType.FIXED64:
        case s.ScalarType.INT64:
        case s.ScalarType.SFIXED64:
        case s.ScalarType.SINT64:
            return 0 == e ? n.protoInt64.zero : "0";
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
}, exports.isScalarZeroValue = function(t, e) {
    switch(t){
        case s.ScalarType.BOOL:
            return !1 === e;
        case s.ScalarType.STRING:
            return "" === e;
        case s.ScalarType.BYTES:
            return e instanceof Uint8Array && !e.byteLength;
        default:
            return 0 == e;
    }
};
