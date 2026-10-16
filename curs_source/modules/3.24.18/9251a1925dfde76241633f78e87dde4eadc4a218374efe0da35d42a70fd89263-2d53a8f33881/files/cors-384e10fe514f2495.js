import { require_headers4 } from "./protocol-connect/headers.js";
import { require_headers3 } from "./protocol-grpc-web/headers.js";
import { require_headers2 } from "./protocol-grpc/headers.js";
var __wakaru_require_cors_cache;
export function require_cors() {
if (__wakaru_require_cors_cache) return __wakaru_require_cors_cache;
var exports2 = {};
__wakaru_require_cors_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.cors = void 0;
var connect3 = require_headers4();
var grpc = require_headers2();
var grpcWeb = require_headers3();
exports2.cors = {
    allowedMethods: [
        "POST",
        "GET"
    ],
    allowedHeaders: [
        connect3.headerContentType,
        connect3.headerProtocolVersion,
        connect3.headerTimeout,
        connect3.headerStreamEncoding,
        connect3.headerStreamAcceptEncoding,
        connect3.headerUnaryEncoding,
        connect3.headerUnaryAcceptEncoding,
        grpc.headerMessageType,
        grpcWeb.headerXGrpcWeb,
        grpcWeb.headerXUserAgent,
        grpcWeb.headerTimeout
    ],
    exposedHeaders: [
        grpcWeb.headerGrpcStatus,
        grpcWeb.headerGrpcMessage,
        grpcWeb.headerStatusDetailsBin,
        connect3.headerUnaryEncoding,
        connect3.headerStreamEncoding
    ]
};

return exports2;
}
