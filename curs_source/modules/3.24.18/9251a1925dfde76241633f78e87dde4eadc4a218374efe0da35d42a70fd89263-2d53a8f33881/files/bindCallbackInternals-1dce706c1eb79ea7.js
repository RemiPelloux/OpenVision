import { require_AsyncSubject } from "../AsyncSubject.js";
import { require_Observable } from "../Observable.js";
import { require_scheduled } from "../scheduled/scheduled.js";
import { require_isScheduler } from "../util/isScheduler.js";
import { require_mapOneOrManyArgs } from "../util/mapOneOrManyArgs.js";
var __wakaru_require_bindCallbackInternals_cache;
export function require_bindCallbackInternals() {
if (__wakaru_require_bindCallbackInternals_cache) return __wakaru_require_bindCallbackInternals_cache;
var exports2 = {};
__wakaru_require_bindCallbackInternals_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.bindCallbackInternals = void 0;
var isScheduler_js_1 = require_isScheduler();
var Observable_js_1 = require_Observable();
var mapOneOrManyArgs_js_1 = require_mapOneOrManyArgs();
var AsyncSubject_js_1 = require_AsyncSubject();
var scheduled_js_1 = require_scheduled();
function bindCallbackInternals(isNodeStyle, callbackFunc, resultSelector, scheduler) {
    if (resultSelector) {
        if ((0, isScheduler_js_1.isScheduler)(resultSelector)) {
            scheduler = resultSelector;
        } else {
            return function(...args) {
                return (0, mapOneOrManyArgs_js_1.mapOneOrManyArgs)(resultSelector)(bindCallbackInternals(isNodeStyle, callbackFunc, scheduler).apply(this, args));
            };
        }
    }
    if (scheduler) {
        return function(...args) {
            return (0, scheduled_js_1.scheduled)(bindCallbackInternals(isNodeStyle, callbackFunc).apply(this, args), scheduler);
        };
    }
    return function(...args) {
        const subject = new AsyncSubject_js_1.AsyncSubject();
        let uninitialized = true;
        return new Observable_js_1.Observable((subscriber)=>{
            const subs = subject.subscribe(subscriber);
            if (uninitialized) {
                uninitialized = false;
                let isAsync2 = false;
                let isComplete = false;
                callbackFunc.apply(this, [
                    ...args,
                    (...results)=>{
                        if (isNodeStyle) {
                            const err = results.shift();
                            if (err != null) {
                                subject.error(err);
                                return;
                            }
                        }
                        subject.next(1 < results.length ? results : results[0]);
                        isComplete = true;
                        if (isAsync2) {
                            subject.complete();
                        }
                    }
                ]);
                if (isComplete) {
                    subject.complete();
                }
                isAsync2 = true;
            }
            return subs;
        });
    };
}
exports2.bindCallbackInternals = bindCallbackInternals;

return exports2;
}
