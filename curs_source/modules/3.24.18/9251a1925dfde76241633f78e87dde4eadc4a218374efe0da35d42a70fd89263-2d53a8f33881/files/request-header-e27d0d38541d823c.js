import { require_content_type2 } from "./content-type.js";
import { require_headers2 } from "./headers.js";
var __wakaru_require_request_header3_cache;
export function require_request_header3() {
if (__wakaru_require_request_header3_cache) return __wakaru_require_request_header3_cache;
var exports2 = {};
__wakaru_require_request_header3_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.requestHeader = requestHeader2;
exports2.requestHeaderWithCompression = requestHeaderWithCompression2;
var headers_js_1 = require_headers2();
var content_type_js_1 = require_content_type2();
function requestHeader2(useBinaryFormat, timeoutMs, userProvidedHeaders) {
    const result = new Headers(userProvidedHeaders !== null && userProvidedHeaders !== void 0 ? userProvidedHeaders : {});
    result.set(headers_js_1.headerContentType, useBinaryFormat ? content_type_js_1.contentTypeProto : content_type_js_1.contentTypeJson);
    result.set(headers_js_1.headerUserAgent, "connect-es/1.6.1");
    if (timeoutMs !== void 0) {
        result.set(headers_js_1.headerTimeout, `${timeoutMs}m`);
    }
    result.set("Te", "trailers");
    return result;
}
function requestHeaderWithCompression2(useBinaryFormat, timeoutMs, userProvidedHeaders, acceptCompression, sendCompression) {
    const result = requestHeader2(useBinaryFormat, timeoutMs, userProvidedHeaders);
    if (sendCompression != null) {
        result.set(headers_js_1.headerEncoding, sendCompression.name);
    }
    if (acceptCompression.length > 0) {
        result.set(headers_js_1.headerAcceptEncoding, acceptCompression.map((c)=>c.name).join(","));
    }
    return result;
}

return exports2;
}
