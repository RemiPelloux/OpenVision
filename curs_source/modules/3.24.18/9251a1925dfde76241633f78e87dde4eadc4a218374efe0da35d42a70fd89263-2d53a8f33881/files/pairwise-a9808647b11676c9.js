import { require_Observable } from "../Observable.js";
var __wakaru_require_pairwise_cache;
export function require_pairwise() {
if (__wakaru_require_pairwise_cache) return __wakaru_require_pairwise_cache;
var exports2 = {};
__wakaru_require_pairwise_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.pairwise = void 0;
var Observable_js_1 = require_Observable();
function pairwise() {
    return (source)=>new Observable_js_1.Observable((destination)=>{
            let prev;
            let hasPrev = false;
            source.subscribe((0, Observable_js_1.operate)({
                destination,
                next: (value)=>{
                    const p2 = prev;
                    prev = value;
                    hasPrev && destination.next([
                        p2,
                        value
                    ]);
                    hasPrev = true;
                }
            }));
        });
}
exports2.pairwise = pairwise;

return exports2;
}
