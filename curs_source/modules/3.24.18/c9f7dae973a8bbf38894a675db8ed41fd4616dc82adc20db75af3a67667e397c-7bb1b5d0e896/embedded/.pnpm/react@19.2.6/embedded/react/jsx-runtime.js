import { require_react_jsx_runtime_production } from "./cjs/react-jsx-runtime.production.js";
var __wakaru_require_jsx_runtime_cache;
export function require_jsx_runtime() {
if (__wakaru_require_jsx_runtime_cache) return __wakaru_require_jsx_runtime_cache.exports;
var e = {};
var n = { exports: e };
__wakaru_require_jsx_runtime_cache = n;
"use strict";
n.exports = require_react_jsx_runtime_production();

return n.exports;
}
