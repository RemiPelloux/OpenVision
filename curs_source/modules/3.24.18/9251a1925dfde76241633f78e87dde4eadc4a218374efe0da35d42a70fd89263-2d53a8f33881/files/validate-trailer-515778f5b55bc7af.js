import { require_code } from "../code.js";
import { require_connect_error } from "../connect-error.js";
import { require_headers2 } from "./headers.js";
import { require_trailer_status } from "./trailer-status.js";
var __wakaru_require_validate_trailer_cache;
export function require_validate_trailer() {
if (__wakaru_require_validate_trailer_cache) return __wakaru_require_validate_trailer_cache;
var exports2 = {};
__wakaru_require_validate_trailer_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.validateTrailer = validateTrailer;
var code_js_1 = require_code();
var connect_error_js_1 = require_connect_error();
var headers_js_1 = require_headers2();
var trailer_status_js_1 = require_trailer_status();
function validateTrailer(trailer, header) {
    const err = (0, trailer_status_js_1.findTrailerError)(trailer);
    if (err) {
        header.forEach((value, key)=>{
            err.metadata.append(key, value);
        });
        throw err;
    }
    if (!header.has(headers_js_1.headerGrpcStatus) && !trailer.has(headers_js_1.headerGrpcStatus)) {
        throw new connect_error_js_1.ConnectError("protocol error: missing status", code_js_1.Code.Internal);
    }
}

return exports2;
}
