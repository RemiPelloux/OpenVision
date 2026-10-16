import { require_distinctUntilChanged } from "./distinctUntilChanged.js";
var __wakaru_require_distinctUntilKeyChanged_cache;
export function require_distinctUntilKeyChanged() {
if (__wakaru_require_distinctUntilKeyChanged_cache) return __wakaru_require_distinctUntilKeyChanged_cache;
var exports2 = {};
__wakaru_require_distinctUntilKeyChanged_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.distinctUntilKeyChanged = void 0;
var distinctUntilChanged_js_1 = require_distinctUntilChanged();
function distinctUntilKeyChanged(key, compare) {
    return (0, distinctUntilChanged_js_1.distinctUntilChanged)((x, y)=>compare ? compare(x[key], y[key]) : x[key] === y[key]);
}
exports2.distinctUntilKeyChanged = distinctUntilKeyChanged;

return exports2;
}
