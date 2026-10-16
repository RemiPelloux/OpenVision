var __wakaru_require_content_type3_cache;
export function require_content_type3() {
if (__wakaru_require_content_type3_cache) return __wakaru_require_content_type3_cache;
var exports2 = {};
__wakaru_require_content_type3_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.contentTypeStreamJson = exports2.contentTypeStreamProto = exports2.contentTypeUnaryJson = exports2.contentTypeUnaryProto = exports2.contentTypeStreamRegExp = exports2.contentTypeUnaryRegExp = exports2.contentTypeRegExp = void 0;
exports2.parseContentType = parseContentType4;
exports2.parseEncodingQuery = parseEncodingQuery2;
exports2.contentTypeRegExp = /^application\/(connect\+)?(?:(json)(?:; ?charset=utf-?8)?|(proto))$/i;
exports2.contentTypeUnaryRegExp = /^application\/(?:json(?:; ?charset=utf-?8)?|proto)$/i;
exports2.contentTypeStreamRegExp = /^application\/connect\+?(?:json(?:; ?charset=utf-?8)?|proto)$/i;
exports2.contentTypeUnaryProto = "application/proto";
exports2.contentTypeUnaryJson = "application/json";
exports2.contentTypeStreamProto = "application/connect+proto";
exports2.contentTypeStreamJson = "application/connect+json";
var encodingProto2 = "proto";
var encodingJson2 = "json";
function parseContentType4(contentType) {
    const match2 = contentType === null || contentType === void 0 ? void 0 : contentType.match(exports2.contentTypeRegExp);
    if (!match2) {
        return void 0;
    }
    const stream3 = !!match2[1];
    const binary2 = !!match2[3];
    return {
        stream: stream3,
        binary: binary2
    };
}
function parseEncodingQuery2(encoding) {
    switch(encoding){
        case encodingProto2:
            return {
                stream: false,
                binary: true
            };
        case encodingJson2:
            return {
                stream: false,
                binary: false
            };
        default:
            return void 0;
    }
}

return exports2;
}
