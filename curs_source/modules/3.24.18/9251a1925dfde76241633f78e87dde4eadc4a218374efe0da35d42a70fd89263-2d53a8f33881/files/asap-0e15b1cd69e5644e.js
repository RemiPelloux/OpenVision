import { require_AsapAction } from "./AsapAction.js";
import { require_AsapScheduler } from "./AsapScheduler.js";
var __wakaru_require_asap_cache;
export function require_asap() {
if (__wakaru_require_asap_cache) return __wakaru_require_asap_cache;
var exports2 = {};
__wakaru_require_asap_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.asapScheduler = void 0;
var AsapAction_js_1 = require_AsapAction();
var AsapScheduler_js_1 = require_AsapScheduler();
exports2.asapScheduler = new AsapScheduler_js_1.AsapScheduler(AsapAction_js_1.AsapAction);

return exports2;
}
