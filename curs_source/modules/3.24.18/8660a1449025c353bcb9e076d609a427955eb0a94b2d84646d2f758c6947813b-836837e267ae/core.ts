import { w5a } from "./ipa.js";
import { E } from "./tslib.es6.js";
var J6p;
export { J6p };
var __wakaru_C5a_initialized = false;
export function C5a() {
if (__wakaru_C5a_initialized) return;
__wakaru_C5a_initialized = true;
"use strict";
E(), J6p = class Hsn {
    constructor(e, n, i, r){
        this.parent = e, this.values = i || new Map, this.name = r, n ? this.signal = n : e ? this.signal = e.signal : this.signal = new AbortController().signal;
    }
    get canceled() {
        return this.signal.aborted;
    }
    get reason() {
        return this.signal.reason;
    }
    get(e) {
        return this.values.has(e.symbol) ? this.values.get(e.symbol) : this.parent ? this.parent.get(e) : e.defaultValue;
    }
    with(e, n) {
        const i = new Map(this.values);
        return i.set(e.symbol, n), new Hsn(this, void 0, i);
    }
    withCancel() {
        const e = w5a(this.signal);
        return [
            new Hsn(this, e.signal),
            (i)=>e.abort(i)
        ];
    }
    withTimeout(e) {
        const n = w5a(this.signal), i = new Hsn(this, n.signal), r = setTimeout(()=>{
            n.abort(new Error("context deadline exceeded"));
        }, e);
        return n.signal.addEventListener("abort", ()=>{
            clearTimeout(r);
        }, {
            once: !0
        }), i;
    }
    withDeadline(e) {
        const n = e.getTime() - Date.now();
        if (n <= 0) {
            const i = w5a(this.signal);
            return i.abort(new Error("context deadline exceeded")), new Hsn(this, i.signal);
        }
        return this.withTimeout(n);
    }
    withTimeoutAndCancel(e) {
        const [n, i] = this.withCancel();
        return [
            n.withTimeout(e),
            i
        ];
    }
    withName(e) {
        return new Hsn(this, void 0, void 0, e);
    }
    withDetached() {
        return new Hsn(this, new AbortController().signal);
    }
    getParent() {
        return this.parent;
    }
    getPath() {
        const e = [];
        let n = this;
        for(; n;)n.name && e.unshift(n.name), n = n.getParent();
        return e;
    }
};

}
