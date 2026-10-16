import { E } from "./tslib.es6.js";
var prf;
export { prf };
var __wakaru_FBk_initialized = false;
export function FBk() {
if (__wakaru_FBk_initialized) return;
__wakaru_FBk_initialized = true;
"use strict";
E(), prf = class {
    constructor(t, e, n, i){
        this.clock = t, this.ms = e, this.workPending = n, this.hangUp = i;
    }
    cancel;
    deadlineMs = 0;
    leftMs;
    disposed = !1;
    restart() {
        if (this.leftMs !== void 0) {
            this.leftMs = this.ms;
            return;
        }
        this.arm(this.ms);
    }
    pause() {
        this.leftMs !== void 0 || this.cancel === void 0 || (this.leftMs = Math.max(0, this.deadlineMs - this.clock.now()), this.cancel(), this.cancel = void 0);
    }
    resume() {
        const t = this.leftMs;
        t !== void 0 && (this.leftMs = void 0, this.arm(t));
    }
    dispose() {
        this.disposed = !0, this.cancel?.(), this.cancel = void 0;
    }
    arm(t) {
        this.cancel?.(), this.cancel = void 0, !(this.disposed || this.ms <= 0) && (this.deadlineMs = this.clock.now() + t, this.cancel = this.clock.setTimer(()=>{
            this.cancel = void 0, this.workPending() ? this.restart() : this.hangUp();
        }, t));
    }
};

}
