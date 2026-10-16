import { require_AsyncScheduler } from "./AsyncScheduler.js";
var __wakaru_require_QueueScheduler_cache;
export function require_QueueScheduler() {
if (__wakaru_require_QueueScheduler_cache) return __wakaru_require_QueueScheduler_cache;
var exports2 = {};
__wakaru_require_QueueScheduler_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.QueueScheduler = void 0;
var AsyncScheduler_js_1 = require_AsyncScheduler();
var QueueScheduler = class extends AsyncScheduler_js_1.AsyncScheduler {
};
exports2.QueueScheduler = QueueScheduler;

return exports2;
}
