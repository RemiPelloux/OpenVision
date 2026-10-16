import { require_Observable } from "../Observable.js";
import { require_isScheduler } from "./isScheduler.js";
var __wakaru_require_args_cache;
export function require_args() {
if (__wakaru_require_args_cache) return __wakaru_require_args_cache;
var exports2 = {};
__wakaru_require_args_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.popNumber = exports2.popScheduler = exports2.popResultSelector = void 0;
var Observable_js_1 = require_Observable();
var isScheduler_js_1 = require_isScheduler();
function last(arr) {
    return arr[arr.length - 1];
}
function popResultSelector(args) {
    return (0, Observable_js_1.isFunction)(last(args)) ? args.pop() : void 0;
}
exports2.popResultSelector = popResultSelector;
function popScheduler(args) {
    return (0, isScheduler_js_1.isScheduler)(last(args)) ? args.pop() : void 0;
}
exports2.popScheduler = popScheduler;
function popNumber(args, defaultValue) {
    return typeof last(args) === "number" ? args.pop() : defaultValue;
}
exports2.popNumber = popNumber;

return exports2;
}
