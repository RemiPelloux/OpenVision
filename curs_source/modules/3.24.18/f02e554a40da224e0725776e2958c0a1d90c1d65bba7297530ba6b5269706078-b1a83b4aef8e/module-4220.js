"use strict";
const n = require("./module-4088.js"), { ClientDestroyedError: s, ClientClosedError: i, InvalidArgumentError: o } = require("./module-8762.js"), { kDestroy: a, kClose: u, kDispatch: c, kInterceptors: l } = require("./module-5532.js"), m = Symbol("destroyed"), d = Symbol("closed"), f = Symbol("onDestroyed"), p = Symbol("onClosed"), h = Symbol("Intercepted Dispatch");
module.exports = class extends n {
    constructor(){
        super(), this[m] = !1, this[f] = null, this[d] = !1, this[p] = [];
    }
    get destroyed() {
        return this[m];
    }
    get closed() {
        return this[d];
    }
    get interceptors() {
        return this[l];
    }
    set interceptors(t) {
        if (t) for(let e = t.length - 1; e >= 0; e--){
            if ("function" != typeof this[l][e]) throw new o("interceptor must be an function");
        }
        this[l] = t;
    }
    close(t) {
        if (void 0 === t) return new Promise((t, e)=>{
            this.close((r, n)=>r ? e(r) : t(n));
        });
        if ("function" != typeof t) throw new o("invalid callback");
        if (this[m]) return void queueMicrotask(()=>t(new s, null));
        if (this[d]) return void (this[p] ? this[p].push(t) : queueMicrotask(()=>t(null, null)));
        this[d] = !0, this[p].push(t);
        const e = ()=>{
            const t = this[p];
            this[p] = null;
            for(let e = 0; e < t.length; e++)t[e](null, null);
        };
        this[u]().then(()=>this.destroy()).then(()=>{
            queueMicrotask(e);
        });
    }
    destroy(t, e) {
        if ("function" == typeof t && (e = t, t = null), void 0 === e) return new Promise((e, r)=>{
            this.destroy(t, (t, n)=>t ? r(t) : e(n));
        });
        if ("function" != typeof e) throw new o("invalid callback");
        if (this[m]) return void (this[f] ? this[f].push(e) : queueMicrotask(()=>e(null, null)));
        t || (t = new s), this[m] = !0, this[f] = this[f] || [], this[f].push(e);
        const r = ()=>{
            const t = this[f];
            this[f] = null;
            for(let e = 0; e < t.length; e++)t[e](null, null);
        };
        this[a](t).then(()=>{
            queueMicrotask(r);
        });
    }
    [h](t, e) {
        if (!this[l] || 0 === this[l].length) return this[h] = this[c], this[c](t, e);
        let r = this[c].bind(this);
        for(let t = this[l].length - 1; t >= 0; t--)r = this[l][t](r);
        return this[h] = r, r(t, e);
    }
    dispatch(t, e) {
        if (!e || "object" != typeof e) throw new o("handler must be an object");
        try {
            if (!t || "object" != typeof t) throw new o("opts must be an object.");
            if (this[m] || this[f]) throw new s;
            if (this[d]) throw new i;
            return this[h](t, e);
        } catch (t) {
            if ("function" != typeof e.onError) throw new o("invalid onError method");
            return e.onError(t), !1;
        }
    }
};
