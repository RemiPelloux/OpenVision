var __wakaru_require_scalar_cache;
export function require_scalar() {
if (__wakaru_require_scalar_cache) return __wakaru_require_scalar_cache;
var exports2 = {};
__wakaru_require_scalar_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.LongType = exports2.ScalarType = void 0;
var ScalarType2;
(function(ScalarType3) {
    ScalarType3[ScalarType3["DOUBLE"] = 1] = "DOUBLE";
    ScalarType3[ScalarType3["FLOAT"] = 2] = "FLOAT";
    ScalarType3[ScalarType3["INT64"] = 3] = "INT64";
    ScalarType3[ScalarType3["UINT64"] = 4] = "UINT64";
    ScalarType3[ScalarType3["INT32"] = 5] = "INT32";
    ScalarType3[ScalarType3["FIXED64"] = 6] = "FIXED64";
    ScalarType3[ScalarType3["FIXED32"] = 7] = "FIXED32";
    ScalarType3[ScalarType3["BOOL"] = 8] = "BOOL";
    ScalarType3[ScalarType3["STRING"] = 9] = "STRING";
    ScalarType3[ScalarType3["BYTES"] = 12] = "BYTES";
    ScalarType3[ScalarType3["UINT32"] = 13] = "UINT32";
    ScalarType3[ScalarType3["SFIXED32"] = 15] = "SFIXED32";
    ScalarType3[ScalarType3["SFIXED64"] = 16] = "SFIXED64";
    ScalarType3[ScalarType3["SINT32"] = 17] = "SINT32";
    ScalarType3[ScalarType3["SINT64"] = 18] = "SINT64";
})(ScalarType2 || (exports2.ScalarType = ScalarType2 = {}));
var LongType2;
(function(LongType3) {
    LongType3[LongType3["BIGINT"] = 0] = "BIGINT";
    LongType3[LongType3["STRING"] = 1] = "STRING";
})(LongType2 || (exports2.LongType = LongType2 = {}));

return exports2;
}
