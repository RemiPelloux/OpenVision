"use strict";
var r, n;
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.LongType = exports.ScalarType = void 0, function(t) {
    t[t.DOUBLE = 1] = "DOUBLE", t[t.FLOAT = 2] = "FLOAT", t[t.INT64 = 3] = "INT64", t[t.UINT64 = 4] = "UINT64", t[t.INT32 = 5] = "INT32", t[t.FIXED64 = 6] = "FIXED64", t[t.FIXED32 = 7] = "FIXED32", t[t.BOOL = 8] = "BOOL", t[t.STRING = 9] = "STRING", t[t.BYTES = 12] = "BYTES", t[t.UINT32 = 13] = "UINT32", t[t.SFIXED32 = 15] = "SFIXED32", t[t.SFIXED64 = 16] = "SFIXED64", t[t.SINT32 = 17] = "SINT32", t[t.SINT64 = 18] = "SINT64";
}(r || (exports.ScalarType = r = {})), function(t) {
    t[t.BIGINT = 0] = "BIGINT", t[t.STRING = 1] = "STRING";
}(n || (exports.LongType = n = {}));
