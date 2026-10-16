import { require_AnimationFrameAction } from "./AnimationFrameAction.js";
import { require_AnimationFrameScheduler } from "./AnimationFrameScheduler.js";
var __wakaru_require_animationFrame_cache;
export function require_animationFrame() {
if (__wakaru_require_animationFrame_cache) return __wakaru_require_animationFrame_cache;
var exports2 = {};
__wakaru_require_animationFrame_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.animationFrameScheduler = void 0;
var AnimationFrameAction_js_1 = require_AnimationFrameAction();
var AnimationFrameScheduler_js_1 = require_AnimationFrameScheduler();
exports2.animationFrameScheduler = new AnimationFrameScheduler_js_1.AnimationFrameScheduler(AnimationFrameAction_js_1.AnimationFrameAction);

return exports2;
}
