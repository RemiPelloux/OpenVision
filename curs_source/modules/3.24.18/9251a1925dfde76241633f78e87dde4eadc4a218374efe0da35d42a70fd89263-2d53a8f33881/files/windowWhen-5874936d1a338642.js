import { require_Observable } from "../Observable.js";
import { require_Subject } from "../Subject.js";
import { require_noop } from "../util/noop.js";
var __wakaru_require_windowWhen_cache;
export function require_windowWhen() {
if (__wakaru_require_windowWhen_cache) return __wakaru_require_windowWhen_cache;
var exports2 = {};
__wakaru_require_windowWhen_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.windowWhen = void 0;
var Observable_js_1 = require_Observable();
var Subject_js_1 = require_Subject();
var noop_js_1 = require_noop();
function windowWhen(closingSelector) {
    return (source)=>new Observable_js_1.Observable((destination)=>{
            let window2;
            let closingSubscriber;
            const handleError = (err)=>{
                window2.error(err);
                destination.error(err);
            };
            const openWindow = ()=>{
                closingSubscriber?.unsubscribe();
                window2?.complete();
                window2 = new Subject_js_1.Subject();
                destination.next(window2.asObservable());
                let closingNotifier;
                try {
                    closingNotifier = (0, Observable_js_1.from)(closingSelector());
                } catch (err) {
                    handleError(err);
                    return;
                }
                closingNotifier.subscribe(closingSubscriber = (0, Observable_js_1.operate)({
                    destination,
                    next: openWindow,
                    error: handleError,
                    complete: noop_js_1.noop
                }));
            };
            openWindow();
            source.subscribe((0, Observable_js_1.operate)({
                destination,
                next: (value)=>window2.next(value),
                error: handleError,
                complete: ()=>{
                    window2.complete();
                    destination.complete();
                },
                finalize: ()=>{
                    closingSubscriber?.unsubscribe();
                    window2 = null;
                }
            }));
        });
}
exports2.windowWhen = windowWhen;

return exports2;
}
