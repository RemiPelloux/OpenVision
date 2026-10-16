import { require_Observable } from "../Observable.js";
import { require_noop } from "../util/noop.js";
var __wakaru_require_never_cache;
export function require_never() {
if (__wakaru_require_never_cache) return __wakaru_require_never_cache;
var exports2 = {};
__wakaru_require_never_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.NEVER = void 0;
var Observable_js_1 = require_Observable();
var noop_js_1 = require_noop();
exports2.NEVER = new Observable_js_1.Observable(noop_js_1.noop);

return exports2;
}
