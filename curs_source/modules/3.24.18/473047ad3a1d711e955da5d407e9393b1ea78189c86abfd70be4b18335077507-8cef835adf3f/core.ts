import { T } from "./tslib.es6.js";
function nA(e) {
    const n = new AbortController;
    if (e.aborted) return n.abort(e.reason), n;
    const a = ()=>n.abort(e.reason);
    return e.addEventListener("abort", a, {
        once: !0
    }), {
        signal: n.signal,
        abort (r) {
            e.removeEventListener("abort", a), n.abort(r);
        }
    };
}
var A2;
export { A2, nA };
var __wakaru_aA_initialized = false;
export function aA() {
if (__wakaru_aA_initialized) return;
__wakaru_aA_initialized = true;
"use strict";
T(), A2 = class pm {
    constructor(n, a, r, s){
        this.parent = n, this.values = r || new Map, this.name = s, a ? this.signal = a : n ? this.signal = n.signal : this.signal = new AbortController().signal;
    }
    get canceled() {
        return this.signal.aborted;
    }
    get reason() {
        return this.signal.reason;
    }
    get(n) {
        return this.values.has(n.symbol) ? this.values.get(n.symbol) : this.parent ? this.parent.get(n) : n.defaultValue;
    }
    with(n, a) {
        const r = new Map(this.values);
        return r.set(n.symbol, a), new pm(this, void 0, r);
    }
    withCancel() {
        const n = nA(this.signal);
        return [
            new pm(this, n.signal),
            (r)=>n.abort(r)
        ];
    }
    withTimeout(n) {
        const a = nA(this.signal), r = new pm(this, a.signal), s = setTimeout(()=>{
            a.abort(new Error("context deadline exceeded"));
        }, n);
        return a.signal.addEventListener("abort", ()=>{
            clearTimeout(s);
        }, {
            once: !0
        }), r;
    }
    withDeadline(n) {
        const a = n.getTime() - Date.now();
        if (a <= 0) {
            const r = nA(this.signal);
            return r.abort(new Error("context deadline exceeded")), new pm(this, r.signal);
        }
        return this.withTimeout(a);
    }
    withTimeoutAndCancel(n) {
        const [a, r] = this.withCancel();
        return [
            a.withTimeout(n),
            r
        ];
    }
    withName(n) {
        return new pm(this, void 0, void 0, n);
    }
    withDetached() {
        return new pm(this, new AbortController().signal);
    }
    getParent() {
        return this.parent;
    }
    getPath() {
        const n = [];
        let a = this;
        for(; a;)a.name && n.unshift(a.name), a = a.getParent();
        return n;
    }
};

}
