import { require_undici } from "../../../../../../undici@5.29.0/node_modules/undici/index.js";
var __wakaru_require_node_headers_polyfill_cache;
export function require_node_headers_polyfill() {
if (__wakaru_require_node_headers_polyfill_cache) return __wakaru_require_node_headers_polyfill_cache;
var exports2 = {};
__wakaru_require_node_headers_polyfill_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
var undici_1 = require_undici();
var [major3] = process.versions.node.split(".").map((value)=>parseInt(value, 10));
if (major3 < 18) {
    if (typeof globalThis.Headers === "undefined") {
        globalThis.Headers = undici_1.Headers;
    }
}

return exports2;
}
