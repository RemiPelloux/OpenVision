import { x } from "./tslib.es6.js";
import { i0i } from "./useOnMount.js";
import { xW } from "./useRefWithInit.js";
var Jnl, eil, FRe, oSn, cds, til, aSn, eue;
export { FRe, Jnl, aSn, cds, eil, eue, oSn, til };
var __wakaru_aYe_initialized = false;
export function aYe() {
if (__wakaru_aYe_initialized) return;
__wakaru_aYe_initialized = true;
x(), xW(), i0i(), Jnl = Object.defineProperty, eil = (e, t, n)=>t in e ? Jnl(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : e[t] = n, FRe = (e, t, n)=>eil(e, typeof t != "symbol" ? t + "" : t, n), oSn = null, cds = globalThis.requestAnimationFrame, til = class {
    constructor(){
        FRe(this, "callbacks", []), FRe(this, "callbacksCount", 0), FRe(this, "nextId", 1), FRe(this, "startId", 1), FRe(this, "isScheduled", !1), FRe(this, "tick", (e)=>{
            this.isScheduled = !1;
            const t = this.callbacks, n = this.callbacksCount;
            if (this.callbacks = [], this.callbacksCount = 0, this.startId = this.nextId, n > 0) for(let i = 0; i < t.length; i += 1)t[i]?.(e);
        });
    }
    request(e) {
        const t = this.nextId;
        this.nextId += 1, this.callbacks.push(e), this.callbacksCount += 1;
        const n = process.env.NODE_ENV !== "production" && cds !== requestAnimationFrame && (cds = requestAnimationFrame, !0);
        return (!this.isScheduled || n) && (requestAnimationFrame(this.tick), this.isScheduled = !0), t;
    }
    cancel(e) {
        const t = e - this.startId;
        t < 0 || t >= this.callbacks.length || (this.callbacks[t] = null, this.callbacksCount -= 1);
    }
}, aSn = new til, eue = class Iwm {
    constructor(){
        FRe(this, "currentId", oSn), FRe(this, "cancel", ()=>{
            this.currentId !== oSn && (aSn.cancel(this.currentId), this.currentId = oSn);
        }), FRe(this, "disposeEffect", ()=>this.cancel);
    }
    static create() {
        return new Iwm;
    }
    static request(t) {
        return aSn.request(t);
    }
    static cancel(t) {
        return aSn.cancel(t);
    }
    request(t) {
        this.cancel(), this.currentId = aSn.request(()=>{
            this.currentId = oSn, t();
        });
    }
};

}
