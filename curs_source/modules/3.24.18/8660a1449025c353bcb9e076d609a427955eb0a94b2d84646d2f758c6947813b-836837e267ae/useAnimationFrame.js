import { E } from "./tslib.es6.js";
import { rRr } from "./useOnMount.js";
import { jQ } from "./useRefWithInit.js";
var Osh, Fsh, qHe, Sli, oQo, Bsh, kli, Bwe;
export { Bsh, Bwe, Fsh, Osh, Sli, kli, oQo, qHe };
var __wakaru_Hnt_initialized = false;
export function Hnt() {
if (__wakaru_Hnt_initialized) return;
__wakaru_Hnt_initialized = true;
E(), jQ(), rRr(), Osh = Object.defineProperty, Fsh = (t, e, n)=>e in t ? Osh(t, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : t[e] = n, qHe = (t, e, n)=>Fsh(t, typeof e != "symbol" ? e + "" : e, n), Sli = null, oQo = globalThis.requestAnimationFrame, Bsh = class {
    constructor(){
        qHe(this, "callbacks", []), qHe(this, "callbacksCount", 0), qHe(this, "nextId", 1), qHe(this, "startId", 1), qHe(this, "isScheduled", !1), qHe(this, "tick", (t)=>{
            this.isScheduled = !1;
            const e = this.callbacks, n = this.callbacksCount;
            if (this.callbacks = [], this.callbacksCount = 0, this.startId = this.nextId, n > 0) for(let i = 0; i < e.length; i += 1)e[i]?.(t);
        });
    }
    request(t) {
        const e = this.nextId;
        this.nextId += 1, this.callbacks.push(t), this.callbacksCount += 1;
        const n = process.env.NODE_ENV !== "production" && oQo !== requestAnimationFrame && (oQo = requestAnimationFrame, !0);
        return (!this.isScheduled || n) && (requestAnimationFrame(this.tick), this.isScheduled = !0), e;
    }
    cancel(t) {
        const e = t - this.startId;
        e < 0 || e >= this.callbacks.length || (this.callbacks[e] = null, this.callbacksCount -= 1);
    }
}, kli = new Bsh, Bwe = class c2b {
    constructor(){
        qHe(this, "currentId", Sli), qHe(this, "cancel", ()=>{
            this.currentId !== Sli && (kli.cancel(this.currentId), this.currentId = Sli);
        }), qHe(this, "disposeEffect", ()=>this.cancel);
    }
    static create() {
        return new c2b;
    }
    static request(e) {
        return kli.request(e);
    }
    static cancel(e) {
        return kli.cancel(e);
    }
    request(e) {
        this.cancel(), this.currentId = kli.request(()=>{
            this.currentId = Sli, e();
        });
    }
};

}
