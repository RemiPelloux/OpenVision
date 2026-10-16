import { require_Observable } from "../Observable.js";
var __wakaru_require_animationFrameProvider_cache;
export function require_animationFrameProvider() {
if (__wakaru_require_animationFrameProvider_cache) return __wakaru_require_animationFrameProvider_cache;
var exports2 = {};
__wakaru_require_animationFrameProvider_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.animationFrameProvider = void 0;
var Observable_js_1 = require_Observable();
exports2.animationFrameProvider = {
    schedule (callback) {
        let request3 = requestAnimationFrame;
        let cancel = cancelAnimationFrame;
        const { delegate } = exports2.animationFrameProvider;
        if (delegate) {
            request3 = delegate.requestAnimationFrame;
            cancel = delegate.cancelAnimationFrame;
        }
        const handle = request3((timestamp2)=>{
            cancel = void 0;
            callback(timestamp2);
        });
        return new Observable_js_1.Subscription(()=>cancel?.(handle));
    },
    requestAnimationFrame (...args) {
        const { delegate } = exports2.animationFrameProvider;
        return (delegate?.requestAnimationFrame || requestAnimationFrame)(...args);
    },
    cancelAnimationFrame (...args) {
        const { delegate } = exports2.animationFrameProvider;
        return (delegate?.cancelAnimationFrame || cancelAnimationFrame)(...args);
    },
    delegate: void 0
};

return exports2;
}
