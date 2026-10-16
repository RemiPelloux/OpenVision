import { require_Observable } from "../Observable.js";
var __wakaru_require_exhaustMap_cache;
export function require_exhaustMap() {
if (__wakaru_require_exhaustMap_cache) return __wakaru_require_exhaustMap_cache;
var exports2 = {};
__wakaru_require_exhaustMap_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.exhaustMap = void 0;
var Observable_js_1 = require_Observable();
function exhaustMap(project2) {
    return (source)=>new Observable_js_1.Observable((destination)=>{
            let index = 0;
            let innerSub = null;
            let isComplete = false;
            source.subscribe((0, Observable_js_1.operate)({
                destination,
                next: (outerValue)=>{
                    if (!innerSub) {
                        innerSub = (0, Observable_js_1.operate)({
                            destination,
                            complete: ()=>{
                                innerSub = null;
                                isComplete && destination.complete();
                            }
                        });
                        (0, Observable_js_1.from)(project2(outerValue, index++)).subscribe(innerSub);
                    }
                },
                complete: ()=>{
                    isComplete = true;
                    !innerSub && destination.complete();
                }
            }));
        });
}
exports2.exhaustMap = exhaustMap;

return exports2;
}
