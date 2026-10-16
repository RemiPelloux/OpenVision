import { require_Scheduler } from "../Scheduler.js";
var __wakaru_require_AsyncScheduler_cache;
export function require_AsyncScheduler() {
if (__wakaru_require_AsyncScheduler_cache) return __wakaru_require_AsyncScheduler_cache;
var exports2 = {};
__wakaru_require_AsyncScheduler_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.AsyncScheduler = void 0;
var Scheduler_js_1 = require_Scheduler();
var AsyncScheduler = class extends Scheduler_js_1.Scheduler {
    actions = [];
    _active = false;
    _scheduled;
    constructor(SchedulerAction, now2 = Scheduler_js_1.Scheduler.now){
        super(SchedulerAction, now2);
    }
    flush(action) {
        const { actions } = this;
        if (this._active) {
            actions.push(action);
            return;
        }
        let error3;
        this._active = true;
        do {
            if (error3 = action.execute(action.state, action.delay)) {
                break;
            }
        }while (action = actions.shift())
        this._active = false;
        if (error3) {
            while(action = actions.shift()){
                action.unsubscribe();
            }
            throw error3;
        }
    }
};
exports2.AsyncScheduler = AsyncScheduler;

return exports2;
}
