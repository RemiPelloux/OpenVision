import { require_Observable } from "../Observable.js";
import { require_scheduleArray } from "./scheduleArray.js";
import { require_scheduleAsyncIterable } from "./scheduleAsyncIterable.js";
import { require_scheduleIterable } from "./scheduleIterable.js";
import { require_scheduleObservable } from "./scheduleObservable.js";
import { require_schedulePromise } from "./schedulePromise.js";
import { require_scheduleReadableStreamLike } from "./scheduleReadableStreamLike.js";
var __wakaru_require_scheduled_cache;
export function require_scheduled() {
if (__wakaru_require_scheduled_cache) return __wakaru_require_scheduled_cache;
var exports2 = {};
__wakaru_require_scheduled_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.scheduled = void 0;
var scheduleObservable_js_1 = require_scheduleObservable();
var schedulePromise_js_1 = require_schedulePromise();
var scheduleArray_js_1 = require_scheduleArray();
var scheduleIterable_js_1 = require_scheduleIterable();
var scheduleAsyncIterable_js_1 = require_scheduleAsyncIterable();
var Observable_js_1 = require_Observable();
var scheduleReadableStreamLike_js_1 = require_scheduleReadableStreamLike();
function scheduled(input, scheduler) {
    const type2 = (0, Observable_js_1.getObservableInputType)(input);
    switch(type2){
        case Observable_js_1.ObservableInputType.Own:
        case Observable_js_1.ObservableInputType.InteropObservable:
            return (0, scheduleObservable_js_1.scheduleObservable)(input, scheduler);
        case Observable_js_1.ObservableInputType.Promise:
            return (0, schedulePromise_js_1.schedulePromise)(input, scheduler);
        case Observable_js_1.ObservableInputType.ArrayLike:
            return (0, scheduleArray_js_1.scheduleArray)(input, scheduler);
        case Observable_js_1.ObservableInputType.Iterable:
            return (0, scheduleIterable_js_1.scheduleIterable)(input, scheduler);
        case Observable_js_1.ObservableInputType.AsyncIterable:
            return (0, scheduleAsyncIterable_js_1.scheduleAsyncIterable)(input, scheduler);
        case Observable_js_1.ObservableInputType.ReadableStreamLike:
            return (0, scheduleReadableStreamLike_js_1.scheduleReadableStreamLike)(input, scheduler);
    }
}
exports2.scheduled = scheduled;

return exports2;
}
