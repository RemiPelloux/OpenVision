var __wakaru_require_http2Override_cache;
export function require_http2Override() {
if (__wakaru_require_http2Override_cache) return __wakaru_require_http2Override_cache;
var exports2 = {};
__wakaru_require_http2Override_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.replaceBaseUrlWithApi2 = replaceBaseUrlWithApi2;
exports2.isBaseUrlHttp2 = isBaseUrlHttp2;
function replaceBaseUrlWithApi2(baseUrl) {
    baseUrl = baseUrl.replace("api3.cursor.sh", "api2.cursor.sh");
    baseUrl = baseUrl.replace("api4.cursor.sh", "api2.cursor.sh");
    baseUrl = baseUrl.replace(/^https:\/\/.*\.gcpp\.cursor\.sh/, "https://api2.cursor.sh");
    baseUrl = baseUrl.replace(/^https:\/\/.*\.api5\.cursor\.sh/, "https://api2.cursor.sh");
    return baseUrl;
}
function isBaseUrlHttp2(baseUrl) {
    return baseUrl.includes("api3.cursor.sh") || baseUrl.includes("api4.cursor.sh") || baseUrl.includes("gcpp.cursor.sh") || baseUrl.includes("api5.cursor.sh");
}

return exports2;
}
