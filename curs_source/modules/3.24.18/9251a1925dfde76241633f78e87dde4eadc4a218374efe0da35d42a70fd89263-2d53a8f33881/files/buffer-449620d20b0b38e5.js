import { require_Observable } from "../Observable.js";
import { require_noop } from "../util/noop.js";
var __wakaru_require_buffer_cache;
export function require_buffer() {
if (__wakaru_require_buffer_cache) return __wakaru_require_buffer_cache;
var exports2 = {};
__wakaru_require_buffer_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.buffer = void 0;
var Observable_js_1 = require_Observable();
var noop_js_1 = require_noop();
function buffer(closingNotifier) {
    return (source)=>new Observable_js_1.Observable((destination)=>{
            let currentBuffer = [];
            (0, Observable_js_1.from)(closingNotifier).subscribe((0, Observable_js_1.operate)({
                destination,
                next: ()=>{
                    const b2 = currentBuffer;
                    currentBuffer = [];
                    destination.next(b2);
                },
                complete: noop_js_1.noop
            }));
            source.subscribe((0, Observable_js_1.operate)({
                destination,
                next: (value)=>currentBuffer.push(value),
                complete: ()=>{
                    destination.next(currentBuffer);
                    destination.complete();
                }
            }));
            return ()=>{
                currentBuffer = null;
            };
        });
}
exports2.buffer = buffer;

return exports2;
}
