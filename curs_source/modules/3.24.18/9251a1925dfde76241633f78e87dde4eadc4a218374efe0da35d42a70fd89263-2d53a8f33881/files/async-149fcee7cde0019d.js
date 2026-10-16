import { require_AsyncAction } from "./AsyncAction.js";
import { require_AsyncScheduler } from "./AsyncScheduler.js";
var __wakaru_require_async_cache;
export function require_async() {
if (__wakaru_require_async_cache) return __wakaru_require_async_cache;
var exports2 = {};
__wakaru_require_async_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.asyncScheduler = void 0;
var AsyncAction_js_1 = require_AsyncAction();
var AsyncScheduler_js_1 = require_AsyncScheduler();
exports2.asyncScheduler = new AsyncScheduler_js_1.AsyncScheduler(AsyncAction_js_1.AsyncAction);

return exports2;
}
