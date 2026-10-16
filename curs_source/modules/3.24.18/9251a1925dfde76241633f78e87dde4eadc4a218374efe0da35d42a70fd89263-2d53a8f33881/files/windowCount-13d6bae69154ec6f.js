import { require_Observable } from "../Observable.js";
import { require_Subject } from "../Subject.js";
var __wakaru_require_windowCount_cache;
export function require_windowCount() {
if (__wakaru_require_windowCount_cache) return __wakaru_require_windowCount_cache;
var exports2 = {};
__wakaru_require_windowCount_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.windowCount = void 0;
var Observable_js_1 = require_Observable();
var Subject_js_1 = require_Subject();
function windowCount(windowSize, startWindowEvery = 0) {
    const startEvery = startWindowEvery > 0 ? startWindowEvery : windowSize;
    return (source)=>new Observable_js_1.Observable((destination)=>{
            let windows = [
                new Subject_js_1.Subject()
            ];
            let starts = [];
            let count2 = 0;
            destination.next(windows[0].asObservable());
            source.subscribe((0, Observable_js_1.operate)({
                destination,
                next: (value)=>{
                    for (const window2 of windows){
                        window2.next(value);
                    }
                    const c = count2 - windowSize + 1;
                    if (c >= 0 && c % startEvery === 0) {
                        windows.shift().complete();
                    }
                    if (++count2 % startEvery === 0) {
                        const window2 = new Subject_js_1.Subject();
                        windows.push(window2);
                        destination.next(window2.asObservable());
                    }
                },
                error: (err)=>{
                    while(windows.length > 0){
                        windows.shift().error(err);
                    }
                    destination.error(err);
                },
                complete: ()=>{
                    while(windows.length > 0){
                        windows.shift().complete();
                    }
                    destination.complete();
                },
                finalize: ()=>{
                    starts = null;
                    windows = null;
                }
            }));
        });
}
exports2.windowCount = windowCount;

return exports2;
}
