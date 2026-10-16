import { require_combineLatest } from "../observable/combineLatest.js";
import { require_joinAllInternals } from "./joinAllInternals.js";
var __wakaru_require_combineLatestAll_cache;
export function require_combineLatestAll() {
if (__wakaru_require_combineLatestAll_cache) return __wakaru_require_combineLatestAll_cache;
var exports2 = {};
__wakaru_require_combineLatestAll_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.combineLatestAll = void 0;
var combineLatest_js_1 = require_combineLatest();
var joinAllInternals_js_1 = require_joinAllInternals();
function combineLatestAll(project2) {
    return (0, joinAllInternals_js_1.joinAllInternals)(combineLatest_js_1.combineLatest, project2);
}
exports2.combineLatestAll = combineLatestAll;

return exports2;
}
