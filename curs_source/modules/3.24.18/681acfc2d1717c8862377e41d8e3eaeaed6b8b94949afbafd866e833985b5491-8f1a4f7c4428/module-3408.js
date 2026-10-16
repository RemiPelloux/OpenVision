"use strict";
var A, n;
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.LongType = exports.ScalarType = void 0, function(e) {
    e[e.DOUBLE = 1] = "DOUBLE", e[e.FLOAT = 2] = "FLOAT", e[e.INT64 = 3] = "INT64", e[e.UINT64 = 4] = "UINT64", e[e.INT32 = 5] = "INT32", e[e.FIXED64 = 6] = "FIXED64", e[e.FIXED32 = 7] = "FIXED32", e[e.BOOL = 8] = "BOOL", e[e.STRING = 9] = "STRING", e[e.BYTES = 12] = "BYTES", e[e.UINT32 = 13] = "UINT32", e[e.SFIXED32 = 15] = "SFIXED32", e[e.SFIXED64 = 16] = "SFIXED64", e[e.SINT32 = 17] = "SINT32", e[e.SINT64 = 18] = "SINT64";
}(A || (exports.ScalarType = A = {})), function(e) {
    e[e.BIGINT = 0] = "BIGINT", e[e.STRING = 1] = "STRING";
}(n || (exports.LongType = n = {}));
