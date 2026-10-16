var __wakaru_require_headers2_cache;
export function require_headers2() {
if (__wakaru_require_headers2_cache) return __wakaru_require_headers2_cache;
var exports2 = {};
__wakaru_require_headers2_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.headerUserAgent = exports2.headerMessageType = exports2.headerStatusDetailsBin = exports2.headerGrpcMessage = exports2.headerGrpcStatus = exports2.headerTimeout = exports2.headerAcceptEncoding = exports2.headerEncoding = exports2.headerContentType = void 0;
exports2.headerContentType = "Content-Type";
exports2.headerEncoding = "Grpc-Encoding";
exports2.headerAcceptEncoding = "Grpc-Accept-Encoding";
exports2.headerTimeout = "Grpc-Timeout";
exports2.headerGrpcStatus = "Grpc-Status";
exports2.headerGrpcMessage = "Grpc-Message";
exports2.headerStatusDetailsBin = "Grpc-Status-Details-Bin";
exports2.headerMessageType = "Grpc-Message-Type";
exports2.headerUserAgent = "User-Agent";

return exports2;
}
