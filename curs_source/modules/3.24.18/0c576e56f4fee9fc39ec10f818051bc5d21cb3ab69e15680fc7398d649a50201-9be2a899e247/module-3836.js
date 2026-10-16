"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.isScalarZeroValue = exports.scalarZeroValue = exports.scalarEquals = void 0;
const n = require("./module-1498.js"), o = require("./module-3408.js");
exports.scalarEquals = function(e, t, r) {
    if (t === r) return !0;
    if (e == o.ScalarType.BYTES) {
        if (!(t instanceof Uint8Array && r instanceof Uint8Array)) return !1;
        if (t.length !== r.length) return !1;
        for(let e = 0; e < t.length; e++)if (t[e] !== r[e]) return !1;
        return !0;
    }
    switch(e){
        case o.ScalarType.UINT64:
        case o.ScalarType.FIXED64:
        case o.ScalarType.INT64:
        case o.ScalarType.SFIXED64:
        case o.ScalarType.SINT64:
            return t == r;
    }
    return !1;
}, exports.scalarZeroValue = function(e, t) {
    switch(e){
        case o.ScalarType.BOOL:
            return !1;
        case o.ScalarType.UINT64:
        case o.ScalarType.FIXED64:
        case o.ScalarType.INT64:
        case o.ScalarType.SFIXED64:
        case o.ScalarType.SINT64:
            return 0 == t ? n.protoInt64.zero : "0";
        case o.ScalarType.DOUBLE:
        case o.ScalarType.FLOAT:
            return 0;
        case o.ScalarType.BYTES:
            return new Uint8Array(0);
        case o.ScalarType.STRING:
            return "";
        default:
            return 0;
    }
}, exports.isScalarZeroValue = function(e, t) {
    switch(e){
        case o.ScalarType.BOOL:
            return !1 === t;
        case o.ScalarType.STRING:
            return "" === t;
        case o.ScalarType.BYTES:
            return t instanceof Uint8Array && !t.byteLength;
        default:
            return 0 == t;
    }
};
