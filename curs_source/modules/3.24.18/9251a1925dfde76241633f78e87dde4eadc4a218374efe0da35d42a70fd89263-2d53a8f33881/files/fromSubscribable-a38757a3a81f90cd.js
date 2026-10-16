import { require_Observable } from "../Observable.js";
var __wakaru_require_fromSubscribable_cache;
export function require_fromSubscribable() {
if (__wakaru_require_fromSubscribable_cache) return __wakaru_require_fromSubscribable_cache;
var exports2 = {};
__wakaru_require_fromSubscribable_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.fromSubscribable = void 0;
var Observable_js_1 = require_Observable();
function fromSubscribable(subscribable) {
    return new Observable_js_1.Observable((subscriber)=>subscribable.subscribe(subscriber));
}
exports2.fromSubscribable = fromSubscribable;

return exports2;
}
