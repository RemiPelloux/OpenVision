import { require_Observable } from "../Observable.js";
import { require_filter } from "../operators/filter.js";
import { require_not } from "../util/not.js";
var __wakaru_require_partition_cache;
export function require_partition() {
if (__wakaru_require_partition_cache) return __wakaru_require_partition_cache;
var exports2 = {};
__wakaru_require_partition_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.partition = void 0;
var not_js_1 = require_not();
var filter_js_1 = require_filter();
var Observable_js_1 = require_Observable();
function partition2(source, predicate, thisArg) {
    return [
        (0, filter_js_1.filter)(predicate, thisArg)((0, Observable_js_1.from)(source)),
        (0, filter_js_1.filter)((0, not_js_1.not)(predicate, thisArg))((0, Observable_js_1.from)(source))
    ];
}
exports2.partition = partition2;

return exports2;
}
