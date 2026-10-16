var __wakaru_require_content_type_cache;
export function require_content_type() {
if (__wakaru_require_content_type_cache) return __wakaru_require_content_type_cache;
var exports2 = {};
__wakaru_require_content_type_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.contentTypeJson = exports2.contentTypeProto = exports2.contentTypeRegExp = void 0;
exports2.parseContentType = parseContentType4;
exports2.contentTypeRegExp = /^application\/grpc-web(-text)?(?:\+(?:(json)(?:; ?charset=utf-?8)?|proto))?$/i;
exports2.contentTypeProto = "application/grpc-web+proto";
exports2.contentTypeJson = "application/grpc-web+json";
function parseContentType4(contentType) {
    const match2 = contentType === null || contentType === void 0 ? void 0 : contentType.match(exports2.contentTypeRegExp);
    if (!match2) {
        return void 0;
    }
    const text4 = !!match2[1];
    const binary2 = !match2[2];
    return {
        text: text4,
        binary: binary2
    };
}

return exports2;
}
