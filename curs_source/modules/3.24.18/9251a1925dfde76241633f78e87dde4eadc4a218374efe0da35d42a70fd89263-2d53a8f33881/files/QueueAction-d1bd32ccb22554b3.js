import { require_AsyncAction } from "./AsyncAction.js";
var __wakaru_require_QueueAction_cache;
export function require_QueueAction() {
if (__wakaru_require_QueueAction_cache) return __wakaru_require_QueueAction_cache;
var exports2 = {};
__wakaru_require_QueueAction_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.QueueAction = void 0;
var AsyncAction_js_1 = require_AsyncAction();
var QueueAction = class extends AsyncAction_js_1.AsyncAction {
    scheduler;
    work;
    constructor(scheduler, work){
        super(scheduler, work);
        this.scheduler = scheduler;
        this.work = work;
    }
    schedule(state, delay3 = 0) {
        if (delay3 > 0) {
            return super.schedule(state, delay3);
        }
        this.delay = delay3;
        this.state = state;
        this.scheduler.flush(this);
        return this;
    }
    execute(state, delay3) {
        return delay3 > 0 || this.closed ? super.execute(state, delay3) : this._execute(state, delay3);
    }
    requestAsyncId(scheduler, id, delay3 = 0) {
        if (delay3 != null && delay3 > 0 || delay3 == null && this.delay > 0) {
            return super.requestAsyncId(scheduler, id, delay3);
        }
        scheduler.flush(this);
        return 0;
    }
};
exports2.QueueAction = QueueAction;

return exports2;
}
