import { require_react_production } from "./cjs/react.production.js";
var __wakaru_require_react_cache;
export function require_react() {
if (__wakaru_require_react_cache) return __wakaru_require_react_cache.exports;
var e = {};
var n = { exports: e };
__wakaru_require_react_cache = n;
"use strict";
n.exports = require_react_production();

return n.exports;
}
