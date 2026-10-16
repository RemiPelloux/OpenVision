import { require_Observable } from "../Observable.js";
import { require_arrRemove } from "../util/arrRemove.js";
import { require_noop } from "../util/noop.js";
var __wakaru_require_bufferToggle_cache;
export function require_bufferToggle() {
if (__wakaru_require_bufferToggle_cache) return __wakaru_require_bufferToggle_cache;
var exports2 = {};
__wakaru_require_bufferToggle_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.bufferToggle = void 0;
var Observable_js_1 = require_Observable();
var noop_js_1 = require_noop();
var arrRemove_js_1 = require_arrRemove();
function bufferToggle(openings, closingSelector) {
    return (source)=>new Observable_js_1.Observable((destination)=>{
            const buffers = [];
            (0, Observable_js_1.from)(openings).subscribe((0, Observable_js_1.operate)({
                destination,
                next: (openValue)=>{
                    const buffer = [];
                    buffers.push(buffer);
                    const closingSubscription = new Observable_js_1.Subscription();
                    const emitBuffer = ()=>{
                        (0, arrRemove_js_1.arrRemove)(buffers, buffer);
                        destination.next(buffer);
                        closingSubscription.unsubscribe();
                    };
                    closingSubscription.add((0, Observable_js_1.from)(closingSelector(openValue)).subscribe((0, Observable_js_1.operate)({
                        destination,
                        next: emitBuffer,
                        complete: noop_js_1.noop
                    })));
                },
                complete: noop_js_1.noop
            }));
            source.subscribe((0, Observable_js_1.operate)({
                destination,
                next: (value)=>{
                    for (const buffer of buffers){
                        buffer.push(value);
                    }
                },
                complete: ()=>{
                    while(buffers.length > 0){
                        destination.next(buffers.shift());
                    }
                    destination.complete();
                }
            }));
        });
}
exports2.bufferToggle = bufferToggle;

return exports2;
}
