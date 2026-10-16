import { require_scheduler_production } from "./cjs/scheduler.production.js";
var __wakaru_require_scheduler_cache;
export function require_scheduler() {
if (__wakaru_require_scheduler_cache) return __wakaru_require_scheduler_cache.exports;
var e = {};
var n = { exports: e };
__wakaru_require_scheduler_cache = n;
"use strict";
n.exports = require_scheduler_production();

return n.exports;
}
