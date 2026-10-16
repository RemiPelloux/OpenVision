import { require_filter } from "./filter.js";
import { require_not } from "../util/not.js";
var __wakaru_require_partition2_cache;
export function require_partition2() {
if (__wakaru_require_partition2_cache) return __wakaru_require_partition2_cache;
var exports2 = {};
__wakaru_require_partition2_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.partition = void 0;
var not_js_1 = require_not();
var filter_js_1 = require_filter();
function partition2(predicate, thisArg) {
    return (source)=>[
            (0, filter_js_1.filter)(predicate, thisArg)(source),
            (0, filter_js_1.filter)((0, not_js_1.not)(predicate, thisArg))(source)
        ];
}
exports2.partition = partition2;

return exports2;
}
