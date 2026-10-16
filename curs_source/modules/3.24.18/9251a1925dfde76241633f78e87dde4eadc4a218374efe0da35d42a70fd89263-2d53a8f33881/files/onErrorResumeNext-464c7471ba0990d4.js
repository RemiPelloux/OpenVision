import { require_Observable } from "../Observable.js";
import { require_argsOrArgArray } from "../util/argsOrArgArray.js";
import { require_noop } from "../util/noop.js";
var __wakaru_require_onErrorResumeNext_cache;
export function require_onErrorResumeNext() {
if (__wakaru_require_onErrorResumeNext_cache) return __wakaru_require_onErrorResumeNext_cache;
var exports2 = {};
__wakaru_require_onErrorResumeNext_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.onErrorResumeNext = void 0;
var Observable_js_1 = require_Observable();
var argsOrArgArray_js_1 = require_argsOrArgArray();
var noop_js_1 = require_noop();
function onErrorResumeNext(...sources) {
    const nextSources = (0, argsOrArgArray_js_1.argsOrArgArray)(sources);
    return new Observable_js_1.Observable((destination)=>{
        let sourceIndex = 0;
        const subscribeNext = ()=>{
            if (sourceIndex < nextSources.length) {
                let nextSource;
                try {
                    nextSource = (0, Observable_js_1.from)(nextSources[sourceIndex++]);
                } catch (err) {
                    subscribeNext();
                    return;
                }
                const innerSubscriber = (0, Observable_js_1.operate)({
                    destination,
                    error: noop_js_1.noop,
                    complete: noop_js_1.noop
                });
                nextSource.subscribe(innerSubscriber);
                innerSubscriber.add(subscribeNext);
            } else {
                destination.complete();
            }
        };
        subscribeNext();
    });
}
exports2.onErrorResumeNext = onErrorResumeNext;

return exports2;
}
