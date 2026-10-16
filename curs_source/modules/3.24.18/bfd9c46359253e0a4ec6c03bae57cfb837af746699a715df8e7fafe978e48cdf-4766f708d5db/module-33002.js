"use strict";
function n(e, t) {
    return {
        symbol: e,
        defaultValue: t
    };
}
function s(e) {
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
require.d(exports, {
    cF: ()=>n,
    q6: ()=>i
});
class o {
    constructor(e, t, r, n){
        this.parent = e, this.values = r || new Map, this.name = n, this.signal = t || (e ? e.signal : (new AbortController).signal);
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
    with(e, t) {
        const r = new Map(this.values);
        return r.set(e.symbol, t), new o(this, void 0, r);
    }
    withCancel() {
        const e = s(this.signal);
        return [
            new o(this, e.signal),
            (t)=>e.abort(t)
        ];
    }
    withTimeout(e) {
        const t = s(this.signal), r = new o(this, t.signal), n = setTimeout(()=>{
            t.abort(new Error("context deadline exceeded"));
        }, e);
        return t.signal.addEventListener("abort", ()=>{
            clearTimeout(n);
        }, {
            once: !0
        }), r;
    }
    withDeadline(e) {
        const t = e.getTime() - Date.now();
        if (t <= 0) {
            const e = s(this.signal);
            return e.abort(new Error("context deadline exceeded")), new o(this, e.signal);
        }
        return this.withTimeout(t);
    }
    withTimeoutAndCancel(e) {
        const [t, r] = this.withCancel();
        return [
            t.withTimeout(e),
            r
        ];
    }
    withName(e) {
        return new o(this, void 0, void 0, e);
    }
    withDetached() {
        return new o(this, (new AbortController).signal);
    }
    getParent() {
        return this.parent;
    }
    getPath() {
        const e = [];
        let t = this;
        for(; t;)t.name && e.unshift(t.name), t = t.getParent();
        return e;
    }
}
function i() {
    return new o;
}
