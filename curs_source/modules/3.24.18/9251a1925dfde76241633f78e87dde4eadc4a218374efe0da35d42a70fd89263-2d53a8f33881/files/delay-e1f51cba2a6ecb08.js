import { require_timer } from "../observable/timer.js";
import { require_delayWhen } from "./delayWhen.js";
import { require_async } from "../scheduler/async.js";
var __wakaru_require_delay_cache;
export function require_delay() {
if (__wakaru_require_delay_cache) return __wakaru_require_delay_cache;
var exports2 = {};
__wakaru_require_delay_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.delay = void 0;
var async_js_1 = require_async();
var delayWhen_js_1 = require_delayWhen();
var timer_js_1 = require_timer();
function delay3(due, scheduler = async_js_1.asyncScheduler) {
    const duration3 = (0, timer_js_1.timer)(due, scheduler);
    return (0, delayWhen_js_1.delayWhen)(()=>duration3);
}
exports2.delay = delay3;

return exports2;
}
