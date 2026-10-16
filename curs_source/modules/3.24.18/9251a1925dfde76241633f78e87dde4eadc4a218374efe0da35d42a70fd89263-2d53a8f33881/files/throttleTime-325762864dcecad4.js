import { require_timer } from "../observable/timer.js";
import { require_throttle } from "./throttle.js";
import { require_async } from "../scheduler/async.js";
var __wakaru_require_throttleTime_cache;
export function require_throttleTime() {
if (__wakaru_require_throttleTime_cache) return __wakaru_require_throttleTime_cache;
var exports2 = {};
__wakaru_require_throttleTime_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.throttleTime = void 0;
var async_js_1 = require_async();
var throttle_js_1 = require_throttle();
var timer_js_1 = require_timer();
function throttleTime(duration3, scheduler = async_js_1.asyncScheduler, config2) {
    const duration$ = (0, timer_js_1.timer)(duration3, scheduler);
    return (0, throttle_js_1.throttle)(()=>duration$, config2);
}
exports2.throttleTime = throttleTime;

return exports2;
}
