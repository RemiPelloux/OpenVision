import { require_Observable } from "../../Observable.js";
import { require_animationFrameProvider } from "../../scheduler/animationFrameProvider.js";
import { require_performanceTimestampProvider } from "../../scheduler/performanceTimestampProvider.js";
var __wakaru_require_animationFrames_cache;
export function require_animationFrames() {
if (__wakaru_require_animationFrames_cache) return __wakaru_require_animationFrames_cache;
var exports2 = {};
__wakaru_require_animationFrames_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.animationFrames = void 0;
var Observable_js_1 = require_Observable();
var performanceTimestampProvider_js_1 = require_performanceTimestampProvider();
var animationFrameProvider_js_1 = require_animationFrameProvider();
function animationFrames(timestampProvider) {
    return timestampProvider ? animationFramesFactory(timestampProvider) : DEFAULT_ANIMATION_FRAMES;
}
exports2.animationFrames = animationFrames;
function animationFramesFactory(timestampProvider) {
    return new Observable_js_1.Observable((subscriber)=>{
        const provider = timestampProvider || performanceTimestampProvider_js_1.performanceTimestampProvider;
        const start = provider.now();
        let id = 0;
        const run = ()=>{
            if (!subscriber.closed) {
                id = animationFrameProvider_js_1.animationFrameProvider.requestAnimationFrame((timestamp2)=>{
                    id = 0;
                    const now2 = provider.now();
                    subscriber.next({
                        timestamp: timestampProvider ? now2 : timestamp2,
                        elapsed: now2 - start
                    });
                    run();
                });
            }
        };
        run();
        return ()=>{
            if (id) {
                animationFrameProvider_js_1.animationFrameProvider.cancelAnimationFrame(id);
            }
        };
    });
}
var DEFAULT_ANIMATION_FRAMES = animationFramesFactory();

return exports2;
}
