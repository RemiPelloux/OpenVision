import { require_fast_uri } from "../../../../../fast-uri@3.1.8/node_modules/fast-uri/index.js";
var __wakaru_require_uri_cache;
export function require_uri() {
if (__wakaru_require_uri_cache) return __wakaru_require_uri_cache;
var exports2 = {};
__wakaru_require_uri_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
var uri = require_fast_uri();
uri.code = 'require("ajv/dist/runtime/uri").default';
exports2.default = uri;

return exports2;
}
