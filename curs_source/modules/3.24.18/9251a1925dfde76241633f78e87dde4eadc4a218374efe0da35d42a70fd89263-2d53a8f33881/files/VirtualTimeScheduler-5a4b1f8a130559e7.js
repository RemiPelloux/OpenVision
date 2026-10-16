import { require_Observable } from "../Observable.js";
import { require_AsyncAction } from "./AsyncAction.js";
import { require_AsyncScheduler } from "./AsyncScheduler.js";
var __wakaru_require_VirtualTimeScheduler_cache;
export function require_VirtualTimeScheduler() {
if (__wakaru_require_VirtualTimeScheduler_cache) return __wakaru_require_VirtualTimeScheduler_cache;
var exports2 = {};
__wakaru_require_VirtualTimeScheduler_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.VirtualAction = exports2.VirtualTimeScheduler = void 0;
var AsyncAction_js_1 = require_AsyncAction();
var Observable_js_1 = require_Observable();
var AsyncScheduler_js_1 = require_AsyncScheduler();
var VirtualTimeScheduler = class extends AsyncScheduler_js_1.AsyncScheduler {
    maxFrames;
    static frameTimeFactor = 10;
    frame = 0;
    index = -1;
    constructor(schedulerActionCtor = VirtualAction, maxFrames = Infinity){
        super(schedulerActionCtor, ()=>this.frame);
        this.maxFrames = maxFrames;
    }
    flush() {
        const { actions, maxFrames } = this;
        let error3;
        let action;
        while((action = actions[0]) && action.delay <= maxFrames){
            actions.shift();
            this.frame = action.delay;
            if (error3 = action.execute(action.state, action.delay)) {
                break;
            }
        }
        if (error3) {
            while(action = actions.shift()){
                action.unsubscribe();
            }
            throw error3;
        }
    }
};
exports2.VirtualTimeScheduler = VirtualTimeScheduler;
var VirtualAction = class _VirtualAction extends AsyncAction_js_1.AsyncAction {
    scheduler;
    work;
    index;
    active = true;
    constructor(scheduler, work, index = scheduler.index += 1){
        super(scheduler, work);
        this.scheduler = scheduler;
        this.work = work;
        this.index = index;
        this.index = scheduler.index = index;
    }
    schedule(state, delay3 = 0) {
        if (Number.isFinite(delay3)) {
            if (!this.id) {
                return super.schedule(state, delay3);
            }
            this.active = false;
            const action = new _VirtualAction(this.scheduler, this.work);
            this.add(action);
            return action.schedule(state, delay3);
        } else {
            return Observable_js_1.Subscription.EMPTY;
        }
    }
    requestAsyncId(scheduler, id, delay3 = 0) {
        this.delay = scheduler.frame + delay3;
        const { actions } = scheduler;
        actions.push(this);
        actions.sort(_VirtualAction.sortActions);
        return 1;
    }
    recycleAsyncId(scheduler, id, delay3 = 0) {
        return void 0;
    }
    _execute(state, delay3) {
        if (this.active === true) {
            return super._execute(state, delay3);
        }
    }
    static sortActions(a, b2) {
        if (a.delay === b2.delay) {
            if (a.index === b2.index) {
                return 0;
            } else if (a.index > b2.index) {
                return 1;
            } else {
                return -1;
            }
        } else if (a.delay > b2.delay) {
            return 1;
        } else {
            return -1;
        }
    }
};
exports2.VirtualAction = VirtualAction;

return exports2;
}
