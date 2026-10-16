import { E } from "./tslib.es6.js";
import { sLl } from "./useOnMount.mjs";
import { jxt } from "./useRefWithInit.mjs";
var l3i, kLl, AAf, c3i, Dct;
export { AAf, Dct, c3i, kLl, l3i };
var __wakaru_Gxt_initialized = false;
export function Gxt() {
if (__wakaru_Gxt_initialized) return;
__wakaru_Gxt_initialized = true;
"use client";
E(), jxt(), sLl(), l3i = null, kLl = globalThis.requestAnimationFrame, AAf = class {
    callbacks = [];
    callbacksCount = 0;
    nextId = 1;
    startId = 1;
    isScheduled = !1;
    tick = (t)=>{
        this.isScheduled = !1;
        const e = this.callbacks, n = this.callbacksCount;
        if (this.callbacks = [], this.callbacksCount = 0, this.startId = this.nextId, n > 0) for(let i = 0; i < e.length; i += 1)e[i]?.(t);
    };
    request(t) {
        const e = this.nextId;
        this.nextId += 1, this.callbacks.push(t), this.callbacksCount += 1;
        const n = process.env.NODE_ENV !== "production" && kLl !== requestAnimationFrame && (kLl = requestAnimationFrame, !0);
        return (!this.isScheduled || n) && (requestAnimationFrame(this.tick), this.isScheduled = !0), e;
    }
    cancel(t) {
        const e = t - this.startId;
        e < 0 || e >= this.callbacks.length || (this.callbacks[e] = null, this.callbacksCount -= 1);
    }
}, c3i = new AAf, Dct = class fMb {
    static create() {
        return new fMb;
    }
    static request(e) {
        return c3i.request(e);
    }
    static cancel(e) {
        return c3i.cancel(e);
    }
    currentId = l3i;
    request(e) {
        this.cancel(), this.currentId = c3i.request(()=>{
            this.currentId = l3i, e();
        });
    }
    cancel = ()=>{
        this.currentId !== l3i && (c3i.cancel(this.currentId), this.currentId = l3i);
    };
    disposeEffect = ()=>this.cancel;
};

}
