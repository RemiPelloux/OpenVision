import { require_Observable } from "../Observable.js";
import { require_empty } from "../observable/empty.js";
var __wakaru_require_takeLast_cache;
export function require_takeLast() {
if (__wakaru_require_takeLast_cache) return __wakaru_require_takeLast_cache;
var exports2 = {};
__wakaru_require_takeLast_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.takeLast = void 0;
var empty_js_1 = require_empty();
var Observable_js_1 = require_Observable();
function takeLast(count2) {
    return count2 <= 0 ? ()=>empty_js_1.EMPTY : (source)=>new Observable_js_1.Observable((destination)=>{
            let ring = new Array(count2);
            let counter = 0;
            source.subscribe((0, Observable_js_1.operate)({
                destination,
                next: (value)=>{
                    ring[counter++ % count2] = value;
                },
                complete: ()=>{
                    const start = count2 <= counter ? counter : 0;
                    const total = Math.min(count2, counter);
                    for(let n = 0; n < total; n++){
                        destination.next(ring[(start + n) % count2]);
                    }
                    destination.complete();
                },
                finalize: ()=>{
                    ring = null;
                }
            }));
        });
}
exports2.takeLast = takeLast;

return exports2;
}
