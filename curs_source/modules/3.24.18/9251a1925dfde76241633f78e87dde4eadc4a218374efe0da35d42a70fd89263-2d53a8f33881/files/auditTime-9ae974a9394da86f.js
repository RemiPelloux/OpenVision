import { require_timer } from "../observable/timer.js";
import { require_audit } from "./audit.js";
import { require_async } from "../scheduler/async.js";
var __wakaru_require_auditTime_cache;
export function require_auditTime() {
if (__wakaru_require_auditTime_cache) return __wakaru_require_auditTime_cache;
var exports2 = {};
__wakaru_require_auditTime_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.auditTime = void 0;
var async_js_1 = require_async();
var audit_js_1 = require_audit();
var timer_js_1 = require_timer();
function auditTime(duration3, scheduler = async_js_1.asyncScheduler) {
    return (0, audit_js_1.audit)(()=>(0, timer_js_1.timer)(duration3, scheduler));
}
exports2.auditTime = auditTime;

return exports2;
}
