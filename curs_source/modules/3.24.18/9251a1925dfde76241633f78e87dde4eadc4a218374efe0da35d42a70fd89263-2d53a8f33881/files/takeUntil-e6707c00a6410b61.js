import { require_Observable } from "../Observable.js";
import { require_noop } from "../util/noop.js";
var __wakaru_require_takeUntil_cache;
export function require_takeUntil() {
if (__wakaru_require_takeUntil_cache) return __wakaru_require_takeUntil_cache;
var exports2 = {};
__wakaru_require_takeUntil_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.takeUntil = void 0;
var Observable_js_1 = require_Observable();
var noop_js_1 = require_noop();
function takeUntil(notifier) {
    return (source)=>new Observable_js_1.Observable((destination)=>{
            (0, Observable_js_1.from)(notifier).subscribe((0, Observable_js_1.operate)({
                destination,
                next: ()=>destination.complete(),
                complete: noop_js_1.noop
            }));
            !destination.closed && source.subscribe(destination);
        });
}
exports2.takeUntil = takeUntil;

return exports2;
}
