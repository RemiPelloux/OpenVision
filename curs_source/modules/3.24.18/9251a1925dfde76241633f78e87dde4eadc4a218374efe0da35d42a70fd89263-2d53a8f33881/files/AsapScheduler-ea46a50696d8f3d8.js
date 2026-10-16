import { require_AsyncScheduler } from "./AsyncScheduler.js";
var __wakaru_require_AsapScheduler_cache;
export function require_AsapScheduler() {
if (__wakaru_require_AsapScheduler_cache) return __wakaru_require_AsapScheduler_cache;
var exports2 = {};
__wakaru_require_AsapScheduler_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.AsapScheduler = void 0;
var AsyncScheduler_js_1 = require_AsyncScheduler();
var AsapScheduler = class extends AsyncScheduler_js_1.AsyncScheduler {
    flush(action) {
        this._active = true;
        const flushId = this._scheduled;
        this._scheduled = void 0;
        const { actions } = this;
        let error3;
        action = action || actions.shift();
        do {
            if (error3 = action.execute(action.state, action.delay)) {
                break;
            }
        }while ((action = actions[0]) && action.id === flushId && actions.shift())
        this._active = false;
        if (error3) {
            while((action = actions[0]) && action.id === flushId && actions.shift()){
                action.unsubscribe();
            }
            throw error3;
        }
    }
};
exports2.AsapScheduler = AsapScheduler;

return exports2;
}
