import { require_interval } from "../observable/interval.js";
import { require_sample } from "./sample.js";
import { require_async } from "../scheduler/async.js";
var __wakaru_require_sampleTime_cache;
export function require_sampleTime() {
if (__wakaru_require_sampleTime_cache) return __wakaru_require_sampleTime_cache;
var exports2 = {};
__wakaru_require_sampleTime_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.sampleTime = void 0;
var async_js_1 = require_async();
var sample_js_1 = require_sample();
var interval_js_1 = require_interval();
function sampleTime(period, scheduler = async_js_1.asyncScheduler) {
    return (0, sample_js_1.sample)((0, interval_js_1.interval)(period, scheduler));
}
exports2.sampleTime = sampleTime;

return exports2;
}
