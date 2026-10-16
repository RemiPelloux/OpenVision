import { require_code } from "../code.js";
var __wakaru_require_http_status_cache;
export function require_http_status() {
if (__wakaru_require_http_status_cache) return __wakaru_require_http_status_cache;
var exports2 = {};
__wakaru_require_http_status_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.codeFromHttpStatus = codeFromHttpStatus2;
exports2.codeToHttpStatus = codeToHttpStatus2;
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
function codeToHttpStatus2(code) {
    switch(code){
        case code_js_1.Code.Canceled:
            return 499;
        case code_js_1.Code.Unknown:
            return 500;
        case code_js_1.Code.InvalidArgument:
            return 400;
        case code_js_1.Code.DeadlineExceeded:
            return 504;
        case code_js_1.Code.NotFound:
            return 404;
        case code_js_1.Code.AlreadyExists:
            return 409;
        case code_js_1.Code.PermissionDenied:
            return 403;
        case code_js_1.Code.ResourceExhausted:
            return 429;
        case code_js_1.Code.FailedPrecondition:
            return 400;
        case code_js_1.Code.Aborted:
            return 409;
        case code_js_1.Code.OutOfRange:
            return 400;
        case code_js_1.Code.Unimplemented:
            return 501;
        case code_js_1.Code.Internal:
            return 500;
        case code_js_1.Code.Unavailable:
            return 503;
        case code_js_1.Code.DataLoss:
            return 500;
        case code_js_1.Code.Unauthenticated:
            return 401;
        default:
            return 500;
    }
}

return exports2;
}
