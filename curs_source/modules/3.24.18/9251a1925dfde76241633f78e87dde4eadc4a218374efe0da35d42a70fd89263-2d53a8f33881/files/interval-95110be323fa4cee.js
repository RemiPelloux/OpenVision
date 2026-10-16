import { require_timer } from "./timer.js";
import { require_async } from "../scheduler/async.js";
var __wakaru_require_interval_cache;
export function require_interval() {
if (__wakaru_require_interval_cache) return __wakaru_require_interval_cache;
var exports2 = {};
__wakaru_require_interval_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.interval = void 0;
var async_js_1 = require_async();
var timer_js_1 = require_timer();
function interval(period = 0, scheduler = async_js_1.asyncScheduler) {
    if (period < 0) {
        period = 0;
    }
    return (0, timer_js_1.timer)(period, period, scheduler);
}
exports2.interval = interval;

return exports2;
}
