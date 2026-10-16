import { require_Observable } from "../Observable.js";
var __wakaru_require_catchError_cache;
export function require_catchError() {
if (__wakaru_require_catchError_cache) return __wakaru_require_catchError_cache;
var exports2 = {};
__wakaru_require_catchError_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.catchError = void 0;
var Observable_js_1 = require_Observable();
function catchError2(selector) {
    return (source)=>new Observable_js_1.Observable((destination)=>{
            let innerSub = null;
            let syncUnsub = false;
            let handledResult;
            innerSub = source.subscribe((0, Observable_js_1.operate)({
                destination,
                error: (err)=>{
                    handledResult = (0, Observable_js_1.from)(selector(err, catchError2(selector)(source)));
                    if (innerSub) {
                        innerSub.unsubscribe();
                        innerSub = null;
                        handledResult.subscribe(destination);
                    } else {
                        syncUnsub = true;
                    }
                }
            }));
            if (syncUnsub) {
                innerSub.unsubscribe();
                innerSub = null;
                handledResult.subscribe(destination);
            }
        });
}
exports2.catchError = catchError2;

return exports2;
}
