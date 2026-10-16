var __wakaru_require_headers4_cache;
export function require_headers4() {
if (__wakaru_require_headers4_cache) return __wakaru_require_headers4_cache;
var exports2 = {};
__wakaru_require_headers4_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.headerUserAgent = exports2.headerProtocolVersion = exports2.headerTimeout = exports2.headerStreamAcceptEncoding = exports2.headerUnaryAcceptEncoding = exports2.headerStreamEncoding = exports2.headerUnaryEncoding = exports2.headerUnaryContentLength = exports2.headerContentType = void 0;
exports2.headerContentType = "Content-Type";
exports2.headerUnaryContentLength = "Content-Length";
exports2.headerUnaryEncoding = "Content-Encoding";
exports2.headerStreamEncoding = "Connect-Content-Encoding";
exports2.headerUnaryAcceptEncoding = "Accept-Encoding";
exports2.headerStreamAcceptEncoding = "Connect-Accept-Encoding";
exports2.headerTimeout = "Connect-Timeout-Ms";
exports2.headerProtocolVersion = "Connect-Protocol-Version";
exports2.headerUserAgent = "User-Agent";

return exports2;
}
