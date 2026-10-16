import { require_Action } from "./Action.js";
import { require_intervalProvider } from "./intervalProvider.js";
import { require_arrRemove } from "../util/arrRemove.js";
var __wakaru_require_AsyncAction_cache;
export function require_AsyncAction() {
if (__wakaru_require_AsyncAction_cache) return __wakaru_require_AsyncAction_cache;
var exports2 = {};
__wakaru_require_AsyncAction_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.AsyncAction = void 0;
var Action_js_1 = require_Action();
var intervalProvider_js_1 = require_intervalProvider();
var arrRemove_js_1 = require_arrRemove();
var AsyncAction = class extends Action_js_1.Action {
    scheduler;
    work;
    id;
    state;
    delay;
    pending = false;
    constructor(scheduler, work){
        super(scheduler, work);
        this.scheduler = scheduler;
        this.work = work;
    }
    schedule(state, delay3 = 0) {
        if (this.closed) {
            return this;
        }
        this.state = state;
        const id = this.id;
        const scheduler = this.scheduler;
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, delay3);
        }
        this.pending = true;
        this.delay = delay3;
        this.id = this.id ?? this.requestAsyncId(scheduler, this.id, delay3);
        return this;
    }
    requestAsyncId(scheduler, _id, delay3 = 0) {
        return intervalProvider_js_1.intervalProvider.setInterval(scheduler.flush.bind(scheduler, this), delay3);
    }
    recycleAsyncId(_scheduler, id, delay3 = 0) {
        if (delay3 != null && this.delay === delay3 && this.pending === false) {
            return id;
        }
        if (id != null) {
            intervalProvider_js_1.intervalProvider.clearInterval(id);
        }
        return void 0;
    }
    execute(state, delay3) {
        if (this.closed) {
            return new Error("executing a cancelled action");
        }
        this.pending = false;
        const error3 = this._execute(state, delay3);
        if (error3) {
            return error3;
        } else if (this.pending === false && this.id != null) {
            this.id = this.recycleAsyncId(this.scheduler, this.id, null);
        }
    }
    _execute(state, _delay) {
        let errored = false;
        let errorValue;
        try {
            this.work(state);
        } catch (e) {
            errored = true;
            errorValue = e ? e : new Error("Scheduled action threw falsy error");
        }
        if (errored) {
            this.unsubscribe();
            return errorValue;
        }
    }
    unsubscribe() {
        if (!this.closed) {
            const { id, scheduler } = this;
            const { actions } = scheduler;
            this.work = this.state = this.scheduler = null;
            this.pending = false;
            (0, arrRemove_js_1.arrRemove)(actions, this);
            if (id != null) {
                this.id = this.recycleAsyncId(scheduler, id, null);
            }
            this.delay = null;
            super.unsubscribe();
        }
    }
};
exports2.AsyncAction = AsyncAction;

return exports2;
}
