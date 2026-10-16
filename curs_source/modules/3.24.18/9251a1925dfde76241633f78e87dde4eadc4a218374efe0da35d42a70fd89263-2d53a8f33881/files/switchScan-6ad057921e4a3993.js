import { require_Observable } from "../Observable.js";
import { require_switchMap } from "./switchMap.js";
var __wakaru_require_switchScan_cache;
export function require_switchScan() {
if (__wakaru_require_switchScan_cache) return __wakaru_require_switchScan_cache;
var exports2 = {};
__wakaru_require_switchScan_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.switchScan = void 0;
var switchMap_js_1 = require_switchMap();
var Observable_js_1 = require_Observable();
function switchScan(accumulator, seed) {
    return (source)=>new Observable_js_1.Observable((destination)=>{
            let state = seed;
            (0, switchMap_js_1.switchMap)((value, index)=>accumulator(state, value, index))(source).subscribe((0, Observable_js_1.operate)({
                destination,
                next: (innerValue)=>{
                    state = innerValue;
                    destination.next(innerValue);
                }
            }));
            return ()=>{
                state = null;
            };
        });
}
exports2.switchScan = switchScan;

return exports2;
}
