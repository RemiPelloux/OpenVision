import { require_Observable } from "../Observable.js";
var __wakaru_require_switchMap_cache;
export function require_switchMap() {
if (__wakaru_require_switchMap_cache) return __wakaru_require_switchMap_cache;
var exports2 = {};
__wakaru_require_switchMap_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.switchMap = void 0;
var Observable_js_1 = require_Observable();
function switchMap(project2) {
    return (source)=>new Observable_js_1.Observable((destination)=>{
            let innerSubscriber = null;
            let index = 0;
            let isComplete = false;
            const checkComplete = ()=>isComplete && !innerSubscriber && destination.complete();
            source.subscribe((0, Observable_js_1.operate)({
                destination,
                next: (value)=>{
                    innerSubscriber?.unsubscribe();
                    const outerIndex = index++;
                    (0, Observable_js_1.from)(project2(value, outerIndex)).subscribe(innerSubscriber = (0, Observable_js_1.operate)({
                        destination,
                        complete: ()=>{
                            innerSubscriber = null;
                            checkComplete();
                        }
                    }));
                },
                complete: ()=>{
                    isComplete = true;
                    checkComplete();
                }
            }));
        });
}
exports2.switchMap = switchMap;

return exports2;
}
