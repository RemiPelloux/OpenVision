import { Pn, Qe, st } from "./Iwo.js";
import { Hn } from "./dom_2.js";
import { E } from "./tslib.es6.js";
import { rl } from "./ze.js";
var mWo, B$d, U$d, j$d;
export { B$d, U$d, j$d, mWo };
var __wakaru_EDy_initialized = false;
export function EDy() {
if (__wakaru_EDy_initialized) return;
__wakaru_EDy_initialized = true;
"use strict";
E(), Hn(), Qe(), mWo = class extends st {
    constructor(){
        super(), this._tasks = [], this._i = 0, this._register(Pn(()=>this.clear()));
    }
    enqueue(t) {
        this._tasks.push(t), this._start();
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
    _process(t) {
        this._idleCallback = void 0;
        let e = 0, n = 0, i = t.timeRemaining(), r = 0;
        for(; this._i < this._tasks.length;){
            if (e = Date.now(), this._tasks[this._i]() || this._i++, e = Math.max(1, Date.now() - e), n = Math.max(e, n), r = t.timeRemaining(), n * 1.5 > r) {
                i - e < -20 && console.warn(`task queue exceeded allotted deadline by ${Math.abs(Math.round(i - e))}ms`), this._start();
                return;
            }
            i = r;
        }
        this.clear();
    }
}, B$d = class extends mWo {
    constructor(t){
        super();
    }
    _requestCallback(t) {
        return rl().setTimeout(()=>t(this._createDeadline(16)));
    }
    _cancelCallback(t) {
        rl().clearTimeout(t);
    }
    _createDeadline(t) {
        const e = Date.now() + t;
        return {
            timeRemaining: ()=>Math.max(0, e - Date.now())
        };
    }
}, U$d = class extends mWo {
    constructor(t){
        super(), t?.timeout !== void 0 && (this._requestIdleCallbackOptions = {
            timeout: t.timeout
        });
    }
    _requestCallback(t) {
        return rl().requestIdleCallback(t, this._requestIdleCallbackOptions);
    }
    _cancelCallback(t) {
        rl().cancelIdleCallback(t);
    }
}, j$d = "requestIdleCallback" in rl() ? U$d : B$d;

}
