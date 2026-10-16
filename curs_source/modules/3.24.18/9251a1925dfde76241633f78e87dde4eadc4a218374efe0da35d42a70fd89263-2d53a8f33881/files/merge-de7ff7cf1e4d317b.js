import { require_Observable } from "../Observable.js";
import { require_empty } from "./empty.js";
import { require_mergeAll } from "../operators/mergeAll.js";
import { require_scheduled } from "../scheduled/scheduled.js";
import { require_args } from "../util/args.js";
var __wakaru_require_merge_cache;
export function require_merge() {
if (__wakaru_require_merge_cache) return __wakaru_require_merge_cache;
var exports2 = {};
__wakaru_require_merge_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.merge = void 0;
var Observable_js_1 = require_Observable();
var mergeAll_js_1 = require_mergeAll();
var empty_js_1 = require_empty();
var args_js_1 = require_args();
var scheduled_js_1 = require_scheduled();
function merge4(...args) {
    const scheduler = (0, args_js_1.popScheduler)(args);
    const concurrent = (0, args_js_1.popNumber)(args, Infinity);
    const sources = args;
    return !sources.length ? empty_js_1.EMPTY : sources.length === 1 ? (0, Observable_js_1.from)(sources[0]) : (0, mergeAll_js_1.mergeAll)(concurrent)(scheduler ? (0, scheduled_js_1.scheduled)(sources, scheduler) : (0, Observable_js_1.from)(sources));
}
exports2.merge = merge4;

return exports2;
}
