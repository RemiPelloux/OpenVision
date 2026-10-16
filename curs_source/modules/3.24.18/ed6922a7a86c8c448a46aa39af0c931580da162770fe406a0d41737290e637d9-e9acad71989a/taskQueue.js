import { Se, rn, we } from "./HVr.js";
import { en } from "./dom_2.js";
import { sa } from "./qIc.js";
import { x } from "./tslib.es6.js";
var uts, C6c, T6c, E6c;
export { C6c, E6c, T6c, uts };
var __wakaru_P_g_initialized = false;
export function P_g() {
if (__wakaru_P_g_initialized) return;
__wakaru_P_g_initialized = true;
"use strict";
x(), en(), Se(), uts = class extends we {
    constructor(){
        super(), this._tasks = [], this._i = 0, this._register(rn(()=>this.clear()));
    }
    enqueue(e) {
        this._tasks.push(e), this._start();
    }
    flush() {
        for(; this._i < this._tasks.length;)this._tasks[this._i]() || this._i++;
        this.clear();
    }
    clear() {
        this._idleCallback && (this._cancelCallback(this._idleCallback), this._idleCallback = void 0), this._i = 0, this._tasks.length = 0;
    }
    _start() {
        this._idleCallback || (this._idleCallback = this._requestCallback(this._process.bind(this)));
    }
    _process(e) {
        this._idleCallback = void 0;
        let t = 0, n = 0, i = e.timeRemaining(), r = 0;
        for(; this._i < this._tasks.length;){
            if (t = Date.now(), this._tasks[this._i]() || this._i++, t = Math.max(1, Date.now() - t), n = Math.max(t, n), r = e.timeRemaining(), n * 1.5 > r) {
                i - t < -20 && console.warn(`task queue exceeded allotted deadline by ${Math.abs(Math.round(i - t))}ms`), this._start();
                return;
            }
            i = r;
        }
        this.clear();
    }
}, C6c = class extends uts {
    constructor(e){
        super();
    }
    _requestCallback(e) {
        return sa().setTimeout(()=>e(this._createDeadline(16)));
    }
    _cancelCallback(e) {
        sa().clearTimeout(e);
    }
    _createDeadline(e) {
        const t = Date.now() + e;
        return {
            timeRemaining: ()=>Math.max(0, t - Date.now())
        };
    }
}, T6c = class extends uts {
    constructor(e){
        super(), e?.timeout !== void 0 && (this._requestIdleCallbackOptions = {
            timeout: e.timeout
        });
    }
    _requestCallback(e) {
        return sa().requestIdleCallback(e, this._requestIdleCallbackOptions);
    }
    _cancelCallback(e) {
        sa().cancelIdleCallback(e);
    }
}, E6c = "requestIdleCallback" in sa() ? T6c : C6c;

}
