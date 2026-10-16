import { require_bindCallbackInternals } from "./bindCallbackInternals.js";
var __wakaru_require_bindCallback_cache;
export function require_bindCallback() {
if (__wakaru_require_bindCallback_cache) return __wakaru_require_bindCallback_cache;
var exports2 = {};
__wakaru_require_bindCallback_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.bindCallback = void 0;
var bindCallbackInternals_js_1 = require_bindCallbackInternals();
function bindCallback(callbackFunc, resultSelector, scheduler) {
    return (0, bindCallbackInternals_js_1.bindCallbackInternals)(false, callbackFunc, resultSelector, scheduler);
}
exports2.bindCallback = bindCallback;

return exports2;
}
