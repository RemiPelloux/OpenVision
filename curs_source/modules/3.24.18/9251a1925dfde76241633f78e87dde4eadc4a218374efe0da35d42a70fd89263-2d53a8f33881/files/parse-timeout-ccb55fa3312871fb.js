import { require_code } from "../code.js";
import { require_connect_error } from "../connect-error.js";
var __wakaru_require_parse_timeout2_cache;
export function require_parse_timeout2() {
if (__wakaru_require_parse_timeout2_cache) return __wakaru_require_parse_timeout2_cache;
var exports2 = {};
__wakaru_require_parse_timeout2_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.parseTimeout = parseTimeout3;
var code_js_1 = require_code();
var connect_error_js_1 = require_connect_error();
function parseTimeout3(value, maxTimeoutMs) {
    if (value === null) {
        return {};
    }
    const results = /^\d{1,10}$/.exec(value);
    if (results === null) {
        return {
            error: new connect_error_js_1.ConnectError(`protocol error: invalid connect timeout value: ${value}`, code_js_1.Code.InvalidArgument)
        };
    }
    const timeoutMs = parseInt(results[0]);
    if (timeoutMs > maxTimeoutMs) {
        return {
            timeoutMs,
            error: new connect_error_js_1.ConnectError(`timeout ${timeoutMs}ms must be <= ${maxTimeoutMs}`, code_js_1.Code.InvalidArgument)
        };
    }
    return {
        timeoutMs: parseInt(results[0])
    };
}

return exports2;
}
