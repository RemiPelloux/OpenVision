import { require_QueueAction } from "./QueueAction.js";
import { require_QueueScheduler } from "./QueueScheduler.js";
var __wakaru_require_queue_cache;
export function require_queue() {
if (__wakaru_require_queue_cache) return __wakaru_require_queue_cache;
var exports2 = {};
__wakaru_require_queue_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.queueScheduler = void 0;
var QueueAction_js_1 = require_QueueAction();
var QueueScheduler_js_1 = require_QueueScheduler();
exports2.queueScheduler = new QueueScheduler_js_1.QueueScheduler(QueueAction_js_1.QueueAction);

return exports2;
}
