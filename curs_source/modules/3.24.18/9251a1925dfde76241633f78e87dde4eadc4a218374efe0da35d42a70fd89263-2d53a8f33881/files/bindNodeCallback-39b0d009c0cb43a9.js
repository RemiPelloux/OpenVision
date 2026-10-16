import { require_bindCallbackInternals } from "./bindCallbackInternals.js";
var __wakaru_require_bindNodeCallback_cache;
export function require_bindNodeCallback() {
if (__wakaru_require_bindNodeCallback_cache) return __wakaru_require_bindNodeCallback_cache;
var exports2 = {};
__wakaru_require_bindNodeCallback_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.bindNodeCallback = void 0;
var bindCallbackInternals_js_1 = require_bindCallbackInternals();
function bindNodeCallback(callbackFunc, resultSelector, scheduler) {
    return (0, bindCallbackInternals_js_1.bindCallbackInternals)(true, callbackFunc, resultSelector, scheduler);
}
exports2.bindNodeCallback = bindNodeCallback;

return exports2;
}
