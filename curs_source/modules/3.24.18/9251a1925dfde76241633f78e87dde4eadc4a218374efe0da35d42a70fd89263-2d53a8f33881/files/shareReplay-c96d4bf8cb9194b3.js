import { require_ReplaySubject } from "../ReplaySubject.js";
import { require_share } from "./share.js";
var __wakaru_require_shareReplay_cache;
export function require_shareReplay() {
if (__wakaru_require_shareReplay_cache) return __wakaru_require_shareReplay_cache;
var exports2 = {};
__wakaru_require_shareReplay_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.shareReplay = void 0;
var ReplaySubject_js_1 = require_ReplaySubject();
var share_js_1 = require_share();
function shareReplay(configOrBufferSize, windowTime, scheduler) {
    let bufferSize;
    let refCount = false;
    if (configOrBufferSize && typeof configOrBufferSize === "object") {
        ({ bufferSize = Infinity, windowTime = Infinity, refCount = false, scheduler } = configOrBufferSize);
    } else {
        bufferSize = configOrBufferSize ?? Infinity;
    }
    return (0, share_js_1.share)({
        connector: ()=>new ReplaySubject_js_1.ReplaySubject(bufferSize, windowTime, scheduler),
        resetOnError: true,
        resetOnComplete: false,
        resetOnRefCountZero: refCount
    });
}
exports2.shareReplay = shareReplay;

return exports2;
}
