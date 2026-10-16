import { require_code } from "../code.js";
import { require_connect_error } from "../connect-error.js";
var __wakaru_require_parse_timeout_cache;
export function require_parse_timeout() {
if (__wakaru_require_parse_timeout_cache) return __wakaru_require_parse_timeout_cache;
var exports2 = {};
__wakaru_require_parse_timeout_cache = exports2;
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
    const results = /^(\d{1,8})([HMSmun])$/.exec(value);
    if (results === null) {
        return {
            error: new connect_error_js_1.ConnectError(`protocol error: invalid grpc timeout value: ${value}`, code_js_1.Code.InvalidArgument)
        };
    }
    const unitToMultiplicand = {
        H: 60 * 60 * 1e3,
        M: 60 * 1e3,
        S: 1e3,
        m: 1,
        u: 1e-3,
        n: 1e-6
    };
    const timeoutMs = unitToMultiplicand[results[2]] * parseInt(results[1]);
    if (timeoutMs > maxTimeoutMs) {
        return {
            timeoutMs,
            error: new connect_error_js_1.ConnectError(`timeout ${timeoutMs}ms must be <= ${maxTimeoutMs}`, code_js_1.Code.InvalidArgument)
        };
    }
    return {
        timeoutMs
    };
}

return exports2;
}
