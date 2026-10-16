import { require_Observable } from "../Observable.js";
import { require_scheduleAsyncIterable } from "./scheduleAsyncIterable.js";
var __wakaru_require_scheduleReadableStreamLike_cache;
export function require_scheduleReadableStreamLike() {
if (__wakaru_require_scheduleReadableStreamLike_cache) return __wakaru_require_scheduleReadableStreamLike_cache;
var exports2 = {};
__wakaru_require_scheduleReadableStreamLike_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.scheduleReadableStreamLike = void 0;
var Observable_js_1 = require_Observable();
var scheduleAsyncIterable_js_1 = require_scheduleAsyncIterable();
function scheduleReadableStreamLike(input, scheduler) {
    return (0, scheduleAsyncIterable_js_1.scheduleAsyncIterable)((0, Observable_js_1.readableStreamLikeToAsyncGenerator)(input), scheduler);
}
exports2.scheduleReadableStreamLike = scheduleReadableStreamLike;

return exports2;
}
