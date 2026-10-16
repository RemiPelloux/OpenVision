import { require_content_type } from "./content-type.js";
import { require_headers3 } from "./headers.js";
var __wakaru_require_request_header2_cache;
export function require_request_header2() {
if (__wakaru_require_request_header2_cache) return __wakaru_require_request_header2_cache;
var exports2 = {};
__wakaru_require_request_header2_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.requestHeader = requestHeader2;
exports2.requestHeaderWithCompression = requestHeaderWithCompression2;
var headers_js_1 = require_headers3();
var content_type_js_1 = require_content_type();
function requestHeader2(useBinaryFormat, timeoutMs, userProvidedHeaders, setUserAgent) {
    const result = new Headers(userProvidedHeaders !== null && userProvidedHeaders !== void 0 ? userProvidedHeaders : {});
    result.set(headers_js_1.headerContentType, useBinaryFormat ? content_type_js_1.contentTypeProto : content_type_js_1.contentTypeJson);
    result.set(headers_js_1.headerXGrpcWeb, "1");
    result.set(headers_js_1.headerXUserAgent, "connect-es/1.6.1");
    if (setUserAgent) {
        result.set(headers_js_1.headerUserAgent, "connect-es/1.6.1");
    }
    if (timeoutMs !== void 0) {
        result.set(headers_js_1.headerTimeout, `${timeoutMs}m`);
    }
    return result;
}
function requestHeaderWithCompression2(useBinaryFormat, timeoutMs, userProvidedHeaders, acceptCompression, sendCompression, setUserAgent) {
    const result = requestHeader2(useBinaryFormat, timeoutMs, userProvidedHeaders, setUserAgent);
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
