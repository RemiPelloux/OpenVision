import { require_AsyncAction } from "./AsyncAction.js";
import { require_immediateProvider } from "./immediateProvider.js";
var __wakaru_require_AsapAction_cache;
export function require_AsapAction() {
if (__wakaru_require_AsapAction_cache) return __wakaru_require_AsapAction_cache;
var exports2 = {};
__wakaru_require_AsapAction_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.AsapAction = void 0;
var AsyncAction_js_1 = require_AsyncAction();
var immediateProvider_js_1 = require_immediateProvider();
var AsapAction = class extends AsyncAction_js_1.AsyncAction {
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
        return scheduler._scheduled || (scheduler._scheduled = immediateProvider_js_1.immediateProvider.setImmediate(scheduler.flush.bind(scheduler, void 0)));
    }
    recycleAsyncId(scheduler, id, delay3 = 0) {
        if (delay3 != null ? delay3 > 0 : this.delay > 0) {
            return super.recycleAsyncId(scheduler, id, delay3);
        }
        const { actions } = scheduler;
        if (id != null && actions[actions.length - 1]?.id !== id) {
            immediateProvider_js_1.immediateProvider.clearImmediate(id);
            if (scheduler._scheduled === id) {
                scheduler._scheduled = void 0;
            }
        }
        return void 0;
    }
};
exports2.AsapAction = AsapAction;

return exports2;
}
