import { h } from "./tslib.es6.js";
function pc(e) {
    const t = new AbortController;
    if (e.aborted) return t.abort(e.reason), t;
    const r = ()=>t.abort(e.reason);
    return e.addEventListener("abort", r, {
        once: !0
    }), {
        signal: t.signal,
        abort (n) {
            e.removeEventListener("abort", r), t.abort(n);
        }
    };
}
var Op;
export { Op, pc };
var __wakaru_Cp_initialized = false;
export function Cp() {
if (__wakaru_Cp_initialized) return;
__wakaru_Cp_initialized = true;
"use strict";
h(), Op = class Lr {
    constructor(t, r, n, s){
        this.parent = t, this.values = n || new Map, this.name = s, r ? this.signal = r : t ? this.signal = t.signal : this.signal = new AbortController().signal;
    }
    get canceled() {
        return this.signal.aborted;
    }
    get reason() {
        return this.signal.reason;
    }
    get(t) {
        return this.values.has(t.symbol) ? this.values.get(t.symbol) : this.parent ? this.parent.get(t) : t.defaultValue;
    }
    with(t, r) {
        const n = new Map(this.values);
        return n.set(t.symbol, r), new Lr(this, void 0, n);
    }
    withCancel() {
        const t = pc(this.signal);
        return [
            new Lr(this, t.signal),
            (n)=>t.abort(n)
        ];
    }
    withTimeout(t) {
        const r = pc(this.signal), n = new Lr(this, r.signal), s = setTimeout(()=>{
            r.abort(new Error("context deadline exceeded"));
        }, t);
        return r.signal.addEventListener("abort", ()=>{
            clearTimeout(s);
        }, {
            once: !0
        }), n;
    }
    withDeadline(t) {
        const r = t.getTime() - Date.now();
        if (r <= 0) {
            const n = pc(this.signal);
            return n.abort(new Error("context deadline exceeded")), new Lr(this, n.signal);
        }
        return this.withTimeout(r);
    }
    withTimeoutAndCancel(t) {
        const [r, n] = this.withCancel();
        return [
            r.withTimeout(t),
            n
        ];
    }
    withName(t) {
        return new Lr(this, void 0, void 0, t);
    }
    withDetached() {
        return new Lr(this, new AbortController().signal);
    }
    getParent() {
        return this.parent;
    }
    getPath() {
        const t = [];
        let r = this;
        for(; r;)r.name && t.unshift(r.name), r = r.getParent();
        return t;
    }
};

}
