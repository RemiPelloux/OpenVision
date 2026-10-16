import { require_code } from "../code.js";
var __wakaru_require_http_status2_cache;
export function require_http_status2() {
if (__wakaru_require_http_status2_cache) return __wakaru_require_http_status2_cache;
var exports2 = {};
__wakaru_require_http_status2_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.codeFromHttpStatus = codeFromHttpStatus2;
var code_js_1 = require_code();
function codeFromHttpStatus2(httpStatus) {
    switch(httpStatus){
        case 400:
            return code_js_1.Code.Internal;
        case 401:
            return code_js_1.Code.Unauthenticated;
        case 403:
            return code_js_1.Code.PermissionDenied;
        case 404:
            return code_js_1.Code.Unimplemented;
        case 429:
            return code_js_1.Code.Unavailable;
        case 502:
            return code_js_1.Code.Unavailable;
        case 503:
            return code_js_1.Code.Unavailable;
        case 504:
            return code_js_1.Code.Unavailable;
        default:
            return code_js_1.Code.Unknown;
    }
}

return exports2;
}
