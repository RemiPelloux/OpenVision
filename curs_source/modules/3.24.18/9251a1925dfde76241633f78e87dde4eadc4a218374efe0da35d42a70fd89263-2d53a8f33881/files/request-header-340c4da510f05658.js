import { require_cjs2 } from "../../../../../../../_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/cjs/index.js";
import { require_content_type3 } from "./content-type.js";
import { require_headers4 } from "./headers.js";
import { require_version } from "./version.js";
var __wakaru_require_request_header_cache;
export function require_request_header() {
if (__wakaru_require_request_header_cache) return __wakaru_require_request_header_cache;
var exports2 = {};
__wakaru_require_request_header_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.requestHeader = requestHeader2;
exports2.requestHeaderWithCompression = requestHeaderWithCompression2;
var protobuf_1 = require_cjs2();
var headers_js_1 = require_headers4();
var version_js_1 = require_version();
var content_type_js_1 = require_content_type3();
function requestHeader2(methodKind, useBinaryFormat, timeoutMs, userProvidedHeaders, setUserAgent) {
    const result = new Headers(userProvidedHeaders !== null && userProvidedHeaders !== void 0 ? userProvidedHeaders : {});
    if (timeoutMs !== void 0) {
        result.set(headers_js_1.headerTimeout, `${timeoutMs}`);
    }
    result.set(headers_js_1.headerContentType, methodKind == protobuf_1.MethodKind.Unary ? useBinaryFormat ? content_type_js_1.contentTypeUnaryProto : content_type_js_1.contentTypeUnaryJson : useBinaryFormat ? content_type_js_1.contentTypeStreamProto : content_type_js_1.contentTypeStreamJson);
    result.set(headers_js_1.headerProtocolVersion, version_js_1.protocolVersion);
    if (setUserAgent) {
        result.set(headers_js_1.headerUserAgent, "connect-es/1.6.1");
    }
    return result;
}
function requestHeaderWithCompression2(methodKind, useBinaryFormat, timeoutMs, userProvidedHeaders, acceptCompression, sendCompression, setUserAgent) {
    const result = requestHeader2(methodKind, useBinaryFormat, timeoutMs, userProvidedHeaders, setUserAgent);
    if (sendCompression != null) {
        const name17 = methodKind == protobuf_1.MethodKind.Unary ? headers_js_1.headerUnaryEncoding : headers_js_1.headerStreamEncoding;
        result.set(name17, sendCompression.name);
    }
    if (acceptCompression.length > 0) {
        const name17 = methodKind == protobuf_1.MethodKind.Unary ? headers_js_1.headerUnaryAcceptEncoding : headers_js_1.headerStreamAcceptEncoding;
        result.set(name17, acceptCompression.map((c)=>c.name).join(","));
    }
    return result;
}

return exports2;
}
