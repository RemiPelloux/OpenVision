import { require_timeout } from "./timeout.js";
import { require_async } from "../scheduler/async.js";
import { require_isDate } from "../util/isDate.js";
var __wakaru_require_timeoutWith_cache;
export function require_timeoutWith() {
if (__wakaru_require_timeoutWith_cache) return __wakaru_require_timeoutWith_cache;
var exports2 = {};
__wakaru_require_timeoutWith_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.timeoutWith = void 0;
var async_js_1 = require_async();
var isDate_js_1 = require_isDate();
var timeout_js_1 = require_timeout();
function timeoutWith(due, withObservable, scheduler) {
    let first;
    let each;
    let _with;
    scheduler = scheduler ?? async_js_1.asyncScheduler;
    if ((0, isDate_js_1.isValidDate)(due)) {
        first = due;
    } else if (typeof due === "number") {
        each = due;
    }
    if (withObservable) {
        _with = ()=>withObservable;
    } else {
        throw new TypeError("No observable provided to switch to");
    }
    if (first == null && each == null) {
        throw new TypeError("No timeout provided.");
    }
    return (0, timeout_js_1.timeout)({
        first,
        each,
        scheduler,
        with: _with
    });
}
exports2.timeoutWith = timeoutWith;

return exports2;
}
