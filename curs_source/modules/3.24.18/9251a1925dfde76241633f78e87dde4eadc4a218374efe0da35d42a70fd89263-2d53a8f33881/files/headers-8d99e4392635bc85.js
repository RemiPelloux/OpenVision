import { require_headers2 } from "../protocol-grpc/headers.js";
var __wakaru_require_headers3_cache;
export function require_headers3() {
if (__wakaru_require_headers3_cache) return __wakaru_require_headers3_cache;
var exports2 = {};
__wakaru_require_headers3_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.headerXGrpcWeb = exports2.headerXUserAgent = exports2.headerUserAgent = exports2.headerStatusDetailsBin = exports2.headerGrpcMessage = exports2.headerGrpcStatus = exports2.headerTimeout = exports2.headerAcceptEncoding = exports2.headerEncoding = exports2.headerContentType = void 0;
var headers_js_1 = require_headers2();
Object.defineProperty(exports2, "headerContentType", {
    enumerable: true,
    get: function() {
        return headers_js_1.headerContentType;
    }
});
Object.defineProperty(exports2, "headerEncoding", {
    enumerable: true,
    get: function() {
        return headers_js_1.headerEncoding;
    }
});
Object.defineProperty(exports2, "headerAcceptEncoding", {
    enumerable: true,
    get: function() {
        return headers_js_1.headerAcceptEncoding;
    }
});
Object.defineProperty(exports2, "headerTimeout", {
    enumerable: true,
    get: function() {
        return headers_js_1.headerTimeout;
    }
});
Object.defineProperty(exports2, "headerGrpcStatus", {
    enumerable: true,
    get: function() {
        return headers_js_1.headerGrpcStatus;
    }
});
Object.defineProperty(exports2, "headerGrpcMessage", {
    enumerable: true,
    get: function() {
        return headers_js_1.headerGrpcMessage;
    }
});
Object.defineProperty(exports2, "headerStatusDetailsBin", {
    enumerable: true,
    get: function() {
        return headers_js_1.headerStatusDetailsBin;
    }
});
Object.defineProperty(exports2, "headerUserAgent", {
    enumerable: true,
    get: function() {
        return headers_js_1.headerUserAgent;
    }
});
exports2.headerXUserAgent = "X-User-Agent";
exports2.headerXGrpcWeb = "X-Grpc-Web";

return exports2;
}
