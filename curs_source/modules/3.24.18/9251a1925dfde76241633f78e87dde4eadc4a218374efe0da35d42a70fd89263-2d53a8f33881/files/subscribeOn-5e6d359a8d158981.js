import { require_Observable } from "../Observable.js";
var __wakaru_require_subscribeOn_cache;
export function require_subscribeOn() {
if (__wakaru_require_subscribeOn_cache) return __wakaru_require_subscribeOn_cache;
var exports2 = {};
__wakaru_require_subscribeOn_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.subscribeOn = void 0;
var Observable_js_1 = require_Observable();
function subscribeOn(scheduler, delay3 = 0) {
    return (source)=>new Observable_js_1.Observable((subscriber)=>{
            subscriber.add(scheduler.schedule(()=>source.subscribe(subscriber), delay3));
        });
}
exports2.subscribeOn = subscribeOn;

return exports2;
}
