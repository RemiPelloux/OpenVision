import { require_Observable } from "../Observable.js";
var __wakaru_require_Action_cache;
export function require_Action() {
if (__wakaru_require_Action_cache) return __wakaru_require_Action_cache;
var exports2 = {};
__wakaru_require_Action_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.Action = void 0;
var Observable_js_1 = require_Observable();
var Action = class extends Observable_js_1.Subscription {
    constructor(scheduler, work){
        super();
    }
    schedule(state, delay3 = 0) {
        return this;
    }
};
exports2.Action = Action;

return exports2;
}
