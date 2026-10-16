import { x } from "./tslib.es6.js";
var ZUh;
export { ZUh };
var __wakaru_km__initialized = false;
export function km_() {
if (__wakaru_km__initialized) return;
__wakaru_km__initialized = true;
"use strict";
x(), ZUh = class {
    constructor(e, t, n, i){
        this.clock = e, this.ms = t, this.workPending = n, this.hangUp = i;
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
        const e = this.leftMs;
        e !== void 0 && (this.leftMs = void 0, this.arm(e));
    }
    dispose() {
        this.disposed = !0, this.cancel?.(), this.cancel = void 0;
    }
    arm(e) {
        this.cancel?.(), this.cancel = void 0, !(this.disposed || this.ms <= 0) && (this.deadlineMs = this.clock.now() + e, this.cancel = this.clock.setTimer(()=>{
            this.cancel = void 0, this.workPending() ? this.restart() : this.hangUp();
        }, e));
    }
};

}
