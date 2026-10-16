import { require_Observable } from "../Observable.js";
import { require_concatAll } from "../operators/concatAll.js";
import { require_scheduled } from "../scheduled/scheduled.js";
import { require_args } from "../util/args.js";
var __wakaru_require_concat_cache;
export function require_concat() {
if (__wakaru_require_concat_cache) return __wakaru_require_concat_cache;
var exports2 = {};
__wakaru_require_concat_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.concat = void 0;
var Observable_js_1 = require_Observable();
var concatAll_js_1 = require_concatAll();
var args_js_1 = require_args();
var scheduled_js_1 = require_scheduled();
function concat(...args) {
    const scheduler = (0, args_js_1.popScheduler)(args);
    return (0, concatAll_js_1.concatAll)()(scheduler ? (0, scheduled_js_1.scheduled)(args, scheduler) : (0, Observable_js_1.from)(args));
}
exports2.concat = concat;

return exports2;
}
