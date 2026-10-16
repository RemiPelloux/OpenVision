import { require_Observable } from "../Observable.js";
import { require_Subject } from "../Subject.js";
var __wakaru_require_groupBy_cache;
export function require_groupBy() {
if (__wakaru_require_groupBy_cache) return __wakaru_require_groupBy_cache;
var exports2 = {};
__wakaru_require_groupBy_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.groupBy = void 0;
var Observable_js_1 = require_Observable();
var Subject_js_1 = require_Subject();
function groupBy(keySelector, elementOrOptions, duration3, connector) {
    return (source)=>new Observable_js_1.Observable((destination)=>{
            let element;
            if (!elementOrOptions || typeof elementOrOptions === "function") {
                element = elementOrOptions;
            } else {
                ({ duration: duration3, element, connector } = elementOrOptions);
            }
            const groups = new Map();
            const notify = (cb)=>{
                groups.forEach(cb);
                cb(destination);
            };
            const handleError = (err)=>notify((consumer)=>consumer.error(err));
            const groupBySourceSubscriber = (0, Observable_js_1.operate)({
                destination,
                next: (value)=>{
                    try {
                        const key = keySelector(value);
                        let group = groups.get(key);
                        if (!group) {
                            groups.set(key, group = connector ? connector() : new Subject_js_1.Subject());
                            const grouped = createGroupedObservable(key, group);
                            destination.next(grouped);
                            if (duration3) {
                                const durationSubscriber = (0, Observable_js_1.operate)({
                                    destination: group,
                                    next: ()=>{
                                        group.complete();
                                        durationSubscriber?.unsubscribe();
                                    },
                                    finalize: ()=>groups.delete(key)
                                });
                                groupBySourceSubscriber.add((0, Observable_js_1.from)(duration3(grouped)).subscribe(durationSubscriber));
                            }
                        }
                        group.next(element ? element(value) : value);
                    } catch (err) {
                        handleError(err);
                    }
                },
                error: handleError,
                complete: ()=>notify((consumer)=>consumer.complete()),
                finalize: ()=>groups.clear()
            });
            source.subscribe(groupBySourceSubscriber);
            function createGroupedObservable(key, groupSubject) {
                const result = new Observable_js_1.Observable((groupSubscriber)=>groupSubject.subscribe(groupSubscriber));
                result.key = key;
                return result;
            }
        });
}
exports2.groupBy = groupBy;

return exports2;
}
