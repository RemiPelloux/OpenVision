import { ZKs } from "./De_3.js";
import { x } from "./tslib.es6.js";
var ANu;
export { ANu };
var __wakaru_QKs_initialized = false;
export function QKs() {
if (__wakaru_QKs_initialized) return;
__wakaru_QKs_initialized = true;
"use strict";
x(), ANu = class FAt {
    constructor(t, n, i, r){
        this.parent = t, this.values = i || new Map, this.name = r, n ? this.signal = n : t ? this.signal = t.signal : this.signal = new AbortController().signal;
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
    with(t, n) {
        const i = new Map(this.values);
        return i.set(t.symbol, n), new FAt(this, void 0, i);
    }
    withCancel() {
        const t = ZKs(this.signal);
        return [
            new FAt(this, t.signal),
            (i)=>t.abort(i)
        ];
    }
    withTimeout(t) {
        const n = ZKs(this.signal), i = new FAt(this, n.signal), r = setTimeout(()=>{
            n.abort(new Error("context deadline exceeded"));
        }, t);
        return n.signal.addEventListener("abort", ()=>{
            clearTimeout(r);
        }, {
            once: !0
        }), i;
    }
    withDeadline(t) {
        const n = t.getTime() - Date.now();
        if (n <= 0) {
            const i = ZKs(this.signal);
            return i.abort(new Error("context deadline exceeded")), new FAt(this, i.signal);
        }
        return this.withTimeout(n);
    }
    withTimeoutAndCancel(t) {
        const [n, i] = this.withCancel();
        return [
            n.withTimeout(t),
            i
        ];
    }
    withName(t) {
        return new FAt(this, void 0, void 0, t);
    }
    withDetached() {
        return new FAt(this, new AbortController().signal);
    }
    getParent() {
        return this.parent;
    }
    getPath() {
        const t = [];
        let n = this;
        for(; n;)n.name && t.unshift(n.name), n = n.getParent();
        return t;
    }
};

}
