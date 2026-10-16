import { require_Observable } from "../Observable.js";
import { require_Subject } from "../Subject.js";
import { require_noop } from "../util/noop.js";
var __wakaru_require_window_cache;
export function require_window() {
if (__wakaru_require_window_cache) return __wakaru_require_window_cache;
var exports2 = {};
__wakaru_require_window_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.window = void 0;
var Observable_js_1 = require_Observable();
var Subject_js_1 = require_Subject();
var noop_js_1 = require_noop();
function window2(windowBoundaries) {
    return (source)=>new Observable_js_1.Observable((destination)=>{
            let windowSubject = new Subject_js_1.Subject();
            destination.next(windowSubject.asObservable());
            const errorHandler = (err)=>{
                windowSubject.error(err);
                destination.error(err);
            };
            source.subscribe((0, Observable_js_1.operate)({
                destination,
                next: (value)=>windowSubject?.next(value),
                complete: ()=>{
                    windowSubject.complete();
                    destination.complete();
                },
                error: errorHandler
            }));
            (0, Observable_js_1.from)(windowBoundaries).subscribe((0, Observable_js_1.operate)({
                destination,
                next: ()=>{
                    windowSubject.complete();
                    destination.next(windowSubject = new Subject_js_1.Subject());
                },
                complete: noop_js_1.noop,
                error: errorHandler
            }));
            return ()=>{
                windowSubject?.unsubscribe();
                windowSubject = null;
            };
        });
}
exports2.window = window2;

return exports2;
}
