import { require_buffer2 } from "./buffer.js";
var __wakaru_require_jwt_cache;
export function require_jwt() {
if (__wakaru_require_jwt_cache) return __wakaru_require_jwt_cache;
var exports2 = {};
__wakaru_require_jwt_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.willAccessTokenExpireSoon = willAccessTokenExpireSoon;
var buffer_js_1 = require_buffer2();
var EXPIRATION_MS_LEEWAY = (60 - 7) * 24 * 60 * 60 * 1e3;
function willAccessTokenExpireSoon(accessToken) {
    try {
        const now2 = new Date();
        const decoded = (0, buffer_js_1.decodeJwt)(accessToken);
        const expirationDate = new Date(decoded.exp * 1e3);
        if (expirationDate.getTime() < now2.getTime() - EXPIRATION_MS_LEEWAY) {
            return true;
        }
    } catch (e) {}
    return false;
}

return exports2;
}
