Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.isScalarZeroValue = exports.scalarZeroValue = exports.scalarEquals = void 0;
const s = require("./module-1498.js"), o = require("./module-3408.js");
exports.scalarEquals = function(e, a, n) {
    if (a === n) return !0;
    if (e == o.ScalarType.BYTES) {
        if (!(a instanceof Uint8Array && n instanceof Uint8Array)) return !1;
        if (a.length !== n.length) return !1;
        for(let e = 0; e < a.length; e++)if (a[e] !== n[e]) return !1;
        return !0;
    }
    switch(e){
        case o.ScalarType.UINT64:
        case o.ScalarType.FIXED64:
        case o.ScalarType.INT64:
        case o.ScalarType.SFIXED64:
        case o.ScalarType.SINT64:
            return a == n;
    }
    return !1;
}, exports.scalarZeroValue = function(e, a) {
    switch(e){
        case o.ScalarType.BOOL:
            return !1;
        case o.ScalarType.UINT64:
        case o.ScalarType.FIXED64:
        case o.ScalarType.INT64:
        case o.ScalarType.SFIXED64:
        case o.ScalarType.SINT64:
            return 0 == a ? s.protoInt64.zero : "0";
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
}, exports.isScalarZeroValue = function(e, a) {
    switch(e){
        case o.ScalarType.BOOL:
            return !1 === a;
        case o.ScalarType.STRING:
            return "" === a;
        case o.ScalarType.BYTES:
            return a instanceof Uint8Array && !a.byteLength;
        default:
            return 0 == a;
    }
};
