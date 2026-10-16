import { require_Observable } from "../Observable.js";
import { require_Subject } from "../Subject.js";
import { require_arrRemove } from "../util/arrRemove.js";
import { require_noop } from "../util/noop.js";
var __wakaru_require_windowToggle_cache;
export function require_windowToggle() {
if (__wakaru_require_windowToggle_cache) return __wakaru_require_windowToggle_cache;
var exports2 = {};
__wakaru_require_windowToggle_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.windowToggle = void 0;
var Observable_js_1 = require_Observable();
var Subject_js_1 = require_Subject();
var noop_js_1 = require_noop();
var arrRemove_js_1 = require_arrRemove();
function windowToggle(openings, closingSelector) {
    return (source)=>new Observable_js_1.Observable((destination)=>{
            const windows = [];
            const handleError = (err)=>{
                while(0 < windows.length){
                    windows.shift().error(err);
                }
                destination.error(err);
            };
            (0, Observable_js_1.from)(openings).subscribe((0, Observable_js_1.operate)({
                destination,
                next: (openValue)=>{
                    const window2 = new Subject_js_1.Subject();
                    windows.push(window2);
                    const closingSubscription = new Observable_js_1.Subscription();
                    const closeWindow = ()=>{
                        (0, arrRemove_js_1.arrRemove)(windows, window2);
                        window2.complete();
                        closingSubscription.unsubscribe();
                    };
                    let closingNotifier;
                    try {
                        closingNotifier = (0, Observable_js_1.from)(closingSelector(openValue));
                    } catch (err) {
                        handleError(err);
                        return;
                    }
                    destination.next(window2);
                    closingSubscription.add(closingNotifier.subscribe((0, Observable_js_1.operate)({
                        destination,
                        next: closeWindow,
                        error: handleError,
                        complete: noop_js_1.noop
                    })));
                },
                complete: noop_js_1.noop
            }));
            source.subscribe((0, Observable_js_1.operate)({
                destination,
                next: (value)=>{
                    const windowsCopy = windows.slice();
                    for (const window2 of windowsCopy){
                        window2.next(value);
                    }
                },
                error: handleError,
                complete: ()=>{
                    while(0 < windows.length){
                        windows.shift().complete();
                    }
                    destination.complete();
                },
                finalize: ()=>{
                    while(0 < windows.length){
                        windows.shift().unsubscribe();
                    }
                }
            }));
        });
}
exports2.windowToggle = windowToggle;

return exports2;
}
