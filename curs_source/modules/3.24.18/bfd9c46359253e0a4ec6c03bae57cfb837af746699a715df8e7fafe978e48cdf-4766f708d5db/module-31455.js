"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.isScalarZeroValue = exports.scalarZeroValue = exports.scalarEquals = void 0;
const n = require("./module-11498.js"), s = require("./module-3408.js");
exports.scalarEquals = function(e, t, r) {
    if (t === r) return !0;
    if (e == s.ScalarType.BYTES) {
        if (!(t instanceof Uint8Array && r instanceof Uint8Array)) return !1;
        if (t.length !== r.length) return !1;
        for(let e = 0; e < t.length; e++)if (t[e] !== r[e]) return !1;
        return !0;
    }
    switch(e){
        case s.ScalarType.UINT64:
        case s.ScalarType.FIXED64:
        case s.ScalarType.INT64:
        case s.ScalarType.SFIXED64:
        case s.ScalarType.SINT64:
            return t == r;
    }
    return !1;
}, exports.scalarZeroValue = function(e, t) {
    switch(e){
        case s.ScalarType.BOOL:
            return !1;
        case s.ScalarType.UINT64:
        case s.ScalarType.FIXED64:
        case s.ScalarType.INT64:
        case s.ScalarType.SFIXED64:
        case s.ScalarType.SINT64:
            return 0 == t ? n.protoInt64.zero : "0";
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
}, exports.isScalarZeroValue = function(e, t) {
    switch(e){
        case s.ScalarType.BOOL:
            return !1 === t;
        case s.ScalarType.STRING:
            return "" === t;
        case s.ScalarType.BYTES:
            return t instanceof Uint8Array && !t.byteLength;
        default:
            return 0 == t;
    }
};
