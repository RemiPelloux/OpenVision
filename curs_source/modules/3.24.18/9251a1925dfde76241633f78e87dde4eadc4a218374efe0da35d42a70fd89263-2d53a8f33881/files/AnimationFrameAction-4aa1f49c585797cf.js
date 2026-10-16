import { require_AsyncAction } from "./AsyncAction.js";
import { require_animationFrameProvider } from "./animationFrameProvider.js";
var __wakaru_require_AnimationFrameAction_cache;
export function require_AnimationFrameAction() {
if (__wakaru_require_AnimationFrameAction_cache) return __wakaru_require_AnimationFrameAction_cache;
var exports2 = {};
__wakaru_require_AnimationFrameAction_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.AnimationFrameAction = void 0;
var AsyncAction_js_1 = require_AsyncAction();
var animationFrameProvider_js_1 = require_animationFrameProvider();
var AnimationFrameAction = class extends AsyncAction_js_1.AsyncAction {
    scheduler;
    work;
    constructor(scheduler, work){
        super(scheduler, work);
        this.scheduler = scheduler;
        this.work = work;
    }
    requestAsyncId(scheduler, id, delay3 = 0) {
        if (delay3 !== null && delay3 > 0) {
            return super.requestAsyncId(scheduler, id, delay3);
        }
        scheduler.actions.push(this);
        return scheduler._scheduled || (scheduler._scheduled = animationFrameProvider_js_1.animationFrameProvider.requestAnimationFrame(()=>scheduler.flush(void 0)));
    }
    recycleAsyncId(scheduler, id, delay3 = 0) {
        if (delay3 != null ? delay3 > 0 : this.delay > 0) {
            return super.recycleAsyncId(scheduler, id, delay3);
        }
        const { actions } = scheduler;
        if (id != null && actions[actions.length - 1]?.id !== id) {
            animationFrameProvider_js_1.animationFrameProvider.cancelAnimationFrame(id);
            scheduler._scheduled = void 0;
        }
        return void 0;
    }
};
exports2.AnimationFrameAction = AnimationFrameAction;

return exports2;
}
