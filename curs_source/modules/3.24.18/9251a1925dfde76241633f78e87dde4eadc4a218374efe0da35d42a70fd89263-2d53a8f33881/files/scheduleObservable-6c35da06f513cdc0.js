import { require_Observable } from "../Observable.js";
import { require_observeOn } from "../operators/observeOn.js";
import { require_subscribeOn } from "../operators/subscribeOn.js";
var __wakaru_require_scheduleObservable_cache;
export function require_scheduleObservable() {
if (__wakaru_require_scheduleObservable_cache) return __wakaru_require_scheduleObservable_cache;
var exports2 = {};
__wakaru_require_scheduleObservable_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.scheduleObservable = void 0;
var Observable_js_1 = require_Observable();
var observeOn_js_1 = require_observeOn();
var subscribeOn_js_1 = require_subscribeOn();
function scheduleObservable(input, scheduler) {
    return (0, Observable_js_1.from)(input).pipe((0, subscribeOn_js_1.subscribeOn)(scheduler), (0, observeOn_js_1.observeOn)(scheduler));
}
exports2.scheduleObservable = scheduleObservable;

return exports2;
}
