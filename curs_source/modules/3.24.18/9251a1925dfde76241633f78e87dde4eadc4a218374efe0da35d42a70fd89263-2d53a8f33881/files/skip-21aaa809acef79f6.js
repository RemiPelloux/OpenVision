import { require_filter } from "./filter.js";
var __wakaru_require_skip_cache;
export function require_skip() {
if (__wakaru_require_skip_cache) return __wakaru_require_skip_cache;
var exports2 = {};
__wakaru_require_skip_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.skip = void 0;
var filter_js_1 = require_filter();
function skip(count2) {
    return (0, filter_js_1.filter)((_2, index)=>count2 <= index);
}
exports2.skip = skip;

return exports2;
}
