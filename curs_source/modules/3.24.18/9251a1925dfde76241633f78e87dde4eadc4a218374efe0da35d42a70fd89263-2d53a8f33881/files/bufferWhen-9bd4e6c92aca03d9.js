import { require_Observable } from "../Observable.js";
import { require_noop } from "../util/noop.js";
var __wakaru_require_bufferWhen_cache;
export function require_bufferWhen() {
if (__wakaru_require_bufferWhen_cache) return __wakaru_require_bufferWhen_cache;
var exports2 = {};
__wakaru_require_bufferWhen_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.bufferWhen = void 0;
var Observable_js_1 = require_Observable();
var noop_js_1 = require_noop();
function bufferWhen(closingSelector) {
    return (source)=>new Observable_js_1.Observable((subscriber)=>{
            let buffer = null;
            let closingSubscriber = null;
            const openBuffer = ()=>{
                closingSubscriber?.unsubscribe();
                const b2 = buffer;
                buffer = [];
                b2 && subscriber.next(b2);
                (0, Observable_js_1.from)(closingSelector()).subscribe(closingSubscriber = (0, Observable_js_1.operate)({
                    destination: subscriber,
                    next: openBuffer,
                    complete: noop_js_1.noop
                }));
            };
            openBuffer();
            source.subscribe((0, Observable_js_1.operate)({
                destination: subscriber,
                next: (value)=>buffer?.push(value),
                complete: ()=>{
                    buffer && subscriber.next(buffer);
                    subscriber.complete();
                },
                finalize: ()=>buffer = closingSubscriber = null
            }));
        });
}
exports2.bufferWhen = bufferWhen;

return exports2;
}
