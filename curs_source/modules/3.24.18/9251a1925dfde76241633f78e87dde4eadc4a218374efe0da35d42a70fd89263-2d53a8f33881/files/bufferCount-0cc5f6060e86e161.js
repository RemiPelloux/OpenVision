import { require_Observable } from "../Observable.js";
import { require_arrRemove } from "../util/arrRemove.js";
var __wakaru_require_bufferCount_cache;
export function require_bufferCount() {
if (__wakaru_require_bufferCount_cache) return __wakaru_require_bufferCount_cache;
var exports2 = {};
__wakaru_require_bufferCount_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.bufferCount = void 0;
var Observable_js_1 = require_Observable();
var arrRemove_js_1 = require_arrRemove();
function bufferCount(bufferSize, startBufferEvery = null) {
    startBufferEvery = startBufferEvery ?? bufferSize;
    return (source)=>new Observable_js_1.Observable((destination)=>{
            let buffers = [];
            let count2 = 0;
            source.subscribe((0, Observable_js_1.operate)({
                destination,
                next: (value)=>{
                    let toEmit = null;
                    if (count2++ % startBufferEvery === 0) {
                        buffers.push([]);
                    }
                    for (const buffer of buffers){
                        buffer.push(value);
                        if (bufferSize <= buffer.length) {
                            toEmit = toEmit ?? [];
                            toEmit.push(buffer);
                        }
                    }
                    if (toEmit) {
                        for (const buffer of toEmit){
                            (0, arrRemove_js_1.arrRemove)(buffers, buffer);
                            destination.next(buffer);
                        }
                    }
                },
                complete: ()=>{
                    for (const buffer of buffers){
                        destination.next(buffer);
                    }
                    destination.complete();
                },
                finalize: ()=>{
                    buffers = null;
                }
            }));
        });
}
exports2.bufferCount = bufferCount;

return exports2;
}
